(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"/h46":function(t,n,e){e("cHUd")("Map")},"6Ktl":function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return h}));var r=e("ln6h"),o=e.n(r),i=e("q1tI"),s=e.n(i),a=e("EQ3O"),u=e("YFqc"),f=e.n(u),c=e("vcXL"),l=e.n(c),p=s.a.createElement;function h(t){var n=t.movies;return console.log(n),p("div",null,p(a.a,null),p("h1",{style:{textAlign:"center"}},"estamos el las paginass"),n.map((function(t,n){return p(f.a,{key:n,href:"/movie/[movie]",as:"/movie/".concat(t.id)},p("a",{style:{marginRight:20}},t.name))})))}h.getInitialProps=function(){var t,n;return o.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.awrap(l()("https://api.myjson.com/bins/68uyg"));case 2:return t=e.sent,e.next=5,o.a.awrap(t.json());case 5:return n=e.sent,e.abrupt("return",{movies:n});case 7:case"end":return e.stop()}}))}},"8iia":function(t,n,e){var r=e("QMMT"),o=e("RRc/");t.exports=function(t){return function(){if(r(this)!=t)throw TypeError(t+"#toJSON isn't generic");return o(this)}}},"9bda":function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/movies",function(){return e("6Ktl")}])},EQ3O:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e("q1tI"),o=e.n(r),i=e("YFqc"),s=e.n(i),a=(e("X2+5"),o.a.createElement);function u(){return a("ul",null,a("li",null,a(s.a,{href:"/"},a("a",null,"Inicio"))),a("li",null,a(s.a,{href:"/movies"},a("a",null,"peliculas"))),a("li",null,a(s.a,{href:"/contact"},a("a",null,"contactos"))))}},LX0d:function(t,n,e){t.exports=e("UDep")},"RRc/":function(t,n,e){var r=e("oioR");t.exports=function(t,n){var e=[];return r(t,!1,e.push,e,n),e}},UDep:function(t,n,e){e("wgeU"),e("FlQf"),e("bBy9"),e("g33z"),e("XLbu"),e("/h46"),e("dVTT"),t.exports=e("WEpk").Map},Wu5q:function(t,n,e){"use strict";var r=e("2faE").f,o=e("oVml"),i=e("XJU/"),s=e("2GTP"),a=e("EXMj"),u=e("oioR"),f=e("MPFp"),c=e("UO39"),l=e("TJWN"),p=e("jmDH"),h=e("6/1s").fastKey,v=e("n3ko"),d=p?"_s":"size",_=function(t,n){var e,r=h(n);if("F"!==r)return t._i[r];for(e=t._f;e;e=e.n)if(e.k==n)return e};t.exports={getConstructor:function(t,n,e,f){var c=t((function(t,r){a(t,c,n,"_i"),t._t=n,t._i=o(null),t._f=void 0,t._l=void 0,t[d]=0,void 0!=r&&u(r,e,t[f],t)}));return i(c.prototype,{clear:function(){for(var t=v(this,n),e=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete e[r.i];t._f=t._l=void 0,t[d]=0},delete:function(t){var e=v(this,n),r=_(e,t);if(r){var o=r.n,i=r.p;delete e._i[r.i],r.r=!0,i&&(i.n=o),o&&(o.p=i),e._f==r&&(e._f=o),e._l==r&&(e._l=i),e[d]--}return!!r},forEach:function(t){v(this,n);for(var e,r=s(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.n:this._f;)for(r(e.v,e.k,this);e&&e.r;)e=e.p},has:function(t){return!!_(v(this,n),t)}}),p&&r(c.prototype,"size",{get:function(){return v(this,n)[d]}}),c},def:function(t,n,e){var r,o,i=_(t,n);return i?i.v=e:(t._l=i={i:o=h(n,!0),k:n,v:e,p:r=t._l,n:void 0,r:!1},t._f||(t._f=i),r&&(r.n=i),t[d]++,"F"!==o&&(t._i[o]=i)),t},getEntry:_,setStrong:function(t,n,e){f(t,n,(function(t,e){this._t=v(t,n),this._k=e,this._l=void 0}),(function(){for(var t=this._k,n=this._l;n&&n.r;)n=n.p;return this._t&&(this._l=n=n?n.n:this._t._f)?c(0,"keys"==t?n.k:"values"==t?n.v:[n.k,n.v]):(this._t=void 0,c(1))}),e?"entries":"values",!e,!0),l(n)}}},XLbu:function(t,n,e){var r=e("Y7ZC");r(r.P+r.R,"Map",{toJSON:e("8iia")("Map")})},YFqc:function(t,n,e){t.exports=e("cTJO")},cTJO:function(t,n,e){"use strict";var r=e("/HRN"),o=e("WaGi"),i=e("ZDA2"),s=e("/+P4"),a=e("N9n2"),u=e("LX0d"),f=e("KI45"),c=e("5Uuq");n.__esModule=!0,n.default=void 0;var l,p=e("CxY0"),h=c(e("q1tI")),v=f(e("nOHt")),d=e("g/15");function _(t){return t&&"object"===typeof t?(0,d.formatWithValidation)(t):t}var g=new u,m=window.IntersectionObserver,y={};function w(){return l||(m?l=new m((function(t){t.forEach((function(t){if(g.has(t.target)){var n=g.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(l.unobserve(t.target),g.delete(t.target),n())}}))}),{rootMargin:"200px"}):void 0)}var k=function(t){function n(t){var e;return r(this,n),(e=i(this,s(n).call(this,t))).p=void 0,e.cleanUpListeners=function(){},e.formatUrls=function(t){var n=null,e=null,r=null;return function(o,i){if(r&&o===n&&i===e)return r;var s=t(o,i);return n=o,e=i,r=s,s}}((function(t,n){return{href:_(t),as:n?_(n):n}})),e.linkClicked=function(t){var n=t.currentTarget,r=n.nodeName,o=n.target;if("A"!==r||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=e.formatUrls(e.props.href,e.props.as),s=i.href,a=i.as;if(function(t){var n=(0,p.parse)(t,!1,!0),e=(0,p.parse)((0,d.getLocationOrigin)(),!1,!0);return!n.host||n.protocol===e.protocol&&n.host===e.host}(s)){var u=window.location.pathname;s=(0,p.resolve)(u,s),a=a?(0,p.resolve)(u,a):s,t.preventDefault();var f=e.props.scroll;null==f&&(f=a.indexOf("#")<0),v.default[e.props.replace?"replace":"push"](s,a,{shallow:e.props.shallow}).then((function(t){t&&f&&(window.scrollTo(0,0),document.body.focus())}))}}},e.p=!1!==t.prefetch,e}return a(n,t),o(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getHref",value:function(){var t=window.location.pathname,n=this.formatUrls(this.props.href,this.props.as).href;return(0,p.resolve)(t,n)}},{key:"handleRef",value:function(t){var n=this,e=y[this.getHref()];this.p&&m&&t&&t.tagName&&(this.cleanUpListeners(),e||(this.cleanUpListeners=function(t,n){var e=w();return e?(e.observe(t),g.set(t,n),function(){try{e.unobserve(t)}catch(n){console.error(n)}g.delete(t)}):function(){}}(t,(function(){n.prefetch()}))))}},{key:"prefetch",value:function(){if(this.p){var t=this.getHref();v.default.prefetch(t),y[t]=!0}}},{key:"render",value:function(){var t=this,n=this.props.children,e=this.formatUrls(this.props.href,this.props.as),r=e.href,o=e.as;"string"===typeof n&&(n=h.default.createElement("a",null,n));var i=h.Children.only(n),s={ref:function(n){t.handleRef(n),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(n):"object"===typeof i.ref&&(i.ref.current=n))},onMouseEnter:function(n){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(n),t.prefetch()},onClick:function(n){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(n),n.defaultPrevented||t.linkClicked(n)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(s.href=o||r),h.default.cloneElement(i,s)}}]),n}(h.Component);n.default=k},dVTT:function(t,n,e){e("aPfg")("Map")},g33z:function(t,n,e){"use strict";var r=e("Wu5q"),o=e("n3ko");t.exports=e("raTm")("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var n=r.getEntry(o(this,"Map"),t);return n&&n.v},set:function(t,n){return r.def(o(this,"Map"),0===t?0:t,n)}},r,!0)},vcXL:function(t,n,e){"use strict";var r=self.fetch.bind(self);t.exports=r,t.exports.default=t.exports}},[["9bda",1,2,0,3]]]);