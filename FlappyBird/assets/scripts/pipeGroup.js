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
        let visibleSize = cc.winSize;
        let screenLeft = -visibleSize.width / 2;
        let screenRight = visibleSize.width / 2;
        this.node.x = screenRight + 300;
        this.recycleX = screenLeft  - Math.max(this.topPipe.width,this.bottomPipe.width);
    },
    _initPositionY(){
        let visibleSize = cc.winSize;
        let topPipeMaxY = visibleSize.height/2 - this.topPipeMinHeight;
        let bottomPipeMinY = cc.find("Canvas/ground").y + this.bottomPipeMinHeight;
        let spacing = this.spacingMinValue + Math.random() * (this.spacingMaxValue - this.spacingMinValue);//300-250
        this.topPipe.y = topPipeMaxY - Math.random() * (topPipeMaxY-bottomPipeMinY-spacing);
        this.bottomPipe.y = this.topPipe.y - spacing;
    },

    update (dt) {
        if(!this.pipeManager.isStarted){
            return;
        }

        this.node.x += this.pipeManager.pipeMoveSpeed * dt;

        if(this.node.x < this.recycleX){
            this.pipeManager.recyclePipe(this);
        }
    },
});
