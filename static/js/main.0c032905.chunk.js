(this["webpackJsonprating-widget"]=this["webpackJsonprating-widget"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),i=n(9),s=n.n(i),l=(n(14),n(3)),r=(n(15),n(5)),o=n(6),j=(n(21),n(0));function d(e){var t=e.num_of_star,n=void 0===t?5:t,c=e.filled,a=e.semiFilled,i=(e.ratingMessage,e.clickedIdx,e.handleMouseEnter),s=e.handleMouseLeave,l=e.handleClicked;e.handleCancelRating;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"rating-stars",children:Array(n).fill(1).map((function(e,t){var n=c[t]?"star-icon-filled":"",d=a[t]?"star-icon-semi-filled":"star-icon";return Object(j.jsx)(r.a,{className:["a-star",n,d].join(" "),icon:o.a,onMouseEnter:function(){return i(t)},onMouseLeave:s,onClick:function(){return l(t)}},t)}))})})}var u="Please give a rating!";function b(e){var t=e.num_of_star,n=void 0===t?5:t,a=e.title,i=void 0===a?"Rating Widget":a,s=e.customTitle,b=void 0===s?null:s,h=e.titleDisabled,O=void 0!==h&&h,f=e.cancelable,x=void 0===f||f,g=Object(c.useState)(Array(n).fill(0)),m=Object(l.a)(g,2),v=m[0],p=m[1],C=Object(c.useState)(Array(n).fill(0)),k=Object(l.a)(C,2),y=k[0],M=k[1],N=Object(c.useState)(null),S=Object(l.a)(N,2),_=S[0],A=S[1],F=Object(c.useState)(u),T=Object(l.a)(F,2),w=T[0],L=T[1],R=function(){p(Array(n).fill(0)),A(null),L(u)};return Object(j.jsxs)("div",{children:[O?"":b||Object(j.jsx)("h1",{children:i}),Object(j.jsx)(d,{num_of_star:n,cancelable:x,filled:v,semiFilled:y,clickedIdx:_,handleClicked:function(e){for(var t=[],c=0;c<=e;c++)t.push(1);p(t),A(e);var a="Thanks! You rated this ".concat(e+1," out of ").concat(n," stars.");L(a)},handleMouseEnter:function(e){for(var t=[],n=0;n<=e;n++)t.push(1);M(t)},handleMouseLeave:function(){M(Array(n).fill(0))},handleCancelRating:R}),Object(j.jsx)("div",{className:"rating-message",children:Object(j.jsx)("code",{children:w})}),x&&null!==_?Object(j.jsxs)("div",{className:"rating-cancel",onClick:R,children:[Object(j.jsx)(r.a,{className:"rating-cancel-icon",icon:o.b}),Object(j.jsx)("span",{children:"remove my rating"})]}):""]})}var h=function(){var e=Object(c.useState)(!0),t=Object(l.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(!1),s=Object(l.a)(i,2),r=s[0],o=s[1];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("header",{className:"App-header",children:Object(j.jsxs)("p",{children:["This is an example of a rating widget | ",Object(j.jsx)("code",{children:"<RatingWidget />"})]})}),Object(j.jsx)(b,{}),Object(j.jsx)("hr",{}),Object(j.jsx)(b,{title:"Customized your title and number of stars",num_of_star:10}),Object(j.jsx)("hr",{}),Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"checkbox",defaultChecked:n,onChange:function(){return a(!n)}}),Object(j.jsx)("span",{children:"Rating cancelable?"})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"checkbox",defaultChecked:r,onChange:function(){return o(!r)}}),Object(j.jsx)("span",{children:"Title disabled?"})]}),Object(j.jsx)(b,{title:"Disable your title, make your rating uncancelable",cancelable:n,titleDisabled:r}),Object(j.jsx)("hr",{}),Object(j.jsx)(b,{customTitle:Object(j.jsx)("h2",{className:"custom-title",children:"Create your own title component"})}),Object(j.jsx)("hr",{})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root")),O()}},[[23,1,2]]]);
//# sourceMappingURL=main.0c032905.chunk.js.map