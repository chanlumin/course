(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{356:function(e,t,a){"use strict";a.r(t);var s=a(14),n=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),a("h2",{attrs:{id:"config-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config-file","aria-hidden":"true"}},[e._v("#")]),e._v(" Config File")]),e._v(" "),a("p",[e._v("Without any configuration, the page is pretty minimal, and the user has no way to navigate around the site. To customize your site, let's first create a "),a("code",[e._v(".vuepress")]),e._v(" directory inside your docs directory. This is where all VuePress-specific files will be placed in. Your project structure is probably like this:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(".\n├─ docs\n│  ├─ README.md\n│  └─ .vuepress\n│     └─ config.js\n└─ package.json\n")])])]),a("p",[e._v("The essential file for configuring a VuePress site is "),a("code",[e._v(".vuepress/config.js")]),e._v(", which should export a JavaScript object:")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[e._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Hello VuePress'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  description"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Just playing around'")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("If you've got the dev server running, you should see the page now has a header with the title and a search box. VuePress comes with built-in headers-based search - it automatically builds a simple search index from the title, "),a("code",[e._v("h2")]),e._v(" and "),a("code",[e._v("h3")]),e._v(" headers from all the pages.")]),e._v(" "),a("p",[e._v("Consult the "),a("router-link",{attrs:{to:"/config/"}},[e._v("Config Reference")]),e._v(" for a full list of options.")],1),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("Alternative Config Formats")]),e._v(" "),a("p",[e._v("You can also use YAML ("),a("code",[e._v(".vuepress/config.yml")]),e._v(") or TOML ("),a("code",[e._v(".vuepress/config.toml")]),e._v(") formats for the configuration file.")])]),e._v(" "),a("h2",{attrs:{id:"theme-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#theme-configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Theme Configuration")]),e._v(" "),a("p",[e._v("A VuePress theme is responsible for all the layout and interactivity details of your site. VuePress ships with a default theme (you are looking at it right now) which is designed for technical documentation. It exposes a number of options that allow you to customize the navbar, sidebar and homepage, etc. For details, check out the "),a("router-link",{attrs:{to:"/theme/default-theme-config.html"}},[e._v("Default Theme Config")]),e._v(" page.")],1),e._v(" "),a("p",[e._v("If you wish to develop a custom theme, see "),a("router-link",{attrs:{to:"/theme/writing-a-theme.html"}},[e._v("Writing a theme")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"app-level-enhancements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#app-level-enhancements","aria-hidden":"true"}},[e._v("#")]),e._v(" App Level Enhancements")]),e._v(" "),a("p",[e._v("Since the VuePress app is a standard Vue app, you can apply app-level enhancements by creating a file "),a("code",[e._v(".vuepress/enhanceApp.js")]),e._v(", which will be imported into the app if it is present. The file should "),a("code",[e._v("export default")]),e._v(" a hook function which will receive an object containing some app-level values. You can use this hook to install additional Vue plugins, register global components, or add additional router hooks:")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("default")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// the version of Vue being used in the VuePress app")]),e._v("\n  options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// the options for the root Vue instance")]),e._v("\n  router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// the router instance for the app")]),e._v("\n  siteData "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// site metadata")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// ...apply enhancements to the app")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[a("strong",[e._v("Related:")])]),e._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:"/plugin/option-api.html#enhanceappfiles"}},[e._v("App Level Enhancements in Plugin API")])],1)])])},[],!1,null,null,null);t.default=n.exports}}]);