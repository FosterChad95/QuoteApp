(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{44:function(e,t,c){e.exports={comments:"Comments_comments__IlDQV"}},45:function(e,t,c){e.exports={form:"NewCommentForm_form__11bAK",loading:"NewCommentForm_loading__rKnKX",control:"NewCommentForm_control__VMSsp",actions:"NewCommentForm_actions__3sXAk"}},46:function(e,t,c){e.exports={item:"CommentItem_item__1qC6p"}},47:function(e,t,c){e.exports={comments:"CommentsList_comments__3EPS2"}},48:function(e,t,c){e.exports={quote:"HighlightedQuote_quote__1B2Nc"}},53:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),o=c(2),a=c(8),r=c(37),m=c(44),j=c.n(m),i=c(35),d=c(36),l=c(15),u=c(45),b=c.n(u),x=c(1),O=function(e){var t=Object(n.useRef)(),c=Object(i.a)(d.a),s=c.sendRequest,o=c.status,a=c.error,r=e.onAddedComment;Object(n.useEffect)((function(){"completed"!==o||a||r()}),[o,a,r]);var m=function(c){c.preventDefault();var n=t.current.value;s({commentData:{text:n},quoteId:e.quoteId})};return Object(x.jsxs)("form",{className:b.a.form,onSubmit:m,children:["pending"===o&&Object(x.jsx)("div",{className:"centered",children:Object(x.jsx)(l.a,{})}),Object(x.jsxs)("div",{className:b.a.control,onSubmit:m,children:[Object(x.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(x.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(x.jsx)("div",{className:b.a.actions,children:Object(x.jsx)("button",{className:"btn",children:"Add Comment"})})]})},h=c(46),f=c.n(h),p=function(e){return Object(x.jsx)("li",{className:f.a.item,children:Object(x.jsx)("p",{children:e.text})})},_=c(47),N=c.n(_),C=function(e){return Object(x.jsx)("ul",{className:N.a.comments,children:e.comments.map((function(e){return Object(x.jsx)(p,{text:e.text},e.id)}))})},v=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(o.j)(),m=a.quoteId,u=Object(i.a)(d.c),b=u.sendRequest,h=u.status,f=u.data;Object(n.useEffect)((function(){b(m)}),[b,m]);var p,_=Object(n.useCallback)((function(){b(m)}),[b,m]);return"pending"===h&&(p=Object(x.jsx)("div",{className:"centered",children:Object(x.jsx)(l.a,{})})),"completed"===h&&f&&f.length>0&&(p=Object(x.jsx)(C,{comments:f})),"completed"!==h||f&&0!==f.length||(p=Object(x.jsx)("p",{className:"centered",children:"No Comments were loaded yet"})),Object(x.jsxs)("section",{className:j.a.comments,children:[Object(x.jsx)("h2",{children:"User Comments"}),!c&&Object(x.jsx)("button",{className:"btn",onClick:function(){s(!0)},children:"Add a Comment"}),c&&Object(x.jsx)(O,{quoteId:a.quoteId,onAddedComment:_}),p]})},g=c(48),q=c.n(g),w=function(e){return Object(x.jsxs)("figure",{className:q.a.quote,children:[Object(x.jsx)("p",{children:e.text}),Object(x.jsx)("figcaption",{children:e.author})]})};t.default=function(){var e=Object(o.k)(),t=Object(o.j)().quoteId,c=Object(i.a)(d.e,!0),r=c.sendRequest,m=c.status,j=c.data,u=c.error;return Object(n.useEffect)((function(){r(t)}),[r,t]),"pending"===m?Object(x.jsx)("div",{className:"centered",children:Object(x.jsx)(l.a,{})}):u?Object(x.jsx)("p",{className:"centered",children:u}):j.text?Object(x.jsxs)(s.a.Fragment,{children:[Object(x.jsx)(w,{text:j.text,author:j.author}),Object(x.jsx)(o.c,{path:e.path,exact:!0,children:Object(x.jsx)("div",{className:"centered",children:Object(x.jsx)(a.b,{className:"btn--flat",to:"".concat(e.url,"/comments"),children:"Load Comments"})})}),Object(x.jsx)(o.c,{path:"".concat(e.path,"/comments"),children:Object(x.jsx)(v,{})})]}):Object(x.jsx)("p",{children:"No quote found!"})}}}]);
//# sourceMappingURL=4.23470664.chunk.js.map