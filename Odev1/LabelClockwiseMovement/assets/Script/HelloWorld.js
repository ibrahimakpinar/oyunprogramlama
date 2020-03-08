cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        labelCocos: {
            default: null,
            type: cc.Label
        },
        jumpHeight: 10,
        // main character's jump duration
        jumpDuration: 1,
        // maximal movement speed
        maxMoveSpeed: 10,
        // acceleration
        accel: 0,
 
        up : false,
        down : false,
        left : false,
        right : false,
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!'
        
    },
    start :function(){
        var label = this.node.getChildByName('labelCocos').getComponent(cc.Label);
        
    },
    // use this for initialization
    onLoad: function () {
        this.label.string = this.text;

        this.leftUp = cc.v2(-cc.winSize.width/2 + this.labelCocos.node.width/2,cc.winSize.height/2-this.labelCocos.node.height/2);
        this.rightUp = cc.v2(cc.winSize.width/2 - this.labelCocos.node.width/2,cc.winSize.height/2-this.labelCocos.node.height/2);
        this.rigthDown = cc.v2(cc.winSize.width/2 - this.labelCocos.node.width/2,-cc.winSize.height/2+this.labelCocos.node.height/2);
        this.leftDown = cc.v2(-cc.winSize.width/2 + this.labelCocos.node.width/2,-cc.winSize.height/2+this.labelCocos.node.height/2);
        
        this.initLabelStartPosition();

        this.node.on('touchend', function (event) {
             var pos = this.node.convertToNodeSpaceAR(event.touch.getLocation())   
        },this);
    },
    // called every frame
    update: function (dt) {
      
        this.getLabelDirection();
        if(this.up){
            this.labelCocos.node.y += 5;
        }
        if (this.right)
        {
            this.labelCocos.node.x += 5;
        }

        if(this.down){
            this.labelCocos.node.y -= 5;
        }
        
        if(this.left){
            this.labelCocos.node.x -= 5;
        }
    },
    initLabelStartPosition: function(){
        var labelWidth = this.labelCocos.node.width/2;
        var labelHeigth = this.labelCocos.node.height/2;

        //sol alt köşeden başla
        this.labelCocos.node.setPosition(  this.leftDown.x,  this.leftDown.y,1000);
    },
    getLabelDirection : function()
    {
        var pos = cc.v2(this.labelCocos.node.x,this.labelCocos.node.y);
        var dis = this.leftDown.sub(pos);
        
        if(pos.x <= this.leftDown.x && pos.y < this.leftUp.y){
            
            this.up = true;
                this.down  = this.left = this.right = false;
                return;
         }
         else if(pos.x <= this.rightUp.x && pos.y >= this.leftUp.y){
            this.right = true;
            this.down  = this.left = this.up = false;
            return;
         }
         else if(pos.x >= this.rigthDown.x && pos.y >= this.rigthDown.y){
            this.down = true;
            this.up  = this.left = this.right = false;
            return;
         }
         else if(pos.x >= this.leftDown.x && pos.y <= this.leftDown.y)
         {
            this.left = true;
            this.down  = this.up = this.right = false;
            return;
         }
    }
});
