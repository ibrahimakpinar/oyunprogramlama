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
       riseAudio :{
           default : null,
           url : cc.AudioClip
       }
    },

    // LIFE-CYCLE CALLBACKS:
    init(){
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
    },
    _updatePosition(dt){
        var flying = this.state === StateEnum.Rise || this.state === StateEnum.FreeFall || this.state === Drop;
        if(flying){
            this.node.y += dt * this.currentSpeed;
            this.currentSpeed -= dt *this.gravity;
            cc.log(this.node.y);
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

    _runFallAction(duration){
        this.node.stopAllActions();
        let fallAction = cc.rotateTo(duration,90).easing(cc.easeCubicActionIn());
        this.node.runAction(fallAction);

    },
    startFly(){
        this.anim.stop("birdFlapping");
        this.rise();
    },
});