"use strict";
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