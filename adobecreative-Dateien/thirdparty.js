var forsee=document.location.protocol+"//"+document.location.host+"/etc/clientlibs/beagle/thirdparty/foresee/scripts/foresee-trigger.js",forseeScript=function(){if(screen.width>=980){$.getScript(forsee)
}};
if(typeof $.cookie!=="undefined"){var surveycookie=$.cookie("survey_cx");
if((typeof surveycookie==="undefined"||surveycookie===null)&&(typeof survey_cx==="undefined"||survey_cx!==true)){forseeScript()
}}else{if(typeof survey_cx=="undefined"||survey_cx!==true){forseeScript()
}}var buildFrame=function(b){var c=Math.random()*10000000000000,a=document.createElement("iframe");
a.setAttribute("src",encodeURI(b)+";ord="+c+"?");
a.style.width=1+"px";
a.style.height=1+"px";
document.body.appendChild(a)
};
$(function(){var h=$("#DoubleClick"),a=$("#DoubleClickEDU"),c=$("#DoubleClickCOM"),f=h.data("doubleclick"),i=a.data("doubleclick"),d=c.data("doubleclick");
if((typeof h!=="undefined"&&h.length>0)&&(typeof f!=="undefined"&&f!=="")){buildFrame(f)
}var b=(typeof c!=="undefined"&&c.length>0)&&(typeof d!=="undefined"&&d!=="");
var g=(typeof a!=="undefined"&&a.length>0)&&(typeof i!=="undefined"&&i!=="");
var e=CommonUtils.getMarketSegment();
if(g&&e==="EDU"){buildFrame(i);
if(typeof c!=="undefined"&&c.length>0){c.remove()
}}if(b&&e==="COM"){buildFrame(d);
if(typeof a!=="undefined"&&a.length>0){a.remove()
}}});