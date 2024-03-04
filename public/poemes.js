
var options = [
    [
        "L'horizon s'éteint et s'étend le miroir d'eau",
        "Dans la brume dansante - soudain - le miroir d'eau",
        "Sous la pluie, ils s'embrassent sur le miroir d'eau",
        "Vague idée les idées vagues du miroir d'eau"
    ],
    [
        "Des grenouilles sans cesse, Ô mare de harem.",
        "Du lait de télécommiens, de l'urine même",
        "Il avait développé son propre écosystème",
        "C'était le repère des chanteurs, des bohèmes"
    ],
    [
        "C'était le défi sensoriel du blasphème",
        "C'étaient les communions, le lieu de nos baptêmes",
        "La vie, quand on y pense, n'est qu'un piètre poème",
        "Dans chacun de nos coeurs, son charme pour emblème"
    ],
    [
        "Que la flaque me perd ! Mais où est mon chapeau ?",
        "Quelle idée ! De partir, d'aller sur ce plateau...",
        "Verte, rouge, bleue puis jalouse des oiseaux",
        "Et je suis Telecomme un naze sans réseau."
    ],
    [
        "C'est certain, il n'est plus comme sur la photo",
        "Le miroir aux reflets, jaunes-vert par défaut",
        "Malheureusement, des golems l'ont pris d'assaut",
        "Lac de mon âme, piscine du patio"
    ],
    [
        "Qu'ils viennent affronter la marée de golems",
        "Attaqué de partout, pour sa beauté suprême",
        "Le plus beau des joyaux a attiré les gros germes",
        "Mais peut-on encore penser des stratagèmes ?"
    ],
    [
        "C'est là-bas. C'était là, le bassin requiem.",
        "C'est la dernière fois que je vois notre gemme",
        "Armés de lames d'eau pour régler \"tes problèmes\"",
        "Ils t'ont tué - pourtant - avais-tu le teint si blême ?"
    ],
    [
        "Que les divinités s'emparent du tombeau !",
        "Vidé... vide. Sans reflet, sans même un seul écho",
        "Plus rien ne vit là-bas, mais restent les corbeaux",
        "La source des rêves s'est épuisé bien tôt"
    ],
    [
        "Que mes mots sont vidés, rien, plus rien dans la prose",
        "Je recherche le jour des raisons et des causes",
        "Avec la nature, dans le patio tu reposes"
    ],
    [
       "Ce matin, j'ai déposé ma peine et des roses",
       "Qu'avait-il ? Ah ! peut-être la tuberculose !?",
       "Il sera vivant, c'est une métamorphose !"
    ],
    [
        "Que l'Azur est immense et que je suis petit",
        "Le jour se meurt, lui reste et reste toujours la nuit",
        "S'il est mort, j'en ferai un vivant par récit"
    ],
    [
        "Je verrai, brillantes, les milliers de parures",
        "Je dessinerai et je ferai des peintures",
        "Dans l'ombre de ma plume, des golems créatures"
    ],
    [
        "Que je t'ai ébloui, que je t'ai embelli",
        "J'entends toujours le bruit, de tes moindres débits",
        "Il reste encore de tes reflets ce midi"
    ],
    [
        "De saphirs, d'améthystes et d'émeraudes pures",
        "De ton manteau parfait de pierre sans usure",
        "Maintenant, je ferai pipi sur la verdure"
    ]
];
function randomize() {
    for (var i=0; i<14; i++) {
        var select = document.getElementById("v"+i);
        var option = Math.floor(Math.random() * options[i].length);
        select.selectedIndex = option;
    }
}

function updateHTML() {
    var div = document.getElementById("poeme");
    var content = "";
    
    for(var i = 0; i < 14; i++) {
        if(i == 4 || i == 8 || i == 11) {
            content += "<br>\n";
        }
        var select = document.getElementById("v"+i);
        var option = select.options[select.selectedIndex].text;
        content += option + "<br>\n";
    }

    div.innerHTML = content;
}

function init() {
    div = document.getElementById("select");
    
    var content = "";
    
    var i = 0;
    for(var ver in options) {
        content += `<select id='v${i}' onchange='updateHTML()'>\n`
        var k = 0;
        for(var option in options[ver]) {
            content += `<option value=o${k}> ${options[ver][option]} </option>\n`
            k++;
        }
        content += `</select>\n<br>\n`
        i++;
    }

    div.innerHTML = content;

    
    randomize();
    updateHTML();
}

