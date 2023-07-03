const gui = {
  "html": function html(element, html) {
    document.querySelector(element).innerHTML = html;
  },
  "css": function html(element, property, value) {
    document.querySelector(element).style[property] = value;
  },
  "t1": function(iner) {
    return "<h1>" + iner + "</h1>";
  },
  "t2": function(iner) {
    return "<h2>" + iner + "</h2>";
  },
  "t3": function(iner) {
    return "<h3>" + iner + "</h3>";
  },
  "t4": function(iner) {
    return "<h4>" + iner + "</h4>";
  },
  "t5": function(iner) {
    return "<h5>" + iner + "</h5>";
  },
  "t6": function(iner) {
    return "<h6>" + iner + "</h6>";
  },
  "p": function(iner) {
    return "<p>" + iner + "</p>";
  },
  "a": function(iner, href) {
    return "<a href='" + href + "'>" + iner + "</a>";
  },
  "img": function(src, alt) {
    return "<img src='" + src + "' alt='" + alt + "'>";
  },
  "div": function(iner) {
    return "<div>" + iner + "</div>";
  },
  "span": function(iner) {
    return "<span>" + iner + "</span>";
  },
  "ul": function(iner) {
    return "<ul>" + iner + "</ul>";
  },
  "li": function(iner) {
    return "<li>" + iner + "</li>";
  },
  "table": function(iner) {
    return "<table>" + iner + "</table>";
  },
  "tr": function(iner) {
    return "<tr>" + iner + "</tr>";
  },
  "td": function(iner) {
    return "<td>" + iner + "</td>";
  },
  "form": function(iner) {
    return "<form>" + iner + "</form>";
  },
  "input": function(type, value) {
    return "<input type='" + type + "' value='" + value + "'>";
  },
  "label": function(iner) {
    return "<label>" + iner + "</label>";
  },
  "button": function(iner) {
    return "<button>" + iner + "</button>";
  },
  "textarea": function(iner) {
    return "<textarea>" + iner + "</textarea>";
  },
  "select": function(iner) {
    return "<select>" + iner + "</select>";
  },
  "option": function(iner) {
    return "<option>" + iner + "</option>";
  },
  "nav": function(iner) {
    return "<nav>" + iner + "</nav>";
  },
  "header": function(iner) {
    return "<header>" + iner + "</header>";
  },
  "footer": function(iner) {
    return "<footer>" + iner + "</footer>";
  },
  "section": function(iner) {
    return "<section>" + iner + "</section>";
  },
  "article": function(iner) {
    return "<article>" + iner + "</article>";
  },
  "aside": function(iner) {
    return "<aside>" + iner + "</aside>";
  },
  "main": function(iner) {
    return "<main>" + iner + "</main>";
  },
  "figure": function(iner) {
    return "<figure>" + iner + "</figure>";
  },
  "figcaption": function(iner) {
    return "<figcaption>" + iner + "</figcaption>";
  },
  "blockquote": function(iner) {
    return "<blockquote>" + iner + "</blockquote>";
  },
  "cite": function(iner) {
    return "<cite>" + iner + "</cite>";
  },
  "hr": function() {
    return "<hr>";
  },
  "br": function() {
    return "<br>";
  },
  "strong": function(iner) {
    return "<strong>" + iner + "</strong>";
  },
  "em": function(iner) {
    return "<em>" + iner + "</em>";
  },
  "pre": function(iner) {
    return "<pre>" + iner + "</pre>";
  },
  "code": function(iner) {
    return "<code>" + iner + "</code>";
  },
  "samp": function(iner) {
    return "<samp>" + iner + "</samp>";
  },
  "kbd": function(iner) {
    return "<kbd>" + iner + "</kbd>";
  },
  "var": function(iner) {
    return "<var>" + iner + "</var>";
  },
  "mark": function(iner) {
    return "<mark>" + iner + "</mark>";
  },
  "ruby": function(iner) {
    return "<ruby>" + iner + "</ruby>";
  },
  "rt": function(iner) {
    return "<rt>" + iner + "</rt>";
  },
  "rp": function(iner) {
    return "<rp>" + iner + "</rp>";
  },
  "datalist": function(iner) {
    return "<datalist>" + iner + "</datalist>";
  },
  "optgroup": function(iner) {
    return "<optgroup>" + iner + "</optgroup>";
  },
  "progress": function(value, max) {
    return "<progress value='" + value + "' max='" + max + "'></progress>";
  },
  "meter": function(value, min, max) {
    return "<meter value='" + value + "' min='" + min + "' max='" + max + "'></meter>";
  },
  "fieldset": function(iner) {
    return "<fieldset>" + iner + "</fieldset>";
  },
  "legend": function(iner) {
    return "<legend>" + iner + "</legend>";
  },
  "canvas": function(width, height) {
    return "<canvas width='" + width + "' height='" + height + "'></canvas>";
  },
  "video": function(src, controls) {
    return "<video src='" + src + "' controls='" + controls + "'></video>";
  },
  "audio": function(src, controls) {
    return "<audio src='" + src + "' controls='" + controls + "'></audio>";
  },
  "source": function(src, type) {
    return "<source src='" + src + "' type='" + type + "'>";
  },
  "iframe": function(src) {
    return "<iframe src='" + src + "'></iframe>";
  },
  "object": function(data, type) {
    return "<object data='" + data + "' type='" + type + "'></object>";
  },
  "param": function(name, value) {
    return "<param name='" + name + "' value='" + value + "'>";
  },
  "embed": function(src, type) {
    return "<embed src='" + src + "' type='" + type + "'>";
  },
  "applet": function(code, width, height) {
    return "<applet code='" + code + "' width='" + width + "' height='" + height + "'></applet>";
  },
  "map": function(iner) {
    return "<map>" + iner + "</map>";
  },
  "area": function(shape, coords, href, alt) {
    return "<area shape='" + shape + "' coords='" + coords + "' href='" + href + "' alt='" + alt + "'>";
  },
  "base": function(href) {
    return "<base href='" + href + "'>";
  },
  "meta": function(name, content) {
    return "<meta name='" + name + "' content='" + content + "'>";
  },
  "style": function(iner) {
    return "<style>" + iner + "</style>";
  },
  "script": function(src) {
    return "<script src='" + src + "'></script>";
  },
  "noscript": function(iner) {
    return "<noscript>" + iner + "</noscript>";
  },
  "del": function(iner) {
    return "<del>" + iner + "</del>";
  },
  "ins": function(iner) {
    return "<ins>" + iner + "</ins>";
  },
  "sub": function(iner) {
    return "<sub>" + iner + "</sub>";
  },
  "sup": function(iner) {
    return "<sup>" + iner + "</sup>";
  },
  "b": function(iner) {
    return "<b>" + iner + "</b>";
  },
  "i": function(iner) {
    return "<i>" + iner + "</i>";
  },
  "u": function(iner) {
    return "<u>" + iner + "</u>";
  },
  "s": function(iner) {
    return "<s>" + iner + "</s>";
  },
  "abbr": function(iner) {
    return "<abbr>" + iner + "</abbr>";
  },
  "address": function(iner) {
    return "<address>" + iner + "</address>";
  },
  "article": function(iner) {
    return "<article>" + iner + "</article>";
  },
  "bdi": function(iner) {
    return "<bdi>" + iner + "</bdi>";
  },
  "bdo": function(iner) {
    return "<bdo>" + iner + "</bdo>";
  },
  "cite": function(iner) {
    return "<cite>" + iner + "</cite>";
  },
  "data": function(iner) {
    return "<data>" + iner + "</data>";
  },
  "dfn": function(iner) {
    return "<dfn>" + iner + "</dfn>";
  },
  "figcaption": function(iner) {
    return "<figcaption>" + iner + "</figcaption>";
  },
  "figure": function(iner) {
    return "<figure>" + iner + "</figure>";
  },
  "kbd": function(iner) {
    return "<kbd>" + iner + "</kbd>";
  },
  "mark": function(iner) {
    return "<mark>" + iner + "</mark>";
  },
  "q": function(iner) {
    return "<q>" + iner + "</q>";
  },
  "samp": function(iner) {
    return "<samp>" + iner + "</samp>";
  },
  "small": function(iner) {
    return "<small>" + iner + "</small>";
  },
  "strong": function(iner) {
    return "<strong>" + iner + "</strong>";
  },
  "sub": function(iner) {
    return "<sub>" + iner + "</sub>";
  },
  "sup": function(iner) {
    return "<sup>" + iner + "</sup>";
  },
  "time": function(iner) {
    return "<time>" + iner + "</time>";
  },
  "tt": function(iner) {
    return "<tt>" + iner + "</tt>";
  },
  "var": function(iner) {
    return "<var>" + iner + "</var>";
  },
  "wbr": function() {
    return "<wbr>";
  },
  selec: function(query) {
    return document.querySelector(query);
  },

  selecAll: function(query) {
    return document.querySelectorAll(query);
  },

  create: function(element) {
    return document.createElement(element);
  },

  append: function(parent, child) {
    parent.appendChild(child);
  },

  remove: function(element) {
    element.parentNode.removeChild(element);
  },

  text: function(element, content) {
    element.textContent = content;
  },

  html: function(element, content) {
    element.innerHTML = content;
  },

  attr: function(element, attribute, value) {
    element.setAttribute(attribute, value);
  },

  removeAttr: function(element, attribute) {
    element.removeAttribute(attribute);
  },

  addClass: function(element, className) {
    element.classList.add(className);
  },

  removeClass: function(element, className) {
    element.classList.remove(className);
  },

  toggleClass: function(element, className) {
    element.classList.toggle(className);
  },

  hasClass: function(element, className) {
    return element.classList.contains(className);
  },

  on: function(element, event, callback) {
    element.addEventListener(event, callback);
  },

  off: function(element, event, callback) {
    element.removeEventListener(event, callback);
  },

  trigger: function(element, event) {
    element.dispatchEvent(new Event(event));
  },

  parent: function(element) {
    return element.parentNode;
  },

  children: function(element) {
    return element.children;
  },

  next: function(element) {
    return element.nextElementSibling;
  },

  prev: function(element) {
    return element.previousElementSibling;
  },

  clone: function(element) {
    return element.cloneNode(true);
  },

  style: function(element, property, value) {
    element.style[property] = value;
  },

  width: function(element) {
    return element.offsetWidth;
  },

  height: function(element) {
    return element.offsetHeight;
  },

  offset: function(element) {
    return {
      top: element.offsetTop,
      left: element.offsetLeft
    };
  },

  scrollTop: function(element) {
    if (element === window) {
      return window.pageYOffset;
    } else {
      return element.scrollTop;
    }
  },

  scrollLeft: function(element) {
    if (element === window) {
      return window.pageXOffset;
    } else {
      return element.scrollLeft;
    }
  },

  scrollTo: function(element, top, left) {
    if (element === window) {
      window.scrollTo(left, top);
    } else {
      element.scrollTop = top;
      element.scrollLeft = left;
    }
  },

  fadeIn: function(element, duration) {
    element.style.transition = "opacity " + duration + "ms";
    element.style.opacity = "1";
  },

  fadeOut: function(element, duration) {
    element.style.transition = "opacity " + duration + "ms";
    element.style.opacity = "0";
    setTimeout(function() {
      element.style.display = "none";
    }, duration);
  },

  show: function(element) {
    element.style.display = "block";
  },

  hide: function(element) {
    element.style.display = "none";
  },

  toggle: function(element) {
    if (window.getComputedStyle(element).display === "none") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  },

  empty: function(element) {
    element.innerHTML = "";
  },

  contains: function(parent, child) {
    return parent.contains(child);
  },

  closest: function(element, selector) {
    return element.closest(selector);
  },

  find: function(element, selector) {
    return element.querySelector(selector);
  },
  findAll: function(element, selector) {
    return element.querySelectorAll(selector);
  },

  focus: function(element) {
    element.focus();
  },

  blur: function(element) {
    element.blur();
  },

  submit: function(form) {
    form.submit();
  },
  serialize: function serialize(form) {
    var formData = new FormData(form);
    var data = {};
    for (var pair of formData.entries()) {
      data[pair[0]] = pair[1];
    }
    return data;
  },

  ajax: function ajax(options) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          options.success(xhr.responseText);
        } else {
          options.error(xhr.status);
        }
      }
    };
    xhr.open(options.method, options.url, true);
    xhr.send(options.data);
  }


}

function W3BVM_GUI(element, argument1, arg2, arg3) {
  return gui[element](argument1, arg2, arg3)
}

function interval(ms, functionSleep) {
  setInterval(functionSleep, ms)
}
// Fonction pour créer un répertoire ou un fichier dans un répertoire
function mkdir(path, content = null) {
  const fileSystem = getFileSystem();
  const { directory, name } = parsePath(path);

  if (directory) {
    const directoryData = fileSystem[directory] || {};
    directoryData[name] = content;
    fileSystem[directory] = directoryData;
  } else {
    fileSystem[name] = content;
  }

  saveFileSystem(fileSystem);
}

// Fonction pour lire le contenu d'un fichier
function cat(filePath) {
  const fileSystem = getFileSystem();
  const { directory, name } = parsePath(filePath);

  if (directory) {
    const directoryData = fileSystem[directory];
    if (directoryData && typeof directoryData === "object") {
      return directoryData[name];
    }
  } else {
    return fileSystem[name];
  }

  return null;
}

// Fonction pour mettre à jour le contenu d'un fichier
function vi(filePath, newContent) {
  const fileSystem = getFileSystem();
  const { directory, name } = parsePath(filePath);

  if (directory) {
    const directoryData = fileSystem[directory];
    if (directoryData && typeof directoryData === "object") {
      directoryData[name] = newContent;
      saveFileSystem(fileSystem);
    }
  } else {
    fileSystem[name] = newContent;
    saveFileSystem(fileSystem);
  }
}

// Fonction pour supprimer un répertoire ou un fichier
function rm(path) {
  const fileSystem = getFileSystem();
  const { directory, name } = parsePath(path);

  if (directory) {
    const directoryData = fileSystem[directory];
    if (directoryData && typeof directoryData === "object") {
      delete directoryData[name];
      saveFileSystem(fileSystem);
    }
  } else {
    delete fileSystem[name];
    saveFileSystem(fileSystem);
  }
}

// Fonction utilitaire pour obtenir le système de fichiers
function getFileSystem() {
  const fileSystemStr = localStorage.getItem("FileSystem");
  return fileSystemStr ? JSON.parse(fileSystemStr) : {};
}

// Fonction utilitaire pour enregistrer le système de fichiers
function saveFileSystem(fileSystem) {
  localStorage.setItem("FileSystem", JSON.stringify(fileSystem));
}

// Fonction utilitaire pour extraire le répertoire et le nom du fichier d'un chemin de fichier
function parsePath(filePath) {
  const parts = filePath.split("/");
  const name = parts.pop();
  const directory = parts.join("/");
  return {
    directory,
    name,
  };
}

function ls(directory) {
  const fileSystem = getFileSystem();
  const fileList = [];

  for (const path in fileSystem) {
    if (path === directory || path.startsWith(directory + "/")) {
      const filePath = path.substring(directory.length);
      const parts = filePath.split("/");
      const name = parts.filter(Boolean)[0];

      if (name && !fileList.includes(name)) {
        fileList.push(name);
      }
    }
  }

  return fileList;
}
export function W3bVM_Env() {
  this.execute = function(code, options) {
    eval(code + `
      if (typeof MAIN === "function") {
        MAIN();
      }
      if (typeof UPDATE === "function") {
        if (options && options.interval != undefined) {
          setInterval(() => {
            UPDATE();
          }, options.interval);
        } else {
          setInterval(() => {
            UPDATE();
          }, 10);
        }
      }
    `);
  }
}
function exec() {
  // Do nothing
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}