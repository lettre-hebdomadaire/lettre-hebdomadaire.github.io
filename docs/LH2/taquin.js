// Jeu de Taquin
var ctx, can;
var game = {
    cases: [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 0]
    ], 
    emptyCell: {
        x: 3,
        y: 3
    },
    moves: 0
};

// Couleurs si l'image ne peux pas être chargée
var colors = [
    'red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'brown',
    'cyan', 'magenta', 'lime', 'olive', 'maroon', 'navy', 'teal', 'gray'
];

var img = new Image();
img.src = 'assets/nicolas-glady-2.jpg';

var hole_color = 'black';

var loaded = false;


img.onload = function() {
    loaded = true;
}

window.onload = init;

var in_game = false;
var show_grid = true;
var show_help = false;


function init() {
    document.getElementById('help-2').style.display = 'none';

    can = document.getElementById('canvas');
    ctx = can.getContext('2d');

    can.onmousedown = click;

   shuffle();
}

var shuffle_num = 1000;
var interval_id = null;
var has_won = false;

function shuffle() {
    game.cases = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 0]
    ];
    game.emptyCell = { x: 3, y: 3 };
    game.moves = 0;

    has_won = false;
    in_game = false;
    show_grid = true;
    can.classList.remove('anim');
    document.getElementById('floating').classList.remove('anim');
    
    for (var i = 0; i < shuffle_num; i++) {
        shuffle_once();
    }
    in_game = true;

    draw();
}

function shuffle_once() {
    var x = Math.floor(Math.random() * 4);
    var y = Math.floor(Math.random() * 4);
    click({clientX: x * can.width / 4 + can.offsetLeft, clientY: y * can.height / 4 + can.offsetTop});
    
}

function draw() {
    ctx.fillStyle = hole_color;
    ctx.fillRect(0, 0, can.width, can.height);

    var w = can.width / 4;
    var h = can.height / 4;

    for (var i = 0; i < game.cases.length; i++) {
        for (var j = 0; j < game.cases[i].length; j++) {
            if (game.cases[i][j] != 0) {
                var x = j * w;
                var y = i * h;

                if(loaded) {
                    var imW = img.width / 4;
                    var imH = img.height / 4;
                    var sx = (game.cases[i][j] - 1) % 4 * imW;
                    var sy = Math.floor((game.cases[i][j] - 1) / 4) * imH;
                    ctx.drawImage(img, sx, sy, imW, imH, x, y, w, h);

                    if(show_help && !has_won) {
                        ctx.fillStyle = 'white';
                        ctx.font = 'bold 23px Arial';
                        ctx.fillText(game.cases[i][j], x + 4, y + 20);
                        ctx.fillStyle = 'black';
                        ctx.font = 'bold 20px Arial';
                        ctx.fillText(game.cases[i][j], x + 5, y + 19);

                    }
                    if(show_grid) {
                        ctx.strokeStyle = 'white';
                        ctx.lineWidth = 2;
                        ctx.strokeRect(x, y, w, h);
                    }


                } else {
                    ctx.fillStyle = colors[game.cases[i][j] - 1];
                    ctx.fillRect(x, y, w, h);
                    ctx.fillStyle = 'black';
                    ctx.font = 'bold 20px Arial';
                    ctx.fillText(game.cases[i][j], x + w / 2 - 5, y + h / 2 + 5);
                }
            }
        }
    }
}

function click(e) {
    var x = e.clientX - can.offsetLeft;
    var y = e.clientY - can.offsetTop;
    var w = can.width / 4;
    var h = can.height / 4;

    var i = Math.floor(y / h);
    var j = Math.floor(x / w);

    if (i == game.emptyCell.x || j == game.emptyCell.y) {
        if (i == game.emptyCell.x) {
            if (j < game.emptyCell.y) {
                for (var k = game.emptyCell.y; k > j; k--) {
                    game.cases[i][k] = game.cases[i][k - 1];
                }
            }
            else {
                for (var k = game.emptyCell.y; k < j; k++) {
                    game.cases[i][k] = game.cases[i][k + 1];
                }
            }
        }
        else {
            if (i < game.emptyCell.x) {
                for (var k = game.emptyCell.x; k > i; k--) {
                    game.cases[k][j] = game.cases[k - 1][j];
                }
            }
            else {
                for (var k = game.emptyCell.x; k < i; k++) {
                    game.cases[k][j] = game.cases[k + 1][j];
                }
            }
        }
        game.cases[i][j] = 0;
        
        game.emptyCell.x = i;
        game.emptyCell.y = j;

        if (in_game) {
            game.moves++;
            document.getElementById('moves').innerHTML = "Nombre de coups : " + game.moves;
        }
    }

    if(in_game) {
        var fini = true;
        for(var i = 0; i<15; i++) {
            if(game.cases[Math.floor(i/4)][i%4] != i+1) {
                fini = false
                break;
            }
        }
        if(game.cases[3][3] != 0) fini = false;
        if(fini) {
            show_grid = false;
            can.classList.add('anim');
            //document.getElementById('floating').style.display = 'block';
            document.getElementById('floating').classList.add('anim');
            has_won = true;
        }
        draw();
    }

}

function help() {
    show_help = !show_help;
    if(show_help) {
        document.getElementById('help').innerHTML = 'Je me débrouille comme un.e grand.e &#128526;';
        document.getElementById('help-2').style.display = 'block';
    } else {
        document.getElementById('help').innerHTML = 'Je suis nul.le &#128557;';
        document.getElementById('help-2').style.display = 'none';
    }
    draw();
}

function help_2() {
    alert("Il faut remettre l'image dans le bon ordre en déplaçant les cases.\nLa méthode générale est : remettre les cases dans l'ordre ligne par ligne pour les deux premières lignes, puis colonnes par colonnes pour les deux dernieres, tout cela dans l'ordre de lecture.\nSi vous n'y arrivez toujours pas, cherchez sur internet la flemme d'expliquer plus.");
}