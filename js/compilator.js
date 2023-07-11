import { COMPILATOR } from "./READER.js";

export function CompileEnv() {
  const self = this;
  this.JSVM_READER = new COMPILATOR();
  this.specs = {
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
    }
  };
  this.funs = {
    "print": {
      "equ_js": "console.log",
    },
    "gui": {
      "equ_js": "html"
    }
  };
  this.JSVM_READER.specs = this.specs;
  this.JSVM_READER.funs = this.funs;
  this.reloadParams = function reloadParams() {
    self.JSVM_READER.specs = self.specs;
  self.JSVM_READER.funs = this.funs;
  }
  this.result = "";
  this.COMPILE = function(code) {
    const JSVM_RESULT = self.JSVM_READER.compil3r(code);
    self.result = JSVM_RESULT;
    return JSVM_RESULT;
  };
}