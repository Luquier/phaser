var cubesize = 32;

var shapeJ = [
    [[1, 1, 0],
        [1, 0, 0],
        [1, 0, 0]],

    [[1, 1, 1],
        [0, 0, 1]],

    [[0, 1, 0],
        [0, 1, 0],
        [1, 1, 0]],

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

        this.shape = null;

        switch (this.type){
            case 'J':
                this.shape = shapeJ[this.currentRotation];
                break;
            case 'T':
                this.shape = shapeT[this.currentRotation];
                break;

        }

        var counter = 0;
        for (var i = 0; i < this.shape.length; i++)
            for (var j = 0; j < this.shape[i].length; j++)
                if (this.shape[i][j] != 0)
                    this.squares[counter++] = game.add.sprite(this.topLeft.x * cubesize + j * cubesize, this.topLeft.y * cubesize + i * cubesize, 'cube');
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
