
cc.Class({
    extends: cc.Component,

    properties: {
        pickRadius: 0,
    },
    update (dt) {
         // judge if the distance between the star and main character is less than the collecting distance for each frame
         if (this.getPlayerDistance() < this.pickRadius) {
            // invoke collecting behavior
            this.onPicked();
            return;
        }
    },
    // Get Player Distance
    getPlayerDistance: function () {
        // judge the distance according to the position of the player node
        var playerPos = this.game.player.getPosition();
        // calculate the distance between two nodes according to their positions
        var dist = this.node.position.sub(playerPos).mag();
        return dist;
    },

    onPicked: function() {
        // When the stars are being collected, invoke the interface in the Game script to generate a new star
        this.game.spawnNewStar();
        // then destroy the current star's node
        this.node.destroy();
    },
});
