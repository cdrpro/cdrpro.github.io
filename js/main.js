"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),App=function t(){_classCallCheck(this,t),this.utils=Utils,this.storage=new Storage,this.language=document.documentElement.lang||"ru",this.notificationManager=new NotificationManager},CustomNotification=function e(){var t=this;_classCallCheck(this,e),this.NOTIFICATIONS=[{key:"1450125252",active:!0,msg:{ru:"Обратите внимание!\nСайт находится в стадии разработки.",en:"Please note!\nThis site is under development."}}],this.OPTIONS={noClose:!0},APP&&setTimeout(function(){var e=!0,n=!1,i=void 0;try{for(var a,o=t.NOTIFICATIONS[Symbol.iterator]();!(e=(a=o.next()).done);e=!0){var r=a.value;if(r.active&&!APP.storage.read(r.key))return APP.notificationManager.show(r.msg[APP.language],t.OPTIONS),void APP.storage.save(r.key,!0)}}catch(s){n=!0,i=s}finally{try{!e&&o["return"]&&o["return"]()}finally{if(n)throw i}}},1e3)};document.addEventListener("DOMContentLoaded",function(){window.APP=new App,new CustomNotification},!1);var NotificationManager=function(){function t(){var e=this;_classCallCheck(this,t),this.DELAY=5e3,this.wrapper=document.createElement("div"),this.wrapper.className="notification__wrapper",document.body.appendChild(this.wrapper),this.wrapper.addEventListener("click",function(t){var n=t.target;n.classList.contains("js-noclose")&&(e.hide(n),t.preventDefault(),t.stopPropagation())})}return _createClass(t,[{key:"show",value:function(t){var e=this,n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],i=n.delay,a=n.type,o=n.noClose,r=document.createElement("div");r.className="notification  notification__hidden",r.textContent=t,a&&r.classList.add("notification--"+a),o===!0&&r.classList.add("js-noclose"),this.wrapper.appendChild(r),setTimeout(function(){r.classList.remove("notification__hidden"),o!==!0&&setTimeout(function(){return e.hide(r)},i||e.DELAY)},100)}},{key:"hide",value:function(t){var e=this;t.classList.add("notification__hidden"),setTimeout(function(){return e.wrapper.removeChild(t)},600)}}]),t}(),Storage=function(){function t(){_classCallCheck(this,t),this.PREFIX="cdrpro-v4-",this.supported=t.isSupported()}return _createClass(t,[{key:"read",value:function(t){return localStorage.getItem(this.PREFIX+t)}},{key:"save",value:function(t,e){localStorage.setItem(this.PREFIX+t,e)}}],[{key:"isSupported",value:function(){try{return"localStorage"in window&&null!==window.localStorage}catch(t){return!1}}}]),t}(),Utils=function n(){_classCallCheck(this,n)};