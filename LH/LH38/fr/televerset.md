---
title: "Televerset - 13ème édition"
tags: [televerset]
---

La bise, télélecteurs.

La semaine dernière, c'était la fin du niveau de vigilance Vigipirate élevé à Télécom. Après des mois pendant lesquels rentrer dans l'école était une épreuve du combatant, où ceux qui habitent à Hacker devaient faire un détour interminable pour entrer en ludo, et où tous les extés devaient subir l'ambiance morbide du PC sécurité pour accéder à n'importe quelle soirée, où on devait montrer patte blanche tous les matins à un Vigile à qui cela plaisait autant que nous, alors même qu'à Centrale, tout était resté open bar; on peut enfin profiter de toutes les portes de l'école sans avoir l'impression d'étudier dans une prison !

Pour fêter ça, j'ai voulu écrire une petite missive. Mais dans un style assez particulier, vous allez voir.

# Contrainte

Vous êtes un prisonnier, et vous avez à votre disposition un minuscule bout de papier. Pour économiser de la place, vous devez écrire succinctement, mais vous devez surtout écrire *plat*, c'est à dire sans enjambement.

Un enjambement, c'est un morceau de lettre qui dépasse en haut ou en bas de la ligne.
Par exemple, la lettre **b** a un enjambement vers le haut. Regardez:

![](https://www.pngall.com/wp-content/uploads/2/B-Letter.png)

Cette [contrainte du prisonnier](https://www.pngall.com/wp-content/uploads/2/B-Letter.png) interdit donc les enjambements vers le haut (b, d, f, h, k, l, t) et vers le bas (g, j, p, q, y) en écriture script.

On autorisera les accents, même si ils augmentent sensiblement l'épaisseur du message.

# L'oeuvre

crions ce murmure: nous sommes en crise.  
sécu, encore sécu.  
armes en sac, non. venez.  
vie emmurée. caverne, environnement immuable.  
on avance en sous-marin.  
se casser, envie commune. mais ce mur vous rie au nez, aucun raccourci.  
un rêve vain me mue: courir.  
run, move as an eel  
we are mices in a maze.


---

Liberté !
Plus jamais enfermé dans télécom. Je peux quitter puis rejoindre, franchir les portes allègrement, les vigiles sont partis.  
Je profite de la place, en hauteur et en profondeur, pour me dégourdir les jambes.   
Moindre rayon de soleil, et je pars bronzer dans le parc.  


---

> Bien sûr, on peut s'amuser avec des variations sur cette contrainte typographique. 
> Par exemple, en faisant en sorte que tous les mots commencent avec un enjambement en bas et finissent avec un en haut :

grand garnement, quel pif !

quand gouvernement promet et pourrit parcimonieusement


> Ou inversement

beaucoup trop long boomerang


Par curiosité, je voulais savoir la liste de tous les mots qui respectent cette contrainte. C'est très facile à faire: 
1) construire l'expression régulière: `^[bdfhklt][aeioucmnrsuvwxz]*[gjpqy]$`
2) aller sur dcode pour rechercher les mots: https://www.dcode.fr/recherche-mot-regexp
3) lire le résultat

Et il s'avère que les mots qui descendent sont beaucoup plus rares que ceux qui montent. Vérifiez par vous même !


# Fin

Profitez de cette semaine de vacances pour vous évader, et ne restez pas enfermé dans votre style !

# Nous contacter

televerset@gmail.com