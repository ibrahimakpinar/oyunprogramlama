
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '47381o5LF9Me6kf4ahdlynz', 'Game');
// scripts/Game.js

"use strict";

// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    starPrefab: {
      "default": null,
      type: cc.Prefab
    },
    // the random scale of disappearing time for stars
    maxStarDuration: 0,
    minStarDuration: 0,
    // ground node for confirming the height of the generated star's position
    ground: {
      "default": null,
      type: cc.Node
    },
    // player node for obtaining the jump height of the main character and controlling the movement switch of the main character
    player: {
      "default": null,
      type: cc.Node
    },
    scoreDisplay: {
      "default": null,
      type: cc.Label
    }
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  onLoad: function onLoad() {
    this.timer = 0;
    this.starDuration = 0;
    this.score = 0; // obtain the anchor point of ground level on the y axis

    this.groundY = this.ground.y + this.ground.height / 2; // this.ground.top may also work
    // generate a new star

    this.spawnNewStar();
  },
  spawnNewStar: function spawnNewStar() {
    // generate a new node in the scene with a preset template
    var newStar = cc.instantiate(this.starPrefab); // put the newly added node under the Canvas node

    this.node.addChild(newStar); // set up a random position for the star

    newStar.setPosition(this.getNewStarPosition()); //Bind this 

    newStar.getComponent('Star').game = this; // reset timer, randomly choose a value according the scale of star duration

    this.starDuration = this.minStarDuration + Math.random() * (this.maxStarDuration - this.minStarDuration);
    this.timer = 0;
  },
  getNewStarPosition: function getNewStarPosition() {
    var randX = 0; // According to the position of the ground level and the main character's jump height, randomly obtain an anchor point of the star on the y axis

    var randY = this.groundY + Math.random() * this.player.getComponent('Player').jumpHeight + 50; // according to the width of the screen, randomly obtain an anchor point of star on the x axis

    var maxX = this.node.width / 2;
    randX = (Math.random() - 0.5) * 2 * maxX; // return to the anchor point of the star

    return cc.v2(randX, randY);
  },
  gainScore: function gainScore() {
    this.score += 1; //Return if null

    if (this.scoreDisplay === null) return;
    this.scoreDisplay.string = "Score : " + this.score;
  },
  update: function update(dt) {
    if (this.timer > this.starDuration) {
      this.gameOver();
      return;
    }

    this.timer += dt;
  },
  gameOver: function gameOver() {
    this.player.stopAllActions(); //stop the jumping action of the player node

    cc.director.loadScene('game');
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFyUHJlZmFiIiwidHlwZSIsIlByZWZhYiIsIm1heFN0YXJEdXJhdGlvbiIsIm1pblN0YXJEdXJhdGlvbiIsImdyb3VuZCIsIk5vZGUiLCJwbGF5ZXIiLCJzY29yZURpc3BsYXkiLCJMYWJlbCIsInN0YXJ0Iiwib25Mb2FkIiwidGltZXIiLCJzdGFyRHVyYXRpb24iLCJzY29yZSIsImdyb3VuZFkiLCJ5IiwiaGVpZ2h0Iiwic3Bhd25OZXdTdGFyIiwibmV3U3RhciIsImluc3RhbnRpYXRlIiwibm9kZSIsImFkZENoaWxkIiwic2V0UG9zaXRpb24iLCJnZXROZXdTdGFyUG9zaXRpb24iLCJnZXRDb21wb25lbnQiLCJnYW1lIiwiTWF0aCIsInJhbmRvbSIsInJhbmRYIiwicmFuZFkiLCJqdW1wSGVpZ2h0IiwibWF4WCIsIndpZHRoIiwidjIiLCJnYWluU2NvcmUiLCJzdHJpbmciLCJ1cGRhdGUiLCJkdCIsImdhbWVPdmVyIiwic3RvcEFsbEFjdGlvbnMiLCJkaXJlY3RvciIsImxvYWRTY2VuZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFVBQVUsRUFBRTtBQUNSLGlCQUFTLElBREQ7QUFFUkMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkQsS0FESjtBQUtQO0FBQ0FDLElBQUFBLGVBQWUsRUFBRSxDQU5WO0FBT1BDLElBQUFBLGVBQWUsRUFBRSxDQVBWO0FBUVA7QUFDQUMsSUFBQUEsTUFBTSxFQUFFO0FBQ0osaUJBQVMsSUFETDtBQUVKSixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ1U7QUFGTCxLQVREO0FBYVA7QUFDQUMsSUFBQUEsTUFBTSxFQUFFO0FBQ0osaUJBQVMsSUFETDtBQUVKTixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ1U7QUFGTCxLQWREO0FBbUJQRSxJQUFBQSxZQUFZLEVBQUU7QUFDWCxpQkFBUyxJQURFO0FBRVhQLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDYTtBQUZFO0FBbkJQLEdBSFA7QUE0Qkw7QUFFQTtBQUVBQyxFQUFBQSxLQWhDSyxtQkFnQ0ksQ0FFUixDQWxDSTtBQW9DTEMsRUFBQUEsTUFBTSxFQUFFLGtCQUFZO0FBRWhCLFNBQUtDLEtBQUwsR0FBYSxDQUFiO0FBRUEsU0FBS0MsWUFBTCxHQUFvQixDQUFwQjtBQUVBLFNBQUtDLEtBQUwsR0FBYSxDQUFiLENBTmdCLENBT2hCOztBQUNBLFNBQUtDLE9BQUwsR0FBZSxLQUFLVixNQUFMLENBQVlXLENBQVosR0FBZ0IsS0FBS1gsTUFBTCxDQUFZWSxNQUFaLEdBQW1CLENBQWxELENBUmdCLENBUXFDO0FBQ3JEOztBQUNBLFNBQUtDLFlBQUw7QUFDSCxHQS9DSTtBQWlETEEsRUFBQUEsWUFBWSxFQUFFLHdCQUFXO0FBQ3JCO0FBQ0EsUUFBSUMsT0FBTyxHQUFHdkIsRUFBRSxDQUFDd0IsV0FBSCxDQUFlLEtBQUtwQixVQUFwQixDQUFkLENBRnFCLENBR3JCOztBQUNBLFNBQUtxQixJQUFMLENBQVVDLFFBQVYsQ0FBbUJILE9BQW5CLEVBSnFCLENBS3JCOztBQUNBQSxJQUFBQSxPQUFPLENBQUNJLFdBQVIsQ0FBb0IsS0FBS0Msa0JBQUwsRUFBcEIsRUFOcUIsQ0FPckI7O0FBQ0FMLElBQUFBLE9BQU8sQ0FBQ00sWUFBUixDQUFxQixNQUFyQixFQUE2QkMsSUFBN0IsR0FBb0MsSUFBcEMsQ0FScUIsQ0FTbkI7O0FBQ0YsU0FBS2IsWUFBTCxHQUFvQixLQUFLVCxlQUFMLEdBQXVCdUIsSUFBSSxDQUFDQyxNQUFMLE1BQWlCLEtBQUt6QixlQUFMLEdBQXVCLEtBQUtDLGVBQTdDLENBQTNDO0FBRUEsU0FBS1EsS0FBTCxHQUFhLENBQWI7QUFDSCxHQTlESTtBQWdFTFksRUFBQUEsa0JBQWtCLEVBQUUsOEJBQVk7QUFDNUIsUUFBSUssS0FBSyxHQUFHLENBQVosQ0FENEIsQ0FFNUI7O0FBQ0EsUUFBSUMsS0FBSyxHQUFHLEtBQUtmLE9BQUwsR0FBZVksSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEtBQUtyQixNQUFMLENBQVlrQixZQUFaLENBQXlCLFFBQXpCLEVBQW1DTSxVQUFsRSxHQUErRSxFQUEzRixDQUg0QixDQUk1Qjs7QUFDQSxRQUFJQyxJQUFJLEdBQUcsS0FBS1gsSUFBTCxDQUFVWSxLQUFWLEdBQWdCLENBQTNCO0FBQ0FKLElBQUFBLEtBQUssR0FBRyxDQUFDRixJQUFJLENBQUNDLE1BQUwsS0FBZ0IsR0FBakIsSUFBd0IsQ0FBeEIsR0FBNEJJLElBQXBDLENBTjRCLENBTzVCOztBQUNBLFdBQU9wQyxFQUFFLENBQUNzQyxFQUFILENBQU1MLEtBQU4sRUFBYUMsS0FBYixDQUFQO0FBQ0gsR0F6RUk7QUEyRUxLLEVBQUFBLFNBQVMsRUFBRyxxQkFBVTtBQUNsQixTQUFLckIsS0FBTCxJQUFjLENBQWQsQ0FEa0IsQ0FFbEI7O0FBQ0EsUUFBRyxLQUFLTixZQUFMLEtBQXNCLElBQXpCLEVBQStCO0FBRS9CLFNBQUtBLFlBQUwsQ0FBa0I0QixNQUFsQixHQUEyQixhQUFZLEtBQUt0QixLQUE1QztBQUNILEdBakZJO0FBa0ZMdUIsRUFBQUEsTUFsRkssa0JBa0ZHQyxFQWxGSCxFQWtGTztBQUNSLFFBQUksS0FBSzFCLEtBQUwsR0FBYSxLQUFLQyxZQUF0QixFQUFvQztBQUNoQyxXQUFLMEIsUUFBTDtBQUNBO0FBQ0g7O0FBQ0QsU0FBSzNCLEtBQUwsSUFBYzBCLEVBQWQ7QUFDSCxHQXhGSTtBQXlGTEMsRUFBQUEsUUFBUSxFQUFFLG9CQUFZO0FBQ2xCLFNBQUtoQyxNQUFMLENBQVlpQyxjQUFaLEdBRGtCLENBQ1k7O0FBQzlCNUMsSUFBQUEsRUFBRSxDQUFDNkMsUUFBSCxDQUFZQyxTQUFaLENBQXNCLE1BQXRCO0FBQ0g7QUE1RkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHBzOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBzdGFyUHJlZmFiOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiXG4gICAgICAgIH0sXG4gICAgICAgICAvLyB0aGUgcmFuZG9tIHNjYWxlIG9mIGRpc2FwcGVhcmluZyB0aW1lIGZvciBzdGFyc1xuICAgICAgICAgbWF4U3RhckR1cmF0aW9uOiAwLFxuICAgICAgICAgbWluU3RhckR1cmF0aW9uOiAwLFxuICAgICAgICAgLy8gZ3JvdW5kIG5vZGUgZm9yIGNvbmZpcm1pbmcgdGhlIGhlaWdodCBvZiB0aGUgZ2VuZXJhdGVkIHN0YXIncyBwb3NpdGlvblxuICAgICAgICAgZ3JvdW5kOiB7XG4gICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXG4gICAgICAgICB9LFxuICAgICAgICAgLy8gcGxheWVyIG5vZGUgZm9yIG9idGFpbmluZyB0aGUganVtcCBoZWlnaHQgb2YgdGhlIG1haW4gY2hhcmFjdGVyIGFuZCBjb250cm9sbGluZyB0aGUgbW92ZW1lbnQgc3dpdGNoIG9mIHRoZSBtYWluIGNoYXJhY3RlclxuICAgICAgICAgcGxheWVyOiB7XG4gICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXG4gICAgICAgICB9LFxuXG4gICAgICAgICBzY29yZURpc3BsYXk6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9LFxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfSxcblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xuXG4gICAgICAgIHRoaXMuc3RhckR1cmF0aW9uID0gMDtcblxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgLy8gb2J0YWluIHRoZSBhbmNob3IgcG9pbnQgb2YgZ3JvdW5kIGxldmVsIG9uIHRoZSB5IGF4aXNcbiAgICAgICAgdGhpcy5ncm91bmRZID0gdGhpcy5ncm91bmQueSArIHRoaXMuZ3JvdW5kLmhlaWdodC8yOyAvLyB0aGlzLmdyb3VuZC50b3AgbWF5IGFsc28gd29ya1xuICAgICAgICAvLyBnZW5lcmF0ZSBhIG5ldyBzdGFyXG4gICAgICAgIHRoaXMuc3Bhd25OZXdTdGFyKCk7XG4gICAgfSxcblxuICAgIHNwYXduTmV3U3RhcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIGdlbmVyYXRlIGEgbmV3IG5vZGUgaW4gdGhlIHNjZW5lIHdpdGggYSBwcmVzZXQgdGVtcGxhdGVcbiAgICAgICAgdmFyIG5ld1N0YXIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnN0YXJQcmVmYWIpO1xuICAgICAgICAvLyBwdXQgdGhlIG5ld2x5IGFkZGVkIG5vZGUgdW5kZXIgdGhlIENhbnZhcyBub2RlXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdTdGFyKTtcbiAgICAgICAgLy8gc2V0IHVwIGEgcmFuZG9tIHBvc2l0aW9uIGZvciB0aGUgc3RhclxuICAgICAgICBuZXdTdGFyLnNldFBvc2l0aW9uKHRoaXMuZ2V0TmV3U3RhclBvc2l0aW9uKCkpO1xuICAgICAgICAvL0JpbmQgdGhpcyBcbiAgICAgICAgbmV3U3Rhci5nZXRDb21wb25lbnQoJ1N0YXInKS5nYW1lID0gdGhpcztcbiAgICAgICAgICAvLyByZXNldCB0aW1lciwgcmFuZG9tbHkgY2hvb3NlIGEgdmFsdWUgYWNjb3JkaW5nIHRoZSBzY2FsZSBvZiBzdGFyIGR1cmF0aW9uXG4gICAgICAgIHRoaXMuc3RhckR1cmF0aW9uID0gdGhpcy5taW5TdGFyRHVyYXRpb24gKyBNYXRoLnJhbmRvbSgpICogKHRoaXMubWF4U3RhckR1cmF0aW9uIC0gdGhpcy5taW5TdGFyRHVyYXRpb24pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XG4gICAgfSxcblxuICAgIGdldE5ld1N0YXJQb3NpdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmFuZFggPSAwO1xuICAgICAgICAvLyBBY2NvcmRpbmcgdG8gdGhlIHBvc2l0aW9uIG9mIHRoZSBncm91bmQgbGV2ZWwgYW5kIHRoZSBtYWluIGNoYXJhY3RlcidzIGp1bXAgaGVpZ2h0LCByYW5kb21seSBvYnRhaW4gYW4gYW5jaG9yIHBvaW50IG9mIHRoZSBzdGFyIG9uIHRoZSB5IGF4aXNcbiAgICAgICAgdmFyIHJhbmRZID0gdGhpcy5ncm91bmRZICsgTWF0aC5yYW5kb20oKSAqIHRoaXMucGxheWVyLmdldENvbXBvbmVudCgnUGxheWVyJykuanVtcEhlaWdodCArIDUwO1xuICAgICAgICAvLyBhY2NvcmRpbmcgdG8gdGhlIHdpZHRoIG9mIHRoZSBzY3JlZW4sIHJhbmRvbWx5IG9idGFpbiBhbiBhbmNob3IgcG9pbnQgb2Ygc3RhciBvbiB0aGUgeCBheGlzXG4gICAgICAgIHZhciBtYXhYID0gdGhpcy5ub2RlLndpZHRoLzI7XG4gICAgICAgIHJhbmRYID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMiAqIG1heFg7XG4gICAgICAgIC8vIHJldHVybiB0byB0aGUgYW5jaG9yIHBvaW50IG9mIHRoZSBzdGFyXG4gICAgICAgIHJldHVybiBjYy52MihyYW5kWCwgcmFuZFkpO1xuICAgIH0sXG5cbiAgICBnYWluU2NvcmUgOiBmdW5jdGlvbigpe1xuICAgICAgICB0aGlzLnNjb3JlICs9IDE7XG4gICAgICAgIC8vUmV0dXJuIGlmIG51bGxcbiAgICAgICAgaWYodGhpcy5zY29yZURpc3BsYXkgPT09IG51bGwpIHJldHVybjtcblxuICAgICAgICB0aGlzLnNjb3JlRGlzcGxheS5zdHJpbmcgPSBcIlNjb3JlIDogXCIrIHRoaXMuc2NvcmU7XG4gICAgfSxcbiAgICB1cGRhdGUgKGR0KSB7XG4gICAgICAgIGlmICh0aGlzLnRpbWVyID4gdGhpcy5zdGFyRHVyYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRpbWVyICs9IGR0O1xuICAgIH0sXG4gICAgZ2FtZU92ZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIuc3RvcEFsbEFjdGlvbnMoKTsgLy9zdG9wIHRoZSBqdW1waW5nIGFjdGlvbiBvZiB0aGUgcGxheWVyIG5vZGVcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdnYW1lJyk7XG4gICAgfVxufSk7XG4iXX0=