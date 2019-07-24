(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"./docs/content/getting-started/developers.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return s});var i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=(n("./node_modules/@emotion/core/dist/core.browser.esm.js"),n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),c={},r="wrapper";function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)(r,Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"developers"},"Developers"),Object(a.b)("h2",{id:"install"},"Install"),Object(a.b)("h3",{id:"adding-circuit-to-an-existing-app"},"Adding Circuit to an existing app"),Object(a.b)("p",null,"You can install Circuit via npm or yarn. It relies on\n",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/emotion-js/emotion"}),"emotion")," and\n",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/emotion-js/emotion/tree/master/packages/emotion-theming"}),"emotion-theming")," (as well as\nReact) being available in whatever project you are working on."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"npm install @sumup/circuit-ui @emotion/core @emotion/styled emotion-theming\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @sumup/circuit-ui @emotion/core @emotion/styled emotion-theming\n")),Object(a.b)("h3",{id:"creating-a-new-app-with-circuit"},"Creating a new app with Circuit"),Object(a.b)("p",null,"You can use ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/sumup/create-sumup-react-app"}),"create-sumup-react-app")," (powered by ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/facebook/create-react-app"}),"create-react-app"),") to scaffold out a new development-ready React app with Circuit built-in."),Object(a.b)("h3",{id:"creating-presentations-with-circuit"},"Creating presentations with Circuit"),Object(a.b)("p",null,"You can create presentations with ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/sumup/circuit-deck"}),"circuit-deck"),", a ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/jxnblk/mdx-deck"}),"mdx-deck")," starter with Circuit built-in."),Object(a.b)("h2",{id:"configuring-the-theme"},"Configuring the theme"),Object(a.b)("p",null,"At the root of your application, you should tell your app which theme to use.\nIn most cases, you will want to use the SumUp default theme."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),"import { ThemeProvider } from 'emotion-theming';\nimport { Button, theme } from '@sumup/circuit-ui';\n\nconst App = () => (\n  <ThemeProvider theme={theme.circuit}>\n    <Button primary>Click me</Button>\n  </ThemeProvider>\n);\n\nexport default App;\n")),Object(a.b)("h2",{id:"using-components"},"Using components"),Object(a.b)("p",null,"Simply import components by name from the ",Object(a.b)("inlineCode",{parentName:"p"},"@sumup/circuit-ui")," package, as demonstrated\nabove."),Object(a.b)("h2",{id:"using-helpers"},"Using helpers"),Object(a.b)("p",null,"There are a few helpers you may want to use within Circuit."),Object(a.b)("h2",{id:"injecting-global-styles"},"Injecting global styles"),Object(a.b)("p",null,"Sometimes you may need to apply global styles to your page. Here is how you can do this with the utilities provided by Circuit UI."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),"import { GlobalStyles } from '@sumup/circuit-ui';\n\nconst customStyles = `\n  body {\n    color: red;\n  }\n`;\n\n<GlobalStyles custom={customStyles}/>\n")),Object(a.b)("h2",{id:"contributing"},"Contributing"),Object(a.b)("p",null,"Please see our ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/sumup/circuit-ui/blob/master/.github/CONTRIBUTING.md"}),"contribution guidelines"),"\nto learn how you can contribute to thise project."))}s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs/content/getting-started/developers.mdx"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=docs-content-getting-started-developers.5bb2c248fc6a1380eb8f.js.map