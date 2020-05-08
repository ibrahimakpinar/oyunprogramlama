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
        pipePrefab :  cc.Prefab
    },

    _spawnPipe(){
        let pipeGroup = null;
        pipeGroup = cc.instantiate(this.pipePrefab).getComponent(PipeGroup);
        pipeGroup.init(this);
    }

    // update (dt) {},
});
