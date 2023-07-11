// Compilator of VersScript
export function COMPILATOR() {
  self = this;

  // GUI LIB (dom)
  function getPosition(string, subString, index) {
    return string.split(subString, index).join(subString).length;
  }

  function countOccurrences(string, target) {
    // Utilisation de split pour diviser la chaîne en un tableau en utilisant le caractère cible comme délimiteur
    // Utilisation de length pour obtenir le nombre d'éléments dans le tableau, qui correspondra au nombre d'occurrences
    return string.split(target).length - 1;
  }
  this.spes = {
    "fun": {
      "js::element": "function ",
      "NEXT": "type",
      "fun_key": "()",
      "brut": false
    },
    "%": {
      "js::element": "var",
      "NEXT": "type",
      "fun_key": " = ",
      "brut": true
    },
  }
  this.funs = {
    "print": {
      "equ_js": "console.log",
    },
    "gui": {
      "equ_js": "html"
    }
  }

  this.chaine = `
+ MonMessage = <EXE>
$:"Hello World"
EXE
fun MAIN <END>
  print ( MonMessage.$ )
END
`
  this.compil3r = function compil3r(string) {
    let CODE = ``
    //verify lignes
    let lignechaine = string.split("\n");
    for (var ii = 0; ii < lignechaine.length; ii++) {
      let ligne = lignechaine[ii];
      let spaceligne = ligne.split(" ");
      let NEXT = "new"
      let iftype = {
        "name": undefined,
        "type": undefined,
        "isActive": false,
        "innerCODE": "",
        "endkeyword": "END",
        "fun_autre": "()"
      }
      for (var x = 0; x < spaceligne.length; x++) {
        let space = spaceligne[x];
        if (NEXT == "type") {
          iftype.name = space;
          NEXT = "name"
        }
        if (space[0] == "<") {
          let ch_keyword = ""
          for (var i = 1; i < space.length - 1; i++) {
            ch_keyword += space[i]
          }
          iftype.endkeyword = ch_keyword;
          let start = string.indexOf(ch_keyword) + ch_keyword.length + 1;
          let end = getPosition(string, ch_keyword, 2);
          let STRING_TO_COMPILE = string.substring(start, end);
          let occ = countOccurrences(STRING_TO_COMPILE, "\n");
          ii += occ;
          if (iftype.brut == false) {
            iftype.innerCODE = self.compil3r(STRING_TO_COMPILE, true);
          } else {
            iftype.innerCODE = STRING_TO_COMPILE;
          }
          CODE += `
        ${iftype.type} ${iftype.name}${iftype.fun_autre} {
          ${iftype.innerCODE}
        }
        `
        }
        for (const prop in self.spes) {
          if (Object.hasOwn(self.spes, prop)) {
            if (space == prop) {
              let element = self.spes[prop]
              let NEXT2 = element["NEXT"];
              if (NEXT2 == "type") {
                iftype.isActive = true
                iftype.type = element["js::element"];
                iftype.fun_autre = element.fun_key;
                iftype.brut = element.brut;
              }
              NEXT = element["NEXT"];
            }
          }
        }
        for (const prop in self.funs) {
          if (Object.hasOwn(self.funs, prop)) {
            if (space == prop) {
              let ch_keyword = "("
              let start = ligne.indexOf(ch_keyword) + 1;
              let end = getPosition(ligne, ")", 1);
              let STRING_TO_ARG = ligne.substring(start, end);
              if (ligne[start] == "%") {
                end = ligne.lastIndexOf(")");
                start += 1;
                STRING_TO_ARG = ligne.substring(start, end);
                STRING_TO_ARG = compil3r(STRING_TO_ARG);
                x = 10
              }
              CODE += `
            ${self.funs[prop]["equ_js"]}(${STRING_TO_ARG})
            `
            }
          }
        }
      }
    }
    return CODE;
  }
}