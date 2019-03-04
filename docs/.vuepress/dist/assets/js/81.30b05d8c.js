(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{331:function(e,a,t){"use strict";t.r(a);var r=t(14),s=Object(r.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"vuepress-plugin-container"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-container","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://github.com/vuejs/vuepress/tree/master/packages/@vuepress/plugin-container",target:"_blank",rel:"noopener noreferrer"}},[e._v("@vuepress/plugin-container"),t("OutboundLink")],1)]),e._v(" "),t("blockquote",[t("p",[e._v("Markdown 容器插件")])]),e._v(" "),t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[e._v("#")]),e._v(" 安装")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("yarn add -D @vuepress/plugin-container@next\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# OR npm install -D @vuepress/plugin-container@next")]),e._v("\n")])])]),t("h2",{attrs:{id:"使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用","aria-hidden":"true"}},[e._v("#")]),e._v(" 使用")]),e._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[e._v("module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  plugins"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'@vuepress/container'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("h2",{attrs:{id:"选项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选项","aria-hidden":"true"}},[e._v("#")]),e._v(" 选项")]),e._v(" "),t("h3",{attrs:{id:"type"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#type","aria-hidden":"true"}},[e._v("#")]),e._v(" type")]),e._v(" "),t("ul",[t("li",[e._v("类型: "),t("code",[e._v("string")])]),e._v(" "),t("li",[e._v("这是一个必需的选项")])]),e._v(" "),t("p",[e._v("容器的类型。举个例子，如果 "),t("code",[e._v("type")]),e._v(" 被设置为 "),t("code",[e._v("foo")]),e._v("，则仅有下面的语法会被视为对应的容器：")]),e._v(" "),t("div",{staticClass:"language-md extra-class"},[t("pre",{pre:!0,attrs:{class:"language-md"}},[t("code",[e._v("::: foo bar\n随便写点啥 ~\n:::\n")])])]),t("h3",{attrs:{id:"defaulttitle"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#defaulttitle","aria-hidden":"true"}},[e._v("#")]),e._v(" defaultTitle")]),e._v(" "),t("ul",[t("li",[e._v("类型: "),t("code",[e._v("string")])]),e._v(" "),t("li",[e._v("默认值: "),t("code",[e._v("type")]),e._v(" 的大写形式")])]),e._v(" "),t("p",[e._v("容器的默认标题。如果没有提供标题，则会使用 "),t("code",[e._v("defaultTitle")]),e._v(" 作为容器的标题。")]),e._v(" "),t("h3",{attrs:{id:"before"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#before","aria-hidden":"true"}},[e._v("#")]),e._v(" before")]),e._v(" "),t("ul",[t("li",[e._v("类型: "),t("code",[e._v("string | Function")])]),e._v(" "),t("li",[e._v("默认值: "),t("code",[e._v("undefined")])])]),e._v(" "),t("p",[e._v("要插入在容器前的 HTML。如果设置为一个函数，将传入当前的 "),t("code",[e._v("info")]),e._v(" 作为第一个参数。（在上面的例子中，"),t("code",[e._v("info")]),e._v(" 的值为 "),t("code",[e._v("bar")]),e._v("。）如果设置了这个值，它将覆盖 "),t("code",[e._v("defaultTitle")]),e._v(" 的效果。")]),e._v(" "),t("h3",{attrs:{id:"after"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#after","aria-hidden":"true"}},[e._v("#")]),e._v(" after")]),e._v(" "),t("ul",[t("li",[e._v("类型: "),t("code",[e._v("string | Function")])]),e._v(" "),t("li",[e._v("默认值: "),t("code",[e._v("undefined")])])]),e._v(" "),t("p",[e._v("要插入在容器后的 HTML。如果设置为一个函数，将传入当前的 "),t("code",[e._v("info")]),e._v(" 作为第一个参数。（在上面的例子中，"),t("code",[e._v("info")]),e._v(" 的值为 "),t("code",[e._v("bar")]),e._v("。）如果设置了这个值，它将覆盖 "),t("code",[e._v("defaultTitle")]),e._v(" 的效果。")]),e._v(" "),t("h3",{attrs:{id:"validate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#validate","aria-hidden":"true"}},[e._v("#")]),e._v(" validate")]),e._v(" "),t("ul",[t("li",[e._v("类型: "),t("code",[e._v("Function")])]),e._v(" "),t("li",[e._v("默认值: "),t("code",[e._v("undefined")])])]),e._v(" "),t("p",[e._v("一个用于判定容器是否结束的函数。当认定容器范围结束时应返回一个 "),t("code",[e._v("true")]),e._v("。")]),e._v(" "),t("h3",{attrs:{id:"render"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#render","aria-hidden":"true"}},[e._v("#")]),e._v(" render")]),e._v(" "),t("ul",[t("li",[e._v("类型: "),t("code",[e._v("Function")])]),e._v(" "),t("li",[e._v("默认值: "),t("code",[e._v("undefined")])])]),e._v(" "),t("p",[e._v("容器开头和结束 token 的渲染函数。如果设置了这个值，它将覆盖 "),t("code",[e._v("before")]),e._v(", "),t("code",[e._v("after")]),e._v(" 和 "),t("code",[e._v("defaultTitle")]),e._v(" 的效果。")]),e._v(" "),t("h3",{attrs:{id:"marker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#marker","aria-hidden":"true"}},[e._v("#")]),e._v(" marker")]),e._v(" "),t("ul",[t("li",[e._v("类型: "),t("code",[e._v("string")])]),e._v(" "),t("li",[e._v("默认值: "),t("code",[e._v("':'")])])]),e._v(" "),t("p",[e._v("用于分隔符的字符。")])])},[],!1,null,null,null);a.default=s.exports}}]);