(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,function(e,t,n){e.exports={list:"Statistics_list__3ryVc",item:"Statistics_item__1xFHD"}},,,function(e,t,n){e.exports={title:"Section_title__1VKFR",box:"Section_box__pv2R8"}},,function(e,t,n){e.exports={button:"FeedbackOptions_button__2bZcI"}},function(e,t,n){e.exports={message:"Notification_message__9m_Nj"}},,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n.n(a),i=n(6),r=n.n(i),o=(n(14),n(3)),l=n(7),u=n.n(l);function b(e){var t=e.options,n=e.onLeaveFeedback;return t.map((function(e,t){return Object(c.jsx)("button",{type:"button",className:u.a.button,onClick:function(){return n(e)},children:e},t)}))}var j=n(8),d=n.n(j);function h(e){var t=e.message;return Object(c.jsx)("p",{className:d.a.message,children:t})}var f=n(2),x=n.n(f);function O(e){var t=e.good,n=e.neutral,a=e.bad,s=e.total,i=e.positivePercentage;return Object(c.jsx)("div",{children:s?Object(c.jsxs)("ul",{className:x.a.list,children:[Object(c.jsxs)("li",{className:x.a.item,children:["Good: ",t]}),Object(c.jsxs)("li",{className:x.a.item,children:["Neutral: ",n]}),Object(c.jsxs)("li",{className:x.a.item,children:["Bad: ",a]}),Object(c.jsxs)("li",{className:x.a.item,children:["Total: ",s]}),Object(c.jsxs)("li",{className:x.a.item,children:["PositivePercentage: ",i,"%"]})]}):Object(c.jsx)(h,{message:"No feedback given"})})}var m=n(5),g=n.n(m);function v(e){var t=e.title,n=e.children;return Object(c.jsx)("section",{children:Object(c.jsxs)("div",{className:g.a.box,children:[Object(c.jsx)("h2",{className:g.a.title,children:t}),n]})})}function _(){var e=Object(a.useState)(0),t=Object(o.a)(e,2),n=t[0],s=t[1],i=Object(a.useState)(0),r=Object(o.a)(i,2),l=r[0],u=r[1],j=Object(a.useState)(0),d=Object(o.a)(j,2),h=d[0],f=d[1],x={good:n,neutral:l,bad:h},m=Object.keys(x),g=function(){return n+l+h};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(v,{title:"Please leave feedback",children:Object(c.jsx)(b,{options:m,onLeaveFeedback:function(e){switch(e){case"good":s((function(e){return e+1}));break;case"neutral":u((function(e){return e+1}));break;case"bad":f((function(e){return e+1}));break;default:return}}})}),Object(c.jsx)(v,{title:"Statistics",children:Object(c.jsx)(O,{good:n,neutral:l,bad:h,total:g(),positivePercentage:function(){var e=g();return e?Math.round(n/e*100):0}()})})]})}var p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(_,{})}),document.getElementById("root")),p()}],[[15,1,2]]]);
//# sourceMappingURL=main.e8a42658.chunk.js.map