var cubesize = 32;

var shapeJ = [
    [[1, 1],
        [1, 0],
        [1, 0]],

    [[1, 1, 1],
        [0, 0, 1]],

    [[0, 1],
        [0, 1],
        [1, 1]],

    [[1, 0, 0],
        [1, 1, 1]],
];

var shapeT = [
    [[1, 1, 1],
        [0, 1, 0]],

    [[0, 1],
        [1, 1],
        [0, 1]],

    [[0, 1, 0],
        [1, 1, 1]],

    [[1, 0],
        [1, 1],
        [1, 0]],

];
var shapeZ = [
    [[1, 1, 0],
        [0, 1, 1]],

    [[0, 1],
        [1, 1],
        [1, 0]],

    [[1, 1, 0],
     [0, 1, 1]],

    [[0, 1],
        [1, 1],
        [1, 0]],

];
var shapeZrev = [
    [[0, 1, 1],
        [1, 1, 0]],

    [[1, 0],
        [1, 1],
        [0, 1]],

    [[0, 1, 1],
        [1, 1, 0]],

    [[1, 0],
        [1, 1],
        [0, 1]],

];

var shapeJrev = [
    [[1, 0, 0],
        [1, 0, 0],
        [1, 1, 0]],

    [[1, 1, 1],
        [1, 0, 0]],

    [[0, 1, 1],
        [0, 0, 1],
        [0, 0, 1]],

    [[0, 0, 1],
        [1, 1, 1]],
];


var shapeO = [
    [[1, 1],
        [1, 1]],

    [[1, 1],
        [1, 1]],

    [[1, 1],
        [1, 1]],

    [[1, 1],
        [1, 1]],

];

var shapeI = [
    [[1],
    [1],
    [1],
    [1]],

    [[1, 1,1,1]],

    [[0,1],
        [0,1],
        [0,1],
        [0,1]],

    [[1, 1,1,1]],

];



Tetromino = function (game, topLeft, currentRotation, type) {


    this.topLeft = topLeft;
    this.currentRotation = currentRotation;
    this.game = game;
    this.squares = new Array();
    this.type = type;

    this.drawsquares();


};


Tetromino.prototype = {

    drawsquares: function () {

        this.shapeArray;

        this.shape = null;

        switch (this.type){
            case 1:
                this.shape = shapeT[this.currentRotation];
                this.shapeArray = shapeT;
                break;
            case 2:
                this.shape = shapeJrev[this.currentRotation];
                this.shapeArray = shapeJrev;
                break;
            case 3:
                this.shape = shapeI[this.currentRotation];
                this.shapeArray = shapeI;
                break;
            case 4:
                this.shape = shapeO[this.currentRotation];
                this.shapeArray = shapeO;
                break;
            case 5:
                this.shape = shapeZ[this.currentRotation];
                this.shapeArray = shapeZ;
                break;
            case 6:
                this.shape = shapeZrev[this.currentRotation];
                this.shapeArray = shapeZrev;
                break;
            case 7:
                this.shape = shapeJ[this.currentRotation];
                this.shapeArray = shapeJ;
                break;

        }

        var counter = 0;
        for (var i = 0; i < this.shape.length; i++)
            for (var j = 0; j < this.shape[i].length; j++)
                if (this.shape[i][j] != 0) {
                    this.squares[counter] = game.add.sprite(this.topLeft.x * cubesize + j * cubesize + OffsetX, this.topLeft.y * cubesize + i * cubesize + OffsetY, this.type.toString());

                    this.squares[counter].scale.set(configuration.scale_ratio);
                    this.squares[counter].animations.add('idle', [0, 1, 2, 3], 3, true);
                    this.squares[counter].animations.play('idle');
                    counter++;
                }
    },

    moveTetromino: function (dir) {


        switch (dir) {

            case 'left' :

                for (var i = 0; i < this.squares.length; i++) {

                    this.squares[i].x -= cubesize;

                }

                this.topLeft.x -= 1;

                break;

            case 'right':

                for (var i = 0; i < this.squares.length; i++) {

                    this.squares[i].x += cubesize;

                }

                this.topLeft.x += 1;
                break;

            case 'down' :

                for (var i = 0; i < this.squares.length; i++) {

                    this.squares[i].y += cubesize;

                }
                this.topLeft.y += 1;
                break;

        }


    },

    rotateTetromino : function () {


        tetromino.squares[0].destroy();
        tetromino.squares[1].destroy();
        tetromino.squares[2].destroy();
        tetromino.squares[3].destroy();

        if(currentRotation<4) currentRotation++;
        else currentRotation = 0;
        this.drawsquares();

    }
};
