// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var Bird = require('bird')
cc.Class({
    extends: cc.Component,

    properties: {
      bird : Bird,
      readyMenu : {
          default : null,
          type:cc.Node
      },
      maskLayer: {
        default : null,
        type : cc.Node
      }
    },
    // LIFE-CYCLE CALLBACKS:
    onLoad () {
        this._enableInput(true);
        this._registerInput();
        this.bird.init();
        this._revealScene();
        //Score

    },

    start () {

    },

    _registerInput(){
        // device
        cc.eventManager.addListener({
            event : cc.EventListener.KEYBOARD,
            onKeyPressed : function(keyCode,event){
                this._startGameOrJumpBird();
            }.bind(this)
        },this.node);

        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: function (touch, event) {
                this._startGameOrJumpBird();
                return true;
            }.bind(this)
         },this.node);
    },

    _enableInput(enable){
        if(enable){
            cc.eventManager.resumeTarget(this.node);
        }else{
            cc.eventManager.pauseTarget(this.node);
        }
        
    },

    _startGameOrJumpBird(){
        if(this.bird.state  === Bird.StateEnum.Ready){
            this._startGame();
        }
        else{
            this.bird.rise();
        }
    },

    _startGame(){
        this.bird.state = Bird.StateEnum.Rise;//1
        this._hideReadyMenu();
        this.bird.startFly();
        //fly bird
        //pipe spawn
    },
    _hideReadyMenu(){
        this.readyMenu.runAction(
            cc.fadeOut(0.5),
            cc.callFunc(()=>{
                this.readyMenu.active = false;
            },this)
        );
    },

    _revealScene(){
        this.maskLayer.active = true;
        this.maskLayer.color = cc.Color.BLACK;
        this.maskLayer.runAction(cc.fadeOut(0.3));
    },
    update (dt) {
        
    },
});