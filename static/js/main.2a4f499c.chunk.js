(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{126:function(e,t,a){},157:function(e,t,a){"use strict";a.r(t);var r,n=a(7),s=a(0),c=a.n(s),l=a(13),i=a.n(l),o=(a(126),a(26)),u=a(33),d=a(53),j=a.n(d),b=a(18),h=a(105),O=a.n(h);!function(e){e["Accounting department"]="Accounting department",e["Development department"]="Development department",e["Human Resources Department"]="Human Resources Department",e.Management="Management"}(r||(r={}));var p=a(189),m=a(158),x=a(51),v=[{redirect:!0,from:"/",to:"/welcome"},{label:"welcome",url:"/welcome"},{label:"user overview",url:"/user-overview"}];function g(){return Object(n.jsx)("nav",{className:j.a.navigation,children:Object(n.jsx)(p.a,{variant:"contained",children:v.map((function(e){return"redirect"in e?null:Object(n.jsx)(m.a,{component:x.b,to:e.url,variant:"contained",activeClassName:"MuiButton-containedPrimary",children:e.label},e.url)}))})})}var f=a(21),w=a(201),_=a(202),y=a(206),C=a(68),S=a.n(C),A=a(98),R=a.n(A);var k,N,H=(k="/Test-task-Benovate.ru/MOCK_DATA.json",N="get",function(){return R()({method:N,url:k})}),B=a(107),D=a(207),U=a(205),T=a(200),F=a(196),L=a(195),E=a(193),G=a(199),W=a(209),K=a(203),M=a(210),P=a(99),I=a.n(P);function q(e){var t=c.a.useState(!1),a=Object(u.a)(t,2),s=a[0],l=a[1],i=c.a.useState(""),o=Object(u.a)(i,2),d=o[0],j=o[1],b=c.a.useState(""),h=Object(u.a)(b,2),O=h[0],p=h[1],x=c.a.useState(""),v=Object(u.a)(x,2),g=v[0],w=v[1],_=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(){t?y().name&&y().name&&(e.setUsersState((function(e){var t=[{id:e.usersAll.length+1,first_name:O,last_name:g,group:d||null}].concat(Object(B.a)(e.usersAll));return Object(f.a)(Object(f.a)({},e),{},{usersAll:t,usersSortedByGroup:le(t)})})),l(!1)):l(!1)}},y=function(){return{name:!!O.length,lastName:!!g.length}};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(E.a,{variant:"extended",color:"secondary",onClick:function(){l(!0),j(""),p(""),w("")},children:[Object(n.jsx)(I.a,{}),Object(n.jsx)("b",{children:"Add user"})]}),Object(n.jsxs)(U.a,{open:s,fullWidth:!0,onClose:_(),"aria-labelledby":"form-dialog-title",children:[Object(n.jsx)(L.a,{id:"form-dialog-title",children:"Add user"}),Object(n.jsxs)(F.a,{children:[Object(n.jsx)(D.a,{autoFocus:!0,margin:"dense",id:"name",label:"Name",type:"text",fullWidth:!0,required:!0,value:O,error:!y().name,onChange:function(e){p(e.target.value)}}),Object(n.jsx)(D.a,{margin:"dense",id:"lastName",label:"Last name",type:"text",fullWidth:!0,required:!0,value:g,error:!y().lastName,onChange:function(e){w(e.target.value)}}),Object(n.jsxs)(G.a,{fullWidth:!0,margin:"dense",children:[Object(n.jsx)(W.a,{id:"department",children:"Select department"}),Object(n.jsxs)(K.a,{labelId:"department",id:"department",value:d,onChange:function(e){j(e.target.value)},children:[Object(n.jsx)(M.a,{value:"",children:"None"}),Object.keys(r).map((function(e){return Object(n.jsx)(M.a,{value:r[e],children:e},e)}))]})]})]}),Object(n.jsxs)(T.a,{children:[Object(n.jsx)(m.a,{onClick:_(),color:"primary",children:"Cancel"}),Object(n.jsx)(m.a,{onClick:_(!0),variant:"contained",color:"primary",children:"Add"})]})]})]})}var J,Y=a(194);!function(e){e[e.ASC=0]="ASC",e[e.DESC=1]="DESC"}(J||(J={}));var Q=a(31),z=a.n(Q),V=a(76),X=a(100),Z=a(101),$=a(108),ee=a(106),te=a(69),ae=a(104),re=a.n(ae),ne=function(e){Object($.a)(a,e);var t=Object(ee.a)(a);function a(){var e;Object(X.a)(this,a);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).headerRowRenderer=function(e){var t=e.className,a=e.style,r=e.columns;return Object(n.jsx)("div",{style:Object(f.a)(Object(f.a)({},a),{},{paddingRight:0}),className:t+" "+z.a.tableRowHeader,children:r})},e.rowRenderer=function(e){var t=e.className,a=e.style,r=e.columns,s=e.index,c=e.key;return Object(n.jsx)("div",{style:Object(f.a)(Object(f.a)({},a),{},{paddingRight:0}),className:t+" "+(s%2?"":z.a.tableRowEven),children:r},c)},e.headerCellRenderer=function(t){var a=t,r=a.label,s=a.dataKey;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("span",{children:r}),"group"!==s?Object(n.jsx)(re.a,{className:(e.props.sortByField===s?z.a.isActive:"")+" "+(e.props.sortOrder===J.DESC&&e.props.sortByField===s?z.a.isRotate:""),onClick:function(){return e.props.sortUsers(s)}}):null]})},e}return Object(Z.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.columns,r=t.rowHeight,s=t.headerHeight,c=Object(V.a)(t,["columns","rowHeight","headerHeight"]);return Object(n.jsx)(te.a,{style:{width:"100%"},children:function(t){var l=t.height,i=t.width;return Object(n.jsx)(te.c,Object(f.a)(Object(f.a)({height:l,width:i,rowHeight:r,headerHeight:s,rowClassName:z.a.tableRow,headerClassName:z.a.tableCellHeader,headerRowRenderer:e.headerRowRenderer,headerStyle:{lineHeight:s+"px"},rowRenderer:e.rowRenderer,disableHeader:window.innerWidth<1e3},c),{},{children:a.map((function(t,a){var s=t.dataKey,c=t.justDesktop,l=t.label,i=Object(V.a)(t,["dataKey","justDesktop","label"]);return c&&window.innerWidth<1e3?null:Object(n.jsx)(te.b,Object(f.a)({headerRenderer:e.headerCellRenderer,cellRenderer:function(e){var t=e.cellData;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("span",{children:l}),Object(n.jsx)("span",{children:t})]})},dataKey:s,className:z.a.tableCell,headerClassName:[z.a.tableCell,z.a.tableCellHeader].join(" "),style:{lineHeight:r+"px"},label:l},i),s)}))}))}})}}]),a}(c.a.PureComponent);function se(e){var t=Object(s.useState)({users:e.usersList,sortOrder:J.ASC,sortByField:"id"}),a=Object(u.a)(t,2),r=a[0],c=r.users,l=r.sortByField,i=r.sortOrder,o=a[1];return Object(s.useEffect)((function(){o((function(t){return Object(f.a)(Object(f.a)({},t),{},{users:e.usersList})}))}),[e.usersList]),Object(n.jsx)(Y.a,{className:z.a.paper,children:Object(n.jsx)(ne,{rowCount:c.length,rowGetter:function(e){var t=e.index;return c[t]},sortUsers:function(e){var t=e===l&&i===J.ASC?J.DESC:J.ASC;c.sort((function(a,r){return a[e]<r[e]?t===J.ASC?-1:1:a[e]>r[e]?t===J.ASC?1:-1:0})),o((function(a){return{users:c,sortOrder:t,sortByField:e}}))},sortByField:l,sortOrder:i,columns:[{width:100,label:"ID",dataKey:"id",numeric:!0,justDesktop:!0},{width:300,label:"Name",dataKey:"first_name"},{width:500,label:"Last Name",dataKey:"last_name"},{width:500,label:"Group",dataKey:"group"}]})})}function ce(e){var t=Object(s.useState)(!1),a=Object(u.a)(t,2),r=a[0],c=a[1];return e.usersState.usersAll.length?Object(n.jsxs)("div",{className:S.a.usersListWrapper,children:[Object(n.jsxs)("div",{className:S.a.headerCaption,children:[Object(n.jsxs)("i",{children:["Count of items: ",e.usersState.usersAll.length]}),Object(n.jsx)(_.a,{className:S.a.checkbox,control:Object(n.jsx)(y.a,{name:"checkedB",checked:r,onChange:function(){return c(!r)}}),label:"By groups"}),Object(n.jsx)(q,Object(f.a)({},e))]}),r?Object.keys(e.usersState.usersSortedByGroup).map((function(t){return Object(n.jsx)(se,{usersList:e.usersState.usersSortedByGroup[t]},t)})):Object(n.jsx)(se,{usersList:e.usersState.usersAll})]}):(H().then((function(t){e.setUsersState(Object(f.a)(Object(f.a)({},e.usersState),{},{usersAll:t.data,usersSortedByGroup:le(t.data)}))})),Object(n.jsx)(w.a,{}))}function le(e){for(var t,a=(t={},Object(o.a)(t,r["Accounting department"],[]),Object(o.a)(t,r["Development department"],[]),Object(o.a)(t,r["Human Resources Department"],[]),Object(o.a)(t,r.Management,[]),Object(o.a)(t,"withoutGroup",[]),t),n=0;n<e.length;n++)e[n].group?a[e[n].group].push(e[n]):a.withoutGroup.push(e[n]);return a}function ie(){return Object(n.jsxs)("article",{style:{textAlign:"center"},children:[Object(n.jsx)("h1",{style:{fontStyle:"italic",fontWeight:"normal"},children:"Welcome to my test task!"}),Object(n.jsxs)("a",{href:"https://github.com/0ashen/Test-task-Benovate.ru",target:"_blank",rel:"noreferrer",children:["Go to ",Object(n.jsx)("b",{children:"GITHUB"})]})]})}ne.defaultProps={headerHeight:48,rowHeight:window.innerWidth>1e3?35:80};var oe=Object(b.g)((function(e){var t,a=Object(s.useState)({usersAll:[],usersSortedByGroup:(t={},Object(o.a)(t,r["Accounting department"],[]),Object(o.a)(t,r["Development department"],[]),Object(o.a)(t,r["Human Resources Department"],[]),Object(o.a)(t,r.Management,[]),Object(o.a)(t,"withoutGroup",[]),t)}),c=Object(u.a)(a,2),l=c[0],i=c[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(g,{}),Object(n.jsx)("main",{className:j.a.main,children:Object(n.jsxs)(b.d,{children:[Object(n.jsx)(b.b,{exact:!0,path:v[0].from,children:Object(n.jsx)(b.a,{to:e.redirectTo||v[0].to})}),Object(n.jsx)(b.b,{path:v[1].url,children:Object(n.jsx)(ie,{})}),Object(n.jsx)(b.b,{path:v[2].url,children:Object(n.jsx)(ce,{usersState:l,setUsersState:i})})]})}),Object(n.jsx)("a",{className:j.a.githubLink,target:"_blank",rel:"noreferrer",href:"https://github.com/0ashen/Test-task-Benovate.ru",children:Object(n.jsx)(O.a,{})})]})})),ue=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,212)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),r(e),n(e),s(e),c(e)}))};i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(x.a,{basename:"/Test-task-Benovate.ru",children:Object(n.jsx)(oe,{})})}),document.getElementById("root")),ue()},31:function(e,t,a){e.exports={paper:"UsersTable_paper__3sdua",tableRow:"UsersTable_tableRow__1-re0",tableRowHeader:"UsersTable_tableRowHeader__NR6Em",tableRowEven:"UsersTable_tableRowEven__1tE6U",tableCell:"UsersTable_tableCell__FaYyk",tableCellHeader:"UsersTable_tableCellHeader__2Pvc2",isActive:"UsersTable_isActive__1C-on",isRotate:"UsersTable_isRotate__3JC7F"}},53:function(e,t,a){e.exports={navigation:"App_navigation__1MuY1",main:"App_main__30TQO",githubLink:"App_githubLink__1qpw9"}},68:function(e,t,a){e.exports={usersListWrapper:"UsersOverview_usersListWrapper__1Lvuf",headerCaption:"UsersOverview_headerCaption__UDExH",checkbox:"UsersOverview_checkbox__1kdnB"}}},[[157,1,2]]]);
//# sourceMappingURL=main.2a4f499c.chunk.js.map