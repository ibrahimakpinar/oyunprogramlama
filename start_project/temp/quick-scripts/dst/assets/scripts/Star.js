
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Star.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ef326WM1qFFD4s/zocHkiet', 'Star');
// scripts/Star.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    pickRadius: 0
  },
  update: function update(dt) {
    // judge if the distance between the star and main character is less than the collecting distance for each frame
    if (this.getPlayerDistance() < this.pickRadius) {
      // invoke collecting behavior
      this.onPicked();
      return;
    }

    var opacityRatio = 1 - this.game.timer / this.game.starDuration;
    var minOpacity = 50;
    this.node.opacity = minOpacity + Math.floor(opacityRatio * (255 - minOpacity));
  },
  // Get Player Distance
  getPlayerDistance: function getPlayerDistance() {
    // judge the distance according to the position of the player node
    var playerPos = this.game.player.getPosition(); // calculate the distance between two nodes according to their positions

    var dist = this.node.position.sub(playerPos).mag();
    return dist;
  },
  onPicked: function onPicked() {
    // When the stars are being collected, invoke the interface in the Game script to generate a new star
    this.game.spawnNewStar(); //Set New Score

    this.game.gainScore(); // then destroy the current star's node

    this.node.destroy();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1N0YXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJwaWNrUmFkaXVzIiwidXBkYXRlIiwiZHQiLCJnZXRQbGF5ZXJEaXN0YW5jZSIsIm9uUGlja2VkIiwib3BhY2l0eVJhdGlvIiwiZ2FtZSIsInRpbWVyIiwic3RhckR1cmF0aW9uIiwibWluT3BhY2l0eSIsIm5vZGUiLCJvcGFjaXR5IiwiTWF0aCIsImZsb29yIiwicGxheWVyUG9zIiwicGxheWVyIiwiZ2V0UG9zaXRpb24iLCJkaXN0IiwicG9zaXRpb24iLCJzdWIiLCJtYWciLCJzcGF3bk5ld1N0YXIiLCJnYWluU2NvcmUiLCJkZXN0cm95Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsVUFBVSxFQUFFO0FBREosR0FIUDtBQU1MQyxFQUFBQSxNQU5LLGtCQU1HQyxFQU5ILEVBTU87QUFDUDtBQUNBLFFBQUksS0FBS0MsaUJBQUwsS0FBMkIsS0FBS0gsVUFBcEMsRUFBZ0Q7QUFDN0M7QUFDQSxXQUFLSSxRQUFMO0FBQ0E7QUFDSDs7QUFFRCxRQUFJQyxZQUFZLEdBQUcsSUFBSSxLQUFLQyxJQUFMLENBQVVDLEtBQVYsR0FBZ0IsS0FBS0QsSUFBTCxDQUFVRSxZQUFqRDtBQUNBLFFBQUlDLFVBQVUsR0FBRyxFQUFqQjtBQUNBLFNBQUtDLElBQUwsQ0FBVUMsT0FBVixHQUFvQkYsVUFBVSxHQUFHRyxJQUFJLENBQUNDLEtBQUwsQ0FBV1IsWUFBWSxJQUFJLE1BQU1JLFVBQVYsQ0FBdkIsQ0FBakM7QUFFSCxHQWxCSTtBQW1CTDtBQUNBTixFQUFBQSxpQkFBaUIsRUFBRSw2QkFBWTtBQUMzQjtBQUNBLFFBQUlXLFNBQVMsR0FBRyxLQUFLUixJQUFMLENBQVVTLE1BQVYsQ0FBaUJDLFdBQWpCLEVBQWhCLENBRjJCLENBRzNCOztBQUNBLFFBQUlDLElBQUksR0FBRyxLQUFLUCxJQUFMLENBQVVRLFFBQVYsQ0FBbUJDLEdBQW5CLENBQXVCTCxTQUF2QixFQUFrQ00sR0FBbEMsRUFBWDtBQUNBLFdBQU9ILElBQVA7QUFDSCxHQTFCSTtBQTRCTGIsRUFBQUEsUUFBUSxFQUFFLG9CQUFXO0FBQ2pCO0FBQ0EsU0FBS0UsSUFBTCxDQUFVZSxZQUFWLEdBRmlCLENBR2pCOztBQUNBLFNBQUtmLElBQUwsQ0FBVWdCLFNBQVYsR0FKaUIsQ0FLakI7O0FBQ0EsU0FBS1osSUFBTCxDQUFVYSxPQUFWO0FBQ0g7QUFuQ0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBwaWNrUmFkaXVzOiAwLFxuICAgIH0sXG4gICAgdXBkYXRlIChkdCkge1xuICAgICAgICAgLy8ganVkZ2UgaWYgdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHN0YXIgYW5kIG1haW4gY2hhcmFjdGVyIGlzIGxlc3MgdGhhbiB0aGUgY29sbGVjdGluZyBkaXN0YW5jZSBmb3IgZWFjaCBmcmFtZVxuICAgICAgICAgaWYgKHRoaXMuZ2V0UGxheWVyRGlzdGFuY2UoKSA8IHRoaXMucGlja1JhZGl1cykge1xuICAgICAgICAgICAgLy8gaW52b2tlIGNvbGxlY3RpbmcgYmVoYXZpb3JcbiAgICAgICAgICAgIHRoaXMub25QaWNrZWQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBvcGFjaXR5UmF0aW8gPSAxIC0gdGhpcy5nYW1lLnRpbWVyL3RoaXMuZ2FtZS5zdGFyRHVyYXRpb247XG4gICAgICAgIHZhciBtaW5PcGFjaXR5ID0gNTA7XG4gICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gbWluT3BhY2l0eSArIE1hdGguZmxvb3Iob3BhY2l0eVJhdGlvICogKDI1NSAtIG1pbk9wYWNpdHkpKTtcbiAgICAgICAgXG4gICAgfSxcbiAgICAvLyBHZXQgUGxheWVyIERpc3RhbmNlXG4gICAgZ2V0UGxheWVyRGlzdGFuY2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8ganVkZ2UgdGhlIGRpc3RhbmNlIGFjY29yZGluZyB0byB0aGUgcG9zaXRpb24gb2YgdGhlIHBsYXllciBub2RlXG4gICAgICAgIHZhciBwbGF5ZXJQb3MgPSB0aGlzLmdhbWUucGxheWVyLmdldFBvc2l0aW9uKCk7XG4gICAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0d28gbm9kZXMgYWNjb3JkaW5nIHRvIHRoZWlyIHBvc2l0aW9uc1xuICAgICAgICB2YXIgZGlzdCA9IHRoaXMubm9kZS5wb3NpdGlvbi5zdWIocGxheWVyUG9zKS5tYWcoKTtcbiAgICAgICAgcmV0dXJuIGRpc3Q7XG4gICAgfSxcblxuICAgIG9uUGlja2VkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gV2hlbiB0aGUgc3RhcnMgYXJlIGJlaW5nIGNvbGxlY3RlZCwgaW52b2tlIHRoZSBpbnRlcmZhY2UgaW4gdGhlIEdhbWUgc2NyaXB0IHRvIGdlbmVyYXRlIGEgbmV3IHN0YXJcbiAgICAgICAgdGhpcy5nYW1lLnNwYXduTmV3U3RhcigpO1xuICAgICAgICAvL1NldCBOZXcgU2NvcmVcbiAgICAgICAgdGhpcy5nYW1lLmdhaW5TY29yZSgpO1xuICAgICAgICAvLyB0aGVuIGRlc3Ryb3kgdGhlIGN1cnJlbnQgc3RhcidzIG5vZGVcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICB9LFxufSk7XG4iXX0=