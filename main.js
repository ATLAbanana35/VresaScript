import { CompileEnv } from "./compilator.js"
import { W3bVM_Env } from "./W3bVM.lib.js"
const FUN = {
  "print": {
    "equ_js": "console.log",
  },
  "GUI": {
    "equ_js": "W3BVM_GUI"
  },
  "floor": {
    "equ_js": " Math.floor"
  },
  "ceil": {
    "equ_js": " Math.ceil"
  },
  "round": {
    "equ_js": " Math.round"
  },
  "abs": {
    "equ_js": "Math.abs"
  },
  "sqrt": {
    "equ_js": "Math.sqrt"
  },
  "pow": {
    "equ_js": "Math.pow"
  },
  "max": {
    "equ_js": "Math.max"
  },
  "min": {
    "equ_js": "Math.min"
  },
  "sin": {
    "equ_js": "Math.sin"
  },
  "cos": {
    "equ_js": "Math.cos"
  },
  "tan": {
    "equ_js": "Math.tan"
  },
  "asin": {
    "equ_js": "Math.asin"
  },
  "acos": {
    "equ_js": "Math.acos"
  },
  "atan": {
    "equ_js": "Math.atan"
  },
  "exp": {
    "equ_js": "Math.exp"
  },
  "log": {
    "equ_js": "Math.log"
  },
  "random": {
    "equ_js": "Math.random"
  },
  "parseInt": {
    "equ_js": "parseInt"
  },
  "parseFloat": {
    "equ_js": "parseFloat"
  },
  "isFinite": {
    "equ_js": "isFinite"
  },
  "isNaN": {
    "equ_js": "isNaN"
  },
  "encodeURI": {
    "equ_js": "encodeURI"
  },
  "encodeURIComponent": {
    "equ_js": "encodeURIComponent"
  },
  "decodeURI": {
    "equ_js": "decodeURI"
  },
  "decodeURIComponent": {
    "equ_js": "decodeURIComponent"
  },
  "JSON.parse": {
    "equ_js": "JSON.parse"
  },
  "JSON.stringify": {
    "equ_js": "JSON.stringify"
  },
  "Object.keys": {
    "equ_js": "Object.keys"
  },
  "Object.values": {
    "equ_js": "Object.values"
  },
  "Object.entries": {
    "equ_js": "Object.entries"
  },
  "Object.assign": {
    "equ_js": "Object.assign"
  },
    "mkdir": {
    "equ_js": "mkdir"
  },
    "ls": {
    "equ_js": "ls"
  },
    "cat": {
    "equ_js": "cat"
  },
    "vi": {
    "equ_js": "vi"
  },
    "rm": {
    "equ_js": "rm"
  },
    "system.getFileSystem": {
    "equ_js": "getFileSystem"
  },
    "system.saveFileSystem": {
    "equ_js": "saveFileSystem"
  },
    "system.parsePath": {
    "equ_js": "parsePath"
  },
  
};
const ExecutionEnv = new W3bVM_Env();
const JSVM = new CompileEnv;
JSVM.funs = FUN;
JSVM.reloadParams();
const compileCode = JSVM.COMPILE(`
  + MonMessage = <EXE>
  $:"Hello World"
  EXE
  fun MAIN <END>
    print ( MonMessage.$ )
    print (% random () )
  END
  `)
ExecutionEnv.execute(compileCode);