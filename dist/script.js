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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modals */ "./src/js/modules/modals.js");
/* harmony import */ var _modules_showMore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/showMore */ "./src/js/modules/showMore.js");
/* harmony import */ var _modules_tabsFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tabsFilter */ "./src/js/modules/tabsFilter.js");
/* harmony import */ var _modules_showImgs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/showImgs */ "./src/js/modules/showImgs.js");




window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  Object(_modules_modals__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modules_showMore__WEBPACK_IMPORTED_MODULE_1__["default"])('.button-styles', '.styles-2');
  Object(_modules_tabsFilter__WEBPACK_IMPORTED_MODULE_2__["default"])('.portfolio-menu', 'li', '.portfolio-wrapper', '.portfolio-block', '.portfolio-no', 'active');
  Object(_modules_showImgs__WEBPACK_IMPORTED_MODULE_3__["default"])('.sizes-block');
});

/***/ }),

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scrollSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scrollSize */ "./src/js/modules/scrollSize.js");

const modals = () => {
  const bindModal = (triggersSelector, modalSelector) => {
    const triggers = document.querySelectorAll(triggersSelector),
      modal = document.querySelector(modalSelector),
      scrollWidth = Object(_scrollSize__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const showModal = () => {
      document.body.style.overflow = 'hidden';
      document.body.style.marginRight = `${scrollWidth}px`;
      modal.style.display = 'block';
    };
    const hideModal = () => {
      document.body.style.overflow = '';
      document.body.style.marginRight = '0px';
      modal.style.display = 'none';
    };
    triggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        showModal();
        if (trigger.classList.contains('fixed-gift')) {
          localStorage.setItem('gift_received', true);
          trigger.remove();
        }
      });
    });
    modal.addEventListener('click', e => {
      const t = e.target;
      if (t && (t.matches('[data-close]') || t === modal)) {
        hideModal();
      }
    });
  };
  bindModal('.button-design', '.popup-design');
  bindModal('.button-consultation', '.popup-consultation');
  bindModal('.fixed-gift', '.popup-gift');
  const showPresent = () => {
    if (localStorage.getItem('gift_received')) {
      document.querySelector('.fixed-gift').remove();
    }
  };
  showPresent();
};
/* harmony default export */ __webpack_exports__["default"] = (modals);

/***/ }),

/***/ "./src/js/modules/scrollSize.js":
/*!**************************************!*\
  !*** ./src/js/modules/scrollSize.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const scrollSize = () => {
  const div = document.createElement('div');
  div.style.cssText = `
        width: 50px;
        height: 50px;
        overflow: scroll;
        visibility: hidden;
        position: fixed;
    `;
  document.body.append(div);
  const scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();
  return scrollWidth;
};
/* harmony default export */ __webpack_exports__["default"] = (scrollSize);

/***/ }),

/***/ "./src/js/modules/showImgs.js":
/*!************************************!*\
  !*** ./src/js/modules/showImgs.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const showImgs = contentsSelector => {
  const contents = document.querySelectorAll(contentsSelector),
    imgs = document.querySelectorAll(`${contentsSelector} img`),
    imgsSrcPlacholder = [],
    imgsSrcImg = [];
  contents.forEach(item => {
    const img = item.querySelector('img'),
      src = img.getAttribute('src');
    imgsSrcPlacholder.push(src);
  });
  imgsSrcPlacholder.forEach(item => {
    let srcImg = item.slice(0, item.indexOf('.'));
    srcImg += '-1.png';
    imgsSrcImg.push(srcImg);
  });
  contents.forEach((content, i) => {
    content.addEventListener('mouseover', e => {
      if (e.target.closest(contentsSelector)) {
        imgs[i].setAttribute('src', imgsSrcImg[i]);
        imgs[i].classList.add('img-show');
      }
    });
    content.addEventListener('mouseout', e => {
      if (e.target.closest(contentsSelector)) {
        imgs[i].setAttribute('src', imgsSrcPlacholder[i]);
        imgs[i].classList.remove('img-show');
      }
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (showImgs);

/***/ }),

/***/ "./src/js/modules/showMore.js":
/*!************************************!*\
  !*** ./src/js/modules/showMore.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const showMore = (triggerSelector, elementsSelector) => {
  const trigger = document.querySelector(triggerSelector);
  trigger.addEventListener('click', () => {
    document.querySelectorAll(elementsSelector).forEach(el => {
      el.style.cssText = 'display: block !important;';
    });
    trigger.remove();
  });
};
/* harmony default export */ __webpack_exports__["default"] = (showMore);

/***/ }),

/***/ "./src/js/modules/tabsFilter.js":
/*!**************************************!*\
  !*** ./src/js/modules/tabsFilter.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const tabsFilter = (wrapperMenuSelector, menusSelector, wrapperContentSelector, contentsSelector, noContentSelector, activeClass) => {
  const wrapperMenu = document.querySelector(wrapperMenuSelector),
    menus = wrapperMenu.querySelectorAll(menusSelector),
    wrapperContent = document.querySelector(wrapperContentSelector),
    contents = wrapperContent.querySelectorAll(contentsSelector),
    noContent = document.querySelector(noContentSelector);
  const showFilteredTabs = filterName => {
    menus.forEach(menu => {
      if (!menu.classList.contains(filterName)) {
        menu.classList.remove(activeClass);
      } else {
        menu.classList.add(activeClass);
      }
    });
    let numberOfTabsShown = 0;
    contents.forEach(content => {
      if (!content.classList.contains(filterName)) {
        content.style.display = 'none';
      } else {
        content.style.display = 'block';
        numberOfTabsShown++;
      }
    });
    if (numberOfTabsShown === 0) {
      noContent.style.display = 'block';
    } else {
      noContent.style.dispaly = 'none';
    }
  };
  wrapperMenu.addEventListener('click', e => {
    const t = e.target;
    if (t && t.matches('li')) {
      showFilteredTabs(t.classList[0]);
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (tabsFilter);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map