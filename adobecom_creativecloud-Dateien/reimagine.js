/*!
 * aceui-reimagine - v0.8.8 - 2015-01-29
 * ADOBE CONFIDENTIAL
 * ==================
 * Copyright 2015 Adobe Systems Incorporated
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */
/*!
 * jQuery JavaScript Library v2.0.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-07-03T13:30Z
 */
/*!
 * Sizzle CSS Selector Engine v1.9.4-pre
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-06-03
 */
/*!
 * CanJS - 2.1.4
 * http://canjs.us/
 * Copyright (c) 2014 Bitovi
 * Fri, 21 Nov 2014 22:25:48 GMT
 * Licensed MIT
 * Includes: CanJS default build
 * Download from: http://canjs.us/
 */
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
/*! Video.js v4.9.1 Copyright 2014 Brightcove, Inc. https://github.com/videojs/video.js/blob/master/LICENSE */
(function(){var requirejs,require,define;
(function(e){function h(e,t){return f.call(e,t)
}function p(e,t){var n,r,i,s,o,a,f,l,h,p,d,v=t&&t.split("/"),m=u.map,g=m&&m["*"]||{};
if(e&&e.charAt(0)==="."){if(t){v=v.slice(0,v.length-1),e=e.split("/"),o=e.length-1,u.nodeIdCompat&&c.test(e[o])&&(e[o]=e[o].replace(c,"")),e=v.concat(e);
for(h=0;
h<e.length;
h+=1){d=e[h];
if(d==="."){e.splice(h,1),h-=1
}else{if(d===".."){if(h===1&&(e[2]===".."||e[0]==="..")){break
}h>0&&(e.splice(h-1,2),h-=2)
}}}e=e.join("/")
}else{e.indexOf("./")===0&&(e=e.substring(2))
}}if((v||g)&&m){n=e.split("/");
for(h=n.length;
h>0;
h-=1){r=n.slice(0,h).join("/");
if(v){for(p=v.length;
p>0;
p-=1){i=m[v.slice(0,p).join("/")];
if(i){i=i[r];
if(i){s=i,a=h;
break
}}}}if(s){break
}!f&&g&&g[r]&&(f=g[r],l=h)
}!s&&f&&(s=f,a=l),s&&(n.splice(0,a,s),e=n.join("/"))
}return e
}function d(t,r){return function(){return n.apply(e,l.call(arguments,0).concat([t,r]))
}
}function v(e){return function(t){return p(t,e)
}
}function m(e){return function(t){s[e]=t
}
}function g(n){if(h(o,n)){var r=o[n];
delete o[n],a[n]=!0,t.apply(e,r)
}if(!h(s,n)&&!h(a,n)){throw new Error("No "+n)
}return s[n]
}function y(e){var t,n=e?e.indexOf("!"):-1;
return n>-1&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]
}function b(e){return function(){return u&&u.config&&u.config[e]||{}
}
}var t,n,r,i,s={},o={},u={},a={},f=Object.prototype.hasOwnProperty,l=[].slice,c=/\.js$/;
r=function(e,t){var n,r=y(e),i=r[0];
return e=r[1],i&&(i=p(i,t),n=g(i)),i?n&&n.normalize?e=n.normalize(e,v(t)):e=p(e,t):(e=p(e,t),r=y(e),i=r[0],e=r[1],i&&(n=g(i))),{f:i?i+"!"+e:e,n:e,pr:i,p:n}
},i={require:function(e){return d(e)
},exports:function(e){var t=s[e];
return typeof t!="undefined"?t:s[e]={}
},module:function(e){return{id:e,uri:"",exports:s[e],config:b(e)}
}},t=function(t,n,u,f){var l,c,p,v,y,b=[],w=typeof u,E;
f=f||t;
if(w==="undefined"||w==="function"){n=!n.length&&u.length?["require","exports","module"]:n;
for(y=0;
y<n.length;
y+=1){v=r(n[y],f),c=v.f;
if(c==="require"){b[y]=i.require(t)
}else{if(c==="exports"){b[y]=i.exports(t),E=!0
}else{if(c==="module"){l=b[y]=i.module(t)
}else{if(h(s,c)||h(o,c)||h(a,c)){b[y]=g(c)
}else{if(!v.p){throw new Error(t+" missing "+c)
}v.p.load(v.n,d(f,!0),m(c),{}),b[y]=s[c]
}}}}}p=u?u.apply(s[t],b):undefined;
if(t){if(l&&l.exports!==e&&l.exports!==s[t]){s[t]=l.exports
}else{if(p!==e||!E){s[t]=p
}}}}else{t&&(s[t]=u)
}},requirejs=require=n=function(s,o,a,f,l){if(typeof s=="string"){return i[s]?i[s](o):g(r(s,o).f)
}if(!s.splice){u=s,u.deps&&n(u.deps,u.callback);
if(!o){return
}o.splice?(s=o,o=a,a=null):s=e
}return o=o||function(){},typeof a=="function"&&(a=f,f=l),f?t(e,s,o,a):setTimeout(function(){t(e,s,o,a)
},4),n
},n.config=function(e){return n(e)
},requirejs._defined=s,define=function(e,t,n){t.splice||(n=t,t=[]),!h(s,e)&&!h(o,e)&&(o[e]=[e,t,n])
},define.amd={jQuery:!0}
})(),define("../../bower_components/almond/almond",function(){}),define("linseed",[],function(){function e(e){return"[data-".concat(e.replace(/\W?([A-Z])/g,"-$1").replace(/\W/g,"-").toLowerCase(),"]")
}function t(e,t,n){return t.isFunction(e)?e.hasOwnProperty("prototype")?new e(n):e(n):t.isPlainObject(e)?n.data(e):t.isArray(e)?t.append.apply(n,e):n
}return{load:function(n,r,i,s){s.isBuild?(r([n]),i()):r(["jquery",n],function(n,r){i(function(i){return{seed:function(){return[t(r,n,n(e(i)))]
},seedEach:function(){var s=[];
return n(e(i)).each(function(e,i){s.push(t(r,n,n(i)))
}),s
}}
})
})
}}
}),function(window,undefined){function isArraylike(e){var t=e.length,n=jQuery.type(e);
return jQuery.isWindow(e)?!1:e.nodeType===1&&t?!0:n==="array"||n!=="function"&&(t===0||typeof t=="number"&&t>0&&t-1 in e)
}function createOptions(e){var t=optionsCache[e]={};
return jQuery.each(e.match(core_rnotwhite)||[],function(e,n){t[n]=!0
}),t
}function Data(){Object.defineProperty(this.cache={},0,{get:function(){return{}
}}),this.expando=jQuery.expando+Math.random()
}function dataAttr(e,t,n){var r;
if(n===undefined&&e.nodeType===1){r="data-"+t.replace(rmultiDash,"-$1").toLowerCase(),n=e.getAttribute(r);
if(typeof n=="string"){try{n=n==="true"?!0:n==="false"?!1:n==="null"?null:+n+""===n?+n:rbrace.test(n)?JSON.parse(n):n
}catch(i){}data_user.set(e,t,n)
}else{n=undefined
}}return n
}function returnTrue(){return !0
}function returnFalse(){return !1
}function safeActiveElement(){try{return document.activeElement
}catch(e){}}function sibling(e,t){while((e=e[t])&&e.nodeType!==1){}return e
}function winnow(e,t,n){if(jQuery.isFunction(t)){return jQuery.grep(e,function(e,r){return !!t.call(e,r,e)!==n
})
}if(t.nodeType){return jQuery.grep(e,function(e){return e===t!==n
})
}if(typeof t=="string"){if(isSimple.test(t)){return jQuery.filter(t,e,n)
}t=jQuery.filter(t,e)
}return jQuery.grep(e,function(e){return core_indexOf.call(t,e)>=0!==n
})
}function manipulationTarget(e,t){return jQuery.nodeName(e,"table")&&jQuery.nodeName(t.nodeType===1?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e
}function disableScript(e){return e.type=(e.getAttribute("type")!==null)+"/"+e.type,e
}function restoreScript(e){var t=rscriptTypeMasked.exec(e.type);
return t?e.type=t[1]:e.removeAttribute("type"),e
}function setGlobalEval(e,t){var n=e.length,r=0;
for(;
r<n;
r++){data_priv.set(e[r],"globalEval",!t||data_priv.get(t[r],"globalEval"))
}}function cloneCopyEvent(e,t){var n,r,i,s,o,u,a,f;
if(t.nodeType!==1){return
}if(data_priv.hasData(e)){s=data_priv.access(e),o=data_priv.set(t,s),f=s.events;
if(f){delete o.handle,o.events={};
for(i in f){for(n=0,r=f[i].length;
n<r;
n++){jQuery.event.add(t,i,f[i][n])
}}}}data_user.hasData(e)&&(u=data_user.access(e),a=jQuery.extend({},u),data_user.set(t,a))
}function getAll(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];
return t===undefined||t&&jQuery.nodeName(e,t)?jQuery.merge([e],n):n
}function fixInput(e,t){var n=t.nodeName.toLowerCase();
if(n==="input"&&manipulation_rcheckableType.test(e.type)){t.checked=e.checked
}else{if(n==="input"||n==="textarea"){t.defaultValue=e.defaultValue
}}}function vendorPropName(e,t){if(t in e){return t
}var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=cssPrefixes.length;
while(i--){t=cssPrefixes[i]+n;
if(t in e){return t
}}return r
}function isHidden(e,t){return e=t||e,jQuery.css(e,"display")==="none"||!jQuery.contains(e.ownerDocument,e)
}function getStyles(e){return window.getComputedStyle(e,null)
}function showHide(e,t){var n,r,i,s=[],o=0,u=e.length;
for(;
o<u;
o++){r=e[o];
if(!r.style){continue
}s[o]=data_priv.get(r,"olddisplay"),n=r.style.display,t?(!s[o]&&n==="none"&&(r.style.display=""),r.style.display===""&&isHidden(r)&&(s[o]=data_priv.access(r,"olddisplay",css_defaultDisplay(r.nodeName)))):s[o]||(i=isHidden(r),(n&&n!=="none"||!i)&&data_priv.set(r,"olddisplay",i?n:jQuery.css(r,"display")))
}for(o=0;
o<u;
o++){r=e[o];
if(!r.style){continue
}if(!t||r.style.display==="none"||r.style.display===""){r.style.display=t?s[o]||"":"none"
}}return e
}function setPositiveNumber(e,t,n){var r=rnumsplit.exec(t);
return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t
}function augmentWidthOrHeight(e,t,n,r,i){var s=n===(r?"border":"content")?4:t==="width"?1:0,o=0;
for(;
s<4;
s+=2){n==="margin"&&(o+=jQuery.css(e,n+cssExpand[s],!0,i)),r?(n==="content"&&(o-=jQuery.css(e,"padding"+cssExpand[s],!0,i)),n!=="margin"&&(o-=jQuery.css(e,"border"+cssExpand[s]+"Width",!0,i))):(o+=jQuery.css(e,"padding"+cssExpand[s],!0,i),n!=="padding"&&(o+=jQuery.css(e,"border"+cssExpand[s]+"Width",!0,i)))
}return o
}function getWidthOrHeight(e,t,n){var r=!0,i=t==="width"?e.offsetWidth:e.offsetHeight,s=getStyles(e),o=jQuery.support.boxSizing&&jQuery.css(e,"boxSizing",!1,s)==="border-box";
if(i<=0||i==null){i=curCSS(e,t,s);
if(i<0||i==null){i=e.style[t]
}if(rnumnonpx.test(i)){return i
}r=o&&(jQuery.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0
}return i+augmentWidthOrHeight(e,t,n||(o?"border":"content"),r,s)+"px"
}function css_defaultDisplay(e){var t=document,n=elemdisplay[e];
if(!n){n=actualDisplay(e,t);
if(n==="none"||!n){iframe=(iframe||jQuery("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(iframe[0].contentWindow||iframe[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=actualDisplay(e,t),iframe.detach()
}elemdisplay[e]=n
}return n
}function actualDisplay(e,t){var n=jQuery(t.createElement(e)).appendTo(t.body),r=jQuery.css(n[0],"display");
return n.remove(),r
}function buildParams(e,t,n,r){var i;
if(jQuery.isArray(t)){jQuery.each(t,function(t,i){n||rbracket.test(e)?r(e,i):buildParams(e+"["+(typeof i=="object"?t:"")+"]",i,n,r)
})
}else{if(!n&&jQuery.type(t)==="object"){for(i in t){buildParams(e+"["+i+"]",t[i],n,r)
}}else{r(e,t)
}}}function addToPrefiltersOrTransports(e){return function(t,n){typeof t!="string"&&(n=t,t="*");
var r,i=0,s=t.toLowerCase().match(core_rnotwhite)||[];
if(jQuery.isFunction(n)){while(r=s[i++]){r[0]==="+"?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)
}}}
}function inspectPrefiltersOrTransports(e,t,n,r){function o(u){var a;
return i[u]=!0,jQuery.each(e[u]||[],function(e,u){var f=u(t,n,r);
if(typeof f=="string"&&!s&&!i[f]){return t.dataTypes.unshift(f),o(f),!1
}if(s){return !(a=f)
}}),a
}var i={},s=e===transports;
return o(t.dataTypes[0])||!i["*"]&&o("*")
}function ajaxExtend(e,t){var n,r,i=jQuery.ajaxSettings.flatOptions||{};
for(n in t){t[n]!==undefined&&((i[n]?e:r||(r={}))[n]=t[n])
}return r&&jQuery.extend(!0,e,r),e
}function ajaxHandleResponses(e,t,n){var r,i,s,o,u=e.contents,a=e.dataTypes;
while(a[0]==="*"){a.shift(),r===undefined&&(r=e.mimeType||t.getResponseHeader("Content-Type"))
}if(r){for(i in u){if(u[i]&&u[i].test(r)){a.unshift(i);
break
}}}if(a[0] in n){s=a[0]
}else{for(i in n){if(!a[0]||e.converters[i+" "+a[0]]){s=i;
break
}o||(o=i)
}s=s||o
}if(s){return s!==a[0]&&a.unshift(s),n[s]
}}function ajaxConvert(e,t,n,r){var i,s,o,u,a,f={},l=e.dataTypes.slice();
if(l[1]){for(o in e.converters){f[o.toLowerCase()]=e.converters[o]
}}s=l.shift();
while(s){e.responseFields[s]&&(n[e.responseFields[s]]=t),!a&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),a=s,s=l.shift();
if(s){if(s==="*"){s=a
}else{if(a!=="*"&&a!==s){o=f[a+" "+s]||f["* "+s];
if(!o){for(i in f){u=i.split(" ");
if(u[1]===s){o=f[a+" "+u[0]]||f["* "+u[0]];
if(o){o===!0?o=f[i]:f[i]!==!0&&(s=u[0],l.unshift(u[1]));
break
}}}}if(o!==!0){if(o&&e["throws"]){t=o(t)
}else{try{t=o(t)
}catch(c){return{state:"parsererror",error:o?c:"No conversion from "+a+" to "+s}
}}}}}}}return{state:"success",data:t}
}function createFxNow(){return setTimeout(function(){fxNow=undefined
}),fxNow=jQuery.now()
}function createTween(e,t,n){var r,i=(tweeners[t]||[]).concat(tweeners["*"]),s=0,o=i.length;
for(;
s<o;
s++){if(r=i[s].call(n,t,e)){return r
}}}function Animation(e,t,n){var r,i,s=0,o=animationPrefilters.length,u=jQuery.Deferred().always(function(){delete a.elem
}),a=function(){if(i){return !1
}var t=fxNow||createFxNow(),n=Math.max(0,f.startTime+f.duration-t),r=n/f.duration||0,s=1-r,o=0,a=f.tweens.length;
for(;
o<a;
o++){f.tweens[o].run(s)
}return u.notifyWith(e,[f,s,n]),s<1&&a?n:(u.resolveWith(e,[f]),!1)
},f=u.promise({elem:e,props:jQuery.extend({},t),opts:jQuery.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:fxNow||createFxNow(),duration:n.duration,tweens:[],createTween:function(t,n){var r=jQuery.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing);
return f.tweens.push(r),r
},stop:function(t){var n=0,r=t?f.tweens.length:0;
if(i){return this
}i=!0;
for(;
n<r;
n++){f.tweens[n].run(1)
}return t?u.resolveWith(e,[f,t]):u.rejectWith(e,[f,t]),this
}}),l=f.props;
propFilter(l,f.opts.specialEasing);
for(;
s<o;
s++){r=animationPrefilters[s].call(f,e,l,f.opts);
if(r){return r
}}return jQuery.map(l,createTween,f),jQuery.isFunction(f.opts.start)&&f.opts.start.call(e,f),jQuery.fx.timer(jQuery.extend(a,{elem:e,anim:f,queue:f.opts.queue})),f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)
}function propFilter(e,t){var n,r,i,s,o;
for(n in e){r=jQuery.camelCase(n),i=t[r],s=e[n],jQuery.isArray(s)&&(i=s[1],s=e[n]=s[0]),n!==r&&(e[r]=s,delete e[n]),o=jQuery.cssHooks[r];
if(o&&"expand" in o){s=o.expand(s),delete e[r];
for(n in s){n in e||(e[n]=s[n],t[n]=i)
}}else{t[r]=i
}}}function defaultPrefilter(e,t,n){var r,i,s,o,u,a,f=this,l={},c=e.style,h=e.nodeType&&isHidden(e),p=data_priv.get(e,"fxshow");
n.queue||(u=jQuery._queueHooks(e,"fx"),u.unqueued==null&&(u.unqueued=0,a=u.empty.fire,u.empty.fire=function(){u.unqueued||a()
}),u.unqueued++,f.always(function(){f.always(function(){u.unqueued--,jQuery.queue(e,"fx").length||u.empty.fire()
})
})),e.nodeType===1&&("height" in t||"width" in t)&&(n.overflow=[c.overflow,c.overflowX,c.overflowY],jQuery.css(e,"display")==="inline"&&jQuery.css(e,"float")==="none"&&(c.display="inline-block")),n.overflow&&(c.overflow="hidden",f.always(function(){c.overflow=n.overflow[0],c.overflowX=n.overflow[1],c.overflowY=n.overflow[2]
}));
for(r in t){i=t[r];
if(rfxtypes.exec(i)){delete t[r],s=s||i==="toggle";
if(i===(h?"hide":"show")){if(i!=="show"||!p||p[r]===undefined){continue
}h=!0
}l[r]=p&&p[r]||jQuery.style(e,r)
}}if(!jQuery.isEmptyObject(l)){p?"hidden" in p&&(h=p.hidden):p=data_priv.access(e,"fxshow",{}),s&&(p.hidden=!h),h?jQuery(e).show():f.done(function(){jQuery(e).hide()
}),f.done(function(){var t;
data_priv.remove(e,"fxshow");
for(t in l){jQuery.style(e,t,l[t])
}});
for(r in l){o=createTween(h?p[r]:0,r,f),r in p||(p[r]=o.start,h&&(o.end=o.start,o.start=r==="width"||r==="height"?1:0))
}}}function Tween(e,t,n,r,i){return new Tween.prototype.init(e,t,n,r,i)
}function genFx(e,t){var n,r={height:e},i=0;
t=t?1:0;
for(;
i<4;
i+=2-t){n=cssExpand[i],r["margin"+n]=r["padding"+n]=e
}return t&&(r.opacity=r.width=e),r
}function getWindow(e){return jQuery.isWindow(e)?e:e.nodeType===9&&e.defaultView
}var rootjQuery,readyList,core_strundefined=typeof undefined,location=window.location,document=window.document,docElem=document.documentElement,_jQuery=window.jQuery,_$=window.$,class2type={},core_deletedIds=[],core_version="2.0.3",core_concat=core_deletedIds.concat,core_push=core_deletedIds.push,core_slice=core_deletedIds.slice,core_indexOf=core_deletedIds.indexOf,core_toString=class2type.toString,core_hasOwn=class2type.hasOwnProperty,core_trim=core_version.trim,jQuery=function(e,t){return new jQuery.fn.init(e,t,rootjQuery)
},core_pnum=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,core_rnotwhite=/\S+/g,rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,rsingleTag=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,rmsPrefix=/^-ms-/,rdashAlpha=/-([\da-z])/gi,fcamelCase=function(e,t){return t.toUpperCase()
},completed=function(){document.removeEventListener("DOMContentLoaded",completed,!1),window.removeEventListener("load",completed,!1),jQuery.ready()
};
jQuery.fn=jQuery.prototype={jquery:core_version,constructor:jQuery,init:function(e,t,n){var r,i;
if(!e){return this
}if(typeof e=="string"){e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3?r=[null,e,null]:r=rquickExpr.exec(e);
if(r&&(r[1]||!t)){if(r[1]){t=t instanceof jQuery?t[0]:t,jQuery.merge(this,jQuery.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:document,!0));
if(rsingleTag.test(r[1])&&jQuery.isPlainObject(t)){for(r in t){jQuery.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r])
}}return this
}return i=document.getElementById(r[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=document,this.selector=e,this
}return !t||t.jquery?(t||n).find(e):this.constructor(t).find(e)
}return e.nodeType?(this.context=this[0]=e,this.length=1,this):jQuery.isFunction(e)?n.ready(e):(e.selector!==undefined&&(this.selector=e.selector,this.context=e.context),jQuery.makeArray(e,this))
},selector:"",length:0,toArray:function(){return core_slice.call(this)
},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]
},pushStack:function(e){var t=jQuery.merge(this.constructor(),e);
return t.prevObject=this,t.context=this.context,t
},each:function(e,t){return jQuery.each(this,e,t)
},ready:function(e){return jQuery.ready.promise().done(e),this
},slice:function(){return this.pushStack(core_slice.apply(this,arguments))
},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)
},eq:function(e){var t=this.length,n=+e+(e<0?t:0);
return this.pushStack(n>=0&&n<t?[this[n]]:[])
},map:function(e){return this.pushStack(jQuery.map(this,function(t,n){return e.call(t,n,t)
}))
},end:function(){return this.prevObject||this.constructor(null)
},push:core_push,sort:[].sort,splice:[].splice},jQuery.fn.init.prototype=jQuery.fn,jQuery.extend=jQuery.fn.extend=function(){var e,t,n,r,i,s,o=arguments[0]||{},u=1,a=arguments.length,f=!1;
typeof o=="boolean"&&(f=o,o=arguments[1]||{},u=2),typeof o!="object"&&!jQuery.isFunction(o)&&(o={}),a===u&&(o=this,--u);
for(;
u<a;
u++){if((e=arguments[u])!=null){for(t in e){n=o[t],r=e[t];
if(o===r){continue
}f&&r&&(jQuery.isPlainObject(r)||(i=jQuery.isArray(r)))?(i?(i=!1,s=n&&jQuery.isArray(n)?n:[]):s=n&&jQuery.isPlainObject(n)?n:{},o[t]=jQuery.extend(f,s,r)):r!==undefined&&(o[t]=r)
}}}return o
},jQuery.extend({expando:"jQuery"+(core_version+Math.random()).replace(/\D/g,""),noConflict:function(e){return window.$===jQuery&&(window.$=_$),e&&window.jQuery===jQuery&&(window.jQuery=_jQuery),jQuery
},isReady:!1,readyWait:1,holdReady:function(e){e?jQuery.readyWait++:jQuery.ready(!0)
},ready:function(e){if(e===!0?--jQuery.readyWait:jQuery.isReady){return
}jQuery.isReady=!0;
if(e!==!0&&--jQuery.readyWait>0){return
}readyList.resolveWith(document,[jQuery]),jQuery.fn.trigger&&jQuery(document).trigger("ready").off("ready")
},isFunction:function(e){return jQuery.type(e)==="function"
},isArray:Array.isArray,isWindow:function(e){return e!=null&&e===e.window
},isNumeric:function(e){return !isNaN(parseFloat(e))&&isFinite(e)
},type:function(e){return e==null?String(e):typeof e=="object"||typeof e=="function"?class2type[core_toString.call(e)]||"object":typeof e
},isPlainObject:function(e){if(jQuery.type(e)!=="object"||e.nodeType||jQuery.isWindow(e)){return !1
}try{if(e.constructor&&!core_hasOwn.call(e.constructor.prototype,"isPrototypeOf")){return !1
}}catch(t){return !1
}return !0
},isEmptyObject:function(e){var t;
for(t in e){return !1
}return !0
},error:function(e){throw new Error(e)
},parseHTML:function(e,t,n){if(!e||typeof e!="string"){return null
}typeof t=="boolean"&&(n=t,t=!1),t=t||document;
var r=rsingleTag.exec(e),i=!n&&[];
return r?[t.createElement(r[1])]:(r=jQuery.buildFragment([e],t,i),i&&jQuery(i).remove(),jQuery.merge([],r.childNodes))
},parseJSON:JSON.parse,parseXML:function(e){var t,n;
if(!e||typeof e!="string"){return null
}try{n=new DOMParser,t=n.parseFromString(e,"text/xml")
}catch(r){t=undefined
}return(!t||t.getElementsByTagName("parsererror").length)&&jQuery.error("Invalid XML: "+e),t
},noop:function(){},globalEval:function(code){var script,indirect=eval;
code=jQuery.trim(code),code&&(code.indexOf("use strict")===1?(script=document.createElement("script"),script.text=code,document.head.appendChild(script).parentNode.removeChild(script)):indirect(code))
},camelCase:function(e){return e.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase)
},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()
},each:function(e,t,n){var r,i=0,s=e.length,o=isArraylike(e);
if(n){if(o){for(;
i<s;
i++){r=t.apply(e[i],n);
if(r===!1){break
}}}else{for(i in e){r=t.apply(e[i],n);
if(r===!1){break
}}}}else{if(o){for(;
i<s;
i++){r=t.call(e[i],i,e[i]);
if(r===!1){break
}}}else{for(i in e){r=t.call(e[i],i,e[i]);
if(r===!1){break
}}}}return e
},trim:function(e){return e==null?"":core_trim.call(e)
},makeArray:function(e,t){var n=t||[];
return e!=null&&(isArraylike(Object(e))?jQuery.merge(n,typeof e=="string"?[e]:e):core_push.call(n,e)),n
},inArray:function(e,t,n){return t==null?-1:core_indexOf.call(t,e,n)
},merge:function(e,t){var n=t.length,r=e.length,i=0;
if(typeof n=="number"){for(;
i<n;
i++){e[r++]=t[i]
}}else{while(t[i]!==undefined){e[r++]=t[i++]
}}return e.length=r,e
},grep:function(e,t,n){var r,i=[],s=0,o=e.length;
n=!!n;
for(;
s<o;
s++){r=!!t(e[s],s),n!==r&&i.push(e[s])
}return i
},map:function(e,t,n){var r,i=0,s=e.length,o=isArraylike(e),u=[];
if(o){for(;
i<s;
i++){r=t(e[i],i,n),r!=null&&(u[u.length]=r)
}}else{for(i in e){r=t(e[i],i,n),r!=null&&(u[u.length]=r)
}}return core_concat.apply([],u)
},guid:1,proxy:function(e,t){var n,r,i;
return typeof t=="string"&&(n=e[t],t=e,e=n),jQuery.isFunction(e)?(r=core_slice.call(arguments,2),i=function(){return e.apply(t||this,r.concat(core_slice.call(arguments)))
},i.guid=e.guid=e.guid||jQuery.guid++,i):undefined
},access:function(e,t,n,r,i,s,o){var u=0,a=e.length,f=n==null;
if(jQuery.type(n)==="object"){i=!0;
for(u in n){jQuery.access(e,t,u,n[u],!0,s,o)
}}else{if(r!==undefined){i=!0,jQuery.isFunction(r)||(o=!0),f&&(o?(t.call(e,r),t=null):(f=t,t=function(e,t,n){return f.call(jQuery(e),n)
}));
if(t){for(;
u<a;
u++){t(e[u],n,o?r:r.call(e[u],u,t(e[u],n)))
}}}}return i?e:f?t.call(e):a?t(e[0],n):s
},now:Date.now,swap:function(e,t,n,r){var i,s,o={};
for(s in t){o[s]=e.style[s],e.style[s]=t[s]
}i=n.apply(e,r||[]);
for(s in t){e.style[s]=o[s]
}return i
}}),jQuery.ready.promise=function(e){return readyList||(readyList=jQuery.Deferred(),document.readyState==="complete"?setTimeout(jQuery.ready):(document.addEventListener("DOMContentLoaded",completed,!1),window.addEventListener("load",completed,!1))),readyList.promise(e)
},jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){class2type["[object "+t+"]"]=t.toLowerCase()
}),rootjQuery=jQuery(document),function(e,t){function st(e,t,n,i){var s,o,u,a,f,l,p,m,g,E;
(t?t.ownerDocument||t:w)!==h&&c(t),t=t||h,n=n||[];
if(!e||typeof e!="string"){return n
}if((a=t.nodeType)!==1&&a!==9){return[]
}if(d&&!i){if(s=Y.exec(e)){if(u=s[1]){if(a===9){o=t.getElementById(u);
if(!o||!o.parentNode){return n
}if(o.id===u){return n.push(o),n
}}else{if(t.ownerDocument&&(o=t.ownerDocument.getElementById(u))&&y(t,o)&&o.id===u){return n.push(o),n
}}}else{if(s[2]){return P.apply(n,t.getElementsByTagName(e)),n
}if((u=s[3])&&r.getElementsByClassName&&t.getElementsByClassName){return P.apply(n,t.getElementsByClassName(u)),n
}}}if(r.qsa&&(!v||!v.test(e))){m=p=b,g=t,E=a===9&&e;
if(a===1&&t.nodeName.toLowerCase()!=="object"){l=vt(e),(p=t.getAttribute("id"))?m=p.replace(tt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",f=l.length;
while(f--){l[f]=m+mt(l[f])
}g=V.test(e)&&t.parentNode||t,E=l.join(",")
}if(E){try{return P.apply(n,g.querySelectorAll(E)),n
}catch(S){}finally{p||t.removeAttribute("id")
}}}}return Tt(e.replace(z,"$1"),t,n,i)
}function ot(){function t(n,r){return e.push(n+=" ")>s.cacheLength&&delete t[e.shift()],t[n]=r
}var e=[];
return t
}function ut(e){return e[b]=!0,e
}function at(e){var t=h.createElement("div");
try{return !!e(t)
}catch(n){return !1
}finally{t.parentNode&&t.parentNode.removeChild(t),t=null
}}function ft(e,t){var n=e.split("|"),r=e.length;
while(r--){s.attrHandle[n[r]]=t
}}function lt(e,t){var n=t&&e,r=n&&e.nodeType===1&&t.nodeType===1&&(~t.sourceIndex||A)-(~e.sourceIndex||A);
if(r){return r
}if(n){while(n=n.nextSibling){if(n===t){return -1
}}}return e?1:-1
}function ct(e){return function(t){var n=t.nodeName.toLowerCase();
return n==="input"&&t.type===e
}
}function ht(e){return function(t){var n=t.nodeName.toLowerCase();
return(n==="input"||n==="button")&&t.type===e
}
}function pt(e){return ut(function(t){return t=+t,ut(function(n,r){var i,s=e([],n.length,t),o=s.length;
while(o--){n[i=s[o]]&&(n[i]=!(r[i]=n[i]))
}})
})
}function dt(){}function vt(e,t){var n,r,i,o,u,a,f,l=T[e+" "];
if(l){return t?0:l.slice(0)
}u=e,a=[],f=s.preFilter;
while(u){if(!n||(r=W.exec(u))){r&&(u=u.slice(r[0].length)||u),a.push(i=[])
}n=!1;
if(r=X.exec(u)){n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),u=u.slice(n.length)
}for(o in s.filter){(r=Q[o].exec(u))&&(!f[o]||(r=f[o](r)))&&(n=r.shift(),i.push({value:n,type:o,matches:r}),u=u.slice(n.length))
}if(!n){break
}}return t?u.length:u?st.error(e):T(e,a).slice(0)
}function mt(e){var t=0,n=e.length,r="";
for(;
t<n;
t++){r+=e[t].value
}return r
}function gt(e,t,n){var r=t.dir,s=n&&r==="parentNode",o=S++;
return t.first?function(t,n,i){while(t=t[r]){if(t.nodeType===1||s){return e(t,n,i)
}}}:function(t,n,u){var a,f,l,c=E+" "+o;
if(u){while(t=t[r]){if(t.nodeType===1||s){if(e(t,n,u)){return !0
}}}}else{while(t=t[r]){if(t.nodeType===1||s){l=t[b]||(t[b]={});
if((f=l[r])&&f[0]===c){if((a=f[1])===!0||a===i){return a===!0
}}else{f=l[r]=[c],f[1]=e(t,n,u)||i;
if(f[1]===!0){return !0
}}}}}}
}function yt(e){return e.length>1?function(t,n,r){var i=e.length;
while(i--){if(!e[i](t,n,r)){return !1
}}return !0
}:e[0]
}function bt(e,t,n,r,i){var s,o=[],u=0,a=e.length,f=t!=null;
for(;
u<a;
u++){if(s=e[u]){if(!n||n(s,r,i)){o.push(s),f&&t.push(u)
}}}return o
}function wt(e,t,n,r,i,s){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,s)),ut(function(s,o,u,a){var f,l,c,h=[],p=[],d=o.length,v=s||xt(t||"*",u.nodeType?[u]:u,[]),m=e&&(s||!t)?bt(v,h,e,u,a):v,g=n?i||(s?e:d||r)?[]:o:m;
n&&n(m,g,u,a);
if(r){f=bt(g,p),r(f,[],u,a),l=f.length;
while(l--){if(c=f[l]){g[p[l]]=!(m[p[l]]=c)
}}}if(s){if(i||e){if(i){f=[],l=g.length;
while(l--){(c=g[l])&&f.push(m[l]=c)
}i(null,g=[],f,a)
}l=g.length;
while(l--){(c=g[l])&&(f=i?B.call(s,c):h[l])>-1&&(s[f]=!(o[f]=c))
}}}else{g=bt(g===o?g.splice(d,g.length):g),i?i(null,o,g,a):P.apply(o,g)
}})
}function Et(e){var t,n,r,i=e.length,o=s.relative[e[0].type],u=o||s.relative[" "],a=o?1:0,l=gt(function(e){return e===t
},u,!0),c=gt(function(e){return B.call(t,e)>-1
},u,!0),h=[function(e,n,r){return !o&&(r||n!==f)||((t=n).nodeType?l(e,n,r):c(e,n,r))
}];
for(;
a<i;
a++){if(n=s.relative[e[a].type]){h=[gt(yt(h),n)]
}else{n=s.filter[e[a].type].apply(null,e[a].matches);
if(n[b]){r=++a;
for(;
r<i;
r++){if(s.relative[e[r].type]){break
}}return wt(a>1&&yt(h),a>1&&mt(e.slice(0,a-1).concat({value:e[a-2].type===" "?"*":""})).replace(z,"$1"),n,a<r&&Et(e.slice(a,r)),r<i&&Et(e=e.slice(r)),r<i&&mt(e))
}h.push(n)
}}return yt(h)
}function St(e,t){var n=0,r=t.length>0,o=e.length>0,u=function(u,a,l,c,p){var d,v,m,g=[],y=0,b="0",w=u&&[],S=p!=null,x=f,T=u||o&&s.find.TAG("*",p&&a.parentNode||a),N=E+=x==null?1:Math.random()||0.1;
S&&(f=a!==h&&a,i=n);
for(;
(d=T[b])!=null;
b++){if(o&&d){v=0;
while(m=e[v++]){if(m(d,a,l)){c.push(d);
break
}}S&&(E=N,i=++n)
}r&&((d=!m&&d)&&y--,u&&w.push(d))
}y+=b;
if(r&&b!==y){v=0;
while(m=t[v++]){m(w,g,a,l)
}if(u){if(y>0){while(b--){!w[b]&&!g[b]&&(g[b]=_.call(c))
}}g=bt(g)
}P.apply(c,g),S&&!u&&g.length>0&&y+t.length>1&&st.uniqueSort(c)
}return S&&(E=N,f=x),w
};
return r?ut(u):u
}function xt(e,t,n){var r=0,i=t.length;
for(;
r<i;
r++){st(e,t[r],n)
}return n
}function Tt(e,t,n,i){var o,u,f,l,c,h=vt(e);
if(!i&&h.length===1){u=h[0]=h[0].slice(0);
if(u.length>2&&(f=u[0]).type==="ID"&&r.getById&&t.nodeType===9&&d&&s.relative[u[1].type]){t=(s.find.ID(f.matches[0].replace(nt,rt),t)||[])[0];
if(!t){return n
}e=e.slice(u.shift().value.length)
}o=Q.needsContext.test(e)?0:u.length;
while(o--){f=u[o];
if(s.relative[l=f.type]){break
}if(c=s.find[l]){if(i=c(f.matches[0].replace(nt,rt),V.test(u[0].type)&&t.parentNode||t)){u.splice(o,1),e=i.length&&mt(u);
if(!e){return P.apply(n,i),n
}break
}}}}return a(e,h)(i,t,!d,n,V.test(e)),n
}var n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b="sizzle"+-(new Date),w=e.document,E=0,S=0,x=ot(),T=ot(),N=ot(),C=!1,k=function(e,t){return e===t?(C=!0,0):0
},L=typeof t,A=1<<31,O={}.hasOwnProperty,M=[],_=M.pop,D=M.push,P=M.push,H=M.slice,B=M.indexOf||function(e){var t=0,n=this.length;
for(;
t<n;
t++){if(this[t]===e){return t
}}return -1
},j="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",F="[\\x20\\t\\r\\n\\f]",I="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",q=I.replace("w","w#"),R="\\["+F+"*("+I+")"+F+"*(?:([*^$|!~]?=)"+F+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+q+")|)|)"+F+"*\\]",U=":("+I+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+R.replace(3,8)+")*)|.*)\\)|)",z=new RegExp("^"+F+"+|((?:^|[^\\\\])(?:\\\\.)*)"+F+"+$","g"),W=new RegExp("^"+F+"*,"+F+"*"),X=new RegExp("^"+F+"*([>+~]|"+F+")"+F+"*"),V=new RegExp(F+"*[+~]"),$=new RegExp("="+F+"*([^\\]'\"]*)"+F+"*\\]","g"),J=new RegExp(U),K=new RegExp("^"+q+"$"),Q={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I.replace("w","w*")+")"),ATTR:new RegExp("^"+R),PSEUDO:new RegExp("^"+U),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+F+"*(even|odd|(([+-]|)(\\d*)n|)"+F+"*(?:([+-]|)"+F+"*(\\d+)|))"+F+"*\\)|)","i"),bool:new RegExp("^(?:"+j+")$","i"),needsContext:new RegExp("^"+F+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+F+"*((?:-\\d)?\\d*)"+F+"*\\)|)(?=[^-]|$)","i")},G=/^[^{]+\{\s*\[native \w/,Y=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/^(?:input|select|textarea|button)$/i,et=/^h\d$/i,tt=/'|\\/g,nt=new RegExp("\\\\([\\da-f]{1,6}"+F+"?|("+F+")|.)","ig"),rt=function(e,t,n){var r="0x"+t-65536;
return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,r&1023|56320)
};
try{P.apply(M=H.call(w.childNodes),w.childNodes),M[w.childNodes.length].nodeType
}catch(it){P={apply:M.length?function(e,t){D.apply(e,H.call(t))
}:function(e,t){var n=e.length,r=0;
while(e[n++]=t[r++]){}e.length=n-1
}}
}u=st.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;
return t?t.nodeName!=="HTML":!1
},r=st.support={},c=st.setDocument=function(e){var t=e?e.ownerDocument||e:w,n=t.defaultView;
if(t===h||t.nodeType!==9||!t.documentElement){return h
}h=t,p=t.documentElement,d=!u(t),n&&n.attachEvent&&n!==n.top&&n.attachEvent("onbeforeunload",function(){c()
}),r.attributes=at(function(e){return e.className="i",!e.getAttribute("className")
}),r.getElementsByTagName=at(function(e){return e.appendChild(t.createComment("")),!e.getElementsByTagName("*").length
}),r.getElementsByClassName=at(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",e.getElementsByClassName("i").length===2
}),r.getById=at(function(e){return p.appendChild(e).id=b,!t.getElementsByName||!t.getElementsByName(b).length
}),r.getById?(s.find.ID=function(e,t){if(typeof t.getElementById!==L&&d){var n=t.getElementById(e);
return n&&n.parentNode?[n]:[]
}},s.filter.ID=function(e){var t=e.replace(nt,rt);
return function(e){return e.getAttribute("id")===t
}
}):(delete s.find.ID,s.filter.ID=function(e){var t=e.replace(nt,rt);
return function(e){var n=typeof e.getAttributeNode!==L&&e.getAttributeNode("id");
return n&&n.value===t
}
}),s.find.TAG=r.getElementsByTagName?function(e,t){if(typeof t.getElementsByTagName!==L){return t.getElementsByTagName(e)
}}:function(e,t){var n,r=[],i=0,s=t.getElementsByTagName(e);
if(e==="*"){while(n=s[i++]){n.nodeType===1&&r.push(n)
}return r
}return s
},s.find.CLASS=r.getElementsByClassName&&function(e,t){if(typeof t.getElementsByClassName!==L&&d){return t.getElementsByClassName(e)
}},m=[],v=[];
if(r.qsa=G.test(t.querySelectorAll)){at(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||v.push("\\["+F+"*(?:value|"+j+")"),e.querySelectorAll(":checked").length||v.push(":checked")
}),at(function(e){var n=t.createElement("input");
n.setAttribute("type","hidden"),e.appendChild(n).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&v.push("[*^$]="+F+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")
})
}return(r.matchesSelector=G.test(g=p.webkitMatchesSelector||p.mozMatchesSelector||p.oMatchesSelector||p.msMatchesSelector))&&at(function(e){r.disconnectedMatch=g.call(e,"div"),g.call(e,"[s!='']:x"),m.push("!=",U)
}),v=v.length&&new RegExp(v.join("|")),m=m.length&&new RegExp(m.join("|")),y=G.test(p.contains)||p.compareDocumentPosition?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;
return e===r||!!r&&r.nodeType===1&&!!(n.contains?n.contains(r):e.compareDocumentPosition&&e.compareDocumentPosition(r)&16)
}:function(e,t){if(t){while(t=t.parentNode){if(t===e){return !0
}}}return !1
},k=p.compareDocumentPosition?function(e,n){if(e===n){return C=!0,0
}var i=n.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(n);
if(i){return i&1||!r.sortDetached&&n.compareDocumentPosition(e)===i?e===t||y(w,e)?-1:n===t||y(w,n)?1:l?B.call(l,e)-B.call(l,n):0:i&4?-1:1
}return e.compareDocumentPosition?-1:1
}:function(e,n){var r,i=0,s=e.parentNode,o=n.parentNode,u=[e],a=[n];
if(e===n){return C=!0,0
}if(!s||!o){return e===t?-1:n===t?1:s?-1:o?1:l?B.call(l,e)-B.call(l,n):0
}if(s===o){return lt(e,n)
}r=e;
while(r=r.parentNode){u.unshift(r)
}r=n;
while(r=r.parentNode){a.unshift(r)
}while(u[i]===a[i]){i++
}return i?lt(u[i],a[i]):u[i]===w?-1:a[i]===w?1:0
},t
},st.matches=function(e,t){return st(e,null,null,t)
},st.matchesSelector=function(e,t){(e.ownerDocument||e)!==h&&c(e),t=t.replace($,"='$1']");
if(r.matchesSelector&&d&&(!m||!m.test(t))&&(!v||!v.test(t))){try{var n=g.call(e,t);
if(n||r.disconnectedMatch||e.document&&e.document.nodeType!==11){return n
}}catch(i){}}return st(t,h,null,[e]).length>0
},st.contains=function(e,t){return(e.ownerDocument||e)!==h&&c(e),y(e,t)
},st.attr=function(e,n){(e.ownerDocument||e)!==h&&c(e);
var i=s.attrHandle[n.toLowerCase()],o=i&&O.call(s.attrHandle,n.toLowerCase())?i(e,n,!d):t;
return o===t?r.attributes||!d?e.getAttribute(n):(o=e.getAttributeNode(n))&&o.specified?o.value:null:o
},st.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)
},st.uniqueSort=function(e){var t,n=[],i=0,s=0;
C=!r.detectDuplicates,l=!r.sortStable&&e.slice(0),e.sort(k);
if(C){while(t=e[s++]){t===e[s]&&(i=n.push(s))
}while(i--){e.splice(n[i],1)
}}return e
},o=st.getText=function(e){var t,n="",r=0,i=e.nodeType;
if(!i){for(;
t=e[r];
r++){n+=o(t)
}}else{if(i===1||i===9||i===11){if(typeof e.textContent=="string"){return e.textContent
}for(e=e.firstChild;
e;
e=e.nextSibling){n+=o(e)
}}else{if(i===3||i===4){return e.nodeValue
}}}return n
},s=st.selectors={cacheLength:50,createPseudo:ut,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(nt,rt),e[3]=(e[4]||e[5]||"").replace(nt,rt),e[2]==="~="&&(e[3]=" "+e[3]+" "),e.slice(0,4)
},CHILD:function(e){return e[1]=e[1].toLowerCase(),e[1].slice(0,3)==="nth"?(e[3]||st.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*(e[3]==="even"||e[3]==="odd")),e[5]=+(e[7]+e[8]||e[3]==="odd")):e[3]&&st.error(e[0]),e
},PSEUDO:function(e){var n,r=!e[5]&&e[2];
return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=vt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))
}},filter:{TAG:function(e){var t=e.replace(nt,rt).toLowerCase();
return e==="*"?function(){return !0
}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t
}
},CLASS:function(e){var t=x[e+" "];
return t||(t=new RegExp("(^|"+F+")"+e+"("+F+"|$)"))&&x(e,function(e){return t.test(typeof e.className=="string"&&e.className||typeof e.getAttribute!==L&&e.getAttribute("class")||"")
})
},ATTR:function(e,t,n){return function(r){var i=st.attr(r,e);
return i==null?t==="!=":t?(i+="",t==="="?i===n:t==="!="?i!==n:t==="^="?n&&i.indexOf(n)===0:t==="*="?n&&i.indexOf(n)>-1:t==="$="?n&&i.slice(-n.length)===n:t==="~="?(" "+i+" ").indexOf(n)>-1:t==="|="?i===n||i.slice(0,n.length+1)===n+"-":!1):!0
}
},CHILD:function(e,t,n,r,i){var s=e.slice(0,3)!=="nth",o=e.slice(-4)!=="last",u=t==="of-type";
return r===1&&i===0?function(e){return !!e.parentNode
}:function(t,n,a){var f,l,c,h,p,d,v=s!==o?"nextSibling":"previousSibling",m=t.parentNode,g=u&&t.nodeName.toLowerCase(),y=!a&&!u;
if(m){if(s){while(v){c=t;
while(c=c[v]){if(u?c.nodeName.toLowerCase()===g:c.nodeType===1){return !1
}}d=v=e==="only"&&!d&&"nextSibling"
}return !0
}d=[o?m.firstChild:m.lastChild];
if(o&&y){l=m[b]||(m[b]={}),f=l[e]||[],p=f[0]===E&&f[1],h=f[0]===E&&f[2],c=p&&m.childNodes[p];
while(c=++p&&c&&c[v]||(h=p=0)||d.pop()){if(c.nodeType===1&&++h&&c===t){l[e]=[E,p,h];
break
}}}else{if(y&&(f=(t[b]||(t[b]={}))[e])&&f[0]===E){h=f[1]
}else{while(c=++p&&c&&c[v]||(h=p=0)||d.pop()){if((u?c.nodeName.toLowerCase()===g:c.nodeType===1)&&++h){y&&((c[b]||(c[b]={}))[e]=[E,h]);
if(c===t){break
}}}}}return h-=i,h===r||h%r===0&&h/r>=0
}}
},PSEUDO:function(e,t){var n,r=s.pseudos[e]||s.setFilters[e.toLowerCase()]||st.error("unsupported pseudo: "+e);
return r[b]?r(t):r.length>1?(n=[e,e,"",t],s.setFilters.hasOwnProperty(e.toLowerCase())?ut(function(e,n){var i,s=r(e,t),o=s.length;
while(o--){i=B.call(e,s[o]),e[i]=!(n[i]=s[o])
}}):function(e){return r(e,0,n)
}):r
}},pseudos:{not:ut(function(e){var t=[],n=[],r=a(e.replace(z,"$1"));
return r[b]?ut(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;
while(u--){if(s=o[u]){e[u]=!(t[u]=s)
}}}):function(e,i,s){return t[0]=e,r(t,null,s,n),!n.pop()
}
}),has:ut(function(e){return function(t){return st(e,t).length>0
}
}),contains:ut(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1
}
}),lang:ut(function(e){return K.test(e||"")||st.error("unsupported lang: "+e),e=e.replace(nt,rt).toLowerCase(),function(t){var n;
do{if(n=d?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang")){return n=n.toLowerCase(),n===e||n.indexOf(e+"-")===0
}}while((t=t.parentNode)&&t.nodeType===1);
return !1
}
}),target:function(t){var n=e.location&&e.location.hash;
return n&&n.slice(1)===t.id
},root:function(e){return e===p
},focus:function(e){return e===h.activeElement&&(!h.hasFocus||h.hasFocus())&&!!(e.type||e.href||~e.tabIndex)
},enabled:function(e){return e.disabled===!1
},disabled:function(e){return e.disabled===!0
},checked:function(e){var t=e.nodeName.toLowerCase();
return t==="input"&&!!e.checked||t==="option"&&!!e.selected
},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0
},empty:function(e){for(e=e.firstChild;
e;
e=e.nextSibling){if(e.nodeName>"@"||e.nodeType===3||e.nodeType===4){return !1
}}return !0
},parent:function(e){return !s.pseudos.empty(e)
},header:function(e){return et.test(e.nodeName)
},input:function(e){return Z.test(e.nodeName)
},button:function(e){var t=e.nodeName.toLowerCase();
return t==="input"&&e.type==="button"||t==="button"
},text:function(e){var t;
return e.nodeName.toLowerCase()==="input"&&e.type==="text"&&((t=e.getAttribute("type"))==null||t.toLowerCase()===e.type)
},first:pt(function(){return[0]
}),last:pt(function(e,t){return[t-1]
}),eq:pt(function(e,t,n){return[n<0?n+t:n]
}),even:pt(function(e,t){var n=0;
for(;
n<t;
n+=2){e.push(n)
}return e
}),odd:pt(function(e,t){var n=1;
for(;
n<t;
n+=2){e.push(n)
}return e
}),lt:pt(function(e,t,n){var r=n<0?n+t:n;
for(;
--r>=0;
){e.push(r)
}return e
}),gt:pt(function(e,t,n){var r=n<0?n+t:n;
for(;
++r<t;
){e.push(r)
}return e
})}},s.pseudos.nth=s.pseudos.eq;
for(n in {radio:!0,checkbox:!0,file:!0,password:!0,image:!0}){s.pseudos[n]=ct(n)
}for(n in {submit:!0,reset:!0}){s.pseudos[n]=ht(n)
}dt.prototype=s.filters=s.pseudos,s.setFilters=new dt,a=st.compile=function(e,t){var n,r=[],i=[],s=N[e+" "];
if(!s){t||(t=vt(e)),n=t.length;
while(n--){s=Et(t[n]),s[b]?r.push(s):i.push(s)
}s=N(e,St(i,r))
}return s
},r.sortStable=b.split("").sort(k).join("")===b,r.detectDuplicates=C,c(),r.sortDetached=at(function(e){return e.compareDocumentPosition(h.createElement("div"))&1
}),at(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild.getAttribute("href")==="#"
})||ft("type|href|height|width",function(e,t,n){if(!n){return e.getAttribute(t,t.toLowerCase()==="type"?1:2)
}}),(!r.attributes||!at(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),e.firstChild.getAttribute("value")===""
}))&&ft("value",function(e,t,n){if(!n&&e.nodeName.toLowerCase()==="input"){return e.defaultValue
}}),at(function(e){return e.getAttribute("disabled")==null
})||ft(j,function(e,t,n){var r;
if(!n){return(r=e.getAttributeNode(t))&&r.specified?r.value:e[t]===!0?t.toLowerCase():null
}}),jQuery.find=st,jQuery.expr=st.selectors,jQuery.expr[":"]=jQuery.expr.pseudos,jQuery.unique=st.uniqueSort,jQuery.text=st.getText,jQuery.isXMLDoc=st.isXML,jQuery.contains=st.contains
}(window);
var optionsCache={};
jQuery.Callbacks=function(e){e=typeof e=="string"?optionsCache[e]||createOptions(e):jQuery.extend({},e);
var t,n,r,i,s,o,u=[],a=!e.once&&[],f=function(c){t=e.memory&&c,n=!0,o=i||0,i=0,s=u.length,r=!0;
for(;
u&&o<s;
o++){if(u[o].apply(c[0],c[1])===!1&&e.stopOnFalse){t=!1;
break
}}r=!1,u&&(a?a.length&&f(a.shift()):t?u=[]:l.disable())
},l={add:function(){if(u){var n=u.length;
(function o(t){jQuery.each(t,function(t,n){var r=jQuery.type(n);
r==="function"?(!e.unique||!l.has(n))&&u.push(n):n&&n.length&&r!=="string"&&o(n)
})
})(arguments),r?s=u.length:t&&(i=n,f(t))
}return this
},remove:function(){return u&&jQuery.each(arguments,function(e,t){var n;
while((n=jQuery.inArray(t,u,n))>-1){u.splice(n,1),r&&(n<=s&&s--,n<=o&&o--)
}}),this
},has:function(e){return e?jQuery.inArray(e,u)>-1:!!u&&!!u.length
},empty:function(){return u=[],s=0,this
},disable:function(){return u=a=t=undefined,this
},disabled:function(){return !u
},lock:function(){return a=undefined,t||l.disable(),this
},locked:function(){return !a
},fireWith:function(e,t){return u&&(!n||a)&&(t=t||[],t=[e,t.slice?t.slice():t],r?a.push(t):f(t)),this
},fire:function(){return l.fireWith(this,arguments),this
},fired:function(){return !!n
}};
return l
},jQuery.extend({Deferred:function(e){var t=[["resolve","done",jQuery.Callbacks("once memory"),"resolved"],["reject","fail",jQuery.Callbacks("once memory"),"rejected"],["notify","progress",jQuery.Callbacks("memory")]],n="pending",r={state:function(){return n
},always:function(){return i.done(arguments).fail(arguments),this
},then:function(){var e=arguments;
return jQuery.Deferred(function(n){jQuery.each(t,function(t,s){var o=s[0],u=jQuery.isFunction(e[t])&&e[t];
i[s[1]](function(){var e=u&&u.apply(this,arguments);
e&&jQuery.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[o+"With"](this===r?n.promise():this,u?[e]:arguments)
})
}),e=null
}).promise()
},promise:function(e){return e!=null?jQuery.extend(e,r):r
}},i={};
return r.pipe=r.then,jQuery.each(t,function(e,s){var o=s[2],u=s[3];
r[s[1]]=o.add,u&&o.add(function(){n=u
},t[e^1][2].disable,t[2][2].lock),i[s[0]]=function(){return i[s[0]+"With"](this===i?r:this,arguments),this
},i[s[0]+"With"]=o.fireWith
}),r.promise(i),e&&e.call(i,i),i
},when:function(e){var t=0,n=core_slice.call(arguments),r=n.length,i=r!==1||e&&jQuery.isFunction(e.promise)?r:0,s=i===1?e:jQuery.Deferred(),o=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?core_slice.call(arguments):r,n===u?s.notifyWith(t,n):--i||s.resolveWith(t,n)
}
},u,a,f;
if(r>1){u=new Array(r),a=new Array(r),f=new Array(r);
for(;
t<r;
t++){n[t]&&jQuery.isFunction(n[t].promise)?n[t].promise().done(o(t,f,n)).fail(s.reject).progress(o(t,a,u)):--i
}}return i||s.resolveWith(f,n),s.promise()
}}),jQuery.support=function(e){var t=document.createElement("input"),n=document.createDocumentFragment(),r=document.createElement("div"),i=document.createElement("select"),s=i.appendChild(document.createElement("option"));
return t.type?(t.type="checkbox",e.checkOn=t.value!=="",e.optSelected=s.selected,e.reliableMarginRight=!0,e.boxSizingReliable=!0,e.pixelPosition=!1,t.checked=!0,e.noCloneChecked=t.cloneNode(!0).checked,i.disabled=!0,e.optDisabled=!s.disabled,t=document.createElement("input"),t.value="t",t.type="radio",e.radioValue=t.value==="t",t.setAttribute("checked","t"),t.setAttribute("name","t"),n.appendChild(t),e.checkClone=n.cloneNode(!0).cloneNode(!0).lastChild.checked,e.focusinBubbles="onfocusin" in window,r.style.backgroundClip="content-box",r.cloneNode(!0).style.backgroundClip="",e.clearCloneStyle=r.style.backgroundClip==="content-box",jQuery(function(){var t,n,i="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",s=document.getElementsByTagName("body")[0];
if(!s){return
}t=document.createElement("div"),t.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",s.appendChild(t).appendChild(r),r.innerHTML="",r.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",jQuery.swap(s,s.style.zoom!=null?{zoom:1}:{},function(){e.boxSizing=r.offsetWidth===4
}),window.getComputedStyle&&(e.pixelPosition=(window.getComputedStyle(r,null)||{}).top!=="1%",e.boxSizingReliable=(window.getComputedStyle(r,null)||{width:"4px"}).width==="4px",n=r.appendChild(document.createElement("div")),n.style.cssText=r.style.cssText=i,n.style.marginRight=n.style.width="0",r.style.width="1px",e.reliableMarginRight=!parseFloat((window.getComputedStyle(n,null)||{}).marginRight)),s.removeChild(t)
}),e):e
}({});
var data_user,data_priv,rbrace=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,rmultiDash=/([A-Z])/g;
Data.uid=1,Data.accepts=function(e){return e.nodeType?e.nodeType===1||e.nodeType===9:!0
},Data.prototype={key:function(e){if(!Data.accepts(e)){return 0
}var t={},n=e[this.expando];
if(!n){n=Data.uid++;
try{t[this.expando]={value:n},Object.defineProperties(e,t)
}catch(r){t[this.expando]=n,jQuery.extend(e,t)
}}return this.cache[n]||(this.cache[n]={}),n
},set:function(e,t,n){var r,i=this.key(e),s=this.cache[i];
if(typeof t=="string"){s[t]=n
}else{if(jQuery.isEmptyObject(s)){jQuery.extend(this.cache[i],t)
}else{for(r in t){s[r]=t[r]
}}}return s
},get:function(e,t){var n=this.cache[this.key(e)];
return t===undefined?n:n[t]
},access:function(e,t,n){var r;
return t===undefined||t&&typeof t=="string"&&n===undefined?(r=this.get(e,t),r!==undefined?r:this.get(e,jQuery.camelCase(t))):(this.set(e,t,n),n!==undefined?n:t)
},remove:function(e,t){var n,r,i,s=this.key(e),o=this.cache[s];
if(t===undefined){this.cache[s]={}
}else{jQuery.isArray(t)?r=t.concat(t.map(jQuery.camelCase)):(i=jQuery.camelCase(t),t in o?r=[t,i]:(r=i,r=r in o?[r]:r.match(core_rnotwhite)||[])),n=r.length;
while(n--){delete o[r[n]]
}}},hasData:function(e){return !jQuery.isEmptyObject(this.cache[e[this.expando]]||{})
},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]
}},data_user=new Data,data_priv=new Data,jQuery.extend({acceptData:Data.accepts,hasData:function(e){return data_user.hasData(e)||data_priv.hasData(e)
},data:function(e,t,n){return data_user.access(e,t,n)
},removeData:function(e,t){data_user.remove(e,t)
},_data:function(e,t,n){return data_priv.access(e,t,n)
},_removeData:function(e,t){data_priv.remove(e,t)
}}),jQuery.fn.extend({data:function(e,t){var n,r,i=this[0],s=0,o=null;
if(e===undefined){if(this.length){o=data_user.get(i);
if(i.nodeType===1&&!data_priv.get(i,"hasDataAttrs")){n=i.attributes;
for(;
s<n.length;
s++){r=n[s].name,r.indexOf("data-")===0&&(r=jQuery.camelCase(r.slice(5)),dataAttr(i,r,o[r]))
}data_priv.set(i,"hasDataAttrs",!0)
}}return o
}return typeof e=="object"?this.each(function(){data_user.set(this,e)
}):jQuery.access(this,function(t){var n,r=jQuery.camelCase(e);
if(i&&t===undefined){n=data_user.get(i,e);
if(n!==undefined){return n
}n=data_user.get(i,r);
if(n!==undefined){return n
}n=dataAttr(i,r,undefined);
if(n!==undefined){return n
}return
}this.each(function(){var n=data_user.get(this,r);
data_user.set(this,r,t),e.indexOf("-")!==-1&&n!==undefined&&data_user.set(this,e,t)
})
},null,t,arguments.length>1,null,!0)
},removeData:function(e){return this.each(function(){data_user.remove(this,e)
})
}}),jQuery.extend({queue:function(e,t,n){var r;
if(e){return t=(t||"fx")+"queue",r=data_priv.get(e,t),n&&(!r||jQuery.isArray(n)?r=data_priv.access(e,t,jQuery.makeArray(n)):r.push(n)),r||[]
}},dequeue:function(e,t){t=t||"fx";
var n=jQuery.queue(e,t),r=n.length,i=n.shift(),s=jQuery._queueHooks(e,t),o=function(){jQuery.dequeue(e,t)
};
i==="inprogress"&&(i=n.shift(),r--),i&&(t==="fx"&&n.unshift("inprogress"),delete s.stop,i.call(e,o,s)),!r&&s&&s.empty.fire()
},_queueHooks:function(e,t){var n=t+"queueHooks";
return data_priv.get(e,n)||data_priv.access(e,n,{empty:jQuery.Callbacks("once memory").add(function(){data_priv.remove(e,[t+"queue",n])
})})
}}),jQuery.fn.extend({queue:function(e,t){var n=2;
return typeof e!="string"&&(t=e,e="fx",n--),arguments.length<n?jQuery.queue(this[0],e):t===undefined?this:this.each(function(){var n=jQuery.queue(this,e,t);
jQuery._queueHooks(this,e),e==="fx"&&n[0]!=="inprogress"&&jQuery.dequeue(this,e)
})
},dequeue:function(e){return this.each(function(){jQuery.dequeue(this,e)
})
},delay:function(e,t){return e=jQuery.fx?jQuery.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);
n.stop=function(){clearTimeout(r)
}
})
},clearQueue:function(e){return this.queue(e||"fx",[])
},promise:function(e,t){var n,r=1,i=jQuery.Deferred(),s=this,o=this.length,u=function(){--r||i.resolveWith(s,[s])
};
typeof e!="string"&&(t=e,e=undefined),e=e||"fx";
while(o--){n=data_priv.get(s[o],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(u))
}return u(),i.promise(t)
}});
var nodeHook,boolHook,rclass=/[\t\r\n\f]/g,rreturn=/\r/g,rfocusable=/^(?:input|select|textarea|button)$/i;
jQuery.fn.extend({attr:function(e,t){return jQuery.access(this,jQuery.attr,e,t,arguments.length>1)
},removeAttr:function(e){return this.each(function(){jQuery.removeAttr(this,e)
})
},prop:function(e,t){return jQuery.access(this,jQuery.prop,e,t,arguments.length>1)
},removeProp:function(e){return this.each(function(){delete this[jQuery.propFix[e]||e]
})
},addClass:function(e){var t,n,r,i,s,o=0,u=this.length,a=typeof e=="string"&&e;
if(jQuery.isFunction(e)){return this.each(function(t){jQuery(this).addClass(e.call(this,t,this.className))
})
}if(a){t=(e||"").match(core_rnotwhite)||[];
for(;
o<u;
o++){n=this[o],r=n.nodeType===1&&(n.className?(" "+n.className+" ").replace(rclass," "):" ");
if(r){s=0;
while(i=t[s++]){r.indexOf(" "+i+" ")<0&&(r+=i+" ")
}n.className=jQuery.trim(r)
}}}return this
},removeClass:function(e){var t,n,r,i,s,o=0,u=this.length,a=arguments.length===0||typeof e=="string"&&e;
if(jQuery.isFunction(e)){return this.each(function(t){jQuery(this).removeClass(e.call(this,t,this.className))
})
}if(a){t=(e||"").match(core_rnotwhite)||[];
for(;
o<u;
o++){n=this[o],r=n.nodeType===1&&(n.className?(" "+n.className+" ").replace(rclass," "):"");
if(r){s=0;
while(i=t[s++]){while(r.indexOf(" "+i+" ")>=0){r=r.replace(" "+i+" "," ")
}}n.className=e?jQuery.trim(r):""
}}}return this
},toggleClass:function(e,t){var n=typeof e;
return typeof t=="boolean"&&n==="string"?t?this.addClass(e):this.removeClass(e):jQuery.isFunction(e)?this.each(function(n){jQuery(this).toggleClass(e.call(this,n,this.className,t),t)
}):this.each(function(){if(n==="string"){var t,r=0,i=jQuery(this),s=e.match(core_rnotwhite)||[];
while(t=s[r++]){i.hasClass(t)?i.removeClass(t):i.addClass(t)
}}else{if(n===core_strundefined||n==="boolean"){this.className&&data_priv.set(this,"__className__",this.className),this.className=this.className||e===!1?"":data_priv.get(this,"__className__")||""
}}})
},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;
for(;
n<r;
n++){if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(rclass," ").indexOf(t)>=0){return !0
}}return !1
},val:function(e){var t,n,r,i=this[0];
if(!arguments.length){if(i){return t=jQuery.valHooks[i.type]||jQuery.valHooks[i.nodeName.toLowerCase()],t&&"get" in t&&(n=t.get(i,"value"))!==undefined?n:(n=i.value,typeof n=="string"?n.replace(rreturn,""):n==null?"":n)
}return
}return r=jQuery.isFunction(e),this.each(function(n){var i;
if(this.nodeType!==1){return
}r?i=e.call(this,n,jQuery(this).val()):i=e,i==null?i="":typeof i=="number"?i+="":jQuery.isArray(i)&&(i=jQuery.map(i,function(e){return e==null?"":e+""
})),t=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()];
if(!t||!("set" in t)||t.set(this,i,"value")===undefined){this.value=i
}})
}}),jQuery.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;
return !t||t.specified?e.value:e.text
}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,s=e.type==="select-one"||i<0,o=s?null:[],u=s?i+1:r.length,a=i<0?u:s?i:0;
for(;
a<u;
a++){n=r[a];
if((n.selected||a===i)&&(jQuery.support.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!jQuery.nodeName(n.parentNode,"optgroup"))){t=jQuery(n).val();
if(s){return t
}o.push(t)
}}return o
},set:function(e,t){var n,r,i=e.options,s=jQuery.makeArray(t),o=i.length;
while(o--){r=i[o];
if(r.selected=jQuery.inArray(jQuery(r).val(),s)>=0){n=!0
}}return n||(e.selectedIndex=-1),s
}}},attr:function(e,t,n){var r,i,s=e.nodeType;
if(!e||s===3||s===8||s===2){return
}if(typeof e.getAttribute===core_strundefined){return jQuery.prop(e,t,n)
}if(s!==1||!jQuery.isXMLDoc(e)){t=t.toLowerCase(),r=jQuery.attrHooks[t]||(jQuery.expr.match.bool.test(t)?boolHook:nodeHook)
}if(n===undefined){return r&&"get" in r&&(i=r.get(e,t))!==null?i:(i=jQuery.find.attr(e,t),i==null?undefined:i)
}if(n!==null){return r&&"set" in r&&(i=r.set(e,n,t))!==undefined?i:(e.setAttribute(t,n+""),n)
}jQuery.removeAttr(e,t)
},removeAttr:function(e,t){var n,r,i=0,s=t&&t.match(core_rnotwhite);
if(s&&e.nodeType===1){while(n=s[i++]){r=jQuery.propFix[n]||n,jQuery.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)
}}},attrHooks:{type:{set:function(e,t){if(!jQuery.support.radioValue&&t==="radio"&&jQuery.nodeName(e,"input")){var n=e.value;
return e.setAttribute("type",t),n&&(e.value=n),t
}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,s,o=e.nodeType;
if(!e||o===3||o===8||o===2){return
}return s=o!==1||!jQuery.isXMLDoc(e),s&&(t=jQuery.propFix[t]||t,i=jQuery.propHooks[t]),n!==undefined?i&&"set" in i&&(r=i.set(e,n,t))!==undefined?r:e[t]=n:i&&"get" in i&&(r=i.get(e,t))!==null?r:e[t]
},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||rfocusable.test(e.nodeName)||e.href?e.tabIndex:-1
}}}}),boolHook={set:function(e,t,n){return t===!1?jQuery.removeAttr(e,n):e.setAttribute(n,n),n
}},jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(e,t){var n=jQuery.expr.attrHandle[t]||jQuery.find.attr;
jQuery.expr.attrHandle[t]=function(e,t,r){var i=jQuery.expr.attrHandle[t],s=r?undefined:(jQuery.expr.attrHandle[t]=undefined)!=n(e,t,r)?t.toLowerCase():null;
return jQuery.expr.attrHandle[t]=i,s
}
}),jQuery.support.optSelected||(jQuery.propHooks.selected={get:function(e){var t=e.parentNode;
return t&&t.parentNode&&t.parentNode.selectedIndex,null
}}),jQuery.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){jQuery.propFix[this.toLowerCase()]=this
}),jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]={set:function(e,t){if(jQuery.isArray(t)){return e.checked=jQuery.inArray(jQuery(e).val(),t)>=0
}}},jQuery.support.checkOn||(jQuery.valHooks[this].get=function(e){return e.getAttribute("value")===null?"on":e.value
})
});
var rkeyEvent=/^key/,rmouseEvent=/^(?:mouse|contextmenu)|click/,rfocusMorph=/^(?:focusinfocus|focusoutblur)$/,rtypenamespace=/^([^.]*)(?:\.(.+)|)$/;
jQuery.event={global:{},add:function(e,t,n,r,i){var s,o,u,a,f,l,c,h,p,d,v,m=data_priv.get(e);
if(!m){return
}n.handler&&(s=n,n=s.handler,i=s.selector),n.guid||(n.guid=jQuery.guid++),(a=m.events)||(a=m.events={}),(o=m.handle)||(o=m.handle=function(e){return typeof jQuery===core_strundefined||!!e&&jQuery.event.triggered===e.type?undefined:jQuery.event.dispatch.apply(o.elem,arguments)
},o.elem=e),t=(t||"").match(core_rnotwhite)||[""],f=t.length;
while(f--){u=rtypenamespace.exec(t[f])||[],p=v=u[1],d=(u[2]||"").split(".").sort();
if(!p){continue
}c=jQuery.event.special[p]||{},p=(i?c.delegateType:c.bindType)||p,c=jQuery.event.special[p]||{},l=jQuery.extend({type:p,origType:v,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&jQuery.expr.match.needsContext.test(i),namespace:d.join(".")},s),(h=a[p])||(h=a[p]=[],h.delegateCount=0,(!c.setup||c.setup.call(e,r,d,o)===!1)&&e.addEventListener&&e.addEventListener(p,o,!1)),c.add&&(c.add.call(e,l),l.handler.guid||(l.handler.guid=n.guid)),i?h.splice(h.delegateCount++,0,l):h.push(l),jQuery.event.global[p]=!0
}e=null
},remove:function(e,t,n,r,i){var s,o,u,a,f,l,c,h,p,d,v,m=data_priv.hasData(e)&&data_priv.get(e);
if(!m||!(a=m.events)){return
}t=(t||"").match(core_rnotwhite)||[""],f=t.length;
while(f--){u=rtypenamespace.exec(t[f])||[],p=v=u[1],d=(u[2]||"").split(".").sort();
if(!p){for(p in a){jQuery.event.remove(e,p+t[f],n,r,!0)
}continue
}c=jQuery.event.special[p]||{},p=(r?c.delegateType:c.bindType)||p,h=a[p]||[],u=u[2]&&new RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),o=s=h.length;
while(s--){l=h[s],(i||v===l.origType)&&(!n||n.guid===l.guid)&&(!u||u.test(l.namespace))&&(!r||r===l.selector||r==="**"&&l.selector)&&(h.splice(s,1),l.selector&&h.delegateCount--,c.remove&&c.remove.call(e,l))
}o&&!h.length&&((!c.teardown||c.teardown.call(e,d,m.handle)===!1)&&jQuery.removeEvent(e,p,m.handle),delete a[p])
}jQuery.isEmptyObject(a)&&(delete m.handle,data_priv.remove(e,"events"))
},trigger:function(e,t,n,r){var i,s,o,u,a,f,l,c=[n||document],h=core_hasOwn.call(e,"type")?e.type:e,p=core_hasOwn.call(e,"namespace")?e.namespace.split("."):[];
s=o=n=n||document;
if(n.nodeType===3||n.nodeType===8){return
}if(rfocusMorph.test(h+jQuery.event.triggered)){return
}h.indexOf(".")>=0&&(p=h.split("."),h=p.shift(),p.sort()),a=h.indexOf(":")<0&&"on"+h,e=e[jQuery.expando]?e:new jQuery.Event(h,typeof e=="object"&&e),e.isTrigger=r?2:3,e.namespace=p.join("."),e.namespace_re=e.namespace?new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=undefined,e.target||(e.target=n),t=t==null?[e]:jQuery.makeArray(t,[e]),l=jQuery.event.special[h]||{};
if(!r&&l.trigger&&l.trigger.apply(n,t)===!1){return
}if(!r&&!l.noBubble&&!jQuery.isWindow(n)){u=l.delegateType||h,rfocusMorph.test(u+h)||(s=s.parentNode);
for(;
s;
s=s.parentNode){c.push(s),o=s
}o===(n.ownerDocument||document)&&c.push(o.defaultView||o.parentWindow||window)
}i=0;
while((s=c[i++])&&!e.isPropagationStopped()){e.type=i>1?u:l.bindType||h,f=(data_priv.get(s,"events")||{})[e.type]&&data_priv.get(s,"handle"),f&&f.apply(s,t),f=a&&s[a],f&&jQuery.acceptData(s)&&f.apply&&f.apply(s,t)===!1&&e.preventDefault()
}return e.type=h,!r&&!e.isDefaultPrevented()&&(!l._default||l._default.apply(c.pop(),t)===!1)&&jQuery.acceptData(n)&&a&&jQuery.isFunction(n[h])&&!jQuery.isWindow(n)&&(o=n[a],o&&(n[a]=null),jQuery.event.triggered=h,n[h](),jQuery.event.triggered=undefined,o&&(n[a]=o)),e.result
},dispatch:function(e){e=jQuery.event.fix(e);
var t,n,r,i,s,o=[],u=core_slice.call(arguments),a=(data_priv.get(this,"events")||{})[e.type]||[],f=jQuery.event.special[e.type]||{};
u[0]=e,e.delegateTarget=this;
if(f.preDispatch&&f.preDispatch.call(this,e)===!1){return
}o=jQuery.event.handlers.call(this,e,a),t=0;
while((i=o[t++])&&!e.isPropagationStopped()){e.currentTarget=i.elem,n=0;
while((s=i.handlers[n++])&&!e.isImmediatePropagationStopped()){if(!e.namespace_re||e.namespace_re.test(s.namespace)){e.handleObj=s,e.data=s.data,r=((jQuery.event.special[s.origType]||{}).handle||s.handler).apply(i.elem,u),r!==undefined&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation())
}}}return f.postDispatch&&f.postDispatch.call(this,e),e.result
},handlers:function(e,t){var n,r,i,s,o=[],u=t.delegateCount,a=e.target;
if(u&&a.nodeType&&(!e.button||e.type!=="click")){for(;
a!==this;
a=a.parentNode||this){if(a.disabled!==!0||e.type!=="click"){r=[];
for(n=0;
n<u;
n++){s=t[n],i=s.selector+" ",r[i]===undefined&&(r[i]=s.needsContext?jQuery(i,this).index(a)>=0:jQuery.find(i,this,null,[a]).length),r[i]&&r.push(s)
}r.length&&o.push({elem:a,handlers:r})
}}}return u<t.length&&o.push({elem:this,handlers:t.slice(u)}),o
},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e
}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,s=t.button;
return e.pageX==null&&t.clientX!=null&&(n=e.target.ownerDocument||document,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),!e.which&&s!==undefined&&(e.which=s&1?1:s&2?3:s&4?2:0),e
}},fix:function(e){if(e[jQuery.expando]){return e
}var t,n,r,i=e.type,s=e,o=this.fixHooks[i];
o||(this.fixHooks[i]=o=rmouseEvent.test(i)?this.mouseHooks:rkeyEvent.test(i)?this.keyHooks:{}),r=o.props?this.props.concat(o.props):this.props,e=new jQuery.Event(s),t=r.length;
while(t--){n=r[t],e[n]=s[n]
}return e.target||(e.target=document),e.target.nodeType===3&&(e.target=e.target.parentNode),o.filter?o.filter(e,s):e
},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==safeActiveElement()&&this.focus){return this.focus(),!1
}},delegateType:"focusin"},blur:{trigger:function(){if(this===safeActiveElement()&&this.blur){return this.blur(),!1
}},delegateType:"focusout"},click:{trigger:function(){if(this.type==="checkbox"&&this.click&&jQuery.nodeName(this,"input")){return this.click(),!1
}},_default:function(e){return jQuery.nodeName(e.target,"a")
}},beforeunload:{postDispatch:function(e){e.result!==undefined&&(e.originalEvent.returnValue=e.result)
}}},simulate:function(e,t,n,r){var i=jQuery.extend(new jQuery.Event,n,{type:e,isSimulated:!0,originalEvent:{}});
r?jQuery.event.trigger(i,null,t):jQuery.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()
}},jQuery.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)
},jQuery.Event=function(e,t){if(!(this instanceof jQuery.Event)){return new jQuery.Event(e,t)
}e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.getPreventDefault&&e.getPreventDefault()?returnTrue:returnFalse):this.type=e,t&&jQuery.extend(this,t),this.timeStamp=e&&e.timeStamp||jQuery.now(),this[jQuery.expando]=!0
},jQuery.Event.prototype={isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse,preventDefault:function(){var e=this.originalEvent;
this.isDefaultPrevented=returnTrue,e&&e.preventDefault&&e.preventDefault()
},stopPropagation:function(){var e=this.originalEvent;
this.isPropagationStopped=returnTrue,e&&e.stopPropagation&&e.stopPropagation()
},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=returnTrue,this.stopPropagation()
}},jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){jQuery.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj;
if(!i||i!==r&&!jQuery.contains(r,i)){e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t
}return n
}}
}),jQuery.support.focusinBubbles||jQuery.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){jQuery.event.simulate(t,e.target,jQuery.event.fix(e),!0)
};
jQuery.event.special[t]={setup:function(){n++===0&&document.addEventListener(e,r,!0)
},teardown:function(){--n===0&&document.removeEventListener(e,r,!0)
}}
}),jQuery.fn.extend({on:function(e,t,n,r,i){var s,o;
if(typeof e=="object"){typeof t!="string"&&(n=n||t,t=undefined);
for(o in e){this.on(o,t,n,e[o],i)
}return this
}n==null&&r==null?(r=t,n=t=undefined):r==null&&(typeof t=="string"?(r=n,n=undefined):(r=n,n=t,t=undefined));
if(r===!1){r=returnFalse
}else{if(!r){return this
}}return i===1&&(s=r,r=function(e){return jQuery().off(e),s.apply(this,arguments)
},r.guid=s.guid||(s.guid=jQuery.guid++)),this.each(function(){jQuery.event.add(this,e,r,n,t)
})
},one:function(e,t,n,r){return this.on(e,t,n,r,1)
},off:function(e,t,n){var r,i;
if(e&&e.preventDefault&&e.handleObj){return r=e.handleObj,jQuery(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this
}if(typeof e=="object"){for(i in e){this.off(i,t,e[i])
}return this
}if(t===!1||typeof t=="function"){n=t,t=undefined
}return n===!1&&(n=returnFalse),this.each(function(){jQuery.event.remove(this,e,n,t)
})
},trigger:function(e,t){return this.each(function(){jQuery.event.trigger(e,t,this)
})
},triggerHandler:function(e,t){var n=this[0];
if(n){return jQuery.event.trigger(e,t,n,!0)
}}});
var isSimple=/^.[^:#\[\.,]*$/,rparentsprev=/^(?:parents|prev(?:Until|All))/,rneedsContext=jQuery.expr.match.needsContext,guaranteedUnique={children:!0,contents:!0,next:!0,prev:!0};
jQuery.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;
if(typeof e!="string"){return this.pushStack(jQuery(e).filter(function(){for(t=0;
t<i;
t++){if(jQuery.contains(r[t],this)){return !0
}}}))
}for(t=0;
t<i;
t++){jQuery.find(e,r[t],n)
}return n=this.pushStack(i>1?jQuery.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n
},has:function(e){var t=jQuery(e,this),n=t.length;
return this.filter(function(){var e=0;
for(;
e<n;
e++){if(jQuery.contains(this,t[e])){return !0
}}})
},not:function(e){return this.pushStack(winnow(this,e||[],!0))
},filter:function(e){return this.pushStack(winnow(this,e||[],!1))
},is:function(e){return !!winnow(this,typeof e=="string"&&rneedsContext.test(e)?jQuery(e):e||[],!1).length
},closest:function(e,t){var n,r=0,i=this.length,s=[],o=rneedsContext.test(e)||typeof e!="string"?jQuery(e,t||this.context):0;
for(;
r<i;
r++){for(n=this[r];
n&&n!==t;
n=n.parentNode){if(n.nodeType<11&&(o?o.index(n)>-1:n.nodeType===1&&jQuery.find.matchesSelector(n,e))){n=s.push(n);
break
}}}return this.pushStack(s.length>1?jQuery.unique(s):s)
},index:function(e){return e?typeof e=="string"?core_indexOf.call(jQuery(e),this[0]):core_indexOf.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1
},add:function(e,t){var n=typeof e=="string"?jQuery(e,t):jQuery.makeArray(e&&e.nodeType?[e]:e),r=jQuery.merge(this.get(),n);
return this.pushStack(jQuery.unique(r))
},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))
}}),jQuery.each({parent:function(e){var t=e.parentNode;
return t&&t.nodeType!==11?t:null
},parents:function(e){return jQuery.dir(e,"parentNode")
},parentsUntil:function(e,t,n){return jQuery.dir(e,"parentNode",n)
},next:function(e){return sibling(e,"nextSibling")
},prev:function(e){return sibling(e,"previousSibling")
},nextAll:function(e){return jQuery.dir(e,"nextSibling")
},prevAll:function(e){return jQuery.dir(e,"previousSibling")
},nextUntil:function(e,t,n){return jQuery.dir(e,"nextSibling",n)
},prevUntil:function(e,t,n){return jQuery.dir(e,"previousSibling",n)
},siblings:function(e){return jQuery.sibling((e.parentNode||{}).firstChild,e)
},children:function(e){return jQuery.sibling(e.firstChild)
},contents:function(e){return e.contentDocument||jQuery.merge([],e.childNodes)
}},function(e,t){jQuery.fn[e]=function(n,r){var i=jQuery.map(this,t,n);
return e.slice(-5)!=="Until"&&(r=n),r&&typeof r=="string"&&(i=jQuery.filter(r,i)),this.length>1&&(guaranteedUnique[e]||jQuery.unique(i),rparentsprev.test(e)&&i.reverse()),this.pushStack(i)
}
}),jQuery.extend({filter:function(e,t,n){var r=t[0];
return n&&(e=":not("+e+")"),t.length===1&&r.nodeType===1?jQuery.find.matchesSelector(r,e)?[r]:[]:jQuery.find.matches(e,jQuery.grep(t,function(e){return e.nodeType===1
}))
},dir:function(e,t,n){var r=[],i=n!==undefined;
while((e=e[t])&&e.nodeType!==9){if(e.nodeType===1){if(i&&jQuery(e).is(n)){break
}r.push(e)
}}return r
},sibling:function(e,t){var n=[];
for(;
e;
e=e.nextSibling){e.nodeType===1&&e!==t&&n.push(e)
}return n
}});
var rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,rtagName=/<([\w:]+)/,rhtml=/<|&#?\w+;/,rnoInnerhtml=/<(?:script|style|link)/i,manipulation_rcheckableType=/^(?:checkbox|radio)$/i,rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rscriptType=/^$|\/(?:java|ecma)script/i,rscriptTypeMasked=/^true\/(.*)/,rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,wrapMap={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};
wrapMap.optgroup=wrapMap.option,wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead,wrapMap.th=wrapMap.td,jQuery.fn.extend({text:function(e){return jQuery.access(this,function(e){return e===undefined?jQuery.text(this):this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(e))
},null,e,arguments.length)
},append:function(){return this.domManip(arguments,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var t=manipulationTarget(this,e);
t.appendChild(e)
}})
},prepend:function(){return this.domManip(arguments,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var t=manipulationTarget(this,e);
t.insertBefore(e,t.firstChild)
}})
},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)
})
},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)
})
},remove:function(e,t){var n,r=e?jQuery.filter(e,this):this,i=0;
for(;
(n=r[i])!=null;
i++){!t&&n.nodeType===1&&jQuery.cleanData(getAll(n)),n.parentNode&&(t&&jQuery.contains(n.ownerDocument,n)&&setGlobalEval(getAll(n,"script")),n.parentNode.removeChild(n))
}return this
},empty:function(){var e,t=0;
for(;
(e=this[t])!=null;
t++){e.nodeType===1&&(jQuery.cleanData(getAll(e,!1)),e.textContent="")
}return this
},clone:function(e,t){return e=e==null?!1:e,t=t==null?e:t,this.map(function(){return jQuery.clone(this,e,t)
})
},html:function(e){return jQuery.access(this,function(e){var t=this[0]||{},n=0,r=this.length;
if(e===undefined&&t.nodeType===1){return t.innerHTML
}if(typeof e=="string"&&!rnoInnerhtml.test(e)&&!wrapMap[(rtagName.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(rxhtmlTag,"<$1></$2>");
try{for(;
n<r;
n++){t=this[n]||{},t.nodeType===1&&(jQuery.cleanData(getAll(t,!1)),t.innerHTML=e)
}t=0
}catch(i){}}t&&this.empty().append(e)
},null,e,arguments.length)
},replaceWith:function(){var e=jQuery.map(this,function(e){return[e.nextSibling,e.parentNode]
}),t=0;
return this.domManip(arguments,function(n){var r=e[t++],s=e[t++];
s&&(r&&r.parentNode!==s&&(r=this.nextSibling),jQuery(this).remove(),s.insertBefore(n,r))
},!0),t?this:this.remove()
},detach:function(e){return this.remove(e,!0)
},domManip:function(e,t,n){e=core_concat.apply([],e);
var r,i,s,o,u,a,f=0,l=this.length,c=this,h=l-1,p=e[0],d=jQuery.isFunction(p);
if(d||!(l<=1||typeof p!="string"||jQuery.support.checkClone||!rchecked.test(p))){return this.each(function(r){var i=c.eq(r);
d&&(e[0]=p.call(this,r,i.html())),i.domManip(e,t,n)
})
}if(l){r=jQuery.buildFragment(e,this[0].ownerDocument,!1,!n&&this),i=r.firstChild,r.childNodes.length===1&&(r=i);
if(i){s=jQuery.map(getAll(r,"script"),disableScript),o=s.length;
for(;
f<l;
f++){u=r,f!==h&&(u=jQuery.clone(u,!0,!0),o&&jQuery.merge(s,getAll(u,"script"))),t.call(this[f],u,f)
}if(o){a=s[s.length-1].ownerDocument,jQuery.map(s,restoreScript);
for(f=0;
f<o;
f++){u=s[f],rscriptType.test(u.type||"")&&!data_priv.access(u,"globalEval")&&jQuery.contains(a,u)&&(u.src?jQuery._evalUrl(u.src):jQuery.globalEval(u.textContent.replace(rcleanScript,"")))
}}}}return this
}}),jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){jQuery.fn[e]=function(e){var n,r=[],i=jQuery(e),s=i.length-1,o=0;
for(;
o<=s;
o++){n=o===s?this:this.clone(!0),jQuery(i[o])[t](n),core_push.apply(r,n.get())
}return this.pushStack(r)
}
}),jQuery.extend({clone:function(e,t,n){var r,i,s,o,u=e.cloneNode(!0),a=jQuery.contains(e.ownerDocument,e);
if(!jQuery.support.noCloneChecked&&(e.nodeType===1||e.nodeType===11)&&!jQuery.isXMLDoc(e)){o=getAll(u),s=getAll(e);
for(r=0,i=s.length;
r<i;
r++){fixInput(s[r],o[r])
}}if(t){if(n){s=s||getAll(e),o=o||getAll(u);
for(r=0,i=s.length;
r<i;
r++){cloneCopyEvent(s[r],o[r])
}}else{cloneCopyEvent(e,u)
}}return o=getAll(u,"script"),o.length>0&&setGlobalEval(o,!a&&getAll(e,"script")),u
},buildFragment:function(e,t,n,r){var i,s,o,u,a,f,l=0,c=e.length,h=t.createDocumentFragment(),p=[];
for(;
l<c;
l++){i=e[l];
if(i||i===0){if(jQuery.type(i)==="object"){jQuery.merge(p,i.nodeType?[i]:i)
}else{if(!rhtml.test(i)){p.push(t.createTextNode(i))
}else{s=s||h.appendChild(t.createElement("div")),o=(rtagName.exec(i)||["",""])[1].toLowerCase(),u=wrapMap[o]||wrapMap._default,s.innerHTML=u[1]+i.replace(rxhtmlTag,"<$1></$2>")+u[2],f=u[0];
while(f--){s=s.lastChild
}jQuery.merge(p,s.childNodes),s=h.firstChild,s.textContent=""
}}}}h.textContent="",l=0;
while(i=p[l++]){if(r&&jQuery.inArray(i,r)!==-1){continue
}a=jQuery.contains(i.ownerDocument,i),s=getAll(h.appendChild(i),"script"),a&&setGlobalEval(s);
if(n){f=0;
while(i=s[f++]){rscriptType.test(i.type||"")&&n.push(i)
}}}return h
},cleanData:function(e){var t,n,r,i,s,o,u=jQuery.event.special,a=0;
for(;
(n=e[a])!==undefined;
a++){if(Data.accepts(n)){s=n[data_priv.expando];
if(s&&(t=data_priv.cache[s])){r=Object.keys(t.events||{});
if(r.length){for(o=0;
(i=r[o])!==undefined;
o++){u[i]?jQuery.event.remove(n,i):jQuery.removeEvent(n,i,t.handle)
}}data_priv.cache[s]&&delete data_priv.cache[s]
}}delete data_user.cache[n[data_user.expando]]
}},_evalUrl:function(e){return jQuery.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})
}}),jQuery.fn.extend({wrapAll:function(e){var t;
return jQuery.isFunction(e)?this.each(function(t){jQuery(this).wrapAll(e.call(this,t))
}):(this[0]&&(t=jQuery(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;
while(e.firstElementChild){e=e.firstElementChild
}return e
}).append(this)),this)
},wrapInner:function(e){return jQuery.isFunction(e)?this.each(function(t){jQuery(this).wrapInner(e.call(this,t))
}):this.each(function(){var t=jQuery(this),n=t.contents();
n.length?n.wrapAll(e):t.append(e)
})
},wrap:function(e){var t=jQuery.isFunction(e);
return this.each(function(n){jQuery(this).wrapAll(t?e.call(this,n):e)
})
},unwrap:function(){return this.parent().each(function(){jQuery.nodeName(this,"body")||jQuery(this).replaceWith(this.childNodes)
}).end()
}});
var curCSS,iframe,rdisplayswap=/^(none|table(?!-c[ea]).+)/,rmargin=/^margin/,rnumsplit=new RegExp("^("+core_pnum+")(.*)$","i"),rnumnonpx=new RegExp("^("+core_pnum+")(?!px)[a-z%]+$","i"),rrelNum=new RegExp("^([+-])=("+core_pnum+")","i"),elemdisplay={BODY:"block"},cssShow={position:"absolute",visibility:"hidden",display:"block"},cssNormalTransform={letterSpacing:0,fontWeight:400},cssExpand=["Top","Right","Bottom","Left"],cssPrefixes=["Webkit","O","Moz","ms"];
jQuery.fn.extend({css:function(e,t){return jQuery.access(this,function(e,t,n){var r,i,s={},o=0;
if(jQuery.isArray(t)){r=getStyles(e),i=t.length;
for(;
o<i;
o++){s[t[o]]=jQuery.css(e,t[o],!1,r)
}return s
}return n!==undefined?jQuery.style(e,t,n):jQuery.css(e,t)
},e,t,arguments.length>1)
},show:function(){return showHide(this,!0)
},hide:function(){return showHide(this)
},toggle:function(e){return typeof e=="boolean"?e?this.show():this.hide():this.each(function(){isHidden(this)?jQuery(this).show():jQuery(this).hide()
})
}}),jQuery.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=curCSS(e,"opacity");
return n===""?"1":n
}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(!e||e.nodeType===3||e.nodeType===8||!e.style){return
}var i,s,o,u=jQuery.camelCase(t),a=e.style;
t=jQuery.cssProps[u]||(jQuery.cssProps[u]=vendorPropName(a,u)),o=jQuery.cssHooks[t]||jQuery.cssHooks[u];
if(n===undefined){return o&&"get" in o&&(i=o.get(e,!1,r))!==undefined?i:a[t]
}s=typeof n,s==="string"&&(i=rrelNum.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(jQuery.css(e,t)),s="number");
if(n==null||s==="number"&&isNaN(n)){return
}s==="number"&&!jQuery.cssNumber[u]&&(n+="px"),!jQuery.support.clearCloneStyle&&n===""&&t.indexOf("background")===0&&(a[t]="inherit");
if(!o||!("set" in o)||(n=o.set(e,n,r))!==undefined){a[t]=n
}},css:function(e,t,n,r){var i,s,o,u=jQuery.camelCase(t);
return t=jQuery.cssProps[u]||(jQuery.cssProps[u]=vendorPropName(e.style,u)),o=jQuery.cssHooks[t]||jQuery.cssHooks[u],o&&"get" in o&&(i=o.get(e,!0,n)),i===undefined&&(i=curCSS(e,t,r)),i==="normal"&&t in cssNormalTransform&&(i=cssNormalTransform[t]),n===""||n?(s=parseFloat(i),n===!0||jQuery.isNumeric(s)?s||0:i):i
}}),curCSS=function(e,t,n){var r,i,s,o=n||getStyles(e),u=o?o.getPropertyValue(t)||o[t]:undefined,a=e.style;
return o&&(u===""&&!jQuery.contains(e.ownerDocument,e)&&(u=jQuery.style(e,t)),rnumnonpx.test(u)&&rmargin.test(t)&&(r=a.width,i=a.minWidth,s=a.maxWidth,a.minWidth=a.maxWidth=a.width=u,u=o.width,a.width=r,a.minWidth=i,a.maxWidth=s)),u
},jQuery.each(["height","width"],function(e,t){jQuery.cssHooks[t]={get:function(e,n,r){if(n){return e.offsetWidth===0&&rdisplayswap.test(jQuery.css(e,"display"))?jQuery.swap(e,cssShow,function(){return getWidthOrHeight(e,t,r)
}):getWidthOrHeight(e,t,r)
}},set:function(e,n,r){var i=r&&getStyles(e);
return setPositiveNumber(e,n,r?augmentWidthOrHeight(e,t,r,jQuery.support.boxSizing&&jQuery.css(e,"boxSizing",!1,i)==="border-box",i):0)
}}
}),jQuery(function(){jQuery.support.reliableMarginRight||(jQuery.cssHooks.marginRight={get:function(e,t){if(t){return jQuery.swap(e,{display:"inline-block"},curCSS,[e,"marginRight"])
}}}),!jQuery.support.pixelPosition&&jQuery.fn.position&&jQuery.each(["top","left"],function(e,t){jQuery.cssHooks[t]={get:function(e,n){if(n){return n=curCSS(e,t),rnumnonpx.test(n)?jQuery(e).position()[t]+"px":n
}}}
})
}),jQuery.expr&&jQuery.expr.filters&&(jQuery.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0
},jQuery.expr.filters.visible=function(e){return !jQuery.expr.filters.hidden(e)
}),jQuery.each({margin:"",padding:"",border:"Width"},function(e,t){jQuery.cssHooks[e+t]={expand:function(n){var r=0,i={},s=typeof n=="string"?n.split(" "):[n];
for(;
r<4;
r++){i[e+cssExpand[r]+t]=s[r]||s[r-2]||s[0]
}return i
}},rmargin.test(e)||(jQuery.cssHooks[e+t].set=setPositiveNumber)
});
var r20=/%20/g,rbracket=/\[\]$/,rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i;
jQuery.fn.extend({serialize:function(){return jQuery.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){var e=jQuery.prop(this,"elements");
return e?jQuery.makeArray(e):this
}).filter(function(){var e=this.type;
return this.name&&!jQuery(this).is(":disabled")&&rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(e)&&(this.checked||!manipulation_rcheckableType.test(e))
}).map(function(e,t){var n=jQuery(this).val();
return n==null?null:jQuery.isArray(n)?jQuery.map(n,function(e){return{name:t.name,value:e.replace(rCRLF,"\r\n")}
}):{name:t.name,value:n.replace(rCRLF,"\r\n")}
}).get()
}}),jQuery.param=function(e,t){var n,r=[],i=function(e,t){t=jQuery.isFunction(t)?t():t==null?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)
};
t===undefined&&(t=jQuery.ajaxSettings&&jQuery.ajaxSettings.traditional);
if(jQuery.isArray(e)||e.jquery&&!jQuery.isPlainObject(e)){jQuery.each(e,function(){i(this.name,this.value)
})
}else{for(n in e){buildParams(n,e[n],t,i)
}}return r.join("&").replace(r20,"+")
},jQuery.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){jQuery.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)
}
}),jQuery.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)
},bind:function(e,t,n){return this.on(e,null,t,n)
},unbind:function(e,t){return this.off(e,null,t)
},delegate:function(e,t,n,r){return this.on(t,e,n,r)
},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)
}});
var ajaxLocParts,ajaxLocation,ajax_nonce=jQuery.now(),ajax_rquery=/\?/,rhash=/#.*$/,rts=/([?&])_=[^&]*/,rheaders=/^(.*?):[ \t]*([^\r\n]*)$/mg,rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,rurl=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,_load=jQuery.fn.load,prefilters={},transports={},allTypes="*/".concat("*");
try{ajaxLocation=location.href
}catch(e){ajaxLocation=document.createElement("a"),ajaxLocation.href="",ajaxLocation=ajaxLocation.href
}ajaxLocParts=rurl.exec(ajaxLocation.toLowerCase())||[],jQuery.fn.load=function(e,t,n){if(typeof e!="string"&&_load){return _load.apply(this,arguments)
}var r,i,s,o=this,u=e.indexOf(" ");
return u>=0&&(r=e.slice(u),e=e.slice(0,u)),jQuery.isFunction(t)?(n=t,t=undefined):t&&typeof t=="object"&&(i="POST"),o.length>0&&jQuery.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){s=arguments,o.html(r?jQuery("<div>").append(jQuery.parseHTML(e)).find(r):e)
}).complete(n&&function(e,t){o.each(n,s||[e.responseText,t,e])
}),this
},jQuery.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){jQuery.fn[t]=function(e){return this.on(t,e)
}
}),jQuery.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ajaxLocation,type:"GET",isLocal:rlocalProtocol.test(ajaxLocParts[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":allTypes,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":jQuery.parseJSON,"text xml":jQuery.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?ajaxExtend(ajaxExtend(e,jQuery.ajaxSettings),t):ajaxExtend(jQuery.ajaxSettings,e)
},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports),ajax:function(e,t){function S(e,t,s,u){var f,m,g,b,E,S=t;
if(y===2){return
}y=2,o&&clearTimeout(o),n=undefined,i=u||"",w.readyState=e>0?4:0,f=e>=200&&e<300||e===304,s&&(b=ajaxHandleResponses(l,w,s)),b=ajaxConvert(l,b,w,f);
if(f){l.ifModified&&(E=w.getResponseHeader("Last-Modified"),E&&(jQuery.lastModified[r]=E),E=w.getResponseHeader("etag"),E&&(jQuery.etag[r]=E)),e===204||l.type==="HEAD"?S="nocontent":e===304?S="notmodified":(S=b.state,m=b.data,g=b.error,f=!g)
}else{g=S;
if(e||!S){S="error",e<0&&(e=0)
}}w.status=e,w.statusText=(t||S)+"",f?p.resolveWith(c,[m,S,w]):p.rejectWith(c,[w,S,g]),w.statusCode(v),v=undefined,a&&h.trigger(f?"ajaxSuccess":"ajaxError",[w,l,f?m:g]),d.fireWith(c,[w,S]),a&&(h.trigger("ajaxComplete",[w,l]),--jQuery.active||jQuery.event.trigger("ajaxStop"))
}typeof e=="object"&&(t=e,e=undefined),t=t||{};
var n,r,i,s,o,u,a,f,l=jQuery.ajaxSetup({},t),c=l.context||l,h=l.context&&(c.nodeType||c.jquery)?jQuery(c):jQuery.event,p=jQuery.Deferred(),d=jQuery.Callbacks("once memory"),v=l.statusCode||{},m={},g={},y=0,b="canceled",w={readyState:0,getResponseHeader:function(e){var t;
if(y===2){if(!s){s={};
while(t=rheaders.exec(i)){s[t[1].toLowerCase()]=t[2]
}}t=s[e.toLowerCase()]
}return t==null?null:t
},getAllResponseHeaders:function(){return y===2?i:null
},setRequestHeader:function(e,t){var n=e.toLowerCase();
return y||(e=g[n]=g[n]||e,m[e]=t),this
},overrideMimeType:function(e){return y||(l.mimeType=e),this
},statusCode:function(e){var t;
if(e){if(y<2){for(t in e){v[t]=[v[t],e[t]]
}}else{w.always(e[w.status])
}}return this
},abort:function(e){var t=e||b;
return n&&n.abort(t),S(0,t),this
}};
p.promise(w).complete=d.add,w.success=w.done,w.error=w.fail,l.url=((e||l.url||ajaxLocation)+"").replace(rhash,"").replace(rprotocol,ajaxLocParts[1]+"//"),l.type=t.method||t.type||l.method||l.type,l.dataTypes=jQuery.trim(l.dataType||"*").toLowerCase().match(core_rnotwhite)||[""],l.crossDomain==null&&(u=rurl.exec(l.url.toLowerCase()),l.crossDomain=!(!u||u[1]===ajaxLocParts[1]&&u[2]===ajaxLocParts[2]&&(u[3]||(u[1]==="http:"?"80":"443"))===(ajaxLocParts[3]||(ajaxLocParts[1]==="http:"?"80":"443")))),l.data&&l.processData&&typeof l.data!="string"&&(l.data=jQuery.param(l.data,l.traditional)),inspectPrefiltersOrTransports(prefilters,l,t,w);
if(y===2){return w
}a=l.global,a&&jQuery.active++===0&&jQuery.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!rnoContent.test(l.type),r=l.url,l.hasContent||(l.data&&(r=l.url+=(ajax_rquery.test(r)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=rts.test(r)?r.replace(rts,"$1_="+ajax_nonce++):r+(ajax_rquery.test(r)?"&":"?")+"_="+ajax_nonce++)),l.ifModified&&(jQuery.lastModified[r]&&w.setRequestHeader("If-Modified-Since",jQuery.lastModified[r]),jQuery.etag[r]&&w.setRequestHeader("If-None-Match",jQuery.etag[r])),(l.data&&l.hasContent&&l.contentType!==!1||t.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+(l.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):l.accepts["*"]);
for(f in l.headers){w.setRequestHeader(f,l.headers[f])
}if(!l.beforeSend||l.beforeSend.call(c,w,l)!==!1&&y!==2){b="abort";
for(f in {success:1,error:1,complete:1}){w[f](l[f])
}n=inspectPrefiltersOrTransports(transports,l,t,w);
if(!n){S(-1,"No Transport")
}else{w.readyState=1,a&&h.trigger("ajaxSend",[w,l]),l.async&&l.timeout>0&&(o=setTimeout(function(){w.abort("timeout")
},l.timeout));
try{y=1,n.send(m,S)
}catch(E){if(!(y<2)){throw E
}S(-1,E)
}}return w
}return w.abort()
},getJSON:function(e,t,n){return jQuery.get(e,t,n,"json")
},getScript:function(e,t){return jQuery.get(e,undefined,t,"script")
}}),jQuery.each(["get","post"],function(e,t){jQuery[t]=function(e,n,r,i){return jQuery.isFunction(n)&&(i=i||r,r=n,n=undefined),jQuery.ajax({url:e,type:t,dataType:i,data:n,success:r})
}
}),jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return jQuery.globalEval(e),e
}}}),jQuery.ajaxPrefilter("script",function(e){e.cache===undefined&&(e.cache=!1),e.crossDomain&&(e.type="GET")
}),jQuery.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;
return{send:function(r,i){t=jQuery("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i(e.type==="error"?404:200,e.type)
}),document.head.appendChild(t[0])
},abort:function(){n&&n()
}}
}});
var oldCallbacks=[],rjsonp=/(=)\?(?=&|$)|\?\?/;
jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=oldCallbacks.pop()||jQuery.expando+"_"+ajax_nonce++;
return this[e]=!0,e
}}),jQuery.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,s,o=e.jsonp!==!1&&(rjsonp.test(e.url)?"url":typeof e.data=="string"&&!(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&rjsonp.test(e.data)&&"data");
if(o||e.dataTypes[0]==="jsonp"){return r=e.jsonpCallback=jQuery.isFunction(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,o?e[o]=e[o].replace(rjsonp,"$1"+r):e.jsonp!==!1&&(e.url+=(ajax_rquery.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return s||jQuery.error(r+" was not called"),s[0]
},e.dataTypes[0]="json",i=window[r],window[r]=function(){s=arguments
},n.always(function(){window[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,oldCallbacks.push(r)),s&&jQuery.isFunction(i)&&i(s[0]),s=i=undefined
}),"script"
}}),jQuery.ajaxSettings.xhr=function(){try{return new XMLHttpRequest
}catch(e){}};
var xhrSupported=jQuery.ajaxSettings.xhr(),xhrSuccessStatus={0:200,1223:204},xhrId=0,xhrCallbacks={};
window.ActiveXObject&&jQuery(window).on("unload",function(){for(var e in xhrCallbacks){xhrCallbacks[e]()
}xhrCallbacks=undefined
}),jQuery.support.cors=!!xhrSupported&&"withCredentials" in xhrSupported,jQuery.support.ajax=xhrSupported=!!xhrSupported,jQuery.ajaxTransport(function(e){var t;
if(jQuery.support.cors||xhrSupported&&!e.crossDomain){return{send:function(n,r){var i,s,o=e.xhr();
o.open(e.type,e.url,e.async,e.username,e.password);
if(e.xhrFields){for(i in e.xhrFields){o[i]=e.xhrFields[i]
}}e.mimeType&&o.overrideMimeType&&o.overrideMimeType(e.mimeType),!e.crossDomain&&!n["X-Requested-With"]&&(n["X-Requested-With"]="XMLHttpRequest");
for(i in n){o.setRequestHeader(i,n[i])
}t=function(e){return function(){t&&(delete xhrCallbacks[s],t=o.onload=o.onerror=null,e==="abort"?o.abort():e==="error"?r(o.status||404,o.statusText):r(xhrSuccessStatus[o.status]||o.status,o.statusText,typeof o.responseText=="string"?{text:o.responseText}:undefined,o.getAllResponseHeaders()))
}
},o.onload=t(),o.onerror=t("error"),t=xhrCallbacks[s=xhrId++]=t("abort"),o.send(e.hasContent&&e.data||null)
},abort:function(){t&&t()
}}
}});
var fxNow,timerId,rfxtypes=/^(?:toggle|show|hide)$/,rfxnum=new RegExp("^(?:([+-])=|)("+core_pnum+")([a-z%]*)$","i"),rrun=/queueHooks$/,animationPrefilters=[defaultPrefilter],tweeners={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=rfxnum.exec(t),s=i&&i[3]||(jQuery.cssNumber[e]?"":"px"),o=(jQuery.cssNumber[e]||s!=="px"&&+r)&&rfxnum.exec(jQuery.css(n.elem,e)),u=1,a=20;
if(o&&o[3]!==s){s=s||o[3],i=i||[],o=+r||1;
do{u=u||".5",o/=u,jQuery.style(n.elem,e,o+s)
}while(u!==(u=n.cur()/r)&&u!==1&&--a)
}return i&&(o=n.start=+o||+r||0,n.unit=s,n.end=i[1]?o+(i[1]+1)*i[2]:+i[2]),n
}]};
jQuery.Animation=jQuery.extend(Animation,{tweener:function(e,t){jQuery.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");
var n,r=0,i=e.length;
for(;
r<i;
r++){n=e[r],tweeners[n]=tweeners[n]||[],tweeners[n].unshift(t)
}},prefilter:function(e,t){t?animationPrefilters.unshift(e):animationPrefilters.push(e)
}}),jQuery.Tween=Tween,Tween.prototype={constructor:Tween,init:function(e,t,n,r,i,s){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(jQuery.cssNumber[n]?"":"px")
},cur:function(){var e=Tween.propHooks[this.prop];
return e&&e.get?e.get(this):Tween.propHooks._default.get(this)
},run:function(e){var t,n=Tween.propHooks[this.prop];
return this.options.duration?this.pos=t=jQuery.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Tween.propHooks._default.set(this),this
}},Tween.prototype.init.prototype=Tween.prototype,Tween.propHooks={_default:{get:function(e){var t;
return e.elem[e.prop]==null||!!e.elem.style&&e.elem.style[e.prop]!=null?(t=jQuery.css(e.elem,e.prop,""),!t||t==="auto"?0:t):e.elem[e.prop]
},set:function(e){jQuery.fx.step[e.prop]?jQuery.fx.step[e.prop](e):e.elem.style&&(e.elem.style[jQuery.cssProps[e.prop]]!=null||jQuery.cssHooks[e.prop])?jQuery.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now
}}},Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)
}},jQuery.each(["toggle","show","hide"],function(e,t){var n=jQuery.fn[t];
jQuery.fn[t]=function(e,r,i){return e==null||typeof e=="boolean"?n.apply(this,arguments):this.animate(genFx(t,!0),e,r,i)
}
}),jQuery.fn.extend({fadeTo:function(e,t,n,r){return this.filter(isHidden).css("opacity",0).show().end().animate({opacity:t},e,n,r)
},animate:function(e,t,n,r){var i=jQuery.isEmptyObject(e),s=jQuery.speed(t,n,r),o=function(){var t=Animation(this,jQuery.extend({},e),s);
(i||data_priv.get(this,"finish"))&&t.stop(!0)
};
return o.finish=o,i||s.queue===!1?this.each(o):this.queue(s.queue,o)
},stop:function(e,t,n){var r=function(e){var t=e.stop;
delete e.stop,t(n)
};
return typeof e!="string"&&(n=t,t=e,e=undefined),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=e!=null&&e+"queueHooks",s=jQuery.timers,o=data_priv.get(this);
if(i){o[i]&&o[i].stop&&r(o[i])
}else{for(i in o){o[i]&&o[i].stop&&rrun.test(i)&&r(o[i])
}}for(i=s.length;
i--;
){s[i].elem===this&&(e==null||s[i].queue===e)&&(s[i].anim.stop(n),t=!1,s.splice(i,1))
}(t||!n)&&jQuery.dequeue(this,e)
})
},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=data_priv.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],s=jQuery.timers,o=r?r.length:0;
n.finish=!0,jQuery.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0);
for(t=s.length;
t--;
){s[t].elem===this&&s[t].queue===e&&(s[t].anim.stop(!0),s.splice(t,1))
}for(t=0;
t<o;
t++){r[t]&&r[t].finish&&r[t].finish.call(this)
}delete n.finish
})
}}),jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){jQuery.fn[e]=function(e,n,r){return this.animate(t,e,n,r)
}
}),jQuery.speed=function(e,t,n){var r=e&&typeof e=="object"?jQuery.extend({},e):{complete:n||!n&&t||jQuery.isFunction(e)&&e,duration:e,easing:n&&t||t&&!jQuery.isFunction(t)&&t};
r.duration=jQuery.fx.off?0:typeof r.duration=="number"?r.duration:r.duration in jQuery.fx.speeds?jQuery.fx.speeds[r.duration]:jQuery.fx.speeds._default;
if(r.queue==null||r.queue===!0){r.queue="fx"
}return r.old=r.complete,r.complete=function(){jQuery.isFunction(r.old)&&r.old.call(this),r.queue&&jQuery.dequeue(this,r.queue)
},r
},jQuery.easing={linear:function(e){return e
},swing:function(e){return 0.5-Math.cos(e*Math.PI)/2
}},jQuery.timers=[],jQuery.fx=Tween.prototype.init,jQuery.fx.tick=function(){var e,t=jQuery.timers,n=0;
fxNow=jQuery.now();
for(;
n<t.length;
n++){e=t[n],!e()&&t[n]===e&&t.splice(n--,1)
}t.length||jQuery.fx.stop(),fxNow=undefined
},jQuery.fx.timer=function(e){e()&&jQuery.timers.push(e)&&jQuery.fx.start()
},jQuery.fx.interval=13,jQuery.fx.start=function(){timerId||(timerId=setInterval(jQuery.fx.tick,jQuery.fx.interval))
},jQuery.fx.stop=function(){clearInterval(timerId),timerId=null
},jQuery.fx.speeds={slow:600,fast:200,_default:400},jQuery.fx.step={},jQuery.expr&&jQuery.expr.filters&&(jQuery.expr.filters.animated=function(e){return jQuery.grep(jQuery.timers,function(t){return e===t.elem
}).length
}),jQuery.fn.offset=function(e){if(arguments.length){return e===undefined?this:this.each(function(t){jQuery.offset.setOffset(this,e,t)
})
}var t,n,r=this[0],i={top:0,left:0},s=r&&r.ownerDocument;
if(!s){return
}return t=s.documentElement,jQuery.contains(t,r)?(typeof r.getBoundingClientRect!==core_strundefined&&(i=r.getBoundingClientRect()),n=getWindow(s),{top:i.top+n.pageYOffset-t.clientTop,left:i.left+n.pageXOffset-t.clientLeft}):i
},jQuery.offset={setOffset:function(e,t,n){var r,i,s,o,u,a,f,l=jQuery.css(e,"position"),c=jQuery(e),h={};
l==="static"&&(e.style.position="relative"),u=c.offset(),s=jQuery.css(e,"top"),a=jQuery.css(e,"left"),f=(l==="absolute"||l==="fixed")&&(s+a).indexOf("auto")>-1,f?(r=c.position(),o=r.top,i=r.left):(o=parseFloat(s)||0,i=parseFloat(a)||0),jQuery.isFunction(t)&&(t=t.call(e,n,u)),t.top!=null&&(h.top=t.top-u.top+o),t.left!=null&&(h.left=t.left-u.left+i),"using" in t?t.using.call(e,h):c.css(h)
}},jQuery.fn.extend({position:function(){if(!this[0]){return
}var e,t,n=this[0],r={top:0,left:0};
return jQuery.css(n,"position")==="fixed"?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),jQuery.nodeName(e[0],"html")||(r=e.offset()),r.top+=jQuery.css(e[0],"borderTopWidth",!0),r.left+=jQuery.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-jQuery.css(n,"marginTop",!0),left:t.left-r.left-jQuery.css(n,"marginLeft",!0)}
},offsetParent:function(){return this.map(function(){var e=this.offsetParent||docElem;
while(e&&!jQuery.nodeName(e,"html")&&jQuery.css(e,"position")==="static"){e=e.offsetParent
}return e||docElem
})
}}),jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;
jQuery.fn[e]=function(r){return jQuery.access(this,function(e,r,i){var s=getWindow(e);
if(i===undefined){return s?s[t]:e[r]
}s?s.scrollTo(n?window.pageXOffset:i,n?i:window.pageYOffset):e[r]=i
},e,r,arguments.length,null)
}
}),jQuery.each({Height:"height",Width:"width"},function(e,t){jQuery.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){jQuery.fn[r]=function(r,i){var s=arguments.length&&(n||typeof r!="boolean"),o=n||(r===!0||i===!0?"margin":"border");
return jQuery.access(this,function(t,n,r){var i;
return jQuery.isWindow(t)?t.document.documentElement["client"+e]:t.nodeType===9?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):r===undefined?jQuery.css(t,n,o):jQuery.style(t,n,r,o)
},t,s?r:undefined,s,null)
}
})
}),jQuery.fn.size=function(){return this.length
},jQuery.fn.andSelf=jQuery.fn.addBack,typeof module=="object"&&module&&typeof module.exports=="object"?module.exports=jQuery:typeof define=="function"&&define.amd&&define("jquery",[],function(){return jQuery
}),typeof window=="object"&&typeof window.document=="object"&&(window.jQuery=window.$=jQuery)
}(window),define("can/util/can",[],function(){var e=window.can||{};
if(typeof GLOBALCAN=="undefined"||GLOBALCAN!==!1){window.can=e
}e.k=function(){},e.isDeferred=function(e){return e&&typeof e.then=="function"&&typeof e.pipe=="function"
};
var t=0;
return e.cid=function(e,n){return e._cid||(t++,e._cid=(n||"")+t),e._cid
},e.VERSION="2.1.4",e.simpleExtend=function(e,t){for(var n in t){e[n]=t[n]
}return e
},e.frag=function(t){var n;
return !t||typeof t=="string"?(n=e.buildFragment(t==null?"":""+t,document.body),n.childNodes.length||n.appendChild(document.createTextNode("")),n):t.nodeType===11?t:typeof t.nodeType=="number"?(n=document.createDocumentFragment(),n.appendChild(t),n):typeof t.length=="number"?(n=document.createDocumentFragment(),e.each(t,function(t){n.appendChild(e.frag(t))
}),n):(n=e.buildFragment(""+t,document.body),n.childNodes.length||n.appendChild(document.createTextNode("")),n)
},e.__reading=function(){},e
}),define("can/util/attr",["can/util/can"],function(e){var t=window.setImmediate||function(e){return setTimeout(e,0)
},n={MutationObserver:window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,map:{"class":"className",value:"value",innerText:"innerText",textContent:"textContent",checked:!0,disabled:!0,readonly:!0,required:!0,src:function(e,t){return t==null||t===""?(e.removeAttribute("src"),null):(e.setAttribute("src",t),t)
},style:function(e,t){return e.style.cssText=t||""
}},defaultValue:["input","textarea"],set:function(t,r,i){var s;
n.MutationObserver||(s=n.get(t,r));
var o=t.nodeName.toString().toLowerCase(),u=n.map[r],a;
typeof u=="function"?a=u(t,i):u===!0?(a=t[r]=!0,r==="checked"&&t.type==="radio"&&e.inArray(o,n.defaultValue)>=0&&(t.defaultChecked=!0)):u?(a=t[u]=i,u==="value"&&e.inArray(o,n.defaultValue)>=0&&(t.defaultValue=i)):(t.setAttribute(r,i),a=i),!n.MutationObserver&&a!==s&&n.trigger(t,r,s)
},trigger:function(n,r,i){if(e.data(e.$(n),"canHasAttributesBindings")){return t(function(){e.trigger(n,{type:"attributes",attributeName:r,target:n,oldValue:i,bubbles:!1},[])
})
}},get:function(e,t){var r=n.map[t];
return typeof r=="string"&&e[r]?e[r]:e.getAttribute(t)
},remove:function(e,t){var r;
n.MutationObserver||(r=n.get(e,t));
var i=n.map[t];
typeof i=="function"&&i(e,undefined),i===!0?e[t]=!1:typeof i=="string"?e[i]="":e.removeAttribute(t),!n.MutationObserver&&r!=null&&n.trigger(e,t,r)
},has:function(){var e=document.createElement("div");
return e.hasAttribute?function(e,t){return e.hasAttribute(t)
}:function(e,t){return e.getAttribute(t)!==null
}
}()};
return n
}),define("can/event",["can/util/can"],function(e){return e.addEvent=function(e,t){var n=this.__bindEvents||(this.__bindEvents={}),r=n[e]||(n[e]=[]);
return r.push({handler:t,name:e}),this
},e.listenTo=function(t,n,r){var i=this.__listenToEvents;
i||(i=this.__listenToEvents={});
var s=e.cid(t),o=i[s];
o||(o=i[s]={obj:t,events:{}});
var u=o.events[n];
u||(u=o.events[n]=[]),u.push(r),e.bind.call(t,n,r)
},e.stopListening=function(t,n,r){var i=this.__listenToEvents,s=i,o=0;
if(!i){return this
}if(t){var u=e.cid(t);
(s={})[u]=i[u];
if(!i[u]){return this
}}for(var a in s){var f=s[a],l;
t=i[a].obj,n?(l={})[n]=f.events[n]:l=f.events;
for(var c in l){var h=l[c]||[];
o=0;
while(o<h.length){r&&r===h[o]||!r?(e.unbind.call(t,c,h[o]),h.splice(o,1)):o++
}h.length||delete f.events[c]
}e.isEmptyObject(f.events)&&delete i[a]
}return this
},e.removeEvent=function(e,t,n){if(!this.__bindEvents){return this
}var r=this.__bindEvents[e]||[],i=0,s,o=typeof t=="function";
while(i<r.length){s=r[i],(n?n(s,e,t):o&&s.handler===t||!o&&(s.cid===t||!t))?r.splice(i,1):i++
}return this
},e.dispatch=function(e,t){var n=this.__bindEvents;
if(!n){return
}typeof e=="string"&&(e={type:e});
var r=e.type,i=(n[r]||[]).slice(0),s=[e];
t&&s.push.apply(s,t);
for(var o=0,u=i.length;
o<u;
o++){i[o].handler.apply(this,s)
}return e
},e.one=function(t,n){var r=function(){return e.unbind.call(this,t,r),n.apply(this,arguments)
};
return e.bind.call(this,t,r),this
},e.event={on:function(){return arguments.length===0&&e.Control&&this instanceof e.Control?e.Control.prototype.on.call(this):e.addEvent.apply(this,arguments)
},off:function(){return arguments.length===0&&e.Control&&this instanceof e.Control?e.Control.prototype.off.call(this):e.removeEvent.apply(this,arguments)
},bind:e.addEvent,unbind:e.removeEvent,delegate:function(t,n,r){return e.addEvent.call(this,n,r)
},undelegate:function(t,n,r){return e.removeEvent.call(this,n,r)
},trigger:e.dispatch,one:e.one,addEvent:e.addEvent,removeEvent:e.removeEvent,listenTo:e.listenTo,stopListening:e.stopListening,dispatch:e.dispatch},e.event
}),define("can/util/array/each",["can/util/can"],function(e){var t=function(e){var t=e.length;
return typeof arr!="function"&&(t===0||typeof t=="number"&&t>0&&t-1 in e)
};
return e.each=function(n,r,i){var s=0,o,u,a;
if(n){if(t(n)){if(e.List&&n instanceof e.List){for(u=n.attr("length");
s<u;
s++){a=n.attr(s);
if(r.call(i||a,a,s,n)===!1){break
}}}else{for(u=n.length;
s<u;
s++){a=n[s];
if(r.call(i||a,a,s,n)===!1){break
}}}}else{if(typeof n=="object"){if(e.Map&&n instanceof e.Map||n===e.route){var f=e.Map.keys(n);
for(s=0,u=f.length;
s<u;
s++){o=f[s],a=n.attr(o);
if(r.call(i||a,a,o,n)===!1){break
}}}else{for(o in n){if(n.hasOwnProperty(o)&&r.call(i||n[o],n[o],o,n)===!1){break
}}}}}}return n
},e
}),define("can/util/inserted",["can/util/can"],function(e){e.inserted=function(t){t=e.makeArray(t);
var n=!1,r=e.$(document.contains?document:document.body),i;
for(var s=0,o;
(o=t[s])!==undefined;
s++){if(!n){if(!o.getElementsByTagName){continue
}if(!e.has(r,o).length){return
}n=!0
}if(n&&o.getElementsByTagName){i=e.makeArray(o.getElementsByTagName("*")),e.trigger(o,"inserted",[],!1);
for(var u=0,a;
(a=i[u])!==undefined;
u++){e.trigger(a,"inserted",[],!1)
}}}},e.appendChild=function(t,n){var r;
n.nodeType===11?r=e.makeArray(n.childNodes):r=[n],t.appendChild(n),e.inserted(r)
},e.insertBefore=function(t,n,r){var i;
n.nodeType===11?i=e.makeArray(n.childNodes):i=[n],t.insertBefore(n,r),e.inserted(i)
}
}),define("can/util/jquery",["jquery","can/util/can","can/util/attr","can/event","can/util/array/each","can/util/inserted"],function(e,t,n,r){var i=function(e){return e.nodeName&&(e.nodeType===1||e.nodeType===9)||e==window
};
e.extend(t,e,{trigger:function(n,r,s,o){i(n)?e.event.trigger(r,s,n,!o):n.trigger?n.trigger(r,s):(typeof r=="string"&&(r={type:r}),r.target=r.target||n,s&&(s.length&&typeof s=="string"?s=[s]:s.length||(s=[s])),s||(s=[]),t.dispatch.call(n,r,s))
},event:t.event,addEvent:t.addEvent,removeEvent:t.removeEvent,buildFragment:function(t,n){var r;
return t=[t],n=n||document,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n,r=e.buildFragment(t,n),r.cacheable?e.clone(r.fragment):r.fragment||r
},$:e,each:t.each,bind:function(n,r){return this.bind&&this.bind!==t.bind?this.bind(n,r):i(this)?e.event.add(this,n,r):t.addEvent.call(this,n,r),this
},unbind:function(n,r){return this.unbind&&this.unbind!==t.unbind?this.unbind(n,r):i(this)?e.event.remove(this,n,r):t.removeEvent.call(this,n,r),this
},delegate:function(n,r,s){return this.delegate?this.delegate(n,r,s):i(this)?e(this).delegate(n,r,s):t.bind.call(this,r,s),this
},undelegate:function(n,r,s){return this.undelegate?this.undelegate(n,r,s):i(this)?e(this).undelegate(n,r,s):t.unbind.call(this,r,s),this
},proxy:function(e,t){return function(){return e.apply(t,arguments)
}
},attr:n}),t.on=t.bind,t.off=t.unbind,e.each(["append","filter","addClass","remove","data","get","has"],function(e,n){t[n]=function(e){return e[n].apply(e,t.makeArray(arguments).slice(1))
}
});
var s=e.cleanData;
e.cleanData=function(n){e.each(n,function(e,n){n&&t.trigger(n,"removed",[],!1)
}),s(n)
};
var o=e.fn.domManip,u;
e.fn.domManip=function(e,t,n){for(var r=1;
r<arguments.length;
r++){if(typeof arguments[r]=="function"){u=r;
break
}}return o.apply(this,arguments)
},e(document.createElement("div")).append(document.createElement("div")),e.fn.domManip=u===2?function(e,n,r){return o.call(this,e,n,function(e){var n;
e.nodeType===11&&(n=t.makeArray(e.childNodes));
var i=r.apply(this,arguments);
return t.inserted(n?n:[e]),i
})
}:function(e,n){return o.call(this,e,function(e){var r;
e.nodeType===11&&(r=t.makeArray(e.childNodes));
var i=n.apply(this,arguments);
return t.inserted(r?r:[e]),i
})
};
if(!t.attr.MutationObserver){var a=e.attr;
e.attr=function(e,n){var r,i;
arguments.length>=3&&(r=a.call(this,e,n));
var s=a.apply(this,arguments);
return arguments.length>=3&&(i=a.call(this,e,n)),i!==r&&t.attr.trigger(e,n,r),s
};
var f=e.removeAttr;
e.removeAttr=function(e,n){var r=a.call(this,e,n),i=f.apply(this,arguments);
return r!=null&&t.attr.trigger(e,n,r),i
},e.event.special.attributes={setup:function(){t.data(t.$(this),"canHasAttributesBindings",!0)
},teardown:function(){e.removeData(this,"canHasAttributesBindings")
}}
}else{e.event.special.attributes={setup:function(){var e=this,n=new t.attr.MutationObserver(function(n){n.forEach(function(n){var r=t.simpleExtend({},n);
t.trigger(e,r,[])
})
});
n.observe(this,{attributes:!0,attributeOldValue:!0}),t.data(t.$(this),"canAttributesObserver",n)
},teardown:function(){t.data(t.$(this),"canAttributesObserver").disconnect(),e.removeData(this,"canAttributesObserver")
}}
}return function(){var e="<-\n>",n=t.buildFragment(e,document);
if(e!==n.childNodes[0].nodeValue){var r=t.buildFragment;
t.buildFragment=function(e,t){var n=r(e,t);
return n.childNodes.length===1&&n.childNodes[0].nodeType===3&&(n.childNodes[0].nodeValue=e),n
}
}}(),e.event.special.inserted={},e.event.special.removed={},t
}),define("can/util/library",["can/util/jquery"],function(e){return e
}),define("can/util/bind",["can/util/library"],function(e){return e.bindAndSetup=function(){return e.addEvent.apply(this,arguments),this._init||(this._bindings?this._bindings++:(this._bindings=1,this._bindsetup&&this._bindsetup())),this
},e.unbindAndTeardown=function(t,n){return e.removeEvent.apply(this,arguments),this._bindings===null?this._bindings=0:this._bindings--,!this._bindings&&this._bindteardown&&this._bindteardown(),this
},e
}),define("can/map/bubble",["can/util/library"],function(e){var t=e.bubble={event:function(e,t){return e.constructor._bubbleRule(t,e)
},childrenOf:function(e,n){e._each(function(r,i){r&&r.bind&&t.toParent(r,e,i,n)
})
},teardownChildrenFrom:function(e,n){e._each(function(r){t.teardownFromParent(e,r,n)
})
},toParent:function(t,n,r,i){e.listenTo.call(n,t,i,function(){var i=e.makeArray(arguments),s=i.shift();
i[0]=(e.List&&n instanceof e.List?n.indexOf(t):r)+(i[0]?"."+i[0]:""),s.triggeredNS=s.triggeredNS||{};
if(s.triggeredNS[n._cid]){return
}s.triggeredNS[n._cid]=!0,e.trigger(n,s,i)
})
},teardownFromParent:function(t,n,r){n&&n.unbind&&e.stopListening.call(t,n,r)
},isBubbling:function(e,t){return e._bubbleBindings&&e._bubbleBindings[t]
},bind:function(e,n){if(!e._init){var r=t.event(e,n);
r&&(e._bubbleBindings||(e._bubbleBindings={}),e._bubbleBindings[r]?e._bubbleBindings[r]++:(e._bubbleBindings[r]=1,t.childrenOf(e,r)))
}},unbind:function(n,r){var i=t.event(n,r);
i&&(n._bubbleBindings&&n._bubbleBindings[i]--,n._bubbleBindings&&!n._bubbleBindings[i]&&(delete n._bubbleBindings[i],t.teardownChildrenFrom(n,i),e.isEmptyObject(n._bubbleBindings)&&delete n._bubbleBindings))
},add:function(n,r,i){if(r instanceof e.Map&&n._bubbleBindings){for(var s in n._bubbleBindings){n._bubbleBindings[s]&&(t.teardownFromParent(n,r,s),t.toParent(r,n,i,s))
}}},removeMany:function(e,n){for(var r=0,i=n.length;
r<i;
r++){t.remove(e,n[r])
}},remove:function(n,r){if(r instanceof e.Map&&n._bubbleBindings){for(var i in n._bubbleBindings){n._bubbleBindings[i]&&t.teardownFromParent(n,r,i)
}}},set:function(n,r,i,s){return e.Map.helpers.isObservable(i)&&t.add(n,i,r),e.Map.helpers.isObservable(s)&&t.remove(n,s),i
}};
return t
}),define("can/util/string",["can/util/library"],function(e){var t=/_|-/,n=/\=\=/,r=/([A-Z]+)([A-Z][a-z])/g,i=/([a-z\d])([A-Z])/g,s=/([a-z\d])([A-Z])/g,o=/\{([^\}]+)\}/g,u=/"/g,a=/'/g,f=/-+(.)?/g,l=/[a-z][A-Z]/g,c=function(e,t,n){var r=e[t];
return r===undefined&&n===!0&&(r=e[t]={}),r
},h=function(e){return/^f|^o/.test(typeof e)
},p=function(e){var t=e===null||e===undefined||isNaN(e)&&""+e=="NaN";
return""+(t?"":e)
};
return e.extend(e,{esc:function(e){return p(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(u,"&#34;").replace(a,"&#39;")
},getObject:function(t,n,r){var i=t?t.split("."):[],s=i.length,o,u=0,a,f,l;
n=e.isArray(n)?n:[n||window],l=n.length;
if(!s){return n[0]
}for(u;
u<l;
u++){o=n[u],f=undefined;
for(a=0;
a<s&&h(o);
a++){f=o,o=c(f,i[a])
}if(f!==undefined&&o!==undefined){break
}}r===!1&&o!==undefined&&delete f[i[a-1]];
if(r===!0&&o===undefined){o=n[0];
for(a=0;
a<s&&h(o);
a++){o=c(o,i[a],!0)
}}return o
},capitalize:function(e,t){return e.charAt(0).toUpperCase()+e.slice(1)
},camelize:function(e){return p(e).replace(f,function(e,t){return t?t.toUpperCase():""
})
},hyphenate:function(e){return p(e).replace(l,function(e,t){return e.charAt(0)+"-"+e.charAt(1).toLowerCase()
})
},underscore:function(e){return e.replace(n,"/").replace(r,"$1_$2").replace(i,"$1_$2").replace(s,"_").toLowerCase()
},sub:function(t,n,r){var i=[];
return t=t||"",i.push(t.replace(o,function(t,s){var o=e.getObject(s,n,r===!0?!1:undefined);
return o===undefined||o===null?(i=null,""):h(o)&&i?(i.push(o),""):""+o
})),i===null?i:i.length<=1?i[0]:i
},replacer:o,undHash:t}),e
}),define("can/construct",["can/util/string"],function(e){var t=0,n=function(e,t){var n=Object.getOwnPropertyDescriptor(e,t);
return n&&(n.get||n.set)?n:null
},r=function(t,r,i){i=i||t;
var s;
for(var o in t){(s=n(t,o))?this._defineProperty(i,r,o,s):e.Construct._overwrite(i,r,o,t[o])
}},i=function(t,n,r){r=r||t;
for(var i in t){e.Construct._overwrite(r,n,i,t[i])
}};
return e.Construct=function(){if(arguments.length){return e.Construct.extend.apply(e.Construct,arguments)
}},e.extend(e.Construct,{constructorExtends:!0,newInstance:function(){var e=this.instance(),t;
return e.setup&&(t=e.setup.apply(e,arguments)),e.init&&e.init.apply(e,t||arguments),e
},_inherit:Object.getOwnPropertyDescriptor?r:i,_defineProperty:function(e,t,n,r){Object.defineProperty(e,n,r)
},_overwrite:function(e,t,n,r){e[n]=r
},setup:function(t,n){this.defaults=e.extend(!0,{},t.defaults,this.defaults)
},instance:function(){t=1;
var e=new this;
return t=0,e
},extend:function(n,r,i){function y(){if(!t){return this.constructor!==y&&arguments.length&&y.constructorExtends?y.extend.apply(y,arguments):y.newInstance.apply(y,arguments)
}}var s=n,o=r,u=i;
typeof s!="string"&&(u=o,o=s,s=null),u||(u=o,o=null),u=u||{};
var a=this,f=this.prototype,l,c,h,p,d,v,m,g;
g=this.instance(),e.Construct._inherit(u,f,g);
for(d in a){a.hasOwnProperty(d)&&(y[d]=a[d])
}e.Construct._inherit(o,a,y),s&&(l=s.split("."),v=l.pop(),c=e.getObject(l.join("."),window,!0),m=c,h=e.underscore(s.replace(/\./g,"_")),p=e.underscore(v),c[v]=y),e.extend(y,{constructor:y,prototype:g,namespace:m,_shortName:p,fullName:s,_fullName:h}),v!==undefined&&(y.shortName=v),y.prototype.constructor=y;
var b=[a].concat(e.makeArray(arguments)),w=y.setup.apply(y,b);
return y.init&&y.init.apply(y,w||b),y
}}),e.Construct.prototype.setup=function(){},e.Construct.prototype.init=function(){},e.Construct
}),define("can/util/batch",["can/util/can"],function(e){var t=1,n=0,r=[],i=[];
e.batch={start:function(e){n++,e&&i.push(e)
},stop:function(s,o){s?n=0:n--;
if(n===0){var u=r.slice(0),a=i.slice(0),f,l;
r=[],i=[],t++,o&&e.batch.start();
for(f=0,l=u.length;
f<l;
f++){e.dispatch.apply(u[f][0],u[f][1])
}for(f=0,l=a.length;
f<a.length;
f++){a[f]()
}}},trigger:function(i,s,o){if(!i._init){if(n===0){return e.dispatch.call(i,s,o)
}s=typeof s=="string"?{type:s}:s,s.batchNum=t,r.push([i,[s,o]])
}}}
}),define("can/map",["can/util/library","can/util/bind","can/map/bubble","can/construct","can/util/batch"],function(e,t,n){var r=null,i=function(){for(var e in r){r[e].added&&delete r[e].obj._cid
}r=null
},s=function(e){return r&&r[e._cid]&&r[e._cid].instance
},o=null,u=e.Map=e.Construct.extend({setup:function(){e.Construct.setup.apply(this,arguments);
if(e.Map){this.defaults||(this.defaults={}),this._computes=[];
for(var t in this.prototype){t!=="define"&&t!=="constructor"&&(typeof this.prototype[t]!="function"||this.prototype[t].prototype instanceof e.Construct)?this.defaults[t]=this.prototype[t]:this.prototype[t].isComputed&&this._computes.push(t)
}this.helpers.define&&this.helpers.define(this)
}e.List&&!(this.prototype instanceof e.List)&&(this.List=u.List.extend({Map:this},{}))
},_bubble:n,_bubbleRule:function(e){return(e==="change"||e.indexOf(".")>=0)&&"change"
},_computes:[],bind:e.bindAndSetup,on:e.bindAndSetup,unbind:e.unbindAndTeardown,off:e.unbindAndTeardown,id:"id",helpers:{define:null,attrParts:function(e,t){return t?[e]:typeof e=="object"?e:(""+e).split(".")
},addToMap:function(t,n){var s;
r||(s=i,r={});
var o=t._cid,u=e.cid(t);
return r[u]||(r[u]={obj:t,instance:n,added:!o}),s
},isObservable:function(t){return t instanceof e.Map||t&&t===e.route
},canMakeObserve:function(t){return t&&!e.isDeferred(t)&&(e.isArray(t)||e.isPlainObject(t))
},serialize:function(t,n,r){var i=e.cid(t),s=!1;
return o||(s=!0,o={attr:{},serialize:{}}),o[n][i]=r,t.each(function(i,s){var a,f=u.helpers.isObservable(i),l=f&&o[n][e.cid(i)];
l?a=l:n==="serialize"?a=u.helpers._serialize(t,s,i):a=u.helpers._getValue(t,s,i,n),a!==undefined&&(r[s]=a)
}),e.__reading(t,"__keys"),s&&(o=null),r
},_serialize:function(e,t,n){return u.helpers._getValue(e,t,n,"serialize")
},_getValue:function(e,t,n,r){return u.helpers.isObservable(n)?n[r]():n
}},keys:function(t){var n=[];
e.__reading(t,"__keys");
for(var r in t._data){n.push(r)
}return n
}},{setup:function(t){t instanceof e.Map&&(t=t.serialize()),this._data={},e.cid(this,".map"),this._init=1,this._computedBindings={};
var n=this._setupDefaults(t);
this._setupComputes(n);
var r=t&&e.Map.helpers.addToMap(t,this),i=e.extend(e.extend(!0,{},n),t);
this.attr(i),r&&r(),this.bind("change",e.proxy(this._changes,this)),delete this._init
},_setupComputes:function(){var e=this.constructor._computes;
for(var t=0,n=e.length,r;
t<n;
t++){r=e[t],this[r]=this[r].clone(this),this._computedBindings[r]={count:0}
}},_setupDefaults:function(){return this.constructor.defaults||{}
},_bindsetup:function(){},_bindteardown:function(){},_changes:function(t,n,r,i,s){e.batch.trigger(this,{type:n,batchNum:t.batchNum,target:t.target},[i,s])
},_triggerChange:function(t,r,i,s){n.isBubbling(this,"change")?e.batch.trigger(this,{type:"change",target:this},[t,r,i,s]):e.batch.trigger(this,t,[i,s]),(r==="remove"||r==="add")&&e.batch.trigger(this,{type:"__keys",target:this})
},_each:function(e){var t=this.__get();
for(var n in t){t.hasOwnProperty(n)&&e(t[n],n)
}},attr:function(t,n){var r=typeof t;
return r!=="string"&&r!=="number"?this._attrs(t,n):arguments.length===1?(e.__reading(this,t),this._get(t)):(this._set(t,n),this)
},each:function(){return e.each.apply(undefined,[this].concat(e.makeArray(arguments)))
},removeAttr:function(t){var n=e.List&&this instanceof e.List,r=e.Map.helpers.attrParts(t),i=r.shift(),s=n?this[i]:this._data[i];
return r.length&&s?s.removeAttr(r):(typeof t=="string"&&!!~t.indexOf(".")&&(i=t),this._remove(i,s),s)
},_remove:function(e,t){e in this._data&&(delete this._data[e],e in this.constructor.prototype||delete this[e],this._triggerChange(e,"remove",undefined,t))
},_get:function(e){e=""+e;
var t=e.indexOf(".");
if(t>=0){var n=this.__get(e);
if(n!==undefined){return n
}var r=e.substr(0,t),i=e.substr(t+1),s=this.__get(r);
return s&&s._get?s._get(i):undefined
}return this.__get(e)
},__get:function(e){return e?this._computedBindings[e]?this[e]():this._data[e]:this._data
},__type:function(t,n){if(!(t instanceof e.Map)&&e.Map.helpers.canMakeObserve(t)){var r=s(t);
if(r){return r
}if(e.isArray(t)){var i=e.List;
return new i(t)
}var o=this.constructor.Map||e.Map;
return new o(t)
}return t
},_set:function(e,t,n){e=""+e;
var r=e.indexOf("."),i;
if(!n&&r>=0){var s=e.substr(0,r),o=e.substr(r+1);
i=this._init?undefined:this.__get(s);
if(!u.helpers.isObservable(i)){throw"can.Map: Object does not exist"
}i._set(o,t)
}else{this.__convert&&(t=this.__convert(e,t)),i=this._init?undefined:this.__get(e),this.__set(e,this.__type(t,e),i)
}},__set:function(e,t,n){if(t!==n){var r=n!==undefined||this.__get().hasOwnProperty(e)?"set":"add";
this.___set(e,this.constructor._bubble.set(this,e,t,n)),this._triggerChange(e,r,t,n),n&&this.constructor._bubble.teardownFromParent(this,n)
}},___set:function(e,t){this._computedBindings[e]?this[e](t):this._data[e]=t,typeof this.constructor.prototype[e]!="function"&&!this._computedBindings[e]&&(this[e]=t)
},bind:function(t,n){var r=this._computedBindings&&this._computedBindings[t];
if(r){if(!r.count){r.count=1;
var i=this;
r.handler=function(n,r,s){e.batch.trigger(i,{type:t,batchNum:n.batchNum,target:i},[r,s])
},this[t].bind("change",r.handler)
}else{r.count++
}}return this.constructor._bubble.bind(this,t),e.bindAndSetup.apply(this,arguments)
},unbind:function(t,n){var r=this._computedBindings&&this._computedBindings[t];
return r&&(r.count===1?(r.count=0,this[t].unbind("change",r.handler),delete r.handler):r.count--),this.constructor._bubble.unbind(this,t),e.unbindAndTeardown.apply(this,arguments)
},serialize:function(){return e.Map.helpers.serialize(this,"serialize",{})
},_attrs:function(t,n){if(t===undefined){return u.helpers.serialize(this,"attr",{})
}t=e.simpleExtend({},t);
var r,i=this,s;
e.batch.start(),this.each(function(e,r){if(r==="_cid"){return
}s=t[r];
if(s===undefined){n&&i.removeAttr(r);
return
}i.__convert&&(s=i.__convert(r,s)),u.helpers.isObservable(s)?i.__set(r,i.__type(s,r),e):u.helpers.isObservable(e)&&u.helpers.canMakeObserve(s)?e.attr(s,n):e!==s&&i.__set(r,i.__type(s,r),e),delete t[r]
});
for(r in t){r!=="_cid"&&(s=t[r],this._set(r,s,!0))
}return e.batch.stop(),this
},compute:function(t){if(e.isFunction(this.constructor.prototype[t])){return e.compute(this[t],this)
}var n=t.split("."),r=n.length-1,i={args:[]};
return e.compute(function(t){if(!arguments.length){return e.compute.read(this,n,i).value
}e.compute.read(this,n.slice(0,r)).value.attr(n[r],t)
},this)
}});
return u.prototype.on=u.prototype.bind,u.prototype.off=u.prototype.unbind,u
}),define("can/list",["can/util/library","can/map","can/map/bubble"],function(e,t,n){var r=[].splice,i=function(){var e={0:"a",length:1};
return r.call(e,0,1),!e[0]
}(),s=t.extend({Map:t},{setup:function(t,n){this.length=0,e.cid(this,".map"),this._init=1,this._computedBindings={},this._setupComputes(),t=t||[];
var r;
e.isDeferred(t)?this.replace(t):(r=t.length&&e.Map.helpers.addToMap(t,this),this.push.apply(this,e.makeArray(t||[]))),r&&r(),this.bind("change",e.proxy(this._changes,this)),e.simpleExtend(this,n),delete this._init
},_triggerChange:function(n,r,i,s){t.prototype._triggerChange.apply(this,arguments);
var o=+n;
!~n.indexOf(".")&&!isNaN(o)&&(r==="add"?(e.batch.trigger(this,r,[i,o]),e.batch.trigger(this,"length",[this.length])):r==="remove"?(e.batch.trigger(this,r,[s,o]),e.batch.trigger(this,"length",[this.length])):e.batch.trigger(this,r,[i,o]))
},__get:function(t){return t?this[t]&&this[t].isComputed&&e.isFunction(this.constructor.prototype[t])?this[t]():this[t]:this
},___set:function(e,t){this[e]=t,+e>=this.length&&(this.length=+e+1)
},_remove:function(e,t){isNaN(+e)?(delete this[e],this._triggerChange(e,"remove",undefined,t)):this.splice(e,1)
},_each:function(e){var t=this.__get();
for(var n=0;
n<t.length;
n++){e(t[n],n)
}},serialize:function(){return t.helpers.serialize(this,"serialize",[])
},splice:function(t,s){var o=e.makeArray(arguments),u=[],a,f;
for(a=2,f=o.length;
a<f;
a++){o[a]=this.__type(o[a],a),u.push(o[a])
}s===undefined&&(s=o[1]=this.length-t);
var l=r.apply(this,o);
if(!i){for(a=this.length;
a<l.length+this.length;
a++){delete this[a]
}}e.batch.start(),s>0&&(n.removeMany(this,l),this._triggerChange(""+t,"remove",undefined,l));
if(o.length>2){for(a=0,f=u.length;
a<f;
a++){n.set(this,a,u[a])
}this._triggerChange(""+t,"add",u,l)
}return e.batch.stop(),l
},_attrs:function(n,r){if(n===undefined){return t.helpers.serialize(this,"attr",[])
}n=e.makeArray(n),e.batch.start(),this._updateAttrs(n,r),e.batch.stop()
},_updateAttrs:function(e,n){var r=Math.min(e.length,this.length);
for(var i=0;
i<r;
i++){var s=this[i],o=e[i];
t.helpers.isObservable(s)&&t.helpers.canMakeObserve(o)?s.attr(o,n):s!==o&&this._set(i,o)
}e.length>this.length?this.push.apply(this,e.slice(this.length)):e.length<this.length&&n&&this.splice(e.length)
}}),o=function(t){return t[0]&&e.isArray(t[0])?t[0]:e.makeArray(t)
};
return e.each({push:"length",unshift:0},function(e,t){var r=[][t];
s.prototype[t]=function(){var t=[],i=e?this.length:0,s=arguments.length,o,u;
while(s--){u=arguments[s],t[s]=n.set(this,s,this.__type(u,s))
}return o=r.apply(this,t),(!this.comparator||t.length)&&this._triggerChange(""+i,"add",t,undefined),o
}
}),e.each({pop:"length",shift:0},function(e,t){s.prototype[t]=function(){var r=o(arguments),i=e&&this.length?this.length-1:0,s=[][t].apply(this,r);
return this._triggerChange(""+i,"remove",undefined,[s]),s&&s.unbind&&n.remove(this,s),s
}
}),e.extend(s.prototype,{indexOf:function(t,n){return this.attr("length"),e.inArray(t,this,n)
},join:function(){return[].join.apply(this.attr(),arguments)
},reverse:function(){var t=e.makeArray([].reverse.call(this));
this.replace(t)
},slice:function(){var e=Array.prototype.slice.apply(this,arguments);
return new this.constructor(e)
},concat:function(){var t=[];
return e.each(e.makeArray(arguments),function(n,r){t[r]=n instanceof e.List?n.serialize():n
}),new this.constructor(Array.prototype.concat.apply(this.serialize(),t))
},forEach:function(t,n){return e.each(this,t,n||this)
},replace:function(t){return e.isDeferred(t)?t.then(e.proxy(this.replace,this)):this.splice.apply(this,[0,this.length].concat(e.makeArray(t||[]))),this
},filter:function(t,n){var r=new e.List,i=this,s;
return this.each(function(e,o,u){s=t.call(n|i,e,o,i),s&&r.push(e)
}),r
}}),e.List=t.List=s,e.List
}),define("can/util/string/deparam",["can/util/library","can/util/string"],function(e){var t=/^\d+$/,n=/([^\[\]]+)|(\[\])/g,r=/([^?#]*)(#.*)?$/,i=function(e){return decodeURIComponent(e.replace(/\+/g," "))
};
return e.extend(e,{deparam:function(s){var o={},u,a;
return s&&r.test(s)&&(u=s.split("&"),e.each(u,function(e){var r=e.split("="),s=i(r.shift()),u=i(r.join("=")),f=o;
if(s){r=s.match(n);
for(var l=0,c=r.length-1;
l<c;
l++){f[r[l]]||(f[r[l]]=t.test(r[l+1])||r[l+1]==="[]"?[]:{}),f=f[r[l]]
}a=r.pop(),a==="[]"?f.push(u):f[a]=u
}})),o
}}),e
}),define("can/route",["can/util/library","can/map","can/list","can/util/string/deparam"],function(e){var t=/\:([\w\.]+)/g,n=/^(?:&[^=]+=[^&]*)+/,r=function(t){var n=[];
return e.each(t,function(t,r){n.push((r==="className"?"class":r)+'="'+(r==="href"?t:e.esc(t))+'"')
}),n.join(" ")
},i=function(e,t){var n=0,r=0,i={};
for(var s in e.defaults){e.defaults[s]===t[s]&&(i[s]=1,n++)
}for(;
r<e.names.length;
r++){if(!t.hasOwnProperty(e.names[r])){return -1
}i[e.names[r]]||n++
}return n
},s=window.location,o=function(e){return(e+"").replace(/([.?*+\^$\[\]\\(){}|\-])/g,"\\$1")
},u=e.each,a=e.extend,f=function(t){return t&&typeof t=="object"?(t instanceof e.Map?t=t.attr():t=e.isFunction(t.slice)?t.slice():e.extend({},t),e.each(t,function(e,n){t[n]=f(e)
})):t!==undefined&&t!==null&&e.isFunction(t.toString)&&(t=t.toString()),t
},l=function(e){return e.replace(/\\/g,"")
},c,h,p,d,v=function(t,n,r,i){d=1,clearTimeout(c),c=setTimeout(function(){d=0;
var t=e.route.data.serialize(),n=e.route.param(t,!0);
e.route._call("setURL",n),e.batch.trigger(m,"__url",[n,p]),p=n
},10)
},m=e.extend({},e.event);
e.route=function(n,r){var i=e.route._call("root");
i.lastIndexOf("/")===i.length-1&&n.indexOf("/")===0&&(n=n.substr(1)),r=r||{};
var s=[],u,a="",f=t.lastIndex=0,c,h=e.route._call("querySeparator"),p=e.route._call("matchSlashes");
while(u=t.exec(n)){s.push(u[1]),a+=l(n.substring(f,t.lastIndex-u[0].length)),c="\\"+(l(n.substr(t.lastIndex,1))||h+(p?"":"|/")),a+="([^"+c+"]"+(r[u[1]]?"*":"+")+")",f=t.lastIndex
}return a+=n.substr(f).replace("\\",""),e.route.routes[n]={test:new RegExp("^"+a+"($|"+o(h)+")"),route:n,names:s,defaults:r,length:n.split("/").length},e.route
},a(e.route,{param:function(n,r){var s,o=0,f,l=n.route,c=0;
delete n.route,u(n,function(){c++
}),u(e.route.routes,function(e,t){f=i(e,n),f>o&&(s=e,o=f);
if(f>=c){return !1
}}),e.route.routes[l]&&i(e.route.routes[l],n)===o&&(s=e.route.routes[l]);
if(s){var h=a({},n),p=s.route.replace(t,function(e,t){return delete h[t],n[t]===s.defaults[t]?"":encodeURIComponent(n[t])
}).replace("\\",""),d;
return u(s.defaults,function(e,t){h[t]===e&&delete h[t]
}),d=e.param(h),r&&e.route.attr("route",s.route),p+(d?e.route._call("querySeparator")+d:"")
}return e.isEmptyObject(n)?"":e.route._call("querySeparator")+e.param(n)
},deparam:function(t){var n=e.route._call("root");
n.lastIndexOf("/")===n.length-1&&t.indexOf("/")===0&&(t=t.substr(1));
var r={length:-1},i=e.route._call("querySeparator"),s=e.route._call("paramsMatcher");
u(e.route.routes,function(e,n){e.test.test(t)&&e.length>r.length&&(r=e)
});
if(r.length>-1){var o=t.match(r.test),f=o.shift(),l=t.substr(f.length-(o[o.length-1]===i?1:0)),c=l&&s.test(l)?e.deparam(l.slice(1)):{};
return c=a(!0,{},r.defaults,c),u(o,function(e,t){e&&e!==i&&(c[r.names[t]]=decodeURIComponent(e))
}),c.route=r.route,c
}return t.charAt(0)!==i&&(t=i+t),s.test(t)?e.deparam(t.slice(1)):{}
},data:new e.Map({}),map:function(t){var n;
t.prototype instanceof e.Map?n=new t:n=t,e.route.data=n
},routes:{},ready:function(t){return t!==!0&&(e.route._setup(),e.route.setState()),e.route
},url:function(t,n){return n&&(t=e.extend({},e.route.deparam(e.route._call("matchingPartOfURL")),t)),e.route._call("root")+e.route.param(t)
},link:function(t,n,i,s){return"<a "+r(a({href:e.route.url(n,s)},i))+">"+t+"</a>"
},current:function(t){return e.__reading(m,"__url"),this._call("matchingPartOfURL")===e.route.param(t)
},bindings:{hashchange:{paramsMatcher:n,querySeparator:"&",matchSlashes:!1,bind:function(){e.bind.call(window,"hashchange",g)
},unbind:function(){e.unbind.call(window,"hashchange",g)
},matchingPartOfURL:function(){return s.href.split(/#!?/)[1]||""
},setURL:function(e){return s.hash="#!"+e,e
},root:"#!"}},defaultBinding:"hashchange",currentBinding:null,_setup:function(){e.route.currentBinding||(e.route._call("bind"),e.route.bind("change",v),e.route.currentBinding=e.route.defaultBinding)
},_teardown:function(){e.route.currentBinding&&(e.route._call("unbind"),e.route.unbind("change",v),e.route.currentBinding=null),clearTimeout(c),d=0
},_call:function(){var t=e.makeArray(arguments),n=t.shift(),r=e.route.bindings[e.route.currentBinding||e.route.defaultBinding],i=r[n];
return i.apply?i.apply(r,t):i
}}),u(["bind","unbind","on","off","delegate","undelegate","removeAttr","compute","_get","__get","each"],function(t){e.route[t]=function(){if(!e.route.data[t]){return
}return e.route.data[t].apply(e.route.data,arguments)
}
}),e.route.attr=function(t,n){var r=typeof t,i;
return n===undefined?i=arguments:r!=="string"&&r!=="number"?i=[f(t),n]:i=[t,f(n)],e.route.data.attr.apply(e.route.data,i)
};
var g=e.route.setState=function(){var t=e.route._call("matchingPartOfURL"),n=h;
h=e.route.deparam(t);
if(!d||t!==p){e.batch.start();
for(var r in n){h[r]||e.route.removeAttr(r)
}e.route.attr(h),e.batch.trigger(m,"__url",[t,p]),e.batch.stop()
}};
return e.route
}),define("can/control",["can/util/library","can/construct"],function(e){var t=function(t,n,r){return e.bind.call(t,n,r),function(){e.unbind.call(t,n,r)
}
},n=e.isFunction,r=e.extend,i=e.each,s=[].slice,o=/\{([^\}]+)\}/g,u=e.getObject("$.event.special",[e])||{},a=function(t,n,r,i){return e.delegate.call(t,n,r,i),function(){e.undelegate.call(t,n,r,i)
}
},f=function(n,r,i,s){return s?a(n,e.trim(s),r,i):t(n,r,i)
},l,c=e.Control=e.Construct({setup:function(){e.Construct.setup.apply(this,arguments);
if(e.Control){var t=this,n;
t.actions={};
for(n in t.prototype){t._isAction(n)&&(t.actions[n]=t._action(n))
}}},_shifter:function(t,r){var i=typeof r=="string"?t[r]:r;
return n(i)||(i=t[i]),function(){return t.called=r,i.apply(t,[this.nodeName?e.$(this):this].concat(s.call(arguments,0)))
}
},_isAction:function(e){var t=this.prototype[e],r=typeof t;
return e!=="constructor"&&(r==="function"||r==="string"&&n(this.prototype[t]))&&!!(u[e]||h[e]||/[^\w]/.test(e))
},_action:function(t,n){o.lastIndex=0;
if(n||!o.test(t)){var r=n?e.sub(t,this._lookup(n)):t;
if(!r){return null
}var i=e.isArray(r),s=i?r[1]:r,u=s.split(/\s+/g),a=u.pop();
return{processor:h[a]||l,parts:[s,u.join(" "),a],delegate:i?r[0]:undefined}
}},_lookup:function(e){return[e,window]
},processors:{},defaults:{}},{setup:function(t,n){var i=this.constructor,s=i.pluginName||i._fullName,o;
return this.element=e.$(t),s&&s!=="can_control"&&this.element.addClass(s),o=e.data(this.element,"controls"),o||(o=[],e.data(this.element,"controls",o)),o.push(this),this.options=r({},i.defaults,n),this.on(),[this.element,this.options]
},on:function(t,n,r,i){if(!t){this.off();
var s=this.constructor,o=this._bindings,u=s.actions,a=this.element,l=e.Control._shifter(this,"destroy"),c,h;
for(c in u){u.hasOwnProperty(c)&&(h=u[c]||s._action(c,this.options,this),h&&(o.control[c]=h.processor(h.delegate||a,h.parts[2],h.parts[1],c,this)))
}return e.bind.call(a,"removed",l),o.user.push(function(t){e.unbind.call(t,"removed",l)
}),o.user.length
}return typeof t=="string"&&(i=r,r=n,n=t,t=this.element),i===undefined&&(i=r,r=n,n=null),typeof i=="string"&&(i=e.Control._shifter(this,i)),this._bindings.user.push(f(t,r,i,n)),this._bindings.user.length
},off:function(){var e=this.element[0],t=this._bindings;
t&&(i(t.user||[],function(t){t(e)
}),i(t.control||{},function(t){t(e)
})),this._bindings={user:[],control:{}}
},destroy:function(){if(this.element===null){return
}var t=this.constructor,n=t.pluginName||t._fullName,r;
this.off(),n&&n!=="can_control"&&this.element.removeClass(n),r=e.data(this.element,"controls"),r.splice(e.inArray(this,r),1),e.trigger(this,"destroyed"),this.element=null
}}),h=e.Control.processors;
return l=function(t,n,r,i,s){return f(t,n,e.Control._shifter(s,i),r)
},i(["change","click","contextmenu","dblclick","keydown","keyup","keypress","mousedown","mousemove","mouseout","mouseover","mouseup","reset","resize","scroll","select","submit","focusin","focusout","mouseenter","mouseleave","touchstart","touchmove","touchcancel","touchend","touchleave","inserted","removed"],function(e){h[e]=l
}),c
}),define("can/control/route",["can/util/library","can/route","can/control"],function(e){return e.Control.processors.route=function(t,n,r,i,s){r=r||"",e.route.routes[r]||(r[0]==="/"&&(r=r.substring(1)),e.route(r));
var o,u=function(t,n,u){if(e.route.attr("route")===r&&(t.batchNum===undefined||t.batchNum!==o)){o=t.batchNum;
var a=e.route.attr();
delete a.route,e.isFunction(s[i])?s[i](a):s[s[i]](a)
}};
return e.route.bind("change",u),function(){e.route.unbind("change",u)
}
},e
}),define("can/model",["can/util/library","can/map","can/list"],function(e){var t=function(t,n,r){var i=new e.Deferred;
return t.then(function(){var t=e.makeArray(arguments),s=!0;
try{t[0]=r.apply(n,t)
}catch(o){s=!1,i.rejectWith(i,[o].concat(t))
}s&&i.resolveWith(i,t)
},function(){i.rejectWith(this,arguments)
}),typeof t.abort=="function"&&(i.abort=function(){return t.abort()
}),i
},n=0,r=function(t){return e.__reading(t,t.constructor.id),t.__get(t.constructor.id)
},i=function(t,n,r,i,s,o){var u={};
if(typeof t=="string"){var a=t.split(/\s+/);
u.url=a.pop(),a.length&&(u.type=a.pop())
}else{e.extend(u,t)
}return u.data=typeof n=="object"&&!e.isArray(n)?e.extend(u.data||{},n):n,u.url=e.sub(u.url,u.data,!0),e.ajax(e.extend({type:r||"post",dataType:i||"json",success:s,error:o},u))
},s=function(n,i,s,o,u){var a;
e.isArray(n)?(a=n[1],n=n[0]):a=n.serialize(),a=[a];
var f,l=n.constructor,c;
return(i==="update"||i==="destroy")&&a.unshift(r(n)),c=l[i].apply(l,a),f=t(c,n,function(e){return n[u||i+"d"](e,c),n
}),c.abort&&(f.abort=function(){c.abort()
}),f.then(s,o),f
},o={models:function(t,n,r){e.Model._reqs++;
if(!t){return
}if(t instanceof this.List){return t
}var i=this,s=[],o=i.List||d,u=n instanceof e.List?n:new o,a=t instanceof d,f=a?t.serialize():t;
f=i.parseModels(f,r),f.data&&(t=f,f=f.data);
if(typeof f=="undefined"){throw new Error("Could not get any raw data while converting using .models")
}return u.length&&u.splice(0),e.each(f,function(e){s.push(i.model(e,r))
}),u.push.apply(u,s),e.isArray(t)||e.each(t,function(e,t){t!=="data"&&u.attr(t,e)
}),setTimeout(e.proxy(this._clean,this),1),u
},model:function(t,n,r){if(!t){return
}typeof t.serialize=="function"?t=t.serialize():t=this.parseModel(t,r);
var i=t[this.id];
(i||i===0)&&this.store[i]&&(n=this.store[i]);
var s=n&&e.isFunction(n.attr)?n.attr(t,this.removeAttr||!1):new this(t);
return s
}},u={parseModel:function(t){return function(n){return t?e.getObject(t,n):n
}
},parseModels:function(t){return function(n){if(e.isArray(n)){return n
}t=t||"data";
var r=e.getObject(t,n);
if(!e.isArray(r)){throw new Error("Could not get any raw data while converting using .models")
}return r
}
}},a={create:{url:"_shortName",type:"post"},update:{data:function(t,n){n=n||{};
var r=this.id;
return n[r]&&n[r]!==t&&(n["new"+e.capitalize(t)]=n[r],delete n[r]),n[r]=t,n
},type:"put"},destroy:{type:"delete",data:function(e,t){return t=t||{},t.id=t[this.id]=e,t
}},findAll:{url:"_shortName"},findOne:{}},f=function(e,t){return function(n){return n=e.data?e.data.apply(this,arguments):n,i(t||this[e.url||"_url"],n,e.type||"get")
}
},l=function(e,t){if(!e.resource){return
}var n=e.resource.replace(/\/+$/,"");
return t==="findAll"||t==="create"?n:n+"/{"+e.id+"}"
};
e.Model=e.Map.extend({fullName:"can.Model",_reqs:0,setup:function(t,r,i,s){typeof r!="string"&&(s=i,i=r),s||(s=i),this.store={},e.Map.setup.apply(this,arguments);
if(!e.Model){return
}i&&i.List?(this.List=i.List,this.List.Map=this):this.List=t.List.extend({Map:this},{});
var c=this,h=e.proxy(this._clean,c);
e.each(a,function(n,r){i&&i[r]&&(typeof i[r]=="string"||typeof i[r]=="object")?c[r]=f(n,i[r]):i&&i.resource&&!e.isFunction(i[r])&&(c[r]=f(n,l(c,r)));
if(c["make"+e.capitalize(r)]){var s=c["make"+e.capitalize(r)](c[r]);
e.Construct._overwrite(c,t,r,function(){e.Model._reqs++;
var t=s.apply(this,arguments),n=t.then(h,h);
return n.abort=t.abort,n
})
}});
var p={};
e.each(o,function(n,r){var s="parse"+e.capitalize(r),o=i&&i[r]||c[r];
typeof o=="string"?(c[s]=o,e.Construct._overwrite(c,t,r,n)):i&&i[r]&&(p[s]=!0)
}),e.each(u,function(n,r){var s=i&&i[r]||c[r];
if(typeof s=="string"){e.Construct._overwrite(c,t,r,n(s))
}else{if((!i||!e.isFunction(i[r]))&&!c[r]){var o=n();
o.useModelConverter=p[r],e.Construct._overwrite(c,t,r,o)
}}});
if(c.fullName==="can.Model"||!c.fullName){c.fullName="Model"+ ++n
}e.Model._reqs=0,this._url=this._shortName+"/{"+this.id+"}"
},_ajax:f,_makeRequest:s,_clean:function(){e.Model._reqs--;
if(!e.Model._reqs){for(var t in this.store){this.store[t]._bindings||delete this.store[t]
}}return arguments[0]
},models:o.models,model:o.model},{setup:function(t){var n=t&&t[this.constructor.id];
e.Model._reqs&&n!=null&&(this.constructor.store[n]=this),e.Map.prototype.setup.apply(this,arguments)
},isNew:function(){var e=r(this);
return !e&&e!==0
},save:function(e,t){return s(this,this.isNew()?"create":"update",e,t)
},destroy:function(t,n){if(this.isNew()){var r=this,i=e.Deferred();
return i.then(t,n),i.done(function(e){r.destroyed(e)
}).resolve(r)
}return s(this,"destroy",t,n,"destroyed")
},_bindsetup:function(){return this.constructor.store[this.__get(this.constructor.id)]=this,e.Map.prototype._bindsetup.apply(this,arguments)
},_bindteardown:function(){return delete this.constructor.store[r(this)],e.Map.prototype._bindteardown.apply(this,arguments)
},___set:function(t,n){e.Map.prototype.___set.call(this,t,n),t===this.constructor.id&&this._bindings&&(this.constructor.store[r(this)]=this)
}});
var c=function(e){return function(t,n,r){return this[e](t,null,r)
}
},h=function(e){return this.parseModel.useModelConverter?this.model(e):this.parseModel(e)
},p={makeFindAll:c("models"),makeFindOne:c("model"),makeCreate:h,makeUpdate:h};
e.each(p,function(n,r){e.Model[r]=function(r){return function(){var i=e.makeArray(arguments),s=e.isFunction(i[1])?i.splice(0,1):i.splice(0,2),o=t(r.apply(this,s),this,n);
return o.then(i[0],i[1]),o
}
}
}),e.each(["created","updated","destroyed"],function(t){e.Model.prototype[t]=function(n){var r=this,i=r.constructor;
n&&typeof n=="object"&&this.attr(e.isFunction(n.attr)?n.attr():n),e.dispatch.call(this,{type:"change",target:this},[t]),e.dispatch.call(i,t,[this])
}
});
var d=e.Model.List=e.List.extend({_bubbleRule:function(t,n){return e.List._bubbleRule(t,n)||"destroyed"
}},{setup:function(t){e.isPlainObject(t)&&!e.isArray(t)?(e.List.prototype.setup.apply(this),this.replace(e.isDeferred(t)?t:this.constructor.Map.findAll(t))):e.List.prototype.setup.apply(this,arguments),this._init=1,this.bind("destroyed",e.proxy(this._destroyed,this)),delete this._init
},_destroyed:function(e,t){if(/\w+/.test(t)){var n;
while((n=this.indexOf(e.target))>-1){this.splice(n,1)
}}}});
return e.Model
}),define("can/view",["can/util/library"],function(e){var t=e.isFunction,n=e.makeArray,r=1,i=function(e){var t=function(){return f.frag(e.apply(this,arguments))
};
return t.render=function(){return e.apply(e,arguments)
},t
},s=function(e,t){if(!e.length){throw"can.view: No template or empty template:"+t
}},o=function(n,r){if(t(n)){var i=e.Deferred();
return i.resolve(n)
}var o=typeof n=="string"?n:n.url,u=n.engine&&"."+n.engine||o.match(/\.[\w\d]+$/),a,l,c;
o.match(/^#/)&&(o=o.substr(1));
if(l=document.getElementById(o)){u="."+l.type.match(/\/(x\-)?(.+)/)[2]
}!u&&!f.cached[o]&&(o+=u=f.ext),e.isArray(u)&&(u=u[0]),c=f.toId(o),o.match(/^\/\//)&&(o=o.substr(2),o=window.steal?steal.config().root.mapJoin(""+steal.id(o)):o),window.require&&require.toUrl&&(o=require.toUrl(o)),a=f.types[u];
if(f.cached[c]){return f.cached[c]
}if(l){return f.registerView(c,l.innerHTML,a)
}var h=new e.Deferred;
return e.ajax({async:r,url:o,dataType:"text",error:function(e){s("",o),h.reject(e)
},success:function(e){s(e,o),f.registerView(c,e,a,h)
}}),h
},u=function(t){var n=[];
if(e.isDeferred(t)){return[t]
}for(var r in t){e.isDeferred(t[r])&&n.push(t[r])
}return n
},a=function(t){return e.isArray(t)&&t[1]==="success"?t[0]:t
},f=e.view=e.template=function(e,n,r,i){return t(r)&&(i=r,r=undefined),f.renderAs("fragment",e,n,r,i)
};
return e.extend(f,{frag:function(e,t){return f.hookup(f.fragment(e),t)
},fragment:function(t){if(typeof t!="string"&&t.nodeType===11){return t
}var n=e.buildFragment(t,document.body);
return n.childNodes.length||n.appendChild(document.createTextNode("")),n
},toId:function(t){return e.map(t.toString().split(/\/|\./g),function(e){if(e){return e
}}).join("_")
},toStr:function(e){return e==null?"":""+e
},hookup:function(t,n){var r=[],i,s;
return e.each(t.childNodes?e.makeArray(t.childNodes):t,function(t){t.nodeType===1&&(r.push(t),r.push.apply(r,e.makeArray(t.getElementsByTagName("*"))))
}),e.each(r,function(e){e.getAttribute&&(i=e.getAttribute("data-view-id"))&&(s=f.hookups[i])&&(s(e,n,i),delete f.hookups[i],e.removeAttribute("data-view-id"))
}),t
},hookups:{},hook:function(e){return f.hookups[++r]=e," data-view-id='"+r+"'"
},cached:{},cachedRenderers:{},cache:!0,register:function(t){this.types["."+t.suffix]=t,e[t.suffix]=f[t.suffix]=function(e,n){var r,s;
if(!n){return s=function(){return r||(t.fragRenderer?r=t.fragRenderer(null,e):r=i(t.renderer(null,e))),r.apply(this,arguments)
},s.render=function(){var n=t.renderer(null,e);
return n.apply(n,arguments)
},s
}var o=function(){return r||(t.fragRenderer?r=t.fragRenderer(e,n):r=t.renderer(e,n)),r.apply(this,arguments)
};
return t.fragRenderer?f.preload(e,o):f.preloadStringRenderer(e,o)
}
},types:{},ext:".ejs",registerScript:function(e,t,n){return"can.view.preloadStringRenderer('"+t+"',"+f.types["."+e].script(t,n)+");"
},preload:function(t,n){var r=f.cached[t]=(new e.Deferred).resolve(function(e,t){return n.call(e,e,t)
});
return r.__view_id=t,f.cachedRenderers[t]=n,n
},preloadStringRenderer:function(e,t){return this.preload(e,i(t))
},render:function(t,n,r,i){return e.view.renderAs("string",t,n,r,i)
},renderTo:function(e,t,n,r){return(e==="string"&&t.render?t.render:t)(n,r)
},renderAs:function(r,i,s,l,c){t(l)&&(c=l,l=undefined);
var h=u(s),p,d,v,m,g;
if(h.length){return d=new e.Deferred,v=e.extend({},s),h.push(o(i,!0)),e.when.apply(e,h).then(function(t){var i=n(arguments),o=i.pop(),u;
if(e.isDeferred(s)){v=a(t)
}else{for(var f in s){e.isDeferred(s[f])&&(v[f]=a(i.shift()))
}}u=e.view.renderTo(r,o,v,l),d.resolve(u,v),c&&c(u,v)
},function(){d.reject.apply(d,arguments)
}),d
}p=e.__clearReading(),m=t(c),d=o(i,m),p&&e.__setReading(p);
if(m){g=d,d.then(function(t){c(s?e.view.renderTo(r,t,s,l):t)
})
}else{if(d.state()==="resolved"&&d.__view_id){var y=f.cachedRenderers[d.__view_id];
return s?e.view.renderTo(r,y,s,l):y
}d.then(function(t){g=s?e.view.renderTo(r,t,s,l):t
})
}return g
},registerView:function(t,n,r,s){var o=typeof r=="object"?r:f.types[r||f.ext],u;
return o.fragRenderer?u=o.fragRenderer(t,n):u=i(o.renderer(t,n)),s=s||new e.Deferred,f.cache&&(f.cached[t]=s,s.__view_id=t,f.cachedRenderers[t]=u),s.resolve(u)
}}),e
}),define("can/compute",["can/util/library","can/util/bind","can/util/batch"],function(e,t){var n=[];
e.__read=function(e,t){n.push({});
var r=e.call(t);
return{value:r,observed:n.pop()}
},e.__reading=function(e,t){n.length&&(n[n.length-1][e._cid+"|"+t]={obj:e,event:t+""})
},e.__clearReading=function(){if(n.length){var e=n[n.length-1];
return n[n.length-1]={},e
}},e.__setReading=function(e){n.length&&(n[n.length-1]=e)
},e.__addReading=function(t){n.length&&e.simpleExtend(n[n.length-1],t)
};
var r=function(t,n,r,s){var u=e.__read(t,n),a=u.observed;
return i(r,a,s),o(r,s),u
},i=function(e,t,n){for(var r in t){s(e,t,r,n)
}},s=function(e,t,n,r){if(e[n]){delete e[n]
}else{var i=t[n];
i.obj.bind(i.event,r)
}},o=function(e,t){for(var n in e){var r=e[n];
r.obj.unbind(r.event,t)
}},u=function(t,n,r,i){n!==r&&e.batch.trigger(t,i?{type:"change",batchNum:i}:"change",[n,r])
},a=function(t,n,i,s){var o,u,a;
return{on:function(f){u||(u=function(e){if(t.bound&&(e.batchNum===undefined||e.batchNum!==a)){var s=o.value;
o=r(n,i,o.observed,u),f(o.value,s,e.batchNum),a=a=e.batchNum
}}),o=r(n,i,{},u),s(o.value),t.hasDependencies=!e.isEmptyObject(o.observed)
},off:function(e){for(var t in o.observed){var n=o.observed[t];
n.obj.unbind(n.event,u)
}}}
},f=function(t,n,i,s){var o,u,a,f;
return{on:function(l){a||(a=function(r){if(t.bound&&(r.batchNum===undefined||r.batchNum!==f)){var s=e.__clearReading(),o=n.call(i);
e.__setReading(s),l(o,u,r.batchNum),u=o,f=f=r.batchNum
}}),o=r(n,i,{},a),u=o.value,s(o.value),t.hasDependencies=!e.isEmptyObject(o.observed)
},off:function(e){for(var t in o.observed){var n=o.observed[t];
n.obj.unbind(n.event,a)
}}}
},l=function(t){return t instanceof e.Map||t&&t.__get
},c=function(){};
e.compute=function(t,r,i,s){if(t&&t.isComputed){return t
}var o,l=c,h=c,p,d=function(){return p
},v=function(e){p=e
},m=v,g=[],y=function(e,t,n){m(e),u(o,e,t,n)
},b;
for(var w=0,E=arguments.length;
w<E;
w++){g[w]=arguments[w]
}o=function(t){if(arguments.length){var i=p,s=v.call(r,t,i);
return o.hasDependencies?d.call(r):(s===undefined?p=d.call(r):p=s,u(o,p,i),p)
}return n.length&&o.canReadForChangeEvent!==!1&&(e.__reading(o,"change"),o.bound||e.compute.temporarilyBind(o)),o.bound?p:d.call(r)
};
if(typeof t=="function"){v=t,d=t,o.canReadForChangeEvent=i===!1?!1:!0;
var S=s?f(o,t,r||this,m):a(o,t,r||this,m);
l=S.on,h=S.off
}else{if(r){if(typeof r=="string"){var x=r,T=t instanceof e.Map;
if(T){o.hasDependencies=!0;
var N;
d=function(){return t.attr(x)
},v=function(e){t.attr(x,e)
},l=function(n){N=function(e,t,r){n(t,r,e.batchNum)
},t.bind(i||x,N),p=e.__read(d).value
},h=function(e){t.unbind(i||x,N)
}
}else{d=function(){return t[x]
},v=function(e){t[x]=e
},l=function(n){N=function(){n(d(),p)
},e.bind.call(t,i||x,N),p=e.__read(d).value
},h=function(n){e.unbind.call(t,i||x,N)
}
}}else{if(typeof r=="function"){p=t,v=r,r=i,b="setter"
}else{p=t;
var C=r,L=y;
r=C.context||C,d=C.get||d,v=C.set||function(){return p
};
if(C.fn){var A=C.fn,O;
d=function(){return A.call(r,p)
},A.length===0?O=a(o,A,r,m):A.length===1?O=a(o,function(){return A.call(r,p)
},r,m):(y=function(e){e!==undefined&&L(e,p)
},O=a(o,function(){var e=A.call(r,p,function(e){L(e,p)
});
return e!==undefined?e:p
},r,m)),l=O.on,h=O.off
}else{y=function(){var e=d.call(r);
L(e,p)
}
}l=C.on||l,h=C.off||h
}}}else{p=t
}}return e.cid(o,"compute"),e.simpleExtend(o,{isComputed:!0,_bindsetup:function(){this.bound=!0;
var t=e.__clearReading();
l.call(this,y),e.__setReading(t)
},_bindteardown:function(){h.call(this,y),this.bound=!1
},bind:e.bindAndSetup,unbind:e.unbindAndTeardown,clone:function(t){return t&&(b==="setter"?g[2]=t:g[1]=t),e.compute.apply(e,g)
}})
};
var h,p=function(){for(var e=0,t=h.length;
e<t;
e++){h[e].unbind("change",c)
}h=null
};
return e.compute.temporarilyBind=function(e){e.bind("change",c),h||(h=[],setTimeout(p,10)),h.push(e)
},e.compute.truthy=function(t){return e.compute(function(){var e=t();
return typeof e=="function"&&(e=e()),!!e
})
},e.compute.async=function(t,n,r){return e.compute(t,{fn:n,context:r})
},e.compute.read=function(t,n,r){r=r||{};
var i=t,s,o,u;
for(var a=0,f=n.length;
a<f;
a++){o=i,o&&o.isComputed&&(r.foundObservable&&r.foundObservable(o,a),o=i=o()),l(o)?(!u&&r.foundObservable&&r.foundObservable(o,a),u=1,typeof o[n[a]]=="function"&&o.constructor.prototype[n[a]]===o[n[a]]?r.returnObserveMethods?i=i[n[a]]:n[a]==="constructor"&&o instanceof e.Construct||o[n[a]].prototype instanceof e.Construct?i=o[n[a]]:i=o[n[a]].apply(o,r.args||[]):i=i.attr(n[a])):i==null?i=undefined:i=o[n[a]],s=typeof i,i&&i.isComputed&&!r.isArgument&&a<f-1?(!u&&r.foundObservable&&r.foundObservable(o,a+1),i=i()):a<n.length-1&&s==="function"&&r.executeAnonymousFunctions&&!(e.Construct&&i.prototype instanceof e.Construct)&&(i=i());
if(a<n.length-1&&(i===null||s!=="function"&&s!=="object")){return r.earlyExit&&r.earlyExit(o,a,i),{value:undefined,parent:o}
}}return typeof i=="function"&&!(e.Construct&&i.prototype instanceof e.Construct)&&(!e.route||i!==e.route)&&(r.isArgument?!i.isComputed&&r.proxyMethods!==!1&&(i=e.proxy(i,o)):(i.isComputed&&!u&&r.foundObservable&&r.foundObservable(i,a),i=i.call(o))),i===undefined&&r.earlyExit&&r.earlyExit(o,a-1),{value:i,parent:o}
},e.compute.set=function(e,t,n){if(l(e)){return e.attr(t,n)
}if(e[t]&&e[t].isComputed){return e[t](n)
}typeof e=="object"&&(e[t]=n)
},e.compute
}),define("can/view/scope",["can/util/library","can/construct","can/map","can/list","can/view","can/compute"],function(e){var t=/(\\)?\./g,n=/\\\./g,r=function(e){var r=[],i=0;
return e.replace(t,function(t,s,o){s||(r.push(e.slice(i,o).replace(n,".")),i=o+t.length)
}),r.push(e.slice(i).replace(n,".")),r
},i=e.Construct.extend({read:e.compute.read},{init:function(e,t){this._context=e,this._parent=t,this.__cache={}
},attr:function(t,n){var r=e.__clearReading(),i=this.read(t,{isArgument:!0,returnObserveMethods:!0,proxyMethods:!1});
if(arguments.length===2){var s=t.lastIndexOf("."),o=s!==-1?t.substring(0,s):".",u=this.read(o,{isArgument:!0,returnObserveMethods:!0,proxyMethods:!1}).value;
s!==-1&&(t=t.substring(s+1,t.length)),e.compute.set(u,t,n)
}return e.__setReading(r),i.value
},add:function(e){return e!==this._context?new this.constructor(e,this):this
},computeData:function(t,n){n=n||{args:[]};
var r=this,i,s,o={compute:e.compute(function(u){if(!arguments.length){if(i){return e.compute.read(i,s,n).value
}var l=r.read(t,n);
return i=l.rootObserve,s=l.reads,o.scope=l.scope,o.initialValue=l.value,o.reads=l.reads,o.root=i,l.value
}if(i.isComputed){i(u)
}else{if(s.length){var a=s.length-1,f=s.length?e.compute.read(i,s.slice(0,a)).value:i;
e.compute.set(f,s[a],u)
}}})};
return o
},compute:function(e,t){return this.computeData(e,t).compute
},read:function(t,n){var i;
if(t.substr(0,2)==="./"){i=!0,t=t.substr(2)
}else{if(t.substr(0,3)==="../"){return this._parent.read(t.substr(3),n)
}if(t===".."){return{value:this._parent._context}
}if(t==="."||t==="this"){return{value:this._context}
}}var s=t.indexOf("\\.")===-1?t.split("."):r(t),o,u=this,a,f=[],l=-1,c,h,p,d;
while(u){o=u._context;
if(o!==null){var v=e.compute.read(o,s,e.simpleExtend({foundObservable:function(e,t){p=e,d=s.slice(t)
},earlyExit:function(t,n){n>l&&(a=p,f=d,l=n,h=u,c=e.__clearReading())
},executeAnonymousFunctions:!0},n));
if(v.value!==undefined){return{scope:u,rootObserve:p,value:v.value,reads:d}
}}e.__clearReading(),i?u=null:u=u._parent
}return a?(e.__setReading(c),{scope:h,rootObserve:a,reads:f,value:undefined}):{names:s,value:undefined}
}});
return e.view.Scope=i,i
}),define("can/view/elements",["can/util/library","can/view"],function(e){var t=function(){return e.$(document.createComment("~")).length===1
}(),n={tagToContentPropMap:{option:"textContent" in document.createElement("option")?"textContent":"innerText",textarea:"value"},attrMap:e.attr.map,attrReg:/([^\s=]+)[\s]*=[\s]*/,defaultValue:e.attr.defaultValue,tagMap:{"":"span",colgroup:"col",table:"tbody",tr:"td",ol:"li",ul:"li",tbody:"tr",thead:"tr",tfoot:"tr",select:"option",optgroup:"option"},reverseTagMap:{col:"colgroup",tr:"tbody",option:"select",td:"tr",th:"tr",li:"ul"},getParentNode:function(e,t){return t&&e.parentNode.nodeType===11?t:e.parentNode
},setAttr:e.attr.set,getAttr:e.attr.get,removeAttr:e.attr.remove,contentText:function(e){return typeof e=="string"?e:!e&&e!==0?"":""+e
},after:function(t,n){var r=t[t.length-1];
r.nextSibling?e.insertBefore(r.parentNode,n,r.nextSibling):e.appendChild(r.parentNode,n)
},replace:function(r,i){n.after(r,i),e.remove(e.$(r)).length<r.length&&!t&&e.each(r,function(e){e.nodeType===8&&e.parentNode.removeChild(e)
})
}};
return e.view.elements=n,n
}),define("can/view/callbacks",["can/util/library","can/view"],function(e){var t=e.view.attr=function(e,t){if(!t){var i=n[e];
if(!i){for(var s=0,o=r.length;
s<o;
s++){var u=r[s];
if(u.match.test(e)){i=u.handler;
break
}}}return i
}typeof e=="string"?n[e]=t:r.push({match:e,handler:t})
},n={},r=[],i=/[-\:]/,s=e.view.tag=function(e,t){if(!t){var n=o[e.toLowerCase()];
return !n&&i.test(e)&&(n=function(){}),n
}window.html5&&(window.html5.elements+=" "+e,window.html5.shivDocument()),o[e.toLowerCase()]=t
},o={};
return e.view.callbacks={_tags:o,_attributes:n,_regExpAttributes:r,tag:s,attr:t,tagHandler:function(t,n,r){var i=r.options.attr("tags."+n),s=i||o[n],u=r.scope,a;
if(s){var f=e.__clearReading();
a=s(t,r),e.__setReading(f)
}else{a=u
}if(a&&r.subtemplate){u!==a&&(u=u.add(a));
var l=r.subtemplate(u,r.options),c=typeof l=="string"?e.view.frag(l):l;
e.appendChild(t,c)
}}},e.view.callbacks
}),define("can/view/scanner",["can/view","can/view/elements","can/view/callbacks"],function(can,elements,viewCallbacks){var newLine=/(\r|\n)+/g,notEndTag=/\//,clean=function(e){return e.split("\\").join("\\\\").split("\n").join("\\n").split('"').join('\\"').split("	").join("\\t")
},getTag=function(e,t,n){if(e){return e
}while(n<t.length){if(t[n]==="<"&&!notEndTag.test(t[n+1])){return elements.reverseTagMap[t[n+1]]||"span"
}n++
}return""
},bracketNum=function(e){return --e.split("{").length- --e.split("}").length
},myEval=function(script){eval(script)
},attrReg=/([^\s]+)[\s]*=[\s]*$/,startTxt="var ___v1ew = [];",finishTxt="return ___v1ew.join('')",put_cmd="___v1ew.push(\n",insert_cmd=put_cmd,htmlTag=null,quote=null,beforeQuote=null,rescan=null,getAttrName=function(){var e=beforeQuote.match(attrReg);
return e&&e[1]
},status=function(){return quote?"'"+getAttrName()+"'":htmlTag?1:0
},top=function(e){return e[e.length-1]
},Scanner;
return can.view.Scanner=Scanner=function(e){can.extend(this,{text:{},tokens:[]},e),this.text.options=this.text.options||"",this.tokenReg=[],this.tokenSimple={"<":"<",">":">",'"':'"',"'":"'"},this.tokenComplex=[],this.tokenMap={};
for(var t=0,n;
n=this.tokens[t];
t++){n[2]?(this.tokenReg.push(n[2]),this.tokenComplex.push({abbr:n[1],re:new RegExp(n[2]),rescan:n[3]})):(this.tokenReg.push(n[1]),this.tokenSimple[n[1]]=n[0]),this.tokenMap[n[0]]=n[1]
}this.tokenReg=new RegExp("("+this.tokenReg.slice(0).concat(["<",">",'"',"'"]).join("|")+")","g")
},Scanner.prototype={helpers:[],scan:function(e,t){var n=[],r=0,i=this.tokenSimple,s=this.tokenComplex;
e=e.replace(newLine,"\n"),this.transform&&(e=this.transform(e)),e.replace(this.tokenReg,function(t,o){var u=arguments[arguments.length-2];
u>r&&n.push(e.substring(r,u));
if(i[t]){n.push(t)
}else{for(var a=0,f;
f=s[a];
a++){if(f.re.test(t)){n.push(f.abbr),f.rescan&&n.push(f.rescan(o));
break
}}}r=u+o.length
}),r<e.length&&n.push(e.substr(r));
var o="",u=[startTxt+(this.text.start||"")],a=function(e,t){u.push(put_cmd,'"',clean(e),'"'+(t||"")+");")
},f=[],l,c=null,h=!1,p={attributeHookups:[],tagHookups:[],lastTagHookup:""},d=function(){p.lastTagHookup=p.tagHookups.pop()+p.tagHookups.length
},v="",m=[],g=!1,y,b=!1,w=0,E,S=this.tokenMap,x;
htmlTag=quote=beforeQuote=null;
for(;
(E=n[w++])!==undefined;
){if(c===null){switch(E){case S.left:case S.escapeLeft:case S.returnLeft:h=htmlTag&&1;
case S.commentLeft:c=E,o.length&&a(o),o="";
break;
case S.escapeFull:h=htmlTag&&1,rescan=1,c=S.escapeLeft,o.length&&a(o),rescan=n[w++],o=rescan.content||rescan,rescan.before&&a(rescan.before),n.splice(w,0,S.right);
break;
case S.commentFull:break;
case S.templateLeft:o+=S.left;
break;
case"<":n[w].indexOf("!--")!==0&&(htmlTag=1,h=0),o+=E;
break;
case">":htmlTag=0;
var T=o.substr(o.length-1)==="/"||o.substr(o.length-2)==="--",N="";
p.attributeHookups.length&&(N="attrs: ['"+p.attributeHookups.join("','")+"'], ",p.attributeHookups=[]);
if(v+p.tagHookups.length!==p.lastTagHookup&&v===top(p.tagHookups)){T&&(o=o.substr(0,o.length-1)),u.push(put_cmd,'"',clean(o),'"',",can.view.pending({tagName:'"+v+"',"+N+"scope: "+(this.text.scope||"this")+this.text.options),T?(u.push("}));"),o="/>",d()):n[w]==="<"&&n[w+1]==="/"+v?(u.push("}));"),o=E,d()):(u.push(",subtemplate: function("+this.text.argNames+"){\n"+startTxt+(this.text.start||"")),o="")
}else{if(h||!g&&elements.tagToContentPropMap[m[m.length-1]]||N){var C=",can.view.pending({"+N+"scope: "+(this.text.scope||"this")+this.text.options+'}),"';
T?a(o.substr(0,o.length-1),C+'/>"'):a(o,C+'>"'),o="",h=0
}else{o+=E
}}if(T||g){m.pop(),v=m[m.length-1],g=!1
}p.attributeHookups=[];
break;
case"'":case'"':if(htmlTag){if(quote&&quote===E){quote=null;
var k=getAttrName();
viewCallbacks.attr(k)&&p.attributeHookups.push(k);
if(b){o+=E,a(o),u.push(finishTxt,"}));\n"),o="",b=!1;
break
}}else{if(quote===null){quote=E,beforeQuote=l,x=getAttrName();
if(v==="img"&&x==="src"||x==="style"){a(o.replace(attrReg,"")),o="",b=!0,u.push(insert_cmd,"can.view.txt(2,'"+getTag(v,n,w)+"',"+status()+",this,function(){",startTxt),a(x+"="+E);
break
}}}}default:if(l==="<"){v=E.substr(0,3)==="!--"?"!--":E.split(/\s/)[0];
var L=!1,A;
v.indexOf("/")===0&&(L=!0,A=v.substr(1)),L?(top(m)===A&&(v=A,g=!0),top(p.tagHookups)===A&&(a(o.substr(0,o.length-1)),u.push(finishTxt+"}}) );"),o="><",d())):(v.lastIndexOf("/")===v.length-1&&(v=v.substr(0,v.length-1)),v!=="!--"&&viewCallbacks.tag(v)&&(v==="content"&&elements.tagMap[top(m)]&&(E=E.replace("content",elements.tagMap[top(m)])),p.tagHookups.push(v)),m.push(v))
}o+=E
}}else{switch(E){case S.right:case S.returnRight:switch(c){case S.left:y=bracketNum(o),y===1?(u.push(insert_cmd,"can.view.txt(0,'"+getTag(v,n,w)+"',"+status()+",this,function(){",startTxt,o),f.push({before:"",after:finishTxt+"}));\n"})):(r=f.length&&y===-1?f.pop():{after:";"},r.before&&u.push(r.before),u.push(o,";",r.after));
break;
case S.escapeLeft:case S.returnLeft:y=bracketNum(o),y&&f.push({before:finishTxt,after:"}));\n"});
var O=c===S.escapeLeft?1:0,M={insert:insert_cmd,tagName:getTag(v,n,w),status:status(),specialAttribute:b};
for(var _=0;
_<this.helpers.length;
_++){var D=this.helpers[_];
if(D.name.test(o)){o=D.fn(o,M),D.name.source===/^>[\s]*\w*/.source&&(O=0);
break
}}typeof o=="object"?o.startTxt&&o.end&&b?u.push(insert_cmd,"can.view.toStr( ",o.content,"() ) );"):(o.startTxt?u.push(insert_cmd,"can.view.txt(\n"+(typeof status()=="string"||(o.escaped!=null?o.escaped:O))+",\n'"+v+"',\n"+status()+",\nthis,\n"):o.startOnlyTxt&&u.push(insert_cmd,"can.view.onlytxt(this,\n"),u.push(o.content),o.end&&u.push("));")):b?u.push(insert_cmd,o,");"):u.push(insert_cmd,"can.view.txt(\n"+(typeof status()=="string"||O)+",\n'"+v+"',\n"+status()+",\nthis,\nfunction(){ "+(this.text.escape||"")+"return ",o,y?startTxt:"}));\n"),rescan&&rescan.after&&rescan.after.length&&(a(rescan.after.length),rescan=null)
}c=null,o="";
break;
case S.templateLeft:o+=S.left;
break;
default:o+=E
}}l=E
}o.length&&a(o),u.push(";");
var P=u.join(""),H={out:(this.text.outStart||"")+P+" "+finishTxt+(this.text.outEnd||"")};
return myEval.call(H,"this.fn = (function("+this.text.argNames+"){"+H.out+"});\r\n//# sourceURL="+t+".js"),H
}},can.view.pending=function(e){var t=can.view.getHooks();
return can.view.hook(function(n){can.each(t,function(e){e(n)
}),e.templateType="legacy",e.tagName&&viewCallbacks.tagHandler(n,e.tagName,e),can.each(e&&e.attrs||[],function(t){e.attributeName=t;
var r=viewCallbacks.attr(t);
r&&r(n,e)
})
})
},can.view.tag("content",function(e,t){return t.scope
}),can.view.Scanner=Scanner,Scanner
}),define("can/view/node_lists",["can/util/library","can/view/elements"],function(e){var t=!0;
try{document.createTextNode("")._=0
}catch(n){t=!1
}var r={},i={},s="ejs_"+Math.random(),o=0,u=function(e,n){var r=n||i,u=a(e,r);
return u?u:t||e.nodeType!==3?(++o,e[s]=(e.nodeName?"element_":"obj_")+o):(++o,r["text_"+o]=e,"text_"+o)
},a=function(e,n){if(t||e.nodeType!==3){return e[s]
}for(var r in n){if(n[r]===e){return r
}}},f=[].splice,l=[].push,c=function(e){var t=0;
for(var n=0,r=e.length;
n<r;
n++){var i=e[n];
i.nodeType?t++:t+=c(i)
}return t
},h=function(e,t){var n={};
for(var r=0,i=e.length;
r<i;
r++){var s=p.first(e[r]);
n[u(s,t)]=e[r]
}return n
},p={id:u,update:function(t,n){var r=p.unregisterChildren(t);
n=e.makeArray(n);
var i=t.length;
return f.apply(t,[0,i].concat(n)),t.replacements?p.nestReplacements(t):p.nestList(t),r
},nestReplacements:function(e){var t=0,n={},r=h(e.replacements,n),i=e.replacements.length;
while(t<e.length&&i){var s=e[t],o=r[a(s,n)];
o&&(e.splice(t,c(o),o),i--),t++
}e.replacements=[]
},nestList:function(e){var t=0;
while(t<e.length){var n=e[t],i=r[u(n)];
i?i!==e&&e.splice(t,c(i),i):r[u(n)]=e,t++
}},last:function(e){var t=e[e.length-1];
return t.nodeType?t:p.last(t)
},first:function(e){var t=e[0];
return t.nodeType?t:p.first(t)
},register:function(e,t,n){return e.unregistered=t,e.parentList=n,n===!0?e.replacements=[]:n?(n.replacements.push(e),e.replacements=[]):p.nestList(e),e
},unregisterChildren:function(t){var n=[];
return e.each(t,function(e){e.nodeType?(t.replacements||delete r[u(e)],n.push(e)):l.apply(n,p.unregister(e))
}),n
},unregister:function(e){var t=p.unregisterChildren(e);
if(e.unregistered){var n=e.unregistered;
delete e.unregistered,delete e.replacements,n()
}return t
},nodeMap:r};
return e.view.nodeLists=p,p
}),define("can/view/parser",["can/view"],function(e){function t(e){var t={},n=e.split(",");
for(var r=0;
r<n.length;
r++){t[n[r]]=!0
}return t
}var n="-:A-Za-z0-9_",r="[a-zA-Z_:]["+n+":.]*",i="\\s*=\\s*",s='"((?:\\\\.|[^"])*)"',o="'((?:\\\\.|[^'])*)'",u="(?:"+i+"(?:(?:\"[^\"]*\")|(?:'[^']*')|[^>\\s]+))?",a="\\{\\{[^\\}]*\\}\\}\\}?",f="\\{\\{([^\\}]*)\\}\\}\\}?",l=new RegExp("^<(["+n+"]+)((?:\\s*(?:(?:(?:"+r+")?"+u+")|(?:"+a+")+))*)\\s*(\\/?)>"),c=new RegExp("^<\\/(["+n+"]+)[^>]*>"),h=new RegExp("(?:(?:("+r+")|"+f+")(?:"+i+"(?:(?:"+s+")|(?:"+o+")|([^>\\s]+)))?)","g"),p=new RegExp(f,"g"),d=/<|\{\{/,v=t("area,base,basefont,br,col,frame,hr,img,input,isindex,link,meta,param,embed"),m=t("address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"),g=t("a,abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),y=t("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),b=t("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),w=t("script,style"),E=function(e,t){function n(e,n,i,s){n=n.toLowerCase();
if(m[n]){while(a.last()&&g[a.last()]){r("",a.last())
}}y[n]&&a.last()===n&&r("",n),s=v[n]||!!s,t.start(n,s),s||a.push(n),E.parseAttrs(i,t),t.end(n,s)
}function r(e,n){var r;
if(!n){r=0
}else{for(r=a.length-1;
r>=0;
r--){if(a[r]===n){break
}}}if(r>=0){for(var i=a.length-1;
i>=r;
i--){t.close&&t.close(a[i])
}a.length=r
}}function i(e,n){t.special&&t.special(n)
}var s,o,u,a=[],f=e;
a.last=function(){return this[this.length-1]
};
while(e){o=!0;
if(!a.last()||!w[a.last()]){e.indexOf("<!--")===0?(s=e.indexOf("-->"),s>=0&&(t.comment&&t.comment(e.substring(4,s)),e=e.substring(s+3),o=!1)):e.indexOf("</")===0?(u=e.match(c),u&&(e=e.substring(u[0].length),u[0].replace(c,r),o=!1)):e.indexOf("<")===0?(u=e.match(l),u&&(e=e.substring(u[0].length),u[0].replace(l,n),o=!1)):e.indexOf("{{")===0&&(u=e.match(p),u&&(e=e.substring(u[0].length),u[0].replace(p,i)));
if(o){s=e.search(d);
var h=s<0?e:e.substring(0,s);
e=s<0?"":e.substring(s),t.chars&&h&&t.chars(h)
}}else{e=e.replace(new RegExp("([\\s\\S]*?)</"+a.last()+"[^>]*>"),function(e,n){return n=n.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g,"$1$2"),t.chars&&t.chars(n),""
}),r("",a.last())
}if(e===f){throw"Parse Error: "+e
}f=e
}r(),t.done()
};
return E.parseAttrs=function(e,t){(e!=null?e:"").replace(h,function(e,n,r,i,s,o){r&&t.special(r);
if(n||i||s||o){var u=arguments[3]?arguments[3]:arguments[4]?arguments[4]:arguments[5]?arguments[5]:b[n.toLowerCase()]?n:"";
t.attrStart(n||"");
var a=p.lastIndex=0,f=p.exec(u),l;
while(f){l=u.substring(a,p.lastIndex-f[0].length),l.length&&t.attrValue(l),t.special(f[1]),a=p.lastIndex,f=p.exec(u)
}l=u.substr(a,u.length),l&&t.attrValue(l),t.attrEnd(n||"")
}})
},e.view.parser=E,E
}),define("can/view/live",["can/util/library","can/view/elements","can/view","can/view/node_lists","can/view/parser"],function(e,t,n,r,i){t=t||e.view.elements,r=r||e.view.NodeLists,i=i||e.view.parser;
var s=function(t,n,r){var i=!1,s=function(){return i||(i=!0,r(o),e.unbind.call(t,"removed",s)),!0
},o={teardownCheck:function(e){return e?!1:s()
}};
return e.bind.call(t,"removed",s),n(o),o
},o=function(e,t,n){return s(e,function(){t.bind("change",n)
},function(e){t.unbind("change",n),e.nodeList&&r.unregister(e.nodeList)
})
},u=function(e){var t={},n;
return i.parseAttrs(e,{attrStart:function(e){t[e]="",n=e
},attrValue:function(e){t[n]+=e
},attrEnd:function(){}}),t
},a=[].splice,f=function(e){return e&&e.nodeType
},l=function(e){e.childNodes.length||e.appendChild(document.createTextNode(""))
},c={list:function(n,i,o,u,f,l){var h=l||[n],p=[],d=function(n,i,s){var f=document.createDocumentFragment(),c=[],d=[];
e.each(i,function(t,n){var i=[];
l&&r.register(i,null,!0);
var a=e.compute(n+s),h=o.call(u,t,a,i),p=typeof h=="string",v=e.frag(h);
v=p?e.view.hookup(v):v;
var m=e.makeArray(v.childNodes);
l?(r.update(i,m),c.push(i)):c.push(r.register(m)),f.appendChild(v),d.push(a)
});
var v=s+1;
if(!h[v]){t.after(v===1?[m]:[r.last(h[v-1])],f)
}else{var g=r.first(h[v]);
e.insertBefore(g.parentNode,f,g)
}a.apply(h,[v,0].concat(c)),a.apply(p,[s,0].concat(d));
for(var y=s+d.length,b=p.length;
y<b;
y++){p[y](y)
}},v=function(t,n,i,s,o){if(!s&&w.teardownCheck(m.parentNode)){return
}i<0&&(i=p.length+i);
var u=h.splice(i+1,n.length),a=[];
e.each(u,function(e){var t=r.unregister(e);
[].push.apply(a,t)
}),p.splice(i,n.length);
for(var f=i,l=p.length;
f<l;
f++){p[f](f)
}o||e.remove(e.$(a))
},m=document.createTextNode(""),g,y=function(e){g&&g.unbind&&g.unbind("add",d).unbind("remove",v),v({},{length:h.length-1},0,!0,e)
},b=function(e,t,n){y(),g=t||[],g.bind&&g.bind("add",d).bind("remove",v),d({},g,0)
};
f=t.getParentNode(n,f);
var w=s(f,function(){e.isFunction(i)&&i.bind("change",b)
},function(){e.isFunction(i)&&i.unbind("change",b),y(!0)
});
l?(t.replace(h,m),r.update(h,[m]),l.unregistered=w.teardownCheck):c.replace(h,m,w.teardownCheck),b({},e.isFunction(i)?i():i)
},html:function(n,i,s,u){var a;
s=t.getParentNode(n,s),a=o(s,i,function(e,t,n){var i=r.first(c).parentNode;
i&&h(t),a.teardownCheck(r.first(c).parentNode)
});
var c=u||[n],h=function(n){var i=!f(n),o=e.frag(n),u=e.makeArray(c);
l(o),i&&(o=e.view.hookup(o,s)),u=r.update(c,o.childNodes),t.replace(u,o)
};
a.nodeList=c,u?u.unregistered=a.teardownCheck:r.register(c,a.teardownCheck),h(i())
},replace:function(n,i,s){var o=n.slice(0),u=e.frag(i);
return r.register(n,s),typeof i=="string"&&(u=e.view.hookup(u,n[0].parentNode)),r.update(n,u.childNodes),t.replace(o,u),n
},text:function(n,i,s,u){var a=t.getParentNode(n,s),f=o(a,i,function(t,n,r){typeof l.nodeValue!="unknown"&&(l.nodeValue=e.view.toStr(n)),f.teardownCheck(l.parentNode)
}),l=document.createTextNode(e.view.toStr(i()));
u?(u.unregistered=f.teardownCheck,f.nodeList=u,r.update(u,[l]),t.replace([n],l)):f.nodeList=c.replace([n],l,f.teardownCheck)
},setAttributes:function(t,n){var r=u(n);
for(var i in r){e.attr.set(t,i,r[i])
}},attributes:function(n,r,i){var s={},a=function(r){var i=u(r),o;
for(o in i){var a=i[o],f=s[o];
a!==f&&e.attr.set(n,o,a),delete s[o]
}for(o in s){t.removeAttr(n,o)
}s=i
};
o(n,r,function(e,t){a(t)
}),arguments.length>=3?s=u(i):a(r())
},attributePlaceholder:"__!!__",attributeReplace:/__!!__/g,attribute:function(n,r,i){o(n,i,function(e,i){t.setAttr(n,r,h.render())
});
var s=e.$(n),u;
u=e.data(s,"hooks"),u||e.data(s,"hooks",u={});
var a=t.getAttr(n,r),f=a.split(c.attributePlaceholder),l=[],h;
l.push(f.shift(),f.join(c.attributePlaceholder)),u[r]?u[r].computes.push(i):u[r]={render:function(){var e=0,n=a?a.replace(c.attributeReplace,function(){return t.contentText(h.computes[e++]())
}):t.contentText(h.computes[e++]());
return n
},computes:[i],batchNum:undefined},h=u[r],l.splice(1,0,i()),t.setAttr(n,r,l.join(""))
},specialAttribute:function(e,n,r){o(e,r,function(r,i){t.setAttr(e,n,p(i))
}),t.setAttr(e,n,p(r()))
},simpleAttribute:function(e,n,r){o(e,r,function(r,i){t.setAttr(e,n,i)
}),t.setAttr(e,n,r())
}};
c.attr=c.simpleAttribute,c.attrs=c.attributes;
var h=/(\r|\n)+/g,p=function(e){var n=/^["'].*["']$/;
return e=e.replace(t.attrReg,"").replace(h,""),n.test(e)?e.substr(1,e.length-2):e
};
return e.view.live=c,c
}),define("can/view/render",["can/view","can/view/elements","can/view/live","can/util/string"],function(e,t,n){var r=[],i=function(e){var n=t.tagMap[e]||"span";
return n==="span"?"@@!!@@":"<"+n+">"+i(n)+"</"+n+">"
},s=function(t,n){if(typeof t=="string"){return t
}if(!t&&t!==0){return""
}var i=t.hookup&&function(e,n){t.hookup.call(t,e,n)
}||typeof t=="function"&&t;
if(i){return n?"<"+n+" "+e.view.hook(i)+"></"+n+">":(r.push(i),"")
}return""+t
},o=function(t,n){return typeof t=="string"||typeof t=="number"?e.esc(t):s(t,n)
},u=!1,a=function(){},f;
return e.extend(e.view,{live:n,setupLists:function(){var t=e.view.lists,n;
return e.view.lists=function(e,t){return n={list:e,renderer:t},Math.random()
},function(){return e.view.lists=t,n
}
},getHooks:function(){var e=r.slice(0);
return f=e,r=[],e
},onlytxt:function(e,t){return o(t.call(e))
},txt:function(l,c,h,p,d){var v=t.tagMap[c]||"span",m=!1,g,y,b,w=a,E;
if(u){g=d.call(p)
}else{if(typeof h=="string"||h===1){u=!0
}var S=e.view.setupLists();
w=function(){b.unbind("change",a)
},b=e.compute(d,p,!1),b.bind("change",a),y=S(),g=b(),u=!1,m=b.hasDependencies
}if(y){return w(),"<"+v+e.view.hook(function(e,t){n.list(e,y.list,y.renderer,p,t)
})+"></"+v+">"
}if(!m||typeof g=="function"){return w(),(u||l===2||!l?s:o)(g,h===0&&v)
}var x=t.tagToContentPropMap[c];
return h===0&&!x?"<"+v+e.view.hook(l&&typeof g!="object"?function(e,t){n.text(e,b,t),w()
}:function(e,t){n.html(e,b,t),w()
})+">"+i(v)+"</"+v+">":h===1?(r.push(function(e){n.attributes(e,b,b()),w()
}),b()):l===2?(E=h,r.push(function(e){n.specialAttribute(e,E,b),w()
}),b()):(E=h===0?x:h,(h===0?f:r).push(function(e){n.attribute(e,E,b),w()
}),n.attributePlaceholder)
}}),e
}),define("can/view/mustache",["can/util/library","can/view/scope","can/view","can/view/scanner","can/compute","can/view/render"],function(e){e.view.ext=".mustache";
var t="scope",n="___h4sh",r="{scope:"+t+",options:options}",i="{scope:"+t+",options:options, special: true}",s=t+",options",o=/((([^'"\s]+?=)?('.*?'|".*?"))|.*?)\s/g,u=/^(('.*?'|".*?"|[0-9]+\.?[0-9]*|true|false|null|undefined)|((.+?)=(('.*?'|".*?"|[0-9]+\.?[0-9]*|true|false)|(.+))))$/,a=function(e){return'{get:"'+e.replace(/"/g,'\\"')+'"}'
},f=function(e){return e&&typeof e.get=="string"
},l=function(t){return t instanceof e.Map||t&&!!t._get
},c=function(e){return e&&e.splice&&typeof e.length=="number"
},h=function(t,n,r){var i=function(e,r){return t(e||n,r)
};
return function(t,s){return t!==undefined&&!(t instanceof e.view.Scope)&&(t=n.add(t)),s!==undefined&&!(s instanceof e.view.Options)&&(s=r.add(s)),i(t,s||r)
}
},p=function(t,n){if(this.constructor!==p){var r=new p(t);
return function(e,t){return r.render(e,t)
}
}if(typeof t=="function"){this.template={fn:t};
return
}e.extend(this,t),this.template=this.scanner.scan(this.text,this.name)
};
e.Mustache=window.Mustache=p,p.prototype.render=function(t,n){return t instanceof e.view.Scope||(t=new e.view.Scope(t||{})),n instanceof e.view.Options||(n=new e.view.Options(n||{})),n=n||{},this.template.fn.call(t,t,n)
},e.extend(p.prototype,{scanner:new e.view.Scanner({text:{start:"",scope:t,options:",options: options",argNames:s},tokens:[["returnLeft","{{{","{{[{&]"],["commentFull","{{!}}","^[\\s\\t]*{{!.+?}}\\n"],["commentLeft","{{!","(\\n[\\s\\t]*{{!|{{!)"],["escapeFull","{{}}","(^[\\s\\t]*{{[#/^][^}]+?}}\\n|\\n[\\s\\t]*{{[#/^][^}]+?}}\\n|\\n[\\s\\t]*{{[#/^][^}]+?}}$)",function(e){return{before:/^\n.+?\n$/.test(e)?"\n":"",content:e.match(/\{\{(.+?)\}\}/)[1]||""}
}],["escapeLeft","{{"],["returnRight","}}}"],["right","}}"]],helpers:[{name:/^>[\s]*\w*/,fn:function(t,n){var r=e.trim(t.replace(/^>\s?/,"")).replace(/["|']/g,"");
return"can.Mustache.renderPartial('"+r+"',"+s+")"
}},{name:/^\s*data\s/,fn:function(e,n){var r=e.match(/["|'](.*)["|']/)[1];
return"can.proxy(function(__){can.data(can.$(__),'"+r+"', this.attr('.')); }, "+t+")"
}},{name:/\s*\(([\$\w]+)\)\s*->([^\n]*)/,fn:function(e){var n=/\s*\(([\$\w]+)\)\s*->([^\n]*)/,r=e.match(n);
return"can.proxy(function(__){var "+r[1]+"=can.$(__);with("+t+".attr('.')){"+r[2]+"}}, this);"
}},{name:/^.*$/,fn:function(t,f){var l=!1,c={content:"",startTxt:!1,startOnlyTxt:!1,end:!1};
t=e.trim(t);
if(t.length&&(l=t.match(/^([#^/]|else$)/))){l=l[0];
switch(l){case"#":case"^":f.specialAttribute?c.startOnlyTxt=!0:(c.startTxt=!0,c.escaped=0);
break;
case"/":return c.end=!0,c.content+='return ___v1ew.join("");}}])',c
}t=t.substring(1)
}if(l!=="else"){var h=[],p=[],d=0,v;
c.content+="can.Mustache.txt(\n"+(f.specialAttribute?i:r)+",\n"+(l?'"'+l+'"':"null")+",",(e.trim(t)+" ").replace(o,function(e,t){d&&(v=t.match(u))?v[2]?h.push(v[0]):p.push(v[4]+":"+(v[6]?v[6]:a(v[5]))):h.push(a(t)),d++
}),c.content+=h.join(","),p.length&&(c.content+=",{"+n+":{"+p.join(",")+"}}")
}l&&l!=="else"&&(c.content+=",[\n\n");
switch(l){case"^":case"#":c.content+="{fn:function("+s+"){var ___v1ew = [];";
break;
case"else":c.content+='return ___v1ew.join("");}},\n{inverse:function('+s+"){\nvar ___v1ew = [];";
break;
default:c.content+=")"
}return l||(c.startTxt=!0,c.end=!0),c
}}]})});
var d=e.view.Scanner.prototype.helpers;
for(var v=0;
v<d.length;
v++){p.prototype.scanner.helpers.unshift(d[v])
}return p.txt=function(t,r,i){var s=t.scope,o=t.options,u=[],a={fn:function(){},inverse:function(){}},d,v=s.attr("."),m=!0,g;
for(var y=3;
y<arguments.length;
y++){var b=arguments[y];
if(r&&e.isArray(b)){a=e.extend.apply(e,[a].concat(b))
}else{if(b&&b[n]){d=b[n];
for(var w in d){f(d[w])&&(d[w]=p.get(d[w].get,t,!1,!0))
}}else{b&&f(b)?u.push(p.get(b.get,t,!1,!0,!0)):u.push(b)
}}}if(f(i)){var E=i.get;
i=p.get(i.get,t,u.length,!1),m=E===i
}a.fn=h(a.fn,s,o),a.inverse=h(a.inverse,s,o);
if(r==="^"){var S=a.fn;
a.fn=a.inverse,a.inverse=S
}return(g=m&&typeof i=="string"&&p.getHelper(i,o)||e.isFunction(i)&&!i.isComputed&&{fn:i})?(e.extend(a,{context:v,scope:s,contexts:s,hash:d}),u.push(a),function(){return g.fn.apply(v,u)||""
}):function(){var t;
e.isFunction(i)&&i.isComputed?t=i():t=i;
var n=u.length?u:[t],s=!0,o=[],f,h,p;
if(r){for(f=0;
f<n.length;
f++){p=n[f],h=typeof p!="undefined"&&l(p),c(p)?r==="#"?s=s&&(h?!!p.attr("length"):!!p.length):r==="^"&&(s=s&&(h?!p.attr("length"):!p.length)):s=r==="#"?s&&!!p:r==="^"?s&&!p:s
}}if(s){if(r==="#"){if(c(t)){var d=l(t);
for(f=0;
f<t.length;
f++){o.push(a.fn(d?t.attr(""+f):t[f]))
}return o.join("")
}return a.fn(t||{})||""
}return r==="^"?a.inverse(t||{})||"":""+(t!=null?t:"")
}return""
}
},p.get=function(t,n,r,i,s){var o=n.scope.attr("."),u=n.options||{};
if(r){if(p.getHelper(t,u)){return t
}if(n.scope&&e.isFunction(o[t])){return o[t]
}}var a=n.scope.computeData(t,{isArgument:i,args:[o,n.scope]}),f=a.compute;
e.compute.temporarilyBind(f);
var l=a.initialValue,c=p.getHelper(t,u);
return !s&&(l===undefined||a.scope!==n.scope)&&p.getHelper(t,u)?t:f.hasDependencies?f:l
},p.resolve=function(t){return l(t)&&c(t)&&t.attr("length")?t:e.isFunction(t)?t():t
},e.view.Options=e.view.Scope.extend({init:function(t,n){!t.helpers&&!t.partials&&!t.tags&&(t={helpers:t}),e.view.Scope.prototype.init.apply(this,arguments)
}}),p._helpers={},p.registerHelper=function(e,t){this._helpers[e]={name:e,fn:t}
},p.getHelper=function(e,t){var n;
return t&&(n=t.attr("helpers."+e)),n?{fn:n}:this._helpers[e]
},p.render=function(t,n,r){if(!e.view.cached[t]){var i=e.__clearReading();
n.attr("partial")&&(t=n.attr("partial")),e.__setReading(i)
}return e.view.render(t,n,r)
},p.safeString=function(e){return{toString:function(){return e
}}
},p.renderPartial=function(t,n,r){var i=r.attr("partials."+t);
return i?i.render?i.render(n,r):i(n,r):e.Mustache.render(t,n,r)
},e.each({"if":function(t,n){var r;
return e.isFunction(t)?r=e.compute.truthy(t)():r=!!p.resolve(t),r?n.fn(n.contexts||this):n.inverse(n.contexts||this)
},unless:function(t,n){return p._helpers["if"].fn.apply(this,[e.isFunction(t)?e.compute(function(){return !t()
}):!t,n])
},each:function(t,n){var r=p.resolve(t),i=[],s,o,u;
if(e.view.lists&&(r instanceof e.List||t&&t.isComputed&&r===undefined)){return e.view.lists(t,function(e,t){return n.fn(n.scope.add({"@index":t}).add(e))
})
}t=r;
if(!!t&&c(t)){for(u=0;
u<t.length;
u++){i.push(n.fn(n.scope.add({"@index":u}).add(t[u])))
}return i.join("")
}if(l(t)){s=e.Map.keys(t);
for(u=0;
u<s.length;
u++){o=s[u],i.push(n.fn(n.scope.add({"@key":o}).add(t[o])))
}return i.join("")
}if(t instanceof Object){for(o in t){i.push(n.fn(n.scope.add({"@key":o}).add(t[o])))
}return i.join("")
}},"with":function(e,t){var n=e;
e=p.resolve(e);
if(!!e){return t.fn(n)
}},log:function(e,t){typeof console!="undefined"&&console.log&&(t?console.log(e,t.context):console.log(e.context))
},"@index":function(t,n){n||(n=t,t=0);
var r=n.scope.attr("@index");
return""+((e.isFunction(r)?r():r)+t)
}},function(e,t){p.registerHelper(t,e)
}),e.view.register({suffix:"mustache",contentType:"x-mustache-template",script:function(e,t){return"can.Mustache(function("+s+") { "+(new p({text:t,name:e})).template.out+" })"
},renderer:function(e,t){return p({text:t,name:e})
}}),e.mustache.registerHelper=e.proxy(e.Mustache.registerHelper,e.Mustache),e.mustache.safeString=e.Mustache.safeString,e
}),define("can/observe",["can/util/library","can/map","can/list","can/compute"],function(e){return e.Observe=e.Map,e.Observe.startBatch=e.batch.start,e.Observe.stopBatch=e.batch.stop,e.Observe.triggerBatch=e.batch.trigger,e
}),define("can/view/bindings",["can/util/library","can/view/mustache","can/control"],function(e){var t=function(){var e={"":!0,"true":!0,"false":!1},t=function(t){if(!t||!t.getAttribute){return
}var n=t.getAttribute("contenteditable");
return e[n]
};
return function(e){var n=t(e);
return typeof n=="boolean"?n:!!t(e.parentNode)
}
}(),n=function(e){return e[0]==="{"&&e[e.length-1]==="}"?e.substr(1,e.length-2):e
};
e.view.attr("can-value",function(r,a){var f=n(r.getAttribute("can-value")),l=a.scope.computeData(f,{args:[]}).compute,c,h;
if(r.nodeName.toLowerCase()==="input"){r.type==="checkbox"&&(e.attr.has(r,"can-true-value")?c=r.getAttribute("can-true-value"):c=!0,e.attr.has(r,"can-false-value")?h=r.getAttribute("can-false-value"):h=!1);
if(r.type==="checkbox"||r.type==="radio"){new s(r,{value:l,trueValue:c,falseValue:h});
return
}}if(r.nodeName.toLowerCase()==="select"&&r.multiple){new o(r,{value:l});
return
}if(t(r)){new u(r,{value:l});
return
}new i(r,{value:l})
});
var r={enter:function(e,t,n){return{event:"keyup",handler:function(e){if(e.keyCode===13){return n.call(this,e)
}}}
}};
e.view.attr(/can-[\w\.]+/,function(t,i){var s=i.attributeName,o=s.substr("can-".length),u=function(r){var o=n(t.getAttribute(s)),u=i.scope.read(o,{returnObserveMethods:!0,isArgument:!0});
return u.value.call(u.parent,i.scope._context,e.$(this),r)
};
if(r[o]){var a=r[o](i,t,u);
u=a.handler,o=a.event
}e.bind.call(t,o,u)
});
var i=e.Control.extend({init:function(){this.element[0].nodeName.toUpperCase()==="SELECT"?setTimeout(e.proxy(this.set,this),1):this.set()
},"{value} change":"set",set:function(){if(!this.element){return
}var e=this.options.value();
this.element[0].value=e==null?"":e
},change:function(){if(!this.element){return
}this.options.value(this.element[0].value)
}}),s=e.Control.extend({init:function(){this.isCheckbox=this.element[0].type.toLowerCase()==="checkbox",this.check()
},"{value} change":"check",check:function(){if(this.isCheckbox){var t=this.options.value(),n=this.options.trueValue||!0;
this.element[0].checked=t===n
}else{var r=this.options.value()==this.element[0].value?"set":"remove";
e.attr[r](this.element[0],"checked",!0)
}},change:function(){this.isCheckbox?this.options.value(this.element[0].checked?this.options.trueValue:this.options.falseValue):this.element[0].checked&&this.options.value(this.element[0].value)
}}),o=i.extend({init:function(){this.delimiter=";",this.set()
},set:function(){var t=this.options.value();
typeof t=="string"?(t=t.split(this.delimiter),this.isString=!0):t&&(t=e.makeArray(t));
var n={};
e.each(t,function(e){n[e]=!0
}),e.each(this.element[0].childNodes,function(e){e.value&&(e.selected=!!n[e.value])
})
},get:function(){var t=[],n=this.element[0].childNodes;
return e.each(n,function(e){e.selected&&e.value&&t.push(e.value)
}),t
},change:function(){var t=this.get(),n=this.options.value();
this.isString||typeof n=="string"?(this.isString=!0,this.options.value(t.join(this.delimiter))):n instanceof e.List?n.attr(t,!0):this.options.value(t)
}}),u=e.Control.extend({init:function(){this.set(),this.on("blur","setValue")
},"{value} change":"set",set:function(){var e=this.options.value();
this.element[0].innerHTML=typeof e=="undefined"?"":e
},setValue:function(){this.options.value(this.element[0].innerHTML)
}})
}),define("can/component",["can/util/library","can/view/callbacks","can/control","can/observe","can/view/mustache","can/view/bindings"],function(e,t){var n=/^(dataViewId|class|id)$/i,r=/\{([^\}]+)\}/g,i=e.Component=e.Construct.extend({setup:function(){e.Construct.setup.apply(this,arguments);
if(e.Component){var t=this,n=this.prototype.scope;
this.Control=s.extend(this.prototype.events),!n||typeof n=="object"&&!(n instanceof e.Map)?this.Map=e.Map.extend(n||{}):n.prototype instanceof e.Map&&(this.Map=n),this.attributeScopeMappings={},e.each(this.Map?this.Map.defaults:{},function(e,n){e==="@"&&(t.attributeScopeMappings[n]=n)
});
if(this.prototype.template){if(typeof this.prototype.template=="function"){var r=this.prototype.template;
this.renderer=function(){return e.view.frag(r.apply(null,arguments))
}
}else{this.renderer=e.view.mustache(this.prototype.template)
}}e.view.tag(this.prototype.tag,function(e,n){new t(e,n)
})
}}},{setup:function(r,i){var s={},o=this,u={},a,f,l;
e.each(this.constructor.attributeScopeMappings,function(t,n){s[n]=r.getAttribute(e.hyphenate(t))
}),e.each(e.makeArray(r.attributes),function(l,c){var h=e.camelize(l.nodeName.toLowerCase()),p=l.value;
if(o.constructor.attributeScopeMappings[h]||n.test(h)||t.attr(l.nodeName)){return
}if(p[0]==="{"&&p[p.length-1]==="}"){p=p.substr(1,p.length-2)
}else{if(i.templateType!=="legacy"){s[h]=p;
return
}}var d=i.scope.computeData(p,{args:[]}),v=d.compute,m=function(e,t){a=h,f.attr(h,t),a=null
};
v.bind("change",m),s[h]=v(),v.hasDependencies?(e.bind.call(r,"removed",function(){v.unbind("change",m)
}),u[h]=d):v.unbind("change",m)
});
if(this.constructor.Map){f=new this.constructor.Map(s)
}else{if(this.scope instanceof e.Map){f=this.scope
}else{if(e.isFunction(this.scope)){var c=this.scope(s,i.scope,r);
c instanceof e.Map?f=c:c.prototype instanceof e.Map?f=new c(s):f=new (e.Map.extend(c))(s)
}}}var h={};
e.each(u,function(e,t){h[t]=function(n,r){a!==t&&e.compute(r)
},f.bind(t,h[t])
}),e.bind.call(r,"removed",function(){e.each(h,function(e,t){f.unbind(t,h[t])
})
}),(!e.isEmptyObject(this.constructor.attributeScopeMappings)||i.templateType!=="legacy")&&e.bind.call(r,"attributes",function(t){var i=e.camelize(t.attributeName);
!u[i]&&!n.test(i)&&f.attr(i,r.getAttribute(t.attributeName))
}),this.scope=f,e.data(e.$(r),"scope",this.scope);
var p=i.scope.add(this.scope),d={helpers:{}};
e.each(this.helpers||{},function(t,n){e.isFunction(t)&&(d.helpers[n]=function(){return t.apply(f,arguments)
})
}),this._control=new this.constructor.Control(r,{scope:this.scope}),this.constructor.renderer?(d.tags||(d.tags={}),d.tags.content=function v(t,n){var r=i.subtemplate||n.subtemplate;
r&&(delete d.tags.content,e.view.live.replace([t],r(n.scope,n.options)),d.tags.content=v)
},l=this.constructor.renderer(p,i.options.add(d))):i.templateType==="legacy"?l=e.view.frag(i.subtemplate?i.subtemplate(p,i.options.add(d)):""):l=i.subtemplate?i.subtemplate(p,i.options.add(d)):document.createDocumentFragment(),e.appendChild(r,l)
}}),s=e.Control.extend({_lookup:function(e){return[e.scope,e,window]
},_action:function(t,n,i){var s,o;
r.lastIndex=0,s=r.test(t);
if(!i&&s){return
}if(!s){return e.Control._action.apply(this,arguments)
}o=e.compute(function(){var i,s=t.replace(r,function(t,r){var s;
return r==="scope"?(i=n.scope,""):(r=r.replace(/^scope\./,""),s=e.compute.read(n.scope,r.split("."),{isArgument:!0}).value,s===undefined&&(s=e.getObject(r)),typeof s=="string"?s:(i=s,""))
}),o=s.split(/\s+/g),u=o.pop();
return{processor:this.processors[u]||this.processors.click,parts:[s,o.join(" "),u],delegate:i||undefined}
},this);
var u=function(e,n){i._bindings.control[t](i.element),i._bindings.control[t]=n.processor(n.delegate||i.element,n.parts[2],n.parts[1],t,i)
};
return o.bind("change",u),i._bindings.readyComputes[t]={compute:o,handler:u},o()
}},{setup:function(t,n){return this.scope=n.scope,e.Control.prototype.setup.call(this,t,n)
},off:function(){this._bindings&&e.each(this._bindings.readyComputes||{},function(e){e.compute.unbind("change",e.handler)
}),e.Control.prototype.off.apply(this,arguments),this._bindings.readyComputes={}
}});
return window.jQuery&&jQuery.fn&&(jQuery.fn.scope=function(e){return e?this.data("scope").attr(e):this.data("scope")
}),e.scope=function(t,n){return t=e.$(t),n?e.data(t,"scope").attr(n):e.data(t,"scope")
},i
}),define("can",["can/util/library","can/control/route","can/model","can/view/mustache","can/component"],function(e){return e
}),function(e){e("async-load",[],function(){return function(e,t,n){var r=document.createElement("script"),i=document.getElementsByTagName("script")[0],s,o,u;
o=function(e){r.onload=r.onerror=r.onreadystatechange=e
},u=function(){o(null),clearTimeout(s),t()
},r.src=e,t&&(n&&(s=setTimeout(u,n)),o(function(){var e=this.readyState;
(!e||e==="complete"||e==="loaded")&&u()
})),i.parentNode.insertBefore(r,i)
}
})
}(typeof define=="function"?define:function(e){this.asyncLoad=e()
}),function(e){e("dom-class",[],function(){var e,t,n,r=" ";
return t=function(e){return r+e+r
},n=function(e){return e?e.toString().replace(/^\s+|\s+$/g,""):""
},e=function(e){this.e=e
},e.prototype={has:function(e){return t(this.get()).indexOf(t(e))>-1
},get:function(){return n(this.e.className)
},add:function(e){return this.has(e)||(this.e.className+=r+e),this
},remove:function(e){return this.e.className=n(t(this.get()).replace(t(e),r)),this
}},function(t){return new e(t)
}
})
}(typeof define=="function"&&define.amd?define:function(e){typeof exports=="object"?module.exports=e():this.domClass=e()
}),function(e){e("typekit-load",["async-load","dom-class"],function(e,t){var n,r,i,s;
return n=["wf-loading","wf-firstload","wf-inactive"],r=t(document.documentElement),i=function(){s._loading-=1,s._first=!1,r.remove(n[1]),s._loading||r.remove(n[0])
},s=function(t,o,u){var a,f;
s._loading+=1,r.add(n[0]),s._first&&r.add(n[1]),a=function(){i(),o&&setTimeout(o,0)
},f=function(){i(),r.add(n[2]),u&&setTimeout(u,0)
},e("//use.typekit.com/"+t+".js",function(){try{window.Typekit.load({active:a,inactive:f})
}catch(e){f()
}},s.timeout)
},s._first=!0,s._loading=0,s.timeout=2000,s
})
}(typeof define=="function"?define:function(e,t){this.typekitLoad=t(this.asyncLoad,this.domClass)
}),define("typography/js/dom/InlineStyleSheet",[],function(){var e={createStyleSheet:function(e,t){if(typeof e=="undefined"||e.nodeType!==1){throw new TypeError("argument is not an element")
}if(e.nodeName!=="HEAD"){throw new TypeError("element argument must be a <head> tag")
}if(t===undefined){throw new TypeError("argument is undefined")
}var n=null,r=e.ownerDocument||e.document;
return r.createStyleSheet?(r.createStyleSheet(t),n=r.styleSheets[r.styleSheets.length-1]):r.createElement&&(n=r.createElement("link"),n.setAttribute("rel","stylesheet"),n.setAttribute("href",t),e.appendChild(n)),n
},getStyleSheetsByProperty:function(e,t){var n=[];
for(var r=0,i=e.styleSheets.length;
r<i;
r++){e.styleSheets[r].hasOwnProperty(t)&&n.push(e.styleSheets[r])
}return n
},disableStyleSheet:function(e){return e===undefined||e===null?e:(e.disabled=!0,e)
},enableStyleSheet:function(e){return typeof e=="undefined"||e===null?e:(e.disabled=!1,e.removeAttribute&&e.removeAttribute("disabled"),e)
}};
return e.CSSStyleSheet=function(e){this.setHref(e),this.disabled=!1,this.element=null
},e.CSSStyleSheet.prototype={setHref:function(e){this.href=e.toString()
},enable:function(t){this.element===null?this.element=e.createStyleSheet(t,this.href):e.enableStyleSheet(this.element),this.disabled=!1
},disable:function(){e.disableStyleSheet(this.element),this.disabled=!0
},toString:function(){return"[Object InlineStyleSheet]"
}},e
}),define("typography/js/dom/TypekitLoader",["can","typekit-load","./InlineStyleSheet"],function(e,t,n){return function(r){var i=r.data("tk-id"),s=r.data("tk-loading");
if(s){var o=new n.CSSStyleSheet(s);
o.enable(e.$("head")[0]);
var u=e.$.proxy(function(){o.disable(),e.$(document).trigger("tkReady")
},o);
t(i,u,u)
}else{u=e.$.proxy(function(){e.$(document).trigger("tkReady")
},this),t(i,u,u)
}}
}),define("typography/js/dom/SeedTypekit",["linseed!./TypekitLoader"],function(e){return e("seed-typekit").seedEach()
}),define("typography",["module","typography/js/dom/SeedTypekit"],function(e){return{name:e.id}
}),define("tools/utils/String",["can"],function(e){return e.Control.extend({startsWith:function(e,t){return typeof e!="undefined"&&typeof t!="undefined"?e.toString().lastIndexOf(t,0)===0:!1
},contains:function(e,t){return typeof e!="undefined"&&typeof t!="undefined"?e.toString().indexOf(t)===0:!1
},search:function(e,t){return typeof e!="undefined"&&typeof t!="undefined"?e.search(t)>-1:!1
}})
}),function(e){define("tools/http/URLParser",["can","../utils/String"],function(t,n){return t.Control({init:function(){this.stringUtils=new n,this.pageURL=e.location.toString(),this.urlArray=[],this.pathArray=[],this.product="",this.urlArray=this.pageURL.split("//"),this.pathArray=this.urlArray[1].split("/"),this.subDomain=this.pathArray[0].split(".")[0],this.locale=this.pathArray[1]!==null&&this.pathArray[1]!==""?this.pathArray[1]:"",this.locale=this.locale.length===2||this.locale==="ca_fr"||this.locale==="africa"||this.locale==="be_en"||this.locale==="be_fr"||this.locale==="be_nl"||this.locale==="eeurope"||this.locale==="il_en"||this.locale==="il_he"||this.locale==="lu_de"||this.locale==="lu_en"||this.locale==="lu_fr"||this.locale==="mena_ar"||this.locale==="mena_fr"||this.locale==="ch_de"||this.locale==="ch_fr"||this.locale==="ch_it"||this.locale==="hk_zh"||this.locale==="hk_en"||this.locale==="sea"||this.locale==="cy_en"||this.locale==="gr_en"?this.locale:"en_us",this.locale==="en_us"&&this.pathArray.splice(1,0,this.locale),this.siteLevel=this.pathArray[2]!==null&&this.pathArray[2]!==""?this.pathArray[2]:"",this.siteSection=this.pathArray[3]!==null&&this.pathArray[3]!==""?this.pathArray[3]:"",this.productName=this.siteLevel==="products"?this.product=this.pathArray[3]:"",this.siteSubSection=this.pathArray[4]!==null&&this.pathArray[4]!==""?this.pathArray[4]:"",this.productSection=this.siteLevel==="products"?this.product=this.pathArray[4]:"",this.productSubSection=this.siteLevel==="products"?this.product=this.pathArray[5]:"",this.fileName="";
var r=this;
t.$.each(this.pathArray,function(e,t){r.stringUtils.contains(t,".html")&&(this.filename=t)
})
},urlItems:function(){return{url:e.location,path:e.location.pathname,protocol:e.location.protocol,hash:e.location.hash,search:e.location.search,origin:e.location.origin,subDomain:this.subDomain,host:this.pathArray[0],hostname:e.location.hostname,locale:this.locale,referrer:document.referrer,siteLevel:this.siteLevel,siteSection:this.siteSection,productName:this.productName,siteSubSection:this.siteSubSection,productSection:this.productSection,productSubSection:this.productSubSection,fileName:this.fileName}
},getQueryParam:function(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");
var t=new RegExp("[\\?&]"+e+"=([^&#]*)"),n=t.exec(location.search);
return n==null?"":decodeURIComponent(n[1].replace(/\+/g," "))
},cleanUrl:function(t,n,r){var i="";
return t=typeof t!="undefined"?t:e.location,this.stringUtils.startsWith(t,n)?typeof r!="undefined"?(i=t.replace(n,r),i):!0:!1
},envCheck:function(){var e,n=this,r=this.urlItems(),i=["author","dev0","con-","wcms","qa","4502","4503","5502","5503","6502","6503","7502","7503"],s=r.protocol+"//"+r.hostname;
t.$.each(i,function(){n.stringUtils.contains(s,this)&&(s="cq")
});
switch(s){case"www.adobe.com":case"adobe.com":case"www.stage.adobe.com":case"www.stage2.adobe.com":e="publish";
break;
case"cq":e="author";
break;
default:e="dev"
}return e
},getCountry:function(e,n){e=typeof e!="undefined"?"?"+decodeURIComponent(t.$.param(e)):"",t.$.ajax({type:"GET",dataType:"jsonp",url:"http://geo.adobe.com/json/"+e}).done(function(e){t.$(document).trigger("getCountryReady",[e]),n&&t.$(document).trigger("getCountryTestReady",[e])
})
}})
})
}(this),define("interactive/js/http/deeplink/DeepLink",["can","tools/http/URLParser"],function(e,t){return e.Control.extend({init:function(){this.urlParser=(new t).urlItems(),this.hashMustHave=this.element.data("http-deeplink"),this.hash=this.urlParser.hash||window.location.hash||"",this.config(this.hash)
},parse:function(e){var t=new RegExp(e,"gi");
return this.hash.match(t)!==null
},config:function(e){e.length>0&&this.parse(this.hashMustHave)!==null&&!!this.parse(this.hashMustHave)&&this.tabs(e)
},tabs:function(t){e.$(t).prop("checked",!0)
}})
}),define("interactive/js/http/deeplink/SeedDeepLink",["linseed!./DeepLink"],function(e){return e("seed-deeplink").seedEach()
}),define("interactive/js/http",["module","./http/deeplink/SeedDeepLink"],function(e){return{name:e.id}
}),define("tools/http/GetScript",["can"],function(e){return e.Control({get:function(t,n){return n=n||{},this.options=e.$.extend(!0,{dataType:"script",cache:!0,url:t},n),e.$.ajax(this.options)
}})
}),define("interactive/js/observer/adchoices/AdChoices",["can","tools/http/URLParser","tools/http/GetScript"],function(e,t,n){return e.Control.extend({init:function(){this.evidonID=this.element,this.evidonCode="pub1.js",this.ocid=414,this.urlParser=(new t).urlItems(),this.getScript=new n,this.protocol="https:",this.cdn=this.protocol=="https:"?"https://info.evidon.com/c/betrad/pub/":"http://cdn.betrad.com/pub/",this.dataPageId=this.element.data("adchoices-pageid"),this.page_id=typeof this.dataPageId!="undefined"&&this.dataPageId!==""?this.dataPageId:this.parse(),this.act()
},hostArray:function(){var e=["127.0.0.1","localhost.adobe.com","aceui.corp.adobe.com","www.adobe.com","adobe.com","get.adobe.com","get2.adobe.com","get3.adobe.com","kb2.adobe.com","community.adobe.com","helpx.adobe.com","store1.adobe.com","store2.adobe.com","store3.adobe.com"],t=this.urlParser.host||window.location.hostname||"";
return e.indexOf(t)!=-1
},parse:function(){var e,t=this.hostArray();
switch(this.urlParser.locale){case"de":e=t?"322":"327";
break;
case"fr":e=t?"324":"326";
break;
case"uk":e=t?"323":"328";
break;
case"se":e=t?"1013":"1024";
break;
case"at":e=t?"1012":"1021";
break;
case"ch_de":e=t?"1010":"1020";
break;
case"ch_fr":e=t?"1009":"1022";
break;
case"ch_it":e=t?"1011":"1023";
break;
default:e=t?"86":"126"
}return e
},setImg:function(){var e=document.createElement("img");
e.src=this.protocol+"//l.betrad.com/pub/p.gif?pid="+this.page_id+"&ocid="+this.ocid+"&ii=1&r="+Math.random(),e.height="1",e.width="1",document.body.appendChild(e)
},act:function(){if(this.evidonID!=null){var e=this.cdn+this.evidonCode,t=this;
this.evidonID.bind("click",function(n){n.preventDefault(),t.getScript.get(e).done(function(){BAPW.i(t.evidonID,{pid:t.page_id,ocid:t.ocid},!1),t.setImg()
})
})
}}})
}),define("interactive/js/observer/adchoices/SeedAdChoices",["linseed!./AdChoices"],function(e){return e("seed-adchoices").seedEach()
}),define("interactive/js/observer/geoloader/GeoAdobeModel",["can","can/model"],function(e){return e.Model.extend({findOne:function(t){return e.$.ajax({url:"https://geo2.adobe.com/json/",jsonp:"callback",data:t,dataType:"jsonp"})
}},{})
}),define("interactive/js/observer/geoloader/GeoCQLocModel",["can","can/model"],function(e){return e.Model.extend({findOne:function(e){return $.ajax({url:e,jsonpCallback:"callback",dataType:"jsonp"})
}},{})
}),define("text",["module"],function(e){var t,n,r,i,s,o=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],u=/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,a=/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,f=typeof location!="undefined"&&location.href,l=f&&location.protocol&&location.protocol.replace(/\:/,""),c=f&&location.hostname,h=f&&(location.port||undefined),p={},d=e.config&&e.config()||{};
t={version:"2.0.13",strip:function(e){if(e){e=e.replace(u,"");
var t=e.match(a);
t&&(e=t[1])
}else{e=""
}return e
},jsEscape:function(e){return e.replace(/(['\\])/g,"\\$1").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r").replace(/[\u2028]/g,"\\u2028").replace(/[\u2029]/g,"\\u2029")
},createXhr:d.createXhr||function(){var e,t,n;
if(typeof XMLHttpRequest!="undefined"){return new XMLHttpRequest
}if(typeof ActiveXObject!="undefined"){for(t=0;
t<3;
t+=1){n=o[t];
try{e=new ActiveXObject(n)
}catch(r){}if(e){o=[n];
break
}}}return e
},parseName:function(e){var t,n,r,i=!1,s=e.lastIndexOf("."),o=e.indexOf("./")===0||e.indexOf("../")===0;
return s!==-1&&(!o||s>1)?(t=e.substring(0,s),n=e.substring(s+1)):t=e,r=n||t,s=r.indexOf("!"),s!==-1&&(i=r.substring(s+1)==="strip",r=r.substring(0,s),n?n=r:t=r),{moduleName:t,ext:n,strip:i}
},xdRegExp:/^((\w+)\:)?\/\/([^\/\\]+)/,useXhr:function(e,n,r,i){var s,o,u,a=t.xdRegExp.exec(e);
return a?(s=a[2],o=a[3],o=o.split(":"),u=o[1],o=o[0],(!s||s===n)&&(!o||o.toLowerCase()===r.toLowerCase())&&(!u&&!o||u===i)):!0
},finishLoad:function(e,n,r,i){r=n?t.strip(r):r,d.isBuild&&(p[e]=r),i(r)
},load:function(e,n,r,i){if(i&&i.isBuild&&!i.inlineText){r();
return
}d.isBuild=i&&i.isBuild;
var s=t.parseName(e),o=s.moduleName+(s.ext?"."+s.ext:""),u=n.toUrl(o),a=d.useXhr||t.useXhr;
if(u.indexOf("empty:")===0){r();
return
}!f||a(u,l,c,h)?t.get(u,function(n){t.finishLoad(e,s.strip,n,r)
},function(e){r.error&&r.error(e)
}):n([o],function(e){t.finishLoad(s.moduleName+"."+s.ext,s.strip,e,r)
})
},write:function(e,n,r,i){if(p.hasOwnProperty(n)){var s=t.jsEscape(p[n]);
r.asModule(e+"!"+n,"define(function () { return '"+s+"';});\n")
}},writeFile:function(e,n,r,i,s){var o=t.parseName(n),u=o.ext?"."+o.ext:"",a=o.moduleName+u,f=r.toUrl(o.moduleName+u)+".js";
t.load(a,r,function(n){var r=function(e){return i(f,e)
};
r.asModule=function(e,t){return i.asModule(e,f,t)
},t.write(e,a,r,s)
},s)
}};
if(d.env==="node"||!d.env&&typeof process!="undefined"&&process.versions&&!!process.versions.node&&!process.versions["node-webkit"]){n=require.nodeRequire("fs"),t.get=function(e,t,r){try{var i=n.readFileSync(e,"utf8");
i[0]===""&&(i=i.substring(1)),t(i)
}catch(s){r&&r(s)
}}
}else{if(d.env==="xhr"||!d.env&&t.createXhr()){t.get=function(e,n,r,i){var s=t.createXhr(),o;
s.open("GET",e,!0);
if(i){for(o in i){i.hasOwnProperty(o)&&s.setRequestHeader(o.toLowerCase(),i[o])
}}d.onXhr&&d.onXhr(s,e),s.onreadystatechange=function(t){var i,o;
s.readyState===4&&(i=s.status||0,i>399&&i<600?(o=new Error(e+" HTTP status: "+i),o.xhr=s,r&&r(o)):n(s.responseText),d.onXhrComplete&&d.onXhrComplete(s,e))
},s.send(null)
}
}else{if(d.env==="rhino"||!d.env&&typeof Packages!="undefined"&&typeof java!="undefined"){t.get=function(e,t){var n,r,i="utf-8",s=new java.io.File(e),o=java.lang.System.getProperty("line.separator"),u=new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(s),i)),a="";
try{n=new java.lang.StringBuffer,r=u.readLine(),r&&r.length()&&r.charAt(0)===65279&&(r=r.substring(1)),r!==null&&n.append(r);
while((r=u.readLine())!==null){n.append(o),n.append(r)
}a=String(n.toString())
}finally{u.close()
}t(a)
}
}else{if(d.env==="xpconnect"||!d.env&&typeof Components!="undefined"&&Components.classes&&Components.interfaces){r=Components.classes,i=Components.interfaces,Components.utils["import"]("resource://gre/modules/FileUtils.jsm"),s="@mozilla.org/windows-registry-key;1" in r,t.get=function(e,t){var n,o,u,a={};
s&&(e=e.replace(/\//g,"\\")),u=new FileUtils.File(e);
try{n=r["@mozilla.org/network/file-input-stream;1"].createInstance(i.nsIFileInputStream),n.init(u,1,0,!1),o=r["@mozilla.org/intl/converter-input-stream;1"].createInstance(i.nsIConverterInputStream),o.init(n,"utf-8",n.available(),i.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER),o.readString(n.available(),a),o.close(),n.close(),t(a.value)
}catch(f){throw new Error((u&&u.path||"")+": "+f)
}}
}}}}return t
}),define("text!interactive/js/observer/geoloader/GeoModal.hbs",[],function(){return'<div id="geomodal" class="grid-container geomodal" style="display:none;">\n    <div class="grid-row">\n        <div class="modalscrollwr">\n            <div class="grid-span-2of5 modalcol1">\n                <h3>Choose your region</h3>\n                <p>The Adobe USA site had been optimized for users within the United States. If you live outside the US, we recommend that you visit your local site for the most relevant information, including pricing, promotions, and local events</p>\n                <div class="grid-span-4of5 ui-button"><span class="default-lang">United States</span></div>\n            </div>\n            <div class="grid-span-3of5 modalcol2">\n                <div class="paddedwr">\n                    {{# each loc_strings}}\n                        <div class="geowr">\n                            <p>{{blurb}}</p>\n                            <div class="ui-button grid-span-3of5"><a href="#" data-alang="{{@key}}">{{{button}}}</a></div>\n                            <p>{{beforeIcon}} &nbsp;<i class="adobe-icon-globe icon-2x"></i>&nbsp;{{afterIcon}}</p>\n                        </div>\n                    {{/each}}\n                </div>\n            </div>\n        </div>\n    </div>\n</div>'
}),define("interactive/js/observer/geoloader/GeoModal",["module","can/view/mustache","text!./GeoModal.hbs"],function(e,t,n){return t.view.mustache(n)
}),define("text!interactive/js/observer/geoloader/GeoHanger.hbs",[],function(){return'<div id="geohanger">\n        <div>\n            <p>The page that you requested is not available in your preferred language, click the button below to view this page in:</p>\n            <span class="ui-button"><a href="{{srcurl}}">English</a></span>\n        </div>\n    <span class="close"><a href="#"><i class="fa-times-circle"></i></a></span>\n</div>'
}),define("interactive/js/observer/geoloader/GeoHanger",["module","can/view/mustache","text!./GeoHanger.hbs"],function(e,t,n){return t.view.mustache(n)
}),function(e){typeof define=="function"&&define.amd?define("jquery-cookie",["jquery"],e):typeof exports=="object"?e(require("jquery")):e(jQuery)
}(function(e){function n(e){return u.raw?e:encodeURIComponent(e)
}function r(e){return u.raw?e:decodeURIComponent(e)
}function i(e){return n(u.json?JSON.stringify(e):String(e))
}function s(e){e.indexOf('"')===0&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));
try{return e=decodeURIComponent(e.replace(t," ")),u.json?JSON.parse(e):e
}catch(n){}}function o(t,n){var r=u.raw?t:s(t);
return e.isFunction(n)?n(r):r
}var t=/\+/g,u=e.cookie=function(t,s,a){if(s!==undefined&&!e.isFunction(s)){a=e.extend({},u.defaults,a);
if(typeof a.expires=="number"){var f=a.expires,l=a.expires=new Date;
l.setTime(+l+f*86400000)
}return document.cookie=[n(t),"=",i(s),a.expires?"; expires="+a.expires.toUTCString():"",a.path?"; path="+a.path:"",a.domain?"; domain="+a.domain:"",a.secure?"; secure":""].join("")
}var c=t?undefined:{},h=document.cookie?document.cookie.split("; "):[];
for(var p=0,d=h.length;
p<d;
p++){var v=h[p].split("="),m=r(v.shift()),g=v.join("=");
if(t&&t===m){c=o(g,s);
break
}!t&&(g=o(g))!==undefined&&(c[m]=g)
}return c
};
u.defaults={},e.removeCookie=function(t,n){return e.cookie(t)===undefined?!1:(e.cookie(t,"",e.extend({},n,{expires:-1})),!e.cookie(t))
}
}),define("tools/http/Cookie",["can","jquery-cookie"],function(e){return e.Control.extend({defaults:{expires:365,path:"/",domain:".adobe.com"}},{resetHost:function(e){e=typeof e!="undefined"?e:window.location.hostname,e.indexOf(this.options.domain)===-1&&(this.options.domain=e)
},changeOptions:function(e,t){this.options[e]=t
},getCookie:function(t){return e.$.cookie(t)
},setCookie:function(t,n){return e.$.cookie(t,n,{path:this.options.path,expires:this.options.expires,domain:this.options.domain})
},checkCookie:function(t){return e.$.removeCookie(t)
},deleteCookie:function(t){return e.$.removeCookie(t,{path:this.options.path,domain:this.options.domain})
}})
}),define("interactive/js/observer/geoloader/GeoLoader",["can","./GeoAdobeModel","./GeoCQLocModel","./GeoModal","./GeoHanger","tools/http/URLParser","tools/http/Cookie"],function(e,t,n,r,i,s,o){return e.Control.extend({defaults:{regionCookie:"international",modalCookie:"georouting_presented",defaultRegCookie:"us",defaultCountry:"US",geoArray:["africa","at","au","be_en","be_fr","be_nl","bg","br","ca","ca_fr","ch_de","ch_fr","ch_it","cis","cn","cy_en","cz","de","dk","ee","eeurope","es","fi","fr","gr_en","hk_en","hk_zh","hr","hu","ie","il_en","il_he","in","it","jp","kr","la","lt","lu_de","lu_en","lu_fr","lv","mena_ar","mena_en","mena_fr","mt","mx","nl","no","nz","pl","pt","ro","rs","ru","se","sea","si","sk","tr","tw","ua","uk"],searchMap:{"google.fr":"fr","google.co.uk":"uk","google.com.au":"au","google.co.jp":"jp","google.de":"de","google.ca":["ca","ca_fr"],"google.co.id":"sea","google.co.in":"in","google.com.ph":"sea","google.com.tr":"tr","google.nl":"nl","au.search.yahoo.com":"au","fr.search.yahoo.com":"fr","uk.search.yahoo.com":"uk","search.yahoo.co.jp":"jp","yandex.ru":"ru","de.search.yahoo.com":"de"},devEnvs:["qa01","qa02","qa03","qa04","qa05","dev01","dev02","dev03","dev04","dev05","stage","stage2","127.0.0.1"],regparams:{},localStore:"false",modalbuttons:".modal-content .ui-button",modalClose:'label[for="modal-toggle"]',hangerButtons:"#geohanger .ui-botton",hangerClose:"#geohanger .close a",cqlocHost:"https://www.qa03.adobe.com/"}},{init:function(){this.cookieinst=new o,this.urls=new s,this.options.geoMap=new e.Map,this.options.geob=t,this.options.gloc=n,this.options.modalCK=this.cookieinst.getCookie("georouting_presented"),window.location.hostname.indexOf("adobe")===-1&&this.cookieinst.resetHost(),this.mapMaps({intlCookie:this.cookieinst.getCookie(this.options.regionCookie),urlItems:this.urls.urlItems()},"geoMap"),window.location.hash.split("&").length>=1&&this.testMethod(window.location.hash.split("&")),this.geoDataAdobe(this.options.regparams),this.devFlag(),this.on()
},testMethod:function(e){var t=e.length,n=e.splice(1,t-1),r=n.length;
for(var i=0;
i<r;
i++){var s=n[i].split("=")[0],o=decodeURIComponent(n[i].split("=")[1]);
switch(s){case"country":this.options.regparams[s]=o;
break;
case"accept-language":this.options.regparams[s]=o;
break;
case"international":this.cookieinst.setCookie(s,o);
break;
case"path":this.options.geoMap.urlItems[s]=o;
break;
case"referrer":this.options.geoMap.urlItems[s]=o
}}},devFlag:function(){var e=window.location.hostname,t=e.match(/(qa|dev|stage|(127.0.0.1))0?[1-5]?/g)!==null?e.match(/(qa|dev|stage|(127.0.0.1))0?[1-5]?/g):[],n=t?this.options.devEnvs.indexOf(t):-1;
if(n>=0||t.length>=1){this.options.devFlag=!0
}},geoDataAdobe:function(e){var t=this;
this.options.geob.findOne(e).done(function(e){t.mapMaps(e.attr(),"geoMap")
})
},geoCQLoc:function(e){var t=this;
this.options.gloc.findOne(e).done(function(e){var n=e;
t.mapMaps(e.attr(),"geoMap"),t.modals()
})
},mapMaps:function(e,t){this.options[t].attr(e)
},modals:function(){$("#geotrig").before(r(this.options.geoMap)).trigger("click"),$(".modal-frame").addClass("geo"),this.cookieinst.changeOptions("expires",30),this.cookieinst.setCookie(this.options.modalCookie,"true")
},regionDirect:function(e){var t=this,n=this.options.geoMap.urlItems,r=n.protocol,i=n.hostname,s=n.path,o=s.split("/")[1],u=this.options.geoArray.indexOf(o)>=0?s.replace("/"+o,""):s,a=e!==this.options.defaultRegCookie?r+"//"+i+"/"+e+u:r+"//"+i+u,f=e!==this.options.defaultRegCookie?r+"//"+i+"/"+e:r+"//"+i;
this.options.devFlag&&(console.log("pl: "+e),console.log("urlob: "+n),console.log("urlprot: "+r),console.log("urlhost: "+i),console.log("newurl: "+a),console.log("newurlindex: "+f)),$.ajax({url:a,type:"HEAD",error:function(){t.options.devFlag&&console.log("page does not exist"),t.cookieinst.setCookie("rdresna",window.location.href),window.location=f
},success:function(){t.options.devFlag&&console.log("routed"),window.location=a
}})
},"{window} load":function(){var e=this.options,t=e.geoMap,n=this.cookieinst.getCookie("rdresna"),r=t.intlCookie?t.intlCookie:e.defaultRegCookie,s=e.geoArray.indexOf(t.urlItems.path.split("/")[1])>=0?t.urlItems.path.split("/")[1]:e.defaultRegCookie,o=t.country.toLowerCase(),u=t.urlItems.referrer.replace(/(http[s]?:\/\/)(www.)?/i,"").split("/")[0],a=e.searchMap[u]!==""||e.searchMap[u]!==undefined?e.searchMap[u]:"",f=a!==""&&Array.isArray(a)?a[0].split("_")[0]:"",l=a!==""&&!Array.isArray(a)&&e.geoArray.indexOf(a)>=0?a:f,c=r===e.defaultRegCookie,h=s===e.defaultRegCookie,p=l===e.defaultRegCookie,d=o===e.defaultCountry.toLowerCase(),v=l!==""?l:o;
e.devFlag&&(console.log("nDcc: "+c),console.log("pathLocale: "+s),console.log("pLvsdRC: "+h),console.log("referrerLocale:"+l),console.log("rLvsdRC: "+p),console.log("modaltest:"+(e.modalCK===undefined)),console.log("referrertest:"+(!p&&l!=="")),console.log("test1: "+(c&&h&&e.modalCK===undefined&&(!p&&l!==""||!d))),console.log("test2: "+(!c&&r!==s&&s===e.defaultRegCookie)));
if(n!==undefined&&n!==""){$("body").append(i({srcurl:n}))
}else{if(c&&h&&e.modalCK===undefined&&(!p&&l!==""||!d)){var m=this.options.cqlocHost,g="etc/beagle/public/",y="geoinfo."+v+".json",b=m+g+y;
this.geoCQLoc(b)
}else{!c&&r!==s&&this.regionDirect(r)
}}},"{modalbuttons} click":function(t,n){n.preventDefault();
var r=this.options.geoMap.adobe_country_path,i=this.options.geoMap.urlItems,s=e.$(t).parents(".geowr"),o=e.$(t).find("a"),u=e.$(o).attr("data-alang"),a=u===this.options.defaultRegCookie?i.origin:i.protocol+"//"+i.host+"/"+u+i.path;
u!==this.options.defaultRegCookie&&u!==undefined&&u!==""?(this.cookieinst.changeOptions("expires",180),this.cookieinst.setCookie(this.options.regionCookie,u),window.location.assign(a)):$(".modal.modal-dom").remove()
},"{modalClose} click":function(){this.cookieinst.changeOptions("expires",30),this.cookieinst.setCookie(this.options.modalCookie,"true")
},"{hangerButtons} click":function(e,t){t.preventDefault();
var n=$(e).attr("href");
this.cookieinst.setCookie(this.options.regionCookie,""),this.cookieinst.setCookie("rdresna",""),window.location.assign(n)
},"{hangerClose} click":function(e,t){t.preventDefault(),this.cookieinst.setCookie("rdresna",""),$("#geohanger").remove()
}})
}),define("interactive/js/observer/geoloader/SeedGeoLoader",["linseed!./GeoLoader"],function(e){return e("seed-geoloader").seedEach()
}),define("interactive/js/observer/georouting/GeoRouting",["can","tools/http/Cookie","tools/http/URLParser","tools/utils/String"],function(e,t,n,r){return e.Control.extend({defaults:{regionCookie:"international",storeCookie:"storeregion"}},{init:function(){this.theCookie=new t,this.urLParser=new n,this.stringUtils=new r,this.urlItems=this.urLParser.urlItems(),this.currURL=this.urlItems.path+this.urlItems.search,this.theCookie.resetHost(),this.cookieStatus=this.theCookie.getCookie(this.options.regionCookie),this.storeRegionParsed=this.cookieStatus,typeof this.cookieStatus!="undefined"&&this.parseRegion(this.cookieStatus),this.bindEvents()
},parseRegion:function(e){e=e!==null?e:this.cookieStatus,this.stringUtils.startsWith(e,"be_")||this.stringUtils.startsWith(e,"lu_")?this.storeRegionParsed=this.cookieStatus.split("_")[0]:this.stringUtils.startsWith(e,"ca")?this.storeRegionParsed="ca":this.stringUtils.startsWith(e,"eeur")?this.storeRegionParsed="eu":this.stringUtils.startsWith(e,"hk_")?this.storeRegionParsed="cn":this.stringUtils.startsWith(e,"uk")?this.storeRegionParsed="gb":this.storeRegionParsed=this.cookieStatus
},setRegionCookie:function(t,n){n.preventDefault(),this.cookieStatus=e.$(t).attr("hreflang"),this.parseRegion(this.cookieStatus),this.theCookie.setCookie(this.options.regionCookie,this.cookieStatus),this.theCookie.setCookie(this.options.storeCookie,this.storeRegionParsed),this.cookieStatus=this.theCookie.getCookie(this.options.regionCookie),this.regionDirect()
},bindEvents:function(){var t=this;
this.regionSelector=this.element.find(".dd .dropdown a[hreflang]"),this.regionFooterLink=e.$("footer .region-footer a"),this.regionFooterLink.unbind("click"),this.regionFooterLink.bind("click",function(){e.$(document).on("modalReady",function(){e.$(".modal-region .modal-content a").each(function(){e.$(this).unbind("click"),e.$(this).bind("click",function(e){t.setRegionCookie(this,e)
})
})
})
}),this.regionSelector.unbind("click"),this.regionSelector.bind("click",function(e){t.setRegionCookie(this,e)
})
},regionDirect:function(){var t=this,n=this.urLParser.envCheck(),r,i,s="",o=["/content/beagle/","/content/acom/","/content/help/","/en/","/us/"],u=["africa","at","au","be_en","be_fr","be_nl","bg","br","ca","ca_fr","ch_de","ch_fr","ch_it","cis","cn","cy_en","cz","de","dk","ee","eeurope","es","fi","fr","gr_en","hk_en","hk_zh","hr","hu","ie","il_en","il_he","in","it","jp","kr","la","lt","lu_de","lu_en","lu_fr","lv","mena_ar","mena_en","mena_fr","mt","mx","nl","no","nz","pl","pt","ro","rs","ru","se","sea","si","sk","tr","tw","ua","uk"],a=n==="publish"||n==="author";
a?e.$.each(o,function(e,n){t.urLParser.cleanUrl(t.currURL,n)&&(s=n,r=t.urLParser.cleanUrl(t.currURL,n,"/"))
}):r=this.currURL,e.$.each(u,function(e,n){t.urLParser.cleanUrl(r,"/"+n+"/")&&(r=t.urLParser.cleanUrl(r,"/"+n+"/","/"))
}),s!==""?(r=s+this.cookieStatus+r,i=s+this.cookieStatus+"/"):this.cookieStatus!=="us"?(r="/"+this.cookieStatus+r,i="/"+this.cookieStatus+"/"):i="/",e.$.ajax({url:r,type:"HEAD",error:function(){window.location=i
},success:function(){window.location=r
}})
}})
}),define("interactive/js/observer/georouting/SeedGeoRouting",["linseed!./GeoRouting"],function(e){return e("seed-georouting").seedEach()
}),define("interactive/js/observer",["module","./observer/adchoices/SeedAdChoices","./observer/geoloader/SeedGeoLoader","./observer/georouting/SeedGeoRouting"],function(e){return{name:e.id}
}),typeof jQuery!="undefined"&&function(e){e.extend(e.fn,{selectBox:function(t,n){var r,i="",s=navigator.platform.match(/mac/i),o=function(t,n){if(navigator.userAgent.match(/iPad|iPhone|Android|IEMobile|BlackBerry/i)){return !1
}if(t.tagName.toLowerCase()!=="select"){return !1
}t=e(t);
if(t.data("selectBox-control")){return !1
}var r=e('<a class="selectBox" />'),i,o=n||{},l=!!t.attr("multiple"),h=l||parseInt(t.attr("size"))>1,p,m,g="";
t.data("_tmp",0),r.addClass(t.attr("class")).attr("id","selectBox-control-"+(t.attr("id")?t.attr("id"):t[0][e.expando])).attr("tabindex",t.attr("tabindex")||0).css("display","inline-block").bind("focus.selectBox",function(){this!==document.activeElement&&document.body!==document.activeElement&&e(document.activeElement).blur();
if(r.hasClass("selectBox-active")){return
}r.addClass("selectBox-active"),r.data("selectBox-last-selected")&&y(t,r.data("selectBox-last-selected")),t.trigger("focus")
}).bind("blur.selectBox",function(){if(!r.hasClass("selectBox-active")){return
}r.removeClass("selectBox-active").removeClass("selectBox-multiselect"),t.trigger("blur")
}),e(window).data("selectBox-bindings")||e(window).data("selectBox-bindings",!0).bind("scroll.selectBox",v).bind("resize.selectBox",v),t.attr("title")&&r.attr("title",t.attr("title")),t.attr("disabled")&&r.addClass("selectBox-disabled").attr("aria-disabled",!0),e('label[for="'+t.attr("id")+'"]').each(function(e,t){t.id||(t.id=r.attr("id")+"-label"+e),g=r.attr("aria-labelledby")||"",g=g.length?g+" "+t.id:t.id,r.attr("aria-labelledby",g)
}),t.closest("label").each(function(e,t){t.id||(t.id=r.attr("id")+"-label"+e),g=r.attr("aria-labelledby")||"",g=g.length?g+" "+t.id:t.id,r.attr("aria-labelledby",g)
}),t.attr("aria-labelledby")&&(g=r.attr("aria-labelledby")||"",g=g.length?g+" "+t.attr("aria-labelledby"):t.attr("aria-labelledby"),r.attr("aria-labelledby",g)),t.attr("aria-label")&&r.attr("aria-label",t.attr("aria-label")),t.bind("click.selectBox",function(e){r.focus(),e.preventDefault()
});
if(h){i=u(t,"inline"),r.attr("role","listbox").attr("aria-multiselectable",l).append(i).data("selectBox-options",i).addClass("selectBox-inline selectBox-menuShowing").bind("keydown.selectBox",function(e){E(t,e)
}).bind("keypress.selectBox",function(e){S(t,e)
}).bind("mousedown.selectBox",function(t){e(t.target).is("A.selectBox-inline")&&t.preventDefault(),r.hasClass("selectBox-active")||r.focus()
}).insertAfter(t);
if(!t[0].style.height){var b=t.attr("size")?parseInt(t.attr("size")):5,x=r.clone().removeAttr("id").css({position:"absolute",top:"-9999em"}).show().appendTo("body");
x.find(".selectBox-options").html("<li><a> </a></li>");
var T=parseInt(x.find(".selectBox-options A:first").html("&nbsp;").outerHeight());
x.remove(),r.height(T*b)
}k(r)
}else{var C=e('<span class="selectBox-label" />'),L=e('<span class="selectBox-arrow"><span class="selectBox-arrow-icon"></span></span>');
C.attr("id","selectBox-label-"+r.attr("id")).attr("class",a(t)).text(f(t)),i=u(t,"dropdown"),g=g.length?C.attr("id")+" "+g:C.attr("id"),r.attr("role",s?"button":"combobox").attr("aria-haspopup",!0).attr("aria-readonly",!0).attr("aria-expanded",!1).attr("aria-owns","selectBox-dropdown-menu-"+(t.attr("id")?t.attr("id"):t[0][e.expando])).attr("aria-labelledby",g).data("selectBox-options",i).addClass("selectBox-dropdown").append(C).append(L).bind("mousedown.selectBox",function(e){r.hasClass("selectBox-menuShowing")?v():(e.stopPropagation(),i.data("selectBox-down-at-x",e.screenX).data("selectBox-down-at-y",e.screenY),d(t))
}).bind("keydown.selectBox",function(e){E(t,e)
}).bind("keypress.selectBox",function(e){S(t,e)
}).bind("open.selectBox",function(e,n){if(n&&n._selectBox===!0){return
}d(t)
}).bind("close.selectBox",function(e,t){if(t&&t._selectBox===!0){return
}v()
}).insertAfter(t),i.attr("aria-labelledby",g).insertAfter(r);
var A=r.width()-L.outerWidth()-parseInt(C.css("paddingLeft"))-parseInt(C.css("paddingLeft"));
C.width(A),k(r)
}t.removeData("_tmp").addClass("selectBox").data("selectBox-control",r).data("selectBox-settings",o).hide().ready(function(e){var n=null;
o.change&&(n=o.change,o.change=null),N(t,t.val()),n&&(o.change=n)
}),c(t),p=i.find(".selectBox-selected").last(),p.length&&(r.data("selectBox-last-selected",p),r.attr("aria-activedescendant",p.attr("id")),w(t,p,!0))
},u=function(t,n){var r,i,s=0;
_getOptions=function(t,n){return t.children("OPTION, OPTGROUP").each(function(){if(e(this).is("OPTION")){var t=e(this).parent().is("OPTGROUP")?n.find(".selectBox-optgroup:last ul"):n;
e(this).length>0?(i=L(e(this),t),i.find("A").attr("id",n.attr("id")+"-"+s++)):t.append('<li role="presentation"><a> </a></li>')
}else{s++;
var r=e('<li id="selectBox-optgroup-'+s+'" class="selectBox-optgroup" role="presentation" />').append('<span id="selectBox-optgroup-'+s+'-label">'+e(this).attr("label")+"</span>").append('<ul aria-labelledby="selectBox-optgroup-'+s+'-label"></ul>');
n.append(r),n=_getOptions(e(this),n)
}}),n
};
switch(n){case"inline":return r=e('<ul class="selectBox-options" role="presentation" />'),r.attr("id","selectBox-menu-"+(t.attr("id")?t.attr("id"):t[0][e.expando])),r=_getOptions(t,r),r.find("A").bind("mouseover.selectBox",function(n){y(t,e(this).parent())
}).bind("mouseout.selectBox",function(n){b(t,e(this).parent())
}).bind("mousedown.selectBox",function(e){e.preventDefault(),t.selectBox("control").hasClass("selectBox-active")||t.selectBox("control").focus()
}).bind("mouseup.selectBox",function(n){v(),y(t,e(this).parent()),g(t,e(this).parent(),n),w(t,e(this).parent()),n.stopPropagation()
}),k(r),r;
case"dropdown":r=e('<ul class="selectBox-dropdown-menu selectBox-options" role="listbox" />'),r.attr("id","selectBox-dropdown-menu-"+(t.attr("id")?t.attr("id"):t[0][e.expando])),r=_getOptions(t,r),r.data("selectBox-select",t).css("display","none").find("A").bind("mousedown.selectBox",function(e){e.preventDefault(),e.screenX===r.data("selectBox-down-at-x")&&e.screenY===r.data("selectBox-down-at-y")&&(r.removeData("selectBox-down-at-x").removeData("selectBox-down-at-y"),v())
}).bind("mouseup.selectBox",function(n){if(n.screenX===r.data("selectBox-down-at-x")&&n.screenY===r.data("selectBox-down-at-y")){return
}r.removeData("selectBox-down-at-x").removeData("selectBox-down-at-y"),g(t,e(this).parent(),n),v(),r.data("selectBox-select").data("selectBox-control").focus()
}).bind("mouseover.selectBox",function(n){y(t,e(this).parent())
}).bind("mouseout.selectBox",function(n){b(t,e(this).parent())
}).bind("click.selectBox",function(n){r.removeData("selectBox-down-at-x").removeData("selectBox-down-at-y"),g(t,e(this).parent(),n),v(),r.data("selectBox-select").data("selectBox-control").focus()
});
var o=t.attr("class")||"";
if(o!==""){o=o.split(" ");
for(var s in o){r.addClass(o[s]+"-selectBox-dropdown-menu")
}}return k(r),r
}},a=function(t){var n=e(t).find("OPTION:selected");
return("selectBox-label "+(n.attr("class")||"")).replace(/\s+$/,"")
},f=function(t){var n=e(t).find("OPTION:selected");
return n.text()||" "
},l=function(t){t=e(t);
var n=t.data("selectBox-control");
if(!n){return
}n.find(".selectBox-label").attr("class",a(t)).text(f(t))
},c=function(t){t=e(t);
var n=t.data("selectBox-settings"),r=t.data("selectBox-control");
if(!r){return
}var i=!!t.attr("multiple")||parseInt(t.attr("size"))>1,s=r.data("selectBox-options"),o=r.find(".selectBox-label").first(),u=r.find(".selectBox-arrow").first(),a=0,f,l,c,h=t[0].style.width,p=t[0].style.minWidth,d=t[0].style.maxWidth,v=r.width(),m;
r.width(t.width()),o.length&&o.width(r.width()-u.outerWidth()-parseInt(o.css("paddingLeft"))-parseInt(o.css("paddingLeft"))),n.autoSize&&!t[0].style.width&&(s.find("A").each(function(t,n){f=e(n).text().length,f>a&&(a=f,l=e(n))
}),l&&(i?(r.css({overflow:"visible",width:"auto"}),l.outerWidth()>v?(m=Math.max(l.outerWidth(),t.width()),s.height()>r.height()&&(m+=13),p&&(m=Math.max(parseInt(p),m)),d&&(m=Math.min(parseInt(d),m)),r.css({overflow:"auto"}).width(m)):r.css({overflow:"auto"}).width(v)):(c=o.html(),o.html(l.html()).css({overflow:"visible",width:"auto"}),m=Math.max(o.outerWidth()+u.outerWidth(),t.width()),p&&(m=Math.max(parseInt(p),m)),d&&(m=Math.min(parseInt(d),m)),r.width(m),o.width(r.width()-u.outerWidth()-parseInt(o.css("paddingLeft"))-parseInt(o.css("paddingLeft"))).html(c).css({overflow:"hidden"}))))
},h=function(t){t=e(t);
var n=t.data("selectBox-control");
if(!n){return
}var r=n.data("selectBox-options");
r.remove(),n.remove(),t.removeClass("selectBox").removeData("selectBox-control").data("selectBox-control",null).removeData("selectBox-settings").data("selectBox-settings",null).show()
},p=function(t){t=e(t),t.selectBox("options",t.html()),c(t)
},d=function(t){t=e(t);
var n=t.data("selectBox-control"),r=t.data("selectBox-settings"),i=n.data("selectBox-options");
if(n.hasClass("selectBox-disabled")){return !1
}v(),m(t);
if(t.triggerHandler("beforeopen")){return !1
}var s=function(){t.triggerHandler("open",{_selectBox:!0})
};
switch(r.menuTransition){case"fade":i.fadeIn(r.menuSpeed,s);
break;
case"slide":i.slideDown(r.menuSpeed,s);
break;
default:i.show(r.menuSpeed,s)
}r.menuSpeed||s();
var o=n.data("selectBox-last-selected")?n.data("selectBox-last-selected"):i.find(".selectBox-selected:last");
w(t,o,!0),y(t,o),n.removeAttr("aria-activedescendant").addClass("selectBox-menuShowing").attr("aria-expanded",!0).attr("aria-activedescendant",o.find("A").attr("id")),e(document).bind("mousedown.selectBox",function(t){if(e(t.target).parents().andSelf().hasClass("selectBox-options")){return
}v()
})
},v=function(){if(e(".selectBox-dropdown-menu:visible").length===0){return
}e(document).unbind("mousedown.selectBox"),e(".selectBox-dropdown-menu").each(function(){var t=e(this),n=t.data("selectBox-select"),r=n.data("selectBox-control"),i=n.data("selectBox-settings"),s=t.find(".selectBox-selected");
if(n.triggerHandler("beforeclose")){return !1
}var o=function(){n.triggerHandler("close",{_selectBox:!0})
};
r.data("selectBox-last-selected",s).attr("aria-expanded",!1).attr("aria-activedescendant",s.find("A").attr("id")),t.attr("aria-activedescendant",r.attr("aria-activedescendant"));
if(i){switch(i.menuTransition){case"fade":t.fadeOut(i.menuSpeed,o);
break;
case"slide":t.slideUp(i.menuSpeed,o);
break;
default:t.hide(i.menuSpeed,o)
}i.menuSpeed||o(),r.removeClass("selectBox-menuShowing")
}else{e(this).hide(),e(this).triggerHandler("close",{_selectBox:!0}),e(this).removeClass("selectBox-menuShowing")
}})
},m=function(t){t=e(t);
var n=t.data("selectBox-control"),r=t.data("selectBox-settings"),i=n.data("selectBox-options"),s=isNaN(n.css("borderBottomWidth"))?0:parseInt(n.css("borderBottomWidth")),o=n.offset().top,u=n.outerHeight(),a=n.offset().left,f=i.data("max-height")||i.outerHeight(),l=o+u-s,c=e(window).height(),h=e(window).scrollTop(),p=l+f<=c+h,d=!p,v={bottom:"auto"};
i.data("max-height")||i.data("max-height",i.outerHeight());
if(!d){i.css("max-height",i.data("max-height"))
}else{if(o-h>=f){i.css("max-height",i.data("max-height")),v.bottom=n.outerHeight()
}else{var m=Math.abs(l+u+f-(c+h)),g=Math.abs(o-h-f);
m<g?i.css("max-height",i.data("max-height")-m-u/2):(i.css("max-height",i.data("max-height")-g-u/2),v.bottom=n.outerHeight())
}}i.width(n.innerWidth()).css(v)
},g=function(t,n,r){t=e(t),n=e(n);
var i=t.data("selectBox-control"),o=t.data("selectBox-settings"),u=i.data("selectBox-options"),a=u.find("li:not(.selectBox-optgroup, .selectBox-disabled)"),f=i.data("selectBox-last-selected"),c=-1,h,p;
if(i.hasClass("selectBox-disabled")){return !1
}if(n.length===0||n.hasClass("selectBox-disabled")){return !1
}if(t.attr("multiple")){if(r.shiftKey&&f){n.toggleClass("selectBox-selected"),n.hasClass("selectBox-selected")?n.find("A").attr("aria-selected",!0):n.find("A").removeAttr("aria-selected");
var h;
a.index(n)>a.index(f)?h=a.slice(a.index(f),a.index(n)):h=a.slice(a.index(n),a.index(f)+1),h=h.not(".selectBox-optgroup, .selectBox-disabled"),n.hasClass("selectBox-selected")?h.addClass("selectBox-selected").find("A").attr("aria-selected",!0):h.removeClass("selectBox-selected").find("A").removeAttr("aria-selected");
if(r.type=="keydown"){switch(r.keyCode){case 37:case 38:c=1;
break;
case 39:case 40:c=0
}h.index(f)==c&&(n.hasClass("selectBox-selected")&&!f.hasClass("selectBox-selected")?n.removeClass("selectBox-selected").find("A").removeAttr("aria-selected"):n.addClass("selectBox-selected").find("A").attr("aria-selected",!0));
if(r.keyCode!=13&&r.keyCode!=32){p=u.find(".selectBox-selected");
var d=p.index(n),v=a.index(n),m=v,g,y,b=!0;
for(y=d;
y>=0;
y--){g=a.index(p.eq(y)),Math.abs(g-m)>1&&(b=!1),b||p.eq(y).removeClass("selectBox-selected").find("A").removeAttr("aria-selected"),m=g
}b=!0,m=v;
for(y=d;
y<p.length;
y++){g=a.index(p.eq(y)),Math.abs(g-m)>1&&(b=!1),b||p.eq(y).removeClass("selectBox-selected").find("A").removeAttr("aria-selected"),m=g
}}}}else{if(s&&r.metaKey||!s&&r.ctrlKey||i.hasClass("selectBox-multiselect")){if(r.type!="keydown"||r.keyCode==13||r.keyCode==32||r.keyCode==65){r.keyCode==65?n.addClass("selectBox-selected"):n.toggleClass("selectBox-selected"),n.hasClass("selectBox-selected")?n.find("A").attr("aria-selected",!0):n.find("A").removeAttr("aria-selected")
}}else{a.removeClass("selectBox-selected").find("A").removeAttr("aria-selected"),n.addClass("selectBox-selected").find("A").attr("aria-selected",!0)
}}}else{if(r.type!="keydown"&&r.type!="keypress"||r.keyCode==13||r.keyCode==32){a.removeClass("selectBox-selected").find("A").removeAttr("aria-selected"),n.addClass("selectBox-selected").find("A").attr("aria-selected",!0)
}}i.hasClass("selectBox-dropdown")&&n.hasClass("selectBox-selected")&&i.find(".selectBox-label").text(n.text());
var y=0,w=[];
return t.attr("multiple")?i.find(".selectBox-selected A").each(function(){w[y++]=e(this).attr("rel")
}):w=u.find(".selectBox-selected A").attr("rel"),i.data("selectBox-last-selected",n).attr("aria-activedescendant",n.find("A").attr("id")),u.attr("aria-activedescendant",i.attr("aria-activedescendant")),t.val()!==w&&(t.val(w),l(t),t.trigger("change")),!0
},y=function(t,n){t=e(t),n=e(n);
var r=t.data("selectBox-control"),i=r.data("selectBox-options");
i.find(".selectBox-hover").removeClass("selectBox-hover"),n.addClass("selectBox-hover")
},b=function(t,n){t=e(t),n=e(n);
var r=t.data("selectBox-control"),i=r.data("selectBox-options");
i.find(".selectBox-hover").removeClass("selectBox-hover")
},w=function(t,n,r){if(!n||n.length===0){return
}t=e(t);
var i=t.data("selectBox-control"),s=i.data("selectBox-options"),o=i.hasClass("selectBox-dropdown")?s:s.parent(),u=parseInt(n.offset().top-o.position().top),a=parseInt(u+n.outerHeight());
r?o.scrollTop(n.offset().top-o.offset().top+o.scrollTop()-o.height()/2):(u<0&&o.scrollTop(n.offset().top-o.offset().top+o.scrollTop()),a>o.height()&&o.scrollTop(n.offset().top+n.outerHeight()-o.offset().top+o.scrollTop()-o.height()))
},E=function(t,n){t=e(t);
var r=t.data("selectBox-control"),o=r.data("selectBox-options"),u=t.data("selectBox-settings"),a=0,f=0,l=0,c=o.find("LI:not(.selectBox-optgroup, .selectBox-disabled)"),h=o.find("LI"),p=r.data("selectBox-last-selected"),m=o.find(".selectBox-hover:first"),E=!!t.attr("multiple"),S,x,T;
if(r.hasClass("selectBox-disabled")){return
}switch(n.keyCode){case 8:n.preventDefault(),i="";
break;
case 9:case 27:v(),b(t),r.focus();
break;
case 13:r.hasClass("selectBox-menuShowing")?(n.preventDefault(),g(t,m,n),w(t,m),r.hasClass("selectBox-dropdown")&&(v(),r.focus())):d(t);
break;
case 32:r.hasClass("selectBox-menuShowing")&&(n.preventDefault(),g(t,m,n),w(t,m));
break;
case 33:n.preventDefault(),l=p?h.index(p):h.index(o.find(".selectBox-hover")),S=r.hasClass("selectBox-dropdown")?o.height():r.height(),x=parseInt(o.find("A:first").outerHeight()),T=t.attr("size")?parseInt(t.attr("size")):Math.floor(S/x);
var N=Math.max(0,l-T),C=h.eq(N);
a=h.length,f=N;
while(C.length===0||C.hasClass("selectBox-disabled")||C.hasClass("selectBox-optgroup")){C=h.eq(f-1);
if(C.length===0||f<=0){C=c.eq(0)
}if(--f<=0){break
}}y(t,C),g(t,C,n),w(t,C);
break;
case 34:n.preventDefault(),l=p?h.index(p):h.index(o.find(".selectBox-hover")),S=r.hasClass("selectBox-dropdown")?o.height():r.height(),x=parseInt(o.find("A:first").outerHeight()),T=t.attr("size")?parseInt(t.attr("size")):Math.floor(S/x);
var N=Math.min(h.length-1,l+T),k=h.eq(N);
a=h.length,f=N;
while(k.length===0||k.hasClass("selectBox-disabled")||k.hasClass("selectBox-optgroup")){k=h.eq(f+1);
if(k.length===0||f>=a-1){k=c.eq(c.length-1)
}if(++f>=a){break
}}y(t,k),g(t,k,n),w(t,k);
break;
case 35:n.preventDefault(),y(t,c.last()),g(t,c.last(),n),w(t,c.last());
break;
case 36:n.preventDefault(),y(t,c.first()),g(t,c.first(),n),w(t,c.first());
break;
case 38:case 37:n.preventDefault();
if(r.hasClass("selectBox-menuShowing")&&!n.altKey){l=p?c.index(p):c.index(o.find(".selectBox-hover"));
if(l==0&&(!u.loopOptions||t.attr("multiple"))){break
}var C=c.eq(l-1);
a=c.length,f=l-1;
while(C.length===0||C.hasClass("selectBox-disabled")||C.hasClass("selectBox-optgroup")){C=c.eq(f-1);
if(C.length===0){u.loopOptions?C=c.eq(c.length-1):C=c.eq(0);
break
}if(--f<=0){break
}}y(t,C),w(t,C),g(t,C,n)
}else{n.altKey?v():d(t)
}break;
case 40:case 39:n.preventDefault();
if(r.hasClass("selectBox-menuShowing")){l=p?c.index(p):c.index(o.find(".selectBox-hover"));
if(l==c.length-1&&(!u.loopOptions||t.attr("multiple"))){break
}var k=c.eq(l+1);
a=c.length,f=l+1;
while(k.length===0||k.hasClass("selectBox-disabled")||k.hasClass("selectBox-optgroup")){k=c.eq(f+1),k.length===0&&(u.loopOptions?k=c.eq(0):k=c.eq(c.length-1));
if(++f>=a){break
}}y(t,k),w(t,k),g(t,k,n)
}else{d(t)
}break;
case 119:E&&n.shiftKey&&(n.preventDefault(),r.toggleClass("selectBox-multiselect"));
break;
case 65:E&&(s&&n.metaKey||!s&&n.ctrlKey)&&(n.preventDefault(),n.stopPropagation(),c.not(m).each(function(r,i){g(t,e(i),n)
}),y(t,m),g(t,m,n),w(t,m))
}},S=function(t,n){t=e(t);
var s=t.data("selectBox-control"),o=s.data("selectBox-options"),u=0,a=0,f,l,c=!1,h=o.find("LI:not(.selectBox-optgroup, .selectBox-disabled)"),p=o.find(".selectBox-hover"),v=String.fromCharCode(n.charCode||n.keyCode);
if(s.hasClass("selectBox-disabled")){return
}switch(n.keyCode){case 9:case 27:case 13:case 32:case 38:case 37:case 40:case 39:break;
default:s.hasClass("selectBox-menuShowing")||d(t),n.preventDefault(),clearTimeout(r),i+=v!=i?v:"";
for(u=0;
u<h.length;
u++){f=h.eq(u);
if(f.is(p)){a=i.length==1?u+1:u;
break
}}for(u=a;
u<h.length;
u++){f=h.eq(u),l=e.trim(f.text());
if(l.substring(0,i.length).toLowerCase()===i.toLowerCase()){c=!0,y(t,f),w(t,f),g(t,f,n);
break
}}if(!c){for(u=0;
u<a;
u++){f=h.eq(u),l=e.trim(f.text());
if(l.substring(0,i.length).toLowerCase()===i.toLowerCase()){y(t,f),w(t,f),g(t,f,n);
break
}}}r=setTimeout(function(){i=""
},1000)
}},x=function(t){t=e(t),t.attr("disabled",!1);
var n=t.data("selectBox-control");
if(!n){return
}n.removeClass("selectBox-disabled").removeAttr("aria-disabled")
},T=function(t){t=e(t),t.attr("disabled",!0);
var n=t.data("selectBox-control");
if(!n){return
}n.addClass("selectBox-disabled").attr("aria-disabled",!0)
},N=function(t,n){t=e(t),t.val(n),n=t.val(),n===null&&(n=t.children().first().val(),t.val(n));
var r=t.data("selectBox-control");
if(!r){return
}var i=t.data("selectBox-settings"),s=r.data("selectBox-options");
l(t),s.find(".selectBox-selected").removeClass("selectBox-selected").find("A").removeAttr("aria-selected"),s.find("A").each(function(){if(typeof n=="object"){for(var t=0;
t<n.length;
t++){e(this).attr("rel")==n[t]&&e(this).attr("aria-selected",!0).parent().addClass("selectBox-selected")
}}else{e(this).attr("rel")==n&&e(this).attr("aria-selected",!0).parent().addClass("selectBox-selected")
}}),i.change&&i.change.call(t)
},C=function(t,r){t=e(t);
var i=t.data("selectBox-control"),s=t.data("selectBox-settings");
switch(typeof n){case"string":t.html(n);
break;
case"object":t.html("");
for(var o in n){if(n[o]===null){continue
}if(typeof n[o]=="object"){var a=e('<optgroup label="'+o+'" />');
for(var f in n[o]){a.append('<option value="'+f+'">'+n[o][f]+"</option>")
}t.append(a)
}else{var c=e('<option value="'+o+'">'+n[o]+"</option>");
t.append(c)
}}}if(!i){return
}i.data("selectBox-options").remove();
var h=i.hasClass("selectBox-dropdown")?"dropdown":"inline";
r=u(t,h),i.data("selectBox-options",r);
switch(h){case"inline":i.append(r);
break;
case"dropdown":l(t),r.insertAfter(i)
}},k=function(t){e(t).css({MozUserSelect:"none",WebkitUserSelect:"none",MsUserSelect:"none",OUserSelect:"none"}).bind("selectstart",function(e){e.preventDefault()
})
},L=function(t,n){var r=e('<li role="presentation" />'),i=e('<a role="option" />');
return r.addClass(t.attr("class")),r.data(t.data()),i.attr("rel",t.val()).text(t.text()),r.append(i),t.attr("disabled")&&r.addClass("selectBox-disabled").find("A").attr("aria-disabled",!0),t.attr("selected")&&r.addClass("selectBox-selected").find("A").attr("aria-selected",!0),n.append(r),r
};
switch(t){case"control":return e(this).data("selectBox-control");
case"settings":if(!n){return e(this).data("selectBox-settings")
}e(this).each(function(){e(this).data("selectBox-settings",e.extend(!0,e(this).data("selectBox-settings"),n)),c(this)
});
break;
case"options":if(n===undefined){return e(this).data("selectBox-control").data("selectBox-options")
}e(this).each(function(){C(this,n)
});
break;
case"value":if(n===undefined){return e(this).val()
}e(this).each(function(){N(this,n)
});
break;
case"refresh":e(this).each(function(){p(this)
});
break;
case"enable":e(this).each(function(){x(this)
});
break;
case"disable":e(this).each(function(){T(this)
});
break;
case"destroy":e(this).each(function(){h(this)
});
break;
default:e(this).each(function(){o(this,t)
})
}return e(this)
}})
}(jQuery),define("tools/forms/selectbox/jquery.selectBox",function(){}),define("tools/forms/selectbox/SelectBox",["can","./jquery.selectBox"],function(e){return e.Control.extend({defaults:{menuTransition:"slide",menuSpeed:"fast",autoSize:!0}},{init:function(t){this.settings=typeof t!="undefined"?t:{},this.allSettings=e.$.extend(!0,this.options,this.settings)
},selectify:function(e){e.selectBox(),e.selectBox("settings",this.allSettings)
},destroy:function(e){e.selectBox("destroy")
}})
}),define("interactive/js/store/buypod/BuyPod",["can","tools/http/GetScript","tools/forms/selectbox/SelectBox","tools/http/URLParser","tools/http/Cookie"],function(e,t,n,r,i){return e.Control.extend({defaults:{marketSegmentCookie:"x-adobe-cart-marketsegment",countryCode:"US",languageCode:"en",clientId:"adobe_com",selector:".anyware-price-widget",landscape:"pre-stage",tunnelPath:"/etc/clientlibs/beagle/adobe/buypod.html",isLocal:!1,debug:!1,styles:{PRICE_TYPE_LABEL:"buypod-PriceTypeLabel",FORMATTED_PRICE_CONTAINER:"buypod-PriceContainer",SUBSCRIPTION_TERM_LABEL:"buypod-SubTermLabel",TAX_LABEL:"buypod-TaxLabel",ORIGINAL_PRICE:"buypod-OriginalPrice text-strike",CURRENCY_SYMBOL:"buypod-CurrencySymbol",INTEGER_PRICE_VALUE:"buypod-PriceDollars",DECIMAL_PRICE_VALUE:"buypod-PriceCents",INT_DELIMITER:"buypod-PriceDollarDelim",DECIMAL_DELIMITER:"buypod-PriceCentDellim",PRICE_STYLE:"buypod-PriceStyle"}}},{init:function(){this.getScript=new t,this.selectBox=new n,this.urlParser=new r,this.segmentCookie=new i,this.anywareScript=this.element.data("buypod-landscape"),this.buypodLoader=this.element.find(".buypod-loader"),this.buypodData=this.element.find(".buypod-data"),this.eduItems=this.element.find(".buypod-edu"),this.comSiblingItems=this.element.siblings(".buypod-com"),this.eduSiblingItems=this.element.siblings(".buypod-edu"),this.comItems=this.element.find(".buypod-com"),this.buypodSingle=this.element.find(".buypod-single"),this.buypodMultiple=this.element.find(".buypod-multiple"),this.multiMenu=this.buypodMultiple.find("select"),this.buypodForm=this.buypodMultiple.find("form"),this.buypodFormTryLink=this.buypodForm.find(".try-link"),this.widgetData=this.element.find(this.options.selector),this.buypodLang=this.widgetData.data("buypod-lang"),this.buypodCountry=this.widgetData.data("buypod-country"),this.bodyData=e.$("body"),this.dynamicPriceOverride=this.widgetData.data("dynamicprice-override"),this.dynamicPriceTermOverride=this.widgetData.data("dynamicprice-term-override"),this.dynamicPriceCurrencysymbolOverride=this.widgetData.data("dynamicprice-currencysymbol-override"),this.dynamicPriceShowPriceType=this.widgetData.data("show-price-type-label"),this.options.languageCode=typeof this.buypodLang!="undefined"&&this.buypodLang!==""?this.buypodLang:this.options.languageCode,this.options.countryCode=typeof this.buypodCountry!="undefined"&&this.buypodCountry!==""?this.buypodCountry:this.options.countryCode,this.buypodContent=this.buypodSingle.length>0?this.buypodSingle:this.buypodMultiple.length>0?this.buypodMultiple:this.element,this.buypodData.length>0?(this.priceDisplayOptions={},this.getMarketSegment(),this.controlSegmentItems()):(this.setStaticMarketSegment(),this.controlSegmentItems(),this.getProductDisplay())
},workaroundFormLimitation:function(){var t=this;
this.singleBuyPodForm.submit(function(n){n.preventDefault(),e.$(location).attr("href",t.singleBuyPodForm.attr("action"))
}),this.buypodForm.submit(function(n){n.preventDefault(),e.$(location).attr("href",t.buypodForm.attr("action"))
})
},getProductDisplay:function(){this.buypodMultiple.length>0?this.multiProduct():this.singleProduct()
},setStaticMarketSegment:function(){var e=this.element.data("market-segment"),t=this.urlParser.getQueryParam("marketSegment");
if(e){this.marketSegment=e
}else{if(t){this.segmentCookie.setCookie(this.options.marketSegmentCookie,t),this.marketSegment=t
}else{if(!e&&!t){var n=this.segmentCookie.getCookie(this.options.marketSegmentCookie);
typeof n!="undefined"&&(this.marketSegment=n)
}else{this.marketSegment="COM"
}}}},getMarketSegment:function(){var t=this;
e.$(this.buypodData).each(function(){var n=e.$(this).find(t.options.selector).data("market-segment"),r=t.urlParser.getQueryParam("marketSegment"),i=e.$(this).find(t.options.selector);
if(n){t.marketSegment=n
}else{if(r){i.attr("data-market-segment",r),t.segmentCookie.setCookie(t.options.marketSegmentCookie,r),t.marketSegment=r
}else{if(!n&&!r){var s=t.segmentCookie.getCookie(t.options.marketSegmentCookie);
typeof s!="undefined"&&(i.attr("data-market-segment",s),t.marketSegment=s)
}else{t.marketSegment="COM"
}}}i.data("product-key")||(t.marketSegment==="EDU"?i.data("product-key",i.data("product-edu-key")):i.data("product-key",i.data("product-com-key"))),i.data("price-type-key")||(t.marketSegment==="EDU"?i.data("price-type-key",i.data("price-type-edu-key")):i.data("price-type-key",i.data("price-type-com-key"))),i.data("show-strike-thru-price")||i.data("show-strike-thru-price",!1)
})
},controlSegmentItems:function(){function t(t){e.$(t).each(function(){e.$(this).show()
})
}function n(t){e.$(t).each(function(){e.$(this).remove()
})
}this.marketSegment==="EDU"?(t(this.eduSiblingItems),t(this.eduItems),n(this.comSiblingItems),n(this.comItems)):(t(this.comSiblingItems),t(this.comItems),n(this.eduSiblingItems),n(this.eduItems)),this.singleBuyPodForm=this.buypodSingle.find("form"),this.workaroundFormLimitation(),this.setLandscape(),this.setLookups(),this.priceDisplay()
},setLandscape:function(){return this.anywareScript!==""&&typeof this.anywareScript!="undefined"?this.anywareScript.indexOf("qa")!==-1?this.options.landscape="pre-stage":this.anywareScript.indexOf("dev")!==-1?this.options.landscape="dev":this.anywareScript.indexOf("stage")!==-1?this.options.landscape="stage":this.options.landscape="prod":this.options.landscape="pre-stage",this.options.landscape
},setLookups:function(){var t=this;
e.$(document).on("anywareReady",function(){t.anywarePriceDisplay()
}),e.$(document).on("priceLabelsReady",function(){t.getProductDisplay()
})
},priceDisplay:function(){this.priceDisplayOptions={countryCode:this.options.countryCode,languageCode:this.options.languageCode,clientId:this.options.clientId,selector:this.options.selector,landscape:this.options.landscape,tunnelPath:this.options.tunnelPath,isLocal:this.options.isLocal,debug:this.options.debug,styles:this.options.styles},this.checkScriptLoaded()
},checkScriptLoaded:function(){this.bodyData.data("anywareScript")||this.loadAnyware()
},loadAnyware:function(){this.bodyData.data("anywareScript",!0),this.getScriptOptions=this.getScriptOptions||{},this.getScript.get(this.anywareScript,this.getScriptOptions).done(function(){})
},anywarePriceDisplay:function(){e.$(this.options.selector).anyware_price_display(this.priceDisplayOptions)
},multiProduct:function(){if(this.buypodData.length>0){var t=this,n=!1,r=this.buypodContent.find(".buypod-tax"),i=e.$(this.buypodData).length;
e.$(t.buypodData).each(function(s){var o=t.parsePriceItems(e.$(this)),u=e.$(this).find(t.options.selector).data("product-key"),a=t.buypodMultiple.find("option[data-product-key='"+u+"']"),f=o.TaxLabel.text(),l=" "+o.CurrencySymbol.text()+o.PriceDollars.text()+o.PriceCents.text()+" "+o.SubTermLabel.text();
!n&&f!==""&&(r.append(f),n=!0),a.append(l),s==i-1&&(t.buypodLoader.hide(),t.selectBox.selectify(t.multiMenu),t.buttonTarget(),t.buypodContent.show())
})
}},singleProduct:function(){if(this.buypodData.length>0){var e=this.parsePriceItems(this.buypodData),t=this.buypodContent.find(".text-price"),n=this.buypodContent.find(".buypod-tax"),r,i,s;
n.append(e.TaxLabel.html()),t.append(e.BuypodContainer.children()),r=this.buypodContent.find(".buypod-CurrencySymbol"),i=this.buypodContent.find(".buypod-SubTermLabel"),s=this.buypodContent.find(".buypod-PriceTypeLabel"),this.dynamicPriceOverride===!0&&(this.dynamicPriceCurrencysymbolOverride&&r.html(this.dynamicPriceCurrencysymbolOverride),this.dynamicPriceTermOverride&&i.html(this.dynamicPriceTermOverride),this.dynamicPriceShowPriceType===!1&&s.css("display","none"))
}this.buypodLoader.hide(),this.buypodContent.show()
},buttonTarget:function(){function t(){e.buypodForm.attr("action",e.multiMenu.find("option:selected").attr("value"));
var t=e.multiMenu.find("option:selected").data("try-link");
t?(e.buypodFormTryLink.show(),e.buypodFormTryLink.attr("href",t)):e.buypodFormTryLink.hide()
}var e=this;
t(),this.multiMenu.change(function(){t()
})
},parsePriceItems:function(e){return{BuypodContainer:e.find(this.options.selector),PriceTypeLabel:e.find("."+this.options.styles.PRICE_TYPE_LABEL),PriceContainer:e.find("."+this.options.styles.FORMATTED_PRICE_CONTAINER),SubTermLabel:e.find("."+this.options.styles.SUBSCRIPTION_TERM_LABEL),TaxLabel:e.find("."+this.options.styles.TAX_LABEL),OriginalPrice:e.find("."+this.options.styles.INTEGER_PRICE_VALUE),CurrencySymbol:e.find("."+this.options.styles.CURRENCY_SYMBOL),PriceDollars:e.find("."+this.options.styles.INTEGER_PRICE_VALUE),PriceCents:e.find("."+this.options.styles.DECIMAL_PRICE_VALUE),PriceDollarDelim:e.find("."+this.options.styles.INT_DELIMITER),PriceCentDellim:e.find("."+this.options.styles.DECIMAL_DELIMITER),PriceStyle:e.find("."+this.options.styles.PRICE_STYLE)}
}})
}),define("interactive/js/store/buypod/SeedBuyPod",["linseed!./BuyPod"],function(e){return e("seed-buypod").seedEach()
}),define("interactive/js/store/marketsegment/MarketSegment",["can","tools/http/Cookie"],function(e,t){return e.Control.extend({defaults:{marketSegmentCookie:"x-adobe-cart-marketsegment"}},{init:function(){this.segmentCookie=new t,this.newSegment=this.element.data("buypod-segment")
},click:function(){this.segmentCookie.setCookie(this.options.marketSegmentCookie,this.newSegment),location.reload()
}})
}),define("interactive/js/store/marketsegment/SeedMarketSegment",["linseed!./MarketSegment"],function(e){return e("seed-segment").seedEach()
}),define("interactive/js/store",["module","./store/buypod/SeedBuyPod","./store/marketsegment/SeedMarketSegment"],function(e){return{name:e.id}
}),define("can/map/attributes",["can/util/library","can/map","can/list"],function(e,t){e.each([e.Map,e.Model],function(t){if(t===undefined){return
}var n=function(e){return typeof e=="object"&&e!==null&&e
};
e.extend(t,{attributes:{},convert:{date:function(e){var t=typeof e;
return t==="string"?(e=Date.parse(e),isNaN(e)?null:new Date(e)):t==="number"?new Date(e):e
},number:function(e){return parseFloat(e)
},"boolean":function(e){return e==="false"||e==="0"||!e?!1:!0
},"default":function(t,n,r,i){if(e.Map.prototype.isPrototypeOf(i.prototype)&&typeof i.model=="function"&&typeof i.models=="function"){return i[e.isArray(t)?"models":"model"](t)
}if(e.Map.prototype.isPrototypeOf(i.prototype)){return e.isArray(t)&&typeof i.List=="function"?new i.List(t):new i(t)
}if(typeof i=="function"){return i(t,n)
}var s=e.getObject(i),o=window,u;
return i.indexOf(".")>=0&&(u=i.substring(0,i.lastIndexOf(".")),o=e.getObject(u)),typeof s=="function"?s.call(o,t,n):t
}},serialize:{"default":function(e,t){return n(e)&&e.serialize?e.serialize():e
},date:function(e){return e&&e.getTime()
}}});
var r=t.setup;
t.setup=function(t,n,i){var s=this;
r.call(s,t,n,i),e.each(["attributes"],function(e){if(!s[e]||t[e]===s[e]){s[e]={}
}}),e.each(["convert","serialize"],function(n){t[n]!==s[n]&&(s[n]=e.extend({},t[n],s[n]))
})
}
}),e.Map.prototype.__convert=function(e,t){var n=this.constructor,r=this.__get(e),i,s;
return n.attributes&&(i=n.attributes[e],s=n.convert[i]||n.convert["default"]),t===null||!i?t:s.call(n,t,r,function(){},i)
};
var n=e.Map.helpers._serialize;
e.Map.helpers._serialize=function(e,t,r){var i=e.constructor,s=i.attributes?i.attributes[t]:0,o=i.serialize?i.serialize[s]:0;
return r&&typeof r.serialize=="function"?n.apply(this,arguments):o?o(r,s):n.apply(this,arguments)
};
var r=e.Map.prototype.serialize;
return e.Map.prototype.serialize=function(e){var t=r.apply(this,arguments);
return e?t[e]:t
},e.Map
}),define("interactive/js/ui/anchornav/AnchorNavState",["can/map","can/map/attributes"],function(e){return e.extend({attributes:{fixed:"boolean",offset:"nounit",calculatedPosition:"number",orientation:"orientation"},convert:{nounit:function(e){return parseInt(e,10)||0
},orientation:function(e){var t=String(e).charAt(0);
switch(t){case"x":break;
case"y":break;
default:throw new TypeError('argument must be "x" or "y"')
}return t
}}},{getPosition:function(){var e=this.attr("orientation");
return e&&e.charAt(0)==="x"?this.attr("position.left"):this.attr("position.top")
},setOffset:function(e){this.attr("offset",e),this.attr("calculatedPosition",this.getPosition()-this.attr("offset"))
},sendScroll:function(e){this.attr("fixed",this.attr("calculatedPosition")<e)
},getState:function(e){this.attr(e)
},setState:function(e,t){this.attr(e,t)
}})
}),define("interactive/js/ui/anchornav/AnchorNavControl",["can","./AnchorNavState"],function(e,t){return e.Control.extend({init:function(){this.options.state=new t,this.on(),this.options.state.attr("position",this.element.offset()),this.options.state.setOffset(this.element.css("top"))
},"{state} fixed":function(e,t,n){n?this.element.addClass("anchornav-fixed"):this.element.removeClass("anchornav-fixed")
},"{window} scroll":function(t){this.options.state.sendScroll(e.$(t).scrollTop())
},"{window} load":function(t){this.options.state.sendScroll(e.$(t).scrollTop())
}})
}),define("interactive/js/ui/anchornav/SeedAnchorNav",["linseed!./AnchorNavControl"],function(e){return e("seed-anchornav").seed()
}),define("interactive/js/ui/segmentnav/SegmentNavState",["can","can/map/attributes"],function(e){return e.Observe.extend({attributes:{activated:"boolean",within:"boolean",minimized:"boolean"}},{setMinimized:function(e){this.attr("minimized",e),this.attr("activated",!e)
},setActivated:function(e){this.attr("minimized")&&(e=!1),this.attr("activated",e)
},setCheckedElement:function(e){return e.prop("checked")?(this.setActivated(!0),this.attr("checkedElement",e)):(this.attr("activated",!1),this.removeAttr("checkedElement"))
},sendBlur:function(){this.attr("within")||this.setCheckedElement(e.$([]))
}})
}),define("interactive/js/ui/segmentnav/SegmentNavRadioControl",["can"],function(e){return e.Control.extend({defaults:{inputs:"label",forId:"for"}},{"{inputs} mouseenter":function(t){var n=e.$(document.getElementById(t.attr(this.options.forId)));
n.prop("checked")||n.prop("checked",!0).trigger("change")
}})
}),define("interactive/js/ui/segmentnav/SegmentNavBlurControl",["can"],function(e){return e.Control.extend({defaults:{state:null}},{"{window} click":function(){this.options.state&&this.options.state.sendBlur()
}})
}),define("interactive/js/ui/segmentnav/SegmentNavControl",["can","./SegmentNavState","./SegmentNavRadioControl","./SegmentNavBlurControl"],function(e,t,n,r){return e.Control.extend({defaults:{input:"[name=segmentnav-input]",min:"[name=segmentnav-min-input]",radio:"ul label"}},{init:function(){this.options.state=new t,this.radio=null,this.on()
},"{state} activated":function(e,t,i){i?(this.radio=new n(this.element,{inputs:this.options.radio}),this.blurer=new r(this.element,{state:this.options.state})):(this.radio&&this.radio.destroy(),this.blurer&&this.blurer.destroy())
},"{state} checkedElement":function(e,t,n,r){r&&r.prop("checked",!1)
},"{input} change":function(e){this.options.state.setCheckedElement(e)
},"{min} change":function(t){var n=t.prop("checked");
this.options.state.attr("minimized",n),n||this.options.state.setCheckedElement(e.$([]))
},"{input} blur":function(){this.options.state.sendBlur()
},"{input} focus":function(){this.options.state.attr("within",!0)
},mouseenter:function(){this.options.state.attr("within",!0)
},mouseleave:function(){this.options.state.attr("within",!1)
},"{window} beforeunload":function(){var e=this.options.state.attr("checkedElement");
e&&e.prop("checked",!1)
}})
}),define("interactive/js/ui/segmentnav/SeedSegmentNav",["linseed!./SegmentNavControl"],function(e){return e("seed-segmentnav").seedEach()
}),define("interactive/js/ui/carousel/CarouselControl",["can"],function(e){return e.Control({defaults:{wrapper:".sliderwr",slides:".slide",paddleLt:".fa-chevron-left",paddleRt:".fa-chevron-right",dotWr:".dotNav",dotIcon:".fa-circle",dotActive:".fa-circle.active",dotIndex:0,preventDefault:0,defaultSlideSpeed:300,continuousAnimation:!1,continuousAnimationAttr:"data-slider-rotate",continuousAnimationSpeed:""},"static":{}},{init:function(){var e=this.element,t=e.find(this.options.wrapper),n=t.find(this.options.slides);
this.controls={lt:e.find(this.options.paddleLt),rt:e.find(this.options.paddleRt),dotNav:e.find(this.options.dotWr),dotIcon:e.find(this.options.dotIcon)},this.setOptions(),this.setDims(t,n),this.controls.dotIcon.length<1&&this.setNav(this.controls.dotNav,n.length),this.options.continuousAnimation?this.autoAnimate():""
},setDims:function(e,t){var n=100/t.length;
for(var r=0;
r<t.length;
r++){t[r].style.width=n+"%"
}e.css("width",100*t.length+"%"),this.options.slideDistance=100
},setNav:function(e,t){var n=[],r='<i class="'+this.options.dotIcon.replace(/\./g,"")+'"></i>',i='<i class="'+this.options.dotActive.replace(/\./g," ").trim()+'"></i>';
for(var s=0;
s<t;
s++){s===this.options.dotIndex?n.push(i):n.push(r)
}e.append(n.join(""))
},setIndex:function(e,t,n){switch(e){case this.options.paddleRt.replace(/\./g,""):t+=1;
break;
case this.options.paddleLt.replace(/\./g,""):t-=1;
break;
case"auto":t=this.options.dotIndex+1;
break;
default:t=n
}return t
},setOptions:function(){var e=this.element.data(),t=this.element.attr(this.options.continuousAnimationAttr);
typeof t!="undefined"?this.setRotate(t):""
},setRotate:function(e){this.options.continuousAnimation="true";
switch(e){case"fast":this.options.continuousAnimationSpeed=this.options.defaultSlideSpeed*3;
break;
case"slow":this.options.continuousAnimationSpeed=this.options.defaultSlideSpeed*9;
break;
default:this.options.continuousAnimationSpeed=this.options.defaultSlideSpeed*6
}},slide:function(t){function m(){e.$(n).animate({marginLeft:d},h,function(){p.options.preventDefault=0,p.options.dotIndex=c
})
}function g(){p.options.preventDefault=0
}var n=this.element.find(this.options.wrapper),r=t!="auto"?t.attr("class").trim():t,i=n.find(this.options.slides).length,s=this.options.dotIndex,o=this.options.dotIcon.replace(/\./g,"").trim(),u=this.options.dotActive.replace(/\./g," ").trim(),a=this.element.find(this.options.dotIcon),f=this.element.find(this.options.dotActive),l=r===o?e.$(t).index():s,c=this.setIndex(r,s,l),h=this.options.defaultSlideSpeed,p=this,d="",v="";
p.options.preventDefault=1,c!==-1||r!==this.options.paddleLt.replace(/\./g,"")&&r!=="auto"?c!==i||r!==this.options.paddleRt.replace(/\./g,"")&&r!=="auto"?(d=-(p.options.slideDistance*c)+"%",v=a[c]):(d=0,v=a[0],c=0):(d=-(p.options.slideDistance*(i-1))+"%",v=a[i-1],c=i-1),f?f.removeClass("active"):"",e.$(v).addClass("active"),r!==u?m():g()
},autoAnimate:function(){var e=this;
setInterval(function(){e.slide("auto")
},this.options.continuousAnimationSpeed)
},"{paddleLt},{paddleRt},{dotIcon} click":function(e,t){this.options.preventDefault===0&&this.slide(e)
}})
}),define("interactive/js/ui/carousel/SeedCarousel",["linseed!./CarouselControl"],function(e){return e("seed-carousel").seedEach()
}),define("interactive/js/ui/footer/Footer",["can"],function(e){return e.Control.extend({init:function(){this.body=e.$("body"),this.footer=e.$("footer"),this.footerPos=this.footer.css("position"),this.footerHeight=this.footer.outerHeight(!0),this.checkPos()
},checkPos:function(){this.footerPos=="absolute"&&this.body.css("paddingBottom",this.footerHeight)
}})
}),define("interactive/js/ui/footer/SeedFooter",["linseed!./Footer"],function(e){return e("seed-footer").seedEach()
}),define("interactive/js/ui/hover/Hover",["can"],function(e){return e.Control.extend({defaults:{FadeIn:500,FadeOut:300,Delay:500}},{init:function(t,n,r){this.FadeIn=typeof n!="undefined"?n:this.options.FadeIn,this.FadeOut=typeof r!="undefined"?r:this.options.FadeOut,this.isHovered=!1,t=t!==null&&typeof t!="undefined"?e.$(t):this,this.act(t)
},act:function(t){t=this.element.attr("data-ui-hover"),t=e.$(t);
var n=this;
t.length>0&&this.element.hover(function(){n.isHovered=!0,t.off("hover"),t.fadeIn(this.FadeIn),t.hover(function(){n.isHovered=!0
},function(){n.isHovered=!1,n.hoverCheck(t)
})
},function(){n.isHovered=!1,n.hoverCheck(t)
})
},fadeAway:function(t){this.isHovered===!1&&e.$(t).length>0&&e.$(t).fadeOut(this.FadeOut)
},hoverCheck:function(e){var t=this;
setTimeout(function(){t.fadeAway(e)
},this.options.Delay)
}})
}),define("interactive/js/ui/hover/SeedHover",["linseed!./Hover"],function(e){return e("seed-hover").seedEach()
}),define("interactive/js/ui/marquee/Marquee",["can"],function(e){return e.Control.extend({defaults:{figPadding:185,marqueeOffset:30,marqueeTextOffset:20}},{init:function(){this.marquee=this.element,this.figcaption=this.marquee.parents("figure"),this.tabsCollapsed=this.marquee.parents(".tabs-collapsed"),this.textWrap=this.element.find(".marquee-textbox"),this.textMaxHeight=this.marquee.height()-this.options.marqueeOffset,this.origTextWidth=this.sizeInPercent(this.textWrap),this.textObj=this.textWrap.find(".marquee-content"),this.centeredTextCheck=this.textWrap.attr("class").indexOf("pos-center")!==-1,this.siblingAside=this.figcaption.find(".product-background"),this.isDropped=!1
},setFigure:function(){if(this.figcaption.length>0&&this.tabsCollapsed==0){var e=this.figcaption.height();
this.marquee.css("height",e-this.options.figPadding)
}},sizeInPercent:function(e){return Math.round(100*parseFloat(e.css("width"))/parseFloat(e.parent().css("width")))
},checkTextBox:function(){this.centeredText(),this.textTooTall()||this.textTooWide()?this.resizeText():this.siblingAside.length>0&&this.siblingAside.css("height","auto")
},centeredText:function(){if(this.centeredTextCheck){var e=this.textObj.innerHeight();
this.textWrap.css("height",e)
}},textTooTall:function(){return this.textMaxHeight=this.marquee.innerHeight()-this.options.marqueeOffset,this.textMaxHeight<=this.textObj.innerHeight()
},textTooWide:function(){var t=this,n=!1,r=parseFloat(e.$(t.textObj).css("paddingLeft"))+parseFloat(e.$(t.textObj).css("paddingRight"));
return e.$(this.textObj).children().each(function(){parseFloat(e.$(this).innerWidth())+r>parseFloat(t.textWrap.width())&&(n=!0)
}),n
},resizeText:function(){var e=this.sizeInPercent(this.textWrap)+this.options.marqueeTextOffset;
e<100?(this.isDropped&&this.restoreTheBox(),this.textWrap.css("width",e+"%"),this.checkTextBox()):this.dropTheBox()
},saveParams:function(){this.previousHeight=this.element.css("height"),this.previousTextLeftPadding=this.textObj.css("paddingLeft"),this.previousTextRightPadding=this.textObj.css("paddingRight"),this.previousTextBg=this.textWrap.css("background"),this.previousTextWidth=this.textWrap.css("width")
},dropTheBox:function(){if(this.siblingAside.length>0){var e=new Image;
e.src=this.siblingAside.data("background");
var t=e.width,n=e.height,r=t/n,i=this.siblingAside.parent().innerWidth(),s=Math.round(i/r);
this.siblingAside.css("height",s),this.isDropped=!0
}},restoreTheBox:function(){this.element.css("height",this.previousHeight),this.element.hasClass("hero")||this.textObj.css({paddingLeft:this.previousTextLeftPadding,paddingRight:this.previousTextRightPadding}),this.textWrap.css({position:"inherit",width:this.previousTextWidth,background:this.previousTextBg,marginLeft:"inherit",display:"inherit"}).find(".marquee-content-row").css("display","table-row").find(".marquee-content-cell").css("display","table-cell").find("a").css("maxWidth","none").find("img").css("maxWidth","none"),this.marquee.css({position:"absolute",overflow:"inherit"}),this.isDropped=!1
},fixThumbnail:function(){var t=this.textObj.find("img");
t.length>0&&e.$(t).each(function(){var t=e.$(this).width(),n=e.$(this).height();
e.$(this).parent("a").length>0&&e.$(this).parent("a").css({width:t,height:n})
})
},resetText:function(){this.textWrap.css("width",this.origTextWidth+"%")
},"{document} ready":function(){this.setFigure(),this.fixThumbnail(),this.checkTextBox()
},"{window} resize":function(){this.setFigure(),this.checkTextBox()
}})
}),define("interactive/js/ui/marquee/SeedMarquee",["linseed!./Marquee"],function(e){return e("seed-marquee").seedEach()
}),define("interactive/js/ui/modal/ModalState",["can/map","can/map/attributes"],function(e){return e.extend({attributes:{src:"location",dom:"String",wrapId:"String",wrapClass:"String"},convert:{location:function(e){return String(e)
}}},{setSrc:function(e){e&&e.length&&!/^javascript:/.test(e)?this.attr("src",e):(this.removeAttr("src"),this.removeAttr("dom"),this.removeAttr("marker"),this.removeAttr("wrapId"),this.removeAttr("wrapClass"))
},setMarker:function(e){e?(this.attr("marker",e.attr("id")),this.setSrc(e.attr("href")),this.setSize(e.data("modal-size")),this.setWrapper(e.data("modal-wrapper"))):(this.removeAttr("marker"),this.setSrc(),this.setSize(),this.setWrapper())
},setSize:function(e){var t;
e&&(t=this.attr("sizes.".concat(e))),t?this.attr("size",t):this.removeAttr("size")
},setWrapper:function(e){if(e&&e.length){var t="",n="";
switch(e.charAt(0)){case"#":t='id="'+e.replace("#","")+'"';
break;
case".":n=e.replace(".","")
}this.attr("wrapId",t),this.attr("wrapClass",n)
}else{this.removeAttr("wrapId"),this.removeAttr("wrapClass")
}}})
}),define("text!interactive/js/ui/modal/ModalView.mustache",[],function(){return'{{#if src}}\n<div class="modal{{#if size}} {{/if}}{{size}}{{#if dom}} modal-dom{{/if}}">\n    <input id="modal-toggle" type="checkbox" name="modal-toggle" checked/>\n    <div class="modal-canvas">\n        <div class="modal-frame {{wrapClass}}" {{wrapId}}>\n            <label for="modal-toggle"><i tabindex="0" class="modal-toggle-visible"></i></label>\n			{{#if dom}}\n				<div class="modal-content">\n					{{&dom}}\n				</div>\n			{{else}}\n				<iframe name="modal-frame" src="{{src}}" seamless allowfullscreen></iframe>\n			{{/if}}\n        </div>\n    </div>\n</div>\n{{/if}}\n'
}),define("interactive/js/ui/modal/ModalView",["module","can/view/mustache","text!./ModalView.mustache"],function(e,t,n){return t.view.mustache(n)
}),define("interactive/js/ui/modal/ModalEscapeControl",["can/control"],function(e){return e.extend({defaults:{state:null}},{keyup:function(e,t){t.which===27&&this.options.state&&this.options.state.setSrc()
}})
}),define("interactive/js/ui/modal/ModalControl",["can","./ModalState","./ModalView","./ModalEscapeControl"],function(e,t,n,r){return e.Control.extend({sizes:{"1920x1080":"modal-size-1920x1080","1280x720":"modal-size-1280x720","935x580":"modal-size-935x580","854x480":"modal-size-854x480","640x360":"modal-size-640x360","426x240":"modal-size-426x240"},defaults:{minsize:"700"}},{init:function(){this.options.sizes=e.extend({},this.constructor.sizes,this.options.sizes),this.options.state=new t({sizes:this.options.sizes}),this.element.append(n(this.options.state)),this.on()
},_handleCanvasTouch:function(e,t){var n=e[0]===t.target;
n&&this.options.state.setSrc()
},".modal-canvas click":function(e,t){this._handleCanvasTouch(e,t)
},".modal-canvas keypress":function(e,t){this._handleCanvasTouch(e,t)
},".modal-toggle-visible click":function(e,t){this._handleCanvasTouch(e,t)
},".default-lang  click":function(e,t){this._handleCanvasTouch(e,t)
},".modal-toggle-visible keypress":function(e,t){this._handleCanvasTouch(e,t)
},'a[target="modal-frame"] click':function(t,n){if(e.$("body").width()>=this.options.minsize){n.preventDefault();
var r=e.$(t.data("modal-target"));
if(r!=null&&r.length>0){var i=r.children().html();
this.options.state.attr("dom",i)
}this.options.state.setMarker(t),e.$(document).trigger("modalReady")
}},'a[target="modal-frame"] keypress':function(t,n){n.which===13&&e.$("body").width()>=this.options.minsize&&(n.preventDefault(),this.options.state.setMarker(t))
},"{state} src":function(t,n,i){var s=Boolean(i),o=this.element.find("[name=modal]");
o.prop("checked",s),s?this.escaper=new r(e.$(this.element.prop("ownerDocument")),{state:this.options.state}):(this.options.state.setSrc(),e.$(document).unbind("modalReady"),this.escaper&&this.escaper.destroy())
},"[name=modal] change":function(e){e.prop("checked")||this.options.state.setSrc()
},"{state} marker":function(t,n,r,i){!r&&i&&e.route.current({type:"modal",id:i})&&e.route.attr({type:"",id:""})
},":type/:id route":function(t){t.type==="modal"?this.options.state.setMarker(e.$(document.getElementById(t.id))):this.options.state.setMarker()
}})
}),define("interactive/js/ui/modal/SeedModal",["linseed!./ModalControl"],function(e){return e("seed-modal").seed()
}),define("interactive/js/ui/promo/Promo",["can"],function(e){return e.Control.extend({init:function(){var e=this.element.get(0).style.backgroundColor,t=this.element.get(0).style.color;
this.element.find(".promo-cta").on("mouseover",function(){this.style.background=t,this.style.color=e
}).on("mouseout",function(){this.style.background="inherit",this.style.color="inherit"
})
}})
}),define("interactive/js/ui/promo/SeedPromo",["linseed!./Promo"],function(e){return e("seed-promo").seedEach()
}),define("interactive/js/ui/responsive-nav/RespNavControl",["can"],function(e){return e.Control({defaults:{respNavWrStr:".resp-nav-",respElement:"nav.resp-control",ctrLbl:".resp-control label",footerLbl:'label[for="nav-ctl-region"]',rspcleara:"nav > a:first-child",ctrFldStr:"input#nav-ctl-",ctlCheckBox:'input[type="checkbox"]',drawerDefaultWidth:260}},{init:function(){this.respElement=e.$(this.options.respElement),this.body=e.$("body")
},clearCkd:function(e){e.prop("checked",!1)
},meat:function(t){var n=t.attr("for").split("-")[2],r=this.options.ctrFldStr+n,i=e.$(this.options.respNavWrStr+n),s=e.$("input:checked").not(e.$(r)),o=parseInt(this.body.css("marginLeft"));
e.$(r).is(":checked")?this.transFormBody(0,"auto"):(s.length?this.clearCkd(s):"",this.transFormBody(this.options.drawerDefaultWidth,o))
},transFormBody:function(t,n){var r=t==0||t=="auto"?"":-t,i=n=="auto"?"":-(t-n);
this.body.css({left:r}),this.body.hasClass("fixed")?e.$(this.element).css({left:i}):""
},"{ctrLbl} click":function(e,t){this.meat(e)
},"{footerLbl} click":function(e,t){this.meat(e)
},"{window} beforeunload":function(t,n){this.clearCkd(e.$(this.options.ctlCheckBox))
},"{rspcleara} click":function(t,n){var r=e.$(t).parent().parent(),i=r.attr("class").split("-")[2],s=e.$(this.options.ctrFldStr+i);
n.preventDefault(),this.clearCkd(s),this.transFormBody(0,"auto")
}})
}),define("interactive/js/ui/responsive-nav/SeedRespNav",["linseed!./RespNavControl"],function(e){return e("seed-respnav").seedEach()
}),define("interactive/js/ui/ruler/RulerState",["can","can/map/attributes"],function(e){return e.Observe.extend({attributes:{orientation:"orientation",length:"number"},convert:{orientation:function(e){var t=String(e).charAt(0);
switch(t){case"x":break;
case"y":break;
default:throw new TypeError('argument must be "x" or "y"')
}return t
}}},{getDimensions:function(){var e=this.attr("orientation"),t=["0","0"];
switch(e){case"x":t[0]="100%";
break;
case"y":t[1]="100%"
}return t
}})
}),define("interactive/js/ui/ruler/RulerControl",["can","./RulerState"],function(e,t){return e.Control({defaults:{orient:"x"}},{init:function(){this.options.rulerState=new t({orientation:this.options.orient,length:this.length()});
var n=this.options.rulerState.getDimensions();
this.options.ruler=e.$("".concat('<iframe src="javascript:false;" width="',n[0],'" seamless height="',n[1],'" sandbox="allow-same-origin allow-scripts">')).appendTo(this.element).prop("contentWindow"),this.on()
},length:function(){var t=0;
switch(this.options.orient){case"x":t=e.$(this.element).width();
break;
case"y":t=e.$(this.element).height()
}return t
},"{ruler} resize":function(){this.options.rulerState.attr("length",this.length())
},"{rulerState} length":function(){this.element.trigger("ruler:change")
}})
}),define("interactive/js/ui/ruler/SeedRuler",["linseed!./RulerControl"],function(e){return e("seed-ruler").seedEach()
}),define("interactive/js/ui/search/SearchModel",["can","can/model"],function(e){return e.Model.extend({findOne:"GET /cfusion/search/buddy/searchbuddy.cfm"},{})
}),define("interactive/js/ui/search/SearchState",["can","can/map/attributes"],function(e){return e.Observe({attributes:{term:"term",input:"string"},convert:{term:function(e){return(String(e).match(/[\w\s\d+-]+/g)||[]).join(" ").trim()
},string:function(e){return String(e)
}}},{})
}),define("text!interactive/js/ui/search/SearchView.hbs",[],function(){return'<div id="searchsug">\n    {{#if datack}}\n        {{#if data.HUBLETS}}\n            {{#each data.HUBLETS}}\n                <div class="hublet">\n                    <a href="{{URL}}"><img src="http://www.adobe.com{{ICONURL}}" alt="{{TITLE}}"/></a>\n                    <div class="desc">\n                        <h6><a href="{{HOMEPAGEURL}}" tabindex="0">{{TITLE}}</a></h6>\n                        {{#each LINKS}}\n                            <a href="{{URL}}">{{TITLE}}</a><br/>\n                        {{/each}}\n                    </div>\n                </div>\n            {{/each}}\n        {{/if}}\n        {{#if data.SUGGESTIONS}}\n            {{#each data.SUGGESTIONS}}\n                <div class="suggestion">\n                    <a href="{{DESTINATIONURL}}" class="text-bold">{{TITLE}}</a><br/>\n                    <span>{{BLURB}}</span>\n                </div>\n            {{/each}}\n        {{/if}}\n        <div class="seeall push">\n            <a href="#">See all search results ›</a>\n        </div>\n    {{/if}}\n</div>'
}),define("interactive/js/ui/search/SearchView",["module","can/view/mustache","text!./SearchView.hbs"],function(e,t,n){return t.view.mustache(n)
}),define("can/construct/proxy",["can/util/library","can/construct"],function(e,t){var n=e.isFunction,r=e.isArray,i=e.makeArray,s=function(e){var t=i(arguments),n;
return e=t.shift(),r(e)||(e=[e]),n=this,function(){var o=t.concat(i(arguments)),u,a=e.length,f=0,l;
for(;
f<a;
f++){l=e[f];
if(!l){continue
}u=typeof l=="string",o=(u?n[l]:l).apply(n,o||[]),f<a-1&&(o=!r(o)||o._use_call?[o]:o)
}return o
}
};
e.Construct.proxy=e.Construct.prototype.proxy=s;
var o=[e.Map,e.Control,e.Model],u=0;
for(;
u<o.length;
u++){o[u]&&(o[u].proxy=s)
}return e
}),define("interactive/js/ui/search/SearchControl",["can","./SearchModel","./SearchState","./SearchView","tools/http/Cookie","can/construct/proxy"],function(e,t,n,r,i){return e.Control({defaults:{mappedItems:["HUBLETS","SUGGESTIONS"],resultsIdName:"searchsug",resultsEl:"#searchsug",parentform:".resp-navwr-search form",locField:"#search-loc",refField:"#search-ref",defaultLoc:"en_us",seeallEl:".seeall > a"}},{init:function(){var s=new i,o=window.location.pathname.replace(/(\b\/)/g,":").replace(/(.html)|(^\/)/g,"");
this.element.attr("autocomplete","off"),this.options.sugMap=new e.Map,this.options.suggestModel=t,this.options.state=new n({input:"",term:""}),this.options.loc=s.getCookie("international")!=="undefined"?this.options.defaultLoc:s.getCookie("international"),this.options.referrer=o.length>=2?o:"home",e.$(this.options.parentform).append(r(this.options.sugMap)),e.$(this.options.locField).val(this.options.loc),e.$(this.options.refField).val(this.options.referrer),this.on()
},processInput:function(){this.options.state.attr({input:this.element.val(),term:this.element.val()})
},updateMap:function(t){if(t.attr().HUBLETS.length>=1||t.attr().SUGGESTIONS.length>=1){var n=this;
this.options.sugMap.attr({data:t.attr(),datack:"true"},!0),e.$(this.options.resultsEl).show(),e.$(window).bind("click",function(t){var r=t.target.id===n.options.resultsIdName,i=e.$(t.target).parents(n.options.resultsEl),s=e.$(n.options.seeallEl),o=e.$(n.options.resultsEl);
t.target!==n.element[0]&&t.target!==s&&r===!1&&i.length===0?n.clear(o,t):""
}),e.$(this.options.seeallEl).bind("click",function(t){t.preventDefault(),e.$(n.options.parentform).submit()
})
}else{this.options.sugMap.attr({data:"",datack:"false"},!0)
}},clear:function(t,n){t.hide(),this.options.sugMap.attr(""),e.$(window).unbind(n)
},searchError:function(e){console.log(e)
},"{state} input":function(t,n,r){r?this.options.suggestModel.findOne({pre:this.options.state.term,s:this.options.referrer,loc:this.options.loc}).then(this.proxy("updateMap"),this.proxy("searchError")):this.clear(e.$(this.options.resultsEl),"click")
},keyup:function(){this.processInput()
}," search":function(){this.clear(e.$(this.options.resultsEl),"click")
},"{window} onbeforeunload":function(){this.clear(e.$(this.options.resultsEl),"click")
}})
}),define("interactive/js/ui/search/SeedSearch",["can","linseed!./SearchControl"],function(e,t){var n=t("seed-suggest");
return e.$(function(){n.seed()
}),n
}),define("interactive/js/ui/socialshare/SocialShare",["can"],function(e){return e.Control.extend({defaults:{Toolbar:0,Status:0,Width:626,Height:436,WindowTitle:"sharer"}},{init:function(){this.Url=location.href,this.Title=document.title,this.Network=this.element.data("ui-socialshare"),this.stringBuilder(this)
},stringBuilder:function(e){var t=this.getNetwork(e.Network);
this.netString=t.urlPrefix+encodeURIComponent(e.Url)+t.shareTitle+encodeURIComponent(e.Title)
},getNetwork:function(e){var t={};
switch(e){case"Facebook":t={urlPrefix:"http://www.facebook.com/sharer.php?u=",shareTitle:"&t="};
break;
case"Twitter":this.options.Height=300,t={urlPrefix:"http://twitter.com/share?url=",shareTitle:"&text="};
break;
case"LinkedIn":this.options.Height=500,t={urlPrefix:"http://www.linkedin.com/shareArticle?mini=true&url=",shareTitle:"&title="};
break;
case"Pinterest":t={urlPrefix:"//www.pinterest.com/pin/create/button/?url=",shareTitle:"&description="};
break;
case"GooglePlus":t={urlPrefix:"https://plus.google.com/share?url=",shareTitle:"&t="};
break;
case"Weibo":t={urlPrefix:"http://service.weibo.com/share/share.php?url=",shareTitle:"&title="}
}return t
},click:function(){window.open(this.netString,this.options.WindowTitle,"toolbar="+this.options.Toolbar+",status="+this.options.Status+",width="+this.options.Width+",height="+this.options.Height)
}})
}),define("interactive/js/ui/socialshare/SeedSocialShare",["linseed!./SocialShare"],function(e){return e("seed-socialshare").seedEach()
}),define("interactive/js/ui/tabs/Tabs",["can"],function(e){return e.Control.extend({defaults:{windowWidth:700}},{init:function(){this.tab=this.element.attr("id"),this.labelItem=e.$("label[for='"+this.tab+"']"),this.tabSet=this.element.parents("nav").find("ul[data-ui-tab]").attr("data-ui-tab").toString(),this.otherTabs=this.element.parents("nav").find("input"),this.allLabels=this.element.parents("nav").find("label"),this.horizontalTabs=this.element.parents("nav.horizontal-tabs"),this.horizontalTabContent=this.horizontalTabs.find("li input"),this.horizontalTabLabels=this.horizontalTabs.find("li label"),this.verticalTabs=this.element.parents("nav.vertical-tabs"),this.verticalLabels=this.verticalTabs.find("ul"),this.checkVertical(),this.checkSelected(),this.mobileMenu()
},click:function(){this.checkSelected()
},checkSelected:function(){e.$("#"+this.tab).prop("checked")&&this.labelItem.addClass("label-checked"),this.removeSelectedState()
},removeSelectedState:function(){e.$.each(this.otherTabs,function(){if(e.$(this).prop("checked")==0){var t=e.$("label[for='"+e.$(this).attr("id")+"']");
t.removeClass("label-checked")
}})
},checkVertical:function(){if(this.verticalTabs.length>0&&!e.$.data(document.body,this.tabSet)){var t=this.verticalTabs,n=this.verticalLabels;
t.find(".tab-content").each(function(){e.$(this).css("minHeight",n.height())
}),e.$.data(document.body,this.tabSet,1)
}else{this.checkTabWidth()
}},checkTabWidth:function(){if(this.horizontalTabLabels.length>0){var t=e.$.data(document.body,this.tabSet+"Width")||0,n=this.labelItem.parent();
t+=n.width(),t>this.horizontalTabs.width()&&this.resizeWidth(),e.$.data(document.body,this.tabSet+"Width",t)
}},resizeWidth:function(){var t=100/this.horizontalTabLabels.length;
e.$.each(this.horizontalTabContent,function(){e.$(this).parent().css("minWidth","100%")
}),e.$.each(this.horizontalTabLabels,function(){e.$(this).parent().css("width",t+"%")
}),this.checkTabHeight()
},checkTabHeight:function(){if(this.horizontalTabLabels.length>0&&e.$(window).width()>this.options.windowWidth){var t=e.$.data(document.body,this.tabSet+"Height")||0,n=this.labelItem.innerHeight(),r=n>t?n:t;
e.$.data(document.body,this.tabSet+"Height",r),e.$.each(this.horizontalTabLabels,function(){e.$(this).css("height",r)
})
}else{e.$.each(this.horizontalTabLabels,function(){e.$(this).css("height","auto")
})
}},mobileMenu:function(){function n(){e.$(window).width()<=t.options.windowWidth?(t.toggleMobileMenu(t),t.checkTabHeight()):(t.unbindMobileMenu(t),t.checkTabHeight())
}var t=this;
e.$(this.labelItem).after("<div class='tabs-menu'/>"),n(),e.$(window).resize(function(){n()
})
},toggleMobileMenu:function(t){var n=t.labelItem,r=t.allLabels,i=e.$(n).siblings(".tabs-menu");
i.bind("click",function(){e.$(this).hide(),r.removeClass("label-checked").css("display","block"),r.bind("click",function(){e.$(this).addClass("label-checked"),e.$.each(r,function(){e.$(this).hasClass("label-checked")?e.$(this).siblings(".tabs-menu").show():e.$(this).css("display","none")
}),r.unbind("click")
})
})
},unbindMobileMenu:function(t){var n=t.allLabels,r=e.$(".tabs-menu");
r.unbind("click"),n.unbind("click").show()
}})
}),define("interactive/js/ui/tabs/SeedTabs",["linseed!./Tabs"],function(e){return e("seed-tabs").seedEach()
}),define("interactive/js/ui/treelist/TreeListControl",["can"],function(e){return e.Control.extend({target:function(t){e.$(document.getElementById(t)).prop("checked",!0).parents("li").find("> [name=branch]").prop("checked",!0)
},":type/:id route":function(e){e.type==="tree"&&this.target(e.id)
}})
}),define("interactive/js/ui/treelist/SeedTreeList",["linseed!./TreeListControl"],function(e){return e("seed-tree").seed()
}),define("tools/utils/DetailsPolyfill",[],function(){function e(e){var t=e.target;
if(t.nodeName!=="SUMMARY"){return
}if(e.type=="keypress"&&e.which!==13&&e.which!==32){return
}var n=t.parentNode;
n.getAttribute("open")?n.removeAttribute("open"):n.setAttribute("open","open")
}return function(t){if(t.createElement("details") instanceof HTMLUnknownElement){var n=t.querySelectorAll("summary");
for(var r=0,i;
i=n[r];
r++){i.setAttribute("tabindex","0"),i.addEventListener("click",e),i.addEventListener("keypress",e)
}}}
}),define("interactive/js/ui/detailslist/DetailsListControl",["can","tools/utils/DetailsPolyfill"],function(e,t){return e.Control.extend({init:function(){var e=this.element;
this.element.length&&(e=this.element[0],e&&t(e.ownerDocument))
}})
}),define("interactive/js/ui/detailslist/SeedDetailsList",["linseed!./DetailsListControl"],function(e){return e("seed-details").seed()
}),function(){function m(){return function(){}
}function p(e){return function(){return this[e]
}
}function q(e){return function(){return e
}
}function t(e,n,r){if("string"==typeof e){0===e.indexOf("#")&&(e=e.slice(1));
if(t.Ba[e]){return t.Ba[e]
}e=t.v(e)
}if(!e||!e.nodeName){throw new TypeError("The element or ID supplied is not valid. (videojs)")
}return e.player||new t.Player(e,n,r)
}function u(e,n,r,i){t.hc.forEach(r,function(t){e(n,t,i)
})
}function D(e,n){var r,i;
r=Array.prototype.slice.call(n),i=m(),i=window.console||{log:i,warn:i,error:i},e?r.unshift(e.toUpperCase()+":"):e="log",t.log.history.push(r),r.unshift("VIDEOJS:"),i[e].apply?i[e].apply(i,r):i[e](r.join(" "))
}function E(e){e.p("vjs-lock-showing")
}function F(e,n,r,i){if(r!==b){if(r===j||t.Bd(r)){r=0
}return e.b.style[n]=-1!==(""+r).indexOf("%")||-1!==(""+r).indexOf("px")?r:"auto"===r?"":r+"px",i||e.k("resize"),e
}return e.b?(r=e.b.style[n],i=r.indexOf("px"),-1!==i?parseInt(r.slice(0,i),10):parseInt(e.b["offset"+t.ba(n)],10)):0
}function G(e){var t,n,r,i,s,o,u,a;
t=0,n=j,e.d("touchstart",function(e){1===e.touches.length&&(n=e.touches[0],t=(new Date).getTime(),i=f)
}),e.d("touchmove",function(e){1<e.touches.length?i=l:n&&(o=e.touches[0].pageX-n.pageX,u=e.touches[0].pageY-n.pageY,a=Math.sqrt(o*o+u*u),22<a&&(i=l))
}),s=function(){i=l
},e.d("touchleave",s),e.d("touchcancel",s),e.d("touchend",function(e){n=j,i===f&&(r=(new Date).getTime()-t,250>r&&(e.preventDefault(),this.k("tap")))
})
}function H(e,n){var r,i,s,o;
return r=e.b,i=t.vd(r),o=s=r.offsetWidth,r=e.handle,e.options().vertical?(o=i.top,i=n.changedTouches?n.changedTouches[0].pageY:n.pageY,r&&(r=r.v().offsetHeight,o+=r/2,s-=r),Math.max(0,Math.min(1,(o-i+s)/s))):(s=i.left,i=n.changedTouches?n.changedTouches[0].pageX:n.pageX,r&&(r=r.v().offsetWidth,s+=r/2,o-=r),Math.max(0,Math.min(1,(i-s)/o)))
}function ca(e,n){e.S(n),n.d("click",t.bind(e,function(){E(this)
}))
}function J(e){e.sa=f,e.Aa.m("vjs-lock-showing"),e.b.setAttribute("aria-pressed",f),e.P&&0<e.P.length&&e.P[0].v().focus()
}function I(e){e.sa=l,E(e.Aa),e.b.setAttribute("aria-pressed",l)
}function da(e){var n,r,i={sources:[],tracks:[]};
n=t.za(e),r=n["data-setup"],r!==j&&t.g.z(n,t.JSON.parse(r||"{}")),t.g.z(i,n);
if(e.hasChildNodes()){var s,o;
e=e.childNodes,s=0;
for(o=e.length;
s<o;
s++){n=e[s],r=n.nodeName.toLowerCase(),"source"===r?i.sources.push(t.za(n)):"track"===r&&i.tracks.push(t.za(n))
}}return i
}function Q(e,n,r){e.n&&(e.la=l,e.n.dispose(),e.n=l),"Html5"!==n&&e.L&&(t.h.Bb(e.L),e.L=j),e.eb=n,e.la=l;
var i=t.g.z({source:r,parentEl:e.b},e.l[n.toLowerCase()]);
r&&(e.mc=r.type,r.src==e.G.src&&0<e.G.currentTime&&(i.startTime=e.G.currentTime),e.G.src=r.src),e.n=new window.videojs[n](e,i),e.n.J(function(){this.c.Fa()
})
}function R(e,t){t!==b&&e.uc!==t&&((e.uc=t)?(e.m("vjs-has-started"),e.k("firstplay")):e.p("vjs-has-started"))
}function T(e,n,r){if(e.n&&!e.n.la){e.n.J(function(){this[n](r)
})
}else{try{e.n[n](r)
}catch(i){throw t.log(i),i
}}}function S(e,n){if(e.n&&e.n.la){try{return e.n[n]()
}catch(r){throw e.n[n]===b?t.log("Video.js: "+n+" method not defined for "+e.eb+" playback technology.",r):"TypeError"==r.name?(t.log("Video.js: "+n+" unavailable on "+e.eb+" playback technology element.",r),e.n.la=l):t.log(r),r
}}}function U(e,n){var r=e.selectSource(n),i;
r?r.n===e.eb?e.src(r.source):Q(e,r.n,r.source):(i=setTimeout(t.bind(e,function(){this.error({code:4,message:this.s(this.options().notSupportedMessage)})
}),0),e.Fa(),e.d("dispose",function(){clearTimeout(i)
}))
}function P(e,t){return t!==b?(e.wc=!!t,e):e.wc
}function ea(e){return e.j().n&&e.j().n.featuresPlaybackRate&&e.j().options().playbackRates&&0<e.j().options().playbackRates.length
}function ga(e){e.Kb=l,e.cb(),e.o("play",e.Qc),e.o("pause",e.cb)
}function ja(){var e=W[X],t=e.charAt(0).toUpperCase()+e.slice(1);
ka["set"+t]=function(t){return this.b.vjs_setProperty(e,t)
}
}function la(e){ka[e]=function(){return this.b.vjs_getProperty(e)
}
}function na(e,n,r,i,s){var o=e.Ea=e.Ea||[];
s=s||{},s.kind=n,s.label=r,s.language=i,n=t.ba(n||"subtitles");
var u=new window.videojs[n+"Track"](e,s);
o.push(u),u.Ab()&&e.J(function(){setTimeout(function(){Y(u.j(),u.id())
},0)
})
}function Y(e,t,n){for(var r=e.Ea,i=0,s=r.length,o,u;
i<s;
i++){o=r[i],o.id()===t?(o.show(),u=o):n&&o.K()==n&&0<o.mode()&&o.disable()
}(t=u?u.K():n?n:l)&&e.k(t+"trackchange")
}function oa(e){0===e.na&&e.load(),0===e.ma&&(e.c.d("timeupdate",t.bind(e,e.update,e.U)),e.c.d("ended",t.bind(e,e.reset,e.U)),("captions"===e.H||"subtitles"===e.H)&&e.c.ka("textTrackDisplay").S(e))
}function pa(e){var t=e.split(":");
e=0;
var n,r,i;
return 3==t.length?(n=t[0],r=t[1],t=t[2]):(n=0,r=t[0],t=t[1]),t=t.split(/\s+/),t=t.splice(0,1)[0],t=t.split(/\.|,/),i=parseFloat(t[1]),t=t[0],e+=3600*parseFloat(n),e+=60*parseFloat(r),e+=parseFloat(t),i&&(e+=i/1000),e
}function $(e,t){var n=e.split("."),r=qa;
!(n[0] in r)&&r.execScript&&r.execScript("var "+n[0]);
for(var i;
n.length&&(i=n.shift());
){!n.length&&t!==b?r[i]=t:r=r[i]?r[i]:r[i]={}
}}var b=void 0,f=!0,j=null,l=!1,s;
document.createElement("video"),document.createElement("audio"),document.createElement("track");
var videojs=window.videojs=t;
t.Ub="4.9",t.Uc="https:"==document.location.protocol?"https://":"http://",t.options={techOrder:["html5","flash"],html5:{},flash:{},width:300,height:150,defaultVolume:0,playbackRates:[],inactivityTimeout:2000,children:{mediaLoader:{},posterImage:{},textTrackDisplay:{},loadingSpinner:{},bigPlayButton:{},controlBar:{},errorDisplay:{}},language:document.getElementsByTagName("html")[0].getAttribute("lang")||navigator.languages&&navigator.languages[0]||navigator.we||navigator.language||"en",languages:{},notSupportedMessage:"No compatible source was found for this video."},"GENERATED_CDN_VSN"!==t.Ub&&(videojs.options.flash.swf=t.Uc+"vjs.zencdn.net/"+t.Ub+"/video-js.swf"),t.fd=function(e,n){return t.options.languages[e]=t.options.languages[e]!==b?t.ga.Va(t.options.languages[e],n):n,t.options.languages
},t.Ba={},"function"==typeof define&&define.amd?define("videojs",[],function(){return videojs
}):"object"==typeof exports&&"object"==typeof module&&(module.exports=videojs),t.qa=t.CoreObject=m(),t.qa.extend=function(e){var n,r;
e=e||{},n=e.init||e.i||this.prototype.init||this.prototype.i||m(),r=function(){n.apply(this,arguments)
},r.prototype=t.g.create(this.prototype),r.prototype.constructor=r,r.extend=t.qa.extend,r.create=t.qa.create;
for(var i in e){e.hasOwnProperty(i)&&(r.prototype[i]=e[i])
}return r
},t.qa.create=function(){var e=t.g.create(this.prototype);
return this.apply(e,arguments),e
},t.d=function(e,n,r){if(t.g.isArray(n)){return u(t.d,e,n,r)
}var i=t.getData(e);
i.C||(i.C={}),i.C[n]||(i.C[n]=[]),r.w||(r.w=t.w++),i.C[n].push(r),i.X||(i.disabled=l,i.X=function(n){if(!i.disabled){n=t.qc(n);
var r=i.C[n.type];
if(r){for(var r=r.slice(0),s=0,o=r.length;
s<o&&!n.yc();
s++){r[s].call(e,n)
}}}}),1==i.C[n].length&&(e.addEventListener?e.addEventListener(n,i.X,l):e.attachEvent&&e.attachEvent("on"+n,i.X))
},t.o=function(e,n,r){if(t.tc(e)){var i=t.getData(e);
if(i.C){if(t.g.isArray(n)){return u(t.o,e,n,r)
}if(n){var s=i.C[n];
if(s){if(r){if(r.w){for(i=0;
i<s.length;
i++){s[i].w===r.w&&s.splice(i--,1)
}}}else{i.C[n]=[]
}t.jc(e,n)
}}else{for(s in i.C){n=s,i.C[n]=[],t.jc(e,n)
}}}}},t.jc=function(e,n){var r=t.getData(e);
0===r.C[n].length&&(delete r.C[n],e.removeEventListener?e.removeEventListener(n,r.X,l):e.detachEvent&&e.detachEvent("on"+n,r.X)),t.Hb(r.C)&&(delete r.C,delete r.X,delete r.disabled),t.Hb(r)&&t.Hc(e)
},t.qc=function(e){function t(){return f
}function n(){return l
}if(!e||!e.Ib){var r=e||window.event;
e={};
for(var i in r){"layerX"!==i&&"layerY"!==i&&"keyboardEvent.keyLocation"!==i&&("returnValue"==i&&r.preventDefault||(e[i]=r[i]))
}e.target||(e.target=e.srcElement||document),e.relatedTarget=e.fromElement===e.target?e.toElement:e.fromElement,e.preventDefault=function(){r.preventDefault&&r.preventDefault(),e.returnValue=l,e.zd=t,e.defaultPrevented=f
},e.zd=n,e.defaultPrevented=l,e.stopPropagation=function(){r.stopPropagation&&r.stopPropagation(),e.cancelBubble=f,e.Ib=t
},e.Ib=n,e.stopImmediatePropagation=function(){r.stopImmediatePropagation&&r.stopImmediatePropagation(),e.yc=t,e.stopPropagation()
},e.yc=n;
if(e.clientX!=j){i=document.documentElement;
var s=document.body;
e.pageX=e.clientX+(i&&i.scrollLeft||s&&s.scrollLeft||0)-(i&&i.clientLeft||s&&s.clientLeft||0),e.pageY=e.clientY+(i&&i.scrollTop||s&&s.scrollTop||0)-(i&&i.clientTop||s&&s.clientTop||0)
}e.which=e.charCode||e.keyCode,e.button!=j&&(e.button=e.button&1?0:e.button&4?1:e.button&2?2:0)
}return e
},t.k=function(e,n){var r=t.tc(e)?t.getData(e):{},i=e.parentNode||e.ownerDocument;
return"string"==typeof n&&(n={type:n,target:e}),n=t.qc(n),r.X&&r.X.call(e,n),i&&!n.Ib()&&n.bubbles!==l?t.k(i,n):!i&&!n.defaultPrevented&&(r=t.getData(n.target),n.target[n.type])&&(r.disabled=f,"function"==typeof n.target[n.type]&&n.target[n.type](),r.disabled=l),!n.defaultPrevented
},t.Q=function(e,n,r){function i(){t.o(e,n,i),r.apply(this,arguments)
}if(t.g.isArray(n)){return u(t.Q,e,n,r)
}i.w=r.w=r.w||t.w++,t.d(e,n,i)
};
var v=Object.prototype.hasOwnProperty;
t.e=function(e,n){var r;
return n=n||{},r=document.createElement(e||"div"),t.g.Y(n,function(e,t){-1!==e.indexOf("aria-")||"role"==e?r.setAttribute(e,t):r[e]=t
}),r
},t.ba=function(e){return e.charAt(0).toUpperCase()+e.slice(1)
},t.g={},t.g.create=Object.create||function(e){function t(){}return t.prototype=e,new t
},t.g.Y=function(e,t,n){for(var r in e){v.call(e,r)&&t.call(n||this,r,e[r])
}},t.g.z=function(e,t){if(!t){return e
}for(var n in t){v.call(t,n)&&(e[n]=t[n])
}return e
},t.g.od=function(e,n){var r,i,s;
e=t.g.copy(e);
for(r in n){v.call(n,r)&&(i=e[r],s=n[r],e[r]=t.g.Ta(i)&&t.g.Ta(s)?t.g.od(i,s):n[r])
}return e
},t.g.copy=function(e){return t.g.z({},e)
},t.g.Ta=function(e){return !!e&&"object"==typeof e&&"[object Object]"===e.toString()&&e.constructor===Object
},t.g.isArray=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)
},t.Bd=function(e){return e!==e
},t.bind=function(e,n,r){function i(){return n.apply(e,arguments)
}return n.w||(n.w=t.w++),i.w=r?r+"_"+n.w:n.w,i
},t.ua={},t.w=1,t.expando="vdata"+(new Date).getTime(),t.getData=function(e){var n=e[t.expando];
return n||(n=e[t.expando]=t.w++,t.ua[n]={}),t.ua[n]
},t.tc=function(e){return e=e[t.expando],!!e&&!t.Hb(t.ua[e])
},t.Hc=function(e){var n=e[t.expando];
if(n){delete t.ua[n];
try{delete e[t.expando]
}catch(r){e.removeAttribute?e.removeAttribute(t.expando):e[t.expando]=j
}}},t.Hb=function(e){for(var t in e){if(e[t]!==j){return l
}}return f
},t.Sa=function(e,t){return -1!==(" "+e.className+" ").indexOf(" "+t+" ")
},t.m=function(e,n){t.Sa(e,n)||(e.className=""===e.className?n:e.className+" "+n)
},t.p=function(e,n){var r,i;
if(t.Sa(e,n)){r=e.className.split(" ");
for(i=r.length-1;
0<=i;
i--){r[i]===n&&r.splice(i,1)
}e.className=r.join(" ")
}},t.A=t.e("video"),t.N=navigator.userAgent,t.$c=/iPhone/i.test(t.N),t.Zc=/iPad/i.test(t.N),t.ad=/iPod/i.test(t.N),t.Yc=t.$c||t.Zc||t.ad;
var aa=t,x,y=t.N.match(/OS (\d+)_/i);
x=y&&y[1]?y[1]:b,aa.le=x,t.Wc=/Android/i.test(t.N);
var ba=t,z,A=t.N.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i),B,C;
A?(B=A[1]&&parseFloat(A[1]),C=A[2]&&parseFloat(A[2]),z=B&&C?parseFloat(A[1]+"."+A[2]):B?B:j):z=j,ba.Tb=z,t.bd=t.Wc&&/webkit/i.test(t.N)&&2.3>t.Tb,t.Xc=/Firefox/i.test(t.N),t.me=/Chrome/i.test(t.N),t.dc=!!("ontouchstart" in window||window.Vc&&document instanceof window.Vc),t.Jc=function(e,n){t.g.Y(n,function(t,n){n===j||"undefined"==typeof n||n===l?e.removeAttribute(t):e.setAttribute(t,n===f?"":n)
})
},t.za=function(e){var t,n,r,i;
t={};
if(e&&e.attributes&&0<e.attributes.length){n=e.attributes;
for(var s=n.length-1;
0<=s;
s--){r=n[s].name,i=n[s].value;
if("boolean"==typeof e[r]||-1!==",autoplay,controls,loop,muted,default,".indexOf(","+r+",")){i=i!==j?f:l
}t[r]=i
}}return t
},t.se=function(e,t){var n="";
return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(e,"").getPropertyValue(t):e.currentStyle&&(n=e["client"+t.substr(0,1).toUpperCase()+t.substr(1)]+"px"),n
},t.Gb=function(e,t){t.firstChild?t.insertBefore(e,t.firstChild):t.appendChild(e)
},t.Oa={},t.v=function(e){return 0===e.indexOf("#")&&(e=e.slice(1)),document.getElementById(e)
},t.ya=function(e,t){t=t||e;
var n=Math.floor(e%60),r=Math.floor(e/60%60),i=Math.floor(e/3600),s=Math.floor(t/60%60),o=Math.floor(t/3600);
if(isNaN(e)||Infinity===e){i=r=n="-"
}return i=0<i||0<o?i+":":"",i+(((i||10<=s)&&10>r?"0"+r:r)+":")+(10>n?"0"+n:n)
},t.hd=function(){document.body.focus(),document.onselectstart=q(l)
},t.he=function(){document.onselectstart=q(f)
},t.trim=function(e){return(e+"").replace(/^\s+|\s+$/g,"")
},t.round=function(e,t){return t||(t=0),Math.round(e*Math.pow(10,t))/Math.pow(10,t)
},t.zb=function(e,t){return{length:1,start:function(){return e
},end:function(){return t
}}
},t.get=function(e,n,r,i){var s,o,u,a;
r=r||m(),"undefined"==typeof XMLHttpRequest&&(window.XMLHttpRequest=function(){try{return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")
}catch(e){}try{return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")
}catch(t){}try{return new window.ActiveXObject("Msxml2.XMLHTTP")
}catch(n){}throw Error("This browser does not support XMLHttpRequest.")
}),o=new XMLHttpRequest,u=t.Ud(e),a=window.location,u.protocol+u.host===a.protocol+a.host||!window.XDomainRequest||"withCredentials" in o?(s="file:"==u.protocol||"file:"==a.protocol,o.onreadystatechange=function(){4===o.readyState&&(200===o.status||s&&0===o.status?n(o.responseText):r(o.responseText))
}):(o=new window.XDomainRequest,o.onload=function(){n(o.responseText)
},o.onerror=r,o.onprogress=m(),o.ontimeout=r);
try{o.open("GET",e,f),i&&(o.withCredentials=f)
}catch(l){r(l);
return
}try{o.send()
}catch(c){r(c)
}},t.Yd=function(e){try{var n=window.localStorage||l;
n&&(n.volume=e)
}catch(r){22==r.code||1014==r.code?t.log("LocalStorage Full (VideoJS)",r):18==r.code?t.log("LocalStorage not allowed (VideoJS)",r):t.log("LocalStorage Error (VideoJS)",r)
}},t.sc=function(e){return e.match(/^https?:\/\//)||(e=t.e("div",{innerHTML:'<a href="'+e+'">x</a>'}).firstChild.href),e
},t.Ud=function(e){var n,r,i,s;
s="protocol hostname port pathname search hash host".split(" "),r=t.e("a",{href:e});
if(i=""===r.host&&"file:"!==r.protocol){n=t.e("div"),n.innerHTML='<a href="'+e+'"></a>',r=n.firstChild,n.setAttribute("style","display:none; position:absolute;"),document.body.appendChild(n)
}e={};
for(var o=0;
o<s.length;
o++){e[s[o]]=r[s[o]]
}return i&&document.body.removeChild(n),e
},t.log=function(){D(j,arguments)
},t.log.history=[],t.log.error=function(){D("error",arguments)
},t.log.warn=function(){D("warn",arguments)
},t.vd=function(e){var n,r;
return e.getBoundingClientRect&&e.parentNode&&(n=e.getBoundingClientRect()),n?(e=document.documentElement,r=document.body,{left:t.round(n.left+(window.pageXOffset||r.scrollLeft)-(e.clientLeft||r.clientLeft||0)),top:t.round(n.top+(window.pageYOffset||r.scrollTop)-(e.clientTop||r.clientTop||0))}):{left:0,top:0}
},t.hc={},t.hc.forEach=function(e,n,r){if(t.g.isArray(e)&&n instanceof Function){for(var i=0,s=e.length;
i<s;
++i){n.call(r||t,e[i],i,e)
}}return e
},t.ga={},t.ga.Va=function(e,n){var r,i,s;
e=t.g.copy(e);
for(r in n){n.hasOwnProperty(r)&&(i=e[r],s=n[r],e[r]=t.g.Ta(i)&&t.g.Ta(s)?t.ga.Va(i,s):n[r])
}return e
},t.a=t.qa.extend({i:function(e,n,r){this.c=e,this.l=t.g.copy(this.l),n=this.options(n),this.U=n.id||(n.el&&n.el.id?n.el.id:e.id()+"_component_"+t.w++),this.Hd=n.name||j,this.b=n.el||this.e(),this.O=[],this.Pa={},this.Qa={},this.vc(),this.J(r);
if(n.Ic!==l){var i,s;
i=t.bind(this.j(),this.j().reportUserActivity),this.d("touchstart",function(){i(),clearInterval(s),s=setInterval(i,250)
}),e=function(){i(),clearInterval(s)
},this.d("touchmove",i),this.d("touchend",e),this.d("touchcancel",e)
}}}),s=t.a.prototype,s.dispose=function(){this.k({type:"dispose",bubbles:l});
if(this.O){for(var e=this.O.length-1;
0<=e;
e--){this.O[e].dispose&&this.O[e].dispose()
}}this.Qa=this.Pa=this.O=j,this.o(),this.b.parentNode&&this.b.parentNode.removeChild(this.b),t.Hc(this.b),this.b=j
},s.c=f,s.j=p("c"),s.options=function(e){return e===b?this.l:this.l=t.ga.Va(this.l,e)
},s.e=function(e,n){return t.e(e,n)
},s.s=function(e){var t=this.c.language(),n=this.c.languages();
return n&&n[t]&&n[t][e]?n[t][e]:e
},s.v=p("b"),s.ja=function(){return this.u||this.b
},s.id=p("U"),s.name=p("Hd"),s.children=p("O"),s.xd=function(e){return this.Pa[e]
},s.ka=function(e){return this.Qa[e]
},s.S=function(e,n){var r,i;
return"string"==typeof e?(i=e,n=n||{},r=n.componentClass||t.ba(i),n.name=i,r=new window.videojs[r](this.c||this,n)):r=e,this.O.push(r),"function"==typeof r.id&&(this.Pa[r.id()]=r),(i=i||r.name&&r.name())&&(this.Qa[i]=r),"function"==typeof r.el&&r.el()&&this.ja().appendChild(r.el()),r
},s.removeChild=function(e){"string"==typeof e&&(e=this.ka(e));
if(e&&this.O){for(var t=l,n=this.O.length-1;
0<=n;
n--){if(this.O[n]===e){t=f,this.O.splice(n,1);
break
}}t&&(this.Pa[e.id]=j,this.Qa[e.name]=j,(t=e.v())&&t.parentNode===this.ja()&&this.ja().removeChild(e.v()))
}},s.vc=function(){var e,n,r,i;
e=this;
if(n=this.options().children){if(t.g.isArray(n)){for(var s=0;
s<n.length;
s++){r=n[s],"string"==typeof r?(i=r,r={}):i=r.name,e[i]=e.S(i,r)
}}else{t.g.Y(n,function(t,n){n!==l&&(e[t]=e.S(t,n))
})
}}},s.T=q(""),s.d=function(e,n){return t.d(this.b,e,t.bind(this,n)),this
},s.o=function(e,n){return t.o(this.b,e,n),this
},s.Q=function(e,n){return t.Q(this.b,e,t.bind(this,n)),this
},s.k=function(e){return t.k(this.b,e),this
},s.J=function(e){return e&&(this.la?e.call(this):(this.ab===b&&(this.ab=[]),this.ab.push(e))),this
},s.Fa=function(){this.la=f;
var e=this.ab;
if(e&&0<e.length){for(var t=0,n=e.length;
t<n;
t++){e[t].call(this)
}this.ab=[],this.k("ready")
}},s.Sa=function(e){return t.Sa(this.b,e)
},s.m=function(e){return t.m(this.b,e),this
},s.p=function(e){return t.p(this.b,e),this
},s.show=function(){return this.b.style.display="block",this
},s.W=function(){return this.b.style.display="none",this
},s.disable=function(){this.W(),this.show=m()
},s.width=function(e,t){return F(this,"width",e,t)
},s.height=function(e,t){return F(this,"height",e,t)
},s.rd=function(e,t){return this.width(e,f).height(t)
},t.t=t.a.extend({i:function(e,n){t.a.call(this,e,n),G(this),this.d("tap",this.r),this.d("click",this.r),this.d("focus",this.Ya),this.d("blur",this.Xa)
}}),s=t.t.prototype,s.e=function(e,n){var r;
return n=t.g.z({className:this.T(),role:"button","aria-live":"polite",tabIndex:0},n),r=t.a.prototype.e.call(this,e,n),n.innerHTML||(this.u=t.e("div",{className:"vjs-control-content"}),this.xb=t.e("span",{className:"vjs-control-text",innerHTML:this.s(this.ta)||"Need Text"}),this.u.appendChild(this.xb),r.appendChild(this.u)),r
},s.T=function(){return"vjs-control "+t.a.prototype.T.call(this)
},s.r=m(),s.Ya=function(){t.d(document,"keydown",t.bind(this,this.Z))
},s.Z=function(e){if(32==e.which||13==e.which){e.preventDefault(),this.r()
}},s.Xa=function(){t.o(document,"keydown",t.bind(this,this.Z))
},t.R=t.a.extend({i:function(e,n){t.a.call(this,e,n),this.gd=this.ka(this.l.barName),this.handle=this.ka(this.l.handleName),this.d("mousedown",this.Za),this.d("touchstart",this.Za),this.d("focus",this.Ya),this.d("blur",this.Xa),this.d("click",this.r),this.c.d("controlsvisible",t.bind(this,this.update)),e.d(this.Dc,t.bind(this,this.update)),this.F={},this.F.move=t.bind(this,this.$a),this.F.end=t.bind(this,this.Lb)
}}),s=t.R.prototype,s.dispose=function(){t.o(document,"mousemove",this.F.move,l),t.o(document,"mouseup",this.F.end,l),t.o(document,"touchmove",this.F.move,l),t.o(document,"touchend",this.F.end,l),t.o(document,"keyup",t.bind(this,this.Z)),t.a.prototype.dispose.call(this)
},s.e=function(e,n){return n=n||{},n.className+=" vjs-slider",n=t.g.z({role:"slider","aria-valuenow":0,"aria-valuemin":0,"aria-valuemax":100,tabIndex:0},n),t.a.prototype.e.call(this,e,n)
},s.Za=function(e){e.preventDefault(),t.hd(),this.m("vjs-sliding"),t.d(document,"mousemove",this.F.move),t.d(document,"mouseup",this.F.end),t.d(document,"touchmove",this.F.move),t.d(document,"touchend",this.F.end),this.$a(e)
},s.$a=m(),s.Lb=function(){t.he(),this.p("vjs-sliding"),t.o(document,"mousemove",this.F.move,l),t.o(document,"mouseup",this.F.end,l),t.o(document,"touchmove",this.F.move,l),t.o(document,"touchend",this.F.end,l),this.update()
},s.update=function(){if(this.b){var e,n=this.Fb(),r=this.handle,i=this.gd;
isNaN(n)&&(n=0),e=n;
if(r){e=this.b.offsetWidth;
var s=r.v().offsetWidth;
e=s?s/e:0,n*=1-e,e=n+e/2,r.v().style.left=t.round(100*n,2)+"%"
}i&&(i.v().style.width=t.round(100*e,2)+"%")
}},s.Ya=function(){t.d(document,"keyup",t.bind(this,this.Z))
},s.Z=function(e){if(37==e.which||40==e.which){e.preventDefault(),this.Mc()
}else{if(38==e.which||39==e.which){e.preventDefault(),this.Nc()
}}},s.Xa=function(){t.o(document,"keyup",t.bind(this,this.Z))
},s.r=function(e){e.stopImmediatePropagation(),e.preventDefault()
},t.$=t.a.extend(),t.$.prototype.defaultValue=0,t.$.prototype.e=function(e,n){return n=n||{},n.className+=" vjs-slider-handle",n=t.g.z({innerHTML:'<span class="vjs-control-text">'+this.defaultValue+"</span>"},n),t.a.prototype.e.call(this,"div",n)
},t.ha=t.a.extend(),t.ha.prototype.e=function(){var e=this.options().kc||"ul";
return this.u=t.e(e,{className:"vjs-menu-content"}),e=t.a.prototype.e.call(this,"div",{append:this.u,className:"vjs-menu"}),e.appendChild(this.u),t.d(e,"click",function(e){e.preventDefault(),e.stopImmediatePropagation()
}),e
},t.I=t.t.extend({i:function(e,n){t.t.call(this,e,n),this.selected(n.selected)
}}),t.I.prototype.e=function(e,n){return t.t.prototype.e.call(this,"li",t.g.z({className:"vjs-menu-item",innerHTML:this.l.label},n))
},t.I.prototype.r=function(){this.selected(f)
},t.I.prototype.selected=function(e){e?(this.m("vjs-selected"),this.b.setAttribute("aria-selected",f)):(this.p("vjs-selected"),this.b.setAttribute("aria-selected",l))
},t.M=t.t.extend({i:function(e,n){t.t.call(this,e,n),this.Aa=this.wa(),this.S(this.Aa),this.P&&0===this.P.length&&this.W(),this.d("keyup",this.Z),this.b.setAttribute("aria-haspopup",f),this.b.setAttribute("role","button")
}}),s=t.M.prototype,s.sa=l,s.wa=function(){var e=new t.ha(this.c);
this.options().title&&e.ja().appendChild(t.e("li",{className:"vjs-menu-title",innerHTML:t.ba(this.options().title),ee:-1}));
if(this.P=this.createItems()){for(var n=0;
n<this.P.length;
n++){ca(e,this.P[n])
}}return e
},s.va=m(),s.T=function(){return this.className+" vjs-menu-button "+t.t.prototype.T.call(this)
},s.Ya=m(),s.Xa=m(),s.r=function(){this.Q("mouseout",t.bind(this,function(){E(this.Aa),this.b.blur()
})),this.sa?I(this):J(this)
},s.Z=function(e){e.preventDefault(),32==e.which||13==e.which?this.sa?I(this):J(this):27==e.which&&this.sa&&I(this)
},t.D=function(e){"number"==typeof e?this.code=e:"string"==typeof e?this.message=e:"object"==typeof e&&t.g.z(this,e),this.message||(this.message=t.D.pd[this.code]||"")
},t.D.prototype.code=0,t.D.prototype.message="",t.D.prototype.status=j,t.D.Ra="MEDIA_ERR_CUSTOM MEDIA_ERR_ABORTED MEDIA_ERR_NETWORK MEDIA_ERR_DECODE MEDIA_ERR_SRC_NOT_SUPPORTED MEDIA_ERR_ENCRYPTED".split(" "),t.D.pd={1:"You aborted the video playback",2:"A network error caused the video download to fail part-way.",3:"The video playback was aborted due to a corruption problem or because the video used features your browser did not support.",4:"The video could not be loaded, either because the server or network failed or because the format is not supported.",5:"The video is encrypted and we do not have the keys to decrypt it."};
for(var K=0;
K<t.D.Ra.length;
K++){t.D[t.D.Ra[K]]=K,t.D.prototype[t.D.Ra[K]]=K
}var L,M,N,O;
L=["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "),"webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "),"webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "),"mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "),"msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")],M=L[0];
for(O=0;
O<L.length;
O++){if(L[O][1] in document){N=L[O];
break
}}if(N){t.Oa.Eb={};
for(O=0;
O<N.length;
O++){t.Oa.Eb[M[O]]=N[O]
}}t.Player=t.a.extend({i:function(e,n,r){this.L=e,e.id=e.id||"vjs_video_"+t.w++,this.fe=e&&t.za(e),n=t.g.z(da(e),n),this.Ua=n.language||t.options.language,this.Fd=n.languages||t.options.languages,this.G={},this.Ec=n.poster,this.yb=n.controls,e.controls=l,n.Ic=l,P(this,"audio"===this.L.nodeName.toLowerCase()),t.a.call(this,this,n,r),this.controls()?this.m("vjs-controls-enabled"):this.m("vjs-controls-disabled"),P(this)&&this.m("vjs-audio"),t.Ba[this.U]=this,n.plugins&&t.g.Y(n.plugins,function(e,t){this[e](t)
},this);
var i,s,o,u,a,c;
i=t.bind(this,this.reportUserActivity),this.d("mousedown",function(){i(),clearInterval(s),s=setInterval(i,250)
}),this.d("mousemove",function(e){if(e.screenX!=a||e.screenY!=c){a=e.screenX,c=e.screenY,i()
}}),this.d("mouseup",function(){i(),clearInterval(s)
}),this.d("keydown",i),this.d("keyup",i),o=setInterval(t.bind(this,function(){if(this.pa){this.pa=l,this.userActive(f),clearTimeout(u);
var e=this.options().inactivityTimeout;
0<e&&(u=setTimeout(t.bind(this,function(){this.pa||this.userActive(l)
}),e))
}}),250),this.d("dispose",function(){clearInterval(o),clearTimeout(u)
})
}}),s=t.Player.prototype,s.language=function(e){return e===b?this.Ua:(this.Ua=e,this)
},s.languages=p("Fd"),s.l=t.options,s.dispose=function(){this.k("dispose"),this.o("dispose"),t.Ba[this.U]=j,this.L&&this.L.player&&(this.L.player=j),this.b&&this.b.player&&(this.b.player=j),this.n&&this.n.dispose(),t.a.prototype.dispose.call(this)
},s.e=function(){var e=this.b=t.a.prototype.e.call(this,"div"),n=this.L,r;
n.removeAttribute("width"),n.removeAttribute("height");
if(n.hasChildNodes()){var i,s,o,u,a;
i=n.childNodes,s=i.length;
for(a=[];
s--;
){o=i[s],u=o.nodeName.toLowerCase(),"track"===u&&a.push(o)
}for(i=0;
i<a.length;
i++){n.removeChild(a[i])
}}return r=t.za(n),t.g.Y(r,function(t){"class"==t?e.className=r[t]:e.setAttribute(t,r[t])
}),n.id+="_html5_api",n.className="vjs-tech",n.player=e.player=this,this.m("vjs-paused"),this.width(this.l.width,f),this.height(this.l.height,f),n.parentNode&&n.parentNode.insertBefore(e,n),t.Gb(n,e),this.b=e,this.d("loadstart",this.Md),this.d("waiting",this.Sd),this.d(["canplay","canplaythrough","playing","ended"],this.Rd),this.d("seeking",this.Pd),this.d("seeked",this.Od),this.d("ended",this.Id),this.d("play",this.Nb),this.d("firstplay",this.Kd),this.d("pause",this.Mb),this.d("progress",this.Nd),this.d("durationchange",this.Bc),this.d("fullscreenchange",this.Ld),e
},s.Md=function(){this.error(j),this.paused()?(R(this,l),this.Q("play",function(){R(this,f)
})):this.k("firstplay")
},s.uc=l,s.Nb=function(){this.p("vjs-paused"),this.m("vjs-playing")
},s.Sd=function(){this.m("vjs-waiting")
},s.Rd=function(){this.p("vjs-waiting")
},s.Pd=function(){this.m("vjs-seeking")
},s.Od=function(){this.p("vjs-seeking")
},s.Kd=function(){this.l.starttime&&this.currentTime(this.l.starttime),this.m("vjs-has-started")
},s.Mb=function(){this.p("vjs-playing"),this.m("vjs-paused")
},s.Nd=function(){1==this.bufferedPercent()&&this.k("loadedalldata")
},s.Id=function(){this.l.loop?(this.currentTime(0),this.play()):this.paused()||this.pause()
},s.Bc=function(){var e=S(this,"duration");
e&&(0>e&&(e=Infinity),this.duration(e),Infinity===e?this.m("vjs-live"):this.p("vjs-live"))
},s.Ld=function(){this.isFullscreen()?this.m("vjs-fullscreen"):this.p("vjs-fullscreen")
},s.play=function(){return T(this,"play"),this
},s.pause=function(){return T(this,"pause"),this
},s.paused=function(){return S(this,"paused")===l?l:f
},s.currentTime=function(e){return e!==b?(T(this,"setCurrentTime",e),this):this.G.currentTime=S(this,"currentTime")||0
},s.duration=function(e){return e!==b?(this.G.duration=parseFloat(e),this):(this.G.duration===b&&this.Bc(),this.G.duration||0)
},s.remainingTime=function(){return this.duration()-this.currentTime()
},s.buffered=function(){var e=S(this,"buffered");
if(!e||!e.length){e=t.zb(0,0)
}return e
},s.bufferedPercent=function(){var e=this.duration(),t=this.buffered(),n=0,r,i;
if(!e){return 0
}for(var s=0;
s<t.length;
s++){r=t.start(s),i=t.end(s),i>e&&(i=e),n+=i-r
}return n/e
},s.volume=function(e){return e!==b?(e=Math.max(0,Math.min(1,parseFloat(e))),this.G.volume=e,T(this,"setVolume",e),t.Yd(e),this):(e=parseFloat(S(this,"volume")),isNaN(e)?1:e)
},s.muted=function(e){return e!==b?(T(this,"setMuted",e),this):S(this,"muted")||l
},s.Da=function(){return S(this,"supportsFullScreen")||l
},s.xc=l,s.isFullscreen=function(e){return e!==b?(this.xc=!!e,this):this.xc
},s.isFullScreen=function(e){return t.log.warn('player.isFullScreen() has been deprecated, use player.isFullscreen() with a lowercase "s")'),this.isFullscreen(e)
},s.requestFullscreen=function(){var e=t.Oa.Eb;
return this.isFullscreen(f),e?(t.d(document,e.fullscreenchange,t.bind(this,function(n){this.isFullscreen(document[e.fullscreenElement]),this.isFullscreen()===l&&t.o(document,e.fullscreenchange,arguments.callee),this.k("fullscreenchange")
})),this.b[e.requestFullscreen]()):this.n.Da()?T(this,"enterFullScreen"):(this.pc(),this.k("fullscreenchange")),this
},s.requestFullScreen=function(){return t.log.warn('player.requestFullScreen() has been deprecated, use player.requestFullscreen() with a lowercase "s")'),this.requestFullscreen()
},s.exitFullscreen=function(){var e=t.Oa.Eb;
return this.isFullscreen(l),e?document[e.exitFullscreen]():this.n.Da()?T(this,"exitFullScreen"):(this.Cb(),this.k("fullscreenchange")),this
},s.cancelFullScreen=function(){return t.log.warn("player.cancelFullScreen() has been deprecated, use player.exitFullscreen()"),this.exitFullscreen()
},s.pc=function(){this.Ad=f,this.sd=document.documentElement.style.overflow,t.d(document,"keydown",t.bind(this,this.rc)),document.documentElement.style.overflow="hidden",t.m(document.body,"vjs-full-window"),this.k("enterFullWindow")
},s.rc=function(e){27===e.keyCode&&(this.isFullscreen()===f?this.exitFullscreen():this.Cb())
},s.Cb=function(){this.Ad=l,t.o(document,"keydown",this.rc),document.documentElement.style.overflow=this.sd,t.p(document.body,"vjs-full-window"),this.k("exitFullWindow")
},s.selectSource=function(e){for(var n=0,r=this.l.techOrder;
n<r.length;
n++){var i=t.ba(r[n]),s=window.videojs[i];
if(s){if(s.isSupported()){for(var o=0,u=e;
o<u.length;
o++){var a=u[o];
if(s.canPlaySource(a)){return{source:a,n:i}
}}}}else{t.log.error('The "'+i+'" tech is undefined. Skipped browser support check for that tech.')
}}return l
},s.src=function(e){return e===b?S(this,"src"):(t.g.isArray(e)?U(this,e):"string"==typeof e?this.src({src:e}):e instanceof Object&&(e.type&&!window.videojs[this.eb].canPlaySource(e)?U(this,[e]):(this.G.src=e.src,this.mc=e.type||"",this.J(function(){T(this,"src",e.src),"auto"==this.l.preload&&this.load(),this.l.autoplay&&this.play()
}))),this)
},s.load=function(){return T(this,"load"),this
},s.currentSrc=function(){return S(this,"currentSrc")||this.G.src||""
},s.nd=function(){return this.mc||""
},s.Ca=function(e){return e!==b?(T(this,"setPreload",e),this.l.preload=e,this):S(this,"preload")
},s.autoplay=function(e){return e!==b?(T(this,"setAutoplay",e),this.l.autoplay=e,this):S(this,"autoplay")
},s.loop=function(e){return e!==b?(T(this,"setLoop",e),this.l.loop=e,this):S(this,"loop")
},s.poster=function(e){return e===b?this.Ec:(this.Ec=e,T(this,"setPoster",e),this.k("posterchange"),this)
},s.controls=function(e){return e!==b?(e=!!e,this.yb!==e&&((this.yb=e)?(this.p("vjs-controls-disabled"),this.m("vjs-controls-enabled"),this.k("controlsenabled")):(this.p("vjs-controls-enabled"),this.m("vjs-controls-disabled"),this.k("controlsdisabled"))),this):this.yb
},t.Player.prototype.Sb,s=t.Player.prototype,s.usingNativeControls=function(e){return e!==b?(e=!!e,this.Sb!==e&&((this.Sb=e)?(this.m("vjs-using-native-controls"),this.k("usingnativecontrols")):(this.p("vjs-using-native-controls"),this.k("usingcustomcontrols"))),this):this.Sb
},s.da=j,s.error=function(e){return e===b?this.da:e===j?(this.da=e,this.p("vjs-error"),this):(this.da=e instanceof t.D?e:new t.D(e),this.k("error"),this.m("vjs-error"),t.log.error("(CODE:"+this.da.code+" "+t.D.Ra[this.da.code]+")",this.da.message,this.da),this)
},s.ended=function(){return S(this,"ended")
},s.seeking=function(){return S(this,"seeking")
},s.pa=f,s.reportUserActivity=function(){this.pa=f
},s.Rb=f,s.userActive=function(e){return e!==b?(e=!!e,e!==this.Rb&&((this.Rb=e)?(this.pa=f,this.p("vjs-user-inactive"),this.m("vjs-user-active"),this.k("useractive")):(this.pa=l,this.n&&this.n.Q("mousemove",function(e){e.stopPropagation(),e.preventDefault()
}),this.p("vjs-user-active"),this.m("vjs-user-inactive"),this.k("userinactive"))),this):this.Rb
},s.playbackRate=function(e){return e!==b?(T(this,"setPlaybackRate",e),this):this.n&&this.n.featuresPlaybackRate?S(this,"playbackRate"):1
},s.wc=l,t.Ia=t.a.extend(),t.Ia.prototype.l={te:"play",children:{playToggle:{},currentTimeDisplay:{},timeDivider:{},durationDisplay:{},remainingTimeDisplay:{},liveDisplay:{},progressControl:{},fullscreenToggle:{},volumeControl:{},muteToggle:{},playbackRateMenuButton:{}}},t.Ia.prototype.e=function(){return t.e("div",{className:"vjs-control-bar"})
},t.Xb=t.a.extend({i:function(e,n){t.a.call(this,e,n)
}}),t.Xb.prototype.e=function(){var e=t.a.prototype.e.call(this,"div",{className:"vjs-live-controls vjs-control"});
return this.u=t.e("div",{className:"vjs-live-display",innerHTML:'<span class="vjs-control-text">'+this.s("Stream Type")+"</span>"+this.s("LIVE"),"aria-live":"off"}),e.appendChild(this.u),e
},t.$b=t.t.extend({i:function(e,n){t.t.call(this,e,n),e.d("play",t.bind(this,this.Nb)),e.d("pause",t.bind(this,this.Mb))
}}),s=t.$b.prototype,s.ta="Play",s.T=function(){return"vjs-play-control "+t.t.prototype.T.call(this)
},s.r=function(){this.c.paused()?this.c.play():this.c.pause()
},s.Nb=function(){t.p(this.b,"vjs-paused"),t.m(this.b,"vjs-playing"),this.b.children[0].children[0].innerHTML=this.s("Pause")
},s.Mb=function(){t.p(this.b,"vjs-playing"),t.m(this.b,"vjs-paused"),this.b.children[0].children[0].innerHTML=this.s("Play")
},t.hb=t.a.extend({i:function(e,n){t.a.call(this,e,n),e.d("timeupdate",t.bind(this,this.fa))
}}),t.hb.prototype.e=function(){var e=t.a.prototype.e.call(this,"div",{className:"vjs-current-time vjs-time-controls vjs-control"});
return this.u=t.e("div",{className:"vjs-current-time-display",innerHTML:'<span class="vjs-control-text">Current Time </span>0:00',"aria-live":"off"}),e.appendChild(this.u),e
},t.hb.prototype.fa=function(){var e=this.c.bb?this.c.G.currentTime:this.c.currentTime();
this.u.innerHTML='<span class="vjs-control-text">'+this.s("Current Time")+"</span> "+t.ya(e,this.c.duration())
},t.ib=t.a.extend({i:function(e,n){t.a.call(this,e,n),e.d("timeupdate",t.bind(this,this.fa))
}}),t.ib.prototype.e=function(){var e=t.a.prototype.e.call(this,"div",{className:"vjs-duration vjs-time-controls vjs-control"});
return this.u=t.e("div",{className:"vjs-duration-display",innerHTML:'<span class="vjs-control-text">'+this.s("Duration Time")+"</span> 0:00","aria-live":"off"}),e.appendChild(this.u),e
},t.ib.prototype.fa=function(){var e=this.c.duration();
e&&(this.u.innerHTML='<span class="vjs-control-text">'+this.s("Duration Time")+"</span> "+t.ya(e))
},t.fc=t.a.extend({i:function(e,n){t.a.call(this,e,n)
}}),t.fc.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-time-divider",innerHTML:"<div><span>/</span></div>"})
},t.pb=t.a.extend({i:function(e,n){t.a.call(this,e,n),e.d("timeupdate",t.bind(this,this.fa))
}}),t.pb.prototype.e=function(){var e=t.a.prototype.e.call(this,"div",{className:"vjs-remaining-time vjs-time-controls vjs-control"});
return this.u=t.e("div",{className:"vjs-remaining-time-display",innerHTML:'<span class="vjs-control-text">'+this.s("Remaining Time")+"</span> -0:00","aria-live":"off"}),e.appendChild(this.u),e
},t.pb.prototype.fa=function(){this.c.duration()&&(this.u.innerHTML='<span class="vjs-control-text">'+this.s("Remaining Time")+"</span> -"+t.ya(this.c.remainingTime()))
},t.Ja=t.t.extend({i:function(e,n){t.t.call(this,e,n)
}}),t.Ja.prototype.ta="Fullscreen",t.Ja.prototype.T=function(){return"vjs-fullscreen-control "+t.t.prototype.T.call(this)
},t.Ja.prototype.r=function(){this.c.isFullscreen()?(this.c.exitFullscreen(),this.xb.innerHTML=this.s("Fullscreen")):(this.c.requestFullscreen(),this.xb.innerHTML=this.s("Non-Fullscreen"))
},t.ob=t.a.extend({i:function(e,n){t.a.call(this,e,n)
}}),t.ob.prototype.l={children:{seekBar:{}}},t.ob.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-progress-control vjs-control"})
},t.bc=t.R.extend({i:function(e,n){t.R.call(this,e,n),e.d("timeupdate",t.bind(this,this.oa)),e.J(t.bind(this,this.oa))
}}),s=t.bc.prototype,s.l={children:{loadProgressBar:{},playProgressBar:{},seekHandle:{}},barName:"playProgressBar",handleName:"seekHandle"},s.Dc="timeupdate",s.e=function(){return t.R.prototype.e.call(this,"div",{className:"vjs-progress-holder","aria-label":"video progress bar"})
},s.oa=function(){var e=this.c.bb?this.c.G.currentTime:this.c.currentTime();
this.b.setAttribute("aria-valuenow",t.round(100*this.Fb(),2)),this.b.setAttribute("aria-valuetext",t.ya(e,this.c.duration()))
},s.Fb=function(){return this.c.currentTime()/this.c.duration()
},s.Za=function(e){t.R.prototype.Za.call(this,e),this.c.bb=f,this.je=!this.c.paused(),this.c.pause()
},s.$a=function(e){e=H(this,e)*this.c.duration(),e==this.c.duration()&&(e-=0.1),this.c.currentTime(e)
},s.Lb=function(e){t.R.prototype.Lb.call(this,e),this.c.bb=l,this.je&&this.c.play()
},s.Nc=function(){this.c.currentTime(this.c.currentTime()+5)
},s.Mc=function(){this.c.currentTime(this.c.currentTime()-5)
},t.lb=t.a.extend({i:function(e,n){t.a.call(this,e,n),e.d("progress",t.bind(this,this.update))
}}),t.lb.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-load-progress",innerHTML:'<span class="vjs-control-text"><span>'+this.s("Loaded")+"</span>: 0%</span>"})
},t.lb.prototype.update=function(){var e,n,r,i,s=this.c.buffered();
e=this.c.duration();
var o,u=this.c;
o=u.buffered(),u=u.duration(),o=o.end(o.length-1),o>u&&(o=u),u=this.b.children,this.b.style.width=100*(o/e||0)+"%";
for(e=0;
e<s.length;
e++){n=s.start(e),r=s.end(e),(i=u[e])||(i=this.b.appendChild(t.e())),i.style.left=100*(n/o||0)+"%",i.style.width=100*((r-n)/o||0)+"%"
}for(e=u.length;
e>s.length;
e--){this.b.removeChild(u[e-1])
}},t.Zb=t.a.extend({i:function(e,n){t.a.call(this,e,n)
}}),t.Zb.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-play-progress",innerHTML:'<span class="vjs-control-text"><span>'+this.s("Progress")+"</span>: 0%</span>"})
},t.La=t.$.extend({i:function(e,n){t.$.call(this,e,n),e.d("timeupdate",t.bind(this,this.fa))
}}),t.La.prototype.defaultValue="00:00",t.La.prototype.e=function(){return t.$.prototype.e.call(this,"div",{className:"vjs-seek-handle","aria-live":"off"})
},t.La.prototype.fa=function(){var e=this.c.bb?this.c.G.currentTime:this.c.currentTime();
this.b.innerHTML='<span class="vjs-control-text">'+t.ya(e,this.c.duration())+"</span>"
},t.rb=t.a.extend({i:function(e,n){t.a.call(this,e,n),e.n&&e.n.featuresVolumeControl===l&&this.m("vjs-hidden"),e.d("loadstart",t.bind(this,function(){e.n.featuresVolumeControl===l?this.m("vjs-hidden"):this.p("vjs-hidden")
}))
}}),t.rb.prototype.l={children:{volumeBar:{}}},t.rb.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-volume-control vjs-control"})
},t.qb=t.R.extend({i:function(e,n){t.R.call(this,e,n),e.d("volumechange",t.bind(this,this.oa)),e.J(t.bind(this,this.oa))
}}),s=t.qb.prototype,s.oa=function(){this.b.setAttribute("aria-valuenow",t.round(100*this.c.volume(),2)),this.b.setAttribute("aria-valuetext",t.round(100*this.c.volume(),2)+"%")
},s.l={children:{volumeLevel:{},volumeHandle:{}},barName:"volumeLevel",handleName:"volumeHandle"},s.Dc="volumechange",s.e=function(){return t.R.prototype.e.call(this,"div",{className:"vjs-volume-bar","aria-label":"volume level"})
},s.$a=function(e){this.c.muted()&&this.c.muted(l),this.c.volume(H(this,e))
},s.Fb=function(){return this.c.muted()?0:this.c.volume()
},s.Nc=function(){this.c.volume(this.c.volume()+0.1)
},s.Mc=function(){this.c.volume(this.c.volume()-0.1)
},t.gc=t.a.extend({i:function(e,n){t.a.call(this,e,n)
}}),t.gc.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-volume-level",innerHTML:'<span class="vjs-control-text"></span>'})
},t.sb=t.$.extend(),t.sb.prototype.defaultValue="00:00",t.sb.prototype.e=function(){return t.$.prototype.e.call(this,"div",{className:"vjs-volume-handle"})
},t.ia=t.t.extend({i:function(e,n){t.t.call(this,e,n),e.d("volumechange",t.bind(this,this.update)),e.n&&e.n.featuresVolumeControl===l&&this.m("vjs-hidden"),e.d("loadstart",t.bind(this,function(){e.n.featuresVolumeControl===l?this.m("vjs-hidden"):this.p("vjs-hidden")
}))
}}),t.ia.prototype.e=function(){return t.t.prototype.e.call(this,"div",{className:"vjs-mute-control vjs-control",innerHTML:'<div><span class="vjs-control-text">'+this.s("Mute")+"</span></div>"})
},t.ia.prototype.r=function(){this.c.muted(this.c.muted()?l:f)
},t.ia.prototype.update=function(){var e=this.c.volume(),n=3;
0===e||this.c.muted()?n=0:0.33>e?n=1:0.67>e&&(n=2),this.c.muted()?this.b.children[0].children[0].innerHTML!=this.s("Unmute")&&(this.b.children[0].children[0].innerHTML=this.s("Unmute")):this.b.children[0].children[0].innerHTML!=this.s("Mute")&&(this.b.children[0].children[0].innerHTML=this.s("Mute"));
for(e=0;
4>e;
e++){t.p(this.b,"vjs-vol-"+e)
}t.m(this.b,"vjs-vol-"+n)
},t.ra=t.M.extend({i:function(e,n){t.M.call(this,e,n),e.d("volumechange",t.bind(this,this.update)),e.n&&e.n.featuresVolumeControl===l&&this.m("vjs-hidden"),e.d("loadstart",t.bind(this,function(){e.n.featuresVolumeControl===l?this.m("vjs-hidden"):this.p("vjs-hidden")
})),this.m("vjs-menu-button")
}}),t.ra.prototype.wa=function(){var e=new t.ha(this.c,{kc:"div"}),n=new t.qb(this.c,t.g.z({vertical:f},this.l.xe));
return n.d("focus",function(){e.m("vjs-lock-showing")
}),n.d("blur",function(){E(e)
}),e.S(n),e
},t.ra.prototype.r=function(){t.ia.prototype.r.call(this),t.M.prototype.r.call(this)
},t.ra.prototype.e=function(){return t.t.prototype.e.call(this,"div",{className:"vjs-volume-menu-button vjs-menu-button vjs-control",innerHTML:'<div><span class="vjs-control-text">'+this.s("Mute")+"</span></div>"})
},t.ra.prototype.update=t.ia.prototype.update,t.ac=t.M.extend({i:function(e,n){t.M.call(this,e,n),this.Sc(),this.Rc(),e.d("loadstart",t.bind(this,this.Sc)),e.d("ratechange",t.bind(this,this.Rc))
}}),s=t.ac.prototype,s.e=function(){var e=t.a.prototype.e.call(this,"div",{className:"vjs-playback-rate vjs-menu-button vjs-control",innerHTML:'<div class="vjs-control-content"><span class="vjs-control-text">'+this.s("Playback Rate")+"</span></div>"});
return this.zc=t.e("div",{className:"vjs-playback-rate-value",innerHTML:1}),e.appendChild(this.zc),e
},s.wa=function(){var e=new t.ha(this.j()),n=this.j().options().playbackRates;
if(n){for(var r=n.length-1;
0<=r;
r--){e.S(new t.nb(this.j(),{rate:n[r]+"x"}))
}}return e
},s.oa=function(){this.v().setAttribute("aria-valuenow",this.j().playbackRate())
},s.r=function(){for(var e=this.j().playbackRate(),t=this.j().options().playbackRates,n=t[0],r=0;
r<t.length;
r++){if(t[r]>e){n=t[r];
break
}}this.j().playbackRate(n)
},s.Sc=function(){ea(this)?this.p("vjs-hidden"):this.m("vjs-hidden")
},s.Rc=function(){ea(this)&&(this.zc.innerHTML=this.j().playbackRate()+"x")
},t.nb=t.I.extend({kc:"button",i:function(e,n){var r=this.label=n.rate,i=this.Gc=parseFloat(r,10);
n.label=r,n.selected=1===i,t.I.call(this,e,n),this.j().d("ratechange",t.bind(this,this.update))
}}),t.nb.prototype.r=function(){t.I.prototype.r.call(this),this.j().playbackRate(this.Gc)
},t.nb.prototype.update=function(){this.selected(this.j().playbackRate()==this.Gc)
},t.Ka=t.t.extend({i:function(e,n){t.t.call(this,e,n),e.poster()&&this.src(e.poster()),(!e.poster()||!e.controls())&&this.W(),e.d("posterchange",t.bind(this,function(){this.src(e.poster())
})),P(e)||e.d("play",t.bind(this,this.W))
}});
var fa="backgroundSize" in t.A.style;
t.Ka.prototype.e=function(){var e=t.e("div",{className:"vjs-poster",tabIndex:-1});
return fa||e.appendChild(t.e("img")),e
},t.Ka.prototype.src=function(e){var t=this.v();
e!==b&&(fa?t.style.backgroundImage='url("'+e+'")':t.firstChild.src=e)
},t.Ka.prototype.r=function(){this.j().controls()&&this.c.play()
},t.Yb=t.a.extend({i:function(e,n){t.a.call(this,e,n)
}}),t.Yb.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-loading-spinner"})
},t.fb=t.t.extend(),t.fb.prototype.e=function(){return t.t.prototype.e.call(this,"div",{className:"vjs-big-play-button",innerHTML:'<span aria-hidden="true"></span>',"aria-label":"play video"})
},t.fb.prototype.r=function(){this.c.play()
},t.jb=t.a.extend({i:function(e,n){t.a.call(this,e,n),this.update(),e.d("error",t.bind(this,this.update))
}}),t.jb.prototype.e=function(){var e=t.a.prototype.e.call(this,"div",{className:"vjs-error-display"});
return this.u=t.e("div"),e.appendChild(this.u),e
},t.jb.prototype.update=function(){this.j().error()&&(this.u.innerHTML=this.s(this.j().error().message))
},t.q=t.a.extend({i:function(e,n,r){n=n||{},n.Ic=l,t.a.call(this,e,n,r),this.featuresProgressEvents||(this.Ac=f,this.Fc=setInterval(t.bind(this,function(){var e=this.j().bufferedPercent();
this.jd!=e&&this.j().k("progress"),this.jd=e,1===e&&clearInterval(this.Fc)
}),500)),this.featuresTimeupdateEvents||(this.Kb=f,this.j().d("play",t.bind(this,this.Qc)),this.j().d("pause",t.bind(this,this.cb)),this.Q("timeupdate",function(){this.featuresTimeupdateEvents=f,ga(this)
}));
var i,s;
s=this,i=this.j(),e=function(){if(i.controls()&&!i.usingNativeControls()){var e;
s.d("mousedown",s.r),s.d("touchstart",function(){e=this.c.userActive()
}),s.d("touchmove",function(){e&&this.j().reportUserActivity()
}),s.d("touchend",function(e){e.preventDefault()
}),G(s),s.d("tap",s.Qd)
}},n=t.bind(s,s.Wd),this.J(e),i.d("controlsenabled",e),i.d("controlsdisabled",n),this.J(function(){this.networkState&&0<this.networkState()&&this.j().k("loadstart")
})
}}),s=t.q.prototype,s.Wd=function(){this.o("tap"),this.o("touchstart"),this.o("touchmove"),this.o("touchleave"),this.o("touchcancel"),this.o("touchend"),this.o("click"),this.o("mousedown")
},s.r=function(e){0===e.button&&this.j().controls()&&(this.j().paused()?this.j().play():this.j().pause())
},s.Qd=function(){this.j().userActive(!this.j().userActive())
},s.Qc=function(){this.lc&&this.cb(),this.lc=setInterval(t.bind(this,function(){this.j().k("timeupdate")
}),250)
},s.cb=function(){clearInterval(this.lc),this.j().k("timeupdate")
},s.dispose=function(){this.Ac&&(this.Ac=l,clearInterval(this.Fc)),this.Kb&&ga(this),t.a.prototype.dispose.call(this)
},s.Pb=function(){this.Kb&&this.j().k("timeupdate")
},s.Kc=m(),t.q.prototype.featuresVolumeControl=f,t.q.prototype.featuresFullscreenResize=l,t.q.prototype.featuresPlaybackRate=l,t.q.prototype.featuresProgressEvents=l,t.q.prototype.featuresTimeupdateEvents=l,t.media={},t.h=t.q.extend({i:function(e,n,r){this.featuresVolumeControl=t.h.ld(),this.featuresPlaybackRate=t.h.kd(),this.movingMediaElementInDOM=!t.Yc,this.featuresProgressEvents=this.featuresFullscreenResize=f,t.q.call(this,e,n,r);
for(r=t.h.kb.length-1;
0<=r;
r--){t.d(this.b,t.h.kb[r],t.bind(this,this.td))
}(n=n.source)&&this.b.currentSrc!==n.src&&(this.b.src=n.src);
if(t.dc&&e.options().nativeControlsForTouch!==l){var i,s,o,u;
i=this,s=this.j(),n=s.controls(),i.b.controls=!!n,o=function(){i.b.controls=f
},u=function(){i.b.controls=l
},s.d("controlsenabled",o),s.d("controlsdisabled",u),n=function(){s.o("controlsenabled",o),s.o("controlsdisabled",u)
},i.d("dispose",n),s.d("usingcustomcontrols",n),s.usingNativeControls(f)
}e.J(function(){this.L&&this.l.autoplay&&this.paused()&&(delete this.L.poster,this.play())
}),this.Fa()
}}),s=t.h.prototype,s.dispose=function(){t.h.Bb(this.b),t.q.prototype.dispose.call(this)
},s.e=function(){var e=this.c,n=e.L,r;
if(!n||this.movingMediaElementInDOM===l){n?(r=n.cloneNode(l),t.h.Bb(n),n=r,e.L=j):(n=t.e("video"),t.Jc(n,t.g.z(e.fe||{},{id:e.id()+"_html5_api","class":"vjs-tech"}))),n.player=e,t.Gb(n,e.v())
}r=["autoplay","preload","loop","muted"];
for(var i=r.length-1;
0<=i;
i--){var s=r[i],o={};
"undefined"!=typeof e.l[s]&&(o[s]=e.l[s]),t.Jc(n,o)
}return n
},s.td=function(e){"error"==e.type&&this.error()?this.j().error(this.error().code):(e.bubbles=l,this.j().k(e))
},s.play=function(){this.b.play()
},s.pause=function(){this.b.pause()
},s.paused=function(){return this.b.paused
},s.currentTime=function(){return this.b.currentTime
},s.Pb=function(e){try{this.b.currentTime=e
}catch(n){t.log(n,"Video is not ready. (Video.js)")
}},s.duration=function(){return this.b.duration||0
},s.buffered=function(){return this.b.buffered
},s.volume=function(){return this.b.volume
},s.ce=function(e){this.b.volume=e
},s.muted=function(){return this.b.muted
},s.$d=function(e){this.b.muted=e
},s.width=function(){return this.b.offsetWidth
},s.height=function(){return this.b.offsetHeight
},s.Da=function(){return"function"==typeof this.b.webkitEnterFullScreen&&(/Android/.test(t.N)||!/Chrome|Mac OS X 10.5/.test(t.N))?f:l
},s.oc=function(){var e=this.b;
"webkitDisplayingFullscreen" in e&&this.Q("webkitbeginfullscreen",t.bind(this,function(){this.c.isFullscreen(f),this.Q("webkitendfullscreen",t.bind(this,function(){this.c.isFullscreen(l),this.c.k("fullscreenchange")
})),this.c.k("fullscreenchange")
})),e.paused&&e.networkState<=e.ke?(this.b.play(),setTimeout(function(){e.pause(),e.webkitEnterFullScreen()
},0)):e.webkitEnterFullScreen()
},s.ud=function(){this.b.webkitExitFullScreen()
},s.src=function(e){if(e===b){return this.b.src
}this.b.src=e
},s.load=function(){this.b.load()
},s.currentSrc=function(){return this.b.currentSrc
},s.poster=function(){return this.b.poster
},s.Kc=function(e){this.b.poster=e
},s.Ca=function(){return this.b.Ca
},s.be=function(e){this.b.Ca=e
},s.autoplay=function(){return this.b.autoplay
},s.Xd=function(e){this.b.autoplay=e
},s.controls=function(){return this.b.controls
},s.loop=function(){return this.b.loop
},s.Zd=function(e){this.b.loop=e
},s.error=function(){return this.b.error
},s.seeking=function(){return this.b.seeking
},s.ended=function(){return this.b.ended
},s.playbackRate=function(){return this.b.playbackRate
},s.ae=function(e){this.b.playbackRate=e
},s.networkState=function(){return this.b.networkState
},t.h.isSupported=function(){try{t.A.volume=0.5
}catch(e){return l
}return !!t.A.canPlayType
},t.h.vb=function(e){try{return !!t.A.canPlayType(e.type)
}catch(n){return""
}},t.h.ld=function(){var e=t.A.volume;
return t.A.volume=e/2+0.1,e!==t.A.volume
},t.h.kd=function(){var e=t.A.playbackRate;
return t.A.playbackRate=e/2+0.1,e!==t.A.playbackRate
};
var V,ha=/^application\/(?:x-|vnd\.apple\.)mpegurl/i,ia=/^video\/mp4/i;
t.h.Cc=function(){4<=t.Tb&&(V||(V=t.A.constructor.prototype.canPlayType),t.A.constructor.prototype.canPlayType=function(e){return e&&ha.test(e)?"maybe":V.call(this,e)
}),t.bd&&(V||(V=t.A.constructor.prototype.canPlayType),t.A.constructor.prototype.canPlayType=function(e){return e&&ia.test(e)?"maybe":V.call(this,e)
})
},t.h.ie=function(){var e=t.A.constructor.prototype.canPlayType;
return t.A.constructor.prototype.canPlayType=V,V=j,e
},t.h.Cc(),t.h.kb="loadstart suspend abort error emptied stalled loadedmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate progress play pause ratechange volumechange".split(" "),t.h.Bb=function(e){if(e){e.player=j;
for(e.parentNode&&e.parentNode.removeChild(e);
e.hasChildNodes();
){e.removeChild(e.firstChild)
}e.removeAttribute("src");
if("function"==typeof e.load){try{e.load()
}catch(t){}}}},t.f=t.q.extend({i:function(e,n,r){t.q.call(this,e,n,r);
var i=n.source;
r=n.parentEl;
var s=this.b=t.e("div",{id:e.id()+"_temp_flash"}),o=e.id()+"_flash_api",u=e.l,u=t.g.z({readyFunction:"videojs.Flash.onReady",eventProxyFunction:"videojs.Flash.onEvent",errorEventProxyFunction:"videojs.Flash.onError",autoplay:u.autoplay,preload:u.Ca,loop:u.loop,muted:u.muted},n.flashVars),a=t.g.z({wmode:"opaque",bgcolor:"#000000"},n.params),o=t.g.z({id:o,name:o,"class":"vjs-tech"},n.attributes);
i&&(i.type&&t.f.Dd(i.type)?(i=t.f.Oc(i.src),u.rtmpConnection=encodeURIComponent(i.wb),u.rtmpStream=encodeURIComponent(i.Qb)):u.src=encodeURIComponent(t.sc(i.src))),t.Gb(s,r),n.startTime&&this.J(function(){this.load(),this.play(),this.currentTime(n.startTime)
}),t.Xc&&this.J(function(){t.d(this.v(),"mousemove",t.bind(this,function(){this.j().k({type:"mousemove",bubbles:l})
}))
}),e.d("stageclick",e.reportUserActivity),this.b=t.f.nc(n.swf,s,u,a,o)
}}),t.f.prototype.dispose=function(){t.q.prototype.dispose.call(this)
},t.f.prototype.play=function(){this.b.vjs_play()
},t.f.prototype.pause=function(){this.b.vjs_pause()
},t.f.prototype.src=function(e){if(e===b){return this.currentSrc()
}t.f.Cd(e)?(e=t.f.Oc(e),this.ue(e.wb),this.ve(e.Qb)):(e=t.sc(e),this.b.vjs_src(e));
if(this.c.autoplay()){var n=this;
setTimeout(function(){n.play()
},0)
}},t.f.prototype.setCurrentTime=function(e){this.Gd=e,this.b.vjs_setProperty("currentTime",e),t.q.prototype.Pb.call(this)
},t.f.prototype.currentTime=function(){return this.seeking()?this.Gd||0:this.b.vjs_getProperty("currentTime")
},t.f.prototype.currentSrc=function(){var e=this.b.vjs_getProperty("currentSrc");
if(e==j){var n=this.rtmpConnection(),r=this.rtmpStream();
n&&r&&(e=t.f.de(n,r))
}return e
},t.f.prototype.load=function(){this.b.vjs_load()
},t.f.prototype.poster=function(){this.b.vjs_getProperty("poster")
},t.f.prototype.setPoster=m(),t.f.prototype.buffered=function(){return t.zb(0,this.b.vjs_getProperty("buffered"))
},t.f.prototype.Da=q(l),t.f.prototype.oc=q(l);
var ka=t.f.prototype,W="rtmpConnection rtmpStream preload defaultPlaybackRate playbackRate autoplay loop mediaGroup controller controls volume muted defaultMuted".split(" "),ma="error networkState readyState seeking initialTime duration startOffsetTime paused played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks".split(" "),X;
for(X=0;
X<W.length;
X++){la(W[X]),ja()
}for(X=0;
X<ma.length;
X++){la(ma[X])
}t.f.isSupported=function(){return 10<=t.f.version()[0]
},t.f.vb=function(e){if(!e.type){return""
}e=e.type.replace(/;.*/,"").toLowerCase();
if(e in t.f.wd||e in t.f.Pc){return"maybe"
}},t.f.wd={"video/flv":"FLV","video/x-flv":"FLV","video/mp4":"MP4","video/m4v":"MP4"},t.f.Pc={"rtmp/mp4":"MP4","rtmp/flv":"FLV"},t.f.onReady=function(e){var n;
if(n=(e=t.v(e))&&e.parentNode&&e.parentNode.player){e.player=n,t.f.checkReady(n.n)
}},t.f.checkReady=function(e){e.v()&&(e.v().vjs_getProperty?e.Fa():setTimeout(function(){t.f.checkReady(e)
},50))
},t.f.onEvent=function(e,n){t.v(e).player.k(n)
},t.f.onError=function(e,n){var r=t.v(e).player,i="FLASH: "+n;
"srcnotfound"==n?r.error({code:4,message:i}):r.error(i)
},t.f.version=function(){var e="0,0,0";
try{e=(new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version").replace(/\D+/g,",").match(/^,?(.+),?$/)[1]
}catch(t){try{navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin&&(e=(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g,",").match(/^,?(.+),?$/)[1])
}catch(n){}}return e.split(",")
},t.f.nc=function(e,n,r,i,s){e=t.f.yd(e,r,i,s),e=t.e("div",{innerHTML:e}).childNodes[0],r=n.parentNode,n.parentNode.replaceChild(e,n);
var o=r.childNodes[0];
return setTimeout(function(){o.style.display="block"
},1000),e
},t.f.yd=function(e,n,r,i){var s="",o="",u="";
return n&&t.g.Y(n,function(e,t){s+=e+"="+t+"&amp;"
}),r=t.g.z({movie:e,flashvars:s,allowScriptAccess:"always",allowNetworking:"all"},r),t.g.Y(r,function(e,t){o+='<param name="'+e+'" value="'+t+'" />'
}),i=t.g.z({data:e,width:"100%",height:"100%"},i),t.g.Y(i,function(e,t){u+=e+'="'+t+'" '
}),'<object type="application/x-shockwave-flash"'+u+">"+o+"</object>"
},t.f.de=function(e,t){return e+"&"+t
},t.f.Oc=function(e){var t={wb:"",Qb:""};
if(!e){return t
}var n=e.indexOf("&"),r;
return -1!==n?r=n+1:(n=r=e.lastIndexOf("/")+1,0===n&&(n=r=e.length)),t.wb=e.substring(0,n),t.Qb=e.substring(r,e.length),t
},t.f.Dd=function(e){return e in t.f.Pc
},t.f.dd=/^rtmp[set]?:\/\//i,t.f.Cd=function(e){return t.f.dd.test(e)
},t.cd=t.a.extend({i:function(e,n,r){t.a.call(this,e,n,r);
if(!e.l.sources||0===e.l.sources.length){n=0;
for(r=e.l.techOrder;
n<r.length;
n++){var i=t.ba(r[n]),s=window.videojs[i];
if(s&&s.isSupported()){Q(e,i);
break
}}}else{e.src(e.l.sources)
}}}),t.Player.prototype.textTracks=function(){return this.Ea=this.Ea||[]
},t.B=t.a.extend({i:function(e,n){t.a.call(this,e,n),this.U=n.id||"vjs_"+n.kind+"_"+n.language+"_"+t.w++,this.Lc=n.src,this.qd=n["default"]||n.dflt,this.ge=n.title,this.Ua=n.srclang,this.Ed=n.label,this.ca=[],this.tb=[],this.ma=this.na=0
}}),s=t.B.prototype,s.K=p("H"),s.src=p("Lc"),s.Ab=p("qd"),s.title=p("ge"),s.language=p("Ua"),s.label=p("Ed"),s.md=p("ca"),s.ed=p("tb"),s.readyState=p("na"),s.mode=p("ma"),s.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-"+this.H+" vjs-text-track"})
},s.show=function(){oa(this),this.ma=2,t.a.prototype.show.call(this)
},s.W=function(){oa(this),this.ma=1,t.a.prototype.W.call(this)
},s.disable=function(){2==this.ma&&this.W(),this.c.o("timeupdate",t.bind(this,this.update,this.U)),this.c.o("ended",t.bind(this,this.reset,this.U)),this.reset(),this.c.ka("textTrackDisplay").removeChild(this),this.ma=0
},s.load=function(){0===this.na&&(this.na=1,t.get(this.Lc,t.bind(this,this.Td),t.bind(this,this.Jd)))
},s.Jd=function(e){this.error=e,this.na=3,this.k("error")
},s.Td=function(e){var n,r;
e=e.split("\n");
for(var i="",s=1,o=e.length;
s<o;
s++){if(i=t.trim(e[s])){-1==i.indexOf("-->")?(n=i,i=t.trim(e[++s])):n=this.ca.length,n={id:n,index:this.ca.length},r=i.split(/[\t ]+/),n.startTime=pa(r[0]),n.xa=pa(r[2]);
for(r=[];
e[++s]&&(i=t.trim(e[s]));
){r.push(i)
}n.text=r.join("<br/>"),this.ca.push(n)
}}this.na=2,this.k("loaded")
},s.update=function(){if(0<this.ca.length){var e=this.c.options().trackTimeOffset||0,e=this.c.currentTime()+e;
if(this.Ob===b||e<this.Ob||this.Wa<=e){var t=this.ca,n=this.c.duration(),r=0,i=l,s=[],o,u,a,c;
e>=this.Wa||this.Wa===b?c=this.Db!==b?this.Db:0:(i=f,c=this.Jb!==b?this.Jb:t.length-1);
for(;
;
){a=t[c];
if(a.xa<=e){r=Math.max(r,a.xa),a.Na&&(a.Na=l)
}else{if(e<a.startTime){if(n=Math.min(n,a.startTime),a.Na&&(a.Na=l),!i){break
}}else{i?(s.splice(0,0,a),u===b&&(u=c),o=c):(s.push(a),o===b&&(o=c),u=c),n=Math.min(n,a.xa),r=Math.max(r,a.startTime),a.Na=f
}}if(i){if(0===c){break
}c--
}else{if(c===t.length-1){break
}c++
}}this.tb=s,this.Wa=n,this.Ob=r,this.Db=o,this.Jb=u,o=this.tb,u="",e=0;
for(t=o.length;
e<t;
e++){u+='<span class="vjs-tt-cue">'+o[e].text+"</span>"
}this.b.innerHTML=u,this.k("cuechange")
}}},s.reset=function(){this.Wa=0,this.Ob=this.c.duration(),this.Jb=this.Db=0
},t.Vb=t.B.extend(),t.Vb.prototype.H="captions",t.cc=t.B.extend(),t.cc.prototype.H="subtitles",t.Wb=t.B.extend(),t.Wb.prototype.H="chapters",t.ec=t.a.extend({i:function(e,n,r){t.a.call(this,e,n,r);
if(e.l.tracks&&0<e.l.tracks.length){n=this.c,e=e.l.tracks;
for(var i=0;
i<e.length;
i++){r=e[i],na(n,r.kind,r.label,r.language,r)
}}}}),t.ec.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-text-track-display"})
},t.aa=t.I.extend({i:function(e,n){var r=this.ea=n.track;
n.label=r.label(),n.selected=r.Ab(),t.I.call(this,e,n),this.c.d(r.K()+"trackchange",t.bind(this,this.update))
}}),t.aa.prototype.r=function(){t.I.prototype.r.call(this),Y(this.c,this.ea.U,this.ea.K())
},t.aa.prototype.update=function(){this.selected(2==this.ea.mode())
},t.mb=t.aa.extend({i:function(e,n){n.track={K:function(){return n.kind
},j:e,label:function(){return n.kind+" off"
},Ab:q(l),mode:q(l)},t.aa.call(this,e,n),this.selected(f)
}}),t.mb.prototype.r=function(){t.aa.prototype.r.call(this),Y(this.c,this.ea.U,this.ea.K())
},t.mb.prototype.update=function(){for(var e=this.c.textTracks(),t=0,n=e.length,r,i=f;
t<n;
t++){r=e[t],r.K()==this.ea.K()&&2==r.mode()&&(i=l)
}this.selected(i)
},t.V=t.M.extend({i:function(e,n){t.M.call(this,e,n),1>=this.P.length&&this.W()
}}),t.V.prototype.va=function(){var e=[],n;
e.push(new t.mb(this.c,{kind:this.H}));
for(var r=0;
r<this.c.textTracks().length;
r++){n=this.c.textTracks()[r],n.K()===this.H&&e.push(new t.aa(this.c,{track:n}))
}return e
},t.Ga=t.V.extend({i:function(e,n,r){t.V.call(this,e,n,r),this.b.setAttribute("aria-label","Captions Menu")
}}),t.Ga.prototype.H="captions",t.Ga.prototype.ta="Captions",t.Ga.prototype.className="vjs-captions-button",t.Ma=t.V.extend({i:function(e,n,r){t.V.call(this,e,n,r),this.b.setAttribute("aria-label","Subtitles Menu")
}}),t.Ma.prototype.H="subtitles",t.Ma.prototype.ta="Subtitles",t.Ma.prototype.className="vjs-subtitles-button",t.Ha=t.V.extend({i:function(e,n,r){t.V.call(this,e,n,r),this.b.setAttribute("aria-label","Chapters Menu")
}}),s=t.Ha.prototype,s.H="chapters",s.ta="Chapters",s.className="vjs-chapters-button",s.va=function(){for(var e=[],n,r=0;
r<this.c.textTracks().length;
r++){n=this.c.textTracks()[r],n.K()===this.H&&e.push(new t.aa(this.c,{track:n}))
}return e
},s.wa=function(){for(var e=this.c.textTracks(),n=0,r=e.length,i,s,o=this.P=[];
n<r;
n++){if(i=e[n],i.K()==this.H){if(0!==i.readyState()){s=i;
break
}i.load(),i.d("loaded",t.bind(this,this.wa))
}}e=this.Aa,e===b&&(e=new t.ha(this.c),e.ja().appendChild(t.e("li",{className:"vjs-menu-title",innerHTML:t.ba(this.H),ee:-1})));
if(s){i=s.ca;
for(var u,n=0,r=i.length;
n<r;
n++){u=i[n],u=new t.gb(this.c,{track:s,cue:u}),o.push(u),e.S(u)
}this.S(e)
}return 0<this.P.length&&this.show(),e
},t.gb=t.I.extend({i:function(e,n){var r=this.ea=n.track,i=this.cue=n.cue,s=e.currentTime();
n.label=i.text,n.selected=i.startTime<=s&&s<i.xa,t.I.call(this,e,n),r.d("cuechange",t.bind(this,this.update))
}}),t.gb.prototype.r=function(){t.I.prototype.r.call(this),this.c.currentTime(this.cue.startTime),this.update(this.cue.startTime)
},t.gb.prototype.update=function(){var e=this.cue,t=this.c.currentTime();
this.selected(e.startTime<=t&&t<e.xa)
},t.g.z(t.Ia.prototype.l.children,{subtitlesButton:{},captionsButton:{},chaptersButton:{}});
if("undefined"!=typeof window.JSON&&"function"===window.JSON.parse){t.JSON=window.JSON
}else{t.JSON={};
var Z=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
t.JSON.parse=function(a,c){function d(e,t){var n,r,i=e[t];
if(i&&"object"==typeof i){for(n in i){Object.prototype.hasOwnProperty.call(i,n)&&(r=d(i,n),r!==b?i[n]=r:delete i[n])
}}return c.call(e,t,i)
}var e;
a=String(a),Z.lastIndex=0,Z.test(a)&&(a=a.replace(Z,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)
}));
if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){return e=eval("("+a+")"),"function"==typeof c?d({"":e},""):e
}throw new SyntaxError("JSON.parse(): invalid or malformed JSON data")
}
}t.ic=function(){var e,n,r,i;
e=document.getElementsByTagName("video"),n=document.getElementsByTagName("audio");
var s=[];
if(e&&0<e.length){r=0;
for(i=e.length;
r<i;
r++){s.push(e[r])
}}if(n&&0<n.length){r=0;
for(i=n.length;
r<i;
r++){s.push(n[r])
}}if(s&&0<s.length){r=0;
for(i=s.length;
r<i;
r++){if(!(n=s[r])||!n.getAttribute){t.ub();
break
}n.player===b&&(e=n.getAttribute("data-setup"),e!==j&&videojs(n))
}}else{t.Tc||t.ub()
}},t.ub=function(){setTimeout(t.ic,1)
},"complete"===document.readyState?t.Tc=f:t.Q(window,"load",function(){t.Tc=f
}),t.ub(),t.Vd=function(e,n){t.Player.prototype[e]=n
};
var qa=this;
$("videojs",t),$("_V_",t),$("videojs.options",t.options),$("videojs.players",t.Ba),$("videojs.TOUCH_ENABLED",t.dc),$("videojs.cache",t.ua),$("videojs.Component",t.a),t.a.prototype.player=t.a.prototype.j,t.a.prototype.options=t.a.prototype.options,t.a.prototype.init=t.a.prototype.i,t.a.prototype.dispose=t.a.prototype.dispose,t.a.prototype.createEl=t.a.prototype.e,t.a.prototype.contentEl=t.a.prototype.ja,t.a.prototype.el=t.a.prototype.v,t.a.prototype.addChild=t.a.prototype.S,t.a.prototype.getChild=t.a.prototype.ka,t.a.prototype.getChildById=t.a.prototype.xd,t.a.prototype.children=t.a.prototype.children,t.a.prototype.initChildren=t.a.prototype.vc,t.a.prototype.removeChild=t.a.prototype.removeChild,t.a.prototype.on=t.a.prototype.d,t.a.prototype.off=t.a.prototype.o,t.a.prototype.one=t.a.prototype.Q,t.a.prototype.trigger=t.a.prototype.k,t.a.prototype.triggerReady=t.a.prototype.Fa,t.a.prototype.show=t.a.prototype.show,t.a.prototype.hide=t.a.prototype.W,t.a.prototype.width=t.a.prototype.width,t.a.prototype.height=t.a.prototype.height,t.a.prototype.dimensions=t.a.prototype.rd,t.a.prototype.ready=t.a.prototype.J,t.a.prototype.addClass=t.a.prototype.m,t.a.prototype.removeClass=t.a.prototype.p,t.a.prototype.buildCSSClass=t.a.prototype.T,t.a.prototype.localize=t.a.prototype.s,t.Player.prototype.ended=t.Player.prototype.ended,t.Player.prototype.enterFullWindow=t.Player.prototype.pc,t.Player.prototype.exitFullWindow=t.Player.prototype.Cb,t.Player.prototype.preload=t.Player.prototype.Ca,t.Player.prototype.remainingTime=t.Player.prototype.remainingTime,t.Player.prototype.supportsFullScreen=t.Player.prototype.Da,t.Player.prototype.currentType=t.Player.prototype.nd,t.Player.prototype.requestFullScreen=t.Player.prototype.requestFullScreen,t.Player.prototype.requestFullscreen=t.Player.prototype.requestFullscreen,t.Player.prototype.cancelFullScreen=t.Player.prototype.cancelFullScreen,t.Player.prototype.exitFullscreen=t.Player.prototype.exitFullscreen,t.Player.prototype.isFullScreen=t.Player.prototype.isFullScreen,t.Player.prototype.isFullscreen=t.Player.prototype.isFullscreen,$("videojs.MediaLoader",t.cd),$("videojs.TextTrackDisplay",t.ec),$("videojs.ControlBar",t.Ia),$("videojs.Button",t.t),$("videojs.PlayToggle",t.$b),$("videojs.FullscreenToggle",t.Ja),$("videojs.BigPlayButton",t.fb),$("videojs.LoadingSpinner",t.Yb),$("videojs.CurrentTimeDisplay",t.hb),$("videojs.DurationDisplay",t.ib),$("videojs.TimeDivider",t.fc),$("videojs.RemainingTimeDisplay",t.pb),$("videojs.LiveDisplay",t.Xb),$("videojs.ErrorDisplay",t.jb),$("videojs.Slider",t.R),$("videojs.ProgressControl",t.ob),$("videojs.SeekBar",t.bc),$("videojs.LoadProgressBar",t.lb),$("videojs.PlayProgressBar",t.Zb),$("videojs.SeekHandle",t.La),$("videojs.VolumeControl",t.rb),$("videojs.VolumeBar",t.qb),$("videojs.VolumeLevel",t.gc),$("videojs.VolumeMenuButton",t.ra),$("videojs.VolumeHandle",t.sb),$("videojs.MuteToggle",t.ia),$("videojs.PosterImage",t.Ka),$("videojs.Menu",t.ha),$("videojs.MenuItem",t.I),$("videojs.MenuButton",t.M),$("videojs.PlaybackRateMenuButton",t.ac),t.M.prototype.createItems=t.M.prototype.va,t.V.prototype.createItems=t.V.prototype.va,t.Ha.prototype.createItems=t.Ha.prototype.va,$("videojs.SubtitlesButton",t.Ma),$("videojs.CaptionsButton",t.Ga),$("videojs.ChaptersButton",t.Ha),$("videojs.MediaTechController",t.q),t.q.prototype.featuresVolumeControl=t.q.prototype.re,t.q.prototype.featuresFullscreenResize=t.q.prototype.ne,t.q.prototype.featuresPlaybackRate=t.q.prototype.oe,t.q.prototype.featuresProgressEvents=t.q.prototype.pe,t.q.prototype.featuresTimeupdateEvents=t.q.prototype.qe,t.q.prototype.setPoster=t.q.prototype.Kc,$("videojs.Html5",t.h),t.h.Events=t.h.kb,t.h.isSupported=t.h.isSupported,t.h.canPlaySource=t.h.vb,t.h.patchCanPlayType=t.h.Cc,t.h.unpatchCanPlayType=t.h.ie,t.h.prototype.setCurrentTime=t.h.prototype.Pb,t.h.prototype.setVolume=t.h.prototype.ce,t.h.prototype.setMuted=t.h.prototype.$d,t.h.prototype.setPreload=t.h.prototype.be,t.h.prototype.setAutoplay=t.h.prototype.Xd,t.h.prototype.setLoop=t.h.prototype.Zd,t.h.prototype.enterFullScreen=t.h.prototype.oc,t.h.prototype.exitFullScreen=t.h.prototype.ud,t.h.prototype.playbackRate=t.h.prototype.playbackRate,t.h.prototype.setPlaybackRate=t.h.prototype.ae,$("videojs.Flash",t.f),t.f.isSupported=t.f.isSupported,t.f.canPlaySource=t.f.vb,t.f.onReady=t.f.onReady,t.f.embed=t.f.nc,t.f.version=t.f.version,$("videojs.TextTrack",t.B),t.B.prototype.label=t.B.prototype.label,t.B.prototype.kind=t.B.prototype.K,t.B.prototype.mode=t.B.prototype.mode,t.B.prototype.cues=t.B.prototype.md,t.B.prototype.activeCues=t.B.prototype.ed,$("videojs.CaptionsTrack",t.Vb),$("videojs.SubtitlesTrack",t.cc),$("videojs.ChaptersTrack",t.Wb),$("videojs.autoSetup",t.ic),$("videojs.plugin",t.Vd),$("videojs.createTimeRange",t.zb),$("videojs.util",t.ga),t.ga.mergeOptions=t.ga.Va,t.addLanguage=t.fd
}(),define("interactive/js/ui/video/Video",["can","videojs"],function(e){return e.Control.extend({},{init:function(){this.video=this.element.attr("id"),this.videoContainer=this.element.parent().parent(),this.marqueeBackground=this.videoContainer.find(".marquee-background"),this.playButton=this.element.parent().prev(".vjs-big-play-button"),this.resize(),this.play()
},resize:function(){function n(){t.element.each(function(){var n=e.$(this).width(),r=e.$(this).height(),i=n/r,s=e.$(this).parent().width(),o=Math.round(s/i);
t.videoContainer.css("height",o),e.$(this).attr("height",o).parent().css("height",o+"px").parent().css("height",o+"px"),e.$(t.marqueeBackground).css("height",o+"px")
})
}var t=this;
e.$(document).ready(function(){window.videojs(t.video),n()
}),e.$(window).bind("resize",function(){t.element.each(function(){e.$(this).attr("height",""),n()
})
})
},play:function(){var e=this;
this.playButton.bind("click",function(){window.videojs(e.video).play(),e.pause()
})
},pause:function(){var t=this;
e.$(window).bind("keyup",function(n){n.which===27&&t.element.parent().hasClass("vjs-playing")&&(window.videojs(t.video).pause(),e.$(window).unbind("keyup"))
})
}})
}),define("interactive/js/ui/video/SeedVideo",["linseed!./Video"],function(e){return e("seed-video").seedEach()
}),define("interactive/js/ui",["module","jquery","can/route","./ui/anchornav/SeedAnchorNav","./ui/segmentnav/SeedSegmentNav","./ui/carousel/SeedCarousel","./ui/footer/SeedFooter","./ui/hover/SeedHover","./ui/marquee/SeedMarquee","./ui/modal/SeedModal","./ui/promo/SeedPromo","./ui/responsive-nav/SeedRespNav","./ui/ruler/SeedRuler","./ui/search/SeedSearch","./ui/socialshare/SeedSocialShare","./ui/tabs/SeedTabs","./ui/treelist/SeedTreeList","./ui/detailslist/SeedDetailsList","./ui/video/SeedVideo"],function(e,t,n){return t(function(){n.ready()
}),{name:e.id}
}),define("interactive",["module","interactive/js/http","interactive/js/observer","interactive/js/store","interactive/js/ui"],function(e){return{name:e.id}
}),define("layout/js/grid/initFluidGrid",["can"],function(e){e.$(function(t){e.$('#demoGrid [class*="fa-"]').click(function(){e.$("body").toggleClass("fixed","fluid"),e.$('#demoGrid [class*="fa-"]').toggleClass("fa-compress","fa-expand"),e.$(".site-header").toggleClass("fluid")
})
})
}),define("layout/js/grid/SeedFluidGrid",["linseed!./initFluidGrid"],function(e){return e("seed-grid").seed()
}),define("layout/js/background/Background",["can"],function(e){return e.Control.extend({defaults:{dynSheetTitle:"acedynamic"}},{init:function(){this.options.backgroundImgURL=this.element.data("background"),this.options.selector=this.element.data("background-selector"),this.options.position=this.element.data("background-position"),this.options.addBackground="background-image: url("+this.options.backgroundImgURL+")"
},findStyleSheet:function(e){var t=document.styleSheets,n=t.length-1;
do{var r=t[n].title===e;
if(r){return t[n]
}n--
}while(n)
},createStyleSheet:function(){var e=document.createElement("style");
return e.title=this.options.dynSheetTitle,e.type="text/css",e.appendChild(document.createTextNode("")),document.querySelector("head").appendChild(e),this.findStyleSheet(e.title)
},addCSSRule:function(e,t,n,r){e&&e.insertRule?e.insertRule(t+"{"+n+"}",r):e&&e.addRule(t,n,r)
},"{window} load":function(){var e=this.findStyleSheet(this.options.dynSheetTitle),t=e!==undefined?e:this.createStyleSheet(),n=t&&t.title===this.options.dynSheetTitle?t:"",r=n?n.cssRules.length:0;
this.addCSSRule(t,this.options.selector,this.options.addBackground,r),this.options.position&&n&&(t.cssRules[r].style.backgroundPosition=this.options.position)
}})
}),define("layout/js/background/SeedBackground",["linseed!./Background"],function(e){return e("seed-background").seedEach()
}),define("layout",["module","layout/js/grid/SeedFluidGrid","layout/js/background/SeedBackground"],function(e){return{name:e.id}
}),define("tools/services/Entitlements",["can"],function(e){return e.Control.extend({defaults:{protocol:"https://",entitleURL:".licenses.adobe.com/aents/aents/v1/entitlements",freeApps:["ExtendScriptToolkit","GamingSdk","PreludeLiveLogger"],freeSignedInApps:["StoryPlus","PhoneGapBuild"],status:"free",debug:!1}},{init:function(){this.options.debug&&console.log("----------------------------------------Entitlements--------------------------------------------------");
var t=this;
this.body=e.$("body"),typeof this.products=="undefined"&&(this.products=[]),this.addFreeApps(this.options.freeApps),this.body.on("adobeIMS_SignIn",function(){window.localStorage.removeItem("aceui_entitlements"),t.options.debug&&console.log("Clearing Entitlements on sign in."),t.options.debug&&console.log("window.localStorage.aceui_entitlements:",window.localStorage.aceui_entitlements)
})
},addFreeApps:function(e){this.products.push(e)
},check:function(){var t=this;
try{var n=window.adobeGnavProps.ImsJS=="-stg1"?"na2m-stg2":"lm",r="<Request><pguid>"+window.adobeIMS._profile.userId+"</pguid><AccessToken>"+window.adobeIMS.getAccessToken()+"</AccessToken></Request>";
e.$.ajax({url:t.options.protocol+n+t.options.entitleURL,type:"POST",data:r,contentType:"application/xml",dataType:"xml"}).success(function(e,n,r){t.parseXML(e,n,r),t.options.debug&&console.log("setting entitlements clear trigger on logout"),t.removeEntitlements()
})
}catch(i){t.options.debug&&console.log("Error from Entitlements check:",i)
}},parseXML:function(t,n,r){this.options.debug&&console.log("Entitlements Data Complete:",t);
var i=e.$.parseXML(r.responseText),s=e.$(i),o=s.find("ReturnCode").text();
if(o=="SUCCESS"){var u=s.find("Leids").find("leid");
this.options.debug&&(console.log("xml values:",r),console.log("ReturnCode:",o),console.log("Leids:",u),console.log("Leids.length:",u.length)),this.entitleArray(u),this.options.debug&&console.log("Parsed products:",this.products)
}},entitleArray:function(e){for(var t=0;
t<e.length;
t++){if(e[t].textContent=="1"){this.options.debug&&console.log("leids values:",e[t].textContent);
var n=e[t].getAttribute("name").replace("V6{}","").replace("V7{}","").replace(/-.*$/,"");
this.options.debug&&console.log("Item name:",n+"\n\r"),this.products.indexOf(n)==-1&&this.products.push(n)
}}this.products.push(this.options.freeSignedInApps),this.saveProducts()
},saveProducts:function(){window.localStorage.aceui_entitlements=this.products,this.body.trigger("aceui-Entitlements"),this.options.debug&&console.log("Saving entitlements:",window.localStorage.aceui_entitlements)
},removeEntitlements:function(){var e=this;
this.body.on("adobeGNav:SignOut",function(){window.localStorage.removeItem("aceui_entitlements"),e.options.debug&&console.log("signed out!")
}),this.body.trigger("aceui-Entitlements")
}})
}),define("tools/services/Subscriber",["can","./Entitlements"],function(e,t){return e.Control.extend({defaults:{status:"free",freeacount:"CS_LVL_1",subscriber:"CS_LVL_2",disabled:"DISABLED",closed:"CLOSED",active:"ACTIVE",serviceCode:"creative_cloud",contextServiceCode:["cce_complete","cce_select","cce_single_app"],teamAdmin:"GRP_ADMIN",enterpriseAdmin:"Enterprise",storageQuota:"0",level1:!1,isTeamAdmin:!1,isEnterpriseAdmin:!1,debug:!1}},{init:function(){this.options.debug&&console.log("----------------------------------------Subscriber--------------------------------------------------"),this.entitlements=new t,typeof window.adobeIMS=="object"&&typeof window.adobeIMS._profile=="object"&&window.adobeIMS._profile!=null?(this.profile=window.adobeIMS._profile,this.profileContext=this.profile.projectedProductContext,this.serviceAccounts=this.profile.serviceAccounts,this.checkLogin()):(this.options.debug&&console.log("Not logged in, checking Free Entitlements"),this.entitlements.saveProducts())
},checkLogin:function(){this.profile!=null?(this.checkServiceAccounts(),this.checkServiceResponse==1?(this.options.status="paid",this.options.debug&&console.log("Paid Personal Subscriber: ",this.options.status)):(this.checkProductContext(),this.checkProductContextResponse==1&&(this.options.status="paid-org",this.options.debug&&console.log("Paid Org Subscriber: ",this.options.status))),this.checkOrg(),this.checkOrgResponse==1?(this.options.status="paid-org",this.options.debug&&console.log("Paid Org Subscriber: ",this.options.status)):this.options.level1==1&&this.profileContext.length==0?(this.options.status="deprovisioned",this.options.debug&&console.log("Deprovisioned account: ",this.options.status)):this.options.debug&&console.log("Free Account: ",this.options.status)):this.options.debug&&console.log("Not logged in");
if(this.options.debug){var e=[this.checkServiceResponse,this.checkProductContextResponse,this.checkOrgResponse];
console.log(e)
}},checkServiceAccounts:function(){if(this.serviceAccounts!=null){this.options.debug&&(console.log("Found serviceAccounts"),console.log("size of serviceAccounts: ",this.serviceAccounts.length));
for(var e=0;
e<this.serviceAccounts.length;
e++){if(this.parseServiceAccounts(this.serviceAccounts[e])==1){this.options.debug&&console.log("running parseServiceAccounts #",e);
var t=null;
t=this.checkState(this.serviceAccounts[e]),this.options.debug&&console.log("service status:",t),t==1&&(this.options.debug&&console.log("serviceAccounts checkState returned true"),this.checkServiceResponse=!0)
}if(this.serviceAccounts[e].params.length>0){for(var n=0;
n<this.serviceAccounts[e].params.length;
n++){this.serviceAccounts[e].params[n].pn=="storage_quota"&&(this.options.storageQuota=this.serviceAccounts[e].params[n].pv,this.options.debug&&console.log("Storage Quota:",this.options.storageQuota))
}}}}else{this.options.debug&&console.log("checkServiceAccounts is false"),this.checkServiceResponse=!1
}return this.checkServiceResponse
},parseServiceAccounts:function(e){return this.options.debug&&console.log("Running parseServiceAccounts: ",e),e.serviceCode==this.options.serviceCode&&e.serviceStatus==this.options.active
},checkProductContext:function(){if(this.profileContext==null||this.profileContext==""){return this.options.debug&&console.log("projectedProductContext is false"),!1
}this.options.debug&&(console.log("Found projectedProductContext"),console.log("size of profileContext: ",this.profileContext.length));
for(var e=0;
e<this.profileContext.length;
e++){this.options.debug&&console.log("running profileContext #",e);
var t=null,n=null;
t=this.parseContext(this.profileContext[e].prodCtx),this.options.debug&&console.log("service context:",t),t==1&&(this.options.debug&&console.log("context true, running state"),n=this.checkState(this.profileContext[e].prodCtx),n==1&&(this.options.debug&&console.log("profileContext checkState returned true"),this.checkProductContextResponse=!0))
}},parseContext:function(t){this.options.debug&&console.log("running parseContext",t),this.options.debug&&console.log("Looking for "+t.serviceCode+" inside of ",this.options.contextServiceCode);
var n=null;
return e.$.inArray(t.serviceCode,this.options.contextServiceCode)!=-1?(this.options.debug&&console.log("Found "+t.serviceCode+" in the Array"),n=t.statusCode==this.options.active):(this.options.debug&&console.log("parseContext is false"),n=!1),n
},checkState:function(e){this.options.debug&&console.log("Checking State of Subscription...");
var t=null;
return typeof e=="object"?e.serviceLevel==this.options.subscriber?(this.options.debug&&console.log("Paid account"),t=!0):e.serviceLevel==this.options.freeacount&&(this.options.debug&&console.log("Level 1 account"),this.options.level1=!0,t=!1):(this.options.debug&&console.log("Free Account"),t=!1),t
},checkOrg:function(){this.options.debug&&console.log("Check for an Organization");
var t=this;
e.$.ajax({url:"https://adobeid-na1"+window.adobeGnavProps.ImsJS+".services.adobe.com/ims/organizations/v2",dataType:"jsonp",data:{client_id:window.adobeid.client_id,bearer_token:window.adobeIMS.getAccessToken()}}).success(function(e){if(e.constructor===Array){for(var n=0;
n<e.length;
n++){var r=e[n];
t.options.debug&&(console.log("Org data:",e),console.log("data.error_flag:",e.error_flag)),typeof r.error_flag=="undefined"&&typeof r=="object"?(t.checkOrgName(r),t.checkTeamAdmin(r),t.options.isTeamAdmin&&t.checkEnterpriseAdmin(r)):t.options.debug&&console.log("No associated Org")
}}}).done(function(){e.$("body").trigger("aceui-OrgReady"),t.checkEntitlements()
})
},checkOrgName:function(e){e.orgName!=null&&e.orgName!=""?this.checkOrgResponse=!0:this.options.debug&&console.log("checkOrg is false")
},checkTeamAdmin:function(e){for(var t=0;
t<e.groups.length;
t++){var n=e.groups[t];
typeof n=="object"&&n.role==this.options.teamAdmin?(this.options.isTeamAdmin=!0,this.options.debug&&console.log("Team Admin is TRUE")):this.options.debug&&console.log("Team Admin is false")
}},checkEnterpriseAdmin:function(e){typeof e.orgType!="undefined"&&e.orgType.toLowerCase()==this.options.enterpriseAdmin.toLowerCase()?(this.options.isEnterpriseAdmin=!0,this.options.debug&&console.log("Enterprise Admin is TRUE")):this.options.debug&&console.log("Enterprise Admin is false")
},checkEntitlements:function(){this.options.debug&&console.log("Check for Entitlements"),this.options.entitlements=window.localStorage.aceui_entitlements,this.options.debug&&console.log("this.options.entitlements: ",this.options.entitlements),typeof this.options.entitlements=="undefined"?(this.options.debug&&console.log("Instantiating new Entitlements"),this.entitlements.check()):(this.options.debug&&console.log("this.options.entitlements, setting trigger for logout"),this.entitlements.removeEntitlements())
},sendState:function(){return this.options
}})
}),define("text!dom/personalization/profile/ProfileView.mustache",[],function(){return'<aside>\n	<div class="grid-row">\n		<div class="grid-cols-14 grid-offset-1">\n			<section>\n				<img class="avatar" src="{{avatar}}">\n				<p class="name">\n					{{name}}\n				</p>\n				{{#manage}}\n				<div class="deprovisioned">\n					<h3>{{deprovisionedTitle}}</h3>\n					<p>\n						<a class="button" title="{{plans}}" href="{{plansLink}}">{{plans}}</a>\n					</p>\n					<p>\n						<a title="{{account}}" href="{{accountLink}}">{{account}}</a>\n					</p>\n				</div>\n				<ul class="manage">\n					<li>\n						<a class="account" title="{{account}}" href="{{accountLink}}">{{account}}</a>\n					</li>\n					<li>\n						<a class="team" title="{{team}}" href="{{teamLink}}">{{team}}</a>\n					</li>\n					<li>\n						<a class="enterprise" title="{{enterprise}}" href="{{enterpriseLink}}">{{enterprise}}</a>\n					</li>\n				</ul>\n				{{/manage}}\n				<div class="divider">\n					<i class="adobe-icon-creativecloud"></i>\n				</div>\n				{{#apps}}\n				<div class="apps">\n					<h3>{{appsTitle}}</h3>\n					<ul>\n						<li>\n							<a title="{{desktop}}" href="{{desktopLink}}"><i class="adobe-icon-monitor"></i> {{desktop}}</a>\n						</li>\n						<li>\n							<a title="{{addons}}" href="{{addonsLink}}"><i class="adobe-icon-link"></i> {{addons}}</a>\n						</li>\n						<li>\n							<a title="{{mobile}}" href="{{mobileLink}}"><i class="adobe-icon-cellphone"></i> {{mobile}}</a>\n						</li>\n					</ul>\n				</div>\n				{{/apps}}\n				{{#assets}}\n				<div class="assets">\n					<h3>{{assetsTitle}}</h3>\n					<ul>\n						<li>\n							<a title="{{files}}" href="{{filesLink}}"><i class="adobe-icon-cloud"></i> {{files}}</a>\n						</li>\n						<li>\n							<a title="{{photos}}" href="{{photosLink}}"><i class="adobe-icon-lr"></i> {{photos}}</a>\n						</li>\n						<li>\n							<a title="{{fonts}}" href="{{fontsLink}}"><i class="adobe-icon-typekit"></i> {{fonts}}</a>\n						</li>\n						<li>\n							<a title="{{colors}}" href="{{colorsLink}}"><i class="adobe-icon-kuler"></i> {{colors}}</a>\n						</li>\n						<li>\n							<a title="{{libraries}}" href="{{librariesLink}}"><i class="adobe-icon-feature-creative-cloud-libraries"></i> {{libraries}}</a>\n						</li>\n					</ul>\n				</div>\n				{{/assets}}\n				{{#community}}\n				<div class="community">\n					<h3>{{communityTitle}}</h3>\n					<ul>\n						<li>\n							<a title="{{network}}" href="{{networkLink}}"><i class="adobe-icon-behance"></i> {{network}}</a>\n						</li>\n						<li>\n							<a title="{{portfolio}}" href="{{portfolioLink}}"><i class="adobe-icon-prosite"></i> {{portfolio}}</a>\n						</li>\n					</ul>\n				</div>\n				{{/community}}\n				<hr>\n				<a class="sign-out" title="{{signOut}}" href="#">{{signOut}}</a>\n			</section>\n		</div>\n	</div>\n</aside>\n'
}),define("dom/personalization/profile/ProfileView",["module","can/view/mustache","text!./ProfileView.mustache"],function(e,t,n){return t.view.mustache(n)
}),define("dom/personalization/profile/ProfileControl",["can","./ProfileView"],function(e,t){return e.Control.extend({defaults:{subscribed:"null",admin:!1,entAdmin:!1,debug:!1}},{init:function(t){this.options.debug&&console.log("----------------------------------------Profile--------------------------------------------------"),this.body=e.$("body"),this.mainProfile=this.body.find("main.lobby"),this.mainProfile.length>0?(this.options.debug&&console.log("Looks like the home page"),this.subscriber=t[0],this.options.subscribed=this.subscriber.status,this.options.admin=this.subscriber.isTeamAdmin,this.options.entAdmin=this.subscriber.isEnterpriseAdmin,this.element=this.mainProfile.find(".channels > figure"),this.learn()):this.options.debug&&console.log("NOT the home page")
},learn:function(){var e=this;
this.options.debug&&console.log("this.subscriber.storageQuota:",this.subscriber.storageQuota),this.options.admin==1&&this.subscriber.storageQuota!="0"||this.options.subscribed=="paid"||this.options.subscribed=="paid-org"||this.options.subscribed=="deprovisioned"?(this.body.addClass("profile"),this.moveItems(),this.swapNavItems(),window.aceui_avatar?(this.options.debug&&console.log("window.aceui_avatar true, avatar ready:",window.aceui_avatar),this.userInfo()):this.body.on("aceui-Avatar",function(){e.userInfo()
})):(clearTimeout(window.aceuiFailSafe),this.fadeIn())
},userInfo:function(){this.profileData={name:window.adobeIMS._profile.first_name,avatar:window.localStorage.getItem("aceui_avatar")};
var t=this;
e.$.getJSON(this.body.data("personalization-json"),function(n){e.$.extend(t.profileData,n.profile),t.profileBox()
}),this.options.debug&&console.log("this.profileData:",this.profileData),this.body.on("adobeGNav:SignOut",function(){window.localStorage.removeItem("aceui_avatar"),t.options.debug&&console.log("Signed Out, clearing stored Avatar",window.localStorage.getItem("aceui_avatar"))
})
},moveItems:function(){this.options.debug&&console.log("Moving Items"),this.mainProfile.find(".channels > nav").remove(),this.element.find("> aside").remove(),this.element.find("> figcaption").remove()
},profileBox:function(){this.options.debug&&console.log("this.element",this.element),this.element.prepend(t(this.profileData)),this.deprovisioned=this.element.find(".deprovisioned"),this.manage=this.element.find(".manage"),this.account=this.manage.find(".account"),this.enterprise=this.manage.find(".enterprise"),this.team=this.manage.find(".team"),this.apps=this.element.find(".apps"),this.assets=this.element.find(".assets"),this.community=this.element.find(".community"),this.signOutButton=this.element.find(".sign-out"),this.options.subscribed=="deprovisioned"&&this.options.admin==0?(this.manage.remove(),this.deprovisioned.show()):(this.deprovisioned.remove(),this.manage.show());
if(this.subscriber.storageQuota==="0"){this.assets.remove(),this.community.remove();
var n=this.apps.find("li");
e.$(n).each(function(t){t>0&&e.$(this).remove()
})
}this.options.admin==1&&this.adminFeatures(),this.options.entAdmin==1?this.entAdminFeatures():this.enterprise.parent().remove(),this.signOut(),this.body.trigger("aceui-ProfileReady")
},adminFeatures:function(){this.account.addClass("admin"),this.team.addClass("admin")
},entAdminFeatures:function(){this.enterprise.addClass("admin")
},swapNavItems:function(){clearTimeout(window.aceuiFailSafe),window.adobeGlobalNav.setSections(["sitemap","search","logo"]),this.fadeIn()
},signOut:function(){this.signOutButton.unbind("click"),this.signOutButton.bind("click",function(e){e.preventDefault(),window.adobeIMS.signOut()
})
},fadeIn:function(){if(this.mainProfile.length>0){var e=this;
this.mainProfile.fadeTo("slow",1,function(){e.options.debug&&console.log("Fade in complete")
}),window.location.hash=""
}}})
}),define("text!dom/personalization/artist/ArtistView.mustache",[],function(){return'<cite{{#if position}} class="{{position}}"{{/if}}>\n	<p>\n		<a title="{{title}} {{preposition}} {{artist}}" href="{{url}}"{{#if target}} target="{{target}}" {{/if}}>\n			<i class="{{icon}}"></i><q>{{title}}&nbsp;<span class="artist">{{preposition}} {{artist}}</span></q>\n		</a>\n	</p>\n</cite>\n'
}),define("dom/personalization/artist/ArtistView",["module","can/view/mustache","text!./ArtistView.mustache"],function(e,t,n){return t.view.mustache(n)
}),define("dom/personalization/PersonalizationControl",["can","tools/services/Subscriber","./profile/ProfileControl","./artist/ArtistView"],function(e,t,n,r){return e.Control.extend({defaults:{subscribed:"null",gnavColor:"#fff",gnavHoverColor:"#fff",debug:!1}},{init:function(){this.options.debug&&console.log("----------------------------------------Personalization--------------------------------------------------"),this.body=e.$("body"),this.logo=this.body.find("header .adobe-icon");
var t=this;
window.aceui_avatar=!1,this.body.on("adobeGNav:Ready",function(){t.options.debug&&console.log("adobeGNav:Ready triggered"),t.gnavFired=!0,t.logoSwap()
}),this.mainProfile=this.body.find("main.lobby"),this.mainProfile.length>0&&(this.body.on("adobeGNav:avatar",function(){t.options.debug&&console.log("adobeGNav:avatar triggered from INIT in Personalization"),t.options.debug&&console.log("window.adobe.dom.GNav.avatar:",window.adobe.dom.GNav.avatar),window.localStorage.setItem("aceui_avatar",window.adobe.dom.GNav.avatar),window.aceui_avatar=!0,t.body.trigger("aceui-Avatar")
}),window.adobeGnavColor=this.options.gnavColor,window.adobeGnavHoverColor=this.options.gnavHoverColor,window.aceuiFailSafe=setTimeout(function(){t.fadeIn(),t.options.debug&&console.log("Running fail safe fadeIn")
},5000))
},logoSwap:function(){this.options.debug&&console.log("Running logo swap"),this.options.debug&&console.log("this.mainProfile",this.mainProfile),this.mainProfile.length>0&&!this.mainProfile.hasClass("profile")&&(this.options.debug&&console.log("this.mainProfile.length > 0"),window.adobeGlobalNav.setSections(["sitemap","search","profile"])),this.listen()
},listen:function(){var e=this;
this.Subscriber=new t,this.options.subscribed=this.Subscriber.sendState().status,e.options.debug&&console.log("listening",this.Subscriber),this.learn(),this.body.on("aceui-OrgReady",function(){e.passOn()
})
},learn:function(){var t=this;
t.options.debug&&console.log("learn",this.options),this.options.subscribed=="paid"||this.options.subscribed=="paid-org"||this.options.subscribed=="deprovisioned"?e.$.getJSON(t.element.data("personalization-json"),function(e){t.anchorNav(e),t.merchPod(),t.promoBar(e),typeof e.profile!="undefined"&&typeof e.profile.cite!="undefined"&&typeof e.profile.cite.home!="undefined"&&t.artistInfo(e.profile.cite.home),t.catalogDownloadButtons(e)
}):(clearTimeout(window.aceuiFailSafe),e.$.getJSON(t.element.data("personalization-json"),function(e){t.catalogDownloadButtons(e),t.body.trigger("aceui-Entitlements")
}),this.mainProfile.length>0&&this.fadeIn())
},passOn:function(){new n(this.Subscriber.sendState())
},anchorNav:function(t){e.$(".anchornav-trial").each(function(){e.$(this).find("a").attr("href",t.anchorLink).text(t.anchor)
})
},merchPod:function(){e.$(".merchpod").each(function(){e.$(this).hasClass("single")||e.$(this).remove()
})
},promoBar:function(t){e.$(".promo").each(function(){e.$(this).find(".promo-intro").text(t.promoIntro),e.$(this).find(".promo-price").remove(),e.$(this).find(".promo-cta").attr("href",t.promoCtaLink).text(t.promoCtaSubscribed)
})
},artistInfo:function(e){var t=this;
this.body.on("aceui-ProfileReady",function(){t.mainProfile.find("figure aside").after(r(e))
})
},catalogDownloadButtons:function(t){this.body.on("aceui-Entitlements",function(){var n=window.localStorage.aceui_entitlements;
typeof n!="undefined"&&e.$(".catalog.desktop").each(function(){var r=e.$(this).attr("data-leid-product-name"),i=n.split(",");
i.indexOf(r)>-1&&(e.$(this).find(".catalog-download").text(t.anchor),e.$(this).find(".catalog-buy").remove())
})
}),this.Subscriber.checkEntitlements()
},fadeIn:function(){if(this.mainProfile.length>0){var e=this;
this.logo.fadeTo("slow",1,function(){e.options.debug&&console.log("Logo fade in complete")
}),this.mainProfile.fadeTo("slow",1,function(){e.options.debug&&console.log("Page fade in complete")
}),window.location.hash=""
}}})
}),define("dom/personalization/SeedPersonalization",["linseed!./PersonalizationControl"],function(e){return e("seed-personalization").seedEach()
}),define("dom/personalization/artist/ArtistControl",["can","./ArtistView"],function(e,t){return e.Control.extend({defaults:{debug:!1}},{init:function(){this.options.debug&&console.log("----------------------------------------Artist--------------------------------------------------"),this.body=e.$("body"),this.selector=this.element.data("seed-artist"),this.attach()
},attach:function(){var e=this,t=null;
typeof window.aceui_loadingUserData=="undefined"&&(this.clearLocalStorage(),this.options.debug&&console.log("Clearing Artist localStorage:",t)),t=JSON.parse(window.localStorage.getItem("aceui_userData")),t!=null?(this.viewUserdata(t,this.selector),this.options.debug&&console.log("Found user data in localStorage:",t)):typeof window.aceui_loadingUserData=="undefined"?(window.aceui_loadingUserData=!0,this.getUserJson()):this.body.on("aceui-userDataFinished",function(){e.options.debug&&console.log("Loading data after aceui-userDataFinished triggered"),t=JSON.parse(window.localStorage.getItem("aceui_userData")),e.viewUserdata(t,e.selector)
})
},getUserJson:function(){var t=this;
e.$.getJSON(this.body.data("personalization-json"),function(e){t.viewUserdata(e,t.selector),t.options.debug&&console.log("data:",e.profile.cite[t.selector]),e&&(window.localStorage.setItem("aceui_userData",JSON.stringify(e)),t.options.debug&&console.log("User Data saved to localStorage with Success:",JSON.parse(window.localStorage.getItem("aceui_userData")))),t.body.trigger("aceui-userDataFinished")
})
},viewUserdata:function(e,n){this.element.after(t(e.profile.cite[n])),this.options.debug&&console.log("parseUserdata View loaded")
},clearLocalStorage:function(){window.localStorage.removeItem("aceui_userData"),this.options.debug&&console.log("User Data cleared:",JSON.parse(window.localStorage.getItem("aceui_userData")))
}})
}),define("dom/personalization/artist/SeedArtist",["linseed!./ArtistControl"],function(e){return e("seed-artist").seedEach()
}),define("dom",["./dom/personalization/SeedPersonalization","./dom/personalization/artist/SeedArtist"],function(e){return{name:e.id}
}),define("ui/themes/WhiteThemeControl",["can"],function(e){return e.Control.extend({init:function(){e.$("body").hasClass("whiteBackground")&&this.changeGnav(),e.$("body").hasClass("enterpriseBackground")&&this.changeGnav()
},changeGnav:function(){window.adobeGnavColor="#999",window.adobeGnavHoverColor="#333"
}})
}),define("ui/themes/SeedWhiteTheme",["linseed!./WhiteThemeControl"],function(e){return e("seed-themes").seedEach()
}),define("ui/carousel/CarouselControl",["can"],function(e){return e.Control({defaults:{wrapper:".sliderwr",slides:".slide",paddleLt:".paddleLeft",paddleRt:".paddleRight",paddleLtIcon:".fa-chevron-left",paddleRtIcon:".fa-chevron-right",dotWr:".dotNav",dotIcon:".fa-circle-thin",dotActive:".fa-circle-thin.active",dotIndex:0,preventDefault:0,defaultSlideSpeed:300,continuousAnimation:!1,continuousAnimationAttr:"data-slider-rotate",continuousAnimationSpeed:"",title:"figcaption"}},{init:function(){this.slider=this.element,this.container=this.slider.find(this.options.wrapper),this.slides=this.container.find(this.options.slides),this.controls={lt:this.slider.find(this.options.paddleLtIcon),rt:this.slider.find(this.options.paddleRtIcon),ltWrap:this.slider.find(this.options.paddleLt),rtWrap:this.slider.find(this.options.paddleRt),dotNav:this.slider.find(this.options.dotWr),dotIcon:this.slider.find(this.options.dotIcon)},this.dotNavIcon=this.options.dotIcon.replace(/\./g,""),this.dotNavActiveIcon=this.options.dotActive.replace(/\./g," ").trim(),this.setOptions(),this.setDims(),this.controls.dotIcon.length<1&&(this.setNav(this.controls.dotNav,this.slides.length),this.controls.dotIcon=this.slider.find(this.options.dotIcon)),this.options.continuousAnimation?this.autoAnimate():""
},setDims:function(){var e=this.container.height();
this.controls.ltWrap.css("height",e),this.controls.rtWrap.css("height",e),this.setFirstItem()
},setFirstItem:function(){var t=e.$(this.container).find(".active");
t.length===0&&e.$(this.slides[0]).addClass("active")
},setNav:function(e,t){var n=[],r='<i class="'+this.dotNavIcon+'"></i>',i='<i class="'+this.dotNavActiveIcon+'"></i>';
for(var s=0;
s<t;
s++){s===this.options.dotIndex?n.push(i):n.push(r)
}e.append(n.join(""))
},setIndex:function(e,t,n){switch(e){case this.options.paddleRtIcon.replace(/\./g,""):t+=1;
break;
case this.options.paddleLtIcon.replace(/\./g,""):t-=1;
break;
case"auto":t=this.options.dotIndex+1;
break;
default:t=n
}return t
},setOptions:function(){var e=this.element.attr(this.options.continuousAnimationAttr);
typeof e!="undefined"?this.setRotate(e):""
},setRotate:function(e){this.options.continuousAnimation="true";
switch(e){case"fast":this.options.continuousAnimationSpeed=this.options.defaultSlideSpeed*3;
break;
case"slow":this.options.continuousAnimationSpeed=this.options.defaultSlideSpeed*9;
break;
default:this.options.continuousAnimationSpeed=this.options.defaultSlideSpeed*6
}},slide:function(t){function f(){var e=u.dataSetup(n,o,u.slides);
u.slideIn(e),u.slideOut(e)
}function l(e){console.log("tc",n),console.log("trig",e),u.options.preventDefault=0
}var n=t!="auto"?t.attr("class").trim():t,r=this.slides.length,i=this.element.find(this.options.dotActive),s=n===this.dotNavIcon?e.$(t).index():this.options.dotIndex,o=this.setIndex(n,this.options.dotIndex,s),u=this,a="";
this.options.preventDefault=1,o!==-1||n!==this.options.paddleLtIcon.replace(/\./g,"")&&n!=="auto"?o!==r||n!==this.options.paddleRtIcon.replace(/\./g,"")&&n!=="auto"?a=this.controls.dotIcon[o]:(a=this.controls.dotIcon[0],o=0):(a=this.controls.dotIcon[r-1],o=r-1),n==i?u.options.preventDefault=0:n==this.dotNavIcon&&n!=i?(i.removeClass("active"),e.$(a).addClass("active"),l(t)):f()
},dataSetup:function(e,t,n){var r="",i="",s="",o="",u="100%",a="",f="";
switch(e){case this.options.paddleLtIcon.replace(/\./g,""):i="right",r="left",s={right:"0"},o={left:u},a=t,f=a==n.length-1?0:t+1;
break;
case this.options.paddleRtIcon.replace(/\./g,""):i="left",r="right",s={left:"0"},o={right:u},f=t==0?n.length-1:t-1,a=f==n.length-1?0:t
}return{slItems:n,newItem:a,oldItem:f,directionIn:i,directionOut:r,distance:u,animateIn:s,animateOut:o,newidx:t}
},slideIn:function(t){e.$(t.slItems[t.newItem]).css(t.directionIn,t.distance),e.$(t.slItems[t.oldItem]).animate(t.animateOut,this.options.defaultSlideSpeed,function(){e.$(this).removeClass("active").css(t.directionOut,"")
})
},slideOut:function(t){var n=this;
e.$(t.slItems[t.newItem]).addClass("active").animate(t.animateIn,this.options.defaultSlideSpeed,function(){e.$(this).css(t.directionIn,""),n.options.preventDefault=0,n.options.dotIndex=t.newidx
})
},autoAnimate:function(){var e=this;
setInterval(function(){e.slide("auto")
},this.options.continuousAnimationSpeed)
},"{paddleLtIcon},{paddleRtIcon},{dotIcon} click":function(e){console.log("this.options.preventDefault:",this.options.preventDefault),this.options.preventDefault===0&&this.slide(e)
},"{window} resize":function(){this.setDims()
}})
}),define("ui/carousel/SeedCarousel",["linseed!./CarouselControl"],function(e){return e("seed-reimcarousel").seedEach()
}),define("ui",["./ui/themes/SeedWhiteTheme","./ui/carousel/SeedCarousel"],function(e){return{name:e.id}
}),window.GLOBALCAN=!1,require(["typography","interactive","layout","dom","ui"],function(){}),define("main",function(){})
})();