/*! For license information please see index.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports["react-musiio-player"]=t(require("react")):e["react-musiio-player"]=t(e.react)}(self,(function(e){return(()=>{var t={828:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});var r=n(645),i=n.n(r)()(!0);i.push([e.id,".SeekSlider__track--2d8FY {\n  border-radius: 6px;\n  height: 8px;\n  position: relative;\n}\n.SeekSlider__track--2d8FY input {\n  opacity: 0;\n}\n\n.SeekSlider__seekSlider--3BjBQ {\n  width: 100%;\n  height: 8px;\n  position: absolute;\n  z-index: 1;\n  border-radius: 6px;\n  cursor: pointer;\n}\n.SeekSlider__seekSlider--3BjBQ::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  opacity: 0;\n  width: 8px;\n  height: 8px;\n}\n.SeekSlider__seekSlider--3BjBQ::-moz-range-thumb {\n  opacity: 0;\n  width: 8px;\n  height: 8px;\n}\n\n.SeekSlider__seekSliderFill--EjUzC {\n  height: 8px;\n  border-radius: 6px;\n  position: absolute;\n  z-index: 0;\n  cursor: pointer;\n}\n","",{version:3,sources:["webpack://src/components/SeekSlider/index.module.css"],names:[],mappings:"AAAA;EACE,kBAAkB;EAClB,WAAW;EACX,kBAAkB;AACpB;AACA;EACE,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,WAAW;EACX,kBAAkB;EAClB,UAAU;EACV,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,wBAAwB;EACxB,gBAAgB;EAChB,UAAU;EACV,UAAU;EACV,WAAW;AACb;AACA;EACE,UAAU;EACV,UAAU;EACV,WAAW;AACb;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,kBAAkB;EAClB,UAAU;EACV,eAAe;AACjB",sourcesContent:[".track {\n  border-radius: 6px;\n  height: 8px;\n  position: relative;\n}\n.track input {\n  opacity: 0;\n}\n\n.seekSlider {\n  width: 100%;\n  height: 8px;\n  position: absolute;\n  z-index: 1;\n  border-radius: 6px;\n  cursor: pointer;\n}\n.seekSlider::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  opacity: 0;\n  width: 8px;\n  height: 8px;\n}\n.seekSlider::-moz-range-thumb {\n  opacity: 0;\n  width: 8px;\n  height: 8px;\n}\n\n.seekSliderFill {\n  height: 8px;\n  border-radius: 6px;\n  position: absolute;\n  z-index: 0;\n  cursor: pointer;\n}\n"],sourceRoot:""}]),i.locals={track:"SeekSlider__track--2d8FY",seekSlider:"SeekSlider__seekSlider--3BjBQ",seekSliderFill:"SeekSlider__seekSliderFill--EjUzC"};const o=i},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n,r,i,o=e[1]||"",a=e[3];if(!a)return o;if(t&&"function"==typeof btoa){var s=(n=a,r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),"/*# ".concat(i," */")),u=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[o].concat(u).concat([s]).join("\n")}return[o].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);r&&i[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},187:e=>{"use strict";var t,n="object"==typeof Reflect?Reflect:null,r=n&&"function"==typeof n.apply?n.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};t=n&&"function"==typeof n.ownKeys?n.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var i=Number.isNaN||function(e){return e!=e};function o(){o.init.call(this)}e.exports=o,e.exports.once=function(e,t){return new Promise((function(n,r){function i(n){e.removeListener(t,o),r(n)}function o(){"function"==typeof e.removeListener&&e.removeListener("error",i),n([].slice.call(arguments))}y(e,t,o,{once:!0}),"error"!==t&&function(e,t,n){"function"==typeof e.on&&y(e,"error",t,{once:!0})}(e,i)}))},o.EventEmitter=o,o.prototype._events=void 0,o.prototype._eventsCount=0,o.prototype._maxListeners=void 0;var a=10;function s(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function u(e){return void 0===e._maxListeners?o.defaultMaxListeners:e._maxListeners}function l(e,t,n,r){var i,o,a,l;if(s(n),void 0===(o=e._events)?(o=e._events=Object.create(null),e._eventsCount=0):(void 0!==o.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),o=e._events),a=o[t]),void 0===a)a=o[t]=n,++e._eventsCount;else if("function"==typeof a?a=o[t]=r?[n,a]:[a,n]:r?a.unshift(n):a.push(n),(i=u(e))>0&&a.length>i&&!a.warned){a.warned=!0;var c=new Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");c.name="MaxListenersExceededWarning",c.emitter=e,c.type=t,c.count=a.length,l=c,console&&console.warn&&console.warn(l)}return e}function c(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function d(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},i=c.bind(r);return i.listener=n,r.wrapFn=i,i}function p(e,t,n){var r=e._events;if(void 0===r)return[];var i=r[t];return void 0===i?[]:"function"==typeof i?n?[i.listener||i]:[i]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(i):f(i,i.length)}function h(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function f(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}function y(e,t,n,r){if("function"==typeof e.on)r.once?e.once(t,n):e.on(t,n);else{if("function"!=typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function i(o){r.once&&e.removeEventListener(t,i),n(o)}))}}Object.defineProperty(o,"defaultMaxListeners",{enumerable:!0,get:function(){return a},set:function(e){if("number"!=typeof e||e<0||i(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");a=e}}),o.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},o.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||i(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},o.prototype.getMaxListeners=function(){return u(this)},o.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var i="error"===e,o=this._events;if(void 0!==o)i=i&&void 0===o.error;else if(!i)return!1;if(i){var a;if(t.length>0&&(a=t[0]),a instanceof Error)throw a;var s=new Error("Unhandled error."+(a?" ("+a.message+")":""));throw s.context=a,s}var u=o[e];if(void 0===u)return!1;if("function"==typeof u)r(u,this,t);else{var l=u.length,c=f(u,l);for(n=0;n<l;++n)r(c[n],this,t)}return!0},o.prototype.addListener=function(e,t){return l(this,e,t,!1)},o.prototype.on=o.prototype.addListener,o.prototype.prependListener=function(e,t){return l(this,e,t,!0)},o.prototype.once=function(e,t){return s(t),this.on(e,d(this,e,t)),this},o.prototype.prependOnceListener=function(e,t){return s(t),this.prependListener(e,d(this,e,t)),this},o.prototype.removeListener=function(e,t){var n,r,i,o,a;if(s(t),void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(i=-1,o=n.length-1;o>=0;o--)if(n[o]===t||n[o].listener===t){a=n[o].listener,i=o;break}if(i<0)return this;0===i?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,i),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,a||t)}return this},o.prototype.off=o.prototype.removeListener,o.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var i,o=Object.keys(n);for(r=0;r<o.length;++r)"removeListener"!==(i=o[r])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},o.prototype.listeners=function(e){return p(this,e,!0)},o.prototype.rawListeners=function(e){return p(this,e,!1)},o.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):h.call(e,t)},o.prototype.listenerCount=h,o.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]}},998:function(e){e.exports=function(e,t){if(null==t&&(t={fuzzy:!0}),/youtu\.?be/.test(e)){var n,r=[/youtu\.be\/([^#\&\?]{11})/,/\?v=([^#\&\?]{11})/,/\&v=([^#\&\?]{11})/,/embed\/([^#\&\?]{11})/,/\/v\/([^#\&\?]{11})/];for(n=0;n<r.length;++n)if(r[n].test(e))return r[n].exec(e)[1];if(t.fuzzy){var i=e.split(/[\/\&\?=#\.\s]/g);for(n=0;n<i.length;++n)if(/^[^#\&\?]{11}$/.test(i[n]))return i[n]}}return null}},298:e=>{e.exports=function(e,t,n){return new Promise(((r,i)=>{const o=document.createElement("script");o.async=!0,o.src=e;for(const[e,n]of Object.entries(t||{}))o.setAttribute(e,n);o.onload=()=>{o.onerror=o.onload=null,r(o)},o.onerror=()=>{o.onerror=o.onload=null,i(new Error(`Failed to load ${e}`))},(n||document.head||document.getElementsByTagName("head")[0]).appendChild(o)}))}},284:(e,t,n)=>{var r=n(379),i=n(828);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.id,i,""]]);r(i,{insert:"head",singleton:!1}),e.exports=i.locals||{}},379:(e,t,n)=>{"use strict";var r,i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function a(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],i=0;i<e.length;i++){var s=e[i],u=t.base?s[0]+t.base:s[0],l=n[u]||0,c="".concat(u," ").concat(l);n[u]=l+1;var d=a(c),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==d?(o[d].references++,o[d].updater(p)):o.push({identifier:c,updater:y(p,t),references:1}),r.push(c)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,c=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function d(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=c(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function p(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,f=0;function y(e,t){var n,r,i;if(t.singleton){var o=f++;n=h||(h=u(t)),r=d.bind(null,n,o,!1),i=d.bind(null,n,o,!0)}else n=u(t),r=p.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=a(n[r]);o[i].references--}for(var u=s(e,t),l=0;l<n.length;l++){var c=a(n[l]);0===o[c].references&&(o[c].updater(),o.splice(c,1))}n=u}}}},573:(e,t,n)=>{const r=n(187).EventEmitter,i=n(298),o="https://www.youtube.com/iframe_api",a={"-1":"unstarted",0:"ended",1:"playing",2:"paused",3:"buffering",5:"cued"},s=[];e.exports=class extends r{constructor(e,t){super();const n="string"==typeof e?document.querySelector(e):e;n.id?this._id=n.id:this._id=n.id="ytplayer-"+Math.random().toString(16).slice(2,8),this._opts=Object.assign({width:640,height:360,autoplay:!1,captions:void 0,controls:!0,keyboard:!0,fullscreen:!0,annotations:!0,modestBranding:!1,related:!0,timeupdateFrequency:1e3,playsInline:!0,start:0},t),this.videoId=null,this.destroyed=!1,this._api=null,this._autoplay=!1,this._player=null,this._ready=!1,this._queue=[],this._interval=null,this._startInterval=this._startInterval.bind(this),this._stopInterval=this._stopInterval.bind(this),this.on("playing",this._startInterval),this.on("unstarted",this._stopInterval),this.on("ended",this._stopInterval),this.on("paused",this._stopInterval),this.on("buffering",this._stopInterval),this._loadIframeAPI(((e,t)=>{if(e)return this._destroy(new Error("YouTube Iframe API failed to load"));this._api=t,this.videoId&&this.load(this.videoId,this._autoplay,this._start)}))}load(e,t=!1,n=0){this.destroyed||(this.videoId=e,this._autoplay=t,this._start=n,this._api&&(this._player?this._ready&&(t?this._player.loadVideoById(e,n):this._player.cueVideoById(e,n)):this._createPlayer(e)))}play(){this._ready?this._player.playVideo():this._queueCommand("play")}pause(){this._ready?this._player.pauseVideo():this._queueCommand("pause")}stop(){this._ready?this._player.stopVideo():this._queueCommand("stop")}seek(e){this._ready?this._player.seekTo(e,!0):this._queueCommand("seek",e)}setVolume(e){this._ready?this._player.setVolume(e):this._queueCommand("setVolume",e)}getVolume(){return this._ready&&this._player.getVolume()||0}mute(){this._ready?this._player.mute():this._queueCommand("mute")}unMute(){this._ready?this._player.unMute():this._queueCommand("unMute")}isMuted(){return this._ready&&this._player.isMuted()||!1}setSize(e,t){this._ready?this._player.setSize(e,t):this._queueCommand("setSize",e,t)}setPlaybackRate(e){this._ready?this._player.setPlaybackRate(e):this._queueCommand("setPlaybackRate",e)}setPlaybackQuality(e){this._ready?this._player.setPlaybackQuality(e):this._queueCommand("setPlaybackQuality",e)}getPlaybackRate(){return this._ready&&this._player.getPlaybackRate()||1}getAvailablePlaybackRates(){return this._ready&&this._player.getAvailablePlaybackRates()||[1]}getDuration(){return this._ready&&this._player.getDuration()||0}getProgress(){return this._ready&&this._player.getVideoLoadedFraction()||0}getState(){return this._ready&&a[this._player.getPlayerState()]||"unstarted"}getCurrentTime(){return this._ready&&this._player.getCurrentTime()||0}destroy(){this._destroy()}_destroy(e){this.destroyed||(this.destroyed=!0,this._player&&(this._player.stopVideo&&this._player.stopVideo(),this._player.destroy()),this.videoId=null,this._id=null,this._opts=null,this._api=null,this._player=null,this._ready=!1,this._queue=null,this._stopInterval(),this.removeListener("playing",this._startInterval),this.removeListener("paused",this._stopInterval),this.removeListener("buffering",this._stopInterval),this.removeListener("unstarted",this._stopInterval),this.removeListener("ended",this._stopInterval),e&&this.emit("error",e))}_queueCommand(e,...t){this.destroyed||this._queue.push([e,t])}_flushQueue(){for(;this._queue.length;){const e=this._queue.shift();this[e[0]].apply(this,e[1])}}_loadIframeAPI(e){if(window.YT&&"function"==typeof window.YT.Player)return e(null,window.YT);s.push(e),Array.from(document.getElementsByTagName("script")).some((e=>e.src===o))||i(o).catch((e=>{for(;s.length;)s.shift()(e)}));const t=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=()=>{for("function"==typeof t&&t();s.length;)s.shift()(null,window.YT)}}_createPlayer(e){if(this.destroyed)return;const t=this._opts;this._player=new this._api.Player(this._id,{width:t.width,height:t.height,videoId:e,host:t.host,playerVars:{autoplay:t.autoplay?1:0,cc_load_policy:null!=t.captions?!1!==t.captions?1:0:void 0,hl:null!=t.captions&&!1!==t.captions?t.captions:void 0,cc_lang_pref:null!=t.captions&&!1!==t.captions?t.captions:void 0,controls:t.controls?2:0,disablekb:t.keyboard?0:1,enablejsapi:1,fs:t.fullscreen?1:0,iv_load_policy:t.annotations?1:3,modestbranding:t.modestBranding?1:0,origin:window.location.origin,playsinline:t.playsInline?1:0,rel:t.related?1:0,wmode:"opaque",start:t.start},events:{onReady:()=>this._onReady(e),onStateChange:e=>this._onStateChange(e),onPlaybackQualityChange:e=>this._onPlaybackQualityChange(e),onPlaybackRateChange:e=>this._onPlaybackRateChange(e),onError:e=>this._onError(e)}})}_onReady(e){this.destroyed||(this._ready=!0,this.load(this.videoId,this._autoplay,this._start),this._flushQueue())}_onStateChange(e){if(this.destroyed)return;const t=a[e.data];if(!t)throw new Error("Unrecognized state change: "+e);["paused","buffering","ended"].includes(t)&&this._onTimeupdate(),this.emit(t),["unstarted","playing","cued"].includes(t)&&this._onTimeupdate()}_onPlaybackQualityChange(e){this.destroyed||this.emit("playbackQualityChange",e.data)}_onPlaybackRateChange(e){this.destroyed||this.emit("playbackRateChange",e.data)}_onError(e){if(this.destroyed)return;const t=e.data;return 5!==t?101===t||150===t||100===t||2===t?this.emit("unplayable",this.videoId):void this._destroy(new Error("YouTube Player Error. Unknown error code: "+t)):void 0}_onTimeupdate(){this.emit("timeupdate",this.getCurrentTime())}_startInterval(){this._interval=setInterval((()=>this._onTimeupdate()),this._opts.timeupdateFrequency)}_stopInterval(){clearInterval(this._interval),this._interval=null}}},156:t=>{"use strict";t.exports=e}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={id:e,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{"use strict";r.r(i),r.d(i,{CurrentTime:()=>b,Duration:()=>E,PlayPauseButton:()=>C,PlayerProvider:()=>d,SeekSlider:()=>S,VideoFrame:()=>w,useMusicPlayer:()=>A,useMusicPlayerCurrentTime:()=>_,useMusicPlayerDuration:()=>v,useMusicPlayerUi:()=>m});var e,t=r(156),n=r.n(t),o=r(998),a=r.n(o),s=function(){return s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},s.apply(this,arguments)},u=n().createContext([{},{}]);function l(t,n){var r=n.type,i=n.payload;switch(r){case e.PLAYER_SET:return s(s({},t),{player:i});case e.CURRENT_TRACK_ID_SET:return s(s({},t),{currentTrackId:i});case e.CURRENT_TRACK_URL_SET:return s(s({},t),{currentTrackUrl:i});case e.IS_PLAYING_SET:return s(s({},t),{isPlaying:i});case e.CURRENT_TRACK_DATA_SET:return s(s({},t),{trackData:i});case e.AUTOPLAY_SET:return s(s({},t),{isAutoPlay:i});default:return t}}!function(e){e.PLAYER_SET="PLAYER_SET",e.CURRENT_TRACK_ID_SET="CURRENT_TRACK_ID_SET",e.CURRENT_TRACK_URL_SET="CURRENT_TRACK_URL_SET",e.IS_PLAYING_SET="IS_PLAYING_SET",e.CURRENT_TRACK_DATA_SET="CURRENT_TRACK_DATA_SET",e.AUTOPLAY_SET="AUTOPLAY_SET"}(e||(e={}));var c={player:new Audio,isPlaying:!1,currentTrackId:0,currentTrackUrl:"",trackData:{title:"",artist:""},isAutoPlay:!1},d=function(e){var r=e.children,i=(0,t.useReducer)(l,c),o=i[0],a=i[1];return n().createElement(u.Provider,{value:[o,a]},r)},p=new RegExp("(https?://)?(www.)?(youtube|youtu|youtube-nocookie).(com|be)/(watch?v=|embed/|v/|.+?v=)?([^&=%?]{11})"),h=r(573),f=r.n(h),y=function(){return y=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},y.apply(this,arguments)},v=function(){var e=(0,t.useContext)(u)[0];if(e.player){var n=(0,t.useState)(0),r=n[0],i=n[1];return(0,t.useEffect)((function(){if(e.currentTrackUrl)return e.currentTrackUrl.match(p)?(e.player.on("playing",(function(){i(e.player.getDuration())})),function(){i(0)}):(e.player.addEventListener("durationchange",o),function(){e.player.removeEventListener("durationchange",o)})}),[e.currentTrackUrl]),r}function o(){e.player.duration&&i(e.player.duration)}},_=function(){var e=(0,t.useContext)(u)[0];if(e.player){var n,r,i,o=(0,t.useState)(0),a=o[0],s=o[1];return n=function(){e.currentTrackUrl.match(p)||s(e.player.currentTime)},r=e.isPlaying?1e3:null,(i=(0,t.useRef)(null))&&((0,t.useEffect)((function(){i.current=n})),(0,t.useEffect)((function(){if(null!==r){var e=setInterval((function(){i.current()}),r);return function(){return clearInterval(e)}}}),[r])),(0,t.useEffect)((function(){return e.currentTrackUrl.match(p)&&e.player.on("timeupdate",(function(){s(e.player.getCurrentTime())})),function(){s(0)}}),[e.currentTrackUrl]),a}},m=function(){var e=(0,t.useContext)(u)[0];if(e.player)return{trackData:y({id:e.currentTrackId,url:e.currentTrackUrl},e.trackData),isPlaying:e.isPlaying,player:e.player}},A=function(){var e=(0,t.useContext)(u),n=e[0],r=e[1];if(n.player)return(0,t.useEffect)((function(){}),[n.player]),(0,t.useEffect)((function(){if(n.currentTrackUrl.match(p)){var e=a()(n.currentTrackUrl);n.player.load(e,n.isAutoPlay)}return n.isAutoPlay&&i(),function(){o()}}),[n.currentTrackUrl,n.isAutoPlay]),(0,t.useEffect)((function(){return n.isPlaying?n.player.play():n.player.pause(),function(){n.player.pause()}}),[n.isPlaying,n.currentTrackUrl]),{seekTo:function(e){n.player&&(n.currentTrackUrl.match(p)?n.player.seek(e):n.player.currentTime=e,i())},onTrackLoad:function(e){var t=e.id,i=e.url,o=e.title,a=e.artist,s=e.isAutoPlay,u=n.currentTrackUrl.match(p);u&&n.player.destroy?n.player.destroy():u||n.player.pause(),function(e){var t=e.dispatch,n=e.id,r=e.url,i=void 0===r?"":r,o=e.title,a=void 0===o?"":o,s=e.artist,u=void 0===s?"":s,l=e.isAutoPlay,c=void 0!==l&&l;i&&(i.match(p)?t({type:"PLAYER_SET",payload:new(f())("#player",{width:1,height:1})}):t({type:"PLAYER_SET",payload:new Audio(i)}),t({type:"CURRENT_TRACK_URL_SET",payload:i}),t({type:"CURRENT_TRACK_ID_SET",payload:n}),t({type:"CURRENT_TRACK_DATA_SET",payload:{title:a,artist:u}}),t({type:"AUTOPLAY_SET",payload:c}))}({dispatch:r,id:t,url:i,title:o,artist:a,isAutoPlay:s})},onTrackPlay:i,onTrackPause:o};function i(){!function(e){(0,e.dispatch)({type:"IS_PLAYING_SET",payload:!0})}({dispatch:r})}function o(){!function(e){(0,e.dispatch)({type:"IS_PLAYING_SET",payload:!1})}({dispatch:r})}},g=function(e){return[Math.floor(e/3600),Math.floor(e/60)%60,(e%60).toFixed(0)].map((function(e){return e<10?"0"+e:e})).filter((function(e,t){return"00"!==e||t>0})).join(":")};const b=function(e){var t=_();return n().createElement("div",null,g(t))},E=function(){var e=v();return n().createElement("div",null,g(e))},C=function(e){var t=e.playButtonClass,r=e.pauseButtonClass,i=m().isPlaying,o=A(),a=o.onTrackPlay,s=o.onTrackPause,u=i?r:t;return n().createElement("div",{className:u,onClick:function(){i?s():a()}})};var T=r(284),k=r.n(T);const S=function(e){var r=e.trackColor,i=void 0===r?"#ffe29e":r,o=e.fillColor,a=void 0===o?"#dc9300":o,s=v(),u=_(),l=A().seekTo,c=(0,t.useState)("0"),d=c[0],p=c[1],h=(0,t.useRef)(null);return(0,t.useEffect)((function(){var e=h.current?u/s*h.current.offsetWidth+"px":"0";p(e)}),[u,s,h.current]),n().createElement("div",null,n().createElement("div",{className:k().track,ref:h,style:{backgroundColor:i}},n().createElement("input",{min:"0",value:u,max:s,type:"range",className:k().seekSlider,onChange:function(e){return l(Number(e.target.value))}}),n().createElement("div",{className:k().seekSliderFill,style:{backgroundColor:a,width:d}})))},w=function(e){var r=e.width,i=e.height,o=m().player;return(0,t.useEffect)((function(){o.setSize&&o.setSize(r,i)}),[o]),n().createElement("div",{id:"player"})}})(),i})()}));