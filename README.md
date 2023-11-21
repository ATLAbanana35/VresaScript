Voici une documentation de base pour votre langage "VersScript" (Version C + JS), ici doc de la V C : https://github.com/ATLAbanana35/VresaScript/blob/main/c/doc/syntaxe.md

---
# Documentation de VersScript

## Introduction
VersScript est un langage de programmation simple et polyvalent qui combine des éléments du langage htaccess, de l'assembleur et d'autres langages. Il permet aux développeurs d'écrire du code de manière concise et expressive, en utilisant des directives spéciales pour différentes fonctionnalités.

## Syntaxe de base
### Déclaration de fonctions
La déclaration de fonction dans VersScript utilise le mot-clé `fun`. Voici un exemple :

```VersScript
fun nomDeLaFonction <FINNOM>
  // Code de la fonction ici
FINNOM
```

### Déclaration de variables
La déclaration de variable dans VersScript utilise le symbole `%`. Voici un exemple :

```VersScript
% nomDeVariable = valeur
```

### Appel de fonctions intégrées
VersScript fournit plusieurs fonctions intégrées pour des opérations courantes. Vous pouvez les appeler en utilisant leur nom suivi de parenthèses `()` contenant les arguments. Voici un exemple :
#### ATTENTION A METTRE DES ESPACES
```VersScript
nomDeFonction ( arg1, arg2 )
```

## Directives spéciales
VersScript utilise des directives spéciales pour configurer des fonctionnalités avancées. Voici quelques-unes des directives les plus couramment utilisées :

### Directive d'options
DANS LA V0.1 LES CONFIG NE SONT PAS DISPO
### Directive de nombre
La directive `%number` permet de déclarer une variable de type nombre. Voici un exemple :

```VersScript
%number <ENDNUMBER>
  0
ENDNUMBER
```

## Exemple de code
Voici un exemple de code VersScript pour afficher "Hello World" :

```VersScript
+ MonMessage = <EXE>
"Hello World"
EXE
fun MAIN <END>
  print ( MonMessage.$ )
END
```
