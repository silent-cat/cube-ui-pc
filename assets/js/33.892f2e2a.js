(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{329:function(t,e,n){},347:function(t,e,n){"use strict";n(329)},349:function(t,e,n){"use strict";var l={props:{value:{type:Boolean,default:!1},activeColor:{type:String,default:"#409eff"},inactiveColor:{type:String,default:"#fff"}},methods:{toggle:function(){this.$emit("input",!this.value)}}},i=(n(347),n(46)),u=Object(i.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("button",{class:["wy-switch",{"wy-switch-checked":this.value}],style:{background:this.value?this.activeColor:this.inactiveColor},on:{click:this.toggle}},[e("span")])}),[],!1,null,null,null);e.a=u.exports},458:function(t,e,n){"use strict";n.r(e);var l={components:{"wy-switch":n(349).a},data:function(){return{value:!1}}},i=n(46),u=Object(i.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("wy-switch",{model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t._v(" "),n("p",[t._v("switch value: "+t._s(t.value))])],1)}),[],!1,null,null,null);e.default=u.exports}}]);