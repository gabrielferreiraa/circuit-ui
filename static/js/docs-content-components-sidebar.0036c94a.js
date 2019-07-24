(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"./docs/content/components/sidebar.mdx":function(e,t,n){"use strict";n.r(t);var a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=n("./node_modules/@emotion/core/dist/core.browser.esm.js"),r=n("./node_modules/react/index.js"),s=n("./node_modules/@mdx-js/react/dist/index.es.js"),l=n("./node_modules/docz/dist/index.esm.js"),c=n("./src/components/Sidebar/index.js"),b=n("./docs/utils/Statuses.js"),d=n("./src/components/Text/index.js"),u=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),p=function(){var e=Object(r.useState)(0),t=Object(u.a)(e,2),n=t[0],a=t[1];return Object(o.e)(c.a,{open:!0,onClose:function(){return null},closeButtonLabel:"close-button"},Object(o.e)(c.a.Header,null,"Header"),Object(o.e)(c.a.NavList,null,Object(o.e)(c.a.Aggregator,{label:"Overview"},Object(o.e)(c.a.NavItem,{onClick:function(){return a(0)},label:"Analytics",selected:0===n}),Object(o.e)(c.a.NavItem,{onClick:function(){return a(1)},label:"Payouts and Balances",selected:1===n})),Object(o.e)(c.a.NavItem,{selected:2===n,onClick:function(){return a(2)},label:"Transactions"}),Object(o.e)(c.a.NavItem,{selected:3===n,onClick:function(){return a(3)},label:"Settings"})),Object(o.e)(c.a.Footer,null,"Footer"))},m=p;p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SidebarWithState",filename:"docs/content/components/sidebar.js"}}),n.d(t,"default",function(){return v});var f={},j="wrapper";function v(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(s.b)(j,Object(a.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"sidebar"},"Sidebar"),Object(s.b)(b.a.InReview,null)," ",Object(s.b)(b.a.Description,{size:d.a.KILO},"Under active development"),Object(s.b)("p",null,"The sidebar is the primary navigational component on SumUp's web-based applications. It groups different\nsections of the same product (the merchant dashboard, for example), allowing easy navigation between first\nand the second level of navigations, keeping a strong anchor for our merchants to always know where they are."),Object(s.b)(l.c,{__position:1,__code:"<SidebarWithState />",__scope:{props:this?this.props:n,Playground:l.c,Props:l.d,Fragment:r.Fragment,Sidebar:c.a,Status:b.a,Text:d.a,SidebarWithState:m},__codesandbox:"undefined",mdxType:"Playground"},Object(s.b)(m,{mdxType:"SidebarWithState"})),Object(s.b)(l.d,{of:c.a,mdxType:"Props"}),Object(s.b)("h2",{id:"when-to-use-it"},"When to use it"),Object(s.b)("p",null,"If you have a single product that is web-based and has multiple value propositions/actions for a given user,\nyou should use a sidebar to ensure the usability and navigation of that product."),Object(s.b)("p",null,"The sidebar supports first and second level items. The first level is used for primary actions/value for our merchants within a product.\nWhen you have related multiple sections or the breakdown of a certain value you should group them as secondary items under a single first level item,\nwhich will act as an aggregator."),Object(s.b)("h2",{id:"usage-guidelines"},"Usage guidelines"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Do")," use sentence case for every single navigation items"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Do")," always position the sidebar on the left side on desktop and in the top side (collapsed version) on mobile"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Do")," make sure that the sidebar is always visible and sticky, both on desktop and mobile"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Do")," add icons to first level items to help our merchants understand what they should expect in that section"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Do")," group related items of a given action under a secondary"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Do not")," place any element or part of an element on the sidebar.")),Object(s.b)("h2",{id:"content-guidelines"},"Content guidelines"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Do")," use sentence case for naming navigation items"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Do")," order the items according to the priority/usage of the action/value"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Do")," place the log out (if your application has a logged in environment) as an item on the sidebar"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Do not")," use more than 3 words for your an item (aim for 1 word if possible)")),Object(s.b)("h2",{id:"usage-in-code"},"Usage in code"),Object(s.b)("p",null,"There are a couple of different components you'll need to construct your\nSidebar:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"Sidebar")," - Wrapper component, which must also be wrapped with a component\nthat will determine the width of the expanded sidebar."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"Sidebar.Header")," - Header component"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"Sidebar.NavList")," - Wrapper for the list of navigation items"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"Sidebar.Aggregator")," - Wraps around a list of ",Object(s.b)("inlineCode",{parentName:"li"},"Sidebar.NavItem")," in case\nyou want to provided nested navigation."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"Sidebar.NavItem")," - Individual navigation items."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"Sidebar.Footer")," - Footer component")),Object(s.b)("h3",{id:"adding-items-to-the-sidebar"},"Adding items to the sidebar"),Object(s.b)("p",null,"When you want to create a sidebar with a flat navigation structure, you\ncan simply use something like this:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),'import React, { useState } from \'react\';\nimport { Sidebar } from \'@sumup/circuit-ui\';\n\nconst Navigation = () => {\n  const [open, setOpen] = useState(false);\n  const [selected, setSelected] = useState([false, false]);\n  const handleSelect = newSelectedIndex => {\n    setSelected(selected.map((s, i) => i === newSelectedIndex && !i);\n  };\n\n  return (\n    <Sidebar open={open} onClose={() => setOpen(!open)} closeButtonLabel="close-button">\n      <Sidebar.Header>Header</Sidebar.Header>\n      <Sidebar.NavList>\n        <Sidebar.NavItem\n          selected={selected[0]}\n          onClick={() => handleSelect(0)}\n          label="Item #1"\n        />\n        <Sidebar.NavItem\n          selected={selected[1]}\n          onClick={() => handleSelect(1)}\n          label="Item #2"\n        />\n      </Sidebar.NavList>\n      <Sidebar.Footer>Footer</Sidebar.Footer>\n    </Sidebar>\n  );\n};\n')),Object(s.b)("h3",{id:"adding-submenus-to-the-sidebar"},"Adding submenus to the sidebar"),Object(s.b)("p",null,"In order to create submenus, you need to wrap the ",Object(s.b)("inlineCode",{parentName:"p"},"Sidebar.NavItem")," components\nthat you want to put inside a parent menu with the ",Object(s.b)("inlineCode",{parentName:"p"},"Sidebar.Aggregator"),"\ncomponent. You can do that like this:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),'<Sidebar.Aggregator label="Parent">\n  <Sidebar.NavItem\n    onClick={() => null}\n    label="Child 1"\n    selected={true}\n  />\n  <Sidebar.NavItem\n    onClick={() => null}\n    label="Child 2"\n    selected={false}\n  />\n</Sidebar.Aggregator>\n')),Object(s.b)("h3",{id:"using-the-sidebarcontext"},"Using the SidebarContext"),Object(s.b)("p",null,"To avoid keeping the logic of toggling the ",Object(s.b)("inlineCode",{parentName:"p"},"Sidebar")," on your application, you can use the available\n",Object(s.b)("inlineCode",{parentName:"p"},"SidebarContextProvider")," and ",Object(s.b)("inlineCode",{parentName:"p"},"SidebarContextConsumer")," that are implemented with the new version of\nReact's Context API. You can do that like this:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),'import React, { useState } from \'react\';\nimport { Sidebar, SidebarContextProvider, SidebarContextConsumer } from \'@sumup/circuit-ui\';\n\nconst Navigation = () => {\n  const [selected, setSelected] = useState([false, false]);\n  const handleSelect = newSelectedIndex => {\n    setSelected(selected.map((s, i) => i === newSelectedIndex && !i);\n  };\n\n  return (\n    <SidebarContextProvider>\n      <SidebarContextConsumer>\n        {({ isSidebarOpen, toggleSidebar }) => (\n          <Sidebar\n            open={isSidebarOpen}\n            onClose={toggleSidebar}\n            closeButtonLabel="close-button"\n          >\n            <Sidebar.Header>Header</Sidebar.Header>\n            <Sidebar.NavList>\n              <Sidebar.NavItem\n                selected={selected[0]}\n                onClick={() => handleSelect(0)}\n                label="Item #1"\n                />\n              <Sidebar.NavItem\n                selected={selected[1]}\n                onClick={() => handleSelect(1)}\n                label="Item #2"\n              />\n            </Sidebar.NavList>\n            <Sidebar.Footer>Footer</Sidebar.Footer>\n          </Sidebar>\n        )}\n      </SidebarContextConsumer\n    </SidebarContextProvider>\n  );\n};\n')),Object(s.b)("p",null,"That way, you can use the ",Object(s.b)("inlineCode",{parentName:"p"},"SidebarContextConsumer")," to control the ",Object(s.b)("inlineCode",{parentName:"p"},"Sidebar")," open state on other\ncomponents of your application without the need to drill the toggling function to where you need\nto use it."))}v&&v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs/content/components/sidebar.mdx"}}),v.isMDXComponent=!0},"./src/components/Sidebar/SidebarContext.js":function(e,t,n){"use strict";n.d(t,"b",function(){return p}),n.d(t,"a",function(){return u});var a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),s=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),l=n("./node_modules/@emotion/core/dist/core.browser.esm.js"),c=n("./node_modules/react/index.js"),b=n.n(c),d=Object(c.createContext)(),u=d.Consumer,p=function(e){function t(){var e,n;Object(a.a)(this,t);for(var i=arguments.length,s=new Array(i),l=0;l<i;l++)s[l]=arguments[l];return(n=Object(o.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(s)))).state={isSidebarOpen:!1},n.toggleSidebar=function(){n.setState(function(e){return{isSidebarOpen:!e.isSidebarOpen}})},n}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return Object(l.e)(d.Provider,{value:{isSidebarOpen:this.state.isSidebarOpen,toggleSidebar:this.toggleSidebar}},this.props.children)}}]),t}(b.a.Component);"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SidebarContextConsumer",filename:"src/components/Sidebar/SidebarContext.js"}}),"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SidebarContextProvider",filename:"src/components/Sidebar/SidebarContext.js"}})},"./src/components/Sidebar/index.js":function(e,t,n){"use strict";var a=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),i=n("./node_modules/@emotion/core/dist/core.browser.esm.js"),o=n("./node_modules/react/index.js"),r=n.n(o),s=n("./node_modules/prop-types/index.js"),l=n.n(s),c=function(e){var t=e.theme;return Object(i.d)("label:sidebar-header;display:flex;align-self:flex-start;align-items:center;justify-content:flex-start;min-height:64px;width:100%;padding:",t.spacings.mega,";background-color:",t.colors.bodyColor,";color:",t.colors.n100,";")},b=Object(a.a)("div",{target:"e17dbft90"})(c,"");b.propTypes={children:l.a.node};var d=b;"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Header",filename:"src/components/Sidebar/components/Header/Header.js"}});var u=d;"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Header",filename:"src/components/Sidebar/components/Header/index.js"}});var p=function(e){var t=e.theme;return Object(i.d)("label:sidebar-footer;display:flex;flex:1;align-items:flex-end;padding:",t.spacings.giga,";background-color:",t.colors.n900,";color:",t.colors.n100,";")},m=Object(a.a)("div",{target:"e17ydz1w0"})(p,"");m.propTypes={children:l.a.node};var f=m;"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Footer",filename:"src/components/Sidebar/components/Footer/Footer.js"}});var j=f;"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Footer",filename:"src/components/Sidebar/components/Footer/index.js"}});var v={name:"q8jbgh-nav-list",styles:"label:nav-list;height:auto;justify-self:flex-start;overflow-y:auto;width:100%;"},g=function(){return v},O=Object(a.a)("ul",{target:"eu5okpo0"})(g,"");O.propTypes={children:l.a.node};var h=O;"undefined"!==typeof O&&O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"NavList",filename:"src/components/Sidebar/components/NavList/NavList.js"}});var y=h;"undefined"!==typeof h&&h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"NavList",filename:"src/components/Sidebar/components/NavList/index.js"}});var S={name:"1qroffu-nav-label--secondary--visible",styles:"label:nav-label--secondary--visible;margin-top:0px;"},x=Object(a.a)("div",{target:"ew5ut0z0"})(function(e){var t=e.theme;return Object(i.d)("label:nav-label;margin-left:",t.spacings.kilo,";")},function(e){var t=e.theme;return e.secondary&&Object(i.d)("label:nav-label--secondary;margin-left:0px;margin-top:-",t.spacings.kilo,";transition:margin-top ",t.transitions.slow,";")},function(e){var t=e.secondary,n=e.visible;return t&&n&&S},"");x.propTypes={secondary:l.a.bool,visible:l.a.bool};var _=x;"undefined"!==typeof x&&x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"NavLabel",filename:"src/components/Sidebar/components/NavLabel/NavLabel.js"}});var C=_;"undefined"!==typeof _&&_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"NavLabel",filename:"src/components/Sidebar/components/NavLabel/index.js"}});var N=Object(a.a)("li",{target:"e334mjm0"})(function(e){var t=e.theme;return Object(i.d)("label:nav-item;display:flex;align-items:center;justify-content:flex-start;height:auto;margin:",t.spacings.mega,";padding:",t.spacings.bit,";cursor:pointer;color:",t.colors.n500,";fill:",t.colors.n500,";")},function(e){var t=e.theme;return!e.selected&&Object(i.d)("label:nav-item--hover;&:hover{color:",t.colors.n300,";fill:",t.colors.n300,";}")},function(e){var t=e.theme;return e.selected&&Object(i.d)("label:nav-item--active;color:",t.colors.n100,";font-weight:",t.fontWeight.bold,";")},function(e){var t=e.theme;return e.secondary&&Object(i.d)("label:nav-item--secondary;margin:0px ",t.spacings.giga,";padding:",t.spacings.bit," 0px;transition:top ",t.transitions.default,";")},""),k=function(e){var t=e.label,n=e.secondary,a=e.visible,o=e.defaultIcon,r=e.selectedIcon,s=e.selected,l=e.onClick;return Object(i.e)(N,{selected:s,secondary:n,visible:a,onClick:l},o&&r&&s?r:o,Object(i.e)(C,{secondary:n,visible:a},t))};k.defaultProps={label:"",secondary:!1,visible:!0,defaultIcon:"",selectedIcon:"",selected:!1,onClick:null};var w=k;k&&k===Object(k)&&Object.isExtensible(k)&&Object.defineProperty(k,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"NavItem",filename:"src/components/Sidebar/components/NavItem/NavItem.js"}});var P=w;"undefined"!==typeof w&&w&&w===Object(w)&&Object.isExtensible(w)&&Object.defineProperty(w,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"NavItem",filename:"src/components/Sidebar/components/NavItem/index.js"}});var I=function(e){var t=e.theme;return Object(i.d)("label:sidebar-backdrop;width:100%;height:100%;position:absolute;background-color:",t.colors.n900,";transition:opacity ",t.transitions.default,",visibility ",t.transitions.default,";visibility:hidden;opacity:0;z-index:",t.zIndex.backdrop,";",t.mq.giga,"{visibility:hidden;}")},E={name:"1r67uk6-sidebar-backdrop--visible",styles:"label:sidebar-backdrop--visible;visibility:visible;opacity:0.56;"},L=function(e){return e.visible&&E},A=Object(a.a)("div",{target:"e8hexh10"})(I,L,"");A.propTypes={children:l.a.node,visible:l.a.bool};var F=A;"undefined"!==typeof A&&A&&A===Object(A)&&Object.isExtensible(A)&&Object.defineProperty(A,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Backdrop",filename:"src/components/Sidebar/components/Backdrop/Backdrop.js"}});var T=F;"undefined"!==typeof F&&F&&F===Object(F)&&Object.isExtensible(F)&&Object.defineProperty(F,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Backdrop",filename:"src/components/Sidebar/components/Backdrop/index.js"}});var B=n("./node_modules/polished/dist/polished.es.js");function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var H=r.a.createElement("line",{x1:18,y1:6,x2:6,y2:18}),z=r.a.createElement("line",{x1:6,y1:6,x2:18,y2:18}),W=function(e){return r.a.createElement("svg",D({width:20,height:20,viewBox:"0 0 24 24",fill:"#212933",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-x"},e),H,z)},R=(n.p,{name:"8f0w6p-close-button--visible",styles:"label:close-button--visible;visibility:visible;opacity:1;"}),X=Object(a.a)("span",{target:"e17xz65o0"})(Object(B.a)(),";"),q=Object(a.a)("button",{target:"e17xz65o1"})(function(e){var t=e.theme;return Object(i.d)("label:sidebar-close-button;cursor:pointer;outline:none;display:flex;align-items:center;justify-content:center;height:40px;width:40px;border-radius:50%;background-color:",t.colors.n100,";position:absolute;bottom:",t.spacings.mega,";right:",t.spacings.mega,";transition:opacity 150ms ease-in-out,visibility 150ms ease-in-out;visibility:hidden;opacity:0;z-index:",t.zIndex.sidebar,";",t.mq.giga,"{visibility:hidden;}")},";",function(e){return e.visible&&R},";"),U=function(e){var t=e.visible,n=e.closeButtonLabel,a=e.onClick;return Object(i.e)(q,{visible:t,onClick:a},Object(i.e)(X,null,n),Object(i.e)(W,{"aria-hidden":"true"}))};U.defaultProps={visible:!1,onClick:null};var M=U;U&&U===Object(U)&&Object.isExtensible(U)&&Object.defineProperty(U,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CloseButton",filename:"src/components/Sidebar/components/CloseButton/CloseButton.js"}});var J=M;"undefined"!==typeof M&&M&&M===Object(M)&&Object.isExtensible(M)&&Object.defineProperty(M,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CloseButton",filename:"src/components/Sidebar/components/CloseButton/index.js"}});var Y=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),K=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),G=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),Q=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),V=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),Z=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),$=n("./node_modules/lodash/fp.js"),ee=n("./src/util/type-check.js"),te=function(e){return Object(ee.a)(e)?Object($.findIndex)(function(e){return e.props.selected},e):0},ne=function(e,t){return e?Object(ee.a)(e)?e.map(function(e){return Object(Z.a)({},e,{props:Object(Z.a)({},e.props,{secondary:!0,visible:t})})}):Object(Z.a)({},e,{props:Object(Z.a)({},e.props,{secondary:!0,visible:t})}):null};ne&&ne===Object(ne)&&Object.isExtensible(ne)&&Object.defineProperty(ne,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getSecondaryChild",filename:"src/components/Sidebar/components/SubNavList/utils.js"}}),te&&te===Object(te)&&Object.isExtensible(te)&&Object.defineProperty(te,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getSelectedChildIndex",filename:"src/components/Sidebar/components/SubNavList/utils.js"}});var ae=Object(a.a)("ul",{target:"eeijuub0"})(function(e){var t=e.theme;return Object(i.d)("label:sub-nav-list;margin:-",t.spacings.byte," 0 ",t.spacings.byte," ",t.spacings.tera,";list-style:none;height:0;position:absolute;opacity:0;visibility:hidden;")},function(e){var t=e.theme,n=e.selectedChildIndex;return n>=0&&Object(i.d)("label:sub-nav-list--selected;&::after{content:'';width:2px;background:",t.colors.p500,";height:",32,"px;border-radius:",t.borderRadius.kilo,";position:absolute;top:calc(",32,"px * ",n,");transition:top ",t.transitions.default,";}")},function(e){var t=e.theme,n=e.children;return n&&Object(i.d)("label:sub-nav-list__children;&::before{content:'';width:2px;background:",t.colors.n700,";height:calc(",32,"px * ",n.length,");position:absolute;top:0;border-radius:",t.borderRadius.kilo,";}")},function(e){var t=e.theme,n=e.visible,a=e.children;return n&&Object(i.d)("label:sub-nav-list--visible;height:calc(",32,"px * ",a.length,");position:relative;opacity:1;visibility:visible;transition:height ",t.transitions.default,",opacity ",t.transitions.default," 100ms,visibility ",t.transitions.default," 100ms;")},""),ie=function(e){var t=e.children,n=e.visible;return Object(i.e)(ae,{visible:n,selectedChildIndex:te(t)},ne(t,n))};ie.defaultProps={children:null,visible:!1};var oe=ie;ie&&ie===Object(ie)&&Object.isExtensible(ie)&&Object.defineProperty(ie,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SubNavList",filename:"src/components/Sidebar/components/SubNavList/SubNavList.js"}});var re=oe;"undefined"!==typeof oe&&oe&&oe===Object(oe)&&Object.isExtensible(oe)&&Object.defineProperty(oe,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SubNavList",filename:"src/components/Sidebar/components/SubNavList/index.js"}});var se=function(e){return!!e&&(Object(ee.a)(e)?!Object($.isEmpty)(e.filter(function(e){return e.props.selected})):e.props.selected)},le=se;se&&se===Object(se)&&Object.isExtensible(se)&&Object.defineProperty(se,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"hasSelectedChild",filename:"src/components/Sidebar/components/NavItem/utils.js"}});var ce=Object(a.a)("div",{target:"etuzo6d0"})(function(e){var t=e.theme;return Object(i.d)("label:nav-aggregator;display:flex;flex-direction:row;justify-content:flex-start;height:auto;margin:",t.spacings.mega,";padding:",t.spacings.bit,";cursor:pointer;color:",t.colors.n500,";fill:",t.colors.n500,";")},function(e){var t=e.theme;return!e.selected&&Object(i.d)("label:nav-aggregator--hover;&:hover{color:",t.colors.n300,";fill:",t.colors.n300,";}")},function(e){var t=e.theme;return e.selected&&Object(i.d)("label:nav-aggregator--active;color:",t.colors.n100,";")},""),be=function(e){function t(){var e,n;Object(Y.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(G.a)(this,(e=Object(Q.a)(t)).call.apply(e,[this].concat(i)))).state={open:!1},n.closeAggregator=function(){n.setState({open:!1})},n.toggleAggregator=function(){var e=n.props.onClick;n.setState(function(e){return{open:!e.open}}),e&&e()},n}return Object(V.a)(t,e),Object(K.a)(t,[{key:"componentDidUpdate",value:function(e,t){var n=this.props.children;(le(e.children)||t.open)&&!le(n)&&this.closeAggregator()}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.label,a=e.defaultIcon,r=e.selectedIcon,s=this.state.open;return Object(i.e)(o.Fragment,null,Object(i.e)(ce,{selected:le(t),onClick:this.toggleAggregator},a&&r&&le(t)?r:a,Object(i.e)(C,null,n)),t&&Object(i.e)(re,{visible:s},t))}}],[{key:"getDerivedStateFromProps",value:function(e){return le(e.children)?{open:!0}:null}}]),t}(o.Component);be.defaultProps={children:null,label:"",defaultIcon:"",selectedIcon:"",onClick:null};var de=be;"undefined"!==typeof be&&be&&be===Object(be)&&Object.isExtensible(be)&&Object.defineProperty(be,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Aggregator",filename:"src/components/Sidebar/components/Aggregator/Aggregator.js"}});var ue=de;"undefined"!==typeof de&&de&&de===Object(de)&&Object.isExtensible(de)&&Object.defineProperty(de,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Aggregator",filename:"src/components/Sidebar/components/Aggregator/index.js"}});var pe=function(e){var t=e.theme;return Object(i.d)("label:sidebar;display:flex;flex-direction:column;height:100%;min-width:",256,"px;background-color:",t.colors.n900,";transition:transform ",t.transitions.default,";position:absolute;transform:translateX(-100%);z-index:",t.zIndex.sidebar,";",t.mq.giga,"{transform:translateX(0);position:relative;}")},me=function(e){var t=e.theme;return e.open&&Object(i.d)("label:sidebar--open;transform:translateX(0);",t.mq.giga,"{transform:translateX(0);}")},fe=Object(a.a)("div",{target:"e1fp19630"})(pe,me,""),je=function(e){var t=e.children,n=e.open,a=e.closeButtonLabel,r=e.onClose;return Object(i.e)(o.Fragment,null,Object(i.e)(fe,{open:n},t),Object(i.e)(T,{visible:n,onClick:r}),Object(i.e)(J,{visible:n,closeButtonLabel:a,onClick:r}))};je.defaultProps={children:"",open:!1,onClose:null},je.Header=u,je.Footer=j,je.NavList=y,je.NavItem=P,je.Aggregator=ue;var ve=je;je&&je===Object(je)&&Object.isExtensible(je)&&Object.defineProperty(je,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Sidebar",filename:"src/components/Sidebar/Sidebar.js"}});var ge=n("./src/components/Sidebar/SidebarContext.js");t.a=ve;"undefined"!==typeof ve&&ve&&ve===Object(ve)&&Object.isExtensible(ve)&&Object.defineProperty(ve,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Sidebar",filename:"src/components/Sidebar/index.js"}}),"undefined"!==typeof ge.a&&ge.a&&ge.a===Object(ge.a)&&Object.isExtensible(ge.a)&&Object.defineProperty(ge.a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SidebarContextConsumer",filename:"src/components/Sidebar/index.js"}}),"undefined"!==typeof ge.b&&ge.b&&ge.b===Object(ge.b)&&Object.isExtensible(ge.b)&&Object.defineProperty(ge.b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SidebarContextProvider",filename:"src/components/Sidebar/index.js"}})},"./src/util/type-check.js":function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return o});var a=function(e){return"function"===typeof e};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isFunction",filename:"src/util/type-check.js"}});var i=function(e){return"string"===typeof e};i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isString",filename:"src/util/type-check.js"}});var o=function(e){return e&&"object"===typeof e&&e.constructor===Array};"undefined"!==typeof o&&o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isArray",filename:"src/util/type-check.js"}})}}]);
//# sourceMappingURL=docs-content-components-sidebar.5bb2c248fc6a1380eb8f.js.map