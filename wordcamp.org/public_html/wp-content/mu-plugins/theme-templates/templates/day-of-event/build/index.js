!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=15)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.lodash}()},function(e,t){!function(){e.exports=this.wp.sanitize}()},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t){!function(){e.exports=this.wp.url}()},function(e,t){!function(){e.exports=this.wp.apiFetch}()},function(e,t,n){var r=n(4);e.exports=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){r(e,t,n[t])})}return e}},function(e,t){!function(){e.exports=this.wp.date}()},function(e,t,n){var r=n(16);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},function(e,t,n){var r=n(18),o=n(17);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(4),s=n.n(o),c=n(8),i=n.n(c),a=n(14),u=n.n(a),l=n(13),p=n.n(l),f=n(12),d=n.n(f),m=n(11),b=n.n(m),h=n(10),O=n.n(h),y=n(7),j=n.n(y),v=n(6);var g=n(2),w=n(5),_=n(9),x=n(1),E=n(3),k=function(e){var t,n,o=e.session,s={link:"#",title:{rendered:Object(x._x)("Track finished","session title","wordcamporg")},session_date_time:{time:""},session_category:[],_embedded:{"wp:term":{},speakers:[]},meta:{_wcpt_session_type:""}},c=o.session,i=(c=void 0===c?s:c).link,a=void 0===i?"#":i,u=c.title.rendered,l=void 0===u?"":u,p=c.session_date_time.time,f=void 0===p?"":p,d=c.session_category,m=void 0===d?[]:d,b=c._embedded,h=b["wp:term"],O=void 0===h?{}:h,y=b.speakers,j=void 0===y?[]:y,v=c.meta._wcpt_session_type,w=void 0===v?"":v,_=o.track,k=_.name,S=_.slug,N=Object(g.keyBy)(Object(g.flatten)(O),"id"),P=j.filter(function(e){return!!e.id});if(m.length>0){var L=m[0];t=N[L].name,n=N[L].slug}return Object(r.createElement)("div",{className:"wordcamp-schedule-session ".concat(w)},Object(r.createElement)("span",{className:"wordcamp-schedule-session-track ".concat(S)},k),Object(r.createElement)("div",{className:"wordcamp-schedule-session-details"},Object(r.createElement)("h4",{className:"wordcamp-schedule-session-title"},Object(r.createElement)("a",{href:a},Object(E.stripTagsAndEncodeText)(l))),Object(r.createElement)("span",{className:"wordcamp-schedule-session-time"},f),Object(r.createElement)("span",{className:"wordcamp-schedule-session-speaker"},!!P.length&&P.map(function(e){var t=e.id,n=e.title.rendered,o=e.link;return Object(r.createElement)("a",{key:t,href:o},Object(E.stripTagsAndEncodeText)(n))})),!!t&&Object(r.createElement)("span",{className:"wordcamp-schedule-session-category ".concat(n)},t)))},S=function(e){var t=e.title,n=e.sessionTrackPairs.filter(function(e){return!!e});return Object(r.createElement)("section",null,Object(r.createElement)("h3",null,t),n.map(function(e,t){var n=e.session?e.session.id:t;return n="".concat(n,"-").concat(e.track.id),Object(r.createElement)(k,{key:n,session:e})}))},N=function(e){var t=function(e){var t=window.dayOfEventConfig.scheduleNowOverride||Date.now(),n=36e5*Object(_.__experimentalGetSettings)().timezone.offset;if(Array.isArray(e.tracks))return e.tracks.map(function(r){var o=Object(g.sortBy)(e.sessions.filter(function(e){return e.session_track.includes(r.id)}),function(e){return e.meta._wcpt_session_time}),s=o.findIndex(function(e){var r=1e3*e.meta._wcpt_session_time-n;return t<r}),c=o[s],i=o[s-1];return{track:r,now:i,next:c}})}({sessions:e.sessionList,tracks:e.trackList}),n=t.map(function(e){return{track:e.track,session:e.now}}).filter(function(e){return!!e.session}),o=t.map(function(e){return{track:e.track,session:e.next}});return Object(r.createElement)(r.Fragment,null,!!n.length&&Object(r.createElement)(S,{sessionTrackPairs:n,title:Object(x._x)("On Now","title","wordcamporg")}),!!o.length&&Object(r.createElement)(S,{sessionTrackPairs:o,title:Object(x._x)("Up Next","title","wordcamporg")}))},P=function(e){var t=e.fullScheduleUrl,n=e.isFetching,o=e.sessions,s=e.tracks;return Object(r.createElement)("div",{className:"day-of-event-schedule"},Object(r.createElement)("h2",null,Object(x._x)("Live Schedule","title","wordcamporg")),n&&0===o.length&&Object(r.createElement)(w.Spinner,null),(!n||0<o.length)&&Object(r.createElement)(N,{sessionList:o,trackList:s}),Object(r.createElement)("a",{href:t,className:"full-schedule"},Object(x._x)("View Full Schedule","text","wordcamporg")))},L=function(e){var t=e.post,n=t.link,o=t.date_gmt,s=t.title.rendered,c=t.excerpt.rendered,i=t._embedded["wp:term"];Object(g.keyBy)(Object(g.flatten)(i),"id");return Object(r.createElement)("div",{className:"wordcamp-latest-post"},Object(r.createElement)("h4",{className:"wordcamp-latest-post-title"},Object(r.createElement)("a",{href:n},Object(E.stripTagsAndEncodeText)(s))),Object(r.createElement)("span",{className:"wordcamp-latest-post-date"},new Date(o).toLocaleDateString()),Object(r.createElement)("div",{className:"wordcamp-latest-post-excerpt"},Object(E.stripTagsAndEncodeText)(c)))},F=function(e){var t=e.archiveUrl,n=e.isFetching,o=e.posts;return Object(r.createElement)("div",{className:"day-of-event-latest-posts"},Object(r.createElement)("h2",null,Object(x._x)("Latest Posts","title","wordcamporg")),n&&0===o.length&&Object(r.createElement)(w.Spinner,null),(!n||0<o.length)&&Object(r.createElement)(r.Fragment,null,o.filter(function(e){return!!e}).map(function(e){return Object(r.createElement)(L,{key:e.id,post:e})})),Object(r.createElement)("a",{href:t,className:"all-posts"},Object(x._x)("View all Posts","title","wordcamporg")))},T={sessionList:function(){return j()({path:Object(v.addQueryArgs)("wp/v2/sessions",{per_page:100,status:"publish",_embed:!0})})},trackList:function(){return j()({path:Object(v.addQueryArgs)("wp/v2/session_track",{per_page:100,status:"publish"})})},postList:function(){return j()({path:Object(v.addQueryArgs)("wp/v2/posts",{per_page:3,status:"publish",_embed:!0})})}},A=function(e){function t(e){var n;u()(this,t),(n=d()(this,b()(t).call(this,e))).state={};for(var r=0,o=Object.keys(T);r<o.length;r++){var s=o[r];n.state[s]={isFetching:!0,error:null,data:[]}}return n}return O()(t,e),p()(t,[{key:"updateLists",value:function(){for(var e,t=this,n=function(){var n=o[r];e=T[n],t.setState(function(e){return s()({},n,i()({},e[n],{isFetching:!0}))}),e().then(function(e){t.setState(s()({},n,{isFetching:!1,data:e}))}).catch(function(e){t.setState(function(t){return i()({},t,s()({},n,i()({},t[n],{isFetching:!1,error:e})))})})},r=0,o=Object.keys(T);r<o.length;r++)n()}},{key:"componentDidMount",value:function(){var e=this;this.updateLists(),this.updateIntervalId=window.setInterval(function(){e.updateLists()},6e4)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.updateIntervalId)}},{key:"render",value:function(){var e=this.props.config,t=this.state,n=t.postList,o=t.sessionList,s=t.trackList;return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(P,{fullScheduleUrl:e.scheduleUrl,isFetching:o.isFetching||s.isFetching,sessions:o.data,tracks:s.data}),Object(r.createElement)(F,{archiveUrl:e.postsArchiveUrl,isfetching:n.isFetching,posts:n.data}))}}]),t}(r.Component);Object(r.render)(Object(r.createElement)(A,{config:window.dayOfEventConfig}),document.getElementById("day-of-event"))},function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(t){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=r=function(e){return n(e)}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},r(t)}e.exports=r}]);