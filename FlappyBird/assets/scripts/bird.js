// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
const StateEnum = cc.Enum({
    Ready : -1,
    Rise : -1,
    FreeFall : -1,
    Drop : -1,
    Dead : -1
});

cc.Class({
    statics :{
        StateEnum : StateEnum
    },
    extends: cc.Component,

    properties: {
       gravity : 1000,
       initRiseSpeed : 800,
       ground : {
           default : null,
           type : cc.Node
       },
       riseAudio :{
           default : null,
           url : cc.AudioClip
       },
       hitAudio :{
           default : null,
           url: cc.AudioClip
       },
       dropAudio :{
        default : null,
        url: cc.AudioClip
       },
    },

    // LIFE-CYCLE CALLBACKS:
    init(game){
        this.game = game;
        this.anim = this.getComponent(cc.Animation);
        this.anim.playAdditive("birdFlapping");
        this.currentSpeed = 0;
    },    
    onLoad () {
        this.state = StateEnum.Ready//0;
    },

    start () {
        
    },
    update (dt) {
  
        if(this.state === StateEnum.Ready || this.state === StateEnum.Dead){
            return;
        }
        this._updatePosition(dt);
        this._updateState(dt);
        this._detectCollision();
        this._fixBirdFinalPosition();

    },
    _updatePosition(dt){
        var flying = this.state === StateEnum.Rise || this.state === StateEnum.FreeFall || this.state === StateEnum.Drop;
        if(flying){
            this.node.y += dt * this.currentSpeed;
            this.currentSpeed -= dt *this.gravity;
    
        }
    },
    _fixBirdFinalPosition(){
      if(this._detectCollisionWithBird(this.ground)){
        this.node.y = this.ground.y + this.node.width/2;
      }
    },
    _updateState(dt){

        switch (this.state) {
            case StateEnum.Rise:
                if(this.currentSpeed < 0){
                    this.state = StateEnum.FreeFall;
                    this._runFallAction(0.5);
                }
                break;
        
            default:
                break;
        }


    },
    _getNextPipe(){
        this.nextPipe = this.game.pipeManager.getNext();
    },
    _detectCollision(){
        if(!this.nextPipe){
            return;
        }
        if(this.state === StateEnum.Ready || this.state === StateEnum.Dead || this.state === StateEnum.Drop){
            return;
        }

        let collideWithPipe = false;

        if(this._detectCollisionWithBird(this.nextPipe.topPipe)){
            collideWithPipe = true;
        }

        
        if(this._detectCollisionWithBird(this.nextPipe.bottomPipe)){
            collideWithPipe = true;
        }

        let collideWithGround = false;

        if(this._detectCollisionWithBird(this.ground)){
            collideWithGround = true;
        }

        if(collideWithPipe || collideWithGround){
            cc.audioEngine.playEffect(this.hitAudio);
            if(collideWithGround){
                this.state = StateEnum.Dead;
            }else{
                this.state = StateEnum.Drop;
                this._runDropAction();
                this.scheduleOnce(()=>{
                    cc.audioEngine.playEffect(this.dropAudio);
                },0.3);
            }

            this.anim.stop();
            this.game.gameOver();
        }else{
            let birdLeft = this.node.x;
            let pipeRight = this.nextPipe.node.x + this.nextPipe.topPipe.width;
            let crossPipe = birdLeft > pipeRight;
            if(crossPipe){
                this.game.gainScore();
                this._getNextPipe();
            }
        }

    },

    _detectCollisionWithBird(otherNode){
        return this.node.getBoundingBoxToWorld().intersects(otherNode.getBoundingBoxToWorld());
    },

    rise(){
        this.state = StateEnum.Rise;
        //this.state = StateEnum.Ready;
        cc.audioEngine.playEffect(this.riseAudio);
        this._runRiseAction();    
        this.currentSpeed = this.initRiseSpeed;

        //audio
    },
    _runRiseAction(){
        this.node.stopAllActions();
        let jumpAction = cc.rotateTo(0.3,-30).easing(cc.easeCubicActionOut());
        this.node.runAction(jumpAction);

    },

    _runFallAction(duration = 0.6){
        this.node.stopAllActions();
        let fallAction = cc.rotateTo(duration,90).easing(cc.easeCubicActionIn());
        this.node.runAction(fallAction);

    },
    _runDropAction(){
        if(this.currentSpeed > 0){
            this.currentSpeed = 0;
        }

        this._runFallAction(0.4);
    },
    startFly(){
        this._getNextPipe();
        this.anim.stop("birdFlapping");
        this.rise();
    },
});