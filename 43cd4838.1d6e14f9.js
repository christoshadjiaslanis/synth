(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),c=(n(0),n(91)),o={id:"core-concepts",title:"Core Concepts"},i={unversionedId:"core-concepts",id:"core-concepts",isDocsHomePage:!1,title:"Core Concepts",description:"This section covers the core concepts found in Synth.",source:"@site/docs/core-concepts.md",slug:"/core-concepts",permalink:"/synth/core-concepts",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/core-concepts.md",version:"current",sidebar:"docsSidebar",previous:{title:"Hello World",permalink:"/synth/hello-world"},next:{title:"Schema",permalink:"/synth/schema"}},s=[{value:"Workspaces",id:"workspaces",children:[]},{value:"Namespaces",id:"namespaces",children:[]},{value:"Collections",id:"collections",children:[]},{value:"Schema",id:"schema",children:[]},{value:"Field References",id:"field-references",children:[]},{value:"Importing Datasets",id:"importing-datasets",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"This section covers the core concepts found in Synth."),Object(c.b)("h2",{id:"workspaces"},"Workspaces"),Object(c.b)("p",null,"A workspace, marked by a ",Object(c.b)("inlineCode",{parentName:"p"},".synth/")," subdirectory, represent a collection of synthetic data namespaces managed by Synth."),Object(c.b)("p",null,"A workspace can have ",Object(c.b)("em",{parentName:"p"},"zero or more namespaces"),", where the namespaces are just represented as subdirectories as well as some internal state in ",Object(c.b)("inlineCode",{parentName:"p"},".synth/"),"."),Object(c.b)("p",null,"Below is an example directory structure for a workspace with a single namespace, ",Object(c.b)("inlineCode",{parentName:"p"},"my_namepace"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"\u251c\u2500\u2500 .synth\n\u2502\xa0\xa0 \u251c\u2500\u2500 config.toml\n\u2502\xa0\xa0 \u2514\u2500\u2500 db.sqlite\n\u2514\u2500\u2500 my_namespace\n    \u251c\u2500\u2500 my_collection_1.json\n    \u2514\u2500\u2500 my_collection_2.json\n")),Object(c.b)("h2",{id:"namespaces"},"Namespaces"),Object(c.b)("p",null,"The ",Object(c.b)("strong",{parentName:"p"},"namespace")," is the top-level abstraction in Synth. Namespaces are the equivalent of ",Object(c.b)("em",{parentName:"p"},"Schemas")," in SQL-land. Fields in a namespace can refer to other fields in a namespace - but you cannot reference data across namespaces."),Object(c.b)("h2",{id:"collections"},"Collections"),Object(c.b)("p",null,"Every namespace has zero or more ",Object(c.b)("strong",{parentName:"p"},"collections"),". Collections are addressable by their name (for example ",Object(c.b)("inlineCode",{parentName:"p"},"my_collection"),") and correspond to tables in SQL-land. Strictly speaking, Collections are a super-set of tables as they are in fact arbitrarily deep document trees."),Object(c.b)("h2",{id:"schema"},"Schema"),Object(c.b)("p",null,"The schema is the core data structure that you need to understand to be productive with Synth. The schema represents your data model, it tells Synth exactly how to generate data, which fields we need, what types and so on. This a little involved so there is a section devoted to just the ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/synth/schema"}),"Schema")),Object(c.b)("h2",{id:"field-references"},"Field References"),Object(c.b)("p",null,"Field References are a way to reference fields in the Schema. It's pretty intuitive."),Object(c.b)("p",null,"To reference the ",Object(c.b)("inlineCode",{parentName:"p"},"age")," field in ",Object(c.b)("inlineCode",{parentName:"p"},"users")," we simply write ",Object(c.b)("inlineCode",{parentName:"p"},"users.age"),". This can go arbitrarily deep, so we can do ",Object(c.b)("inlineCode",{parentName:"p"},"users.address.postcode")," and we can even go through array variants like this, for example ",Object(c.b)("inlineCode",{parentName:"p"},"users.friends.0"),"."),Object(c.b)("p",null,"Field references can also be used inside a schema to specify things like Foreign Keys (more on this later)."),Object(c.b)("h2",{id:"importing-datasets"},"Importing Datasets"),Object(c.b)("p",null,"Synth can ingest and build data models (aka Synth Schemas) on the fly - assuming it is fed a syntactically correct JSON object."),Object(c.b)("p",null,"You can use the ",Object(c.b)("inlineCode",{parentName:"p"},"synth import")," command to import data into a namespace."),Object(c.b)("p",null,"Not only will Synth automatically ",Object(c.b)("em",{parentName:"p"},"derive")," the Schema for you, inferring the types and topology of the content graph. Synth will also automatically adjust the Schema as new information is ingested. FOr more on this, refer to the ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/synth/inference"}),"inference")," page."))}p.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,u=d["".concat(o,".").concat(m)]||d[m]||b[m]||c;return n?a.a.createElement(u,i(i({ref:t},l),{},{components:n})):a.a.createElement(u,i({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<c;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);