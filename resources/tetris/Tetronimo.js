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


Tetronimo = function (game, topLeft, currentRotation, type) {


    this.topLeft = topLeft;
    this.currentRotation = currentRotation;
    this.game = game;
    this.squares = new Array();
    this.type = type;

    this.drawsquares();


};


Tetronimo.prototype = {

    drawsquares: function () {

        var shape;

        switch (this.type){
            case 'J':
                shape = shapeJ[this.currentRotation];
                break;
            case 'T':
                shape = shapeT[this.currentRotation];
                break;

        }

        var counter = 0;
        for (var i = 0; i < shape.length; i++)
            for (var j = 0; j < shape[i].length; j++)
                if (shape[i][j] != 0)
                    this.squares[counter++] = game.add.sprite(this.topLeft.x * cubesize + j * cubesize, this.topLeft.y * cubesize + i * cubesize, 'cube');
    },

    moveTetronimo: function (dir) {


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

    rotateTetronimo : function () {


        tetronimo.squares[0].destroy();
        tetronimo.squares[1].destroy();
        tetronimo.squares[2].destroy();
        tetronimo.squares[3].destroy();

        if(currentRotation<4) currentRotation++;
        else currentRotation = 0;
        this.drawsquares();

    }
};
