(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e19) { throw _e19; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e20) { didErr = true; err = _e20; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty2(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["identity-IdentityManager-js"], {
    /***/
    "2ByA":
    /*!***************************************************************!*\
      !*** ./node_modules/@arcgis/core/identity/IdentityManager.js ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function ByA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../chunks/tslib.es6.js */
      "pO5D");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _kernel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../kernel.js */
      "975N");
      /* harmony import */


      var _IdentityManagerBase_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./IdentityManagerBase.js */
      "rDsY");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var o = /*#__PURE__*/function (_IdentityManagerBase_) {
        _inherits(o, _IdentityManagerBase_);

        var _super = _createSuper(o);

        function o() {
          _classCallCheck(this, o);

          return _super.apply(this, arguments);
        }

        return o;
      }(_IdentityManagerBase_js__WEBPACK_IMPORTED_MODULE_3__["IdentityManagerBase"]);

      o = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_1__["subclass"])("esri.identity.IdentityManager")], o);
      var a = new o();
      Object(_kernel_js__WEBPACK_IMPORTED_MODULE_2__["setId"])(a);
      /* harmony default export */

      __webpack_exports__["default"] = a;
      /***/
    },

    /***/
    "4Wwy":
    /*!********************************************************!*\
      !*** ./node_modules/focus-trap/dist/focus-trap.esm.js ***!
      \********************************************************/

    /*! exports provided: createFocusTrap */

    /***/
    function Wwy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createFocusTrap", function () {
        return createFocusTrap;
      });
      /* harmony import */


      var tabbable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tabbable */
      "YvcI");
      /*!
      * focus-trap 6.2.3
      * @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
      */


      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }

        return obj;
      }

      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);

        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly) symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
          keys.push.apply(keys, symbols);
        }

        return keys;
      }

      function _objectSpread2(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};

          if (i % 2) {
            ownKeys(Object(source), true).forEach(function (key) {
              _defineProperty(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
          } else {
            ownKeys(Object(source)).forEach(function (key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
        }

        return target;
      }

      var activeFocusDelay;

      var activeFocusTraps = function () {
        var trapQueue = [];
        return {
          activateTrap: function activateTrap(trap) {
            if (trapQueue.length > 0) {
              var activeTrap = trapQueue[trapQueue.length - 1];

              if (activeTrap !== trap) {
                activeTrap.pause();
              }
            }

            var trapIndex = trapQueue.indexOf(trap);

            if (trapIndex === -1) {
              trapQueue.push(trap);
            } else {
              // move this existing trap to the front of the queue
              trapQueue.splice(trapIndex, 1);
              trapQueue.push(trap);
            }
          },
          deactivateTrap: function deactivateTrap(trap) {
            var trapIndex = trapQueue.indexOf(trap);

            if (trapIndex !== -1) {
              trapQueue.splice(trapIndex, 1);
            }

            if (trapQueue.length > 0) {
              trapQueue[trapQueue.length - 1].unpause();
            }
          }
        };
      }();

      var isSelectableInput = function isSelectableInput(node) {
        return node.tagName && node.tagName.toLowerCase() === 'input' && typeof node.select === 'function';
      };

      var isEscapeEvent = function isEscapeEvent(e) {
        return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
      };

      var isTabEvent = function isTabEvent(e) {
        return e.key === 'Tab' || e.keyCode === 9;
      };

      var delay = function delay(fn) {
        return setTimeout(fn, 0);
      }; // Array.find/findIndex() are not supported on IE; this replicates enough
      //  of Array.findIndex() for our needs


      var findIndex = function findIndex(arr, fn) {
        var idx = -1;
        arr.every(function (value, i) {
          if (fn(value)) {
            idx = i;
            return false; // break
          }

          return true; // next
        });
        return idx;
      };

      var createFocusTrap = function createFocusTrap(elements, userOptions) {
        var doc = document;

        var config = _objectSpread2({
          returnFocusOnDeactivate: true,
          escapeDeactivates: true,
          delayInitialFocus: true
        }, userOptions);

        var state = {
          // @type {Array<HTMLElement>}
          containers: [],
          // list of objects identifying the first and last tabbable nodes in all containers/groups in
          //  the trap
          // NOTE: it's possible that a group has no tabbable nodes if nodes get removed while the trap
          //  is active, but the trap should never get to a state where there isn't at least one group
          //  with at least one tabbable node in it (that would lead to an error condition that would
          //  result in an error being thrown)
          // @type {Array<{ firstTabbableNode: HTMLElement|null, lastTabbableNode: HTMLElement|null }>}
          tabbableGroups: [],
          nodeFocusedBeforeActivation: null,
          mostRecentlyFocusedNode: null,
          active: false,
          paused: false
        };
        var trap; // eslint-disable-line prefer-const -- some private functions reference it, and its methods reference private functions, so we must declare here and define later

        var containersContain = function containersContain(element) {
          return state.containers.some(function (container) {
            return container.contains(element);
          });
        };

        var getNodeForOption = function getNodeForOption(optionName) {
          var optionValue = config[optionName];

          if (!optionValue) {
            return null;
          }

          var node = optionValue;

          if (typeof optionValue === 'string') {
            node = doc.querySelector(optionValue);

            if (!node) {
              throw new Error("`".concat(optionName, "` refers to no known node"));
            }
          }

          if (typeof optionValue === 'function') {
            node = optionValue();

            if (!node) {
              throw new Error("`".concat(optionName, "` did not return a node"));
            }
          }

          return node;
        };

        var getInitialFocusNode = function getInitialFocusNode() {
          var node;

          if (getNodeForOption('initialFocus') !== null) {
            node = getNodeForOption('initialFocus');
          } else if (containersContain(doc.activeElement)) {
            node = doc.activeElement;
          } else {
            var firstTabbableGroup = state.tabbableGroups[0];
            var firstTabbableNode = firstTabbableGroup && firstTabbableGroup.firstTabbableNode;
            node = firstTabbableNode || getNodeForOption('fallbackFocus');
          }

          if (!node) {
            throw new Error('Your focus-trap needs to have at least one focusable element');
          }

          return node;
        };

        var updateTabbableNodes = function updateTabbableNodes() {
          state.tabbableGroups = state.containers.map(function (container) {
            var tabbableNodes = Object(tabbable__WEBPACK_IMPORTED_MODULE_0__["tabbable"])(container);

            if (tabbableNodes.length > 0) {
              return {
                firstTabbableNode: tabbableNodes[0],
                lastTabbableNode: tabbableNodes[tabbableNodes.length - 1]
              };
            }

            return undefined;
          }).filter(function (group) {
            return !!group;
          }); // remove groups with no tabbable nodes
          // throw if no groups have tabbable nodes and we don't have a fallback focus node either

          if (state.tabbableGroups.length <= 0 && !getNodeForOption('fallbackFocus')) {
            throw new Error('Your focus-trap must have at least one container with at least one tabbable node in it at all times');
          }
        };

        var tryFocus = function tryFocus(node) {
          if (node === doc.activeElement) {
            return;
          }

          if (!node || !node.focus) {
            tryFocus(getInitialFocusNode());
            return;
          }

          node.focus({
            preventScroll: !!config.preventScroll
          });
          state.mostRecentlyFocusedNode = node;

          if (isSelectableInput(node)) {
            node.select();
          }
        };

        var getReturnFocusNode = function getReturnFocusNode(previousActiveElement) {
          var node = getNodeForOption('setReturnFocus');
          return node ? node : previousActiveElement;
        }; // This needs to be done on mousedown and touchstart instead of click
        // so that it precedes the focus event.


        var checkPointerDown = function checkPointerDown(e) {
          if (containersContain(e.target)) {
            // allow the click since it ocurred inside the trap
            return;
          }

          if (config.clickOutsideDeactivates) {
            // immediately deactivate the trap
            trap.deactivate({
              // if, on deactivation, we should return focus to the node originally-focused
              //  when the trap was activated (or the configured `setReturnFocus` node),
              //  then assume it's also OK to return focus to the outside node that was
              //  just clicked, causing deactivation, as long as that node is focusable;
              //  if it isn't focusable, then return focus to the original node focused
              //  on activation (or the configured `setReturnFocus` node)
              // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
              //  which will result in the outside click setting focus to the node
              //  that was clicked, whether it's focusable or not; by setting
              //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
              //  on activation (or the configured `setReturnFocus` node)
              returnFocus: config.returnFocusOnDeactivate && !Object(tabbable__WEBPACK_IMPORTED_MODULE_0__["isFocusable"])(e.target)
            });
            return;
          } // This is needed for mobile devices.
          // (If we'll only let `click` events through,
          // then on mobile they will be blocked anyways if `touchstart` is blocked.)


          if (config.allowOutsideClick && (typeof config.allowOutsideClick === 'boolean' ? config.allowOutsideClick : config.allowOutsideClick(e))) {
            // allow the click outside the trap to take place
            return;
          } // otherwise, prevent the click


          e.preventDefault();
        }; // In case focus escapes the trap for some strange reason, pull it back in.


        var checkFocusIn = function checkFocusIn(e) {
          var targetContained = containersContain(e.target); // In Firefox when you Tab out of an iframe the Document is briefly focused.

          if (targetContained || e.target instanceof Document) {
            if (targetContained) {
              state.mostRecentlyFocusedNode = e.target;
            }
          } else {
            // escaped! pull it back in to where it just left
            e.stopImmediatePropagation();
            tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
          }
        }; // Hijack Tab events on the first and last focusable nodes of the trap,
        // in order to prevent focus from escaping. If it escapes for even a
        // moment it can end up scrolling the page and causing confusion so we
        // kind of need to capture the action at the keydown phase.


        var checkTab = function checkTab(e) {
          updateTabbableNodes();
          var destinationNode = null;

          if (state.tabbableGroups.length > 0) {
            if (e.shiftKey) {
              var startOfGroupIndex = findIndex(state.tabbableGroups, function (_ref) {
                var firstTabbableNode = _ref.firstTabbableNode;
                return e.target === firstTabbableNode;
              });

              if (startOfGroupIndex >= 0) {
                var destinationGroupIndex = startOfGroupIndex === 0 ? state.tabbableGroups.length - 1 : startOfGroupIndex - 1;
                var destinationGroup = state.tabbableGroups[destinationGroupIndex];
                destinationNode = destinationGroup.lastTabbableNode;
              }
            } else {
              var lastOfGroupIndex = findIndex(state.tabbableGroups, function (_ref2) {
                var lastTabbableNode = _ref2.lastTabbableNode;
                return e.target === lastTabbableNode;
              });

              if (lastOfGroupIndex >= 0) {
                var _destinationGroupIndex = lastOfGroupIndex === state.tabbableGroups.length - 1 ? 0 : lastOfGroupIndex + 1;

                var _destinationGroup = state.tabbableGroups[_destinationGroupIndex];
                destinationNode = _destinationGroup.firstTabbableNode;
              }
            }
          } else {
            destinationNode = getNodeForOption('fallbackFocus');
          }

          if (destinationNode) {
            e.preventDefault();
            tryFocus(destinationNode);
          }
        };

        var checkKey = function checkKey(e) {
          if (config.escapeDeactivates !== false && isEscapeEvent(e)) {
            e.preventDefault();
            trap.deactivate();
            return;
          }

          if (isTabEvent(e)) {
            checkTab(e);
            return;
          }
        };

        var checkClick = function checkClick(e) {
          if (config.clickOutsideDeactivates) {
            return;
          }

          if (containersContain(e.target)) {
            return;
          }

          if (config.allowOutsideClick && (typeof config.allowOutsideClick === 'boolean' ? config.allowOutsideClick : config.allowOutsideClick(e))) {
            return;
          }

          e.preventDefault();
          e.stopImmediatePropagation();
        }; //
        // EVENT LISTENERS
        //


        var addListeners = function addListeners() {
          if (!state.active) {
            return;
          } // There can be only one listening focus trap at a time


          activeFocusTraps.activateTrap(trap); // Delay ensures that the focused element doesn't capture the event
          // that caused the focus trap activation.

          activeFocusDelay = config.delayInitialFocus ? delay(function () {
            tryFocus(getInitialFocusNode());
          }) : tryFocus(getInitialFocusNode());
          doc.addEventListener('focusin', checkFocusIn, true);
          doc.addEventListener('mousedown', checkPointerDown, {
            capture: true,
            passive: false
          });
          doc.addEventListener('touchstart', checkPointerDown, {
            capture: true,
            passive: false
          });
          doc.addEventListener('click', checkClick, {
            capture: true,
            passive: false
          });
          doc.addEventListener('keydown', checkKey, {
            capture: true,
            passive: false
          });
          return trap;
        };

        var removeListeners = function removeListeners() {
          if (!state.active) {
            return;
          }

          doc.removeEventListener('focusin', checkFocusIn, true);
          doc.removeEventListener('mousedown', checkPointerDown, true);
          doc.removeEventListener('touchstart', checkPointerDown, true);
          doc.removeEventListener('click', checkClick, true);
          doc.removeEventListener('keydown', checkKey, true);
          return trap;
        }; //
        // TRAP DEFINITION
        //


        trap = {
          activate: function activate(activateOptions) {
            if (state.active) {
              return this;
            }

            updateTabbableNodes();
            state.active = true;
            state.paused = false;
            state.nodeFocusedBeforeActivation = doc.activeElement;
            var onActivate = activateOptions && activateOptions.onActivate ? activateOptions.onActivate : config.onActivate;

            if (onActivate) {
              onActivate();
            }

            addListeners();
            return this;
          },
          deactivate: function deactivate(deactivateOptions) {
            if (!state.active) {
              return this;
            }

            clearTimeout(activeFocusDelay);
            removeListeners();
            state.active = false;
            state.paused = false;
            activeFocusTraps.deactivateTrap(trap);
            var onDeactivate = deactivateOptions && deactivateOptions.onDeactivate !== undefined ? deactivateOptions.onDeactivate : config.onDeactivate;

            if (onDeactivate) {
              onDeactivate();
            }

            var returnFocus = deactivateOptions && deactivateOptions.returnFocus !== undefined ? deactivateOptions.returnFocus : config.returnFocusOnDeactivate;

            if (returnFocus) {
              delay(function () {
                tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation));
              });
            }

            return this;
          },
          pause: function pause() {
            if (state.paused || !state.active) {
              return this;
            }

            state.paused = true;
            removeListeners();
            return this;
          },
          unpause: function unpause() {
            if (!state.paused || !state.active) {
              return this;
            }

            state.paused = false;
            updateTabbableNodes();
            addListeners();
            return this;
          },
          updateContainerElements: function updateContainerElements(containerElements) {
            var elementsAsArray = [].concat(containerElements).filter(Boolean);
            state.containers = elementsAsArray.map(function (element) {
              return typeof element === 'string' ? doc.querySelector(element) : element;
            });

            if (state.active) {
              updateTabbableNodes();
            }

            return this;
          }
        }; // initialize container elements

        trap.updateContainerElements(elements);
        return trap;
      }; //# sourceMappingURL=focus-trap.esm.js.map

      /***/

    },

    /***/
    "7BLv":
    /*!************************************************************!*\
      !*** ./node_modules/@arcgis/core/identity/IdentityForm.js ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function BLv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../chunks/tslib.es6.js */
      "pO5D");
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _intl_substitute_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../intl/substitute.js */
      "JV2H");
      /* harmony import */


      var _widgets_support_widgetUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../widgets/support/widgetUtils.js */
      "cCpn");
      /* harmony import */


      var _widgets_support_decorators_messageBundle_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../widgets/support/decorators/messageBundle.js */
      "dV4Z");
      /* harmony import */


      var _widgets_support_decorators_renderable_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../widgets/support/decorators/renderable.js */
      "OWWk");
      /* harmony import */


      var _chunks_index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../chunks/index.js */
      "Jv1m");
      /* harmony import */


      var _widgets_Widget_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../widgets/Widget.js */
      "Ehpe");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var p = "esri-identity-form",
          a = "esri-identity-form__group",
          d = "esri-identity-form__label",
          c = "esri-identity-form__footer",
          m = "esri-input",
          h = "esri-button",
          v = "esri-button--secondary";

      var b = /*#__PURE__*/function (_widgets_Widget_js__W) {
        _inherits(b, _widgets_Widget_js__W);

        var _super2 = _createSuper(b);

        function b(s, e) {
          var _this;

          _classCallCheck(this, b);

          _this = _super2.call(this, s, e), _this._usernameInputNode = null, _this._passwordInputNode = null, _this.messages = null, _this.signingIn = !1, _this.server = null, _this.resource = null, _this.error = null, _this.oAuthPrompt = !1;
          return _this;
        }

        _createClass(b, [{
          key: "render",
          value: function render() {
            var s = this.error,
                e = this.server,
                t = this.resource,
                i = this.signingIn,
                n = this.oAuthPrompt,
                l = this.messages,
                _b = Object(_chunks_index_js__WEBPACK_IMPORTED_MODULE_13__["j"])("div", {
              "class": a
            }, Object(_intl_substitute_js__WEBPACK_IMPORTED_MODULE_9__["substitute"])(n ? l.oAuthInfo : l.info, {
              server: /\.arcgis\.com/i.test(e) ? "ArcGIS Online" : e,
              resource: "(".concat(t || l.lblItem, ")")
            })),
                g = n ? null : Object(_chunks_index_js__WEBPACK_IMPORTED_MODULE_13__["j"])("div", {
              "class": a
            }, Object(_chunks_index_js__WEBPACK_IMPORTED_MODULE_13__["j"])("label", {
              "class": d
            }, l.lblUser, Object(_chunks_index_js__WEBPACK_IMPORTED_MODULE_13__["j"])("input", {
              value: "",
              required: !0,
              autocomplete: "off",
              spellcheck: !1,
              type: "text",
              bind: this,
              afterCreate: _widgets_support_widgetUtils_js__WEBPACK_IMPORTED_MODULE_10__["storeNode"],
              "data-node-ref": "_usernameInputNode",
              "class": m
            }))),
                f = n ? null : Object(_chunks_index_js__WEBPACK_IMPORTED_MODULE_13__["j"])("div", {
              "class": a
            }, Object(_chunks_index_js__WEBPACK_IMPORTED_MODULE_13__["j"])("label", {
              "class": d
            }, l.lblPwd, Object(_chunks_index_js__WEBPACK_IMPORTED_MODULE_13__["j"])("input", {
              value: "",
              required: !0,
              type: "password",
              bind: this,
              afterCreate: _widgets_support_widgetUtils_js__WEBPACK_IMPORTED_MODULE_10__["storeNode"],
              "data-node-ref": "_passwordInputNode",
              "class": m
            }))),
                _ = Object(_chunks_index_js__WEBPACK_IMPORTED_MODULE_13__["j"])("div", {
              "class": this.classes(a, c)
            }, Object(_chunks_index_js__WEBPACK_IMPORTED_MODULE_13__["j"])("input", {
              type: "submit",
              disabled: !!i,
              value: i ? l.lblSigning : l.lblOk,
              "class": h
            }), Object(_chunks_index_js__WEBPACK_IMPORTED_MODULE_13__["j"])("input", {
              type: "button",
              value: l.lblCancel,
              bind: this,
              onclick: this._cancel,
              "class": this.classes(h, v)
            })),
                y = s ? Object(_chunks_index_js__WEBPACK_IMPORTED_MODULE_13__["j"])("div", null, s.details && s.details.httpStatus ? l.invalidUser : l.noAuthService) : null;

            return Object(_chunks_index_js__WEBPACK_IMPORTED_MODULE_13__["j"])("form", {
              "class": p,
              bind: this,
              onsubmit: this._submit
            }, _b, y, g, f, _);
          }
        }, {
          key: "_cancel",
          value: function _cancel() {
            this._set("signingIn", !1), this._usernameInputNode && (this._usernameInputNode.value = ""), this._passwordInputNode && (this._passwordInputNode.value = ""), this.emit("cancel");
          }
        }, {
          key: "_submit",
          value: function _submit(s) {
            s.preventDefault(), this._set("signingIn", !0);
            var e = this.oAuthPrompt ? {} : {
              username: this._usernameInputNode && this._usernameInputNode.value,
              password: this._passwordInputNode && this._passwordInputNode.value
            };
            this.emit("submit", e);
          }
        }]);

        return b;
      }(_widgets_Widget_js__WEBPACK_IMPORTED_MODULE_14__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])(), Object(_widgets_support_decorators_renderable_js__WEBPACK_IMPORTED_MODULE_12__["renderable"])(), Object(_widgets_support_decorators_messageBundle_js__WEBPACK_IMPORTED_MODULE_11__["messageBundle"])("esri/identity/t9n/identity")], b.prototype, "messages", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])(), Object(_widgets_support_decorators_renderable_js__WEBPACK_IMPORTED_MODULE_12__["renderable"])()], b.prototype, "signingIn", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])(), Object(_widgets_support_decorators_renderable_js__WEBPACK_IMPORTED_MODULE_12__["renderable"])()], b.prototype, "server", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])(), Object(_widgets_support_decorators_renderable_js__WEBPACK_IMPORTED_MODULE_12__["renderable"])()], b.prototype, "resource", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])(), Object(_widgets_support_decorators_renderable_js__WEBPACK_IMPORTED_MODULE_12__["renderable"])()], b.prototype, "error", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])(), Object(_widgets_support_decorators_renderable_js__WEBPACK_IMPORTED_MODULE_12__["renderable"])()], b.prototype, "oAuthPrompt", void 0), b = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.identity.IdentityForm")], b);
      var g = b;
      /* harmony default export */

      __webpack_exports__["default"] = g;
      /***/
    },

    /***/
    "95ME":
    /*!*********************************************************!*\
      !*** ./node_modules/@arcgis/core/identity/OAuthInfo.js ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function ME(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../chunks/tslib.es6.js */
      "pO5D");
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../core/JSONSupport.js */
      "ag7Y");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _p;

      var s = _p = /*#__PURE__*/function (_core_JSONSupport_js_) {
        _inherits(p, _core_JSONSupport_js_);

        var _super3 = _createSuper(p);

        function p(o) {
          var _this2;

          _classCallCheck(this, p);

          _this2 = _super3.call(this, o), _this2._oAuthCred = null, _this2.appId = null, _this2.authNamespace = "/", _this2.expiration = 20160, _this2.forceLogin = !1, _this2.forceUserId = !1, _this2.locale = null, _this2.minTimeUntilExpiration = 30, _this2.popup = !1, _this2.popupCallbackUrl = "oauth-callback.html", _this2.popupWindowFeatures = "height=490,width=800,resizable,scrollbars,status", _this2.portalUrl = "https://www.arcgis.com", _this2.preserveUrlHash = !1, _this2.userId = null;
          return _this2;
        }

        _createClass(p, [{
          key: "clone",
          value: function clone() {
            return _p.fromJSON(this.toJSON());
          }
        }]);

        return p;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], s.prototype, "appId", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], s.prototype, "authNamespace", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], s.prototype, "expiration", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], s.prototype, "forceLogin", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], s.prototype, "forceUserId", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], s.prototype, "locale", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], s.prototype, "minTimeUntilExpiration", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], s.prototype, "popup", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], s.prototype, "popupCallbackUrl", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], s.prototype, "popupWindowFeatures", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], s.prototype, "portalUrl", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], s.prototype, "preserveUrlHash", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], s.prototype, "userId", void 0), s = _p = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.identity.OAuthInfo")], s);
      var i = s;
      /* harmony default export */

      __webpack_exports__["default"] = i;
      /***/
    },

    /***/
    "AeD8":
    /*!**************************************************!*\
      !*** ./node_modules/@arcgis/core/core/cookie.js ***!
      \**************************************************/

    /*! exports provided: writeCookie */

    /***/
    function AeD8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "writeCookie", function () {
        return t;
      });
      /* harmony import */


      var _maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./maybe.js */
      "srIe");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function t(t, o) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var i = Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["assumeNonNull"])(n.expires);

        if ("number" == typeof i) {
          var e = new Date();
          e.setTime(e.getTime() + 24 * i * 60 * 60 * 1e3), i = n.expires = e;
        }

        "string" != typeof i && (n.expires = i.toUTCString());
        var r = t + "=" + encodeURIComponent(o);

        for (var _e in n) {
          r += "; " + _e;
          var _t = n[_e];
          !0 !== _t && (r += "=" + _t);
        }

        document.cookie = r;
      }
      /***/

    },

    /***/
    "EEMW":
    /*!**********************************************************!*\
      !*** ./node_modules/@arcgis/core/identity/ServerInfo.js ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function EEMW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../chunks/tslib.es6.js */
      "pO5D");
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../core/JSONSupport.js */
      "ag7Y");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var s = /*#__PURE__*/function (_core_JSONSupport_js_2) {
        _inherits(s, _core_JSONSupport_js_2);

        var _super4 = _createSuper(s);

        function s(r) {
          var _this3;

          _classCallCheck(this, s);

          _this3 = _super4.call(this, r), _this3.adminTokenServiceUrl = null, _this3.currentVersion = null, _this3.hasPortal = null, _this3.hasServer = null, _this3.owningSystemUrl = null, _this3.owningTenant = null, _this3.server = null, _this3.shortLivedTokenValidity = null, _this3.tokenServiceUrl = null, _this3.webTierAuth = null;
          return _this3;
        }

        return s;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], s.prototype, "adminTokenServiceUrl", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], s.prototype, "currentVersion", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], s.prototype, "hasPortal", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], s.prototype, "hasServer", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], s.prototype, "owningSystemUrl", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], s.prototype, "owningTenant", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], s.prototype, "server", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], s.prototype, "shortLivedTokenValidity", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], s.prototype, "tokenServiceUrl", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], s.prototype, "webTierAuth", void 0), s = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.identity.ServerInfo")], s);
      var i = s;
      /* harmony default export */

      __webpack_exports__["default"] = i;
      /***/
    },

    /***/
    "YvcI":
    /*!*************************************************!*\
      !*** ./node_modules/tabbable/dist/index.esm.js ***!
      \*************************************************/

    /*! exports provided: focusable, isFocusable, isTabbable, tabbable */

    /***/
    function YvcI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "focusable", function () {
        return focusable;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isFocusable", function () {
        return isFocusable;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isTabbable", function () {
        return isTabbable;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "tabbable", function () {
        return tabbable;
      });
      /*!
      * tabbable 5.1.5
      * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
      */


      var candidateSelectors = ['input', 'select', 'textarea', 'a[href]', 'button', '[tabindex]', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])', 'details>summary:first-of-type', 'details'];
      var candidateSelector = /* #__PURE__ */candidateSelectors.join(',');
      var matches = typeof Element === 'undefined' ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

      var getCandidates = function getCandidates(el, includeContainer, filter) {
        var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));

        if (includeContainer && matches.call(el, candidateSelector)) {
          candidates.unshift(el);
        }

        candidates = candidates.filter(filter);
        return candidates;
      };

      var isContentEditable = function isContentEditable(node) {
        return node.contentEditable === 'true';
      };

      var getTabindex = function getTabindex(node) {
        var tabindexAttr = parseInt(node.getAttribute('tabindex'), 10);

        if (!isNaN(tabindexAttr)) {
          return tabindexAttr;
        } // Browsers do not return `tabIndex` correctly for contentEditable nodes;
        // so if they don't have a tabindex attribute specifically set, assume it's 0.


        if (isContentEditable(node)) {
          return 0;
        } // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
        //  `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
        //  yet they are still part of the regular tab order; in FF, they get a default
        //  `tabIndex` of 0; since Chrome still puts those elements in the regular tab
        //  order, consider their tab index to be 0.


        if ((node.nodeName === 'AUDIO' || node.nodeName === 'VIDEO' || node.nodeName === 'DETAILS') && node.getAttribute('tabindex') === null) {
          return 0;
        }

        return node.tabIndex;
      };

      var sortOrderedTabbables = function sortOrderedTabbables(a, b) {
        return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
      };

      var isInput = function isInput(node) {
        return node.tagName === 'INPUT';
      };

      var isHiddenInput = function isHiddenInput(node) {
        return isInput(node) && node.type === 'hidden';
      };

      var isDetailsWithSummary = function isDetailsWithSummary(node) {
        var r = node.tagName === 'DETAILS' && Array.prototype.slice.apply(node.children).some(function (child) {
          return child.tagName === 'SUMMARY';
        });
        return r;
      };

      var getCheckedRadio = function getCheckedRadio(nodes, form) {
        for (var i = 0; i < nodes.length; i++) {
          if (nodes[i].checked && nodes[i].form === form) {
            return nodes[i];
          }
        }
      };

      var isTabbableRadio = function isTabbableRadio(node) {
        if (!node.name) {
          return true;
        }

        var radioScope = node.form || node.ownerDocument;

        var queryRadios = function queryRadios(name) {
          return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
        };

        var radioSet;

        if (typeof window !== 'undefined' && typeof window.CSS !== 'undefined' && typeof window.CSS.escape === 'function') {
          radioSet = queryRadios(window.CSS.escape(node.name));
        } else {
          try {
            radioSet = queryRadios(node.name);
          } catch (err) {
            // eslint-disable-next-line no-console
            console.error('Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s', err.message);
            return false;
          }
        }

        var checked = getCheckedRadio(radioSet, node.form);
        return !checked || checked === node;
      };

      var isRadio = function isRadio(node) {
        return isInput(node) && node.type === 'radio';
      };

      var isNonTabbableRadio = function isNonTabbableRadio(node) {
        return isRadio(node) && !isTabbableRadio(node);
      };

      var isHidden = function isHidden(node) {
        if (getComputedStyle(node).visibility === 'hidden') {
          return true;
        }

        var isDirectSummary = matches.call(node, 'details>summary:first-of-type');
        var nodeUnderDetails = isDirectSummary ? node.parentElement : node;

        if (matches.call(nodeUnderDetails, 'details:not([open]) *')) {
          return true;
        }

        while (node) {
          if (getComputedStyle(node).display === 'none') {
            return true;
          }

          node = node.parentElement;
        }

        return false;
      };

      var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable(node) {
        if (node.disabled || isHiddenInput(node) || isHidden(node) ||
        /* For a details element with a summary, the summary element gets the focused  */
        isDetailsWithSummary(node)) {
          return false;
        }

        return true;
      };

      var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable(node) {
        if (!isNodeMatchingSelectorFocusable(node) || isNonTabbableRadio(node) || getTabindex(node) < 0) {
          return false;
        }

        return true;
      };

      var tabbable = function tabbable(el, options) {
        options = options || {};
        var regularTabbables = [];
        var orderedTabbables = [];
        var candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorTabbable);
        candidates.forEach(function (candidate, i) {
          var candidateTabindex = getTabindex(candidate);

          if (candidateTabindex === 0) {
            regularTabbables.push(candidate);
          } else {
            orderedTabbables.push({
              documentOrder: i,
              tabIndex: candidateTabindex,
              node: candidate
            });
          }
        });
        var tabbableNodes = orderedTabbables.sort(sortOrderedTabbables).map(function (a) {
          return a.node;
        }).concat(regularTabbables);
        return tabbableNodes;
      };

      var focusable = function focusable(el, options) {
        options = options || {};
        var candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorFocusable);
        return candidates;
      };

      var isTabbable = function isTabbable(node) {
        if (!node) {
          throw new Error('No node provided');
        }

        if (matches.call(node, candidateSelector) === false) {
          return false;
        }

        return isNodeMatchingSelectorTabbable(node);
      };

      var focusableCandidateSelector = /* #__PURE__ */candidateSelectors.concat('iframe').join(',');

      var isFocusable = function isFocusable(node) {
        if (!node) {
          throw new Error('No node provided');
        }

        if (matches.call(node, focusableCandidateSelector) === false) {
          return false;
        }

        return isNodeMatchingSelectorFocusable(node);
      }; //# sourceMappingURL=index.esm.js.map

      /***/

    },

    /***/
    "d6i5":
    /*!***************************************************************!*\
      !*** ./node_modules/@arcgis/core/identity/OAuthCredential.js ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function d6i5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t = /*#__PURE__*/function () {
        function t(_t2, e) {
          _classCallCheck(this, t);

          this.oAuthInfo = null, this.storage = null, this.appId = null, this.expires = null, this.ssl = null, this.token = null, this.userId = null, this.oAuthInfo = _t2, this.storage = e, this._init();
        }

        _createClass(t, [{
          key: "isValid",
          value: function isValid() {
            var _t3 = !1;

            if (this.oAuthInfo && this.token && this.userId) {
              var e = Date.now();

              if (this.expires > e) {
                (this.expires - e) / 1e3 > 60 * this.oAuthInfo.minTimeUntilExpiration && (_t3 = !0);
              }
            }

            return _t3;
          }
        }, {
          key: "save",
          value: function save() {
            if (!this.storage) return;

            var _t4 = this._load(),
                e = this.oAuthInfo;

            if (e && e.authNamespace && e.portalUrl) {
              var s = _t4[e.authNamespace];
              s || (s = _t4[e.authNamespace] = {}), s[e.portalUrl] = {
                appId: this.appId = e.appId,
                expires: this.expires,
                ssl: this.ssl,
                token: this.token,
                userId: this.userId
              };

              try {
                this.storage.setItem("esriJSAPIOAuth", JSON.stringify(_t4));
              } catch (_t5) {
                console.log(_t5);
              }
            }
          }
        }, {
          key: "destroy",
          value: function destroy() {
            var _t6 = this._load(),
                e = this.oAuthInfo;

            if (e && e.appId && e.portalUrl && this.token && this.expires > Date.now()) {
              var _t12 = e.portalUrl.replace(/^http:/i, "https:") + "/sharing/rest/oauth2/revokeToken",
                  s = new FormData();

              if (s.append("f", "json"), s.append("auth_token", this.token), s.append("client_id", e.appId), s.append("token_type_hint", "access_token"), "function" == typeof navigator.sendBeacon) navigator.sendBeacon(_t12, s);else {
                var _e2 = new XMLHttpRequest();

                _e2.open("POST", _t12), _e2.send(s);
              }
            }

            if (e && e.authNamespace && e.portalUrl && this.storage) {
              var _s = _t6[e.authNamespace];

              if (_s) {
                delete _s[e.portalUrl];

                try {
                  this.storage.setItem("esriJSAPIOAuth", JSON.stringify(_t6));
                } catch (_t8) {
                  console.log(_t8);
                }
              }
            }

            e && (e._oAuthCred = null, this.oAuthInfo = null);
          }
        }, {
          key: "_init",
          value: function _init() {
            var _t9 = this._load(),
                e = this.oAuthInfo;

            if (e && e.authNamespace && e.portalUrl) {
              var s = _t9[e.authNamespace];
              s && (s = s[e.portalUrl], s && (this.appId = s.appId, this.expires = s.expires, this.ssl = s.ssl, this.token = s.token, this.userId = s.userId));
            }
          }
        }, {
          key: "_load",
          value: function _load() {
            var _t10 = {};

            if (this.storage) {
              var e = this.storage.getItem("esriJSAPIOAuth");
              if (e) try {
                _t10 = JSON.parse(e);
              } catch (_t11) {
                console.log(_t11);
              }
            }

            return _t10;
          }
        }]);

        return t;
      }();

      t.prototype.declaredClass = "esri.identity.OAuthCredential";
      /* harmony default export */

      __webpack_exports__["default"] = t;
      /***/
    },

    /***/
    "hxim":
    /*!*************************************************************!*\
      !*** ./node_modules/@arcgis/core/identity/IdentityModal.js ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function hxim(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../chunks/tslib.es6.js */
      "pO5D");
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _widgets_support_decorators_messageBundle_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../widgets/support/decorators/messageBundle.js */
      "dV4Z");
      /* harmony import */


      var _widgets_support_decorators_renderable_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../widgets/support/decorators/renderable.js */
      "OWWk");
      /* harmony import */


      var _chunks_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../chunks/index.js */
      "Jv1m");
      /* harmony import */


      var _widgets_support_widget_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../widgets/support/widget.js */
      "J3K2");
      /* harmony import */


      var _widgets_Widget_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../widgets/Widget.js */
      "Ehpe");
      /* harmony import */


      var focus_trap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! focus-trap */
      "4Wwy");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var d = "esri-identity-modal",
          l = "esri-identity-modal--open",
          p = "esri-identity-modal--closed",
          u = "esri-identity-modal__title",
          m = "esri-identity-modal__dialog",
          h = "esri-identity-modal__content",
          _ = "esri-identity-modal__close-button",
          y = "esri-icon-close";

      var g = /*#__PURE__*/function (_widgets_Widget_js__W2) {
        _inherits(g, _widgets_Widget_js__W2);

        var _super5 = _createSuper(g);

        function g(t, e) {
          var _this4;

          _classCallCheck(this, g);

          _this4 = _super5.call(this, t, e), _this4.container = document.createElement("div"), _this4.content = null, _this4.open = !1, _this4._close = function () {
            _this4.open = !1;
          }, document.body.appendChild(_this4.container), _this4.own(_this4.watch("open", function () {
            return _this4._toggleFocusTrap();
          }));
          return _this4;
        }

        _createClass(g, [{
          key: "destroy",
          value: function destroy() {
            this._destroyFocusTrap();
          }
        }, {
          key: "render",
          value: function render() {
            var _n;

            var t = this.id,
                e = this.open,
                s = this.content,
                o = this.title,
                i = this.messages,
                a = e && !!s,
                n = (_n = {}, _defineProperty2(_n, l, a), _defineProperty2(_n, p, !a), _n),
                c = Object(_chunks_index_js__WEBPACK_IMPORTED_MODULE_11__["j"])("button", {
              "class": _,
              "aria-label": i.close,
              title: i.close,
              bind: this,
              onclick: this._close
            }, Object(_chunks_index_js__WEBPACK_IMPORTED_MODULE_11__["j"])("span", {
              "aria-hidden": "true",
              "class": y
            })),
                h = "".concat(t, "_title"),
                _g = "".concat(t, "_content"),
                f = o ? Object(_chunks_index_js__WEBPACK_IMPORTED_MODULE_11__["j"])("h1", {
              id: h,
              "class": u
            }, o) : null,
                v = a ? Object(_chunks_index_js__WEBPACK_IMPORTED_MODULE_11__["j"])("div", {
              bind: this,
              "class": m,
              role: "dialog",
              "aria-labelledby": h,
              "aria-describedby": _g,
              afterCreate: this._createFocusTrap
            }, c, f, this._renderContent(_g)) : null;

            return Object(_chunks_index_js__WEBPACK_IMPORTED_MODULE_11__["j"])("div", {
              tabIndex: -1,
              "class": this.classes(d, n)
            }, v);
          }
        }, {
          key: "_destroyFocusTrap",
          value: function _destroyFocusTrap() {
            var t;
            null == (t = this._focusTrap) || t.deactivate({
              onDeactivate: null
            }), this._focusTrap = null;
          }
        }, {
          key: "_toggleFocusTrap",
          value: function _toggleFocusTrap() {
            var t = this._focusTrap,
                e = this.open;
            t && (e ? t.activate() : t.deactivate());
          }
        }, {
          key: "_createFocusTrap",
          value: function _createFocusTrap(t) {
            var _this5 = this;

            this._destroyFocusTrap(), requestAnimationFrame(function () {
              _this5._focusTrap = Object(focus_trap__WEBPACK_IMPORTED_MODULE_14__["createFocusTrap"])(t, {
                initialFocus: "input",
                onDeactivate: _this5._close
              }), _this5._toggleFocusTrap();
            });
          }
        }, {
          key: "_renderContent",
          value: function _renderContent(t) {
            var e = this.content;
            return "string" == typeof e ? Object(_chunks_index_js__WEBPACK_IMPORTED_MODULE_11__["j"])("div", {
              "class": h,
              id: t,
              innerHTML: e
            }) : Object(_widgets_support_widget_js__WEBPACK_IMPORTED_MODULE_12__["isWidget"])(e) ? Object(_chunks_index_js__WEBPACK_IMPORTED_MODULE_11__["j"])("div", {
              "class": h,
              id: t
            }, e.render()) : e instanceof HTMLElement ? Object(_chunks_index_js__WEBPACK_IMPORTED_MODULE_11__["j"])("div", {
              "class": h,
              id: t,
              bind: e,
              afterCreate: this._attachToNode
            }) : null;
          }
        }, {
          key: "_attachToNode",
          value: function _attachToNode(t) {
            t.appendChild(this);
          }
        }]);

        return g;
      }(_widgets_Widget_js__WEBPACK_IMPORTED_MODULE_13__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        readOnly: !0
      })], g.prototype, "container", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])(), Object(_widgets_support_decorators_renderable_js__WEBPACK_IMPORTED_MODULE_10__["renderable"])()], g.prototype, "content", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])(), Object(_widgets_support_decorators_renderable_js__WEBPACK_IMPORTED_MODULE_10__["renderable"])()], g.prototype, "open", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])(), Object(_widgets_support_decorators_renderable_js__WEBPACK_IMPORTED_MODULE_10__["renderable"])(), Object(_widgets_support_decorators_messageBundle_js__WEBPACK_IMPORTED_MODULE_9__["messageBundle"])("esri/t9n/common")], g.prototype, "messages", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        aliasOf: "messages.auth.signIn"
      }), Object(_widgets_support_decorators_renderable_js__WEBPACK_IMPORTED_MODULE_10__["renderable"])()], g.prototype, "title", void 0), g = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.identity.IdentityModal")], g);
      var f = g;
      /* harmony default export */

      __webpack_exports__["default"] = f;
      /***/
    },

    /***/
    "rDsY":
    /*!*******************************************************************!*\
      !*** ./node_modules/@arcgis/core/identity/IdentityManagerBase.js ***!
      \*******************************************************************/

    /*! exports provided: Credential, IdentityManagerBase */

    /***/
    function rDsY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Credential", function () {
        return L;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IdentityManagerBase", function () {
        return E;
      });
      /* harmony import */


      var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../chunks/tslib.es6.js */
      "pO5D");
      /* harmony import */


      var _core_global_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../core/global.js */
      "3r0u");
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_lang_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../core/lang.js */
      "f/qv");
      /* harmony import */


      var _core_object_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../core/object.js */
      "nR38");
      /* harmony import */


      var _config_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../config.js */
      "EyXx");
      /* harmony import */


      var _core_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../core/string.js */
      "s7YA");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_events_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../core/events.js */
      "nYOO");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _core_Evented_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../core/Evented.js */
      "zm0L");
      /* harmony import */


      var _kernel_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../kernel.js */
      "975N");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../request.js */
      "Lqtk");
      /* harmony import */


      var _core_cookie_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../core/cookie.js */
      "AeD8");
      /* harmony import */


      var _IdentityForm_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./IdentityForm.js */
      "7BLv");
      /* harmony import */


      var _IdentityModal_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./IdentityModal.js */
      "hxim");
      /* harmony import */


      var _OAuthCredential_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./OAuthCredential.js */
      "d6i5");
      /* harmony import */


      var _OAuthInfo_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./OAuthInfo.js */
      "95ME");
      /* harmony import */


      var _ServerInfo_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./ServerInfo.js */
      "EEMW");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var D = {},
          j = function j(e) {
        var t = new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_12__["Url"](e.owningSystemUrl).host,
            r = new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_12__["Url"](e.server).host,
            s = /.+\.arcgis\.com$/i;
        return s.test(t) && s.test(r);
      },
          q = function q(e, t) {
        return !!(j(e) && t && t.some(function (t) {
          return t.test(e.server);
        }));
      };

      var E = /*#__PURE__*/function (_core_Evented_js__WEB) {
        _inherits(E, _core_Evented_js__WEB);

        var _super6 = _createSuper(E);

        function E() {
          var _this6;

          _classCallCheck(this, E);

          _this6 = _super6.call(this), _this6._portalConfig = _core_global_js__WEBPACK_IMPORTED_MODULE_1__["default"].esriGeowConfig, _this6.serverInfos = [], _this6.oAuthInfos = [], _this6.credentials = [], _this6._soReqs = [], _this6._xoReqs = [], _this6._portals = [], _this6.defaultOAuthInfo = null, _this6.defaultTokenValidity = 60, _this6.dialog = null, _this6.formConstructor = _IdentityForm_js__WEBPACK_IMPORTED_MODULE_21__["default"], _this6.tokenValidity = null, _this6.signInPage = null, _this6.useSignInPage = !0, _this6.normalizeWebTierAuth = !1, _this6._busy = null, _this6._rejectOnPersistedPageShow = !1, _this6._oAuthHash = null, _this6._gwTokenUrl = "/sharing/rest/generateToken", _this6._agsRest = "/rest/services", _this6._agsPortal = /\/sharing(\/|$)/i, _this6._agsAdmin = /(https?:\/\/[^\/]+\/[^\/]+)\/admin\/?(\/.*)?$/i, _this6._adminSvcs = /\/rest\/admin\/services(\/|$)/i, _this6._gwDomains = [{
            regex: /^https?:\/\/www\.arcgis\.com/i,
            customBaseUrl: "maps.arcgis.com",
            tokenServiceUrl: "https://www.arcgis.com/sharing/rest/generateToken"
          }, {
            regex: /^https?:\/\/(?:dev|[a-z\d-]+\.mapsdev)\.arcgis\.com/i,
            customBaseUrl: "mapsdev.arcgis.com",
            tokenServiceUrl: "https://dev.arcgis.com/sharing/rest/generateToken"
          }, {
            regex: /^https?:\/\/(?:devext|[a-z\d-]+\.mapsdevext)\.arcgis\.com/i,
            customBaseUrl: "mapsdevext.arcgis.com",
            tokenServiceUrl: "https://devext.arcgis.com/sharing/rest/generateToken"
          }, {
            regex: /^https?:\/\/(?:qaext|[a-z\d-]+\.mapsqa)\.arcgis\.com/i,
            customBaseUrl: "mapsqa.arcgis.com",
            tokenServiceUrl: "https://qaext.arcgis.com/sharing/rest/generateToken"
          }, {
            regex: /^https?:\/\/[a-z\d-]+\.maps\.arcgis\.com/i,
            customBaseUrl: "maps.arcgis.com",
            tokenServiceUrl: "https://www.arcgis.com/sharing/rest/generateToken"
          }], _this6._legacyFed = [], _this6._regexSDirUrl = /http.+\/rest\/services\/?/gi, _this6._regexServerType = /(\/(FeatureServer|GPServer|GeoDataServer|GeocodeServer|GeoenrichmentServer|GeometryServer|GlobeServer|ImageServer|MapServer|MobileServer|NAServer|NetworkDiagramServer|ParcelFabricServer|RelationalCatalogServer|SceneServer|StreamServer|UtilityNetworkServer|ValidationServer|VectorTileServer|VersionManagementServer)).*/gi, _this6._gwUser = /http.+\/users\/([^\/]+)\/?.*/i, _this6._gwItem = /http.+\/items\/([^\/]+)\/?.*/i, _this6._gwGroup = /http.+\/groups\/([^\/]+)\/?.*/i, _this6._rePortalTokenSvc = /\/sharing(\/rest)?\/generatetoken/i, _this6._createDefaultOAuthInfo = !0, _this6._hasTestedIfAppIsOnPortal = !1, _this6._getOAuthHash(), window.addEventListener("pageshow", function (e) {
            _this6._pageShowHandler(e);
          });
          return _this6;
        }

        _createClass(E, [{
          key: "registerServers",
          value: function registerServers(e) {
            var _this7 = this;

            var t = this.serverInfos;
            t ? (e = e.filter(function (e) {
              return !_this7.findServerInfo(e.server);
            }), this.serverInfos = t.concat(e)) : this.serverInfos = e, e.forEach(function (e) {
              e.owningSystemUrl && _this7._portals.push(e.owningSystemUrl), e.hasPortal && _this7._portals.push(e.server);
            });
          }
        }, {
          key: "registerOAuthInfos",
          value: function registerOAuthInfos(e) {
            var _this8 = this;

            var t = this.oAuthInfos;
            t ? (e = e.filter(function (e) {
              return !_this8.findOAuthInfo(e.portalUrl);
            }), this.oAuthInfos = t.concat(e)) : this.oAuthInfos = e;
          }
        }, {
          key: "registerToken",
          value: function registerToken(e) {
            e = _objectSpread({}, e);

            var t = this._sanitizeUrl(e.server),
                s = this._isServerRsrc(t);

            var i,
                n = this.findServerInfo(t),
                o = !0;
            n || (n = new _ServerInfo_js__WEBPACK_IMPORTED_MODULE_25__["default"](), n.server = this._getServerInstanceRoot(t), s ? n.hasServer = !0 : (n.tokenServiceUrl = this._getTokenSvcUrl(t), n.hasPortal = !0), this.registerServers([n])), i = this._findCredential(t), i ? (delete e.server, Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_3__["mixin"])(i, e), o = !1) : (i = new L({
              userId: e.userId,
              server: n.server,
              token: e.token,
              expires: e.expires,
              ssl: e.ssl,
              scope: s ? "server" : "portal"
            }), i.resources = [t], this.credentials.push(i)), i.emitTokenChange(!1), o || i.refreshServerTokens();
          }
        }, {
          key: "toJSON",
          value: function toJSON() {
            return Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_3__["fixJson"])({
              serverInfos: this.serverInfos.map(function (e) {
                return e.toJSON();
              }),
              oAuthInfos: this.oAuthInfos.map(function (e) {
                return e.toJSON();
              }),
              credentials: this.credentials.map(function (e) {
                return e.toJSON();
              })
            });
          }
        }, {
          key: "initialize",
          value: function initialize(e) {
            var _this9 = this;

            if (!e) return;
            "string" == typeof e && (e = JSON.parse(e));
            var t = e.serverInfos,
                r = e.oAuthInfos,
                s = e.credentials;

            if (t) {
              var _e3 = [];
              t.forEach(function (t) {
                t.server && t.tokenServiceUrl && _e3.push(t.declaredClass ? t : new _ServerInfo_js__WEBPACK_IMPORTED_MODULE_25__["default"](t));
              }), _e3.length && this.registerServers(_e3);
            }

            if (r) {
              var _e4 = [];
              r.forEach(function (t) {
                t.appId && _e4.push(t.declaredClass ? t : new _OAuthInfo_js__WEBPACK_IMPORTED_MODULE_24__["default"](t));
              }), _e4.length && this.registerOAuthInfos(_e4);
            }

            s && s.forEach(function (e) {
              e.server && e.token && e.expires && e.expires > Date.now() && ((e = e.declaredClass ? e : new L(e)).emitTokenChange(), _this9.credentials.push(e));
            });
          }
        }, {
          key: "findServerInfo",
          value: function findServerInfo(e) {
            var t;
            e = this._sanitizeUrl(e);

            var _iterator = _createForOfIteratorHelper(this.serverInfos),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var r = _step.value;

                if (this._hasSameServerInstance(r.server, e)) {
                  t = r;
                  break;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return t;
          }
        }, {
          key: "findOAuthInfo",
          value: function findOAuthInfo(e) {
            var t;
            e = this._sanitizeUrl(e);

            var _iterator2 = _createForOfIteratorHelper(this.oAuthInfos),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var r = _step2.value;

                if (this._hasSameServerInstance(r.portalUrl, e)) {
                  t = r;
                  break;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            return t;
          }
        }, {
          key: "findCredential",
          value: function findCredential(e, t) {
            var r, s;

            if (e = this._sanitizeUrl(e), s = this._isServerRsrc(e) ? "server" : "portal", t) {
              var _iterator3 = _createForOfIteratorHelper(this.credentials),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var i = _step3.value;

                  if (this._hasSameServerInstance(i.server, e) && t === i.userId && i.scope === s) {
                    r = i;
                    break;
                  }
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            } else {
              var _iterator4 = _createForOfIteratorHelper(this.credentials),
                  _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var _t13 = _step4.value;

                  if (this._hasSameServerInstance(_t13.server, e) && -1 !== this._getIdenticalSvcIdx(e, _t13) && _t13.scope === s) {
                    r = _t13;
                    break;
                  }
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }
            }

            return r;
          }
        }, {
          key: "getCredential",
          value: function getCredential(e, t) {
            var r,
                s,
                i = !0;
            t && (r = !!t.token, s = t.error, i = !1 !== t.prompt), t = _objectSpread({}, t), e = this._sanitizeUrl(e);
            var n = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_16__["createAbortController"])(),
                o = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_16__["createResolver"])();
            if (t.signal && Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_16__["onAbort"])(t.signal, function () {
              n.abort();
            }), Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_16__["onAbort"])(n, function () {
              o.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_11__["default"]("identity-manager:user-aborted", "ABORTED"));
            }), Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_16__["isAborted"])(n)) return o.promise;
            t.signal = n.signal;

            var a = this._isAdminResource(e),
                h = r && this._doPortalSignIn(e) ? this._getEsriAuthCookie() : null,
                c = r ? this.findCredential(e) : null;

            var d;
            if (c && s && s.details && 498 === s.details.httpStatus) c.destroy(), h && h.token === t.token && (Object(_core_cookie_js__WEBPACK_IMPORTED_MODULE_20__["writeCookie"])("esri_auth", null, {
              expires: -1,
              path: "/",
              domain: document.domain
            }), window.location.hostname.endsWith(".arcgis.com") && Object(_core_cookie_js__WEBPACK_IMPORTED_MODULE_20__["writeCookie"])("esri_auth", null, {
              expires: -1,
              path: "/",
              domain: "arcgis.com"
            }));else if (h || c) {
              var _t14 = h && h.email || c && c.userId;

              return d = new _core_Error_js__WEBPACK_IMPORTED_MODULE_11__["default"]("identity-manager:not-authorized", "You are currently signed in as: '" + _t14 + "'. You do not have access to this resource: " + e, {
                error: s
              }), o.reject(d), o.promise;
            }

            var u = this._findCredential(e, t);

            if (u) return o.resolve(u), o.promise;
            var p = this.findServerInfo(e);
            if (p) !p.hasServer && this._isServerRsrc(e) && (p._restInfoPms = this._getTokenSvcUrl(e), p.hasServer = !0);else {
              var _t15 = this._getTokenSvcUrl(e);

              if (!_t15) return d = new _core_Error_js__WEBPACK_IMPORTED_MODULE_11__["default"]("identity-manager:unknown-resource", "Unknown resource - could not find token service endpoint."), o.reject(d), o.promise;
              p = new _ServerInfo_js__WEBPACK_IMPORTED_MODULE_25__["default"](), p.server = this._getServerInstanceRoot(e), "string" == typeof _t15 ? (p.tokenServiceUrl = _t15, p.hasPortal = !0) : (p._restInfoPms = _t15, p.hasServer = !0), this.registerServers([p]);
            }
            return i && p.hasPortal && void 0 === p._selfReq && !this._findOAuthInfo(e) && (p._selfReq = {
              owningTenant: t && t.owningTenant,
              selfDfd: this._getPortalSelf(p.tokenServiceUrl.replace(this._rePortalTokenSvc, "/sharing/rest/portals/self"), e)
            }), this._enqueue(e, p, t, o, a);
          }
        }, {
          key: "getResourceName",
          value: function getResourceName(e) {
            return this._isRESTService(e) ? e.replace(this._regexSDirUrl, "").replace(this._regexServerType, "") || "" : this._gwUser.test(e) && e.replace(this._gwUser, "$1") || this._gwItem.test(e) && e.replace(this._gwItem, "$1") || this._gwGroup.test(e) && e.replace(this._gwGroup, "$1") || "";
          }
        }, {
          key: "generateToken",
          value: function generateToken(e, t, s) {
            var i = this._rePortalTokenSvc.test(e.tokenServiceUrl),
                n = new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_12__["Url"](window.location.href.toLowerCase()),
                o = this._getEsriAuthCookie(),
                a = e.shortLivedTokenValidity;

            var h, u, p, _, f, g, m, v, S, w;

            t && (w = this.tokenValidity || a || this.defaultTokenValidity, w > a && a > 0 && (w = a)), s && (u = s.isAdmin, p = s.serverUrl, _ = s.token, m = s.signal, v = s.ssl, e.customParameters = s.customParameters), u ? f = e.adminTokenServiceUrl : (f = e.tokenServiceUrl, g = new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_12__["Url"](f.toLowerCase()), o && (h = o.auth_tier, h = h && h.toLowerCase()), ("web" === h || e.webTierAuth) && s && s.serverUrl && !v && "http" === n.scheme && (Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_12__["hasSameOrigin"])(n.uri, f, !0) || "https" === g.scheme && n.host === g.host && "7080" === n.port && "7443" === g.port) && (f = f.replace(/^https:/i, "http:").replace(/:7443/i, ":7080"))), S = Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_3__["mixin"])({
              query: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_3__["mixin"])({
                request: "getToken",
                username: t && t.username,
                password: t && t.password,
                serverUrl: p,
                token: _,
                expiration: w,
                referer: u || i ? window.location.host : null,
                client: u ? "referer" : null,
                f: "json"
              }, e.customParameters),
              method: "post",
              authMode: "anonymous",
              useProxy: this._useProxy(e, s),
              signal: m
            }, s && s.ioArgs), i || (S.withCredentials = !1);
            return Object(_request_js__WEBPACK_IMPORTED_MODULE_19__["default"])(f, S).then(function (r) {
              var s = r.data;
              if (!s || !s.token) return new _core_Error_js__WEBPACK_IMPORTED_MODULE_11__["default"]("identity-manager:authentication-failed", "Unable to generate token");
              var i = e.server;
              return D[i] || (D[i] = {}), t && (D[i][t.username] = t.password), s.validity = w, s;
            });
          }
        }, {
          key: "isBusy",
          value: function isBusy() {
            return !!this._busy;
          }
        }, {
          key: "checkSignInStatus",
          value: function checkSignInStatus(e) {
            return this.checkAppAccess(e, "").then(function (e) {
              return e.credential;
            });
          }
        }, {
          key: "checkAppAccess",
          value: function checkAppAccess(e, t, r) {
            var _this10 = this;

            var s = !1;
            return this.getCredential(e, {
              prompt: !1
            }).then(function (i) {
              var n;
              var o = {
                f: "json"
              };
              if ("portal" === i.scope) {
                if (t && (_this10._doPortalSignIn(e, !0) || r && r.force)) n = i.server + "/sharing/rest/oauth2/validateAppAccess", o.client_id = t;else {
                  if (!i.token) return {
                    credential: i
                  };
                  n = i.server + "/sharing/rest";
                }
              } else {
                if (!i.token) return {
                  credential: i
                };
                n = i.server + "/rest/services";
              }
              return i.token && (o.token = i.token), Object(_request_js__WEBPACK_IMPORTED_MODULE_19__["default"])(n, {
                query: o,
                authMode: "anonymous"
              }).then(function (e) {
                if (!1 === e.data.valid) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_11__["default"]("identity-manager:not-authorized", "You are currently signed in as: '".concat(i.userId, "'."), e.data);
                return s = !!e.data.viewOnlyUserTypeApp, {
                  credential: i
                };
              })["catch"](function (e) {
                if ("identity-manager:not-authorized" === e.name) throw e;
                var t = e.details && e.details.httpStatus;
                if (498 === t) throw i.destroy(), new _core_Error_js__WEBPACK_IMPORTED_MODULE_11__["default"]("identity-manager:not-authenticated", "User is not signed in.");
                if (400 === t) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_11__["default"]("identity-manager:invalid-request");
                return {
                  credential: i
                };
              });
            }).then(function (e) {
              return {
                credential: e.credential,
                viewOnly: s
              };
            });
          }
        }, {
          key: "setOAuthResponseHash",
          value: function setOAuthResponseHash(e) {
            var t;
            var r = this._oAuthDfd;
            if (this._oAuthDfd = null, !r || !e) return;
            clearInterval(this._oAuthIntervalId), null == (t = this._oAuthOnHashHandle) || t.remove(), "#" === e.charAt(0) && (e = e.substring(1));
            var s = Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_12__["queryToObject"])(e);

            if (s.error) {
              var _e5 = "access_denied" === s.error,
                  _t16 = new _core_Error_js__WEBPACK_IMPORTED_MODULE_11__["default"](_e5 ? "identity-manager:user-aborted" : "identity-manager:authentication-failed", _e5 ? "ABORTED" : "OAuth: " + s.error + " - " + s.error_description);

              r.reject(_t16);
            } else {
              var _e6 = r.sinfo_,
                  _t17 = r.oinfo_,
                  i = _t17._oAuthCred,
                  n = new L({
                userId: s.username,
                server: _e6.server,
                token: s.access_token,
                expires: Date.now() + 1e3 * Number(s.expires_in),
                ssl: "true" === s.ssl,
                _oAuthCred: i
              });
              _t17.userId = n.userId, i.storage = s.persist ? window.localStorage : window.sessionStorage, i.token = n.token, i.expires = n.expires, i.userId = n.userId, i.ssl = n.ssl, i.save(), r.resolve(n);
            }
          }
        }, {
          key: "setRedirectionHandler",
          value: function setRedirectionHandler(e) {
            this._redirectFunc = e;
          }
        }, {
          key: "setOAuthRedirectionHandler",
          value: function setOAuthRedirectionHandler(e) {
            this._oAuthRedirectFunc = e;
          }
        }, {
          key: "setProtocolErrorHandler",
          value: function setProtocolErrorHandler(e) {
            this._protocolFunc = e;
          }
        }, {
          key: "signIn",
          value: function signIn(e, t) {
            var _this11 = this;

            var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            var s = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_16__["createResolver"])(),
                i = function i() {
              var e, t, r, s, i;
              null == (e = a) || e.remove(), null == (t = h) || t.remove(), null == (r = c) || r.remove(), null == (s = o) || s.destroy(), null == (i = _this11.dialog) || i.destroy(), _this11.dialog = o = a = h = c = null;
            },
                n = function n() {
              i(), _this11._oAuthDfd = null, s.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_11__["default"]("identity-manager:user-aborted", "ABORTED"));
            };

            r.signal && Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_16__["onAbort"])(r.signal, function () {
              n();
            });
            var o = new this.formConstructor();
            o.resource = this.getResourceName(e), o.server = t.server, this.dialog = new _IdentityModal_js__WEBPACK_IMPORTED_MODULE_22__["default"](), this.dialog.content = o, this.dialog.open = !0, this.emit("dialog-create");
            var a = o.on("cancel", n),
                h = this.dialog.watch("open", n),
                c = o.on("submit", function (e) {
              _this11.generateToken(t, e, {
                isAdmin: r.isAdmin,
                signal: r.signal
              }).then(function (n) {
                i();
                var o = new L({
                  userId: e.username,
                  server: t.server,
                  token: n.token,
                  expires: null != n.expires ? Number(n.expires) : null,
                  ssl: !!n.ssl,
                  isAdmin: r.isAdmin,
                  validity: n.validity
                });
                s.resolve(o);
              })["catch"](function (e) {
                o.error = e, o.signingIn = !1;
              });
            });
            return s.promise;
          }
        }, {
          key: "oAuthSignIn",
          value: function oAuthSignIn(e, t, r, s) {
            var _this12 = this;

            this._oAuthDfd = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_16__["createResolver"])();
            var i = this._oAuthDfd;
            null != s && s.signal && Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_16__["onAbort"])(s.signal, function () {
              var e = _this12._oAuthDfd && _this12._oAuthDfd.oAuthWin_;
              e && !e.closed ? e.close() : _this12.dialog && a();
            }), i.resUrl_ = e, i.sinfo_ = t, i.oinfo_ = r;
            var n = !s || !1 !== s.oAuthPopupConfirmation;
            if (!r.popup || !n) return this._doOAuthSignIn(e, t, r), i.promise;
            var o = new this.formConstructor();
            o.oAuthPrompt = !0, o.server = t.server, this.dialog = new _IdentityModal_js__WEBPACK_IMPORTED_MODULE_22__["default"](), this.dialog.content = o, this.dialog.open = !0, this.emit("dialog-create");

            var a = function a() {
              u(), _this12._oAuthDfd = null, i.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_11__["default"]("identity-manager:user-aborted", "ABORTED"));
            },
                h = o.on("cancel", a),
                c = this.dialog.watch("open", a),
                d = o.on("submit", function () {
              u(), _this12._doOAuthSignIn(e, t, r);
            }),
                u = function u() {
              h.remove(), c.remove(), d.remove(), o.destroy(), _this12.dialog.destroy(), _this12.dialog = null;
            };

            return i.promise;
          }
        }, {
          key: "destroyCredentials",
          value: function destroyCredentials() {
            if (this.credentials) {
              this.credentials.slice().forEach(function (e) {
                e.destroy();
              });
            }

            this.emit("credentials-destroy");
          }
        }, {
          key: "_getOAuthHash",
          value: function _getOAuthHash() {
            var e = window.location.hash;

            if (e) {
              "#" === e.charAt(0) && (e = e.substring(1));
              var t = Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_12__["queryToObject"])(e);
              var r = !1;
              t.access_token && t.expires_in && t.state && t.hasOwnProperty("username") ? (t.state = JSON.parse(t.state), this._oAuthHash = t, r = !0) : t.error && t.error_description && (console.log("IdentityManager OAuth Error: ", t.error, " - ", t.error_description), "access_denied" === t.error && (r = !0)), r && (window.location.hash = "object" == typeof t.state && t.state.hash || "");
            }
          }
        }, {
          key: "_pageShowHandler",
          value: function _pageShowHandler(e) {
            if (e.persisted && this.isBusy() && this._rejectOnPersistedPageShow) {
              var _e7 = new _core_Error_js__WEBPACK_IMPORTED_MODULE_11__["default"]("identity-manager:user-aborted", "ABORTED");

              this._errbackFunc(_e7);
            }
          }
        }, {
          key: "_findCredential",
          value: function _findCredential(e, t) {
            var _this13 = this;

            var r,
                s,
                i,
                n,
                o = -1;
            var a = t && t.token,
                h = t && t.resource,
                l = this._isServerRsrc(e) ? "server" : "portal",
                c = this.credentials.filter(function (t) {
              return _this13._hasSameServerInstance(t.server, e) && t.scope === l;
            });
            if (e = h || e, c.length) if (1 === c.length) {
              if (r = c[0], n = this.findServerInfo(r.server), s = n && n.owningSystemUrl, i = s && this.findCredential(s, r.userId), o = this._getIdenticalSvcIdx(e, r), !a) return -1 === o && r.resources.push(e), this._addResource(e, i), r;
              -1 !== o && (r.resources.splice(o, 1), this._removeResource(e, i));
            } else {
              var _t18, _r;

              if (c.some(function (a) {
                return _r = _this13._getIdenticalSvcIdx(e, a), -1 !== _r && (_t18 = a, n = _this13.findServerInfo(_t18.server), s = n && n.owningSystemUrl, i = s && _this13.findCredential(s, _t18.userId), o = _r, !0);
              }), a) _t18 && (_t18.resources.splice(o, 1), this._removeResource(e, i));else if (_t18) return this._addResource(e, i), _t18;
            }
          }
        }, {
          key: "_findOAuthInfo",
          value: function _findOAuthInfo(e) {
            var t = this.findOAuthInfo(e);

            if (!t) {
              var _iterator5 = _createForOfIteratorHelper(this.oAuthInfos),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var r = _step5.value;

                  if (this._isIdProvider(r.portalUrl, e)) {
                    t = r;
                    break;
                  }
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
            }

            return t;
          }
        }, {
          key: "_addResource",
          value: function _addResource(e, t) {
            t && -1 === this._getIdenticalSvcIdx(e, t) && t.resources.push(e);
          }
        }, {
          key: "_removeResource",
          value: function _removeResource(e, t) {
            var r = -1;
            t && (r = this._getIdenticalSvcIdx(e, t), r > -1 && t.resources.splice(r, 1));
          }
        }, {
          key: "_useProxy",
          value: function _useProxy(e, t) {
            return t && t.isAdmin && !Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_12__["hasSameOrigin"])(e.adminTokenServiceUrl, window.location.href) || !this._isPortalDomain(e.tokenServiceUrl) && "10.1" === String(e.currentVersion) && !Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_12__["hasSameOrigin"])(e.tokenServiceUrl, window.location.href);
          }
        }, {
          key: "_getOrigin",
          value: function _getOrigin(e) {
            var t = new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_12__["Url"](e);
            return t.scheme + "://" + t.host + (null != t.port ? ":" + t.port : "");
          }
        }, {
          key: "_getServerInstanceRoot",
          value: function _getServerInstanceRoot(e) {
            var t = e.toLowerCase();
            var r = t.indexOf(this._agsRest);
            return -1 === r && this._isAdminResource(e) && (r = this._agsAdmin.test(e) ? e.replace(this._agsAdmin, "$1").length : e.search(this._adminSvcs)), -1 === r && (r = t.indexOf("/sharing")), -1 === r && "/" === t.substr(-1) && (r = t.length - 1), r > -1 ? e.substring(0, r) : e;
          }
        }, {
          key: "_hasSameServerInstance",
          value: function _hasSameServerInstance(e, t) {
            return "/" === e.substr(-1) && (e = e.slice(0, -1)), e = e.toLowerCase(), t = this._getServerInstanceRoot(t).toLowerCase(), e = this._normalizeAGOLorgDomain(e), t = this._normalizeAGOLorgDomain(t), (e = e.substr(e.indexOf(":"))) === (t = t.substr(t.indexOf(":")));
          }
        }, {
          key: "_normalizeAGOLorgDomain",
          value: function _normalizeAGOLorgDomain(e) {
            var t = /^https?:\/\/(?:cdn|[a-z\d-]+\.maps)\.arcgis\.com/i,
                r = /^https?:\/\/(?:cdndev|[a-z\d-]+\.mapsdevext)\.arcgis\.com/i,
                s = /^https?:\/\/(?:cdnqa|[a-z\d-]+\.mapsqa)\.arcgis\.com/i;
            return t.test(e) ? e = e.replace(t, "https://www.arcgis.com") : r.test(e) ? e = e.replace(r, "https://devext.arcgis.com") : s.test(e) && (e = e.replace(s, "https://qaext.arcgis.com")), e;
          }
        }, {
          key: "_sanitizeUrl",
          value: function _sanitizeUrl(e) {
            var t = (_config_js__WEBPACK_IMPORTED_MODULE_5__["default"].request.proxyUrl || "").toLowerCase(),
                r = t ? e.toLowerCase().indexOf(t + "?") : -1;
            return -1 !== r && (e = e.substring(r + t.length + 1)), e = Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_12__["normalize"])(e), Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_12__["urlToObject"])(e).path;
          }
        }, {
          key: "_isRESTService",
          value: function _isRESTService(e) {
            return e.indexOf(this._agsRest) > -1;
          }
        }, {
          key: "_isAdminResource",
          value: function _isAdminResource(e) {
            return this._agsAdmin.test(e) || this._adminSvcs.test(e);
          }
        }, {
          key: "_isServerRsrc",
          value: function _isServerRsrc(e) {
            return this._isRESTService(e) || this._isAdminResource(e);
          }
        }, {
          key: "_isIdenticalService",
          value: function _isIdenticalService(e, t) {
            var r;

            if (this._isRESTService(e) && this._isRESTService(t)) {
              var s = this._getSuffix(e).toLowerCase(),
                  i = this._getSuffix(t).toLowerCase();

              if (r = s === i, !r) {
                var _e8 = /(.*)\/(MapServer|FeatureServer).*/gi;
                r = s.replace(_e8, "$1") === i.replace(_e8, "$1");
              }
            } else this._isAdminResource(e) && this._isAdminResource(t) ? r = !0 : this._isServerRsrc(e) || this._isServerRsrc(t) || !this._isPortalDomain(e) || (r = !0);

            return r;
          }
        }, {
          key: "_isPortalDomain",
          value: function _isPortalDomain(e) {
            var _this14 = this;

            var t = new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_12__["Url"](e.toLowerCase()),
                r = this._portalConfig;

            var s = this._gwDomains.some(function (e) {
              return e.regex.test(t.uri);
            });

            return !s && r && (s = this._hasSameServerInstance(this._getServerInstanceRoot(r.restBaseUrl), t.uri)), s || _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].portalUrl && (s = Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_12__["hasSameOrigin"])(t, _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].portalUrl, !0)), s || (s = this._portals.some(function (e) {
              return _this14._hasSameServerInstance(e, t.uri);
            })), s = s || this._agsPortal.test(t.path), s;
          }
        }, {
          key: "_isIdProvider",
          value: function _isIdProvider(e, t) {
            var r = -1,
                s = -1;

            this._gwDomains.forEach(function (i, n) {
              -1 === r && i.regex.test(e) && (r = n), -1 === s && i.regex.test(t) && (s = n);
            });

            var i = !1;

            if (r > -1 && s > -1 && (0 === r || 4 === r ? 0 !== s && 4 !== s || (i = !0) : 1 === r ? 1 !== s && 2 !== s || (i = !0) : 2 === r ? 2 === s && (i = !0) : 3 === r && 3 === s && (i = !0)), !i) {
              var _r2 = this.findServerInfo(t),
                  _s2 = _r2 && _r2.owningSystemUrl;

              _s2 && j(_r2) && this._isPortalDomain(_s2) && this._isIdProvider(e, _s2) && (i = !0);
            }

            return i;
          }
        }, {
          key: "_getIdenticalSvcIdx",
          value: function _getIdenticalSvcIdx(e, t) {
            var r = -1;

            for (var s = 0; s < t.resources.length; s++) {
              var i = t.resources[s];

              if (this._isIdenticalService(e, i)) {
                r = s;
                break;
              }
            }

            return r;
          }
        }, {
          key: "_getSuffix",
          value: function _getSuffix(e) {
            return e.replace(this._regexSDirUrl, "").replace(this._regexServerType, "$1");
          }
        }, {
          key: "_getTokenSvcUrl",
          value: function _getTokenSvcUrl(e) {
            var _this15 = this;

            var t, r, s;

            if (this._isRESTService(e) || this._isAdminResource(e)) {
              var _s3 = this._getServerInstanceRoot(e);

              return t = _s3 + "/admin/generateToken", r = Object(_request_js__WEBPACK_IMPORTED_MODULE_19__["default"])(e = _s3 + "/rest/info", {
                query: {
                  f: "json"
                }
              }).then(function (e) {
                return e.data;
              }), {
                adminUrl: t,
                promise: r
              };
            }

            if (this._isPortalDomain(e)) {
              var _t19 = "";

              if (this._gwDomains.some(function (r) {
                return r.regex.test(e) && (_t19 = r.tokenServiceUrl), !!_t19;
              }), _t19 || this._portals.some(function (r) {
                return _this15._hasSameServerInstance(r, e) && (_t19 = r + _this15._gwTokenUrl), !!_t19;
              }), _t19 || (s = e.toLowerCase().indexOf("/sharing"), -1 !== s && (_t19 = e.substring(0, s) + this._gwTokenUrl)), _t19 || (_t19 = this._getOrigin(e) + this._gwTokenUrl), _t19) {
                var _r3 = new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_12__["Url"](e).port;
                /^http:\/\//i.test(e) && "7080" === _r3 && (_t19 = _t19.replace(/:7080/i, ":7443")), _t19 = _t19.replace(/http:/i, "https:");
              }

              return _t19;
            }

            if (-1 !== e.toLowerCase().indexOf("premium.arcgisonline.com")) return "https://premium.arcgisonline.com/server/tokens";
          }
        }, {
          key: "_exchangeToken",
          value: function _exchangeToken(e, t, r) {
            return Object(_request_js__WEBPACK_IMPORTED_MODULE_19__["default"])("".concat(e, "/sharing/rest/oauth2/exchangeToken"), {
              authMode: "anonymous",
              method: "post",
              query: {
                f: "json",
                client_id: t,
                token: r
              }
            }).then(function (e) {
              return e.data.token;
            });
          }
        }, {
          key: "_getPortalSelf",
          value: function _getPortalSelf(e, t) {
            var r;
            if (this._gwDomains.some(function (t) {
              return t.regex.test(e) && (r = t.customBaseUrl), !!r;
            }), r) return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_16__["resolve"])({
              allSSL: !0,
              currentVersion: "4.4",
              customBaseUrl: r,
              portalMode: "multitenant",
              supportsOAuth: !0
            });
            "https:" === window.location.protocol ? e = e.replace(/^http:/i, "https:").replace(/:7080/i, ":7443") : /^http:/i.test(t) && (e = e.replace(/^https:/i, "http:").replace(/:7443/i, ":7080"));
            return Object(_request_js__WEBPACK_IMPORTED_MODULE_19__["default"])(e, {
              query: {
                f: "json"
              },
              authMode: "anonymous",
              withCredentials: !0
            }).then(function (e) {
              return e.data;
            });
          }
        }, {
          key: "_hasPortalSession",
          value: function _hasPortalSession() {
            return !!this._getEsriAuthCookie();
          }
        }, {
          key: "_getEsriAuthCookie",
          value: function _getEsriAuthCookie() {
            var e = null;

            if (navigator.cookieEnabled) {
              var t = this._getAllCookies("esri_auth");

              var r;

              for (var s = 0; s < t.length; s++) {
                var i = JSON.parse(t[s]);

                if (i.portalApp) {
                  e = i;
                  break;
                }

                r ? r.push(i) : r = [i];
              }

              if (!e && r) {
                var _iterator6 = _createForOfIteratorHelper(r),
                    _step6;

                try {
                  for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                    var _t20 = _step6.value;

                    if (_t20.urlKey && window.location.hostname === "".concat(_t20.urlKey.toLowerCase(), ".").concat(_t20.customBaseUrl)) {
                      e = _t20;
                      break;
                    }
                  }
                } catch (err) {
                  _iterator6.e(err);
                } finally {
                  _iterator6.f();
                }
              }
            }

            if (e) {
              var _t21 = null;
              e.expires && ("number" == typeof e.expires ? _t21 = e.expires : "string" == typeof e.expires && (_t21 = Date.parse(e.expires)), isNaN(_t21) && (_t21 = null), e.expires = _t21), _t21 && _t21 < Date.now() && (e = null);
            }

            return e;
          }
        }, {
          key: "_getAllCookies",
          value: function _getAllCookies(e) {
            var t = [],
                r = document.cookie.match(new RegExp("(?:^|; )" + Object(_core_string_js__WEBPACK_IMPORTED_MODULE_6__["escapeRegExpString"])(e) + "=([^;]*)", "g"));
            if (r) for (var _e9 = 0; _e9 < r.length; _e9++) {
              var s = r[_e9];
              var i = s.indexOf("=");
              i > -1 && (s = s.substring(i + 1), t.push(decodeURIComponent(s)));
            }
            return t;
          }
        }, {
          key: "_doPortalSignIn",
          value: function _doPortalSignIn(e, t) {
            if (navigator.cookieEnabled) {
              var r = this._getEsriAuthCookie(),
                  s = this._portalConfig,
                  i = window.location.href,
                  n = this.findServerInfo(e);

              if ((t || this.useSignInPage) && (s || this._isPortalDomain(i) || r) && (n ? n.hasPortal || n.owningSystemUrl && this._isPortalDomain(n.owningSystemUrl) : this._isPortalDomain(e)) && (this._isIdProvider(i, e) || s && (this._hasSameServerInstance(this._getServerInstanceRoot(s.restBaseUrl), e) || this._isIdProvider(s.restBaseUrl, e)) || Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_12__["hasSameOrigin"])(i, e, !0))) return !0;
            }

            return !1;
          }
        }, {
          key: "_canUsePortalSignInWorkflow",
          value: function _canUsePortalSignInWorkflow(e) {
            return this._doPortalSignIn(e) && (window === window.top || this._hasPortalSession());
          }
        }, {
          key: "_checkProtocol",
          value: function _checkProtocol(e, t, r, s) {
            var i = !0;
            var n = s ? t.adminTokenServiceUrl : t.tokenServiceUrl;

            if (0 === n.trim().toLowerCase().indexOf("https:") && 0 !== window.location.href.toLowerCase().indexOf("https:") && Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_12__["getProxyRule"])(n) && (i = !!this._protocolFunc && !!this._protocolFunc({
              resourceUrl: e,
              serverInfo: t
            }), !i)) {
              r(new _core_Error_js__WEBPACK_IMPORTED_MODULE_11__["default"]("identity-manager:aborted", "Aborted the Sign-In process to avoid sending password over insecure connection."));
            }

            return i;
          }
        }, {
          key: "_enqueue",
          value: function _enqueue(e, t, r, s, i, n) {
            return s || (s = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_16__["createResolver"])()), s.resUrl_ = e, s.sinfo_ = t, s.options_ = r, s.admin_ = i, s.refresh_ = n, this._busy ? this._hasSameServerInstance(this._getServerInstanceRoot(e), this._busy.resUrl_) ? (this._oAuthDfd && this._oAuthDfd.oAuthWin_ && this._oAuthDfd.oAuthWin_.focus(), this._soReqs.push(s)) : this._xoReqs.push(s) : this._doSignIn(s), s.promise;
          }
        }, {
          key: "_doSignIn",
          value: function _doSignIn(e) {
            var _this16 = this;

            this._busy = e, this._rejectOnPersistedPageShow = !1;

            var t = function t(_t22) {
              var r = e.options_ && e.options_.resource,
                  s = e.resUrl_,
                  i = e.refresh_;
              var n = !1;
              -1 === _this16.credentials.indexOf(_t22) && (i && -1 !== _this16.credentials.indexOf(i) ? (i.userId = _t22.userId, i.token = _t22.token, i.expires = _t22.expires, i.validity = _t22.validity, i.ssl = _t22.ssl, i.creationTime = _t22.creationTime, n = !0, _t22 = i) : _this16.credentials.push(_t22)), _t22.resources || (_t22.resources = []), _t22.resources.push(r || s), _t22.scope = _this16._isServerRsrc(s) ? "server" : "portal", _t22.emitTokenChange();
              var o = _this16._soReqs,
                  a = {};
              _this16._soReqs = [], o.forEach(function (e) {
                if (!_this16._isIdenticalService(s, e.resUrl_)) {
                  var _r4 = _this16._getSuffix(e.resUrl_);

                  a[_r4] || (a[_r4] = !0, _t22.resources.push(e.resUrl_));
                }
              }), e.resolve(_t22), o.forEach(function (e) {
                _this16._hasSameServerInstance(_this16._getServerInstanceRoot(s), e.resUrl_) ? e.resolve(_t22) : _this16._soReqs.push(e);
              }), _this16._busy = e.resUrl_ = e.sinfo_ = e.refresh_ = null, n || _this16.emit("credential-create", {
                credential: _t22
              }), _this16._soReqs.length ? _this16._doSignIn(_this16._soReqs.shift()) : _this16._xoReqs.length && _this16._doSignIn(_this16._xoReqs.shift());
            },
                r = function r(t) {
              e.reject(t), _this16._busy = e.resUrl_ = e.sinfo_ = e.refresh_ = null, _this16._soReqs.length ? _this16._doSignIn(_this16._soReqs.shift()) : _this16._xoReqs.length && _this16._doSignIn(_this16._xoReqs.shift());
            },
                s = function s(_s8, i, n, o) {
              var a = e.sinfo_,
                  h = !e.options_ || !1 !== e.options_.prompt,
                  c = a.hasPortal && _this16._findOAuthInfo(e.resUrl_);

              var d, u;

              if (_this16._canUsePortalSignInWorkflow(e.resUrl_)) {
                var _s4 = _this16._getEsriAuthCookie(),
                    _i = _this16._portalConfig;

                if (_s4) {
                  if (!a.webTierAuth) {
                    "web" === (_s4.auth_tier && _s4.auth_tier.toLowerCase()) && (a.webTierAuth = !0);
                  }

                  return d = new L({
                    userId: _s4.email,
                    server: a.server,
                    token: a.webTierAuth ? null : _s4.token,
                    expires: _s4.expires
                  }), void (d.token ? e._pendingDfd = _this16._exchangeToken(d.server, c ? c.appId : "arcgisonline", d.token).then(function (e) {
                    d.token = e, t(d);
                  })["catch"](function () {
                    t(d);
                  }) : t(d));
                }

                if (h) {
                  var _t23 = "";
                  var _s5 = window.location.href;
                  return _t23 = _this16.signInPage ? _this16.signInPage : _i ? _i.baseUrl + _i.signin : _this16._isIdProvider(_s5, e.resUrl_) ? _this16._getOrigin(_s5) + "/home/signin.html" : a.tokenServiceUrl.replace(_this16._rePortalTokenSvc, "") + "/home/signin.html", _t23 = _t23.replace(/http:/i, "https:"), _i && !1 === _i.useSSL && (_t23 = _t23.replace(/https:/i, "http:")), void (0 === _s5.toLowerCase().replace("https", "http").indexOf(_t23.toLowerCase().replace("https", "http")) ? (u = new _core_Error_js__WEBPACK_IMPORTED_MODULE_11__["default"]("identity-manager:unexpected-error", "Cannot redirect to Sign-In page from within Sign-In page. URL of the resource that triggered this workflow: " + e.resUrl_), r(u)) : (_this16._rejectOnPersistedPageShow = !0, _this16._redirectFunc ? _this16._redirectFunc({
                    signInPage: _t23,
                    returnUrlParamName: "returnUrl",
                    returnUrl: _s5,
                    resourceUrl: e.resUrl_,
                    serverInfo: a
                  }) : window.location.href = _t23 + "?returnUrl=" + encodeURIComponent(_s5)));
                }

                u = new _core_Error_js__WEBPACK_IMPORTED_MODULE_11__["default"]("identity-manager:not-authenticated", "User is not signed in."), r(u);
              } else if (_s8) t(new L({
                userId: _s8,
                server: a.server,
                token: n,
                expires: null != o ? Number(o) : null,
                ssl: !!i
              }));else if (c) {
                var _s6 = c._oAuthCred;

                if (!_s6) {
                  var _e10 = new _OAuthCredential_js__WEBPACK_IMPORTED_MODULE_23__["default"](c, window.localStorage),
                      _t24 = new _OAuthCredential_js__WEBPACK_IMPORTED_MODULE_23__["default"](c, window.sessionStorage);

                  _e10.isValid() && _t24.isValid() ? _e10.expires > _t24.expires ? (_s6 = _e10, _t24.destroy()) : (_s6 = _t24, _e10.destroy()) : _s6 = _e10.isValid() ? _e10 : _t24, c._oAuthCred = _s6;
                }

                if (_s6.isValid()) d = new L({
                  userId: _s6.userId,
                  server: a.server,
                  token: _s6.token,
                  expires: _s6.expires,
                  ssl: _s6.ssl,
                  _oAuthCred: _s6
                }), c.appId !== _s6.appId && _this16._doPortalSignIn(e.resUrl_, !0) ? e._pendingDfd = _this16._exchangeToken(d.server, c.appId, d.token).then(function (e) {
                  d.token = e, _s6.token = e, _s6.save(), t(d);
                })["catch"](function () {
                  t(d);
                }) : t(d);else if (_this16._oAuthHash && _this16._oAuthHash.state.portalUrl === c.portalUrl) {
                  var _e11 = _this16._oAuthHash;
                  d = new L({
                    userId: _e11.username,
                    server: a.server,
                    token: _e11.access_token,
                    expires: Date.now() + 1e3 * Number(_e11.expires_in),
                    ssl: "true" === _e11.ssl,
                    oAuthState: _e11.state,
                    _oAuthCred: _s6
                  }), c.userId = d.userId, _s6.storage = _e11.persist ? window.localStorage : window.sessionStorage, _s6.token = d.token, _s6.expires = d.expires, _s6.userId = d.userId, _s6.ssl = d.ssl, _s6.save(), _this16._oAuthHash = null, t(d);
                } else h ? e._pendingDfd = _this16.oAuthSignIn(e.resUrl_, a, c, e.options_).then(t, r) : (u = new _core_Error_js__WEBPACK_IMPORTED_MODULE_11__["default"]("identity-manager:not-authenticated", "User is not signed in."), r(u));
              } else if (h) {
                if (_this16._checkProtocol(e.resUrl_, a, r, e.admin_)) {
                  var _s7 = e.options_;
                  e.admin_ && (_s7 = _s7 || {}, _s7.isAdmin = !0), e._pendingDfd = _this16.signIn(e.resUrl_, a, _s7).then(t, r);
                }
              } else u = new _core_Error_js__WEBPACK_IMPORTED_MODULE_11__["default"]("identity-manager:not-authenticated", "User is not signed in."), r(u);
            },
                n = function n() {
              var s = e.sinfo_,
                  i = s.owningSystemUrl,
                  n = e.options_;
              var o, a, h, l;

              if (n && (o = n.token, a = n.error, h = n.prompt), l = _this16._findCredential(i, {
                token: o,
                resource: e.resUrl_
              }), !l) {
                var _iterator7 = _createForOfIteratorHelper(_this16.credentials),
                    _step7;

                try {
                  for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                    var _e12 = _step7.value;

                    if (_this16._isIdProvider(i, _e12.server)) {
                      l = _e12;
                      break;
                    }
                  }
                } catch (err) {
                  _iterator7.e(err);
                } finally {
                  _iterator7.f();
                }
              }

              if (l) {
                var _i2 = _this16.findCredential(e.resUrl_, l.userId);

                if (_i2) t(_i2);else if (q(s, _this16._legacyFed)) {
                  var _e13 = l.toJSON();

                  _e13.server = s.server, _e13.resources = null, t(new L(_e13));
                } else {
                  (e._pendingDfd = _this16.generateToken(_this16.findServerInfo(l.server), null, {
                    serverUrl: e.resUrl_,
                    token: l.token,
                    signal: e.options_.signal,
                    ssl: l.ssl
                  })).then(function (r) {
                    t(new L({
                      userId: l.userId,
                      server: s.server,
                      token: r.token,
                      expires: null != r.expires ? Number(r.expires) : null,
                      ssl: !!r.ssl,
                      isAdmin: e.admin_,
                      validity: r.validity
                    }));
                  }, r);
                }
              } else {
                _this16._busy = null, o && (e.options_.token = null);

                (e._pendingDfd = _this16.getCredential(i.replace(/\/?$/, "/sharing"), {
                  resource: e.resUrl_,
                  owningTenant: s.owningTenant,
                  signal: e.options_.signal,
                  token: o,
                  error: a,
                  prompt: h
                })).then(function () {
                  _this16._enqueue(e.resUrl_, e.sinfo_, e.options_, e, e.admin_);
                }, function (e) {
                  r(e);
                });
              }
            };

            this._errbackFunc = r;

            var o = e.sinfo_.owningSystemUrl,
                a = this._isServerRsrc(e.resUrl_),
                h = e.sinfo_._restInfoPms;

            h ? h.promise.then(function (t) {
              var r = e.sinfo_;

              if (r._restInfoPms) {
                r.adminTokenServiceUrl = r._restInfoPms.adminUrl, r._restInfoPms = null, r.tokenServiceUrl = Object(_core_object_js__WEBPACK_IMPORTED_MODULE_4__["getDeepValue"])("authInfo.tokenServicesUrl", t) || Object(_core_object_js__WEBPACK_IMPORTED_MODULE_4__["getDeepValue"])("authInfo.tokenServiceUrl", t) || Object(_core_object_js__WEBPACK_IMPORTED_MODULE_4__["getDeepValue"])("tokenServiceUrl", t), r.shortLivedTokenValidity = Object(_core_object_js__WEBPACK_IMPORTED_MODULE_4__["getDeepValue"])("authInfo.shortLivedTokenValidity", t), r.currentVersion = t.currentVersion, r.owningTenant = t.owningTenant;

                var _e14 = r.owningSystemUrl = t.owningSystemUrl;

                _e14 && _this16._portals.push(_e14);
              }

              a && r.owningSystemUrl ? n() : s();
            }, function () {
              e.sinfo_._restInfoPms = null;
              var t = new _core_Error_js__WEBPACK_IMPORTED_MODULE_11__["default"]("identity-manager:server-identification-failed", "Unknown resource - could not find token service endpoint.");
              r(t);
            }) : a && o ? n() : e.sinfo_._selfReq ? e.sinfo_._selfReq.selfDfd.then(function (t) {
              var r = {};
              var s, i, n, o;
              return t && (s = t.user && t.user.username, r.username = s, r.allSSL = t.allSSL, i = t.supportsOAuth, n = t.currentVersion, "multitenant" === t.portalMode && (o = t.customBaseUrl)), e.sinfo_.webTierAuth = !!s, s && _this16.normalizeWebTierAuth ? _this16.generateToken(e.sinfo_, null, {
                ssl: r.allSSL
              })["catch"](function () {
                return null;
              }).then(function (e) {
                return r.portalToken = e && e.token, r.tokenExpiration = e && e.expires, r;
              }) : !s && i && parseFloat(n) >= 4.4 && !_this16._canUsePortalSignInWorkflow(e.resUrl_) ? _this16._generateOAuthInfo({
                portalUrl: e.sinfo_.server,
                customBaseUrl: o,
                owningTenant: e.sinfo_._selfReq.owningTenant
              })["catch"](function () {
                return null;
              }).then(function () {
                return r;
              }) : r;
            })["catch"](function () {
              return null;
            }).then(function (t) {
              e.sinfo_._selfReq = null, t ? s(t.username, t.allSSL, t.portalToken, t.tokenExpiration) : s();
            }) : s();
          }
        }, {
          key: "_generateOAuthInfo",
          value: function _generateOAuthInfo(e) {
            var _this17 = this;

            var t,
                r,
                s = e.portalUrl;
            var i = e.customBaseUrl,
                n = e.owningTenant,
                o = !this.defaultOAuthInfo && this._createDefaultOAuthInfo && !this._hasTestedIfAppIsOnPortal;

            if (o) {
              r = window.location.href;

              var _e15 = r.indexOf("?");

              _e15 > -1 && (r = r.slice(0, _e15)), _e15 = r.search(/\/(apps|home)\//), r = _e15 > -1 ? r.slice(0, _e15) : null;
            }

            return o && r ? (this._hasTestedIfAppIsOnPortal = !0, t = Object(_request_js__WEBPACK_IMPORTED_MODULE_19__["default"])(r + "/sharing/rest", {
              query: {
                f: "json"
              }
            }).then(function () {
              _this17.defaultOAuthInfo = new _OAuthInfo_js__WEBPACK_IMPORTED_MODULE_24__["default"]({
                appId: "arcgisonline",
                popup: !0,
                popupCallbackUrl: r + "/home/oauth-callback.html"
              });
            })) : t = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_16__["resolve"])(), t.then(function () {
              if (_this17.defaultOAuthInfo) return s = s.replace(/^http:/i, "https:"), Object(_request_js__WEBPACK_IMPORTED_MODULE_19__["default"])(s + "/sharing/rest/oauth2/validateRedirectUri", {
                query: {
                  accountId: n,
                  client_id: _this17.defaultOAuthInfo.appId,
                  redirect_uri: Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_12__["makeAbsolute"])(_this17.defaultOAuthInfo.popupCallbackUrl),
                  f: "json"
                }
              }).then(function (e) {
                if (e.data.valid) {
                  var _t25 = _this17.defaultOAuthInfo.clone();

                  e.data.urlKey && i ? _t25.portalUrl = "https://" + e.data.urlKey.toLowerCase() + "." + i : _t25.portalUrl = s, _this17.oAuthInfos.push(_t25);
                }
              });
            });
          }
        }, {
          key: "_doOAuthSignIn",
          value: function _doOAuthSignIn(e, r, s) {
            var _this18 = this;

            var i = {
              portalUrl: s.portalUrl
            };
            !s.popup && s.preserveUrlHash && window.location.hash && (i.hash = window.location.hash);
            var n = {
              client_id: s.appId,
              response_type: "token",
              state: JSON.stringify(i),
              expiration: s.expiration,
              locale: s.locale,
              redirect_uri: s.popup ? Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_12__["makeAbsolute"])(s.popupCallbackUrl) : window.location.href.replace(/#.*$/, "")
            };
            s.forceLogin && (n.force_login = !0), s.forceUserId && s.userId && (n.prepopulatedusername = s.userId);
            var o = s.portalUrl.replace(/^http:/i, "https:") + "/sharing/oauth2/authorize",
                a = o + "?" + Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_12__["objectToQuery"])(n);

            if (s.popup) {
              var _e16 = window.open(a, "esriJSAPIOAuth", s.popupWindowFeatures);

              if (_e16) _e16.focus(), this._oAuthDfd.oAuthWin_ = _e16, this._oAuthIntervalId = setInterval(function () {
                if (_e16.closed) {
                  clearInterval(_this18._oAuthIntervalId), _this18._oAuthOnHashHandle.remove();
                  var _e17 = _this18._oAuthDfd;

                  if (_e17) {
                    var t = new _core_Error_js__WEBPACK_IMPORTED_MODULE_11__["default"]("identity-manager:user-aborted", "ABORTED");

                    _e17.reject(t);
                  }
                }
              }, 500), this._oAuthOnHashHandle = Object(_core_events_js__WEBPACK_IMPORTED_MODULE_15__["on"])(_core_global_js__WEBPACK_IMPORTED_MODULE_1__["default"], "arcgis:auth:hash", function (e) {
                _this18.setOAuthResponseHash(e.detail);
              });else {
                var _e18 = new _core_Error_js__WEBPACK_IMPORTED_MODULE_11__["default"]("identity-manager:popup-blocked", "ABORTED");

                this._oAuthDfd.reject(_e18);
              }
            } else this._rejectOnPersistedPageShow = !0, this._oAuthRedirectFunc ? this._oAuthRedirectFunc({
              authorizeParams: n,
              authorizeUrl: o,
              resourceUrl: e,
              serverInfo: r,
              oAuthInfo: s
            }) : window.location.href = a;
          }
        }]);

        return E;
      }(_core_Evented_js__WEBPACK_IMPORTED_MODULE_17__["default"]);

      E = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__["subclass"])("esri.identity.IdentityManagerBase")], E);

      var L = /*#__PURE__*/function (_core_Evented_js__WEB2) {
        _inherits(L, _core_Evented_js__WEB2);

        var _super7 = _createSuper(L);

        function L(e) {
          var _this19;

          _classCallCheck(this, L);

          _this19 = _super7.call(this, e), _this19._oAuthCred = null, _this19.tokenRefreshBuffer = 2, e && e._oAuthCred && (_this19._oAuthCred = e._oAuthCred);
          return _this19;
        }

        _createClass(L, [{
          key: "initialize",
          value: function initialize() {
            this.resources = this.resources || [], null == this.creationTime && (this.creationTime = Date.now());
          }
        }, {
          key: "refreshToken",
          value: function refreshToken() {
            var _this20 = this;

            var e = _kernel_js__WEBPACK_IMPORTED_MODULE_18__["id"].findServerInfo(this.server),
                t = e && e.owningSystemUrl,
                r = !!t && "server" === this.scope,
                s = r && q(e, _kernel_js__WEBPACK_IMPORTED_MODULE_18__["id"]._legacyFed),
                i = e.webTierAuth,
                n = i && _kernel_js__WEBPACK_IMPORTED_MODULE_18__["id"].normalizeWebTierAuth,
                o = D[this.server],
                a = o && o[this.userId];

            var h,
                l,
                c = this.resources && this.resources[0],
                d = r && _kernel_js__WEBPACK_IMPORTED_MODULE_18__["id"].findServerInfo(t),
                u = {
              username: this.userId,
              password: a
            };

            if ((!i || n) && (r && !d && _kernel_js__WEBPACK_IMPORTED_MODULE_18__["id"].serverInfos.some(function (e) {
              return _kernel_js__WEBPACK_IMPORTED_MODULE_18__["id"]._isIdProvider(t, e.server) && (d = e), !!d;
            }), h = d && _kernel_js__WEBPACK_IMPORTED_MODULE_18__["id"].findCredential(d.server, this.userId), !r || h)) {
              if (!s) {
                if (r) l = {
                  serverUrl: c,
                  token: h && h.token,
                  ssl: h && h.ssl
                };else if (n) u = null, l = {
                  ssl: this.ssl
                };else {
                  if (!a) {
                    var _t26;

                    return c && (c = _kernel_js__WEBPACK_IMPORTED_MODULE_18__["id"]._sanitizeUrl(c), this._enqueued = 1, _t26 = _kernel_js__WEBPACK_IMPORTED_MODULE_18__["id"]._enqueue(c, e, null, null, this.isAdmin, this), _t26.then(function () {
                      _this20._enqueued = 0, _this20.refreshServerTokens();
                    })["catch"](function () {
                      _this20._enqueued = 0;
                    })), _t26;
                  }

                  this.isAdmin && (l = {
                    isAdmin: !0
                  });
                }
                return _kernel_js__WEBPACK_IMPORTED_MODULE_18__["id"].generateToken(r ? d : e, r ? null : u, l).then(function (e) {
                  _this20.token = e.token, _this20.expires = null != e.expires ? Number(e.expires) : null, _this20.creationTime = Date.now(), _this20.validity = e.validity, _this20.emitTokenChange(), _this20.refreshServerTokens();
                })["catch"](function () {});
              }

              h.refreshToken();
            }
          }
        }, {
          key: "refreshServerTokens",
          value: function refreshServerTokens() {
            var _this21 = this;

            "portal" === this.scope && _kernel_js__WEBPACK_IMPORTED_MODULE_18__["id"].credentials.forEach(function (e) {
              var t = _kernel_js__WEBPACK_IMPORTED_MODULE_18__["id"].findServerInfo(e.server),
                  r = t && t.owningSystemUrl;

              e !== _this21 && e.userId === _this21.userId && r && "server" === e.scope && (_kernel_js__WEBPACK_IMPORTED_MODULE_18__["id"]._hasSameServerInstance(_this21.server, r) || _kernel_js__WEBPACK_IMPORTED_MODULE_18__["id"]._isIdProvider(r, _this21.server)) && (q(t, _kernel_js__WEBPACK_IMPORTED_MODULE_18__["id"]._legacyFed) ? (e.token = _this21.token, e.expires = _this21.expires, e.creationTime = _this21.creationTime, e.validity = _this21.validity, e.emitTokenChange()) : e.refreshToken());
            });
          }
        }, {
          key: "emitTokenChange",
          value: function emitTokenChange(e) {
            clearTimeout(this._refreshTimer);

            var t = this.server && _kernel_js__WEBPACK_IMPORTED_MODULE_18__["id"].findServerInfo(this.server),
                r = t && t.owningSystemUrl,
                s = r && _kernel_js__WEBPACK_IMPORTED_MODULE_18__["id"].findServerInfo(r);

            !1 === e || r && "portal" !== this.scope && (!s || !s.webTierAuth || _kernel_js__WEBPACK_IMPORTED_MODULE_18__["id"].normalizeWebTierAuth) || null == this.expires && null == this.validity || this._startRefreshTimer(), this.emit("token-change");
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this.userId = this.server = this.token = this.expires = this.validity = this.resources = this.creationTime = null, this._oAuthCred && (this._oAuthCred.destroy(), this._oAuthCred = null);

            var e = _kernel_js__WEBPACK_IMPORTED_MODULE_18__["id"].credentials.indexOf(this);

            e > -1 && _kernel_js__WEBPACK_IMPORTED_MODULE_18__["id"].credentials.splice(e, 1), this.emitTokenChange(), this.emit("destroy");
          }
        }, {
          key: "toJSON",
          value: function toJSON() {
            var e = Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_3__["fixJson"])({
              userId: this.userId,
              server: this.server,
              token: this.token,
              expires: this.expires,
              validity: this.validity,
              ssl: this.ssl,
              isAdmin: this.isAdmin,
              creationTime: this.creationTime,
              scope: this.scope
            }),
                t = this.resources;
            return t && t.length > 0 && (e.resources = t.slice()), e;
          }
        }, {
          key: "_startRefreshTimer",
          value: function _startRefreshTimer() {
            clearTimeout(this._refreshTimer);
            var e = 6e4 * this.tokenRefreshBuffer;
            var t = (this.validity ? this.creationTime + 6e4 * this.validity : this.expires) - Date.now();
            t < 0 && (t = 0), this._refreshTimer = setTimeout(this.refreshToken.bind(this), t > e ? t - e : t);
          }
        }]);

        return L;
      }(_core_Evented_js__WEBPACK_IMPORTED_MODULE_17__["default"].EventedAccessor);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__["property"])()], L.prototype, "creationTime", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__["property"])()], L.prototype, "expires", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__["property"])()], L.prototype, "isAdmin", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__["property"])()], L.prototype, "oAuthState", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__["property"])()], L.prototype, "resources", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__["property"])()], L.prototype, "scope", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__["property"])()], L.prototype, "server", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__["property"])()], L.prototype, "ssl", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__["property"])()], L.prototype, "token", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__["property"])()], L.prototype, "tokenRefreshBuffer", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__["property"])()], L.prototype, "userId", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__["property"])()], L.prototype, "validity", void 0), L = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__["subclass"])("esri.identity.Credential")], L);
      /***/
    }
  }]);
})();
//# sourceMappingURL=identity-IdentityManager-js-es5.js.map