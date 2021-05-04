webpackHotUpdate("main",{

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");
/* harmony import */ var piral_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! piral-menu */ "./node_modules/piral-menu/esm/index.js");
/* harmony import */ var piral_feeds__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! piral-feeds */ "./node_modules/piral-feeds/esm/index.js");
/* harmony import */ var piral_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! piral-forms */ "./node_modules/piral-forms/esm/index.js");
/* harmony import */ var piral_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! piral-notifications */ "./node_modules/piral-notifications/esm/index.js");
/* harmony import */ var piral_dashboard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! piral-dashboard */ "./node_modules/piral-dashboard/esm/index.js");
/* harmony import */ var piral_containers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! piral-containers */ "./node_modules/piral-containers/esm/index.js");
/* harmony import */ var piral_search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! piral-search */ "./node_modules/piral-search/esm/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }












customElements.define('pi-spinner', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);

  var _super = _createSuper(_class);

  function _class() {
    _classCallCheck(this, _class);

    return _super.call(this);
  }

  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.classList.add('spinner', 'circles');
    }
  }]);

  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));

var Loader = function Loader() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "app-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("pi-spinner", null, "Loading ..."));
};

var Sitemap = function Sitemap() {
  var pages = Object(piral_core__WEBPACK_IMPORTED_MODULE_3__["useGlobalState"])(function (s) {
    return s.registry.pages;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/"
  }, "Go to /")), Object.keys(pages).map(function (url) {
    return url.replace(':id', "".concat(~~(Math.random() * 1000)));
  }).map(function (url) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
      key: url
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: url
    }, "Go to ", url));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/sitemap"
  }, "Go to /sitemap")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/not-found"
  }, "Go to /not-found")));
};

var Menu = function Menu() {
  var menuItems = Object(piral_core__WEBPACK_IMPORTED_MODULE_3__["useGlobalState"])(function (s) {
    return s.registry.menuItems;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", {
    className: "app-nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/"
  }, "Home")), Object.keys(menuItems).map(function (name) {
    var item = menuItems[name];

    if (item.settings.type === 'general') {
      var Component = item.component;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
        key: name
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, null));
    }

    return undefined;
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/sitemap"
  }, "Sitemap")));
};

var SearchResults = function SearchResults() {
  var _useGlobalState = Object(piral_core__WEBPACK_IMPORTED_MODULE_3__["useGlobalState"])(function (m) {
    return m.search.results;
  }),
      loading = _useGlobalState.loading,
      items = _useGlobalState.items;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "search-results"
  }, items.map(function (item, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "search-results-item",
      key: i
    }, item);
  }), loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "search-results-loading"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Loader, null)));
};

var SearchForm = function SearchForm() {
  var _useSearch = Object(piral_search__WEBPACK_IMPORTED_MODULE_10__["useSearch"])(),
      _useSearch2 = _slicedToArray(_useSearch, 2),
      value = _useSearch2[0],
      setValue = _useSearch2[1];

  var search = Object(piral_core__WEBPACK_IMPORTED_MODULE_3__["useAction"])('triggerSearch');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", {
    className: "search",
    onSubmit: function onSubmit(ev) {
      search(value, true);
      return ev.preventDefault();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
    type: "search",
    placeholder: "Search",
    onChange: function onChange(e) {
      return setValue(e.target.value);
    },
    value: value
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](SearchResults, null));
};

var Notifications = function Notifications() {
  var notifications = Object(piral_core__WEBPACK_IMPORTED_MODULE_3__["useGlobalState"])(function (s) {
    return s.notifications;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "app-notifications"
  }, notifications.map(function (_ref) {
    var id = _ref.id,
        close = _ref.close,
        options = _ref.options,
        Component = _ref.component;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "notification ".concat(options.type || 'info'),
      key: id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "notification-content"
    }, options.title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "notification-title"
    }, options.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "notification-message"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, {
      onClose: close,
      options: options
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "notification-close",
      onClick: close
    }, "close"));
  }));
};

var Layout = function Layout(_ref2) {
  var children = _ref2.children;
  var layout = Object(piral_core__WEBPACK_IMPORTED_MODULE_3__["useGlobalState"])(function (s) {
    return s.app.layout;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "app-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "app-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", null, "Appshell Main Application (", layout, ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "app-content"
  }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "app-footer"
  }, "For more information or the source code check out our", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "https://github.com/smapiot/piral"
  }, "GitHub repository"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Notifications, null));
};

var instance = Object(piral_core__WEBPACK_IMPORTED_MODULE_3__["createInstance"])({
  plugins: [Object(piral_menu__WEBPACK_IMPORTED_MODULE_4__["createMenuApi"])(), Object(piral_notifications__WEBPACK_IMPORTED_MODULE_7__["createNotificationsApi"])(), Object(piral_containers__WEBPACK_IMPORTED_MODULE_9__["createContainersApi"])(), Object(piral_dashboard__WEBPACK_IMPORTED_MODULE_8__["createDashboardApi"])(), Object(piral_feeds__WEBPACK_IMPORTED_MODULE_5__["createFeedsApi"])(), Object(piral_forms__WEBPACK_IMPORTED_MODULE_6__["createFormsApi"])(), Object(piral_search__WEBPACK_IMPORTED_MODULE_10__["createSearchApi"])()],
  requestPilets: function requestPilets() {
    return fetch('http://localhost:9001/api/v1/pilet').then(function (res) {
      return res.json();
    }).then(function (res) {
      return res.items;
    });
  }
});
var app = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](piral_core__WEBPACK_IMPORTED_MODULE_3__["Piral"], {
  instance: instance
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](piral_core__WEBPACK_IMPORTED_MODULE_3__["SetComponent"], {
  name: "Layout",
  component: Layout
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](piral_core__WEBPACK_IMPORTED_MODULE_3__["SetRoute"], {
  path: "/",
  component: piral_dashboard__WEBPACK_IMPORTED_MODULE_8__["Dashboard"]
}));
Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])(app, document.querySelector('#app'));

/***/ })

})
//# sourceMappingURL=main.34165cb367ff6a5f9477.hot-update.js.map