webpackJsonp([35783957827783,0x99703cc56f65],{24:function(e,t){"use strict";function n(e){return function(){return e}}var r=function(){};r.thatReturns=n,r.thatReturnsFalse=n(!1),r.thatReturnsTrue=n(!0),r.thatReturnsNull=n(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},41:function(e,t,n){"use strict";var r={};e.exports=r},73:function(e,t,n){"use strict";function r(e){for(var t=arguments.length-1,n="Minified React error #"+e+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);throw t=Error(n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."),t.name="Invariant Violation",t.framesToPop=1,t}function a(e,t,n){this.props=e,this.context=t,this.refs=E,this.updater=n||_}function l(e,t,n){this.props=e,this.context=t,this.refs=E,this.updater=n||_}function o(){}function u(e,t,n){this.props=e,this.context=t,this.refs=E,this.updater=n||_}function i(e,t,n){var r,a={},l=null,o=null;if(null!=t)for(r in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(l=""+t.key),t)x.call(t,r)&&!R.hasOwnProperty(r)&&(a[r]=t[r]);var u=arguments.length-2;if(1===u)a.children=n;else if(1<u){for(var i=Array(u),c=0;c<u;c++)i[c]=arguments[c+2];a.children=i}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===a[r]&&(a[r]=u[r]);return{$$typeof:N,type:e,key:l,ref:o,props:a,_owner:k.current}}function c(e){return"object"==typeof e&&null!==e&&e.$$typeof===N}function f(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}function s(e,t,n,r){if($.length){var a=$.pop();return a.result=e,a.keyPrefix=t,a.func=n,a.context=r,a.count=0,a}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function d(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>$.length&&$.push(e)}function p(e,t,n,a){var l=typeof e;if("undefined"!==l&&"boolean"!==l||(e=null),null===e||"string"===l||"number"===l||"object"===l&&e.$$typeof===O||"object"===l&&e.$$typeof===P)return n(a,e,""===t?"."+m(e,0):t),1;var o=0;if(t=""===t?".":t+":",Array.isArray(e))for(var u=0;u<e.length;u++){l=e[u];var i=t+m(l,u);o+=p(l,i,n,a)}else if(i=j&&e[j]||e["@@iterator"],"function"==typeof i)for(e=i.call(e),u=0;!(l=e.next()).done;)l=l.value,i=t+m(l,u++),o+=p(l,i,n,a);else"object"===l&&(n=""+e,r("31","[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return o}function m(e,t){return"object"==typeof e&&null!==e&&null!=e.key?f(e.key):t.toString(36)}function y(e,t){e.func.call(e.context,t,e.count++)}function h(e,t,n){var r=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?v(e,r,n,b.thatReturnsArgument):null!=e&&(c(e)&&(t=a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(A,"$&/")+"/")+n,e={$$typeof:N,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}),r.push(e))}function v(e,t,n,r,a){var l="";null!=n&&(l=(""+n).replace(A,"$&/")+"/"),t=s(t,l,r,a),null==e||p(e,"",h,t),d(t)}var g=n(29),E=n(41),b=n(24),_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};a.prototype.isReactComponent={},a.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e?r("85"):void 0,this.updater.enqueueSetState(this,e,t,"setState")},a.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},o.prototype=a.prototype;var w=l.prototype=new o;w.constructor=l,g(w,a.prototype),w.isPureReactComponent=!0;var S=u.prototype=new o;S.constructor=u,g(S,a.prototype),S.unstable_isAsyncReactComponent=!0,S.render=function(){return this.props.children};var k={current:null},x=Object.prototype.hasOwnProperty,N="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,R={key:!0,ref:!0,__self:!0,__source:!0},j="function"==typeof Symbol&&Symbol.iterator,O="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,P="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.portal")||60106,A=/\/+/g,$=[];"function"==typeof Symbol&&Symbol.for&&Symbol.for("react.fragment");var C={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return v(e,r,null,t,n),r},forEach:function(e,t,n){return null==e?e:(t=s(null,null,t,n),null==e||p(e,"",y,t),void d(t))},count:function(e){return null==e?0:p(e,"",b.thatReturnsNull,null)},toArray:function(e){var t=[];return v(e,t,null,b.thatReturnsArgument),t},only:function(e){return c(e)?void 0:r("143"),e}},Component:a,PureComponent:l,unstable_AsyncComponent:u,createElement:i,cloneElement:function(e,t,n){var r=g({},e.props),a=e.key,l=e.ref,o=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,o=k.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(i in t)x.call(t,i)&&!R.hasOwnProperty(i)&&(r[i]=void 0===t[i]&&void 0!==u?u[i]:t[i])}var i=arguments.length-2;if(1===i)r.children=n;else if(1<i){u=Array(i);for(var c=0;c<i;c++)u[c]=arguments[c+2];r.children=u}return{$$typeof:N,type:e.type,key:a,ref:l,props:r,_owner:o}},createFactory:function(e){var t=i.bind(null,e);return t.type=e,t},isValidElement:c,version:"16.1.1",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:k,assign:g}},M=Object.freeze({default:C}),T=M&&C||M;e.exports=T.default?T.default:T},1:function(e,t,n){"use strict";e.exports=n(73)},29:function(e,t){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function r(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==r.join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach(function(e){a[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(e){return!1}}var a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;e.exports=r()?Object.assign:function(e,t){for(var r,u,i=n(e),c=1;c<arguments.length;c++){r=Object(arguments[c]);for(var f in r)l.call(r,f)&&(i[f]=r[f]);if(a){u=a(r);for(var s=0;s<u.length;s++)o.call(r,u[s])&&(i[u[s]]=r[u[s]])}}return i}},241:function(e,t){},131:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),l=r(a);n(241);var o=function(e){return l.default.createElement("div",null,e.data.map(function(e,t){return console.log(e),t%2===0?l.default.createElement("section",{className:"features whitebackground",id:"features"},l.default.createElement("div",{className:"container"},l.default.createElement("div",{className:"row"},l.default.createElement("div",{className:"col-5"},l.default.createElement("div",{className:"content"},l.default.createElement("h1",{className:"display-4"},e.title),l.default.createElement("br",null),l.default.createElement("p",{className:"features-list"},e.description),l.default.createElement("p",null,e.android&&l.default.createElement("div",{style:{float:"left",paddingRight:"15px"}},l.default.createElement("a",{href:e.android},l.default.createElement("h4",null,"PlayStore"))),e.ios&&l.default.createElement("div",{style:{float:"left",paddingRight:"15px"}},l.default.createElement("a",{href:e.ios},l.default.createElement("h4",null,"AppStore"))),e.web&&l.default.createElement("div",{style:{float:"left",paddingRight:"15px"}},l.default.createElement("a",{href:e.web},l.default.createElement("h4",null,"Website"))),e.repository&&l.default.createElement("div",{style:{float:"left",paddingRight:"15px"}},l.default.createElement("a",{href:e.repository},l.default.createElement("h4",null,"GitHub")))))),l.default.createElement("div",{className:"col-7"},l.default.createElement("a",{href:e.imageLink},l.default.createElement("img",{style:{maxWidth:"100%",height:"auto"},src:e.image,className:"img-fluid float-right rounded",alt:"Responsive image"})))))):l.default.createElement("section",{className:"features whitebackground",id:"features"},l.default.createElement("div",{className:"container"},l.default.createElement("div",{className:"row"},l.default.createElement("div",{className:"col-7"},l.default.createElement("a",{href:e.imageLink},l.default.createElement("img",{style:{maxWidth:"100%",height:"auto"},src:e.image,className:"img-fluid float-left rounded",alt:"Responsive image"}))),l.default.createElement("div",{className:"col-5"},l.default.createElement("div",{className:"content"},l.default.createElement("h1",{className:"display-4"},e.title),l.default.createElement("br",null),l.default.createElement("p",{className:"features-list"},e.description),l.default.createElement("p",null,e.android&&l.default.createElement("div",{style:{float:"left",paddingRight:"15px"}},l.default.createElement("a",{href:e.android},l.default.createElement("h4",null,"PlayStore"))),e.ios&&l.default.createElement("div",{style:{float:"left",paddingRight:"15px"}},l.default.createElement("a",{href:e.ios},l.default.createElement("h4",null,"AppStore"))),e.web&&l.default.createElement("div",{style:{float:"left",paddingRight:"15px"}},l.default.createElement("a",{href:e.web},l.default.createElement("h4",null,"Website"))),e.repository&&l.default.createElement("div",{style:{float:"left",paddingRight:"15px"}},l.default.createElement("a",{href:e.repository},l.default.createElement("h4",null,"GitHub")))))))))}))};t.default=o,e.exports=t.default},244:function(e,t){},134:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1);r(a);n(244);var l=function(e){return null};t.default=l,e.exports=t.default},245:function(e,t){},136:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),l=r(a);n(245);var o=function(){return l.default.createElement("div",{className:"introduction"},l.default.createElement("section",{className:"features",id:"features"},l.default.createElement("div",{className:"container"},l.default.createElement("div",{className:"row"},l.default.createElement("div",{className:"col-12"},l.default.createElement("p",{className:"lead"},"Hello, my name is ",l.default.createElement("h1",{className:"name"},"Keevan Dance.")," I am a Software Developer living in Phoenix, AZ and currently working at CORE Construction developing various apps on multiple platforms using MeteorJS, React, and React-Native with various backends like SQLServer, and MongoDB. Take a look below at some of the projects I have built on my free time!"))))))};t.default=o,e.exports=t.default},138:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var a=n(1),l=r(a),o=n(131),u=r(o),i=n(134),c=r(i),f=n(136),s=r(f),d=function(e){return l.default.createElement("main",null,l.default.createElement(s.default,null),l.default.createElement(u.default,{data:e.data.allDataJson.edges[0].node.projects}),l.default.createElement(c.default,{data:e.data.allDataJson.edges[0].node.howTo}))};t.default=d;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-js-46547e4a677e8b32fdd4.js.map