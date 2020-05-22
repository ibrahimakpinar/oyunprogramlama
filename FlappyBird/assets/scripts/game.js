// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var Bird = require('bird')
var PipeManager = require('pipeManager');
var Scroll = require("scroll");

cc.Class({
    extends: cc.Component,

    properties: {
      bird : Bird,
      pipeManager : PipeManager,
      ground : {
          default : null,
          type : cc.Node  
      },
      readyMenu : {
          default : null,
          type:cc.Node
      },
      maskLayer: {
        default : null,
        type : cc.Node
      },
      scroeLabel  : cc.Label,

      goldScore : 30,
      silverScore : 1,
      gameOverMenu : {
          default :  null,
          type : cc.Node
      },
      swooshinAudio:{
          default : null,
          type : cc.AudioClip
      },
      scoreAuido :{
        default : null,
        type : cc.AudioClip
        },
    },
    // LIFE-CYCLE CALLBACKS:
    onLoad () {
        this._enableInput(true);
        this._registerInput();
        this.bird.init(this);
        this._revealScene();
        this.score = 0;

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
        this.pipeManager.startSpawn();
        this.bird.startFly();
        
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
    _blinkOnce(){
        this.maskLayer.color = cc.Color.WHITE;
        this.maskLayer.runAction(
            cc.sequence(
                cc.fadeTo(0.1,200),
                cc.fadeOut(0.1)
            )
        );
    },
    _showGameOverMenu(){
        this.scroeLabel.node.runAction(
            cc.sequence(
                cc.fadeOut(0.3),
                cc.callFunc(()=>{
                    this.scroeLabel.active = false;
                },this)
            )
        );

        let gameOverNode = this.gameOverMenu.getChildByName("gameoverLabel");
        let resultBoardNode = this.gameOverMenu.getChildByName("resultBoard");
        let startButtonNode = this.gameOverMenu.getChildByName("startButton");
        
        let currentScoreNode = resultBoardNode.getChildByName("score");
        let bestScoreNode = resultBoardNode.getChildByName("bestScore");
        let medalNode = resultBoardNode.getChildByName("medal");

        const KEY_BEST_SCORE = "bestScore";
        let bestScore = cc.sys.localStorage.getItem(KEY_BEST_SCORE);

        if(bestScore === "null" || this.score > bestScore){
            bestScore = this.score;
        }

        cc.sys.localStorage.setItem(KEY_BEST_SCORE,bestScore);

        currentScoreNode.getComponent(cc.Label).string = this.score;
        bestScoreNode.getComponent(cc.Label).string = bestScore;

        let showMedal = (err,atlas) => {
            let spriteFrame;
            if(this.score >= this.goldScore){
                spriteFrame =  atlas.getSpriteFrame('medal_gold');
            }
            else if(this.score >= this.silverScore){
                spriteFrame =  atlas.getSpriteFrame('medal_silver');
                
            }

            medalNode.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        }

       if(this.score >= this.silverScore){
            cc.loader.loadRes("atlas/res_bundle",cc.SpriteAtlas,showMedal);
        }else{
            showMedal();
        }


        var showNode = (node, action,callback) =>{
            cc.log("shownode");
            startButtonNode.active = true;
            cc.audioEngine.playEffect(this.swooshinAudio);
            node.runAction(
                cc.sequence(
                    action,
                    cc.callFunc(()=>{
                        if(callback){
                            callback();
                        }
                    },this)
                )
        )};

        this.gameOverMenu.active = true;

        let showNodeFunc = ()=> showNode(
            gameOverNode,
            cc.spawn(
                cc.fadeIn(0.2),
                cc.sequence(
                    cc.moveBy(0.2,cc.v2(0,10)),
                    cc.moveBy(0.5,cc.v2(0.-20))
                )
            ),
            () => showNode(
                resultBoardNode,
                cc.moveTo(0.5,cc.v2(resultBoardNode.x,-250)).easing(cc.easeCubicActionOut()),
                ()=> showNode(
                    startButtonNode,
                    cc.fadeIn(0.5)
                )
            )
        );
        
        this.scheduleOnce(showNodeFunc,0.55);

    },
    gameOver(){
        this.pipeManager.reset();
        this.ground.getComponent(Scroll).stopScroll();
        this._enableInput(false);
        this._blinkOnce();
        this._showGameOverMenu();
    },
    gainScore(){
        this.score++;
        this.scroeLabel.string = this.score;
        cc.audioEngine.playEffect(this.scoreAuido);

    },
    update (dt) {
        
    },
    restart(){
        cc.audioEngine.playEffect(this.swooshingAudio);

       
        
        this.maskLayer.color = cc.Color.BLACK;
        this.maskLayer.runAction(
            cc.sequence(
                cc.fadeIn(0.3),
                cc.callFunc(()=>{
                    cc.director.loadScene('game');
                },this)
            )
        );
    }
});