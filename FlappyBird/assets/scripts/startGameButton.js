// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        swooshingAudio:{
            default: null,
            url : cc.AudioClip
        },
        maskedLayer: {
            default : null,
            type : cc.Node
        }        
    },

    // LIFE-CYCLE CALLBACKS:

    startGame(){
        cc.audioEngine.playEffect(this.swooshingAudio);

        this.maskedLayer.active = true;
        this.maskedLayer.opacity = 122;
        this.maskedLayer.color = cc.Color.BLACK;

        var seq = cc.sequence(
            cc.fadeIn(0.2),cc.callFunc(()=>{
                cc.director.loadScene('game');
            },this)
        );

        this.maskedLayer.runAction(seq);
    }
});
