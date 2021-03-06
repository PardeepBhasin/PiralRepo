webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "html, body, #app, .app-container {\n  width: 100%;\n  min-height: 100%;\n  background: #fff; }\n\nhtml, body {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  font-family: 'Roboto', sans-serif; }\n\na {\n  text-decoration: none;\n  color: #56aa1c; }\n  a:hover {\n    color: #407e15; }\n\n.app-container {\n  flex: 1;\n  position: relative; }\n\n.app-notifications {\n  position: fixed;\n  display: flex;\n  align-items: flex-end;\n  flex-direction: column;\n  right: 2em;\n  top: 1em; }\n\n.app-container, #app {\n  display: flex;\n  flex-direction: column; }\n\n.app-content {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  padding: 0 2em; }\n\n.app-header {\n  display: flex;\n  flex-direction: column;\n  padding: 0 2em;\n  margin-bottom: 1em;\n  border: solid 1px black; }\n\n.app-center {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-grow: 1; }\n\n.app-footer {\n  font-size: 0.8em;\n  text-align: center;\n  margin: 1em 0; }\n\nul.app-nav {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: row;\n  align-content: space-between; }\n  ul.app-nav > li {\n    flex: 1;\n    text-align: center; }\n\n.spinner {\n  position: relative;\n  width: 50px;\n  height: 50px;\n  font-size: 0; }\n  .spinner:before, .spinner:after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    border-width: 4px;\n    border-style: solid;\n    border-radius: 50%; }\n\n@keyframes rotate-animation {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n@keyframes anti-rotate-animation {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(-360deg); } }\n\n.spinner.circles:before {\n  width: 42px;\n  height: 42px;\n  border-bottom-color: #56aa1c;\n  border-right-color: #56aa1c;\n  border-top-color: rgba(86, 170, 28, 0);\n  border-left-color: rgba(86, 170, 28, 0);\n  top: 0;\n  left: 0;\n  animation: rotate-animation 1s linear 0s infinite; }\n\n.spinner.circles:after {\n  width: 29.4px;\n  height: 29.4px;\n  border-bottom-color: #56aa1c;\n  border-right-color: #56aa1c;\n  border-top-color: rgba(86, 170, 28, 0);\n  border-left-color: rgba(86, 170, 28, 0);\n  top: 6.3px;\n  left: 6.3px;\n  animation: anti-rotate-animation 0.85s linear 0s infinite; }\n\n.tiles {\n  display: flex;\n  flex-wrap: wrap;\n  align-content: flex-start;\n  margin: -1em; }\n  .tiles .tile {\n    width: 200px;\n    height: 150px;\n    border: 1px solid #ccc;\n    box-shadow: 0 5px 5px #000;\n    margin: 1em;\n    padding: 1em;\n    display: flex;\n    flex-direction: column; }\n\n.notification {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  text-align: left;\n  padding: 0.8em;\n  background-color: #fff;\n  max-width: 500px;\n  position: relative;\n  box-shadow: 1px 7px 14px -5px rgba(0, 0, 0, 0.2); }\n  .notification + .notification {\n    margin-top: 1em; }\n  .notification.success:before {\n    background-color: #2BDE3F; }\n  .notification.error:before {\n    background-color: #e7431a; }\n  .notification.info:before {\n    background-color: #1D72F3; }\n  .notification.warning:before {\n    background-color: #FFC007; }\n  .notification:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 2px; }\n  .notification .notification-content .notification-title {\n    color: #3e3e3e;\n    font-weight: 700;\n    margin-top: 0;\n    margin-bottom: 8px; }\n  .notification .notification-content .notification-message {\n    font-size: 14px;\n    margin-top: 0;\n    margin-bottom: 0;\n    color: #878787; }\n  .notification .notification-close {\n    width: 14px;\n    cursor: pointer;\n    height: 14px;\n    fill: #878787;\n    margin-left: 1.2em;\n    margin-right: 1em; }\n\n.search {\n  margin-bottom: 2em;\n  position: relative; }\n  .search input[type=search] {\n    font-size: 1em;\n    border: 1px solid transparent;\n    background-color: #f1f1f1;\n    padding: 10px;\n    font-size: 16px;\n    width: 250px;\n    box-sizing: border-box; }\n  .search input[type=search]:focus + .search-results {\n    display: block; }\n  .search .search-results {\n    display: none;\n    position: absolute;\n    z-index: 99;\n    top: 100%;\n    width: 250px;\n    left: 0;\n    box-sizing: border-box;\n    background: #f0f0f0;\n    padding: 1px; }\n  .search .search-results-item {\n    padding: 10px;\n    cursor: pointer;\n    background-color: #fff;\n    border-bottom: 1px solid #d4d4d4; }\n  .search .search-results-item:hover {\n    background-color: #e9e9e9; }\n  .search .search-results-loading {\n    padding: 30px;\n    background-color: #fff; }\n\n.form-row {\n  margin: 1em; }\n  .form-row label {\n    display: block;\n    margin-bottom: 0.2em; }\n  .form-row input {\n    padding: 0.3rem;\n    font-size: 1rem; }\n  .form-row button {\n    padding: 0.5em 1em;\n    border: 1px solid black;\n    font-weight: bold;\n    border-radius: 4px;\n    cursor: pointer; }\n  .form-row button:disabled {\n    border: 1px solid #ccc;\n    color: #ccc;\n    cursor: default; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ })

})
//# sourceMappingURL=main.d4a68914a640033b9a75.hot-update.js.map