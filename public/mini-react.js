!function(t,n){for(var e in n)t[e]=n[e]}(window,function(t){var n={};function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(r,i,function(n){return t[n]}.bind(null,i));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n,e){"use strict";function r(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function i(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=[],r=!0,i=!1,o=void 0;try{for(var u,c=t[Symbol.iterator]();!(r=(u=c.next()).done)&&(e.push(u.value),!n||e.length!==n);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return e}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function o(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}e.r(n);var u=function(t){return function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.forEach(function(n){o(t,n,e[n])})}return t}({},t)},c=function(t){return null===t},a=function(t){return"boolean"==typeof t},l=function(t){return!c(t)&&"object"==typeof t&&t.constructor===Object},f=function(t){throw new Error("Mini React: ".concat(t))},d=function(t){return c(t)||void 0===t||t.constructor===String&&0===t.length};var s="__node:component",p="__ivdom:attributes";function h(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=[],r=!0,i=!1,o=void 0;try{for(var u,c=t[Symbol.iterator]();!(r=(u=c.next()).done)&&(e.push(u.value),!n||e.length!==n);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return e}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var y=function t(n){return n.__child?t(n.__child):n},b=function(t){return t instanceof HTMLElement};function v(t,n){Object.entries(n).forEach(function(n){var e=h(n,2),r=e[0],i=e[1];return function(t,n,e){if(!t[p]&&(t[p]={}),"o"===n[0]&&"n"===n[1]){var r=n.substring(2).toLowerCase();t[p][r]?e||t.removeEventListener(r,_):t.addEventListener(r,_),t[p][r]=e}else d(e)?t.removeAttribute(n):"value"===n?t.value=e:t.setAttribute(n,e)}(t,r,i)})}function m(t,n){t.innerHTML="",t.appendChild(document.createTextNode(n))}function _(t){this[p][t.type](t)}function O(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var g=function(t){return t&&t.kind===s},w=function(t){return t&&t.kind&&!g(t)},j=function(t,n){return Object.keys(t.attributes).reduce(function(t,n){return function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.forEach(function(n){O(t,n,e[n])})}return t}({[n]:void 0},t)},n.attributes)};function P(t){w(t)?function(t){t.children.map(P),t.__child&&function(t){t.parentNode&&t.parentNode.removeChild(t)}(t.__child),t.__child=null}(t):f("not able to unmount this vnode")}function S(t,n){if(null==t)return{};var e,r,i=function(t,n){if(null==t)return{};var e,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||(i[e]=t[e]);return i}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}function x(t,n){if(t.kind!==n.kind)return function(t,n){var e=y(t),r=k(n);return e.parentNode.replaceChild(r.__child,e),P(t),r}(t,n);var e=u(n),r=t.attributes.textContent,i=j(t,n),o=i.textContent,c=S(i,["textContent"]);return e.__child=t.__child,function(t,n){for(var e in t)if(!(e in n))return!1;for(var r in n)if(!(r in t))return!1;for(var i in t)if(t[i]!==n[i])return!1;return!0}(t.attributes,n.attributes)||v(e.__child,c),!r&&o?(t.children.map(P),e.children=[],m(e.__child,o)):r&&!o?(e.__child.innerHTML="",e.children=n.children.map(k),e.children.map(function(t){var n=t.__child;return e.__child.appendChild(n)})):o?m(e.__child,o):n.children.length===t.children.length?e.children=t.children.map(function(t,e){return A(t,n.children[e])}):(e.__child.innerHTML="",e.children=n.children.map(k),e.children.map(function(t){var n=t.__child;return e.__child.appendChild(n)})),e}function A(t,n){if(w(t))return x(t,n);f("not able to patch this object")}function E(t,n){if(null==t)return{};var e,r,i=function(t,n){if(null==t)return{};var e,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||(i[e]=t[e]);return i}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}function k(t){return w(t)?function(t){var n=document.createElement(t.kind),e=u(t),r=e.attributes,i=r.textContent,o=E(r,["textContent"]);return e.__child=n,v(n,o),i?(m(n,i),e.children=[]):(e.children=t.children.map(k),e.children.map(function(t){var e=t.__child;return n.appendChild(e)})),e}(t):g(t)?function(t){var n=new t.constructor(t.attributes);n.state=t.state;var e=n.render(t.attributes,t.state);return n.__child=k(e),n.__patch=A,n.__child}(t):void f("not able to construct this vnode")}function C(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var T=function(){function t(n,e){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.props=u(n),this.state=u(e),Object.defineProperty(this,"kind",{value:s,enumerable:!0,writable:!1})}return function(t,n,e){n&&C(t.prototype,n),e&&C(t,e)}(t,[{key:"setState",value:function(t){!function(t){return"function"==typeof t}(t)&&f("state must be a function!");var n=u(this.state),e=u(this.props);this.state=function t(){var n={};return Array.from(arguments).forEach(function(e,o){!l(e)&&f("".concat(o,"º paramter must be a valid object")),Object.entries(e).forEach(function(e){var o=i(e,2),u=o[0],c=o[1];l(c)?n[u]=t(n[u]||{},c):Array.isArray(c)?n[u]=r(c):n[u]=c})}),n}(this.state,t(n,e)),this.__child=this.__patch(this.__child,this.render(e,this.state))}},{key:"render",value:function(){f("no render function was defined")}},{key:"__patch",value:function(){f("this component was not correctly construted. Did you forget to call pass inside render?")}}]),t}();function M(t,n,e){return(M=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var i=new(Function.bind.apply(t,r));return e&&I(i,e.prototype),i}).apply(null,arguments)}function I(t,n){return(I=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function L(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function N(t,n){if(null==t)return{};var e,r,i=function(t,n){if(null==t)return{};var e,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||(i[e]=t[e]);return i}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}var R=function t(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.kind=n,this.attributes=e;for(var r=arguments.length,i=new Array(r>2?r-2:0),o=2;o<r;o++)i[o-2]=arguments[o];this.children=i};function D(t){if(l(t)){var n=t.tagName,e=t.children,r=void 0===e?[]:e,i=N(t,["tagName","children"]);return d(n)&&f("tagName is required and must be valid string"),M(R,[n,i].concat(L(r.map(D))))}if("string"==typeof t){var o=t;return(c(t)||a(t))&&(o=""),new R("span",{textContent:o})}return t.kind===s?t:t.hasOwnProperty("kind")&&t.hasOwnProperty("attributes")&&t.hasOwnProperty("children")?t:void f("not a valid blueprint")}e.d(n,"MiniReact",function(){return H}),e.d(n,"Component",function(){return T}),e.d(n,"node",function(){return D});var H={render:function(t,n){!b(n)&&f("node must be a valid DOM Element");var e=k(t);n.appendChild(e.__child)}}}]));