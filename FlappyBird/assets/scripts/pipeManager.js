// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const PipeGroup = require("pipeGroup");
cc.Class({
    extends: cc.Component,

    properties: {
        pipePrefab :  cc.Prefab,
        isStarted : false,
        pipeMoveSpeed : -300,
        pipeSpacing : 400,

    },
    onLoad(){
        this.pipeList = [];
        this.isStarted = false;
        //this.pipePool = new cc.NodePool();
    },
    startSpawn(){
        this._spawnPipe();
        let spawnInterval = Math.abs(this.pipeSpacing / this.pipeMoveSpeed);
        this.schedule(this._spawnPipe,spawnInterval);
        this.isStarted =  true;
    },
    getNext(){
        return this.pipeList.shift();
    },
    _spawnPipe(){
        let pipeGroup = null;
        pipeGroup = cc.instantiate(this.pipePrefab).getComponent(PipeGroup);
        this.node.addChild(pipeGroup.node);
        pipeGroup.node.active = true;
        pipeGroup.init(this);
        this.pipeList.push(pipeGroup);
    },
    recyclePipe(pipe){
        pipe.node.removeFromParent();
        pipe.node.active = false;
        //this.pipePool.put(pipe.node);
    },
    reset(){
        this.unschedule(this._spawnPipe);
        this.pipeList = [];
        this.isStarted = false;
    }
    // update (dt) {},
});
