/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("let switchMode = document.getElementById(\"switchMode\");\r\n\r\nswitchMode.onclick = function () {\r\n    let theem = document.getElementById(\"theem\");\r\n\r\n    if (theem.getAttribute(\"href\") == \"assets/css/style.min.css\"){\r\n        theem.href = \"assets/css/style_darc.min.css\";\r\n    } else {\r\n        theem.href = \"assets/css/style.min.css\"\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/event.js":
/*!********************************!*\
  !*** ./src/assets/js/event.js ***!
  \********************************/
/***/ (function() {

eval("const anchors = document.querySelectorAll('a[href*=\"#\"]')\r\n\r\nfor (let anchor of anchors) {\r\n    anchor.addEventListener(\"click\", function(event) {\r\n        event.preventDefault();\r\n        const blockID = anchor.getAttribute('href')\r\n        document.querySelector('' + blockID).scrollIntoView({\r\n            behavior: 'smooth',\r\n            block: 'start'\r\n        })\r\n    }) \r\n}\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/event.js?");

/***/ }),

/***/ "./src/assets/js/map.js":
/*!******************************!*\
  !*** ./src/assets/js/map.js ***!
  \******************************/
/***/ (function() {

eval("ymaps.ready(init);\r\nfunction init(){\r\n    var myMap = new ymaps.Map(\"map\", {\r\n        center: [57.043028437225864, 34.969132118486264],\r\n        zoom: 18\r\n    });\r\n\r\n    var myPlacemark = new ymaps.Placemark(\r\n        [57.043028437225864, 34.969132118486264],\r\n\r\n        { balloonContent:\r\n            `\r\n                <div class=\"balloon\">\r\n                    <div class=\"balloon__address\">\r\n                        Алгоритмека Торжок\r\n                    </div>\r\n                    <div class=\"balloon__contacts\">\r\n                        Python-Start\r\n                    </div>\r\n                </div>\r\n\r\n            `\r\n        },\r\n\r\n        {\r\n        iconLayout: 'default#image',\r\n        iconImageHref: 'assets/images/Label.svg',\r\n        iconImageSize: [40, 40],\r\n        iconImageOffset: [-20, -40]\r\n    });\r\n\r\n    myMap.controls.remove('geolocationControl');\r\n    myMap.controls.remove('searchControl');\r\n    myMap.controls.remove('trafficControl');\r\n    myMap.controls.remove('typeSelector');\r\n    myMap.controls.remove('rulerControl');\r\n    //myMap.behaviors.disable('scrollZoom');//\r\n\r\n    myMap.geoObjects.add(myPlacemark); \r\n}\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/map.js?");

/***/ }),

/***/ "./src/assets/js/mod.js":
/*!******************************!*\
  !*** ./src/assets/js/mod.js ***!
  \******************************/
/***/ (function() {

eval("document.querySelector('.button_form').onclick = myClick;\r\n\r\nfunction myClick(){\r\n    console.log('lsfdfs')\r\n    let a = document.querySelector('.input').value;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/mod.js?");

/***/ }),

/***/ "./src/assets/js/par.js":
/*!******************************!*\
  !*** ./src/assets/js/par.js ***!
  \******************************/
/***/ (function() {

eval("const cards = document.querySelectorAll('.card')\r\n\r\nfor (let i = 0; i < cards.length; i++) {\r\n    const card = cards[i];\r\n    card.addEventListener('mousemove', Startrotate);\r\n    card.addEventListener('mouseout', Stoprotate);\r\n    \r\n}\r\n\r\nfunction Startrotate(event) {\r\n    const cardItem =  this.querySelector('.card-item');\r\n    const halfheight = cardItem.offsetHeight / 2;\r\n    const halfwidth = cardItem.offsetWidth / 2;\r\n    cardItem.style.transform = 'rotateX('+ -(event.offsetY - halfheight) / 8 +'deg) rotateY('+ (event.offsetX - halfwidth ) / 5 +'deg)'\r\n}\r\n\r\nfunction Stoprotate(event) {\r\n    const cardItem =  this.querySelector('.card-item');\r\n    cardItem.style.transform = 'rotate(0)'\r\n}\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/par.js?");

/***/ }),

/***/ "./src/assets/js/scroll.js":
/*!*********************************!*\
  !*** ./src/assets/js/scroll.js ***!
  \*********************************/
/***/ (function() {

eval("\r\n\r\n// You can also pass an optional settings object\r\n// below listed default settings\r\nAOS.init({\r\n    // Global settings:\r\n    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function\r\n    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on\r\n    initClassName: 'aos-init', // class applied after initialization\r\n    animatedClassName: 'aos-animate', // class applied on animation\r\n    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll\r\n    disableMutationObserver: false, // disables automatic mutations' detections (advanced)\r\n    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)\r\n    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)\r\n    \r\n  \r\n    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:\r\n    offset: 100, // offset (in px) from the original trigger point\r\n    delay: 0, // values from 0 to 3000, with step 50ms\r\n    duration: 400, // values from 0 to 3000, with step 50ms\r\n    easing: 'ease', // default easing for AOS animations\r\n    once: false, // whether animation should happen only once - while scrolling down\r\n    mirror: false, // whether elements should animate out while scrolling past them\r\n    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation\r\n  \r\n  });\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/scroll.js?");

/***/ }),

/***/ "./src/assets/js/slaider.js":
/*!**********************************!*\
  !*** ./src/assets/js/slaider.js ***!
  \**********************************/
/***/ (function() {

eval("const carousel = document.querySelector(\".carousel\");\r\nfirstImg = carousel.querySelectorAll(\"img\")[0];\r\narrowIcons = document.querySelectorAll(\".wrapper i\");\r\n\r\nlet isDrageStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;\r\n\r\nconst showHideIcons = () => {\r\n    let scrollWidth = carousel.scrollWidth - carousel.clientWidth;\r\n    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? \"none\" : \"block\";\r\n    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? \"none\" : \"block\";\r\n} \r\n\r\narrowIcons.forEach(icon => {\r\n    icon.addEventListener(\"click\", () =>  {\r\n        let firstImgWidth = firstImg.clientWidth + 14;\r\n        carousel.scrollLeft += icon.id == \"left\" ? -firstImgWidth : firstImgWidth;\r\n        setTimeout(() => showHideIcons(), 60); \r\n    });\r\n})\r\n\r\nconst autoSlide = () => {\r\n    if(carousel.scrollLeft == (carousel.scrollWidth - carousel.clientWidth)) return;\r\n\r\n    positionDiff = Math.ads(positionDiff);\r\n    let firstImgWidth = firstImg.clientWidth + 14;\r\n    let valDifference = firstImgWidth - positionDiff;\r\n\r\n    if(carousel.scrollLeft > prevScrollLeft) {\r\n        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;\r\n    }\r\n    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;\r\n}\r\n\r\nconst dragStart = (e) => {\r\n    isDrageStart = true;\r\n    prevPageX = e.pageX || e.touches[0].pageX;\r\n    prevScrollLeft = carousel.scrollLeft;\r\n}\r\n\r\nconst dragging = (e) => {\r\n    if(!isDrageStart) return;\r\n    e.preventDefault();\r\n    isDragging = true;\r\n    carousel.classList.add(\"dragging\");\r\n    positionDiff = (e.pageX  || e.touches[0].pageX) - prevPageX;\r\n    carousel.scrollLeft = prevScrollLeft - positionDiff;\r\n    showHideIcons();\r\n}\r\n\r\nconst dragStop = () => {\r\n    isDrageStart = false;\r\n    carousel.classList.remove(\"dragging\");\r\n\r\n    if(!isDragging) return;\r\n    isDragging = false;\r\n    autoSlide();\r\n}\r\n\r\ncarousel.addEventListener(\"mousedown\", dragStart);\r\ncarousel.addEventListener(\"touchstart\", dragStart);\r\n\r\ncarousel.addEventListener(\"mousemove\", dragging);\r\ncarousel.addEventListener(\"touchmove\", dragging);\r\n\r\ncarousel.addEventListener(\"mouseup\", dragStop);\r\ncarousel.addEventListener(\"mouseleave\", dragStop);\r\ncarousel.addEventListener(\"touchend\", dragStop);\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/slaider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	__webpack_modules__["./src/assets/js/event.js"]();
/******/ 	__webpack_modules__["./src/assets/js/map.js"]();
/******/ 	__webpack_modules__["./src/assets/js/mod.js"]();
/******/ 	__webpack_modules__["./src/assets/js/par.js"]();
/******/ 	__webpack_modules__["./src/assets/js/scroll.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/slaider.js"]();
/******/ 	
/******/ })()
;