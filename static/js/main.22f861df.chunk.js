(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n(7),c=n.n(r),s=(n(12),n(2)),a=n(3),i=n(5),h=n(4),l=n(0),u=function(e){var t=e.robots,n=t.map((function(e,t){throw new Error("Nooooooooo!")}));return Object(l.jsx)("div",{children:n})},d=function(e){e.searchField;var t=e.searchChange;return Object(l.jsxs)("div",{className:"pa2",children:[Object(l.jsx)("input",{className:"pa3 b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}),";"]})},b=function(e){return Object(l.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"700px"},children:e.children})},j=function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(e){var o;return Object(s.a)(this,n),(o=t.call(this,e)).state={hasError:!1},o}return Object(a.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(l.jsx)("h1",{children:"Ooops. That is not good"}):this.props.children}}]),n}(o.Component),f=(n(14),function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})})),console.log("robots loaded!")}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,o=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(l.jsxs)("div",{className:"tc",children:[Object(l.jsx)("h1",{children:"Random Kitties"}),Object(l.jsx)(d,{searchChange:this.onSearchChange}),Object(l.jsx)(b,{children:Object(l.jsx)(j,{children:Object(l.jsx)(u,{robots:o})})})]}):Object(l.jsx)("h1",{className:"pa3 f-5-l",children:"Loading..."})}}]),n}(o.Component)),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),o(e),r(e),c(e),s(e)}))};n(15);c.a.render(Object(l.jsx)(f,{}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.22f861df.chunk.js.map