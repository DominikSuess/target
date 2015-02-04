"use strict";
var cookies={cookieHost:".adobe.com",cookiePath:"/",getCookie:function(g){var f=g+"=",h=function(){return document.cookie
},d=h(),a=d.indexOf(f),c=d.match(/.*[^;]$/i)?d+";":d,b=c.indexOf(";",a);
if((a!==-1&&b!==-1)&&b>a){var e=c.substring(a,b).split("=")[1];
if(e){return e
}else{return undefined
}}else{return undefined
}},setCookie:function(c,g,e){var f=new Date(),b=g?g:"",h=e?e:"";
f.setTime(f.getTime()+(h*24*60*60*1000));
var a=f>0?"expires="+f.toUTCString()+";":"";
document.cookie=c+"="+b+"; "+a+" domain="+this.cookieHost+"; path="+this.cookiePath+";"
},resetCookieHost:function(){this.cookieHost=geoOb.options.urlItems.hostname
}},geoOb={options:{regionCookie:"international",modalCookie:"georouting_presented",defaultRegCookie:"us",defaultCountry:"US",geoArray:["africa","at","au","be_en","be_fr","be_nl","bg","br","ca","ca_fr","ch_de","ch_fr","ch_it","cis","cn","cy_en","cz","de","dk","ee","eeurope","es","fi","fr","gr_en","hk_en","hk_zh","hr","hu","ie","il_en","il_he","in","it","jp","kr","la","lt","lu_de","lu_en","lu_fr","lv","mt","mena_ar","mena_en","mena_fr","mx","nl","no","nz","pl","pt","ro","rs","ru","se","sea","si","sk","tr","tw","ua","uk"],searchMap:{"google.fr":"fr","google.co.uk":"uk","google.com.au":"au","google.co.jp":"jp","google.de":"de","google.ca":["ca","ca_fr"],"google.co.id":"sea","google.co.in":"in","google.com.ph":"sea","google.com.tr":"tr","google.nl":"nl","au.search.yahoo.com":"au","fr.search.yahoo.com":"fr","uk.search.yahoo.com":"uk","search.yahoo.co.jp":"jp","yandex.ru":"ru","de.search.yahoo.com":"de"},emea:["UK","FR","DE","SE","IT","ES","NL","DK","FI","EEUROPE","BG","CZ","EE","HR","HU","LT","LV","PL","RO","SK","SI","AT","BE_EN","BE_FR","BE_NL","IE","LU_DE","LU_EN","LU_FR","PT","CY_EN","GR_EN","MT"],devEnvs:["qa01","qa02","qa03","qa04","qa05","dev01","dev02","dev03","dev04","dev05","stage","stage2","127.0.0.1"],regparams:{},localStore:"false",modalCK:"",modalwr:".modal.modal-dom.geo",modalbuttons:".modal-content .ui-button",modalClose:'label[for="modal-toggle"]',hangerButtons:"#geohanger .ui-botton",hangerClose:"#geohanger .close a",geoAdobecom:"https://geo2.adobe.com/json/?callback=ajpRsp",cqlocHost:"https://www.adobe.com",geoMap:{},urlItems:{href:window.location.href,path:window.location.pathname,protocol:window.location.protocol,hash:window.location.hash,search:window.location.search,origin:window.location.origin,host:window.location.host,hostname:window.location.hostname,referrer:document.referrer}},ajpf:function(e,a,h){var d=Date.now(),c="ajpRsp_"+d,g=document.createElement("script"),f=a?"&"+this.queryString(a):"",b=e.replace("=ajpRsp","="+c);
b=f?b+f:b;
window[c]=this.ajpRsp(h,"geo_"+d);
g.type="text/javascript";
g.src=b;
g.id="geo_"+d;
document.querySelector("head").appendChild(g)
},ajpRsp:function(b,a){return function(f){var e=false,c=typeof f,g="#"+a,d=document.querySelector(g);
switch(c){case"string":e=JSON.parse(f);
break;
case"object":e=f;
break
}if(e){b(e)
}else{throw ("invalid request or empty jsonp object")
}document.querySelector("head").removeChild(d)
}
},regionDirect:function(a,b){var c=new XMLHttpRequest();
c.open("HEAD",a,true);
c.onreadystatechange=function(){if(c.readyState!==4){return
}if([200,201,202,203,204,205,206,302,304].indexOf(c.status)>=0){window.location=a
}else{window.location=b
}};
c.setRequestHeader("Content-type","text/plain; charset=utf-8");
c.send()
},queryString:function(a){return Object.keys(a).map(function(b){return[b,a[b]].map(encodeURIComponent).join("=")
}).join("&")
},mapMaps:function(e,d){for(var b=0,c=Object.keys(d),a=c.length;
b<a;
b++){this.options[e][c[b]]=d[c[b]]
}},devFlag:function(){var d=this.options.urlItems.hostname,a=d.match(/(qa|dev|stage|(127.0.0.1))0?[1-5]?/g),c=a!==null?a[0]:[],b=c?this.options.devEnvs.indexOf(c):-1;
if(b>=0){this.options.devFlag=true;
this.options.cqlocHost="https://www.qa03.adobe.com";
if(geoOb.options.urlItems.hostname.indexOf("adobe")===-1){cookies.resetCookieHost()
}}},testMethod:function(f){var e=f.split("&"),a=e.length,g=e.splice(1,a-1),j=g.length;
for(var d=0;
d<j;
d++){var c=g[d].split("=")[0],b=decodeURIComponent(g[d].split("=")[1]);
switch(c){case"country":this.options.regparams[c]=b;
break;
case"accept-language":this.options.regparams[c]=b;
break;
case"international":cookies.setCookie(c,b);
break;
case"path":this.options.urlItems[c]=b;
break;
case"referrer":this.options.urlItems[c]=b;
break
}}}},eld=function(f,e){var d=document.createElement(f);
if(e){for(var b=0,c=Object.keys(e),a=c.length;
b<a;
b++){d.setAttribute(c[b],e[c[b]])
}return d
}return d
},parents=function(d,b){var c=d,a;
while(c&&c!==b&&c!==document.body){c=c.parentNode
}a=c===b;
return a
},modals={modaldom:eld("div",{"class":geoOb.options.modalwr.replace(/\./g," ").replace(/^ /,"")}),backdrop:eld("div",{"class":"modal-canvas"}),modalfrm:eld("div",{"class":"modal-frame"}),modalcontent:eld("div",{"class":"modal-content"}),wr:eld("div",{id:"geomodal","class":"grid-container geomodal"}),scrollwr:eld("div",{"class":"modalscrollwr"}),modalcol1:{col:eld("div",{"class":"grid-span-2of5 modalcol1"}),titleel:eld("h3"),title:"Choose your region",bodytxtel:eld("p"),bodytxt:"The Adobe USA site had been optimized for users within the United States. If you live outside the US, we recommend that you visit your local site for the most relevant information, including pricing, promotions, and local events",buttonwr:eld("div",{"class":"grid-span-4of5 ui-button"}),buttontar:eld("span",{"class":"default-lang",tabindex:1}),buttontxt:"United States",build:function(){this.titleel.innerHTML=this.title;
this.bodytxtel.innerHTML=this.bodytxt;
this.buttontar.innerHTML=this.buttontxt;
this.buttonwr.appendChild(this.buttontar);
this.col.appendChild(this.titleel);
this.col.appendChild(this.bodytxtel);
this.col.appendChild(this.buttonwr);
return this.col
}},modalcol2:{col:eld("div",{"class":"grid-span-3of5 modalcol2"}),scroller:eld("div",{"class":"paddedwr"}),build:function(d){for(var c=0,h=Object.keys(d),b=h.length;
c<b;
c++){var g=d[h[c]],i=eld("div",{"class":"geowr"}),a=eld("p"),f=eld("a",{href:"","data-alang":h[c]}),e=eld("div",{"class":"grid-span-3of5 ui-button"}),j=eld("p");
a.innerHTML=g.blurb;
f.innerHTML=g.button;
j.innerHTML=g.beforeIcon+'&nbsp;<i class="adobe-icon-globe icon-2x"></i>&nbsp;'+g.afterIcon;
e.appendChild(f);
i.appendChild(a);
i.appendChild(e);
i.appendChild(j);
this.scroller.appendChild(i)
}this.col.appendChild(this.scroller);
return this.col
}},hanger:{container:function(){return eld("div",{id:"geohanger"})
},blockwr:function(){return eld("div")
},text:function(){return eld("p")
},button:function(){return eld("span",{"class":"ui-button"})
},buttona:function(a){return eld("a",{href:a})
},closer:function(){return eld("span",{"class":"close"})
},closetarget:function(){return eld("a",{href:"#"})
},closeicon:function(){return eld("i",{"class":"fa-times-circle"})
}},sethanger:function(e){var a=this.hanger.container(),c=this.hanger.blockwr(),g=this.hanger.text(),d=this.hanger.button(),b=this.hanger.buttona(e),h=this.hanger.closer(),f=this.hanger.closetarget();
f.appendChild(this.hanger.closeicon());
h.appendChild(f);
g.innerHTML="The page that you requested is not available in your preferred language, click the button below to view this page in:";
b.innerHTML="English";
d.appendChild(b);
c.appendChild(g);
c.appendChild(d);
a.appendChild(c);
a.appendChild(h);
document.querySelector("body").insertBefore(a,document.querySelector("header"))
},setmodal:function(b){var a=document.querySelector("body"),e=eld("span",{"class":"close"}),c=eld("a",{href:"#"}),d=eld("i",{"class":"fa-times-circle"});
c.appendChild(d);
e.appendChild(c);
this.scrollwr.appendChild(this.modalcol1.build());
this.scrollwr.appendChild(this.modalcol2.build(b));
this.modalcontent.appendChild(this.scrollwr);
this.modalfrm.appendChild(this.modalcontent);
this.modalfrm.appendChild(e);
this.backdrop.appendChild(this.modalfrm);
this.modaldom.appendChild(this.backdrop);
a.insertBefore(this.modaldom,document.querySelector("header"));
cookies.setCookie(geoOb.options.modalCookie,true,30)
},removemodal:function(c,a){var e=!a?document.querySelector(".modal.modal-dom.geo"):a,d=e.parentNode;
d.removeChild(e)
}};
function Loader(){var i=geoOb.options,h=i.geoMap,b=i.urlItems,e=undefined,d=h.intlCookie?h.intlCookie:i.defaultRegCookie,a=d===i.defaultRegCookie,c=i.geoArray.indexOf(b.path.split("/")[1])>=0?b.path.split("/")[1]:i.defaultRegCookie;
function f(m,o,p){var n=i.urlItems,k=m.indexOf("ui-button")>=0?p.target:o.indexOf("ui-button")>=0?p.target.firstElementChild:"",q=k.getAttribute("data-alang"),r=n.hash?n.path.replace(n.hash,""):n.path,j=n.protocol+"//"+n.host+"/"+q+r,l=n.protocol+"//"+n.host+"/"+q;
if(q!==i.defaultRegCookie&&q!==undefined&&q!==null){cookies.setCookie(i.regionCookie,q,180);
geoOb.regionDirect(j,l)
}else{modals.removemodal(p.target)
}}function g(n){var k=document.querySelector("#geohanger"),o=n.target.parentNode.getAttribute("class")?n.target.parentNode.getAttribute("class"):"",l=n.target.getAttribute("class")?n.target.getAttribute("class"):"",j=l&&(n.target.nodeName!=="A"&&n.target.nodeName!=="I")?n.target.firstElementChild.getAttribute("href"):n.target.nodeName!=="I"?n.target.getAttribute("href"):"",m=o.indexOf("ui-button")>=0||l.indexOf("ui-button")>=0;
if(m){cookies.setCookie(geoOb.options.regionCookie);
cookies.setCookie("rdresna");
window.location=j
}else{if(j===""){cookies.setCookie("rdresna");
modals.removemodal(n.target,k)
}}}this.redirect=function(){var m=b.protocol,l=b.host,o=b.hash?b.path.replace(b.hash,""):b.path,k=o.split("/")[1],p=i.geoArray.indexOf(k)>=0?o.replace("/"+k,""):o,j=d!==i.defaultRegCookie?m+"//"+l+"/"+d+p:m+"//"+l+p,n=d!==i.defaultRegCookie?m+"//"+l+"/"+d:m+"//"+l;
if(!a&&d!==c&&e===undefined){geoOb.regionDirect(j,n);
return true
}return false
};
this.load=function(){var r=h.country.toLowerCase(),m=b.referrer.replace(/(http[s]?:\/\/)(www.)?/i,"").split("/")[0],s=i.searchMap[m]!==""||i.searchMap[m]!==undefined?i.searchMap[m]:"",t=s!==""&&Array.isArray(s)?s[0].split("_")[0]:"",p=s!==""&&!Array.isArray(s)&&i.geoArray.indexOf(s)>=0?s:t,j=c===i.defaultRegCookie,k=p===i.defaultRegCookie,n=r===i.defaultCountry.toLowerCase(),o=p!==""?p:r;
if(e!==undefined){modals.sethanger(e)
}else{if((a&&j)&&i.modalCK===undefined&&((!k&&p!=="")||!n)){var l=i.cqlocHost,u="/etc/beagle/public/",q="geoinfo."+o+".json/?callback=ajpRsp";
geoOb.ajpf(l+u+q,{},function(v){geoOb.mapMaps("geoMap",v);
modals.setmodal(h.loc_strings)
})
}}document.addEventListener("click",function(z){if(document.querySelector(i.modalwr)){z.preventDefault();
var y=document.querySelector(".modal-frame"),x=parents(z.target,y),A=z.target.parentNode.getAttribute("class")?z.target.parentNode.getAttribute("class"):"",w=z.target.getAttribute("class")?z.target.getAttribute("class"):"",v=A.indexOf("ui-button")>=0||w.indexOf("ui-button")>=0,B=parents(z.target,document.querySelector(".close"));
if(!x&&!v&&!B){modals.removemodal(z.target);
z.stopPropagation()
}if(v&&!B){f(A,w,z);
z.stopPropagation()
}if(B){modals.removemodal(z.target);
z.stopPropagation()
}}else{if(document.querySelector("#geohanger")){z.preventDefault();
g(z);
z.stopPropagation()
}}z.stopPropagation()
});
document.addEventListener("keyup",function(v){if(v.keyCode===27&&document.querySelector(i.modalwr)){modals.removemodal(v.target);
v.stopPropagation()
}v.stopPropagation()
})
}
}function initGeoLoader(){if(geoOb.options.urlItems.hash){geoOb.testMethod(geoOb.options.urlItems.hash)
}geoOb.devFlag();
geoOb.options.modalCK=cookies.getCookie(geoOb.options.modalCookie);
geoOb.options.geoMap.intlCookie=cookies.getCookie(geoOb.options.regionCookie);
var b=new Loader(),a=b.redirect();
if(a===false){geoOb.ajpf(geoOb.options.geoAdobecom,geoOb.options.regparams,function(c){geoOb.mapMaps("geoMap",c);
b.load()
})
}}(function(a){a.HtmlComponent={insertCssLinkTag:function(e){var h=HtmlComponent.escapeJCRContent(e)+".customcss.css";
var c=undefined;
var b=document.head.getElementsByTagName("link");
for(var d=0,g=b.length;
d<g;
d++){if(b[d].getAttribute("href")==h){return
}else{if(b[d].getAttribute("href")=="/etc/clientlibs/beagle/ace.css"){c=b[d]
}}}if(c!=undefined){var f=document.createElement("link");
f.href=h;
f.rel="stylesheet";
f.type="text/css";
document.head.appendChild(f)
}else{}},insertJavascriptTag:function(f){var c=HtmlComponent.escapeJCRContent(f)+".customjavascript.js";
var e=undefined;
var d=document.body.getElementsByTagName("script");
for(var b=0,h=d.length;
b<h;
b++){if(d[b].getAttribute("src")==c){return
}else{if(d[b].getAttribute("src")=="/etc/clientlibs/beagle/ace.js"){e=d[b]
}}}if(e!=undefined){var g=document.createElement("script");
g.src=c;
g.type="text/javascript";
document.body.appendChild(g)
}else{}},validateContent:function(c){var b=c.getField("./customhtml");
if(!HtmlComponent.hasValidContent(b.getValue())){CQ.Ext.MessageBox.show({title:"Error",msg:HtmlComponent.ERROR_MESSAGE,buttons:CQ.Ext.MessageBox.OK,icon:CQ.Ext.MessageBox.ERROR});
c.findById("htmlTab").show();
b.markInvalid(HtmlComponent.ERROR_MESSAGE);
return false
}return true
},hasValidContent:function(b){var c=true;
c=(b.indexOf("<script")===-1)&&(b.indexOf("<\/script")===-1)&&(b.indexOf("<style")===-1)&&(b.indexOf("</style")===-1)&&(b.indexOf("<link")===-1);
return c
},escapeJCRContent:function(b){return b.replace(/jcr:content/g,"_jcr_content")
},ERROR_MESSAGE:"&lt;script&gt;, &lt;style&gt; & &lt;link&gt; tags are not supported. Please remove them & try again"}
}(window));
(function(a){a.CommonUtils={getMarketSegment:function(){var b;
if(typeof $.cookie!=="undefined"){b=$.cookie("x-adobe-cart-marketsegment");
if(typeof b==="undefined"){b=CommonUtils.DEFAULT
}}return b
},DEFAULT:"COM"}
}(window));