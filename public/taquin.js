var locales = {
    moves: "Nombre de coups : ",
    newGame: "Nouvelle partie",
    help: "Je suis nul.le",
    unhelp: "Je me débrouille comme un.e grand.e",
    help_2: "Vraiment aidez moi je suis éclaté.e au sol",
    help_message:
        "Il faut remettre l'image dans le bon ordre en déplaçant les cases.\nLa méthode générale est : remettre les cases dans l'ordre ligne par ligne pour les deux premières lignes, puis colonnes par colonnes pour les deux dernieres, tout cela dans l'ordre de lecture.\nSi vous n'y arrivez toujours pas, cherchez sur internet la flemme d'expliquer plus.",
};

var ctx, can;
var game = {
    size: 4,
    cases: [],
    emptyCell: {
        x: 3,
        y: 3,
    },
    moves: 0,
};

// Couleurs si l'image ne peux pas être chargée
var colors = [
    "red",
    "green",
    "blue",
    "yellow",
    "orange",
    "purple",
    "pink",
    "brown",
    "cyan",
    "magenta",
    "lime",
    "olive",
    "maroon",
    "navy",
    "teal",
    "gray",
];

var img = new Image();

var hole_color = "black";

var loaded = false;

var in_game = false;
var show_grid = true;
var show_help = false;

function init() {
    img.src = document.getElementById("link").innerHTML;
    img.onload = function () {
        loaded = true;
        shuffle();
    };
    document.getElementById("newGame").onclick = shuffle;
    document.getElementById("help").onclick = help;
    document.getElementById("help-2").onclick = help_2;
    can = document.getElementById("canvas");
    ctx = can.getContext("2d");
    const coords = can.getBoundingClientRect();
    can.width = coords.width;
    can.height = coords.height;
    can.onmousedown = click;
}

var shuffle_num = 1000;
var interval_id = null;
var has_won = false;

function shuffle() {
    game.size = 4;
    game.cases = [];
    for (var i = 0; i < game.size; i++) {
        game.cases[i] = [];
        for (var j = 0; j < game.size; j++) {
            game.cases[i][j] = i * game.size + j + 1;
        }
    }
    game.emptyCell = { x: game.size - 1, y: game.size - 1 };
    game.cases[game.size - 1][game.size - 1] = 0;
    game.moves = 0;

    has_won = false;
    in_game = false;
    show_grid = true;
    can.classList.remove("anim");
    document.getElementById("floating").classList.remove("anim");

    for (var i = 0; i < shuffle_num; i++) {
        shuffle_once();
    }
    in_game = true;

    draw();
}

function shuffle_once() {
    var i = Math.floor(Math.random() * 4);
    var j = Math.floor(Math.random() * 4);
    movePiece(i, j);
}

function draw() {
    ctx.fillStyle = hole_color;
    ctx.fillRect(0, 0, can.width, can.height);

    var w = can.width / game.size;
    var h = can.height / game.size;

    for (var i = 0; i < game.size; i++) {
        for (var j = 0; j < game.size; j++) {
            if (game.cases[i][j] != 0) {
                var x = j * w;
                var y = i * h;

                if (loaded) {
                    var imW = img.width / game.size;
                    var imH = img.height / game.size;
                    var sx = ((game.cases[i][j] - 1) % game.size) * imW;
                    var sy = Math.floor((game.cases[i][j] - 1) / game.size) * imH;
                    ctx.drawImage(img, sx, sy, imW, imH, x, y, w, h);

                    if (show_help && !has_won) {
                        ctx.fillStyle = "white";
                        ctx.font = "bold 23px Arial";
                        ctx.fillText(game.cases[i][j], x + 4, y + 20);
                        ctx.fillStyle = "black";
                        ctx.font = "bold 20px Arial";
                        ctx.fillText(game.cases[i][j], x + 5, y + 19);
                    }
                    if (show_grid) {
                        ctx.strokeStyle = "white";
                        ctx.lineWidth = 2;
                        ctx.strokeRect(x, y, w, h);
                        ctx.strokeStyle = "black";
                        ctx.lineWidth = 1;
                        ctx.strokeRect(x, y, w, h);
                    }
                } else {
                    ctx.fillStyle = colors[game.cases[i][j] - 1];
                    ctx.fillRect(x, y, w, h);
                    ctx.fillStyle = "black";
                    ctx.font = "bold 20px Arial";
                    ctx.fillText(game.cases[i][j], x + w / 2 - 5, y + h / 2 + 5);
                }
            }
        }
    }
}

function movePiece(i, j) {
    if (i == game.emptyCell.x || j == game.emptyCell.y) {
        if (i == game.emptyCell.x) {
            if (j < game.emptyCell.y) {
                for (var k = game.emptyCell.y; k > j; k--) {
                    game.cases[i][k] = game.cases[i][k - 1];
                }
            } else {
                for (var k = game.emptyCell.y; k < j; k++) {
                    game.cases[i][k] = game.cases[i][k + 1];
                }
            }
        } else {
            if (i < game.emptyCell.x) {
                for (var k = game.emptyCell.x; k > i; k--) {
                    game.cases[k][j] = game.cases[k - 1][j];
                }
            } else {
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
            document.getElementById("moves").innerHTML = locales.moves + game.moves;
        }
    }

    if (in_game) {
        var fini = true;
        for (var i = 0; i < game.size * game.size - 1; i++) {
            if (game.cases[Math.floor(i / game.size)][i % game.size] != i + 1) {
                fini = false;
                break;
            }
        }
        if (game.cases[game.size - 1][game.size - 1] != 0) fini = false;
        if (fini) {
            show_grid = false;
            can.classList.add("anim");
            //document.getElementById('floating').style.display = 'block';
            document.getElementById("floating").classList.add("anim");
            has_won = true;
        }
        draw();
    }
}

function click(e) {
    const rect = can.getBoundingClientRect();
    var x = e.clientX - rect.left < 0 ? 0 : e.clientX - rect.left;
    var y = e.clientY - rect.top < 0 ? 0 : e.clientY - rect.top;
    var w = can.width / game.size;
    var h = can.height / game.size;
    var i = Math.floor(y / h);
    var j = Math.floor(x / w);

    movePiece(i, j);
}

function help() {
    show_help = !show_help;
    if (show_help) {
        document.getElementById("help").innerHTML = locales.unhelp + " &#128526;";
        document.getElementById("help-2").style.display = "block";
    } else {
        document.getElementById("help").innerHTML = locales.help + " &#128557;";
        document.getElementById("help-2").style.display = "none";
    }
    draw();
}

function help_2() {
    alert(locales.help_message);
}