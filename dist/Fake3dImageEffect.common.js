module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "1f5e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _Fake3dImageEffect_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b0e5");
// Import vue component

var plugin = {
  Fake3dImageEffect: _Fake3dImageEffect_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
  installed: false,
  install: function install(Vue) {
    if (plugin.installed) return;
    plugin.installed = true;
    Vue.component(_Fake3dImageEffect_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].name, _Fake3dImageEffect_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
  }
}; // Auto install for browsers

var GlobalVue = null;
if (typeof window !== 'undefined') GlobalVue = window.Vue;else if (typeof global !== 'undefined') GlobalVue = global.Vue;
GlobalVue && GlobalVue.use(plugin); // To allow use as module (npm/webpack/etc.) export component

/* harmony default export */ __webpack_exports__["a"] = (plugin);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "21a6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_id_1a722e3a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ec93");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_id_1a722e3a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_id_1a722e3a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_id_1a722e3a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "4317":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {var require;var __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
 * @version   3.0.2
 */

(function() {
    "use strict";
    function lib$es6$promise$utils$$objectOrFunction(x) {
      return typeof x === 'function' || (typeof x === 'object' && x !== null);
    }

    function lib$es6$promise$utils$$isFunction(x) {
      return typeof x === 'function';
    }

    function lib$es6$promise$utils$$isMaybeThenable(x) {
      return typeof x === 'object' && x !== null;
    }

    var lib$es6$promise$utils$$_isArray;
    if (!Array.isArray) {
      lib$es6$promise$utils$$_isArray = function (x) {
        return Object.prototype.toString.call(x) === '[object Array]';
      };
    } else {
      lib$es6$promise$utils$$_isArray = Array.isArray;
    }

    var lib$es6$promise$utils$$isArray = lib$es6$promise$utils$$_isArray;
    var lib$es6$promise$asap$$len = 0;
    var lib$es6$promise$asap$$toString = {}.toString;
    var lib$es6$promise$asap$$vertxNext;
    var lib$es6$promise$asap$$customSchedulerFn;

    var lib$es6$promise$asap$$asap = function asap(callback, arg) {
      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len] = callback;
      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len + 1] = arg;
      lib$es6$promise$asap$$len += 2;
      if (lib$es6$promise$asap$$len === 2) {
        // If len is 2, that means that we need to schedule an async flush.
        // If additional callbacks are queued before the queue is flushed, they
        // will be processed by this flush that we are scheduling.
        if (lib$es6$promise$asap$$customSchedulerFn) {
          lib$es6$promise$asap$$customSchedulerFn(lib$es6$promise$asap$$flush);
        } else {
          lib$es6$promise$asap$$scheduleFlush();
        }
      }
    }

    function lib$es6$promise$asap$$setScheduler(scheduleFn) {
      lib$es6$promise$asap$$customSchedulerFn = scheduleFn;
    }

    function lib$es6$promise$asap$$setAsap(asapFn) {
      lib$es6$promise$asap$$asap = asapFn;
    }

    var lib$es6$promise$asap$$browserWindow = (typeof window !== 'undefined') ? window : undefined;
    var lib$es6$promise$asap$$browserGlobal = lib$es6$promise$asap$$browserWindow || {};
    var lib$es6$promise$asap$$BrowserMutationObserver = lib$es6$promise$asap$$browserGlobal.MutationObserver || lib$es6$promise$asap$$browserGlobal.WebKitMutationObserver;
    var lib$es6$promise$asap$$isNode = typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

    // test for web worker but not in IE10
    var lib$es6$promise$asap$$isWorker = typeof Uint8ClampedArray !== 'undefined' &&
      typeof importScripts !== 'undefined' &&
      typeof MessageChannel !== 'undefined';

    // node
    function lib$es6$promise$asap$$useNextTick() {
      // node version 0.10.x displays a deprecation warning when nextTick is used recursively
      // see https://github.com/cujojs/when/issues/410 for details
      return function() {
        process.nextTick(lib$es6$promise$asap$$flush);
      };
    }

    // vertx
    function lib$es6$promise$asap$$useVertxTimer() {
      return function() {
        lib$es6$promise$asap$$vertxNext(lib$es6$promise$asap$$flush);
      };
    }

    function lib$es6$promise$asap$$useMutationObserver() {
      var iterations = 0;
      var observer = new lib$es6$promise$asap$$BrowserMutationObserver(lib$es6$promise$asap$$flush);
      var node = document.createTextNode('');
      observer.observe(node, { characterData: true });

      return function() {
        node.data = (iterations = ++iterations % 2);
      };
    }

    // web worker
    function lib$es6$promise$asap$$useMessageChannel() {
      var channel = new MessageChannel();
      channel.port1.onmessage = lib$es6$promise$asap$$flush;
      return function () {
        channel.port2.postMessage(0);
      };
    }

    function lib$es6$promise$asap$$useSetTimeout() {
      return function() {
        setTimeout(lib$es6$promise$asap$$flush, 1);
      };
    }

    var lib$es6$promise$asap$$queue = new Array(1000);
    function lib$es6$promise$asap$$flush() {
      for (var i = 0; i < lib$es6$promise$asap$$len; i+=2) {
        var callback = lib$es6$promise$asap$$queue[i];
        var arg = lib$es6$promise$asap$$queue[i+1];

        callback(arg);

        lib$es6$promise$asap$$queue[i] = undefined;
        lib$es6$promise$asap$$queue[i+1] = undefined;
      }

      lib$es6$promise$asap$$len = 0;
    }

    function lib$es6$promise$asap$$attemptVertx() {
      try {
        var r = require;
        var vertx = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'vertx'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
        lib$es6$promise$asap$$vertxNext = vertx.runOnLoop || vertx.runOnContext;
        return lib$es6$promise$asap$$useVertxTimer();
      } catch(e) {
        return lib$es6$promise$asap$$useSetTimeout();
      }
    }

    var lib$es6$promise$asap$$scheduleFlush;
    // Decide what async method to use to triggering processing of queued callbacks:
    if (lib$es6$promise$asap$$isNode) {
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useNextTick();
    } else if (lib$es6$promise$asap$$BrowserMutationObserver) {
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMutationObserver();
    } else if (lib$es6$promise$asap$$isWorker) {
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMessageChannel();
    } else if (lib$es6$promise$asap$$browserWindow === undefined && "function" === 'function') {
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$attemptVertx();
    } else {
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useSetTimeout();
    }

    function lib$es6$promise$$internal$$noop() {}

    var lib$es6$promise$$internal$$PENDING   = void 0;
    var lib$es6$promise$$internal$$FULFILLED = 1;
    var lib$es6$promise$$internal$$REJECTED  = 2;

    var lib$es6$promise$$internal$$GET_THEN_ERROR = new lib$es6$promise$$internal$$ErrorObject();

    function lib$es6$promise$$internal$$selfFulfillment() {
      return new TypeError("You cannot resolve a promise with itself");
    }

    function lib$es6$promise$$internal$$cannotReturnOwn() {
      return new TypeError('A promises callback cannot return that same promise.');
    }

    function lib$es6$promise$$internal$$getThen(promise) {
      try {
        return promise.then;
      } catch(error) {
        lib$es6$promise$$internal$$GET_THEN_ERROR.error = error;
        return lib$es6$promise$$internal$$GET_THEN_ERROR;
      }
    }

    function lib$es6$promise$$internal$$tryThen(then, value, fulfillmentHandler, rejectionHandler) {
      try {
        then.call(value, fulfillmentHandler, rejectionHandler);
      } catch(e) {
        return e;
      }
    }

    function lib$es6$promise$$internal$$handleForeignThenable(promise, thenable, then) {
       lib$es6$promise$asap$$asap(function(promise) {
        var sealed = false;
        var error = lib$es6$promise$$internal$$tryThen(then, thenable, function(value) {
          if (sealed) { return; }
          sealed = true;
          if (thenable !== value) {
            lib$es6$promise$$internal$$resolve(promise, value);
          } else {
            lib$es6$promise$$internal$$fulfill(promise, value);
          }
        }, function(reason) {
          if (sealed) { return; }
          sealed = true;

          lib$es6$promise$$internal$$reject(promise, reason);
        }, 'Settle: ' + (promise._label || ' unknown promise'));

        if (!sealed && error) {
          sealed = true;
          lib$es6$promise$$internal$$reject(promise, error);
        }
      }, promise);
    }

    function lib$es6$promise$$internal$$handleOwnThenable(promise, thenable) {
      if (thenable._state === lib$es6$promise$$internal$$FULFILLED) {
        lib$es6$promise$$internal$$fulfill(promise, thenable._result);
      } else if (thenable._state === lib$es6$promise$$internal$$REJECTED) {
        lib$es6$promise$$internal$$reject(promise, thenable._result);
      } else {
        lib$es6$promise$$internal$$subscribe(thenable, undefined, function(value) {
          lib$es6$promise$$internal$$resolve(promise, value);
        }, function(reason) {
          lib$es6$promise$$internal$$reject(promise, reason);
        });
      }
    }

    function lib$es6$promise$$internal$$handleMaybeThenable(promise, maybeThenable) {
      if (maybeThenable.constructor === promise.constructor) {
        lib$es6$promise$$internal$$handleOwnThenable(promise, maybeThenable);
      } else {
        var then = lib$es6$promise$$internal$$getThen(maybeThenable);

        if (then === lib$es6$promise$$internal$$GET_THEN_ERROR) {
          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$GET_THEN_ERROR.error);
        } else if (then === undefined) {
          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
        } else if (lib$es6$promise$utils$$isFunction(then)) {
          lib$es6$promise$$internal$$handleForeignThenable(promise, maybeThenable, then);
        } else {
          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
        }
      }
    }

    function lib$es6$promise$$internal$$resolve(promise, value) {
      if (promise === value) {
        lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$selfFulfillment());
      } else if (lib$es6$promise$utils$$objectOrFunction(value)) {
        lib$es6$promise$$internal$$handleMaybeThenable(promise, value);
      } else {
        lib$es6$promise$$internal$$fulfill(promise, value);
      }
    }

    function lib$es6$promise$$internal$$publishRejection(promise) {
      if (promise._onerror) {
        promise._onerror(promise._result);
      }

      lib$es6$promise$$internal$$publish(promise);
    }

    function lib$es6$promise$$internal$$fulfill(promise, value) {
      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }

      promise._result = value;
      promise._state = lib$es6$promise$$internal$$FULFILLED;

      if (promise._subscribers.length !== 0) {
        lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, promise);
      }
    }

    function lib$es6$promise$$internal$$reject(promise, reason) {
      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }
      promise._state = lib$es6$promise$$internal$$REJECTED;
      promise._result = reason;

      lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publishRejection, promise);
    }

    function lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection) {
      var subscribers = parent._subscribers;
      var length = subscribers.length;

      parent._onerror = null;

      subscribers[length] = child;
      subscribers[length + lib$es6$promise$$internal$$FULFILLED] = onFulfillment;
      subscribers[length + lib$es6$promise$$internal$$REJECTED]  = onRejection;

      if (length === 0 && parent._state) {
        lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, parent);
      }
    }

    function lib$es6$promise$$internal$$publish(promise) {
      var subscribers = promise._subscribers;
      var settled = promise._state;

      if (subscribers.length === 0) { return; }

      var child, callback, detail = promise._result;

      for (var i = 0; i < subscribers.length; i += 3) {
        child = subscribers[i];
        callback = subscribers[i + settled];

        if (child) {
          lib$es6$promise$$internal$$invokeCallback(settled, child, callback, detail);
        } else {
          callback(detail);
        }
      }

      promise._subscribers.length = 0;
    }

    function lib$es6$promise$$internal$$ErrorObject() {
      this.error = null;
    }

    var lib$es6$promise$$internal$$TRY_CATCH_ERROR = new lib$es6$promise$$internal$$ErrorObject();

    function lib$es6$promise$$internal$$tryCatch(callback, detail) {
      try {
        return callback(detail);
      } catch(e) {
        lib$es6$promise$$internal$$TRY_CATCH_ERROR.error = e;
        return lib$es6$promise$$internal$$TRY_CATCH_ERROR;
      }
    }

    function lib$es6$promise$$internal$$invokeCallback(settled, promise, callback, detail) {
      var hasCallback = lib$es6$promise$utils$$isFunction(callback),
          value, error, succeeded, failed;

      if (hasCallback) {
        value = lib$es6$promise$$internal$$tryCatch(callback, detail);

        if (value === lib$es6$promise$$internal$$TRY_CATCH_ERROR) {
          failed = true;
          error = value.error;
          value = null;
        } else {
          succeeded = true;
        }

        if (promise === value) {
          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$cannotReturnOwn());
          return;
        }

      } else {
        value = detail;
        succeeded = true;
      }

      if (promise._state !== lib$es6$promise$$internal$$PENDING) {
        // noop
      } else if (hasCallback && succeeded) {
        lib$es6$promise$$internal$$resolve(promise, value);
      } else if (failed) {
        lib$es6$promise$$internal$$reject(promise, error);
      } else if (settled === lib$es6$promise$$internal$$FULFILLED) {
        lib$es6$promise$$internal$$fulfill(promise, value);
      } else if (settled === lib$es6$promise$$internal$$REJECTED) {
        lib$es6$promise$$internal$$reject(promise, value);
      }
    }

    function lib$es6$promise$$internal$$initializePromise(promise, resolver) {
      try {
        resolver(function resolvePromise(value){
          lib$es6$promise$$internal$$resolve(promise, value);
        }, function rejectPromise(reason) {
          lib$es6$promise$$internal$$reject(promise, reason);
        });
      } catch(e) {
        lib$es6$promise$$internal$$reject(promise, e);
      }
    }

    function lib$es6$promise$enumerator$$Enumerator(Constructor, input) {
      var enumerator = this;

      enumerator._instanceConstructor = Constructor;
      enumerator.promise = new Constructor(lib$es6$promise$$internal$$noop);

      if (enumerator._validateInput(input)) {
        enumerator._input     = input;
        enumerator.length     = input.length;
        enumerator._remaining = input.length;

        enumerator._init();

        if (enumerator.length === 0) {
          lib$es6$promise$$internal$$fulfill(enumerator.promise, enumerator._result);
        } else {
          enumerator.length = enumerator.length || 0;
          enumerator._enumerate();
          if (enumerator._remaining === 0) {
            lib$es6$promise$$internal$$fulfill(enumerator.promise, enumerator._result);
          }
        }
      } else {
        lib$es6$promise$$internal$$reject(enumerator.promise, enumerator._validationError());
      }
    }

    lib$es6$promise$enumerator$$Enumerator.prototype._validateInput = function(input) {
      return lib$es6$promise$utils$$isArray(input);
    };

    lib$es6$promise$enumerator$$Enumerator.prototype._validationError = function() {
      return new Error('Array Methods must be provided an Array');
    };

    lib$es6$promise$enumerator$$Enumerator.prototype._init = function() {
      this._result = new Array(this.length);
    };

    var lib$es6$promise$enumerator$$default = lib$es6$promise$enumerator$$Enumerator;

    lib$es6$promise$enumerator$$Enumerator.prototype._enumerate = function() {
      var enumerator = this;

      var length  = enumerator.length;
      var promise = enumerator.promise;
      var input   = enumerator._input;

      for (var i = 0; promise._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
        enumerator._eachEntry(input[i], i);
      }
    };

    lib$es6$promise$enumerator$$Enumerator.prototype._eachEntry = function(entry, i) {
      var enumerator = this;
      var c = enumerator._instanceConstructor;

      if (lib$es6$promise$utils$$isMaybeThenable(entry)) {
        if (entry.constructor === c && entry._state !== lib$es6$promise$$internal$$PENDING) {
          entry._onerror = null;
          enumerator._settledAt(entry._state, i, entry._result);
        } else {
          enumerator._willSettleAt(c.resolve(entry), i);
        }
      } else {
        enumerator._remaining--;
        enumerator._result[i] = entry;
      }
    };

    lib$es6$promise$enumerator$$Enumerator.prototype._settledAt = function(state, i, value) {
      var enumerator = this;
      var promise = enumerator.promise;

      if (promise._state === lib$es6$promise$$internal$$PENDING) {
        enumerator._remaining--;

        if (state === lib$es6$promise$$internal$$REJECTED) {
          lib$es6$promise$$internal$$reject(promise, value);
        } else {
          enumerator._result[i] = value;
        }
      }

      if (enumerator._remaining === 0) {
        lib$es6$promise$$internal$$fulfill(promise, enumerator._result);
      }
    };

    lib$es6$promise$enumerator$$Enumerator.prototype._willSettleAt = function(promise, i) {
      var enumerator = this;

      lib$es6$promise$$internal$$subscribe(promise, undefined, function(value) {
        enumerator._settledAt(lib$es6$promise$$internal$$FULFILLED, i, value);
      }, function(reason) {
        enumerator._settledAt(lib$es6$promise$$internal$$REJECTED, i, reason);
      });
    };
    function lib$es6$promise$promise$all$$all(entries) {
      return new lib$es6$promise$enumerator$$default(this, entries).promise;
    }
    var lib$es6$promise$promise$all$$default = lib$es6$promise$promise$all$$all;
    function lib$es6$promise$promise$race$$race(entries) {
      /*jshint validthis:true */
      var Constructor = this;

      var promise = new Constructor(lib$es6$promise$$internal$$noop);

      if (!lib$es6$promise$utils$$isArray(entries)) {
        lib$es6$promise$$internal$$reject(promise, new TypeError('You must pass an array to race.'));
        return promise;
      }

      var length = entries.length;

      function onFulfillment(value) {
        lib$es6$promise$$internal$$resolve(promise, value);
      }

      function onRejection(reason) {
        lib$es6$promise$$internal$$reject(promise, reason);
      }

      for (var i = 0; promise._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
        lib$es6$promise$$internal$$subscribe(Constructor.resolve(entries[i]), undefined, onFulfillment, onRejection);
      }

      return promise;
    }
    var lib$es6$promise$promise$race$$default = lib$es6$promise$promise$race$$race;
    function lib$es6$promise$promise$resolve$$resolve(object) {
      /*jshint validthis:true */
      var Constructor = this;

      if (object && typeof object === 'object' && object.constructor === Constructor) {
        return object;
      }

      var promise = new Constructor(lib$es6$promise$$internal$$noop);
      lib$es6$promise$$internal$$resolve(promise, object);
      return promise;
    }
    var lib$es6$promise$promise$resolve$$default = lib$es6$promise$promise$resolve$$resolve;
    function lib$es6$promise$promise$reject$$reject(reason) {
      /*jshint validthis:true */
      var Constructor = this;
      var promise = new Constructor(lib$es6$promise$$internal$$noop);
      lib$es6$promise$$internal$$reject(promise, reason);
      return promise;
    }
    var lib$es6$promise$promise$reject$$default = lib$es6$promise$promise$reject$$reject;

    var lib$es6$promise$promise$$counter = 0;

    function lib$es6$promise$promise$$needsResolver() {
      throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
    }

    function lib$es6$promise$promise$$needsNew() {
      throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
    }

    var lib$es6$promise$promise$$default = lib$es6$promise$promise$$Promise;
    /**
      Promise objects represent the eventual result of an asynchronous operation. The
      primary way of interacting with a promise is through its `then` method, which
      registers callbacks to receive either a promise's eventual value or the reason
      why the promise cannot be fulfilled.

      Terminology
      -----------

      - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
      - `thenable` is an object or function that defines a `then` method.
      - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
      - `exception` is a value that is thrown using the throw statement.
      - `reason` is a value that indicates why a promise was rejected.
      - `settled` the final resting state of a promise, fulfilled or rejected.

      A promise can be in one of three states: pending, fulfilled, or rejected.

      Promises that are fulfilled have a fulfillment value and are in the fulfilled
      state.  Promises that are rejected have a rejection reason and are in the
      rejected state.  A fulfillment value is never a thenable.

      Promises can also be said to *resolve* a value.  If this value is also a
      promise, then the original promise's settled state will match the value's
      settled state.  So a promise that *resolves* a promise that rejects will
      itself reject, and a promise that *resolves* a promise that fulfills will
      itself fulfill.


      Basic Usage:
      ------------

      ```js
      var promise = new Promise(function(resolve, reject) {
        // on success
        resolve(value);

        // on failure
        reject(reason);
      });

      promise.then(function(value) {
        // on fulfillment
      }, function(reason) {
        // on rejection
      });
      ```

      Advanced Usage:
      ---------------

      Promises shine when abstracting away asynchronous interactions such as
      `XMLHttpRequest`s.

      ```js
      function getJSON(url) {
        return new Promise(function(resolve, reject){
          var xhr = new XMLHttpRequest();

          xhr.open('GET', url);
          xhr.onreadystatechange = handler;
          xhr.responseType = 'json';
          xhr.setRequestHeader('Accept', 'application/json');
          xhr.send();

          function handler() {
            if (this.readyState === this.DONE) {
              if (this.status === 200) {
                resolve(this.response);
              } else {
                reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
              }
            }
          };
        });
      }

      getJSON('/posts.json').then(function(json) {
        // on fulfillment
      }, function(reason) {
        // on rejection
      });
      ```

      Unlike callbacks, promises are great composable primitives.

      ```js
      Promise.all([
        getJSON('/posts'),
        getJSON('/comments')
      ]).then(function(values){
        values[0] // => postsJSON
        values[1] // => commentsJSON

        return values;
      });
      ```

      @class Promise
      @param {function} resolver
      Useful for tooling.
      @constructor
    */
    function lib$es6$promise$promise$$Promise(resolver) {
      this._id = lib$es6$promise$promise$$counter++;
      this._state = undefined;
      this._result = undefined;
      this._subscribers = [];

      if (lib$es6$promise$$internal$$noop !== resolver) {
        if (!lib$es6$promise$utils$$isFunction(resolver)) {
          lib$es6$promise$promise$$needsResolver();
        }

        if (!(this instanceof lib$es6$promise$promise$$Promise)) {
          lib$es6$promise$promise$$needsNew();
        }

        lib$es6$promise$$internal$$initializePromise(this, resolver);
      }
    }

    lib$es6$promise$promise$$Promise.all = lib$es6$promise$promise$all$$default;
    lib$es6$promise$promise$$Promise.race = lib$es6$promise$promise$race$$default;
    lib$es6$promise$promise$$Promise.resolve = lib$es6$promise$promise$resolve$$default;
    lib$es6$promise$promise$$Promise.reject = lib$es6$promise$promise$reject$$default;
    lib$es6$promise$promise$$Promise._setScheduler = lib$es6$promise$asap$$setScheduler;
    lib$es6$promise$promise$$Promise._setAsap = lib$es6$promise$asap$$setAsap;
    lib$es6$promise$promise$$Promise._asap = lib$es6$promise$asap$$asap;

    lib$es6$promise$promise$$Promise.prototype = {
      constructor: lib$es6$promise$promise$$Promise,

    /**
      The primary way of interacting with a promise is through its `then` method,
      which registers callbacks to receive either a promise's eventual value or the
      reason why the promise cannot be fulfilled.

      ```js
      findUser().then(function(user){
        // user is available
      }, function(reason){
        // user is unavailable, and you are given the reason why
      });
      ```

      Chaining
      --------

      The return value of `then` is itself a promise.  This second, 'downstream'
      promise is resolved with the return value of the first promise's fulfillment
      or rejection handler, or rejected if the handler throws an exception.

      ```js
      findUser().then(function (user) {
        return user.name;
      }, function (reason) {
        return 'default name';
      }).then(function (userName) {
        // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
        // will be `'default name'`
      });

      findUser().then(function (user) {
        throw new Error('Found user, but still unhappy');
      }, function (reason) {
        throw new Error('`findUser` rejected and we're unhappy');
      }).then(function (value) {
        // never reached
      }, function (reason) {
        // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
        // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
      });
      ```
      If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.

      ```js
      findUser().then(function (user) {
        throw new PedagogicalException('Upstream error');
      }).then(function (value) {
        // never reached
      }).then(function (value) {
        // never reached
      }, function (reason) {
        // The `PedgagocialException` is propagated all the way down to here
      });
      ```

      Assimilation
      ------------

      Sometimes the value you want to propagate to a downstream promise can only be
      retrieved asynchronously. This can be achieved by returning a promise in the
      fulfillment or rejection handler. The downstream promise will then be pending
      until the returned promise is settled. This is called *assimilation*.

      ```js
      findUser().then(function (user) {
        return findCommentsByAuthor(user);
      }).then(function (comments) {
        // The user's comments are now available
      });
      ```

      If the assimliated promise rejects, then the downstream promise will also reject.

      ```js
      findUser().then(function (user) {
        return findCommentsByAuthor(user);
      }).then(function (comments) {
        // If `findCommentsByAuthor` fulfills, we'll have the value here
      }, function (reason) {
        // If `findCommentsByAuthor` rejects, we'll have the reason here
      });
      ```

      Simple Example
      --------------

      Synchronous Example

      ```javascript
      var result;

      try {
        result = findResult();
        // success
      } catch(reason) {
        // failure
      }
      ```

      Errback Example

      ```js
      findResult(function(result, err){
        if (err) {
          // failure
        } else {
          // success
        }
      });
      ```

      Promise Example;

      ```javascript
      findResult().then(function(result){
        // success
      }, function(reason){
        // failure
      });
      ```

      Advanced Example
      --------------

      Synchronous Example

      ```javascript
      var author, books;

      try {
        author = findAuthor();
        books  = findBooksByAuthor(author);
        // success
      } catch(reason) {
        // failure
      }
      ```

      Errback Example

      ```js

      function foundBooks(books) {

      }

      function failure(reason) {

      }

      findAuthor(function(author, err){
        if (err) {
          failure(err);
          // failure
        } else {
          try {
            findBoooksByAuthor(author, function(books, err) {
              if (err) {
                failure(err);
              } else {
                try {
                  foundBooks(books);
                } catch(reason) {
                  failure(reason);
                }
              }
            });
          } catch(error) {
            failure(err);
          }
          // success
        }
      });
      ```

      Promise Example;

      ```javascript
      findAuthor().
        then(findBooksByAuthor).
        then(function(books){
          // found books
      }).catch(function(reason){
        // something went wrong
      });
      ```

      @method then
      @param {Function} onFulfilled
      @param {Function} onRejected
      Useful for tooling.
      @return {Promise}
    */
      then: function(onFulfillment, onRejection) {
        var parent = this;
        var state = parent._state;

        if (state === lib$es6$promise$$internal$$FULFILLED && !onFulfillment || state === lib$es6$promise$$internal$$REJECTED && !onRejection) {
          return this;
        }

        var child = new this.constructor(lib$es6$promise$$internal$$noop);
        var result = parent._result;

        if (state) {
          var callback = arguments[state - 1];
          lib$es6$promise$asap$$asap(function(){
            lib$es6$promise$$internal$$invokeCallback(state, child, callback, result);
          });
        } else {
          lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection);
        }

        return child;
      },

    /**
      `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
      as the catch block of a try/catch statement.

      ```js
      function findAuthor(){
        throw new Error('couldn't find that author');
      }

      // synchronous
      try {
        findAuthor();
      } catch(reason) {
        // something went wrong
      }

      // async with promises
      findAuthor().catch(function(reason){
        // something went wrong
      });
      ```

      @method catch
      @param {Function} onRejection
      Useful for tooling.
      @return {Promise}
    */
      'catch': function(onRejection) {
        return this.then(null, onRejection);
      }
    };
    function lib$es6$promise$polyfill$$polyfill() {
      var local;

      if (typeof global !== 'undefined') {
          local = global;
      } else if (typeof self !== 'undefined') {
          local = self;
      } else {
          try {
              local = Function('return this')();
          } catch (e) {
              throw new Error('polyfill failed because global object is unavailable in this environment');
          }
      }

      var P = local.Promise;

      if (P && Object.prototype.toString.call(P.resolve()) === '[object Promise]' && !P.cast) {
        return;
      }

      local.Promise = lib$es6$promise$promise$$default;
    }
    var lib$es6$promise$polyfill$$default = lib$es6$promise$polyfill$$polyfill;

    var lib$es6$promise$umd$$ES6Promise = {
      'Promise': lib$es6$promise$promise$$default,
      'polyfill': lib$es6$promise$polyfill$$default
    };

    /* global define:true module:true window: true */
    if (true) {
      !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return lib$es6$promise$umd$$ES6Promise; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}

    lib$es6$promise$polyfill$$default();
}).call(this);

 /**
 *
 * FULL TILT
 * http://github.com/richtr/Full-Tilt
 *
 * A standalone DeviceOrientation + DeviceMotion JavaScript library that
 * normalises orientation sensor input, applies relevant screen orientation
 * transforms, returns Euler Angle, Quaternion and Rotation
 * Matrix representations back to web developers and provides conversion
 * between all supported orientation representation types.
 *
 * Copyright: 2014 Rich Tibbett
 * License:   MIT
 *
 */

(function ( window ) {

// Only initialize the FULLTILT API if it is not already attached to the DOM
if ( window.FULLTILT !== undefined && window.FULLTILT !== null ) {
	return;
}

var M_PI   = Math.PI;
var M_PI_2 = M_PI / 2;
var M_2_PI = 2 * M_PI;

// Degree to Radian conversion
var degToRad = M_PI / 180;
var radToDeg = 180 / M_PI;

// Internal device orientation + motion variables
var sensors = {
	"orientation": {
		active:    false,
		callbacks: [],
		data:      undefined
	},
	"motion": {
		active:    false,
		callbacks: [],
		data:      undefined
	}
};
var screenActive = false;

// Internal screen orientation variables
var hasScreenOrientationAPI = window.screen && window.screen.orientation && window.screen.orientation.angle !== undefined && window.screen.orientation.angle !== null ? true : false;
var screenOrientationAngle = ( hasScreenOrientationAPI ? window.screen.orientation.angle : ( window.orientation || 0 ) ) * degToRad;

var SCREEN_ROTATION_0        = 0,
    SCREEN_ROTATION_90       = M_PI_2,
    SCREEN_ROTATION_180      = M_PI,
    SCREEN_ROTATION_270      = M_2_PI / 3,
    SCREEN_ROTATION_MINUS_90 = - M_PI_2;

// Math.sign polyfill
function sign(x) {
	x = +x; // convert to a number
	if (x === 0 || isNaN(x))
		return x;
	return x > 0 ? 1 : -1;
}

///// Promise-based Sensor Data checker //////

function SensorCheck(sensorRootObj) {

	var promise = new Promise(function(resolve, reject) {

		var runCheck = function (tries) {

			setTimeout(function() {

				if (sensorRootObj && sensorRootObj.data) {

					resolve();

				} else if (tries >= 20) {

					reject();

				} else {

					runCheck(++tries);

				}

			}, 50);

		};

		runCheck(0);

	});

	return promise;

}

////// Internal Event Handlers //////

function handleScreenOrientationChange () {

	if ( hasScreenOrientationAPI ) {

		screenOrientationAngle = ( window.screen.orientation.angle || 0 ) * degToRad;

	} else {

		screenOrientationAngle = ( window.orientation || 0 ) * degToRad;

	}

}

function handleDeviceOrientationChange ( event ) {

	sensors.orientation.data = event;

	// Fire every callback function each time deviceorientation is updated
	for ( var i in sensors.orientation.callbacks ) {

		sensors.orientation.callbacks[ i ].call( this );

	}

}

function handleDeviceMotionChange ( event ) {

	sensors.motion.data = event;

	// Fire every callback function each time devicemotion is updated
	for ( var i in sensors.motion.callbacks ) {

		sensors.motion.callbacks[ i ].call( this );

	}

}

///// FULLTILT API Root Object /////

var FULLTILT = {};

FULLTILT.version = "0.5.3";

///// FULLTILT API Root Methods /////

FULLTILT.getDeviceOrientation = function(options) {

	var promise = new Promise(function(resolve, reject) {

		var control = new FULLTILT.DeviceOrientation(options);

		control.start();

		var orientationSensorCheck = new SensorCheck(sensors.orientation);

		orientationSensorCheck.then(function() {

			control._alphaAvailable = (sensors.orientation.data.alpha && sensors.orientation.data.alpha !== null);
			control._betaAvailable = (sensors.orientation.data.beta && sensors.orientation.data.beta !== null);
			control._gammaAvailable = (sensors.orientation.data.gamma && sensors.orientation.data.gamma !== null);

			resolve(control);

		}).catch(function() {

			control.stop();
			reject('DeviceOrientation is not supported');

		});

	});

	return promise;

};

FULLTILT.getDeviceMotion = function(options) {

	var promise = new Promise(function(resolve, reject) {

		var control = new FULLTILT.DeviceMotion(options);

		control.start();

		var motionSensorCheck = new SensorCheck(sensors.motion);

		motionSensorCheck.then(function() {

			control._accelerationXAvailable = (sensors.motion.data.acceleration && sensors.motion.data.acceleration.x);
			control._accelerationYAvailable = (sensors.motion.data.acceleration && sensors.motion.data.acceleration.y);
			control._accelerationZAvailable = (sensors.motion.data.acceleration && sensors.motion.data.acceleration.z);

			control._accelerationIncludingGravityXAvailable = (sensors.motion.data.accelerationIncludingGravity && sensors.motion.data.accelerationIncludingGravity.x);
			control._accelerationIncludingGravityYAvailable = (sensors.motion.data.accelerationIncludingGravity && sensors.motion.data.accelerationIncludingGravity.y);
			control._accelerationIncludingGravityZAvailable = (sensors.motion.data.accelerationIncludingGravity && sensors.motion.data.accelerationIncludingGravity.z);

			control._rotationRateAlphaAvailable = (sensors.motion.data.rotationRate && sensors.motion.data.rotationRate.alpha);
			control._rotationRateBetaAvailable = (sensors.motion.data.rotationRate && sensors.motion.data.rotationRate.beta);
			control._rotationRateGammaAvailable = (sensors.motion.data.rotationRate && sensors.motion.data.rotationRate.gamma);

			resolve(control);

		}).catch(function() {

			control.stop();
			reject('DeviceMotion is not supported');

		});

	});

	return promise;

};


////// FULLTILT.Quaternion //////

FULLTILT.Quaternion = function ( x, y, z, w ) {

	var quat, outQuat;

	this.set = function ( x, y, z, w ) {

		this.x = x || 0;
		this.y = y || 0;
		this.z = z || 0;
		this.w = w || 1;

	};

	this.copy = function ( quaternion ) {

		this.x = quaternion.x;
		this.y = quaternion.y;
		this.z = quaternion.z;
		this.w = quaternion.w;

	};

	this.setFromEuler = (function () {

		var _x, _y, _z;
		var _x_2, _y_2, _z_2;
		var cX, cY, cZ, sX, sY, sZ;

		return function ( euler ) {

			euler = euler || {};

			_z = ( euler.alpha || 0 ) * degToRad;
			_x = ( euler.beta || 0 ) * degToRad;
			_y = ( euler.gamma || 0 ) * degToRad;

			_z_2 = _z / 2;
			_x_2 = _x / 2;
			_y_2 = _y / 2;

			cX = Math.cos( _x_2 );
			cY = Math.cos( _y_2 );
			cZ = Math.cos( _z_2 );
			sX = Math.sin( _x_2 );
			sY = Math.sin( _y_2 );
			sZ = Math.sin( _z_2 );

			this.set(
				sX * cY * cZ - cX * sY * sZ, // x
				cX * sY * cZ + sX * cY * sZ, // y
				cX * cY * sZ + sX * sY * cZ, // z
				cX * cY * cZ - sX * sY * sZ  // w
			);

			this.normalize();

			return this;

		};

	})();

	this.setFromRotationMatrix = (function () {

		var R;

		return function( matrix ) {

			R = matrix.elements;

			this.set(
				0.5 * Math.sqrt( 1 + R[0] - R[4] - R[8] ) * sign( R[7] - R[5] ), // x
				0.5 * Math.sqrt( 1 - R[0] + R[4] - R[8] ) * sign( R[2] - R[6] ), // y
				0.5 * Math.sqrt( 1 - R[0] - R[4] + R[8] ) * sign( R[3] - R[1] ), // z
				0.5 * Math.sqrt( 1 + R[0] + R[4] + R[8] )                        // w
			);

			return this;

		};

	})();

	this.multiply = function ( quaternion ) {

		outQuat = FULLTILT.Quaternion.prototype.multiplyQuaternions( this, quaternion );
		this.copy( outQuat );

		return this;

	};

	this.rotateX = function ( angle ) {

		outQuat = FULLTILT.Quaternion.prototype.rotateByAxisAngle( this, [ 1, 0, 0 ], angle );
		this.copy( outQuat );

		return this;

	};

	this.rotateY = function ( angle ) {

		outQuat = FULLTILT.Quaternion.prototype.rotateByAxisAngle( this, [ 0, 1, 0 ], angle );
		this.copy( outQuat );

		return this;

	};

	this.rotateZ = function ( angle ) {

		outQuat = FULLTILT.Quaternion.prototype.rotateByAxisAngle( this, [ 0, 0, 1 ], angle );
		this.copy( outQuat );

		return this;

	};

	this.normalize = function () {

		return FULLTILT.Quaternion.prototype.normalize( this );

	};

	// Initialize object values
	this.set( x, y, z, w );

};

FULLTILT.Quaternion.prototype = {

	constructor: FULLTILT.Quaternion,

	multiplyQuaternions: function () {

		var multipliedQuat = new FULLTILT.Quaternion();

		return function ( a, b ) {

			var qax = a.x, qay = a.y, qaz = a.z, qaw = a.w;
			var qbx = b.x, qby = b.y, qbz = b.z, qbw = b.w;

			multipliedQuat.set(
				qax * qbw + qaw * qbx + qay * qbz - qaz * qby, // x
				qay * qbw + qaw * qby + qaz * qbx - qax * qbz, // y
				qaz * qbw + qaw * qbz + qax * qby - qay * qbx, // z
				qaw * qbw - qax * qbx - qay * qby - qaz * qbz  // w
			);

			return multipliedQuat;

		};

	}(),

	normalize: function( q ) {

		var len = Math.sqrt( q.x * q.x + q.y * q.y + q.z * q.z + q.w * q.w );

		if ( len === 0 ) {

			q.x = 0;
			q.y = 0;
			q.z = 0;
			q.w = 1;

		} else {

			len = 1 / len;

			q.x *= len;
			q.y *= len;
			q.z *= len;
			q.w *= len;

		}

		return q;

	},

	rotateByAxisAngle: function () {

		var outputQuaternion = new FULLTILT.Quaternion();
		var transformQuaternion = new FULLTILT.Quaternion();

		var halfAngle, sA;

		return function ( targetQuaternion, axis, angle ) {

			halfAngle = ( angle || 0 ) / 2;
			sA = Math.sin( halfAngle );

			transformQuaternion.set(
				( axis[ 0 ] || 0 ) * sA, // x
				( axis[ 1 ] || 0 ) * sA, // y
				( axis[ 2 ] || 0 ) * sA, // z
				Math.cos( halfAngle )    // w
			);

			// Multiply quaternion by q
			outputQuaternion = FULLTILT.Quaternion.prototype.multiplyQuaternions( targetQuaternion, transformQuaternion );

			return FULLTILT.Quaternion.prototype.normalize( outputQuaternion );

		};

	}()

};

////// FULLTILT.RotationMatrix //////

FULLTILT.RotationMatrix = function ( m11, m12, m13, m21, m22, m23, m31, m32, m33 ) {

	var outMatrix;

	this.elements = new Float32Array( 9 );

	this.identity = function () {

		this.set(
			1, 0, 0,
			0, 1, 0,
			0, 0, 1
		);

		return this;

	};

	this.set = function ( m11, m12, m13, m21, m22, m23, m31, m32, m33 ) {

		this.elements[ 0 ] = m11 || 1;
		this.elements[ 1 ] = m12 || 0;
		this.elements[ 2 ] = m13 || 0;
		this.elements[ 3 ] = m21 || 0;
		this.elements[ 4 ] = m22 || 1;
		this.elements[ 5 ] = m23 || 0;
		this.elements[ 6 ] = m31 || 0;
		this.elements[ 7 ] = m32 || 0;
		this.elements[ 8 ] = m33 || 1;

	};

	this.copy = function ( matrix ) {

		this.elements[ 0 ] = matrix.elements[ 0 ];
		this.elements[ 1 ] = matrix.elements[ 1 ];
		this.elements[ 2 ] = matrix.elements[ 2 ];
		this.elements[ 3 ] = matrix.elements[ 3 ];
		this.elements[ 4 ] = matrix.elements[ 4 ];
		this.elements[ 5 ] = matrix.elements[ 5 ];
		this.elements[ 6 ] = matrix.elements[ 6 ];
		this.elements[ 7 ] = matrix.elements[ 7 ];
		this.elements[ 8 ] = matrix.elements[ 8 ];

	};

	this.setFromEuler = (function() {

		var _x, _y, _z;
		var cX, cY, cZ, sX, sY, sZ;

		return function ( euler ) {

			euler = euler || {};

			_z = ( euler.alpha || 0 ) * degToRad;
			_x = ( euler.beta || 0 ) * degToRad;
			_y = ( euler.gamma || 0 ) * degToRad;

			cX = Math.cos( _x );
			cY = Math.cos( _y );
			cZ = Math.cos( _z );
			sX = Math.sin( _x );
			sY = Math.sin( _y );
			sZ = Math.sin( _z );

			//
			// ZXY-ordered rotation matrix construction.
			//

			this.set(
				cZ * cY - sZ * sX * sY, // 1,1
				- cX * sZ,              // 1,2
				cY * sZ * sX + cZ * sY, // 1,3

				cY * sZ + cZ * sX * sY, // 2,1
				cZ * cX,                // 2,2
				sZ * sY - cZ * cY * sX, // 2,3

				- cX * sY,              // 3,1
				sX,                     // 3,2
				cX * cY                 // 3,3
			);

			this.normalize();

			return this;

		};

	})();

	this.setFromQuaternion = (function() {

		var sqw, sqx, sqy, sqz;

		return function( q ) {

			sqw = q.w * q.w;
			sqx = q.x * q.x;
			sqy = q.y * q.y;
			sqz = q.z * q.z;

			this.set(
				sqw + sqx - sqy - sqz,       // 1,1
				2 * (q.x * q.y - q.w * q.z), // 1,2
				2 * (q.x * q.z + q.w * q.y), // 1,3

				2 * (q.x * q.y + q.w * q.z), // 2,1
				sqw - sqx + sqy - sqz,       // 2,2
				2 * (q.y * q.z - q.w * q.x), // 2,3

				2 * (q.x * q.z - q.w * q.y), // 3,1
				2 * (q.y * q.z + q.w * q.x), // 3,2
				sqw - sqx - sqy + sqz        // 3,3
			);

			return this;

		};

	})();

	this.multiply = function ( m ) {

		outMatrix = FULLTILT.RotationMatrix.prototype.multiplyMatrices( this, m );
		this.copy( outMatrix );

		return this;

	};

	this.rotateX = function ( angle ) {

		outMatrix = FULLTILT.RotationMatrix.prototype.rotateByAxisAngle( this, [ 1, 0, 0 ], angle );
		this.copy( outMatrix );

		return this;

	};

	this.rotateY = function ( angle ) {

		outMatrix = FULLTILT.RotationMatrix.prototype.rotateByAxisAngle( this, [ 0, 1, 0 ], angle );
		this.copy( outMatrix );

		return this;

	};

	this.rotateZ = function ( angle ) {

		outMatrix = FULLTILT.RotationMatrix.prototype.rotateByAxisAngle( this, [ 0, 0, 1 ], angle );
		this.copy( outMatrix );

		return this;

	};

	this.normalize = function () {

		return FULLTILT.RotationMatrix.prototype.normalize( this );

	};

	// Initialize object values
	this.set( m11, m12, m13, m21, m22, m23, m31, m32, m33 );

};

FULLTILT.RotationMatrix.prototype = {

	constructor: FULLTILT.RotationMatrix,

	multiplyMatrices: function () {

		var matrix = new FULLTILT.RotationMatrix();

		var aE, bE;

		return function ( a, b ) {

			aE = a.elements;
			bE = b.elements;

			matrix.set(
				aE[0] * bE[0] + aE[1] * bE[3] + aE[2] * bE[6],
				aE[0] * bE[1] + aE[1] * bE[4] + aE[2] * bE[7],
				aE[0] * bE[2] + aE[1] * bE[5] + aE[2] * bE[8],

				aE[3] * bE[0] + aE[4] * bE[3] + aE[5] * bE[6],
				aE[3] * bE[1] + aE[4] * bE[4] + aE[5] * bE[7],
				aE[3] * bE[2] + aE[4] * bE[5] + aE[5] * bE[8],

				aE[6] * bE[0] + aE[7] * bE[3] + aE[8] * bE[6],
				aE[6] * bE[1] + aE[7] * bE[4] + aE[8] * bE[7],
				aE[6] * bE[2] + aE[7] * bE[5] + aE[8] * bE[8]
			);

			return matrix;

		};

	}(),

	normalize: function( matrix ) {

		var R = matrix.elements;

		// Calculate matrix determinant
		var determinant = R[0] * R[4] * R[8] - R[0] * R[5] * R[7] - R[1] * R[3] * R[8] + R[1] * R[5] * R[6] + R[2] * R[3] * R[7] - R[2] * R[4] * R[6];

		// Normalize matrix values
		R[0] /= determinant;
		R[1] /= determinant;
		R[2] /= determinant;
		R[3] /= determinant;
		R[4] /= determinant;
		R[5] /= determinant;
		R[6] /= determinant;
		R[7] /= determinant;
		R[8] /= determinant;

		matrix.elements = R;

		return matrix;

	},

	rotateByAxisAngle: function () {

		var outputMatrix = new FULLTILT.RotationMatrix();
		var transformMatrix = new FULLTILT.RotationMatrix();

		var sA, cA;
		var validAxis = false;

		return function ( targetRotationMatrix, axis, angle ) {

			transformMatrix.identity(); // reset transform matrix

			validAxis = false;

			sA = Math.sin( angle );
			cA = Math.cos( angle );

			if ( axis[ 0 ] === 1 && axis[ 1 ] === 0 && axis[ 2 ] === 0 ) { // x

				validAxis = true;

				transformMatrix.elements[4] = cA;
				transformMatrix.elements[5] = -sA;
				transformMatrix.elements[7] = sA;
				transformMatrix.elements[8] = cA;

	 		} else if ( axis[ 1 ] === 1 && axis[ 0 ] === 0 && axis[ 2 ] === 0 ) { // y

				validAxis = true;

				transformMatrix.elements[0] = cA;
				transformMatrix.elements[2] = sA;
				transformMatrix.elements[6] = -sA;
				transformMatrix.elements[8] = cA;

	 		} else if ( axis[ 2 ] === 1 && axis[ 0 ] === 0 && axis[ 1 ] === 0 ) { // z

				validAxis = true;

				transformMatrix.elements[0] = cA;
				transformMatrix.elements[1] = -sA;
				transformMatrix.elements[3] = sA;
				transformMatrix.elements[4] = cA;

	 		}

			if ( validAxis ) {

				outputMatrix = FULLTILT.RotationMatrix.prototype.multiplyMatrices( targetRotationMatrix, transformMatrix );

				outputMatrix = FULLTILT.RotationMatrix.prototype.normalize( outputMatrix );

			} else {

				outputMatrix = targetRotationMatrix;

			}

			return outputMatrix;

		};

	}()

};

////// FULLTILT.Euler //////

FULLTILT.Euler = function ( alpha, beta, gamma ) {

	this.set = function ( alpha, beta, gamma ) {

		this.alpha = alpha || 0;
		this.beta  = beta  || 0;
		this.gamma = gamma || 0;

	};

	this.copy = function ( inEuler ) {

		this.alpha = inEuler.alpha;
		this.beta  = inEuler.beta;
		this.gamma = inEuler.gamma;

	};

	this.setFromRotationMatrix = (function () {

		var R, _alpha, _beta, _gamma;

		return function ( matrix ) {

			R = matrix.elements;

			if (R[8] > 0) { // cos(beta) > 0

				_alpha = Math.atan2(-R[1], R[4]);
				_beta  = Math.asin(R[7]); // beta (-pi/2, pi/2)
				_gamma = Math.atan2(-R[6], R[8]); // gamma (-pi/2, pi/2)

			} else if (R[8] < 0) {  // cos(beta) < 0

				_alpha = Math.atan2(R[1], -R[4]);
				_beta  = -Math.asin(R[7]);
				_beta  += (_beta >= 0) ? - M_PI : M_PI; // beta [-pi,-pi/2) U (pi/2,pi)
				_gamma = Math.atan2(R[6], -R[8]); // gamma (-pi/2, pi/2)

			} else { // R[8] == 0

				if (R[6] > 0) {  // cos(gamma) == 0, cos(beta) > 0

					_alpha = Math.atan2(-R[1], R[4]);
					_beta  = Math.asin(R[7]); // beta [-pi/2, pi/2]
					_gamma = - M_PI_2; // gamma = -pi/2

				} else if (R[6] < 0) { // cos(gamma) == 0, cos(beta) < 0

					_alpha = Math.atan2(R[1], -R[4]);
					_beta  = -Math.asin(R[7]);
					_beta  += (_beta >= 0) ? - M_PI : M_PI; // beta [-pi,-pi/2) U (pi/2,pi)
					_gamma = - M_PI_2; // gamma = -pi/2

				} else { // R[6] == 0, cos(beta) == 0

					// gimbal lock discontinuity
					_alpha = Math.atan2(R[3], R[0]);
					_beta  = (R[7] > 0) ? M_PI_2 : - M_PI_2; // beta = +-pi/2
					_gamma = 0; // gamma = 0

				}

			}

			// alpha is in [-pi, pi], make sure it is in [0, 2*pi).
			if (_alpha < 0) {
				_alpha += M_2_PI; // alpha [0, 2*pi)
			}

			// Convert to degrees
			_alpha *= radToDeg;
			_beta  *= radToDeg;
			_gamma *= radToDeg;

			// apply derived euler angles to current object
			this.set( _alpha, _beta, _gamma );

		};

	})();

	this.setFromQuaternion = (function () {

		var _alpha, _beta, _gamma;

		return function ( q ) {

			var sqw = q.w * q.w;
			var sqx = q.x * q.x;
			var sqy = q.y * q.y;
			var sqz = q.z * q.z;

			var unitLength = sqw + sqx + sqy + sqz; // Normalised == 1, otherwise correction divisor.
			var wxyz = q.w * q.x + q.y * q.z;
			var epsilon = 1e-6; // rounding factor

			if (wxyz > (0.5 - epsilon) * unitLength) {

				_alpha = 2 * Math.atan2(q.y, q.w);
				_beta = M_PI_2;
				_gamma = 0;

			} else if (wxyz < (-0.5 + epsilon) * unitLength) {

				_alpha = -2 * Math.atan2(q.y, q.w);
				_beta = -M_PI_2;
				_gamma = 0;

			} else {

				var aX = sqw - sqx + sqy - sqz;
				var aY = 2 * (q.w * q.z - q.x * q.y);

				var gX = sqw - sqx - sqy + sqz;
				var gY = 2 * (q.w * q.y - q.x * q.z);

				if (gX > 0) {

					_alpha = Math.atan2(aY, aX);
					_beta  = Math.asin(2 * wxyz / unitLength);
					_gamma = Math.atan2(gY, gX);

				} else {

					_alpha = Math.atan2(-aY, -aX);
					_beta  = -Math.asin(2 * wxyz / unitLength);
					_beta  += _beta < 0 ? M_PI : - M_PI;
					_gamma = Math.atan2(-gY, -gX);

				}

			}

			// alpha is in [-pi, pi], make sure it is in [0, 2*pi).
			if (_alpha < 0) {
				_alpha += M_2_PI; // alpha [0, 2*pi)
			}

			// Convert to degrees
			_alpha *= radToDeg;
			_beta  *= radToDeg;
			_gamma *= radToDeg;

			// apply derived euler angles to current object
			this.set( _alpha, _beta, _gamma );

		};

	})();

	this.rotateX = function ( angle ) {

		FULLTILT.Euler.prototype.rotateByAxisAngle( this, [ 1, 0, 0 ], angle );

		return this;

	};

	this.rotateY = function ( angle ) {

		FULLTILT.Euler.prototype.rotateByAxisAngle( this, [ 0, 1, 0 ], angle );

		return this;

	};

	this.rotateZ = function ( angle ) {

		FULLTILT.Euler.prototype.rotateByAxisAngle( this, [ 0, 0, 1 ], angle );

		return this;

	};

	// Initialize object values
	this.set( alpha, beta, gamma );

};

FULLTILT.Euler.prototype = {

	constructor: FULLTILT.Euler,

	rotateByAxisAngle: function () {

		var _matrix = new FULLTILT.RotationMatrix();
		var outEuler;

		return function ( targetEuler, axis, angle ) {

			_matrix.setFromEuler( targetEuler );

			_matrix = FULLTILT.RotationMatrix.prototype.rotateByAxisAngle( _matrix, axis, angle );

			targetEuler.setFromRotationMatrix( _matrix );

			return targetEuler;

		};

	}()

};

///// FULLTILT.DeviceOrientation //////

FULLTILT.DeviceOrientation = function (options) {

	this.options = options || {}; // by default use UA deviceorientation 'type' ("game" on iOS, "world" on Android)

	var tries = 0;
	var maxTries = 200;
	var successCount = 0;
	var successThreshold = 10;

	this.alphaOffsetScreen = 0;
	this.alphaOffsetDevice = undefined;

	// Create a game-based deviceorientation object (initial alpha === 0 degrees)
	if (this.options.type === "game") {

		var setGameAlphaOffset = function(evt) {

			if (evt.alpha !== null) { // do regardless of whether 'evt.absolute' is also true
				this.alphaOffsetDevice = new FULLTILT.Euler(evt.alpha, 0, 0);
				this.alphaOffsetDevice.rotateZ( -screenOrientationAngle );

				// Discard first {successThreshold} responses while a better compass lock is found by UA
				if(++successCount >= successThreshold) {
					window.removeEventListener( 'deviceorientation', setGameAlphaOffset, false );
					return;
				}
			}

			if(++tries >= maxTries) {
				window.removeEventListener( 'deviceorientation', setGameAlphaOffset, false );
			}

		}.bind(this);

		window.addEventListener( 'deviceorientation', setGameAlphaOffset, false );

	// Create a compass-based deviceorientation object (initial alpha === compass degrees)
	} else if (this.options.type === "world") {

		var setCompassAlphaOffset = function(evt) {

			if (evt.absolute !== true && evt.webkitCompassAccuracy !== undefined && evt.webkitCompassAccuracy !== null && +evt.webkitCompassAccuracy >= 0 && +evt.webkitCompassAccuracy < 50) {
				this.alphaOffsetDevice = new FULLTILT.Euler(evt.webkitCompassHeading, 0, 0);
				this.alphaOffsetDevice.rotateZ( screenOrientationAngle );
				this.alphaOffsetScreen = screenOrientationAngle;

				// Discard first {successThreshold} responses while a better compass lock is found by UA
				if(++successCount >= successThreshold) {
					window.removeEventListener( 'deviceorientation', setCompassAlphaOffset, false );
					return;
				}
			}

			if(++tries >= maxTries) {
				window.removeEventListener( 'deviceorientation', setCompassAlphaOffset, false );
			}

		}.bind(this);

		window.addEventListener( 'deviceorientation', setCompassAlphaOffset, false );

	} // else... use whatever orientation system the UA provides ("game" on iOS, "world" on Android)

};

FULLTILT.DeviceOrientation.prototype = {

	constructor: FULLTILT.DeviceOrientation,

	start: function ( callback ) {

		if ( callback && Object.prototype.toString.call( callback ) == '[object Function]' ) {

			sensors.orientation.callbacks.push( callback );

		}

		if( !screenActive ) {

			if ( hasScreenOrientationAPI ) {

			window.screen.orientation.addEventListener( 'change', handleScreenOrientationChange, false );

			} else {

				window.addEventListener( 'orientationchange', handleScreenOrientationChange, false );

			}

		}

		if ( !sensors.orientation.active ) {

			window.addEventListener( 'deviceorientation', handleDeviceOrientationChange, false );

			sensors.orientation.active = true;

		}

	},

	stop: function () {

		if ( sensors.orientation.active ) {

			window.removeEventListener( 'deviceorientation', handleDeviceOrientationChange, false );

			sensors.orientation.active = false;

		}

	},

	listen: function( callback ) {

		this.start( callback );

	},

	getFixedFrameQuaternion: (function () {

		var euler = new FULLTILT.Euler();
		var matrix = new FULLTILT.RotationMatrix();
		var quaternion = new FULLTILT.Quaternion();

		return function() {

			var orientationData = sensors.orientation.data || { alpha: 0, beta: 0, gamma: 0 };

			var adjustedAlpha = orientationData.alpha;

			if (this.alphaOffsetDevice) {
				matrix.setFromEuler( this.alphaOffsetDevice );
				matrix.rotateZ( - this.alphaOffsetScreen );
				euler.setFromRotationMatrix( matrix );

				if (euler.alpha < 0) {
					euler.alpha += 360;
				}

				euler.alpha %= 360;

				adjustedAlpha -= euler.alpha;
			}

			euler.set(
				adjustedAlpha,
				orientationData.beta,
				orientationData.gamma
			);

			quaternion.setFromEuler( euler );

			return quaternion;

		};

	})(),

	getScreenAdjustedQuaternion: (function () {

		var quaternion;

		return function() {

			quaternion = this.getFixedFrameQuaternion();

			// Automatically apply screen orientation transform
			quaternion.rotateZ( - screenOrientationAngle );

			return quaternion;

		};

	})(),

	getFixedFrameMatrix: (function () {

		var euler = new FULLTILT.Euler();
		var matrix = new FULLTILT.RotationMatrix();

		return function () {

			var orientationData = sensors.orientation.data || { alpha: 0, beta: 0, gamma: 0 };

			var adjustedAlpha = orientationData.alpha;

			if (this.alphaOffsetDevice) {
				matrix.setFromEuler( this.alphaOffsetDevice );
				matrix.rotateZ( - this.alphaOffsetScreen );
				euler.setFromRotationMatrix( matrix );

				if (euler.alpha < 0) {
					euler.alpha += 360;
				}

				euler.alpha %= 360;

				adjustedAlpha -= euler.alpha;
			}

			euler.set(
				adjustedAlpha,
				orientationData.beta,
				orientationData.gamma
			);

			matrix.setFromEuler( euler );

			return matrix;

		};

	})(),

	getScreenAdjustedMatrix: (function () {

		var matrix;

		return function () {

			matrix = this.getFixedFrameMatrix();

			// Automatically apply screen orientation transform
			matrix.rotateZ( - screenOrientationAngle );

			return matrix;

		};

	})(),

	getFixedFrameEuler: (function () {

		var euler = new FULLTILT.Euler();
		var matrix;

		return function () {

			matrix = this.getFixedFrameMatrix();

			euler.setFromRotationMatrix( matrix );

			return euler;

		};

	})(),

	getScreenAdjustedEuler: (function () {

		var euler = new FULLTILT.Euler();
		var matrix;

		return function () {

			matrix = this.getScreenAdjustedMatrix();

			euler.setFromRotationMatrix( matrix );

			return euler;

		};

	})(),

	isAbsolute: function () {

		if ( sensors.orientation.data && sensors.orientation.data.absolute === true ) {
			return true;
		}

		return false;

	},

	getLastRawEventData: function () {

		return sensors.orientation.data || {};

	},

	_alphaAvailable: false,
	_betaAvailable: false,
	_gammaAvailable: false,

	isAvailable: function(_valueType){

		switch(_valueType){
			case this.ALPHA:
				return this._alphaAvailable;

			case this.BETA:
				return this._betaAvailable;

			case this.GAMMA:
				return this._gammaAvailable;
		}

	},

	ALPHA: 'alpha',
	BETA: 'beta',
	GAMMA: 'gamma'

};


///// FULLTILT.DeviceMotion //////

FULLTILT.DeviceMotion = function (options) {

	this.options = options || {}; // placeholder object since no options are currently supported

};

FULLTILT.DeviceMotion.prototype = {

	constructor: FULLTILT.DeviceMotion,

	start: function ( callback ) {

		if ( callback && Object.prototype.toString.call( callback ) == '[object Function]' ) {

			sensors.motion.callbacks.push( callback );

		}

		if( !screenActive ) {

			if ( hasScreenOrientationAPI ) {

				window.screen.orientation.addEventListener( 'change', handleScreenOrientationChange, false );

			} else {

				window.addEventListener( 'orientationchange', handleScreenOrientationChange, false );

			}

		}

		if ( !sensors.motion.active ) {

			window.addEventListener( 'devicemotion', handleDeviceMotionChange, false );

			sensors.motion.active = true;

		}

	},

	stop: function () {

		if ( sensors.motion.active ) {

			window.removeEventListener( 'devicemotion', handleDeviceMotionChange, false );

			sensors.motion.active = false;

		}

	},

	listen: function( callback ) {

		this.start( callback );

	},

	getScreenAdjustedAcceleration: function () {

		var accData = sensors.motion.data && sensors.motion.data.acceleration ? sensors.motion.data.acceleration : { x: 0, y: 0, z: 0 };
		var screenAccData = {};

		switch ( screenOrientationAngle ) {
			case SCREEN_ROTATION_90:
				screenAccData.x = - accData.y;
				screenAccData.y =   accData.x;
				break;
			case SCREEN_ROTATION_180:
				screenAccData.x = - accData.x;
				screenAccData.y = - accData.y;
				break;
			case SCREEN_ROTATION_270:
			case SCREEN_ROTATION_MINUS_90:
				screenAccData.x =   accData.y;
				screenAccData.y = - accData.x;
				break;
			default: // SCREEN_ROTATION_0
				screenAccData.x =   accData.x;
				screenAccData.y =   accData.y;
				break;
		}

		screenAccData.z = accData.z;

		return screenAccData;

	},

	getScreenAdjustedAccelerationIncludingGravity: function () {

		var accGData = sensors.motion.data && sensors.motion.data.accelerationIncludingGravity ? sensors.motion.data.accelerationIncludingGravity : { x: 0, y: 0, z: 0 };
		var screenAccGData = {};

		switch ( screenOrientationAngle ) {
			case SCREEN_ROTATION_90:
				screenAccGData.x = - accGData.y;
				screenAccGData.y =   accGData.x;
				break;
			case SCREEN_ROTATION_180:
				screenAccGData.x = - accGData.x;
				screenAccGData.y = - accGData.y;
				break;
			case SCREEN_ROTATION_270:
			case SCREEN_ROTATION_MINUS_90:
				screenAccGData.x =   accGData.y;
				screenAccGData.y = - accGData.x;
				break;
			default: // SCREEN_ROTATION_0
				screenAccGData.x =   accGData.x;
				screenAccGData.y =   accGData.y;
				break;
		}

		screenAccGData.z = accGData.z;

		return screenAccGData;

	},

	getScreenAdjustedRotationRate: function () {

		var rotRateData = sensors.motion.data && sensors.motion.data.rotationRate ? sensors.motion.data.rotationRate : { alpha: 0, beta: 0, gamma: 0 };
		var screenRotRateData = {};

		switch ( screenOrientationAngle ) {
			case SCREEN_ROTATION_90:
				screenRotRateData.beta  = - rotRateData.gamma;
				screenRotRateData.gamma =   rotRateData.beta;
				break;
			case SCREEN_ROTATION_180:
				screenRotRateData.beta  = - rotRateData.beta;
				screenRotRateData.gamma = - rotRateData.gamma;
				break;
			case SCREEN_ROTATION_270:
			case SCREEN_ROTATION_MINUS_90:
				screenRotRateData.beta  =   rotRateData.gamma;
				screenRotRateData.gamma = - rotRateData.beta;
				break;
			default: // SCREEN_ROTATION_0
				screenRotRateData.beta  =   rotRateData.beta;
				screenRotRateData.gamma =   rotRateData.gamma;
				break;
		}

		screenRotRateData.alpha = rotRateData.alpha;

		return screenRotRateData;

	},

	getLastRawEventData: function () {

		return sensors.motion.data || {};

	},

	_accelerationXAvailable: false,
	_accelerationYAvailable: false,
	_accelerationZAvailable: false,

	_accelerationIncludingGravityXAvailable: false,
	_accelerationIncludingGravityYAvailable: false,
	_accelerationIncludingGravityZAvailable: false,

	_rotationRateAlphaAvailable: false,
	_rotationRateBetaAvailable: false,
	_rotationRateGammaAvailable: false,

	isAvailable: function(_valueType){

		switch(_valueType){
			case this.ACCELERATION_X:
				return this._accelerationXAvailable;

			case this.ACCELERATION_Y:
				return this._accelerationYAvailable;

			case this.ACCELERATION_Z:
				return this._accelerationZAvailable;

			case this.ACCELERATION_INCLUDING_GRAVITY_X:
				return this._accelerationIncludingGravityXAvailable;

			case this.ACCELERATION_INCLUDING_GRAVITY_Y:
				return this._accelerationIncludingGravityYAvailable;

			case this.ACCELERATION_INCLUDING_GRAVITY_Z:
				return this._accelerationIncludingGravityZAvailable;

			case this.ROTATION_RATE_ALPHA:
				return this._rotationRateAlphaAvailable;

			case this.ROTATION_RATE_BETA:
				return this._rotationRateBetaAvailable;

			case this.ROTATION_RATE_GAMMA:
				return this._rotationRateGammaAvailable;
		}
	},

	ACCELERATION_X: 'accelerationX',
	ACCELERATION_Y: 'accelerationY',
	ACCELERATION_Z: 'accelerationZ',

	ACCELERATION_INCLUDING_GRAVITY_X: 'accelerationIncludingGravityX',
	ACCELERATION_INCLUDING_GRAVITY_Y: 'accelerationIncludingGravityY',
	ACCELERATION_INCLUDING_GRAVITY_Z: 'accelerationIncludingGravityZ',

	ROTATION_RATE_ALPHA: 'rotationRateAlpha',
	ROTATION_RATE_BETA: 'rotationRateBeta',
	ROTATION_RATE_GAMMA: 'rotationRateGamma'

};

////// Attach FULLTILT to root DOM element //////

window.FULLTILT = FULLTILT;

})( window ); /**
* JavaScript project for accessing and normalizing the accelerometer and gyroscope data on mobile devices
*
* @author Doruk Eker <dorukeker@gmail.com>
* @copyright Doruk Eker <http://dorukeker.com>
* @version 2.0.4
* @license MIT License | http://opensource.org/licenses/MIT
*/

(function(root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return (root.GyroNorm = factory());
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function() {
  /* Constants */
  var GAME                            = 'game';
  var WORLD                           = 'world';
  var DEVICE_ORIENTATION              = 'deviceorientation';
  var ACCELERATION                    = 'acceleration';
  var ACCELERATION_INCLUDING_GRAVITY  = 'accelerationinludinggravity';
  var ROTATION_RATE                   = 'rotationrate';

  /*-------------------------------------------------------*/
  /* PRIVATE VARIABLES */

  var _interval           = null;       // Timer to return values
  var _isCalibrating      = false;      // Flag if calibrating
  var _calibrationValue   = 0;          // Alpha offset value
  var _gravityCoefficient = 0;          // Coefficient to normalze gravity related values
  var _isRunning          = false;      // Boolean value if GyroNorm is tracking
  var _isReady            = false;      // Boolean value if GyroNorm is is initialized

  var _do                 = null;       // Object to store the device orientation values
  var _dm                 = null;       // Object to store the device motion values

  /* OPTIONS */
  var _frequency          = 50;         // Frequency for the return data in milliseconds
  var _gravityNormalized  = true;       // Flag if to normalize gravity values
  var _orientationBase    = GAME;       // Can be GyroNorm.GAME or GyroNorm.WORLD. GyroNorm.GAME returns orientation values with respect to the head direction of the device. GyroNorm.WORLD returns the orientation values with respect to the actual north direction of the world.
  var _decimalCount       = 2;          // Number of digits after the decimals point for the return values
  var _logger             = null;       // Function to callback on error. There is no default value. It can only be set by the user on gn.init()
  var _screenAdjusted     = false;      // If set to true it will return screen adjusted values. (e.g. On a horizontal orientation of a mobile device, the head would be one of the sides, instead of  the actual head of the device.)

  var _values = {
    do: {
      alpha: 0,
      beta: 0,
      gamma: 0,
      absolute: false
    },
    dm: {
      x: 0,
      y: 0,
      z: 0,
      gx: 0,
      gy: 0,
      gz: 0,
      alpha: 0,
      beta: 0,
      gamma: 0
    }
  }

  /*-------------------------------------------------------*/
  /* PUBLIC FUNCTIONS */

  /*
  *
  * Constructor function
  *
  */

  var GyroNorm = function(options) {}

  /* Constants */
  GyroNorm.GAME                             = GAME;
  GyroNorm.WORLD                            = WORLD;
  GyroNorm.DEVICE_ORIENTATION               = DEVICE_ORIENTATION;
  GyroNorm.ACCELERATION                     = ACCELERATION;
  GyroNorm.ACCELERATION_INCLUDING_GRAVITY   = ACCELERATION_INCLUDING_GRAVITY;
  GyroNorm.ROTATION_RATE                    = ROTATION_RATE;

  /*
  *
  * Initialize GyroNorm instance function
  *
  * @param object options - values are as follows. If set in the init function they overwrite the default option values
  * @param int options.frequency
  * @param boolean options.gravityNormalized
  * @param boolean options.orientationBase
  * @param boolean options.decimalCount
  * @param function options.logger
  * @param function options.screenAdjusted
  *
  */

  GyroNorm.prototype.init = function(options) {
    // Assign options that are passed with the constructor function
    if (options && options.frequency) _frequency = options.frequency;
    if (options && options.gravityNormalized) _gravityNormalized = options.gravityNormalized;
    if (options && options.orientationBase) _orientationBase = options.orientationBase;
    if (options && options.decimalCount) _decimalCount = options.decimalCount;
    if (options && options.logger) _logger = options.logger;
    if (options && options.screenAdjusted) _screenAdjusted = options.screenAdjusted;

    var deviceOrientationPromise = new FULLTILT.getDeviceOrientation({ 'type': _orientationBase }).then(function(controller) {
      _do = controller;
    });

    var deviceMotionPromise = new FULLTILT.getDeviceMotion().then(function(controller) {
      _dm = controller;
      // Set gravity coefficient
      _gravityCoefficient = (_dm.getScreenAdjustedAccelerationIncludingGravity().z > 0) ? -1 : 1;
    });

    return Promise.all([deviceOrientationPromise, deviceMotionPromise]).then(function() {
      _isReady = true;
    });
  }

  /*
  *
  * Stops all the tracking and listening on the window objects
  *
  */
  GyroNorm.prototype.end = function() {
    try {
      _isReady = false;
      this.stop();
      _dm.stop();
      _do.stop();
    } catch(err){
      log(err);
    }
  }

  /*
  *
  * Starts tracking the values
  *
  * @param function callback - Callback function to read the values
  *
  */
  GyroNorm.prototype.start = function(callback) {
    if (!_isReady) {
      log({ message: 'GyroNorm is not initialized yet. First call the "init()" function.', code: 1 });
      return;
    }

    _interval = setInterval(function() {
      callback(snapShot());
    }, _frequency);
    _isRunning = true;
  }

  /*
  *
  * Stops tracking the values
  *
  */
  GyroNorm.prototype.stop = function() {
    if (_interval) {
      clearInterval(_interval);
      _isRunning = false;
    }
  }

  /*
  *
  * Toggles if to normalize gravity related values
  *
  * @param boolean flag
  *
  */
  GyroNorm.prototype.normalizeGravity = function(flag) {
    _gravityNormalized = (flag) ? true : false;
  }


  /*
  *
  * Sets the current head direction as alpha = 0
  * Can only be used if device orientation is being tracked, values are not screen adjusted, value type is GyroNorm.EULER and orientation base is GyroNorm.GAME
  *
  * @return: If head direction is set successfully returns true, else false
  *
  */
  GyroNorm.prototype.setHeadDirection = function() {
    if (_screenAdjusted || _orientationBase === WORLD) {
      return false;
    }

    _calibrationValue = _do.getFixedFrameEuler().alpha;
    return true;
  }

  /*
  *
  * Sets the log function
  *
  */
  GyroNorm.prototype.startLogging = function(logger) {
    if (logger) {
      _logger = logger;
    }
  }

  /*
  *
  * Sets the log function to null which stops the logging
  *
  */
  GyroNorm.prototype.stopLogging = function() {
    _logger = null;
  }

  /*
  *
  * Returns if certain type of event is available on the device
  *
  * @param string _eventType - possible values are "deviceorientation" , "devicemotion" , "compassneedscalibration"
  *
  * @return true if event is available false if not
  *
  */
  GyroNorm.prototype.isAvailable = function(_eventType) {

    var doSnapShot = _do.getScreenAdjustedEuler();
    var accSnapShot = _dm.getScreenAdjustedAcceleration();
    var accGraSnapShot = _dm.getScreenAdjustedAccelerationIncludingGravity();
    var rotRateSnapShot = _dm.getScreenAdjustedRotationRate();

    switch (_eventType) {
      case DEVICE_ORIENTATION:
        return ((doSnapShot.alpha && doSnapShot.alpha !== null) && (doSnapShot.beta && doSnapShot.beta !== null) && (doSnapShot.gamma && doSnapShot.gamma !== null));
        break;

      case ACCELERATION:
        return (accSnapShot && accSnapShot.x && accSnapShot.y && accSnapShot.z);
        break;

      case ACCELERATION_INCLUDING_GRAVITY:
        return (accGraSnapShot && accGraSnapShot.x && accGraSnapShot.y && accGraSnapShot.z);
        break;

      case ROTATION_RATE:
        return (rotRateSnapShot && rotRateSnapShot.alpha && rotRateSnapShot.beta && rotRateSnapShot.gamma);
        break;

      default:
        return {
          deviceOrientationAvailable: ((doSnapShot.alpha && doSnapShot.alpha !== null) && (doSnapShot.beta && doSnapShot.beta !== null) && (doSnapShot.gamma && doSnapShot.gamma !== null)),
          accelerationAvailable: (accSnapShot && accSnapShot.x && accSnapShot.y && accSnapShot.z),
          accelerationIncludingGravityAvailable: (accGraSnapShot && accGraSnapShot.x && accGraSnapShot.y && accGraSnapShot.z),
          rotationRateAvailable: (rotRateSnapShot && rotRateSnapShot.alpha && rotRateSnapShot.beta && rotRateSnapShot.gamma)
        }
        break;
    }
  }

  /*
  *
  * Returns boolean value if the GyroNorm is running
  *
  */
  GyroNorm.prototype.isRunning = function() {
    return _isRunning;
  }

  /*-------------------------------------------------------*/
  /* PRIVATE FUNCTIONS */

  /*
  *
  * Utility function to round with digits after the decimal point
  *
  * @param float number - the original number to round
  *
  */
  function rnd(number) {
    return Math.round(number * Math.pow(10, _decimalCount)) / Math.pow(10, _decimalCount);
  }

  /*
  *
  * Starts calibration
  *
  */
  function calibrate() {
    _isCalibrating = true;
    _calibrationValues = new Array();
  }

  /*
  *
  * Takes a snapshot of the current deviceo orientaion and device motion values
  *
  */
  function snapShot() {
    var doSnapShot = {};

    if (_screenAdjusted) {
      doSnapShot = _do.getScreenAdjustedEuler();
    } else {
      doSnapShot = _do.getFixedFrameEuler();
    }

    var accSnapShot = _dm.getScreenAdjustedAcceleration();
    var accGraSnapShot = _dm.getScreenAdjustedAccelerationIncludingGravity();
    var rotRateSnapShot = _dm.getScreenAdjustedRotationRate();

    var alphaToSend = 0;

    if (_orientationBase === GAME) {
      alphaToSend = doSnapShot.alpha - _calibrationValue;
      alphaToSend = (alphaToSend < 0) ? (360 - Math.abs(alphaToSend)) : alphaToSend;
    } else {
      alphaToSend = doSnapShot.alpha;
    }

    var snapShot = {
      do: {
        alpha: rnd(alphaToSend),
        beta: rnd(doSnapShot.beta),
        gamma: rnd(doSnapShot.gamma),
        absolute: _do.isAbsolute()
      },
      dm: {
        x: rnd(accSnapShot.x),
        y: rnd(accSnapShot.y),
        z: rnd(accSnapShot.z),
        gx: rnd(accGraSnapShot.x),
        gy: rnd(accGraSnapShot.y),
        gz: rnd(accGraSnapShot.z),
        alpha: rnd(rotRateSnapShot.alpha),
        beta: rnd(rotRateSnapShot.beta),
        gamma: rnd(rotRateSnapShot.gamma)
      }
    };

    // Normalize gravity
    if (_gravityNormalized) {
      snapShot.dm.gx *= _gravityCoefficient;
      snapShot.dm.gy *= _gravityCoefficient;
      snapShot.dm.gz *= _gravityCoefficient;
    }

    return snapShot;
  }


  /*
  *
  * Starts listening to orientation event on the window object
  *
  */
  function log(err) {
    if (_logger) {
      if (typeof(err) == 'string') {
        err = { message: err, code: 0 }
      }
      _logger(err);
    }
  }

  return GyroNorm;
}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("f28c"), __webpack_require__("c8ba")))

/***/ }),

/***/ "b0e5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"15dd2995-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Fake3dImageEffect/Fake3dImageEffect.vue?vue&type=template&id=1a722e3a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",class:_vm.classes,style:(_vm.styles)},[_c('div',{ref:"gl",staticClass:"fake3d-image-effect__image",attrs:{"data-image-original":_vm.image,"data-image-depth":_vm.imageMap,"data-horizontal-threshold":_vm.horizontal,"data-vertical-threshold":_vm.vertical}}),(_vm.$slots.overlay || _vm.$scopedSlots.overlay)?_c('div',{staticClass:"fake3d-image-effect__overlay"},[_vm._t("overlay")],2):_vm._e(),(_vm.$slots.default || _vm.$scopedSlots.default)?_c('div',{class:_vm.contentClasses},[_vm._t("default",null,{"init":_vm.init})],2):_vm._e(),(_vm.$slots.footer || _vm.$scopedSlots.footer)?_c('div',{staticClass:"fake3d-image-effect__footer"},[_vm._t("footer")],2):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/Fake3dImageEffect/Fake3dImageEffect.vue?vue&type=template&id=1a722e3a&scoped=true&

// EXTERNAL MODULE: ./node_modules/gyronorm/dist/gyronorm.complete.js
var gyronorm_complete = __webpack_require__("4317");
var gyronorm_complete_default = /*#__PURE__*/__webpack_require__.n(gyronorm_complete);

// CONCATENATED MODULE: ./src/Fake3dImageEffect/shaders/fragment.glsl
/* harmony default export */ var fragment = ("#ifdef GL_ES\n  precision mediump float;\n#endif\n\nuniform vec4 resolution;\nuniform vec2 mouse;\nuniform vec2 threshold;\nuniform float time;\nuniform float pixelRatio;\nuniform sampler2D image0;\nuniform sampler2D image1;\n\nvec2 mirrored(vec2 v) {\n\n    vec2 m = mod( v, 2. );\n    return mix( m, 2.0 - m, step( 1.0, m ) );\n\n}\n\nvoid main() {\n\n    // uvs and textures\n    vec2 uv = pixelRatio * gl_FragCoord.xy / resolution.xy;\n    vec2 vUv = ( uv - vec2( 0.5 ) ) * resolution.zw + vec2( 0.5 );\n    vUv.y = 1. - vUv.y;\n    vec4 tex1 = texture2D( image1, mirrored( vUv ) );\n    vec2 fake3d = vec2( vUv.x + ( tex1.r - 0.5 ) * mouse.x / threshold.x, vUv.y + ( tex1.r - 0.5 ) * mouse.y / threshold.y );\n    gl_FragColor = texture2D( image0, mirrored( fake3d ) );\n\n}\n");
// CONCATENATED MODULE: ./src/Fake3dImageEffect/shaders/vertex.glsl
/* harmony default export */ var vertex = ("attribute vec2 a_position;\n\nvoid main() {\n\n    gl_Position = vec4( a_position, 0, 1 );\n\n}\n");
// CONCATENATED MODULE: ./src/Fake3dImageEffect/sketch.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

 // Glsl


 // TODO: npm install gyronorm
// TODO: Add options for values
// TODO: Pass values to gyro.

var sketch_Sketch =
/*#__PURE__*/
function () {
  function Sketch(element) {
    _classCallCheck(this, Sketch);

    this.container = element;
    this.canvas = document.createElement('canvas');
    this.container.appendChild(this.canvas);
    this.gl = this.canvas.getContext('webgl');
    this.ratio = window.devicePixelRatio;
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
    this.mouseX = 0;
    this.mouseY = 0;
    this.mouseTargetX = 0;
    this.mouseTargetY = 0;
    this.maxTilt = 15;
    this.imageOriginal = this.container.getAttribute('data-image-original');
    this.imageDepth = this.container.getAttribute('data-image-depth');
    this.vth = this.container.getAttribute('data-vertical-threshold');
    this.hth = this.container.getAttribute('data-horizontal-threshold');
    this.imageURLs = [this.imageOriginal, this.imageDepth];
    this.textures = [];
    this.startTime = new Date().getTime(); // Get start time for animating

    this.createScene();
    this.addTexture();
    this.mouseMove();
    this.gyro();
  }

  _createClass(Sketch, [{
    key: "addShader",
    value: function addShader(source, type) {
      var shader = this.gl.createShader(type);
      this.gl.shaderSource(shader, source);
      this.gl.compileShader(shader);
      var isCompiled = this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS);

      if (!isCompiled) {
        throw new Error('Shader compile error:', this.gl.getShaderInfoLog(shader));
      }

      this.gl.attachShader(this.program, shader);
    }
  }, {
    key: "resizeHandler",
    value: function resizeHandler() {
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;
      this.width = this.container.offsetWidth;
      this.height = this.container.offsetHeight;
      this.canvas.width = this.width * this.ratio;
      this.canvas.height = this.height * this.ratio;
      this.canvas.style.width = "".concat(this.width, "px");
      this.canvas.style.height = "".concat(this.height, "px");
      var a1 = 1,
          a2 = 1;

      if (this.height / this.width < this.imageAspect) {
        a1 = 1;
        a2 = this.height / this.width / this.imageAspect;
      } else {
        a1 = this.width / this.height * this.imageAspect;
        a2 = 1;
      }

      this.uResolution.set(this.width, this.height, a1, a2);
      this.uRatio.set(1 / this.ratio);
      this.uThreshold.set(this.hth, this.vth);
      this.gl.viewport(0, 0, this.width * this.ratio, this.height * this.ratio);
    }
  }, {
    key: "resize",
    value: function resize() {
      this.resizeHandler();
      window.addEventListener('resize', this.resizeHandler.bind(this));
    }
  }, {
    key: "createScene",
    value: function createScene() {
      this.program = this.gl.createProgram();
      this.addShader(vertex, this.gl.VERTEX_SHADER);
      this.addShader(fragment, this.gl.FRAGMENT_SHADER);
      this.gl.linkProgram(this.program);
      this.gl.useProgram(this.program);
      this.uResolution = new Uniform('resolution', '4f', this.program, this.gl);
      this.uMouse = new Uniform('mouse', '2f', this.program, this.gl);
      this.uTime = new Uniform('time', '1f', this.program, this.gl);
      this.uRatio = new Uniform('pixelRatio', '1f', this.program, this.gl);
      this.uThreshold = new Uniform('threshold', '2f', this.program, this.gl); // create position attrib

      this.billboard = new Rect(this.gl);
      this.positionLocation = this.gl.getAttribLocation(this.program, 'a_position');
      this.gl.enableVertexAttribArray(this.positionLocation);
      this.gl.vertexAttribPointer(this.positionLocation, 2, this.gl.FLOAT, false, 0, 0);
    }
  }, {
    key: "addTexture",
    value: function addTexture() {
      var that = this;
      loadImages(this.imageURLs, that.start.bind(this));
    }
  }, {
    key: "start",
    value: function start(images) {
      var that = this,
          gl = that.gl;
      this.imageAspect = images[0].naturalHeight / images[0].naturalWidth;

      for (var i = 0; i < images.length; i++) {
        var texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture); // Set the parameters so we can render any size image.

        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR); // Upload the image into the texture.

        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, images[i]);
        this.textures.push(texture);
      } // lookup the sampler locations.


      var u_image0Location = this.gl.getUniformLocation(this.program, 'image0'),
          u_image1Location = this.gl.getUniformLocation(this.program, 'image1'); // set which texture units to render with.

      this.gl.uniform1i(u_image0Location, 0); // texture unit 0

      this.gl.uniform1i(u_image1Location, 1); // texture unit 1

      this.gl.activeTexture(this.gl.TEXTURE0);
      this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures[0]);
      this.gl.activeTexture(this.gl.TEXTURE1);
      this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures[1]); // start application

      this.resize();
      this.render();
    }
  }, {
    key: "gyro",
    value: function gyro() {
      var that = this,
          gn = new gyronorm_complete_default.a();
      gn.init({
        gravityNormalized: true
      }).then(function () {
        gn.start(function (data) {
          var y = data.do.gamma,
              x = data.do.beta;
          that.mouseTargetY = clamp(x, -that.maxTilt, that.maxTilt) / that.maxTilt;
          that.mouseTargetX = -clamp(y, -that.maxTilt, that.maxTilt) / that.maxTilt;
        });
      }).catch(function (e) {
        console.error('Gyro not supported', e);
      });
    }
  }, {
    key: "mouseMove",
    value: function mouseMove() {
      var that = this;
      document.addEventListener('mousemove', function (e) {
        var halfX = that.windowWidth / 2,
            halfY = that.windowHeight / 2;
        that.mouseTargetX = (halfX - e.clientX) / halfX;
        that.mouseTargetY = (halfY - e.clientY) / halfY;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var now = new Date().getTime(),
          currentTime = (now - this.startTime) / 1000;
      this.uTime.set(currentTime); // inertia

      this.mouseX += (this.mouseTargetX - this.mouseX) * 0.05;
      this.mouseY += (this.mouseTargetY - this.mouseY) * 0.05;
      this.uMouse.set(this.mouseX, this.mouseY); // render

      this.billboard.render(this.gl);
      requestAnimationFrame(this.render.bind(this));
    }
  }]);

  return Sketch;
}();



function loadImage(url, callback) {
  var image = new Image();
  image.crossOrigin = 'Anonymous';
  image.src = url;
  image.onload = callback;

  image.onerror = function () {
    console.error('Unable to load image', image);
    callback();
  };

  return image;
}

function loadImages(urls, callback) {
  var imagesToLoad = urls.length;

  var images = [],
      onImageLoad = function onImageLoad() {
    --imagesToLoad; // If all the images are loaded call the callback.

    if (imagesToLoad === 0) {
      callback(images);
    }
  };

  for (var ii = 0; ii < imagesToLoad; ++ii) {
    var image = loadImage(urls[ii], onImageLoad);
    images.push(image);
  }
}

function Uniform(name, suffix, program, gl) {
  this.name = name;
  this.suffix = suffix;
  this.gl = gl;
  this.program = program;
  this.location = gl.getUniformLocation(program, name);
}

Uniform.prototype.set = function () {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  var method = "uniform".concat(this.suffix),
      args = [this.location].concat(values);
  this.gl[method].apply(this.gl, args);
};

function Rect(gl) {
  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, Rect.verts, gl.STATIC_DRAW);
}

try {
  // eslint-disable-next-line compat/compat
  Rect.verts = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
} catch (e) {
  console.error(e);
}

Rect.prototype.render = function (gl) {
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
};

function clamp(number, lower, upper) {
  if (typeof upper !== 'undefined') number = number <= upper ? number : upper;
  if (typeof lower !== 'undefined') number = number >= lower ? number : lower;
  return number;
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Fake3dImageEffect/Fake3dImageEffect.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Sketch
 // Init

var COMPONENT = 'fake3d-image-effect'; // Component

/* harmony default export */ var Fake3dImageEffectvue_type_script_lang_js_ = ({
  name: COMPONENT,
  inheritAttrs: false,
  props: {
    tag: {
      type: String,
      default: 'section'
    },
    image: {
      type: String,
      required: true
    },
    imageMap: {
      type: String,
      required: true
    },
    horizontal: {
      type: [Number, String],
      default: 18
    },
    vertical: {
      type: [Number, String],
      default: 23
    },
    centered: {
      type: Boolean,
      default: false
    },
    fillHeightContent: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100vh'
    }
  },
  computed: {
    classes: function classes() {
      var CLASSES = [COMPONENT];
      this.centered && CLASSES.push("".concat(COMPONENT, "--centered"));
      return CLASSES;
    },
    contentClasses: function contentClasses() {
      var MAIN_CLASS = "".concat(COMPONENT, "__content"),
          CLASSES = [MAIN_CLASS];
      this.fillHeightContent && CLASSES.push("".concat(MAIN_CLASS, "--fill-height"));
      return CLASSES;
    },
    styles: function styles() {
      return {
        width: this.width,
        height: this.height
      };
    }
  },
  mounted: function mounted() {
    this.$nextTick(this.init);
  },
  methods: {
    init: function init() {
      var GL = this.$refs.gl;

      try {
        new sketch_Sketch(GL);
      } catch (e) {
        console.error({
          e: e
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./src/Fake3dImageEffect/Fake3dImageEffect.vue?vue&type=script&lang=js&
 /* harmony default export */ var Fake3dImageEffect_Fake3dImageEffectvue_type_script_lang_js_ = (Fake3dImageEffectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Fake3dImageEffect/style.scss?vue&type=style&index=0&id=1a722e3a&scoped=true&lang=scss&
var stylevue_type_style_index_0_id_1a722e3a_scoped_true_lang_scss_ = __webpack_require__("21a6");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/Fake3dImageEffect/Fake3dImageEffect.vue






/* normalize component */

var component = normalizeComponent(
  Fake3dImageEffect_Fake3dImageEffectvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "1a722e3a",
  null
  
)

/* harmony default export */ var Fake3dImageEffect = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "ec93":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f28c":
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./src/Fake3dImageEffect/index.js
var Fake3dImageEffect = __webpack_require__("1f5e");

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (Fake3dImageEffect["a" /* default */]);



/***/ })

/******/ })["default"];