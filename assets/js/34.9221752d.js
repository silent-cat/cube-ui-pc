(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{329:function(t,e,n){},347:function(t,e,n){"use strict";n(329)},349:function(t,e,n){"use strict";var i={props:{value:{type:Boolean,default:!1},activeColor:{type:String,default:"#409eff"},inactiveColor:{type:String,default:"#fff"}},methods:{toggle:function(){this.$emit("input",!this.value)}}},l=(n(347),n(46)),a=Object(l.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("button",{class:["wy-switch",{"wy-switch-checked":this.value}],style:{background:this.value?this.activeColor:this.inactiveColor},on:{click:this.toggle}},[e("span")])}),[],!1,null,null,null);e.a=a.exports},459:function(t,e,n){"use strict";n.r(e);var i={components:{"wy-switch":n(349).a},data:function(){return{value:!0}}},l=n(46),a=Object(l.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("wy-switch",{attrs:{disabled:""}}),t._v(" "),n("wy-switch",{attrs:{disabled:""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)}),[],!1,null,null,null);e.default=a.exports}}]);