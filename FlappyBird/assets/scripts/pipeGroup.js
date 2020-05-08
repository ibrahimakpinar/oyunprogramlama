// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        topPipeMinHeight : 100,
        bottomPipeMinHeight : 100,
        spacingMinValue : 250,
        spacingMaxValue : 300,
        topPipe : cc.Node,
        bottomPipe : cc.Node
        
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    init(pipeManager){
        this.pipeManager = pipeManager;
        this._initPositionX();
        this._initPositionY();
    },
    _initPositionX(){
        //random x 
    },
    _initPositionY(){
        // random y
    },

    start () {

    },

    // update (dt) {},
});
