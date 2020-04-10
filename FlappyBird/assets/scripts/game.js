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
      }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this._registerInput();
        //Score

    },

    start () {

    },

    _registerInput(){
        
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

    _startGameOrJumpBird(){
        if(this.bird.state  === Bird.StateEnum.Ready){
            this._startGame();
        }
        else{
            this.bird._rise();
        }
    },
    _startGame(){
        this.bird.state = Bird.StateEnum.Rise;//1
    }


    // update (dt) {},
});
