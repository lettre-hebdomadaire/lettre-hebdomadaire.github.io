---
title: "Televerset - 4ème édition"
use_math: true
---
# Intro

Excellente rentrée à tous, mes amis télélecteurs !

Cette semaine, j'ai voulu changer.
J'ai voulu échanger, transposer, permuter, réordonner.

Et rien de tel pour se changer les idées que de vous présenter un ami !
Je vous présente Raymond Quenaud.

C'est un grand curieux: poète, romancier, acteur, mais aussi mathématicien et philosophe à ses heures perdues.

C'est surtout le co-fondateur de l'oulipo.

Et bien évidemment, il a une contrainte à son nom: la quenine.

# Mais je me demande comment diable peut fonctionner cette contrainte d'écriture ?!

On choisit d'abord une liste de $n$ mots ou de syllabes. Appelons les des atomes.
On va construire notre histoire à partir de ces atomes, en les permutant sans cesse.

Pour la première strophe, on construit $n$ vers où l'on utilise à la fin de chaque vers un atome. On doit les utiliser dans l'ordre choisi initialement.

Pour la deuxième strophe, on utilise les atomes du premiers vers dans un ordre différent: on doit utiliser le dernier atome, puis le premier, puis l'avant dernier, puis le deuxième ...

Pour chaque vers, on continue de construire en répétant la permutation sur le vers précédent.

On construit ainsi $n$ strophes de $n$ vers.

On appelle ce genre de construction une $n$-ine ou encore une quenine.

(voir https://www.oulipo.net/fr/le-monde-des-nonines/la-permutation-spirale)

# Nombre d'atomes

Lorsque on suit cette contrainte avec $n$ mots, on a alors écrit une $n$-ine.

- Pour $n=3$, on suit le motif
```
A B C
C A B
B C A
```

- Pour $n=5$, cela donne
```
A B C D E
E A D B C
C E B A D
D C A E B
B D E C A
```

Question pour le lecteur: pourquoi ne peut on pas écrire de $4$-ine ?

Voir [cet article](https://images.math.cnrs.fr/Poesie-spirales-et-battements-de-cartes) pour la réponse


# Oeuvres

## Apéro

> Une petite terrine ($n=3$) du terroir

Heure de l'apéro:   
je sors le fromage  
Puis débouche le vin.  

Pas n'importe quel vin:
Pour faire un bon apéro,   
Il doit s'accorder avec le fromage.  

Car si même le fromage 
Peut se manger sans vin
Cela ne fait pas un apéro.

## Chalousie

> Une quinine ($n=5$) un peu spéciale: au lieu de faire $n$ strophes de $n$ vers, on a fait $n$ vers qui contiennent chacun $n$ mots.

Le chat danse devant les étudiants pour obtenir amour et caresses  
Et caresser ce chat plein d'amour, cela fait danser les étudiants  
Les étudiants qui caressent et qui danse, pour le chat, c'est ça l'amour  
Pourtant, l'amour entre étudiants n'a pas besoin de chats: seulement caresse et danse  
Oui, mais les danses d'amour et les caresses entre étudiants, le chat n'aime pas ça ...

## Babar

> Maintenant, une petite sextine (enfin, plutôt une romantine ...)

Dans sa chambre, un éléphant nettoie sa trompe.  
Il se fait beau. Ce pachyderme, c'est Babar.  
Son coeur bat fort, car aujourd'hui, il rencontre Schreck.  
Il vient en avance: pas question d'être à la course !
Le soir venu, il n'abuse pas sur l'alcool:  
Il veut être lucide au moment de faire l'amour.  

Ah, l'amour !  
La force supérieure qui jamais ne se trompe !  
Elle qui vous rend ivre aussi bien que l'alcool  
Heureux et plein d'espoir, Babar  
Imagine même se remettre à la course  
Et il rêve au jour où il va revoir Schreck  

Mais même si son coeur bat pour Schreck,  
Il n'oublie pas son fils, son petit, son amour.  
L'ami de celui-ci, l'énergique Sonic, lui propose une course  
L'éléphant voudrait accepter mais il a peur de s'étouffer avec sa trompe.  
Mais tu dois prendre ton courage Babar.  
Tu va vaincre la souffrance du corps comme tu as vaincu l'alcool.  

Babar peut enfin se récompenser avec un verre d'alcool  
Son deuxième depuis sa douce rencontre avec Schreck  
"Tu as réussi, mon héros !" dit Sonic à Babar  
Babar rougit, il ne comprend plus: il pensait avoir trouvé l'amour  
Coup fatal, malédiction, quand l'ogre lui crie "Tu me trompes ?"  
L'ogre est vert, Babar livide, mais pas à cause de la course.   

La guerre déclarée, Sonic et Schreck entrent dans la course  
Pour remporter les faveurs du grand gardien de l'alcool  
Le barman en panique cache ses yeux derrière sa trompe  
L'ogre gronde, pourtant Sonic n'a pas peur de Schreck  
Aucun ne peut reculer, sous l'emprise de l'amour  
Le monde retient son souffle: les passants, l'âne et Babar  

La tension monte, jusqu'au moment où il craque, le Babar  
Il s'enfuit et personne ne peut arrêter sa course  
Il est perdu, désemparé, il déteste l'amour  
Il a peur de tout plaquer et de retomber dans l'alcool  
Le hérisson le rattrape, ensuite arrive Schreck  
Babar explique qu'il veut du temps, pour réfléchir, seul avec sa trompe.