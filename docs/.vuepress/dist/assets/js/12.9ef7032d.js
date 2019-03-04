(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{351:function(e,t,n){"use strict";n.r(t);var a=n(14),s=Object(a.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"faq"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#faq","aria-hidden":"true"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),n("h2",{attrs:{id:"why-can-t-palette-styl-and-index-styl-merge-into-one-api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#why-can-t-palette-styl-and-index-styl-merge-into-one-api","aria-hidden":"true"}},[e._v("#")]),e._v(" Why can't "),n("code",[e._v("palette.styl")]),e._v(" and "),n("code",[e._v("index.styl")]),e._v(" merge into one API?")]),e._v(" "),n("p",[e._v("The "),n("code",[e._v("palette.styl")]),e._v(" is responsible for global color settings. During compilation, theme color constants should be resolved by the preprocessor first and then be applied to the global context.")]),e._v(" "),n("p",[e._v("But for "),n("code",[e._v("index.styl")]),e._v(". its job is to override the default styles of application. According to the priority principle of css, the later style has a higher priority, so it should be generated at the end of the CSS file.")]),e._v(" "),n("p",[e._v("A simple diagram describing the stylus compiler's compilation order as follows:")]),e._v(" "),n("p",[e._v("@flowstart\nstage1=>operation: palette.styl\nstage2=>operation: default app styles\nstage3=>operation: index.styl")]),e._v(" "),n("p",[e._v("stage1->stage2->stage3\n@flowend")]),e._v(" "),n("br"),e._v(" "),n("h2",{attrs:{id:"what-s-the-differences-between-the-clientdynamicmodules-and-enhanceappfiles"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#what-s-the-differences-between-the-clientdynamicmodules-and-enhanceappfiles","aria-hidden":"true"}},[e._v("#")]),e._v(" What's the differences between the "),n("code",[e._v("clientDynamicModules")]),e._v(" and "),n("code",[e._v("enhanceAppFiles")]),e._v("?")]),e._v(" "),n("p",[e._v("Let's take a look back first, both "),n("code",[e._v("clientDynamicModules")]),e._v(" and "),n("code",[e._v("enhanceAppFiles")]),e._v(" can generate modules with dynamic javascript code during compile time.")]),e._v(" "),n("p",[e._v("The difference is that the files generated by "),n("code",[e._v("enhanceAppFiles")]),e._v(" will be loaded and applied automatically when the application is initialized on the client side. While the files generated by "),n("code",[e._v("clientDynamicModules")]),e._v(" needs to be imported as "),n("code",[e._v("@dynamic/xxx")]),e._v(" by the users themselves.")]),e._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[e._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[e._v("exports")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Import by entry file automatically.")]),e._v("\n  enhanceAppFiles"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'constans-a'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    content"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token string"}},[e._v("`...`")])]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Need to use via: import '@dynamic/constans-b'")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("clientDynamicModules")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'constans-b'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      content"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token string"}},[e._v("`...`")])]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),n("h2",{attrs:{id:"when-do-i-need-to-use-enhanceappfiles"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#when-do-i-need-to-use-enhanceappfiles","aria-hidden":"true"}},[e._v("#")]),e._v(" When do I need to use "),n("code",[e._v("enhanceAppFiles")]),e._v("?")]),e._v(" "),n("ol",[n("li",[e._v("I want to execute some code on the client side automatically.")]),e._v(" "),n("li",[e._v("I don't have a need for reuse of this module.")])]),e._v(" "),n("p",[n("strong",[e._v("Example:")])]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vuepress/tree/master/packages/@vuepress/plugin-register-components/index.js#L24",target:"_blank",rel:"noopener noreferrer"}},[e._v("@vuepress/plugin-register-components"),n("OutboundLink")],1),e._v(": Automatically registering components on the client side.")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vuepress/blob/master/packages/@vuepress/plugin-pagination/index.js#L14",target:"_blank",rel:"noopener noreferrer"}},[e._v("@vuepress/plugin-pagination"),n("OutboundLink")],1),e._v(": Automatically insert Vue plugins to expand the API of the client.")])]),e._v(" "),n("h2",{attrs:{id:"when-do-i-need-to-use-clientdynamicmodules"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#when-do-i-need-to-use-clientdynamicmodules","aria-hidden":"true"}},[e._v("#")]),e._v(" When do I need to use "),n("code",[e._v("clientDynamicModules")]),e._v("?")]),e._v(" "),n("ol",[n("li",[e._v("I want to generate a dynamic module that needs to be invoked at a specific time.")]),e._v(" "),n("li",[e._v("I want to use this module in different modules.")])]),e._v(" "),n("p",[n("strong",[e._v("Example:")])]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vuepress/blob/master/packages/@vuepress/plugin-blog/index.js#L145",target:"_blank",rel:"noopener noreferrer"}},[e._v("@vuepress/plugin-blog"),n("OutboundLink")],1),e._v(": Using compile-time metadata to generate some dynamic blog-related modules and initialize them on the client side by using "),n("code",[e._v("enhanceAppFiles")]),e._v(".")])])])},[],!1,null,null,null);t.default=s.exports}}]);