(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"0ce7":function(e,t,o){},"1cdd":function(e,t,o){"use strict";o.r(t);var n=o("94bc"),c=o.n(n);for(var r in n)["default"].indexOf(r)<0&&function(e){o.d(t,e,(function(){return n[e]}))}(r);t["default"]=c.a},"649e":function(e,t,o){"use strict";var n=o("0ce7"),c=o.n(n);c.a},"66e1":function(e,t,o){"use strict";o.r(t);var n=o("1cdd");for(var c in n)["default"].indexOf(c)<0&&function(e){o.d(t,e,(function(){return n[e]}))}(c);o("649e");var r=o("f0c5"),a=Object(r["a"])(n["default"],void 0,void 0,!1,null,null,null,!1,void 0,void 0);t["default"]=a.exports},"94bc":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={globalData:{Modelmes:null},onLaunch:function(){var e=this;wx.cloud.init({env:"cloudee-6gy24vzm4308e89b",traceUser:!0}),this.goeasy.connect({id:"",data:{},onSuccess:function(){console.log("连接成功.")},onFailed:function(e){console.log("连接失败")},onProgress:function(e){console.log("连接或自动重连中")}}),wx.getSystemInfo({success:function(t){console.log(t),t.safeArea.top>40?e.globalData.Modelmes=!0:e.globalData.Modelmes=!1}})}};t.default=n},f5b5:function(e,t,o){"use strict";(function(e){var t=o("4ea4"),n=t(o("9523"));o("0493");var c=t(o("66e1")),r=t(o("66fd")),a=t(o("086b"));function u(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}o("55cb"),wx.__webpack_require_UNI_MP_PLUGIN__=o;var l=o("4597");l.locale("zh-cn"),r.default.prototype.$Time=l,r.default.prototype.goeasy=a.default.getInstance({host:"hangzhou.goeasy.io",appkey:"BC-e4cf7dfb268b4d60b9d8130a4cf3bc45",modules:["pubsub"]}),r.default.config.productionTip=!1,c.default.mpType="app";var i=new r.default(function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?u(Object(o),!0).forEach((function(t){(0,n.default)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):u(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},c.default));e(i).$mount()}).call(this,o("543d")["createApp"])}},[["f5b5","common/runtime","common/vendor"]]]);