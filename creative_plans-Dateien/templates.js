define(["jquery","underscore","require"],function(e,t){"use strict";var r={interpolate:/\{\{(.+?)\}\}/g};return{mustacheLikeInterpolate:t.clone(r),createTemplate:function(e){return t.template(e,void 0,r)}}});