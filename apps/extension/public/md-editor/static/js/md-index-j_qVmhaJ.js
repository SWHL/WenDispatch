const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./md-mermaid-CY7LD1D6.js","./md-codemirror-maQIU9U3.js","./md-vendor_.pnpm-D1-OFBrs.js","../css/md-vendor_-DppCjOAl.css"])))=>i.map(i=>d[i]);
import{_ as __vitePreload,h as highlightActiveLineGutter,a as highlightSpecialChars,b as history,f as foldGutter,d as drawSelection,c as dropCursor,E as EditorState,i as indentOnInput,s as syntaxHighlighting,e as bracketMatching,g as closeBrackets,j as autocompletion,r as rectangularSelection,k as crosshairCursor,l as highlightActiveLine,m as highlightSelectionMatches,n as indentationMarkers,o as keymap,p as closeBracketsKeymap,q as defaultKeymap,t as searchKeymap,u as historyKeymap,v as foldKeymap,w as completionKeymap,x as lintKeymap,y as acceptCompletion,z as indentWithTab,A as defaultHighlightStyle,B as EditorView,C as css$1,D as undo,F as redo,G as javascript$1,H as markdown$1,P as Prec,I as placeholder,J as EditorSelection,K as languages,L as markdownLanguage,M as vsCodeDark,N as vsCodeLight,O as Compartment,S as StateEffect,Q as StateField,R as Decoration}from"./md-codemirror-maQIU9U3.js";import{bx as g,by as DOMPurify,bz as defineComponent,bA as onMounted,bB as openBlock,bC as createBlock,bD as withCtx,bE as unref,bF as createElementBlock,bG as createBaseVNode,bH as createCommentVNode,bI as Transition,bJ as ref,bK as mergeProps,bL as Toaster_default,bM as deflateSync,bN as frontMatter,bO as readingTime,bP as postcss,bQ as creator,bR as postcssCalc,bS as axios,bT as watch,bU as customRef,bV as D,bW as juice,bX as defineStore,bY as useColorMode,bZ as onBeforeUnmount,b_ as computed,b$ as useToggle,c0 as reactive,c1 as storeToRefs,c2 as toDisplayString,c3 as Se,c4 as renderSlot,c5 as normalizeProps,c6 as guardReactiveProps,c7 as Tv,c8 as twMerge,c9 as clsx,ca as createVNode,cb as kv,cc as Ov,cd as Av,ce as normalizeClass,cf as O,cg as cva,ch as Nv,ci as Mv,cj as Fv,ck as Vv,cl as nu,cm as $u,cn as Pu,co as Xl,cp as X,cq as Iv,cr as useVModel,cs as withDirectives,ct as vModelText,cu as isRef,cv as useAttrs,cw as vModelDynamic,cx as Vh,cy as Ot,cz as Iu,cA as Bu,cB as toast,bh as v4,cC as onBeforeMount,cD as Fragment,cE as Package,cF as createTextVNode,cG as Search,cH as Plus,cI as renderList,cJ as FileText,cK as Calendar,cL as Clock,cM as FileInput,cN as FileDown,cO as Pencil,cP as Trash2,cQ as reactiveOmit,cR as useForwardPropsEmits,cS as RadioGroupRoot_default,cT as useForwardProps,cU as RadioGroupIndicator_default,cV as Circle,cW as RadioGroupItem_default,cX as toTypedSchema,cY as create$3,cZ as create$6,c_ as Form,c$ as Field,d0 as toRaw,d1 as gy,d2 as Cy,d3 as by,d4 as Minus,d5 as wy,d6 as Cg,d7 as useTemplateRef,d8 as onUnmounted,d9 as _g,da as Ay,db as normalizeStyle,dc as Ry,dd as bg,de as gg,df as Ky,dg as Xy,dh as Yy,di as Check,dj as Jy,dk as qy,dl as tg,dm as ChevronDown,dn as eg,dp as ChevronUp,dq as ng,dr as Hy,ds as ag,dt as jy,du as Qy,dv as Wy,dw as wg,dx as xg,dy as create$7,dz as useFileDialog,dA as withModifiers,dB as CloudUpload,dC as Re,dD as useDark,dE as markRaw,dF as vShow,dG as nextTick,dH as PenLine,dI as Eye,dJ as Download,dK as List,dL as throttle,dM as ArrowUpFromLine,dN as rm,dO as dm,dP as um,dQ as vm,dR as fm,dS as im,dT as toPng,dU as Rv,dV as ap,dW as uh,dX as fh,dY as ch,dZ as hh,d_ as vh,d$ as dh,e0 as resolveComponent,e1 as ChevronRight,e2 as Ellipsis,e3 as SquarePlus,e4 as History,e5 as Ch,e6 as gh,e7 as wh,e8 as ou,e9 as Hg,ea as Wg,eb as Ug,ec as qg,ed as jg,ee as withKeys,ef as ArrowUpNarrowWide,eg as ChevronsDownUp,eh as ChevronsUpDown,ei as EyeOff,ej as Info,ek as Image,el as Settings,em as MessageCircle,en as LoaderCircle,eo as Copy,ep as RefreshCcw,eq as vModelCheckbox,er as Expand,es as Wv,et as jv,eu as Gh,ev as Xh,ew as Yh,ex as qh,ey as Uh,ez as liteAdaptorExports,eA as htmlExports,eB as texExports,eC as AllPackagesExports,eD as svgExports,eE as mathjaxExports,eF as sy,eG as ry,eH as ey,eI as Jh,eJ as iy,eK as toRefs,eL as Undo2,eM as Redo2,eN as ClipboardPaste,eO as WandSparkles,eP as Replace,eQ as Upload,eR as FileCode,eS as FolderKanban,eT as FileCog,eU as Type,eV as Bold,eW as Italic,eX as Strikethrough,eY as Link,eZ as Code,e_ as Heading1,e$ as Heading2,f0 as Heading3,f1 as Heading4,f2 as Heading5,f3 as Heading6,f4 as ListOrdered,f5 as Link2,f6 as Table,f7 as Contact,f8 as ay,f9 as ty,fa as PanelLeft,fb as useClipboard,fc as Menu,fd as Smartphone,fe as Monitor,ff as Palette,fg as Send,fh as resolveDynamicComponent,fi as FolderOpen,fj as Pause,fk as Settings2,fl as Bot,fm as GripVertical,fn as SplitterResizeHandle_default,fo as SplitterGroup_default,fp as CaseSensitive,fq as Regex,fr as WholeWord,fs as ReplaceAll,ft as useDebounceFn,fu as qiniu,fv as Buffer,fw as COS,fx as OSS,fy as CryptoJS,fz as S3Client,fA as getSignedUrl,fB as PutObjectCommand,fC as upload,fD as SplitterPanel_default,fE as Pen,fF as imageCompression,fG as createPinia,fH as createApp}from"./md-vendor_.pnpm-D1-OFBrs.js";import{y as yaml,x as xml,w as wasm,v as vbnet,t as typescript,s as swift,a as sql,b as shell,c as scss,r as rust,d as ruby,e as r,p as pythonRepl,f as python,g as plaintext,h as phpTemplate,i as php,j as perl,o as objectivec,m as markdown,k as makefile,l as lua,n as less,q as kotlin,u as json,z as javascript,A as java,B as ini,C as graphql,D as go,E as diff,F as css,G as csharp,H as cpp,I as c,J as bash,K as HighlightJS}from"./md-hljs-BnkEzLBU.js";import{s as standaloneExports,p as parserPostcss,a as parserBabel,b as parserMarkdown}from"./md-prettier-DtSIt55H.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function ucfirst(e){return e.slice(0,1).toUpperCase()+e.slice(1).toLowerCase()}async function initializeMermaid(){try{typeof window<"u"&&window.mermaid?window.mermaid.initialize({startOnLoad:!1}):(await __vitePreload(()=>import("./md-mermaid-CY7LD1D6.js"),__vite__mapDeps([0,1,2,3]),import.meta.url)).default.initialize({startOnLoad:!1})}catch(e){console.warn("[md-editor] Mermaid initialization failed:",e)}}const COMMON_LANGUAGES={bash,c,cpp,csharp,css,diff,go,graphql,ini,java,javascript,json,kotlin,less,lua,makefile,markdown,objectivec,perl,php,"php-template":phpTemplate,plaintext,python,"python-repl":pythonRepl,r,ruby,rust,scss,shell,sql,swift,typescript,vbnet,wasm,xml,yaml},HLJS_VERSION="11.11.1",HLJS_CDN_BASE=`https://cdn-doocs.oss-cn-shenzhen.aliyuncs.com/npm/highlightjs/${HLJS_VERSION}`,loadingLanguages=new Map;function grammarUrlFor(e){return`${HLJS_CDN_BASE}/es/languages/${e}.min.js`}async function loadAndRegisterLanguage(e,t){if(t.getLanguage(e))return;if(loadingLanguages.has(e)){await loadingLanguages.get(e);return}const n=(async()=>{try{const o=await import(grammarUrlFor(e));t.registerLanguage(e,o.default)}catch(o){throw console.warn(`Failed to load language: ${e}`,o),o}finally{loadingLanguages.delete(e)}})();loadingLanguages.set(e,n),await n}function formatHighlightedCode(e,t=!1){let n=e;return n=n.replace(/(<span[^>]*>[^<]*<\/span>)(\s+)(<span[^>]*>[^<]*<\/span>)/g,(o,a,i,u)=>a+u.replace(/^(<span[^>]*>)/,`$1${i}`)),n=n.replace(/(\s+)(<span[^>]*>)/g,(o,a,i)=>i.replace(/^(<span[^>]*>)/,`$1${a}`)),n=n.replace(/\t/g,"    "),t?n=n.replace(/\r\n/g,"<br/>").replace(/\n/g,"<br/>").replace(/(>[^<]+)|(^[^<]+)/g,o=>o.replace(/\s/g,"&nbsp;")):n=n.replace(/(>[^<]+)|(^[^<]+)/g,o=>o.replace(/\s/g,"&nbsp;")),n}function highlightAndFormatCode(e,t,n,o){let a="";if(o){const u=e.replace(/\r\n/g,`
`).split(`
`).map(w=>{const s=n.highlight(w,{language:t}).value,C=formatHighlightedCode(s,!1);return C===""?"&nbsp;":C}),l=u.map((w,s)=>`<section style="padding:0 10px 0 0;line-height:1.75">${s+1}</section>`).join(""),m=`<div style="white-space:pre;min-width:max-content;line-height:1.75">${u.join("<br/>")}</div>`;a=`
      <section style="display:flex;align-items:flex-start;overflow-x:hidden;overflow-y:auto;width:100%;max-width:100%;padding:0;box-sizing:border-box">
        <section class="line-numbers" style="text-align:right;padding:8px 0;border-right:1px solid rgba(0,0,0,0.04);user-select:none;background:var(--code-bg,transparent);">${l}</section>
        <section class="code-scroll" style="flex:1 1 auto;overflow-x:auto;overflow-y:visible;padding:8px;min-width:0;box-sizing:border-box">${m}</section>
      </section>
    `}else{const i=n.highlight(e,{language:t}).value;a=formatHighlightedCode(i,!0)}return a}function highlightCodeBlock(e,t,n){const o=e.getAttribute("data-raw-code"),a=e.getAttribute("data-show-line-number")==="true";if(!o)return;const i=o.replace(/&quot;/g,'"'),u=highlightAndFormatCode(i,t,n,a);e.innerHTML=u,e.removeAttribute("data-language-pending"),e.removeAttribute("data-raw-code"),e.removeAttribute("data-show-line-number")}function highlightPendingBlocks(e,t=document){t.querySelectorAll("code[data-language-pending]").forEach(o=>{const a=o.getAttribute("data-language-pending");a&&(e.getLanguage(a)?highlightCodeBlock(o,a,e):loadAndRegisterLanguage(a,e).then(()=>{highlightCodeBlock(o,a,e)}).catch(()=>{o.removeAttribute("data-language-pending"),o.removeAttribute("data-raw-code"),o.removeAttribute("data-show-line-number")}))})}function renderMarkdown(e,t){const{markdownContent:n,readingTime:o}=t.parseFrontMatterAndContent(e);let a=g.parse(n);return a=DOMPurify.sanitize(a,{ADD_TAGS:["mp-common-profile"]}),{html:a,readingTime:o}}function postProcessHtml(e,t,n){let o=e;return o=n.buildReadingTime(t)+o,o+=n.buildFootnotes(),o+=n.buildAddition(),o+=`
    <style>
      .hljs.code__pre > .mac-sign {
        display: ${n.getOpts().isMacCodeBlock?"flex":"none"};
      }
    </style>
  `,o+=`
    <style>
      h2 strong {
        color: inherit !important;
      }
    </style>
  `,n.createContainer(o)}const _hoisted_1$A={key:0,class:"loading"},_sfc_main$1K=defineComponent({__name:"AppSplash",setup(e){const t=ref(!0);return onMounted(()=>{setTimeout(()=>{t.value=!1},100)}),(n,o)=>(openBlock(),createBlock(Transition,{name:"fade"},{default:withCtx(()=>[unref(t)?(openBlock(),createElementBlock("div",_hoisted_1$A,[...o[0]||(o[0]=[createBaseVNode("strong",null,"致力于让 Markdown 编辑更简单",-1)])])):createCommentVNode("",!0)]),_:1}))}}),_export_sfc=(e,t)=>{const n=e.__vccOpts||e;for(const[o,a]of t)n[o]=a;return n},__unplugin_components_0$1=_export_sfc(_sfc_main$1K,[["__scopeId","data-v-8d32b142"]]),_sfc_main$1J=defineComponent({__name:"Sonner",props:{id:{},invert:{type:Boolean},theme:{},position:{},closeButtonPosition:{},hotkey:{},richColors:{type:Boolean},expand:{type:Boolean},duration:{},gap:{},visibleToasts:{},closeButton:{type:Boolean},toastOptions:{},class:{},style:{},offset:{},mobileOffset:{},dir:{},swipeDirections:{},icons:{},containerAriaLabel:{}},setup(e){const t=e;return(n,o)=>(openBlock(),createBlock(unref(Toaster_default),mergeProps({class:"toaster group"},t),null,16))}});function markedAlert(e={}){const{className:t="markdown-alert",variants:n=[],withoutStyle:o=!1}=e,a=resolveVariants(n);function i(l,d,m=!1){return{className:t,variant:l,icon:d.icon,title:d.title??ucfirst(l),titleClassName:`${t}-title`,fromContainer:m}}function u(l){const{meta:d,tokens:m=[]}=l,p=this.parser.parse(m);let w=`<blockquote class="${d.className} ${d.className}-${d.variant}">
`;return w+=`<p class="${d.titleClassName} alert-title-${d.variant}">`,o||(w+=d.icon.replace("<svg",`<svg class="alert-icon-${d.variant}"`)),w+=d.title,w+=`</p>
`,w+=p,w+=`</blockquote>
`,w}return{walkTokens(l){if(l.type!=="blockquote")return;const d=a.find(({type:m})=>new RegExp(createSyntaxPattern(m),"i").test(l.text));if(d){const{type:m}=d,p=new RegExp(createSyntaxPattern(m),"i");Object.assign(l,{type:"alert",meta:i(m,d)});const w=l.tokens?.[0];if(w.raw?.replace(p,"").trim()){const C=w.tokens[0];Object.assign(C,{raw:C.raw.replace(p,""),text:C.text.replace(p,"")}),w.tokens[1]?.type==="br"&&w.tokens.splice(1,1)}else l.tokens?.shift()}},extensions:[{name:"alert",level:"block",renderer:u},{name:"alertContainer",level:"block",start(l){return l.match(/^:::/)?.index},tokenizer(l,d){const m=/^:::\s*(\w+)\s*\n([\s\S]*?)\n:::/.exec(l);if(m){const[p,w,s]=m,C=a.find(x=>x.type===w);return C?{type:"alert",raw:p,text:s.trim(),tokens:this.lexer.blockTokens(s.trim()),meta:i(w,C,!0)}:void 0}},renderer:u}]}}const defaultAlertVariant=[{type:"note",icon:'<svg class="octicon octicon-info" style="margin-right: 0.25em;" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>'},{type:"info",icon:'<svg class="octicon octicon-info" style="margin-right: 0.25em;" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>'},{type:"tip",icon:'<svg class="octicon octicon-light-bulb" style="margin-right: 0.25em;" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 0 1-1.484.211c-.04-.282-.163-.547-.37-.847a8.456 8.456 0 0 0-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863 0 8 0s5.5 2.31 5.5 5.25c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.541.681-.208.3-.33.565-.37.847a.751.751 0 0 1-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75ZM5.75 12h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5ZM6 15.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z"></path></svg>'},{type:"important",icon:'<svg class="octicon octicon-report" style="margin-right: 0.25em;" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v9.5A1.75 1.75 0 0 1 14.25 13H8.06l-2.573 2.573A1.458 1.458 0 0 1 3 14.543V13H1.75A1.75 1.75 0 0 1 0 11.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25Zm7 2.25v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg>'},{type:"warning",icon:'<svg class="octicon octicon-alert" style="margin-right: 0.25em;" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg>'},{type:"caution",icon:'<svg class="octicon octicon-stop" style="margin-right: 0.25em;" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M4.47.22A.749.749 0 0 1 5 0h6c.199 0 .389.079.53.22l4.25 4.25c.141.14.22.331.22.53v6a.749.749 0 0 1-.22.53l-4.25 4.25A.749.749 0 0 1 11 16H5a.749.749 0 0 1-.53-.22L.22 11.53A.749.749 0 0 1 0 11V5c0-.199.079-.389.22-.53Zm.84 1.28L1.5 5.31v5.38l3.81 3.81h5.38l3.81-3.81V5.31L10.69 1.5ZM8 4a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>'}];function resolveVariants(e){return e.length?Object.values([...defaultAlertVariant,...e].reduce((t,n)=>(t[n.type]=n,t),{})):defaultAlertVariant}function createSyntaxPattern(e){return`^(?:\\[!${e}])\\s*?
*`}const fnMap=new Map;function markedFootnotes(){return{extensions:[{name:"footnoteDef",level:"block",start(e){return fnMap.clear(),e.match(/^\[\^/)?.index},tokenizer(e){const t=e.match(/^\[\^(.*)\]:(.*)/);if(t){const[n,o,a]=t,i=fnMap.size+1;return fnMap.set(o,{index:i,text:a}),{type:"footnoteDef",raw:n,fnId:o,index:i,text:a}}},renderer(e){const{index:t,text:n,fnId:o}=e,a=`
                <code>${t}.</code> 
                <span>${n}</span> 
                    <a id="fnDef-${o}" href="#fnRef-${o}" style="color: var(--md-primary-color);">↩︎</a>
                <br>`;return t===1?`
            <p style="font-size: 80%;margin: 0.5em 8px;word-break:break-all;">${a}`:t===fnMap.size?`${a}</p>`:a}},{name:"footnoteRef",level:"inline",start(e){return e.match(/\[\^/)?.index},tokenizer(e){const t=e.match(/^\[\^(.*?)\]/);if(t){const[n,o]=t;if(fnMap.has(o))return{type:"footnoteRef",raw:n,fnId:o}}},renderer(e){const{fnId:t}=e,{index:n}=fnMap.get(t);return`<sup style="color: var(--md-primary-color);">
                    <a href="#fnDef-${t}" id="fnRef-${t}">[${n}]</a>
                </sup>`}}]}}const inlineRule=/^(\${1,2})(?!\$)((?:\\.|[^\\\n])*?(?:\\.|[^\\\n$]))\1(?=[\s?!.,:？！。，：]|$)/,inlineRuleNonStandard=/^(\${1,2})(?!\$)((?:\\.|[^\\\n])*?(?:\\.|[^\\\n$]))\1/,blockRule=/^\s{0,3}(\${1,2})[ \t]*\n([\s\S]+?)\n\s{0,3}\1[ \t]*(?:\n|$)/,inlineLatexRule=/^\\\(([^\\]*(?:\\.[^\\]*)*?)\\\)/,blockLatexRule=/^\\\[([^\\]*(?:\\.[^\\]*)*?)\\\]/;function isMathJaxReady(){return typeof window<"u"&&typeof window.MathJax<"u"&&typeof window.MathJax.tex2svg=="function"&&typeof window.MathJax.texReset=="function"}function createRenderer(e,t=!0){return n=>{const o=n.text.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");if(!isMathJaxReady()){const a=encodeURIComponent(n.text);return e?`<section class="math-pending math-block" data-math-tex="${a}"><pre class="katex-fallback"><code>${o}</code></pre></section>`:`<span class="math-pending math-inline" data-math-tex="${a}"><code class="katex-fallback">${o}</code></span>`}try{window.MathJax.texReset();const i=window.MathJax.tex2svg(n.text,{display:e}).firstChild;if(!i)return e?`<section class="katex-block"><pre class="katex-fallback"><code>${o}</code></pre></section>`:`<span class="katex-inline"><code class="katex-fallback">${o}</code></span>`;const u=i.style["min-width"]||i.getAttribute("width");return i.removeAttribute("width"),t&&(i.style.display="initial",i.style.setProperty("max-width","300vw","important"),i.style.flexShrink="0",i.style.width=u),e?`<section class="katex-block">${i.outerHTML}</section>`:`<span class="katex-inline">${i.outerHTML}</span>`}catch{return e?`<section class="katex-block"><pre class="katex-fallback"><code>${o}</code></pre></section>`:`<span class="katex-inline"><code class="katex-fallback">${o}</code></span>`}}}function renderPendingMath(e=document){if(!isMathJaxReady())return;e.querySelectorAll(".math-pending").forEach(n=>{const o=n.getAttribute("data-math-tex");if(!o)return;const a=decodeURIComponent(o),i=n.classList.contains("math-block");try{window.MathJax.texReset();const l=window.MathJax.tex2svg(a,{display:i}).firstChild;if(l){const d=l.style["min-width"]||l.getAttribute("width");l.removeAttribute("width"),l.style.display="initial",l.style.setProperty("max-width","300vw","important"),l.style.flexShrink="0",l.style.width=d,n.innerHTML=l.outerHTML,n.classList.remove("math-pending"),n.removeAttribute("data-math-tex")}}catch{}})}function inlineKatex(e,t){const n=e&&e.nonStandard,o=n?inlineRuleNonStandard:inlineRule;return{name:"inlineKatex",level:"inline",start(a){let i,u=a;for(;u;){if(i=u.indexOf("$"),i===-1)return;if((n?i>-1:i===0||u.charAt(i-1)===" ")&&u.substring(i).match(o))return i;u=u.substring(i+1).replace(/^\$+/,"")}},tokenizer(a){const i=a.match(o);if(i)return{type:"inlineKatex",raw:i[0],text:i[2].trim(),displayMode:i[1].length===2}},renderer:t}}function blockKatex(e,t){return{name:"blockKatex",level:"block",tokenizer(n){const o=n.match(blockRule);if(o)return{type:"blockKatex",raw:o[0],text:o[2].trim(),displayMode:o[1].length===2}},renderer:t}}function inlineLatexKatex(e,t){return{name:"inlineLatexKatex",level:"inline",start(n){const o=n.indexOf("\\(");return o!==-1?o:void 0},tokenizer(n){const o=n.match(inlineLatexRule);if(o)return{type:"inlineLatexKatex",raw:o[0],text:o[1].trim(),displayMode:!1}},renderer:t}}function blockLatexKatex(e,t){return{name:"blockLatexKatex",level:"block",start(n){const o=n.indexOf("\\[");return o!==-1?o:void 0},tokenizer(n){const o=n.match(blockLatexRule);if(o)return{type:"blockLatexKatex",raw:o[0],text:o[1].trim(),displayMode:!0}},renderer:t}}function MDKatex(e,t=!0){return{extensions:[inlineKatex(e,createRenderer(!1,t)),blockKatex(e,createRenderer(!0,t)),inlineLatexKatex(e,createRenderer(!1,t)),blockLatexKatex(e,createRenderer(!0,t))]}}function markedMarkup(){return{extensions:[{name:"markup_highlight",level:"inline",start(e){return e.match(/==(?!=)/)?.index},tokenizer(e){const n=/^==((?:[^=]|=(?!=))+)==/.exec(e);if(n)return{type:"markup_highlight",raw:n[0],text:n[1]}},renderer(e){return`<span class="markup-highlight">${e.text}</span>`}},{name:"markup_underline",level:"inline",start(e){return e.match(/\+\+(?!\+)/)?.index},tokenizer(e){const n=/^\+\+((?:[^+]|\+(?!\+))+)\+\+/.exec(e);if(n)return{type:"markup_underline",raw:n[0],text:n[1]}},renderer(e){return`<span class="markup-underline">${e.text}</span>`}},{name:"markup_wavyline",level:"inline",start(e){return e.match(/~(?!~)/)?.index},tokenizer(e){const n=/^~([^~\n]+)~(?!~)/.exec(e);if(n)return{type:"markup_wavyline",raw:n[0],text:n[1]}},renderer(e){return`<span class="markup-wavyline">${e.text}</span>`}}]}}function encode6bit(e){return e<10?String.fromCharCode(48+e):(e-=10,e<26?String.fromCharCode(65+e):(e-=26,e<26?String.fromCharCode(97+e):(e-=26,e===0?"-":e===1?"_":"?")))}function append3bytes(e,t,n){const o=e>>2,a=(e&3)<<4|t>>4,i=(t&15)<<2|n>>6,u=n&63;let l="";return l+=encode6bit(o&63),l+=encode6bit(a&63),l+=encode6bit(i&63),l+=encode6bit(u&63),l}function encode64(e){let t="";for(let n=0;n<e.length;n+=3)n+2===e.length?t+=append3bytes(e.charCodeAt(n),e.charCodeAt(n+1),0):n+1===e.length?t+=append3bytes(e.charCodeAt(n),0,0):t+=append3bytes(e.charCodeAt(n),e.charCodeAt(n+1),e.charCodeAt(n+2));return t}function performDeflate(e){try{const t=new TextEncoder().encode(e),n=deflateSync(t,{level:9});return String.fromCharCode(...n)}catch(t){return console.warn("Deflate compression failed:",t),e}}function encodePlantUML(e){try{const t=performDeflate(e);return encode64(t)}catch(t){console.warn("PlantUML encoding failed, using fallback:",t);const n=new TextEncoder().encode(e);return`~1${btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}`}}function generatePlantUMLUrl(e,t){const n=encodePlantUML(e),o=t.format==="svg"?"svg":"png";return`${t.serverUrl}/${o}/${n}`}function renderPlantUMLDiagram(e,t){const{text:n}=e,o=!n.trim().includes("@start")||!n.trim().includes("@end")?`@startuml
${n.trim()}
@enduml`:n,a=generatePlantUMLUrl(o,t);if(t.inlineSvg&&t.format==="svg"){const i=`plantuml-placeholder-${Math.random().toString(36).slice(2,11)}`;fetchSvgContent(a).then(l=>{const d=document.querySelector(`[data-placeholder="${i}"]`);d&&(d.outerHTML=createPlantUMLHTML(a,t,l))});const u=t.styles.container?Object.entries(t.styles.container).map(([l,d])=>`${l.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${d}`).join("; "):"";return`<div class="${t.className}" style="${u}" data-placeholder="${i}">
      <div style="color: #666; font-style: italic;">正在加载PlantUML图表...</div>
    </div>`}return createPlantUMLHTML(a,t)}async function fetchSvgContent(e){try{const t=await fetch(e);if(!t.ok)throw new Error(`HTTP ${t.status}`);return(await t.text()).replace(/(<svg[^>]*)\swidth="[^"]*"/g,"$1").replace(/(<svg[^>]*)\sheight="[^"]*"/g,"$1").replace(/(<svg[^>]*style="[^"]*?)width:[^;]*;?/g,"$1").replace(/(<svg[^>]*style="[^"]*?)height:[^;]*;?/g,"$1")}catch(t){return console.warn(`Failed to fetch SVG content from ${e}:`,t),'<div style="color: #666; font-style: italic;">PlantUML图表加载失败</div>'}}function createPlantUMLHTML(e,t,n){const o=t.styles.container?Object.entries(t.styles.container).map(([a,i])=>`${a.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${i}`).join("; "):"";return n?`<div class="${t.className}" style="${o}">
      ${n}
    </div>`:`<div class="${t.className}" style="${o}">
    <img src="${e}" alt="PlantUML Diagram" style="max-width: 100%; height: auto;" />
  </div>`}function markedPlantUML(e={}){const t={serverUrl:e.serverUrl||"https://www.plantuml.com/plantuml",format:e.format||"svg",className:e.className||"plantuml-diagram",inlineSvg:e.inlineSvg||!1,styles:{container:{textAlign:"center",margin:"16px 8px",overflowX:"auto",...e.styles?.container}}};return{extensions:[{name:"plantuml",level:"block",start(n){return n.match(/^```plantuml/m)?.index},tokenizer(n){const o=/^```plantuml\r?\n([\s\S]*?)\r?\n```/.exec(n);if(o){const[a,i]=o;return{type:"plantuml",raw:a,text:i.trim()}}},renderer(n){return renderPlantUMLDiagram(n,t)}}],walkTokens(n){n.type==="code"&&n.lang==="plantuml"&&(n.type="plantuml")}}}function markedRuby(){return{extensions:[{name:"ruby",level:"inline",start(e){return e.match(/\[/)?.index},tokenizer(e){let n=/^\[([^\]]+)\]\{([^}]+)\}/.exec(e);if(n)return{type:"ruby",raw:n[0],text:n[1].trim(),ruby:n[2].trim(),format:"basic"};if(n=/^\[([^\]]+)\]\^\(([^)]+)\)/.exec(e),n)return{type:"ruby",raw:n[0],text:n[1].trim(),ruby:n[2].trim(),format:"basic-hat"}},renderer(e){const{text:t,ruby:n,format:o}=e,a=/[・．。-]/g;if(a.test(n)){const u=n.split(a).filter(m=>m.trim()!==""),l=t.split(""),d=[];if(l.length>=u.length){let m=0;for(let p=0;p<u.length;p++){const w=u[p],s=l.length-m,C=u.length-p;let x=1;C===1&&(x=s);const _=l.slice(m,m+x).join("");d.push(`<ruby data-text="${_}" data-ruby="${w}" data-format="${o}">${_}<rp>(</rp><rt>${w}</rt><rp>)</rp></ruby>`),m+=x}m<l.length&&d.push(l.slice(m).join(""))}else for(let m=0;m<l.length;m++){const p=l[m],w=u[m]||"";w?d.push(`<ruby data-text="${p}" data-ruby="${w}" data-format="${o}">${p}<rp>(</rp><rt>${w}</rt><rp>)</rp></ruby>`):d.push(p)}return d.join("")}return`<ruby data-text="${t}" data-ruby="${n}" data-format="${o}">${t}<rp>(</rp><rt>${n}</rt><rp>)</rp></ruby>`}}]}}function markedSlider(){return{extensions:[{name:"horizontalSlider",level:"block",start(e){return e.match(/^<!\[/)?.index},tokenizer(e){const t=/^<(!\[.*?\]\(.*?\)(?:,!\[.*?\]\(.*?\))*)>/,n=e.match(t);if(n)return{type:"horizontalSlider",raw:n[0],text:n[1]}},renderer(e){const{text:t}=e,n=t.match(/!\[(.*?)\]\((.*?)\)/g)||[];return n.length===0?"":`
            <section style="box-sizing: border-box; font-size: 16px;">
              <section data-role="outer" style="font-family: 微软雅黑; font-size: 16px;">
                <section data-role="paragraph" style="margin: 0px auto; box-sizing: border-box; width: 100%;">
                  <section style="margin: 0px auto; text-align: center;">
                    <section style="display: inline-block; width: 100%;">
                      <!-- 微信公众号支持的滑动图片容器 -->
                      <section style="overflow-x: scroll; -webkit-overflow-scrolling: touch; white-space: nowrap; width: 100%; text-align: center;">
                        ${n.map(a=>{const i=a.match(/!\[(.*?)\]/)||[],u=a.match(/\]\((.*?)\)/)||[],l=i[1]||"";return{src:u[1]||"",alt:l}}).map((a,i)=>`<section style="display: inline-block; width: 100%; margin-right: 0; vertical-align: top;">
                          <img src="${a.src}" alt="${a.alt}" title="${a.alt}" style="width: 100%; height: auto; border-radius: 4px; vertical-align: top;"/>
                          <p style="margin-top: 5px; font-size: 14px; color: #666; text-align: center; white-space: normal;">${a.alt}</p>
                        </section>`).join("")}
                      </section>
                    </section>
                  </section>
                </section>
              </section>
              <p style="font-size: 14px; color: #999; text-align: center; margin-top: 5px;"><<< 左右滑动看更多 >>></p>
            </section>
          `}}]}}function markedToc(){let e=[],t=!0;return{walkTokens(n){if(t&&(e=[],t=!1),n.type==="heading"){const o=n.text||"",a=n.depth||1,i=e.length;e.push({text:o,depth:a,index:i})}},extensions:[{name:"toc",level:"block",start(n){const o=n.match(/^\s*\[TOC\]\s*$/m);return o?o.index:void 0},tokenizer(n){const o=/^\[TOC\]/.exec(n);if(o)return{type:"toc",raw:o[0]}},renderer(){if(!e.length)return"";let n='<nav class="markdown-toc"><ul class="toc-ul toc-level-1 pl-4 border-l ml-2">',o=1;e.forEach(({text:a,depth:i,index:u})=>{if(i>o)for(let l=o+1;l<=i;l++)n+=`<ul class="toc-ul toc-level-${l} pl-4 border-l ml-2">`;else if(i<o)for(let l=o;l>i;l--)n+="</ul>";n+=`<li class="toc-li toc-level-${i} mb-1"><a class="text-gray-700 hover:text-blue-600 underline transition-colors" href="#${u}">${a}</a></li>`,o=i});for(let a=o;a>1;a--)n+="</ul>";return n+="</ul></nav>",t=!0,n}}]}}Object.entries(COMMON_LANGUAGES).forEach(([e,t])=>{HighlightJS.registerLanguage(e,t)});g.setOptions({breaks:!0});g.use(markedSlider());function escapeHtml(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/`/g,"&#96;")}function buildAddition(){return`
    <style>
      .preview-wrapper pre::before {
        position: absolute;
        top: 0;
        right: 0;
        color: #ccc;
        text-align: center;
        font-size: 0.8em;
        padding: 5px 10px 0;
        line-height: 15px;
        height: 15px;
        font-weight: 600;
      }
    </style>
  `}function buildFootnoteArray(e){return e.map(([t,n,o])=>o===n?`<code style="font-size: 90%; opacity: 0.6;">[${t}]</code>: <i style="word-break: break-all">${n}</i><br/>`:`<code style="font-size: 90%; opacity: 0.6;">[${t}]</code> ${n}: <i style="word-break: break-all">${o}</i><br/>`).join(`
`)}function transform(e,t,n){const o=e.split("-");for(const a of o){if(a==="alt"&&t)return t;if(a==="title"&&n)return n}return""}const macCodeSvg=`
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="45px" height="13px" viewBox="0 0 450 130">
    <ellipse cx="50" cy="65" rx="50" ry="52" stroke="rgb(220,60,54)" stroke-width="2" fill="rgb(237,108,96)" />
    <ellipse cx="225" cy="65" rx="50" ry="52" stroke="rgb(218,151,33)" stroke-width="2" fill="rgb(247,193,81)" />
    <ellipse cx="400" cy="65" rx="50" ry="52" stroke="rgb(27,161,37)" stroke-width="2" fill="rgb(100,200,86)" />
  </svg>
`.trim();function parseFrontMatterAndContent(e){try{const t=frontMatter(e),n=t.attributes,o=t.body,a=readingTime(o);return{yamlData:n,markdownContent:o,readingTime:a}}catch(t){return console.error("Error parsing front-matter:",t),{yamlData:{},markdownContent:e,readingTime:readingTime(e)}}}function initRenderer(e={}){const t=[];let n=0,o=0;const a=[],i=[];function u(){return e}function l(x,_,b){const f=b??x,N=`${x.replace(/_/g,"-")}`,h=/^h\d$/.test(f)?' data-heading="true"':"";return`<${f} class="${N}"${h}>${_}</${f}>`}function d(x,_){const b=t.find(([,,f])=>f===_);return b?b[0]:(t.push([++n,x,_]),n)}function m(x){t.length=0,n=0,p(x)}function p(x){e={...e,...x},g.use(markedAlert()),g.use(MDKatex({nonStandard:!0},!0)),g.use(markedMarkup())}function w(x){return!e.countStatus||!x.words?"":`
      <blockquote class="md-blockquote">
        <p class="md-blockquote-p">字数 ${x?.words}，阅读大约需 ${Math.ceil(x?.minutes)} 分钟</p>
      </blockquote>
    `}const s=()=>t.length?l("h4","引用链接")+l("footnotes",buildFootnoteArray(t),"p"):"",C={heading({tokens:x,depth:_}){const b=this.parser.parseInline(x),f=`h${_}`,N=`<span class="prefix"></span><span class="content">${b}</span><span class="suffix"></span>`;return l(f,N)},paragraph({tokens:x}){const _=this.parser.parseInline(x),b=_.includes("<figure")&&_.includes("<img"),f=_.trim()==="";return b||f?_:l("p",_)},blockquote({tokens:x}){const _=this.parser.parse(x);return l("blockquote",_)},code({text:x,lang:_=""}){if(_.startsWith("mermaid"))return clearTimeout(o),o=setTimeout(async()=>{try{typeof window<"u"&&window.mermaid?await window.mermaid.run():await(await __vitePreload(()=>import("./md-mermaid-CY7LD1D6.js"),__vite__mapDeps([0,1,2,3]),import.meta.url)).default.run()}catch(F){console.warn("[md-editor] Mermaid rendering failed:",F)}},0),`<pre class="mermaid">${x}</pre>`;const b=_.split(" ")[0],f=HighlightJS.getLanguage(b),h=highlightAndFormatCode(x,f?b:"plaintext",HighlightJS,!!e.isShowLineNumber),S=`<span class="mac-sign" style="padding: 10px 14px 0;">${macCodeSvg}</span>`;let V="";if(!f&&b!=="plaintext"){const F=x.replace(/"/g,"&quot;");V=` data-language-pending="${b}" data-raw-code="${F}" data-show-line-number="${e.isShowLineNumber}"`}const $=`<code class="language-${_}"${V}>${h}</code>`;return`<pre class="hljs code__pre">${S}${$}</pre>`},codespan({text:x}){const _=escapeHtml(x);return l("codespan",_,"code")},list({ordered:x,items:_,start:b=1}){a.push(x),i.push(Number(b));const f=_.map(N=>this.listitem(N)).join("");return a.pop(),i.pop(),l(x?"ol":"ul",f)},listitem(x){const _=a[a.length-1],b=i[i.length-1];i[i.length-1]=b+1;const f=_?`${b}. `:"• ";let N;try{N=this.parser.parseInline(x.tokens)}catch{N=this.parser.parse(x.tokens).replace(/^<p(?:\s[^>]*)?>([\s\S]*?)<\/p>/,"$1")}return l("listitem",`${f}${N}`,"li")},image({href:x,title:_,text:b}){const f=l("figcaption",transform(e.legend,b,_)),N=_?` title="${_}"`:"";return`<figure><img src="${x}"${N} alt="${b}"/>${f}</figure>`},link({href:x,title:_,text:b,tokens:f}){const N=this.parser.parseInline(f);if(/^https?:\/\/mp\.weixin\.qq\.com/.test(x))return`<a href="${x}" title="${_||b}">${N}</a>`;if(x===b)return N;if(e.citeStatus){const h=d(_||b,x);return`<a href="${x}" title="${_||b}">${N}<sup>[${h}]</sup></a>`}return`<a href="${x}" title="${_||b}">${N}</a>`},strong({tokens:x}){return l("strong",this.parser.parseInline(x))},em({tokens:x}){return l("em",this.parser.parseInline(x))},table({header:x,rows:_}){const b=x.map(N=>{const h=this.parser.parseInline(N.tokens);return l("th",h)}).join(""),f=_.map(N=>{const h=N.map(S=>this.tablecell(S)).join("");return l("tr",h)}).join("");return`
        <section style="max-width: 100%; overflow: auto">
          <table class="preview-table">
            <thead>${b}</thead>
            <tbody>${f}</tbody>
          </table>
        </section>
      `},tablecell(x){const _=this.parser.parseInline(x.tokens);return l("td",_)},hr(x){return l("hr","")}};return g.use({renderer:C}),g.use(markedMarkup()),g.use(markedToc()),g.use(markedSlider()),g.use(markedAlert({})),g.use(MDKatex({nonStandard:!0},!0)),g.use(markedFootnotes()),g.use(markedPlantUML({inlineSvg:!0})),g.use(markedRuby()),{buildAddition,buildFootnotes:s,setOptions:p,reset:m,parseFrontMatterAndContent,buildReadingTime:w,createContainer(x){return l("container",x,"section")},getOpts:u}}async function processCSS(e){try{return(await postcss([creator({preserve:!1}),postcssCalc({preserve:!1,mediaQueries:!1,selectors:!1})]).process(e,{from:void 0})).css}catch(t){return console.warn("[processCSS] CSS 处理失败，使用原始 CSS:",t),e}}const SELECTOR_MAPPING={blockquote_note:"markdown-alert-note",blockquote_tip:"markdown-alert-tip",blockquote_info:"markdown-alert-info",blockquote_important:"markdown-alert-important",blockquote_warning:"markdown-alert-warning",blockquote_caution:"markdown-alert-caution",blockquote_title:"alert-title",blockquote_title_note:"alert-title-note",blockquote_title_tip:"alert-title-tip",blockquote_title_info:"alert-title-info",blockquote_title_important:"alert-title-important",blockquote_title_warning:"alert-title-warning",blockquote_title_caution:"alert-title-caution",blockquote_p:"alert-content",blockquote_p_note:"alert-content-note",blockquote_p_tip:"alert-content-tip",blockquote_p_info:"alert-content-info",blockquote_p_important:"alert-content-important",blockquote_p_warning:"alert-content-warning",blockquote_p_caution:"alert-content-caution",code_pre:"code-block",codespan:"code-inline",inline_katex:"katex-inline",block_katex:"katex-block",markup_highlight:"markup-highlight",markup_underline:"markup-underline",markup_wavyline:"markup-wavyline",listitem:"listitem"};function wrapCSSWithScope(e,t="#output"){return e.replace(/([^{}]+)\{([^}]*)\}/g,(n,o,a)=>{const i=o.match(/^\s*((?:\/\*[\s\S]*?\*\/\s*)*)/)?.[1]??"",u=o.slice(o.indexOf(i)+i.length),l=u.trim();if(l.startsWith("@")||l.startsWith(":root"))return n;const d=u.split(",").map(m=>{let p=m.trim();if(p.startsWith(t)||!p)return p;const w=p.split(/[\s>+~:[]/,1)[0].trim();return w&&SELECTOR_MAPPING[w]&&(p=p.replace(w,`.${SELECTOR_MAPPING[w]}`)),`${t} ${p}`}).filter(Boolean).join(`,
`);return`${i}${d} {${a}}`})}function generateCSSVariables(e){return`
:root {
  /* 动态配置变量 */
  --md-primary-color: ${e.primaryColor};
  --md-font-family: ${e.fontFamily};
  --md-font-size: ${e.fontSize};
}

/* 段落缩进和对齐 */
#output p {
  ${e.isUseIndent?"text-indent: 2em;":""}
  ${e.isUseJustify?"text-align: justify;":""}
}
  `.trim()}const DEFAULT_SERVICE_ENDPOINT="https://proxy-ai.doocs.org/v1",DEFAULT_SERVICE_TEMPERATURE=1,DEFAULT_SERVICE_MAX_TOKEN=1024,DEFAULT_SERVICE_TYPE="default",DEFAULT_SERVICE_KEY="",serviceOptions=[{value:"default",label:"内置服务",endpoint:DEFAULT_SERVICE_ENDPOINT,models:["Qwen/Qwen2.5-7B-Instruct","Qwen/Qwen2.5-Coder-7B-Instruct","Qwen/Qwen2-7B-Instruct","deepseek-ai/DeepSeek-R1-Distill-Qwen-7B","THUDM/GLM-Z1-9B-0414","THUDM/GLM-4-9B-0414","internlm/internlm2_5-7b-chat","qwen/qwen3-30b-a3b:free","qwen/qwen3-8b:free","qwen/qwen3-14b:free","qwen/qwen3-32b:free","qwen/qwen3-235b-a22b:free","tngtech/deepseek-r1t-chimera:free","thudm/glm-z1-9b:free","thudm/glm-z1-32b:free","thudm/glm-4-9b:free","thudm/glm-4-32b:free","microsoft/mai-ds-r1:free","arliai/qwq-32b-arliai-rpr-v1:free","nvidia/llama-3.3-nemotron-super-49b-v1:free","nvidia/llama-3.1-nemotron-ultra-253b-v1:free","meta-llama/llama-4-maverick:free","meta-llama/llama-4-scout:free","deepseek/deepseek-v3-base:free","qwen/qwen2.5-vl-3b-instruct:free","qwen/qwen2.5-vl-32b-instruct:free"]},{value:"deepseek",label:"DeepSeek",endpoint:"https://api.deepseek.com/v1",models:["deepseek-chat","deepseek-reasoner"]},{value:"openai",label:"OpenAI",endpoint:"https://api.openai.com/v1",models:["gpt-4.1","gpt-4.1-mini","gpt-4.1-nano","gpt-4-turbo","gpt-4o","gpt-3.5-turbo"]},{value:"qwen",label:"通义千问",endpoint:"https://dashscope.aliyuncs.com/compatible-mode/v1",models:["qwen-vl-max-2025-04-02","deepseek-v3","deepseek-r1-distill-llama-70b","deepseek-r1-distill-qwen-32b","deepseek-r1-distill-qwen-14b","deepseek-r1-distill-llama-8b","deepseek-r1-distill-qwen-1.5b","deepseek-r1-distill-qwen-7b","deepseek-r1","qwen1.5-7b-chat","qwen-coder-plus-1106","qwen-coder-plus","qwen-coder-plus-latest","qwen2.5-coder-3b-instruct","qwen2.5-coder-0.5b-instruct","qwen2.5-coder-14b-instruct","qwen2.5-coder-32b-instruct","qwen-coder-turbo-0919","qwen2.5-0.5b-instruct","qwen2.5-1.5b-instruct","qwen2.5-3b-instruct","qwen2.5-7b-instruct","qwen2.5-14b-instruct","qwen2.5-32b-instruct","qwen2.5-72b-instruct","qwen2.5-coder-7b-instruct","qwen2.5-math-1.5b-instruct","qwen2.5-math-7b-instruct","qwen2.5-math-72b-instruct","qwen-turbo-0919","qwen-turbo-latest","qwen-plus-0919","qwen-plus-latest","qwen-max-0919","qwen-max-latest","qwen-coder-turbo","qwen-coder-turbo-latest","qwen-math-turbo-0919","qwen-math-turbo","qwen-math-turbo-latest","qwen-math-plus-0919","qwen-math-plus","qwen-math-plus-latest","qwen2-57b-a14b-instruct","qwen2-72b-instruct","qwen2-7b-instruct","qwen2-0.5b-instruct","qwen2-1.5b-instruct","qwen-long","qwen-vl-max","qwen-vl-plus","qwen-max-0428","qwen1.5-110b-chat","qwen-72b-chat","codeqwen1.5-7b-chat","qwen1.5-0.5b-chat","qwen-1.8b-chat","qwen-1.8b-longcontext-chat","qwen-7b-chat","qwen-14b-chat","qwen1.5-14b-chat","qwen1.5-1.8b-chat","qwen1.5-32b-chat","qwen1.5-72b-chat","qwen-max-1201","qwen-max-longcontext","qwen-max-0403","qwen-max-0107","qwen-turbo","qwen-max","qwen-plus"]},{value:"hunyuan",label:"腾讯混元",endpoint:"https://api.hunyuan.cloud.tencent.com/v1",models:["hunyuan-pro","hunyuan-vision","hunyuan-lite","hunyuan-standard","hunyuan-standard-32K","hunyuan-standard-256k","hunyuan-code","hunyuan-role","hunyuan-functioncall","hunyuan-turbo-vision","hunyuan-turbo"]},{value:"doubao",label:"火山方舟",endpoint:"https://ark.cn-beijing.volces.com/api/v3",models:["doubao-1-5-thinking-pro-250415","doubao-1-5-thinking-pro-m-250415","deepseek-r1-250120","deepseek-r1-distill-qwen-32b-250120","deepseek-r1-distill-qwen-7b-250120","deepseek-v3-250324","deepseek-v3-241226","doubao-1-5-vision-pro-250328","doubao-1-5-vision-lite-250315","doubao-1-5-vision-pro-32k-250115","doubao-1-5-ui-tars-250328","doubao-vision-pro-32k-241028","doubao-vision-lite-32k-241015","doubao-1-5-pro-32k-250115","doubao-1-5-pro-256k-250115","doubao-1-5-lite-32k-250115","doubao-pro-4k-240515","doubao-pro-32k-241215","doubao-pro-32k-240828","doubao-pro-32k-240615","doubao-pro-256k-241115","doubao-lite-4k-character-240828","doubao-lite-32k-240828","doubao-lite-32k-character-241015","doubao-lite-128k-240828","moonshot-v1-8k","moonshot-v1-32k","moonshot-v1-128k"]},{value:"siliconflow",label:"硅基流动",endpoint:"https://api.siliconflow.cn/v1",models:["Qwen/Qwen3-235B-A22B","Qwen/Qwen3-30B-A3B","Qwen/Qwen3-32B","Qwen/Qwen3-14B","Qwen/Qwen3-8B","THUDM/GLM-Z1-32B-0414","THUDM/GLM-4-32B-0414","THUDM/GLM-Z1-Rumination-32B-0414","THUDM/GLM-4-9B-0414","Qwen/QwQ-32B","Pro/deepseek-ai/DeepSeek-R1","Pro/deepseek-ai/DeepSeek-V3","deepseek-ai/DeepSeek-R1","deepseek-ai/DeepSeek-V3","deepseek-ai/DeepSeek-R1-Distill-Qwen-32B","deepseek-ai/DeepSeek-R1-Distill-Qwen-14B","deepseek-ai/DeepSeek-R1-Distill-Qwen-7B","Pro/deepseek-ai/DeepSeek-R1-Distill-Qwen-7B","Pro/deepseek-ai/DeepSeek-R1-Distill-Qwen-1.5B","deepseek-ai/DeepSeek-V2.5","Qwen/Qwen2.5-72B-Instruct-128K","Qwen/Qwen2.5-72B-Instruct","Qwen/Qwen2.5-32B-Instruct","Qwen/Qwen2.5-14B-Instruct","Qwen/Qwen2.5-7B-Instruct","Qwen/Qwen2.5-Coder-32B-Instruct","Qwen/Qwen2.5-Coder-7B-Instruct","Qwen/Qwen2-7B-Instruct","Qwen/QwQ-32B-Preview","TeleAI/TeleChat2","THUDM/glm-4-9b-chat","Vendor-A/Qwen/Qwen2.5-72B-Instruct","internlm/internlm2_5-7b-chat","internlm/internlm2_5-20b-chat","Pro/Qwen/Qwen2.5-7B-Instruct","Pro/Qwen/Qwen2-7B-Instruct","Pro/Qwen/Qwen2-1.5B-Instruct","Pro/THUDM/chatglm3-6b","Pro/THUDM/glm-4-9b-chat"]},{value:"302ai",label:"302.AI",endpoint:" https://api.302.ai/v1",models:["chatgpt-4o-latest","gpt-4o","gpt-4o-mini","gpt-4-turbo","o1-preview","o1-mini","claude-3-5-sonnet-latest","claude-3-5-sonnet-20241022","claude-3-5-haiku-20241022","grok-beta"]},{value:"bigmodel",label:"智谱 AI",endpoint:"https://open.bigmodel.cn/api/paas/v4/",models:["glm-4-plus","glm-4-0520","glm-4","glm-4-air","glm-4-airx","glm-4-long","glm-4-flashx","glm-4-flash"]},{value:"baichuan",label:"百川智能",endpoint:"https://api.baichuan-ai.com/v1",models:["Baichuan4","Baichuan3-Turbo","Baichuan3-Turbo-128k","Baichuan2-Turbo"]},{value:"lingyiwanwu",label:"零一万物",endpoint:"https://api.lingyiwanwu.com/v1",models:["yi-lightning"]},{value:"moonshot",label:"月之暗面",endpoint:"https://api.moonshot.cn/v1",models:["moonshot-v1-8k","moonshot-v1-32k","moonshot-v1-128k"]},{value:"ernie",label:"百度千帆",endpoint:"https://qianfan.baidubce.com/v2",models:["ernie-4.5-turbo-128k","ernie-4.5-turbo-32k","ernie-4.5-8k-preview","ernie-4.0-8k","ernie-4.0-8k-latest","ernie-4.0-8k-preview","ernie-4.0-turbo-128k","ernie-4.0-turbo-8k","ernie-4.0-turbo-8k-latest","ernie-4.0-turbo-8k-preview","ernie-3.5-128k","ernie-3.5-8k","ernie-3.5-8k-preview","ernie-speed-128k","ernie-speed-8k","ernie-speed-pro-128k","ernie-lite-8k","ernie-lite-pro-128k","ernie-tiny-8k","ernie-novel-8k"]},{value:"custom",label:"自定义兼容 OpenAI API 的服务",endpoint:"",models:[]}];serviceOptions[0].models[0];const imageServiceOptions=[{value:"default",label:"内置服务",endpoint:DEFAULT_SERVICE_ENDPOINT,models:["Kwai-Kolors/Kolors"]},{value:"openai",label:"OpenAI",endpoint:"https://api.openai.com/v1",models:["gpt-image-1","dall-e-3"]},{value:"siliconflow",label:"硅基流动",endpoint:"https://api.siliconflow.cn/v1",models:["Kwai-Kolors/Kolors","Qwen/Qwen-Image"]},{value:"302ai",label:"302.AI",endpoint:"https://api.302.ai/302",models:["302ai-flux-1-srpo","bagel-image","baidu-irag-01","dall-e-3","dall-e-2","doubao-seedream-3-0-t2i-250415","doubao-v2","doubao-v2-l","doubao-v2.1","doubao-v3","doubao-seedream-4-0-250828","flux-kontext-max","flux-kontext-pro","google-v3","google-v3-fast","google-v4-preview","gemini-2.5-flash-image","302-gemini-2.5-flash-image","gpt-image-1","hidream-i1-full","hidream-i1-dev","hidream-i1-fast","higgsfield","ideogram-v1","ideogram-v1-turbo","ideogram-v2","ideogram-v2-turbo","ideogram-v2a","ideogram-v2a-turbo","ideogram-v3-turbo","ideogram-v3-quality","ideogram-v3","kling-v1","kling-v1-5","kling-v2","luma","luma-flash","midjourney-v6","midjourney-v6-1","midjourney-v7","nijijourney-v6","minimaxi-image-01","qwen","qwen-lora","official-qwen-image","official-qwen-image-plus","wan2.2-t2i-flash","wan2.2-t2i-plus","wanx2.1-t2i-turbo","wanx2.1-t2i-plus","wanx2.0-t2i-turbo","wan2.5-t2i-preview","recraft-v3","recraft-20b","stable-v1","stable-sd2","stable-sd3-ultra","stable-sd3","stable-sd3-medium","stable-sd3-large","stable-sd3-turbo","cogview-4-250304","cogview-4"]},{value:"custom",label:"自定义兼容 OpenAI API 的服务",endpoint:"",models:[]}];imageServiceOptions[0].models[0];const githubConfig={username:"bucketio",repoList:Array.from({length:20},(e,t)=>`img${t}`),branch:"main",accessTokenList:["ghp_sqQg5y7XC7Fy8XdoocsmdVEYRiRiTZPvbwzTL4MRjQc","ghp_jB5JXzBjpGbgzdoocsmdogWfSHhfCKGVstozw1cAsPv","ghp_zvy8wkHo259g7doocsmdJnUKOQd1WO1SPzZ9G0O9cJD","ghp_DnCJc2Ms0RVZ1doocsmdiWOAN78FurfSeD1Pv2Y28pO","ghp_EsMYDv9WVjXWP5doocsmd1nnDml2DEP95rOiz44bSo0","ghp_L4isHf01nllOOdoocsmdHBGoDG6jscCA09WV44QDvlg","ghp_qWciwYXHPakAUGdoocsmdBOBZdRcV08JThKey3mBZNJ","ghp_rxkvIO08wVL2DMdoocsmd2jDEhcatp2rfVyhd3A7RiS","ghp_1RvkWKboSxr0yVdoocsmd7OtBCpecYwoV6deh3utifJ","ghp_cduanDnAug60ngdoocsmdF1uDstXUi6S9RMhY1qdada","ghp_q6mxuJIkqAcsCXdoocsmdkkjWvzGlMVRuy5zI0IWNDx","ghp_Pv4npPeJpChKFMTdoocsmdCQneopUcqJrqrjl3vrt9A","ghp_gKMCFqMaQiLTqhjdoocsmd7BJE8RyK6AdRw4b42CutS","ghp_2oShgb33qFlqBmadoocsmdludmuLYxBFY5bao1XrsVo","ghp_eYyd3kxWTZmsV8doocsmdDFbAa7AEGQTJgmOd0GUmtY"]},giteeConfig={username:"filesss",repoList:Array.from({length:20},(e,t)=>`img${t}`),branch:"main",accessTokenList:["ed5fc9866bd6c2fdoocsmddd433f806fd2f399c","5448ffebbbf1151doocsmdc4e337cf814fc8a62","25b05efd2557ca2doocsmd75b5c0835e3395911","11628c7a5aef015doocsmd2eeff9fb9566f0458","cb2f5145ed938dedoocsmdbd063b4ed244eecf8","d8c0b57500672c1doocsmd55f48b866b5ebcd98","78c56eadb88e453doocsmd43ddd95753351771a","03e1a688003948fdoocsmda16fcf41e6f03f1f0","c49121cf4d191fbdoocsmdd6a7877ed537e474a","adfeb2fadcdc4aadoocsmdfe1ee869ac9c968ff","116c94549ca4a0ddoocsmd192653af5c0694616","ecf30ed7f2eb184doocsmd51ea4ec8300371d9e","5837cf2bd5afd93doocsmd73904bed31934949e","b5b7e1c7d57e01fdoocsmd5266f552574297d78","684d55564ffbd0bdoocsmd7d747e5cc23aed6d6","3fc04a9d272ab71doocsmd010c56cb57d88d2ba"]},prefix="MD",isMac=/Mac/i.test(navigator.userAgent),ctrlKey="Mod",ctrlSign=isMac?"⌘":"Ctrl",altSign=isMac?"⌥":"Alt",shiftSign=isMac?"⇧":"Shift",storeLabels={isDark:"深色模式",themeMode:"外观模式",isEditOnLeft:"左侧编辑",isMacCodeBlock:"Mac 代码块",isShowLineNumber:"代码块行号",isCiteStatus:"微信外链接底部引用状态",isCountStatus:"字数统计状态",isUseIndent:"使用缩进",isUseJustify:"使用两端对齐",isOpenRightSlider:"开启右侧滑块",isOpenPostSlider:"开启右侧发布滑块",showAIToolbox:"AI 工具箱状态",theme:"主题",fontFamily:"字体",fontSize:"字体大小",primaryColor:"自定义主题色",codeBlockTheme:"代码块主题",legend:"图注格式",fontSizeNumber:"字体大小",currentPostId:"当前文章 ID",currentPostIndex:"当前文章索引",posts:"内容列表",cssContentConfig:"自定义 CSS",titleList:"文章标题列表",readingTime:"阅读时间",isShowCssEditor:"显示 CSS 编辑器",isShowInsertFormDialog:"显示插入表单对话框",isShowInsertMpCardDialog:"显示插入公众号名片对话框",isShowUploadImgDialog:"显示上传图片对话框",aiDialogVisible:"AI 对话框可见",aiImageDialogVisible:"AI 图片生成对话框可见"},baseCSS=`/**
 * MD 基础主题样式
 * 包含所有元素的基础样式和 CSS 变量定义
 */

/* ==================== 容器样式 ==================== */
section,
container {
  font-family: var(--md-font-family);
  font-size: var(--md-font-size);
  line-height: 1.75;
  text-align: left;
}

/* 确保 #output 容器应用基础样式 */
#output {
  font-family: var(--md-font-family);
  font-size: var(--md-font-size);
  line-height: 1.75;
  text-align: left;
}

/* 去除第一个元素的 margin-top */
#output section > :first-child {
  margin-top: 0 !important;
}
`,defaultCSS=`/**
 * MD 默认主题（经典主题）
 * 按 Alt/Option + Shift + F 可格式化
 * 如需使用主题色，请使用 var(--md-primary-color) 代替颜色值
 */

/* ==================== 一级标题 ==================== */
h1 {
  display: table;
  padding: 0 1em;
  border-bottom: 2px solid var(--md-primary-color);
  margin: 2em auto 1em;
  color: hsl(var(--foreground));
  font-size: calc(var(--md-font-size) * 1.2);
  font-weight: bold;
  text-align: center;
}

/* ==================== 二级标题 ==================== */
h2 {
  display: table;
  padding: 0 0.2em;
  margin: 4em auto 2em;
  color: #fff;
  background: var(--md-primary-color);
  font-size: calc(var(--md-font-size) * 1.2);
  font-weight: bold;
  text-align: center;
}

/* ==================== 三级标题 ==================== */
h3 {
  padding-left: 8px;
  border-left: 3px solid var(--md-primary-color);
  margin: 2em 8px 0.75em 0;
  color: hsl(var(--foreground));
  font-size: calc(var(--md-font-size) * 1.1);
  font-weight: bold;
  line-height: 1.2;
}

/* ==================== 四级标题 ==================== */
h4 {
  margin: 2em 8px 0.5em;
  color: var(--md-primary-color);
  font-size: calc(var(--md-font-size) * 1);
  font-weight: bold;
}

/* ==================== 五级标题 ==================== */
h5 {
  margin: 1.5em 8px 0.5em;
  color: var(--md-primary-color);
  font-size: calc(var(--md-font-size) * 1);
  font-weight: bold;
}

/* ==================== 六级标题 ==================== */
h6 {
  margin: 1.5em 8px 0.5em;
  font-size: calc(var(--md-font-size) * 1);
  color: var(--md-primary-color);
}

/* ==================== 段落 ==================== */
p {
  margin: 1.5em 8px;
  letter-spacing: 0.1em;
  color: hsl(var(--foreground));
}

/* ==================== 引用块 ==================== */
blockquote {
  font-style: normal;
  padding: 1em;
  border-left: 4px solid var(--md-primary-color);
  border-radius: 6px;
  color: hsl(var(--foreground));
  background: var(--blockquote-background);
  margin-bottom: 1em;
}

blockquote > p {
  display: block;
  font-size: 1em;
  letter-spacing: 0.1em;
  color: hsl(var(--foreground));
  margin: 0;
}

/* ==================== GFM 警告块 ==================== */
.alert-title-note,
.alert-title-tip,
.alert-title-info,
.alert-title-important,
.alert-title-warning,
.alert-title-caution {
  display: flex;
  align-items: center;
  gap: 0.5em;
  margin-bottom: 0.5em;
}

.alert-title-note {
  color: #478be6;
}

.alert-title-tip {
  color: #57ab5a;
}

.alert-title-info {
  color: #93c5fd;
}

.alert-title-important {
  color: #986ee2;
}

.alert-title-warning {
  color: #c69026;
}

.alert-title-caution {
  color: #e5534b;
}

/* GFM Alert SVG 图标颜色 */
.alert-icon-note {
  fill: #478be6;
}

.alert-icon-tip {
  fill: #57ab5a;
}

.alert-icon-info {
  fill: #93c5fd;
}

.alert-icon-important {
  fill: #986ee2;
}

.alert-icon-warning {
  fill: #c69026;
}

.alert-icon-caution {
  fill: #e5534b;
}

/* ==================== 代码块 ==================== */
pre.code__pre,
.hljs.code__pre {
  font-size: 90%;
  overflow-x: auto;
  border-radius: 8px;
  padding: 0 !important;
  line-height: 1.5;
  margin: 10px 8px;
}

/* ==================== 图片 ==================== */
img {
  display: block;
  max-width: 100%;
  margin: 0.1em auto 0.5em;
  border-radius: 4px;
}

/* ==================== 列表 ==================== */
ol {
  padding-left: 1em;
  margin-left: 0;
  color: hsl(var(--foreground));
}

ul {
  list-style: circle;
  padding-left: 1em;
  margin-left: 0;
  color: hsl(var(--foreground));
}

li {
  display: block;
  margin: 0.2em 8px;
  color: hsl(var(--foreground));
}

/* ==================== 脚注 ==================== */
/* footnotes 在 buildFootnotes() 中渲染为 <p> 标签 */
p.footnotes {
  margin: 0.5em 8px;
  font-size: 80%;
  color: hsl(var(--foreground));
}

/* ==================== 图表 ==================== */
figure {
  margin: 1.5em 8px;
  color: hsl(var(--foreground));
}

figcaption,
.md-figcaption {
  text-align: center;
  color: #888;
  font-size: 0.8em;
}

/* ==================== 分隔线 ==================== */
hr {
  border-style: solid;
  border-width: 2px 0 0;
  border-color: rgba(0, 0, 0, 0.1);
  -webkit-transform-origin: 0 0;
  -webkit-transform: scale(1, 0.5);
  transform-origin: 0 0;
  transform: scale(1, 0.5);
  height: 0.4em;
  margin: 1.5em 0;
}

/* ==================== 行内代码 ==================== */
code {
  font-size: 90%;
  color: #d14;
  background: rgba(27, 31, 35, 0.05);
  padding: 3px 5px;
  border-radius: 4px;
}

/* 代码块内的 code 标签需要特殊处理（覆盖行内 code 样式） */
pre.code__pre > code,
.hljs.code__pre > code {
  display: -webkit-box;
  padding: 0.5em 1em 1em;
  overflow-x: auto;
  text-indent: 0;
  color: inherit;
  background: none;
  white-space: nowrap;
  margin: 0;
}

/* ==================== 强调 ==================== */
em {
  font-style: italic;
  font-size: inherit;
}

/* ==================== 链接 ==================== */
a {
  color: #576b95;
  text-decoration: none;
}

/* ==================== 粗体 ==================== */
strong {
  color: var(--md-primary-color);
  font-weight: bold;
  font-size: inherit;
}

/* ==================== 表格 ==================== */
table {
  color: hsl(var(--foreground));
}

thead {
  font-weight: bold;
  color: hsl(var(--foreground));
}

th {
  border: 1px solid #dfdfdf;
  padding: 0.25em 0.5em;
  color: hsl(var(--foreground));
  word-break: keep-all;
  background: rgba(0, 0, 0, 0.05);
}

td {
  border: 1px solid #dfdfdf;
  padding: 0.25em 0.5em;
  color: hsl(var(--foreground));
  word-break: keep-all;
}

/* ==================== KaTeX 公式 ==================== */
.katex-inline {
  max-width: 100%;
  overflow-x: auto;
}

.katex-block {
  max-width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  padding: 0.5em 0;
  text-align: center;
}

/* ==================== 标记高亮 ==================== */
.markup-highlight {
  background-color: var(--md-primary-color);
  padding: 2px 4px;
  border-radius: 2px;
  color: #fff;
}

.markup-underline {
  text-decoration: underline;
  text-decoration-color: var(--md-primary-color);
}

.markup-wavyline {
  text-decoration: underline wavy;
  text-decoration-color: var(--md-primary-color);
  text-decoration-thickness: 2px;
}
`,graceCSS=`/**
 * MD 优雅主题 (@brzhang)
 * 在默认主题基础上添加优雅的视觉效果
 */

/* ==================== 标题样式 ==================== */
h1 {
  padding: 0.5em 1em;
  border-bottom: 2px solid var(--md-primary-color);
  font-size: calc(var(--md-font-size) * 1.4);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  padding: 0.3em 1em;
  border-radius: 8px;
  font-size: calc(var(--md-font-size) * 1.3);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h3 {
  padding-left: 12px;
  font-size: calc(var(--md-font-size) * 1.2);
  border-left: 4px solid var(--md-primary-color);
  border-bottom: 1px dashed var(--md-primary-color);
}

h4 {
  font-size: calc(var(--md-font-size) * 1.1);
}

h5 {
  font-size: var(--md-font-size);
}

h6 {
  font-size: var(--md-font-size);
}

/* ==================== 引用块 ==================== */
blockquote {
  font-style: italic;
  padding: 1em 1em 1em 2em;
  border-left: 4px solid var(--md-primary-color);
  border-radius: 6px;
  color: rgba(0, 0, 0, 0.6);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  margin-bottom: 1em;
}

.markdown-alert {
  font-style: italic;
}

/* ==================== 代码块 ==================== */
pre.code__pre,
.hljs.code__pre {
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.05);
}

pre.code__pre > code,
.hljs.code__pre > code {
  font-family:
    'Fira Code',
    Menlo,
    Operator Mono,
    Consolas,
    Monaco,
    monospace;
}

/* ==================== 图片 ==================== */
img {
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

figcaption,
.md-figcaption {
  text-align: center;
  color: #888;
  font-size: 0.8em;
}

/* ==================== 列表 ==================== */
ol {
  padding-left: 1.5em;
}

ul {
  list-style: none;
  padding-left: 1.5em;
}

li {
  margin: 0.5em 8px;
}

/* ==================== 分隔线 ==================== */
hr {
  height: 1px;
  border: none;
  margin: 2em 0;
  background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0));
}

/* ==================== 表格 ==================== */
table {
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 8px;
  margin: 1em 8px;
  color: hsl(var(--foreground));
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

thead {
  color: #fff;
}

td {
  padding: 0.5em 1em;
}

/* ==================== 强调 ==================== */
em {
  font-style: italic;
  font-size: inherit;
}

/* ==================== 链接 ==================== */
a {
  color: #576b95;
  text-decoration: none;
}
`,markdownCnBaseCSS=`/**
 * Markdown.com.cn compatible base theme.
 * Source: https://markdown.com.cn/wechat/
 */

/* Reset properties introduced by WenDispatch's classic theme before applying
 * the Markdown.com.cn baseline and selected theme. */
#output h1,
#output h2,
#output h3,
#output h4,
#output h5,
#output h6 {
  display: block;
  width: auto;
  padding: 0;
  border: 0;
  border-radius: 0;
  color: black;
  background: transparent;
  box-shadow: none;
  text-align: left;
  text-shadow: none;
}

#output p {
  letter-spacing: 0;
}

#output blockquote {
  border-radius: 0;
  box-shadow: none;
}

#output pre.code__pre,
#output .hljs.code__pre,
#output img,
#output table {
  border-radius: 0;
  box-shadow: none;
}

/*默认样式，最佳实践*/

/*全局属性*/
#output {
  /*box-shadow: 0 0 60px rgba(0,0,0,.1);*/
  font-size: 16px;
  color: black;
  padding: 25px 0px;
  line-height: 1.6;
  word-spacing: 0px;
  letter-spacing: 0px;
  word-break: break-word;
  word-wrap: break-word;
  text-align: justify;
  font-family:
    Optima-Regular, Optima, PingFangSC-light, PingFangTC-light, 'PingFang SC', Cambria, Cochin, Georgia, Times,
    'Times New Roman', serif;
  margin-top: -10px; /*解决开头空隙过大问题*/
}

/*段落*/
#output p {
  font-size: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  line-height: 26px;
  color: black;
}

/*标题*/
#output h1,
#output h2,
#output h3,
#output h4,
#output h5,
#output h6 {
  margin-top: 30px;
  margin-bottom: 15px;
  font-weight: bold;
  color: black;
}
#output h1 {
  font-size: 24px;
}
#output h2 {
  font-size: 22px;
}
#output h3 {
  font-size: 20px;
}
#output h4 {
  font-size: 18px;
}
#output h5 {
  font-size: 16px;
}
#output h6 {
  font-size: 16px;
}

#output h1 .prefix,
#output h2 .prefix,
#output h3 .prefix,
#output h4 .prefix,
#output h5 .prefix,
#output h6 .prefix {
  display: none;
}

#output h1 .suffix,
#output h2 .suffix,
#output h3 .suffix,
#output h4 .suffix,
#output h5 .suffix,
#output h6 .suffix {
  display: none;
}

/*列表*/
#output ul,
#output ol {
  margin-top: 8px;
  margin-bottom: 8px;
  padding-left: 25px;
  color: black;
}
#output ul {
  list-style-type: disc;
}
#output ul ul {
  list-style-type: square;
}

#output ol {
  list-style-type: decimal;
}

#output li section {
  margin-top: 5px;
  margin-bottom: 5px;
  line-height: 26px;
  text-align: left;
  color: rgb(1, 1, 1); /* 只要是纯黑色微信编辑器就会把color这个属性吞掉。。。*/
  font-weight: 500;
}

/*引用*/
#output blockquote {
  display: block;
  font-size: 0.9em;
  overflow: auto;
  overflow-scrolling: touch;
  border-left: 3px solid rgba(0, 0, 0, 0.4);
  background: rgba(0, 0, 0, 0.05);
  color: #6a737d;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 10px;
  margin-bottom: 20px;
  margin-top: 20px;
}

#output blockquote p {
  margin: 0px;
  color: black;
  line-height: 26px;
}

#output .table-of-contents a {
  border: none;
  color: black;
  font-weight: normal;
}

/*链接*/
#output a {
  text-decoration: none;
  color: #1e6bb8;
  word-wrap: break-word;
  font-weight: bold;
  border-bottom: 1px solid #1e6bb8;
}

/*加粗*/
#output strong {
  font-weight: bold;
  color: black;
}

/*斜体*/
#output em {
  font-style: italic;
  color: black;
}

/*加粗斜体*/
#output em strong {
  font-weight: bold;
  color: black;
}

/*删除线*/
#output del {
  font-style: italic;
  color: black;
}

/*分隔线*/
#output hr {
  height: 1px;
  margin: 0;
  margin-top: 10px;
  margin-bottom: 10px;
  border: none;
  border-top: 1px solid black;
}

/*代码块*/
#output pre {
  margin-top: 10px;
  margin-bottom: 10px;
}
#output pre code {
  display: -webkit-box;
  font-family:
    Operator Mono,
    Consolas,
    Monaco,
    Menlo,
    monospace;
  border-radius: 0px;
  font-size: 12px;
  -webkit-overflow-scrolling: touch;
}
#output pre code span {
  line-height: 26px;
}

/*行内代码*/
#output p code,
#output li code {
  font-size: 14px;
  word-wrap: break-word;
  padding: 2px 4px;
  border-radius: 4px;
  margin: 0 2px;
  color: #1e6bb8;
  background-color: rgba(27, 31, 35, 0.05);
  font-family:
    Operator Mono,
    Consolas,
    Monaco,
    Menlo,
    monospace;
  word-break: break-all;
}

/*图片*/
#output img {
  display: block;
  margin: 0 auto;
  width: auto;
  max-width: 100%;
}

/*图片*/
#output figure {
  margin: 0;
  margin-top: 10px;
  margin-bottom: 10px;
}

/*图片描述文字*/
#output figcaption {
  margin-top: 5px;
  text-align: center;
  color: #888;
  font-size: 14px;
}

/*表格*/
#output table {
  display: table;
  text-align: left;
}
#output tbody {
  border: 0;
}

#output table tr {
  border: 0;
  border-top: 1px solid #ccc;
  background-color: white;
}

#output table tr:nth-child(2n) {
  background-color: #f8f8f8;
}

#output table tr th,
#output table tr td {
  font-size: 16px;
  border: 1px solid #ccc;
  padding: 5px 10px;
  text-align: left;
}

#output table tr th {
  font-weight: bold;
  background-color: #f0f0f0;
}

/* 微信代码块 */
#output .code-snippet__fix {
  word-wrap: break-word !important;
  font-size: 14px;
  margin: 10px 0;
  display: block;
  color: #333;
  position: relative;
  background-color: rgba(0, 0, 0, 0.03);
  border: 1px solid #f0f0f0;
  border-radius: 2px;
  display: flex;
  line-height: 20px;
}
#output .code-snippet__fix pre {
  margin-bottom: 10px;
  margin-top: 0px;
}
#output .code-snippet__fix .code-snippet__line-index {
  counter-reset: line;
  flex-shrink: 0;
  height: 100%;
  padding: 1em;
  list-style-type: none;
  padding: 16px;
  margin: 0;
}
#output .code-snippet__fix .code-snippet__line-index li {
  list-style-type: none;
  text-align: right;
  line-height: 26px;
  color: black;
  margin: 0;
}
#output .code-snippet__fix .code-snippet__line-index li::before {
  min-width: 1.5em;
  text-align: right;
  left: -2.5em;
  counter-increment: line;
  content: counter(line);
  display: inline;
  color: rgba(0, 0, 0, 0.3);
}
#output .code-snippet__fix pre {
  overflow-x: auto;
  padding: 16px;
  padding-left: 0;
  white-space: normal;
  flex: 1;
  -webkit-overflow-scrolling: touch;
}
#output .code-snippet__fix code {
  text-align: left;
  font-size: 14px;
  display: block;
  white-space: pre;
  display: flex;
  position: relative;
  font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;
  padding: 0px;
}

#output .footnote-word {
  color: #1e6bb8;
  font-weight: bold;
}

#output .footnote-ref {
  color: #1e6bb8;
  font-weight: bold;
}

#output .footnote-item {
  display: flex;
}

#output .footnote-num {
  display: inline;
  width: 10%; /*神奇，50px就不可以*/
  background: none;
  font-size: 80%;
  opacity: 0.6;
  line-height: 26px;
  font-family:
    ptima-Regular, Optima, PingFangSC-light, PingFangTC-light, 'PingFang SC', Cambria, Cochin, Georgia, Times,
    'Times New Roman', serif;
}

#output .footnote-item p {
  display: inline;
  font-size: 14px;
  width: 90%;
  padding: 0px;
  margin: 0;
  line-height: 26px;
  color: black;
  word-break: break-all;
  width: calc(100%-50);
}

#output sub,
sup {
  line-height: 0;
}

#output .footnotes-sep:before {
  content: '参考资料';
  display: block;
}

/* 解决公式问题 */
#output .block-equation {
  display: block;
  text-align: center;
  /*overflow: auto;*/
  display: block;
  -webkit-overflow-scrolling: touch;
}

#output .block-equation svg {
  max-width: 300% !important;
  -webkit-overflow-scrolling: touch;
}

#output .inline-equation {
}

#output .inline-equation svg {
}

#output .imageflow-layer1 {
  margin: 1em auto;
  white-space: normal;
  border: 0px none;
  padding: 0px;
  overflow: hidden;
}

#output .imageflow-layer2 {
  white-space: nowrap;
  width: 100%;
  overflow-x: scroll;
}

#output .imageflow-layer3 {
  display: inline-block;
  word-wrap: break-word;
  white-space: normal;
  vertical-align: middle;
  width: 100%;
}

#output .imageflow-img {
  display: inline-block;
}

#output .nice-suffix-juejin-container {
  margin-top: 20px !important;
}
`,blueCSS=`/**
 * 蓝莹 by 谭淞宸
 * Source: https://markdown.com.cn/wechat/
 */

/* 全局属性 */

#output {
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  word-break: break-all;
}

/* 标题 */
#output h1 {
  font-size: 1.7em;
  font-weight: normal;
  border-bottom: 2px solid hsl(216, 100%, 68%);
}

#output h1 .content {
  background: hsl(216, 100%, 68%);
  color: white;
  padding: 3px 10px;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
  margin-right: 3px;
}

#output h2 {
  font-weight: normal;
  color: #333;
  font-size: 1.4em;
  border-bottom: 1px solid hsl(216, 100%, 68%);
}

#output h2 .content {
  border-bottom: 1px solid hsl(216, 100%, 68%);
}

#output h3 {
  font-weight: normal;
  color: #333;
  font-size: 1.2em;
}

/* 特殊规定：
 * h4 → 摘要
 * h5 → 强调
 * h6 → 序号
 * em → 高亮
 */

#output h4 {
  font-weight: normal;
  font-size: 1em;
  width: 80%;
  border: 1px solid hsl(216, 100%, 68%);
  border-top: 4px solid hsl(216, 100%, 68%);
  padding: 10px;
  margin: 30px auto;
  color: #333;
}

#output h5 {
  font-weight: normal;
  font-size: 1.3em;
  text-align: center;
  background: hsl(216, 100%, 68%);
  border: 3px double #fff;
  width: 80%;
  padding: 10px;
  margin: 30px auto;
  color: #fff;
}

#output h6 {
  font-size: 1.5em;
  font-weight: normal;
  color: hsl(216, 100%, 68%);
  border-bottom: 1px solid hsl(216, 100%, 68%);
}

#output em {
  font-style: normal;
  font-weight: normal;
  color: white;
  background: hsl(244, 100%, 75%);
  padding: 2px 4px;
  margin: 0px 2px;
}

/* 其他块元素 */

#output ol,
#output ul {
  padding-left: 2em;
}

#output hr {
  width: 90%;
  margin: 1.5em auto;
  border-top: 2px dashed hsl(216, 100%, 68%);
}

#output table {
  margin: 1.5em auto;
  width: auto;
}

#output img {
  width: 90%;
  margin: 0 auto;
  box-shadow: #ccc 0 10px 15px;
}

#output blockquote {
  background: #f9f9f9;
  border-left-color: hsl(216, 100%, 68%);
}

#output blockquote p {
  color: #999;
  padding: 3px 0;
}

#output a {
  color: hsl(187, 100%, 45%);
  font-weight: normal;
  border-bottom-color: hsl(187, 100%, 45%);
}

#output strong {
  color: hsl(216, 80%, 44%);
}

#output s,
#output del {
  color: #999;
}

#output p,
#output li,
#output li span,
#output h4,
#output table tr td {
  color: #666;
}

#output table tr th {
  color: #333;
  font-weight: normal;
}

#output p code,
#output li code {
  color: hsl(216, 100%, 68%);
}

#output sup {
  line-height: 0;
}

#output .footnote-word,
.footnote-ref {
  font-weight: normal;
  color: hsl(187, 100%, 45%);
}

#output .footnotes-sep {
  font-family: inherit;
}

#output .footnote-num {
  font-family: inherit;
}

#output .footnote-item p {
  color: #666;
}

#output .footnote-item p em {
  color: #999;
  background: transparent;
}

/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
#output .block-equation svg {
}

/* 行内公式
 */
#output .inline-equation svg {
}
`,crimsonCSS=`/**
 * 红绯 by HeyRain
 * Source: https://markdown.com.cn/wechat/
 */

/* 全局属性
 * 页边距 padding:30px;
 * 全文字体 font-family:ptima-Regular;
 * 英文换行 word-break:break-all;
 */
#output {
  font-family: PingFangSC-Light;
}

/* 段落，下方未标注标签参数均同此处
 * 上边距 margin-top:5px;
 * 下边距 margin-bottom:5px;
 * 行高 line-height:26px;
 * 词间距 word-spacing:3px;
 * 字间距 letter-spacing:3px;
 * 对齐 text-align:left;
 * 颜色 color:#3e3e3e;
 * 字体大小 font-size:16px;
 * 首行缩进 text-indent:2em;
 */
#output p {
  margin: 10px 10px;
  line-height: 1.75;
  letter-spacing: 0.2em;
  font-size: 14px;
  word-spacing: 0.1em;
}

/* 一级标题 */
#output h1 {
  border-bottom: 2px solid rgb(248, 57, 41);
  font-size: 1.3em;
}

/* 一级标题内容 */
#output h1 .content {
  display: inline-block;
  font-weight: normal;
  background: rgb(248, 57, 41);
  color: #ffffff;
  padding: 3px 10px 1px;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
  margin-right: 3px;
}

/* 一级标题修饰 请参考有实例的主题 */
#output h1:after {
}

/* 二级标题 */
#output h2 {
  text-align: left;
  margin: 20px 10px 0px 0px;
}

/* 二级标题内容 */
#output h2 .content {
  font-family: STHeitiSC-Light;
  font-size: 18px;
  font-weight: bolder;
  display: inline-block;
  padding-left: 10px;
  border-left: 5px solid rgb(248, 57, 41);
}

/* 二级标题修饰 请参考有实例的主题 */
#output h2:after {
}

/* 三级标题 */
#output h3 {
}

/* 三级标题内容 */
#output h3 .content {
  font-size: 14px;
  color: rgb(165, 213, 93);
}

/* 三级标题修饰 请参考有实例的主题 */
#output h3:after {
}

/* 无序列表整体样式
 * list-style-type: square|circle|disc;
 */
#output ul {
  font-size: 14px;
}

/* 有序列表整体样式
 * list-style-type: upper-roman|lower-greek|lower-alpha;
 */
#output ol {
  font-size: 14px;
}

/* 列表内容，不要设置li
 */
#output li section {
  font-size: 13px;
}

/* 引用
 * 左边缘颜色 border-left-color:black;
 * 背景色 background:gray;
 */
#output blockquote {
  font-style: normal;
  border-left: none;
  padding: 10px;
  position: relative;
  line-height: 1.8;
  border-radius: 0px 0px 10px 10px;
  color: #feeeed;
  background: #000;
  box-shadow: #84a1a8 0px 10px 15px;
}
#output blockquote:before {
  content: ' ';
  display: inline;
  color: #fff;
  font-size: 4em;
  font-family: Arial, serif;
  line-height: 1em;
  font-weight: 700;
}

/* 引用文字 */
#output blockquote p {
  color: #feeeed;
  font-size: 13px;
  display: inline;
}
#output blockquote:after {
  content: '”';
  float: right;
  display: inline;
  color: #fff;
  font-size: 3em;
  line-height: 1em;
  font-weight: 500;
}

/* 链接
 * border-bottom: 1px solid #009688;
 */
#output a {
  color: rgb(248, 57, 41);
  border-bottom: 1px solid #ff3502;
  font-family: STHeitiSC-Light;
}

/* 加粗 */
#output strong {
  font-weight: border;
  color: rgb(248, 57, 41);
}

/* 斜体 */
#output em {
  color: rgb(248, 57, 41);
  letter-spacing: 0.3em;
}

/* 加粗斜体 */
#output em strong {
  color: rgb(248, 57, 41);
  letter-spacing: 0.3em;
}

/* 删除线 */
#output del {
}

/* 分隔线
 * 粗细、样式和颜色
 * border-top:1px solid #3e3e3e;
 */
#output hr {
  height: 1px;
  padding: 0;
  border: none;
  border-top: medium solidid #333;
  text-align: center;
  background-image: linear-gradient(to right, rgba(248, 57, 41, 0), rgba(248, 57, 41, 0.75), rgba(248, 57, 41, 0));
}

/* 图片
 * 宽度 width:80%;
 * 居中 margin:0 auto;
 * 居左 margin:0 0;
 */
#output img {
  border-radius: 0px 0px 5px 5px;
  display: block;
  margin: 20px auto;
  width: 85%;
  height: 100%;
  object-fit: contain;
  box-shadow: #84a1a8 0px 10px 15px;
}

/* 图片描述文字 */
#output figcaption {
  display: block;
  font-size: 12px;
  font-family: PingFangSC-Light;
}

/* 行内代码 */
#output p code,
#output li code {
  color: rgb(271, 93, 108);
}

/* 非微信代码块
 * 代码块不换行 display:-webkit-box !important;
 * 代码块换行 display:block;
 */
#output pre code {
}

/*
 * 表格内的单元格
 * 字体大小 font-size: 16px;
 * 边框 border: 1px solid #ccc;
 * 内边距 padding: 5px 10px;
 */
#output table tr th,
#output table tr td {
  font-size: 14px;
}

/* 脚注文字 */
#output .footnote-word {
  color: rgb(248, 57, 41);
}

/* 脚注上标 */
#output .footnote-ref {
  color: rgb(248, 57, 41);
}

/*脚注链接样式*/
#output .footnote-item em {
  color: #6e1e51;
  font-size: 12px;
}

/* "参考资料"四个字
 * 内容 content: "参考资料";
 */
#output .footnotes-sep:before {
}

/* 参考资料编号 */
#output .footnote-num {
}

/* 参考资料文字 */
#output .footnote-item p {
}

/* 参考资料解释 */
#output .footnote-item p em {
}

/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
#output .block-equation svg {
}

/* 行内公式
 */
#output .inline-equation svg {
}
`,cyanCSS=`/**
 * 嫩青 by 画手
 * Source: https://markdown.com.cn/wechat/
 */

/* 全局属性
 * 页边距 padding: 30px;
 * 全文字体 font-family: ptima-Regular;
 * 英文换行 word-break: break-all;
 */
#output {
}

/* 段落，下方未标注标签参数均同此处
 * 上边距 margin-top: 5px;
 * 下边距 margin-bottom: 5px;
 * 行高 line-height: 26px;
 * 词间距 word-spacing: 3px;
 * 字间距 letter-spacing: 3px;
 * 对齐 text-align: left;
 * 颜色 color: #3e3e3e;
 * 字体大小 font-size: 16px;
 * 首行缩进 text-indent: 2em;
 */
#output p {
  color: rgb(89, 89, 89);
}

/* 一级标题 */
#output h1 {
  color: rgb(89, 89, 89);
}

/* 一级标题内容 */
#output h1 .content {
}

/* 一级标题修饰 请参考有实例的主题 */
#output h1:after {
}

/* 二级标题 */
#output h2 {
  border-bottom: 2px solid rgb(89, 89, 89);
  margin-bottom: 30px;
  color: rgb(89, 89, 89);
}

/* 二级标题内容 */
#output h2 .content {
  font-size: 22px;
  display: inline-block;
  border-bottom: 2px solid rgb(89, 89, 89);
}

/* 二级标题修饰 请参考有实例的主题 */
#output h2:after {
}

/* 三级标题 */
#output h3 {
  color: rgb(89, 89, 89);
}

/* 三级标题内容 */
#output h3 .content {
}

/* 三级标题修饰 请参考有实例的主题 */
#output h3:after {
}

/* 无序列表整体样式
 * list-style-type: square|circle|disc;
 */
#output ul {
}

/* 有序列表整体样式
 * list-style-type: upper-roman|lower-greek|lower-alpha;
 */
#output ol {
}

/* 列表内容，不要设置li
 */
#output li section {
}

/* 引用
* 左边缘颜色 border-left-color: black;
* 背景色 background: gray;
*/
#output blockquote {
  font-style: normal;
  padding: 10px;
  position: relative;
  line-height: 1.8;
  text-indent: 0;
  border: none;
  color: #888;
}

#output blockquote:before {
  content: '“';
  display: inline;
  color: #555555;
  font-size: 4em;
  font-family: Arial, serif;
  line-height: 1em;
  font-weight: 700;
}

/* 引用文字 */
#output blockquote p {
  display: inline;
}

/* 链接
 * border-bottom: 1px solid #009688;
 */
#output a {
  color: rgb(71, 193, 168);
  border-bottom: 1px solid rgb(71, 193, 168);
}

/* 加粗 */
#output strong {
  color: rgb(71, 193, 168);
}

/* 斜体 */
#output em {
  color: rgb(71, 193, 168);
}

/* 加粗斜体 */
#output em strong {
  color: rgb(71, 193, 168);
}

/* 删除线 */
#output del {
}

/* 分隔线
* 粗细、样式和颜色
* border-top: 1px solid #3e3e3e;
*/
#output hr {
}

/* 图片
* 宽度 width: 80%;
* 居中 margin: 0 auto;
* 居左 margin: 0 0;
*/
#output img {
}

/* 图片描述文字 */
#output figcaption {
}

/* 行内代码 */
#output p code,
#output li code {
  color: rgb(71, 193, 168);
}

/* 非微信代码块
 * 代码块不换行 display: -webkit-box !important;
 * 代码块换行 display: block;
 */
#output pre code {
}

/*
 * 表格内的单元格
 * 字体大小 font-size: 16px;
 * 边框 border: 1px solid #ccc;
 * 内边距 padding: 5px 10px;
 */
#output table tr th,
#output table tr td {
}

/* 脚注文字 */
#output .footnote-word {
  color: rgb(71, 193, 168);
}

/* 脚注上标 */
#output .footnote-ref {
  color: rgb(71, 193, 168);
}

#output .footnote-item em {
  color: black;
}

/* "参考资料"四个字
 * 内容 content: "参考资料";
 */
#output .footnotes-sep:before {
}

/* 参考资料编号 */
#output .footnote-num {
}

/* 参考资料文字 */
#output .footnote-item p {
}

/* 参考资料解释 */
#output .footnote-item p em {
}

/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
#output .block-equation svg {
}

/* 行内公式
 */
#output .inline-equation svg {
}
`,frontendCSS=`/**
 * 前端之巅同款 by HeyRain
 * Source: https://markdown.com.cn/wechat/
 */

/*初始化格式*/

#output {
  line-height: 1.6;
  letter-spacing: 0.034em;
  color: rgb(63, 63, 63);
  font-size: 16px;
  word-break: break-all;
}

#output p {
  padding-top: 23px;
  color: rgb(74, 74, 74);
  line-height: 1.75em;
}

/* 一级标题 */
#output h1 {
  text-align: center;
  background-image: url(https://my-wechat.mdnice.com/mdnice/mountain_2_20191028221337.png);
  background-position: center top;
  background-repeat: no-repeat;
  background-size: 95px;
  line-height: 95px;
  margin-top: 38px;
  margin-bottom: 10px;
}

/* 一级标题内容 */
#output h1 .content {
  font-size: 20px;
  color: rgb(60, 112, 198);
  border-bottom: 2px solid #3c7076;
}

/* 一级标题修饰 请参考有实例的主题 */
#output h1:after {
}

/* 二级标题 */
#output h2 {
  display: block;
  text-align: center;
  background-image: url(https://my-wechat.mdnice.com/mdnice/mountain_2_20191028221337.png);
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-size: 63px;
  margin-top: 38px;
  margin-bottom: 10px;
}

/*二级标题伪元素*/
#output h2:before {
}

/* 二级标题内容 */
#output h2 .content {
  text-align: center;
  display: inline-block;
  height: 38px;
  line-height: 42px;
  color: rgb(60, 112, 198);
  background-position: left center;
  background-repeat: no-repeat;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-size: 63px;
  margin-top: 38px;
  font-size: 18px;
  margin-bottom: 10px;
}

/* 三级标题 */
#output h3:before {
  content: '';
  background-image: url(https://my-wechat.mdnice.com/mdnice/mountain_1_20191028221337.png);
  background-size: 15px 15px;
  display: inline-block;
  width: 15px;
  height: 15px;
  line-height: 15px;
  margin-bottom: -1px;
}

#output h3 {
}

/* 三级标题内容 */
#output h3 .content {
  font-size: 16px;
  font-weight: bold;
  display: inline-block;
  margin-left: 8px;
  color: rgb(60, 112, 198);
}

/* 三级标题修饰 请参考有实例的主题 */
#output h3:after {
}

/* 列表内容 */
#output li {
}

/* 引用
 * 左边缘颜色 border-left-color:black;
 * 背景色 background:gray;
 */
#output blockquote {
  padding: 15px 20px;
  line-height: 27px;
  background-color: rgb(239, 239, 239);
  border-left: none;
  display: block;
}

/* 引用文字 */
#output blockquote p {
  padding: 0px;
  font-size: 15px;
  color: rgb(89, 89, 89);
}

/* 链接 */
#output a {
  color: rgb(60, 112, 198);
  text-decoration: none;
  border-bottom: 1px solid rgb(60, 112, 198);
}

/* 加粗 */
#output strong {
  line-height: 1.75em;
  color: rgb(74, 74, 74);
}

/* 斜体 */
#output em {
}

/* 加粗斜体 */
#output em strong {
  color: rgb(248, 57, 41);
  letter-spacing: 0.3em;
}

/* 删除线 */
#output del {
}

/* 分割线 */
#output hr {
  height: 1px;
  padding: 0;
  border: none;
  text-align: center;
  background-image: linear-gradient(to right, rgba(60, 122, 198, 0), rgba(60, 122, 198, 0.75), rgba(60, 122, 198, 0));
}

/* 图片 */
#output img {
  border-radius: 4px;
  margin-bottom: 25px;
}

/* 图片描述文字 */
#output figcaption {
  display: block;
  font-size: 12px;
  font-family: PingFangSC-Light;
}

/* 行内代码 */
#output p code,
#output li code {
  color: rgb(60, 112, 198);
}

/* 非微信代码块
 * 代码块不换行 display:-webkit-box !important;
 * 代码块换行 display:block;
 */
#output pre code {
}

/* 表格内的单元格
 * 字体大小 font-size: 16px;
 * 边框 border: 1px solid #ccc;
 * 内边距 padding: 5px 10px;
 */
#output table tr th,
#output table tr td {
  font-size: 14px;
}

#output .footnotes {
  padding-top: 8px;
}

/* 脚注文字 */
#output .footnote-word {
  color: rgb(60, 112, 198);
}

/* 脚注上标 */
#output .footnote-ref {
  color: rgb(60, 112, 198);
}

/* 脚注超链接样式 */
#output .footnote-item em {
  color: rgb(60, 112, 198);
  font-size: 13px;
  font-style: normal;
  border-bottom-color: 1px dashed rgb(60, 112, 198);
}

/* "参考资料"四个字
 * 内容 content: "参考资料";
 */
#output .footnotes-sep:before {
  background-image: none;
  background-size: none;
  display: block;
  width: auto;
  height: auto;
}

/* 参考资料编号 */
#output .footnote-num {
  color: rgb(60, 112, 198);
}

/* 参考资料文字 */
#output .footnote-item p {
  color: rgb(60, 112, 198);
  font-weight: bold;
}

/* 参考资料超链接 */
#output .footnote-item a {
  color: rgb(60, 112, 198);
}

/* 参考资料解释 */
#output .footnote-item p em {
  font-size: 14px;
  font-weight: normal;
  border-bottom: 1px dashed rgb(60, 112, 198);
}

/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
#output .block-equation svg {
}

/* 行内公式*/
#output .inline-equation svg {
}
`,fullstackBlueCSS=`/**
 * 全栈蓝 by Nealyang
 * Source: https://markdown.com.cn/wechat/
 */

/*自定义样式，实时生效*/

/* 全局属性
* 页边距 padding:30px;
* 全文字体 font-family:optima-Regular;
* 英文换行 word-break:break-all;
color:#2b2b2b;
*/
#output {
  line-height: 1.25;
  color: #2b2b2b;
  font-family: Optima-Regular, Optima, PingFangTC-Light, PingFangSC-light, PingFangTC-light;
  letter-spacing: 2px;
  background-image:
    linear-gradient(90deg, rgba(50, 0, 0, 0.04) 3%, rgba(0, 0, 0, 0) 3%),
    linear-gradient(360deg, rgba(50, 0, 0, 0.04) 3%, rgba(0, 0, 0, 0) 3%);
  background-size: 20px 20px;
  background-position: center center;
}

/* 段落，下方未标注标签参数均同此处
* 上边距 margin-top:5px;
* 下边距 margin-bottom:5px;
* 行高 line-height:26px;
* 词间距 word-spacing:3px;
* 字间距 letter-spacing:3px;
* 对齐 text-align:left;
* 颜色 color:#3e3e3e;
* 字体大小 font-size:16px;
* 首行缩进 text-indent:2em;
*/
#output p {
  color: #2b2b2b;
  margin: 10px 0px;
  letter-spacing: 2px;
  font-size: 14px;
  word-spacing: 2px;
}

/* 一级标题 */
#output h1 {
  font-size: 25px;
}

/* 一级标题内容 */
#output h1 span {
  display: inline-block;
  font-weight: bold;
  color: #40b8fa;
}

/* 一级标题修饰 请参考有实例的主题 */
#output h1:after {
}

/* 二级标题 */
#output h2 {
  display: block;
  border-bottom: 4px solid #40b8fa;
}

/* 二级标题内容 */
#output h2 .content {
  display: flex;
  color: #40b8fa;
  font-size: 20px;
  margin-left: 25px;
}

/* 二级标题前缀 */
#output h2 .prefix {
  display: flex;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
  background-image: url(https://imgkr.cn-bj.ufileos.com/15fdfb3c-b350-4da9-928e-5f8c506ec325.png);
  margin-bottom: -22px;
}

/* 二级标题后缀 */
#output h2 .suffix {
  display: flex;
  box-sizing: border-box;
  width: 200px;
  height: 10px;
  border-top-left-radius: 20px;
  background: RGBA(64, 184, 250, 0.5);
  color: rgb(255, 255, 255);
  font-size: 16px;
  letter-spacing: 0.544px;
  justify-content: flex-end;
  box-sizing: border-box !important;
  overflow-wrap: break-word !important;
  float: right;
  margin-top: -10px;
}

/* 三级标题 */
#output h3 {
  font-size: 17px;
  font-weight: bold;
  text-align: center;
  position: relative;
  margin-top: 20px;
  margin-bottom: 20px;
}

/* 三级标题内容 */
#output h3 .content {
  border-bottom: 2px solid RGBA(79, 177, 249, 0.65);
  color: #2b2b2b;
  padding-bottom: 2px;
}

#output h3 .content:before {
  content: '';
  width: 30px;
  height: 30px;
  display: block;
  background-image: url(https://imgkr.cn-bj.ufileos.com/cdf294d0-6361-4af9-85e2-0913f0eb609b.png);
  background-position: center;
  background-size: 30px;
  margin: auto;
  opacity: 1;
  background-repeat: no-repeat;
  margin-bottom: -8px;
}

/* 三级标题修饰 请参考有实例的主题 */
#output h3:after {
}

#output h4 .content {
  height: 16px;
  line-height: 16px;
  font-size: 16px;
}

#output h4 .content:before {
  content: '';
  background-image: url(https://imgkr.cn-bj.ufileos.com/899e43b7-5a08-4ac6-aa00-1c45f169a65b.png);
  display: inline-block;
  width: 16px;
  height: 16px;
  background-size: 100%;
  background-position: left bottom;
  background-repeat: no-repeat;
  width: 16px;
  height: 15px;
  line-height: 15px;
  margin-right: 6px;
  margin-bottom: -2px;
}

/* 无序列表整体样式
* list-style-type: square|circle|disc;
*/
#output ul {
  font-size: 15px; /*神奇逻辑，必须比li section的字体大才会在二级中生效*/
  color: #595959;
  list-style-type: circle;
}

/* 有序列表整体样式
* list-style-type: upper-roman|lower-greek|lower-alpha;
*/
#output ol {
  font-size: 15px;
  color: #595959;
}

/* 列表内容，不要设置li
*/
#output li section {
  font-size: 14px;
  font-weight: normal;
  color: #595959;
}

/* 引用
* 左边缘颜色 border-left-color:black;
* 背景色 background:gray;
*/
#output blockquote::before {
  content: '❝';
  color: RGBA(64, 184, 250, 0.5);
  font-size: 34px;
  line-height: 1;
  font-weight: 700;
}

#output blockquote {
  text-size-adjust: 100%;
  line-height: 1.55em;
  font-weight: 400;
  border-radius: 6px;
  color: #595959;
  font-style: normal;
  text-align: left;
  box-sizing: inherit;
  border-left: none;
  border: 1px solid RGBA(64, 184, 250, 0.4);
  background: RGBA(64, 184, 250, 0.1);
}

#output blockquote p {
  color: #595959;
}

#output blockquote::after {
  content: '❞';
  float: right;
  color: RGBA(64, 184, 250, 0.5);
}

/* 链接
* border-bottom: 1px solid #009688;
*/
#output a {
  color: #40b8fa;
  font-weight: normal;
  border-bottom: 1px solid #3baafa;
}

#output strong::before {
  content: '「';
}

/* 加粗 */
#output strong {
  color: #3594f7;
  font-weight: bold;
}

#output strong::after {
  content: '」';
}

/* 斜体 */
#output em {
  font-style: normal;
  color: #3594f7;
  font-weight: bold;
}

/* 加粗斜体 */
#output em strong {
  color: #3594f7;
}

/* 删除线 */
#output del {
  color: #3594f7;
}

/* 分隔线
* 粗细、样式和颜色
* border-top:1px solid #3e3e3e;
*/
#output hr {
  height: 1px;
  padding: 0;
  border: none;
  border-top: 2px solid #3baafa;
}

/* 图片
* 宽度 width:80%;
* 居中 margin:0 auto;
* 居左 margin:0 0;
*/
#output img {
  border-radius: 6px;
  display: block;
  margin: 20px auto;
  object-fit: contain;
  box-shadow: 2px 4px 7px #999;
}

/* 图片描述文字 */
#output figcaption {
  display: block;
  font-size: 13px;
  color: #2b2b2b;
}

#output figcaption:before {
  content: '';
  background-image: url(https://img.alicdn.com/tfs/TB1Yycwyrj1gK0jSZFuXXcrHpXa-32-32.png);
  display: inline-block;
  width: 18px;
  height: 18px;
  background-size: 18px;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 5px;
  margin-bottom: -5px;
}

/* 行内代码 */
#output p code,
#output li code {
  color: #3594f7;
  background: RGBA(59, 170, 250, 0.1);
  display: inline-block;
  padding: 0 2px;
  border-radius: 2px;
  height: 21px;
  line-height: 22px;
}

/* 非微信代码块
* 代码块不换行 display:-webkit-box !important;
* 代码块换行 display:block;
*/
#output .code-snippet__fix {
  background: #f7f7f7;
  border-radius: 2px;
}

#output pre code {
  letter-spacing: 0px;
}

/*
* 表格内的单元格
* 字体大小 font-size: 16px;
* 边框 border: 1px solid #ccc;
* 内边距 padding: 5px 10px;
*/
#output table tr th,
#output table tr td {
  font-size: 14px;
  color: #595959;
}

#output .footnotes {
  background: #f6eeff;
  padding: 20px 20px 20px 20px;
  font-size: 14px;
  border: 0.8px solid #dec6fb;
  border-radius: 6px;
  border: 1px solid #dec6fb;
}

/* 脚注文字 */
#output .footnote-word {
  font-weight: normal;
  color: #595959;
}

/* 脚注上标 */
#output .footnote-ref {
  font-weight: normal;
  color: #595959;
}

/*脚注链接样式*/
#output .footnote-item em {
  font-size: 14px;
  color: #595959;
  display: block;
}

#output .footnotes {
  background: RGBA(53, 148, 247, 0.4);
  padding: 20px 20px 20px 20px;
  font-size: 14px;
  border-radius: 6px;
  border: 1px solid RGBA(53, 148, 247, 1);
}

/* "参考资料"四个字
* 内容 content: "参考资料";
*/
#output .footnotes-sep:before {
  content: 'Reference';
  color: #595959;
  letter-spacing: 1px;
  border-bottom: 2px solid RGBA(64, 184, 250, 1);
  display: inline;
  background: linear-gradient(white 60%, RGBA(64, 184, 250, 0.4) 40%);
  font-size: 20px;
}

/* 参考资料编号 */
#output .footnote-num {
}

/* 参考资料文字 */
#output .footnote-item p {
  color: #595959;
  font-weight: bold;
}

/* 参考资料解释 */
#output .footnote-item p em {
  font-weight: normal;
}

/* 行间公式
* 最大宽度 max-width: 300% !important;
*/
#output .block-equation svg {
}

/* 行内公式
*/
#output .inline-equation svg {
}
`,geekBlackCSS=`/**
 * 极客黑

 by hyper-xx
 * Source: https://markdown.com.cn/wechat/
 */

/*自定义样式，实时生效*/

/* 全局属性
 * 页边距 padding: 30px;
 * 全文字体 font-family: ptima-Regular;
 * 英文换行 word-break: break-all;
 */
#output {
}

/* 段落，下方未标注标签参数均同此处
 * 上边距 margin-top: 5px;
 * 下边距 margin-bottom: 5px;
 * 行高 line-height: 26px;
 * 词间距 word-spacing: 3px;
 * 字间距 letter-spacing: 3px;
 * 对齐 text-align: left;
 * 颜色 color: #3e3e3e;
 * 字体大小 font-size: 16px;
 * 首行缩进 text-indent: 2em;
 */
#output p {
  box-sizing: border-box;
  margin-bottom: 16px;
  font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif;
  font-size: 15px;
  text-align: start;
  white-space: normal;
  text-size-adjust: auto;
  line-height: 1.75em;
}

/* 一级标题 */
#output h1 {
  margin-top: -0.46em;
  margin-bottom: 0.1em;
  border-bottom: 2px solid rgb(198, 196, 196);
  box-sizing: border-box;
}

/* 一级标题内容 */
#output h1 .content {
  padding-top: 5px;
  padding-bottom: 5px;
  color: rgb(160, 160, 160);
  font-size: 13px;
  line-height: 2;
  box-sizing: border-box;
}

/* 一级标题修饰 请参考有实例的主题 */
#output h1:after {
}

/* 二级标题 */
#output h2 {
  margin: 10px auto;
  height: 40px;
  background-color: rgb(251, 251, 251);
  border-bottom: 1px solid rgb(246, 246, 246);
  overflow: hidden;
  box-sizing: border-box;
}

/* 二级标题内容 */
#output h2 .content {
  margin-left: -10px;
  display: inline-block;
  width: auto;
  height: 40px;
  background-color: rgb(33, 33, 34);
  border-bottom-right-radius: 100px;
  color: rgb(255, 255, 255);
  padding-right: 30px;
  padding-left: 30px;
  line-height: 40px;
  font-size: 16px;
}

/* 二级标题修饰 请参考有实例的主题 */
#output h2:after {
}

/* 三级标题 */
#output h3 {
  margin: 20px auto 5px;
  border-top: 1px solid rgb(221, 221, 221);
  box-sizing: border-box;
}

/* 三级标题内容 */
#output h3 .content {
  margin-top: -1px;
  padding-top: 6px;
  padding-right: 5px;
  padding-left: 5px;
  font-size: 17px;
  border-top: 2px solid rgb(33, 33, 34);
  display: inline-block;
  line-height: 1.1;
}

/* 三级标题修饰 请参考有实例的主题 */
#output h3:after {
}

#output h4 {
  margin: 10px auto -1px;
  border-top: 1px solid rgb(221, 221, 221);
  box-sizing: border-box;
}

#output h4 .content {
  margin-top: -1px;
  padding-top: 6px;
  padding-right: 5px;
  padding-left: 5px;
  font-size: 16px;
  border-top: 2px solid rgb(33, 33, 34);
  display: inline-block;
  line-height: 1.1;
}

/* 无序列表整体样式
 * list-style-type: square|circle|disc;
 */
#output ul {
}

/* 有序列表整体样式
 * list-style-type: upper-roman|lower-greek|lower-alpha;
 */
#output ol {
}

/* 列表内容，不要设置li
 */
#output li section {
  font-size: 15px;
  font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif;
}

/* 引用
 * 左边缘颜色 border-left-color: black;
 * 背景色 background: gray;
 */
#output blockquote {
  border-left-color: rgb(221, 221, 221);
  margin-top: 1.2em;
  margin-bottom: 1.2em;
  padding-right: 1em;
  padding-left: 1em;
  border-left-width: 4px;
  color: rgb(119, 119, 119);
  quotes: none;
}

/* 引用文字 */
#output blockquote p {
  font-size: 15px;
  font-family:
    -apple-system-font, BlinkMacSystemFont, 'Helvetica Neue', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei UI',
    'Microsoft YaHei', Arial, sans-serif;
  color: rgb(119, 119, 119);
  line-height: 1.75em;
}

/* 链接
 * border-bottom: 1px solid #009688;
 */
#output a {
  color: rgb(239, 112, 96);
  border-bottom: 1px solid rgb(239, 112, 96);
}

/* 加粗 */
#output strong {
}

/* 斜体 */
#output em {
}

/* 加粗斜体 */
#output em strong {
}

/* 删除线 */
#output del {
}

/* 分隔线
 * 粗细、样式和颜色
 * border-top: 1px solid #3e3e3e;
 */
#output hr {
}

/* 图片
 * 宽度 width: 80%;
 * 居中 margin: 0 auto;
 * 居左 margin: 0 0;
 */
#output img {
}

/* 图片描述文字 */
#output figcaption {
}

/* 行内代码 */
#output p code,
#output li code {
  color: rgb(239, 112, 96);
}

/* 非微信代码块
 * 代码块不换行 display: -webkit-box !important;
 * 代码块换行 display: block;
 */
#output pre code {
}

/*
 * 表格内的单元格
 * 字体大小 font-size: 16px;
 * 边框 border: 1px solid #ccc;
 * 内边距 padding: 5px 10px;
 */
#output table tr th,
#output table tr td {
}

/* 脚注文字 */
#output .footnote-word {
  color: #ff3502;
}

/* 脚注上标 */
#output .footnote-ref {
  color: rgb(239, 112, 96);
}

/* "参考资料"四个字
 * 内容 content: "参考资料";
 */
#output .footnotes-sep:before {
}

/* 参考资料编号 */
#output .footnote-num {
}

/* 参考资料文字 */
#output .footnote-item p {
}

/* 参考资料解释 */
#output .footnote-item p em {
}

/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
#output .block-equation svg {
}

/* 行内公式
 */
#output .inline-equation svg {
}
`,greenCSS=`/**
 * 绿意 by 夜尽天明
 * Source: https://markdown.com.cn/wechat/
 */

/* 全局属性
 * 页边距 padding: 30px;
 * 全文字体 font-family: ptima-Regular;
 * 英文换行 word-break: break-all;
 */
#output {
  font-size: 15px;
  letter-spacing: 0.05em;
  color: #595959;
}

/* 段落，下方未标注标签参数均同此处
 * 上边距 margin-top: 5px;
 * 下边距 margin-bottom: 5px;
 * 行高 line-height: 26px;
 * 词间距 word-spacing: 3px;
 * 字间距 letter-spacing: 3px;
 * 对齐 text-align: left;
 * 颜色 color: #3e3e3e;
 * 字体大小 font-size: 16px;
 * 首行缩进 text-indent: 2em;
 */
#output p {
  margin: 1em 4px;
}

/* 一级标题 */
#output h1 {
  margin: 1.2em 0 1em;
  padding: 0;
  font-weight: bold;
  color: #35b378;
}

/* 一级标题内容 */
#output h1 .content {
}

/* 一级标题修饰 请参考有实例的主题 */
#output h1:after {
}

/* 二级标题 */
#output h2 {
  min-height: 32px;
  line-height: 32px;
  border-bottom: solid 1px #000000;
  color: #35b378;
  display: inline-block;
  border-bottom-width: 0px;
  border-bottom-style: solid;
  border-color: #35b378;
  padding-top: 5px;
  padding-right: 0.5em;
  padding-left: 0.5em;
  font-size: 23px;
  margin: 1em 0 0rem 0;
  padding: 0.5em 0;
  text-align: left;
  font-weight: bold;
}

/* 二级标题内容 */
#output h2 .content {
}

/* 二级标题修饰 请参考有实例的主题 */
#output h2:after {
}

/* 三级标题 */
#output h3 {
  margin: 1.2em 0 1em;
  padding: 0;
  font-weight: bold;
  color: #35b378;
}

/* 三级标题内容 */
#output h3 .content {
}

/* 三级标题修饰 请参考有实例的主题 */
#output h3:after {
}

/* 无序列表整体样式
 * list-style-type: square|circle|disc;
 */
#output ul {
}

/* 有序列表整体样式
 * list-style-type: upper-roman|lower-greek|lower-alpha;
 */
#output ol {
}

/* 列表内容，不要设置li
 */
#output li section {
  margin: 10px 0;
}

/* 引用
 * 左边缘颜色 border-left-color: black;
 * 背景色 background: gray;
 */
#output blockquote {
  margin: 10px 5px;
  border-left: 3px solid #35b378;
  border-right: 0px solid #35b378;
  color: #616161;
  quotes: none;
  background: #fbf9fd;
}

/* 引用文字 */
#output blockquote p {
}

/* 链接
 * border-bottom: 1px solid #009688;
 */
#output a {
  color: #35b378;
  border-bottom: 1px solid #35b378;
}

/* 加粗 */
#output strong {
  color: #35b378;
}

/* 斜体 */
#output em {
}

/* 加粗斜体 */
#output em strong {
}

/* 删除线 */
#output del {
}

/* 分隔线
 * 粗细、样式和颜色
 * border-top: 1px solid #3e3e3e;
 */
#output hr {
  border: 1px solid #35b378;
  margin: 1.5em auto;
}

/* 图片
 * 宽度 width: 80%;
 * 居中 margin: 0 auto;
 * 居左 margin: 0 0;
 */
#output img {
}

/* 图片描述文字 */
#output figcaption {
}

/* 行内代码 */
#output p code,
#output li code {
  color: #35b378;
}

/* 非微信代码块
 * 代码块不换行 display: -webkit-box !important;
 * 代码块换行 display: block;
 */
#output pre code {
}

/*
 * 表格内的单元格
 * 字体大小 font-size: 16px;
 * 边框 border: 1px solid #ccc;
 * 内边距 padding: 5px 10px;
 */
#output table tr th,
#output table tr td {
}

/* 脚注文字 */
#output .footnote-word {
  color: #35b378;
}

/* 脚注上标 */
#output .footnote-ref {
  color: #35b378;
}

/* "参考资料"四个字
 * 内容 content: "参考资料";
 */
#output .footnotes-sep:before {
}

/* 参考资料编号 */
#output .footnote-num {
}

/* 参考资料文字 */
#output .footnote-item p {
}

/* 参考资料解释 */
#output .footnote-item p em {
}

/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
#output .block-equation svg {
}

/* 行内公式
 */
#output .inline-equation svg {
}
`,indigoCSS=`/**
 * 兰青 by Krahets
 * Source: https://markdown.com.cn/wechat/
 */

/*自定义样式，实时生效*/

/* 全局属性
 * 页边距 padding: 30px;
 * 全文字体 font-family: ptima-Regular;
 * 英文换行 word-break: break-all;
 */
#output {
}

/* 段落，下方未标注标签参数均同此处
 * 上边距 margin-top: 5px;
 * 下边距 margin-bottom: 5px;
 * 行高 line-height: 26px;
 * 词间距 word-spacing: 3px;
 * 字间距 letter-spacing: 3px;
 * 对齐 text-align: left;
 * 颜色 color: #3e3e3e;
 * 字体大小 font-size: 16px;
 * 首行缩进 text-indent: 2em;
 */
#output p {
  text-align: justify;
}

/* 一级标题 */
#output h1 {
  font-size: 1.8em;
  color: #009688;
  margin: 1.2em auto;
  text-align: center;
  border-bottom: 1px solid #009688;
}

/* 一级标题内容 */
#output h1 .content {
}

/* 一级标题修饰 请参考有实例的主题 */
#output h1:after {
}

/* 二级标题 */
#output h2 {
  color: #009688;
  padding-left: 10px;
  margin: 1em auto;
  border-left: 3px solid #009688;
}

/* 二级标题内容 */
#output h2 .content {
}

/* 二级标题修饰 请参考有实例的主题 */
#output h2:after {
}

/* 三级标题 */
#output h3 {
  margin: 0.6em auto;
  padding-left: 10px;
  border-left: 2px solid #009688;
}

/* 三级标题内容 */
#output h3 .content {
}

/* 三级标题修饰 请参考有实例的主题 */
#output h3:after {
}

/* 四级标题 */
#output h4 {
  margin: 0.6em auto;
  font-size: 1.2em;
  padding-left: 10px;
  border-left: 2px dashed #009688;
}

/* 五级标题 */
#output h5 {
  margin: 0.6em auto;
  font-size: 1.1em;
  padding-left: 10px;
  border-left: 1px dashed #009688;
}

/* 六级标题 */
#output h6 {
  margin: 0.6em auto;
  font-size: 1em;
  padding-left: 10px;
  border-left: 1px dotted #009688;
}

/* 无序列表整体样式
 * list-style-type: square|circle|disc;
 */
#output ul {
}

/* 有序列表整体样式
 * list-style-type: upper-roman|lower-greek|lower-alpha;
 */
#output ol {
}

/* 列表内容，不要设置li
 */
#output li section {
}

/* 引用
 * 左边缘颜色 border-left-color: black;
 * 背景色 background: gray;
 */
#output blockquote {
  border-left: 2px solid #888;
  border-right: 2px solid #888;
  padding-left: 1em;
  color: #777;
}

/* 引用文字 */
#output blockquote p {
}

/* 链接
 * border-bottom: 1px solid #009688;
 */
#output a {
  color: #009688;
  border-bottom: 1px solid #009688;
}

/* 加粗 */
#output strong {
}

/* 斜体 */
#output em {
}

/* 加粗斜体 */
#output em strong {
}

/* 删除线 */
#output del {
}

/* 分隔线
 * 粗细、样式和颜色
 * border-top: 1px solid #3e3e3e;
 */
#output hr {
  margin: 20px 0;
}

/* 图片
 * 宽度 width: 80%;
 * 居中 margin: 0 auto;
 * 居左 margin: 0 0;
 */
#output img {
}

/* 图片描述文字 */
#output figcaption {
}

/* 行内代码 */
#output p code,
#output li code {
  color: #009688;
}

/* 非微信代码块
 * 代码块不换行 display: -webkit-box !important;
 * 代码块换行 display: block;
 */
#output pre code {
}

/* 表格内的单元格
 * 字体大小 font-size: 16px;
 * 边框 border: 1px solid #ccc;
 * 内边距 padding: 5px 10px;
 */
#output table tr th {
  border: 1px solid #009688;
  background-color: #009688;
  color: #f8f8f8;
  border-bottom: 0;
}

#output table tr td {
  border: 1px solid #009688;
}

#output table tr:nth-child(2n) {
  background-color: #f8f8f8;
}

/* 脚注文字 */
#output .footnote-word {
  color: #009688;
}

/* 脚注上标 */
#output .footnote-ref {
  color: #009688;
}

/* "参考资料"四个字
 * 内容 content: "参考资料";
 */
#output .footnotes-sep:before {
}

/* 参考资料编号 */
#output .footnote-num {
}

/* 参考资料文字 */
#output .footnote-item p {
}

/* 参考资料解释 */
#output .footnote-item p em {
}

/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
#output .block-equation svg {
}

/* 行内公式
 */
#output .inline-equation svg {
}
`,inkBlackCSS=`/**
 * 墨黑 by Mayandev
 * Source: https://markdown.com.cn/wechat/
 */

/* 全局属性
 * 页边距 padding: 30px;
 * 全文字体 font-family: ptima-Regular;
 * 英文换行 word-break: break-all;
 */
#output {
}
/* 段落，下方未标注标签参数均同此处
 * 上边距 margin-top: 5px;
 * 下边距 margin-bottom: 5px;
 * 行高 line-height: 26px;
 * 对齐 text-align: left;
 * 颜色 color: #3e3e3e;
 * 字体大小 font-size: 16px;
 * 首行缩进 text-indent: 2em;
 */
#output p {
  font-size: 17px;
  word-spacing: 3px;
  letter-spacing: 1px;
}
/* 一级标题 */
#output h1 {
}
/* 一级标题内容 */
#output h1 .content {
}
/* 一级标题修饰 请参考有实例的主题 */
#output h1:after {
}
/* 二级标题 */
#output h2 {
}
/* 二级标题内容 */
#output h2 .content {
  background-color: #5c5c5c;
  color: white;
  padding: 5px 15px;
  border-radius: 1px;
}
/* 二级标题修饰 请参考有实例的主题 */
#output h2:after {
}
/* 三级标题 */
#output h3 {
}
/* 三级标题内容 */
#output h3 .content {
}
/* 三级标题修饰 请参考有实例的主题 */
#output h3:after {
}
/* 无序列表整体样式
 * list-style-type: square|circle|disc;
 */
#output ul {
}
/* 有序列表整体样式
 * list-style-type: upper-roman|lower-greek|lower-alpha;
 */
#output ol {
}
/* 列表内容，不要设置li
 */
#output li section {
}
/* 引用
* 左边缘颜色 border-left-color: black;
* 背景色 background: gray;
*/
#output blockquote {
}
/* 引用文字 */
#output blockquote p {
}
/* 链接
 * border-bottom: 1px solid #009688;
 */
#output a {
}
/* 加粗 */
#output strong {
}
/* 斜体 */
#output em {
}
/* 加粗斜体 */
#output em strong {
}
/* 删除线 */
#output del {
}
/* 分隔线
* 粗细、样式和颜色
* border-top: 1px solid #3e3e3e;
*/
#output hr {
  border-top: 1px dashed #dddddd;
}
/* 图片
* 宽度 width: 80%;
* 居中 margin: 0 auto;
* 居左 margin: 0 0;
*/
#output img {
  border-radius: 5px;
}
/* 图片描述文字 */
#output figcaption {
}
/* 行内代码 */
#output p code,
#output li code {
}
/* 非微信代码块
 * 代码块不换行 display: -webkit-box !important;
 * 代码块换行 display: block;
 */
#output pre code {
}
/*
 * 表格内的单元格
 * 字体大小 font-size: 16px;
 * 边框 border: 1px solid #ccc;
 * 内边距 padding: 5px 10px;
 */
#output table tr th,
#output table tr td {
}
/* 脚注文字 */
#output .footnote-word {
}
/* 脚注上标 */
#output .footnote-ref {
}
/* "参考资料"四个字
 * 内容 content: "参考资料";
 */
#output .footnotes-sep:before {
}
/* 参考资料编号 */
#output .footnote-num {
}
/* 参考资料文字 */
#output .footnote-item p {
}
/* 参考资料解释 */
#output .footnote-item p em {
}
/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
#output .block-equation svg {
}
/* 行内公式
 */
#output .inline-equation svg {
}
`,minimalCSS=`/**
 * 简 by aco
 * Source: https://markdown.com.cn/wechat/
 */

/* 根据该字体大小，统一调整文章整体大小 */
/* 间距，其他字体，代码块以及注脚 */
/* 不会控制微信代码块 */
#output {
  font-size: 16px;
}

/* 颜色管理 */
#output a {
  color: #3e64ff;
}
#output p code {
  color: #e46918;
  background-color: #efefef;
}
#output .footnote-word,
#output .footnote-ref {
  color: #004a7c;
}
#output .footnote-item em {
  color: #004a7c;
}

/* 统一间距 */
#output p,
#output section,
#output h1,
#output h2,
#output h3,
#output h4,
#output h5,
#output h6,
#output pre,
#output figure,
#output ul,
#output hr {
  margin: 1em 0;
  color: #333;
}

#output {
  margin-top: -1em;
  color: #333;
  padding-top: 0;
  padding-bottom: 0;
  font-family:
    -apple-system,
    system-ui,
    BlinkMacSystemFont,
    Helvetica Neue,
    PingFang SC,
    Hiragino Sans GB,
    Microsoft YaHei,
    Arial,
    sans-serif;
}
#output * {
  line-height: 1.6 !important;
}

#output hr {
  border-top: 1px solid #dfe2e5;
}

/* 标题调整 */
#output h1 {
  font-size: 1.4em;
}
#output h2 {
  font-size: 1.3em;
}
#output h1,
#output h2 {
  padding-bottom: 0.3em;
  border-bottom: 1px solid #dfe2e5;
}
#output h3 {
  font-size: 1.2em;
}
#output h4 {
  font-size: 1.1em;
}
#output h5 {
  font-size: 1em;
}
#output h6 {
  font-size: 1em;
}

/* 段落调整 */
#output p {
  padding: 0;
  font-size: inherit;
  color: #333;
}
#output blockquote {
  background: none;
  border-left: 4px solid #ddd;
  padding: 0 1em;
}
#output blockquote p {
  margin: 0;
  color: #666;
}
#output strong {
  color: #333;
}

#output a {
  font-weight: normal;
  border-color: inherit;
}

/* 列表调整 */
#output li section {
  margin-top: 0.3em;
  margin-bottom: 0.3em;
  font-weight: normal;
}
#output li ul {
  margin: 0;
}

/* 代码块调整 */
#output pre {
  border-radius: 4px;
}
#output section pre {
  margin: 0;
  padding-top: 0;
  padding-bottom: 0;
}
#output p code {
  font-size: 0.875em;
}
#output pre code {
  font-size: 0.875em;
}

#output figure img {
  max-width: 100%;
  width: auto;
  margin: 0 auto;
}

/* table 调整 */
#output table tr th,
#output table tr td {
  font-size: 1em;
}

/* 注脚调整 */
#output .footnotes-sep {
  font-size: 1.3em;
}
#output .footnote-item {
  margin: 0.4em 0;
}
#output .footnote-item * {
  line-height: 1.4 !important;
}
#output .footnote-item p {
  margin: 0;
  font-size: 0.9em;
}
#output .footnote-item em {
  font-style: normal;
  padding-left: 0.5em;
}
#output .footnote-item span {
  flex: 0 0 1.5em;
  margin-right: 10px;
  font-size: 0.9em;
}

/* 微信默认样式修复 */
/* 微信代码块固定为 14px */
#output pre.code-snippet__js {
  padding: 16px 0;
}

#output pre.code-snippet__js code {
  font-size: 14px;
}
`,mintCSS=`/**
 * 萌绿 by koala
 * Source: https://markdown.com.cn/wechat/
 */

#output {
  line-height: 1.6;
  letter-spacing: 0.034em;
  color: rgb(63, 63, 63);
  font-size: 16px;
  word-break: break-all;
}
#output p {
  padding-top: 1em;
  color: rgb(74, 74, 74);
  line-height: 1.75em;
}
/* 一级标题 */
#output h1 {
  text-align: center;
  background-image: url(http://img.xiaogangzai.cn/title_h1.png);
  background-position: center top;
  background-repeat: no-repeat;
  background-size: 75px;
  line-height: 95px;
  margin-top: 38px;
  margin-bottom: 10px;
}
/* 一级标题内容 */
#output h1 .content {
  font-size: 20px;
  color: #48b378;
  border-bottom: 2px solid #2e7950;
}
/* 一级标题修饰 请参考有实例的主题 */
#output h1:after {
}

/* 二级标题 */
#output h2 {
  display: block;
  text-align: center;
  background-image: url(http://img.xiaogangzai.cn/title.png);
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-size: 50px;
  margin-top: 1em;
  margin-bottom: 10px;
}
/*二级标题伪元素*/
#output h2:before {
}
/* 二级标题内容 */
#output h2 .content {
  text-align: center;
  display: inline-block;
  height: 38px;
  line-height: 42px;
  color: #48b378;
  background-position: left center;
  background-repeat: no-repeat;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-size: 63px;
  margin-top: 38px;
  font-size: 18px;
  margin-bottom: 10px;
}
/* 三级标题 */
#output h3:before {
  content: '';
  background-image: url(http://img.xiaogangzai.cn/title_h2.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: inline-block;
  width: 16px;
  height: 15px;
  line-height: 15px;
  margin-bottom: -1px;
}
#output h3 {
  margin-top: 1.2em;
}
#output h4 {
  margin-top: 30px;
}
/* 三级标题内容 */
#output h3 .content {
  font-size: 17px;
  font-weight: bold;
  display: inline-block;
  margin-left: 8px;
  color: #48b378;
}
/* 三级标题修饰 请参考有实例的主题 */
#output h3:after {
}
/* 列表内容 */
#output li {
}
/* 引用
 * 左边缘颜色 border-left-color:black;
 * 背景色 background:gray;
 */
#output blockquote {
  padding: 15px 20px;
  line-height: 27px;
  background-color: #fbf9fd;
  border-left: 3px solid #35b378;
  display: block;
}
/* 引用文字 */
#output blockquote p {
  padding: 0px;
  font-size: 15px;
  color: rgb(89, 89, 89);
}
/* 链接 */
#output a {
  color: #48b378;
  text-decoration: none;
  border-bottom: 1px solid #48b378;
}
/* 加粗 */
#output strong {
  line-height: 1.75em;
  color: rgb(74, 74, 74);
}
/* 斜体 */
#output em {
}
/* 加粗斜体 */
#output em strong {
  color: rgb(248, 57, 41);
  letter-spacing: 0.3em;
}
/* 删除线 */
#output del {
}

/* 分割线 */
#output hr {
  height: 1px;
  padding: 0;
  border: none;
  text-align: center;
  background-image: linear-gradient(to right, rgba(93, 186, 133, 0), rgba(93, 186, 133, 0.75), rgba(93, 186, 133, 0));
}
/* 图片 */
#output img {
  border-radius: 4px;
  margin-bottom: 25px;
}
/* 图片描述文字 */
#output figcaption {
  display: block;
  font-size: 12px;
  font-family: PingFangSC-Light;
}
/* 行内代码 */
#output p code,
#output li code {
  color: #28ca71;
}
/* 非微信代码块
 * 代码块不换行 display:-webkit-box !important;
 * 代码块换行 display:block;
 */
#output pre code {
}
/* 表格内的单元格
 * 字体大小 font-size: 16px;
 * 边框 border: 1px solid #ccc;
 * 内边距 padding: 5px 10px;
 */
#output table tr th,
#output table tr td {
  font-size: 14px;
}
#output .footnotes {
  padding-top: 8px;
}
/* 脚注文字 */
#output .footnote-word {
  color: rgb(90, 185, 131);
}
/* 脚注上标 */
#output .footnote-ref {
  color: rgb(90, 185, 131);
}
/* 脚注超链接样式 */
#output .footnote-item em {
  color: rgb(90, 185, 131);
  font-size: 13px;
  font-style: normal;
  border-bottom: 1px dashed rgb(90, 185, 131);
}
/* "参考资料"四个字
 * 内容 content: "参考资料";
 */
#output .footnotes-sep:before {
  background-image: none;
  background-size: none;
  display: block;
  width: auto;
  height: auto;
}
/* 参考资料编号 */
#output .footnote-num {
  color: rgb(90, 185, 131);
}
/* 参考资料文字 */
#output .footnote-item p {
  color: rgb(90, 185, 131);
  font-weight: bold;
}
/* 参考资料超链接 */
#output .footnote-item a {
  color: rgb(93, 186, 133);
}
/* 参考资料解释 */
#output .footnote-item p em {
  font-size: 14px;
  font-weight: normal;
  border-bottom: 1px dashed rgb(93, 186, 133);
}
/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
#output .block-equation svg {
}
/* 行内公式*/
#output .inline-equation svg {
}
`,orangeHeartCSS=`/**
 * 橙心 by zhning12
 * Source: https://markdown.com.cn/wechat/
 */

/* 全局属性
 * 页边距 padding: 30px;
 * 全文字体 font-family: ptima-Regular;
 * 英文换行 word-break: break-all;
 */
#output {
}
/* 段落，下方未标注标签参数均同此处
 * 上边距 margin-top: 5px;
 * 下边距 margin-bottom: 5px;
 * 行高 line-height: 26px;
 * 词间距 word-spacing: 3px;
 * 字间距 letter-spacing: 3px;
 * 对齐 text-align: left;
 * 颜色 color: #3e3e3e;
 * 字体大小 font-size: 16px;
 * 首行缩进 text-indent: 2em;
 */
#output p {
}
/* 一级标题 */
#output h1 {
}
/* 一级标题内容 */
#output h1 .content {
}
/* 一级标题修饰 请参考有实例的主题 */
#output h1:after {
}
/* 二级标题 */
#output h2 {
  border-bottom: 2px solid rgb(239, 112, 96);
  font-size: 1.3em;
}
/* 二级标题内容 */
#output h2 .content {
  display: inline-block;
  font-weight: bold;
  background: rgb(239, 112, 96);
  color: #ffffff;
  padding: 3px 10px 1px;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
  margin-right: 3px;
}
/* 二级标题修饰 请参考有实例的主题 */
#output h2:after {
  display: inline-block;
  content: ' ';
  vertical-align: bottom;
  border-bottom: 36px solid #efebe9;
  border-right: 20px solid transparent;
}
/* 三级标题 */
#output h3 {
}
/* 三级标题内容 */
#output h3 .content {
}
/* 三级标题修饰 请参考有实例的主题 */
#output h3:after {
}
/* 无序列表整体样式
 * list-style-type: square|circle|disc;
 */
#output ul {
}
/* 有序列表整体样式
 * list-style-type: upper-roman|lower-greek|lower-alpha;
 */
#output ol {
}
/* 列表内容，不要设置li
 */
#output li section {
}
/* 引用
 * 左边缘颜色 border-left-color: black;
 * 背景色 background: gray;
 */
#output blockquote {
  border-left-color: rgb(239, 112, 96);
  background: #fff9f9;
}
/* 引用文字 */
#output blockquote p {
}
/* 链接
 * border-bottom: 1px solid #009688;
 */
#output a {
  color: rgb(239, 112, 96);
  border-bottom: 1px solid rgb(239, 112, 96);
}
/* 加粗 */
#output strong {
}
/* 斜体 */
#output em {
}
/* 加粗斜体 */
#output em strong {
}
/* 删除线 */
#output del {
}
/* 分隔线
 * 粗细、样式和颜色
 * border-top: 1px solid #3e3e3e;
 */
#output hr {
}
/* 图片
 * 宽度 width: 80%;
 * 居中 margin: 0 auto;
 * 居左 margin: 0 0;
 */
#output img {
}
/* 图片描述文字 */
#output figcaption {
}
/* 行内代码 */
#output p code,
#output li code {
  color: rgb(239, 112, 96);
}
/* 非微信代码块
 * 代码块不换行 display: -webkit-box !important;
 * 代码块换行 display: block;
 */
#output pre code {
}
/*
 * 表格内的单元格
 * 字体大小 font-size: 16px;
 * 边框 border: 1px solid #ccc;
 * 内边距 padding: 5px 10px;
 */
#output table tr th,
#output table tr td {
}
/* 脚注文字 */
#output .footnote-word {
  color: #ff3502;
}
/* 脚注上标 */
#output .footnote-ref {
  color: rgb(239, 112, 96);
}
/* "参考资料"四个字
 * 内容 content: "参考资料";
 */
#output .footnotes-sep:before {
}
/* 参考资料编号 */
#output .footnote-num {
}
/* 参考资料文字 */
#output .footnote-item p {
}
/* 参考资料解释 */
#output .footnote-item p em {
}
/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
#output .block-equation svg {
}
/* 行内公式
 */
#output .inline-equation svg {
}
`,rosePurpleCSS=`/**
 * 蔷薇紫 by HeyRain
 * Source: https://markdown.com.cn/wechat/
 */

/* 全局属性
* 页边距 padding:30px;
* 全文字体 font-family:optima-Regular;
* 英文换行 word-break:break-all;
color:#595959;
*/
#output {
  line-height: 1.75;
  color: #595959;
  font-family: Optima-Regular, Optima, PingFangTC-Light, PingFangSC-light, PingFangTC-light;
  letter-spacing: 2px;
  background-image:
    linear-gradient(90deg, rgba(50, 0, 0, 0.05) 3%, rgba(0, 0, 0, 0) 3%),
    linear-gradient(360deg, rgba(50, 0, 0, 0.05) 3%, rgba(0, 0, 0, 0) 3%);
  background-size: 20px 20px;
  background-position: center center;
}

/* 段落，下方未标注标签参数均同此处
* 上边距 margin-top:5px;
* 下边距 margin-bottom:5px;
* 行高 line-height:26px;
* 词间距 word-spacing:3px;
* 字间距 letter-spacing:3px;
* 对齐 text-align:left;
* 颜色 color:#3e3e3e;
* 字体大小 font-size:16px;
* 首行缩进 text-indent:2em;
*/
#output p {
  color: #595959;
  margin: 10px 0px;
  letter-spacing: 2px;
  font-size: 14px;
  word-spacing: 2px;
}

/* 一级标题 */
#output h1 {
  font-size: 25px;
}

/* 一级标题内容 */
#output h1 .content {
  display: inline-block;
  font-weight: bold;
  color: #595959;
}

/* 一级标题修饰 请参考有实例的主题 */
#output h1:after {
}

/* 二级标题 */
#output h2 {
  text-align: left;
  margin: 20px 10px 0px 0px;
}

/* 二级标题内容 */
#output h2 .content {
  font-size: 18px;
  font-weight: bold;
  display: inline-block;
  padding-left: 10px;
  border-left: 5px solid #dec6fb;
  color: #595959;
}

/* 二级标题修饰 请参考有实例的主题 */
#output h2:after {
}

/* 三级标题 */
#output h3 {
  font-size: 16px;
  font-weight: bold;
  text-align: center;
}

/* 三级标题内容 */
#output h3 .content {
  border-bottom: 2px solid #dec6fb;
  color: #595959;
}

/* 三级标题修饰 请参考有实例的主题 */
#output h3:after {
}

/* 无序列表整体样式
* list-style-type: square|circle|disc;
*/
#output ul {
  font-size: 15px; /*神奇逻辑，必须比li section的字体大才会在二级中生效*/
  color: #595959;
  list-style-type: circle;
}

/* 有序列表整体样式
* list-style-type: upper-roman|lower-greek|lower-alpha;
*/
#output ol {
  font-size: 15px;
  color: #595959;
}

/* 列表内容，不要设置li
*/
#output li section {
  font-size: 14px;
  font-weight: normal;
  color: #595959;
}

/* 引用
* 左边缘颜色 border-left-color:black;
* 背景色 background:gray;
*/
#output blockquote::before {
  content: '❝';
  /*   color: #d9b8fa;*/
  color: #dec6fb;
  font-size: 34px;
  line-height: 1;
  font-weight: 700;
}

#output blockquote {
  text-size-adjust: 100%;
  line-height: 1.55em;
  font-weight: 400;
  border-radius: 6px;
  color: #595959;
  font-style: normal;
  text-align: left;
  box-sizing: inherit;
  border-left: none;
  border: 1px solid #dec6fb;
  background: #f6eeff;
}

#output blockquote p {
  color: #595959;
}

#output blockquote::after {
  content: '❞';
  float: right;
  /*   color: #d9b8fa; */
  color: #dec6fb;
}

/* 链接
* border-bottom: 1px solid #009688;
*/
#output a {
  color: #664d9d;
  font-weight: normal;
  border-bottom: 1px solid #664d9d;
}

#output strong::before {
  content: '「';
}

/* 加粗 */
#output strong {
  color: #595959;
  font-weight: bold;
}

#output strong::after {
  content: '」';
}

/* 斜体 */
#output em {
  font-style: normal;
  color: #595959;
  background: #f6eeff;
}

/* 加粗斜体 */
#output em strong {
  color: #595959;
}

/* 删除线 */
#output del {
  color: #595959;
}

/* 分隔线
* 粗细、样式和颜色
* border-top:1px solid #3e3e3e;
*/
#output hr {
  height: 1px;
  padding: 0;
  border: none;
  border-top: 2px solid #d9b8fa;
}

/* 图片
* 宽度 width:80%;
* 居中 margin:0 auto;
* 居左 margin:0 0;
*/
#output img {
  border-radius: 6px;
  display: block;
  margin: 20px auto;
  object-fit: contain;
}

/* 图片描述文字 */
#output figcaption {
  display: block;
  font-size: 13px;
  color: #595959;
}

/* 行内代码 */
#output p code,
#output li code {
  color: #595959;
}

/* 非微信代码块
* 代码块不换行 display:-webkit-box !important;
* 代码块换行 display:block;
*/
#output .code-snippet__fix {
  background: #f7f7f7;
  border-radius: 2px;
}

#output pre code {
  /* background: #f7f7f7; */
}

/*
* 表格内的单元格
* 字体大小 font-size: 16px;
* 边框 border: 1px solid #ccc;
* 内边距 padding: 5px 10px;
*/
#output table tr th,
#output table tr td {
  font-size: 14px;
  color: #595959;
}

#output .footnotes {
  background: #f6eeff;
  padding: 20px 20px 20px 20px;
  font-size: 14px;
  border: 0.8px solid #dec6fb;
  border-radius: 6px;
  border: 1px solid #dec6fb;
}

/* 脚注文字 */
#output .footnote-word {
  font-weight: normal;
  color: #595959;
}

/* 脚注上标 */
#output .footnote-ref {
  font-weight: normal;
  color: #595959;
}

/*脚注链接样式*/
#output .footnote-item em {
  background: #f6eeff;
  font-size: 14px;
  color: #595959;
  display: block;
}

/* "参考资料"四个字
* 内容 content: "参考资料";
*/
#output .footnotes-sep:before {
  content: 'Reference';
  color: #595959;
  letter-spacing: 1px;
  border-bottom: 2px solid #dec6fb;
  display: inline;
  background: linear-gradient(white 60%, #f6eeff 40%);
  font-size: 20px;
}

/* 参考资料编号 */
#output .footnote-num {
}

/* 参考资料文字 */
#output .footnote-item p {
  color: #595959;
  font-weight: bold;
}

/* 参考资料解释 */
#output .footnote-item p em {
  font-weight: normal;
}

/* 行间公式
* 最大宽度 max-width: 300% !important;
*/
#output .block-equation svg {
}

/* 行内公式
*/
#output .inline-equation svg {
}
`,techBlueCSS=`/**
 * 科技蓝 by 夜尽天明
 * Source: https://markdown.com.cn/wechat/
 */

/*自定义样式，实时生效*/

/* 全局属性
 * 页边距 padding:30px;
 * 全文字体 font-family:ptima-Regular;
 * 英文换行 word-break:break-all;
 */
#output {
  font-family: PingFangSC-Light;
}

/* 段落，下方未标注标签参数均同此处
 * 上边距 margin-top:5px;
 * 下边距 margin-bottom:5px;
 * 行高 line-height:26px;
 * 词间距 word-spacing:3px;
 * 字间距 letter-spacing:3px;
 * 对齐 text-align:left;
 * 颜色 color:#3e3e3e;
 * 字体大小 font-size:16px;
 * 首行缩进 text-indent:2em;
 */
#output p {
  margin: 10px 10px;
  line-height: 1.75;
  letter-spacing: 0.2em;
  font-size: 15px;
  word-spacing: 0.1em;
}

/* 一级标题 */
#output h1 {
  border-bottom: 2px solid #0e88eb;
  font-size: 1.4em;
  text-align: center;
}

/* 一级标题内容 */
#output h1 .content {
  font-size: 1.4em;
  display: inline-block;
  font-weight: bold;
  //background: #0e88eb;
  color: #ffffff;
  color: #0e88eb;
  padding: 3px 10px 1px;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
  margin-right: 3px;
}

/* 一级标题修饰 请参考有实例的主题 */
#output h1:after {
}

/* 二级标题 */
#output h2 {
  text-align: left;
  margin: 20px 10px 0px 0px;
}

/* 二级标题内容 */
#output h2 .content {
  font-family: STHeitiSC-Light;
  font-size: 22px;
  color: #0e88eb;
  font-weight: bolder;
  display: inline-block;
  padding-left: 10px;
  border-left: 5px solid #0e88eb;
}

/* 二级标题修饰 请参考有实例的主题 */
#output h2:after {
}

/* 三级标题 */
#output h3 {
  font-size: 18px;
  color: #0e88eb;
}

/* 三级标题内容 */
#output h3 .content {
  font-size: 18px;
  color: #0e88eb;
}

/* 三级标题修饰 请参考有实例的主题 */
#output h3:after {
}

/* 无序列表整体样式
 * list-style-type: square|circle|disc;
 */
#output ul {
}

/* 有序列表整体样式
 * list-style-type: upper-roman|lower-greek|lower-alpha;
 */
#output ol {
}

/* 列表内容，不要设置li
 */
#output li section {
  font-size: 15px;
}

/* 引用
 * 左边缘颜色 border-left-color:black;
 * 背景色 background:gray;
 */
#output blockquote {
  font-style: normal;
  border-left: none;
  padding: 10px;
  position: relative;
  line-height: 1.8;
  border-radius: 0px 0px 10px 10px;
  color: #0e88eb;
  background: #fff;
  box-shadow: #84a1a8 0px 10px 15px;
}
#output blockquote:before {
  content: '★ ';
  display: inline;
  color: #0e88eb;
  font-size: 4em;
  font-family: Arial, serif;
  line-height: 1em;
  font-weight: 700;
}

/* 引用文字 */
#output blockquote p {
  color: #0e88eb;
  font-size: 15px;
  display: inline;
}
#output blockquote:after {
  content: '”';
  float: right;
  display: inline;
  color: #0e88eb;
  font-size: 3em;
  line-height: 1em;
  font-weight: 500;
}

/* 链接
 * border-bottom: 1px solid #009688;
 */
#output a {
  color: #0e88eb;
  border-bottom: 0px solid #ff3502;
  font-family: STHeitiSC-Light;
}

/* 加粗 */
#output strong {
  font-weight: border;
  color: #0e88eb;
}

/* 斜体 */
#output em {
  color: #0e88eb;
  letter-spacing: 0.3em;
}

/* 加粗斜体 */
#output em strong {
  color: #0e88eb;
  letter-spacing: 0.3em;
}

/* 删除线 */
#output del {
}

/* 分隔线
 * 粗细、样式和颜色
 * border-top:1px solid #3e3e3e;
 */
#output hr {
  height: 1px;
  padding: 0;
  border: none;
  border-top: medium solidid #333;
  text-align: center;
  background-image: linear-gradient(to right, rgba(248, 57, 41, 0), #0e88eb, rgba(248, 57, 41, 0));
}

/* 图片
 * 宽度 width:80%;
 * 居中 margin:0 auto;
 * 居左 margin:0 0;
 */
#output img {
  border-radius: 0px 0px 5px 5px;
  display: block;
  margin: 20px auto;
  width: 85%;
  height: 100%;
  object-fit: contain;
  box-shadow: #84a1a8 0px 10px 15px;
}

/* 图片描述文字 */
#output figcaption {
  display: block;
  font-size: 12px;
  font-family: PingFangSC-Light;
}

/* 行内代码 */
#output p code,
#output li code {
  color:; /*自定义样式，实时生效*/
}

/* 非微信代码块
 * 代码块不换行 display:-webkit-box !important;
 * 代码块换行 display:block;
 */
#output pre code {
}

/*
 * 表格内的单元格
 * 字体大小 font-size: 16px;
 * 边框 border: 1px solid #ccc;
 * 内边距 padding: 5px 10px;
 */
#output table tr th,
#output table tr td {
  font-size: 15px;
}

/* 脚注文字 */
#output .footnote-word {
  color: #2d59b3;
}

/* 脚注上标 */
#output .footnote-ref {
  color: #6a88c5;
}

/* 非微信代码块
 * 代码块不换行 display:-webkit-box !important;
 * 代码块换行 display:block;
 */
#output pre code {
}

/* 脚注文字 */
#output .footnote-word {
  color: #0e88eb;
}

/* 脚注上标 */
#output .footnote-ref {
  color: #0e88eb;
}

/*脚注链接样式*/
#output .footnote-item em {
  color: #082a71;
  font-size: 12px;
}

/* "参考资料"四个字
 * 内容 content: "参考资料";
 */
#output .footnotes-sep:before {
}

/* 参考资料编号 */
#output .footnote-num {
}

/* 参考资料文字 */
#output .footnote-item p {
}

/* 参考资料解释 */
#output .footnote-item p em {
}

/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
#output .block-equation svg {
}

/* 行内公式
 */
#output .inline-equation svg {
}
`,violetCSS=`/**
 * 姹紫 by djmaxwow
 * Source: https://markdown.com.cn/wechat/
 */

/* 全局属性
 * 页边距 padding: 30px;
 * 全文字体 font-family: ptima-Regular;
 * 英文换行 word-break: break-all;
 */
#output {
  font-size: 15px;
  letter-spacing: 0.05em;
  color: #595959;
}

/* 段落，下方未标注标签参数均同此处
 * 上边距 margin-top: 5px;
 * 下边距 margin-bottom: 5px;
 * 行高 line-height: 26px;
 * 词间距 word-spacing: 3px;
 * 字间距 letter-spacing: 3px;
 * 对齐 text-align: left;
 * 颜色 color: #3e3e3e;
 * 字体大小 font-size: 16px;
 * 首行缩进 text-indent: 2em;
 */
#output p {
  margin: 1em 4px;
}

/* 一级标题 */
#output h1 {
  margin: 1.2em 0 1em;
  padding: 0;
  font-weight: bold;
  color: #773098;
}

/* 一级标题内容 */
#output h1 .content {
}

/* 一级标题修饰 请参考有实例的主题 */
#output h1:after {
}

/* 二级标题 */
#output h2 {
  min-height: 32px;
  line-height: 28px;
  border-bottom: solid 1px #000000;
  color: #773098;
  display: inline-block;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-color: #773098;
  padding-top: 5px;
  padding-right: 0.5em;
  padding-left: 0.5em;
  margin-bottom: -3px;
  font-size: 22px;
  margin: 1em auto;
  padding: 0.5em 0;
  text-align: center;
  width: 85%;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* 二级标题内容 */
#output h2 .content {
}

/* 二级标题修饰 请参考有实例的主题 */
#output h2:after {
}

/* 三级标题 */
#output h3 {
  margin: 1.2em 0 1em;
  padding: 0;
  font-weight: bold;
  color: #773098;
}

/* 三级标题内容 */
#output h3 .content {
}

/* 三级标题修饰 请参考有实例的主题 */
#output h3:after {
}

/* 无序列表整体样式
 * list-style-type: square|circle|disc;
 */
#output ul {
}

/* 有序列表整体样式
 * list-style-type: upper-roman|lower-greek|lower-alpha;
 */
#output ol {
}

/* 列表内容，不要设置li
 */
#output li section {
  margin: 10px 0;
}

/* 引用
 * 左边缘颜色 border-left-color: black;
 * 背景色 background: gray;
 */
#output blockquote {
  margin: 10px 5px;
  border-left: 3px solid #9654b5;
  border-right: 1px solid #9654b5;
  color: #616161;
  quotes: none;
  background: #fbf9fd;
}

/* 引用文字 */
#output blockquote p {
}

/* 链接
 * border-bottom: 1px solid #009688;
 */
#output a {
  color: #773098;
  border-bottom: 1px solid #773098;
}

/* 加粗 */
#output strong {
  color: #773098;
}

/* 斜体 */
#output em {
}

/* 加粗斜体 */
#output em strong {
}

/* 删除线 */
#output del {
}

/* 分隔线
* 粗细、样式和颜色
* border-top: 1px solid #3e3e3e;
*/
#output hr {
  border: 1px solid #773098;
  margin: 1.5em auto;
}

/* 图片
* 宽度 width: 80%;
* 居中 margin: 0 auto;
* 居左 margin: 0 0;
*/
#output img {
}

/* 行内代码 */
#output p code,
#output li code {
  color: #9654b5;
}

/* 非微信代码块
 * 代码块不换行 display: -webkit-box !important;
 * 代码块换行 display: block;
 */
#output pre code {
}

/*
 * 表格内的单元格
 * 字体大小 font-size: 16px;
 * 边框 border: 1px solid #ccc;
 * 内边距 padding: 5px 10px;
 */
#output table tr th,
#output table tr td {
}

/* 脚注文字 */
#output .footnote-word {
  color: #773098;
}

/* 脚注上标 */
#output .footnote-ref {
  color: #773098;
}

/* "参考资料"四个字
 * 内容 content: "参考资料";
 */
#output .footnotes-sep:before {
}

/* 参考资料编号 */
#output .footnote-num {
}

/* 参考资料文字 */
#output .footnote-item p {
}

/* 参考资料解释 */
#output .footnote-item p em {
}

/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
#output .block-equation svg {
}

/* 行内公式
 */
#output .inline-equation svg {
}
`,wechatFormatCSS=`/**
 * WeChat-Format by 画手
 * Source: https://markdown.com.cn/wechat/
 */

/* 全局属性
 * 页边距 padding: 30px;
 * 全文字体 font-family: ptima-Regular;
 * 英文换行 word-break: break-all;
 */
#output {
}

/* 段落，下方未标注标签参数均同此处
 * 上边距 margin-top: 5px;
 * 下边距 margin-bottom: 5px;
 * 行高 line-height: 26px;
 * 词间距 word-spacing: 3px;
 * 字间距 letter-spacing: 3px;
 * 对齐 text-align: left;
 * 颜色 color: #3e3e3e;
 * 字体大小 font-size: 16px;
 * 首行缩进 text-indent: 2em;
 */
#output p {
  line-height: 1.6;
  color: #3f3f3f;
  font-size: 16px;
  margin: 10px 0px;
}

/* 一级标题 */
#output h1 {
}

/* 一级标题内容 */
#output h1 .content {
}

/* 一级标题修饰 请参考有实例的主题 */
#output h1:after {
}

/* 二级标题 */
#output h2 {
  margin: 80px 10px 40px 10px;
  text-align: center;
  font-weight: normal;
  color: #3f3f3f;
  font-size: 140%;
}

/* 二级标题内容 */
#output h2 .content {
}

/* 二级标题修饰 请参考有实例的主题 */
#output h2:after {
}

/* 三级标题 */
#output h3 {
  margin: 40px 0px 20px 0px;
  font-weight: bold;
  line-height: 1.5;
  color: #3f3f3f;
  font-size: 120%;
}

/* 三级标题内容 */
#output h3 .content {
}

/* 三级标题修饰 请参考有实例的主题 */
#output h3:after {
}

/* 无序列表整体样式
 * list-style-type: square|circle|disc;
 */
#output ul {
}

/* 有序列表整体样式
 * list-style-type: upper-roman|lower-greek|lower-alpha;
 */
#output ol {
}

/* 列表内容，不要设置li
 */
#output li section {
}

/* 引用
* 左边缘颜色 border-left-color: black;
* 背景色 background: gray;
*/
#output blockquote {
  color: rgb(91, 91, 91);
  border-left: 3px solid rgb(158, 158, 158);
  background: rgba(158, 158, 158, 0.1);
  padding: 1px 0 1px 10px;
  margin: 20px 0px;
}

/* 引用文字 */
#output blockquote p {
  color: #3f3f3f;
  line-height: 1.5;
  font-size: 16px;
  margin: 10px;
  padding: 0px;
}

/* 链接
 * border-bottom: 1px solid #009688;
 */
#output a {
  color: #ff3502;
  border-bottom: 1px solid #ff3502;
}

/* 加粗 */
#output strong {
  color: #ff3502;
  line-height: 1.5;
  font-size: 16px;
}

/* 斜体 */
#output em {
}

/* 加粗斜体 */
#output em strong {
}

/* 删除线 */
#output del {
}

/* 分隔线
* 粗细、样式和颜色
* border-top: 1px solid #3e3e3e;
*/
#output hr {
}

/* 图片
* 宽度 width: 80%;
* 居中 margin: 0 auto;
* 居左 margin: 0 0;
*/
#output img {
}

/* 图片描述文字 */
#output figcaption {
}

/* 行内代码 */
#output p code,
#output li code {
  background: #f8f5ec;
  color: #ff3502;
  line-height: 1.5;
  font-size: 90%;
  padding: 3px 5px;
  border-radius: 2px;
}

/* 非微信代码块
 * 代码块不换行 display: -webkit-box !important;
 * 代码块换行 display: block;
 */
#output pre code {
}

/*
 * 表格内的单元格
 * 字体大小 font-size: 16px;
 * 边框 border: 1px solid #ccc;
 * 内边距 padding: 5px 10px;
 */
#output table tr th,
#output table tr td {
}

/* 脚注文字 */
#output .footnote-word {
  color: #ff3502;
  font-size: 16px;
  line-height: 1.5;
  font-weight: normal;
}

/* 脚注上标 */
#output .footnote-ref {
  color: #ff3502;
  font-weight: normal;
}

/* "参考资料"四个字 */
#output .footnotes-sep {
}

/* 参考资料编号 */
#output .footnote-num {
}

/* 参考资料文字 */
#output .footnote-item p {
}

/* 参考资料解释 */
#output .footnote-item p em {
}

/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
#output .block-equation svg {
}

/* 行内公式
 */
#output .inline-equation svg {
}
`,yamabukiCSS=`/**
 * 山吹 by ElyhG
 * Source: https://markdown.com.cn/wechat/
 */

/*自定义样式，实时生效*/
#output {
}

#output p {
  margin: 0 0 20px;
  padding: 0;
  line-height: 1.8em;
  color: #3a3a3a;
}

/* 一级标题 */
#output h1 {
  font-size: 2.1em;
  line-height: 1.1em;
  padding-top: 16px;
  padding-bottom: 10px;
  margin-bottom: 4px;
  border-bottom: 1px solid #c99833;
}
/* 一级标题内容 */
#output h1 .content {
  color: #515151;
  font-weight: 700;
}

#output h2,
h3,
h4,
h5,
h6 {
  line-height: 1.5em;
  margin-top: 2.2em;
  margin-bottom: 4px;
}

/* 一级标题修饰 请参考有实例的主题 */
#output h1:after {
}

/* 二级标题 */
#output h2 {
  margin-bottom: 35px;
}

/* 二级标题内容 */

#output h2 .content {
  display: inline-block;
  font-weight: bold;
  background: linear-gradient(#fff 60%, #ffb11b 40%);
  color: #515151;
  padding: 2px 13px 2px;
  margin-right: 3px;
  height: 50%;
}

/* 二级标题修饰 请参考有实例的主题 */
#output h2:after {
}

/* 三级标题 */
#output h3 {
  line-height: 1.4;
  padding-top: 10px;
  margin: 10px 0 5px;
}

/* 三级标题内容 */
#output h3 .content {
  color: #515151;
  font-weight: 700;
  font-size: 1em;
  padding-left: 20px;
  border-left: 3px solid #f9bf45;
}

/* 三级标题修饰 请参考有实例的主题 */
#output h3:after {
}

/* 引用
* 左边缘颜色 border-left-color: black;
* 背景色 background: gray;
*/
#output blockquote {
  border-left-color: #ffb11b;
  background: #fff5e3;
}

/* 引用文字 */
#output blockquote p {
  color: #595959;
}

/* 链接 */
#output a {
  border: none;
  text-decoration: none;
  color: #dda52d;
}

#output a:hover {
  color: #f9bf45;
  text-decoration: underline;
}

/* 无序列表整体样式
 * list-style-type: square|circle|disc;
 */
#output ul {
}

/* 有序列表整体样式
 * list-style-type: upper-roman|lower-greek|lower-alpha;
 */
#output ol {
}

/* 列表内容，不要设置li
 */
#output li section {
}

/* 加粗 */
#output strong {
}

/* 斜体 */
#output em {
}

/* 加粗斜体 */
#output em strong {
}

/* 删除线 */
#output del {
  color: #d19826;
}

/* 分隔线
* 粗细、样式和颜色
* border-top: 1px solid #3e3e3e;
*/
#output hr {
  border-top: 1px solid #f9bf45;
  margin: 20px 0px;
}

/* 图片
* 宽度 width: 80%;
* 居中 margin: 0 auto;
* 居左 margin: 0 0;
*/
#output img {
  width: 100%;
  border-radius: 5px;
  display: block;
  margin-bottom: 15px;
  height: auto;
}

/* 图片描述文字 */
#output figcaption {
  color: #dda52d;
  font-size: 14px;
}

/* 行内代码 */
#output p code,
#output li code {
  color: #9b6e23;
  background-color: #fff5e3;
  padding: 3px;
  margin: 3px;
}

/* 非微信代码块
 * 代码块不换行 display: -webkit-box !important;
 * 代码块换行 display: block;
 */
#output pre code {
}

/*
 * 表格内的单元格
 * 字体大小 font-size: 16px;
 * 边框 border: 1px solid #ccc;
 * 内边距 padding: 5px 10px;
 */
#output table tr th,
#output table tr td {
  text-align: center;
}

/* 脚注文字 */
#output .footnote-word {
  color: #ffb11b;
  padding: 3px;
}

/* 脚注上标 */
#output .footnote-ref {
  color: #dda52d;
  margin: 2px;
  padding: 3px;
}

/* "参考资料"四个字
 * 内容 content: "参考资料";
 */
#output .footnotes-sep:before {
  margin: 30px 0px 15px 0px;
  font-weight: 800;
}

/* 参考资料编号 */
#output .footnote-num {
}

/* 参考资料文字 */
#output .footnote-item p {
}

/* 参考资料解释 */
#output .footnote-item p em {
}

/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
#output .block-equation svg {
}

/* 行内公式
 */
#output .inline-equation svg {
}
`,primaryColorVariable="var(--md-primary-color)",markdownCnThemePrimaryColorAliases={base:["#1e6bb8"],orangeHeart:["rgb(239, 112, 96)","#ff3502"],inkBlack:["#5c5c5c"],violet:["#773098","#9654B5"],cyan:["rgb(71, 193, 168)"],green:["#35b378"],crimson:["rgb(248, 57, 41)","#ff3502"],wechatFormat:["#ff3502"],blue:["hsl(216, 100%, 68%)","hsl(244, 100%, 75%)","hsl(187, 100%, 45%)","hsl(216, 80%, 44%)"],techBlue:["#0e88eb","#2d59b3","#6a88c5","#082a71"],indigo:["#009688"],yamabuki:["#ffb11b","#f9bf45","#dda52d","#c99833","#d19826","#9b6e23"],frontend:["rgb(60, 112, 198)","#3C7076"],geekBlack:["rgb(239, 112, 96)","#ff3502"],minimal:["#3e64ff","#004a7c"],rosePurple:["#664D9D","#DEC6FB","#d9b8fa"],mint:["rgb(90, 185, 131)","rgb(93, 186, 133)","#48b378","#2e7950","#35b378","#28ca71"],fullstackBlue:["#3594F7","#40B8FA","#3BAAFA"]};function withPrimaryColor(e,t){return t.reduce((n,o)=>{const a=o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/\s+/g,"\\s*");return n.replace(new RegExp(a,"gi"),primaryColorVariable)},e)}const simpleCSS=`/**
 * MD 简洁主题 (@okooo5km)
 * 简洁现代的设计风格
 */

/* ==================== 标题样式 ==================== */
h1 {
  padding: 0.5em 1em;
  font-size: calc(var(--md-font-size) * 1.4);
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.05);
}

h2 {
  padding: 0.3em 1.2em;
  font-size: calc(var(--md-font-size) * 1.3);
  border-radius: 8px 24px 8px 24px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
}

h3 {
  padding-left: 12px;
  font-size: calc(var(--md-font-size) * 1.2);
  border-radius: 6px;
  line-height: 2.4em;
  border-left: 4px solid var(--md-primary-color);
  border-right: 1px solid color-mix(in srgb, var(--md-primary-color) 10%, transparent);
  border-bottom: 1px solid color-mix(in srgb, var(--md-primary-color) 10%, transparent);
  border-top: 1px solid color-mix(in srgb, var(--md-primary-color) 10%, transparent);
  background: color-mix(in srgb, var(--md-primary-color) 8%, transparent);
}

h4 {
  font-size: calc(var(--md-font-size) * 1.1);
  border-radius: 6px;
}

h5 {
  font-size: var(--md-font-size);
  border-radius: 6px;
}

h6 {
  font-size: var(--md-font-size);
  border-radius: 6px;
}

/* ==================== 引用块 ==================== */
blockquote {
  font-style: italic;
  padding: 1em 1em 1em 2em;
  color: rgba(0, 0, 0, 0.6);
  border-bottom: 0.2px solid rgba(0, 0, 0, 0.04);
  border-top: 0.2px solid rgba(0, 0, 0, 0.04);
  border-right: 0.2px solid rgba(0, 0, 0, 0.04);
}

/* GFM Alert 样式覆盖 */
.markdown-alert-note,
.markdown-alert-tip,
.markdown-alert-info,
.markdown-alert-important,
.markdown-alert-warning,
.markdown-alert-caution {
  font-style: italic;
}

/* ==================== 代码块 ==================== */
pre.code__pre,
.hljs.code__pre {
  border: 1px solid rgba(0, 0, 0, 0.04);
}

pre.code__pre > code,
.hljs.code__pre > code {
  font-family:
    'Fira Code',
    Menlo,
    Operator Mono,
    Consolas,
    Monaco,
    monospace;
}

/* ==================== 图片 ==================== */
img {
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.04);
}

figcaption,
.md-figcaption {
  text-align: center;
  color: #888;
  font-size: 0.8em;
}

/* ==================== 列表 ==================== */
ol {
  padding-left: 1.5em;
}

ul {
  list-style: none;
  padding-left: 1.5em;
}

li {
  margin: 0.5em 8px;
}

/* ==================== 分隔线 ==================== */
hr {
  height: 1px;
  border: none;
  margin: 2em 0;
  background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0));
}

/* ==================== 强调 ==================== */
em {
  font-style: italic;
  font-size: inherit;
}

/* ==================== 链接 ==================== */
a {
  color: #576b95;
  text-decoration: none;
}
`,markdownCnBaseThemeCSS=withPrimaryColor(markdownCnBaseCSS,markdownCnThemePrimaryColorAliases.base),markdownCnThemeCSS={orangeHeart:withPrimaryColor(orangeHeartCSS,markdownCnThemePrimaryColorAliases.orangeHeart),inkBlack:withPrimaryColor(inkBlackCSS,markdownCnThemePrimaryColorAliases.inkBlack),violet:withPrimaryColor(violetCSS,markdownCnThemePrimaryColorAliases.violet),cyan:withPrimaryColor(cyanCSS,markdownCnThemePrimaryColorAliases.cyan),green:withPrimaryColor(greenCSS,markdownCnThemePrimaryColorAliases.green),crimson:withPrimaryColor(crimsonCSS,markdownCnThemePrimaryColorAliases.crimson),wechatFormat:withPrimaryColor(wechatFormatCSS,markdownCnThemePrimaryColorAliases.wechatFormat),blue:withPrimaryColor(blueCSS,markdownCnThemePrimaryColorAliases.blue),techBlue:withPrimaryColor(techBlueCSS,markdownCnThemePrimaryColorAliases.techBlue),indigo:withPrimaryColor(indigoCSS,markdownCnThemePrimaryColorAliases.indigo),yamabuki:withPrimaryColor(yamabukiCSS,markdownCnThemePrimaryColorAliases.yamabuki),frontend:withPrimaryColor(frontendCSS,markdownCnThemePrimaryColorAliases.frontend),geekBlack:withPrimaryColor(geekBlackCSS,markdownCnThemePrimaryColorAliases.geekBlack),minimal:withPrimaryColor(minimalCSS,markdownCnThemePrimaryColorAliases.minimal),rosePurple:withPrimaryColor(rosePurpleCSS,markdownCnThemePrimaryColorAliases.rosePurple),mint:withPrimaryColor(mintCSS,markdownCnThemePrimaryColorAliases.mint),fullstackBlue:withPrimaryColor(fullstackBlueCSS,markdownCnThemePrimaryColorAliases.fullstackBlue)},baseCSSContent=baseCSS,themeMap={default:defaultCSS,grace:graceCSS,simple:simpleCSS,markdownCnDefault:markdownCnBaseThemeCSS,orangeHeart:`${markdownCnBaseThemeCSS}

${markdownCnThemeCSS.orangeHeart}`,inkBlack:`${markdownCnBaseThemeCSS}

${markdownCnThemeCSS.inkBlack}`,violet:`${markdownCnBaseThemeCSS}

${markdownCnThemeCSS.violet}`,cyan:`${markdownCnBaseThemeCSS}

${markdownCnThemeCSS.cyan}`,green:`${markdownCnBaseThemeCSS}

${markdownCnThemeCSS.green}`,crimson:`${markdownCnBaseThemeCSS}

${markdownCnThemeCSS.crimson}`,wechatFormat:`${markdownCnBaseThemeCSS}

${markdownCnThemeCSS.wechatFormat}`,blue:`${markdownCnBaseThemeCSS}

${markdownCnThemeCSS.blue}`,techBlue:`${markdownCnBaseThemeCSS}

${markdownCnThemeCSS.techBlue}`,indigo:`${markdownCnBaseThemeCSS}

${markdownCnThemeCSS.indigo}`,yamabuki:`${markdownCnBaseThemeCSS}

${markdownCnThemeCSS.yamabuki}`,frontend:`${markdownCnBaseThemeCSS}

${markdownCnThemeCSS.frontend}`,geekBlack:`${markdownCnBaseThemeCSS}

${markdownCnThemeCSS.geekBlack}`,minimal:`${markdownCnBaseThemeCSS}

${markdownCnThemeCSS.minimal}`,rosePurple:`${markdownCnBaseThemeCSS}

${markdownCnThemeCSS.rosePurple}`,mint:`${markdownCnBaseThemeCSS}

${markdownCnThemeCSS.mint}`,fullstackBlue:`${markdownCnBaseThemeCSS}

${markdownCnThemeCSS.fullstackBlue}`},themeOptionsMap={default:{label:"经典",value:"default",desc:""},grace:{label:"优雅",value:"grace",desc:"@brzhang"},simple:{label:"简洁",value:"simple",desc:"@okooo5km"},markdownCnDefault:{label:"默认主题",value:"markdownCnDefault",desc:"Markdown.com.cn"},orangeHeart:{label:"橙心",value:"orangeHeart",desc:"@zhning12"},inkBlack:{label:"墨黑",value:"inkBlack",desc:"@Mayandev"},violet:{label:"姹紫",value:"violet",desc:"@djmaxwow"},cyan:{label:"嫩青",value:"cyan",desc:"@画手"},green:{label:"绿意",value:"green",desc:"@夜尽天明"},crimson:{label:"红绯",value:"crimson",desc:"@HeyRain"},wechatFormat:{label:"WeChat-Format",value:"wechatFormat",desc:"@画手"},blue:{label:"蓝莹",value:"blue",desc:"@谭淞宸"},techBlue:{label:"科技蓝",value:"techBlue",desc:"@夜尽天明"},indigo:{label:"兰青",value:"indigo",desc:"@Krahets"},yamabuki:{label:"山吹",value:"yamabuki",desc:"@ElyhG"},frontend:{label:"前端之巅同款",value:"frontend",desc:"@HeyRain"},geekBlack:{label:"极客黑",value:"geekBlack",desc:"@hyper-xx"},minimal:{label:"简",value:"minimal",desc:"@aco"},rosePurple:{label:"蔷薇紫",value:"rosePurple",desc:"@HeyRain"},mint:{label:"萌绿",value:"mint",desc:"@koala"},fullstackBlue:{label:"全栈蓝",value:"fullstackBlue",desc:"@Nealyang"}},themeOptions=Object.values(themeOptionsMap),fontFamilyOptions=[{label:"无衬线",value:"-apple-system-font,BlinkMacSystemFont, Helvetica Neue, PingFang SC, Hiragino Sans GB , Microsoft YaHei UI , Microsoft YaHei ,Arial,sans-serif",desc:"字体123Abc"},{label:"衬线",value:"Optima-Regular, Optima, PingFangSC-light, PingFangTC-light, 'PingFang SC', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",desc:"字体123Abc"},{label:"等宽",value:"Menlo, Monaco, 'Courier New', monospace",desc:"字体123Abc"}],fontSizeOptions=[{label:"14px",value:"14px",desc:"更小"},{label:"15px",value:"15px",desc:"稍小"},{label:"16px",value:"16px",desc:"推荐"},{label:"17px",value:"17px",desc:"稍大"},{label:"18px",value:"18px",desc:"更大"}],colorOptions=[{label:"经典蓝",value:"#0F4C81",desc:"稳重冷静"},{label:"翡翠绿",value:"#009874",desc:"自然平衡"},{label:"活力橘",value:"#FA5151",desc:"热情活力"},{label:"柠檬黄",value:"#FECE00",desc:"明亮温暖"},{label:"薰衣紫",value:"#92617E",desc:"优雅神秘"},{label:"天空蓝",value:"#55C9EA",desc:"清爽自由"},{label:"玫瑰金",value:"#B76E79",desc:"奢华现代"},{label:"橄榄绿",value:"#556B2F",desc:"沉稳自然"},{label:"石墨黑",value:"#333333",desc:"内敛极简"},{label:"雾烟灰",value:"#A9A9A9",desc:"柔和低调"},{label:"樱花粉",value:"#FFB7C5",desc:"浪漫甜美"}],widthOptions=[{label:"移动端",value:"w-[375px]",desc:"固定"},{label:"电脑端",value:"w-full",desc:"适应"}],codeBlockUrlPrefix="https://cdn-doocs.oss-cn-shenzhen.aliyuncs.com/npm/highlightjs/11.11.1/styles/",codeBlockThemeList=["1c-light","a11y-dark","a11y-light","agate","an-old-hope","androidstudio","arduino-light","arta","ascetic","atom-one-dark-reasonable","atom-one-dark","atom-one-light","brown-paper","codepen-embed","color-brewer","dark","default","devibeans","docco","far","felipec","foundation","github-dark-dimmed","github-dark","github","gml","googlecode","gradient-dark","gradient-light","grayscale","hybrid","idea","intellij-light","ir-black","isbl-editor-dark","isbl-editor-light","kimbie-dark","kimbie-light","lightfair","lioshi","magula","mono-blue","monokai-sublime","monokai","night-owl","nnfx-dark","nnfx-light","nord","obsidian","panda-syntax-dark","panda-syntax-light","paraiso-dark","paraiso-light","pojoaque","purebasic","qtcreator-dark","qtcreator-light","rainbow","routeros","school-book","shades-of-purple","srcery","stackoverflow-dark","stackoverflow-light","sunburst","tokyo-night-dark","tokyo-night-light","tomorrow-night-blue","tomorrow-night-bright","vs","vs2015","xcode","xt256"],codeBlockThemeOptions=codeBlockThemeList.map(e=>({label:e,value:`${codeBlockUrlPrefix}${e}.min.css`,desc:""})),legendOptions=[{label:"title 优先",value:"title-alt",desc:""},{label:"alt 优先",value:"alt-title",desc:""},{label:"只显示 title",value:"title",desc:""},{label:"只显示 alt",value:"alt",desc:""},{label:"不显示",value:"none",desc:""}],defaultStyleConfig={isCiteStatus:!1,isMacCodeBlock:!0,isShowLineNumber:!1,isCountStatus:!1,theme:themeOptions[0].value,fontFamily:fontFamilyOptions[0].value,fontSize:fontSizeOptions[2].value,primaryColor:colorOptions[0].value,codeBlockTheme:codeBlockThemeOptions[23].value,legend:legendOptions[3].value};class ThemeInjector{styleElement=null;styleId="md-theme";inject(t){this.styleElement||(this.styleElement=document.createElement("style"),this.styleElement.id=this.styleId,document.head.appendChild(this.styleElement)),this.styleElement.textContent=t}remove(){this.styleElement&&(this.styleElement.remove(),this.styleElement=null)}isInjected(){return this.styleElement!==null}}let injectorInstance=null;function getThemeInjector(){return injectorInstance||(injectorInstance=new ThemeInjector),injectorInstance}async function applyTheme(e){const t=generateCSSVariables(e.variables);let n=themeMap.default;if(e.themeName!=="default"){const u=themeMap[e.themeName];u&&(n=`${n}

${u}`)}e.customCSS&&(n=`${n}

${e.customCSS}`);const o=wrapCSSWithScope(n,"#output");let a=[t,baseCSSContent,o].filter(Boolean).join(`

`);a=await processCSS(a),getThemeInjector().inject(a)}function sanitizeTitle(e){const n=/[\\/:*?"<>|]/g;if(!n.test(e)&&e.length<=100)return e.trim()||"untitled";const o=e.replace(n,"_").trim();return(o.length>100?o.slice(0,100):o)||"untitled"}function removeLeft(e){const t=e.split(`
`),n=t.filter(o=>o.trim()).map(o=>o.match(/(^\s+)?/)[0].length).sort((o,a)=>o-a)[0];return t.map(o=>o.slice(n)).join(`
`)}function checkImage(e){if(!/\.(?:gif|jpe?g|png)$/i.test(e.name))return{ok:!1,msg:"请上传 JPG/PNG/GIF 格式的图片"};const n=10;return e.size>n*1024*1024?{ok:!1,msg:`由于公众号限制，图片大小不能超过 ${n}M`}:{ok:!0,msg:""}}const service=axios.create({baseURL:"",timeout:30*1e3});service.interceptors.request.use(e=>(/^(?:post|put|delete)$/i.test(`${e.method}`)&&e.data&&e.data.upload&&(e.headers["Content-Type"]="multipart/form-data"),e),e=>{Promise.reject(e)});service.interceptors.response.use(e=>e.data?e.data:Promise.reject(e),e=>Promise.reject(e));function downloadFile(e,t,n="text/plain"){if(typeof document>"u")throw new TypeError("downloadFile can only be used in browser environment");const o=document.createElement("a");if(o.download=t,o.style.display="none",e.startsWith("data:"))o.href=e;else if(n==="text/html")o.href=`data:text/html;charset=utf-8,${encodeURIComponent(e)}`;else{const a=new Blob([e],{type:n});o.href=URL.createObjectURL(a)}document.body.appendChild(o),o.click(),document.body.removeChild(o),!e.startsWith("data:")&&n!=="text/html"&&URL.revokeObjectURL(o.href)}function toBase64(e){return new Promise((t,n)=>{const o=new FileReader;o.readAsDataURL(e),o.onload=()=>t(o.result.split(",").pop()),o.onerror=a=>n(a)})}function createTable({data:e,rows:t,cols:n}){let o="";for(let a=0;a<t+2;++a){o+="| ";const i=[];for(let u=0;u<n;++u){const l=a>1?a-1:a;i.push(a===1?"---":e[`k_${l}_${u}`]||"     ")}o+=i.join(" | "),o+=` |
`}return o}async function formatDoc(e,t="markdown"){const n=t==="css"?"css":t==="javascript"?"babel":"markdown",o=t==="css"?[parserPostcss]:t==="javascript"?[parserBabel]:[parserMarkdown,parserBabel];return await standaloneExports.format(e,{parser:n,plugins:o,printWidth:80,tabWidth:2,useTabs:!1,semi:!1,singleQuote:!0,quoteProps:"as-needed",trailingComma:"es5",bracketSpacing:!0,bracketSameLine:!1,arrowParens:"avoid",proseWrap:"preserve",htmlWhitespaceSensitivity:"css",endOfLine:"lf"})}function utf16to8(e){let t="";const n=e.length;for(let o=0;o<n;o++){const a=e.charCodeAt(o);a>=1&&a<=127?t+=e.charAt(o):a>2047?(t+=String.fromCharCode(224|a>>12&15),t+=String.fromCharCode(128|a>>6&63),t+=String.fromCharCode(128|a&63)):(t+=String.fromCharCode(192|a>>6&31),t+=String.fromCharCode(128|a&63))}return t}function utf8to16(e){let t="",n=0;const o=e.length;for(;n<o;){const a=e.charCodeAt(n++);let i,u;switch(a>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:t+=e.charAt(n-1);break;case 12:case 13:i=e.charCodeAt(n++),t+=String.fromCharCode((a&31)<<6|i&63);break;case 14:i=e.charCodeAt(n++),u=e.charCodeAt(n++),t+=String.fromCharCode((a&15)<<12|(i&63)<<6|u&63);break}}return t}const base64EncodeChars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",base64DecodeChars=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1];function base64encode(e){let t="",n=0;const o=e.length;for(;n<o;){const a=e.charCodeAt(n++)&255;if(n===o){t+=base64EncodeChars.charAt(a>>2),t+=base64EncodeChars.charAt((a&3)<<4),t+="==";break}const i=e.charCodeAt(n++);if(n===o){t+=base64EncodeChars.charAt(a>>2),t+=base64EncodeChars.charAt((a&3)<<4|(i&240)>>4),t+=base64EncodeChars.charAt((i&15)<<2),t+="=";break}const u=e.charCodeAt(n++);t+=base64EncodeChars.charAt(a>>2),t+=base64EncodeChars.charAt((a&3)<<4|(i&240)>>4),t+=base64EncodeChars.charAt((i&15)<<2|(u&192)>>6),t+=base64EncodeChars.charAt(u&63)}return t}function base64decode(e){let t,n,o,a,i=0;const u=e.length;let l="";for(;i<u;){do t=base64DecodeChars[e.charCodeAt(i++)&255];while(i<u&&t===-1);if(t===-1)break;do n=base64DecodeChars[e.charCodeAt(i++)&255];while(i<u&&n===-1);if(n===-1)break;l+=String.fromCharCode(t<<2|(n&48)>>4);do{if(o=e.charCodeAt(i++)&255,o===61)return l;o=base64DecodeChars[o]}while(i<u&&o===-1);if(o===-1)break;l+=String.fromCharCode((n&15)<<4|(o&60)>>2);do{if(a=e.charCodeAt(i++)&255,a===61)return l;a=base64DecodeChars[a]}while(i<u&&a===-1);if(a===-1)break;l+=String.fromCharCode((o&3)<<6|a)}return l}function safe64(e){return e=e.replace(/\+/g,"-"),e=e.replace(/\//g,"_"),e}const tokenTools=Object.freeze(Object.defineProperty({__proto__:null,base64decode,base64encode,safe64,utf16to8,utf8to16},Symbol.toStringTag,{value:"Module"}));function exportMergedTheme(e,t,n,o){const a=generateCSSVariables(n),i=["/**"," * MD 主题导出",` * 导出时间: ${new Date().toLocaleString()}`," * 说明: 该文件包含完整的主题样式，可直接使用"," */","",a,"",t,"",e].filter(Boolean).join(`
`);return downloadFile(i,`${o}.css`,"text/css"),i}class LocalStorageEngine{async get(t){try{return localStorage.getItem(t)}catch(n){return console.error("[Storage] Failed to get item:",t,n),null}}async set(t,n){try{localStorage.setItem(t,n)}catch(o){throw console.error("[Storage] Failed to set item:",t,o),o}}async remove(t){try{localStorage.removeItem(t)}catch(n){console.error("[Storage] Failed to remove item:",t,n)}}async has(t){try{return localStorage.getItem(t)!==null}catch{return!1}}async clear(){try{localStorage.clear()}catch(t){console.error("[Storage] Failed to clear storage:",t)}}async keys(){try{return Object.keys(localStorage)}catch{return[]}}}class StorageManager{engine=new LocalStorageEngine;setEngine(t){this.engine=t}getEngine(){return this.engine}async get(t){return this.engine.get(t)}async set(t,n){return this.engine.set(t,n)}async getJSON(t,n){const o=await this.engine.get(t);if(!o)return n??null;try{return JSON.parse(o)}catch(a){return console.error("[Storage] Failed to parse JSON for key:",t,a),n??null}}async setJSON(t,n){try{const o=JSON.stringify(n);return this.engine.set(t,o)}catch(o){throw console.error("[Storage] Failed to stringify JSON for key:",t,o),o}}async remove(t){return this.engine.remove(t)}async has(t){return this.engine.has(t)}async clear(){return this.engine.clear()}async keys(){return this.engine.keys()}reactive(t,n){const o=typeof n=="string";let a=n;if(this.engine instanceof LocalStorageEngine)try{const u=localStorage.getItem(t);u!==null&&(a=o?u:this.parseJSON(u,n))}catch(u){console.error("[Storage] Failed to read initial value:",t,u)}const i=ref(a);return this.engine instanceof LocalStorageEngine||(o?this.get(t).then(l=>l!==null?l:null):this.getJSON(t,n)).then(l=>{l!==null&&(i.value=l)}),Promise.resolve().then(()=>{watch(i,u=>{(o?this.set(t,u):this.setJSON(t,u)).catch(d=>{console.error("[Storage] Failed to save reactive data:",t,d)})},{deep:!0})}),i}customReactive(t,n,o){let a=n;return this.getJSON(t,n).then(i=>{const u=i??n;a=o?.get?o.get(u):u}),customRef((i,u)=>({get(){return i(),a},set:l=>{const d=o?.set?o.set(l):l;a=d,u(),this.setJSON(t,d).catch(m=>{console.error("[Storage] Failed to save custom reactive data:",t,m)})}}))}parseJSON(t,n){try{return JSON.parse(t)}catch{return console.warn("[Storage] Failed to parse JSON, using fallback"),n}}}const store=new StorageManager;function addPrefix(e){return`${prefix}__${e}`}function downloadMD(e,t="untitled"){const n=sanitizeTitle(t);downloadFile(e,`${n}.md`,"text/markdown;charset=utf-8")}function getHtmlContent(){return document.querySelector("#output").innerHTML}async function exportHTML(e="untitled"){const t=getHtmlContent(),n=await getStylesToAdd(),o=`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${sanitizeTitle(e)}</title>
  ${n}
</head>
<body>
  <div style="width: 750px; margin: auto; padding: 20px;">
    ${t}
  </div>
</body>
</html>`;downloadFile(o,`${sanitizeTitle(e)}.html`,"text/html")}async function generatePureHTML(e){const t=new D;return t.use(markedAlert({withoutStyle:!0})),t.use(MDKatex({nonStandard:!0},!1)),await t.parse(e)}async function exportPureHTML(e,t="untitled"){const n=sanitizeTitle(t),o=await generatePureHTML(e);downloadFile(o,`${n}.html`,"text/html")}async function exportPDF(e="untitled"){const t=getHtmlContent(),n=await getStylesToAdd(),o=sanitizeTitle(e),a=window.open("","_blank");if(!a){console.error("无法打开打印窗口");return}a.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>${o}</title>
      ${n}
      <style>
        /* 强制打印背景颜色和图片 */
        * {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
          color-adjust: exact !important;
        }

        /* 打印页面设置 */
        @page {
          @top-center {
            content: "${o}";
            font-size: 12px;
            color: #666;
          }
          @bottom-left {
            content: "微信 Markdown 编辑器";
            font-size: 10px;
            color: #999;
          }
          @bottom-right {
            content: "第 " counter(page) " 页，共 " counter(pages) " 页";
            font-size: 10px;
            color: #999;
          }
        }

        @media print {
          body { margin: 0; }
        }
      </style>
    </head>
    <body>
      <div style="width: 100%; max-width: 750px; margin: auto;">
        ${t}
      </div>
    </body>
    </html>
  `),a.document.close(),a.onload=()=>{a.print(),a.onafterprint=()=>{a.close()}}}function solveWeChatImage(){const t=document.getElementById("output").getElementsByTagName("img");Array.from(t).forEach(n=>{const o=n.getAttribute("width"),a=n.getAttribute("height");o&&(n.removeAttribute("width"),n.style.width=/^\d+$/.test(o)?`${o}px`:o),a&&(n.removeAttribute("height"),n.style.height=/^\d+$/.test(a)?`${a}px`:a)})}async function getHljsStyles(){const e=document.querySelector("#hljs-inline");if(e&&e.textContent)return`<style>${e.textContent}</style>`;const t=document.querySelector("#hljs");if(!t)return"";try{return`<style>${await(await fetch(t.href)).text()}</style>`}catch{return""}}function getThemeStyles(){const e=document.querySelector("#md-theme");if(!e||!e.textContent)return"";let t=e.textContent;return t=t.replace(/#output\s*\{/g,"body {"),t=t.replace(/#output\s+/g,""),t=t.replace(/^#output\s*/gm,""),`<style>${t}</style>`}function mergeCss(e){return juice(e,{inlinePseudoElements:!0,preserveImportant:!0,resolveCSSVariables:!1})}function modifyHtmlStructure(e){const t=document.createElement("div");return t.innerHTML=e,t.querySelectorAll("li > ul, li > ol").forEach(n=>{n.parentElement.insertAdjacentElement("afterend",n)}),t.innerHTML}function createEmptyNode(){const e=document.createElement("p");return e.style.fontSize="0",e.style.lineHeight="0",e.style.margin="0",e.innerHTML="&nbsp;",e}function getKatexStyles(){const e=Array.from(document.styleSheets).find(t=>{try{const n=t.cssRules||t.rules;if(n&&n.length>0){const o=n[0];if(o.cssText&&o.cssText.includes(".katex"))return!0}}catch{}return!1});if(e)try{const t=e.cssRules||e.rules;let n="";for(let o=0;o<t.length;o++)n+=`${t[o].cssText}
`;return`<style>${n}</style>`}catch{}return""}async function getStylesToAdd(){const e=getThemeStyles(),t=await getHljsStyles(),n=getKatexStyles();return[e,t,n].filter(Boolean).join("")}async function processClipboardContent(e){const t=document.getElementById("output"),n=await getStylesToAdd();n&&(t.innerHTML=n+t.innerHTML);const o=getComputedStyle(t),a=o.getPropertyValue("--md-font-size").trim(),i=o.getPropertyValue("--md-font-family").trim();a&&(t.innerHTML=t.innerHTML.replace(/var\(--md-font-size\)/g,a)),i&&(t.innerHTML=t.innerHTML.replace(/var\(--md-font-family\)/g,i)),t.innerHTML=modifyHtmlStructure(mergeCss(t.innerHTML)),t.innerHTML=t.innerHTML.replace(/([^-])top:(.*?)em/g,"$1transform: translateY($2em)").replace(/hsl\(var\(--foreground\)\)/g,"#3f3f3f").replace(/var\(--blockquote-background\)/g,"#f7f7f7").replace(/var\(--md-primary-color\)/g,e).replace(/--md-primary-color:.+?;/g,"").replace(/--md-font-family:.+?;/g,"").replace(/--md-font-size:.+?;/g,"").replace(/<span class="nodeLabel"([^>]*)><p[^>]*>(.*?)<\/p><\/span>/g,'<span class="nodeLabel"$1>$2</span>').replace(/<span class="edgeLabel"([^>]*)><p[^>]*>(.*?)<\/p><\/span>/g,'<span class="edgeLabel"$1>$2</span>'),solveWeChatImage();const u=createEmptyNode(),l=createEmptyNode();t.insertBefore(u,t.firstChild),t.appendChild(l),t.querySelectorAll(".nodeLabel").forEach(m=>{const p=m.parentElement,w=p.getAttribute("xmlns"),s=p.getAttribute("style"),C=document.createElement("section");C.setAttribute("xmlns",w),C.setAttribute("style",s),C.innerHTML=p.innerHTML;const x=p.parentElement;x.innerHTML="",x.appendChild(C)}),t.innerHTML=t.innerHTML.replace(/<tspan([^>]*)>/g,'<tspan$1 style="fill: #333333 !important; color: #333333 !important; stroke: none !important;">')}const useUIStore=defineStore("ui",()=>{const e=useColorMode({emitAuto:!0}),t=computed({get:()=>e.state.value==="dark",set:J=>{e.value=J?"dark":"light"}}),n=J=>{t.value=J??!t.value},o=J=>{e.value=J},a=store.reactive("isEditOnLeft",!0),i=useToggle(a),u=store.reactive("showAIToolbox",!0),l=useToggle(u),d=store.reactive("hasShownAIToolboxHint",!1),m=store.reactive(addPrefix("is_open_right_slider"),!1),p=store.reactive(addPrefix("is_open_post_slider"),!1),w=store.reactive("isMobile",!1),s=store.reactive(addPrefix("isPinFloatingToc"),!1),C=useToggle(s),x=store.reactive(addPrefix("isShowFloatingToc"),!0),_=useToggle(x),b=store.reactive("isShowCssEditor",!1),f=useToggle(b),N=ref(!1),h=useToggle(N),S=ref(!1),V=useToggle(S),$=ref(!1),F=useToggle($),P=ref(!1),Q=useToggle(P),H=ref(!1),k=ref(!1),T=ref(!1);function ce(J){k.value=J??!k.value}function z(J){T.value=J??!T.value}const R=ref(null);function le(J="",re=!1){R.value={word:J,showReplace:re}}function Z(){R.value=null}function ee(){w.value=window.innerWidth<=768}return onMounted(()=>{ee(),window.addEventListener("resize",ee)}),onBeforeUnmount(()=>{window.removeEventListener("resize",ee)}),{isDark:t,themeMode:e,isEditOnLeft:a,showAIToolbox:u,hasShownAIToolboxHint:d,isOpenRightSlider:m,isOpenPostSlider:p,isMobile:w,isPinFloatingToc:s,isShowFloatingToc:x,isShowCssEditor:b,toggleShowCssEditor:f,isShowInsertFormDialog:N,toggleShowInsertFormDialog:h,isShowInsertMpCardDialog:S,toggleShowInsertMpCardDialog:V,isShowUploadImgDialog:$,toggleShowUploadImgDialog:F,isShowTemplateDialog:P,toggleShowTemplateDialog:Q,isOpenConfirmDialog:H,aiDialogVisible:k,toggleAIDialog:ce,aiImageDialogVisible:T,toggleAIImageDialog:z,searchTabRequest:R,openSearchTab:le,clearSearchTabRequest:Z,toggleDark:n,setThemeMode:o,toggleEditOnLeft:i,toggleAIToolbox:l,togglePinFloatingToc:C,toggleShowFloatingToc:_}}),useRenderStore=defineStore("render",()=>{const e=ref(""),t=reactive({chars:0,words:0,minutes:0}),n=ref([]);let o=null;const a=d=>(o=initRenderer(d||{}),o),i=()=>o,u=()=>{const d=document.createElement("div");d.innerHTML=e.value;const m=d.querySelectorAll("[data-heading]");n.value=[];let p=0;for(const w of m)w.setAttribute("id",`${p}`),n.value.push({url:`#${p}`,title:`${w.textContent}`,level:Number(w.tagName.slice(1))}),p++;e.value=d.innerHTML};return{output:e,readingTime:t,titleList:n,initRendererInstance:a,getRenderer:i,render:(d,m)=>{if(!o)throw new Error("Renderer not initialized. Call initRendererInstance first.");o.reset({citeStatus:m.isCiteStatus,legend:m.legend,countStatus:m.isCountStatus,isMacCodeBlock:m.isMacCodeBlock,isShowLineNumber:m.isShowLineNumber});const{html:p,readingTime:w}=renderMarkdown(d,o);return t.chars=d.length,t.words=w.words,t.minutes=Math.ceil(w.minutes),e.value=postProcessHtml(p,w,o),u(),e.value},extractTitles:u}}),_hoisted_1$z={class:"flex select-none items-center justify-end px-5 py-2 text-xs"},_hoisted_2$t={class:"space-x-2"},_sfc_main$1I=defineComponent({__name:"Footer",setup(e){const t=useRenderStore(),{readingTime:n}=storeToRefs(t);return(o,a)=>(openBlock(),createElementBlock("footer",_hoisted_1$z,[createBaseVNode("div",_hoisted_2$t,[createBaseVNode("span",null,toDisplayString(unref(n).words)+" 个词 ",1),createBaseVNode("span",null,toDisplayString(unref(n).chars)+" 个字符 ",1),createBaseVNode("span",null," 阅读大约需 "+toDisplayString(unref(n).minutes)+" 分钟 ",1)])]))}}),_sfc_main$1H=defineComponent({__name:"AlertDialog",props:{open:{type:Boolean},defaultOpen:{type:Boolean}},emits:["update:open"],setup(e,{emit:t}){const a=Se(e,t);return(i,u)=>(openBlock(),createBlock(unref(Tv),normalizeProps(guardReactiveProps(unref(a))),{default:withCtx(()=>[renderSlot(i.$slots,"default")]),_:3},16))}});function cn(...e){return twMerge(clsx(e))}const _sfc_main$1G=defineComponent({__name:"AlertDialogContent",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(e,{emit:t}){const n=e,o=t,a=computed(()=>{const{class:u,...l}=n;return l}),i=Se(a,o);return(u,l)=>(openBlock(),createBlock(unref(Av),null,{default:withCtx(()=>[createVNode(unref(kv),{class:"data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80"}),createVNode(unref(Ov),mergeProps(unref(i),{class:unref(cn)("fixed left-1/2 top-1/2 z-200 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",n.class)}),{default:withCtx(()=>[renderSlot(u.$slots,"default")]),_:3},16,["class"])]),_:3}))}}),_sfc_main$1F=defineComponent({__name:"AlertDialogFooter",props:{class:{type:[Boolean,null,String,Object,Array]}},setup(e){const t=e;return(n,o)=>(openBlock(),createElementBlock("div",{class:normalizeClass(unref(cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2",t.class))},[renderSlot(n.$slots,"default")],2))}}),_sfc_main$1E=defineComponent({__name:"Button",props:{variant:{},size:{},class:{type:[Boolean,null,String,Object,Array]},asChild:{type:Boolean},as:{default:"button"}},setup(e){const t=e;return(n,o)=>(openBlock(),createBlock(unref(O),{as:e.as,"as-child":e.asChild,class:normalizeClass(unref(cn)(unref(buttonVariants)({variant:e.variant,size:e.size}),t.class,"cursor-pointer"))},{default:withCtx(()=>[renderSlot(n.$slots,"default")]),_:3},8,["as","as-child","class"]))}}),buttonVariants=cva("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",xs:"h-7 rounded px-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),_sfc_main$1D=defineComponent({__name:"AlertDialogAction",props:{asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]}},setup(e){const t=e,n=computed(()=>{const{class:o,...a}=t;return a});return(o,a)=>(openBlock(),createBlock(unref(Nv),mergeProps(unref(n),{class:unref(cn)(unref(buttonVariants)(),t.class)}),{default:withCtx(()=>[renderSlot(o.$slots,"default")]),_:3},16,["class"]))}}),_sfc_main$1C=defineComponent({__name:"AlertDialogCancel",props:{asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]}},setup(e){const t=e,n=computed(()=>{const{class:o,...a}=t;return a});return(o,a)=>(openBlock(),createBlock(unref(Mv),mergeProps(unref(n),{class:unref(cn)(unref(buttonVariants)({variant:"outline"}),"mt-2 sm:mt-0",t.class)}),{default:withCtx(()=>[renderSlot(o.$slots,"default")]),_:3},16,["class"]))}}),_sfc_main$1B=defineComponent({__name:"AlertDialogHeader",props:{class:{type:[Boolean,null,String,Object,Array]}},setup(e){const t=e;return(n,o)=>(openBlock(),createElementBlock("div",{class:normalizeClass(unref(cn)("flex flex-col gap-y-2 text-center sm:text-left",t.class))},[renderSlot(n.$slots,"default")],2))}}),_sfc_main$1A=defineComponent({__name:"AlertDialogDescription",props:{asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]}},setup(e){const t=e,n=computed(()=>{const{class:o,...a}=t;return a});return(o,a)=>(openBlock(),createBlock(unref(Fv),mergeProps(unref(n),{class:unref(cn)("text-sm text-muted-foreground",t.class)}),{default:withCtx(()=>[renderSlot(o.$slots,"default")]),_:3},16,["class"]))}}),_sfc_main$1z=defineComponent({__name:"AlertDialogTitle",props:{asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]}},setup(e){const t=e,n=computed(()=>{const{class:o,...a}=t;return a});return(o,a)=>(openBlock(),createBlock(unref(Vv),mergeProps(unref(n),{class:unref(cn)("text-lg font-semibold",t.class)}),{default:withCtx(()=>[renderSlot(o.$slots,"default")]),_:3},16,["class"]))}}),_sfc_main$1y=defineComponent({__name:"Dialog",props:{open:{type:Boolean},defaultOpen:{type:Boolean},modal:{type:Boolean}},emits:["update:open"],setup(e,{emit:t}){const a=Se(e,t);return(i,u)=>(openBlock(),createBlock(unref(nu),normalizeProps(guardReactiveProps(unref(a))),{default:withCtx(()=>[renderSlot(i.$slots,"default")]),_:3},16))}}),_sfc_main$1x=defineComponent({__name:"DialogContent",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(e,{emit:t}){const n=e,o=t,a=computed(()=>{const{class:u,...l}=n;return l}),i=Se(a,o);return(u,l)=>(openBlock(),createBlock(unref(Iv),null,{default:withCtx(()=>[createVNode(unref($u),{class:"data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-200 bg-black/80"}),createVNode(unref(Pu),mergeProps(unref(i),{class:unref(cn)("fixed left-1/2 top-1/2 z-200 grid w-[90vw] max-w-md sm:max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",n.class)}),{default:withCtx(()=>[renderSlot(u.$slots,"default"),createVNode(unref(Xl),{class:"data-[state=open]:bg-accent ring-offset-background data-[state=open]:text-muted-foreground focus:ring-ring absolute right-4 top-4 rounded-sm opacity-70 transition-opacity disabled:pointer-events-none hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-offset-2"},{default:withCtx(()=>[createVNode(unref(X),{class:"h-4 w-4"}),l[0]||(l[0]=createBaseVNode("span",{class:"sr-only"},"Close",-1))]),_:1})]),_:3},16,["class"])]),_:3}))}}),_sfc_main$1w=defineComponent({__name:"DialogFooter",props:{class:{type:[Boolean,null,String,Object,Array]}},setup(e){const t=e;return(n,o)=>(openBlock(),createElementBlock("div",{class:normalizeClass(unref(cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2",t.class))},[renderSlot(n.$slots,"default")],2))}}),_sfc_main$1v=defineComponent({__name:"Textarea",props:{class:{type:[Boolean,null,String,Object,Array]},defaultValue:{},modelValue:{}},setup(e,{emit:t}){const n=e,a=useVModel(n,"modelValue",t,{passive:!0,defaultValue:n.defaultValue});return(i,u)=>withDirectives((openBlock(),createElementBlock("textarea",{"onUpdate:modelValue":u[0]||(u[0]=l=>isRef(a)?a.value=l:null),class:normalizeClass(unref(cn)("flex min-h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",n.class))},null,2)),[[vModelText,unref(a)]])}}),_sfc_main$1u=defineComponent({__name:"Input",props:{defaultValue:{},modelValue:{},class:{type:[Boolean,null,String,Object,Array]}},setup(e,{expose:t,emit:n}){const o=e,i=useVModel(o,"modelValue",n,{passive:!0,defaultValue:o.defaultValue}),u=useAttrs(),l=ref();return t({focus:()=>l.value?.focus(),blur:()=>l.value?.blur(),select:()=>l.value?.select(),setSelectionRange:(d,m)=>l.value?.setSelectionRange(d,m),inputElement:l}),(d,m)=>withDirectives((openBlock(),createElementBlock("input",mergeProps({ref_key:"inputRef",ref:l,"onUpdate:modelValue":m[0]||(m[0]=p=>isRef(i)?i.value=p:null)},unref(u),{class:unref(cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",o.class)}),null,16)),[[vModelDynamic,unref(i)]])}}),_sfc_main$1t=defineComponent({__name:"Label",props:{for:{},asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]}},setup(e){const t=e,n=computed(()=>{const{class:o,...a}=t;return a});return(o,a)=>(openBlock(),createBlock(unref(Vh),mergeProps(unref(n),{class:unref(cn)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",t.class)}),{default:withCtx(()=>[renderSlot(o.$slots,"default")]),_:3},16,["class"]))}}),_sfc_main$1s=defineComponent({__name:"DialogHeader",props:{class:{type:[Boolean,null,String,Object,Array]}},setup(e){const t=e;return(n,o)=>(openBlock(),createElementBlock("div",{class:normalizeClass(unref(cn)("flex flex-col gap-y-1.5 text-center sm:text-left",t.class))},[renderSlot(n.$slots,"default")],2))}}),_sfc_main$1r=defineComponent({__name:"DialogDescription",props:{asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]}},setup(e){const t=e,n=computed(()=>{const{class:a,...i}=t;return i}),o=Ot(n);return(a,i)=>(openBlock(),createBlock(unref(Iu),mergeProps(unref(o),{class:unref(cn)("text-sm text-muted-foreground",t.class)}),{default:withCtx(()=>[renderSlot(a.$slots,"default")]),_:3},16,["class"]))}}),_sfc_main$1q=defineComponent({__name:"DialogTitle",props:{asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]}},setup(e){const t=e,n=computed(()=>{const{class:a,...i}=t;return i}),o=Ot(n);return(a,i)=>(openBlock(),createBlock(unref(Bu),mergeProps(unref(o),{class:unref(cn)("text-lg font-semibold leading-none tracking-tight",t.class)}),{default:withCtx(()=>[renderSlot(a.$slots,"default")]),_:3},16,["class"]))}}),useEditorStore=defineStore("editor",()=>{const e=ref(null);return{editor:e,formatContent:async()=>{if(!e.value)return;const d=await formatDoc(e.value.state.doc.toString());return e.value.dispatch({changes:{from:0,to:e.value.state.doc.length,insert:d}}),d},importContent:d=>{e.value&&e.value.dispatch({changes:{from:0,to:e.value.state.doc.length,insert:d}})},clearContent:()=>{e.value&&(e.value.dispatch({changes:{from:0,to:e.value.state.doc.length,insert:""}}),toast.success("内容已清空"))},getContent:()=>e.value?.state.doc.toString()??"",getSelection:()=>{if(!e.value)return"";const d=e.value.state.selection.main;return e.value.state.doc.sliceString(d.from,d.to)},replaceSelection:d=>{e.value&&e.value.dispatch(e.value.state.replaceSelection(d))},insertAtCursor:d=>{if(!e.value)return;const m=e.value.state.selection.main;e.value.dispatch({changes:{from:m.from,to:m.to,insert:d},selection:{anchor:m.from+d.length}}),e.value.focus()}}}),DEFAULT_CONTENT=`# 探索 Markdown 的奇妙世界

欢迎来到 Markdown 的奇妙世界！无论你是写作爱好者、开发者、博主，还是想要简单记录点什么的人，Markdown 都能成为你新的好伙伴。它不仅让写作变得简单明了，还能轻松地将内容转化为漂亮的网页格式。今天，我们将全面探讨 Markdown 的基础和进阶语法，让你在这个过程中充分享受写作的乐趣！

Markdown 是一种轻量级标记语言，用于格式化纯文本。它以简单、直观的语法而著称，可以快速地生成 HTML。Markdown 是写作与代码的完美结合，既简单又强大。

## Markdown 基础语法

### 1. 标题：让你的内容层次分明

用 \`#\` 号来创建标题。标题从 \`#\` 开始，\`#\` 的数量表示标题的级别。

\`\`\`markdown
# 一级标题

## 二级标题

### 三级标题

#### 四级标题
\`\`\`

以上代码将渲染出一组层次分明的标题，使你的内容井井有条。

### 2. 段落与换行：自然流畅

Markdown 中的段落就是一行接一行的文本。要创建新段落，只需在两行文本之间空一行。

### 3. 字体样式：强调你的文字

- **粗体**：用两个星号或下划线包裹文字，如 \`**粗体**\` 或 \`__粗体__\`。
- _斜体_：用一个星号或下划线包裹文字，如 \`*斜体*\` 或 \`_斜体_\`。
- ~~删除线~~：用两个波浪线包裹文字，如 \`~~删除线~~\`。
- ==高亮==：用两个等号包裹文字，如 \`==高亮==\`。
- ++下划线++：用两个加号包裹文字，如 \`++下划线++\`。
- ~波浪线~：用一个波浪线包裹文字，如 \`~波浪线~\`。

这些简单的标记可以让你的内容更有层次感和重点突出。

### 4. 列表：整洁有序

- **无序列表**：用 \`-\`、\`*\` 或 \`+\` 加空格开始一行。
- **有序列表**：使用数字加点号（\`1.\`、\`2.\`）开始一行。

在列表中嵌套其他内容？只需缩进即可实现嵌套效果。

- 无序列表项 1
  1. 嵌套有序列表项 1
  2. 嵌套有序列表项 2
- 无序列表项 2

1. 有序列表项 1
2. 有序列表项 2

### 5. 链接与图片：丰富内容

- **链接**：用方括号和圆括号创建链接 \`[显示文本](链接地址)\`。
- **图片**：和链接类似，只需在前面加上 \`!\`，如 \`![描述文本](图片链接)\`。

[访问 Doocs](https://github.com/doocs)

![doocs](https://cdn-doocs.oss-cn-shenzhen.aliyuncs.com/gh/doocs/md/images/logo-2.png)

轻松实现富媒体内容展示！

> 因微信公众号平台不支持除公众号内容以外的链接，故其他平台的链接，会呈现链接样式但无法点击跳转。

> 对于这些链接请注意明文书写，或点击左上角「格式->微信外链接转底部引用」开启引用，这样就可以在底部观察到链接指向。

另外，使用 \`<![alt](url),![alt](url)>\` 语法可以创建横屏滑动幻灯片，支持微信公众号平台。建议使用相似尺寸的图片以获得最佳显示效果。

### 6. 引用：引用名言或引人深思的句子

使用 \`>\` 来创建引用，只需在文本前面加上它。多层引用？在前一层 \`>\` 后再加一个就行。

> 这是一个引用
>
> > 这是一个嵌套引用

这让你的引用更加富有层次感。

### 7. 代码块：展示你的代码

- **行内代码**：用反引号包裹，如 \`code\`。
- **代码块**：用三个反引号包裹，并指定语言，如：

\`\`\`js
console.log(\`Hello, Doocs!\`)
\`\`\`

语法高亮让你的代码更易读。

### 8. 分割线：分割内容

用三个或更多的 \`-\`、\`*\` 或 \`_\` 来创建分割线。

---

为你的内容添加视觉分隔。

### 9. 表格：清晰展示数据

Markdown 支持简单的表格，用 \`|\` 和 \`-\` 分隔单元格和表头。

| 项目人员                                    | 邮箱                   | 微信号       |
| ------------------------------------------- | ---------------------- | ------------ |
| [yanglbme](https://github.com/yanglbme)     | contact@yanglibin.info | YLB0109      |
| [YangFong](https://github.com/YangFong)     | yangfong2022@gmail.com | yq2419731931 |
| [thinkasany](https://github.com/thinkasany) | thinkasany@gmail.com   | thinkasany   |

这样的表格让数据展示更为清爽！

> 手动编写标记太麻烦？我们提供了便捷方式。左上方点击「编辑->插入表格」，即可快速实现表格渲染。

## Markdown 进阶技巧

### 1. LaTeX 公式：完美展示数学表达式

Markdown 允许嵌入 LaTeX 语法展示数学公式：

- **行内公式**：用 \`$\` 包裹公式，如 $E = mc^2$。
- **块级公式**：用 \`$$\` 包裹公式，如：

$$
\\begin{aligned}
d_{i, j} &\\leftarrow d_{i, j} + 1 \\\\
d_{i, y + 1} &\\leftarrow d_{i, y + 1} - 1 \\\\
d_{x + 1, j} &\\leftarrow d_{x + 1, j} - 1 \\\\
d_{x + 1, y + 1} &\\leftarrow d_{x + 1, y + 1} + 1
\\end{aligned}
$$

现在还支持 **LaTeX 标准格式**：

- **行内公式**：用 \`\\(...\\)\` 包裹公式，如 \\(x^2 + y^2 = z^2\\)。
- **块级公式**：用 \`\\[...\\]\` 包裹公式，如：

\\[
\\int\\_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}
\\]

混合使用示例：传统格式 $a + b = c$ 和 LaTeX 格式 \\(d + e = f\\) 可以在同一段落中共存。

1. 列表内块公式 1

$$
\\chi^2 = \\sum \\frac{(O - E)^2}{E}
$$

2. 列表内块公式 2

$$
\\chi^2 = \\sum \\frac{(|O - E| - 0.5)^2}{E}
$$

这是展示复杂数学表达的利器！

### 2. Mermaid 流程图：可视化流程

Mermaid 是强大的可视化工具，可以在 Markdown 中创建流程图、时序图等。

\`\`\`mermaid
graph LR
  A[GraphCommand] --> B[update]
  A --> C[goto]
  A --> D[send]

  B --> B1[更新状态]
  C --> C1[流程控制]
  D --> D1[消息传递]
\`\`\`

\`\`\`mermaid
graph TD;
  A-->B;
  A-->C;
  B-->D;
  C-->D;
\`\`\`

\`\`\`mermaid
pie
  title Key elements in Product X
  "Calcium" : 42.96
  "Potassium" : 50.05
  "Magnesium" : 10.01
  "Iron" : 5
\`\`\`

\`\`\`mermaid
pie
  title 为什么总是宅在家里？
  "喜欢宅" : 45
  "天气太热" : 70
  "穷" : 500
  "没人约" : 95
\`\`\`

这种方式不仅能直观展示流程，还能提升文档的专业性。

> 更多用法，参见：[Mermaid User Guide](https://mermaid.js.org/intro/getting-started.html)。

### 3. PlantUML 流程图：可视化流程

PlantUML 是强大的可视化工具，可以在 Markdown 中创建流程图、时序图等。

\`\`\`plantuml
@startuml
participant Participant as Foo
actor       Actor       as Foo1
boundary    Boundary    as Foo2
control     Control     as Foo3
entity      Entity      as Foo4
database    Database    as Foo5
collections Collections as Foo6
queue       Queue       as Foo7
Foo -> Foo1 : To actor
Foo -> Foo2 : To boundary
Foo -> Foo3 : To control
Foo -> Foo4 : To entity
Foo -> Foo5 : To database
Foo -> Foo6 : To collections
Foo -> Foo7: To queue
@enduml
\`\`\`

> 更多用法，参见：[PlantUML 主页](https://plantuml.com/zh/)。

### 4. Ruby 注音：注音标注

支持两种格式：

\`\`\`md
1. [文字]{注音}
2. [文字]^(注音)
\`\`\`

渲染效果如下：

[你好]{nǐ hǎo} [世界]{shì jiè}

支持四种分隔符： \`・\`（中点）、\`．\` (全角句点)、\`。\` (中文句号)、\`-\` (英文减号)

示例：

\`\`\`md
[你好世界]{nǐ・hǎo・shì・jiè}
[小夜時雨]^(さ・よ・しぐれ)
\`\`\`

[你好世界]{nǐ・hǎo・shì・jiè}
[小夜時雨]^(さ・よ・しぐれ)

当字符串数量与分隔符数量不匹配时，会自动匹配到最合适的分隔符。

\`\`\`md
[小夜時雨]{さ・よ・しぐれ}
[小夜時雨]{さ・よ}
[小夜]{さ・よ・しぐれ}
[小夜時雨]{さ・よ・しぐれ・extra}
\`\`\`

[小夜時雨]{さ・よ・しぐれ}
[小夜時雨]{さ・よ}
[小夜]{さ・よ・しぐれ}
[小夜時雨]{さ・よ・しぐれ・extra}

## 结语

Markdown 是一种简单、强大且易于掌握的标记语言，通过学习基础和进阶语法，你可以快速创作内容并有效传达信息。无论是技术文档、个人博客还是项目说明，Markdown 都是你的得力助手。希望这篇内容能够带你全面了解 Markdown 的潜力，让你的写作更加丰富多彩！

现在，拿起 Markdown 编辑器，开始创作吧！探索 Markdown 的世界，你会发现它远比想象中更精彩！

#### 推荐阅读

- [阿里又一个 20k+ stars 开源项目诞生，恭喜 fastjson！](https://mp.weixin.qq.com/s/RNKDCK2KoyeuMeEs6GUrow)
- [刷掉 90% 候选人的互联网大厂海量数据面试题（附题解 + 方法总结）](https://mp.weixin.qq.com/s/rjGqxUvrEqJNlo09GrT1Dw)
- [好用！期待已久的文本块功能究竟如何在 Java 13 中发挥作用？](https://mp.weixin.qq.com/s/kalGv5T8AZGxTnLHr2wDsA)
- [2019 GitHub 开源贡献排行榜新鲜出炉！微软谷歌领头，阿里跻身前 12！](https://mp.weixin.qq.com/s/_q812aGD1b9QvZ2WFI0Qgw)

---

<center>
    <img src="https://cdn-doocs.oss-cn-shenzhen.aliyuncs.com/gh/doocs/md/images/1648303220922-7e14aefa-816e-44c1-8604-ade709ca1c69.png" style="width: 100px;">
</center>
`,STORAGE_KEY$1="synccaster_current_article";class SyncCasterAdapter{static isInExtension(){const n=new URLSearchParams(window.location.search).get("from")==="synccaster",o=typeof chrome<"u"&&typeof chrome.storage<"u"&&typeof chrome.storage.local<"u",a=window.location.protocol==="chrome-extension:";return(n||a)&&o}static async loadFromExtension(){return this.isInExtension()?new Promise((t,n)=>{chrome.storage.local.get([STORAGE_KEY$1],o=>{if(chrome.runtime.lastError){console.error("[SyncCasterAdapter] Load error:",chrome.runtime.lastError.message),n(new Error(chrome.runtime.lastError.message));return}const a=o[STORAGE_KEY$1];t(a?{title:a.title,content:a.content}:null)})}):(console.warn("[SyncCasterAdapter] Not in extension environment"),null)}static async saveToExtension(t,n){if(!this.isInExtension()){console.warn("[SyncCasterAdapter] Not in extension environment, skip saving");return}return new Promise((o,a)=>{chrome.storage.local.get([STORAGE_KEY$1],i=>{if(chrome.runtime.lastError){console.error("[SyncCasterAdapter] Read error:",chrome.runtime.lastError.message),a(new Error(chrome.runtime.lastError.message));return}const u=i[STORAGE_KEY$1],l={id:u?.id||"md-editor-temp",title:t,content:n,sourceUrl:u?.sourceUrl,updatedAt:Date.now()};chrome.storage.local.set({[STORAGE_KEY$1]:l},()=>{chrome.runtime.lastError?(console.error("[SyncCasterAdapter] Save error:",chrome.runtime.lastError.message),a(new Error(chrome.runtime.lastError.message))):o()})})})}static navigateBack(){if(!this.isInExtension()){console.warn("[SyncCasterAdapter] Not in extension environment");return}const t=chrome.runtime?.id;if(t){const n=`chrome-extension://${t}/src/ui/options/index.html#/editor`;typeof chrome.tabs<"u"&&chrome.tabs.getCurrent?chrome.tabs.getCurrent(o=>{o?.id?chrome.tabs.create({url:n},()=>{chrome.tabs.remove(o.id)}):window.location.href=n}):window.location.href=n}else window.close()}static onArticleChange(t){if(!this.isInExtension())return()=>{};const n=(o,a)=>{if(a==="local"&&STORAGE_KEY$1 in o){const u=o[STORAGE_KEY$1].newValue;t(u?{title:u.title,content:u.content}:null)}};return chrome.storage.onChanged.addListener(n),()=>{chrome.storage.onChanged.removeListener(n)}}}const usePostStore=defineStore("post",()=>{const e=store.reactive(addPrefix("posts"),[{id:v4(),title:"内容1",content:DEFAULT_CONTENT,history:[{datetime:new Date().toLocaleString("zh-cn"),content:DEFAULT_CONTENT}],createDatetime:new Date,updateDatetime:new Date}]),t=store.reactive(addPrefix("current_post_id"),""),n=store.reactive("__editor_content",DEFAULT_CONTENT);onBeforeMount(()=>{e.value=e.value.map((N,h)=>{const S=Date.now();return{...N,id:N.id??v4(),createDatetime:N.createDatetime??new Date(S+h),updateDatetime:N.updateDatetime??new Date(S+h)}}),(!t.value||!e.value.some(N=>N.id===t.value))&&(t.value=e.value[0]?.id??"")});const o=N=>e.value.findIndex(h=>h.id===N),a=computed({get:()=>o(t.value),set:N=>{N>=0&&N<e.value.length&&(t.value=e.value[N].id)}}),i=N=>e.value.find(h=>h.id===N),u=computed(()=>i(t.value)),l=(N,h=null)=>{const S={id:v4(),title:N,content:`# ${N}`,history:[{datetime:new Date().toLocaleString("zh-cn"),content:`# ${N}`}],createDatetime:new Date,updateDatetime:new Date,parentId:h};e.value.push(S),t.value=S.id},d=(N,h)=>{const S=i(N);S&&(S.title=h,S.updateDatetime=new Date)},m=N=>{const h=o(N);h!==-1&&(e.value.splice(h,1),t.value=e.value[Math.min(h,e.value.length-1)]?.id??"")},p=(N,h)=>{const S=i(N);S&&(S.parentId=h,S.updateDatetime=new Date)},w=(N,h)=>{const S=i(N);S&&(S.content=h,S.updateDatetime=new Date)},s=()=>{e.value.forEach(N=>{N.collapsed=!0})},C=()=>{e.value.forEach(N=>{N.collapsed=!1})};let x=null;const _=1e3,b=(N,h)=>{x&&clearTimeout(x),x=setTimeout(async()=>{try{await SyncCasterAdapter.saveToExtension(N,h),console.log("[SyncCaster] Auto-saved to extension storage")}catch(S){console.error("[SyncCaster] Auto-save failed:",S)}},_)};return SyncCasterAdapter.isInExtension()&&watch(()=>u.value,N=>{N&&b(N.title,N.content)},{deep:!0}),onMounted(()=>{if(n.value!==DEFAULT_CONTENT){const N=i(t.value);N&&(N.content=n.value),n.value=DEFAULT_CONTENT}window.addEventListener("synccaster-load-content",(N=>{const{title:h,content:S}=N.detail,V=i(t.value);V&&(V.title=h||V.title,V.content=S,V.updateDatetime=new Date,window.dispatchEvent(new CustomEvent("synccaster-editor-update",{detail:{content:S}})))}))}),{posts:e,currentPostId:t,currentPostIndex:a,currentPost:u,getPostById:i,findIndexById:o,addPost:l,renamePost:d,delPost:m,updatePostParentId:p,updatePostContent:w,collapseAllPosts:s,expandAllPosts:C}}),useTemplateStore=defineStore("template",()=>{const e=store.reactive(addPrefix("templates"),[]),t=computed(()=>[...e.value].sort((s,C)=>C.createdAt-s.createdAt)),n=computed(()=>e.value.length);function o(s){const C=Date.now(),x={id:v4(),name:s.name,content:s.content,description:s.description,tags:s.tags,createdAt:C,updatedAt:C};return e.value.push(x),toast.success(`模板「${s.name}」创建成功`),x}function a(s){return e.value.find(C=>C.id===s)}function i(s,C){const x=e.value.findIndex(_=>_.id===s);return x===-1?(toast.error("模板不存在"),!1):(e.value[x]={...e.value[x],...C,updatedAt:Date.now()},toast.success("模板已更新"),!0)}function u(s){const C=e.value.findIndex(_=>_.id===s);if(C===-1)return toast.error("模板不存在"),!1;const x=e.value[C].name;return e.value.splice(C,1),toast.success(`模板「${x}」已删除`),!0}function l(s){if(!s.trim())return t.value;const C=s.toLowerCase();return t.value.filter(x=>x.name.toLowerCase().includes(C)||x.description?.toLowerCase().includes(C)||x.tags?.some(_=>_.toLowerCase().includes(C)))}function d(s){let C=0;return s.forEach(x=>{const _=e.value.findIndex(b=>b.id===x);_!==-1&&(e.value.splice(_,1),C++)}),C>0&&toast.success(`已删除 ${C} 个模板`),C}function m(){const s=e.value.length;e.value=[],toast.success(`已清空所有模板（共 ${s} 个）`)}function p(){return JSON.stringify(e.value,null,2)}function w(s){try{const C=JSON.parse(s);if(!Array.isArray(C))return toast.error("导入失败：数据格式不正确"),!1;const x=C.filter(_=>_.id&&_.name&&_.content&&_.createdAt&&_.updatedAt);return x.length===0?(toast.error("导入失败：没有有效的模板数据"),!1):(x.forEach(_=>{e.value.findIndex(f=>f.id===_.id)!==-1?e.value.push({..._,id:v4()}):e.value.push(_)}),toast.success(`成功导入 ${x.length} 个模板`),!0)}catch(C){return console.error("Import templates failed:",C),toast.error("导入失败：数据解析错误"),!1}}return{templates:e,sortedTemplates:t,templateCount:n,createTemplate:o,getTemplateById:a,updateTemplate:i,deleteTemplate:u,searchTemplates:l,deleteTemplates:d,clearAllTemplates:m,exportTemplates:p,importTemplates:w}}),_hoisted_1$y={class:"flex-1 overflow-auto px-6 py-4"},_hoisted_2$s={key:0,class:"space-y-4 mb-6 p-4 border rounded-lg bg-muted/30"},_hoisted_3$m={class:"flex items-center justify-between"},_hoisted_4$l={class:"text-lg font-semibold"},_hoisted_5$j={class:"space-y-4"},_hoisted_6$f={class:"space-y-2"},_hoisted_7$c={key:0,class:"text-sm text-red-500"},_hoisted_8$c={class:"space-y-2"},_hoisted_9$a={class:"space-y-2"},_hoisted_10$6={class:"flex gap-2 justify-end"},_hoisted_11$5={key:1,class:"flex gap-2 mb-4"},_hoisted_12$5={class:"relative flex-1"},_hoisted_13$5={key:2,class:"space-y-3"},_hoisted_14$5={key:0,class:"text-center py-12"},_hoisted_15$5={class:"text-muted-foreground mb-2"},_hoisted_16$5={key:0,class:"text-sm text-muted-foreground mb-4"},_hoisted_17$5={class:"flex items-start justify-between gap-4"},_hoisted_18$5={class:"flex-1 min-w-0"},_hoisted_19$3={class:"flex items-center gap-2 mb-2"},_hoisted_20$3={class:"font-medium truncate"},_hoisted_21$3={key:0,class:"text-sm text-muted-foreground mb-2 line-clamp-2"},_hoisted_22$3={class:"flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground"},_hoisted_23$3={class:"flex items-center gap-1"},_hoisted_24$3={class:"flex items-center gap-1"},_hoisted_25$3={class:"flex gap-1 flex-shrink-0"},_hoisted_26$2={class:"flex items-center justify-between w-full"},_hoisted_27$2={class:"text-sm text-muted-foreground"},_sfc_main$1p=defineComponent({__name:"TemplateDialog",setup(e){const t=useEditorStore(),n=usePostStore(),o=useTemplateStore(),a=useUIStore(),{toggleShowTemplateDialog:i}=a,u=ref(""),l=computed(()=>o.searchTemplates(u.value)),d=ref(!1),m=ref("create"),p=ref(""),w=reactive({name:"",description:"",content:""}),s=reactive({name:""});function C(){m.value="create",w.name="",w.description="",w.content=t.getContent(),s.name="",d.value=!0}function x(H){m.value="edit",p.value=H.id,w.name=H.name,w.description=H.description||"",w.content=H.content,s.name="",d.value=!0}function _(){return s.name="",w.name.trim()?w.name.trim().length>50?(s.name="模板名称不能超过 50 个字符",!1):!0:(s.name="模板名称不能为空",!1)}function b(){_()&&(m.value==="create"?o.createTemplate({name:w.name.trim(),description:w.description.trim()||void 0,content:w.content}):o.updateTemplate(p.value,{name:w.name.trim(),description:w.description.trim()||void 0,content:w.content}),d.value=!1)}function f(){d.value=!1}function N(H){const k=n.currentPost;k?(n.updatePostContent(k.id,H.content),t.importContent(H.content),toast.success(`已应用模板「${H.name}」到当前文章`)):(t.importContent(H.content),toast.success(`已应用模板「${H.name}」`)),i(!1)}function h(H){t.insertAtCursor(H.content);const k=n.currentPost;k&&n.updatePostContent(k.id,t.getContent()),toast.success(`已插入模板「${H.name}」`),i(!1)}const S=ref(!1),V=ref(null);function $(H){V.value=H,S.value=!0}function F(){V.value&&(o.deleteTemplate(V.value.id),V.value=null),S.value=!1}function P(H){return new Date(H).toLocaleString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})}function Q(H){H||(i(!1),d.value=!1)}return(H,k)=>{const T=_sfc_main$1q,ce=_sfc_main$1r,z=_sfc_main$1s,R=_sfc_main$1t,le=_sfc_main$1u,Z=_sfc_main$1v,ee=_sfc_main$1E,J=_sfc_main$1w,re=_sfc_main$1x,L=_sfc_main$1y,y=_sfc_main$1z,E=_sfc_main$1A,Y=_sfc_main$1B,ne=_sfc_main$1C,ue=_sfc_main$1D,de=_sfc_main$1F,he=_sfc_main$1G,me=_sfc_main$1H;return openBlock(),createElementBlock(Fragment,null,[createVNode(L,{open:unref(a).isShowTemplateDialog,"onUpdate:open":Q},{default:withCtx(()=>[createVNode(re,{class:"max-w-4xl max-h-[85vh] flex flex-col p-0"},{default:withCtx(()=>[createVNode(z,{class:"px-6 pt-6 pb-4 border-b"},{default:withCtx(()=>[createVNode(T,{class:"flex items-center gap-2"},{default:withCtx(()=>[createVNode(unref(Package),{class:"size-5"}),k[6]||(k[6]=createTextVNode(" 模板管理 ",-1))]),_:1}),createVNode(ce,null,{default:withCtx(()=>[...k[7]||(k[7]=[createTextVNode(" 保存和管理您的 Markdown 模板，快速复用常用内容 ",-1)])]),_:1})]),_:1}),createBaseVNode("div",_hoisted_1$y,[unref(d)?(openBlock(),createElementBlock("div",_hoisted_2$s,[createBaseVNode("div",_hoisted_3$m,[createBaseVNode("h3",_hoisted_4$l,toDisplayString(unref(m)==="create"?"新建模板":"编辑模板"),1)]),createBaseVNode("div",_hoisted_5$j,[createBaseVNode("div",_hoisted_6$f,[createVNode(R,{for:"template-name"},{default:withCtx(()=>[...k[8]||(k[8]=[createTextVNode("模板名称 *",-1)])]),_:1}),createVNode(le,{id:"template-name",modelValue:unref(w).name,"onUpdate:modelValue":k[0]||(k[0]=A=>unref(w).name=A),placeholder:"请输入模板名称",class:normalizeClass({"border-red-500":unref(s).name})},null,8,["modelValue","class"]),unref(s).name?(openBlock(),createElementBlock("p",_hoisted_7$c,toDisplayString(unref(s).name),1)):createCommentVNode("",!0)]),createBaseVNode("div",_hoisted_8$c,[createVNode(R,{for:"template-description"},{default:withCtx(()=>[...k[9]||(k[9]=[createTextVNode("模板描述",-1)])]),_:1}),createVNode(Z,{id:"template-description",modelValue:unref(w).description,"onUpdate:modelValue":k[1]||(k[1]=A=>unref(w).description=A),placeholder:"请输入模板描述（可选）",class:"resize-none h-20"},null,8,["modelValue"])]),createBaseVNode("div",_hoisted_9$a,[createVNode(R,{for:"template-content"},{default:withCtx(()=>[...k[10]||(k[10]=[createTextVNode("模板内容",-1)])]),_:1}),createVNode(Z,{id:"template-content",modelValue:unref(w).content,"onUpdate:modelValue":k[2]||(k[2]=A=>unref(w).content=A),placeholder:"请输入模板内容",class:"resize-none h-40 font-mono text-sm"},null,8,["modelValue"])])]),createBaseVNode("div",_hoisted_10$6,[createVNode(ee,{variant:"outline",onClick:f},{default:withCtx(()=>[...k[11]||(k[11]=[createTextVNode(" 取消 ",-1)])]),_:1}),createVNode(ee,{onClick:b},{default:withCtx(()=>[createTextVNode(toDisplayString(unref(m)==="create"?"创建":"保存"),1)]),_:1})])])):createCommentVNode("",!0),unref(d)?createCommentVNode("",!0):(openBlock(),createElementBlock("div",_hoisted_11$5,[createBaseVNode("div",_hoisted_12$5,[createVNode(unref(Search),{class:"absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground"}),createVNode(le,{modelValue:unref(u),"onUpdate:modelValue":k[3]||(k[3]=A=>isRef(u)?u.value=A:null),placeholder:"搜索模板名称、描述...",class:"pl-9"},null,8,["modelValue"])]),createVNode(ee,{onClick:C},{default:withCtx(()=>[createVNode(unref(Plus),{class:"mr-2 size-4"}),k[12]||(k[12]=createTextVNode(" 新建模板 ",-1))]),_:1})])),unref(d)?createCommentVNode("",!0):(openBlock(),createElementBlock("div",_hoisted_13$5,[unref(l).length===0?(openBlock(),createElementBlock("div",_hoisted_14$5,[createVNode(unref(Package),{class:"mx-auto size-12 text-muted-foreground mb-4"}),createBaseVNode("p",_hoisted_15$5,toDisplayString(unref(u)?"未找到匹配的模板":"暂无模板"),1),unref(u)?createCommentVNode("",!0):(openBlock(),createElementBlock("p",_hoisted_16$5," 点击「新建模板」按钮创建您的第一个模板 "))])):createCommentVNode("",!0),(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(l),A=>(openBlock(),createElementBlock("div",{key:A.id,class:"border rounded-lg p-4 hover:bg-muted/50 transition-colors"},[createBaseVNode("div",_hoisted_17$5,[createBaseVNode("div",_hoisted_18$5,[createBaseVNode("div",_hoisted_19$3,[createVNode(unref(FileText),{class:"size-4 text-muted-foreground flex-shrink-0"}),createBaseVNode("h4",_hoisted_20$3,toDisplayString(A.name),1)]),A.description?(openBlock(),createElementBlock("p",_hoisted_21$3,toDisplayString(A.description),1)):createCommentVNode("",!0),createBaseVNode("div",_hoisted_22$3,[createBaseVNode("span",_hoisted_23$3,[createVNode(unref(Calendar),{class:"size-3"}),createTextVNode(" 创建："+toDisplayString(P(A.createdAt)),1)]),createBaseVNode("span",_hoisted_24$3,[createVNode(unref(Clock),{class:"size-3"}),createTextVNode(" 更新："+toDisplayString(P(A.updatedAt)),1)])])]),createBaseVNode("div",_hoisted_25$3,[createVNode(ee,{variant:"outline",size:"icon",class:"size-8",title:"应用模板（替换全部内容）",onClick:I=>N(A)},{default:withCtx(()=>[createVNode(unref(FileInput),{class:"size-4"})]),_:1},8,["onClick"]),createVNode(ee,{variant:"outline",size:"icon",class:"size-8",title:"插入模板（在光标处插入）",onClick:I=>h(A)},{default:withCtx(()=>[createVNode(unref(FileDown),{class:"size-4"})]),_:1},8,["onClick"]),createVNode(ee,{variant:"outline",size:"icon",class:"size-8",title:"编辑模板",onClick:I=>x(A)},{default:withCtx(()=>[createVNode(unref(Pencil),{class:"size-4"})]),_:1},8,["onClick"]),createVNode(ee,{variant:"outline",size:"icon",class:"size-8 text-destructive hover:text-destructive",title:"删除模板",onClick:I=>$(A)},{default:withCtx(()=>[createVNode(unref(Trash2),{class:"size-4"})]),_:1},8,["onClick"])])])]))),128))]))]),unref(d)?createCommentVNode("",!0):(openBlock(),createBlock(J,{key:0,class:"px-6 pb-6 pt-4 border-t"},{default:withCtx(()=>[createBaseVNode("div",_hoisted_26$2,[createBaseVNode("p",_hoisted_27$2," 共 "+toDisplayString(unref(o).templateCount)+" 个模板 ",1),createVNode(ee,{variant:"outline",onClick:k[4]||(k[4]=A=>unref(i)(!1))},{default:withCtx(()=>[...k[13]||(k[13]=[createTextVNode(" 关闭 ",-1)])]),_:1})])]),_:1}))]),_:1})]),_:1},8,["open"]),createVNode(me,{open:unref(S),"onUpdate:open":k[5]||(k[5]=A=>isRef(S)?S.value=A:null)},{default:withCtx(()=>[createVNode(he,null,{default:withCtx(()=>[createVNode(Y,null,{default:withCtx(()=>[createVNode(y,null,{default:withCtx(()=>[...k[14]||(k[14]=[createTextVNode("确认删除",-1)])]),_:1}),createVNode(E,null,{default:withCtx(()=>[createTextVNode(" 确定要删除模板「"+toDisplayString(unref(V)?.name)+"」吗？此操作不可恢复。 ",1)]),_:1})]),_:1}),createVNode(de,null,{default:withCtx(()=>[createVNode(ne,null,{default:withCtx(()=>[...k[15]||(k[15]=[createTextVNode("取消",-1)])]),_:1}),createVNode(ue,{onClick:F},{default:withCtx(()=>[...k[16]||(k[16]=[createTextVNode(" 删除 ",-1)])]),_:1})]),_:1})]),_:1})]),_:1},8,["open"])],64)}}}),_sfc_main$1o=defineComponent({__name:"RadioGroup",props:{modelValue:{},defaultValue:{},disabled:{type:Boolean},orientation:{},dir:{},loop:{type:Boolean},asChild:{type:Boolean},as:{},name:{},required:{type:Boolean},class:{type:[Boolean,null,String,Object,Array]}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,o=t,a=reactiveOmit(n,"class"),i=useForwardPropsEmits(a,o);return(u,l)=>(openBlock(),createBlock(unref(RadioGroupRoot_default),mergeProps({"data-slot":"radio-group",class:unref(cn)("grid gap-3",n.class)},unref(i)),{default:withCtx(()=>[renderSlot(u.$slots,"default")]),_:3},16,["class"]))}}),_sfc_main$1n=defineComponent({__name:"RadioGroupItem",props:{id:{},value:{},disabled:{type:Boolean},asChild:{type:Boolean},as:{},name:{},required:{type:Boolean},class:{type:[Boolean,null,String,Object,Array]}},setup(e){const t=e,n=reactiveOmit(t,"class"),o=useForwardProps(n);return(a,i)=>(openBlock(),createBlock(unref(RadioGroupItem_default),mergeProps({"data-slot":"radio-group-item"},unref(o),{class:unref(cn)("border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",t.class)}),{default:withCtx(()=>[createVNode(unref(RadioGroupIndicator_default),{"data-slot":"radio-group-indicator",class:"relative flex items-center justify-center"},{default:withCtx(()=>[createVNode(unref(Circle),{class:"fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2"})]),_:1})]),_:1},16,["class"]))}}),_hoisted_1$x={class:"min-h-[auto] md:min-h-[64px]"},_hoisted_2$r={class:"flex flex-1 flex-col justify-between"},_hoisted_3$l={class:"min-h-[40px] flex items-center w-full"},_hoisted_4$k={key:0,class:"mt-1 min-h-[20px] md:min-h-[24px] flex items-center text-[12px] text-red-500"},_hoisted_5$i={key:1,class:"mb-[-12px] md:mb-[-24px]"},_sfc_main$1m=defineComponent({__name:"FormItem",props:{label:{},required:{type:Boolean},error:{},width:{}},setup(e){const t=e;return(n,o)=>{const a=_sfc_main$1t;return openBlock(),createElementBlock("div",_hoisted_1$x,[createVNode(a,{class:"mb-4 md:mb-[24px] flex flex-col md:flex-row md:items-center"},{default:withCtx(()=>[createBaseVNode("span",{class:normalizeClass(["mb-1 md:mb-0 md:mr-4 min-h-[auto] md:min-h-[40px] w-full md:w-[150px] flex shrink-0 items-center justify-start md:justify-end font-bold text-sm md:text-base",{required:t.required}])},toDisplayString(t.label),3),createBaseVNode("div",_hoisted_2$r,[createBaseVNode("div",_hoisted_3$l,[renderSlot(n.$slots,"default",{},void 0,!0)]),e.error?(openBlock(),createElementBlock("p",_hoisted_4$k,toDisplayString(e.error),1)):createCommentVNode("",!0),e.error?(openBlock(),createElementBlock("div",_hoisted_5$i)):createCommentVNode("",!0)])]),_:3})])}}}),__unplugin_components_14=_export_sfc(_sfc_main$1m,[["__scopeId","data-v-e65b7ec5"]]),_hoisted_1$w={class:"inline-flex items-center space-x-2 w-20"},_hoisted_2$q={class:"inline-flex items-center space-x-2 w-20"},_hoisted_3$k={class:"inline-flex items-center space-x-2 w-20"},_hoisted_4$j={class:"inline-flex items-center space-x-2 w-20"},_hoisted_5$h={class:"inline-flex items-center space-x-2 w-20"},_sfc_main$1l=defineComponent({__name:"InsertMpCardDialog",setup(e){const t=useEditorStore(),n=useUIStore(),{toggleShowInsertMpCardDialog:o}=n,a=store.reactive(addPrefix("mp-profile"),{id:"",name:"",logo:"",desc:"",serviceType:"1",verify:"0"}),i=toTypedSchema(create$3({id:create$6().required("公众号 ID 不能为空"),name:create$6().required("公众号名称 不能为空"),logo:create$6().optional().url("公众号 Logo 必须是一个有效的 URL"),desc:create$6().optional(),serviceType:create$6().required(),verify:create$6().required()}));function u(d){const m=d.logo||"https://cdn-doocs.oss-cn-shenzhen.aliyuncs.com/gh/doocs/md/images/mp-logo.png";return`<section class="mp_profile_iframe_wrp custom_select_card_wrp" nodeleaf="">
  <mp-common-profile class="mpprofile js_uneditable custom_select_card mp_profile_iframe" ${['data-pluginname="mpprofile"',`data-id="${d.id}"`,`data-nickname="${d.name}"`,`data-headimg="${m}"`,d.desc&&`data-signature="${d.desc}"`,`data-service_type="${d.serviceType||"1"}"`,`data-verify_status="${d.verify||"0"}"`].filter(Boolean).join(" ")}></mp-common-profile>
  <br class="ProseMirror-trailingBreak">
</section>`}function l(d){a.value=d;const m=u(d),p=toRaw(t.editor),w=p.state.selection.main;p.dispatch({changes:{from:w.from,to:w.to,insert:`
${m}
`}}),toast.success("公众号名片插入成功"),o(!1)}return(d,m)=>{const p=_sfc_main$1q,w=_sfc_main$1s,s=_sfc_main$1u,C=__unplugin_components_14,x=_sfc_main$1v,_=_sfc_main$1n,b=_sfc_main$1t,f=_sfc_main$1o,N=_sfc_main$1E,h=_sfc_main$1x,S=_sfc_main$1y;return openBlock(),createBlock(S,{open:unref(n).isShowInsertMpCardDialog,"onUpdate:open":m[0]||(m[0]=V=>unref(n).isShowInsertMpCardDialog=V)},{default:withCtx(()=>[createVNode(h,null,{default:withCtx(()=>[createVNode(w,null,{default:withCtx(()=>[createVNode(p,null,{default:withCtx(()=>[...m[1]||(m[1]=[createTextVNode("插入公众号名片",-1)])]),_:1})]),_:1}),createVNode(unref(Form),{"validation-schema":unref(i),"initial-values":unref(a),onSubmit:l},{default:withCtx(()=>[createVNode(unref(Field),{name:"id"},{default:withCtx(({field:V,errorMessage:$})=>[createVNode(C,{label:"公众号 ID",required:"",error:$,width:90},{default:withCtx(()=>[createVNode(s,mergeProps(V,{modelValue:V.value,"onUpdate:modelValue":F=>V.value=F,modelModifiers:{trim:!0},placeholder:"例：MzIxNjA5ODQ0OQ=="}),null,16,["modelValue","onUpdate:modelValue"])]),_:2},1032,["error"])]),_:1}),createVNode(unref(Field),{name:"name"},{default:withCtx(({field:V,errorMessage:$})=>[createVNode(C,{label:"公众号名称",required:"",error:$,width:90},{default:withCtx(()=>[createVNode(s,mergeProps(V,{modelValue:V.value,"onUpdate:modelValue":F=>V.value=F,modelModifiers:{trim:!0},placeholder:"例：Doocs"}),null,16,["modelValue","onUpdate:modelValue"])]),_:2},1032,["error"])]),_:1}),createVNode(unref(Field),{name:"logo"},{default:withCtx(({field:V,errorMessage:$})=>[createVNode(C,{label:"公众号 Logo",error:$,width:90},{default:withCtx(()=>[createVNode(s,mergeProps(V,{modelValue:V.value,"onUpdate:modelValue":F=>V.value=F,modelModifiers:{trim:!0},placeholder:"例：https://doocs.com/mp-logo.png"}),null,16,["modelValue","onUpdate:modelValue"])]),_:2},1032,["error"])]),_:1}),createVNode(unref(Field),{name:"desc"},{default:withCtx(({field:V,errorMessage:$})=>[createVNode(C,{label:"公众号描述",error:$,width:90},{default:withCtx(()=>[createVNode(x,mergeProps(V,{modelValue:V.value,"onUpdate:modelValue":F=>V.value=F,modelModifiers:{trim:!0},rows:"3",placeholder:"例：GitHub 开源组织 @Doocs 旗下唯一公众号，专注分享技术领域相关知识及行业最新资讯。"}),null,16,["modelValue","onUpdate:modelValue"])]),_:2},1032,["error"])]),_:1}),createVNode(unref(Field),{name:"serviceType"},{default:withCtx(({field:V,errorMessage:$})=>[createVNode(C,{label:"公众号类型",required:"",error:$,width:90},{default:withCtx(()=>[createVNode(f,mergeProps({class:"flex gap-5"},V,{"default-value":V.value}),{default:withCtx(()=>[createBaseVNode("div",_hoisted_1$w,[createVNode(_,{id:"option-one",value:"1"}),createVNode(b,{for:"option-one"},{default:withCtx(()=>[...m[2]||(m[2]=[createTextVNode("公众号",-1)])]),_:1})]),createBaseVNode("div",_hoisted_2$q,[createVNode(_,{id:"option-two",value:"2"}),createVNode(b,{for:"option-two"},{default:withCtx(()=>[...m[3]||(m[3]=[createTextVNode("服务号",-1)])]),_:1})])]),_:1},16,["default-value"])]),_:2},1032,["error"])]),_:1}),createVNode(unref(Field),{name:"verify"},{default:withCtx(({field:V,errorMessage:$})=>[createVNode(C,{label:"认证",required:"",error:$,width:90},{default:withCtx(()=>[createVNode(f,mergeProps({class:"flex gap-5"},V,{"default-value":V.value}),{default:withCtx(()=>[createBaseVNode("div",_hoisted_3$k,[createVNode(_,{id:"service-type-option-one",value:"0"}),createVNode(b,{for:"service-type-option-one"},{default:withCtx(()=>[...m[4]||(m[4]=[createTextVNode("无",-1)])]),_:1})]),createBaseVNode("div",_hoisted_4$j,[createVNode(_,{id:"service-type-option-two",value:"1"}),createVNode(b,{for:"service-type-option-two"},{default:withCtx(()=>[...m[5]||(m[5]=[createTextVNode("个人",-1)])]),_:1})]),createBaseVNode("div",_hoisted_5$h,[createVNode(_,{id:"service-type-option-three",value:"2"}),createVNode(b,{for:"service-type-option-three"},{default:withCtx(()=>[...m[6]||(m[6]=[createTextVNode("企业",-1)])]),_:1})])]),_:1},16,["default-value"])]),_:2},1032,["error"])]),_:1}),createVNode(C,null,{default:withCtx(()=>[createVNode(N,{variant:"link",class:"p-0 h-auto text-left whitespace-normal",as:"a",href:"https://github.com/doocs/md/blob/main/docs/mp-card.md",target:"_blank"},{default:withCtx(()=>[...m[7]||(m[7]=[createTextVNode(" 如何获取公众号 ID？ ",-1)])]),_:1})]),_:1}),createVNode(C,null,{default:withCtx(()=>[createVNode(N,{type:"submit"},{default:withCtx(()=>[...m[8]||(m[8]=[createTextVNode(" 确认 ",-1)])]),_:1})]),_:1})]),_:1},8,["validation-schema","initial-values"])]),_:1})]),_:1},8,["open"])}}}),_sfc_main$1k=defineComponent({__name:"NumberField",props:{defaultValue:{},modelValue:{},min:{},max:{},step:{},formatOptions:{},locale:{},disabled:{type:Boolean},required:{type:Boolean},name:{},id:{},asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,o=t,a=computed(()=>{const{class:u,...l}=n;return l}),i=Se(a,o);return(u,l)=>(openBlock(),createBlock(unref(gy),mergeProps(unref(i),{class:unref(cn)("grid gap-1.5",n.class)}),{default:withCtx(()=>[renderSlot(u.$slots,"default")]),_:3},16,["class"]))}}),_sfc_main$1j=defineComponent({__name:"NumberFieldContent",props:{class:{type:[Boolean,null,String,Object,Array]}},setup(e){const t=e;return(n,o)=>(openBlock(),createElementBlock("div",{class:normalizeClass(unref(cn)("relative has-data-[slot=increment]:*:data-[slot=input]:pr-5 has-data-[slot=decrement]:*:data-[slot=input]:pl-5",t.class))},[renderSlot(n.$slots,"default")],2))}}),_sfc_main$1i=defineComponent({__name:"NumberFieldIncrement",props:{disabled:{type:Boolean},asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]}},setup(e){const t=e,n=computed(()=>{const{class:a,...i}=t;return i}),o=Ot(n);return(a,i)=>(openBlock(),createBlock(unref(Cy),mergeProps({"data-slot":"increment"},unref(o),{class:unref(cn)("absolute top-1/2 -translate-y-1/2 right-0 disabled:cursor-not-allowed disabled:opacity-20 p-3",t.class)}),{default:withCtx(()=>[renderSlot(a.$slots,"default",{},()=>[createVNode(unref(Plus),{class:"h-4 w-4"})])]),_:3},16,["class"]))}}),_sfc_main$1h=defineComponent({__name:"NumberFieldInput",props:{class:{type:[Boolean,null,String,Object,Array]}},setup(e){const t=e;return(n,o)=>(openBlock(),createBlock(unref(by),{"data-slot":"input",class:normalizeClass(unref(cn)("flex h-10 w-full rounded-md border border-input bg-background py-2 text-sm text-center ring-offset-background placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t.class))},null,8,["class"]))}}),_sfc_main$1g=defineComponent({__name:"NumberFieldDecrement",props:{disabled:{type:Boolean},asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]}},setup(e){const t=e,n=computed(()=>{const{class:a,...i}=t;return i}),o=Ot(n);return(a,i)=>(openBlock(),createBlock(unref(wy),mergeProps({"data-slot":"decrement"},unref(o),{class:unref(cn)("absolute top-1/2 -translate-y-1/2 left-0 p-3 disabled:cursor-not-allowed disabled:opacity-20",t.class)}),{default:withCtx(()=>[renderSlot(a.$slots,"default",{},()=>[createVNode(unref(Minus),{class:"h-4 w-4"})])]),_:3},16,["class"]))}}),_hoisted_1$v={class:"space-x-2 flex justify-between"},_hoisted_2$p={class:"space-y-2 border rounded p-2"},_sfc_main$1f=defineComponent({__name:"InsertFormDialog",setup(e){const t=useEditorStore(),n=useUIStore(),{toggleShowInsertFormDialog:o}=n,a=ref(3),i=ref(3),u=ref({});function l(){a.value=3,i.value=3,u.value={}}function d(){const p=createTable({rows:a.value,cols:i.value,data:u.value}),w=toRaw(t.editor),s=w.state.selection.main;w.dispatch({changes:{from:s.from,to:s.to,insert:`
${p}
`}}),l(),o()}function m(p){p||o(!1)}return(p,w)=>{const s=_sfc_main$1q,C=_sfc_main$1s,x=_sfc_main$1t,_=_sfc_main$1g,b=_sfc_main$1h,f=_sfc_main$1i,N=_sfc_main$1j,h=_sfc_main$1k,S=_sfc_main$1u,V=_sfc_main$1E,$=_sfc_main$1w,F=_sfc_main$1x,P=_sfc_main$1y;return openBlock(),createBlock(P,{open:unref(n).isShowInsertFormDialog,"onUpdate:open":m},{default:withCtx(()=>[createVNode(F,null,{default:withCtx(()=>[createVNode(C,null,{default:withCtx(()=>[createVNode(s,null,{default:withCtx(()=>[...w[3]||(w[3]=[createTextVNode("插入表格",-1)])]),_:1})]),_:1}),createBaseVNode("div",_hoisted_1$v,[createVNode(h,{modelValue:unref(a),"onUpdate:modelValue":w[0]||(w[0]=Q=>isRef(a)?a.value=Q:null),min:1,max:100},{default:withCtx(()=>[createVNode(x,null,{default:withCtx(()=>[...w[4]||(w[4]=[createTextVNode("行数",-1)])]),_:1}),createVNode(N,null,{default:withCtx(()=>[createVNode(_),createVNode(b),createVNode(f)]),_:1})]),_:1},8,["modelValue"]),createVNode(h,{modelValue:unref(i),"onUpdate:modelValue":w[1]||(w[1]=Q=>isRef(i)?i.value=Q:null),min:1,max:100},{default:withCtx(()=>[createVNode(x,null,{default:withCtx(()=>[...w[5]||(w[5]=[createTextVNode("列数",-1)])]),_:1}),createVNode(N,null,{default:withCtx(()=>[createVNode(_),createVNode(b),createVNode(f)]),_:1})]),_:1},8,["modelValue"])]),createBaseVNode("div",_hoisted_2$p,[(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(a)+1,Q=>(openBlock(),createElementBlock("div",{key:Q,class:normalizeClass([{"head-style":Q===1},"space-x-2 flex"])},[(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(i),H=>(openBlock(),createBlock(S,{key:H,modelValue:unref(u)[`k_${Q-1}_${H-1}`],"onUpdate:modelValue":k=>unref(u)[`k_${Q-1}_${H-1}`]=k,class:normalizeClass({"bg-gray-100 dark:bg-gray-900":Q===1}),placeholder:Q===1?"表头":""},null,8,["modelValue","onUpdate:modelValue","class","placeholder"]))),128))],2))),128))]),createVNode($,null,{default:withCtx(()=>[createVNode(V,{variant:"outline",onClick:w[2]||(w[2]=Q=>unref(o)(!1))},{default:withCtx(()=>[...w[6]||(w[6]=[createTextVNode(" 取 消 ",-1)])]),_:1}),createVNode(V,{onClick:d},{default:withCtx(()=>[...w[7]||(w[7]=[createTextVNode(" 确 定 ",-1)])]),_:1})]),_:1})]),_:1})]),_:1},8,["open"])}}}),_sfc_main$1e=defineComponent({__name:"Tabs",props:{defaultValue:{},orientation:{},dir:{},activationMode:{},modelValue:{},asChild:{type:Boolean},as:{}},emits:["update:modelValue"],setup(e,{emit:t}){const a=Se(e,t);return(i,u)=>(openBlock(),createBlock(unref(Cg),normalizeProps(guardReactiveProps(unref(a))),{default:withCtx(()=>[renderSlot(i.$slots,"default")]),_:3},16))}}),DEFAULT_CUSTOM_THEME=`/**
 * 按 Alt/Option + Shift + F 可格式化
 * 如需使用主题色，请使用 var(--md-primary-color) 代替颜色值
 * 如：color: var(--md-primary-color);
 * 新主题系统已全面支持 CSS 写法，你可以 F12 打开控制台查看具体的类名及标签
 *
 * 召集令：如果你有好看的主题样式，欢迎分享，让更多人能够使用到你的主题。
 * 提交区：https://github.com/doocs/md/discussions/426
 */

/* 全局变量定义 */
:root {
}

/* 根容器 */
.md-container {
}

/* 标题样式 */
h1 {
}

h2 {
}

h3 {
}

h4 {
}

h5 {
}

h6 {
}

/* 段落和文本 */
p {
}

strong {
}

em {
}

/* 引用块 */
blockquote {
}

blockquote > p {
}

/* 代码 */
/* 行内代码 */
code {
}

/* 代码块容器 */
pre.code__pre,
.hljs.code__pre {
}

/* 代码块内的 code */
pre.code__pre > code,
.hljs.code__pre > code {
}

/* 列表 */
ol {
}

ul {
}

li {
}

/* 表格 */
table {
}

thead {
}

th {
}

td {
}

/* 其他元素 */
img {
}

hr {
}

figure {
}

figcaption {
}

/* KaTeX 公式 */
.katex-inline {
}

.katex-block {
}

/* Markup 标记 */
/* 高亮 ==文本== */
.markup-highlight {
}

/* 下划线 ++文本++ */
.markup-underline {
}

/* 波浪线 ~文本~ */
.markup-wavyline {
}

/* GFM Alert 警告块 */
/* Alert 标题 */
.alert-title-note {
}

.alert-title-tip {
}

.alert-title-info {
}

.alert-title-important {
}

.alert-title-warning {
}

.alert-title-caution {
}

/* Alert SVG 图标 */
.alert-icon-note {
}

.alert-icon-tip {
}

.alert-icon-info {
}

.alert-icon-important {
}

.alert-icon-warning {
}

.alert-icon-caution {
}
`,basicSetup=[highlightActiveLineGutter(),highlightSpecialChars(),history(),foldGutter(),drawSelection(),dropCursor(),EditorState.allowMultipleSelections.of(!0),indentOnInput(),syntaxHighlighting(defaultHighlightStyle,{fallback:!0}),bracketMatching(),closeBrackets(),autocompletion(),rectangularSelection(),crosshairCursor(),highlightActiveLine(),highlightSelectionMatches(),indentationMarkers(),keymap.of([...closeBracketsKeymap,...defaultKeymap,...searchKeymap,...historyKeymap,...foldKeymap,...completionKeymap,...lintKeymap,{key:"Tab",run:acceptCompletion},indentWithTab])];highlightSpecialChars(),history(),drawSelection(),syntaxHighlighting(defaultHighlightStyle,{fallback:!0}),keymap.of([...defaultKeymap,...historyKeymap]);async function formatCSS(e){const t=e.state.doc.toString(),n=await formatDoc(t,"css");e.dispatch({changes:{from:0,to:e.state.doc.length,insert:n}})}function cssSetup(){return[basicSetup,css$1(),EditorView.lineWrapping,keymap.of([{key:"Shift-Alt-f",run:e=>(formatCSS(e),!0)}])]}function toggleFormat(e,{prefix:t,suffix:n,check:o,afterInsertCursorOffset:a=0}){const i=e.state.selection.main,u=e.state.doc.sliceString(i.from,i.to),l=o?.(u)??!1;let d;if(l)d=u.slice(t.length,u.length-n.length),e.dispatch(e.state.replaceSelection(d));else if(d=`${t}${u}${n}`,e.dispatch(e.state.replaceSelection(d)),a!==0){const p=e.state.selection.main.head+a;e.dispatch({selection:{anchor:p}})}}function applyHeading(e,t){const n=e.state.selection.ranges,o=[],a=`${"#".repeat(t)} `;if(n.forEach(i=>{const u=e.state.doc.lineAt(i.from),l=e.state.doc.lineAt(i.to);for(let d=u.number;d<=l.number;d++){const m=e.state.doc.line(d),w=e.state.doc.sliceString(m.from,m.to).replace(/^#{1,6}\s+/,"").trimStart(),s=a+w;o.push({from:m.from,to:m.to,insert:s})}}),o.length>0){const u=e.state.doc.lineAt(n[0].from).from+a.length;e.dispatch({changes:o,selection:{anchor:u}})}}function formatBold(e){toggleFormat(e,{prefix:"**",suffix:"**",check:t=>t.startsWith("**")&&t.endsWith("**"),afterInsertCursorOffset:-2})}function formatItalic(e){toggleFormat(e,{prefix:"*",suffix:"*",check:t=>t.startsWith("*")&&t.endsWith("*"),afterInsertCursorOffset:-1})}function formatStrikethrough(e){toggleFormat(e,{prefix:"~~",suffix:"~~",check:t=>t.startsWith("~~")&&t.endsWith("~~"),afterInsertCursorOffset:-2})}function formatLink(e){toggleFormat(e,{prefix:"[",suffix:"]()",check:t=>t.startsWith("[")&&t.endsWith("]()"),afterInsertCursorOffset:-1})}function formatCode(e){toggleFormat(e,{prefix:"`",suffix:"`",check:t=>t.startsWith("`")&&t.endsWith("`"),afterInsertCursorOffset:-1})}function formatUnorderedList(e){const t=e.state.selection.main,o=e.state.doc.sliceString(t.from,t.to).split(`
`),i=o.every(u=>u.trim().startsWith("- "))?o.map(u=>u.replace(/^- +/,"")).join(`
`):o.map(u=>`- ${u}`).join(`
`);e.dispatch(e.state.replaceSelection(i))}function formatOrderedList(e){const t=e.state.selection.main,o=e.state.doc.sliceString(t.from,t.to).split(`
`),i=o.every(u=>/^\d+\.\s/.test(u.trim()))?o.map(u=>u.replace(/^\d+\.\s+/,"")).join(`
`):o.map((u,l)=>`${l+1}. ${u}`).join(`
`);e.dispatch(e.state.replaceSelection(i))}function undoAction(e){return undo(e)}function redoAction(e){return redo(e)}async function formatJavaScript(e){const t=e.state.doc.toString(),n=await formatDoc(t,"javascript");e.dispatch({changes:{from:0,to:e.state.doc.length,insert:n}})}function javascriptSetup(){return[basicSetup,javascript$1(),keymap.of([{key:"Shift-Alt-f",run:e=>(formatJavaScript(e),!0)}])]}async function formatMarkdown(e){const t=e.state.doc.toString(),n=await formatDoc(t,"markdown");e.dispatch({changes:{from:0,to:e.state.doc.length,insert:n}})}function insertTabAtCursor(e){const n=e.state.changeByRange(o=>({changes:{from:o.from,to:o.to,insert:"  "},range:EditorSelection.range(o.from+2,o.from+2)}));return e.dispatch(n),!0}function markdownKeymap(e){const{onSearch:t,onReplace:n}=e||{};return keymap.of([{key:"Tab",run:insertTabAtCursor},{key:"Mod-z",run:undoAction},{key:"Mod-y",run:redoAction},{key:"Mod-b",run:o=>(formatBold(o),!0)},{key:"Mod-i",run:o=>(formatItalic(o),!0)},{key:"Mod-d",run:o=>(formatStrikethrough(o),!0)},{key:"Mod-k",run:o=>(formatLink(o),!0)},{key:"Mod-e",run:o=>(formatCode(o),!0)},{key:"Mod-1",run:o=>(applyHeading(o,1),!0)},{key:"Mod-2",run:o=>(applyHeading(o,2),!0)},{key:"Mod-3",run:o=>(applyHeading(o,3),!0)},{key:"Mod-4",run:o=>(applyHeading(o,4),!0)},{key:"Mod-5",run:o=>(applyHeading(o,5),!0)},{key:"Mod-6",run:o=>(applyHeading(o,6),!0)},{key:"Mod-u",run:o=>(formatUnorderedList(o),!0)},{key:"Mod-o",run:o=>(formatOrderedList(o),!0)},...t?[{key:"Mod-f",run:o=>(t(o),!0)}]:[],...n?[{key:"Mod-h",run:o=>(n(o),!0)}]:[],{key:"Shift-Alt-f",run:o=>(formatMarkdown(o),!0)},{key:"Mod-g",run:()=>!0}])}function markdownSetup(e){return[history(),highlightSelectionMatches(),closeBrackets(),indentationMarkers(),markdown$1({base:markdownLanguage,codeLanguages:languages,addKeymap:!0}),Prec.high(markdownKeymap(e)),keymap.of([...defaultKeymap,...historyKeymap,...closeBracketsKeymap]),EditorView.lineWrapping,EditorState.allowMultipleSelections.of(!0),placeholder("开始写作...")]}const customStyles=EditorView.theme({".cm-gutterElement":{display:"flex",justifyContent:"right",alignItems:"center"}});function lightTheme(){return[vsCodeLight,customStyles]}function darkTheme(){return[vsCodeDark,customStyles]}function theme(e){return e?darkTheme():lightTheme()}const _hoisted_1$u={class:"space-y-4 min-w-0"},_hoisted_2$o={class:"h-60 border border-gray-200 dark:border-gray-700 rounded-lg flex flex-col overflow-y-auto"},_sfc_main$1d=defineComponent({__name:"CustomUploadForm",setup(e){const t=store.reactive("formCustomConfig",removeLeft(`
  const { file, util, okCb, errCb } = CUSTOM_ARG
  param = new FormData()
  param.append('file', file)
  util.axios.post('${window.location.origin}/upload', param, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }).then(res => {
    okCb(res.url)
  }).catch(err => {
    errCb(err)
  })
`).trim()),n=useTemplateRef("formCustomTextarea"),o=useUIStore(),{isDark:a}=storeToRefs(o),i=ref(null),u=new Compartment;onMounted(()=>{const d=new EditorView({parent:n.value,extensions:[javascriptSetup(),u.of(theme(a.value))],doc:t.value});i.value=d}),watch(a,d=>{i.value?.dispatch({effects:u.reconfigure(theme(d))})}),onUnmounted(()=>{i.value&&i.value.destroy()});function l(){const d=i.value.state.doc.toString();t.value=d,toast.success("保存成功")}return(d,m)=>{const p=_sfc_main$1E;return openBlock(),createElementBlock("div",_hoisted_1$u,[createBaseVNode("div",_hoisted_2$o,[createBaseVNode("div",{ref_key:"formCustomTextarea",ref:n,class:"flex-1 custom-codemirror"},null,512)]),createVNode(p,{variant:"link",class:"p-0",as:"a",href:"https://github.com/doocs/md/blob/main/docs/custom-upload.md",target:"_blank"},{default:withCtx(()=>[...m[0]||(m[0]=[createTextVNode(" 参数详情？ ",-1)])]),_:1}),createVNode(p,{class:"block",onClick:l},{default:withCtx(()=>[...m[1]||(m[1]=[createTextVNode(" 保存配置 ",-1)])]),_:1})])}}}),__unplugin_components_16=_export_sfc(_sfc_main$1d,[["__scopeId","data-v-3b83b66e"]]),_sfc_main$1c=defineComponent({__name:"TabsContent",props:{value:{},forceMount:{type:Boolean},asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]}},setup(e){const t=e,n=computed(()=>{const{class:o,...a}=t;return a});return(o,a)=>(openBlock(),createBlock(unref(_g),mergeProps({class:unref(cn)("mt-2 ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",t.class)},unref(n)),{default:withCtx(()=>[renderSlot(o.$slots,"default")]),_:3},16,["class"]))}}),_sfc_main$1b=defineComponent({__name:"Progress",props:{modelValue:{},max:{},getValueLabel:{type:Function},asChild:{type:Boolean},as:{}},setup(e){const t=e,n=computed(()=>t.modelValue??0);return(o,a)=>(openBlock(),createBlock(unref(Ry),mergeProps(t,{"model-value":unref(n),class:"relative overflow-hidden bg-blackA9 rounded-full w-full h-4 sm:h-5",style:{transform:"translateZ(0)"}}),{default:withCtx(()=>[createVNode(unref(Ay),{class:"bg-primary rounded-full w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]",style:normalizeStyle({transform:`translateX(-${100-(Number(unref(n))||0)}%)`})},null,8,["style"])]),_:1},16,["model-value"]))}}),_sfc_main$1a=defineComponent({__name:"Switch",props:{defaultChecked:{type:Boolean},checked:{type:Boolean},disabled:{type:Boolean},required:{type:Boolean},name:{},id:{},value:{},asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]}},emits:["update:checked"],setup(e,{emit:t}){const n=e,o=t,a=computed(()=>{const{class:u,...l}=n;return l}),i=Se(a,o);return(u,l)=>(openBlock(),createBlock(unref(gg),mergeProps(unref(i),{class:unref(cn)("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",n.class)}),{default:withCtx(()=>[createVNode(unref(bg),{class:normalizeClass(unref(cn)("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5"))},{default:withCtx(()=>[renderSlot(u.$slots,"thumb")]),_:3},8,["class"])]),_:3},16,["class"]))}}),_sfc_main$19=defineComponent({__name:"Select",props:{open:{type:Boolean},defaultOpen:{type:Boolean},defaultValue:{},modelValue:{},dir:{},name:{},autocomplete:{},disabled:{type:Boolean},required:{type:Boolean}},emits:["update:modelValue","update:open"],setup(e,{emit:t}){const a=Se(e,t);return(i,u)=>(openBlock(),createBlock(unref(Ky),normalizeProps(guardReactiveProps(unref(a))),{default:withCtx(()=>[renderSlot(i.$slots,"default")]),_:3},16))}}),_sfc_main$18=defineComponent({__name:"SelectGroup",props:{asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]}},setup(e){const t=e,n=computed(()=>{const{class:o,...a}=t;return a});return(o,a)=>(openBlock(),createBlock(unref(Xy),mergeProps({class:unref(cn)("p-1 w-full",t.class)},unref(n)),{default:withCtx(()=>[renderSlot(o.$slots,"default")]),_:3},16,["class"]))}}),_hoisted_1$t={class:"absolute left-2 h-3.5 w-3.5 flex items-center justify-center"},_sfc_main$17=defineComponent({__name:"SelectItem",props:{value:{},disabled:{type:Boolean},textValue:{},asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]}},setup(e){const t=e,n=computed(()=>{const{class:a,...i}=t;return i}),o=Ot(n);return(a,i)=>(openBlock(),createBlock(unref(qy),mergeProps(unref(o),{class:unref(cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50",t.class)}),{default:withCtx(()=>[createBaseVNode("span",_hoisted_1$t,[createVNode(unref(Yy),null,{default:withCtx(()=>[createVNode(unref(Check),{class:"h-4 w-4"})]),_:1})]),createVNode(unref(Jy),null,{default:withCtx(()=>[renderSlot(a.$slots,"default")]),_:3})]),_:3},16,["class"]))}}),_sfc_main$16=defineComponent({__name:"SelectScrollDownButton",props:{asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]}},setup(e){const t=e,n=computed(()=>{const{class:a,...i}=t;return i}),o=Ot(n);return(a,i)=>(openBlock(),createBlock(unref(tg),mergeProps(unref(o),{class:unref(cn)("flex cursor-default items-center justify-center py-1",t.class)}),{default:withCtx(()=>[renderSlot(a.$slots,"default",{},()=>[createVNode(unref(ChevronDown),{class:"h-4 w-4"})])]),_:3},16,["class"]))}}),_sfc_main$15=defineComponent({__name:"SelectScrollUpButton",props:{asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]}},setup(e){const t=e,n=computed(()=>{const{class:a,...i}=t;return i}),o=Ot(n);return(a,i)=>(openBlock(),createBlock(unref(eg),mergeProps(unref(o),{class:unref(cn)("flex cursor-default items-center justify-center py-1",t.class)}),{default:withCtx(()=>[renderSlot(a.$slots,"default",{},()=>[createVNode(unref(ChevronUp),{class:"h-4 w-4"})])]),_:3},16,["class"]))}}),_sfc_main$14=defineComponent({__name:"SelectTrigger",props:{disabled:{type:Boolean},asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]}},setup(e){const t=e,n=computed(()=>{const{class:a,...i}=t;return i}),o=Ot(n);return(a,i)=>(openBlock(),createBlock(unref(Hy),mergeProps(unref(o),{class:unref(cn)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:truncate text-start",t.class)}),{default:withCtx(()=>[renderSlot(a.$slots,"default"),createVNode(unref(ng),{"as-child":""},{default:withCtx(()=>[createVNode(unref(ChevronDown),{class:"h-4 w-4 shrink-0 opacity-50"})]),_:1})]),_:3},16,["class"]))}}),_sfc_main$13=defineComponent({__name:"SelectValue",props:{placeholder:{},asChild:{type:Boolean},as:{}},setup(e){const t=e;return(n,o)=>(openBlock(),createBlock(unref(ag),normalizeProps(guardReactiveProps(t)),{default:withCtx(()=>[renderSlot(n.$slots,"default")]),_:3},16))}}),_sfc_main$12=defineComponent({inheritAttrs:!1,__name:"SelectContent",props:{forceMount:{type:Boolean},position:{default:"popper"},bodyLock:{type:Boolean},side:{},sideOffset:{},align:{},alignOffset:{},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},sticky:{},hideWhenDetached:{type:Boolean},updatePositionStrategy:{},prioritizePosition:{type:Boolean},asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]}},emits:["closeAutoFocus","escapeKeyDown","pointerDownOutside"],setup(e,{emit:t}){const n=e,o=t,a=computed(()=>{const{class:u,...l}=n;return l}),i=Se(a,o);return(u,l)=>(openBlock(),createBlock(unref(Wy),null,{default:withCtx(()=>[createVNode(unref(jy),mergeProps({...unref(i),...u.$attrs},{class:unref(cn)("relative z-200 max-h-96 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e.position==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",n.class)}),{default:withCtx(()=>[createVNode(unref(_sfc_main$15)),createVNode(unref(Qy),{class:normalizeClass(unref(cn)("p-1",e.position==="popper"&&"h-(--radix-select-trigger-height) w-full min-w-(--radix-select-trigger-width)"))},{default:withCtx(()=>[renderSlot(u.$slots,"default")]),_:3},8,["class"]),createVNode(unref(_sfc_main$16))]),_:3},16,["class"])]),_:3}))}}),_sfc_main$11=defineComponent({__name:"TabsList",props:{loop:{type:Boolean},asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]}},setup(e){const t=e,n=computed(()=>{const{class:o,...a}=t;return a});return(o,a)=>(openBlock(),createBlock(unref(wg),mergeProps(unref(n),{class:unref(cn)("inline-flex items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",t.class)}),{default:withCtx(()=>[renderSlot(o.$slots,"default")]),_:3},16,["class"]))}}),_hoisted_1$s={class:"truncate"},_sfc_main$10=defineComponent({__name:"TabsTrigger",props:{value:{},disabled:{type:Boolean},asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]}},setup(e){const t=e,n=computed(()=>{const{class:a,...i}=t;return i}),o=Ot(n);return(a,i)=>(openBlock(),createBlock(unref(xg),mergeProps(unref(o),{class:unref(cn)("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-xs",t.class)}),{default:withCtx(()=>[createBaseVNode("span",_hoisted_1$s,[renderSlot(a.$slots,"default")])]),_:3},16,["class"]))}}),_hoisted_1$r={key:0,class:"absolute left-0 right-0 h-full w-full flex items-center justify-center bg-white dark:bg-black"},_hoisted_2$n=["src"],_hoisted_3$j={class:"flex flex-col items-start"},_hoisted_4$i={class:"flex flex-col items-start"},_sfc_main$$=defineComponent({__name:"UploadImgDialog",emits:["uploadImage"],setup(e,{emit:t}){const n=t,o=useUIStore(),a=toTypedSchema(create$3({repo:create$6().required("GitHub 仓库不能为空"),branch:create$6().optional(),accessToken:create$6().required("GitHub Token 不能为空")})),i=store.reactive("githubConfig",{repo:"",branch:"",accessToken:""});async function u(ae){Object.assign(i.value,ae),toast.success("保存成功")}const l=toTypedSchema(create$3({accessKeyId:create$6().required("AccessKey ID 不能为空"),accessKeySecret:create$6().required("AccessKey Secret 不能为空"),bucket:create$6().required("Bucket 不能为空"),region:create$6().required("Region 不能为空"),useSSL:create$7().required(),cdnHost:create$6().optional(),path:create$6().optional()})),d=store.reactive("aliOSSConfig",{accessKeyId:"",accessKeySecret:"",bucket:"",region:"",useSSL:!0,cdnHost:"",path:""});async function m(ae){Object.assign(d.value,ae),toast.success("保存成功")}const p=toTypedSchema(create$3({secretId:create$6().required("Secret ID 不能为空"),secretKey:create$6().required("Secret Key 不能为空"),bucket:create$6().required("Bucket 不能为空"),region:create$6().required("Region 不能为空"),cdnHost:create$6().optional(),path:create$6().optional()})),w=store.reactive("txCOSConfig",{secretId:"",secretKey:"",bucket:"",region:"",cdnHost:"",path:""});async function s(ae){Object.assign(w.value,ae),toast.success("保存成功")}const C=toTypedSchema(create$3({accessKey:create$6().required("AccessKey 不能为空"),secretKey:create$6().required("SecretKey 不能为空"),bucket:create$6().required("Bucket 不能为空"),domain:create$6().required("Bucket 对应域名不能为空"),region:create$6().optional(),path:create$6().optional()})),x=store.reactive("qiniuConfig",{accessKey:"",secretKey:"",bucket:"",domain:"",region:"",path:""});async function _(ae){Object.assign(x.value,ae),toast.success("保存成功")}const b=toTypedSchema(create$3({endpoint:create$6().required("Endpoint 不能为空"),port:create$6().optional(),useSSL:create$7().required(),bucket:create$6().required("Bucket 不能为空"),accessKey:create$6().required("AccessKey 不能为空"),secretKey:create$6().required("SecretKey 不能为空")})),f=store.reactive("minioConfig",{endpoint:"",port:"",useSSL:!0,bucket:"",accessKey:"",secretKey:""});async function N(ae){Object.assign(f.value,ae),toast.success("保存成功")}const h=toTypedSchema(create$3({token:create$6().required("Bot Token 不能为空"),chatId:create$6().required("Chat ID 不能为空")})),S=store.reactive("telegramConfig",{token:"",chatId:""});async function V(ae){Object.assign(S.value,ae),toast.success("保存成功")}const F=!window.location.protocol.startsWith("http"),P=computed(()=>!F&&!0),Q=computed(()=>P.value?"如：http://proxy.example.com":"可不填"),H=computed(()=>toTypedSchema(create$3({proxyOrigin:P.value?create$6().required("代理域名不能为空"):create$6().optional(),appID:create$6().required("AppID 不能为空"),appsecret:create$6().required("AppSecret 不能为空")}))),k=store.reactive("mpConfig",{proxyOrigin:"",appID:"",appsecret:""});async function T(ae){Object.assign(k.value,ae),toast.success("保存成功")}const ce=toTypedSchema(create$3({accountId:create$6().required("Account ID 不能为空"),accessKey:create$6().required("AccessKey 不能为空"),secretKey:create$6().required("SecretKey 不能为空"),bucket:create$6().required("Bucket 不能为空"),domain:create$6().required("Bucket 对应域名不能为空"),path:create$6().optional()})),z=store.reactive("r2Config",{accountId:"",accessKey:"",secretKey:"",bucket:"",domain:"",path:""});async function R(ae){Object.assign(z.value,ae),toast.success("保存成功")}const le=computed(()=>toTypedSchema(create$3({bucket:create$6().required("Bucket 不能为空"),operator:create$6().required("操作员 不能为空"),password:create$6().required("密码 不能为空"),domain:create$6().required("CDN 域名不能为空"),path:create$6().optional()}))),Z=store.reactive("upyunConfig",{bucket:"",operator:"",password:"",domain:"",path:""});async function ee(ae){Object.assign(Z.value,ae),toast.success("保存成功")}const J=toTypedSchema(create$3({cloudName:create$6().required("Cloud Name 不能为空"),apiKey:create$6().required("API Key 不能为空"),apiSecret:create$6().optional(),uploadPreset:create$6().when("apiSecret",{is:ae=>!ae||ae.length===0,then:ae=>ae.required("未填写 apiSecret 时必须提供上传预设名"),otherwise:ae=>ae.optional()}),folder:create$6().optional(),domain:create$6().optional()})),re=store.reactive("cloudinaryConfig",{cloudName:"",apiKey:"",apiSecret:"",uploadPreset:"",folder:"",domain:""});async function L(ae){Object.assign(re.value,ae),toast.success("保存成功")}const y=[{value:"default",label:"默认"},{value:"github",label:"GitHub"},{value:"aliOSS",label:"阿里云"},{value:"txCOS",label:"腾讯云"},{value:"qiniu",label:"七牛云"},{value:"minio",label:"MinIO"},{value:"mp",label:"公众号图床"},{value:"r2",label:"Cloudflare R2"},{value:"upyun",label:"又拍云"},{value:"telegram",label:"Telegram"},{value:"cloudinary",label:"Cloudinary"},{value:"formCustom",label:"自定义代码"}],E=store.reactive("imgHost","default"),Y=store.reactive("useCompression",!1),ne=ref("upload");async function ue(){toast.success("图床已切换")}async function de(){}async function he(ae){const B=checkImage(ae);if(!B.ok)return toast.error(B.msg),!1;const W=E.value||"default",M=await store.get(`${W}Config`);return W==="default"||M?!0:(toast.error(`请先配置 ${W} 图床参数`),!1)}const me=ref(!1),{open:A,reset:I,onChange:G}=useFileDialog({accept:"image/*"});G(async ae=>{if(ae==null)return;const B=ae[0];await he(B)&&te(B),I()});async function K(ae){me.value=!1,ae.stopPropagation();const B=Array.from(ae.dataTransfer.files)[0];await he(B)&&te(B)}const oe=ref(0),ie=ref("");function te(ae){oe.value=0;const B=setInterval(()=>{const M=oe.value+1;M>=100||(oe.value=M)},100);n("uploadImage",ae,(M,se)=>{clearInterval(B),oe.value=100,se&&(ie.value=`data:image/png;base64,${se}`),setTimeout(()=>{oe.value=0,ie.value=""},1e3)},!0)}return(ae,B)=>{const W=_sfc_main$1q,M=_sfc_main$1s,se=_sfc_main$10,ge=_sfc_main$11,fe=_sfc_main$13,xe=_sfc_main$14,_e=_sfc_main$17,we=_sfc_main$12,ye=_sfc_main$19,Ce=_sfc_main$1t,ke=_sfc_main$1a,Ne=_sfc_main$1b,ve=_sfc_main$1c,pe=_sfc_main$1u,q=__unplugin_components_14,be=_sfc_main$1E,Ve=__unplugin_components_16,Ee=_sfc_main$1e,Be=_sfc_main$1x,Te=_sfc_main$1y;return openBlock(),createBlock(Te,{open:unref(o).isShowUploadImgDialog,"onUpdate:open":B[8]||(B[8]=v=>unref(o).isShowUploadImgDialog=v)},{default:withCtx(()=>[createVNode(Be,{class:"md:max-w-max max-h-[90vh] overflow-y-auto",onPointerDownOutside:B[7]||(B[7]=v=>v.preventDefault())},{default:withCtx(()=>[createVNode(M,null,{default:withCtx(()=>[createVNode(W,null,{default:withCtx(()=>[...B[9]||(B[9]=[createTextVNode("本地上传",-1)])]),_:1})]),_:1}),createVNode(Ee,{modelValue:unref(ne),"onUpdate:modelValue":B[6]||(B[6]=v=>isRef(ne)?ne.value=v:null),class:"w-full md:w-max"},{default:withCtx(()=>[createVNode(ge,{class:"grid w-full overflow-x-auto grid-cols-3 md:grid-cols-none md:flex md:flex-wrap gap-1"},{default:withCtx(()=>[createVNode(se,{value:"upload",class:"text-xs md:text-sm whitespace-nowrap"},{default:withCtx(()=>[...B[10]||(B[10]=[createTextVNode(" 选择上传 ",-1)])]),_:1}),(openBlock(!0),createElementBlock(Fragment,null,renderList(y.filter(v=>v.value!=="default"),v=>(openBlock(),createBlock(se,{key:v.value,value:v.value,class:"text-xs md:text-sm whitespace-nowrap"},{default:withCtx(()=>[createTextVNode(toDisplayString(v.label),1)]),_:2},1032,["value"]))),128))]),_:1}),createVNode(ve,{value:"upload"},{default:withCtx(()=>[createVNode(Ce,null,{default:withCtx(()=>[B[11]||(B[11]=createBaseVNode("span",{class:"my-4 block"}," 图床 ",-1)),createVNode(ye,{modelValue:unref(E),"onUpdate:modelValue":[B[0]||(B[0]=v=>isRef(E)?E.value=v:null),ue]},{default:withCtx(()=>[createVNode(xe,null,{default:withCtx(()=>[createVNode(fe,{placeholder:"请选择"})]),_:1}),createVNode(we,{class:"max-h-64 md:max-h-96"},{default:withCtx(()=>[(openBlock(),createElementBlock(Fragment,null,renderList(y,v=>createVNode(_e,{key:v.value,label:v.label,value:v.value},{default:withCtx(()=>[createTextVNode(toDisplayString(v.label),1)]),_:2},1032,["label","value"])),64))]),_:1})]),_:1},8,["modelValue"])]),_:1}),createVNode(Ce,{label:"UseCompression"},{default:withCtx(()=>[B[12]||(B[12]=createBaseVNode("span",{class:"my-4 block"}," 开启图片压缩 ",-1)),createVNode(ke,{checked:unref(Y),"onUpdate:checked":[B[1]||(B[1]=v=>isRef(Y)?Y.value=v:null),de],name:"UseCompression"},null,8,["checked"])]),_:1}),createBaseVNode("div",{class:normalizeClass(["bg-clip-padding mt-4 h-50 relative flex flex-col cursor-pointer items-center justify-evenly border-2 rounded border-dashed transition-colors hover:border-gray-700 hover:bg-gray-400/50 dark:hover:border-gray-200 dark:hover:bg-gray-500/50",{"border-gray-700 bg-gray-400/50 dark:border-gray-200 dark:bg-gray-500/50":unref(me)}]),onClick:B[3]||(B[3]=v=>unref(A)()),onDrop:withModifiers(K,["prevent"]),onDragover:B[4]||(B[4]=withModifiers(v=>me.value=!0,["prevent"])),onDragleave:B[5]||(B[5]=withModifiers(v=>me.value=!1,["prevent"]))},[createVNode(Ne,{modelValue:unref(oe),"onUpdate:modelValue":B[2]||(B[2]=v=>isRef(oe)?oe.value=v:null),class:"absolute left-0 right-0 rounded-none",style:{top:"-24px",height:"2px"}},null,8,["modelValue"]),createVNode(unref(CloudUpload),{class:"size-16 md:size-20"}),B[13]||(B[13]=createBaseVNode("p",{class:"text-center text-sm md:text-base px-4"},[createTextVNode(" 将图片拖到此处，或 "),createBaseVNode("strong",null,"点击上传")],-1)),unref(ie)?(openBlock(),createElementBlock("div",_hoisted_1$r,[createBaseVNode("img",{src:unref(ie),class:"max-h-40 object-contain"},null,8,_hoisted_2$n)])):createCommentVNode("",!0)],34)]),_:1}),createVNode(ve,{value:"github"},{default:withCtx(()=>[createVNode(unref(Form),{"validation-schema":unref(a),"initial-values":unref(i),onSubmit:u},{default:withCtx(()=>[createVNode(unref(Field),{name:"repo"},{default:withCtx(({field:v,errorMessage:U})=>[createVNode(q,{label:"GitHub 仓库",required:"",error:U},{default:withCtx(()=>[createVNode(pe,mergeProps(v,{modelValue:v.value,"onUpdate:modelValue":j=>v.value=j,placeholder:"如：github.com/yanglbme/resource"}),null,16,["modelValue","onUpdate:modelValue"])]),_:2},1032,["error"])]),_:1}),createVNode(unref(Field),{name:"branch"},{default:withCtx(({field:v,errorMessage:U})=>[createVNode(q,{label:"分支",error:U},{default:withCtx(()=>[createVNode(pe,mergeProps(v,{modelValue:v.value,"onUpdate:modelValue":j=>v.value=j,placeholder:"如：release，可不填，默认 master"}),null,16,["modelValue","onUpdate:modelValue"])]),_:2},1032,["error"])]),_:1}),createVNode(unref(Field),{name:"accessToken"},{default:withCtx(({field:v,errorMessage:U})=>[createVNode(q,{label:"Token",required:"",error:U},{default:withCtx(()=>[createVNode(pe,mergeProps(v,{modelValue:v.value,"onUpdate:modelValue":j=>v.value=j,type:"password",placeholder:"如：cc1d0c1426d0fd0902bd2d7184b14da61b8abc46"}),null,16,["modelValue","onUpdate:modelValue"])]),_:2},1032,["error"])]),_:1}),createVNode(q,null,{default:withCtx(()=>[createVNode(be,{variant:"link",class:"p-0 h-auto text-left whitespace-normal",as:"a",href:"https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token",target:"_blank"},{default:withCtx(()=>[...B[14]||(B[14]=[createTextVNode(" 如何获取 GitHub Token？ ",-1)])]),_:1})]),_:1}),createVNode(q,null,{default:withCtx(()=>[createVNode(be,{type:"submit"},{default:withCtx(()=>[...B[15]||(B[15]=[createTextVNode(" 保存配置 ",-1)])]),_:1})]),_:1})]),_:1},8,["validation-schema","initial-values"])]),_:1}),createVNode(ve,{value:"aliOSS"},{default:withCtx(()=>[createVNode(unref(Form),{"validation-schema":unref(l),"initial-values":unref(d),onSubmit:m},{default:withCtx(()=>[createVNode(unref(Field),{name:"accessKeyId"},{default:withCtx(({field:v,errorMessage:U})=>[createVNode(q,{label:"AccessKey ID",required:"",error:U},{default:withCtx(()=>[createVNode(pe,mergeProps(v,{modelValue:v.value,"onUpdate:modelValue":j=>v.value=j,placeholder:"如：LTAI4GdoocsmdoxUf13ylbaNHk"}),null,16,["modelValue","onUpdate:modelValue"])]),_:2},1032,["error"])]),_:1}),createVNode(unref(Field),{name:"accessKeySecret"},{default:withCtx(({field:v,errorMessage:U})=>[createVNode(q,{label:"AccessKey Secret",required:"",error:U},{default:withCtx(()=>[createVNode(pe,mergeProps(v,{modelValue:v.value,"onUpdate:modelValue":j=>v.value=j,type:"password",placeholder:"如：cc1d0c142doocs0902bd2d7md4b14da6ylbabc46"}),null,16,["modelValue","onUpdate:modelValue"])]),_:2},1032,["error"])]),_:1}),createVNode(unref(Field),{name:"bucket"},{default:withCtx(({field:v,errorMessage:U})=>[createVNode(q,{label:"Bucket",required:"",error:U},{default:withCtx(()=>[createVNode(pe,mergeProps(v,{modelValue:v.value,"onUpdate:modelValue":j=>v.value=j,placeholder:"如：doocs"}),null,16,["modelValue","onUpdate:modelValue"])]),_:2},1032,["error"])]),_:1}),createVNode(unref(Field),{name:"region"},{default:withCtx(({field:v,errorMessage:U})=>[createVNode(q,{label:"Bucket 所在区域",required:"",error:U},{default:withCtx(()=>[createVNode(pe,mergeProps(v,{modelValue:v.value,"onUpdate:modelValue":j=>v.value=j,placeholder:"如：oss-cn-shenzhen"}),null,16,["modelValue","onUpdate:modelValue"])]),_:2},1032,["error"])]),_:1}),createVNode(unref(Field),{name:"useSSL",type:"boolean"},{default:withCtx(({field:v,errorMessage:U})=>[createVNode(q,{label:"UseSSL",required:"",error:U},{default:withCtx(()=>[createVNode(ke,{checked:v.value,name:v.name,"onUpdate:checked":v.onChange,onBlur:v.onBlur},null,8,["checked","name","onUpdate:checked","onBlur"])]),_:2},1032,["error"])]),_:1}),createVNode(unref(Field),{name:"cdnHost"},{default:withCtx(({field:v,errorMessage:U})=>[createVNode(q,{label:"自定义 CDN 域名",error:U},{default:withCtx(()=>[createVNode(pe,mergeProps(v,{modelValue:v.value,"onUpdate:modelValue":j=>v.value=j,placeholder:"如：https://imagecdn.alidaodao.com，可不填"}),null,16,["modelValue","onUpdate:modelValue"])]),_:2},1032,["error"])]),_:1}),createVNode(unref(Field),{name:"path"},{default:withCtx(({field:v,errorMessage:U})=>[createVNode(q,{label:"存储路径",error:U},{default:withCtx(()=>[createVNode(pe,mergeProps(v,{modelValue:v.value,"onUpdate:modelValue":j=>v.value=j,placeholder:"如：img，可不填，默认为根目录"}),null,16,["modelValue","onUpdate:modelValue"])]),_:2},1032,["error"])]),_:1}),createVNode(q,null,{default:withCtx(()=>[createVNode(be,{variant:"link",class:"p-0 h-auto text-left whitespace-normal",as:"a",href:"https://help.aliyun.com/document_detail/31883.html",target:"_blank"},{default:withCtx(()=>[...B[16]||(B[16]=[createTextVNode(" 如何使用阿里云 OSS？ ",-1)])]),_:1})]),_:1}),createVNode(q,null,{default:withCtx(()=>[createVNode(be,{type:"submit"},{default:withCtx(()=>[...B[17]||(B[17]=[createTextVNode(" 保存配置 ",-1)])]),_:1})]),_:1})]),_:1},8,["validation-schema","initial-values"])]),_:1}),createVNode(ve,{value:"txCOS"},{default:withCtx(()=>[createVNode(unref(Form),{"validation-schema":unref(p),"initial-values":unref(w),onSubmit:s},{default:withCtx(()=>[createVNode(unref(Field),{name:"secretId"},{default:withCtx(({field:v,errorMessage:U})=>[createVNode(q,{label:"SecretId",required:"",error:U},{default:withCtx(()=>[createVNode(pe,mergeProps(v,{modelValue:v.value,"onUpdate:modelValue":j=>v.value=j,placeholder:"如：AKIDnQp1w3DOOCSs8F5MDp9tdoocsmdUPonW3"}),null,16,["modelValue","onUpdate:modelValue"])]),_:2},1032,["error"])]),_:1}),createVNode(unref(Field),{name:"secretKey"},{default:withCtx(({field:v,errorMessage:U})=>[createVNode(q,{label:"SecretKey",required:"",error:U},{default:withCtx(()=>[createVNode(pe,mergeProps(v,{modelValue:v.value,"onUpdate:modelValue":j=>v.value=j,type:"password",placeholder:"如：ukLmdtEJ9271f3DOocsMDsCXdS3YlbW0"}),null,16,["modelValue","onUpdate:modelValue"])]),_:2},1032,["error"])]),_:1}),createVNode(unref(Field),{name:"bucket"},{default:withCtx(({field:v,errorMessage:U})=>[createVNode(q,{label:"Bucket",required:"",error:U},{default:withCtx(()=>[createVNode(pe,mergeProps(v,{modelValue:v.value,"onUpdate:modelValue":j=>v.value=j,placeholder:"如：doocs-3212520134"}),null,16,["modelValue","onUpdate:modelValue"])]),_:2},1032,["error"])]),_:1}),createVNode(unref(Field),{name:"region"},{default:withCtx(({field:v,errorMessage:U})=>[createVNode(q,{label:"Bucket 所在区域",required:"",error:U},{default:withCtx(()=>[createVNode(pe,mergeProps(v,{modelValue:v.value,"onUpdate:modelValue":j=>v.value=j,placeholder:"如：ap-guangzhou"}),null,16,["modelValue","onUpdate:modelValue"])]),_:2},1032,["error"])]),_:1}),createVNode(unref(Field),{name:"cdnHost"},{default:withCtx(({field:v,errorMessage:U})=>[createVNode(q,{label:"自定义 CDN 域名",error:U},{default:withCtx(()=>[createVNode(pe,mergeProps(v,{modelValue:v.value,"onUpdate:modelValue":j=>v.value=j,placeholder:"如：https://imagecdn.alidaodao.com，可不填"}),null,16,["modelValue","onUpdate:modelValue"])]),_:2},1032,["error"])]),_:1}),createVNode(unref(Field),{name:"path"},{default:withCtx(({field:v,errorMessage:U})=>[createVNode(q,{label:"存储路径",error:U},{default:withCtx(()=>[createVNode(pe,mergeProps(v,{modelValue:v.value,"onUpdate:modelValue":j=>v.value=j,placeholder:"如：img，可不填，默认根目录"}),null,16,["modelValue","onUpdate:modelValue"])]),_:2},1032,["error"])]),_:1}),createVNode(q,null,{default:withCtx(()=>[createVNode(be,{variant:"link",class:"p-0 h-auto text-left whitespace-normal",as:"a",href:"https://cloud.tencent.com/document/product/436/38484",target:"_blank"},{default:withCtx(()=>[...B[18]||(B[18]=[createTextVNode(" 如何使用腾讯云 COS？ ",-1)])]),_:1})]),_:1}),createVNode(q,null,{default:withCtx(()=>[createVNode(be,{type:"submit"},{default:withCtx(()=>[...B[19]||(B[19]=[createTextVNode(" 保存配置 ",-1)])]),_:1})]),_:1})]),_:1},8,["validation-schema","initial-values"])]),_:1}),createVNode(ve,{value:"qiniu"},{default:withCtx(()=>[createVNode(unref(Form),{"validation-schema":unref(C),"initial-values":unref(x),onSubmit:_},{default:withCtx(()=>[createVNode(unref(Field),{name:"accessKey"},{default:withCtx(({field:v,errorMessage:U})=>[createVNode(q,{label:"AccessKey",required:"",error:U},{default:withCtx(()=>[createVNode(pe,mergeProps(v,{modelValue:v.value,"onUpdate:modelValue":j=>v.value=j,placeholder:"如：6DD3VaLJ_SQgOdoocsyTV_YWaDmdnL2n8EGx7kG"}),null,16,["modelValue","onUpdate:modelValue"])]),_:2},1032,["error"])]),_:1}),createVNode(unref(Field),{name:"secretKey"},{default:withCtx(({field:v,errorMessage:U})=>[createVNode(q,{label:"SecretKey",required:"",error:U},{default:withCtx(()=>[createVNode(pe,mergeProps(v,{modelValue:v.value,"onUpdate:modelValue":j=>v.value=j,type:"password",placeholder:"如：qgZa5qrvDOOcsmdKStD1oCjZ9nB7MDvJUs_34SIm"}),null,16,["modelValue","onUpdate:modelValue"])]),_:2},1032,["error"])]),_:1}),createVNode(unref(Field),{name:"bucket"},{default:withCtx(({field:v,errorMessage:U})=>[createVNode(q,{label:"Bucket",required:"",error:U},{default:withCtx(()=>[createVNode(pe,mergeProps(v,{modelValue:v.value,"onUpdate:modelValue":j=>v.value=j,placeholder:"如：md"}),null,16,["modelValue","onUpdate:modelValue"])]),_:2},1032,["error"])]),_:1}),createVNode(unref(Field),{name:"domain"},{default:withCtx(({field:v,errorMessage:U})=>[createVNode(q,{label:"Bucket 对应域名",required:"",error:U},{default:withCtx(()=>[createVNode(pe,mergeProps(v,{modelValue:v.value,"onUpdate:modelValue":j=>v.value=j,placeholder:"如：https://images.123ylb.cn"}),null,16,["modelValue","onUpdate:modelValue"])]),_:2},1032,["error"])]),_:1}),createVNode(unref(Field),{name:"region"},{default:withCtx(({field:v,errorMessage:U})=>[createVNode(q,{label:"存储区域",error:U},{default:withCtx(()=>[createVNode(pe,mergeProps(v,{modelValue:v.value,"onUpdate:modelValue":j=>v.value=j,placeholder:"如：z2，可不填"}),null,16,["modelValue","onUpdate:modelValue"])]),_:2},1032,["error"])]),_:1}),createVNode(unref(Field),{name:"path"},{default:withCtx(({field:v,errorMessage:U})=>[createVNode(q,{label:"存储路径",error:U},{default:withCtx(()=>[createVNode(pe,mergeProps(v,{modelValue:v.value,"onUpdate:modelValue":j=>v.value=j,placeholder:"如：img，可不填，默认为根目录"}),null,16,["modelValue","onUpdate:modelValue"])]),_:2},1032,["error"])]),_:1}),createVNode(q,null,{default:withCtx(()=>[createVNode(be,{variant:"link",class:"p-0 h-auto text-left whitespace-normal",as:"a",href:"https://developer.qiniu.com/kodo",target:"_blank"},{default:withCtx(()=>[...B[20]||(B[20]=[createTextVNode(" 如何使用七牛云 Kodo？ ",-1)])]),_:1})]),_:1}),createVNode(q,null,{default:withCtx(()=>[createVNode(be,{type:"submit"},{default:withCtx(()=>[...B[21]||(B[21]=[createTextVNode(" 保存配置 ",-1)])]),_:1})]),_:1})]),_:1},8,["validation-schema","initial-values"])]),_:1}),createVNode(ve,{value:"minio"},{default:withCtx(()=>[createVNode(unref(Form),{"validation-schema":unref(b),"initial-values":unref(f),onSubmit:N},{default:withCtx(()=>[createVNode(unref(Field),{name:"endpoint"},{default:withCtx(({field:v,errorMessage:U})=>[createVNode(q,{label:"Endpoint",required:"",error:U},{default:withCtx(()=>[createVNode(pe,mergeProps(v,{modelValue:v.value,"onUpdate:modelValue":j=>v.value=j,placeholder:"如：play.min.io"}),null,16,["modelValue","onUpdate:modelValue"])]),_:2},1032,["error"])]),_:1}),createVNode(unref(Field),{name:"port"},{default:withCtx(({field:v,errorMessage:U})=>[createVNode(q,{label:"Port",error:U},{default:withCtx(()=>[createVNode(pe,mergeProps(v,{modelValue:v.value,"onUpdate:modelValue":j=>v.value=j,type:"number",placeholder:"如：9000，可不填，http 默认为 80，https 默认为 443"}),null,16,["modelValue","onUpdate:modelValue"])]),_:2},1032,["error"])]),_:1}),createVNode(unref(Field),{name:"useSSL",type:"boolean"},{default:withCtx(({field:v,errorMessage:U})=>[createVNode(q,{label:"UseSSL",required:"",error:U},{default:withCtx(()=>[createVNode(ke,{checked:v.value,name:v.name,"onUpdate:checked":v.onChange,onBlur:v.onBlur},null,8,["checked","name","onUpdate:checked","onBlur"])]),_:2},1032,["error"])]),_:1}),createVNode(unref(Field),{name:"bucket"},{default:withCtx(({field:v,errorMessage:U})=>[createVNode(q,{label:"Bucket",required:"",error:U},{default:withCtx(()=>[createVNode(pe,mergeProps(v,{modelValue:v.value,"onUpdate:modelValue":j=>v.value=j,placeholder:"如：doocs"}),null,16,["modelValue","onUpdate:modelValue"])]),_:2},1032,["error"])]),_:1}),createVNode(unref(Field),{name:"accessKey"},{default:withCtx(({field:v,errorMessage:U})=>[createVNode(q,{label:"AccessKey",required:"",error:U},{default:withCtx(()=>[createVNode(pe,mergeProps(v,{modelValue:v.value,"onUpdate:modelValue":j=>v.value=j,placeholder:"如：zhangsan"}),null,16,["modelValue","onUpdate:modelValue"])]),_:2},1032,["error"])]),_:1}),createVNode(unref(Field),{name:"secretKey"},{default:withCtx(({field:v,errorMessage:U})=>[createVNode(q,{label:"SecretKey",required:"",error:U},{default:withCtx(()=>[createVNode(pe,mergeProps(v,{modelValue:v.value,"onUpdate:modelValue":j=>v.value=j,placeholder:"如：asdasdasd"}),null,16,["modelValue","onUpdate:modelValue"])]),_:2},1032,["error"])]),_:1}),createVNode(q,null,{default:withCtx(()=>[createVNode(be,{variant:"link",class:"p-0",as:"a",href:"http://docs.minio.org.cn/docs/master/minio-client-complete-guide",target:"_blank"},{default:withCtx(()=>[...B[22]||(B[22]=[createTextVNode(" 如何使用 MinIO？ ",-1)])]),_:1})]),_:1}),createVNode(q,null,{default:withCtx(()=>[createVNode(be,{type:"submit"},{default:withCtx(()=>[...B[23]||(B[23]=[createTextVNode(" 保存配置 ",-1)])]),_:1})]),_:1})]),_:1},8,["validation-schema","initial-values"])]),_:1}),createVNode(ve,{value:"mp"},{default:withCtx(()=>[createVNode(unref(Form),{"validation-schema":unref(H),"initial-values":unref(k),onSubmit:T},{default:withCtx(()=>[unref(P)?(openBlock(),createBlock(unref(Field),{key:0,name:"proxyOrigin"},{default:withCtx(({field:v,errorMessage:U})=>[createVNode(q,{label:"代理域名",required:"",error:U},{default:withCtx(()=>[createVNode(pe,mergeProps(v,{modelValue:v.value,"onUpdate:modelValue":j=>v.value=j,placeholder:unref(Q)}),null,16,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},1032,["error"])]),_:1})):createCommentVNode("",!0),createVNode(unref(Field),{name:"appID"},{default:withCtx(({field:v,errorMessage:U})=>[createVNode(q,{label:"appID",required:"",error:U},{default:withCtx(()=>[createVNode(pe,mergeProps(v,{modelValue:v.value,"onUpdate:modelValue":j=>v.value=j,placeholder:"如：wx6e1234567890efa3"}),null,16,["modelValue","onUpdate:modelValue"])]),_:2},1032,["error"])]),_:1}),createVNode(unref(Field),{name:"appsecret"},{default:withCtx(({field:v,errorMessage:U})=>[createVNode(q,{label:"appsecret",required:"",error:U},{default:withCtx(()=>[createVNode(pe,mergeProps(v,{modelValue:v.value,"onUpdate:modelValue":j=>v.value=j,placeholder:"如：d9f1abcdef01234567890abcdef82397"}),null,16,["modelValue","onUpdate:modelValue"])]),_:2},1032,["error"])]),_:1}),createVNode(q,null,{default:withCtx(()=>[createBaseVNode("div",_hoisted_3$j,[createVNode(be,{variant:"link",class:"p-0 h-auto text-left whitespace-normal",as:"a",href:"https://developers.weixin.qq.com/doc/offiaccount/Getting_Started/Getting_Started_Guide.html",target:"_blank"},{default:withCtx(()=>[...B[24]||(B[24]=[createTextVNode(" 如何开启公众号开发者模式并获取应用账号密钥？ ",-1)])]),_:1}),createVNode(be,{variant:"link",class:"p-0 h-auto text-left whitespace-normal",as:"a",href:"https://md-pages.doocs.org/tutorial/",target:"_blank"},{default:withCtx(()=>[...B[25]||(B[25]=[createTextVNode(" 如何在浏览器插件中使用公众号图床？ ",-1)])]),_:1})])]),_:1}),createVNode(q,null,{default:withCtx(()=>[createVNode(be,{type:"submit"},{default:withCtx(()=>[...B[26]||(B[26]=[createTextVNode(" 保存配置 ",-1)])]),_:1})]),_:1})]),_:1},8,["validation-schema","initial-values"])]),_:1}),createVNode(ve,{value:"r2"},{default:withCtx(()=>[createVNode(unref(Form),{"validation-schema":unref(ce),"initial-values":unref(z),onSubmit:R},{default:withCtx(()=>[createVNode(unref(Field),{name:"accountId"},{default:withCtx(({field:v,errorMessage:U})=>[createVNode(q,{label:"AccountId",required:"",error:U},{default:withCtx(()=>[createVNode(pe,mergeProps(v,{modelValue:v.value,"onUpdate:modelValue":j=>v.value=j,placeholder:"如: 0030f123e55a57546f4c281c564e560",class:"w-full min-w-0 md:min-w-[350px]"}),null,16,["modelValue","onUpdate:modelValue"])]),_:2},1032,["error"])]),_:1}),createVNode(unref(Field),{name:"accessKey"},{default:withCtx(({field:v,errorMessage:U})=>[createVNode(q,{label:"AccessKey",required:"",error:U},{default:withCtx(()=>[createVNode(pe,mergeProps(v,{modelValue:v.value,"onUpdate:modelValue":j=>v.value=j,placeholder:"如: 358090b3a12824a6b0787gae7ad0fc72"}),null,16,["modelValue","onUpdate:modelValue"])]),_:2},1032,["error"])]),_:1}),createVNode(unref(Field),{name:"secretKey"},{default:withCtx(({field:v,errorMessage:U})=>[createVNode(q,{label:"SecretKey",required:"",error:U},{default:withCtx(()=>[createVNode(pe,mergeProps(v,{modelValue:v.value,"onUpdate:modelValue":j=>v.value=j,type:"password",placeholder:"如: c1c4dbcb0b6b785ac6633422a06dff3dac055fe74fe40xj1b5c5fcf1bf128010"}),null,16,["modelValue","onUpdate:modelValue"])]),_:2},1032,["error"])]),_:1}),createVNode(unref(Field),{name:"bucket"},{default:withCtx(({field:v,errorMessage:U})=>[createVNode(q,{label:"Bucket",required:"",error:U},{default:withCtx(()=>[createVNode(pe,mergeProps(v,{modelValue:v.value,"onUpdate:modelValue":j=>v.value=j,placeholder:"如：md"}),null,16,["modelValue","onUpdate:modelValue"])]),_:2},1032,["error"])]),_:1}),createVNode(unref(Field),{name:"domain"},{default:withCtx(({field:v,errorMessage:U})=>[createVNode(q,{label:"域名",required:"",error:U},{default:withCtx(()=>[createVNode(pe,mergeProps(v,{modelValue:v.value,"onUpdate:modelValue":j=>v.value=j,placeholder:"如：https://oss.example.com"}),null,16,["modelValue","onUpdate:modelValue"])]),_:2},1032,["error"])]),_:1}),createVNode(unref(Field),{name:"path"},{default:withCtx(({field:v,errorMessage:U})=>[createVNode(q,{label:"存储路径",error:U},{default:withCtx(()=>[createVNode(pe,mergeProps(v,{modelValue:v.value,"onUpdate:modelValue":j=>v.value=j,placeholder:"如：img，可不填，默认为根目录"}),null,16,["modelValue","onUpdate:modelValue"])]),_:2},1032,["error"])]),_:1}),createVNode(q,null,{default:withCtx(()=>[createBaseVNode("div",_hoisted_4$i,[createVNode(be,{variant:"link",class:"p-0 h-auto text-left whitespace-normal",as:"a",href:"https://developers.cloudflare.com/r2/api/s3/api/",target:"_blank"},{default:withCtx(()=>[...B[27]||(B[27]=[createTextVNode(" 如何使用 S3 API 操作 Cloudflare R2？ ",-1)])]),_:1}),createVNode(be,{variant:"link",class:"p-0 h-auto text-left whitespace-normal",as:"a",href:"https://developers.cloudflare.com/r2/buckets/cors/",target:"_blank"},{default:withCtx(()=>[...B[28]||(B[28]=[createTextVNode(" 如何设置跨域(CORS)？ ",-1)])]),_:1})])]),_:1}),createVNode(q,null,{default:withCtx(()=>[createVNode(be,{type:"submit"},{default:withCtx(()=>[...B[29]||(B[29]=[createTextVNode(" 保存配置 ",-1)])]),_:1})]),_:1})]),_:1},8,["validation-schema","initial-values"])]),_:1}),createVNode(ve,{value:"upyun"},{default:withCtx(()=>[createVNode(unref(Form),{"validation-schema":unref(le),"initial-values":unref(Z),onSubmit:ee},{default:withCtx(()=>[createVNode(unref(Field),{name:"bucket"},{default:withCtx(({field:v,errorMessage:U})=>[createVNode(q,{label:"Bucket",required:"",error:U},{default:withCtx(()=>[createVNode(pe,mergeProps(v,{modelValue:v.value,"onUpdate:modelValue":j=>v.value=j,placeholder:"如: md",class:"w-full min-w-0 md:min-w-[350px]"}),null,16,["modelValue","onUpdate:modelValue"])]),_:2},1032,["error"])]),_:1}),createVNode(unref(Field),{name:"operator"},{default:withCtx(({field:v,errorMessage:U})=>[createVNode(q,{label:"操作员",required:"",error:U},{default:withCtx(()=>[createVNode(pe,mergeProps(v,{modelValue:v.value,"onUpdate:modelValue":j=>v.value=j,placeholder:"如: operator"}),null,16,["modelValue","onUpdate:modelValue"])]),_:2},1032,["error"])]),_:1}),createVNode(unref(Field),{name:"password"},{default:withCtx(({field:v,errorMessage:U})=>[createVNode(q,{label:"操作员密码",required:"",error:U},{default:withCtx(()=>[createVNode(pe,mergeProps(v,{modelValue:v.value,"onUpdate:modelValue":j=>v.value=j,type:"password",placeholder:"如: c1c4dbcb0b6b785ac6633422a06dff3dac055fe74fe40xj1b5c5fcf1bf128010"}),null,16,["modelValue","onUpdate:modelValue"])]),_:2},1032,["error"])]),_:1}),createVNode(unref(Field),{name:"domain"},{default:withCtx(({field:v,errorMessage:U})=>[createVNode(q,{label:"域名",required:"",error:U},{default:withCtx(()=>[createVNode(pe,mergeProps(v,{modelValue:v.value,"onUpdate:modelValue":j=>v.value=j,placeholder:"如：http://xxx.test.upcdn.net"}),null,16,["modelValue","onUpdate:modelValue"])]),_:2},1032,["error"])]),_:1}),createVNode(unref(Field),{name:"path"},{default:withCtx(({field:v,errorMessage:U})=>[createVNode(q,{label:"存储路径",error:U},{default:withCtx(()=>[createVNode(pe,mergeProps(v,{modelValue:v.value,"onUpdate:modelValue":j=>v.value=j,placeholder:"如：img，可不填，默认为根目录"}),null,16,["modelValue","onUpdate:modelValue"])]),_:2},1032,["error"])]),_:1}),createVNode(q,null,{default:withCtx(()=>[createVNode(be,{variant:"link",class:"p-0",as:"a",href:"https://help.upyun.com/",target:"_blank"},{default:withCtx(()=>[...B[30]||(B[30]=[createTextVNode(" 如何使用 又拍云？ ",-1)])]),_:1})]),_:1}),createVNode(q,null,{default:withCtx(()=>[createVNode(be,{type:"submit"},{default:withCtx(()=>[...B[31]||(B[31]=[createTextVNode(" 保存配置 ",-1)])]),_:1})]),_:1})]),_:1},8,["validation-schema","initial-values"])]),_:1}),createVNode(ve,{value:"telegram"},{default:withCtx(()=>[createVNode(unref(Form),{"validation-schema":unref(h),"initial-values":unref(S),onSubmit:V},{default:withCtx(()=>[createVNode(unref(Field),{name:"token"},{default:withCtx(({field:v,errorMessage:U})=>[createVNode(q,{label:"Bot Token",required:"",error:U},{default:withCtx(()=>[createVNode(pe,mergeProps(v,{modelValue:v.value,"onUpdate:modelValue":j=>v.value=j,placeholder:"如：123456789:ABCdefGHIjkl-MNOPqrSTUvwxYZ"}),null,16,["modelValue","onUpdate:modelValue"])]),_:2},1032,["error"])]),_:1}),createVNode(unref(Field),{name:"chatId"},{default:withCtx(({field:v,errorMessage:U})=>[createVNode(q,{label:"Chat ID",required:"",error:U},{default:withCtx(()=>[createVNode(pe,mergeProps(v,{modelValue:v.value,"onUpdate:modelValue":j=>v.value=j,placeholder:"如：-1001234567890"}),null,16,["modelValue","onUpdate:modelValue"])]),_:2},1032,["error"])]),_:1}),createVNode(q,null,{default:withCtx(()=>[createVNode(be,{variant:"link",class:"p-0",as:"a",href:"https://github.com/doocs/md/blob/main/docs/telegram-usage.md",target:"_blank"},{default:withCtx(()=>[...B[32]||(B[32]=[createTextVNode(" 如何使用 Telegram？ ",-1)])]),_:1})]),_:1}),createVNode(q,null,{default:withCtx(()=>[createVNode(be,{type:"submit"},{default:withCtx(()=>[...B[33]||(B[33]=[createTextVNode(" 保存配置 ",-1)])]),_:1})]),_:1})]),_:1},8,["validation-schema","initial-values"])]),_:1}),createVNode(ve,{value:"cloudinary"},{default:withCtx(()=>[createVNode(unref(Form),{"validation-schema":unref(J),"initial-values":unref(re),onSubmit:L},{default:withCtx(()=>[createVNode(unref(Field),{name:"cloudName"},{default:withCtx(({field:v,errorMessage:U})=>[createVNode(q,{label:"Cloud Name",required:"",error:U},{default:withCtx(()=>[createVNode(pe,mergeProps(v,{modelValue:v.value,"onUpdate:modelValue":j=>v.value=j,placeholder:"如：demo"}),null,16,["modelValue","onUpdate:modelValue"])]),_:2},1032,["error"])]),_:1}),createVNode(unref(Field),{name:"apiKey"},{default:withCtx(({field:v,errorMessage:U})=>[createVNode(q,{label:"API Key",required:"",error:U},{default:withCtx(()=>[createVNode(pe,mergeProps(v,{modelValue:v.value,"onUpdate:modelValue":j=>v.value=j,placeholder:"如：1234567890"}),null,16,["modelValue","onUpdate:modelValue"])]),_:2},1032,["error"])]),_:1}),createVNode(unref(Field),{name:"apiSecret"},{default:withCtx(({field:v,errorMessage:U})=>[createVNode(q,{label:"API Secret",error:U},{default:withCtx(()=>[createVNode(pe,mergeProps(v,{modelValue:v.value,"onUpdate:modelValue":j=>v.value=j,type:"password",placeholder:"用于签名上传，可不填"}),null,16,["modelValue","onUpdate:modelValue"])]),_:2},1032,["error"])]),_:1}),createVNode(unref(Field),{name:"uploadPreset"},{default:withCtx(({field:v,errorMessage:U})=>[createVNode(q,{label:"Upload Preset",error:U},{default:withCtx(()=>[createVNode(pe,mergeProps(v,{modelValue:v.value,"onUpdate:modelValue":j=>v.value=j,placeholder:"unsigned 时必填，signed 时可不填"}),null,16,["modelValue","onUpdate:modelValue"])]),_:2},1032,["error"])]),_:1}),createVNode(unref(Field),{name:"folder"},{default:withCtx(({field:v,errorMessage:U})=>[createVNode(q,{label:"Folder",error:U},{default:withCtx(()=>[createVNode(pe,mergeProps(v,{modelValue:v.value,"onUpdate:modelValue":j=>v.value=j,placeholder:"如：blog/image，可不填"}),null,16,["modelValue","onUpdate:modelValue"])]),_:2},1032,["error"])]),_:1}),createVNode(unref(Field),{name:"domain"},{default:withCtx(({field:v,errorMessage:U})=>[createVNode(q,{label:"自定义域名 / CDN",error:U},{default:withCtx(()=>[createVNode(pe,mergeProps(v,{modelValue:v.value,"onUpdate:modelValue":j=>v.value=j,placeholder:"如：https://cdn.example.com，可不填"}),null,16,["modelValue","onUpdate:modelValue"])]),_:2},1032,["error"])]),_:1}),createVNode(q,null,{default:withCtx(()=>[createVNode(be,{variant:"link",class:"p-0",as:"a",href:"https://cloudinary.com/documentation/upload_images",target:"_blank"},{default:withCtx(()=>[...B[34]||(B[34]=[createTextVNode(" Cloudinary 使用文档 ",-1)])]),_:1})]),_:1}),createVNode(q,null,{default:withCtx(()=>[createVNode(be,{type:"submit"},{default:withCtx(()=>[...B[35]||(B[35]=[createTextVNode(" 保存配置 ",-1)])]),_:1})]),_:1})]),_:1},8,["validation-schema","initial-values"])]),_:1}),createVNode(ve,{value:"formCustom",class:"grid"},{default:withCtx(()=>[createVNode(Ve)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["open"])}}}),useThemeStore=defineStore("theme",()=>{const e=store.reactive(addPrefix("theme"),defaultStyleConfig.theme),t=store.reactive("fonts",defaultStyleConfig.fontFamily),n=store.reactive("size",defaultStyleConfig.fontSize),o=store.reactive("color",defaultStyleConfig.primaryColor),a=store.reactive("codeBlockTheme",defaultStyleConfig.codeBlockTheme),i=store.reactive("legend",defaultStyleConfig.legend),u=store.reactive("isMacCodeBlock",defaultStyleConfig.isMacCodeBlock),l=store.reactive("isShowLineNumber",defaultStyleConfig.isShowLineNumber),d=store.reactive("isCiteStatus",defaultStyleConfig.isCiteStatus),m=store.reactive("isCountStatus",defaultStyleConfig.isCountStatus),p=store.reactive(addPrefix("use_indent"),!1),w=store.reactive(addPrefix("use_justify"),!1),s=store.reactive("previewWidth",widthOptions[0].value),C=computed(()=>Number(n.value.replace("px",""))),x=useToggle(u),_=useToggle(l),b=useToggle(d),f=useToggle(m),N=useToggle(p),h=useToggle(w);return{theme:e,fontFamily:t,fontSize:n,fontSizeNumber:C,primaryColor:o,codeBlockTheme:a,legend:i,isMacCodeBlock:u,isShowLineNumber:l,isCiteStatus:d,isCountStatus:m,isUseIndent:p,isUseJustify:w,previewWidth:s,toggleMacCodeBlock:x,toggleShowLineNumber:_,toggleCiteStatus:b,toggleCountStatus:f,toggleUseIndent:N,toggleUseJustify:h,resetStyle:()=>{d.value=defaultStyleConfig.isCiteStatus,u.value=defaultStyleConfig.isMacCodeBlock,l.value=defaultStyleConfig.isShowLineNumber,m.value=defaultStyleConfig.isCountStatus,e.value=defaultStyleConfig.theme,t.value=defaultStyleConfig.fontFamily,n.value=defaultStyleConfig.fontSize,o.value=defaultStyleConfig.primaryColor,a.value=defaultStyleConfig.codeBlockTheme,i.value=defaultStyleConfig.legend,p.value=!1,w.value=!1},updateCodeTheme:()=>{if(window.location.protocol==="chrome-extension:"){document.querySelector("#hljs-inline")||__vitePreload(()=>import("./md-hljs-github-dark-DNJqVBRV.js"),[],import.meta.url).then(k=>{const T=document.createElement("style");T.setAttribute("id","hljs-inline"),T.textContent=k.default,document.head.appendChild(T)}).catch(k=>{console.warn("[updateCodeTheme] Failed to load local hljs theme:",k)});return}const P=a.value,Q=document.querySelector("#hljs");if(Q)Q.setAttribute("href",P);else{const H=document.createElement("link");H.setAttribute("type","text/css"),H.setAttribute("rel","stylesheet"),H.setAttribute("href",P),H.setAttribute("id","hljs"),document.head.appendChild(H)}},applyCurrentTheme:async()=>{try{const{useCssEditorStore:F}=await __vitePreload(async()=>{const{useCssEditorStore:H}=await Promise.resolve().then(()=>cssEditor);return{useCssEditorStore:H}},void 0,import.meta.url),Q=F().getCurrentTabContent();await applyTheme({themeName:e.value,customCSS:Q,variables:{primaryColor:o.value,fontFamily:t.value,fontSize:n.value,isUseIndent:p.value,isUseJustify:w.value}})}catch(F){console.error("[applyCurrentTheme] 主题应用失败:",F)}}}}),_hoisted_1$q={key:0,class:"sticky top-0 z-10 flex items-center justify-between -mx-4 px-4 py-3 border-b mb-4 bg-background"},_hoisted_2$m={class:"space-y-2"},_hoisted_3$i={class:"ml-2 text-xs text-muted-foreground"},_hoisted_4$h={class:"space-y-2"},_hoisted_5$g={class:"grid grid-cols-3 justify-items-center gap-2"},_hoisted_6$e={class:"space-y-2"},_hoisted_7$b={class:"grid grid-cols-5 justify-items-center gap-2"},_hoisted_8$b={class:"space-y-2"},_hoisted_9$9={class:"grid grid-cols-3 justify-items-center gap-2"},_hoisted_10$5={class:"space-y-2"},_hoisted_11$4={class:"space-y-2"},_hoisted_12$4={class:"space-y-2"},_hoisted_13$4={class:"grid grid-cols-3 justify-items-center gap-2"},_hoisted_14$4={class:"grid grid-cols-2 gap-2"},_hoisted_15$4={class:"space-y-2 min-w-0"},_hoisted_16$4={class:"grid grid-cols-2 justify-items-center gap-2"},_hoisted_17$4={class:"space-y-2 min-w-0"},_hoisted_18$4={class:"grid grid-cols-2 justify-items-center gap-2"},_hoisted_19$2={class:"space-y-2 min-w-0"},_hoisted_20$2={class:"grid grid-cols-2 justify-items-center gap-2"},_hoisted_21$2={class:"space-y-2 min-w-0"},_hoisted_22$2={class:"grid grid-cols-2 justify-items-center gap-2"},_hoisted_23$2={class:"space-y-2 min-w-0"},_hoisted_24$2={class:"grid grid-cols-2 justify-items-center gap-2"},_hoisted_25$2={class:"space-y-2"},_sfc_main$_=defineComponent({__name:"RightSlider",setup(e){const t=useThemeStore(),{theme:n,fontFamily:o,fontSize:a,primaryColor:i,codeBlockTheme:u,legend:l,isMacCodeBlock:d,isShowLineNumber:m,isCiteStatus:p,isUseIndent:w,isUseJustify:s}=storeToRefs(t),C=useUIStore(),{isMobile:x,isOpenRightSlider:_,isDark:b}=storeToRefs(C),f=useEditorStore(),N=useRenderStore();function h(){t.updateCodeTheme();const y=f.getContent();N.render(y,{isCiteStatus:t.isCiteStatus,legend:t.legend,isUseIndent:t.isUseIndent,isUseJustify:t.isUseJustify,isCountStatus:t.isCountStatus,isMacCodeBlock:t.isMacCodeBlock,isShowLineNumber:t.isShowLineNumber})}function S(y){t.theme=y,t.applyCurrentTheme(),h()}function V(y){t.fontFamily=y,t.applyCurrentTheme(),h()}function $(y){t.fontSize=y,t.applyCurrentTheme(),h()}function F(y){t.primaryColor=y,t.applyCurrentTheme(),h()}function P(y){t.codeBlockTheme=y,h()}function Q(y){t.legend=y,h()}function H(){t.isMacCodeBlock=!t.isMacCodeBlock,h()}function k(){t.isShowLineNumber=!t.isShowLineNumber,h()}function T(){t.isCiteStatus=!t.isCiteStatus,h()}function ce(){t.isUseIndent=!t.isUseIndent,t.applyCurrentTheme(),h()}function z(){t.isUseJustify=!t.isUseJustify,t.applyCurrentTheme(),h()}function R(){C.isOpenConfirmDialog=!0}const le=ref(!1);watch(_,()=>{x.value&&(le.value=!0)}),watch(x,()=>{le.value=!1});const Z=ref(!1),ee=ref("");watch(Z,()=>{Z.value&&(ee.value="")});const J=useTemplateRef("pickColorsContainer"),re=ref("rgb"),L=ref(["rgb","hex","hsl","hsv"]);return(y,E)=>{const Y=_sfc_main$1E,ne=_sfc_main$13,ue=_sfc_main$14,de=_sfc_main$17,he=_sfc_main$12,me=_sfc_main$19;return openBlock(),createElementBlock(Fragment,null,[unref(x)&&unref(_)?(openBlock(),createElementBlock("div",{key:0,class:"fixed inset-0 bg-black/50 z-40",onClick:E[0]||(E[0]=A=>_.value=!1)})):createCommentVNode("",!0),createBaseVNode("div",{class:normalizeClass(["overflow-hidden mobile-right-drawer",{"fixed top-0 right-0 w-full h-full z-55 bg-background border-l shadow-lg":unref(x),animate:unref(x)&&unref(le),"border-l-2 order-2 border-gray/20 bg-white transition-width duration-300 dark:bg-[#191919]":!unref(x),"w-100":!unref(x)&&unref(_),"w-0 border-l-0":!unref(x)&&!unref(_)}]),style:normalizeStyle({transform:unref(x)?unref(_)?"translateX(0)":"translateX(100%)":"none"})},[createBaseVNode("div",{class:normalizeClass(["space-y-4 h-full overflow-auto p-4",{"pt-0":unref(x),"transition-transform":!unref(x),"translate-x-0":!unref(x)&&unref(_),"translate-x-full":!unref(x)&&!unref(_)}])},[unref(x)?(openBlock(),createElementBlock("div",_hoisted_1$q,[E[15]||(E[15]=createBaseVNode("h2",{class:"text-lg font-semibold"}," 排版设置 ",-1)),createVNode(Y,{variant:"ghost",size:"sm",onClick:E[1]||(E[1]=A=>_.value=!1)},{default:withCtx(()=>[createVNode(unref(X),{class:"h-4 w-4"})]),_:1})])):createCommentVNode("",!0),createBaseVNode("div",_hoisted_2$m,[E[16]||(E[16]=createBaseVNode("h2",null,"主题",-1)),createVNode(me,{modelValue:unref(n),"onUpdate:modelValue":[E[2]||(E[2]=A=>isRef(n)?n.value=A:null),S]},{default:withCtx(()=>[createVNode(ue,{class:"w-full"},{default:withCtx(()=>[createVNode(ne,{placeholder:"选择排版主题"})]),_:1}),createVNode(he,{class:"max-h-72"},{default:withCtx(()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(themeOptions),({label:A,value:I,desc:G})=>(openBlock(),createBlock(de,{key:I,value:I},{default:withCtx(()=>[createBaseVNode("span",null,toDisplayString(A),1),createBaseVNode("span",_hoisted_3$i,toDisplayString(G),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1},8,["modelValue"])]),createBaseVNode("div",_hoisted_4$h,[E[17]||(E[17]=createBaseVNode("h2",null,"字体",-1)),createBaseVNode("div",_hoisted_5$g,[(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(fontFamilyOptions),({label:A,value:I})=>(openBlock(),createBlock(Y,{key:I,variant:"outline",class:normalizeClass(["w-full",{"border-black dark:border-white border-2":unref(o)===I}]),onClick:G=>V(I)},{default:withCtx(()=>[createTextVNode(toDisplayString(A),1)]),_:2},1032,["class","onClick"]))),128))])]),createBaseVNode("div",_hoisted_6$e,[E[18]||(E[18]=createBaseVNode("h2",null,"字号",-1)),createBaseVNode("div",_hoisted_7$b,[(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(fontSizeOptions),({value:A,desc:I})=>(openBlock(),createBlock(Y,{key:A,variant:"outline",class:normalizeClass(["w-full",{"border-black dark:border-white border-2":unref(a)===A}]),onClick:G=>$(A)},{default:withCtx(()=>[createTextVNode(toDisplayString(I),1)]),_:2},1032,["class","onClick"]))),128))])]),createBaseVNode("div",_hoisted_8$b,[E[19]||(E[19]=createBaseVNode("h2",null,"主题色",-1)),createBaseVNode("div",_hoisted_9$9,[(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(colorOptions),({label:A,value:I})=>(openBlock(),createBlock(Y,{key:I,class:normalizeClass(["w-full",{"border-black dark:border-white border-2":unref(i)===I}]),variant:"outline",onClick:G=>F(I)},{default:withCtx(()=>[createBaseVNode("span",{class:"mr-2 inline-block h-4 w-4 rounded-full",style:normalizeStyle({background:I})},null,4),createTextVNode(" "+toDisplayString(A),1)]),_:2},1032,["class","onClick"]))),128))])]),createBaseVNode("div",_hoisted_10$5,[E[20]||(E[20]=createBaseVNode("h2",null,"自定义主题色",-1)),createBaseVNode("div",{ref_key:"pickColorsContainer",ref:J},[unref(J)?(openBlock(),createBlock(unref(Re),{key:0,value:unref(i),"onUpdate:value":E[3]||(E[3]=A=>isRef(i)?i.value=A:null),"show-alpha":"",format:unref(re),"format-options":unref(L),theme:unref(b)?"dark":"light","popup-container":unref(J),onChange:F},null,8,["value","format","format-options","theme","popup-container"])):createCommentVNode("",!0)],512)]),createBaseVNode("div",_hoisted_11$4,[E[21]||(E[21]=createBaseVNode("h2",null,"代码块主题",-1)),createBaseVNode("div",null,[createVNode(me,{modelValue:unref(u),"onUpdate:modelValue":[E[4]||(E[4]=A=>isRef(u)?u.value=A:null),P]},{default:withCtx(()=>[createVNode(ue,null,{default:withCtx(()=>[createVNode(ne,{placeholder:"Select a code block theme"})]),_:1}),createVNode(he,null,{default:withCtx(()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(codeBlockThemeOptions),({label:A,value:I})=>(openBlock(),createBlock(de,{key:A,value:I},{default:withCtx(()=>[createTextVNode(toDisplayString(A),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1},8,["modelValue"])])]),createBaseVNode("div",_hoisted_12$4,[E[22]||(E[22]=createBaseVNode("h2",null,"图注格式",-1)),createBaseVNode("div",_hoisted_13$4,[(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(legendOptions),({label:A,value:I})=>(openBlock(),createBlock(Y,{key:I,class:normalizeClass(["w-full",{"border-black dark:border-white border-2":unref(l)===I}]),variant:"outline",onClick:G=>Q(I)},{default:withCtx(()=>[createTextVNode(toDisplayString(A),1)]),_:2},1032,["class","onClick"]))),128))])]),createBaseVNode("div",_hoisted_14$4,[createBaseVNode("div",_hoisted_15$4,[E[25]||(E[25]=createBaseVNode("h2",null,"Mac 代码块",-1)),createBaseVNode("div",_hoisted_16$4,[createVNode(Y,{class:normalizeClass(["w-full",{"border-black dark:border-white border-2":unref(d)}]),variant:"outline",onClick:E[5]||(E[5]=A=>!unref(d)&&H())},{default:withCtx(()=>[...E[23]||(E[23]=[createTextVNode(" 开启 ",-1)])]),_:1},8,["class"]),createVNode(Y,{class:normalizeClass(["w-full",{"border-black dark:border-white border-2":!unref(d)}]),variant:"outline",onClick:E[6]||(E[6]=A=>unref(d)&&H())},{default:withCtx(()=>[...E[24]||(E[24]=[createTextVNode(" 关闭 ",-1)])]),_:1},8,["class"])])]),createBaseVNode("div",_hoisted_17$4,[E[28]||(E[28]=createBaseVNode("h2",null,"代码块行号",-1)),createBaseVNode("div",_hoisted_18$4,[createVNode(Y,{class:normalizeClass(["w-full",{"border-black dark:border-white border-2":unref(m)}]),variant:"outline",onClick:E[7]||(E[7]=A=>!unref(m)&&k())},{default:withCtx(()=>[...E[26]||(E[26]=[createTextVNode(" 开启 ",-1)])]),_:1},8,["class"]),createVNode(Y,{class:normalizeClass(["w-full",{"border-black dark:border-white border-2":!unref(m)}]),variant:"outline",onClick:E[8]||(E[8]=A=>unref(m)&&k())},{default:withCtx(()=>[...E[27]||(E[27]=[createTextVNode(" 关闭 ",-1)])]),_:1},8,["class"])])]),createBaseVNode("div",_hoisted_19$2,[E[31]||(E[31]=createBaseVNode("h2",null,"微信外链转底部引用",-1)),createBaseVNode("div",_hoisted_20$2,[createVNode(Y,{class:normalizeClass(["w-full",{"border-black dark:border-white border-2":unref(p)}]),variant:"outline",onClick:E[9]||(E[9]=A=>!unref(p)&&T())},{default:withCtx(()=>[...E[29]||(E[29]=[createTextVNode(" 开启 ",-1)])]),_:1},8,["class"]),createVNode(Y,{class:normalizeClass(["w-full",{"border-black dark:border-white border-2":!unref(p)}]),variant:"outline",onClick:E[10]||(E[10]=A=>unref(p)&&T())},{default:withCtx(()=>[...E[30]||(E[30]=[createTextVNode(" 关闭 ",-1)])]),_:1},8,["class"])])]),createBaseVNode("div",_hoisted_21$2,[E[34]||(E[34]=createBaseVNode("h2",null,"段落首行缩进",-1)),createBaseVNode("div",_hoisted_22$2,[createVNode(Y,{class:normalizeClass(["w-full",{"border-black dark:border-white border-2":unref(w)}]),variant:"outline",onClick:E[11]||(E[11]=A=>!unref(w)&&ce())},{default:withCtx(()=>[...E[32]||(E[32]=[createTextVNode(" 开启 ",-1)])]),_:1},8,["class"]),createVNode(Y,{class:normalizeClass(["w-full",{"border-black dark:border-white border-2":!unref(w)}]),variant:"outline",onClick:E[12]||(E[12]=A=>unref(w)&&ce())},{default:withCtx(()=>[...E[33]||(E[33]=[createTextVNode(" 关闭 ",-1)])]),_:1},8,["class"])])]),createBaseVNode("div",_hoisted_23$2,[E[37]||(E[37]=createBaseVNode("h2",null,"段落两端对齐",-1)),createBaseVNode("div",_hoisted_24$2,[createVNode(Y,{class:normalizeClass(["w-full",{"border-black dark:border-white border-2":unref(s)}]),variant:"outline",onClick:E[13]||(E[13]=A=>!unref(s)&&z())},{default:withCtx(()=>[...E[35]||(E[35]=[createTextVNode(" 开启 ",-1)])]),_:1},8,["class"]),createVNode(Y,{class:normalizeClass(["w-full",{"border-black dark:border-white border-2":!unref(s)}]),variant:"outline",onClick:E[14]||(E[14]=A=>unref(s)&&z())},{default:withCtx(()=>[...E[36]||(E[36]=[createTextVNode(" 关闭 ",-1)])]),_:1},8,["class"])])])]),createBaseVNode("div",_hoisted_25$2,[E[39]||(E[39]=createBaseVNode("h2",null,"样式配置",-1)),createVNode(Y,{variant:"destructive",onClick:R},{default:withCtx(()=>[...E[38]||(E[38]=[createTextVNode(" 重置 ",-1)])]),_:1})])],2)],6)],64)}}}),__unplugin_components_7=_export_sfc(_sfc_main$_,[["__scopeId","data-v-44bbffd7"]]),DEFAULT_CSS_CONTENT=DEFAULT_CUSTOM_THEME,useCssEditorStore=defineStore("cssEditor",()=>{const e=useDark(),t=ref(null),n=ref(null),o=store.reactive("__css_content",DEFAULT_CSS_CONTENT),a=store.reactive(addPrefix("css_content_config"),{active:"方案1",tabs:[{title:"方案1",name:"方案1",content:o.value||DEFAULT_CSS_CONTENT}]}),i=()=>a.value.tabs.find(b=>b.name===a.value.active),u=()=>i().content,l=b=>{t.value&&t.value.dispatch({changes:{from:0,to:t.value.state.doc.length,insert:b}})};let d=null;const m=b=>{d=b},p=b=>{console.log("tabChanged",b),a.value.active=b;const f=a.value.tabs.find(N=>N.name===b).content;l(f),d&&d(f)},w=b=>{const f=i();f.title=b,f.name=b,a.value.active=b},s=(b,f)=>{const N=f||DEFAULT_CSS_CONTENT;a.value.tabs.push({name:b,title:b,content:N}),a.value.active=b,console.log("addCssContentTab",b),l(N),d&&d(N)},C=b=>a.value.tabs.every(({name:f})=>f!==b),x=()=>{a.value={active:"方案 1",tabs:[{title:"方案 1",name:"方案 1",content:DEFAULT_CSS_CONTENT}]},t.value&&t.value.dispatch({changes:{from:0,to:t.value.state.doc.length,insert:DEFAULT_CSS_CONTENT}})},_=b=>{const f=document.querySelector("#cssEditor");if(!f)return;f.value=i().content;const N=document.createElement("div");N.className="w-full h-full",f.parentNode?.replaceChild(N,f),n.value=new Compartment;const h=EditorState.create({doc:i().content,extensions:[cssSetup(),n.value.of(theme(e.value)),EditorView.updateListener.of(S=>{if(S.docChanged){const V=S.state.doc.toString();i().content=V,b(V)}})]});t.value=markRaw(new EditorView({state:h,parent:N}))};return watch(e,()=>{t.value&&n.value&&t.value.dispatch({effects:n.value.reconfigure(theme(e.value))})}),onMounted(()=>{o.value=""}),{cssEditor:t,cssContentConfig:a,getCurrentTab:i,getCurrentTabContent:u,setCssEditorValue:l,setOnTabChangedCallback:m,tabChanged:p,renameTab:w,addCssContentTab:s,validatorTabName:C,resetCssConfig:x,initCssEditor:_}}),cssEditor=Object.freeze(Object.defineProperty({__proto__:null,useCssEditorStore},Symbol.toStringTag,{value:"Module"}));function legacyCopy(e){return new Promise((t,n)=>{try{const o=document.createElement("textarea");o.value=e,o.setAttribute("readonly","true"),o.style.position="fixed",o.style.opacity="0",document.body.appendChild(o),o.select();const a=document.execCommand("copy");document.body.removeChild(o),a?t():n(new Error("execCommand failed"))}catch(o){n(o)}})}async function copyPlain(e){if(window.isSecureContext&&navigator.clipboard?.writeText)try{await navigator.clipboard.writeText(e);return}catch{}await legacyCopy(e)}const _hoisted_1$p={key:0,class:"sticky top-0 z-10 flex items-center justify-between px-4 py-3 border-b mb-2 bg-background"},_hoisted_2$l={class:"flex items-center border-b bg-muted"},_hoisted_3$h={class:"space-y-4"},_hoisted_4$g={class:"space-y-2"},_hoisted_5$f={class:"space-y-2"},_hoisted_6$d={class:"space-y-4 flex-1 min-h-0 flex flex-col"},_hoisted_7$a={class:"space-y-2"},_hoisted_8$a={class:"ml-2 text-muted-foreground"},_hoisted_9$8={class:"flex-1 min-h-0 border rounded-lg overflow-auto"},_hoisted_10$4={class:"h-full overflow-auto p-4 bg-muted text-sm"},_sfc_main$Z=defineComponent({__name:"CssEditor",setup(e){const t=useCssEditorStore(),n=useUIStore(),o=useRenderStore(),a=useEditorStore(),i=useThemeStore(),{isMobile:u}=storeToRefs(n),{cssContentConfig:l}=storeToRefs(t),d=ref(!1);watch(()=>n.isShowCssEditor,()=>{u.value&&(d.value=!0)}),watch(()=>u.value,()=>{d.value=!1});const m=ref(!1),p=ref("");async function w(){await nextTick();const z=document.querySelector('[role="tab"][data-state="active"]');z&&z.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})}function s(z){p.value=z,m.value=!0}function C(){if(!p.value.trim()){toast.error("新建失败，方案名不可为空");return}if(!t.validatorTabName(p.value)){toast.error("不能与现有方案重名");return}t.renameTab(p.value),m.value=!1,toast.success("修改成功")}const x=ref(!1),_=ref(""),b=ref("blank");async function f(){if(!_.value.trim()){toast.error("新建失败，方案名不可为空");return}if(!t.validatorTabName(_.value)){toast.error("不能与现有方案重名");return}let z="";b.value==="blank"?z="":z=themeMap[b.value];const R=_.value;t.addCssContentTab(R,z),x.value=!1,toast.success("新建成功"),b.value="blank",w()}const N=ref(!1),h=ref("");function S(z){h.value=z,N.value=!0}function V(){const z=l.value.tabs;if(z.length===1){toast.warning("至少保留一个方案");return}let R=l.value.active;R===h.value&&z.forEach((le,Z)=>{if(le.name===h.value){const ee=z[Z+1]||z[Z-1];ee&&(R=ee.name)}}),t.tabChanged(R),l.value.tabs=z.filter(le=>le.name!==h.value),toast.success("删除成功")}function $(){_.value=`方案${l.value.tabs.length+1}`,b.value="blank",x.value=!0}const F=ref(!1),P=ref("default");function Q(){P.value="default",F.value=!0}async function H(){const z=themeMap[P.value];await copyPlain(z),toast.success("已复制到剪贴板")}function k(){F.value=!1,b.value=P.value,_.value=`基于${themeOptionsMap[P.value].label}主题`,x.value=!0}function T(z){console.log("tabChanged",z),t.tabChanged(z),w()}onMounted(()=>{const z=()=>{i.applyCurrentTheme(),i.updateCodeTheme();const R=a.getContent();o.render(R,{isCiteStatus:i.isCiteStatus,legend:i.legend,isUseIndent:i.isUseIndent,isUseJustify:i.isUseJustify,isCountStatus:i.isCountStatus,isMacCodeBlock:i.isMacCodeBlock,isShowLineNumber:i.isShowLineNumber})};t.setOnTabChangedCallback(z),t.initCssEditor(z),w()});function ce(){const z=l.value.tabs.find(Z=>Z.name===l.value.active);if(!z){toast.error("未找到当前方案");return}const R=z.title||z.name,le=i.theme==="default"?themeMap.default:`${themeMap.default}

${themeMap[i.theme]}`;exportMergedTheme(z.content,le,{primaryColor:i.primaryColor,fontFamily:i.fontFamily,fontSize:i.fontSize},`${R}-merged`),toast.success("主题导出成功")}return(z,R)=>{const le=_sfc_main$1E,Z=_sfc_main$10,ee=_sfc_main$11,J=_sfc_main$1e,re=_sfc_main$1q,L=_sfc_main$1r,y=_sfc_main$1s,E=_sfc_main$1u,Y=_sfc_main$13,ne=_sfc_main$14,ue=_sfc_main$17,de=_sfc_main$12,he=_sfc_main$19,me=_sfc_main$1w,A=_sfc_main$1x,I=_sfc_main$1y,G=_sfc_main$1z,K=_sfc_main$1A,oe=_sfc_main$1B,ie=_sfc_main$1C,te=_sfc_main$1D,ae=_sfc_main$1F,B=_sfc_main$1G,W=_sfc_main$1H;return openBlock(),createElementBlock(Fragment,null,[unref(u)&&unref(n).isShowCssEditor?(openBlock(),createElementBlock("div",{key:0,class:"fixed inset-0 bg-black/50 z-40",onClick:R[0]||(R[0]=M=>unref(n).isShowCssEditor=!1)})):createCommentVNode("",!0),createVNode(Transition,{"enter-active-class":"bounceInRight"},{default:withCtx(()=>[withDirectives(createBaseVNode("div",{class:normalizeClass(["cssEditor-wrapper h-full flex flex-col mobile-css-editor overflow-y-auto",{"fixed top-0 right-0 w-full h-full z-100 bg-background border-l shadow-lg":unref(u),animate:unref(u)&&unref(d),"border-l-2 flex-1 order-2 border-gray/50 min-w-0":!unref(u)}]),style:normalizeStyle({transform:unref(u)?unref(n).isShowCssEditor?"translateX(0)":"translateX(100%)":"none"})},[unref(u)?(openBlock(),createElementBlock("div",_hoisted_1$p,[R[16]||(R[16]=createBaseVNode("h2",{class:"text-lg font-semibold"}," 自定义 CSS ",-1)),createVNode(le,{variant:"ghost",size:"sm",onClick:R[1]||(R[1]=M=>unref(n).isShowCssEditor=!1)},{default:withCtx(()=>[createVNode(unref(X),{class:"h-4 w-4"})]),_:1})])):createCommentVNode("",!0),createVNode(J,{modelValue:unref(l).active,"onUpdate:modelValue":[R[2]||(R[2]=M=>unref(l).active=M),T]},{default:withCtx(()=>[createBaseVNode("div",_hoisted_2$l,[createVNode(ee,{class:"flex-1 overflow-x-auto justify-start border-0 bg-transparent h-auto p-0 custom-scrollbar"},{default:withCtx(()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(l).tabs,M=>(openBlock(),createBlock(Z,{key:M.name,value:M.name,class:"flex-1"},{default:withCtx(()=>[createTextVNode(toDisplayString(M.title)+" ",1),withDirectives(createVNode(unref(PenLine),{class:"cursor-pointer inline size-4 rounded-full p-0.5 transition-color hover:bg-gray-200 dark:hover:bg-gray-600",onClick:se=>s(M.name)},null,8,["onClick"]),[[vShow,unref(l).active===M.name]]),withDirectives(createVNode(unref(X),{class:"cursor-pointer inline size-4 rounded-full p-0.5 transition-color hover:bg-gray-200 dark:hover:bg-gray-600",onClick:withModifiers(se=>S(M.name),["self"])},null,8,["onClick"]),[[vShow,unref(l).active===M.name]])]),_:2},1032,["value"]))),128))]),_:1}),createVNode(le,{variant:"ghost",size:"icon",class:"h-9 w-9 shrink-0 hover:bg-accent",onClick:$},{default:withCtx(()=>[createVNode(unref(Plus),{class:"h-5 w-5"})]),_:1})])]),_:1},8,["modelValue"]),R[33]||(R[33]=createBaseVNode("div",{class:"flex-1 min-h-0"},[createBaseVNode("textarea",{id:"cssEditor",type:"textarea",placeholder:"Your custom css here."})],-1)),createVNode(I,{open:unref(x),"onUpdate:open":R[7]||(R[7]=M=>isRef(x)?x.value=M:null)},{default:withCtx(()=>[createVNode(A,{class:"sm:max-w-[425px]"},{default:withCtx(()=>[createVNode(y,null,{default:withCtx(()=>[createVNode(re,null,{default:withCtx(()=>[...R[17]||(R[17]=[createTextVNode("新建自定义 CSS",-1)])]),_:1}),createVNode(L,null,{default:withCtx(()=>[...R[18]||(R[18]=[createTextVNode(" 请输入方案名称，并选择初始模板 ",-1)])]),_:1})]),_:1}),createBaseVNode("div",_hoisted_3$h,[createBaseVNode("div",_hoisted_4$g,[R[19]||(R[19]=createBaseVNode("label",{class:"text-sm font-medium"},"方案名称",-1)),createVNode(E,{modelValue:unref(_),"onUpdate:modelValue":R[3]||(R[3]=M=>isRef(_)?_.value=M:null),placeholder:"输入方案名称"},null,8,["modelValue"])]),createBaseVNode("div",_hoisted_5$f,[R[21]||(R[21]=createBaseVNode("label",{class:"text-sm font-medium"},"初始模板",-1)),createVNode(he,{modelValue:unref(b),"onUpdate:modelValue":R[4]||(R[4]=M=>isRef(b)?b.value=M:null)},{default:withCtx(()=>[createVNode(ne,null,{default:withCtx(()=>[createVNode(Y,{placeholder:"选择初始模板"})]),_:1}),createVNode(de,null,{default:withCtx(()=>[createVNode(ue,{value:"blank"},{default:withCtx(()=>[...R[20]||(R[20]=[createTextVNode(" 空白方案 ",-1)])]),_:1}),(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(themeOptions),M=>(openBlock(),createBlock(ue,{key:M.value,value:M.value},{default:withCtx(()=>[createTextVNode(" 基于"+toDisplayString(M.label)+"主题 ",1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1},8,["modelValue"]),R[22]||(R[22]=createBaseVNode("p",{class:"text-xs text-muted-foreground"}," 选择一个内置主题作为起点，可以在其基础上进行修改 ",-1))])]),createVNode(me,null,{default:withCtx(()=>[createVNode(le,{variant:"outline",onClick:R[5]||(R[5]=M=>x.value=!1)},{default:withCtx(()=>[...R[23]||(R[23]=[createTextVNode(" 取消 ",-1)])]),_:1}),createVNode(le,{onClick:R[6]||(R[6]=M=>f())},{default:withCtx(()=>[...R[24]||(R[24]=[createTextVNode(" 创建 ",-1)])]),_:1})]),_:1})]),_:1})]),_:1},8,["open"]),createVNode(I,{open:unref(m),"onUpdate:open":R[10]||(R[10]=M=>isRef(m)?m.value=M:null)},{default:withCtx(()=>[createVNode(A,{class:"sm:max-w-[425px]"},{default:withCtx(()=>[createVNode(y,null,{default:withCtx(()=>[createVNode(re,null,{default:withCtx(()=>[...R[25]||(R[25]=[createTextVNode("编辑方案名称",-1)])]),_:1}),createVNode(L,null,{default:withCtx(()=>[...R[26]||(R[26]=[createTextVNode(" 请输入新的方案名称 ",-1)])]),_:1})]),_:1}),createVNode(E,{modelValue:unref(p),"onUpdate:modelValue":R[8]||(R[8]=M=>isRef(p)?p.value=M:null)},null,8,["modelValue"]),createVNode(me,null,{default:withCtx(()=>[createVNode(le,{variant:"outline",onClick:R[9]||(R[9]=M=>m.value=!1)},{default:withCtx(()=>[...R[27]||(R[27]=[createTextVNode(" 取消 ",-1)])]),_:1}),createVNode(le,{onClick:C},{default:withCtx(()=>[...R[28]||(R[28]=[createTextVNode(" 保存 ",-1)])]),_:1})]),_:1})]),_:1})]),_:1},8,["open"]),createVNode(W,{open:unref(N),"onUpdate:open":R[11]||(R[11]=M=>isRef(N)?N.value=M:null)},{default:withCtx(()=>[createVNode(B,null,{default:withCtx(()=>[createVNode(oe,null,{default:withCtx(()=>[createVNode(G,null,{default:withCtx(()=>[...R[29]||(R[29]=[createTextVNode("提示",-1)])]),_:1}),createVNode(K,null,{default:withCtx(()=>[...R[30]||(R[30]=[createTextVNode(" 此操作将删除该自定义方案，是否继续？ ",-1)])]),_:1})]),_:1}),createVNode(ae,null,{default:withCtx(()=>[createVNode(ie,null,{default:withCtx(()=>[...R[31]||(R[31]=[createTextVNode("取消",-1)])]),_:1}),createVNode(te,{onClick:V},{default:withCtx(()=>[...R[32]||(R[32]=[createTextVNode(" 确认 ",-1)])]),_:1})]),_:1})]),_:1})]),_:1},8,["open"])],6),[[vShow,unref(n).isShowCssEditor]])]),_:1}),withDirectives(createVNode(le,{class:normalizeClass(["fixed z-100 shadow-lg hover:bg-accent cursor-pointer transition-shadow bg-background text-background-foreground border",[unref(u)?"bottom-16 right-4":"bottom-22 right-4"]]),size:"sm",variant:"outline",onClick:Q},{default:withCtx(()=>[createVNode(unref(Eye),{class:"h-4 w-4 mr-2"}),R[34]||(R[34]=createTextVNode(" 内置主题 ",-1))]),_:1},8,["class"]),[[vShow,unref(n).isShowCssEditor]]),withDirectives(createVNode(le,{class:normalizeClass(["fixed z-100 shadow-lg hover:bg-accent cursor-pointer transition-shadow bg-background text-background-foreground border",[unref(u)?"bottom-4 right-4":"bottom-10 right-4"]]),size:"sm",onClick:ce},{default:withCtx(()=>[createVNode(unref(Download),{class:"h-4 w-4 mr-2"}),R[35]||(R[35]=createTextVNode(" 导出主题 ",-1))]),_:1},8,["class"]),[[vShow,unref(n).isShowCssEditor]]),createVNode(I,{open:unref(F),"onUpdate:open":R[15]||(R[15]=M=>isRef(F)?F.value=M:null)},{default:withCtx(()=>[createVNode(A,{class:"sm:max-w-4xl max-h-[90vh] flex flex-col",onOpenAutoFocus:R[14]||(R[14]=withModifiers(()=>{},["prevent"]))},{default:withCtx(()=>[createVNode(y,null,{default:withCtx(()=>[createVNode(re,null,{default:withCtx(()=>[...R[36]||(R[36]=[createTextVNode("查看内置主题样式",-1)])]),_:1}),createVNode(L,null,{default:withCtx(()=>[...R[37]||(R[37]=[createTextVNode(" 查看并复制内置主题的 CSS 代码，或基于它们创建新方案 ",-1)])]),_:1})]),_:1}),createBaseVNode("div",_hoisted_6$d,[createBaseVNode("div",_hoisted_7$a,[R[38]||(R[38]=createBaseVNode("label",{class:"text-sm font-medium"},"选择主题",-1)),createVNode(he,{modelValue:unref(P),"onUpdate:modelValue":R[12]||(R[12]=M=>isRef(P)?P.value=M:null)},{default:withCtx(()=>[createVNode(ne,{class:"w-full mt-2 sm:w-[200px] focus-visible:ring-0 focus-visible:ring-offset-0"},{default:withCtx(()=>[createVNode(Y,{placeholder:"选择主题"})]),_:1}),createVNode(de,null,{default:withCtx(()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(themeOptions),M=>(openBlock(),createBlock(ue,{key:M.value,value:M.value},{default:withCtx(()=>[createTextVNode(toDisplayString(M.label)+" ",1),createBaseVNode("span",_hoisted_8$a,toDisplayString(M.desc),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1},8,["modelValue"])]),createBaseVNode("div",_hoisted_9$8,[createBaseVNode("pre",_hoisted_10$4,[createBaseVNode("code",null,toDisplayString(unref(themeMap)[unref(P)]),1)])])]),createVNode(me,{class:"flex-col sm:flex-row gap-2"},{default:withCtx(()=>[createVNode(le,{variant:"outline",onClick:R[13]||(R[13]=M=>F.value=!1)},{default:withCtx(()=>[...R[39]||(R[39]=[createTextVNode(" 关闭 ",-1)])]),_:1}),createVNode(le,{variant:"outline",onClick:H},{default:withCtx(()=>[...R[40]||(R[40]=[createTextVNode(" 复制全部 ",-1)])]),_:1}),createVNode(le,{variant:"outline",onClick:k},{default:withCtx(()=>[...R[41]||(R[41]=[createTextVNode(" 基于此主题新建 ",-1)])]),_:1})]),_:1})]),_:1})]),_:1},8,["open"])],64)}}}),__unplugin_components_6=_export_sfc(_sfc_main$Z,[["__scopeId","data-v-5c13e1c1"]]),_hoisted_1$o=["href"],_sfc_main$Y=defineComponent({__name:"FloatingToc",setup(e){const t=useRenderStore(),n=useUIStore(),{isPinFloatingToc:o,isShowFloatingToc:a}=storeToRefs(n),i=ref(!1);return(u,l)=>withDirectives((openBlock(),createElementBlock("div",{class:"bg-background absolute left-0 top-0 border rounded-br-lg rounded-tr-lg rounded-bl-lg p-2 text-sm shadow-sm",onMouseenter:l[0]||(l[0]=()=>i.value=!0),onMouseleave:l[1]||(l[1]=()=>i.value=!1)},[createVNode(unref(List),{class:"size-6"}),createBaseVNode("ul",{class:normalizeClass(["overflow-auto transition-all",{"max-h-0 w-0":!unref(i)&&!unref(o),"max-h-100 w-60 mt-2":unref(i)||unref(o)}])},[(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(t).titleList,(d,m)=>(openBlock(),createElementBlock("li",{key:m,class:"line-clamp-1 py-1 leading-6 hover:bg-gray-300 dark:hover:bg-gray-600",style:normalizeStyle({paddingLeft:`${d.level-.5}em`})},[createBaseVNode("a",{href:d.url},toDisplayString(d.title),9,_hoisted_1$o)],4))),128))],2)],544)),[[vShow,unref(a)]])}}),_sfc_main$X=defineComponent({__name:"BackTop",props:{left:{},top:{},right:{},bottom:{},visibilityHeight:{},target:{},onClick:{type:Function}},setup(e){const t=e,n=ref(t.visibilityHeight??400),o=ref(!1),a=ref(null);function i(l){a.value?.scrollTo({top:0,left:0,behavior:"smooth"}),t.onClick?.(l)}const u=throttle(l=>{l instanceof HTMLElement?o.value=l.scrollTop>n.value:o.value=window.scrollY>n.value},200,{edges:["leading","trailing"]});return onMounted(()=>{t.target?a.value=document.getElementById(t.target):a.value=window,a.value.addEventListener("scroll",()=>{u(a.value)})}),onUnmounted(()=>{a.value.removeEventListener("scroll",()=>{u(a.value)})}),(l,d)=>{const m=_sfc_main$1E;return unref(o)?(openBlock(),createBlock(m,{key:0,variant:"outline",size:"icon",class:"absolute z-50 rounded-full",style:normalizeStyle({left:`${e.left}px`,top:`${e.top}px`,right:`${e.right}px`,bottom:`${e.bottom}px`}),onClick:i},{default:withCtx(()=>[createVNode(unref(ArrowUpFromLine))]),_:1},8,["style"])):createCommentVNode("",!0)}}}),_sfc_main$W=defineComponent({__name:"ContextMenu",props:{dir:{},modal:{type:Boolean}},emits:["update:open"],setup(e,{emit:t}){const a=Se(e,t);return(i,u)=>(openBlock(),createBlock(unref(rm),normalizeProps(guardReactiveProps(unref(a))),{default:withCtx(()=>[renderSlot(i.$slots,"default")]),_:3},16))}}),_sfc_main$V=defineComponent({__name:"ContextMenuContent",props:{forceMount:{type:Boolean},loop:{type:Boolean},alignOffset:{},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},sticky:{},hideWhenDetached:{type:Boolean},prioritizePosition:{type:Boolean},asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","closeAutoFocus"],setup(e,{emit:t}){const n=e,o=t,a=computed(()=>{const{class:u,...l}=n;return l}),i=Se(a,o);return(u,l)=>(openBlock(),createBlock(unref(um),null,{default:withCtx(()=>[createVNode(unref(dm),mergeProps(unref(i),{class:unref(cn)("z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n.class)}),{default:withCtx(()=>[renderSlot(u.$slots,"default")]),_:3},16,["class"])]),_:3}))}}),_sfc_main$U=defineComponent({__name:"ContextMenuShortcut",props:{class:{type:[Boolean,null,String,Object,Array]}},setup(e){const t=e;return(n,o)=>(openBlock(),createElementBlock("span",{class:normalizeClass(unref(cn)("ml-auto text-xs tracking-widest text-muted-foreground",t.class))},[renderSlot(n.$slots,"default")],2))}}),_sfc_main$T=defineComponent({__name:"ContextMenuSeparator",props:{asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]}},setup(e){const t=e,n=computed(()=>{const{class:o,...a}=t;return a});return(o,a)=>(openBlock(),createBlock(unref(vm),mergeProps(unref(n),{class:unref(cn)("-mx-1 my-1 h-px bg-border",t.class)}),null,16,["class"]))}}),_sfc_main$S=defineComponent({__name:"ContextMenuItem",props:{disabled:{type:Boolean},textValue:{},asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]},inset:{type:Boolean}},emits:["select"],setup(e,{emit:t}){const n=e,o=t,a=computed(()=>{const{class:u,...l}=n;return l}),i=Se(a,o);return(u,l)=>(openBlock(),createBlock(unref(fm),mergeProps(unref(i),{class:unref(cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50",e.inset&&"pl-8",n.class)}),{default:withCtx(()=>[renderSlot(u.$slots,"default")]),_:3},16,["class"]))}}),_sfc_main$R=defineComponent({__name:"ContextMenuTrigger",props:{disabled:{type:Boolean},asChild:{type:Boolean},as:{}},setup(e){const n=Ot(e);return(o,a)=>(openBlock(),createBlock(unref(im),normalizeProps(guardReactiveProps(unref(n))),{default:withCtx(()=>[renderSlot(o.$slots,"default")]),_:3},16))}}),useExportStore=defineStore("export",()=>{const e=usePostStore(),t=useRenderStore(),n=useUIStore();return{editorContent2HTML:()=>{const m=getHtmlContent();return document.querySelector("#output").innerHTML=t.output,m},exportEditorContent2HTML:async()=>{const m=e.currentPost;m&&(await exportHTML(m.title),document.querySelector("#output").innerHTML=t.output)},exportEditorContent2PureHTML:m=>{const p=e.currentPost;p&&exportPureHTML(m,p.title)},downloadAsCardImage:async()=>{const m=e.currentPost;if(!m)return;const p=document.querySelector("#output-wrapper>.preview");if(!p)return;const w=await toPng(p,{backgroundColor:n.isDark?"":"#fff",skipFonts:!0,pixelRatio:Math.max(window.devicePixelRatio||1,2),style:{margin:"0"}});downloadFile(w,`${sanitizeTitle(m.title)}.png`,"image/png")},exportEditorContent2PDF:async()=>{const m=e.currentPost;m&&(await exportPDF(m.title),document.querySelector("#output").innerHTML=t.output)},exportEditorContent2MD:m=>{const p=e.currentPost;p&&downloadMD(m,p.title)}}});function useImportMarkdownContent(){const e=useEditorStore(),{open:t,reset:n,onChange:o}=useFileDialog({accept:".md"});return o(a=>{if(a==null||a.length===0)return;const i=a[0],u=new FileReader;u.readAsText(i),u.onload=l=>{e.editor.dispatch({changes:{from:0,to:e.editor.state.doc.length,insert:""}}),requestAnimationFrame(()=>{e.editor.dispatch({changes:{from:0,to:e.editor.state.doc.length,insert:l.target.result}})}),toast.success("文档导入成功")}}),()=>{n(),t()}}const _sfc_main$Q=defineComponent({__name:"EditorContextMenu",setup(e){const t=useEditorStore(),n=usePostStore(),o=useExportStore(),a=useUIStore(),{toggleShowInsertFormDialog:i,toggleShowInsertMpCardDialog:u,toggleShowUploadImgDialog:l}=a,d=useImportMarkdownContent();async function m(){const N=await t.formatContent();N&&n.currentPost&&n.updatePostContent(n.currentPostId,N)}function p(){t.importContent(DEFAULT_CONTENT),toast.success("文档已重置")}function w(){t.clearContent()}async function s(){const N=t.getSelection();copyPlain(N)}async function C(){try{const N=await navigator.clipboard.readText();t.replaceSelection(N)}catch(N){console.log("粘贴失败",N)}}function x(){a.isOpenConfirmDialog=!0}function _(){o.exportEditorContent2HTML()}function b(){o.exportEditorContent2MD(t.getContent())}function f(){o.downloadAsCardImage()}return(N,h)=>{const S=_sfc_main$R,V=_sfc_main$S,$=_sfc_main$T,F=_sfc_main$U,P=_sfc_main$V,Q=_sfc_main$W;return openBlock(),createBlock(Q,null,{default:withCtx(()=>[createVNode(S,null,{default:withCtx(()=>[renderSlot(N.$slots,"default")]),_:3}),createVNode(P,{class:"w-64"},{default:withCtx(()=>[createVNode(V,{inset:"",onClick:h[0]||(h[0]=H=>unref(l)())},{default:withCtx(()=>[...h[12]||(h[12]=[createTextVNode(" 上传图片 ",-1)])]),_:1}),createVNode(V,{inset:"",onClick:h[1]||(h[1]=H=>unref(i)())},{default:withCtx(()=>[...h[13]||(h[13]=[createTextVNode(" 插入表格 ",-1)])]),_:1}),createVNode(V,{inset:"",onClick:h[2]||(h[2]=H=>unref(u)())},{default:withCtx(()=>[...h[14]||(h[14]=[createTextVNode(" 插入公众号名片 ",-1)])]),_:1}),createVNode(V,{inset:"",onClick:h[3]||(h[3]=H=>x())},{default:withCtx(()=>[...h[15]||(h[15]=[createTextVNode(" 重置样式 ",-1)])]),_:1}),createVNode(V,{inset:"",onClick:h[4]||(h[4]=H=>p())},{default:withCtx(()=>[...h[16]||(h[16]=[createTextVNode(" 重置文档 ",-1)])]),_:1}),createVNode(V,{inset:"",onClick:h[5]||(h[5]=H=>w())},{default:withCtx(()=>[...h[17]||(h[17]=[createTextVNode(" 清空内容 ",-1)])]),_:1}),createVNode($),createVNode(V,{inset:"",onClick:h[6]||(h[6]=H=>unref(d)())},{default:withCtx(()=>[...h[18]||(h[18]=[createTextVNode(" 导入 .md 文档 ",-1)])]),_:1}),createVNode(V,{inset:"",onClick:h[7]||(h[7]=H=>b())},{default:withCtx(()=>[...h[19]||(h[19]=[createTextVNode(" 导出 .md 文档 ",-1)])]),_:1}),createVNode(V,{inset:"",onClick:h[8]||(h[8]=H=>_())},{default:withCtx(()=>[...h[20]||(h[20]=[createTextVNode(" 导出 .html ",-1)])]),_:1}),createVNode(V,{inset:"",onClick:h[9]||(h[9]=H=>f())},{default:withCtx(()=>[...h[21]||(h[21]=[createTextVNode(" 导出 .png ",-1)])]),_:1}),createVNode($),createVNode(V,{inset:"",onClick:h[10]||(h[10]=H=>s())},{default:withCtx(()=>[h[22]||(h[22]=createTextVNode(" 复制 ",-1)),createVNode(F,null,{default:withCtx(()=>[createTextVNode(toDisplayString(unref(ctrlSign))+" + C ",1)]),_:1})]),_:1}),createVNode(V,{inset:"",onClick:C},{default:withCtx(()=>[h[23]||(h[23]=createTextVNode(" 粘贴 ",-1)),createVNode(F,null,{default:withCtx(()=>[createTextVNode(toDisplayString(unref(ctrlSign))+" + V ",1)]),_:1})]),_:1}),createVNode(V,{inset:"",onClick:h[11]||(h[11]=H=>m())},{default:withCtx(()=>[h[24]||(h[24]=createTextVNode(" 格式化 ",-1)),createVNode(F,null,{default:withCtx(()=>[createTextVNode(toDisplayString(unref(altSign))+" + "+toDisplayString(unref(shiftSign))+" + F ",1)]),_:1})]),_:1})]),_:1})]),_:3})}}}),_sfc_main$P=defineComponent({__name:"AlertDialogTrigger",props:{asChild:{type:Boolean},as:{}},setup(e){const t=e;return(n,o)=>(openBlock(),createBlock(unref(Rv),normalizeProps(guardReactiveProps(t)),{default:withCtx(()=>[renderSlot(n.$slots,"default")]),_:3},16))}}),_sfc_main$O=defineComponent({__name:"Separator",props:{orientation:{},decorative:{type:Boolean},asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]},label:{}},setup(e){const t=e,n=computed(()=>{const{class:o,...a}=t;return a});return(o,a)=>(openBlock(),createBlock(unref(ap),mergeProps(unref(n),{class:unref(cn)("shrink-0 bg-border relative",t.orientation==="vertical"?"w-px h-full":"h-px w-full",t.class)}),{default:withCtx(()=>[t.label?(openBlock(),createElementBlock("span",{key:0,class:normalizeClass(unref(cn)("text-xs text-muted-foreground bg-background absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center",t.orientation==="vertical"?"w-px px-1 py-2":"h-px py-1 px-2"))},toDisplayString(t.label),3)):createCommentVNode("",!0)]),_:1},16,["class"]))}}),_sfc_main$N=defineComponent({__name:"DropdownMenu",props:{defaultOpen:{type:Boolean},open:{type:Boolean},dir:{},modal:{type:Boolean}},emits:["update:open"],setup(e,{emit:t}){const a=Se(e,t);return(i,u)=>(openBlock(),createBlock(unref(uh),normalizeProps(guardReactiveProps(unref(a))),{default:withCtx(()=>[renderSlot(i.$slots,"default")]),_:3},16))}}),_sfc_main$M=defineComponent({__name:"DropdownMenuContent",props:{forceMount:{type:Boolean},loop:{type:Boolean},side:{},sideOffset:{default:4},align:{},alignOffset:{},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},sticky:{},hideWhenDetached:{type:Boolean},updatePositionStrategy:{},prioritizePosition:{type:Boolean},asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","closeAutoFocus"],setup(e,{emit:t}){const n=e,o=t,a=computed(()=>{const{class:u,...l}=n;return l}),i=Se(a,o);return(u,l)=>(openBlock(),createBlock(unref(ch),null,{default:withCtx(()=>[createVNode(unref(fh),mergeProps(unref(i),{class:unref(cn)("z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n.class)}),{default:withCtx(()=>[renderSlot(u.$slots,"default")]),_:3},16,["class"])]),_:3}))}}),_sfc_main$L=defineComponent({__name:"DropdownMenuSeparator",props:{asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]}},setup(e){const t=e,n=computed(()=>{const{class:o,...a}=t;return a});return(o,a)=>(openBlock(),createBlock(unref(hh),mergeProps(unref(n),{class:unref(cn)("-mx-1 my-1 h-px bg-muted",t.class)}),null,16,["class"]))}}),_sfc_main$K=defineComponent({__name:"DropdownMenuItem",props:{disabled:{type:Boolean},textValue:{},asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]},inset:{type:Boolean}},setup(e){const t=e,n=computed(()=>{const{class:a,...i}=t;return i}),o=Ot(n);return(a,i)=>(openBlock(),createBlock(unref(vh),mergeProps(unref(o),{class:unref(cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50",e.inset&&"pl-8",t.class)}),{default:withCtx(()=>[renderSlot(a.$slots,"default")]),_:3},16,["class"]))}}),_sfc_main$J=defineComponent({__name:"DropdownMenuTrigger",props:{disabled:{type:Boolean},asChild:{type:Boolean},as:{}},setup(e){const n=Ot(e);return(o,a)=>(openBlock(),createBlock(unref(dh),mergeProps({class:"outline-hidden"},unref(n)),{default:withCtx(()=>[renderSlot(o.$slots,"default")]),_:3},16))}}),_hoisted_1$n=["onDragstart","onDrop","onDragover","onClick"],_hoisted_2$k={class:"line-clamp-1"},_hoisted_3$g={key:0,class:"space-y-1 ml-4 mt-1 border-l-2 border-gray-300 pl-1 dark:border-gray-700"},_sfc_main$I=defineComponent({__name:"PostItem",props:{parentId:{},sortedPosts:{},startRenamePost:{type:Function},openHistoryDialog:{type:Function},startDelPost:{type:Function},dropTargetId:{},setDropTargetId:{type:Function},dragSourceId:{},setDragSourceId:{type:Function},handleDrop:{type:Function},handleDragEnd:{type:Function},openAddPostDialog:{type:Function}},setup(e){const t=e,n=usePostStore(),o=useTemplateStore(),a=useUIStore(),{posts:i,currentPostId:u}=storeToRefs(n),{toggleShowTemplateDialog:l}=a,d=ref(!1),m=ref("");watch(d,_=>{_&&(m.value="")});function p(_,b){t.setDragSourceId(_),b.dataTransfer?.setData("text/plain",_),b.dataTransfer.effectAllowed="move"}function w(_){const b=i.value.find(f=>f.id===_);b&&(b.collapsed=!b.collapsed)}function s(_){return t.sortedPosts.some(b=>b.parentId===_)}function C(_){const b=i.value.find(f=>f.id===_);b&&o.createTemplate({name:b.title,content:b.content,description:`从「${b.title}」创建于 ${new Date().toLocaleString("zh-CN")}`})}function x(_){u.value=_,l(!0)}return(_,b)=>{const f=_sfc_main$1E,N=_sfc_main$J,h=_sfc_main$K,S=_sfc_main$L,V=_sfc_main$M,$=_sfc_main$N,F=resolveComponent("PostItem",!0);return openBlock(!0),createElementBlock(Fragment,null,renderList(t.sortedPosts.filter(P=>t.parentId==null&&P.parentId==null||P.parentId===t.parentId),P=>(openBlock(),createElementBlock("div",{key:P.id},[createBaseVNode("a",{class:normalizeClass(["w-full inline-flex cursor-pointer items-center gap-1 rounded p-2 text-sm transition-colors",["hover:text-primary-foreground hover:bg-primary",{"bg-primary text-primary-foreground shadow-sm":unref(u)===P.id,"opacity-50":t.dragSourceId===P.id,"outline-2 outline-dashed outline-primary  border-gray-200 bg-gray-400/50 dark:border-gray-200 dark:bg-gray-500/50":t.dropTargetId===P.id}]]),draggable:"true",onDragstart:Q=>p(P.id,Q),onDragend:b[0]||(b[0]=(...Q)=>t.handleDragEnd&&t.handleDragEnd(...Q)),onDrop:withModifiers(Q=>t.handleDrop(P.id),["prevent"]),onDragover:withModifiers(Q=>t.setDropTargetId(P.id),["stop","prevent"]),onDragleave:b[1]||(b[1]=withModifiers(Q=>t.setDropTargetId(null),["prevent"])),onClick:Q=>u.value=P.id},[createVNode(f,{size:"xs",variant:"ghost",class:normalizeClass(["h-max p-0.5",s(P.id)?"opacity-100":"opacity-0"]),onClick:withModifiers(Q=>s(P.id)&&w(P.id),["stop"])},{default:withCtx(()=>[createVNode(unref(ChevronRight),{class:normalizeClass(["size-4 transition-transform",{"rotate-90":!P.collapsed}])},null,8,["class"])]),_:2},1032,["class","onClick"]),createBaseVNode("span",_hoisted_2$k,toDisplayString(P.title),1),createVNode($,null,{default:withCtx(()=>[createVNode(N,{"as-child":""},{default:withCtx(()=>[createVNode(f,{size:"xs",variant:"ghost",class:"ml-auto h-max p-0.5"},{default:withCtx(()=>[createVNode(unref(Ellipsis),{class:"size-4"})]),_:1})]),_:1}),createVNode(V,null,{default:withCtx(()=>[createVNode(h,{onClick:withModifiers(Q=>t.openAddPostDialog(P.id),["stop"])},{default:withCtx(()=>[createVNode(unref(SquarePlus),{class:"mr-2 size-4"}),b[2]||(b[2]=createTextVNode(" 新增内容 ",-1))]),_:1},8,["onClick"]),createVNode(h,{onClick:withModifiers(Q=>t.startRenamePost(P.id),["stop"])},{default:withCtx(()=>[createVNode(unref(PenLine),{class:"mr-2 size-4"}),b[3]||(b[3]=createTextVNode(" 重命名 ",-1))]),_:1},8,["onClick"]),createVNode(h,{onClick:withModifiers(Q=>t.openHistoryDialog(P.id),["stop"])},{default:withCtx(()=>[createVNode(unref(History),{class:"mr-2 size-4"}),b[4]||(b[4]=createTextVNode(" 历史记录 ",-1))]),_:1},8,["onClick"]),createVNode(S),createVNode(h,{onClick:withModifiers(Q=>C(P.id),["stop"])},{default:withCtx(()=>[createVNode(unref(Package),{class:"mr-2 size-4"}),b[5]||(b[5]=createTextVNode(" 存储为模板 ",-1))]),_:1},8,["onClick"]),createVNode(h,{onClick:withModifiers(Q=>x(P.id),["stop"])},{default:withCtx(()=>[createVNode(unref(FileInput),{class:"mr-2 size-4"}),b[6]||(b[6]=createTextVNode(" 应用模板 ",-1))]),_:1},8,["onClick"]),createVNode(S),unref(i).length>1?(openBlock(),createBlock(h,{key:0,onClick:withModifiers(Q=>t.startDelPost(P.id),["stop"])},{default:withCtx(()=>[createVNode(unref(Trash2),{class:"mr-2 size-4"}),b[7]||(b[7]=createTextVNode(" 删除 ",-1))]),_:1},8,["onClick"])):createCommentVNode("",!0)]),_:2},1024)]),_:2},1024)],42,_hoisted_1$n),s(P.id)&&!P.collapsed?(openBlock(),createElementBlock("div",_hoisted_3$g,[createVNode(F,{"parent-id":P.id,"sorted-posts":t.sortedPosts,"start-rename-post":t.startRenamePost,"open-history-dialog":t.openHistoryDialog,"start-del-post":t.startDelPost,"drag-source-id":t.dragSourceId,"set-drag-source-id":t.setDragSourceId,"drop-target-id":t.dropTargetId,"set-drop-target-id":t.setDropTargetId,"handle-drag-end":t.handleDragEnd,"handle-drop":t.handleDrop,"open-add-post-dialog":t.openAddPostDialog},null,8,["parent-id","sorted-posts","start-rename-post","open-history-dialog","start-del-post","drag-source-id","set-drag-source-id","drop-target-id","set-drop-target-id","handle-drag-end","handle-drop","open-add-post-dialog"])])):createCommentVNode("",!0)]))),128)}}}),_sfc_main$H=defineComponent({__name:"DropdownMenuRadioGroup",props:{modelValue:{},asChild:{type:Boolean},as:{}},emits:["update:modelValue"],setup(e,{emit:t}){const a=Se(e,t);return(i,u)=>(openBlock(),createBlock(unref(Ch),normalizeProps(guardReactiveProps(unref(a))),{default:withCtx(()=>[renderSlot(i.$slots,"default")]),_:3},16))}}),_hoisted_1$m={class:"absolute left-2 h-3.5 w-3.5 flex items-center justify-center"},_sfc_main$G=defineComponent({__name:"DropdownMenuRadioItem",props:{value:{},disabled:{type:Boolean},textValue:{},asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]}},emits:["select"],setup(e,{emit:t}){const n=e,o=t,a=computed(()=>{const{class:u,...l}=n;return l}),i=Se(a,o);return(u,l)=>(openBlock(),createBlock(unref(wh),mergeProps(unref(i),{class:unref(cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50",n.class)}),{default:withCtx(()=>[createBaseVNode("span",_hoisted_1$m,[createVNode(unref(gh),null,{default:withCtx(()=>[createVNode(unref(Circle),{class:"h-2 w-2 fill-current"})]),_:1})]),renderSlot(u.$slots,"default")]),_:3},16,["class"]))}}),_sfc_main$F=defineComponent({__name:"DialogTrigger",props:{asChild:{type:Boolean},as:{}},setup(e){const t=e;return(n,o)=>(openBlock(),createBlock(unref(ou),normalizeProps(guardReactiveProps(t)),{default:withCtx(()=>[renderSlot(n.$slots,"default")]),_:3},16))}}),_sfc_main$E=defineComponent({__name:"TooltipProvider",props:{delayDuration:{},skipDelayDuration:{},disableHoverableContent:{type:Boolean},disableClosingTrigger:{type:Boolean},disabled:{type:Boolean},ignoreNonKeyboardFocus:{type:Boolean}},setup(e){const t=e;return(n,o)=>(openBlock(),createBlock(unref(Hg),normalizeProps(guardReactiveProps(t)),{default:withCtx(()=>[renderSlot(n.$slots,"default")]),_:3},16))}}),_sfc_main$D=defineComponent({__name:"Tooltip",props:{defaultOpen:{type:Boolean},open:{type:Boolean},delayDuration:{},disableHoverableContent:{type:Boolean},disableClosingTrigger:{type:Boolean},disabled:{type:Boolean},ignoreNonKeyboardFocus:{type:Boolean}},emits:["update:open"],setup(e,{emit:t}){const a=Se(e,t);return(i,u)=>(openBlock(),createBlock(unref(Wg),normalizeProps(guardReactiveProps(unref(a))),{default:withCtx(()=>[renderSlot(i.$slots,"default")]),_:3},16))}}),_sfc_main$C=defineComponent({inheritAttrs:!1,__name:"TooltipContent",props:{forceMount:{type:Boolean},ariaLabel:{},asChild:{type:Boolean},as:{},side:{},sideOffset:{default:4},align:{},alignOffset:{},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},sticky:{},hideWhenDetached:{type:Boolean},class:{type:[Boolean,null,String,Object,Array]}},emits:["escapeKeyDown","pointerDownOutside"],setup(e,{emit:t}){const n=e,o=t,a=computed(()=>{const{class:u,...l}=n;return l}),i=Se(a,o);return(u,l)=>(openBlock(),createBlock(unref(qg),null,{default:withCtx(()=>[createVNode(unref(Ug),mergeProps({...unref(i),...u.$attrs},{class:unref(cn)("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n.class)}),{default:withCtx(()=>[renderSlot(u.$slots,"default")]),_:3},16,["class"])]),_:3}))}}),_sfc_main$B=defineComponent({__name:"TooltipTrigger",props:{asChild:{type:Boolean},as:{}},setup(e){const t=e;return(n,o)=>(openBlock(),createBlock(unref(jg),normalizeProps(guardReactiveProps(t)),{default:withCtx(()=>[renderSlot(n.$slots,"default")]),_:3},16))}}),_hoisted_1$l={key:0,class:"sticky top-0 z-10 flex items-center justify-between px-4 py-3 border-b mb-2 bg-background"},_hoisted_2$j={class:"space-x-4 mb-2 flex justify-center shrink-0 py-2"},_hoisted_3$f={class:"flex-1 overflow-y-auto space-y-1 px-1"},_hoisted_4$f={class:"h-[50vh] flex"},_hoisted_5$e={class:"space-y-1.5 w-[180px]"},_hoisted_6$c=["onClick"],_hoisted_7$9={class:"break-words w-full"},_hoisted_8$9={class:"space-y-2 max-h-full flex-1 overflow-y-auto"},_hoisted_9$7={class:"whitespace-pre-wrap p-2",style:{"word-wrap":"break-word","overflow-wrap":"break-word","word-break":"break-all",hyphens:"auto"}},_sfc_main$A=defineComponent({__name:"index",setup(e){const t=useUIStore(),{isMobile:n,isOpenPostSlider:o}=storeToRefs(t),a=usePostStore(),{posts:i}=storeToRefs(a),u=useEditorStore(),{editor:l}=storeToRefs(u),d=ref(!1);watch(o,()=>{n.value&&(d.value=!0)}),watch(n,()=>{d.value=!1});const m=ref(null),p=ref(!1),w=ref("");watch(p,L=>{L&&(w.value="",m.value=null)});function s(L){p.value=!0,nextTick(()=>{m.value=L})}function C(){if(!w.value.trim())return toast.error("内容标题不可为空");if(i.value.some(L=>L.title===w.value.trim()))return toast.error("内容标题已存在");a.addPost(w.value.trim(),m.value),p.value=!1,toast.success("内容新增成功")}const x=ref(null),_=ref(!1),b=ref("");function f(L){x.value=L,b.value=a.getPostById(L).title,_.value=!0}function N(){if(!b.value.trim())return toast.error("内容标题不可为空");if(i.value.some(L=>L.title===b.value.trim()&&L.id!==x.value))return toast.error("内容标题已存在");if(b.value===a.getPostById(x.value)?.title){_.value=!1;return}a.renamePost(x.value,b.value.trim()),toast.success("内容重命名成功"),_.value=!1}const h=ref(null),S=ref(!1),V=computed(()=>{const L=a.getPostById(h.value||"")?.title??"";return`此操作将删除「${L.length>20?`${L.slice(0,20)}…`:L}」，是否继续？`});function $(L){h.value=L,S.value=!0}function F(){a.delPost(h.value),S.value=!1,toast.success("内容删除成功")}const P=ref(!1),Q=ref(null),H=ref(0);function k(L){Q.value=L,H.value=0,P.value=!0}function T(){const L=a.getPostById(Q.value);if(!L){P.value=!1;return}const y=L.history[H.value].content;L.content=y;const E=toRaw(l.value);E.dispatch({changes:{from:0,to:E.state.doc.length,insert:y}}),toast.success("记录恢复成功"),P.value=!1}const ce=store.reactive(addPrefix("sort_mode"),"create-old-new"),z=computed(()=>[...i.value].sort((L,y)=>{switch(ce.value){case"A-Z":return L.title.localeCompare(y.title);case"Z-A":return y.title.localeCompare(L.title);case"update-new-old":return+new Date(y.updateDatetime)-+new Date(L.updateDatetime);case"update-old-new":return+new Date(L.updateDatetime)-+new Date(y.updateDatetime);case"create-new-old":return+new Date(y.createDatetime)-+new Date(L.createDatetime);default:return+new Date(L.createDatetime)-+new Date(y.createDatetime)}})),R=ref(!1),le=ref(null),Z=ref(null);function ee(L){const y=le.value;if(!y)return;const E=Y=>{if(!Y)return!1;const ne=a.getPostById(Y);return ne?ne.parentId===y?!0:E(ne.parentId):!1};E(L)?toast.error("不能将内容拖拽到其子内容下面"):y!==L&&a.updatePostParentId(y,L||null),le.value=null}function J(L){L.preventDefault()}function re(){le.value=null,Z.value=null,R.value=!1}return(L,y)=>{const E=_sfc_main$1E,Y=_sfc_main$B,ne=_sfc_main$C,ue=_sfc_main$D,de=_sfc_main$E,he=_sfc_main$F,me=_sfc_main$1q,A=_sfc_main$1r,I=_sfc_main$1s,G=_sfc_main$1u,K=_sfc_main$1w,oe=_sfc_main$1x,ie=_sfc_main$1y,te=_sfc_main$J,ae=_sfc_main$G,B=_sfc_main$L,W=_sfc_main$H,M=_sfc_main$M,se=_sfc_main$N,ge=_sfc_main$I,fe=_sfc_main$1z,xe=_sfc_main$1A,_e=_sfc_main$1B,we=_sfc_main$1C,ye=_sfc_main$1D,Ce=_sfc_main$1F,ke=_sfc_main$1G,Ne=_sfc_main$1H,ve=_sfc_main$O,pe=_sfc_main$P;return openBlock(),createElementBlock(Fragment,null,[unref(n)&&unref(o)?(openBlock(),createElementBlock("div",{key:0,class:"fixed inset-0 bg-black/50 z-40",onClick:y[0]||(y[0]=q=>o.value=!1)})):createCommentVNode("",!0),createBaseVNode("div",{class:normalizeClass(["h-full w-full overflow-hidden mobile-drawer",{"fixed top-0 left-0 z-55 bg-background border-r shadow-lg":unref(n),animate:unref(n)&&unref(d),"border-2 border-[#0000] border-dashed bg-gray/20 transition-colors":!unref(n),"border-gray-700 bg-gray-400/50 dark:border-gray-200 dark:bg-gray-500/50":!unref(n)&&unref(R)}]),style:normalizeStyle({transform:unref(n)&&unref(o)?"translateX(0)":unref(n)&&!unref(o)?"translateX(-100%)":void 0}),onDragover:y[6]||(y[6]=withModifiers(q=>R.value=!0,["prevent"])),onDragleave:y[7]||(y[7]=withModifiers(q=>R.value=!1,["prevent"])),onDragend:re},[createBaseVNode("nav",{class:normalizeClass(["h-full flex flex-col transition-transform overflow-hidden",{"p-2":unref(n)}]),onDragover:J,onDrop:y[5]||(y[5]=withModifiers(q=>ee(null),["prevent"]))},[unref(n)?(openBlock(),createElementBlock("div",_hoisted_1$l,[y[13]||(y[13]=createBaseVNode("h2",{class:"text-lg font-semibold"}," 内容管理 ",-1)),createVNode(E,{variant:"ghost",size:"sm",onClick:y[1]||(y[1]=q=>o.value=!1)},{default:withCtx(()=>[createVNode(unref(X),{class:"h-4 w-4"})]),_:1})])):createCommentVNode("",!0),createBaseVNode("div",_hoisted_2$j,[createVNode(ie,{open:unref(p),"onUpdate:open":y[3]||(y[3]=q=>isRef(p)?p.value=q:null)},{default:withCtx(()=>[createVNode(he,null,{default:withCtx(()=>[createVNode(de,{"delay-duration":200},{default:withCtx(()=>[createVNode(ue,null,{default:withCtx(()=>[createVNode(Y,{"as-child":""},{default:withCtx(()=>[createVNode(E,{variant:"ghost",size:"xs",class:"h-max p-1"},{default:withCtx(()=>[createVNode(unref(SquarePlus),{class:"size-5"})]),_:1})]),_:1}),createVNode(ne,{side:"bottom"},{default:withCtx(()=>[...y[14]||(y[14]=[createTextVNode(" 新增内容 ",-1)])]),_:1})]),_:1})]),_:1})]),_:1}),createVNode(oe,null,{default:withCtx(()=>[createVNode(I,null,{default:withCtx(()=>[createVNode(me,null,{default:withCtx(()=>[...y[15]||(y[15]=[createTextVNode("新增内容",-1)])]),_:1}),createVNode(A,null,{default:withCtx(()=>[...y[16]||(y[16]=[createTextVNode("请输入内容名称",-1)])]),_:1})]),_:1}),createVNode(G,{modelValue:unref(w),"onUpdate:modelValue":y[2]||(y[2]=q=>isRef(w)?w.value=q:null),onKeyup:withKeys(C,["enter"])},null,8,["modelValue"]),createVNode(K,null,{default:withCtx(()=>[createVNode(E,{onClick:C},{default:withCtx(()=>[...y[17]||(y[17]=[createTextVNode(" 确 定 ",-1)])]),_:1})]),_:1})]),_:1})]),_:1},8,["open"]),createVNode(se,null,{default:withCtx(()=>[createVNode(te,null,{default:withCtx(()=>[createVNode(de,{"delay-duration":200},{default:withCtx(()=>[createVNode(ue,null,{default:withCtx(()=>[createVNode(Y,{"as-child":""},{default:withCtx(()=>[createVNode(E,{variant:"ghost",size:"xs",class:"h-max p-1"},{default:withCtx(()=>[createVNode(unref(ArrowUpNarrowWide),{class:"size-5"})]),_:1})]),_:1}),createVNode(ne,{side:"bottom"},{default:withCtx(()=>[...y[18]||(y[18]=[createTextVNode(" 排序模式 ",-1)])]),_:1})]),_:1})]),_:1})]),_:1}),createVNode(M,null,{default:withCtx(()=>[createVNode(W,{modelValue:unref(ce),"onUpdate:modelValue":y[4]||(y[4]=q=>isRef(ce)?ce.value=q:null)},{default:withCtx(()=>[createVNode(ae,{value:"A-Z"},{default:withCtx(()=>[...y[19]||(y[19]=[createTextVNode(" 文件名（A-Z） ",-1)])]),_:1}),createVNode(ae,{value:"Z-A"},{default:withCtx(()=>[...y[20]||(y[20]=[createTextVNode(" 文件名（Z-A） ",-1)])]),_:1}),createVNode(B),createVNode(ae,{value:"update-new-old"},{default:withCtx(()=>[...y[21]||(y[21]=[createTextVNode(" 编辑时间（新→旧） ",-1)])]),_:1}),createVNode(ae,{value:"update-old-new"},{default:withCtx(()=>[...y[22]||(y[22]=[createTextVNode(" 编辑时间（旧→新） ",-1)])]),_:1}),createVNode(B),createVNode(ae,{value:"create-new-old"},{default:withCtx(()=>[...y[23]||(y[23]=[createTextVNode(" 创建时间（新→旧） ",-1)])]),_:1}),createVNode(ae,{value:"create-old-new"},{default:withCtx(()=>[...y[24]||(y[24]=[createTextVNode(" 创建时间（旧→新） ",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),createVNode(de,{"delay-duration":200},{default:withCtx(()=>[createVNode(ue,null,{default:withCtx(()=>[createVNode(Y,{"as-child":""},{default:withCtx(()=>[createVNode(E,{variant:"ghost",size:"xs",class:"h-max p-1",onClick:unref(a).collapseAllPosts},{default:withCtx(()=>[createVNode(unref(ChevronsDownUp),{class:"size-5"})]),_:1},8,["onClick"])]),_:1}),createVNode(ne,{side:"bottom"},{default:withCtx(()=>[...y[25]||(y[25]=[createTextVNode(" 全部收起 ",-1)])]),_:1})]),_:1})]),_:1}),createVNode(de,{"delay-duration":200},{default:withCtx(()=>[createVNode(ue,null,{default:withCtx(()=>[createVNode(Y,{"as-child":""},{default:withCtx(()=>[createVNode(E,{variant:"ghost",size:"xs",class:"h-max p-1",onClick:unref(a).expandAllPosts},{default:withCtx(()=>[createVNode(unref(ChevronsUpDown),{class:"size-5"})]),_:1},8,["onClick"])]),_:1}),createVNode(ne,{side:"bottom"},{default:withCtx(()=>[...y[26]||(y[26]=[createTextVNode(" 全部展开 ",-1)])]),_:1})]),_:1})]),_:1})]),createBaseVNode("div",_hoisted_3$f,[createVNode(ge,{"parent-id":null,"sorted-posts":unref(z),"start-rename-post":f,"open-history-dialog":k,"start-del-post":$,"drop-target-id":unref(Z),"set-drop-target-id":q=>Z.value=q,"drag-source-id":unref(le),"set-drag-source-id":q=>le.value=q,"handle-drop":ee,"handle-drag-end":re,"open-add-post-dialog":s},null,8,["sorted-posts","drop-target-id","set-drop-target-id","drag-source-id","set-drag-source-id"])])],34)],38),createVNode(ie,{open:unref(_),"onUpdate:open":y[10]||(y[10]=q=>isRef(_)?_.value=q:null)},{default:withCtx(()=>[createVNode(oe,{class:"sm:max-w-[425px]"},{default:withCtx(()=>[createVNode(I,null,{default:withCtx(()=>[createVNode(me,null,{default:withCtx(()=>[...y[27]||(y[27]=[createTextVNode("编辑内容名称",-1)])]),_:1}),createVNode(A,null,{default:withCtx(()=>[...y[28]||(y[28]=[createTextVNode("请输入新的内容名称",-1)])]),_:1})]),_:1}),createVNode(G,{modelValue:unref(b),"onUpdate:modelValue":y[8]||(y[8]=q=>isRef(b)?b.value=q:null),onKeyup:withKeys(N,["enter"])},null,8,["modelValue"]),createVNode(K,null,{default:withCtx(()=>[createVNode(E,{variant:"outline",onClick:y[9]||(y[9]=q=>_.value=!1)},{default:withCtx(()=>[...y[29]||(y[29]=[createTextVNode(" 取消 ",-1)])]),_:1}),createVNode(E,{onClick:N},{default:withCtx(()=>[...y[30]||(y[30]=[createTextVNode(" 保存 ",-1)])]),_:1})]),_:1})]),_:1})]),_:1},8,["open"]),createVNode(Ne,{open:unref(S),"onUpdate:open":y[11]||(y[11]=q=>isRef(S)?S.value=q:null)},{default:withCtx(()=>[createVNode(ke,null,{default:withCtx(()=>[createVNode(_e,null,{default:withCtx(()=>[createVNode(fe,null,{default:withCtx(()=>[...y[31]||(y[31]=[createTextVNode("提示",-1)])]),_:1}),createVNode(xe,null,{default:withCtx(()=>[createTextVNode(toDisplayString(unref(V)),1)]),_:1})]),_:1}),createVNode(Ce,null,{default:withCtx(()=>[createVNode(we,null,{default:withCtx(()=>[...y[32]||(y[32]=[createTextVNode("取消",-1)])]),_:1}),createVNode(ye,{onClick:F},{default:withCtx(()=>[...y[33]||(y[33]=[createTextVNode(" 确认 ",-1)])]),_:1})]),_:1})]),_:1})]),_:1},8,["open"]),createVNode(ie,{open:unref(P),"onUpdate:open":y[12]||(y[12]=q=>isRef(P)?P.value=q:null)},{default:withCtx(()=>[createVNode(oe,{class:"sm:max-w-4xl"},{default:withCtx(()=>[createVNode(I,null,{default:withCtx(()=>[createVNode(me,null,{default:withCtx(()=>[...y[34]||(y[34]=[createTextVNode("历史记录",-1)])]),_:1}),createVNode(A,null,{default:withCtx(()=>[...y[35]||(y[35]=[createTextVNode("每隔 30 秒自动保存，最多保留 10 条",-1)])]),_:1})]),_:1}),createBaseVNode("div",_hoisted_4$f,[createBaseVNode("ul",_hoisted_5$e,[(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(a).getPostById(unref(Q))?.history,(q,be)=>(openBlock(),createElementBlock("li",{key:q.datetime,class:normalizeClass(["min-h-[2.75rem] w-full inline-flex cursor-pointer items-center gap-2 rounded-md px-3 py-2.5 text-sm transition-colors leading-tight",["hover:bg-primary hover:text-primary-foreground",{"bg-primary text-primary-foreground shadow-sm":unref(H)===be}]]),onClick:Ve=>H.value=be},[createBaseVNode("span",_hoisted_7$9,toDisplayString(q.datetime),1)],10,_hoisted_6$c))),128))]),createVNode(ve,{orientation:"vertical",class:"mx-2"}),createBaseVNode("div",_hoisted_8$9,[createBaseVNode("div",_hoisted_9$7,toDisplayString(unref(a).getPostById(unref(Q))?.history[unref(H)].content??""),1)])]),createVNode(K,null,{default:withCtx(()=>[createVNode(Ne,null,{default:withCtx(()=>[createVNode(pe,null,{default:withCtx(()=>[createVNode(E,null,{default:withCtx(()=>[...y[36]||(y[36]=[createTextVNode("恢 复",-1)])]),_:1})]),_:1}),createVNode(ke,null,{default:withCtx(()=>[createVNode(_e,null,{default:withCtx(()=>[createVNode(fe,null,{default:withCtx(()=>[...y[37]||(y[37]=[createTextVNode("提示",-1)])]),_:1}),createVNode(xe,null,{default:withCtx(()=>[...y[38]||(y[38]=[createTextVNode(" 此操作将用该记录替换当前文章内容，是否继续？ ",-1)])]),_:1})]),_:1}),createVNode(Ce,null,{default:withCtx(()=>[createVNode(we,null,{default:withCtx(()=>[...y[39]||(y[39]=[createTextVNode("取消",-1)])]),_:1}),createVNode(ye,{onClick:T},{default:withCtx(()=>[...y[40]||(y[40]=[createTextVNode(" 恢 复 ",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["open"])],64)}}}),__unplugin_components_2=_export_sfc(_sfc_main$A,[["__scopeId","data-v-658880f5"]]),useAIImageConfigStore=defineStore("AIImageConfig",()=>{const e=store.reactive("openai_image_type",DEFAULT_SERVICE_TYPE),t=store.reactive("openai_image_size","1024x1024"),n=store.reactive("openai_image_quality","standard"),o=store.reactive("openai_image_style","natural"),a=customRef((d,m)=>{let p="";return(async()=>e.value==="custom"?p=await store.get(`openai_image_endpoint_${e.value}`)||"":p=(imageServiceOptions.find(C=>C.value===e.value)??imageServiceOptions[0]).endpoint)(),{get(){return d(),p},set(s){p=s,m(),e.value==="custom"&&store.set(`openai_image_endpoint_${e.value}`,s)}}}),i=ref(""),u=customRef((d,m)=>{let p="";return store.get(`openai_image_key_${e.value}`).then(w=>{p=w||DEFAULT_SERVICE_KEY}),{get(){return d(),p},set(w){p=w,m(),e.value!==DEFAULT_SERVICE_TYPE&&store.set(`openai_image_key_${e.value}`,w)}}});return watch(e,async d=>{const m=imageServiceOptions.find(p=>p.value===d)??imageServiceOptions[0];if(d==="custom"){const p=await store.get(`openai_image_model_${d}`)||"";i.value=p}else{const p=await store.get(`openai_image_model_${d}`)||"";i.value=m.models.includes(p)?p:m.models[0],!m.models.includes(p)&&m.models[0]&&await store.set(`openai_image_model_${d}`,m.models[0])}},{immediate:!0}),watch(i,async d=>{await store.set(`openai_image_model_${e.value}`,d)}),{type:e,endpoint:a,model:i,size:t,quality:n,style:o,apiKey:u,reset:async()=>{e.value=DEFAULT_SERVICE_TYPE,t.value="1024x1024",n.value="standard",o.value="natural",await Promise.all(imageServiceOptions.map(async({value:d})=>{await store.remove(`openai_image_key_${d}`),await store.remove(`openai_image_model_${d}`),await store.remove(`openai_image_endpoint_${d}`)}))}}}),_hoisted_1$k={class:"relative"},_hoisted_2$i=["type","placeholder"],_sfc_main$z=defineComponent({__name:"PasswordInput",props:{defaultValue:{},modelValue:{},class:{type:[Boolean,null,String,Object,Array]},placeholder:{}},setup(e,{emit:t}){const n=e,a=useVModel(n,"modelValue",t,{passive:!0,defaultValue:n.defaultValue}),i=ref(!1);function u(){i.value=!i.value}return(l,d)=>(openBlock(),createElementBlock("div",_hoisted_1$k,[withDirectives(createBaseVNode("input",{"onUpdate:modelValue":d[0]||(d[0]=m=>isRef(a)?a.value=m:null),type:unref(i)?"text":"password",placeholder:e.placeholder,class:normalizeClass(unref(cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 pr-10 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",n.class))},null,10,_hoisted_2$i),[[vModelDynamic,unref(a)]]),createBaseVNode("button",{type:"button",class:"absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors","aria-label":"切换密码可见性",onClick:u},[unref(i)?(openBlock(),createBlock(unref(EyeOff),{key:1,class:"h-4 w-4"})):(openBlock(),createBlock(unref(Eye),{key:0,class:"h-4 w-4"}))])]))}}),_hoisted_1$j={class:"space-y-4 max-w-full"},_hoisted_2$h=["readonly"],_hoisted_3$e={key:0},_hoisted_4$e={key:1},_hoisted_5$d={key:2},_hoisted_6$b={key:3,class:"flex items-start gap-2 p-3 bg-blue-50 dark:bg-blue-950/30 rounded-md text-sm"},_hoisted_7$8={key:4,class:"flex items-start gap-2 p-3 bg-orange-50 dark:bg-orange-950/30 rounded-md text-sm"},_hoisted_8$8={class:"flex flex-wrap gap-2"},_hoisted_9$6={key:5,class:"mt-1 text-xs text-gray-500"},_sfc_main$y=defineComponent({__name:"AIImageConfig",emits:["saved"],setup(e,{emit:t}){const n=t,o=useAIImageConfigStore(),{type:a,endpoint:i,model:u,apiKey:l,size:d,quality:m,style:p}=storeToRefs(o),w=ref(!1),s=ref(""),C=computed(()=>imageServiceOptions.find(S=>S.value===a.value)||imageServiceOptions[0]);watch(a,()=>{s.value=""}),watch(u,()=>{s.value=""}),watch(i,()=>{s.value=""});function x(){if(!i.value.trim()||!u.value.trim()){s.value="❌ 请检查配置项是否完整";return}if(a.value!==DEFAULT_SERVICE_TYPE&&!l.value.trim()){s.value="❌ 请输入 API Key";return}try{new URL(i.value)}catch{s.value="❌ 端点格式有误";return}s.value="✅ 配置已保存",n("saved")}function _(){o.reset(),s.value="🗑️ 当前 AI 图像配置已清除"}async function b(){s.value="",w.value=!0;const S={"Content-Type":"application/json"};l.value&&a.value!==DEFAULT_SERVICE_TYPE&&(S.Authorization=`Bearer ${l.value}`);try{const V=new URL(i.value);!V.pathname.includes("/images/")&&!V.pathname.endsWith("/images/generations")&&(V.pathname=V.pathname.replace(/\/?$/,"/images/generations"));const $={model:u.value,prompt:"test connection",size:d.value,quality:m.value,style:p.value,n:1},F=await window.fetch(V.toString(),{method:"POST",headers:S,body:JSON.stringify($)});if(F.ok)s.value="✅ 连接成功";else{const P=await F.text();s.value=`❌ 连接失败：${F.status} ${P}`}}catch(V){s.value=`❌ 连接失败：${V.message}`}finally{w.value=!1}}const f=[{label:"正方形 (1024x1024)",value:"1024x1024"},{label:"横版 (1792x1024)",value:"1792x1024"},{label:"竖版 (1024x1792)",value:"1024x1792"}],N=[{label:"标准",value:"standard"},{label:"高清",value:"hd"}],h=[{label:"自然",value:"natural"},{label:"鲜明",value:"vivid"}];return(S,V)=>(openBlock(),createElementBlock("div",_hoisted_1$j,[V[19]||(V[19]=createBaseVNode("div",{class:"text-lg font-semibold border-b pb-2"}," AI 图像生成配置 ",-1)),createBaseVNode("div",null,[createVNode(unref(_sfc_main$1t),{class:"mb-1 block text-sm font-medium"},{default:withCtx(()=>[...V[8]||(V[8]=[createTextVNode("服务商",-1)])]),_:1}),createVNode(unref(_sfc_main$19),{modelValue:unref(a),"onUpdate:modelValue":V[0]||(V[0]=$=>isRef(a)?a.value=$:null)},{default:withCtx(()=>[createVNode(unref(_sfc_main$14),{class:"w-full"},{default:withCtx(()=>[createVNode(unref(_sfc_main$13),null,{default:withCtx(()=>[createTextVNode(toDisplayString(unref(C).label),1)]),_:1})]),_:1}),createVNode(unref(_sfc_main$12),null,{default:withCtx(()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(imageServiceOptions),$=>(openBlock(),createBlock(unref(_sfc_main$17),{key:$.value,value:$.value},{default:withCtx(()=>[createTextVNode(toDisplayString($.label),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1},8,["modelValue"])]),createBaseVNode("div",null,[createVNode(unref(_sfc_main$1t),{class:"mb-1 block text-sm font-medium"},{default:withCtx(()=>[...V[9]||(V[9]=[createTextVNode("API 端点",-1)])]),_:1}),withDirectives(createBaseVNode("input",{"onUpdate:modelValue":V[1]||(V[1]=$=>isRef(i)?i.value=$:null),type:"url",class:"w-full mt-1 p-2 border rounded-md bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-colors",placeholder:"https://api.openai.com/v1",readonly:unref(a)!=="custom"},null,8,_hoisted_2$h),[[vModelText,unref(i)]])]),unref(a)!=="default"?(openBlock(),createElementBlock("div",_hoisted_3$e,[createVNode(unref(_sfc_main$1t),{class:"mb-1 block text-sm font-medium"},{default:withCtx(()=>[...V[10]||(V[10]=[createTextVNode("API Key",-1)])]),_:1}),createVNode(unref(_sfc_main$z),{modelValue:unref(l),"onUpdate:modelValue":V[2]||(V[2]=$=>isRef(l)?l.value=$:null),class:"w-full mt-1 focus:ring-2 focus:ring-primary focus:border-primary transition-colors",placeholder:"sk-..."},null,8,["modelValue"])])):createCommentVNode("",!0),createBaseVNode("div",null,[createVNode(unref(_sfc_main$1t),{class:"mb-1 block text-sm font-medium"},{default:withCtx(()=>[...V[11]||(V[11]=[createTextVNode("模型",-1)])]),_:1}),unref(a)!=="custom"&&unref(C).models.length>0?(openBlock(),createBlock(unref(_sfc_main$19),{key:0,modelValue:unref(u),"onUpdate:modelValue":V[3]||(V[3]=$=>isRef(u)?u.value=$:null)},{default:withCtx(()=>[createVNode(unref(_sfc_main$14),{class:"w-full"},{default:withCtx(()=>[createVNode(unref(_sfc_main$13),null,{default:withCtx(()=>[createTextVNode(toDisplayString(unref(u)||"请选择模型"),1)]),_:1})]),_:1}),createVNode(unref(_sfc_main$12),null,{default:withCtx(()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(C).models,$=>(openBlock(),createBlock(unref(_sfc_main$17),{key:$,value:$},{default:withCtx(()=>[createTextVNode(toDisplayString($),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1},8,["modelValue"])):withDirectives((openBlock(),createElementBlock("input",{key:1,"onUpdate:modelValue":V[4]||(V[4]=$=>isRef(u)?u.value=$:null),type:"text",class:"w-full mt-1 p-2 border rounded-md bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-colors",placeholder:"输入模型名称，如：dall-e-3"},null,512)),[[vModelText,unref(u)]])]),createBaseVNode("div",null,[createVNode(unref(_sfc_main$1t),{class:"mb-1 block text-sm font-medium"},{default:withCtx(()=>[...V[12]||(V[12]=[createTextVNode("图像尺寸",-1)])]),_:1}),createVNode(unref(_sfc_main$19),{modelValue:unref(d),"onUpdate:modelValue":V[5]||(V[5]=$=>isRef(d)?d.value=$:null)},{default:withCtx(()=>[createVNode(unref(_sfc_main$14),{class:"w-full"},{default:withCtx(()=>[createVNode(unref(_sfc_main$13),null,{default:withCtx(()=>[createTextVNode(toDisplayString(f.find($=>$.value===unref(d))?.label||unref(d)),1)]),_:1})]),_:1}),createVNode(unref(_sfc_main$12),null,{default:withCtx(()=>[(openBlock(),createElementBlock(Fragment,null,renderList(f,$=>createVNode(unref(_sfc_main$17),{key:$.value,value:$.value},{default:withCtx(()=>[createTextVNode(toDisplayString($.label),1)]),_:2},1032,["value"])),64))]),_:1})]),_:1},8,["modelValue"])]),unref(u).includes("dall-e")?(openBlock(),createElementBlock("div",_hoisted_4$e,[createVNode(unref(_sfc_main$1t),{class:"mb-1 block text-sm font-medium"},{default:withCtx(()=>[...V[13]||(V[13]=[createTextVNode("图像质量",-1)])]),_:1}),createVNode(unref(_sfc_main$19),{modelValue:unref(m),"onUpdate:modelValue":V[6]||(V[6]=$=>isRef(m)?m.value=$:null)},{default:withCtx(()=>[createVNode(unref(_sfc_main$14),{class:"w-full"},{default:withCtx(()=>[createVNode(unref(_sfc_main$13),null,{default:withCtx(()=>[createTextVNode(toDisplayString(N.find($=>$.value===unref(m))?.label||unref(m)),1)]),_:1})]),_:1}),createVNode(unref(_sfc_main$12),null,{default:withCtx(()=>[(openBlock(),createElementBlock(Fragment,null,renderList(N,$=>createVNode(unref(_sfc_main$17),{key:$.value,value:$.value},{default:withCtx(()=>[createTextVNode(toDisplayString($.label),1)]),_:2},1032,["value"])),64))]),_:1})]),_:1},8,["modelValue"])])):createCommentVNode("",!0),unref(u).includes("dall-e")?(openBlock(),createElementBlock("div",_hoisted_5$d,[createVNode(unref(_sfc_main$1t),{class:"mb-1 block text-sm font-medium"},{default:withCtx(()=>[...V[14]||(V[14]=[createTextVNode("图像风格",-1)])]),_:1}),createVNode(unref(_sfc_main$19),{modelValue:unref(p),"onUpdate:modelValue":V[7]||(V[7]=$=>isRef(p)?p.value=$:null)},{default:withCtx(()=>[createVNode(unref(_sfc_main$14),{class:"w-full"},{default:withCtx(()=>[createVNode(unref(_sfc_main$13),null,{default:withCtx(()=>[createTextVNode(toDisplayString(h.find($=>$.value===unref(p))?.label||unref(p)),1)]),_:1})]),_:1}),createVNode(unref(_sfc_main$12),null,{default:withCtx(()=>[(openBlock(),createElementBlock(Fragment,null,renderList(h,$=>createVNode(unref(_sfc_main$17),{key:$.value,value:$.value},{default:withCtx(()=>[createTextVNode(toDisplayString($.label),1)]),_:2},1032,["value"])),64))]),_:1})]),_:1},8,["modelValue"])])):createCommentVNode("",!0),unref(a)==="default"?(openBlock(),createElementBlock("div",_hoisted_6$b,[createVNode(unref(Info),{class:"h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0"}),V[15]||(V[15]=createBaseVNode("div",{class:"text-blue-700 dark:text-blue-300"},[createBaseVNode("p",{class:"font-medium"}," 默认图像服务 "),createBaseVNode("p",null,"免费使用，无需配置 API Key，支持 Kwai-Kolors/Kolors 模型。")],-1))])):unref(a)==="custom"?(openBlock(),createElementBlock("div",_hoisted_7$8,[createVNode(unref(Info),{class:"h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0"}),V[16]||(V[16]=createBaseVNode("div",{class:"text-orange-700 dark:text-orange-300"},[createBaseVNode("p",{class:"font-medium"}," 自定义服务 "),createBaseVNode("p",null,"可配置任何兼容 OpenAI 图像生成 API 的服务，如自建的 API 代理或其他第三方服务。"),createBaseVNode("p",{class:"mt-1 text-xs"}," 端点格式示例：https://your-api.com/v1 ")],-1))])):createCommentVNode("",!0),createBaseVNode("div",_hoisted_8$8,[createVNode(unref(_sfc_main$1E),{type:"button",class:"flex-1 min-w-[100px]",onClick:x},{default:withCtx(()=>[...V[17]||(V[17]=[createTextVNode(" 保存配置 ",-1)])]),_:1}),createVNode(unref(_sfc_main$1E),{variant:"outline",type:"button",class:"flex-1 min-w-[80px]",onClick:_},{default:withCtx(()=>[...V[18]||(V[18]=[createTextVNode(" 清空 ",-1)])]),_:1}),createVNode(unref(_sfc_main$1E),{size:"sm",variant:"outline",class:"flex-1 min-w-[100px]",disabled:unref(w),onClick:b},{default:withCtx(()=>[createTextVNode(toDisplayString(unref(w)?"测试中...":"测试连接"),1)]),_:1},8,["disabled"])]),unref(s)?(openBlock(),createElementBlock("div",_hoisted_9$6,toDisplayString(unref(s)),1)):createCommentVNode("",!0)]))}}),_hoisted_1$i={class:"space-x-1 flex items-center"},_hoisted_2$g={key:0,class:"mb-4 w-full border rounded-md p-4 max-h-[60vh] overflow-y-auto flex-shrink-0"},_hoisted_3$d={key:1,class:"flex flex-col space-y-4 flex-shrink-0"},_hoisted_4$d={class:"flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-lg min-h-[250px] sm:min-h-[300px]"},_hoisted_5$c={key:0,class:"flex flex-col items-center gap-4"},_hoisted_6$a={key:1,class:"w-full flex flex-col space-y-3"},_hoisted_7$7={key:0,class:"flex items-center justify-between p-2 bg-muted/20 rounded"},_hoisted_8$7={class:"text-sm text-muted-foreground"},_hoisted_9$5={class:"flex items-center justify-center p-2 sm:p-4"},_hoisted_10$3=["src","alt"],_hoisted_11$3={class:"px-2 sm:px-4 py-2 bg-muted/10 rounded space-y-1"},_hoisted_12$3={class:"text-xs text-muted-foreground text-center"},_hoisted_13$3={class:"text-xs text-muted-foreground break-words text-center"},_hoisted_14$3={class:"ml-1"},_hoisted_15$3={class:"text-xs text-muted-foreground text-center"},_hoisted_16$3={class:"flex flex-wrap justify-center gap-2 p-2 sm:p-4 bg-muted/20 border-t border-border rounded-b-lg"},_hoisted_17$3={key:2,class:"relative flex-shrink-0 mt-auto"},_hoisted_18$3={class:"bg-background border-border flex flex-col items-baseline gap-2 border rounded-xl px-3 py-2 pr-12 shadow-inner"},_sfc_main$x=defineComponent({__name:"AIImageGeneratorPanel",props:{open:{type:Boolean}},emits:["update:open"],setup(e,{emit:t}){const n=e,o=t,a=useEditorStore(),{editor:i}=storeToRefs(a),u=useUIStore(),{toggleAIDialog:l}=u,d=ref(n.open);watch(()=>n.open,A=>{d.value=A,A&&T()}),watch(d,A=>o("update:open",A));const m=ref(!1),p=ref(!1),w=ref(""),s=ref(""),C=ref([]),x=ref([]),_=ref([]),b=ref(null),f=ref(0),N=ref(null),h=useAIImageConfigStore(),{apiKey:S,endpoint:V,model:$,type:F,size:P,quality:Q,style:H}=storeToRefs(h);function k(A){return Date.now()-A>36e5}async function T(){const A=await store.get("ai_generated_images"),I=await store.get("ai_image_timestamps");if(!A)return;const G=await store.getJSON("ai_generated_images",[]),K=await store.getJSON("ai_image_prompts",[]),oe=await store.getJSON("ai_image_timestamps",[]);if(!I||oe.length===0){console.log("🧹 检测到旧版本数据，清除所有过期图片"),C.value=[],x.value=[],_.value=[],await store.remove("ai_generated_images"),await store.remove("ai_image_prompts"),await store.remove("ai_image_timestamps");return}const ie=[];oe.forEach((W,M)=>{k(W)||ie.push(M)});const te=ie.map(W=>G[W]).filter(Boolean),ae=ie.map(W=>K[W]||"").filter((W,M)=>te[M]),B=ie.map(W=>oe[W]).filter(Boolean);C.value=te,x.value=ae,_.value=B,te.length<G.length&&(console.log(`🧹 清除了 ${G.length-te.length} 张过期图片`),te.length>0?(await store.setJSON("ai_generated_images",te),await store.setJSON("ai_image_prompts",ae),await store.setJSON("ai_image_timestamps",B)):(await store.remove("ai_generated_images"),await store.remove("ai_image_prompts"),await store.remove("ai_image_timestamps"))),console.log("📊 过期检查完成，有效图片数量:",te.length)}onMounted(async()=>{await T();const A=C.value.length,I=x.value.length,G=_.value.length,K=Math.max(A,I,G);A<K?(console.warn("⚠️ 数据不一致，清除所有数据"),C.value=[],x.value=[],_.value=[],await store.remove("ai_generated_images"),await store.remove("ai_image_prompts"),await store.remove("ai_image_timestamps")):(I<A&&(x.value=[...x.value,...Array.from({length:A-I},()=>"")]),G<A&&(_.value=[..._.value,...Array.from({length:A-G},()=>Date.now())])),N.value=setInterval(()=>{C.value.length>0&&T()},3e4)}),onBeforeUnmount(()=>{N.value&&(clearInterval(N.value),N.value=null)});function ce(){m.value=!1}function z(){o("update:open",!1),setTimeout(()=>{l(!0)},100)}function R(A){A.isComposing||A.keyCode===229||A.key==="Enter"&&!A.shiftKey&&(A.preventDefault(),le())}async function le(){if(!w.value.trim()||p.value)return;const A=w.value.trim();s.value=A,p.value=!0,b.value=new AbortController;const I={"Content-Type":"application/json"};S.value&&F.value!=="default"&&(I.Authorization=`Bearer ${S.value}`);try{const G=new URL(V.value);!G.pathname.includes("/images/")&&!G.pathname.endsWith("/images/generations")&&(G.pathname=G.pathname.replace(/\/?$/,"/images/generations"));const K={model:$.value,prompt:A,size:P.value,n:1};$.value.includes("dall-e")&&(K.quality=Q.value,K.style=H.value);const oe=await window.fetch(G.toString(),{method:"POST",headers:I,body:JSON.stringify(K),signal:b.value.signal});if(!oe.ok){const te=await oe.text();throw new Error(`${oe.status}: ${te}`)}const ie=await oe.json();if(ie.data&&ie.data.length>0){const te=ie.data[0].url||ie.data[0].b64_json;if(te){const ae=te.startsWith("data:")||te.startsWith("http")?te:`data:image/png;base64,${te}`,B=Date.now();C.value.unshift(ae),x.value.unshift(A),_.value.unshift(B),f.value=0,C.value.length>20&&(C.value=C.value.slice(0,20),x.value=x.value.slice(0,20),_.value=_.value.slice(0,20)),await store.setJSON("ai_generated_images",C.value),await store.setJSON("ai_image_prompts",x.value),await store.setJSON("ai_image_timestamps",_.value),w.value=""}}else throw new Error("未收到有效的图像数据")}catch(G){G.name==="AbortError"?console.log("图像生成请求中止"):console.error("图像生成失败:",G)}finally{p.value=!1,b.value=null}}function Z(){b.value&&(b.value.abort(),b.value=null),p.value=!1}async function ee(){C.value=[],x.value=[],_.value=[],f.value=0,await store.remove("ai_generated_images"),await store.remove("ai_image_prompts"),await store.remove("ai_image_timestamps")}async function J(A,I){try{const K=await(await fetch(A)).blob(),oe=window.URL.createObjectURL(K),ie=document.createElement("a");ie.href=oe;const te=x.value[I]||"",ae=te?te.substring(0,20).replace(/[^\w\s-]/g,"").replace(/\s+/g,"-"):"no-prompt";ie.download=`ai-image-${I+1}-${ae}.png`,document.body.appendChild(ie),ie.click(),document.body.removeChild(ie),window.URL.revokeObjectURL(oe)}catch(G){console.error("下载图像失败:",G)}}async function re(A){try{await copyPlain(A),console.log("✅ 图片链接已复制到剪贴板"),typeof toast<"u"&&toast.success("图片链接已复制到剪贴板")}catch(I){console.error("❌ 复制失败:",I),typeof toast<"u"&&toast.error("复制失败，请重试")}}function L(){const A=x.value[f.value];A?(console.log("🔄 重新生成图像，使用当前图片的prompt:",A),y(A)):console.warn("⚠️ 没有找到当前图片的prompt")}async function y(A){if(!A.trim()||p.value)return;p.value=!0,b.value=new AbortController;const I={"Content-Type":"application/json"};S.value&&F.value!=="default"&&(I.Authorization=`Bearer ${S.value}`);try{const G=new URL(V.value);!G.pathname.includes("/images/")&&!G.pathname.endsWith("/images/generations")&&(G.pathname=G.pathname.replace(/\/?$/,"/images/generations"));const K={model:$.value,prompt:A.trim(),size:P.value,n:1};$.value.includes("dall-e")&&(K.quality=Q.value,K.style=H.value);const oe=await window.fetch(G.toString(),{method:"POST",headers:I,body:JSON.stringify(K),signal:b.value.signal});if(!oe.ok){const te=await oe.text();throw new Error(`${oe.status}: ${te}`)}const ie=await oe.json();if(ie.data&&ie.data.length>0){const te=ie.data[0].url||ie.data[0].b64_json;if(te){const ae=te.startsWith("data:")||te.startsWith("http")?te:`data:image/png;base64,${te}`,B=Date.now();C.value.unshift(ae),x.value.unshift(A.trim()),_.value.unshift(B),f.value=0,C.value.length>20&&(C.value=C.value.slice(0,20),x.value=x.value.slice(0,20),_.value=_.value.slice(0,20)),await store.setJSON("ai_generated_images",C.value),await store.setJSON("ai_image_prompts",x.value),await store.setJSON("ai_image_timestamps",_.value)}}else throw new Error("未收到有效的图像数据")}catch(G){G.name==="AbortError"?console.log("图像生成请求中止"):console.error("图像生成失败:",G)}finally{p.value=!1,b.value=null}}function E(){f.value>0&&f.value--}function Y(){f.value<C.value.length-1&&f.value++}function ne(A){if(!i.value){console.warn("编辑器未初始化");return}try{const I=x.value[f.value]||"";console.log("🔗 插入图片，使用关联的prompt:",I);const K=`![${I.trim()?I.trim().substring(0,30).replace(/\n/g," "):"AI生成的图像"}](${A})`,oe=i.value.state.selection.main.head;i.value.dispatch({changes:{from:oe,insert:K},selection:{anchor:oe+K.length}}),i.value.focus(),d.value=!1,console.log("✅ 图像已成功插入到光标位置")}catch(I){console.error("❌ 插入图像到光标位置失败:",I)}}function ue(A){if(console.log("🔍 点击查看大图:",A),!A){console.error("❌ 图片URL为空");return}try{window.open(A,"_blank","width=800,height=600,scrollbars=yes,resizable=yes")||(console.error("❌ 无法打开新窗口，可能被浏览器阻止"),window.open(A,"_blank"))}catch(I){console.error("❌ 打开图片失败:",I)}}const de=ref(Date.now());onMounted(()=>{const I=setInterval(()=>{de.value=Date.now()},1e3);onBeforeUnmount(()=>{clearInterval(I)})});function he(A){if(!_.value[A])return"未知";const I=3600*1e3,G=_.value[A],K=de.value-G,oe=I-K;if(oe<=0)return"已过期";const ie=Math.floor(oe/(60*1e3)),te=Math.floor(oe%(60*1e3)/1e3);return ie>0?`${ie}分${te}秒`:`${te}秒`}function me(A){if(!_.value[A])return"text-muted-foreground";const I=3600*1e3,G=_.value[A],K=de.value-G,oe=I-K;return oe<=0?"text-red-500 font-medium":oe<600*1e3?"text-orange-500 font-medium":oe<1800*1e3?"text-yellow-600":"text-green-600"}return(A,I)=>(openBlock(),createBlock(unref(_sfc_main$1y),{open:d.value,"onUpdate:open":I[8]||(I[8]=G=>d.value=G)},{default:withCtx(()=>[createVNode(unref(_sfc_main$1x),{class:"bg-card text-card-foreground flex flex-col w-[95vw] max-h-[90vh] sm:max-h-[85vh] sm:max-w-4xl overflow-y-auto"},{default:withCtx(()=>[createVNode(unref(_sfc_main$1s),{class:"space-y-1 flex flex-col items-start"},{default:withCtx(()=>[createBaseVNode("div",_hoisted_1$i,[createVNode(unref(_sfc_main$1q),null,{default:withCtx(()=>[...I[9]||(I[9]=[createTextVNode("AI 文生图",-1)])]),_:1}),createVNode(unref(_sfc_main$1E),{title:m.value?"AI 文生图":"配置参数","aria-label":m.value?"AI 文生图":"配置参数",variant:"ghost",size:"icon",onClick:I[0]||(I[0]=G=>m.value=!m.value)},{default:withCtx(()=>[m.value?(openBlock(),createBlock(unref(Image),{key:0,class:"h-4 w-4"})):(openBlock(),createBlock(unref(Settings),{key:1,class:"h-4 w-4"}))]),_:1},8,["title","aria-label"]),createVNode(unref(_sfc_main$1E),{title:"AI 对话","aria-label":"AI 对话",variant:"ghost",size:"icon",onClick:I[1]||(I[1]=G=>z())},{default:withCtx(()=>[createVNode(unref(MessageCircle),{class:"h-4 w-4"})]),_:1}),createVNode(unref(_sfc_main$1E),{title:"清空图像","aria-label":"清空图像",variant:"ghost",size:"icon",onClick:ee},{default:withCtx(()=>[createVNode(unref(Trash2),{class:"h-4 w-4"})]),_:1})]),createVNode(unref(_sfc_main$1r),{class:"text-muted-foreground text-sm"},{default:withCtx(()=>[...I[10]||(I[10]=[createTextVNode(" 使用 AI 根据文字描述生成图像 ",-1)])]),_:1})]),_:1}),m.value?(openBlock(),createElementBlock("div",_hoisted_2$g,[createVNode(_sfc_main$y,{onSaved:ce})])):createCommentVNode("",!0),!m.value&&(p.value||C.value.length>0)?(openBlock(),createElementBlock("div",_hoisted_3$d,[createBaseVNode("div",_hoisted_4$d,[p.value?(openBlock(),createElementBlock("div",_hoisted_5$c,[createVNode(unref(LoaderCircle),{class:"h-8 w-8 animate-spin text-primary"}),I[12]||(I[12]=createBaseVNode("p",{class:"text-sm text-muted-foreground"}," 正在生成图像... ",-1)),createVNode(unref(_sfc_main$1E),{variant:"outline",size:"sm",onClick:Z},{default:withCtx(()=>[...I[11]||(I[11]=[createTextVNode(" 取消生成 ",-1)])]),_:1})])):C.value.length>0?(openBlock(),createElementBlock("div",_hoisted_6$a,[C.value.length>1?(openBlock(),createElementBlock("div",_hoisted_7$7,[createVNode(unref(_sfc_main$1E),{variant:"outline",size:"sm",disabled:f.value<=0,onClick:E},{default:withCtx(()=>[...I[13]||(I[13]=[createTextVNode(" 上一张 ",-1)])]),_:1},8,["disabled"]),createBaseVNode("span",_hoisted_8$7,toDisplayString(f.value+1)+" / "+toDisplayString(C.value.length),1),createVNode(unref(_sfc_main$1E),{variant:"outline",size:"sm",disabled:f.value>=C.value.length-1,onClick:Y},{default:withCtx(()=>[...I[14]||(I[14]=[createTextVNode(" 下一张 ",-1)])]),_:1},8,["disabled"])])):createCommentVNode("",!0),createBaseVNode("div",_hoisted_9$5,[createBaseVNode("div",{class:"relative group cursor-pointer w-full max-w-sm",onClick:I[2]||(I[2]=G=>ue(C.value[f.value]))},[createBaseVNode("img",{src:C.value[f.value],alt:`生成的图像 ${f.value+1}`,class:"w-full h-auto max-h-[300px] sm:max-h-[350px] object-contain rounded-lg shadow-lg border border-border transition-transform hover:scale-105"},null,8,_hoisted_10$3),I[15]||(I[15]=createBaseVNode("div",{class:"absolute inset-0 bg-black/0 group-hover:bg-black/10 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"},[createBaseVNode("div",{class:"bg-black/70 text-white px-3 py-1 rounded-md text-sm"}," 点击查看大图 ")],-1))])]),createBaseVNode("div",_hoisted_11$3,[createBaseVNode("p",_hoisted_12$3," 尺寸: "+toDisplayString(unref(P)),1),createBaseVNode("div",_hoisted_13$3,[I[16]||(I[16]=createBaseVNode("span",{class:"font-medium"},"提示词:",-1)),createBaseVNode("span",_hoisted_14$3,toDisplayString(x.value[f.value]||"无关联提示词"),1)]),createBaseVNode("div",_hoisted_15$3,[I[17]||(I[17]=createBaseVNode("span",{class:"font-medium"},"剩余有效期:",-1)),createBaseVNode("span",{class:normalizeClass(["ml-1",me(f.value)])},toDisplayString(he(f.value)),3),I[18]||(I[18]=createBaseVNode("span",{class:"font-medium"},"，请及时下载保存",-1))])]),createBaseVNode("div",_hoisted_16$3,[createVNode(unref(_sfc_main$1E),{variant:"outline",size:"sm",class:"flex-shrink-0 bg-background text-xs sm:text-sm",onClick:I[3]||(I[3]=G=>ne(C.value[f.value]))},{default:withCtx(()=>[createVNode(unref(Image),{class:"h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2"}),I[19]||(I[19]=createTextVNode(" 插入 ",-1))]),_:1}),createVNode(unref(_sfc_main$1E),{variant:"outline",size:"sm",class:"flex-shrink-0 bg-background text-xs sm:text-sm",onClick:I[4]||(I[4]=G=>J(C.value[f.value],f.value))},{default:withCtx(()=>[createVNode(unref(Download),{class:"h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2"}),I[20]||(I[20]=createTextVNode(" 下载 ",-1))]),_:1}),createVNode(unref(_sfc_main$1E),{variant:"outline",size:"sm",class:"flex-shrink-0 bg-background text-xs sm:text-sm",onClick:I[5]||(I[5]=G=>re(C.value[f.value]))},{default:withCtx(()=>[createVNode(unref(Copy),{class:"h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2"}),I[21]||(I[21]=createTextVNode(" 复制 ",-1))]),_:1}),createVNode(unref(_sfc_main$1E),{variant:"outline",size:"sm",class:"flex-shrink-0 bg-background text-xs sm:text-sm",onClick:L},{default:withCtx(()=>[createVNode(unref(RefreshCcw),{class:"h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2"}),I[22]||(I[22]=createTextVNode(" 重新生成 ",-1))]),_:1})])])):createCommentVNode("",!0)])])):createCommentVNode("",!0),m.value?createCommentVNode("",!0):(openBlock(),createElementBlock("div",_hoisted_17$3,[createBaseVNode("div",_hoisted_18$3,[createVNode(unref(_sfc_main$1v),{modelValue:w.value,"onUpdate:modelValue":I[6]||(I[6]=G=>w.value=G),placeholder:"描述你想要生成的图像... (Enter 生成，Shift+Enter 换行)",rows:"2",class:"custom-scroll min-h-16 w-full resize-none border-none bg-transparent p-0 focus-visible:outline-hidden focus:outline-hidden focus-visible:ring-0 focus:ring-0 focus-visible:ring-offset-0 focus:ring-offset-0 focus-visible:ring-transparent focus:ring-transparent",onKeydown:R},null,8,["modelValue"]),createVNode(unref(_sfc_main$1E),{disabled:!w.value.trim()&&!p.value,size:"icon",class:normalizeClass(["absolute bottom-3 right-3 rounded-full disabled:opacity-40","bg-primary hover:bg-primary/90 text-primary-foreground"]),"aria-label":p.value?"取消":"生成",onClick:I[7]||(I[7]=G=>p.value?Z():le())},{default:withCtx(()=>[p.value?(openBlock(),createBlock(unref(LoaderCircle),{key:0,class:"h-4 w-4 animate-spin"})):(openBlock(),createBlock(unref(Image),{key:1,class:"h-4 w-4"}))]),_:1},8,["disabled","aria-label"])])]))]),_:1})]),_:1},8,["open"]))}}),AIImageGeneratorPanel=_export_sfc(_sfc_main$x,[["__scopeId","data-v-a7949ae6"]]),_hoisted_1$h={class:"grid grid-cols-1 lg:grid-cols-2 my-5 h-[60vh] lg:h-96 gap-4 text-center"},_hoisted_2$f={class:"flex flex-col overflow-hidden"},_hoisted_3$c={key:0,class:"space-y-2 overflow-auto"},_hoisted_4$c=["id","onUpdate:modelValue"],_hoisted_5$b=["for"],_hoisted_6$9={key:1},_hoisted_7$6={class:"flex flex-col overflow-hidden"},_hoisted_8$6={class:"relative bg-white p-2 dark:bg-gray-900"},_hoisted_9$4={class:"w-full overflow-auto border rounded-md bg-gray-50 p-2 dark:bg-gray-800"},_hoisted_10$2={class:"text-left text-sm text-gray-500 dark:text-gray-400"},_hoisted_11$2={class:"col-span-1 lg:col-span-2 flex justify-end"},_hoisted_12$2={class:"grid grid-cols-1 lg:grid-cols-2 my-5 h-[60vh] lg:h-96 gap-4 text-center"},_hoisted_13$2={class:"overflow-auto h-full flex flex-col"},_hoisted_14$2={class:"sticky top-0 z-10 bg-white p-2 dark:bg-gray-900"},_hoisted_15$2={key:0,class:"m-4 flex-1 flex flex-col items-center justify-center border-2 rounded-lg border-dashed"},_hoisted_16$2={for:"json-import-input",class:"flex-1 w-full flex flex-col cursor-pointer items-center justify-center rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"},_hoisted_17$2={key:1,class:"mt-4 border rounded-md bg-gray-50 p-2 dark:bg-gray-800"},_hoisted_18$2={class:"text-left text-sm text-gray-500 dark:text-gray-400"},_hoisted_19$1={class:"overflow-auto h-full flex flex-col"},_hoisted_20$1={key:0},_hoisted_21$1={class:"space-y-2"},_hoisted_22$1=["id","onUpdate:modelValue"],_hoisted_23$1=["for"],_hoisted_24$1={key:1,class:"flex-1 flex items-center justify-center text-gray-500 dark:text-gray-400"},_hoisted_25$1={class:"flex-1 col-span-1 lg:col-span-2 flex justify-end"},_hoisted_26$1={class:"max-h-[70vh] overflow-hidden"},_hoisted_27$1={class:"h-full overflow-auto border rounded-md bg-gray-50 p-4 dark:bg-gray-800"},_hoisted_28$1={class:"break-all text-left text-sm text-gray-500 dark:text-gray-400"},_sfc_main$w=defineComponent({__name:"EditorStateDialog",props:{visible:{type:Boolean,default:!1}},emits:["close"],setup(e,{emit:t}){const n=e,o=t,a=useThemeStore(),i=useUIStore(),u=usePostStore(),l=useCssEditorStore(),d=useRenderStore();watch(()=>n.visible,k=>{k&&x()});function m(k){k||o("close")}const p=ref("import"),w=ref([{value:"import",label:"导入配置"},{value:"export",label:"导出配置"}]),s=ref({data:{},selected:{}});function C(){return{isDark:i.isDark,themeMode:i.themeMode,isEditOnLeft:i.isEditOnLeft,isOpenRightSlider:i.isOpenRightSlider,isOpenPostSlider:i.isOpenPostSlider,showAIToolbox:i.showAIToolbox,theme:a.theme,fontFamily:a.fontFamily,fontSize:a.fontSize,primaryColor:a.primaryColor,codeBlockTheme:a.codeBlockTheme,legend:a.legend,isMacCodeBlock:a.isMacCodeBlock,isShowLineNumber:a.isShowLineNumber,isCiteStatus:a.isCiteStatus,isCountStatus:a.isCountStatus,isUseIndent:a.isUseIndent,isUseJustify:a.isUseJustify,currentPostId:u.currentPostId,currentPostIndex:u.currentPostIndex,posts:u.posts,cssContentConfig:l.cssContentConfig,titleList:d.titleList,readingTime:d.readingTime,isShowCssEditor:i.isShowCssEditor,isShowInsertFormDialog:i.isShowInsertFormDialog,isShowUploadImgDialog:i.isShowUploadImgDialog,isShowInsertMpCardDialog:i.isShowInsertMpCardDialog,aiDialogVisible:i.aiDialogVisible,aiImageDialogVisible:i.aiImageDialogVisible}}async function x(){try{const k=C();s.value={data:k,selected:Object.keys(k).reduce((T,ce)=>(T[ce]=!0,T),{})}}catch{}}const _=computed(()=>s.value.data?Object.keys(s.value.data).reduce((k,T)=>(s.value.selected[T]&&(k[T]=s.value.data[T]),k),{}):{}),b=ref({data:{},selected:{}}),f=ref(null),N=computed(()=>b.value.data?Object.keys(b.value.data).reduce((k,T)=>(b.value.selected[T]&&(k[T]=b.value.data[T]),k),{}):{});function h(){const k=Object.keys(s.value.data).reduce((T,ce)=>(s.value.selected[ce]&&(T[ce]=s.value.data[ce]),T),{});downloadFile(JSON.stringify(k,null,2),"exported_config.json","application/json"),toast.success("配置文件导出成功"),o("close")}const S=ref(!1),V=computed(()=>p.value==="export"?_.value:p.value==="import"?N.value:{});function $(k){copyPlain(k),toast.success("复制成功")}const F=ref(null);function P(){F.value?.click()}function Q(k){const T=k.target;if(!T.files?.length)return;const ce=T.files[0],z=new FileReader;z.onload=R=>{try{const le=R.target?.result,Z=JSON.parse(le);if(typeof Z!="object"||Array.isArray(Z)){toast.error("导入的文件格式不正确");return}const ee=Object.keys(s.value.data).concat(Object.keys(b.value.data)),J=Object.keys(Z).reduce((re,L)=>(ee.includes(L)&&(re[L]=Z[L]),re),{});if(Object.keys(J).length===0){toast.error("导入的文件无可应用项目配置");return}f.value=Z,b.value={data:Z,selected:Object.keys(Z).reduce((re,L)=>(re[L]=!0,re),{})},toast.success("配置文件导入成功")}catch{toast.error("文件解析失败，请检查JSON格式")}},z.readAsText(ce),T.value=""}function H(){N.value&&(Object.keys(b.value.selected).forEach(k=>{if(b.value.selected[k]&&b.value.data?.[k]!==void 0){const T=b.value.data[k];k==="themeMode"?i.setThemeMode(T):k==="isDark"?i.isDark=T:k==="isEditOnLeft"?i.isEditOnLeft=T:k==="isOpenRightSlider"?i.isOpenRightSlider=T:k==="isOpenPostSlider"?i.isOpenPostSlider=T:k==="showAIToolbox"?i.showAIToolbox=T:k==="theme"?a.theme=T:k==="fontFamily"?a.fontFamily=T:k==="fontSize"?a.fontSize=T:k==="primaryColor"?a.primaryColor=T:k==="codeBlockTheme"?a.codeBlockTheme=T:k==="legend"?a.legend=T:k==="isMacCodeBlock"?a.isMacCodeBlock=T:k==="isShowLineNumber"?a.isShowLineNumber=T:k==="isCiteStatus"?a.isCiteStatus=T:k==="isCountStatus"?a.isCountStatus=T:k==="isUseIndent"?a.isUseIndent=T:k==="isUseJustify"?a.isUseJustify=T:k==="currentPostId"?u.currentPostId=T:k==="currentPostIndex"?u.currentPostIndex=T:k==="posts"?u.posts=T:k==="cssContentConfig"?l.cssContentConfig=T:k==="titleList"?d.titleList=T:k==="readingTime"?d.readingTime=T:k==="isShowCssEditor"?i.isShowCssEditor=T:k==="isShowInsertFormDialog"?i.isShowInsertFormDialog=T:k==="isShowUploadImgDialog"?i.isShowUploadImgDialog=T:k==="isShowInsertMpCardDialog"?i.isShowInsertMpCardDialog=T:k==="aiDialogVisible"?i.aiDialogVisible=T:k==="aiImageDialogVisible"&&(i.aiImageDialogVisible=T)}}),toast.success("配置应用成功，请刷新页面查看效果"),o("close"))}return(k,T)=>{const ce=_sfc_main$1q,z=_sfc_main$1r,R=_sfc_main$1s,le=_sfc_main$10,Z=_sfc_main$11,ee=_sfc_main$1E,J=_sfc_main$1c,re=_sfc_main$1e,L=_sfc_main$1x,y=_sfc_main$1y,E=_sfc_main$1w;return openBlock(),createElementBlock(Fragment,null,[createVNode(y,{open:n.visible,"onUpdate:open":m},{default:withCtx(()=>[createVNode(L,{class:"md:max-w-2/3"},{default:withCtx(()=>[createVNode(R,null,{default:withCtx(()=>[createVNode(ce,null,{default:withCtx(()=>[...T[5]||(T[5]=[createTextVNode("导入/导出项目配置",-1)])]),_:1}),createVNode(z,null,{default:withCtx(()=>[...T[6]||(T[6]=[createTextVNode(" 导入的配置将覆盖当前项目的配置，请谨慎操作。 ",-1)])]),_:1})]),_:1}),createVNode(re,{modelValue:unref(p),"onUpdate:modelValue":T[2]||(T[2]=Y=>isRef(p)?p.value=Y:null),class:"w-full"},{default:withCtx(()=>[createVNode(Z,null,{default:withCtx(()=>[createVNode(le,{value:"import"},{default:withCtx(()=>[...T[7]||(T[7]=[createTextVNode(" 导入配置 ",-1)])]),_:1}),(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(w).filter(Y=>Y.value!=="import"),Y=>(openBlock(),createBlock(le,{key:Y.value,value:Y.value},{default:withCtx(()=>[createTextVNode(toDisplayString(Y.label),1)]),_:2},1032,["value"]))),128))]),_:1}),createVNode(J,{value:"export"},{default:withCtx(()=>[createBaseVNode("div",_hoisted_1$h,[createBaseVNode("div",_hoisted_2$f,[T[9]||(T[9]=createBaseVNode("p",{class:"bg-white p-2 dark:bg-gray-900"}," 请选择需要导出的配置 ",-1)),unref(s).data?(openBlock(),createElementBlock("ul",_hoisted_3$c,[(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(s).data,(Y,ne)=>(openBlock(),createElementBlock("li",{key:ne,class:"space-x-2 flex items-center"},[withDirectives(createBaseVNode("input",{id:`export-${ne}`,"onUpdate:modelValue":ue=>unref(s).selected[ne]=ue,type:"checkbox",class:"h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"},null,8,_hoisted_4$c),[[vModelCheckbox,unref(s).selected[ne]]]),createBaseVNode("label",{for:`export-${ne}`,class:"text-sm text-gray-700 dark:text-gray-300"},toDisplayString(unref(storeLabels)[ne]||ne),9,_hoisted_5$b)]))),128))])):(openBlock(),createElementBlock("div",_hoisted_6$9,[...T[8]||(T[8]=[createBaseVNode("p",{class:"text-sm text-gray-500 dark:text-gray-400"}," 加载中... ",-1)])]))]),createBaseVNode("div",_hoisted_7$6,[createBaseVNode("p",_hoisted_8$6,[T[10]||(T[10]=createBaseVNode("span",null,"当前 JSON 预览",-1)),createVNode(unref(Expand),{class:"absolute right-2 top-2 cursor-pointer p-1 text-gray-500 dark:text-gray-400",onClick:T[0]||(T[0]=Y=>S.value=!0)})]),createBaseVNode("div",_hoisted_9$4,[createBaseVNode("pre",_hoisted_10$2,toDisplayString(JSON.stringify(unref(_),null,2)),1)])]),createBaseVNode("div",_hoisted_11$2,[createVNode(ee,{type:"primary",disabled:Object.values(unref(s).selected).every(Y=>!Y),onClick:h},{default:withCtx(()=>[...T[11]||(T[11]=[createTextVNode(" 导出选中配置 ",-1)])]),_:1},8,["disabled"])])])]),_:1}),createVNode(J,{value:"import"},{default:withCtx(()=>[createBaseVNode("div",_hoisted_12$2,[createBaseVNode("div",_hoisted_13$2,[createBaseVNode("p",_hoisted_14$2,[T[12]||(T[12]=createBaseVNode("span",null,"导入 JSON 配置文件",-1)),createVNode(unref(Expand),{class:"absolute right-2 top-2 cursor-pointer p-1 text-gray-500 dark:text-gray-400",onClick:T[1]||(T[1]=Y=>S.value=!0)})]),unref(f)?(openBlock(),createElementBlock("div",_hoisted_17$2,[createBaseVNode("pre",_hoisted_18$2,toDisplayString(JSON.stringify(unref(N),null,2)),1)])):(openBlock(),createElementBlock("div",_hoisted_15$2,[createBaseVNode("input",{id:"json-import-input",ref_key:"fileInputRef",ref:F,type:"file",accept:".json",class:"hidden",onChange:Q},null,544),createBaseVNode("label",_hoisted_16$2,[createVNode(unref(CloudUpload),{class:"mb-2 size-16 text-gray-500 dark:text-gray-400"}),T[13]||(T[13]=createBaseVNode("span",{class:"text-sm text-gray-500 dark:text-gray-400"}," 点击或拖拽 JSON 文件到此处 ",-1)),T[14]||(T[14]=createBaseVNode("span",{class:"mt-1 text-xs text-gray-400 dark:text-gray-500"}," 支持格式: .json ",-1))])]))]),createBaseVNode("div",_hoisted_19$1,[T[15]||(T[15]=createBaseVNode("p",{class:"sticky top-0 z-10 bg-white p-2 dark:bg-gray-900"}," 选择要导入的配置项 ",-1)),unref(f)?(openBlock(),createElementBlock("div",_hoisted_20$1,[createBaseVNode("ul",_hoisted_21$1,[(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(b).data,(Y,ne)=>(openBlock(),createElementBlock("li",{key:ne,class:"space-x-2 flex items-center"},[withDirectives(createBaseVNode("input",{id:`import-${ne}`,"onUpdate:modelValue":ue=>unref(b).selected[ne]=ue,type:"checkbox",class:"h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"},null,8,_hoisted_22$1),[[vModelCheckbox,unref(b).selected[ne]]]),createBaseVNode("label",{for:`import-${ne}`,class:"text-sm text-gray-700 dark:text-gray-300"},toDisplayString(unref(storeLabels)[ne]||ne),9,_hoisted_23$1)]))),128))])])):(openBlock(),createElementBlock("div",_hoisted_24$1," 请先导入JSON文件 "))]),createBaseVNode("div",_hoisted_25$1,[createBaseVNode("input",{id:"json-import-input",ref_key:"fileInputRef",ref:F,type:"file",accept:".json",class:"hidden",onChange:Q},null,544),createVNode(ee,{variant:"ghost",class:"mr-2",onClick:P},{default:withCtx(()=>[...T[16]||(T[16]=[createTextVNode(" 重新导入 ",-1)])]),_:1}),createVNode(ee,{disabled:Object.values(unref(b).selected).every(Y=>!Y),onClick:H},{default:withCtx(()=>[...T[17]||(T[17]=[createTextVNode(" 应用选中配置 ",-1)])]),_:1},8,["disabled"])])])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["open"]),createVNode(y,{open:unref(S),"onUpdate:open":T[4]||(T[4]=Y=>S.value=Y)},{default:withCtx(()=>[createVNode(L,{class:"max-h-[90vh] max-w-[90vw] overflow-auto"},{default:withCtx(()=>[createVNode(R,null,{default:withCtx(()=>[createVNode(ce,null,{default:withCtx(()=>[...T[18]||(T[18]=[createTextVNode("JSON 全屏预览",-1)])]),_:1}),createVNode(z,null,{default:withCtx(()=>[...T[19]||(T[19]=[createTextVNode(" 当前配置的完整 JSON 数据 ",-1)])]),_:1})]),_:1}),createBaseVNode("div",_hoisted_26$1,[createBaseVNode("div",_hoisted_27$1,[createBaseVNode("pre",_hoisted_28$1,toDisplayString(JSON.stringify(unref(V),null,2)),1)])]),createVNode(E,null,{default:withCtx(()=>[createVNode(ee,{variant:"outline",onClick:T[3]||(T[3]=Y=>$(JSON.stringify(unref(V),null,2)))},{default:withCtx(()=>[...T[20]||(T[20]=[createTextVNode(" 复制 JSON 到剪贴板 ",-1)])]),_:1})]),_:1})]),_:1})]),_:1},8,["open"])],64)}}}),_hoisted_1$g={class:"mt-4"},_hoisted_2$e={key:0,class:"py-4 text-center"},_hoisted_3$b={key:1,class:"max-h-[400px] flex flex-col overflow-y-auto"},_hoisted_4$b={class:"mb-2 flex items-center gap-2"},_hoisted_5$a=["src"],_hoisted_6$8=["href"],_sfc_main$v=defineComponent({__name:"PostTaskDialog",props:{post:{},open:{type:Boolean}},emits:["update:open"],setup(e,{emit:t}){const n=e,o=t,a=computed({get:()=>n.open,set:d=>o("update:open",d)}),i=ref(null),u=ref(!1);async function l(){if(n.post)try{window.$syncer?.addTask({post:{title:n.post.title,content:n.post.content,markdown:n.post.markdown,thumb:n.post.thumb,desc:n.post.desc},accounts:n.post.accounts.filter(d=>d.checked)},d=>{i.value=d},()=>{u.value=!1})}catch(d){console.error("发布失败:",d)}}return watch(()=>n.open,d=>{d&&l()}),(d,m)=>(openBlock(),createBlock(unref(_sfc_main$1y),{open:unref(a),"onUpdate:open":m[0]||(m[0]=p=>isRef(a)?a.value=p:null)},{default:withCtx(()=>[createVNode(unref(_sfc_main$1x),null,{default:withCtx(()=>[createVNode(unref(_sfc_main$1s),null,{default:withCtx(()=>[createVNode(unref(_sfc_main$1q),null,{default:withCtx(()=>[...m[1]||(m[1]=[createTextVNode("提交发布任务",-1)])]),_:1})]),_:1}),createBaseVNode("div",_hoisted_1$g,[unref(i)?(openBlock(),createElementBlock("div",_hoisted_3$b,[(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(i)?.accounts,p=>(openBlock(),createElementBlock("div",{key:p.uid+p.displayName,class:"border-b py-4 last:border-b-0"},[createBaseVNode("div",_hoisted_4$b,[p.icon?(openBlock(),createElementBlock("img",{key:0,src:p.icon,class:"object-cover h-5 w-5",alt:""},null,8,_hoisted_5$a)):createCommentVNode("",!0),createBaseVNode("span",null,toDisplayString(p.title)+" - "+toDisplayString(p.displayName||p.home),1)]),createBaseVNode("div",{class:normalizeClass(["w-full flex-1 gap-2 overflow-auto pl-7 text-sm",{"text-yellow-600":p.status==="uploading","text-red-600":p.status==="failed","text-green-600":p.status==="done"}])},[p.status==="uploading"?(openBlock(),createElementBlock(Fragment,{key:0},[createTextVNode(toDisplayString(p.msg||"发布中"),1)],64)):createCommentVNode("",!0),p.status==="failed"?(openBlock(),createElementBlock(Fragment,{key:1},[createTextVNode(" 同步失败, 错误内容："+toDisplayString(p.error),1)],64)):createCommentVNode("",!0),p.status==="done"&&p.editResp?(openBlock(),createElementBlock(Fragment,{key:2},[m[2]||(m[2]=createTextVNode(" 同步成功 ",-1)),p.type!=="wordpress"&&p.editResp?(openBlock(),createElementBlock("a",{key:0,href:p.editResp.draftLink,class:"ml-2 text-blue-500 hover:underline",referrerPolicy:"no-referrer",target:"_blank"},"查看草稿",8,_hoisted_6$8)):createCommentVNode("",!0)],64)):createCommentVNode("",!0)],2)]))),128))])):(openBlock(),createElementBlock("div",_hoisted_2$e," 等待发布.. "))])]),_:1})]),_:1},8,["open"]))}}),__unplugin_components_13=_export_sfc(_sfc_main$v,[["__scopeId","data-v-4d169344"]]),_sfc_main$u=defineComponent({__name:"AlertDescription",props:{class:{type:[Boolean,null,String,Object,Array]}},setup(e){const t=e;return(n,o)=>(openBlock(),createElementBlock("div",{class:normalizeClass(unref(cn)("text-sm [&_p]:leading-relaxed",t.class))},[renderSlot(n.$slots,"default")],2))}}),_sfc_main$t=defineComponent({__name:"AlertTitle",props:{class:{type:[Boolean,null,String,Object,Array]}},setup(e){const t=e;return(n,o)=>(openBlock(),createElementBlock("h5",{class:normalizeClass(unref(cn)("mb-1 font-medium leading-none tracking-tight",t.class))},[renderSlot(n.$slots,"default")],2))}}),alertVariants=cva("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),_sfc_main$s=defineComponent({__name:"Alert",props:{class:{type:[Boolean,null,String,Object,Array]},variant:{}},setup(e){const t=e;return(n,o)=>(openBlock(),createElementBlock("div",{class:normalizeClass(unref(cn)(unref(alertVariants)({variant:e.variant}),t.class)),role:"alert"},[renderSlot(n.$slots,"default")],2))}}),_hoisted_1$f={class:"w-full flex items-center gap-4"},_hoisted_2$d={class:"w-full flex items-center gap-4"},_hoisted_3$a={class:"w-full flex items-start gap-4"},_hoisted_4$a={class:"w-full flex items-start gap-4"},_hoisted_5$9={class:"flex flex-1 flex-col gap-2"},_hoisted_6$7={class:"flex flex-row items-center gap-4"},_hoisted_7$5={class:"flex items-center gap-2 text-sm"},_hoisted_8$5=["src"],_sfc_main$r=defineComponent({inheritAttrs:!1,__name:"PostInfo",setup(e){const t=ref(!1),n=ref(!1),o=ref([]),a=ref(!1),i=ref({title:"",desc:"",thumb:"",content:"",markdown:"",accounts:[]}),u=computed(()=>n.value&&i.value.accounts.some(w=>w.checked));async function l(){return new Promise(w=>{window.$syncer?.getAccounts(s=>{o.value=s.map(C=>({...C,checked:!0})),w()})})}function d(){i.value.accounts=i.value.accounts.filter(w=>w.checked),a.value=!0,t.value=!1}function m(w){w||(t.value=!1)}function p(){if(window.$syncer!==void 0){n.value=!0;return}let w=0;const s=setInterval(async()=>{if(window.$syncer!==void 0){n.value=!0,await l(),clearInterval(s);return}w++,w>10&&clearInterval(s)},500)}return onBeforeMount(()=>{p()}),(w,s)=>{const C=_sfc_main$1q,x=_sfc_main$1r,_=_sfc_main$1s,b=_sfc_main$t,f=_sfc_main$u,N=_sfc_main$s,h=_sfc_main$1t,S=_sfc_main$1u,V=_sfc_main$1v,$=_sfc_main$1E,F=_sfc_main$1w,P=_sfc_main$1x,Q=_sfc_main$1y,H=__unplugin_components_13;return openBlock(),createElementBlock("div",normalizeProps(guardReactiveProps(w.$attrs)),[createVNode(Q,{open:unref(t),"onUpdate:open":[s[4]||(s[4]=k=>isRef(t)?t.value=k:null),m]},{default:withCtx(()=>[createVNode(P,null,{default:withCtx(()=>[createVNode(_,null,{default:withCtx(()=>[createVNode(C,null,{default:withCtx(()=>[...s[6]||(s[6]=[createTextVNode("发布",-1)])]),_:1}),createVNode(x,null,{default:withCtx(()=>[...s[7]||(s[7]=[createTextVNode(" 将文章发布到多个平台 ",-1)])]),_:1})]),_:1}),createVNode(N,null,{default:withCtx(()=>[createVNode(unref(Info),{class:"h-4 w-4"}),createVNode(b,null,{default:withCtx(()=>[...s[8]||(s[8]=[createTextVNode("提示",-1)])]),_:1}),createVNode(f,null,{default:withCtx(()=>[...s[9]||(s[9]=[createTextVNode(" 此功能由第三方浏览器插件支持，本平台不保证安全性及同步准确度。 ",-1)])]),_:1})]),_:1}),unref(n)?createCommentVNode("",!0):(openBlock(),createBlock(N,{key:0},{default:withCtx(()=>[createVNode(unref(Info),{class:"h-4 w-4"}),createVNode(b,null,{default:withCtx(()=>[...s[10]||(s[10]=[createTextVNode("未检测到插件",-1)])]),_:1}),createVNode(f,null,{default:withCtx(()=>[s[12]||(s[12]=createTextVNode(" 请安装 ",-1)),createVNode(unref(O),{as:"a",class:"text-blue-500",href:"https://www.wechatsync.com/?utm_source=syncicon#install",target:"_blank"},{default:withCtx(()=>[...s[11]||(s[11]=[createTextVNode(" 文章同步助手 ",-1)])]),_:1}),s[13]||(s[13]=createTextVNode(" 插件 ",-1))]),_:1})]),_:1})),createBaseVNode("div",_hoisted_1$f,[createVNode(h,{for:"thumb",class:"w-10 text-end"},{default:withCtx(()=>[...s[14]||(s[14]=[createTextVNode(" 封面 ",-1)])]),_:1}),createVNode(S,{id:"thumb",modelValue:unref(i).thumb,"onUpdate:modelValue":s[0]||(s[0]=k=>unref(i).thumb=k),placeholder:"自动提取第一张图"},null,8,["modelValue"])]),createBaseVNode("div",_hoisted_2$d,[createVNode(h,{for:"title",class:"w-10 text-end"},{default:withCtx(()=>[...s[15]||(s[15]=[createTextVNode(" 标题 ",-1)])]),_:1}),createVNode(S,{id:"title",modelValue:unref(i).title,"onUpdate:modelValue":s[1]||(s[1]=k=>unref(i).title=k),placeholder:"自动提取第一个标题"},null,8,["modelValue"])]),createBaseVNode("div",_hoisted_3$a,[createVNode(h,{for:"desc",class:"w-10 text-end"},{default:withCtx(()=>[...s[16]||(s[16]=[createTextVNode(" 描述 ",-1)])]),_:1}),createVNode(V,{id:"desc",modelValue:unref(i).desc,"onUpdate:modelValue":s[2]||(s[2]=k=>unref(i).desc=k),placeholder:"自动提取第一个段落"},null,8,["modelValue"])]),createBaseVNode("div",_hoisted_4$a,[createVNode(h,{class:"w-10 text-end"},{default:withCtx(()=>[...s[17]||(s[17]=[createTextVNode(" 账号 ",-1)])]),_:1}),createBaseVNode("div",_hoisted_5$9,[(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(i).accounts,k=>(openBlock(),createElementBlock("div",{key:k.uid+k.displayName,class:"flex items-center gap-2"},[createBaseVNode("label",_hoisted_6$7,[createVNode(unref(Wv),{checked:k.checked,"onUpdate:checked":T=>k.checked=T,class:"bg-background hover:bg-muted h-[25px] w-[25px] flex appearance-none items-center justify-center border border-gray-200 rounded-[4px] outline-hidden"},{default:withCtx(()=>[createVNode(unref(jv),null,{default:withCtx(()=>[k.checked?(openBlock(),createBlock(unref(Check),{key:0,class:"h-4 w-4"})):createCommentVNode("",!0)]),_:2},1024)]),_:2},1032,["checked","onUpdate:checked"]),createBaseVNode("span",_hoisted_7$5,[createBaseVNode("img",{src:k.icon,alt:"",class:"inline-block h-[20px] w-[20px]"},null,8,_hoisted_8$5),createTextVNode(" "+toDisplayString(k.title)+" - "+toDisplayString(k.displayName??k.home),1)])])]))),128))])]),createVNode(F,null,{default:withCtx(()=>[createVNode($,{variant:"outline",onClick:s[3]||(s[3]=k=>t.value=!1)},{default:withCtx(()=>[...s[18]||(s[18]=[createTextVNode(" 取 消 ",-1)])]),_:1}),createVNode($,{disabled:!unref(u),onClick:d},{default:withCtx(()=>[...s[19]||(s[19]=[createTextVNode(" 确 定 ",-1)])]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["open"]),createVNode(H,{open:unref(a),"onUpdate:open":s[5]||(s[5]=k=>isRef(a)?a.value=k:null),post:unref(i)},null,8,["open","post"])],16)}}}),_sfc_main$q=defineComponent({__name:"MenubarMenu",props:{value:{}},setup(e){const t=e;return(n,o)=>(openBlock(),createBlock(unref(Gh),normalizeProps(guardReactiveProps(t)),{default:withCtx(()=>[renderSlot(n.$slots,"default")]),_:3},16))}}),_sfc_main$p=defineComponent({__name:"MenubarContent",props:{forceMount:{type:Boolean},loop:{type:Boolean},side:{},sideOffset:{default:8},align:{default:"start"},alignOffset:{default:-4},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},sticky:{},hideWhenDetached:{type:Boolean},updatePositionStrategy:{},prioritizePosition:{type:Boolean},asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]}},setup(e){const t=e,n=computed(()=>{const{class:a,...i}=t;return i}),o=Ot(n);return(a,i)=>(openBlock(),createBlock(unref(Yh),null,{default:withCtx(()=>[createVNode(unref(Xh),mergeProps(unref(o),{class:unref(cn)("z-50 min-w-48 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t.class)}),{default:withCtx(()=>[renderSlot(a.$slots,"default")]),_:3},16,["class"])]),_:3}))}}),_sfc_main$o=defineComponent({__name:"MenubarTrigger",props:{disabled:{type:Boolean},asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]}},setup(e){const t=e,n=computed(()=>{const{class:a,...i}=t;return i}),o=Ot(n);return(a,i)=>(openBlock(),createBlock(unref(qh),mergeProps(unref(o),{class:unref(cn)("flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-hidden hover:bg-accent focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",t.class)}),{default:withCtx(()=>[renderSlot(a.$slots,"default")]),_:3},16,["class"]))}}),_sfc_main$n=defineComponent({__name:"Menubar",props:{modelValue:{},defaultValue:{},dir:{},loop:{type:Boolean},class:{type:[Boolean,null,String,Object,Array]}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,o=t,a=computed(()=>{const{class:u,...l}=n;return l}),i=Se(a,o);return(u,l)=>(openBlock(),createBlock(unref(Uh),mergeProps(unref(i),{class:unref(cn)("flex h-10 items-center gap-x-1 rounded-md border bg-background p-1",n.class)}),{default:withCtx(()=>[renderSlot(u.$slots,"default")]),_:3},16,["class"]))}});let mathInitialized=!1,mathjaxDocument=null;function isExtensionEnvironment$1(){return typeof window<"u"&&window.location.protocol==="chrome-extension:"}function isMathJaxAvailable(){return typeof window<"u"&&typeof window.MathJax<"u"&&typeof window.MathJax.tex2svg=="function"}function isLocalMathJaxReady(){return mathjaxDocument!==null}function initLocalMathJax(){if(mathjaxDocument)return;const e=liteAdaptorExports.liteAdaptor();htmlExports.RegisterHTMLHandler(e);const t=new texExports.TeX({packages:AllPackagesExports.AllPackages,tags:"ams"}),n=new svgExports.SVG({fontCache:"none"});mathjaxDocument=mathjaxExports.mathjax.document("",{InputJax:t,OutputJax:n})}async function initMathJax(){if(!mathInitialized){if(isMathJaxAvailable()){mathInitialized=!0;return}if(isExtensionEnvironment$1()){initLocalMathJax(),mathInitialized=!0;return}mathInitialized=!0}}async function ensureMathJax(){return await initMathJax(),isExtensionEnvironment$1()?isLocalMathJaxReady():isMathJaxAvailable()}function renderMathWithLocalMathJax(e,t){mathjaxDocument||initLocalMathJax();try{const n=mathjaxDocument.convert(e,{display:t});let a=mathjaxDocument.adaptor.outerHTML(n);return t?a=a.replace(/<svg/,'<svg style="display: block; margin: 1em auto;"'):a=a.replace(/<svg/,'<svg style="vertical-align: middle; display: inline-block;"'),a}catch{return`<code class="math-error">${e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code>`}}function renderPendingMathWithKaTeX(e=document){isLocalMathJaxReady()||initLocalMathJax(),e.querySelectorAll(".math-pending").forEach(n=>{const o=n.getAttribute("data-math-tex");if(!o)return;const a=decodeURIComponent(o),i=n.classList.contains("math-block");try{const u=renderMathWithLocalMathJax(a,i);n.innerHTML=u,n.classList.remove("math-pending"),n.removeAttribute("data-math-tex")}catch{}})}function isExtensionEnvironment(){const e=window;return typeof e.chrome<"u"&&typeof e.chrome.runtime<"u"&&typeof e.chrome.runtime.sendMessage=="function"}function getChrome(){return window.chrome}function sendMessage(e){const t=getChrome();return new Promise((n,o)=>{t.runtime.sendMessage(e,a=>{const i=t.runtime.lastError;if(i){o(new Error(i.message));return}n(a)})})}async function publishToWechat(e){if(console.log("[wechat-publish] 开始发布到微信公众号"),console.log("[wechat-publish] 标题:",e.title),console.log("[wechat-publish] 内容长度:",e.content.length,"字符"),!isExtensionEnvironment())return window.open("https://mp.weixin.qq.com/","_blank"),{success:!1,message:"请在 SyncCaster Chrome 扩展环境中使用此功能"};if(!e.content)return{success:!1,message:"正文为空，请先生成预览内容"};try{const t=await sendMessage({type:"WECHAT_PUBLISH_FROM_MD_EDITOR",data:e});return t?.success?{success:!0,message:t?.message||'已打开微信公众号发文页面，请点击上方"复制"按钮复制内容后手动粘贴',url:t?.url,meta:t?.meta,needManualCopy:t?.needManualCopy}:t?.needManualCopy?{success:!1,message:t?.message||'请点击上方"复制"按钮复制内容，然后在微信公众号发文页面手动粘贴',needManualCopy:!0,url:t?.url}:{success:!1,message:t?.error||t?.message||"发布失败，请确保已登录微信公众号后台"}}catch(t){return console.error("[wechat-publish] 发布失败:",t),{success:!1,message:t?.message||"发布失败，请重试"}}}const _sfc_main$m=defineComponent({__name:"MenubarSub",props:{defaultOpen:{type:Boolean},open:{type:Boolean}},emits:["update:open"],setup(e,{emit:t}){const a=Se(e,t);return(i,u)=>(openBlock(),createBlock(unref(sy),normalizeProps(guardReactiveProps(unref(a))),{default:withCtx(()=>[renderSlot(i.$slots,"default")]),_:3},16))}}),_sfc_main$l=defineComponent({__name:"MenubarSubContent",props:{forceMount:{type:Boolean},loop:{type:Boolean},sideOffset:{},alignOffset:{},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},sticky:{},hideWhenDetached:{type:Boolean},updatePositionStrategy:{},prioritizePosition:{type:Boolean},asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","entryFocus","openAutoFocus","closeAutoFocus"],setup(e,{emit:t}){const n=e,o=t,a=computed(()=>{const{class:u,...l}=n;return l}),i=Se(a,o);return(u,l)=>(openBlock(),createBlock(unref(Yh),null,{default:withCtx(()=>[createVNode(unref(ry),mergeProps(unref(i),{class:unref(cn)("z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n.class)}),{default:withCtx(()=>[renderSlot(u.$slots,"default")]),_:3},16,["class"])]),_:3}))}}),_sfc_main$k=defineComponent({__name:"MenubarSeparator",props:{asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]}},setup(e){const t=e,n=computed(()=>{const{class:a,...i}=t;return i}),o=Ot(n);return(a,i)=>(openBlock(),createBlock(unref(ey),mergeProps({class:unref(cn)("-mx-1 my-1 h-px bg-muted",t.class)},unref(o)),null,16,["class"]))}}),_sfc_main$j=defineComponent({__name:"MenubarItem",props:{disabled:{type:Boolean},textValue:{},asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]},inset:{type:Boolean}},emits:["select"],setup(e,{emit:t}){const n=e,o=t,a=computed(()=>{const{class:u,...l}=n;return l}),i=Se(a,o);return(u,l)=>(openBlock(),createBlock(unref(Jh),mergeProps(unref(i),{class:unref(cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50",e.inset&&"pl-8",n.class)}),{default:withCtx(()=>[renderSlot(u.$slots,"default")]),_:3},16,["class"]))}}),_sfc_main$i=defineComponent({__name:"MenubarShortcut",props:{class:{type:[Boolean,null,String,Object,Array]}},setup(e){const t=e;return(n,o)=>(openBlock(),createElementBlock("span",{class:normalizeClass(unref(cn)("ml-auto text-xs tracking-widest text-muted-foreground",t.class))},[renderSlot(n.$slots,"default")],2))}}),_sfc_main$h=defineComponent({__name:"MenubarSubTrigger",props:{disabled:{type:Boolean},textValue:{},asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]},inset:{type:Boolean}},setup(e){const t=e,n=computed(()=>{const{class:a,...i}=t;return i}),o=Ot(n);return(a,i)=>(openBlock(),createBlock(unref(iy),mergeProps(unref(o),{class:unref(cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",e.inset&&"pl-8",t.class)}),{default:withCtx(()=>[renderSlot(a.$slots,"default"),createVNode(unref(ChevronRight),{class:"ml-auto h-4 w-4"})]),_:3},16,["class"]))}}),_hoisted_1$e={key:1},_hoisted_2$c={class:"mx-1 bg-gray-2 dark:bg-stone-9"},_hoisted_3$9={class:"mx-1 bg-gray-2 dark:bg-stone-9"},_hoisted_4$9={class:"mx-1 bg-gray-2 dark:bg-stone-9"},_hoisted_5$8={class:"mx-1 bg-gray-2 dark:bg-stone-9"},_hoisted_6$6={class:"mx-1 bg-gray-2 dark:bg-stone-9"},_hoisted_7$4={class:"mx-1 bg-gray-2 dark:bg-stone-9"},_hoisted_8$4={class:"mx-1 bg-gray-2 dark:bg-stone-9"},_hoisted_9$3={class:"mx-1 bg-gray-2 dark:bg-stone-9"},_hoisted_10$1={key:1},_hoisted_11$1={class:"mx-1 bg-gray-2 dark:bg-stone-9"},_hoisted_12$1={class:"mx-1 bg-gray-2 dark:bg-stone-9"},_hoisted_13$1={class:"mx-1 bg-gray-2 dark:bg-stone-9"},_hoisted_14$1={class:"mx-1 bg-gray-2 dark:bg-stone-9"},_hoisted_15$1={class:"mx-1 bg-gray-2 dark:bg-stone-9"},_hoisted_16$1={class:"mx-1 bg-gray-2 dark:bg-stone-9"},_hoisted_17$1={class:"mx-1 bg-gray-2 dark:bg-stone-9"},_hoisted_18$1={class:"mx-1 bg-gray-2 dark:bg-stone-9"},_sfc_main$g=defineComponent({__name:"EditDropdown",props:{asSub:{type:Boolean,default:!1},iconOnly:{type:Boolean,default:!1}},emits:["copy"],setup(e,{emit:t}){const n=e,o=t,{asSub:a}=toRefs(n),i=useEditorStore(),u=usePostStore(),l=useUIStore(),{editor:d}=storeToRefs(i);async function m(){const b=await i.formatContent();b&&u.currentPost&&u.updatePostContent(u.currentPostId,b)}async function p(){const b=i.getSelection();copyPlain(b)}async function w(){try{const b=await navigator.clipboard.readText();i.replaceSelection(b)}catch(b){console.log("粘贴失败",b)}}function s(){if(d.value)try{const b=toRaw(d.value);undoAction(b),b.focus()}catch(b){console.error("Undo failed:",b)}}function C(){if(d.value)try{const b=toRaw(d.value);redoAction(b),b.focus()}catch(b){console.error("Redo failed:",b)}}function x(){if(d.value){const b=d.value.state.selection.main,f=d.value.state.doc.sliceString(b.from,b.to).trim();l.openSearchTab(f)}}function _(){if(d.value){const b=d.value.state.selection.main,f=d.value.state.doc.sliceString(b.from,b.to).trim();l.openSearchTab(f,!0)}}return(b,f)=>{const N=_sfc_main$h,h=_sfc_main$i,S=_sfc_main$j,V=_sfc_main$k,$=_sfc_main$l,F=_sfc_main$m,P=_sfc_main$o,Q=_sfc_main$p,H=_sfc_main$q;return unref(a)?(openBlock(),createBlock(F,{key:0},{default:withCtx(()=>[createVNode(N,{class:normalizeClass({"p-2":e.iconOnly}),title:e.iconOnly?"编辑":void 0,"aria-label":e.iconOnly?"编辑":void 0},{default:withCtx(()=>[e.iconOnly?(openBlock(),createBlock(unref(Pencil),{key:0,class:"size-4"})):(openBlock(),createElementBlock("span",_hoisted_1$e,"编辑"))]),_:1},8,["class","title","aria-label"]),createVNode($,{class:"w-64"},{default:withCtx(()=>[createVNode(S,{onClick:f[0]||(f[0]=k=>s())},{default:withCtx(()=>[createVNode(unref(Undo2),{class:"mr-2 h-4 w-4"}),f[23]||(f[23]=createTextVNode(" 撤销 ",-1)),createVNode(h,null,{default:withCtx(()=>[createBaseVNode("kbd",_hoisted_2$c,toDisplayString(unref(ctrlSign)),1),f[22]||(f[22]=createBaseVNode("kbd",{class:"mx-1 bg-gray-2 dark:bg-stone-9"},"Z",-1))]),_:1})]),_:1}),createVNode(S,{onClick:f[1]||(f[1]=k=>C())},{default:withCtx(()=>[createVNode(unref(Redo2),{class:"mr-2 h-4 w-4"}),f[25]||(f[25]=createTextVNode(" 重做 ",-1)),createVNode(h,null,{default:withCtx(()=>[createBaseVNode("kbd",_hoisted_3$9,toDisplayString(unref(ctrlSign)),1),f[24]||(f[24]=createBaseVNode("kbd",{class:"mx-1 bg-gray-2 dark:bg-stone-9"},"Y",-1))]),_:1})]),_:1}),createVNode(V),createVNode(F,null,{default:withCtx(()=>[createVNode(N,null,{default:withCtx(()=>[createVNode(unref(Copy),{class:"mr-2 h-4 w-4"}),f[26]||(f[26]=createTextVNode(" 复制 ",-1))]),_:1}),createVNode($,null,{default:withCtx(()=>[createVNode(S,{onClick:f[2]||(f[2]=k=>o("copy","html"))},{default:withCtx(()=>[...f[27]||(f[27]=[createTextVNode(" HTML 格式 ",-1)])]),_:1}),createVNode(S,{onClick:f[3]||(f[3]=k=>o("copy","html-without-style"))},{default:withCtx(()=>[...f[28]||(f[28]=[createTextVNode(" HTML 格式（无样式） ",-1)])]),_:1}),createVNode(S,{onClick:f[4]||(f[4]=k=>o("copy","html-and-style"))},{default:withCtx(()=>[...f[29]||(f[29]=[createTextVNode(" HTML 格式（兼容样式） ",-1)])]),_:1}),createVNode(S,{onClick:f[5]||(f[5]=k=>o("copy","md"))},{default:withCtx(()=>[...f[30]||(f[30]=[createTextVNode(" MD 格式 ",-1)])]),_:1}),createVNode(V),createVNode(S,{onClick:f[6]||(f[6]=k=>p())},{default:withCtx(()=>[f[32]||(f[32]=createTextVNode(" 复制选中内容 ",-1)),createVNode(h,null,{default:withCtx(()=>[createBaseVNode("kbd",_hoisted_4$9,toDisplayString(unref(ctrlSign)),1),f[31]||(f[31]=createBaseVNode("kbd",{class:"mx-1 bg-gray-2 dark:bg-stone-9"},"C",-1))]),_:1})]),_:1})]),_:1})]),_:1}),createVNode(S,{onClick:f[7]||(f[7]=k=>w())},{default:withCtx(()=>[createVNode(unref(ClipboardPaste),{class:"mr-2 h-4 w-4"}),f[34]||(f[34]=createTextVNode(" 粘贴 ",-1)),createVNode(h,null,{default:withCtx(()=>[createBaseVNode("kbd",_hoisted_5$8,toDisplayString(unref(ctrlSign)),1),f[33]||(f[33]=createBaseVNode("kbd",{class:"mx-1 bg-gray-2 dark:bg-stone-9"},"V",-1))]),_:1})]),_:1}),createVNode(V),createVNode(S,{onClick:f[8]||(f[8]=k=>m())},{default:withCtx(()=>[createVNode(unref(WandSparkles),{class:"mr-2 h-4 w-4"}),f[36]||(f[36]=createTextVNode(" 格式化文档 ",-1)),createVNode(h,null,{default:withCtx(()=>[createBaseVNode("kbd",_hoisted_6$6,toDisplayString(unref(altSign)),1),createBaseVNode("kbd",_hoisted_7$4,toDisplayString(unref(shiftSign)),1),f[35]||(f[35]=createBaseVNode("kbd",{class:"mx-1 bg-gray-2 dark:bg-stone-9"},"F",-1))]),_:1})]),_:1}),createVNode(V),createVNode(S,{onClick:f[9]||(f[9]=k=>x())},{default:withCtx(()=>[createVNode(unref(Search),{class:"mr-2 h-4 w-4"}),f[38]||(f[38]=createTextVNode(" 查找 ",-1)),createVNode(h,null,{default:withCtx(()=>[createBaseVNode("kbd",_hoisted_8$4,toDisplayString(unref(ctrlSign)),1),f[37]||(f[37]=createBaseVNode("kbd",{class:"mx-1 bg-gray-2 dark:bg-stone-9"},"F",-1))]),_:1})]),_:1}),createVNode(S,{onClick:f[10]||(f[10]=k=>_())},{default:withCtx(()=>[createVNode(unref(Replace),{class:"mr-2 h-4 w-4"}),f[40]||(f[40]=createTextVNode(" 替换 ",-1)),createVNode(h,null,{default:withCtx(()=>[createBaseVNode("kbd",_hoisted_9$3,toDisplayString(unref(ctrlSign)),1),f[39]||(f[39]=createBaseVNode("kbd",{class:"mx-1 bg-gray-2 dark:bg-stone-9"},"H",-1))]),_:1})]),_:1})]),_:1})]),_:1})):(openBlock(),createBlock(H,{key:1},{default:withCtx(()=>[createVNode(P,{class:normalizeClass({"p-2":e.iconOnly}),"aria-label":e.iconOnly?"编辑":void 0,title:e.iconOnly?"编辑":void 0},{default:withCtx(()=>[e.iconOnly?(openBlock(),createBlock(unref(Pencil),{key:0,class:"size-4"})):(openBlock(),createElementBlock("span",_hoisted_10$1,"编辑"))]),_:1},8,["class","aria-label","title"]),createVNode(Q,{class:"w-64",align:"start"},{default:withCtx(()=>[createVNode(S,{onClick:f[11]||(f[11]=k=>s())},{default:withCtx(()=>[createVNode(unref(Undo2),{class:"mr-2 h-4 w-4"}),f[42]||(f[42]=createTextVNode(" 撤销 ",-1)),createVNode(h,null,{default:withCtx(()=>[createBaseVNode("kbd",_hoisted_11$1,toDisplayString(unref(ctrlSign)),1),f[41]||(f[41]=createBaseVNode("kbd",{class:"mx-1 bg-gray-2 dark:bg-stone-9"},"Z",-1))]),_:1})]),_:1}),createVNode(S,{onClick:f[12]||(f[12]=k=>C())},{default:withCtx(()=>[createVNode(unref(Redo2),{class:"mr-2 h-4 w-4"}),f[44]||(f[44]=createTextVNode(" 重做 ",-1)),createVNode(h,null,{default:withCtx(()=>[createBaseVNode("kbd",_hoisted_12$1,toDisplayString(unref(ctrlSign)),1),f[43]||(f[43]=createBaseVNode("kbd",{class:"mx-1 bg-gray-2 dark:bg-stone-9"},"Y",-1))]),_:1})]),_:1}),createVNode(V),createVNode(F,null,{default:withCtx(()=>[createVNode(N,null,{default:withCtx(()=>[createVNode(unref(Copy),{class:"mr-2 h-4 w-4"}),f[45]||(f[45]=createTextVNode(" 复制 ",-1))]),_:1}),createVNode($,null,{default:withCtx(()=>[createVNode(S,{onClick:f[13]||(f[13]=k=>o("copy","html"))},{default:withCtx(()=>[...f[46]||(f[46]=[createTextVNode(" HTML 格式 ",-1)])]),_:1}),createVNode(S,{onClick:f[14]||(f[14]=k=>o("copy","html-without-style"))},{default:withCtx(()=>[...f[47]||(f[47]=[createTextVNode(" HTML 格式（无样式） ",-1)])]),_:1}),createVNode(S,{onClick:f[15]||(f[15]=k=>o("copy","html-and-style"))},{default:withCtx(()=>[...f[48]||(f[48]=[createTextVNode(" HTML 格式（兼容样式） ",-1)])]),_:1}),createVNode(S,{onClick:f[16]||(f[16]=k=>o("copy","md"))},{default:withCtx(()=>[...f[49]||(f[49]=[createTextVNode(" MD 格式 ",-1)])]),_:1}),createVNode(V),createVNode(S,{onClick:f[17]||(f[17]=k=>p())},{default:withCtx(()=>[f[51]||(f[51]=createTextVNode(" 复制选中内容 ",-1)),createVNode(h,null,{default:withCtx(()=>[createBaseVNode("kbd",_hoisted_13$1,toDisplayString(unref(ctrlSign)),1),f[50]||(f[50]=createBaseVNode("kbd",{class:"mx-1 bg-gray-2 dark:bg-stone-9"},"C",-1))]),_:1})]),_:1})]),_:1})]),_:1}),createVNode(S,{onClick:f[18]||(f[18]=k=>w())},{default:withCtx(()=>[createVNode(unref(ClipboardPaste),{class:"mr-2 h-4 w-4"}),f[53]||(f[53]=createTextVNode(" 粘贴 ",-1)),createVNode(h,null,{default:withCtx(()=>[createBaseVNode("kbd",_hoisted_14$1,toDisplayString(unref(ctrlSign)),1),f[52]||(f[52]=createBaseVNode("kbd",{class:"mx-1 bg-gray-2 dark:bg-stone-9"},"V",-1))]),_:1})]),_:1}),createVNode(V),createVNode(S,{onClick:f[19]||(f[19]=k=>m())},{default:withCtx(()=>[createVNode(unref(WandSparkles),{class:"mr-2 h-4 w-4"}),f[55]||(f[55]=createTextVNode(" 格式化文档 ",-1)),createVNode(h,null,{default:withCtx(()=>[createBaseVNode("kbd",_hoisted_15$1,toDisplayString(unref(altSign)),1),createBaseVNode("kbd",_hoisted_16$1,toDisplayString(unref(shiftSign)),1),f[54]||(f[54]=createBaseVNode("kbd",{class:"mx-1 bg-gray-2 dark:bg-stone-9"},"F",-1))]),_:1})]),_:1}),createVNode(V),createVNode(S,{onClick:f[20]||(f[20]=k=>x())},{default:withCtx(()=>[createVNode(unref(Search),{class:"mr-2 h-4 w-4"}),f[57]||(f[57]=createTextVNode(" 查找 ",-1)),createVNode(h,null,{default:withCtx(()=>[createBaseVNode("kbd",_hoisted_17$1,toDisplayString(unref(ctrlSign)),1),f[56]||(f[56]=createBaseVNode("kbd",{class:"mx-1 bg-gray-2 dark:bg-stone-9"},"F",-1))]),_:1})]),_:1}),createVNode(S,{onClick:f[21]||(f[21]=k=>_())},{default:withCtx(()=>[createVNode(unref(Replace),{class:"mr-2 h-4 w-4"}),f[59]||(f[59]=createTextVNode(" 替换 ",-1)),createVNode(h,null,{default:withCtx(()=>[createBaseVNode("kbd",_hoisted_18$1,toDisplayString(unref(ctrlSign)),1),f[58]||(f[58]=createBaseVNode("kbd",{class:"mx-1 bg-gray-2 dark:bg-stone-9"},"H",-1))]),_:1})]),_:1})]),_:1})]),_:1}))}}}),_hoisted_1$d={key:1},_hoisted_2$b={key:1},_sfc_main$f=defineComponent({__name:"FileDropdown",props:{asSub:{type:Boolean,default:!1},iconOnly:{type:Boolean,default:!1}},emits:["openEditorState"],setup(e,{emit:t}){const n=e,o=t,{asSub:a}=toRefs(n),i=useEditorStore(),u=useExportStore(),l=useUIStore(),{isOpenPostSlider:d}=storeToRefs(l),{toggleShowTemplateDialog:m}=l,p=useImportMarkdownContent();function w(){o("openEditorState")}function s(){m(!0)}function C(){u.exportEditorContent2HTML()}function x(){u.exportEditorContent2PureHTML(i.getContent())}function _(){u.exportEditorContent2MD(i.getContent())}function b(){u.downloadAsCardImage()}function f(){u.exportEditorContent2PDF()}return(N,h)=>{const S=_sfc_main$h,V=_sfc_main$j,$=_sfc_main$l,F=_sfc_main$m,P=_sfc_main$k,Q=_sfc_main$o,H=_sfc_main$p,k=_sfc_main$q;return unref(a)?(openBlock(),createBlock(F,{key:0},{default:withCtx(()=>[createVNode(S,{class:normalizeClass({"p-2":e.iconOnly}),title:e.iconOnly?"文件":void 0,"aria-label":e.iconOnly?"文件":void 0},{default:withCtx(()=>[e.iconOnly?(openBlock(),createBlock(unref(FileText),{key:0,class:"size-4"})):(openBlock(),createElementBlock("span",_hoisted_1$d,"文件"))]),_:1},8,["class","title","aria-label"]),createVNode($,{class:"w-56"},{default:withCtx(()=>[createVNode(F,null,{default:withCtx(()=>[createVNode(S,null,{default:withCtx(()=>[createVNode(unref(Upload),{class:"mr-2 size-4"}),h[18]||(h[18]=createTextVNode(" 导入 ",-1))]),_:1}),createVNode($,{class:"w-56"},{default:withCtx(()=>[createVNode(V,{onClick:h[0]||(h[0]=T=>unref(p)())},{default:withCtx(()=>[createVNode(unref(FileText),{class:"mr-2 size-4"}),h[19]||(h[19]=createTextVNode(" 导入 Markdown ",-1))]),_:1})]),_:1})]),_:1}),createVNode(F,null,{default:withCtx(()=>[createVNode(S,null,{default:withCtx(()=>[createVNode(unref(Download),{class:"mr-2 size-4"}),h[20]||(h[20]=createTextVNode(" 导出 ",-1))]),_:1}),createVNode($,{class:"w-56"},{default:withCtx(()=>[createVNode(V,{onClick:h[1]||(h[1]=T=>_())},{default:withCtx(()=>[createVNode(unref(FileText),{class:"mr-2 size-4"}),h[21]||(h[21]=createTextVNode(" Markdown 文件 ",-1))]),_:1}),createVNode(P),createVNode(V,{onClick:h[2]||(h[2]=T=>C())},{default:withCtx(()=>[createVNode(unref(FileCode),{class:"mr-2 size-4"}),h[22]||(h[22]=createTextVNode(" HTML 文件 ",-1))]),_:1}),createVNode(V,{onClick:h[3]||(h[3]=T=>x())},{default:withCtx(()=>[createVNode(unref(FileCode),{class:"mr-2 size-4"}),h[23]||(h[23]=createTextVNode(" HTML（无样式） ",-1))]),_:1}),createVNode(P),createVNode(V,{onClick:h[4]||(h[4]=T=>f())},{default:withCtx(()=>[createVNode(unref(FileText),{class:"mr-2 size-4"}),h[24]||(h[24]=createTextVNode(" PDF 文档 ",-1))]),_:1}),createVNode(V,{onClick:h[5]||(h[5]=T=>b())},{default:withCtx(()=>[createVNode(unref(Download),{class:"mr-2 size-4"}),h[25]||(h[25]=createTextVNode(" PNG 图片 ",-1))]),_:1})]),_:1})]),_:1}),createVNode(P),createVNode(V,{onClick:h[6]||(h[6]=T=>s())},{default:withCtx(()=>[createVNode(unref(Package),{class:"mr-2 size-4"}),h[26]||(h[26]=createTextVNode(" 模板管理 ",-1))]),_:1}),createVNode(V,{onClick:h[7]||(h[7]=T=>d.value=!unref(d))},{default:withCtx(()=>[createVNode(unref(FolderKanban),{class:"mr-2 size-4"}),h[27]||(h[27]=createTextVNode(" 内容管理 ",-1))]),_:1}),createVNode(P),createVNode(V,{onClick:h[8]||(h[8]=T=>w())},{default:withCtx(()=>[createVNode(unref(FileCog),{class:"mr-2 size-4"}),h[28]||(h[28]=createTextVNode(" 项目配置 ",-1))]),_:1})]),_:1})]),_:1})):(openBlock(),createBlock(k,{key:1},{default:withCtx(()=>[createVNode(Q,{class:normalizeClass({"p-2":e.iconOnly}),"aria-label":e.iconOnly?"文件":void 0,title:e.iconOnly?"文件":void 0},{default:withCtx(()=>[e.iconOnly?(openBlock(),createBlock(unref(FileText),{key:0,class:"size-4"})):(openBlock(),createElementBlock("span",_hoisted_2$b,"文件"))]),_:1},8,["class","aria-label","title"]),createVNode(H,{class:"w-56",align:"start"},{default:withCtx(()=>[createVNode(F,null,{default:withCtx(()=>[createVNode(S,null,{default:withCtx(()=>[createVNode(unref(Upload),{class:"mr-2 size-4"}),h[29]||(h[29]=createTextVNode(" 导入 ",-1))]),_:1}),createVNode($,{class:"w-56"},{default:withCtx(()=>[createVNode(V,{onClick:h[9]||(h[9]=T=>unref(p)())},{default:withCtx(()=>[createVNode(unref(FileText),{class:"mr-2 size-4"}),h[30]||(h[30]=createTextVNode(" 导入 Markdown ",-1))]),_:1})]),_:1})]),_:1}),createVNode(F,null,{default:withCtx(()=>[createVNode(S,null,{default:withCtx(()=>[createVNode(unref(Download),{class:"mr-2 size-4"}),h[31]||(h[31]=createTextVNode(" 导出 ",-1))]),_:1}),createVNode($,{class:"w-56"},{default:withCtx(()=>[createVNode(V,{onClick:h[10]||(h[10]=T=>_())},{default:withCtx(()=>[createVNode(unref(FileText),{class:"mr-2 size-4"}),h[32]||(h[32]=createTextVNode(" Markdown 文件 ",-1))]),_:1}),createVNode(P),createVNode(V,{onClick:h[11]||(h[11]=T=>C())},{default:withCtx(()=>[createVNode(unref(FileCode),{class:"mr-2 size-4"}),h[33]||(h[33]=createTextVNode(" HTML 文件 ",-1))]),_:1}),createVNode(V,{onClick:h[12]||(h[12]=T=>x())},{default:withCtx(()=>[createVNode(unref(FileCode),{class:"mr-2 size-4"}),h[34]||(h[34]=createTextVNode(" HTML（无样式） ",-1))]),_:1}),createVNode(P),createVNode(V,{onClick:h[13]||(h[13]=T=>f())},{default:withCtx(()=>[createVNode(unref(FileText),{class:"mr-2 size-4"}),h[35]||(h[35]=createTextVNode(" PDF 文档 ",-1))]),_:1}),createVNode(V,{onClick:h[14]||(h[14]=T=>b())},{default:withCtx(()=>[createVNode(unref(Download),{class:"mr-2 size-4"}),h[36]||(h[36]=createTextVNode(" PNG 图片 ",-1))]),_:1})]),_:1})]),_:1}),createVNode(P),createVNode(V,{onClick:h[15]||(h[15]=T=>s())},{default:withCtx(()=>[createVNode(unref(Package),{class:"mr-2 size-4"}),h[37]||(h[37]=createTextVNode(" 模板管理 ",-1))]),_:1}),createVNode(V,{onClick:h[16]||(h[16]=T=>d.value=!unref(d))},{default:withCtx(()=>[createVNode(unref(FolderKanban),{class:"mr-2 size-4"}),h[38]||(h[38]=createTextVNode(" 内容管理 ",-1))]),_:1}),createVNode(P),createVNode(V,{onClick:h[17]||(h[17]=T=>w())},{default:withCtx(()=>[createVNode(unref(FileCog),{class:"mr-2 size-4"}),h[39]||(h[39]=createTextVNode(" 项目配置 ",-1))]),_:1})]),_:1})]),_:1}))}}}),_hoisted_1$c={key:1},_hoisted_2$a={class:"mx-1 bg-gray-2 dark:bg-stone-9"},_hoisted_3$8={class:"mx-1 bg-gray-2 dark:bg-stone-9"},_hoisted_4$8={class:"mx-1 bg-gray-2 dark:bg-stone-9"},_hoisted_5$7={class:"mx-1 bg-gray-2 dark:bg-stone-9"},_hoisted_6$5={class:"mx-1 bg-gray-2 dark:bg-stone-9"},_hoisted_7$3={class:"mx-1 bg-gray-2 dark:bg-stone-9"},_hoisted_8$3={class:"mx-1 bg-gray-2 dark:bg-stone-9"},_hoisted_9$2={class:"mx-1 bg-gray-2 dark:bg-stone-9"},_hoisted_10={class:"mx-1 bg-gray-2 dark:bg-stone-9"},_hoisted_11={class:"mx-1 bg-gray-2 dark:bg-stone-9"},_hoisted_12={class:"mx-1 bg-gray-2 dark:bg-stone-9"},_hoisted_13={class:"mx-1 bg-gray-2 dark:bg-stone-9"},_hoisted_14={class:"mx-1 bg-gray-2 dark:bg-stone-9"},_hoisted_15={key:1},_hoisted_16={class:"mx-1 bg-gray-2 dark:bg-stone-9"},_hoisted_17={class:"mx-1 bg-gray-2 dark:bg-stone-9"},_hoisted_18={class:"mx-1 bg-gray-2 dark:bg-stone-9"},_hoisted_19={class:"mx-1 bg-gray-2 dark:bg-stone-9"},_hoisted_20={class:"mx-1 bg-gray-2 dark:bg-stone-9"},_hoisted_21={class:"mx-1 bg-gray-2 dark:bg-stone-9"},_hoisted_22={class:"mx-1 bg-gray-2 dark:bg-stone-9"},_hoisted_23={class:"mx-1 bg-gray-2 dark:bg-stone-9"},_hoisted_24={class:"mx-1 bg-gray-2 dark:bg-stone-9"},_hoisted_25={class:"mx-1 bg-gray-2 dark:bg-stone-9"},_hoisted_26={class:"mx-1 bg-gray-2 dark:bg-stone-9"},_hoisted_27={class:"mx-1 bg-gray-2 dark:bg-stone-9"},_hoisted_28={class:"mx-1 bg-gray-2 dark:bg-stone-9"},_sfc_main$e=defineComponent({__name:"FormatDropdown",props:{asSub:{type:Boolean,default:!1},iconOnly:{type:Boolean,default:!1}},setup(e){const t=e,{asSub:n}=toRefs(t),o=useEditorStore(),a=useThemeStore(),i=useRenderStore(),{editor:u}=storeToRefs(o);function l(){a.updateCodeTheme();const w=o.getContent();i.render(w,{isCiteStatus:a.isCiteStatus,legend:a.legend,isUseIndent:a.isUseIndent,isUseJustify:a.isUseJustify,isCountStatus:a.isCountStatus,isMacCodeBlock:a.isMacCodeBlock,isShowLineNumber:a.isShowLineNumber})}function d(){a.toggleCiteStatus(),l()}function m(){a.toggleCountStatus(),l()}function p(w){const s=u.value;if(u.value)switch(w){case`${ctrlKey}-B`:formatBold(s);break;case`${ctrlKey}-I`:formatItalic(s);break;case`${ctrlKey}-D`:formatStrikethrough(s);break;case`${ctrlKey}-K`:formatLink(s);break;case`${ctrlKey}-E`:formatCode(s);break;case`${ctrlKey}-1`:applyHeading(s,1);break;case`${ctrlKey}-2`:applyHeading(s,2);break;case`${ctrlKey}-3`:applyHeading(s,3);break;case`${ctrlKey}-4`:applyHeading(s,4);break;case`${ctrlKey}-5`:applyHeading(s,5);break;case`${ctrlKey}-6`:applyHeading(s,6);break;case`${ctrlKey}-U`:formatUnorderedList(s);break;case`${ctrlKey}-O`:formatOrderedList(s);break}}return(w,s)=>{const C=_sfc_main$h,x=_sfc_main$i,_=_sfc_main$j,b=_sfc_main$k,f=_sfc_main$l,N=_sfc_main$m,h=_sfc_main$o,S=_sfc_main$p,V=_sfc_main$q;return unref(n)?(openBlock(),createBlock(N,{key:0},{default:withCtx(()=>[createVNode(C,{class:normalizeClass({"p-2":e.iconOnly}),title:e.iconOnly?"格式":void 0,"aria-label":e.iconOnly?"格式":void 0},{default:withCtx(()=>[e.iconOnly?(openBlock(),createBlock(unref(Type),{key:0,class:"size-4"})):(openBlock(),createElementBlock("span",_hoisted_1$c,"格式"))]),_:1},8,["class","title","aria-label"]),createVNode(f,{class:"w-64"},{default:withCtx(()=>[createVNode(_,{onClick:s[0]||(s[0]=$=>p(`${unref(ctrlKey)}-B`))},{default:withCtx(()=>[createVNode(unref(Bold),{class:"mr-2 h-4 w-4"}),s[31]||(s[31]=createTextVNode(" 加粗 ",-1)),createVNode(x,null,{default:withCtx(()=>[createBaseVNode("kbd",_hoisted_2$a,toDisplayString(unref(ctrlSign)),1),s[30]||(s[30]=createBaseVNode("kbd",{class:"mx-1 bg-gray-2 dark:bg-stone-9"},"B",-1))]),_:1})]),_:1}),createVNode(_,{onClick:s[1]||(s[1]=$=>p(`${unref(ctrlKey)}-I`))},{default:withCtx(()=>[createVNode(unref(Italic),{class:"mr-2 h-4 w-4"}),s[33]||(s[33]=createTextVNode(" 斜体 ",-1)),createVNode(x,null,{default:withCtx(()=>[createBaseVNode("kbd",_hoisted_3$8,toDisplayString(unref(ctrlSign)),1),s[32]||(s[32]=createBaseVNode("kbd",{class:"mx-1 bg-gray-2 dark:bg-stone-9"},"I",-1))]),_:1})]),_:1}),createVNode(_,{onClick:s[2]||(s[2]=$=>p(`${unref(ctrlKey)}-D`))},{default:withCtx(()=>[createVNode(unref(Strikethrough),{class:"mr-2 h-4 w-4"}),s[35]||(s[35]=createTextVNode(" 删除线 ",-1)),createVNode(x,null,{default:withCtx(()=>[createBaseVNode("kbd",_hoisted_4$8,toDisplayString(unref(ctrlSign)),1),s[34]||(s[34]=createBaseVNode("kbd",{class:"mx-1 bg-gray-2 dark:bg-stone-9"},"D",-1))]),_:1})]),_:1}),createVNode(_,{onClick:s[3]||(s[3]=$=>p(`${unref(ctrlKey)}-K`))},{default:withCtx(()=>[createVNode(unref(Link),{class:"mr-2 h-4 w-4"}),s[37]||(s[37]=createTextVNode(" 超链接 ",-1)),createVNode(x,null,{default:withCtx(()=>[createBaseVNode("kbd",_hoisted_5$7,toDisplayString(unref(ctrlSign)),1),s[36]||(s[36]=createBaseVNode("kbd",{class:"mx-1 bg-gray-2 dark:bg-stone-9"},"K",-1))]),_:1})]),_:1}),createVNode(_,{onClick:s[4]||(s[4]=$=>p(`${unref(ctrlKey)}-E`))},{default:withCtx(()=>[createVNode(unref(Code),{class:"mr-2 h-4 w-4"}),s[39]||(s[39]=createTextVNode(" 行内代码 ",-1)),createVNode(x,null,{default:withCtx(()=>[createBaseVNode("kbd",_hoisted_6$5,toDisplayString(unref(ctrlSign)),1),s[38]||(s[38]=createBaseVNode("kbd",{class:"mx-1 bg-gray-2 dark:bg-stone-9"},"E",-1))]),_:1})]),_:1}),createVNode(b),createVNode(N,null,{default:withCtx(()=>[createVNode(C,null,{default:withCtx(()=>[createVNode(unref(Heading1),{class:"mr-2 h-4 w-4"}),s[40]||(s[40]=createTextVNode(" 标题 ",-1))]),_:1}),createVNode(f,null,{default:withCtx(()=>[createVNode(_,{onClick:s[5]||(s[5]=$=>p(`${unref(ctrlKey)}-1`))},{default:withCtx(()=>[createVNode(unref(Heading1),{class:"mr-2 h-4 w-4"}),s[42]||(s[42]=createTextVNode(" 标题 1 ",-1)),createVNode(x,null,{default:withCtx(()=>[createBaseVNode("kbd",_hoisted_7$3,toDisplayString(unref(ctrlSign)),1),s[41]||(s[41]=createBaseVNode("kbd",{class:"mx-1 bg-gray-2 dark:bg-stone-9"},"1",-1))]),_:1})]),_:1}),createVNode(_,{onClick:s[6]||(s[6]=$=>p(`${unref(ctrlKey)}-2`))},{default:withCtx(()=>[createVNode(unref(Heading2),{class:"mr-2 h-4 w-4"}),s[44]||(s[44]=createTextVNode(" 标题 2 ",-1)),createVNode(x,null,{default:withCtx(()=>[createBaseVNode("kbd",_hoisted_8$3,toDisplayString(unref(ctrlSign)),1),s[43]||(s[43]=createBaseVNode("kbd",{class:"mx-1 bg-gray-2 dark:bg-stone-9"},"2",-1))]),_:1})]),_:1}),createVNode(_,{onClick:s[7]||(s[7]=$=>p(`${unref(ctrlKey)}-3`))},{default:withCtx(()=>[createVNode(unref(Heading3),{class:"mr-2 h-4 w-4"}),s[46]||(s[46]=createTextVNode(" 标题 3 ",-1)),createVNode(x,null,{default:withCtx(()=>[createBaseVNode("kbd",_hoisted_9$2,toDisplayString(unref(ctrlSign)),1),s[45]||(s[45]=createBaseVNode("kbd",{class:"mx-1 bg-gray-2 dark:bg-stone-9"},"3",-1))]),_:1})]),_:1}),createVNode(_,{onClick:s[8]||(s[8]=$=>p(`${unref(ctrlKey)}-4`))},{default:withCtx(()=>[createVNode(unref(Heading4),{class:"mr-2 h-4 w-4"}),s[48]||(s[48]=createTextVNode(" 标题 4 ",-1)),createVNode(x,null,{default:withCtx(()=>[createBaseVNode("kbd",_hoisted_10,toDisplayString(unref(ctrlSign)),1),s[47]||(s[47]=createBaseVNode("kbd",{class:"mx-1 bg-gray-2 dark:bg-stone-9"},"4",-1))]),_:1})]),_:1}),createVNode(_,{onClick:s[9]||(s[9]=$=>p(`${unref(ctrlKey)}-5`))},{default:withCtx(()=>[createVNode(unref(Heading5),{class:"mr-2 h-4 w-4"}),s[50]||(s[50]=createTextVNode(" 标题 5 ",-1)),createVNode(x,null,{default:withCtx(()=>[createBaseVNode("kbd",_hoisted_11,toDisplayString(unref(ctrlSign)),1),s[49]||(s[49]=createBaseVNode("kbd",{class:"mx-1 bg-gray-2 dark:bg-stone-9"},"5",-1))]),_:1})]),_:1}),createVNode(_,{onClick:s[10]||(s[10]=$=>p(`${unref(ctrlKey)}-6`))},{default:withCtx(()=>[createVNode(unref(Heading6),{class:"mr-2 h-4 w-4"}),s[52]||(s[52]=createTextVNode(" 标题 6 ",-1)),createVNode(x,null,{default:withCtx(()=>[createBaseVNode("kbd",_hoisted_12,toDisplayString(unref(ctrlSign)),1),s[51]||(s[51]=createBaseVNode("kbd",{class:"mx-1 bg-gray-2 dark:bg-stone-9"},"6",-1))]),_:1})]),_:1})]),_:1})]),_:1}),createVNode(_,{onClick:s[11]||(s[11]=$=>p(`${unref(ctrlKey)}-U`))},{default:withCtx(()=>[createVNode(unref(List),{class:"mr-2 h-4 w-4"}),s[54]||(s[54]=createTextVNode(" 无序列表 ",-1)),createVNode(x,null,{default:withCtx(()=>[createBaseVNode("kbd",_hoisted_13,toDisplayString(unref(ctrlSign)),1),s[53]||(s[53]=createBaseVNode("kbd",{class:"mx-1 bg-gray-2 dark:bg-stone-9"},"U",-1))]),_:1})]),_:1}),createVNode(_,{onClick:s[12]||(s[12]=$=>p(`${unref(ctrlKey)}-O`))},{default:withCtx(()=>[createVNode(unref(ListOrdered),{class:"mr-2 h-4 w-4"}),s[56]||(s[56]=createTextVNode(" 有序列表 ",-1)),createVNode(x,null,{default:withCtx(()=>[createBaseVNode("kbd",_hoisted_14,toDisplayString(unref(ctrlSign)),1),s[55]||(s[55]=createBaseVNode("kbd",{class:"mx-1 bg-gray-2 dark:bg-stone-9"},"O",-1))]),_:1})]),_:1}),createVNode(b),createVNode(_,{onClick:s[13]||(s[13]=$=>d())},{default:withCtx(()=>[createVNode(unref(Link2),{class:"mr-2 h-4 w-4"}),s[57]||(s[57]=createTextVNode(" 微信外链转引用 ",-1))]),_:1}),createVNode(_,{onClick:s[14]||(s[14]=$=>m())},{default:withCtx(()=>[createVNode(unref(Clock),{class:"mr-2 h-4 w-4"}),s[58]||(s[58]=createTextVNode(" 统计字数时间 ",-1))]),_:1})]),_:1})]),_:1})):(openBlock(),createBlock(V,{key:1},{default:withCtx(()=>[createVNode(h,{class:normalizeClass({"p-2":e.iconOnly}),"aria-label":e.iconOnly?"格式":void 0,title:e.iconOnly?"格式":void 0},{default:withCtx(()=>[e.iconOnly?(openBlock(),createBlock(unref(Type),{key:0,class:"size-4"})):(openBlock(),createElementBlock("span",_hoisted_15,"格式"))]),_:1},8,["class","aria-label","title"]),createVNode(S,{class:"w-64",align:"start"},{default:withCtx(()=>[createVNode(_,{onClick:s[15]||(s[15]=$=>p(`${unref(ctrlKey)}-B`))},{default:withCtx(()=>[createVNode(unref(Bold),{class:"mr-2 h-4 w-4"}),s[60]||(s[60]=createTextVNode(" 加粗 ",-1)),createVNode(x,null,{default:withCtx(()=>[createBaseVNode("kbd",_hoisted_16,toDisplayString(unref(ctrlSign)),1),s[59]||(s[59]=createBaseVNode("kbd",{class:"mx-1 bg-gray-2 dark:bg-stone-9"},"B",-1))]),_:1})]),_:1}),createVNode(_,{onClick:s[16]||(s[16]=$=>p(`${unref(ctrlKey)}-I`))},{default:withCtx(()=>[createVNode(unref(Italic),{class:"mr-2 h-4 w-4"}),s[62]||(s[62]=createTextVNode(" 斜体 ",-1)),createVNode(x,null,{default:withCtx(()=>[createBaseVNode("kbd",_hoisted_17,toDisplayString(unref(ctrlSign)),1),s[61]||(s[61]=createBaseVNode("kbd",{class:"mx-1 bg-gray-2 dark:bg-stone-9"},"I",-1))]),_:1})]),_:1}),createVNode(_,{onClick:s[17]||(s[17]=$=>p(`${unref(ctrlKey)}-D`))},{default:withCtx(()=>[createVNode(unref(Strikethrough),{class:"mr-2 h-4 w-4"}),s[64]||(s[64]=createTextVNode(" 删除线 ",-1)),createVNode(x,null,{default:withCtx(()=>[createBaseVNode("kbd",_hoisted_18,toDisplayString(unref(ctrlSign)),1),s[63]||(s[63]=createBaseVNode("kbd",{class:"mx-1 bg-gray-2 dark:bg-stone-9"},"D",-1))]),_:1})]),_:1}),createVNode(_,{onClick:s[18]||(s[18]=$=>p(`${unref(ctrlKey)}-K`))},{default:withCtx(()=>[createVNode(unref(Link),{class:"mr-2 h-4 w-4"}),s[66]||(s[66]=createTextVNode(" 超链接 ",-1)),createVNode(x,null,{default:withCtx(()=>[createBaseVNode("kbd",_hoisted_19,toDisplayString(unref(ctrlSign)),1),s[65]||(s[65]=createBaseVNode("kbd",{class:"mx-1 bg-gray-2 dark:bg-stone-9"},"K",-1))]),_:1})]),_:1}),createVNode(_,{onClick:s[19]||(s[19]=$=>p(`${unref(ctrlKey)}-E`))},{default:withCtx(()=>[createVNode(unref(Code),{class:"mr-2 h-4 w-4"}),s[68]||(s[68]=createTextVNode(" 行内代码 ",-1)),createVNode(x,null,{default:withCtx(()=>[createBaseVNode("kbd",_hoisted_20,toDisplayString(unref(ctrlSign)),1),s[67]||(s[67]=createBaseVNode("kbd",{class:"mx-1 bg-gray-2 dark:bg-stone-9"},"E",-1))]),_:1})]),_:1}),createVNode(b),createVNode(N,null,{default:withCtx(()=>[createVNode(C,null,{default:withCtx(()=>[createVNode(unref(Heading1),{class:"mr-2 h-4 w-4"}),s[69]||(s[69]=createTextVNode(" 标题 ",-1))]),_:1}),createVNode(f,null,{default:withCtx(()=>[createVNode(_,{onClick:s[20]||(s[20]=$=>p(`${unref(ctrlKey)}-1`))},{default:withCtx(()=>[createVNode(unref(Heading1),{class:"mr-2 h-4 w-4"}),s[71]||(s[71]=createTextVNode(" 标题 1 ",-1)),createVNode(x,null,{default:withCtx(()=>[createBaseVNode("kbd",_hoisted_21,toDisplayString(unref(ctrlSign)),1),s[70]||(s[70]=createBaseVNode("kbd",{class:"mx-1 bg-gray-2 dark:bg-stone-9"},"1",-1))]),_:1})]),_:1}),createVNode(_,{onClick:s[21]||(s[21]=$=>p(`${unref(ctrlKey)}-2`))},{default:withCtx(()=>[createVNode(unref(Heading2),{class:"mr-2 h-4 w-4"}),s[73]||(s[73]=createTextVNode(" 标题 2 ",-1)),createVNode(x,null,{default:withCtx(()=>[createBaseVNode("kbd",_hoisted_22,toDisplayString(unref(ctrlSign)),1),s[72]||(s[72]=createBaseVNode("kbd",{class:"mx-1 bg-gray-2 dark:bg-stone-9"},"2",-1))]),_:1})]),_:1}),createVNode(_,{onClick:s[22]||(s[22]=$=>p(`${unref(ctrlKey)}-3`))},{default:withCtx(()=>[createVNode(unref(Heading3),{class:"mr-2 h-4 w-4"}),s[75]||(s[75]=createTextVNode(" 标题 3 ",-1)),createVNode(x,null,{default:withCtx(()=>[createBaseVNode("kbd",_hoisted_23,toDisplayString(unref(ctrlSign)),1),s[74]||(s[74]=createBaseVNode("kbd",{class:"mx-1 bg-gray-2 dark:bg-stone-9"},"3",-1))]),_:1})]),_:1}),createVNode(_,{onClick:s[23]||(s[23]=$=>p(`${unref(ctrlKey)}-4`))},{default:withCtx(()=>[createVNode(unref(Heading4),{class:"mr-2 h-4 w-4"}),s[77]||(s[77]=createTextVNode(" 标题 4 ",-1)),createVNode(x,null,{default:withCtx(()=>[createBaseVNode("kbd",_hoisted_24,toDisplayString(unref(ctrlSign)),1),s[76]||(s[76]=createBaseVNode("kbd",{class:"mx-1 bg-gray-2 dark:bg-stone-9"},"4",-1))]),_:1})]),_:1}),createVNode(_,{onClick:s[24]||(s[24]=$=>p(`${unref(ctrlKey)}-5`))},{default:withCtx(()=>[createVNode(unref(Heading5),{class:"mr-2 h-4 w-4"}),s[79]||(s[79]=createTextVNode(" 标题 5 ",-1)),createVNode(x,null,{default:withCtx(()=>[createBaseVNode("kbd",_hoisted_25,toDisplayString(unref(ctrlSign)),1),s[78]||(s[78]=createBaseVNode("kbd",{class:"mx-1 bg-gray-2 dark:bg-stone-9"},"5",-1))]),_:1})]),_:1}),createVNode(_,{onClick:s[25]||(s[25]=$=>p(`${unref(ctrlKey)}-6`))},{default:withCtx(()=>[createVNode(unref(Heading6),{class:"mr-2 h-4 w-4"}),s[81]||(s[81]=createTextVNode(" 标题 6 ",-1)),createVNode(x,null,{default:withCtx(()=>[createBaseVNode("kbd",_hoisted_26,toDisplayString(unref(ctrlSign)),1),s[80]||(s[80]=createBaseVNode("kbd",{class:"mx-1 bg-gray-2 dark:bg-stone-9"},"6",-1))]),_:1})]),_:1})]),_:1})]),_:1}),createVNode(_,{onClick:s[26]||(s[26]=$=>p(`${unref(ctrlKey)}-U`))},{default:withCtx(()=>[createVNode(unref(List),{class:"mr-2 h-4 w-4"}),s[83]||(s[83]=createTextVNode(" 无序列表 ",-1)),createVNode(x,null,{default:withCtx(()=>[createBaseVNode("kbd",_hoisted_27,toDisplayString(unref(ctrlSign)),1),s[82]||(s[82]=createBaseVNode("kbd",{class:"mx-1 bg-gray-2 dark:bg-stone-9"},"U",-1))]),_:1})]),_:1}),createVNode(_,{onClick:s[27]||(s[27]=$=>p(`${unref(ctrlKey)}-O`))},{default:withCtx(()=>[createVNode(unref(ListOrdered),{class:"mr-2 h-4 w-4"}),s[85]||(s[85]=createTextVNode(" 有序列表 ",-1)),createVNode(x,null,{default:withCtx(()=>[createBaseVNode("kbd",_hoisted_28,toDisplayString(unref(ctrlSign)),1),s[84]||(s[84]=createBaseVNode("kbd",{class:"mx-1 bg-gray-2 dark:bg-stone-9"},"O",-1))]),_:1})]),_:1}),createVNode(b),createVNode(_,{onClick:s[28]||(s[28]=$=>d())},{default:withCtx(()=>[createVNode(unref(Link2),{class:"mr-2 h-4 w-4"}),s[86]||(s[86]=createTextVNode(" 微信外链转引用 ",-1))]),_:1}),createVNode(_,{onClick:s[29]||(s[29]=$=>m())},{default:withCtx(()=>[createVNode(unref(Clock),{class:"mr-2 h-4 w-4"}),s[87]||(s[87]=createTextVNode(" 统计字数时间 ",-1))]),_:1})]),_:1})]),_:1}))}}}),_hoisted_1$b={key:1},_hoisted_2$9={key:1},_sfc_main$d=defineComponent({__name:"InsertDropdown",props:{asSub:{type:Boolean,default:!1},iconOnly:{type:Boolean,default:!1}},setup(e){const t=e,{asSub:n}=toRefs(t),o=useUIStore(),{toggleShowInsertFormDialog:a,toggleShowUploadImgDialog:i,toggleShowInsertMpCardDialog:u}=o;return(l,d)=>{const m=_sfc_main$h,p=_sfc_main$j,w=_sfc_main$l,s=_sfc_main$m,C=_sfc_main$o,x=_sfc_main$p,_=_sfc_main$q;return unref(n)?(openBlock(),createBlock(s,{key:0},{default:withCtx(()=>[createVNode(m,{class:normalizeClass({"p-2":e.iconOnly}),title:e.iconOnly?"插入":void 0,"aria-label":e.iconOnly?"插入":void 0},{default:withCtx(()=>[e.iconOnly?(openBlock(),createBlock(unref(Plus),{key:0,class:"size-4"})):(openBlock(),createElementBlock("span",_hoisted_1$b,"插入"))]),_:1},8,["class","title","aria-label"]),createVNode(w,{class:"w-52"},{default:withCtx(()=>[createVNode(p,{onClick:d[0]||(d[0]=b=>unref(i)())},{default:withCtx(()=>[createVNode(unref(Image),{class:"mr-2 h-4 w-4"}),d[6]||(d[6]=createTextVNode(" 插入图片 ",-1))]),_:1}),createVNode(p,{onClick:d[1]||(d[1]=b=>unref(a)())},{default:withCtx(()=>[createVNode(unref(Table),{class:"mr-2 h-4 w-4"}),d[7]||(d[7]=createTextVNode(" 插入表格 ",-1))]),_:1}),createVNode(p,{onClick:d[2]||(d[2]=b=>unref(u)())},{default:withCtx(()=>[createVNode(unref(Contact),{class:"mr-2 h-4 w-4"}),d[8]||(d[8]=createTextVNode(" 公众号名片 ",-1))]),_:1})]),_:1})]),_:1})):(openBlock(),createBlock(_,{key:1},{default:withCtx(()=>[createVNode(C,{class:normalizeClass({"p-2":e.iconOnly}),"aria-label":e.iconOnly?"插入":void 0,title:e.iconOnly?"插入":void 0},{default:withCtx(()=>[e.iconOnly?(openBlock(),createBlock(unref(Plus),{key:0,class:"size-4"})):(openBlock(),createElementBlock("span",_hoisted_2$9,"插入"))]),_:1},8,["class","aria-label","title"]),createVNode(x,{class:"w-52",align:"start"},{default:withCtx(()=>[createVNode(p,{onClick:d[3]||(d[3]=b=>unref(i)())},{default:withCtx(()=>[createVNode(unref(Image),{class:"mr-2 h-4 w-4"}),d[9]||(d[9]=createTextVNode(" 插入图片 ",-1))]),_:1}),createVNode(p,{onClick:d[4]||(d[4]=b=>unref(a)())},{default:withCtx(()=>[createVNode(unref(Table),{class:"mr-2 h-4 w-4"}),d[10]||(d[10]=createTextVNode(" 插入表格 ",-1))]),_:1}),createVNode(p,{onClick:d[5]||(d[5]=b=>unref(u)())},{default:withCtx(()=>[createVNode(unref(Contact),{class:"mr-2 h-4 w-4"}),d[11]||(d[11]=createTextVNode(" 公众号名片 ",-1))]),_:1})]),_:1})]),_:1}))}}}),_hoisted_1$a={class:"absolute left-2 h-3.5 w-3.5 flex items-center justify-center"},_sfc_main$c=defineComponent({__name:"MenubarCheckboxItem",props:{checked:{type:[Boolean,String]},disabled:{type:Boolean},textValue:{},asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]}},emits:["select","update:checked"],setup(e,{emit:t}){const n=e,o=t,a=computed(()=>{const{class:u,...l}=n;return l}),i=Se(a,o);return(u,l)=>(openBlock(),createBlock(unref(ty),mergeProps(unref(i),{class:unref(cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50",n.class)}),{default:withCtx(()=>[createBaseVNode("span",_hoisted_1$a,[createVNode(unref(ay),null,{default:withCtx(()=>[createVNode(unref(Check),{class:"h-4 w-4"})]),_:1})]),renderSlot(u.$slots,"default")]),_:3},16,["class"]))}}),_hoisted_1$9={key:1},_hoisted_2$8={key:1},_sfc_main$b=defineComponent({__name:"ViewDropdown",props:{asSub:{type:Boolean,default:!1},iconOnly:{type:Boolean,default:!1}},setup(e){const t=e,{asSub:n}=toRefs(t),o=useUIStore(),{isEditOnLeft:a,isShowCssEditor:i}=storeToRefs(o);return(u,l)=>{const d=_sfc_main$h,m=_sfc_main$c,p=_sfc_main$l,w=_sfc_main$m,s=_sfc_main$j,C=_sfc_main$o,x=_sfc_main$p,_=_sfc_main$q;return unref(n)?(openBlock(),createBlock(w,{key:0},{default:withCtx(()=>[createVNode(d,{class:normalizeClass({"p-2":e.iconOnly}),title:e.iconOnly?"视图":void 0,"aria-label":e.iconOnly?"视图":void 0},{default:withCtx(()=>[e.iconOnly?(openBlock(),createBlock(unref(Eye),{key:0,class:"size-4"})):(openBlock(),createElementBlock("span",_hoisted_1$9,"视图"))]),_:1},8,["class","title","aria-label"]),createVNode(p,null,{default:withCtx(()=>[createVNode(w,null,{default:withCtx(()=>[createVNode(d,null,{default:withCtx(()=>[createVNode(unref(PanelLeft),{class:"mr-2 h-4 w-4"}),l[12]||(l[12]=createTextVNode(" 编辑模式 ",-1))]),_:1}),createVNode(p,null,{default:withCtx(()=>[createVNode(m,{checked:unref(a),onClick:l[0]||(l[0]=b=>a.value=!0)},{default:withCtx(()=>[...l[13]||(l[13]=[createTextVNode(" 左侧编辑 ",-1)])]),_:1},8,["checked"]),createVNode(m,{checked:!unref(a),onClick:l[1]||(l[1]=b=>a.value=!1)},{default:withCtx(()=>[...l[14]||(l[14]=[createTextVNode(" 右侧编辑 ",-1)])]),_:1},8,["checked"])]),_:1})]),_:1}),createVNode(w,null,{default:withCtx(()=>[createVNode(d,null,{default:withCtx(()=>[createVNode(unref(PanelLeft),{class:"mr-2 h-4 w-4"}),l[15]||(l[15]=createTextVNode(" 浮动目录 ",-1))]),_:1}),createVNode(p,null,{default:withCtx(()=>[createVNode(m,{checked:unref(o).isShowFloatingToc&&unref(o).isPinFloatingToc,onClick:l[2]||(l[2]=()=>{unref(o).isShowFloatingToc=!0,unref(o).isPinFloatingToc=!0})},{default:withCtx(()=>[...l[16]||(l[16]=[createTextVNode(" 常驻显示 ",-1)])]),_:1},8,["checked"]),createVNode(m,{checked:unref(o).isShowFloatingToc&&!unref(o).isPinFloatingToc,onClick:l[3]||(l[3]=()=>{unref(o).isShowFloatingToc=!0,unref(o).isPinFloatingToc=!1})},{default:withCtx(()=>[...l[17]||(l[17]=[createTextVNode(" 移入触发 ",-1)])]),_:1},8,["checked"]),createVNode(m,{checked:!unref(o).isShowFloatingToc,onClick:l[4]||(l[4]=()=>{unref(o).isShowFloatingToc=!1})},{default:withCtx(()=>[...l[18]||(l[18]=[createTextVNode(" 隐藏 ",-1)])]),_:1},8,["checked"])]),_:1})]),_:1}),createVNode(s,{onClick:l[5]||(l[5]=b=>i.value=!unref(i))},{default:withCtx(()=>[createVNode(unref(FileCode),{class:"mr-2 h-4 w-4"}),l[19]||(l[19]=createTextVNode(" CSS 编辑器 ",-1))]),_:1})]),_:1})]),_:1})):(openBlock(),createBlock(_,{key:1},{default:withCtx(()=>[createVNode(C,{class:normalizeClass({"p-2":e.iconOnly}),"aria-label":e.iconOnly?"视图":void 0,title:e.iconOnly?"视图":void 0},{default:withCtx(()=>[e.iconOnly?(openBlock(),createBlock(unref(Eye),{key:0,class:"size-4"})):(openBlock(),createElementBlock("span",_hoisted_2$8,"视图"))]),_:1},8,["class","aria-label","title"]),createVNode(x,{align:"start"},{default:withCtx(()=>[createVNode(w,null,{default:withCtx(()=>[createVNode(d,null,{default:withCtx(()=>[createVNode(unref(PanelLeft),{class:"mr-2 h-4 w-4"}),l[20]||(l[20]=createTextVNode(" 编辑模式 ",-1))]),_:1}),createVNode(p,null,{default:withCtx(()=>[createVNode(m,{checked:unref(a),onClick:l[6]||(l[6]=b=>a.value=!0)},{default:withCtx(()=>[...l[21]||(l[21]=[createTextVNode(" 左侧编辑 ",-1)])]),_:1},8,["checked"]),createVNode(m,{checked:!unref(a),onClick:l[7]||(l[7]=b=>a.value=!1)},{default:withCtx(()=>[...l[22]||(l[22]=[createTextVNode(" 右侧编辑 ",-1)])]),_:1},8,["checked"])]),_:1})]),_:1}),createVNode(w,null,{default:withCtx(()=>[createVNode(d,null,{default:withCtx(()=>[createVNode(unref(PanelLeft),{class:"mr-2 h-4 w-4"}),l[23]||(l[23]=createTextVNode(" 浮动目录 ",-1))]),_:1}),createVNode(p,null,{default:withCtx(()=>[createVNode(m,{checked:unref(o).isShowFloatingToc&&unref(o).isPinFloatingToc,onClick:l[8]||(l[8]=()=>{unref(o).isShowFloatingToc=!0,unref(o).isPinFloatingToc=!0})},{default:withCtx(()=>[...l[24]||(l[24]=[createTextVNode(" 常驻显示 ",-1)])]),_:1},8,["checked"]),createVNode(m,{checked:unref(o).isShowFloatingToc&&!unref(o).isPinFloatingToc,onClick:l[9]||(l[9]=()=>{unref(o).isShowFloatingToc=!0,unref(o).isPinFloatingToc=!1})},{default:withCtx(()=>[...l[25]||(l[25]=[createTextVNode(" 移入触发 ",-1)])]),_:1},8,["checked"]),createVNode(m,{checked:!unref(o).isShowFloatingToc,onClick:l[10]||(l[10]=()=>{unref(o).isShowFloatingToc=!1})},{default:withCtx(()=>[...l[26]||(l[26]=[createTextVNode(" 隐藏 ",-1)])]),_:1},8,["checked"])]),_:1})]),_:1}),createVNode(s,{onClick:l[11]||(l[11]=b=>i.value=!unref(i))},{default:withCtx(()=>[createVNode(unref(FileCode),{class:"mr-2 h-4 w-4"}),l[27]||(l[27]=createTextVNode(" CSS 编辑器 ",-1))]),_:1})]),_:1})]),_:1}))}}}),_hoisted_1$8={class:"header-menu-group flex items-center gap-3 min-w-0 hidden md:flex"},_hoisted_2$7={class:"article-word-count"},_hoisted_3$7={class:"md:hidden flex items-center gap-2 min-w-0"},_hoisted_4$7={class:"article-word-count"},_hoisted_5$6={class:"header-actions flex flex-wrap items-center gap-2 md:flex-nowrap md:gap-1"},_sfc_main$a=defineComponent({__name:"index",emits:["startCopy","endCopy"],setup(e,{emit:t}){const n=t,o=useEditorStore(),a=useThemeStore(),i=useRenderStore(),u=useUIStore(),l=useExportStore(),d=usePostStore(),{editor:m}=storeToRefs(o),{output:p,readingTime:w}=storeToRefs(i),{primaryColor:s,previewWidth:C}=storeToRefs(a),{isDark:x,isOpenRightSlider:_}=storeToRefs(u),{currentPost:b}=storeToRefs(d),f=computed({get:()=>b.value?.title??"",set:L=>{b.value&&d.renamePost(b.value.id,L)}}),N=widthOptions[0].value,h=widthOptions[1].value;function S(){C.value=C.value===N?h:N}const V=ref(!1),$=ref(!1);onMounted(()=>{V.value=isExtensionEnvironment()});function F(){a.updateCodeTheme();const L=o.getContent();i.render(L,{isCiteStatus:a.isCiteStatus,legend:a.legend,isUseIndent:a.isUseIndent,isUseJustify:a.isUseJustify,isCountStatus:a.isCountStatus,isMacCodeBlock:a.isMacCodeBlock,isShowLineNumber:a.isShowLineNumber}),nextTick(async()=>{const y=document.getElementById("output");y&&(highlightPendingBlocks(HighlightJS,y),await ensureMathJax()&&isExtensionEnvironment$1()&&renderPendingMathWithKaTeX(y))})}const P=ref(!1);function Q(){P.value=!0}const H=store.reactive(addPrefix("copyMode"),"txt"),{copy:k}=useClipboard({legacy:!0}),T=L=>new Promise(y=>window.setTimeout(y,L)),ce=L=>L instanceof Error?L.message:String(L);async function z(L){if(!navigator.clipboard?.write)throw new Error("Clipboard API not available.");await T(0),await navigator.clipboard.write(L)}function R(L){const y=window.getSelection();if(!y)return!1;const E=document.createElement("div");E.innerHTML=L,E.style.position="fixed",E.style.left="-9999px",E.style.top="0",E.style.opacity="0",E.style.pointerEvents="none",E.style.setProperty("background-color","#ffffff","important"),E.style.setProperty("color","#000000","important"),document.body.appendChild(E);const Y=document.documentElement,ne=Y.classList.contains("dark");let ue=!1;try{ne&&Y.classList.remove("dark");const de=document.createRange();de.selectNodeContents(E),y.removeAllRanges(),y.addRange(de),ue=document.execCommand("copy")}catch{ue=!1}finally{y.removeAllRanges(),E.remove(),ne&&Y.classList.add("dark")}return ue}async function le(){if(H.value==="md"){const E=m.value?.state.doc.toString()||"";try{return await k(E),toast.success("已复制 Markdown 源码到剪贴板。"),!0}catch(Y){return toast.error(`复制失败，请联系开发者。${ce(Y)}`),!1}}n("startCopy"),await T(350),await nextTick();try{await processClipboardContent(s.value)}catch(E){return toast.error(`处理 HTML 失败，请联系开发者。${ce(E)}`),F(),n("endCopy"),!1}const L=document.getElementById("output");if(!L)return toast.error("未找到复制输出区域，请刷新页面后重试。"),F(),n("endCopy"),!1;L.focus(),window.getSelection()?.removeAllRanges();const y=L.innerHTML;if(H.value==="txt")try{if(typeof ClipboardItem>"u")throw new TypeError("ClipboardItem is not supported in this browser.");const E=L.textContent||"",Y=new ClipboardItem({"text/html":new Blob([y],{type:"text/html"}),"text/plain":new Blob([E],{type:"text/plain"})});await z([Y])}catch(E){if(!R(y))return L.innerHTML=p.value,window.getSelection()?.removeAllRanges(),F(),toast.error(`复制失败，请联系开发者。${ce(E)}`),n("endCopy"),!1}L.innerHTML=p.value;try{H.value==="html"?await k(y):H.value==="html-without-style"?await k(await generatePureHTML(m.value.state.doc.toString())):H.value==="html-and-style"&&await k(l.editorContent2HTML())}catch(E){return toast.error(`复制失败，请联系开发者。${ce(E)}`),n("endCopy"),!1}return toast.success(H.value==="html"?"已复制 HTML 源码，请进行下一步操作。":"已复制渲染后的内容到剪贴板，可直接到公众号后台粘贴。"),window.dispatchEvent(new CustomEvent("copyToMp",{detail:{content:p.value}})),F(),n("endCopy"),!0}function Z(L){H.value=L,le()}function ee(){H.value="txt",le()}async function J(){const L=f.value.trim();if(!L){toast.info("暂无可复制的标题");return}try{await k(L),toast.success("已复制标题")}catch(y){toast.error(`标题复制失败，请重试。${ce(y)}`)}}async function re(){if(!$.value){$.value=!0;try{const L=b.value?.title||"未命名文章",y=p.value;if(!y){toast.error("请先编写文章内容");return}H.value="txt",await le()||toast.info("自动复制失败：请改用上方“复制”按钮后再粘贴。",{duration:8e3}),console.log("[header] 发布到微信公众号:",{title:L,contentLength:y.length});const Y=await publishToWechat({title:L,content:y});Y.success?toast.success(Y.message):Y.needManualCopy?toast.info(Y.message,{duration:8e3}):toast.error(Y.message)}catch(L){console.error("[header] 发布失败:",L),toast.error("发布失败，请重试")}finally{$.value=!1}}}return(L,y)=>{const E=_sfc_main$1E,Y=_sfc_main$n,ne=_sfc_main$o,ue=_sfc_main$p,de=_sfc_main$q,he=_sfc_main$B,me=_sfc_main$C,A=_sfc_main$D,I=_sfc_main$E,G=_sfc_main$r,K=_sfc_main$w,oe=AIImageGeneratorPanel;return openBlock(),createElementBlock(Fragment,null,[createBaseVNode("header",{class:normalizeClass(["header-container h-15 flex flex-wrap items-center justify-between px-5 relative",{"header-container-dark":unref(x)}])},[createBaseVNode("div",_hoisted_1$8,[y[5]||(y[5]=createBaseVNode("span",{class:"article-title-label"},"标题",-1)),withDirectives(createBaseVNode("input",{"onUpdate:modelValue":y[0]||(y[0]=ie=>isRef(f)?f.value=ie:null),class:normalizeClass(["article-title-input",{"article-title-input-dark":unref(x)}]),type:"text","aria-label":"文章标题",placeholder:"未命名文章"},null,2),[[vModelText,unref(f)]]),createVNode(E,{variant:"outline",size:"icon",class:"h-9 w-9 shrink-0",title:"复制标题","aria-label":"复制标题",onClick:J},{default:withCtx(()=>[createVNode(unref(Copy),{class:"h-4 w-4"})]),_:1}),createBaseVNode("span",_hoisted_2$7,"字数："+toDisplayString(unref(w).chars),1)]),createVNode(Y,{class:"editor-tools-menubar hidden md:flex border-0 bg-transparent shadow-none"},{default:withCtx(()=>[createVNode(_sfc_main$f,{"icon-only":"",onOpenEditorState:Q}),createVNode(_sfc_main$g,{"icon-only":"",onCopy:Z}),createVNode(_sfc_main$e,{"icon-only":""}),createVNode(_sfc_main$d,{"icon-only":""}),createVNode(_sfc_main$b,{"icon-only":""})]),_:1}),createBaseVNode("div",_hoisted_3$7,[createVNode(Y,{class:"menubar border-0 p-0"},{default:withCtx(()=>[createVNode(de,null,{default:withCtx(()=>[createVNode(ne,{class:"p-0"},{default:withCtx(()=>[createVNode(E,{variant:"outline",size:"icon"},{default:withCtx(()=>[createVNode(unref(Menu),{class:"size-4"})]),_:1})]),_:1}),createVNode(ue,{align:"start"},{default:withCtx(()=>[createVNode(_sfc_main$f,{"as-sub":!0,onOpenEditorState:Q}),createVNode(_sfc_main$g,{"as-sub":!0,onCopy:Z}),createVNode(_sfc_main$e,{"as-sub":!0}),createVNode(_sfc_main$d,{"as-sub":!0}),createVNode(_sfc_main$b,{"as-sub":!0})]),_:1})]),_:1})]),_:1}),y[6]||(y[6]=createBaseVNode("span",{class:"article-title-label mobile-title-label"},"标题",-1)),withDirectives(createBaseVNode("input",{"onUpdate:modelValue":y[1]||(y[1]=ie=>isRef(f)?f.value=ie:null),class:normalizeClass(["article-title-input mobile-article-title",{"article-title-input-dark":unref(x)}]),type:"text","aria-label":"文章标题",placeholder:"未命名文章"},null,2),[[vModelText,unref(f)]]),createVNode(E,{variant:"outline",size:"icon",class:"h-9 w-9 shrink-0",title:"复制标题","aria-label":"复制标题",onClick:J},{default:withCtx(()=>[createVNode(unref(Copy),{class:"h-4 w-4"})]),_:1}),createBaseVNode("span",_hoisted_4$7,"字数："+toDisplayString(unref(w).chars),1)]),createBaseVNode("div",_hoisted_5$6,[createVNode(I,{"delay-duration":200},{default:withCtx(()=>[createVNode(A,null,{default:withCtx(()=>[createVNode(he,{"as-child":""},{default:withCtx(()=>[createVNode(E,{variant:"outline",size:"icon",class:"h-9 w-9","aria-label":unref(C)===unref(N)?"切换到电脑端预览":"切换到移动端预览",onClick:S},{default:withCtx(()=>[unref(C)===unref(N)?(openBlock(),createBlock(unref(Smartphone),{key:0,class:"h-4 w-4"})):(openBlock(),createBlock(unref(Monitor),{key:1,class:"h-4 w-4"}))]),_:1},8,["aria-label"])]),_:1}),createVNode(me,{side:"bottom"},{default:withCtx(()=>[createTextVNode(toDisplayString(unref(C)===unref(N)?"电脑端预览":"移动端预览"),1)]),_:1})]),_:1})]),_:1}),createVNode(I,{"delay-duration":200},{default:withCtx(()=>[createVNode(A,null,{default:withCtx(()=>[createVNode(he,{"as-child":""},{default:withCtx(()=>[createVNode(E,{variant:"outline",size:"icon",class:normalizeClass(["h-9 w-9",{"bg-accent text-accent-foreground":unref(_)}]),"aria-label":"打开排版设置",onClick:y[2]||(y[2]=ie=>_.value=!unref(_))},{default:withCtx(()=>[createVNode(unref(Palette),{class:"h-4 w-4"})]),_:1},8,["class"])]),_:1}),createVNode(me,{side:"bottom"},{default:withCtx(()=>[...y[7]||(y[7]=[createTextVNode(" 打开排版设置 ",-1)])]),_:1})]),_:1})]),_:1}),createVNode(E,{variant:"outline",class:"h-9",title:"复制可直接粘贴到微信公众号的内容","aria-label":"复制可直接粘贴到微信公众号的内容",onClick:ee},{default:withCtx(()=>[createVNode(unref(Copy),{class:"mr-2 h-4 w-4"}),y[8]||(y[8]=createBaseVNode("span",null,"复制",-1))]),_:1}),unref(V)?(openBlock(),createBlock(E,{key:0,variant:"default",class:"h-9 publish-button",disabled:unref($),onClick:re},{default:withCtx(()=>[createVNode(unref(Send),{class:"mr-2 h-4 w-4"}),createBaseVNode("span",null,toDisplayString(unref($)?"发布中...":"发布"),1)]),_:1},8,["disabled"])):createCommentVNode("",!0),createVNode(G,{class:"hidden md:inline-flex"})])],2),createVNode(K,{visible:unref(P),onClose:y[3]||(y[3]=ie=>P.value=!1)},null,8,["visible"]),createVNode(oe,{open:unref(u).aiImageDialogVisible,"onUpdate:open":y[4]||(y[4]=ie=>unref(u).aiImageDialogVisible=ie)},null,8,["open"])],64)}}}),__unplugin_components_1=_export_sfc(_sfc_main$a,[["__scopeId","data-v-5ede405a"]]),useAIConfigStore=defineStore("AIConfig",()=>{const e=store.reactive("openai_type",DEFAULT_SERVICE_TYPE),t=store.reactive("openai_temperature",DEFAULT_SERVICE_TEMPERATURE),n=store.reactive("openai_max_token",DEFAULT_SERVICE_MAX_TOKEN),o=ref(""),a=ref(""),i=customRef((l,d)=>{let m="";return store.get(`openai_key_${e.value}`).then(p=>{m=p||DEFAULT_SERVICE_KEY}),{get(){return l(),m},set(p){m=p,d(),e.value!==DEFAULT_SERVICE_TYPE&&store.set(`openai_key_${e.value}`,p)}}});return watch(e,async l=>{const d=serviceOptions.find(p=>p.value===l)??serviceOptions[0];o.value=d.endpoint;const m=await store.get(`openai_model_${l}`)||"";a.value=d.models.includes(m)?m:d.models[0],await store.set(`openai_model_${l}`,a.value)},{immediate:!0}),watch(a,async l=>{await store.set(`openai_model_${e.value}`,l)}),{type:e,endpoint:o,model:a,temperature:t,maxToken:n,apiKey:i,reset:async()=>{e.value=DEFAULT_SERVICE_TYPE,t.value=DEFAULT_SERVICE_TEMPERATURE,n.value=DEFAULT_SERVICE_MAX_TOKEN,await Promise.all(serviceOptions.map(async({value:l})=>{await store.remove(`openai_key_${l}`),await store.remove(`openai_model_${l}`)}))}}}),_hoisted_1$7={class:"custom-scroll space-y-4 max-h-[calc(100dvh-10rem)] overflow-y-auto pr-1 text-xs sm:max-h-none sm:text-sm"},_hoisted_2$6={key:0},_hoisted_3$6={key:1},_hoisted_4$6={class:"mt-2 flex flex-col gap-2 sm:flex-row"},_hoisted_5$5={key:2,class:"mt-1 text-xs text-gray-500"},_sfc_main$9=defineComponent({__name:"AIConfig",emits:["saved"],setup(e,{emit:t}){const n=t,o=useAIConfigStore(),{type:a,endpoint:i,model:u,apiKey:l,temperature:d,maxToken:m}=storeToRefs(o),p=ref(!1),w=ref(""),s=computed(()=>serviceOptions.find(b=>b.value===a.value)||serviceOptions[0]);watch(a,()=>{w.value=""}),watch(u,()=>{w.value=""});function C(b=!0){b&&(w.value="✅ 配置已保存",n("saved"))}function x(){o.reset(),w.value="🗑️ 当前 AI 配置已清除"}async function _(){w.value="",p.value=!0;const b={"Content-Type":"application/json"};l.value&&a.value!==DEFAULT_SERVICE_TYPE&&(b.Authorization=`Bearer ${l.value}`);try{const f=new URL(i.value);f.pathname.endsWith("/chat/completions")||(f.pathname=f.pathname.replace(/\/?$/,"/chat/completions"));const N={model:u.value,messages:[{role:"user",content:"ping"}],temperature:0,max_tokens:1,stream:!1},h=await window.fetch(f.toString(),{method:"POST",headers:b,body:JSON.stringify(N)});if(h.ok)w.value="✅ 测试成功，/chat/completions 可用",C(!1);else{const S=await h.text();try{const{error:V}=JSON.parse(S);if(h.status===404&&(V?.code==="ModelNotOpen"||/not activated|未开通/i.test(V?.message))){w.value=`⚠️ 测试成功，但当前模型未开通：${u.value}`,C(!1);return}}catch{}w.value=`❌ 测试失败：${h.status} ${h.statusText}，${S}`}}catch(f){w.value=`❌ 测试失败：${f.message}`}finally{p.value=!1}}return(b,f)=>{const N=_sfc_main$1t,h=_sfc_main$13,S=_sfc_main$14,V=_sfc_main$17,$=_sfc_main$12,F=_sfc_main$19,P=_sfc_main$1u,Q=_sfc_main$B,H=_sfc_main$C,k=_sfc_main$D,T=_sfc_main$E,ce=_sfc_main$1E;return openBlock(),createElementBlock("div",_hoisted_1$7,[f[16]||(f[16]=createBaseVNode("div",{class:"font-medium"}," AI 配置 ",-1)),createBaseVNode("div",null,[createVNode(N,{class:"mb-1 block text-sm font-medium"},{default:withCtx(()=>[...f[7]||(f[7]=[createTextVNode("服务类型",-1)])]),_:1}),createVNode(F,{modelValue:unref(a),"onUpdate:modelValue":f[0]||(f[0]=z=>isRef(a)?a.value=z:null)},{default:withCtx(()=>[createVNode(S,{class:"w-full"},{default:withCtx(()=>[createVNode(h,null,{default:withCtx(()=>[createTextVNode(toDisplayString(unref(s).label),1)]),_:1})]),_:1}),createVNode($,null,{default:withCtx(()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(serviceOptions),z=>(openBlock(),createBlock(V,{key:z.value,value:z.value},{default:withCtx(()=>[createTextVNode(toDisplayString(z.label),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1},8,["modelValue"])]),unref(a)!==unref(DEFAULT_SERVICE_TYPE)?(openBlock(),createElementBlock("div",_hoisted_2$6,[createVNode(N,{class:"mb-1 block text-sm font-medium"},{default:withCtx(()=>[...f[8]||(f[8]=[createTextVNode("API 端点",-1)])]),_:1}),createVNode(P,{modelValue:unref(i),"onUpdate:modelValue":f[1]||(f[1]=z=>isRef(i)?i.value=z:null),placeholder:"输入 API 端点 URL",class:"focus:border-gray-400 focus:ring-1 focus:ring-gray-300"},null,8,["modelValue"])])):createCommentVNode("",!0),unref(a)!==unref(DEFAULT_SERVICE_TYPE)?(openBlock(),createElementBlock("div",_hoisted_3$6,[createVNode(N,{class:"mb-1 block text-sm font-medium"},{default:withCtx(()=>[...f[9]||(f[9]=[createTextVNode("API 密钥",-1)])]),_:1}),createVNode(unref(_sfc_main$z),{modelValue:unref(l),"onUpdate:modelValue":f[2]||(f[2]=z=>isRef(l)?l.value=z:null),placeholder:"sk-...",class:"focus:border-gray-400 focus:ring-1 focus:ring-gray-300"},null,8,["modelValue"])])):createCommentVNode("",!0),createBaseVNode("div",null,[createVNode(N,{class:"mb-1 block text-sm font-medium"},{default:withCtx(()=>[...f[10]||(f[10]=[createTextVNode("模型名称",-1)])]),_:1}),unref(s).models.length>0?(openBlock(),createBlock(F,{key:0,modelValue:unref(u),"onUpdate:modelValue":f[3]||(f[3]=z=>isRef(u)?u.value=z:null)},{default:withCtx(()=>[createVNode(S,{class:"w-full"},{default:withCtx(()=>[createVNode(h,null,{default:withCtx(()=>[createTextVNode(toDisplayString(unref(u)||"请选择模型"),1)]),_:1})]),_:1}),createVNode($,null,{default:withCtx(()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(s).models,z=>(openBlock(),createBlock(V,{key:z,value:z},{default:withCtx(()=>[createTextVNode(toDisplayString(z),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1},8,["modelValue"])):(openBlock(),createBlock(P,{key:1,modelValue:unref(u),"onUpdate:modelValue":f[4]||(f[4]=z=>isRef(u)?u.value=z:null),placeholder:"输入模型名称",class:"focus:border-gray-400 focus:ring-1 focus:ring-gray-300"},null,8,["modelValue"]))]),createBaseVNode("div",null,[createVNode(N,{class:"mb-1 flex items-center gap-1 text-sm font-medium"},{default:withCtx(()=>[f[12]||(f[12]=createTextVNode(" 温度 ",-1)),createVNode(T,null,{default:withCtx(()=>[createVNode(k,null,{default:withCtx(()=>[createVNode(Q,{"as-child":""},{default:withCtx(()=>[createVNode(unref(Info),{class:"text-gray-500",size:16})]),_:1}),createVNode(H,null,{default:withCtx(()=>[...f[11]||(f[11]=[createBaseVNode("div",null,"控制输出的随机性：较低的值使输出更确定，较高的值使其更随机。",-1)])]),_:1})]),_:1})]),_:1})]),_:1}),createVNode(P,{modelValue:unref(d),"onUpdate:modelValue":f[5]||(f[5]=z=>isRef(d)?d.value=z:null),modelModifiers:{number:!0},type:"number",step:"0.1",min:"0",max:"2",placeholder:"0 ~ 2，默认 1",class:"focus:border-gray-400 focus:ring-1 focus:ring-gray-300"},null,8,["modelValue"])]),createBaseVNode("div",null,[createVNode(N,{class:"mb-1 block text-sm font-medium"},{default:withCtx(()=>[...f[13]||(f[13]=[createTextVNode("最大 Token 数",-1)])]),_:1}),createVNode(P,{modelValue:unref(m),"onUpdate:modelValue":f[6]||(f[6]=z=>isRef(m)?m.value=z:null),modelModifiers:{number:!0},type:"number",min:"1",max:"32768",placeholder:"比如 1024",class:"focus:border-gray-400 focus:ring-1 focus:ring-gray-300"},null,8,["modelValue"])]),createBaseVNode("div",_hoisted_4$6,[createVNode(ce,{size:"sm",onClick:C},{default:withCtx(()=>[...f[14]||(f[14]=[createTextVNode(" 保存 ",-1)])]),_:1}),createVNode(ce,{size:"sm",variant:"ghost",onClick:x},{default:withCtx(()=>[...f[15]||(f[15]=[createTextVNode(" 清空 ",-1)])]),_:1}),createVNode(ce,{size:"sm",variant:"outline",disabled:unref(p),onClick:_},{default:withCtx(()=>[createTextVNode(toDisplayString(unref(p)?"测试中...":"测试连接"),1)]),_:1},8,["disabled"])]),unref(w)?(openBlock(),createElementBlock("div",_hoisted_5$5,toDisplayString(unref(w)),1)):createCommentVNode("",!0)])}}}),__unplugin_components_0=_export_sfc(_sfc_main$9,[["__scopeId","data-v-f0efd325"]]),STORAGE_KEY="quick_commands";function hydrate(e){return{...e,buildPrompt:(t="")=>e.template.replace(/\{\{\s*sel\s*\}\}/gi,t)}}const DEFAULT_COMMANDS=[{id:"polish",label:"润色",template:`请润色以下内容：

{{sel}}`},{id:"to-en",label:"翻译成英文",template:`请将以下内容翻译为英文：

{{sel}}`},{id:"to-zh",label:"翻译成中文",template:`Please translate the following content into Chinese:

{{sel}}`},{id:"summary",label:"总结",template:`请对以下内容进行总结：

{{sel}}`}],useQuickCommands=defineStore("quickCommands",()=>{const e=ref([]);async function t(){const u=e.value.map(({id:l,label:d,template:m})=>({id:l,label:d,template:m}));await store.setJSON(STORAGE_KEY,u)}async function n(){const u=await store.getJSON(STORAGE_KEY);if(u&&Array.isArray(u))try{e.value=u.map(hydrate)}catch(l){console.warn("解析快捷指令失败，已恢复默认值",l),e.value=DEFAULT_COMMANDS.map(hydrate),await t()}else e.value=DEFAULT_COMMANDS.map(hydrate),await t()}function o(u,l){const d=crypto.randomUUID();e.value.push(hydrate({id:d,label:u,template:l}))}function a(u,l,d){const m=e.value.findIndex(p=>p.id===u);m!==-1&&(e.value[m]=hydrate({id:u,label:l,template:d}))}function i(u){e.value=e.value.filter(l=>l.id!==u)}return n(),watch(e,t,{deep:!0}),{commands:e,add:o,update:a,remove:i}}),_hoisted_1$6={class:"space-y-4 flex-1 overflow-y-auto pr-1"},_hoisted_2$5={class:"flex justify-end gap-2"},_hoisted_3$5={key:1,class:"flex items-center justify-between"},_hoisted_4$5={class:"break-all text-sm"},_hoisted_5$4={class:"flex gap-1"},_hoisted_6$4={class:"space-y-2 mt-4 border rounded-md p-3"},_sfc_main$8=defineComponent({__name:"QuickCommandManager",props:{open:{type:Boolean}},emits:["update:open"],setup(e,{emit:t}){const n=e,o=t,a=ref(n.open);watch(()=>n.open,_=>a.value=_),watch(a,_=>o("update:open",_));const i=useQuickCommands(),u=ref(""),l=ref("");function d(){!u.value.trim()||!l.value.trim()||(i.add(u.value.trim(),l.value.trim()),u.value="",l.value="")}const m=ref(null),p=ref(""),w=ref("");function s(_){m.value=_.id,p.value=_.label,w.value=_.template}function C(){m.value=null}function x(){!p.value.trim()||!w.value.trim()||(i.update(m.value,p.value.trim(),w.value.trim()),m.value=null)}return(_,b)=>(openBlock(),createBlock(unref(_sfc_main$1y),{open:a.value,"onUpdate:open":b[4]||(b[4]=f=>a.value=f)},{default:withCtx(()=>[createVNode(unref(_sfc_main$1x),{class:"max-h-[90vh] w-[92vw] flex flex-col sm:max-w-lg"},{default:withCtx(()=>[createVNode(unref(_sfc_main$1s),null,{default:withCtx(()=>[createVNode(unref(_sfc_main$1q),null,{default:withCtx(()=>[...b[5]||(b[5]=[createTextVNode("管理快捷指令",-1)])]),_:1})]),_:1}),createBaseVNode("div",_hoisted_1$6,[(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(i).commands,f=>(openBlock(),createElementBlock("div",{key:f.id,class:"flex flex-col gap-2 border rounded-md p-3"},[m.value===f.id?(openBlock(),createElementBlock(Fragment,{key:0},[createVNode(unref(_sfc_main$1u),{modelValue:p.value,"onUpdate:modelValue":b[0]||(b[0]=N=>p.value=N),placeholder:"指令名称"},null,8,["modelValue"]),createVNode(unref(_sfc_main$1v),{modelValue:w.value,"onUpdate:modelValue":b[1]||(b[1]=N=>w.value=N),rows:"2",placeholder:"模板内容，支持 {{sel}} 占位"},null,8,["modelValue"]),createBaseVNode("div",_hoisted_2$5,[createVNode(unref(_sfc_main$1E),{size:"xs",onClick:x},{default:withCtx(()=>[...b[6]||(b[6]=[createTextVNode(" 保存 ",-1)])]),_:1}),createVNode(unref(_sfc_main$1E),{variant:"ghost",size:"xs",onClick:C},{default:withCtx(()=>[...b[7]||(b[7]=[createTextVNode(" 取消 ",-1)])]),_:1})])],64)):(openBlock(),createElementBlock("div",_hoisted_3$5,[createBaseVNode("span",_hoisted_4$5,toDisplayString(f.label),1),createBaseVNode("div",_hoisted_5$4,[createVNode(unref(_sfc_main$1E),{variant:"ghost",size:"xs",onClick:N=>s(f)},{default:withCtx(()=>[...b[8]||(b[8]=[createTextVNode(" 编辑 ",-1)])]),_:1},8,["onClick"]),createVNode(unref(_sfc_main$1E),{variant:"outline",size:"xs",onClick:N=>unref(i).remove(f.id)},{default:withCtx(()=>[...b[9]||(b[9]=[createTextVNode(" 删除 ",-1)])]),_:1},8,["onClick"])])]))]))),128))]),createBaseVNode("div",_hoisted_6$4,[createVNode(unref(_sfc_main$1u),{modelValue:u.value,"onUpdate:modelValue":b[2]||(b[2]=f=>u.value=f),placeholder:"指令名称 (如：改写为 SEO 文案)"},null,8,["modelValue"]),createVNode(unref(_sfc_main$1v),{modelValue:l.value,"onUpdate:modelValue":b[3]||(b[3]=f=>l.value=f),rows:"2",placeholder:"模板，可用 {{sel}} 占位，例如：\\n请把以下文字改写为 SEO 友好的标题：\\n\\n{{sel}}"},null,8,["modelValue"]),createVNode(unref(_sfc_main$1E),{class:"w-full",onClick:d},{default:withCtx(()=>[...b[10]||(b[10]=[createTextVNode(" 添加 ",-1)])]),_:1})])]),_:1})]),_:1},8,["open"]))}}),_hoisted_1$5={class:"space-x-1 flex items-center"},_hoisted_2$4={class:"flex-1 truncate"},_hoisted_3$4={key:0,class:"mb-3 flex flex-wrap gap-2 overflow-x-auto pb-1"},_hoisted_4$4={key:1,class:"text-muted-foreground flex items-center gap-2 border rounded-md border-dashed px-3 py-1 text-xs"},_hoisted_5$3={key:2,class:"custom-scroll space-y-3 chat-container mb-4 flex-1 overflow-y-auto pr-2"},_hoisted_6$3={key:0,class:"text-muted-foreground mb-1 italic"},_hoisted_7$2={key:3,class:"relative mt-2"},_hoisted_8$2={class:"bg-background border-border flex flex-col items-baseline gap-2 border rounded-xl px-3 py-2 pr-12 shadow-inner"},memoryKey="ai_memory_context",conversationListKey="ai_conversation_list",_sfc_main$7=defineComponent({__name:"AIAssistantPanel",props:{open:{type:Boolean}},emits:["update:open"],setup(e,{emit:t}){const n=e,o=t,a=useEditorStore(),{editor:i}=storeToRefs(a),u=useUIStore(),{toggleAIImageDialog:l}=u,d=ref(n.open);watch(()=>n.open,G=>d.value=G),watch(d,G=>{o("update:open",G),G&&de(!0)});const m=ref(""),p=ref([]),w=ref(null),s=ref(!1),C=ref(!1),x=ref(null),_=ref(null),b=ref(!1),f=ref(!1),N=ref(null),h=ref([]),S=ref([]),V=useAIConfigStore(),{apiKey:$,endpoint:F,model:P,temperature:Q,maxToken:H,type:k}=storeToRefs(V),T=useQuickCommands();function ce(){try{const G=i.value;return G&&typeof G.getSelection=="function"&&G.getSelection()||""}catch(G){return console.warn("获取选中文本失败",G),""}}function z(G){const K=ce();m.value=G.buildPrompt(K),w.value=null,nextTick(()=>{const oe=document.querySelector('textarea[placeholder*="说些什么" ]');oe?.focus(),oe&&oe.setSelectionRange(oe.value.length,oe.value.length)})}onMounted(async()=>{const G=await store.get(conversationListKey);G&&(h.value=JSON.parse(G));const K=await store.get(memoryKey);S.value=K?JSON.parse(K).map(oe=>({...oe,id:oe.id||crypto.randomUUID()})):R(),await de(!0)});function R(){return[{role:"assistant",content:"你好，我是 AI 助手，有什么可以帮你的？",id:crypto.randomUUID()}]}function le(){const G=S.value.find(oe=>oe.role==="user");if(!G)return`对话 ${new Date().toLocaleString()}`;let K=G.content.trim();return K.length>20&&(K=`${K.substring(0,20)}...`),K}async function Z(){if(!(S.value.length<=1)){if(N.value){const G=h.value.find(K=>K.id===N.value);G&&(G.timestamp=Date.now(),await store.setJSON(conversationListKey,h.value))}else{N.value=crypto.randomUUID();const G={id:N.value,name:le(),timestamp:Date.now()};h.value.unshift(G),await store.setJSON(conversationListKey,h.value)}await store.setJSON(`ai_conversation_${N.value}`,S.value)}}async function ee(){await Z(),N.value=null,S.value=R(),await store.setJSON(memoryKey,S.value),await de(!0),toast.success("已创建新会话")}async function J(G){await Z();const K=await store.getJSON(`ai_conversation_${G}`,[]);K.length>0&&(S.value=K.map(oe=>({...oe,id:oe.id||crypto.randomUUID()})),N.value=G,await store.setJSON(memoryKey,S.value),await de(!0),toast.success("对话已加载"))}async function re(G){h.value=h.value.filter(K=>K.id!==G),await store.setJSON(conversationListKey,h.value),await store.remove(`ai_conversation_${G}`),N.value===G&&(N.value=null,S.value=R(),await store.setJSON(memoryKey,S.value)),toast.success("对话已删除")}function L(){s.value=!1,de(!0)}function y(){o("update:open",!1),setTimeout(()=>{l(!0)},100)}function E(G){if(!(G.isComposing||G.keyCode===229)){if(G.key==="Enter"&&!G.shiftKey)G.preventDefault(),I();else if(G.key==="ArrowUp"){if(G.preventDefault(),p.value.length===0)return;w.value===null?w.value=p.value.length-1:w.value>0&&w.value--,m.value=p.value[w.value]||""}else if(G.key==="ArrowDown"){if(G.preventDefault(),w.value===null)return;w.value<p.value.length-1?(w.value++,m.value=p.value[w.value]||""):(w.value=null,m.value="")}}}async function Y(G,K){copyPlain(G),_.value=K,setTimeout(()=>_.value=null,1500)}async function ne(){x.value&&(x.value.abort(),x.value=null),N.value&&(h.value=h.value.filter(G=>G.id!==N.value),await store.setJSON(conversationListKey,h.value),await store.remove(`ai_conversation_${N.value}`),N.value=null),S.value=R(),await store.setJSON(memoryKey,S.value),de(!0),toast.success("会话已清空")}function ue(){x.value&&(x.value.abort(),x.value=null),C.value=!1;const G=S.value[S.value.length-1];G?.role==="assistant"&&(G.done=!0),de(!0)}async function de(G=!1){await nextTick();const K=document.querySelector(".chat-container");if(K){const oe=K.scrollTop+K.clientHeight>=K.scrollHeight-50;(G||oe)&&(K.scrollTop=K.scrollHeight,await new Promise(ie=>setTimeout(ie,50)))}}function he(){b.value=!b.value}async function me(){if(C.value)return;const G=S.value.length-1;if(G<0||S.value[G].role!=="assistant")return;S.value.splice(G,1),C.value=!0;const K={role:"assistant",content:"",reasoning:"",done:!1};S.value.push(K);const oe=S.value[S.value.length-1];await de(!0),await A(oe)}async function A(G){const K=S.value.slice(-12).filter((M,se,ge)=>!(se===ge.length-1&&M.role==="assistant"&&!M.done)&&!(se===0&&M.role==="assistant"));let oe;if(b.value){const M=[];for(let se=K.length-1;se>=0&&M.length<2;se--){const ge=K[se];(M.length===0||ge.role==="user"||ge.role==="assistant")&&M.unshift(ge)}oe=M}else oe=K.slice(-10);const ie=b.value?[{role:"system",content:`下面是一篇 Markdown 文章全文，请严格以此为主完成后续指令：

${i.value?.state.doc.toString()}`}]:[],te=[{role:"system",content:"你是一个专业的 Markdown 编辑器助手，请用简洁中文回答。"},...ie,...oe],ae={model:P.value,messages:te,temperature:Q.value,max_tokens:H.value,stream:!0},B={"Content-Type":"application/json"};$.value&&k.value!=="default"&&(B.Authorization=`Bearer ${$.value}`),x.value=new AbortController;const W=x.value.signal;try{const M=new URL(F.value);M.pathname.endsWith("/chat/completions")||(M.pathname=M.pathname.replace(/\/?$/,"/chat/completions"));const se=await window.fetch(M.toString(),{method:"POST",headers:B,body:JSON.stringify(ae),signal:W});if(!se.ok||!se.body)throw new Error(`响应错误：${se.status} ${se.statusText}`);const ge=se.body.getReader(),fe=new TextDecoder("utf-8");let xe="";for(;;){const{value:_e,done:we}=await ge.read();if(we){const Ce=S.value[S.value.length-1];Ce.role==="assistant"&&(Ce.done=!0,await de(!0));break}xe+=fe.decode(_e,{stream:!0});const ye=xe.split(`
`);xe=ye.pop()||"";for(const Ce of ye)if(!(!Ce.trim()||Ce.trim()==="data: [DONE]"))try{const Ne=JSON.parse(Ce.replace(/^data: /,"")).choices?.[0]?.delta||{},ve=S.value[S.value.length-1];if(ve!==G)return;Ne.content?ve.content+=Ne.content:Ne.reasoning_content&&(ve.reasoning=(ve.reasoning||"")+Ne.reasoning_content),await de()}catch{}}}catch(M){M.name!=="AbortError"&&(S.value[S.value.length-1].content=`❌ 请求失败: ${M.message}`),await de(!0)}finally{await store.setJSON(memoryKey,S.value),await Z(),C.value=!1,x.value=null}}async function I(){if(!m.value.trim()||C.value)return;p.value.push(m.value.trim()),w.value=null,C.value=!0;const G=m.value.trim();S.value.push({role:"user",content:G}),m.value="";const K={role:"assistant",content:"",reasoning:"",done:!1};S.value.push(K);const oe=S.value[S.value.length-1];await de(!0),await A(oe)}return(G,K)=>{const oe=_sfc_main$8,ie=__unplugin_components_0;return openBlock(),createBlock(unref(_sfc_main$1y),{open:unref(d),"onUpdate:open":K[6]||(K[6]=te=>isRef(d)?d.value=te:null)},{default:withCtx(()=>[createVNode(unref(_sfc_main$1x),{class:"bg-card text-card-foreground h-dvh max-h-dvh w-full flex flex-col rounded-none shadow-xl sm:max-h-[80vh] sm:max-w-2xl sm:rounded-xl"},{default:withCtx(()=>[createVNode(unref(_sfc_main$1s),{class:"space-y-1 flex flex-col items-start"},{default:withCtx(()=>[createBaseVNode("div",_hoisted_1$5,[createVNode(unref(_sfc_main$1q),null,{default:withCtx(()=>[...K[7]||(K[7]=[createTextVNode("AI 对话",-1)])]),_:1}),createVNode(unref(_sfc_main$1E),{title:unref(s)?"AI 对话":"配置参数","aria-label":unref(s)?"AI 对话":"配置参数",variant:"ghost",size:"icon",onClick:K[0]||(K[0]=te=>s.value=!unref(s))},{default:withCtx(()=>[unref(s)?(openBlock(),createBlock(unref(MessageCircle),{key:0,class:"h-4 w-4"})):(openBlock(),createBlock(unref(Settings),{key:1,class:"h-4 w-4"}))]),_:1},8,["title","aria-label"]),createVNode(unref(_sfc_main$1E),{title:"AI 文生图","aria-label":"AI 文生图",variant:"ghost",size:"icon",onClick:K[1]||(K[1]=te=>y())},{default:withCtx(()=>[createVNode(unref(Image),{class:"h-4 w-4"})]),_:1}),createVNode(unref(_sfc_main$1E),{title:"新建会话","aria-label":"新建会话",variant:"ghost",size:"icon",onClick:ee},{default:withCtx(()=>[createVNode(unref(Plus),{class:"h-4 w-4"})]),_:1}),createVNode(unref(_sfc_main$N),null,{default:withCtx(()=>[createVNode(unref(_sfc_main$J),{"as-child":""},{default:withCtx(()=>[createVNode(unref(_sfc_main$1E),{title:"加载对话","aria-label":"加载对话",variant:"ghost",size:"icon"},{default:withCtx(()=>[createVNode(unref(FolderOpen),{class:"h-4 w-4"})]),_:1})]),_:1}),createVNode(unref(_sfc_main$M),{align:"end",class:"max-h-64 overflow-y-auto w-64 z-[9999]"},{default:withCtx(()=>[unref(h).length===0?(openBlock(),createBlock(unref(_sfc_main$K),{key:0,disabled:"",class:"text-muted-foreground text-sm"},{default:withCtx(()=>[...K[8]||(K[8]=[createTextVNode(" 暂无保存的对话 ",-1)])]),_:1})):createCommentVNode("",!0),(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(h),te=>(openBlock(),createBlock(unref(_sfc_main$K),{key:te.id,class:"flex items-center justify-between gap-2 cursor-pointer",onClick:ae=>J(te.id)},{default:withCtx(()=>[createBaseVNode("span",_hoisted_2$4,toDisplayString(te.name),1),createVNode(unref(_sfc_main$1E),{variant:"ghost",size:"icon",class:"h-6 w-6 flex-shrink-0",onClick:withModifiers(ae=>re(te.id),["stop"])},{default:withCtx(()=>[createVNode(unref(Trash2),{class:"h-3 w-3"})]),_:1},8,["onClick"])]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1}),createVNode(unref(_sfc_main$1E),{title:"清空对话内容","aria-label":"清空对话内容",variant:"ghost",size:"icon",onClick:ne},{default:withCtx(()=>[createVNode(unref(Trash2),{class:"h-4 w-4"})]),_:1})]),createVNode(unref(_sfc_main$1r),{class:"text-muted-foreground text-sm"},{default:withCtx(()=>[...K[9]||(K[9]=[createTextVNode(" 使用 AI 助手帮助您编写和优化内容 ",-1)])]),_:1})]),_:1}),unref(s)?createCommentVNode("",!0):(openBlock(),createElementBlock("div",_hoisted_3$4,[unref(T).commands.length?(openBlock(!0),createElementBlock(Fragment,{key:0},renderList(unref(T).commands,te=>(openBlock(),createBlock(unref(_sfc_main$1E),{key:te.id,variant:"secondary",size:"sm",class:"text-xs",onClick:ae=>z(te)},{default:withCtx(()=>[createTextVNode(toDisplayString(te.label),1)]),_:2},1032,["onClick"]))),128)):(openBlock(),createElementBlock("div",_hoisted_4$4," 还没有任何快捷指令，点击右侧添加 ")),createVNode(unref(_sfc_main$1E),{variant:"ghost",size:"icon",title:"管理指令",onClick:K[2]||(K[2]=te=>f.value=!0)},{default:withCtx(()=>[createVNode(unref(Plus),{class:"h-4 w-4"})]),_:1}),createVNode(oe,{open:unref(f),"onUpdate:open":K[3]||(K[3]=te=>isRef(f)?f.value=te:null)},null,8,["open"])])),unref(s)?(openBlock(),createBlock(ie,{key:1,class:"mb-4 w-full border rounded-md p-4",onSaved:L})):createCommentVNode("",!0),unref(s)?createCommentVNode("",!0):(openBlock(),createElementBlock("div",_hoisted_5$3,[(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(S),(te,ae)=>(openBlock(),createElementBlock("div",{key:te.id||ae,class:normalizeClass(["relative flex",te.role==="user"?"justify-end":"justify-start"])},[createBaseVNode("div",{class:normalizeClass(["ring-border/20 max-w-[75%] rounded-2xl px-4 py-2 text-sm leading-relaxed shadow-xs ring-1",te.role==="user"?"bg-black text-white dark:bg-primary dark:text-primary-foreground":"bg-gray-100 text-gray-800 dark:bg-muted/60 dark:text-muted-foreground"])},[te.reasoning?(openBlock(),createElementBlock("div",_hoisted_6$3,toDisplayString(te.reasoning),1)):createCommentVNode("",!0),createBaseVNode("div",{class:normalizeClass(["whitespace-pre-wrap",te.content?"":"animate-pulse text-muted-foreground"])},toDisplayString(te.content||(te.role==="assistant"&&!te.done?"思考中…":"")),3),createBaseVNode("div",{class:normalizeClass(["mt-1 flex",te.role==="user"?"justify-end":"justify-start"])},[ae>0&&!(te.role==="assistant"&&ae===unref(S).length-1&&!te.done)?(openBlock(),createBlock(unref(_sfc_main$1E),{key:0,variant:"ghost",size:"icon",class:"ml-0 h-5 w-5 p-1","aria-label":"复制内容",onClick:B=>Y(te.content,ae)},{default:withCtx(()=>[unref(_)===ae?(openBlock(),createBlock(unref(Check),{key:0,class:"h-3 w-3 text-green-600"})):(openBlock(),createBlock(unref(Copy),{key:1,class:"text-muted-foreground h-3 w-3"}))]),_:2},1032,["onClick"])):createCommentVNode("",!0),te.role==="assistant"&&te.done&&ae===unref(S).length-1?(openBlock(),createBlock(unref(_sfc_main$1E),{key:1,variant:"ghost",size:"icon",class:"ml-1 h-5 w-5 p-1","aria-label":"重新生成",onClick:me},{default:withCtx(()=>[createVNode(unref(RefreshCcw),{class:"text-muted-foreground h-3 w-3"})]),_:1})):createCommentVNode("",!0)],2)],2)],2))),128))])),unref(s)?createCommentVNode("",!0):(openBlock(),createElementBlock("div",_hoisted_7$2,[createBaseVNode("div",_hoisted_8$2,[createVNode(unref(_sfc_main$1v),{modelValue:unref(m),"onUpdate:modelValue":K[4]||(K[4]=te=>isRef(m)?m.value=te:null),placeholder:"说些什么… (Enter 发送，Shift+Enter 换行)",rows:"2",class:"custom-scroll min-h-16 w-full resize-none border-none bg-transparent p-0 focus-visible:outline-hidden focus:outline-hidden focus-visible:ring-0 focus:ring-0 focus-visible:ring-offset-0 focus:ring-offset-0 focus-visible:ring-transparent focus:ring-transparent",onKeydown:E},null,8,["modelValue"]),createVNode(unref(_sfc_main$1E),{size:"sm",variant:"outline",class:normalizeClass(["h-8 flex items-center gap-1 rounded-md px-3 font-medium transition-colors duration-150",[unref(b)?"bg-primary text-white border-primary dark:bg-white dark:text-black dark:border-white":"bg-background text-muted-foreground border-border hover:text-foreground hover:border-foreground dark:bg-muted dark:text-gray-400 dark:hover:text-white dark:hover:border-white/60"]]),"aria-label":"引用全文",onClick:he},{default:withCtx(()=>[(openBlock(),createBlock(resolveDynamicComponent(unref(b)?unref(Check):unref(Copy)),{class:"h-4 w-4"})),K[10]||(K[10]=createBaseVNode("span",{class:"text-xs"},"引用全文",-1))]),_:1},8,["class"]),createVNode(unref(_sfc_main$1E),{disabled:!unref(m).trim()&&!unref(C),size:"icon",class:normalizeClass(["absolute bottom-3 right-3 rounded-full disabled:opacity-40","bg-primary hover:bg-primary/90 text-primary-foreground"]),"aria-label":unref(C)?"暂停":"发送",onClick:K[5]||(K[5]=te=>unref(C)?ue():I())},{default:withCtx(()=>[unref(C)?(openBlock(),createBlock(unref(Pause),{key:0,class:"h-4 w-4"})):(openBlock(),createBlock(unref(Send),{key:1,class:"h-4 w-4"}))]),_:1},8,["disabled","aria-label"])])]))]),_:1})]),_:1},8,["open"])}}}),AIAssistantPanel=_export_sfc(_sfc_main$7,[["__scopeId","data-v-fcd02df6"]]),_hoisted_1$4={class:"space-x-1 flex items-center"},_hoisted_2$3={key:1,class:"custom-scroll space-y-3 flex-1 overflow-y-auto px-6 pb-3"},_hoisted_3$3={class:"border-border custom-scroll bg-muted/20 text-muted-foreground max-h-32 overflow-y-auto whitespace-pre-line border rounded px-3 py-2 text-sm"},_hoisted_4$3={key:0},_hoisted_5$2={class:"custom-scroll border-border max-h-24 min-h-[40px] flex flex-wrap gap-2 overflow-y-auto border rounded px-2 py-1"},_hoisted_6$2=["onClick"],_hoisted_7$1={key:1,class:"min-h-[20px] flex items-center text-xs text-red-500"},_hoisted_8$1={key:2},_hoisted_9$1={key:2,class:"flex justify-end gap-2 px-6 py-3.5 mt-auto"},_sfc_main$6=defineComponent({__name:"ToolBoxPopover",props:{open:{type:Boolean},selectedText:{},isMobile:{type:Boolean}},emits:["update:open"],setup(e,{expose:t,emit:n}){const o=e,a=n,i=ref(!1),u=ref(o.open),l=ref(""),d=ref(!1),m=ref(null),p=ref([]),w=ref(!1),s=ref("optimize"),C=ref(""),x=ref(""),_=useEditorStore(),b=ref(null);watch(()=>o.open,Z=>{u.value=Z,Z&&o.selectedText.trim()&&(C.value=o.selectedText,k())}),watch(u,Z=>a("update:open",Z));const f=useAIConfigStore(),{apiKey:N,endpoint:h,model:S,temperature:V,maxToken:$,type:F}=storeToRefs(f),P=[{value:"optimize",label:"优化文本",defaultPrompt:"请优化文本，使其更通顺易读。"},{value:"summarize",label:"文章总结",defaultPrompt:"请对文本进行摘要，输出主要观点和结论。"},{value:"spellcheck",label:"错别字纠正",defaultPrompt:"请找出并纠正文本中的错别字、标点和语法错误。"},{value:"translate-zh",label:"翻译为中文",defaultPrompt:"请将文本翻译为地道的中文。"},{value:"translate-en",label:"翻译为英文",defaultPrompt:"请将文本翻译为自然流畅的英文。"},{value:"custom",label:"自定义",defaultPrompt:""}];watch(l,async()=>{await nextTick(),b.value?.scrollTo({top:b.value.scrollHeight})}),watch(s,Z=>{Z!=="custom"&&(p.value=[])}),watch(()=>o.selectedText,Z=>{u.value&&(C.value=Z,k())});function Q(Z){const ee=Z.target,J=ee.value.trim();J&&!p.value.includes(J)&&p.value.push(J),ee.value=""}function H(Z){p.value.splice(Z,1)}function k(){l.value="",d.value=!1,w.value=!1,x.value="",m.value?.abort(),m.value=null}async function T(){const Z=C.value.trim();if(!Z||d.value)return;k(),d.value=!0,m.value=new AbortController;const ee="你是一名专业的多语言文本助手，请根据用户的指令处理下列内容。在输出时，不要输出任何额外的信息，只输出处理后的文本。",J=P.find(ne=>ne.value===s.value),re=[];J.defaultPrompt&&re.push(J.defaultPrompt),p.value.length&&re.push(`请同时满足以下要求：${p.value.join("、")}。`),re.length||re.push("请根据最佳实践优化文本。");const L=re.join(" "),y=[{role:"system",content:ee},{role:"user",content:`${L}

待处理文本：
${Z}`}],E={model:S.value,messages:y,temperature:V.value,max_tokens:$.value,stream:!0},Y={"Content-Type":"application/json"};N.value&&F.value!=="default"&&(Y.Authorization=`Bearer ${N.value}`);try{const ne=new URL(h.value);ne.pathname.endsWith("/chat/completions")||(ne.pathname=ne.pathname.replace(/\/?$/,"/chat/completions"));const ue=await window.fetch(ne.toString(),{method:"POST",headers:Y,body:JSON.stringify(E),signal:m.value.signal});if(!ue.ok||!ue.body)throw new Error(`响应错误：${ue.status}`);const de=ue.body.getReader(),he=new TextDecoder("utf-8");let me="";for(;;){const{value:A,done:I}=await de.read();if(I)break;me+=he.decode(A,{stream:!0});const G=me.split(`
`);me=G.pop()||"";for(const K of G)if(!(!K.trim()||K.trim()==="data: [DONE]"))try{const ie=JSON.parse(K.replace(/^data: /,"")).choices?.[0]?.delta?.content;ie?.trim()&&(l.value+=ie,w.value=!0)}catch{}}}catch(ne){ne.name==="AbortError"?console.log("Request aborted by user."):(console.error("请求失败：",ne),x.value=ne.message||"请求失败")}finally{d.value=!1}}function ce(){d.value&&m.value&&(m.value.abort(),d.value=!1)}function z(){const Z=toRaw(_.editor),ee=Z.state.selection.main;Z.dispatch(Z.state.replaceSelection(l.value));const J=Z.state.selection.main;Z.dispatch({selection:{anchor:ee.from,head:J.head}}),Z.focus(),C.value=l.value,k()}function R(){u.value=!0}function le(){u.value=!1,p.value=[],s.value="optimize",k()}return t({dialogVisible:u,runAIAction:T,replaceText:z,show:R,close:le,stopAI:ce}),(Z,ee)=>{const J=__unplugin_components_0;return openBlock(),createBlock(unref(_sfc_main$1y),{open:unref(u),"onUpdate:open":ee[3]||(ee[3]=re=>isRef(u)?u.value=re:null)},{default:withCtx(()=>[createVNode(unref(_sfc_main$1x),{class:"bg-card text-card-foreground flex flex-col w-[95vw] max-h-[90vh] sm:max-h-[85vh] sm:max-w-2xl overflow-hidden p-0"},{default:withCtx(()=>[createVNode(unref(_sfc_main$1s),{class:"space-y-1 flex flex-col items-start px-6 pt-6 pb-4"},{default:withCtx(()=>[createBaseVNode("div",_hoisted_1$4,[createVNode(unref(_sfc_main$1q),null,{default:withCtx(()=>[...ee[4]||(ee[4]=[createTextVNode("AI 工具箱",-1)])]),_:1}),createVNode(unref(_sfc_main$1E),{title:unref(i)?"AI 工具箱":"配置参数","aria-label":unref(i)?"AI 工具箱":"配置参数",variant:"ghost",size:"icon",onClick:ee[0]||(ee[0]=re=>i.value=!unref(i))},{default:withCtx(()=>[unref(i)?(openBlock(),createBlock(unref(WandSparkles),{key:0,class:"h-4 w-4"})):(openBlock(),createBlock(unref(Settings),{key:1,class:"h-4 w-4"}))]),_:1},8,["title","aria-label"])])]),_:1}),unref(i)?(openBlock(),createBlock(J,{key:0,class:"border-border mx-6 mb-4 w-auto border rounded-md p-4",onSaved:ee[1]||(ee[1]=()=>i.value=!1)})):(openBlock(),createElementBlock("div",_hoisted_2$3,[createBaseVNode("div",null,[ee[5]||(ee[5]=createBaseVNode("div",{class:"mb-1.5 text-sm font-medium"}," 选择操作 ",-1)),createVNode(unref(_sfc_main$19),{modelValue:unref(s),"onUpdate:modelValue":ee[2]||(ee[2]=re=>isRef(s)?s.value=re:null)},{default:withCtx(()=>[createVNode(unref(_sfc_main$14),{class:"w-full"},{default:withCtx(()=>[createVNode(unref(_sfc_main$13),{placeholder:"请选择要执行的操作"})]),_:1}),createVNode(unref(_sfc_main$12),null,{default:withCtx(()=>[createVNode(unref(_sfc_main$18),null,{default:withCtx(()=>[(openBlock(),createElementBlock(Fragment,null,renderList(P,re=>createVNode(unref(_sfc_main$17),{key:re.value,value:re.value},{default:withCtx(()=>[createTextVNode(toDisplayString(re.label),1)]),_:2},1032,["value"])),64))]),_:1})]),_:1})]),_:1},8,["modelValue"])]),createBaseVNode("div",null,[ee[6]||(ee[6]=createBaseVNode("div",{class:"mb-1.5 text-sm font-medium"}," 原文 ",-1)),createBaseVNode("div",_hoisted_3$3,toDisplayString(unref(C)),1)]),unref(s)==="custom"?(openBlock(),createElementBlock("div",_hoisted_4$3,[ee[7]||(ee[7]=createBaseVNode("div",{class:"mb-1.5 text-sm font-medium"}," 自定义提示词（可选） ",-1)),createBaseVNode("div",_hoisted_5$2,[(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(p),(re,L)=>(openBlock(),createElementBlock("div",{key:L,class:"text-muted-foreground bg-muted flex items-center gap-1 rounded-full px-2 py-1 text-sm"},[createBaseVNode("span",null,toDisplayString(re),1),createBaseVNode("button",{class:"hover:bg-muted/60 h-4 w-4 flex items-center justify-center rounded-full",onClick:y=>H(L)},[createVNode(unref(X),{class:"h-3 w-3"})],8,_hoisted_6$2)]))),128)),createBaseVNode("input",{class:"min-w-[100px] flex-1 bg-transparent py-1 text-sm focus:outline-hidden",placeholder:"输入提示词后按回车",onKeydown:withKeys(Q,["enter"])},null,32)])])):createCommentVNode("",!0),unref(x)?(openBlock(),createElementBlock("div",_hoisted_7$1,toDisplayString(unref(x)),1)):createCommentVNode("",!0),unref(l)?(openBlock(),createElementBlock("div",_hoisted_8$1,[ee[8]||(ee[8]=createBaseVNode("div",{class:"mb-1.5 text-sm font-medium"}," 处理结果 ",-1)),createBaseVNode("div",{ref_key:"resultContainer",ref:b,class:"custom-scroll border-border bg-background max-h-40 min-h-[60px] overflow-y-auto whitespace-pre-line border rounded px-3 py-2 text-sm"},toDisplayString(unref(l)),513)])):createCommentVNode("",!0)])),unref(i)?createCommentVNode("",!0):(openBlock(),createElementBlock("div",_hoisted_9$1,[unref(d)?(openBlock(),createBlock(unref(_sfc_main$1E),{key:0,variant:"secondary",onClick:ce},{default:withCtx(()=>[createVNode(unref(Pause),{class:"mr-1 h-4 w-4"}),ee[9]||(ee[9]=createTextVNode(" 终止 ",-1))]),_:1})):createCommentVNode("",!0),unref(w)&&!unref(d)?(openBlock(),createBlock(unref(_sfc_main$1E),{key:1,variant:"default",onClick:z},{default:withCtx(()=>[...ee[10]||(ee[10]=[createTextVNode(" 接受 ",-1)])]),_:1})):createCommentVNode("",!0),unref(d)?createCommentVNode("",!0):(openBlock(),createBlock(unref(_sfc_main$1E),{key:2,variant:"outline",disabled:!unref(w)&&!!unref(l),onClick:T},{default:withCtx(()=>[createTextVNode(toDisplayString(unref(w)?"重试":"AI 处理"),1)]),_:1},8,["disabled"]))]))]),_:1})]),_:1},8,["open"])}}}),AIPolishPopover=_export_sfc(_sfc_main$6,[["__scopeId","data-v-efbb8134"]]),_hoisted_1$3={key:0,class:"editor-ai-toolbar absolute top-1/2 -translate-y-1/2 right-0 z-30 transition-all duration-300 ease-out"},_hoisted_2$2={key:0,class:"hint-bubble absolute right-full mr-3 px-4 py-2 bg-[#344047] text-white text-sm font-medium rounded-lg shadow-sm whitespace-nowrap pointer-events-none animate-bounce-gentle z-50",style:{top:"50%",transform:"translateY(-50%)"}},_hoisted_3$2={class:"relative flex items-center gap-2"},_hoisted_4$2={key:1,class:"bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-l border-gray-200/50 dark:border-gray-700/50 shadow-lg overflow-hidden transition-all duration-300 w-12 rounded-l-md",style:{height:"auto"}},_hoisted_5$1={class:"flex flex-col py-2 gap-2"},_hoisted_6$1={class:"flex flex-col items-center gap-1 px-1"},_hoisted_7={class:"flex flex-col items-center gap-1 px-1"},_hoisted_8={key:0,class:"mx-1.5"},_hoisted_9={key:1,class:"flex flex-col items-center gap-1 px-1"},_sfc_main$5=defineComponent({__name:"SidebarAIToolbar",props:{isMobile:{type:Boolean},showEditor:{type:Boolean}},setup(e){const t=useUIStore(),{aiDialogVisible:n,aiImageDialogVisible:o}=storeToRefs(t),{toggleAIDialog:a,toggleAIImageDialog:i}=t,u=useEditorStore(),{editor:l}=storeToRefs(u),{hasShownAIToolboxHint:d}=storeToRefs(t),m=ref(!1),p=ref(!1),w=ref(!1);let s=null,C=null,x="";function _(){try{if(!l.value)return"";const F=l.value.state.selection.main;return l.value.state.doc.sliceString(F.from,F.to).trim()}catch{return""}}function b(){if(d.value)return;const F=_();F!==x&&(x=F,s&&(clearTimeout(s),s=null),F&&!m.value?(w.value=!0,d.value=!0,s=setTimeout(()=>{w.value=!1},3e3)):w.value=!1)}const f=computed(()=>!l.value||!m.value?!1:_().length>0),N=computed(()=>p.value?_():"");function h(){m.value=!m.value,m.value&&(w.value=!1,s&&(clearTimeout(s),s=null))}function S(){a(!0)}function V(){i(!0)}function $(){p.value=!0}return onMounted(()=>{C=setInterval(()=>{b()},300);const F=P=>{if(!m.value)return;const Q=P.target;if(!Q)return;const H=document.querySelector(".editor-ai-toolbar");if(H&&H.contains(Q))return;["dialog",".popover",".modal",'[role="dialog"]',"nav",".menu",".dropdown",".tooltip",".floating",".ai-assistant-panel",".ai-image-generator-panel"].some(ce=>Q.closest(ce))||(m.value=!1)};document.addEventListener("click",F,!0),document.addEventListener("touchstart",F,!0),onUnmounted(()=>{document.removeEventListener("click",F,!0),document.removeEventListener("touchstart",F,!0),s&&(clearTimeout(s),s=null),C&&(clearInterval(C),C=null)})}),(F,P)=>!e.isMobile||e.isMobile&&e.showEditor?(openBlock(),createElementBlock("div",_hoisted_1$3,[unref(m)?(openBlock(),createElementBlock("div",_hoisted_4$2,[createBaseVNode("div",_hoisted_5$1,[createBaseVNode("div",_hoisted_6$1,[createBaseVNode("button",{class:"group relative w-7 h-7 rounded-lg bg-[#5d8fa8] hover:bg-[#4f7c92] text-white shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center justify-center utools-ai-button",title:"AI助手",onClick:S},[createVNode(unref(Bot),{class:"h-4 w-4"})]),P[5]||(P[5]=createBaseVNode("span",{class:"text-[9px] text-gray-500 dark:text-gray-400 font-medium text-center leading-tight"}," 助手 ",-1))]),P[9]||(P[9]=createBaseVNode("div",{class:"mx-1.5"},[createBaseVNode("div",{class:"h-px bg-gray-200/50 dark:bg-gray-700/50"})],-1)),createBaseVNode("div",_hoisted_7,[createBaseVNode("button",{class:"group relative w-7 h-7 rounded-lg bg-[#8c7aa8] hover:bg-[#786894] text-white shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center justify-center utools-ai-button",title:"AI文生图",onClick:V},[createVNode(unref(Image),{class:"h-4 w-4"})]),P[6]||(P[6]=createBaseVNode("span",{class:"text-[9px] text-gray-500 dark:text-gray-400 font-medium text-center leading-tight"}," 文生图 ",-1))]),unref(f)&&unref(m)?(openBlock(),createElementBlock("div",_hoisted_8,[...P[7]||(P[7]=[createBaseVNode("div",{class:"h-px bg-gray-200/50 dark:bg-gray-700/50"},null,-1)])])):createCommentVNode("",!0),unref(f)&&unref(m)?(openBlock(),createElementBlock("div",_hoisted_9,[createBaseVNode("button",{class:"group relative w-7 h-7 rounded-lg bg-[#2e9b68] hover:bg-[#277f56] text-white shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center justify-center utools-ai-button",title:"AI工具箱",onClick:$},[createVNode(unref(WandSparkles),{class:"h-4 w-4"})]),P[8]||(P[8]=createBaseVNode("span",{class:"text-[9px] text-gray-500 dark:text-gray-400 font-medium text-center leading-tight"}," 工具箱 ",-1))])):createCommentVNode("",!0)])])):(openBlock(),createElementBlock("div",{key:0,class:normalizeClass(["w-5 h-16 bg-[#e7f3ee] hover:bg-[#d8ebdf] dark:bg-[#344047] dark:hover:bg-[#3f5058] cursor-pointer transition-colors duration-200 flex items-center justify-center rounded-l-lg group utools-sidebar-edge",{"animate-pulse-hint":unref(w)}]),title:"展开AI工具栏",onClick:h},[createVNode(unref(Settings2),{class:"h-4 w-4 text-white drop-shadow-sm group-hover:scale-110 transition-transform duration-200"}),createVNode(Transition,{name:"hint-fade"},{default:withCtx(()=>[unref(w)?(openBlock(),createElementBlock("div",_hoisted_2$2,[createBaseVNode("div",_hoisted_3$2,[createVNode(unref(WandSparkles),{class:"h-4 w-4"}),P[3]||(P[3]=createBaseVNode("span",null,"点击打开 AI 工具箱",-1)),P[4]||(P[4]=createBaseVNode("div",{class:"hint-arrow absolute top-1/2 -right-2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-b-[6px] border-l-[6px] border-transparent border-l-purple-500"},null,-1))])])):createCommentVNode("",!0)]),_:1})],2)),createVNode(AIAssistantPanel,{open:unref(n),"onUpdate:open":P[0]||(P[0]=Q=>isRef(n)?n.value=Q:null)},null,8,["open"]),createVNode(AIImageGeneratorPanel,{open:unref(o),"onUpdate:open":P[1]||(P[1]=Q=>isRef(o)?o.value=Q:null)},null,8,["open"]),createVNode(unref(AIPolishPopover),{open:unref(p),"onUpdate:open":P[2]||(P[2]=Q=>isRef(p)?p.value=Q:null),"selected-text":unref(N),"is-mobile":e.isMobile},null,8,["open","selected-text","is-mobile"])])):createCommentVNode("",!0)}}),SidebarAIToolbar=_export_sfc(_sfc_main$5,[["__scopeId","data-v-a3e6b70f"]]),_hoisted_1$2={key:0,class:"bg-border z-10 h-4 w-3 flex items-center justify-center border rounded-sm"},_sfc_main$4=defineComponent({__name:"ResizableHandle",props:{id:{},hitAreaMargins:{},tabindex:{},disabled:{type:Boolean},nonce:{},asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]},withHandle:{type:Boolean}},emits:["dragging"],setup(e,{emit:t}){const n=e,o=t,a=reactiveOmit(n,"class"),i=useForwardPropsEmits(a,o);return(u,l)=>(openBlock(),createBlock(unref(SplitterResizeHandle_default),mergeProps(unref(i),{class:unref(cn)("relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[orientation=vertical]:h-px data-[orientation=vertical]:w-full data-[orientation=vertical]:after:left-0 data-[orientation=vertical]:after:h-1 data-[orientation=vertical]:after:w-full data-[orientation=vertical]:after:-translate-y-1/2 data-[orientation=vertical]:after:translate-x-0 [&[data-orientation=vertical]>div]:rotate-90",n.class)}),{default:withCtx(()=>[n.withHandle?(openBlock(),createElementBlock("div",_hoisted_1$2,[createVNode(unref(GripVertical),{class:"h-2.5 w-2.5"})])):createCommentVNode("",!0)]),_:1},16,["class"]))}}),_sfc_main$3=defineComponent({__name:"ResizablePanelGroup",props:{id:{},autoSaveId:{},direction:{},keyboardResizeBy:{},storage:{},asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]}},emits:["layout"],setup(e,{emit:t}){const n=e,o=t,a=reactiveOmit(n,"class"),i=useForwardPropsEmits(a,o);return(u,l)=>(openBlock(),createBlock(unref(SplitterGroup_default),mergeProps(unref(i),{class:unref(cn)("flex h-full w-full data-[panel-group-direction=vertical]:flex-col",n.class)}),{default:withCtx(()=>[renderSlot(u.$slots,"default")]),_:3},16,["class"]))}}),_hoisted_1$1={class:"flex flex-col gap-0.5"},_hoisted_2$1={class:"flex items-center gap-1"},_hoisted_3$1={class:"w-10 select-none text-center text-xs"},_hoisted_4$1={key:0,class:"flex items-center gap-1"},_sfc_main$2=defineComponent({__name:"SearchTab",props:{editorView:{}},setup(e,{expose:t}){const n=e,o=ref(!1),a=ref(null),i=ref(""),u=ref(!1),l=ref(!1),d=ref(!1),m=ref(0),p=ref(!1),w=ref(""),s=ref(null),C=ref([]),x=computed(()=>C.value.length),_=computed(()=>ee()?C.value[m.value]:null),b=StateEffect.define(),f=StateField.define({create(){return Decoration.none},update(J,re){for(const L of re.effects)if(L.is(b))return L.value;return J},provide:J=>EditorView.decorations.from(J)});onMounted(()=>{n.editorView.state.field(f,!1)||n.editorView.dispatch({effects:StateEffect.appendConfig.of(f)})}),watch([i,u,l,d],()=>{useDebounceFn(()=>{C.value=[],i.value===""?N():(m.value=0,S())},300)()}),watch([m,C],()=>{h()}),watch(o,async()=>{if(!o.value)N(),d.value=!1,s.value=null;else{const J=n.editorView.state.selection.main;J.empty||(d.value=!0,s.value={from:J.from,to:J.to}),h(),await nextTick(),setTimeout(()=>{a.value?.focus(),a.value?.select()},0)}});function N(){n.editorView.dispatch({effects:b.of(Decoration.none)})}function h(){const J=[];C.value.forEach((L,y)=>{const E=L[0],Y=L[1],ne=n.editorView.state.doc.line(E.line+1),ue=n.editorView.state.doc.line(Y.line+1),de=ne.from+E.ch,he=ue.from+Y.ch,me=y===m.value,A=Decoration.mark({class:me?"cm-searchMatch-selected":"cm-searchMatch"});J.push(A.range(de,he))});const re=Decoration.set(J,!0);if(n.editorView.dispatch({effects:b.of(re)}),C.value[m.value]?.[0]){const L=C.value[m.value][0],E=n.editorView.state.doc.line(L.line+1).from+L.ch;n.editorView.dispatch({selection:{anchor:E,head:E},scrollIntoView:!0})}}function S(){if(!i.value||!o.value)return;let J=0,re=n.editorView.state.doc.length;d.value&&s.value&&(J=s.value.from,re=s.value.to);const L=n.editorView.state.sliceDoc(J,re),y=i.value,E=[];if(y)if(u.value)try{const Y=`gm${l.value?"":"i"}`,ne=new RegExp(y,Y);let ue;for(;(ue=ne.exec(L))!==null;){if(ue[0].length===0){ne.lastIndex++;continue}const de=ue.index+J,he=ue.index+ue[0].length+J,me=n.editorView.state.doc.lineAt(de),A=n.editorView.state.doc.lineAt(he);E.push([{line:me.number-1,ch:de-me.from},{line:A.number-1,ch:he-A.from}])}}catch(Y){console.warn("Invalid Regex",Y)}else{const Y=L.split(`
`),ne=l.value?y:y.toLowerCase();Y.forEach((ue,de)=>{const he=l.value?ue:ue.toLowerCase();let me=0,A=he.indexOf(ne,me);for(;A!==-1;){const G=n.editorView.state.doc.lineAt(J).number-1+de;E.push([{line:G,ch:A},{line:G,ch:A+y.length}]),me=A+1,A=he.indexOf(ne,me)}})}C.value=E,C.value.length>0&&m.value>=C.value.length&&(m.value=C.value.length-1)}function V(){ee()&&(m.value=(m.value+1)%x.value)}function $(){ee()&&(m.value=(m.value-1+x.value)%x.value)}function F(){p.value=!p.value}function P(){u.value=!u.value}function Q(){l.value=!l.value}function H(){if(d.value)s.value=null;else{const J=n.editorView.state.selection.main;J.empty?s.value={from:0,to:n.editorView.state.doc.length}:s.value={from:J.from,to:J.to}}d.value=!d.value}function k(){o.value=!1}function T(J){J.key==="Enter"&&(V(),J.preventDefault())}function ce(J){J.key==="Enter"&&(z(),J.preventDefault())}function z(){if(!ee()||!_.value)return;const J=_.value[0],re=_.value[1],L=n.editorView.state.doc.line(J.line+1),y=n.editorView.state.doc.line(re.line+1),E=L.from+J.ch,Y=y.from+re.ch;let ne=w.value;if(u.value)try{ne=n.editorView.state.sliceDoc(E,Y).replace(new RegExp(i.value,"gm"),w.value)}catch(ue){console.warn("Invalid Regex Replacement",ue)}n.editorView.dispatch({changes:{from:E,to:Y,insert:ne},selection:{anchor:E+ne.length}}),S()}function R(){if(!ee()||!_.value)return;const re=[...C.value].sort((L,y)=>L[0].line!==y[0].line?y[0].line-L[0].line:y[0].ch-L[0].ch).map(L=>{const y=L[0],E=L[1],Y=n.editorView.state.doc.line(y.line+1),ne=n.editorView.state.doc.line(E.line+1),ue=Y.from+y.ch,de=ne.from+E.ch;let he=w.value;if(u.value)try{he=n.editorView.state.sliceDoc(ue,de).replace(new RegExp(i.value,"gm"),w.value)}catch(me){console.warn("Invalid Regex Replacement",me)}return{from:ue,to:de,insert:he}});n.editorView.dispatch({changes:re}),S()}function le(J){i.value=J,o.value?setTimeout(()=>{a.value?.focus(),a.value?.select()},0):o.value=!0}function Z(J){i.value=J,p.value=!0,o.value?setTimeout(()=>{a.value?.focus(),a.value?.select()},0):o.value=!0}onUnmounted(()=>{N()});function ee(){return x.value>0}return t({showSearchTab:o,searchWord:i,setSearchWord:le,setSearchWithReplace:Z,showReplace:p}),(J,re)=>{const L=_sfc_main$1E,y=_sfc_main$1u;return openBlock(),createBlock(Transition,{name:"slide-down"},{default:withCtx(()=>[unref(o)?(openBlock(),createElementBlock("div",{key:0,class:normalizeClass(["bg-background absolute right-0 top-0 z-50 min-w-[300px] w-fit flex gap-1 border rounded-lg px-2 py-1 shadow-md transition-all",unref(p)?"items-start":"items-center"])},[createVNode(L,{variant:"ghost",title:"切换替换","aria-label":"切换替换",class:"h-7 w-5 flex items-center justify-center p-0",onClick:F},{default:withCtx(()=>[(openBlock(),createBlock(resolveDynamicComponent(unref(p)?unref(ChevronDown):unref(ChevronRight)),{class:"h-3.5 w-3.5"}))]),_:1}),createBaseVNode("div",_hoisted_1$1,[createBaseVNode("div",_hoisted_2$1,[createVNode(y,{ref_key:"searchInputRef",ref:a,modelValue:unref(i),"onUpdate:modelValue":re[0]||(re[0]=E=>isRef(i)?i.value=E:null),placeholder:"查找",class:"h-7 w-40 text-sm",onKeydown:T},null,8,["modelValue"]),createVNode(L,{variant:"ghost",size:"xs",title:"区分大小写","aria-label":"区分大小写",class:normalizeClass(["h-6 w-6 p-0",{"bg-accent":unref(l)}]),onClick:Q},{default:withCtx(()=>[createVNode(unref(CaseSensitive),{class:"h-3 w-3"})]),_:1},8,["class"]),createVNode(L,{variant:"ghost",size:"xs",title:"正则表达式","aria-label":"正则表达式",class:normalizeClass(["h-6 w-6 p-0",{"bg-accent":unref(u)}]),onClick:P},{default:withCtx(()=>[createVNode(unref(Regex),{class:"h-3 w-3"})]),_:1},8,["class"]),createVNode(L,{variant:"ghost",size:"xs",title:"在选区内查找","aria-label":"在选区内查找",class:normalizeClass(["h-6 w-6 p-0",{"bg-accent":unref(d)}]),onClick:H},{default:withCtx(()=>[createVNode(unref(WholeWord),{class:"h-3 w-3"})]),_:1},8,["class"]),createBaseVNode("span",_hoisted_3$1,toDisplayString(unref(x)?unref(m)+1:0)+"/"+toDisplayString(unref(x)),1),createVNode(L,{variant:"ghost",size:"xs",title:"上一处","aria-label":"上一处",class:"h-6 w-6 p-0",onClick:$},{default:withCtx(()=>[createVNode(unref(ChevronUp),{class:"h-3 w-3"})]),_:1}),createVNode(L,{variant:"ghost",size:"xs",title:"下一处","aria-label":"下一处",class:"h-6 w-6 p-0",onClick:V},{default:withCtx(()=>[createVNode(unref(ChevronDown),{class:"h-3 w-3"})]),_:1}),createVNode(L,{variant:"ghost",size:"xs",title:"关闭","aria-label":"关闭",class:"h-6 w-6 p-0",onClick:k},{default:withCtx(()=>[createVNode(unref(X),{class:"h-3 w-3"})]),_:1})]),unref(p)?(openBlock(),createElementBlock("div",_hoisted_4$1,[createVNode(y,{modelValue:unref(w),"onUpdate:modelValue":re[1]||(re[1]=E=>isRef(w)?w.value=E:null),placeholder:"替换",class:"h-7 w-40 text-sm",onKeydown:ce},null,8,["modelValue"]),createVNode(L,{variant:"ghost",size:"xs",title:"替换","aria-label":"替换",class:"h-6 w-6 p-0",onClick:z},{default:withCtx(()=>[createVNode(unref(Replace),{class:"h-3 w-3"})]),_:1}),createVNode(L,{variant:"ghost",size:"xs",title:"全部替换","aria-label":"全部替换",class:"h-6 w-6 p-0",onClick:R},{default:withCtx(()=>[createVNode(unref(ReplaceAll),{class:"h-3 w-3"})]),_:1})])):createCommentVNode("",!0)])],2)):createCommentVNode("",!0)]),_:1})}}}),SearchTab=_export_sfc(_sfc_main$2,[["__scopeId","data-v-4ab718de"]]);async function getConfig(e,t){if(e){const a=t==="github"?githubConfig:giteeConfig,{username:i,repoList:u,branch:l,accessTokenList:d}=a,m=Math.floor(Math.random()*d.length),p=d[m].replace("doocsmd",""),w=Math.floor(Math.random()*u.length),s=u[w];return{username:i,repo:s,branch:l,accessToken:p}}const n=await store.getJSON(`${t}Config`,{})||{},o=n.repo.replace(`https://${t}.com/`,"").replace(`http://${t}.com/`,"").replace(`${t}.com/`,"").split("/");return{username:o[0],repo:o[1],branch:n.branch||"master",accessToken:n.accessToken}}function getDir(){const e=new Date,t=e.getFullYear(),n=(e.getMonth()+1).toString().padStart(2,"0"),o=e.getDate().toString().padStart(2,"0");return`${t}/${n}/${o}`}function getDateFilename(e){const t=new Date().getTime(),n=e.split(".").pop();return`${t}-${v4()}.${n}`}async function ghFileUpload(e,t){const n=await store.get("imgHost")==="default",{username:o,repo:a,branch:i,accessToken:u}=await getConfig(n,"github"),l=getDir(),d=`https://api.github.com/repos/${o}/${a}/contents/${l}/`,m=getDateFilename(t),p=await service({url:d+m,method:"put",headers:{Authorization:`token ${u}`},data:{content:e,branch:i,message:`Upload by ${window.location.href}`}}),w=`raw.githubusercontent.com/${o}/${a}/${i}/`,s=`fastly.jsdelivr.net/gh/${o}/${a}@${i}/`;return p.content=p.data?.content||p.content,n?p.content.download_url.replace(w,s):p.content.download_url}async function giteeUpload(e,t){const n=await store.get("imgHost")==="default",{username:o,repo:a,branch:i,accessToken:u}=await getConfig(n,"gitee"),l=getDir(),d=getDateFilename(t),m=`https://gitee.com/api/v5/repos/${o}/${a}/contents/${l}/${d}`,p=await service({url:m,method:"POST",data:{content:e,branch:i,access_token:u,message:`Upload by ${window.location.href}`}});return p.content=p.data?.content||p.content,encodeURI(p.content.download_url)}function getQiniuToken(e,t,n){const o=JSON.stringify(n),a=base64encode(utf16to8(o)),u=CryptoJS.HmacSHA1(a,t).toString(CryptoJS.enc.Base64);return`${e}:${safe64(u)}:${a}`}async function qiniuUpload(e){const t=await store.get("qiniuConfig"),{accessKey:n,secretKey:o,bucket:a,region:i,path:u,domain:l}=JSON.parse(t),d=getQiniuToken(n,o,{scope:a,deadline:Math.trunc(new Date().getTime()/1e3)+3600}),p=(u?`${u}/`:"")+getDateFilename(e.name),w=upload(e,p,d,{},{region:i});return new Promise((s,C)=>{w.subscribe({next:x=>{console.log(x)},error:x=>{C(x.message)},complete:x=>{s(`${l}/${x.key}`)}})})}async function aliOSSFileUpload(e){const t=getDateFilename(e.name),n=await store.getJSON("aliOSSConfig",{region:"",bucket:"",accessKeyId:"",accessKeySecret:"",useSSL:!0,cdnHost:"",path:""}),{region:o,bucket:a,accessKeyId:i,accessKeySecret:u,useSSL:l,cdnHost:d,path:m}=n||{region:"",bucket:"",accessKeyId:"",accessKeySecret:"",useSSL:!0,cdnHost:"",path:""},p=m?`${m}/${t}`:t,w=l===void 0||l,s=w?"https":"http",C=new OSS({region:o,bucket:a,accessKeyId:i,accessKeySecret:u,secure:w});try{return await C.put(p,e),d?`${d}/${p}`:`${s}://${a}.${o}.aliyuncs.com/${p}`}catch(x){return Promise.reject(x)}}async function txCOSFileUpload(e){const t=getDateFilename(e.name),n=await store.get("txCOSConfig"),{secretId:o,secretKey:a,bucket:i,region:u,path:l,cdnHost:d}=JSON.parse(n),m=new COS({SecretId:o,SecretKey:a});return new Promise((p,w)=>{m.putObject({Bucket:i,Region:u,Key:`${l}/${t}`,Body:e},(s,C)=>{s?w(s):p(d?l===""?`${d}/${t}`:`${d}/${l}/${t}`:`https://${C.Location}`)})})}async function minioFileUpload(e){const t=getDateFilename(e.name),n=await store.get("minioConfig"),{endpoint:o,port:a,useSSL:i,bucket:u,accessKey:l,secretKey:d}=JSON.parse(n),m=new S3Client({endpoint:`${i?"https":"http"}://${o}${a?`:${a}`:""}`,credentials:{accessKeyId:l,secretAccessKey:d},region:"auto",forcePathStyle:!0}),p=new PutObjectCommand({Bucket:u,Key:t,ContentType:e.type}),w=await getSignedUrl(m,p,{expiresIn:300});return await service(w,{method:"PUT",headers:{"Content-Type":e.type},data:e}).catch(s=>{console.log(s)}),`${i?"https":"http"}://${o}${a?`:${a}`:""}/${u}/${t}`}async function getMpToken(e,t,n){const o=await store.get(`mpToken:${e}`);if(o){const l=JSON.parse(o);if(l.expire&&l.expire>new Date().getTime())return l.access_token}const a={method:"POST",data:{grant_type:"client_credential",appid:e,secret:t}};let i="https://api.weixin.qq.com/cgi-bin/stable_token";n&&(i=`${n}/cgi-bin/stable_token`);const u=await service(i,a);if(u.access_token){const l={...u,expire:new Date().getTime()+u.expires_in*1e3};return await store.setJSON(`mpToken:${e}`,l),u.access_token}return""}async function mpFileUpload(e){const t=await store.get("mpConfig");let{appID:n,appsecret:o,proxyOrigin:a}=JSON.parse(t);const i=await getMpToken(n,o,a);if(!i)throw new Error("获取 access_token 失败");const u=new FormData;u.append("media",e,e.name);const l={method:"POST",data:u};let d=`https://api.weixin.qq.com/cgi-bin/material/add_material?access_token=${i}&type=image`;const m=e.size/(1024*1024),p=e.type.toLowerCase();m<1&&(p==="image/jpeg"||p==="image/png")&&(d=`https://api.weixin.qq.com/cgi-bin/media/uploadimg?access_token=${i}`),a&&(d=d.replace("https://api.weixin.qq.com",a));const w=await service(d,l);if(!w.url)throw new Error("上传失败，未获取到URL");let s=w.url;return a&&window.location.href.startsWith("http")&&(s=`https://wsrv.nl?url=${encodeURIComponent(s)}`),s}async function r2Upload(e){const t=await store.get("r2Config"),{accountId:n,accessKey:o,secretKey:a,bucket:i,path:u,domain:l}=JSON.parse(t),m=(u?`${u}/`:"")+getDateFilename(e.name),p=new S3Client({region:"auto",endpoint:`https://${n}.r2.cloudflarestorage.com`,credentials:{accessKeyId:o,secretAccessKey:a}}),w=await getSignedUrl(p,new PutObjectCommand({Bucket:i,Key:m,ContentType:e.type}),{expiresIn:300});return await service(w,{method:"PUT",headers:{"Content-Type":e.type},data:e}).catch(s=>{console.log(s)}),`${l}/${m}`}async function upyunUpload(e){const t=await store.get("upyunConfig"),{bucket:n,operator:o,password:a,path:i,domain:u}=JSON.parse(t),l=`${i}/${getDateFilename(e.name)}`,d=`/${n}/${l}`,m=await e.arrayBuffer(),p=new Date().toUTCString(),s=["PUT",d,p].join("&"),C=CryptoJS.MD5(a).toString(),x=CryptoJS.HmacSHA1(s,C).toString(CryptoJS.enc.Base64),_=`UPYUN ${o}:${x}`,b=`https://v0.api.upyun.com${d}`,f=await window.fetch(b,{method:"PUT",headers:{Authorization:_,"X-Date":p,"Content-Type":e.type},body:m});if(!f.ok)throw new Error(`上传失败: ${await f.text()}`);return`${u}/${l}`}async function telegramUpload(e){const t=await store.getJSON("telegramConfig",{token:"",chatId:""}),{token:n,chatId:o}=t||{token:"",chatId:""},a=new FormData;a.append("chat_id",o),a.append("photo",e,e.name);const i=await service({url:`https://api.telegram.org/bot${n}/sendPhoto`,method:"POST",data:a});if(!i.ok||!i.result.photo.length)throw new Error("Telegram sendPhoto 失败");const u=i.result.photo[i.result.photo.length-1].file_id,l=await service({url:`https://api.telegram.org/bot${n}/getFile?file_id=${u}`,method:"GET"});if(!l.ok)throw new Error("Telegram getFile 失败");const d=l.result.file_path;return`https://api.telegram.org/file/bot${n}/${d}`}async function cloudinaryUpload(e){const t=await store.getJSON("cloudinaryConfig",{cloudName:"",apiKey:"",apiSecret:"",uploadPreset:"",folder:"",domain:""}),{cloudName:n,apiKey:o,apiSecret:a,uploadPreset:i,folder:u="",domain:l}=t||{cloudName:"",apiKey:"",apiSecret:"",uploadPreset:"",folder:"",domain:""};if(!n||!o)throw new Error("Cloudinary 配置缺少 cloudName / apiKey");const d=Math.floor(Date.now()/1e3),m=new FormData;if(m.append("file",e),m.append("api_key",o),m.append("timestamp",`${d}`),a){const C=[];u&&C.push(`folder=${u}`),i&&C.push(`upload_preset=${i}`),C.push(`timestamp=${d}`);const x=C.sort().join("&"),_=CryptoJS.SHA1(x+a).toString();m.append("signature",_)}else if(i)m.append("upload_preset",i);else throw new Error("未配置 apiSecret 时必须提供 uploadPreset");u&&m.append("folder",u);const p=`https://api.cloudinary.com/v1_1/${n}/image/upload`,w=await service(p,{method:"POST",data:m}),s=w.secure_url||w.url;if(!s)throw new Error("Cloudinary 返回缺少 url 字段");if(l){const{pathname:C,search:x}=new URL(s);return`${l}${C}${x}`}return s}async function formCustomUpload(content,file){const customConfig=await store.get("formCustomConfig"),str=`
    async (CUSTOM_ARG) => {
      ${customConfig}
    }
  `;return new Promise((resolve,reject)=>{const exportObj={content,file,util:{axios:service,CryptoJS,OSS,COS,Buffer,uuidv4:v4,qiniu,tokenTools,getDir,getDateFilename},okCb:resolve,errCb:reject};eval(str)(exportObj).catch(e=>{console.error(e),reject(e)})})}async function fileUpload(e,t){const n=await store.get("imgHost");switch(n||await store.set("imgHost","default"),n){case"aliOSS":return aliOSSFileUpload(t);case"minio":return minioFileUpload(t);case"txCOS":return txCOSFileUpload(t);case"qiniu":return qiniuUpload(t);case"gitee":return giteeUpload(e,t.name);case"github":return ghFileUpload(e,t.name);case"mp":return mpFileUpload(t);case"r2":return r2Upload(t);case"upyun":return upyunUpload(t);case"telegram":return telegramUpload(t);case"cloudinary":return cloudinaryUpload(t);case"formCustom":return formCustomUpload(e,t);default:return ghFileUpload(e,t.name)}}const _hoisted_1={class:"container flex flex-col"},_hoisted_2={class:"container-main flex flex-1 flex-col"},_hoisted_3={class:"container-main-section border-radius-10 relative flex flex-1 overflow-hidden border"},_hoisted_4=["innerHTML"],_hoisted_5={key:0,class:"loading-mask"},_hoisted_6={key:0,class:"fixed bottom-16 right-6 z-50 flex flex-col gap-2"},_sfc_main$1=defineComponent({__name:"CodemirrorEditor",setup(e){const t=useEditorStore(),n=usePostStore(),o=useRenderStore(),a=useThemeStore(),i=useUIStore(),u=useCssEditorStore(),{editor:l}=storeToRefs(t),{output:d}=storeToRefs(o),{isDark:m}=storeToRefs(i),{posts:p,currentPostIndex:w}=storeToRefs(n),{previewWidth:s}=storeToRefs(a),{isMobile:C,isEditOnLeft:x,isOpenPostSlider:_,isOpenRightSlider:b,isOpenConfirmDialog:f}=storeToRefs(i),{toggleShowUploadImgDialog:N}=i;function h(){a.updateCodeTheme();const B=t.getContent();o.render(B,{isCiteStatus:a.isCiteStatus,legend:a.legend,isUseIndent:a.isUseIndent,isUseJustify:a.isUseJustify,isCountStatus:a.isCountStatus,isMacCodeBlock:a.isMacCodeBlock,isShowLineNumber:a.isShowLineNumber})}function S(){a.resetStyle(),u.resetCssConfig(),a.applyCurrentTheme(),h(),toast.success("样式已重置")}watch(d,()=>{nextTick(async()=>{const B=document.getElementById("output");B&&(highlightPendingBlocks(HighlightJS,B),await ensureMathJax()&&(isExtensionEnvironment$1()?renderPendingMathWithKaTeX(B):renderPendingMath(B)))})});const V=ref(!1),$=ref(!1);function F(){return document.querySelector(".cm-scroller")||document.querySelector(".CodeMirror-scroll")}function P(){V.value=!0,$.value=!0}function Q(){V.value=!1,setTimeout(()=>{$.value=!1},800)}const H=ref(!0);function k(){H.value=!H.value}const T=useTemplateRef("previewRef"),ce=ref(),z=ref(null),R=new Compartment;function le(){const B=ge=>{let fe,xe;if(clearTimeout(ce.value),ge==="preview"){if(fe=T.value,xe=F(),!xe){console.warn("Cannot find CodeMirror scroll container");return}const ke=F();ke&&(ke.removeEventListener("scroll",W),ce.value=setTimeout(()=>{ke.addEventListener("scroll",W)},300))}else{if(fe=F(),xe=T.value,!fe){console.warn("Cannot find CodeMirror scroll container");return}xe.removeEventListener("scroll",M,!1),ce.value=setTimeout(()=>{xe.addEventListener("scroll",M,!1)},300)}if(!fe||!xe)return;const _e=fe.scrollHeight-fe.offsetHeight,we=xe.scrollHeight-xe.offsetHeight;if(_e<=0||we<=0)return;const Ce=fe.scrollTop/_e*we;xe.scrollTo(0,Ce)};function W(){B("editor")}function M(){B("preview")}T.value&&T.value.addEventListener("scroll",M,!1);const se=F();se&&se.addEventListener("scroll",W)}onMounted(()=>{setTimeout(()=>{le()},300)});const Z=useTemplateRef("searchTabRef"),ee=ref(null);function J(B){const W=B.state.selection.main,M=B.state.doc.sliceString(W.from,W.to).trim();Z.value?M?Z.value.setSearchWord(M):Z.value.showSearchTab=!0:ee.value={selected:M}}function re(B){const W=B.state.selection.main,M=B.state.doc.sliceString(W.from,W.to).trim();Z.value?Z.value.setSearchWithReplace(M):i.openSearchTab(M,!0)}watch(Z,B=>{if(B&&ee.value){const{selected:W}=ee.value;W?B.setSearchWord(W):B.showSearchTab=!0,ee.value=null}});const{searchTabRequest:L}=storeToRefs(i);watch(L,B=>{if(B&&Z.value){const{word:W,showReplace:M}=B;M?Z.value.setSearchWithReplace(W):W?Z.value.setSearchWord(W):Z.value.showSearchTab=!0,i.clearSearchTabRequest()}});function y(B){const W=z.value;B.key==="Escape"&&Z.value?.showSearchTab&&(Z.value.showSearchTab=!1,B.preventDefault(),W?.focus())}onMounted(()=>{document.addEventListener("keydown",y,{passive:!1,capture:!1})});async function E(B){const W=checkImage(B);if(!W.ok)return toast.error(W.msg),!1;const M=await store.get("imgHost")||"default";await store.set("imgHost",M);const se=await store.get(`${M}Config`);return M==="default"||se?!0:(toast.error(`请先配置 ${M} 图床参数`),!1)}function Y(B){if(!B){toast.error("上传图片未知异常");return}setTimeout(()=>{N(!1)},1e3);const W=`![](${B})`;z.value&&z.value.dispatch(z.value.state.replaceSelection(`
${W}
`)),toast.success("图片上传成功")}const ne=ref(!1);async function ue(B){return await imageCompression(B,{maxSizeMB:1,maxWidthOrHeight:1920,useWebWorker:!0})}async function de(B,W,M){try{ne.value=!0,await store.get("useCompression")==="true"&&(B=await ue(B));const ge=await toBase64(B),fe=await fileUpload(ge,B);if(W?W(fe,ge):Y(fe),M)return Y(fe)}catch(se){toast.error(se.message)}finally{ne.value=!1}}async function he({list:B}){return new Promise(W=>{const{path:M,file:se}=B.find(fe=>fe.path.match(/\.md$/)),ge=new FileReader;ge.readAsText(se,"UTF-8"),ge.onload=fe=>{W({str:fe.target.result,file:se,path:M})}})}async function me(B){const W=[];let M="";try{const se=[B];for(const ge of se){M+=`${ge.name}/`;for await(const[,fe]of ge)fe.kind==="file"?W.push({path:M+fe.name,file:await fe.getFile()}):(W.push({path:`${M+fe.name}/`}),se.push(fe))}}catch(se){console.error(se)}return W}async function A({md:B,list:W}){const M=[...B.str.matchAll(/!\[(.*?)\]\((.*?)\)/g)||[]].filter(fe=>fe),se=B.path.match(/.+?\//)[0];(await Promise.all(M.map(fe=>new Promise(xe=>{let[,,_e]=fe;_e=_e.replace(/^.\//,"");const{file:we}=W.find(ye=>ye.path===`${se}${_e}`)||{};de(we,ye=>xe({matchStr:_e,url:ye}))})))).forEach(fe=>{B.str=B.str.replace(`](./${fe.matchStr})`,`](${fe.url})`).replace(`](${fe.matchStr})`,`](${fe.url})`)}),z.value&&z.value.dispatch({changes:{from:0,to:z.value.state.doc.length,insert:B.str}})}const I=useTemplateRef("codeMirrorWrapper");function G(){const B=I.value;B.ondragover=W=>W.preventDefault(),B.ondrop=async W=>{if(W.preventDefault(),!(W.dataTransfer==null||!Array.isArray(W.dataTransfer.items)))for(const M of W.dataTransfer.items.filter(se=>se.kind==="file"))M.getAsFileSystemHandle().then(async se=>{if(se.kind==="directory"){const ge=await me(se),fe=await he({list:ge});A({md:fe,list:ge})}else{const ge=await se.getFile();console.log("file",ge),await E(ge)&&de(ge)}})}}const K=ref(),oe=useTemplateRef("editorRef"),ie=ref(0);function te(B){const W=EditorState.create({doc:p.value[w.value].content,extensions:[markdownSetup({onSearch:J,onReplace:re}),R.of(theme(m.value)),EditorView.updateListener.of(se=>{if(se.docChanged){const ge=se.state.doc.toString();clearTimeout(K.value),K.value=setTimeout(()=>{h();const fe=p.value[w.value];ge!==fe.content&&(fe.updateDatetime=new Date,fe.content=ge)},300)}})]}),M=new EditorView({state:W,parent:B});return z.value=M,M.dom.addEventListener("paste",async se=>{if(!se.clipboardData?.items||ne.value)return;const fe=(await Promise.all([...se.clipboardData.items].map(we=>we.getAsFile()).filter(we=>we!=null).map(async we=>await E(we)?we:null))).filter(we=>we!=null);if(fe.length===0)return;const xe=setInterval(()=>{const we=ie.value+1;we>=100||(ie.value=we)},100);for(const we of fe)se.preventDefault(),await de(we);clearInterval(xe),ie.value=100,setTimeout(()=>{ie.value=0},1e3)}),M}onMounted(()=>{const B=oe.value;B!=null&&(o.initRendererInstance({isMacCodeBlock:a.isMacCodeBlock,isShowLineNumber:a.isShowLineNumber}),a.applyCurrentTheme(),nextTick(()=>{const W=te(B);l.value=W,h(),G()}))}),watch(m,()=>{z.value&&z.value.dispatch({effects:R.reconfigure(theme(m.value))})}),watch(w,()=>{if(!z.value)return;const B=p.value[w.value];if(!B)return;z.value.state.doc.toString()!==B.content&&(z.value.dispatch({changes:{from:0,to:z.value.state.doc.length,insert:B.content}}),h())}),onMounted(()=>{window.addEventListener("synccaster-editor-update",(B=>{const{content:W}=B.detail;z.value&&W!==void 0&&(z.value.dispatch({changes:{from:0,to:z.value.state.doc.length,insert:W}}),h())}))});const ae=ref();return onMounted(()=>{ae.value=setInterval(()=>{const B=p.value[w.value];(B.history||[])[0]?.content!==B.content&&(B.history??=[],B.history.unshift({content:B.content,datetime:new Date().toLocaleString("zh-CN")}),B.history.length=Math.min(B.history.length,10))},30*1e3)}),onUnmounted(()=>{clearTimeout(ae.value),clearTimeout(ce.value),clearTimeout(K.value),document.removeEventListener("keydown",y)}),(B,W)=>{const M=_sfc_main$1b,se=__unplugin_components_1,ge=__unplugin_components_2,fe=_sfc_main$Q,xe=_sfc_main$X,_e=_sfc_main$Y,we=__unplugin_components_6,ye=__unplugin_components_7,Ce=_sfc_main$$,ke=_sfc_main$1f,Ne=_sfc_main$1l,ve=_sfc_main$1p,pe=_sfc_main$1z,q=_sfc_main$1A,be=_sfc_main$1B,Ve=_sfc_main$1C,Ee=_sfc_main$1D,Be=_sfc_main$1F,Te=_sfc_main$1G,v=_sfc_main$1H,U=_sfc_main$1I;return openBlock(),createElementBlock("div",_hoisted_1,[createVNode(M,{modelValue:unref(ie),"onUpdate:modelValue":W[0]||(W[0]=j=>isRef(ie)?ie.value=j:null),class:"absolute left-0 right-0 rounded-none",style:{height:"2px"}},null,8,["modelValue"]),createVNode(se,{onStartCopy:P,onEndCopy:Q}),createBaseVNode("main",_hoisted_2,[createBaseVNode("div",_hoisted_3,[createVNode(unref(_sfc_main$3),{direction:"horizontal"},{default:withCtx(()=>[createVNode(unref(SplitterPanel_default),{"default-size":15,"max-size":unref(_)?20:0,"min-size":unref(_)?10:0},{default:withCtx(()=>[createVNode(ge)]),_:1},8,["max-size","min-size"]),createVNode(unref(_sfc_main$4),{class:"hidden md:block"}),createVNode(unref(SplitterPanel_default),{class:"flex"},{default:withCtx(()=>[withDirectives(createBaseVNode("div",{ref_key:"codeMirrorWrapper",ref:I,class:normalizeClass(["codeMirror-wrapper relative flex-1",{"order-1 border-l":!unref(x),"border-r":unref(x)}])},[unref(z)?(openBlock(),createBlock(unref(SearchTab),{key:0,ref_key:"searchTabRef",ref:Z,"editor-view":unref(z)},null,8,["editor-view"])):createCommentVNode("",!0),createVNode(unref(SidebarAIToolbar),{"is-mobile":unref(C),"show-editor":unref(H)},null,8,["is-mobile","show-editor"]),createVNode(fe,null,{default:withCtx(()=>[createBaseVNode("div",{id:"editor",ref_key:"editorRef",ref:oe,class:"codemirror-container"},null,512)]),_:1})],2),[[vShow,!unref(C)||unref(C)&&unref(H)]]),withDirectives(createBaseVNode("div",{class:normalizeClass(["relative flex-1 overflow-x-hidden transition-width",[unref(b)?"w-0":"w-100"]])},[createBaseVNode("div",{id:"preview",ref_key:"previewRef",ref:T,class:"preview-wrapper w-full p-5 flex justify-center"},[createBaseVNode("div",{id:"output-wrapper",class:normalizeClass(["w-full max-w-full",{output_night:!unref(V),"dark-preview":unref(m)&&!unref(V)}])},[createBaseVNode("div",{class:normalizeClass(["preview border-x shadow-xl mx-auto",[unref(C)?"w-full":unref(s),unref(a).previewWidth==="w-[375px]"?"max-w-full":""]])},[createBaseVNode("section",{id:"output",class:"w-full",innerHTML:unref(d)},null,8,_hoisted_4),unref($)?(openBlock(),createElementBlock("div",_hoisted_5,[...W[2]||(W[2]=[createBaseVNode("div",{class:"loading-mask-box"},[createBaseVNode("div",{class:"loading__img"}),createBaseVNode("span",null,"正在生成")],-1)])])):createCommentVNode("",!0)],2)],2),createVNode(xe,{target:"preview",right:unref(C)?24:20,bottom:unref(C)?90:20},null,8,["right","bottom"])],512),createVNode(_e)],2),[[vShow,!unref(C)||unref(C)&&!unref(H)]]),createVNode(we),createVNode(ye)]),_:1})]),_:1})]),unref(C)?(openBlock(),createElementBlock("div",_hoisted_6,[createBaseVNode("button",{class:"bg-primary flex items-center justify-center rounded-full p-3 text-white shadow-lg transition active:scale-95 hover:scale-105 dark:bg-gray-700 dark:text-white dark:ring-2 dark:ring-white/30","aria-label":"切换编辑/预览",onClick:k},[(openBlock(),createBlock(resolveDynamicComponent(unref(H)?unref(Eye):unref(Pen)),{class:"h-5 w-5"}))])])):createCommentVNode("",!0),createVNode(Ce,{onUploadImage:de}),createVNode(ke),createVNode(Ne),createVNode(ve),createVNode(v,{open:unref(f),"onUpdate:open":W[1]||(W[1]=j=>isRef(f)?f.value=j:null)},{default:withCtx(()=>[createVNode(Te,null,{default:withCtx(()=>[createVNode(be,null,{default:withCtx(()=>[createVNode(pe,null,{default:withCtx(()=>[...W[3]||(W[3]=[createTextVNode("提示",-1)])]),_:1}),createVNode(q,null,{default:withCtx(()=>[...W[4]||(W[4]=[createTextVNode(" 此操作将丢失本地自定义样式，是否继续？ ",-1)])]),_:1})]),_:1}),createVNode(Be,null,{default:withCtx(()=>[createVNode(Ve,null,{default:withCtx(()=>[...W[5]||(W[5]=[createTextVNode("取消",-1)])]),_:1}),createVNode(Ee,{onClick:S},{default:withCtx(()=>[...W[6]||(W[6]=[createTextVNode(" 确认 ",-1)])]),_:1})]),_:1})]),_:1})]),_:1},8,["open"])]),createVNode(U)])}}}),CodemirrorEditor=_export_sfc(_sfc_main$1,[["__scopeId","data-v-2eb19d11"]]),_sfc_main=defineComponent({__name:"App",setup(e){const t=useUIStore(),{isDark:n}=storeToRefs(t),o=new URLSearchParams(window.location.search),a=o.get("from")==="synccaster"?o.get("theme"):null;(a==="dark"||a==="light")&&t.setThemeMode(a);const i=ref(!1);return onMounted(()=>{i.value=!!window.__MD_UTOOLS__,i.value&&document.documentElement.classList.add("is-utools")}),(u,l)=>{const d=__unplugin_components_0$1;return openBlock(),createElementBlock(Fragment,null,[createVNode(d),createVNode(CodemirrorEditor),createVNode(unref(_sfc_main$1J),{"rich-colors":"",position:"top-center",theme:unref(n)?"dark":"light"},null,8,["theme"])],64)}}});class MpCommonProfile extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const t=this.dataset.nickname||"",n=this.dataset.headimg||"",o=this.dataset.signature||"",a=this.dataset.service_type||"1",i=this.dataset.verify_status||"0";this.shadowRoot.innerHTML=`
      <style>
        :host {
          all: initial;
          -webkit-text-size-adjust: inherit;

        }
      </style>
      <style>@media (prefers-color-scheme:dark){.wx-root:not([data-weui-theme=light]),body:not([data-weui-theme=light]){--weui-BG-0:#111;--weui-BG-1:#1e1e1e;--weui-BG-2:#191919;--weui-BG-3:#202020;--weui-BG-4:#404040;--weui-BG-5:#2c2c2c;--weui-BLUE-100:#10aeff;--weui-BLUE-120:#0c8bcc;--weui-BLUE-170:#04344d;--weui-BLUE-80:#3fbeff;--weui-BLUE-90:#28b6ff;--weui-BLUE-BG-100:#48a6e2;--weui-BLUE-BG-110:#4095cb;--weui-BLUE-BG-130:#32749e;--weui-BLUE-BG-90:#5aafe4;--weui-BRAND-100:#07c160;--weui-BRAND-120:#059a4c;--weui-BRAND-170:#023a1c;--weui-BRAND-80:#38cd7f;--weui-BRAND-90:#20c770;--weui-BRAND-BG-100:#2aae67;--weui-BRAND-BG-110:#259c5c;--weui-BRAND-BG-130:#1d7a48;--weui-BRAND-BG-90:#3eb575;--weui-FG-0:hsla(0,0%,100%,0.8);--weui-FG-0_5:hsla(0,0%,100%,0.6);--weui-FG-1:hsla(0,0%,100%,0.5);--weui-FG-2:hsla(0,0%,100%,0.3);--weui-FG-3:hsla(0,0%,100%,0.1);--weui-FG-4:hsla(0,0%,100%,0.15);--weui-GLYPH-0:hsla(0,0%,100%,0.8);--weui-GLYPH-1:hsla(0,0%,100%,0.5);--weui-GLYPH-2:hsla(0,0%,100%,0.3);--weui-GLYPH-WHITE-0:hsla(0,0%,100%,0.8);--weui-GLYPH-WHITE-1:hsla(0,0%,100%,0.5);--weui-GLYPH-WHITE-2:hsla(0,0%,100%,0.3);--weui-GLYPH-WHITE-3:#fff;--weui-GREEN-100:#74a800;--weui-GREEN-120:#5c8600;--weui-GREEN-170:#233200;--weui-GREEN-80:#8fb933;--weui-GREEN-90:#82b01a;--weui-GREEN-BG-100:#789833;--weui-GREEN-BG-110:#6b882d;--weui-GREEN-BG-130:#65802b;--weui-GREEN-BG-90:#85a247;--weui-INDIGO-100:#1196ff;--weui-INDIGO-120:#0d78cc;--weui-INDIGO-170:#052d4d;--weui-INDIGO-80:#40abff;--weui-INDIGO-90:#28a0ff;--weui-INDIGO-BG-100:#0d78cc;--weui-INDIGO-BG-110:#0b6bb7;--weui-INDIGO-BG-130:#09548f;--weui-INDIGO-BG-90:#2585d1;--weui-LIGHTGREEN-100:#3eb575;--weui-LIGHTGREEN-120:#31905d;--weui-LIGHTGREEN-170:#123522;--weui-LIGHTGREEN-80:#64c390;--weui-LIGHTGREEN-90:#51bc83;--weui-LIGHTGREEN-BG-100:#31905d;--weui-LIGHTGREEN-BG-110:#2c8153;--weui-LIGHTGREEN-BG-130:#226541;--weui-LIGHTGREEN-BG-90:#31905d;--weui-LINK-100:#7d90a9;--weui-LINK-120:#647387;--weui-LINK-170:#252a32;--weui-LINK-80:#97a6ba;--weui-LINK-90:#899ab1;--weui-LINKFINDER-100:#dee9ff;--weui-MATERIAL-ATTACHMENTCOLUMN:rgba(32,32,32,0.93);--weui-MATERIAL-NAVIGATIONBAR:rgba(18,18,18,0.9);--weui-MATERIAL-REGULAR:rgba(37,37,37,0.6);--weui-MATERIAL-THICK:rgba(34,34,34,0.9);--weui-MATERIAL-THIN:rgba(95,95,95,0.4);--weui-MATERIAL-TOOLBAR:rgba(35,35,35,0.93);--weui-ORANGE-100:#c87d2f;--weui-ORANGE-120:#a06425;--weui-ORANGE-170:#3b250e;--weui-ORANGE-80:#d39758;--weui-ORANGE-90:#cd8943;--weui-ORANGE-BG-100:#bb6000;--weui-ORANGE-BG-110:#a85600;--weui-ORANGE-BG-130:#824300;--weui-ORANGE-BG-90:#c1701a;--weui-ORANGERED-100:#ff6146;--weui-OVERLAY:rgba(0,0,0,0.8);--weui-OVERLAY-WHITE:hsla(0,0%,94.9%,0.8);--weui-PURPLE-100:#8183ff;--weui-PURPLE-120:#6768cc;--weui-PURPLE-170:#26274c;--weui-PURPLE-80:#9a9bff;--weui-PURPLE-90:#8d8fff;--weui-PURPLE-BG-100:#6768cc;--weui-PURPLE-BG-110:#5c5db7;--weui-PURPLE-BG-130:#48498f;--weui-PURPLE-BG-90:#7677d1;--weui-RED-100:#fa5151;--weui-RED-120:#c84040;--weui-RED-170:#4b1818;--weui-RED-80:#fb7373;--weui-RED-90:#fa6262;--weui-RED-BG-100:#cf5148;--weui-RED-BG-110:#ba4940;--weui-RED-BG-130:#913832;--weui-RED-BG-90:#d3625a;--weui-SECONDARY-BG:hsla(0,0%,100%,0.1);--weui-SEPARATOR-0:hsla(0,0%,100%,0.05);--weui-SEPARATOR-1:hsla(0,0%,100%,0.15);--weui-STATELAYER-HOVERED:rgba(0,0,0,0.02);--weui-STATELAYER-PRESSED:hsla(0,0%,100%,0.1);--weui-STATELAYER-PRESSEDSTRENGTHENED:hsla(0,0%,100%,0.2);--weui-YELLOW-100:#cc9c00;--weui-YELLOW-120:#a37c00;--weui-YELLOW-170:#3d2f00;--weui-YELLOW-80:#d6af33;--weui-YELLOW-90:#d1a519;--weui-YELLOW-BG-100:#bf9100;--weui-YELLOW-BG-110:#ab8200;--weui-YELLOW-BG-130:#866500;--weui-YELLOW-BG-90:#c59c1a;--weui-FG-HALF:hsla(0,0%,100%,0.6);--weui-RED:#fa5151;--weui-ORANGERED:#ff6146;--weui-ORANGE:#c87d2f;--weui-YELLOW:#cc9c00;--weui-GREEN:#74a800;--weui-LIGHTGREEN:#3eb575;--weui-TEXTGREEN:#259c5c;--weui-BRAND:#07c160;--weui-BLUE:#10aeff;--weui-INDIGO:#1196ff;--weui-PURPLE:#8183ff;--weui-LINK:#7d90a9;--weui-REDORANGE:#ff6146;--weui-TAG-TEXT-BLACK:hsla(0,0%,100%,0.5);--weui-TAG-BACKGROUND-BLACK:hsla(0,0%,100%,0.05);--weui-WHITE:hsla(0,0%,100%,0.8);--weui-FG:#fff;--weui-BG:#000;--weui-FG-5:hsla(0,0%,100%,0.1);--weui-TAG-BACKGROUND-ORANGE:rgba(250,157,59,0.1);--weui-TAG-BACKGROUND-GREEN:rgba(6,174,86,0.1);--weui-TAG-TEXT-RED:rgba(250,81,81,0.6);--weui-TAG-BACKGROUND-RED:rgba(250,81,81,0.1);--weui-TAG-BACKGROUND-BLUE:rgba(16,174,255,0.1);--weui-TAG-TEXT-ORANGE:rgba(250,157,59,0.6);--weui-TAG-TEXT-GREEN:rgba(6,174,86,0.6);--weui-TAG-TEXT-BLUE:rgba(16,174,255,0.6)}}@media (prefers-color-scheme:dark){.wx-root[data-weui-mode=care]:not([data-weui-theme=light]),body[data-weui-mode=care]:not([data-weui-theme=light]){--weui-BG-0:#111;--weui-BG-1:#1e1e1e;--weui-BG-2:#191919;--weui-BG-3:#202020;--weui-BG-4:#404040;--weui-BG-5:#2c2c2c;--weui-BLUE-100:#10aeff;--weui-BLUE-120:#0c8bcc;--weui-BLUE-170:#04344d;--weui-BLUE-80:#3fbeff;--weui-BLUE-90:#28b6ff;--weui-BLUE-BG-100:#48a6e2;--weui-BLUE-BG-110:#4095cb;--weui-BLUE-BG-130:#32749e;--weui-BLUE-BG-90:#5aafe4;--weui-BRAND-100:#07c160;--weui-BRAND-120:#059a4c;--weui-BRAND-170:#023a1c;--weui-BRAND-80:#38cd7f;--weui-BRAND-90:#20c770;--weui-BRAND-BG-100:#2aae67;--weui-BRAND-BG-110:#259c5c;--weui-BRAND-BG-130:#1d7a48;--weui-BRAND-BG-90:#3eb575;--weui-FG-0:hsla(0,0%,100%,0.85);--weui-FG-0_5:hsla(0,0%,100%,0.65);--weui-FG-1:hsla(0,0%,100%,0.55);--weui-FG-2:hsla(0,0%,100%,0.35);--weui-FG-3:hsla(0,0%,100%,0.1);--weui-FG-4:hsla(0,0%,100%,0.15);--weui-GLYPH-0:hsla(0,0%,100%,0.85);--weui-GLYPH-1:hsla(0,0%,100%,0.55);--weui-GLYPH-2:hsla(0,0%,100%,0.35);--weui-GLYPH-WHITE-0:hsla(0,0%,100%,0.85);--weui-GLYPH-WHITE-1:hsla(0,0%,100%,0.55);--weui-GLYPH-WHITE-2:hsla(0,0%,100%,0.35);--weui-GLYPH-WHITE-3:#fff;--weui-GREEN-100:#74a800;--weui-GREEN-120:#5c8600;--weui-GREEN-170:#233200;--weui-GREEN-80:#8fb933;--weui-GREEN-90:#82b01a;--weui-GREEN-BG-100:#789833;--weui-GREEN-BG-110:#6b882d;--weui-GREEN-BG-130:#65802b;--weui-GREEN-BG-90:#85a247;--weui-INDIGO-100:#1196ff;--weui-INDIGO-120:#0d78cc;--weui-INDIGO-170:#052d4d;--weui-INDIGO-80:#40abff;--weui-INDIGO-90:#28a0ff;--weui-INDIGO-BG-100:#0d78cc;--weui-INDIGO-BG-110:#0b6bb7;--weui-INDIGO-BG-130:#09548f;--weui-INDIGO-BG-90:#2585d1;--weui-LIGHTGREEN-100:#3eb575;--weui-LIGHTGREEN-120:#31905d;--weui-LIGHTGREEN-170:#123522;--weui-LIGHTGREEN-80:#64c390;--weui-LIGHTGREEN-90:#51bc83;--weui-LIGHTGREEN-BG-100:#31905d;--weui-LIGHTGREEN-BG-110:#2c8153;--weui-LIGHTGREEN-BG-130:#226541;--weui-LIGHTGREEN-BG-90:#31905d;--weui-LINK-100:#7d90a9;--weui-LINK-120:#647387;--weui-LINK-170:#252a32;--weui-LINK-80:#97a6ba;--weui-LINK-90:#899ab1;--weui-LINKFINDER-100:#dee9ff;--weui-MATERIAL-ATTACHMENTCOLUMN:rgba(32,32,32,0.93);--weui-MATERIAL-NAVIGATIONBAR:rgba(18,18,18,0.9);--weui-MATERIAL-REGULAR:rgba(37,37,37,0.6);--weui-MATERIAL-THICK:rgba(34,34,34,0.9);--weui-MATERIAL-THIN:hsla(0,0%,96.1%,0.4);--weui-MATERIAL-TOOLBAR:rgba(35,35,35,0.93);--weui-ORANGE-100:#c87d2f;--weui-ORANGE-120:#a06425;--weui-ORANGE-170:#3b250e;--weui-ORANGE-80:#d39758;--weui-ORANGE-90:#cd8943;--weui-ORANGE-BG-100:#bb6000;--weui-ORANGE-BG-110:#a85600;--weui-ORANGE-BG-130:#824300;--weui-ORANGE-BG-90:#c1701a;--weui-ORANGERED-100:#ff6146;--weui-OVERLAY:rgba(0,0,0,0.8);--weui-OVERLAY-WHITE:hsla(0,0%,94.9%,0.8);--weui-PURPLE-100:#8183ff;--weui-PURPLE-120:#6768cc;--weui-PURPLE-170:#26274c;--weui-PURPLE-80:#9a9bff;--weui-PURPLE-90:#8d8fff;--weui-PURPLE-BG-100:#6768cc;--weui-PURPLE-BG-110:#5c5db7;--weui-PURPLE-BG-130:#48498f;--weui-PURPLE-BG-90:#7677d1;--weui-RED-100:#fa5151;--weui-RED-120:#c84040;--weui-RED-170:#4b1818;--weui-RED-80:#fb7373;--weui-RED-90:#fa6262;--weui-RED-BG-100:#cf5148;--weui-RED-BG-110:#ba4940;--weui-RED-BG-130:#913832;--weui-RED-BG-90:#d3625a;--weui-SECONDARY-BG:hsla(0,0%,100%,0.15);--weui-SEPARATOR-0:hsla(0,0%,100%,0.05);--weui-SEPARATOR-1:hsla(0,0%,100%,0.15);--weui-STATELAYER-HOVERED:rgba(0,0,0,0.02);--weui-STATELAYER-PRESSED:hsla(0,0%,100%,0.1);--weui-STATELAYER-PRESSEDSTRENGTHENED:hsla(0,0%,100%,0.2);--weui-YELLOW-100:#cc9c00;--weui-YELLOW-120:#a37c00;--weui-YELLOW-170:#3d2f00;--weui-YELLOW-80:#d6af33;--weui-YELLOW-90:#d1a519;--weui-YELLOW-BG-100:#bf9100;--weui-YELLOW-BG-110:#ab8200;--weui-YELLOW-BG-130:#866500;--weui-YELLOW-BG-90:#c59c1a;--weui-FG-HALF:hsla(0,0%,100%,0.65);--weui-RED:#fa5151;--weui-ORANGERED:#ff6146;--weui-ORANGE:#c87d2f;--weui-YELLOW:#cc9c00;--weui-GREEN:#74a800;--weui-LIGHTGREEN:#3eb575;--weui-TEXTGREEN:#259c5c;--weui-BRAND:#07c160;--weui-BLUE:#10aeff;--weui-INDIGO:#1196ff;--weui-PURPLE:#8183ff;--weui-LINK:#7d90a9;--weui-REDORANGE:#ff6146;--weui-TAG-BACKGROUND-BLACK:hsla(0,0%,100%,0.05);--weui-FG:#fff;--weui-WHITE:hsla(0,0%,100%,0.8);--weui-FG-5:hsla(0,0%,100%,0.1);--weui-TAG-BACKGROUND-ORANGE:rgba(250,157,59,0.1);--weui-TAG-BACKGROUND-GREEN:rgba(6,174,86,0.1);--weui-TAG-TEXT-RED:rgba(250,81,81,0.6);--weui-TAG-BACKGROUND-RED:rgba(250,81,81,0.1);--weui-TAG-BACKGROUND-BLUE:rgba(16,174,255,0.1);--weui-TAG-TEXT-ORANGE:rgba(250,157,59,0.6);--weui-BG:#000;--weui-TAG-TEXT-GREEN:rgba(6,174,86,0.6);--weui-TAG-TEXT-BLUE:rgba(16,174,255,0.6);--weui-TAG-TEXT-BLACK:hsla(0,0%,100%,0.5)}}.wx-root,body,page{--weui-BTN-HEIGHT:48;--weui-BTN-HEIGHT-MEDIUM:40;--weui-BTN-HEIGHT-SMALL:32}.wx-root,body{--weui-BTN-ACTIVE-MASK:rgba(0,0,0,0.1)}.wx-root[data-weui-theme=dark],body[data-weui-theme=dark]{--weui-BTN-ACTIVE-MASK:hsla(0,0%,100%,0.1)}@media (prefers-color-scheme:dark){.wx-root:not([data-weui-theme=light]),body:not([data-weui-theme=light]){--weui-BTN-ACTIVE-MASK:hsla(0,0%,100%,0.1)}}.wx-root,body{--weui-BTN-DEFAULT-ACTIVE-BG:#e6e6e6}.wx-root[data-weui-theme=dark],body[data-weui-theme=dark]{--weui-BTN-DEFAULT-ACTIVE-BG:hsla(0,0%,100%,0.126)}@media (prefers-color-scheme:dark){.wx-root:not([data-weui-theme=light]),body:not([data-weui-theme=light]){--weui-BTN-DEFAULT-ACTIVE-BG:hsla(0,0%,100%,0.126)}}.wx-root,body{--weui-DIALOG-LINE-COLOR:rgba(0,0,0,0.1)}.wx-root[data-weui-theme=dark],body[data-weui-theme=dark]{--weui-DIALOG-LINE-COLOR:hsla(0,0%,100%,0.1)}@media (prefers-color-scheme:dark){.wx-root:not([data-weui-theme=light]),body:not([data-weui-theme=light]){--weui-DIALOG-LINE-COLOR:hsla(0,0%,100%,0.1)}}.weui-flex{display:flex}.weui-flex__item{flex:1}.wx-root,body{--weui-BG-COLOR-ACTIVE:#ececec}.wx-root[data-weui-theme=dark],body[data-weui-theme=dark]{--weui-BG-COLOR-ACTIVE:#373737}@media (prefers-color-scheme:dark){.wx-root:not([data-weui-theme=light]),body:not([data-weui-theme=light]){--weui-BG-COLOR-ACTIVE:#373737}}[class*=" weui-icon-"][class*=" weui-icon-"],[class*=" weui-icon-"][class^=weui-icon-],[class^=weui-icon-][class*=" weui-icon-"],[class^=weui-icon-][class^=weui-icon-]{display:inline-block;vertical-align:middle;font-size:10px;width:2.4em;height:2.4em;-webkit-mask-position:50% 50%;mask-position:50% 50%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:100%;mask-size:100%;background-color:currentColor}.weui-icon-circle{-webkit-mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='1000' height='1000' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M500 916.667C269.881 916.667 83.333 730.119 83.333 500 83.333 269.881 269.881 83.333 500 83.333c230.119 0 416.667 186.548 416.667 416.667 0 230.119-186.548 416.667-416.667 416.667zm0-50c202.504 0 366.667-164.163 366.667-366.667 0-202.504-164.163-366.667-366.667-366.667-202.504 0-366.667 164.163-366.667 366.667 0 202.504 164.163 366.667 366.667 366.667z' fill-rule='evenodd' fill-opacity='.9'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='1000' height='1000' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M500 916.667C269.881 916.667 83.333 730.119 83.333 500 83.333 269.881 269.881 83.333 500 83.333c230.119 0 416.667 186.548 416.667 416.667 0 230.119-186.548 416.667-416.667 416.667zm0-50c202.504 0 366.667-164.163 366.667-366.667 0-202.504-164.163-366.667-366.667-366.667-202.504 0-366.667 164.163-366.667 366.667 0 202.504 164.163 366.667 366.667 366.667z' fill-rule='evenodd' fill-opacity='.9'/%3E%3C/svg%3E")}.weui-icon-download{-webkit-mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.25 12.04l-1.72-1.72-1.06 1.06 2.828 2.83a1 1 0 001.414-.001l2.828-2.828-1.06-1.061-1.73 1.73V7h-1.5v5.04zm0-5.04V2h1.5v5h6.251c.55 0 .999.446.999.996v13.008a.998.998 0 01-.996.996H4.996A.998.998 0 014 21.004V7.996A1 1 0 014.999 7h6.251z'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.25 12.04l-1.72-1.72-1.06 1.06 2.828 2.83a1 1 0 001.414-.001l2.828-2.828-1.06-1.061-1.73 1.73V7h-1.5v5.04zm0-5.04V2h1.5v5h6.251c.55 0 .999.446.999.996v13.008a.998.998 0 01-.996.996H4.996A.998.998 0 014 21.004V7.996A1 1 0 014.999 7h6.251z'/%3E%3C/svg%3E")}.weui-icon-info{-webkit-mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.75-12v7h1.5v-7h-1.5zM12 9a1 1 0 100-2 1 1 0 000 2z'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.75-12v7h1.5v-7h-1.5zM12 9a1 1 0 100-2 1 1 0 000 2z'/%3E%3C/svg%3E")}.weui-icon-safe-success{-webkit-mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 1000'%3E%3Cpath d='M500.9 4.6C315.5 46.7 180.4 93.1 57.6 132c0 129.3.2 231.7.2 339.7 0 304.2 248.3 471.6 443.1 523.7C695.7 943.3 944 775.9 944 471.7c0-108 .2-210.4.2-339.7C821.4 93.1 686.3 46.7 500.9 4.6zm248.3 349.1l-299.7 295c-2.1 2-5.3 2-7.4-.1L304.4 506.1c-2-2.1-2.3-5.7-.6-8l18.3-24.9c1.7-2.3 5-2.8 7.2-1l112.2 86c2.3 1.8 6 1.7 8.1-.1l274.7-228.9c2.2-1.8 5.7-1.7 7.7.3l17 16.8c2.2 2.1 2.2 5.3.2 7.4z' fill-rule='evenodd' clip-rule='evenodd' fill='%23070202'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 1000'%3E%3Cpath d='M500.9 4.6C315.5 46.7 180.4 93.1 57.6 132c0 129.3.2 231.7.2 339.7 0 304.2 248.3 471.6 443.1 523.7C695.7 943.3 944 775.9 944 471.7c0-108 .2-210.4.2-339.7C821.4 93.1 686.3 46.7 500.9 4.6zm248.3 349.1l-299.7 295c-2.1 2-5.3 2-7.4-.1L304.4 506.1c-2-2.1-2.3-5.7-.6-8l18.3-24.9c1.7-2.3 5-2.8 7.2-1l112.2 86c2.3 1.8 6 1.7 8.1-.1l274.7-228.9c2.2-1.8 5.7-1.7 7.7.3l17 16.8c2.2 2.1 2.2 5.3.2 7.4z' fill-rule='evenodd' clip-rule='evenodd' fill='%23070202'/%3E%3C/svg%3E")}.weui-icon-safe-warn{-webkit-mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 1000'%3E%3Cpath d='M500.9 4.5c-185.4 42-320.4 88.4-443.2 127.3 0 129.3.2 231.7.2 339.6 0 304.1 248.2 471.4 443 523.6 194.7-52.2 443-219.5 443-523.6 0-107.9.2-210.3.2-339.6C821.3 92.9 686.2 46.5 500.9 4.5zm-26.1 271.1h52.1c5.8 0 10.3 4.7 10.1 10.4l-11.6 313.8c-.1 2.8-2.5 5.2-5.4 5.2h-38.2c-2.9 0-5.3-2.3-5.4-5.2L464.8 286c-.2-5.8 4.3-10.4 10-10.4zm26.1 448.3c-20.2 0-36.5-16.3-36.5-36.5s16.3-36.5 36.5-36.5 36.5 16.3 36.5 36.5-16.4 36.5-36.5 36.5z' fill-rule='evenodd' clip-rule='evenodd' fill='%23020202'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 1000'%3E%3Cpath d='M500.9 4.5c-185.4 42-320.4 88.4-443.2 127.3 0 129.3.2 231.7.2 339.6 0 304.1 248.2 471.4 443 523.6 194.7-52.2 443-219.5 443-523.6 0-107.9.2-210.3.2-339.6C821.3 92.9 686.2 46.5 500.9 4.5zm-26.1 271.1h52.1c5.8 0 10.3 4.7 10.1 10.4l-11.6 313.8c-.1 2.8-2.5 5.2-5.4 5.2h-38.2c-2.9 0-5.3-2.3-5.4-5.2L464.8 286c-.2-5.8 4.3-10.4 10-10.4zm26.1 448.3c-20.2 0-36.5-16.3-36.5-36.5s16.3-36.5 36.5-36.5 36.5 16.3 36.5 36.5-16.4 36.5-36.5 36.5z' fill-rule='evenodd' clip-rule='evenodd' fill='%23020202'/%3E%3C/svg%3E")}.weui-icon-success{-webkit-mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.177-7.86l-2.765-2.767L7 12.431l3.119 3.121a1 1 0 001.414 0l5.952-5.95-1.062-1.062-5.6 5.6z'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.177-7.86l-2.765-2.767L7 12.431l3.119 3.121a1 1 0 001.414 0l5.952-5.95-1.062-1.062-5.6 5.6z'/%3E%3C/svg%3E")}.weui-icon-success-circle{-webkit-mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-1.2a8.8 8.8 0 100-17.6 8.8 8.8 0 000 17.6zm-1.172-6.242l5.809-5.808.848.849-5.95 5.95a1 1 0 01-1.414 0L7 12.426l.849-.849 2.98 2.98z'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-1.2a8.8 8.8 0 100-17.6 8.8 8.8 0 000 17.6zm-1.172-6.242l5.809-5.808.848.849-5.95 5.95a1 1 0 01-1.414 0L7 12.426l.849-.849 2.98 2.98z'/%3E%3C/svg%3E")}.weui-icon-success-no-circle{-webkit-mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.657 18.435L3 12.778l1.414-1.414 4.95 4.95L20.678 5l1.414 1.414-12.02 12.021a1 1 0 01-1.415 0z' fill-rule='evenodd'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.657 18.435L3 12.778l1.414-1.414 4.95 4.95L20.678 5l1.414 1.414-12.02 12.021a1 1 0 01-1.415 0z' fill-rule='evenodd'/%3E%3C/svg%3E")}.weui-icon-waiting{-webkit-mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.75 11.38V6h-1.5v6l4.243 4.243 1.06-1.06-3.803-3.804zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z' fill-rule='evenodd'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.75 11.38V6h-1.5v6l4.243 4.243 1.06-1.06-3.803-3.804zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z' fill-rule='evenodd'/%3E%3C/svg%3E")}.weui-icon-waiting-circle{-webkit-mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.6 11.503l3.891 3.891-.848.849L11.4 12V6h1.2v5.503zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-1.2a8.8 8.8 0 100-17.6 8.8 8.8 0 000 17.6z'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.6 11.503l3.891 3.891-.848.849L11.4 12V6h1.2v5.503zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-1.2a8.8 8.8 0 100-17.6 8.8 8.8 0 000 17.6z'/%3E%3C/svg%3E")}.weui-icon-warn{-webkit-mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.763-15.864l.11 7.596h1.305l.11-7.596h-1.525zm.759 10.967c.512 0 .902-.383.902-.882 0-.5-.39-.882-.902-.882a.878.878 0 00-.896.882c0 .499.396.882.896.882z'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.763-15.864l.11 7.596h1.305l.11-7.596h-1.525zm.759 10.967c.512 0 .902-.383.902-.882 0-.5-.39-.882-.902-.882a.878.878 0 00-.896.882c0 .499.396.882.896.882z'/%3E%3C/svg%3E")}.weui-icon-outlined-warn{-webkit-mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12zm18.8 0a8.8 8.8 0 11-17.6 0 8.8 8.8 0 0117.6 0zm-8.14-5.569l-.089 7.06H11.43l-.088-7.06h1.318zm-1.495 9.807c0 .469.366.835.835.835a.82.82 0 00.835-.835.817.817 0 00-.835-.835.821.821 0 00-.835.835z' fill='%23000'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12zm18.8 0a8.8 8.8 0 11-17.6 0 8.8 8.8 0 0117.6 0zm-8.14-5.569l-.089 7.06H11.43l-.088-7.06h1.318zm-1.495 9.807c0 .469.366.835.835.835a.82.82 0 00.835-.835.817.817 0 00-.835-.835.821.821 0 00-.835.835z' fill='%23000'/%3E%3C/svg%3E")}.weui-icon-info-circle{-webkit-mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-1.2a8.8 8.8 0 100-17.6 8.8 8.8 0 000 17.6zM11.4 10h1.2v7h-1.2v-7zm.6-1a1 1 0 110-2 1 1 0 010 2z'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-1.2a8.8 8.8 0 100-17.6 8.8 8.8 0 000 17.6zM11.4 10h1.2v7h-1.2v-7zm.6-1a1 1 0 110-2 1 1 0 010 2z'/%3E%3C/svg%3E")}.weui-icon-cancel{-webkit-mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill-rule='evenodd'%3E%3Cpath d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-1.2a8.8 8.8 0 100-17.6 8.8 8.8 0 000 17.6z' fill-rule='nonzero'/%3E%3Cpath d='M12.849 12l3.11 3.111-.848.849L12 12.849l-3.111 3.11-.849-.848L11.151 12l-3.11-3.111.848-.849L12 11.151l3.111-3.11.849.848L12.849 12z'/%3E%3C/g%3E%3C/svg%3E");mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill-rule='evenodd'%3E%3Cpath d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-1.2a8.8 8.8 0 100-17.6 8.8 8.8 0 000 17.6z' fill-rule='nonzero'/%3E%3Cpath d='M12.849 12l3.11 3.111-.848.849L12 12.849l-3.111 3.11-.849-.848L11.151 12l-3.11-3.111.848-.849L12 11.151l3.111-3.11.849.848L12.849 12z'/%3E%3C/g%3E%3C/svg%3E")}.weui-icon-search{-webkit-mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16.31 15.561l4.114 4.115-.848.848-4.123-4.123a7 7 0 11.857-.84zM16.8 11a5.8 5.8 0 10-11.6 0 5.8 5.8 0 0011.6 0z' fill-rule='evenodd'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16.31 15.561l4.114 4.115-.848.848-4.123-4.123a7 7 0 11.857-.84zM16.8 11a5.8 5.8 0 10-11.6 0 5.8 5.8 0 0011.6 0z' fill-rule='evenodd'/%3E%3C/svg%3E")}.weui-icon-clear{-webkit-mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.06 12l3.006-3.005-1.06-1.06L12 10.938 8.995 7.934l-1.06 1.06L10.938 12l-3.005 3.005 1.06 1.06L12 13.062l3.005 3.005 1.06-1.06L13.062 12zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.06 12l3.006-3.005-1.06-1.06L12 10.938 8.995 7.934l-1.06 1.06L10.938 12l-3.005 3.005 1.06 1.06L12 13.062l3.005 3.005 1.06-1.06L13.062 12zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z'/%3E%3C/svg%3E")}.weui-icon-back{-webkit-mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm1.999-6.563L10.68 12 14 8.562 12.953 7.5 9.29 11.277a1.045 1.045 0 000 1.446l3.663 3.777L14 15.437z' fill-rule='evenodd'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm1.999-6.563L10.68 12 14 8.562 12.953 7.5 9.29 11.277a1.045 1.045 0 000 1.446l3.663 3.777L14 15.437z' fill-rule='evenodd'/%3E%3C/svg%3E")}.weui-icon-delete{-webkit-mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.774 6.4l.812 13.648a.8.8 0 00.798.752h7.232a.8.8 0 00.798-.752L17.226 6.4H6.774zm11.655 0l-.817 13.719A2 2 0 0115.616 22H8.384a2 2 0 01-1.996-1.881L5.571 6.4H3.5v-.7a.5.5 0 01.5-.5h16a.5.5 0 01.5.5v.7h-2.071zM14 3a.5.5 0 01.5.5v.7h-5v-.7A.5.5 0 0110 3h4zM9.5 9h1.2l.5 9H10l-.5-9zm3.8 0h1.2l-.5 9h-1.2l.5-9z'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.774 6.4l.812 13.648a.8.8 0 00.798.752h7.232a.8.8 0 00.798-.752L17.226 6.4H6.774zm11.655 0l-.817 13.719A2 2 0 0115.616 22H8.384a2 2 0 01-1.996-1.881L5.571 6.4H3.5v-.7a.5.5 0 01.5-.5h16a.5.5 0 01.5.5v.7h-2.071zM14 3a.5.5 0 01.5.5v.7h-5v-.7A.5.5 0 0110 3h4zM9.5 9h1.2l.5 9H10l-.5-9zm3.8 0h1.2l-.5 9h-1.2l.5-9z'/%3E%3C/svg%3E")}.weui-icon-success-no-circle-thin{-webkit-mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.864 16.617l-5.303-5.303-1.061 1.06 5.657 5.657a1 1 0 001.414 0L21.238 6.364l-1.06-1.06L8.864 16.616z' fill-rule='evenodd'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.864 16.617l-5.303-5.303-1.061 1.06 5.657 5.657a1 1 0 001.414 0L21.238 6.364l-1.06-1.06L8.864 16.616z' fill-rule='evenodd'/%3E%3C/svg%3E")}.weui-icon-arrow{-webkit-mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='12' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.454 6.58l1.06-1.06 5.78 5.779a.996.996 0 010 1.413l-5.78 5.779-1.06-1.061 5.425-5.425-5.425-5.424z' fill='%23B2B2B2' fill-rule='evenodd'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='12' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.454 6.58l1.06-1.06 5.78 5.779a.996.996 0 010 1.413l-5.78 5.779-1.06-1.061 5.425-5.425-5.425-5.424z' fill='%23B2B2B2' fill-rule='evenodd'/%3E%3C/svg%3E")}.weui-icon-arrow-bold{-webkit-mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg height='24' width='12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.157 12.711L4.5 18.368l-1.414-1.414 4.95-4.95-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 010 1.414z' fill-rule='evenodd'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg height='24' width='12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.157 12.711L4.5 18.368l-1.414-1.414 4.95-4.95-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 010 1.414z' fill-rule='evenodd'/%3E%3C/svg%3E")}.weui-icon-back-arrow{-webkit-mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='12' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.343 12l7.071 7.071L9 20.485l-7.778-7.778a1 1 0 010-1.414L9 3.515l1.414 1.414L3.344 12z' fill-rule='evenodd'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='12' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.343 12l7.071 7.071L9 20.485l-7.778-7.778a1 1 0 010-1.414L9 3.515l1.414 1.414L3.344 12z' fill-rule='evenodd'/%3E%3C/svg%3E")}.weui-icon-back-arrow-thin{-webkit-mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='12' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 19.438L8.955 20.5l-7.666-7.79a1.02 1.02 0 010-1.42L8.955 3.5 10 4.563 2.682 12 10 19.438z' fill-rule='evenodd'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='12' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 19.438L8.955 20.5l-7.666-7.79a1.02 1.02 0 010-1.42L8.955 3.5 10 4.563 2.682 12 10 19.438z' fill-rule='evenodd'/%3E%3C/svg%3E")}.weui-icon-close{-webkit-mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12.25 10.693L6.057 4.5 5 5.557l6.193 6.193L5 17.943 6.057 19l6.193-6.193L18.443 19l1.057-1.057-6.193-6.193L19.5 5.557 18.443 4.5l-6.193 6.193z' fill='%23000'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12.25 10.693L6.057 4.5 5 5.557l6.193 6.193L5 17.943 6.057 19l6.193-6.193L18.443 19l1.057-1.057-6.193-6.193L19.5 5.557 18.443 4.5l-6.193 6.193z' fill='%23000'/%3E%3C/svg%3E")}.weui-icon-close-thin{-webkit-mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.25 10.693L6.057 4.5 5 5.557l6.193 6.193L5 17.943 6.057 19l6.193-6.193L18.443 19l1.057-1.057-6.193-6.193L19.5 5.557 18.443 4.5z' fill-rule='evenodd'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.25 10.693L6.057 4.5 5 5.557l6.193 6.193L5 17.943 6.057 19l6.193-6.193L18.443 19l1.057-1.057-6.193-6.193L19.5 5.557 18.443 4.5z' fill-rule='evenodd'/%3E%3C/svg%3E")}.weui-icon-back-circle{-webkit-mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-1.2a8.8 8.8 0 100-17.6 8.8 8.8 0 000 17.6zm1.999-5.363L12.953 16.5 9.29 12.723a1.045 1.045 0 010-1.446L12.953 7.5 14 8.563 10.68 12 14 15.438z'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-1.2a8.8 8.8 0 100-17.6 8.8 8.8 0 000 17.6zm1.999-5.363L12.953 16.5 9.29 12.723a1.045 1.045 0 010-1.446L12.953 7.5 14 8.563 10.68 12 14 15.438z'/%3E%3C/svg%3E")}.weui-icon-success{color:var(--weui-BRAND)}.weui-icon-waiting{color:var(--weui-BLUE)}.weui-icon-warn{color:var(--weui-RED)}.weui-icon-info{color:var(--weui-BLUE)}.weui-icon-success-circle,.weui-icon-success-no-circle,.weui-icon-success-no-circle-thin{color:var(--weui-BRAND)}.weui-icon-waiting-circle{color:var(--weui-BLUE)}.weui-icon-circle{color:var(--weui-FG-2)}.weui-icon-download{color:var(--weui-BRAND)}.weui-icon-info-circle{color:var(--weui-FG-2)}.weui-icon-safe-success{color:var(--weui-BRAND)}.weui-icon-safe-warn{color:var(--weui-YELLOW)}.weui-icon-cancel{color:var(--weui-RED)}.weui-icon-search{color:var(--weui-FG-1)}.weui-icon-clear{color:var(--weui-FG-2)}.weui-icon-clear:active{color:var(--weui-FG-1)}.weui-icon-delete.weui-icon_gallery-delete{color:var(--weui-WHITE)}.weui-icon-arrow-bold.weui-icon-arrow,.weui-icon-arrow-bold.weui-icon-arrow-bold,.weui-icon-arrow-bold.weui-icon-back-arrow,.weui-icon-arrow-bold.weui-icon-back-arrow-thin,.weui-icon-arrow.weui-icon-arrow,.weui-icon-arrow.weui-icon-arrow-bold,.weui-icon-arrow.weui-icon-back-arrow,.weui-icon-arrow.weui-icon-back-arrow-thin,.weui-icon-back-arrow-thin.weui-icon-arrow,.weui-icon-back-arrow-thin.weui-icon-arrow-bold,.weui-icon-back-arrow-thin.weui-icon-back-arrow,.weui-icon-back-arrow-thin.weui-icon-back-arrow-thin,.weui-icon-back-arrow.weui-icon-arrow,.weui-icon-back-arrow.weui-icon-arrow-bold,.weui-icon-back-arrow.weui-icon-back-arrow,.weui-icon-back-arrow.weui-icon-back-arrow-thin{width:1.2em}.weui-icon-arrow,.weui-icon-arrow-bold{color:var(--weui-FG-2)}.weui-icon-back,.weui-icon-back-arrow,.weui-icon-back-arrow-thin,.weui-icon-back-circle{color:var(--weui-FG-0)}.weui-icon_msg.weui-icon_msg{width:6.4em;height:6.4em}.weui-icon_msg.weui-icon_msg.weui-icon-warn{color:var(--weui-RED)}.weui-icon_msg.weui-icon_msg.weui-icon-info-circle{color:var(--weui-BLUE)}.weui-icon_msg-primary.weui-icon_msg-primary{width:6.4em;height:6.4em}.weui-icon_msg-primary.weui-icon_msg-primary.weui-icon-warn{color:var(--weui-YELLOW)}.wx-root,body{--weui-BG-0:#ededed;--weui-BG-1:#f7f7f7;--weui-BG-2:#fff;--weui-BG-3:#f7f7f7;--weui-BG-4:#4c4c4c;--weui-BG-5:#fff;--weui-BLUE-100:#10aeff;--weui-BLUE-120:#3fbeff;--weui-BLUE-170:#b7e6ff;--weui-BLUE-80:#0c8bcc;--weui-BLUE-90:#0e9ce6;--weui-BLUE-BG-100:#48a6e2;--weui-BLUE-BG-110:#5aafe4;--weui-BLUE-BG-130:#7fc0ea;--weui-BLUE-BG-90:#4095cb;--weui-BRAND-100:#07c160;--weui-BRAND-120:#38cd7f;--weui-BRAND-170:#b4ecce;--weui-BRAND-80:#059a4c;--weui-BRAND-90:#06ae56;--weui-BRAND-BG-100:#2aae67;--weui-BRAND-BG-110:#3eb575;--weui-BRAND-BG-130:#69c694;--weui-BRAND-BG-90:#259c5c;--weui-FG-0:rgba(0,0,0,0.9);--weui-FG-0_5:rgba(0,0,0,0.9);--weui-FG-1:rgba(0,0,0,0.55);--weui-FG-2:rgba(0,0,0,0.3);--weui-FG-3:rgba(0,0,0,0.1);--weui-FG-4:rgba(0,0,0,0.15);--weui-GLYPH-0:rgba(0,0,0,0.9);--weui-GLYPH-1:rgba(0,0,0,0.55);--weui-GLYPH-2:rgba(0,0,0,0.3);--weui-GLYPH-WHITE-0:hsla(0,0%,100%,0.8);--weui-GLYPH-WHITE-1:hsla(0,0%,100%,0.5);--weui-GLYPH-WHITE-2:hsla(0,0%,100%,0.3);--weui-GLYPH-WHITE-3:#fff;--weui-GREEN-100:#91d300;--weui-GREEN-120:#a7db33;--weui-GREEN-170:#def1b3;--weui-GREEN-80:#74a800;--weui-GREEN-90:#82bd00;--weui-GREEN-BG-100:#96be40;--weui-GREEN-BG-110:#a0c452;--weui-GREEN-BG-130:#b5d179;--weui-GREEN-BG-90:#86aa39;--weui-INDIGO-100:#1485ee;--weui-INDIGO-120:#439df1;--weui-INDIGO-170:#b8daf9;--weui-INDIGO-80:#106abe;--weui-INDIGO-90:#1277d6;--weui-INDIGO-BG-100:#2b77bf;--weui-INDIGO-BG-110:#3f84c5;--weui-INDIGO-BG-130:#6ba0d2;--weui-INDIGO-BG-90:#266aab;--weui-LIGHTGREEN-100:#95ec69;--weui-LIGHTGREEN-120:#aaef87;--weui-LIGHTGREEN-170:#def9d1;--weui-LIGHTGREEN-80:#77bc54;--weui-LIGHTGREEN-90:#85d35e;--weui-LIGHTGREEN-BG-100:#72cf60;--weui-LIGHTGREEN-BG-110:#80d370;--weui-LIGHTGREEN-BG-130:#9cdd90;--weui-LIGHTGREEN-BG-90:#66b956;--weui-LINK-100:#576b95;--weui-LINK-120:#7888aa;--weui-LINK-170:#ccd2de;--weui-LINK-80:#455577;--weui-LINK-90:#4e6085;--weui-LINKFINDER-100:#002666;--weui-MATERIAL-ATTACHMENTCOLUMN:hsla(0,0%,96.1%,0.95);--weui-MATERIAL-NAVIGATIONBAR:hsla(0,0%,92.9%,0.94);--weui-MATERIAL-REGULAR:hsla(0,0%,96.9%,0.3);--weui-MATERIAL-THICK:hsla(0,0%,96.9%,0.8);--weui-MATERIAL-THIN:hsla(0,0%,100%,0.2);--weui-MATERIAL-TOOLBAR:hsla(0,0%,96.5%,0.82);--weui-ORANGE-100:#fa9d3b;--weui-ORANGE-120:#fbb062;--weui-ORANGE-170:#fde1c3;--weui-ORANGE-80:#c87d2f;--weui-ORANGE-90:#e08c34;--weui-ORANGE-BG-100:#ea7800;--weui-ORANGE-BG-110:#ec8519;--weui-ORANGE-BG-130:#f0a04d;--weui-ORANGE-BG-90:#d26b00;--weui-ORANGERED-100:#ff6146;--weui-OVERLAY:rgba(0,0,0,0.5);--weui-OVERLAY-WHITE:hsla(0,0%,94.9%,0.8);--weui-PURPLE-100:#6467f0;--weui-PURPLE-120:#8385f3;--weui-PURPLE-170:#d0d1fa;--weui-PURPLE-80:#5052c0;--weui-PURPLE-90:#595cd7;--weui-PURPLE-BG-100:#6769ba;--weui-PURPLE-BG-110:#7678c1;--weui-PURPLE-BG-130:#9496ce;--weui-PURPLE-BG-90:#5c5ea7;--weui-RED-100:#fa5151;--weui-RED-120:#fb7373;--weui-RED-170:#fdcaca;--weui-RED-80:#c84040;--weui-RED-90:#e14949;--weui-RED-BG-100:#cf5148;--weui-RED-BG-110:#d3625a;--weui-RED-BG-130:#dd847e;--weui-RED-BG-90:#b94840;--weui-SECONDARY-BG:rgba(0,0,0,0.05);--weui-SEPARATOR-0:rgba(0,0,0,0.1);--weui-SEPARATOR-1:rgba(0,0,0,0.15);--weui-STATELAYER-HOVERED:rgba(0,0,0,0.02);--weui-STATELAYER-PRESSED:rgba(0,0,0,0.1);--weui-STATELAYER-PRESSEDSTRENGTHENED:rgba(0,0,0,0.2);--weui-YELLOW-100:#ffc300;--weui-YELLOW-120:#ffcf33;--weui-YELLOW-170:#ffecb2;--weui-YELLOW-80:#cc9c00;--weui-YELLOW-90:#e6af00;--weui-YELLOW-BG-100:#efb600;--weui-YELLOW-BG-110:#f0bd19;--weui-YELLOW-BG-130:#f3cc4d;--weui-YELLOW-BG-90:#d7a400;--weui-FG-HALF:rgba(0,0,0,0.9);--weui-RED:#fa5151;--weui-ORANGERED:#ff6146;--weui-ORANGE:#fa9d3b;--weui-YELLOW:#ffc300;--weui-GREEN:#91d300;--weui-LIGHTGREEN:#95ec69;--weui-TEXTGREEN:#06ae56;--weui-BRAND:#07c160;--weui-BLUE:#10aeff;--weui-INDIGO:#1485ee;--weui-PURPLE:#6467f0;--weui-LINK:#576b95;--weui-TAG-TEXT-ORANGE:#fa9d3b;--weui-TAG-TEXT-GREEN:#06ae56;--weui-TAG-TEXT-BLUE:#10aeff;--weui-REDORANGE:#ff6146;--weui-TAG-TEXT-BLACK:rgba(0,0,0,0.5);--weui-TAG-BACKGROUND-BLACK:rgba(0,0,0,0.05);--weui-WHITE:#fff;--weui-BG:#fff;--weui-FG:#000;--weui-FG-5:rgba(0,0,0,0.05);--weui-TAG-BACKGROUND-ORANGE:rgba(250,157,59,0.1);--weui-TAG-BACKGROUND-GREEN:rgba(6,174,86,0.1);--weui-TAG-TEXT-RED:rgba(250,81,81,0.6);--weui-TAG-BACKGROUND-RED:rgba(250,81,81,0.1);--weui-TAG-BACKGROUND-BLUE:rgba(16,174,255,0.1)}@media (prefers-color-scheme:dark){.wx-root:not([data-weui-theme=light]),body:not([data-weui-theme=light]){--weui-BG-0:#111;--weui-BG-1:#1e1e1e;--weui-BG-2:#191919;--weui-BG-3:#202020;--weui-BG-4:#404040;--weui-BG-5:#2c2c2c;--weui-BLUE-100:#10aeff;--weui-BLUE-120:#0c8bcc;--weui-BLUE-170:#04344d;--weui-BLUE-80:#3fbeff;--weui-BLUE-90:#28b6ff;--weui-BLUE-BG-100:#48a6e2;--weui-BLUE-BG-110:#4095cb;--weui-BLUE-BG-130:#32749e;--weui-BLUE-BG-90:#5aafe4;--weui-BRAND-100:#07c160;--weui-BRAND-120:#059a4c;--weui-BRAND-170:#023a1c;--weui-BRAND-80:#38cd7f;--weui-BRAND-90:#20c770;--weui-BRAND-BG-100:#2aae67;--weui-BRAND-BG-110:#259c5c;--weui-BRAND-BG-130:#1d7a48;--weui-BRAND-BG-90:#3eb575;--weui-FG-0:hsla(0,0%,100%,0.8);--weui-FG-0_5:hsla(0,0%,100%,0.6);--weui-FG-1:hsla(0,0%,100%,0.5);--weui-FG-2:hsla(0,0%,100%,0.3);--weui-FG-3:hsla(0,0%,100%,0.1);--weui-FG-4:hsla(0,0%,100%,0.15);--weui-GLYPH-0:hsla(0,0%,100%,0.8);--weui-GLYPH-1:hsla(0,0%,100%,0.5);--weui-GLYPH-2:hsla(0,0%,100%,0.3);--weui-GLYPH-WHITE-0:hsla(0,0%,100%,0.8);--weui-GLYPH-WHITE-1:hsla(0,0%,100%,0.5);--weui-GLYPH-WHITE-2:hsla(0,0%,100%,0.3);--weui-GLYPH-WHITE-3:#fff;--weui-GREEN-100:#74a800;--weui-GREEN-120:#5c8600;--weui-GREEN-170:#233200;--weui-GREEN-80:#8fb933;--weui-GREEN-90:#82b01a;--weui-GREEN-BG-100:#789833;--weui-GREEN-BG-110:#6b882d;--weui-GREEN-BG-130:#65802b;--weui-GREEN-BG-90:#85a247;--weui-INDIGO-100:#1196ff;--weui-INDIGO-120:#0d78cc;--weui-INDIGO-170:#052d4d;--weui-INDIGO-80:#40abff;--weui-INDIGO-90:#28a0ff;--weui-INDIGO-BG-100:#0d78cc;--weui-INDIGO-BG-110:#0b6bb7;--weui-INDIGO-BG-130:#09548f;--weui-INDIGO-BG-90:#2585d1;--weui-LIGHTGREEN-100:#3eb575;--weui-LIGHTGREEN-120:#31905d;--weui-LIGHTGREEN-170:#123522;--weui-LIGHTGREEN-80:#64c390;--weui-LIGHTGREEN-90:#51bc83;--weui-LIGHTGREEN-BG-100:#31905d;--weui-LIGHTGREEN-BG-110:#2c8153;--weui-LIGHTGREEN-BG-130:#226541;--weui-LIGHTGREEN-BG-90:#31905d;--weui-LINK-100:#7d90a9;--weui-LINK-120:#647387;--weui-LINK-170:#252a32;--weui-LINK-80:#97a6ba;--weui-LINK-90:#899ab1;--weui-LINKFINDER-100:#dee9ff;--weui-MATERIAL-ATTACHMENTCOLUMN:rgba(32,32,32,0.93);--weui-MATERIAL-NAVIGATIONBAR:rgba(18,18,18,0.9);--weui-MATERIAL-REGULAR:rgba(37,37,37,0.6);--weui-MATERIAL-THICK:rgba(34,34,34,0.9);--weui-MATERIAL-THIN:rgba(95,95,95,0.4);--weui-MATERIAL-TOOLBAR:rgba(35,35,35,0.93);--weui-ORANGE-100:#c87d2f;--weui-ORANGE-120:#a06425;--weui-ORANGE-170:#3b250e;--weui-ORANGE-80:#d39758;--weui-ORANGE-90:#cd8943;--weui-ORANGE-BG-100:#bb6000;--weui-ORANGE-BG-110:#a85600;--weui-ORANGE-BG-130:#824300;--weui-ORANGE-BG-90:#c1701a;--weui-ORANGERED-100:#ff6146;--weui-OVERLAY:rgba(0,0,0,0.8);--weui-OVERLAY-WHITE:hsla(0,0%,94.9%,0.8);--weui-PURPLE-100:#8183ff;--weui-PURPLE-120:#6768cc;--weui-PURPLE-170:#26274c;--weui-PURPLE-80:#9a9bff;--weui-PURPLE-90:#8d8fff;--weui-PURPLE-BG-100:#6768cc;--weui-PURPLE-BG-110:#5c5db7;--weui-PURPLE-BG-130:#48498f;--weui-PURPLE-BG-90:#7677d1;--weui-RED-100:#fa5151;--weui-RED-120:#c84040;--weui-RED-170:#4b1818;--weui-RED-80:#fb7373;--weui-RED-90:#fa6262;--weui-RED-BG-100:#cf5148;--weui-RED-BG-110:#ba4940;--weui-RED-BG-130:#913832;--weui-RED-BG-90:#d3625a;--weui-SECONDARY-BG:hsla(0,0%,100%,0.1);--weui-SEPARATOR-0:hsla(0,0%,100%,0.05);--weui-SEPARATOR-1:hsla(0,0%,100%,0.15);--weui-STATELAYER-HOVERED:rgba(0,0,0,0.02);--weui-STATELAYER-PRESSED:hsla(0,0%,100%,0.1);--weui-STATELAYER-PRESSEDSTRENGTHENED:hsla(0,0%,100%,0.2);--weui-YELLOW-100:#cc9c00;--weui-YELLOW-120:#a37c00;--weui-YELLOW-170:#3d2f00;--weui-YELLOW-80:#d6af33;--weui-YELLOW-90:#d1a519;--weui-YELLOW-BG-100:#bf9100;--weui-YELLOW-BG-110:#ab8200;--weui-YELLOW-BG-130:#866500;--weui-YELLOW-BG-90:#c59c1a;--weui-FG-HALF:hsla(0,0%,100%,0.6);--weui-RED:#fa5151;--weui-ORANGERED:#ff6146;--weui-ORANGE:#c87d2f;--weui-YELLOW:#cc9c00;--weui-GREEN:#74a800;--weui-LIGHTGREEN:#3eb575;--weui-TEXTGREEN:#259c5c;--weui-BRAND:#07c160;--weui-BLUE:#10aeff;--weui-INDIGO:#1196ff;--weui-PURPLE:#8183ff;--weui-LINK:#7d90a9;--weui-REDORANGE:#ff6146;--weui-TAG-TEXT-BLACK:hsla(0,0%,100%,0.5);--weui-TAG-BACKGROUND-BLACK:hsla(0,0%,100%,0.05);--weui-WHITE:hsla(0,0%,100%,0.8);--weui-FG:#fff;--weui-BG:#000;--weui-FG-5:hsla(0,0%,100%,0.1);--weui-TAG-BACKGROUND-ORANGE:rgba(250,157,59,0.1);--weui-TAG-BACKGROUND-GREEN:rgba(6,174,86,0.1);--weui-TAG-TEXT-RED:rgba(250,81,81,0.6);--weui-TAG-BACKGROUND-RED:rgba(250,81,81,0.1);--weui-TAG-BACKGROUND-BLUE:rgba(16,174,255,0.1);--weui-TAG-TEXT-ORANGE:rgba(250,157,59,0.6);--weui-TAG-TEXT-GREEN:rgba(6,174,86,0.6);--weui-TAG-TEXT-BLUE:rgba(16,174,255,0.6)}}.wx-root[data-weui-theme=dark],body[data-weui-theme=dark]{--weui-BG-0:#111;--weui-BG-1:#1e1e1e;--weui-BG-2:#191919;--weui-BG-3:#202020;--weui-BG-4:#404040;--weui-BG-5:#2c2c2c;--weui-BLUE-100:#10aeff;--weui-BLUE-120:#0c8bcc;--weui-BLUE-170:#04344d;--weui-BLUE-80:#3fbeff;--weui-BLUE-90:#28b6ff;--weui-BLUE-BG-100:#48a6e2;--weui-BLUE-BG-110:#4095cb;--weui-BLUE-BG-130:#32749e;--weui-BLUE-BG-90:#5aafe4;--weui-BRAND-100:#07c160;--weui-BRAND-120:#059a4c;--weui-BRAND-170:#023a1c;--weui-BRAND-80:#38cd7f;--weui-BRAND-90:#20c770;--weui-BRAND-BG-100:#2aae67;--weui-BRAND-BG-110:#259c5c;--weui-BRAND-BG-130:#1d7a48;--weui-BRAND-BG-90:#3eb575;--weui-FG-0:hsla(0,0%,100%,0.8);--weui-FG-0_5:hsla(0,0%,100%,0.6);--weui-FG-1:hsla(0,0%,100%,0.5);--weui-FG-2:hsla(0,0%,100%,0.3);--weui-FG-3:hsla(0,0%,100%,0.1);--weui-FG-4:hsla(0,0%,100%,0.15);--weui-GLYPH-0:hsla(0,0%,100%,0.8);--weui-GLYPH-1:hsla(0,0%,100%,0.5);--weui-GLYPH-2:hsla(0,0%,100%,0.3);--weui-GLYPH-WHITE-0:hsla(0,0%,100%,0.8);--weui-GLYPH-WHITE-1:hsla(0,0%,100%,0.5);--weui-GLYPH-WHITE-2:hsla(0,0%,100%,0.3);--weui-GLYPH-WHITE-3:#fff;--weui-GREEN-100:#74a800;--weui-GREEN-120:#5c8600;--weui-GREEN-170:#233200;--weui-GREEN-80:#8fb933;--weui-GREEN-90:#82b01a;--weui-GREEN-BG-100:#789833;--weui-GREEN-BG-110:#6b882d;--weui-GREEN-BG-130:#65802b;--weui-GREEN-BG-90:#85a247;--weui-INDIGO-100:#1196ff;--weui-INDIGO-120:#0d78cc;--weui-INDIGO-170:#052d4d;--weui-INDIGO-80:#40abff;--weui-INDIGO-90:#28a0ff;--weui-INDIGO-BG-100:#0d78cc;--weui-INDIGO-BG-110:#0b6bb7;--weui-INDIGO-BG-130:#09548f;--weui-INDIGO-BG-90:#2585d1;--weui-LIGHTGREEN-100:#3eb575;--weui-LIGHTGREEN-120:#31905d;--weui-LIGHTGREEN-170:#123522;--weui-LIGHTGREEN-80:#64c390;--weui-LIGHTGREEN-90:#51bc83;--weui-LIGHTGREEN-BG-100:#31905d;--weui-LIGHTGREEN-BG-110:#2c8153;--weui-LIGHTGREEN-BG-130:#226541;--weui-LIGHTGREEN-BG-90:#31905d;--weui-LINK-100:#7d90a9;--weui-LINK-120:#647387;--weui-LINK-170:#252a32;--weui-LINK-80:#97a6ba;--weui-LINK-90:#899ab1;--weui-LINKFINDER-100:#dee9ff;--weui-MATERIAL-ATTACHMENTCOLUMN:rgba(32,32,32,0.93);--weui-MATERIAL-NAVIGATIONBAR:rgba(18,18,18,0.9);--weui-MATERIAL-REGULAR:rgba(37,37,37,0.6);--weui-MATERIAL-THICK:rgba(34,34,34,0.9);--weui-MATERIAL-THIN:rgba(95,95,95,0.4);--weui-MATERIAL-TOOLBAR:rgba(35,35,35,0.93);--weui-ORANGE-100:#c87d2f;--weui-ORANGE-120:#a06425;--weui-ORANGE-170:#3b250e;--weui-ORANGE-80:#d39758;--weui-ORANGE-90:#cd8943;--weui-ORANGE-BG-100:#bb6000;--weui-ORANGE-BG-110:#a85600;--weui-ORANGE-BG-130:#824300;--weui-ORANGE-BG-90:#c1701a;--weui-ORANGERED-100:#ff6146;--weui-OVERLAY:rgba(0,0,0,0.8);--weui-OVERLAY-WHITE:hsla(0,0%,94.9%,0.8);--weui-PURPLE-100:#8183ff;--weui-PURPLE-120:#6768cc;--weui-PURPLE-170:#26274c;--weui-PURPLE-80:#9a9bff;--weui-PURPLE-90:#8d8fff;--weui-PURPLE-BG-100:#6768cc;--weui-PURPLE-BG-110:#5c5db7;--weui-PURPLE-BG-130:#48498f;--weui-PURPLE-BG-90:#7677d1;--weui-RED-100:#fa5151;--weui-RED-120:#c84040;--weui-RED-170:#4b1818;--weui-RED-80:#fb7373;--weui-RED-90:#fa6262;--weui-RED-BG-100:#cf5148;--weui-RED-BG-110:#ba4940;--weui-RED-BG-130:#913832;--weui-RED-BG-90:#d3625a;--weui-SECONDARY-BG:hsla(0,0%,100%,0.1);--weui-SEPARATOR-0:hsla(0,0%,100%,0.05);--weui-SEPARATOR-1:hsla(0,0%,100%,0.15);--weui-STATELAYER-HOVERED:rgba(0,0,0,0.02);--weui-STATELAYER-PRESSED:hsla(0,0%,100%,0.1);--weui-STATELAYER-PRESSEDSTRENGTHENED:hsla(0,0%,100%,0.2);--weui-YELLOW-100:#cc9c00;--weui-YELLOW-120:#a37c00;--weui-YELLOW-170:#3d2f00;--weui-YELLOW-80:#d6af33;--weui-YELLOW-90:#d1a519;--weui-YELLOW-BG-100:#bf9100;--weui-YELLOW-BG-110:#ab8200;--weui-YELLOW-BG-130:#866500;--weui-YELLOW-BG-90:#c59c1a;--weui-FG-HALF:hsla(0,0%,100%,0.6);--weui-RED:#fa5151;--weui-ORANGERED:#ff6146;--weui-ORANGE:#c87d2f;--weui-YELLOW:#cc9c00;--weui-GREEN:#74a800;--weui-LIGHTGREEN:#3eb575;--weui-TEXTGREEN:#259c5c;--weui-BRAND:#07c160;--weui-BLUE:#10aeff;--weui-INDIGO:#1196ff;--weui-PURPLE:#8183ff;--weui-LINK:#7d90a9;--weui-REDORANGE:#ff6146;--weui-TAG-TEXT-BLACK:hsla(0,0%,100%,0.5);--weui-TAG-BACKGROUND-BLACK:hsla(0,0%,100%,0.05);--weui-WHITE:hsla(0,0%,100%,0.8);--weui-FG:#fff;--weui-BG:#000;--weui-FG-5:hsla(0,0%,100%,0.1);--weui-TAG-BACKGROUND-ORANGE:rgba(250,157,59,0.1);--weui-TAG-BACKGROUND-GREEN:rgba(6,174,86,0.1);--weui-TAG-TEXT-RED:rgba(250,81,81,0.6);--weui-TAG-BACKGROUND-RED:rgba(250,81,81,0.1);--weui-TAG-BACKGROUND-BLUE:rgba(16,174,255,0.1);--weui-TAG-TEXT-ORANGE:rgba(250,157,59,0.6);--weui-TAG-TEXT-GREEN:rgba(6,174,86,0.6);--weui-TAG-TEXT-BLUE:rgba(16,174,255,0.6)}.wx-root[data-weui-mode=care],body[data-weui-mode=care]{--weui-BG-0:#ededed;--weui-BG-1:#f7f7f7;--weui-BG-2:#fff;--weui-BG-3:#f7f7f7;--weui-BG-4:#4c4c4c;--weui-BG-5:#fff;--weui-BLUE-100:#007dbb;--weui-BLUE-120:#3fbeff;--weui-BLUE-170:#b7e6ff;--weui-BLUE-80:#0c8bcc;--weui-BLUE-90:#0e9ce6;--weui-BLUE-BG-100:#48a6e2;--weui-BLUE-BG-110:#5aafe4;--weui-BLUE-BG-130:#7fc0ea;--weui-BLUE-BG-90:#4095cb;--weui-BRAND-100:#018942;--weui-BRAND-120:#38cd7f;--weui-BRAND-170:#b4ecce;--weui-BRAND-80:#059a4c;--weui-BRAND-90:#06ae56;--weui-BRAND-BG-100:#2aae67;--weui-BRAND-BG-110:#3eb575;--weui-BRAND-BG-130:#69c694;--weui-BRAND-BG-90:#259c5c;--weui-FG-0:#000;--weui-FG-0_5:#000;--weui-FG-1:rgba(0,0,0,0.6);--weui-FG-2:rgba(0,0,0,0.42);--weui-FG-3:rgba(0,0,0,0.1);--weui-FG-4:rgba(0,0,0,0.15);--weui-GLYPH-0:#000;--weui-GLYPH-1:rgba(0,0,0,0.6);--weui-GLYPH-2:rgba(0,0,0,0.42);--weui-GLYPH-WHITE-0:hsla(0,0%,100%,0.85);--weui-GLYPH-WHITE-1:hsla(0,0%,100%,0.55);--weui-GLYPH-WHITE-2:hsla(0,0%,100%,0.35);--weui-GLYPH-WHITE-3:#fff;--weui-GREEN-100:#4f8400;--weui-GREEN-120:#a7db33;--weui-GREEN-170:#def1b3;--weui-GREEN-80:#74a800;--weui-GREEN-90:#82bd00;--weui-GREEN-BG-100:#96be40;--weui-GREEN-BG-110:#a0c452;--weui-GREEN-BG-130:#b5d179;--weui-GREEN-BG-90:#86aa39;--weui-INDIGO-100:#0075e2;--weui-INDIGO-120:#439df1;--weui-INDIGO-170:#b8daf9;--weui-INDIGO-80:#106abe;--weui-INDIGO-90:#1277d6;--weui-INDIGO-BG-100:#2b77bf;--weui-INDIGO-BG-110:#3f84c5;--weui-INDIGO-BG-130:#6ba0d2;--weui-INDIGO-BG-90:#266aab;--weui-LIGHTGREEN-100:#2e8800;--weui-LIGHTGREEN-120:#aaef87;--weui-LIGHTGREEN-170:#def9d1;--weui-LIGHTGREEN-80:#77bc54;--weui-LIGHTGREEN-90:#85d35e;--weui-LIGHTGREEN-BG-100:#72cf60;--weui-LIGHTGREEN-BG-110:#80d370;--weui-LIGHTGREEN-BG-130:#9cdd90;--weui-LIGHTGREEN-BG-90:#66b956;--weui-LINK-100:#576b95;--weui-LINK-120:#7888aa;--weui-LINK-170:#ccd2de;--weui-LINK-80:#455577;--weui-LINK-90:#4e6085;--weui-LINKFINDER-100:#002666;--weui-MATERIAL-ATTACHMENTCOLUMN:hsla(0,0%,96.1%,0.95);--weui-MATERIAL-NAVIGATIONBAR:hsla(0,0%,92.9%,0.94);--weui-MATERIAL-REGULAR:hsla(0,0%,96.9%,0.3);--weui-MATERIAL-THICK:hsla(0,0%,96.9%,0.8);--weui-MATERIAL-THIN:hsla(0,0%,100%,0.2);--weui-MATERIAL-TOOLBAR:hsla(0,0%,96.5%,0.82);--weui-ORANGE-100:#e17719;--weui-ORANGE-120:#fbb062;--weui-ORANGE-170:#fde1c3;--weui-ORANGE-80:#c87d2f;--weui-ORANGE-90:#e08c34;--weui-ORANGE-BG-100:#ea7800;--weui-ORANGE-BG-110:#ec8519;--weui-ORANGE-BG-130:#f0a04d;--weui-ORANGE-BG-90:#d26b00;--weui-ORANGERED-100:#d14730;--weui-OVERLAY:rgba(0,0,0,0.5);--weui-OVERLAY-WHITE:hsla(0,0%,94.9%,0.8);--weui-PURPLE-100:#6265f1;--weui-PURPLE-120:#8385f3;--weui-PURPLE-170:#d0d1fa;--weui-PURPLE-80:#5052c0;--weui-PURPLE-90:#595cd7;--weui-PURPLE-BG-100:#6769ba;--weui-PURPLE-BG-110:#7678c1;--weui-PURPLE-BG-130:#9496ce;--weui-PURPLE-BG-90:#5c5ea7;--weui-RED-100:#dc3636;--weui-RED-120:#fb7373;--weui-RED-170:#fdcaca;--weui-RED-80:#c84040;--weui-RED-90:#e14949;--weui-RED-BG-100:#cf5148;--weui-RED-BG-110:#d3625a;--weui-RED-BG-130:#dd847e;--weui-RED-BG-90:#b94840;--weui-SECONDARY-BG:rgba(0,0,0,0.1);--weui-SEPARATOR-0:rgba(0,0,0,0.1);--weui-SEPARATOR-1:rgba(0,0,0,0.15);--weui-STATELAYER-HOVERED:rgba(0,0,0,0.02);--weui-STATELAYER-PRESSED:rgba(0,0,0,0.1);--weui-STATELAYER-PRESSEDSTRENGTHENED:rgba(0,0,0,0.2);--weui-YELLOW-100:#bb8e00;--weui-YELLOW-120:#ffcf33;--weui-YELLOW-170:#ffecb2;--weui-YELLOW-80:#cc9c00;--weui-YELLOW-90:#e6af00;--weui-YELLOW-BG-100:#efb600;--weui-YELLOW-BG-110:#f0bd19;--weui-YELLOW-BG-130:#f3cc4d;--weui-YELLOW-BG-90:#d7a400;--weui-FG-HALF:#000;--weui-RED:#dc3636;--weui-ORANGERED:#d14730;--weui-ORANGE:#e17719;--weui-YELLOW:#bb8e00;--weui-GREEN:#4f8400;--weui-LIGHTGREEN:#2e8800;--weui-TEXTGREEN:#06ae56;--weui-BRAND:#018942;--weui-BLUE:#007dbb;--weui-INDIGO:#0075e2;--weui-PURPLE:#6265f1;--weui-LINK:#576b95;--weui-TAG-TEXT-ORANGE:#e17719;--weui-TAG-TEXT-GREEN:#06ae56;--weui-TAG-TEXT-BLUE:#007dbb;--weui-REDORANGE:#d14730;--weui-TAG-TEXT-BLACK:rgba(0,0,0,0.5);--weui-WHITE:#fff;--weui-BG:#fff;--weui-FG:#000;--weui-FG-5:rgba(0,0,0,0.05);--weui-TAG-BACKGROUND-ORANGE:rgba(225,119,25,0.1);--weui-TAG-BACKGROUND-GREEN:rgba(6,174,86,0.1);--weui-TAG-TEXT-RED:rgba(250,81,81,0.6);--weui-TAG-BACKGROUND-RED:rgba(250,81,81,0.1);--weui-TAG-BACKGROUND-BLUE:rgba(0,125,187,0.1);--weui-TAG-BACKGROUND-BLACK:rgba(0,0,0,0.05)}@media (prefers-color-scheme:dark){.wx-root[data-weui-mode=care]:not([data-weui-theme=light]),body[data-weui-mode=care]:not([data-weui-theme=light]){--weui-BG-0:#111;--weui-BG-1:#1e1e1e;--weui-BG-2:#191919;--weui-BG-3:#202020;--weui-BG-4:#404040;--weui-BG-5:#2c2c2c;--weui-BLUE-100:#10aeff;--weui-BLUE-120:#0c8bcc;--weui-BLUE-170:#04344d;--weui-BLUE-80:#3fbeff;--weui-BLUE-90:#28b6ff;--weui-BLUE-BG-100:#48a6e2;--weui-BLUE-BG-110:#4095cb;--weui-BLUE-BG-130:#32749e;--weui-BLUE-BG-90:#5aafe4;--weui-BRAND-100:#07c160;--weui-BRAND-120:#059a4c;--weui-BRAND-170:#023a1c;--weui-BRAND-80:#38cd7f;--weui-BRAND-90:#20c770;--weui-BRAND-BG-100:#2aae67;--weui-BRAND-BG-110:#259c5c;--weui-BRAND-BG-130:#1d7a48;--weui-BRAND-BG-90:#3eb575;--weui-FG-0:hsla(0,0%,100%,0.85);--weui-FG-0_5:hsla(0,0%,100%,0.65);--weui-FG-1:hsla(0,0%,100%,0.55);--weui-FG-2:hsla(0,0%,100%,0.35);--weui-FG-3:hsla(0,0%,100%,0.1);--weui-FG-4:hsla(0,0%,100%,0.15);--weui-GLYPH-0:hsla(0,0%,100%,0.85);--weui-GLYPH-1:hsla(0,0%,100%,0.55);--weui-GLYPH-2:hsla(0,0%,100%,0.35);--weui-GLYPH-WHITE-0:hsla(0,0%,100%,0.85);--weui-GLYPH-WHITE-1:hsla(0,0%,100%,0.55);--weui-GLYPH-WHITE-2:hsla(0,0%,100%,0.35);--weui-GLYPH-WHITE-3:#fff;--weui-GREEN-100:#74a800;--weui-GREEN-120:#5c8600;--weui-GREEN-170:#233200;--weui-GREEN-80:#8fb933;--weui-GREEN-90:#82b01a;--weui-GREEN-BG-100:#789833;--weui-GREEN-BG-110:#6b882d;--weui-GREEN-BG-130:#65802b;--weui-GREEN-BG-90:#85a247;--weui-INDIGO-100:#1196ff;--weui-INDIGO-120:#0d78cc;--weui-INDIGO-170:#052d4d;--weui-INDIGO-80:#40abff;--weui-INDIGO-90:#28a0ff;--weui-INDIGO-BG-100:#0d78cc;--weui-INDIGO-BG-110:#0b6bb7;--weui-INDIGO-BG-130:#09548f;--weui-INDIGO-BG-90:#2585d1;--weui-LIGHTGREEN-100:#3eb575;--weui-LIGHTGREEN-120:#31905d;--weui-LIGHTGREEN-170:#123522;--weui-LIGHTGREEN-80:#64c390;--weui-LIGHTGREEN-90:#51bc83;--weui-LIGHTGREEN-BG-100:#31905d;--weui-LIGHTGREEN-BG-110:#2c8153;--weui-LIGHTGREEN-BG-130:#226541;--weui-LIGHTGREEN-BG-90:#31905d;--weui-LINK-100:#7d90a9;--weui-LINK-120:#647387;--weui-LINK-170:#252a32;--weui-LINK-80:#97a6ba;--weui-LINK-90:#899ab1;--weui-LINKFINDER-100:#dee9ff;--weui-MATERIAL-ATTACHMENTCOLUMN:rgba(32,32,32,0.93);--weui-MATERIAL-NAVIGATIONBAR:rgba(18,18,18,0.9);--weui-MATERIAL-REGULAR:rgba(37,37,37,0.6);--weui-MATERIAL-THICK:rgba(34,34,34,0.9);--weui-MATERIAL-THIN:hsla(0,0%,96.1%,0.4);--weui-MATERIAL-TOOLBAR:rgba(35,35,35,0.93);--weui-ORANGE-100:#c87d2f;--weui-ORANGE-120:#a06425;--weui-ORANGE-170:#3b250e;--weui-ORANGE-80:#d39758;--weui-ORANGE-90:#cd8943;--weui-ORANGE-BG-100:#bb6000;--weui-ORANGE-BG-110:#a85600;--weui-ORANGE-BG-130:#824300;--weui-ORANGE-BG-90:#c1701a;--weui-ORANGERED-100:#ff6146;--weui-OVERLAY:rgba(0,0,0,0.8);--weui-OVERLAY-WHITE:hsla(0,0%,94.9%,0.8);--weui-PURPLE-100:#8183ff;--weui-PURPLE-120:#6768cc;--weui-PURPLE-170:#26274c;--weui-PURPLE-80:#9a9bff;--weui-PURPLE-90:#8d8fff;--weui-PURPLE-BG-100:#6768cc;--weui-PURPLE-BG-110:#5c5db7;--weui-PURPLE-BG-130:#48498f;--weui-PURPLE-BG-90:#7677d1;--weui-RED-100:#fa5151;--weui-RED-120:#c84040;--weui-RED-170:#4b1818;--weui-RED-80:#fb7373;--weui-RED-90:#fa6262;--weui-RED-BG-100:#cf5148;--weui-RED-BG-110:#ba4940;--weui-RED-BG-130:#913832;--weui-RED-BG-90:#d3625a;--weui-SECONDARY-BG:hsla(0,0%,100%,0.15);--weui-SEPARATOR-0:hsla(0,0%,100%,0.05);--weui-SEPARATOR-1:hsla(0,0%,100%,0.15);--weui-STATELAYER-HOVERED:rgba(0,0,0,0.02);--weui-STATELAYER-PRESSED:hsla(0,0%,100%,0.1);--weui-STATELAYER-PRESSEDSTRENGTHENED:hsla(0,0%,100%,0.2);--weui-YELLOW-100:#cc9c00;--weui-YELLOW-120:#a37c00;--weui-YELLOW-170:#3d2f00;--weui-YELLOW-80:#d6af33;--weui-YELLOW-90:#d1a519;--weui-YELLOW-BG-100:#bf9100;--weui-YELLOW-BG-110:#ab8200;--weui-YELLOW-BG-130:#866500;--weui-YELLOW-BG-90:#c59c1a;--weui-FG-HALF:hsla(0,0%,100%,0.65);--weui-RED:#fa5151;--weui-ORANGERED:#ff6146;--weui-ORANGE:#c87d2f;--weui-YELLOW:#cc9c00;--weui-GREEN:#74a800;--weui-LIGHTGREEN:#3eb575;--weui-TEXTGREEN:#259c5c;--weui-BRAND:#07c160;--weui-BLUE:#10aeff;--weui-INDIGO:#1196ff;--weui-PURPLE:#8183ff;--weui-LINK:#7d90a9;--weui-REDORANGE:#ff6146;--weui-TAG-BACKGROUND-BLACK:hsla(0,0%,100%,0.05);--weui-FG:#fff;--weui-WHITE:hsla(0,0%,100%,0.8);--weui-FG-5:hsla(0,0%,100%,0.1);--weui-TAG-BACKGROUND-ORANGE:rgba(250,157,59,0.1);--weui-TAG-BACKGROUND-GREEN:rgba(6,174,86,0.1);--weui-TAG-TEXT-RED:rgba(250,81,81,0.6);--weui-TAG-BACKGROUND-RED:rgba(250,81,81,0.1);--weui-TAG-BACKGROUND-BLUE:rgba(16,174,255,0.1);--weui-TAG-TEXT-ORANGE:rgba(250,157,59,0.6);--weui-BG:#000;--weui-TAG-TEXT-GREEN:rgba(6,174,86,0.6);--weui-TAG-TEXT-BLUE:rgba(16,174,255,0.6);--weui-TAG-TEXT-BLACK:hsla(0,0%,100%,0.5)}}.wx-root[data-weui-mode=care][data-weui-theme=dark],body[data-weui-mode=care][data-weui-theme=dark]{--weui-BG-0:#111;--weui-BG-1:#1e1e1e;--weui-BG-2:#191919;--weui-BG-3:#202020;--weui-BG-4:#404040;--weui-BG-5:#2c2c2c;--weui-BLUE-100:#10aeff;--weui-BLUE-120:#0c8bcc;--weui-BLUE-170:#04344d;--weui-BLUE-80:#3fbeff;--weui-BLUE-90:#28b6ff;--weui-BLUE-BG-100:#48a6e2;--weui-BLUE-BG-110:#4095cb;--weui-BLUE-BG-130:#32749e;--weui-BLUE-BG-90:#5aafe4;--weui-BRAND-100:#07c160;--weui-BRAND-120:#059a4c;--weui-BRAND-170:#023a1c;--weui-BRAND-80:#38cd7f;--weui-BRAND-90:#20c770;--weui-BRAND-BG-100:#2aae67;--weui-BRAND-BG-110:#259c5c;--weui-BRAND-BG-130:#1d7a48;--weui-BRAND-BG-90:#3eb575;--weui-FG-0:hsla(0,0%,100%,0.85);--weui-FG-0_5:hsla(0,0%,100%,0.65);--weui-FG-1:hsla(0,0%,100%,0.55);--weui-FG-2:hsla(0,0%,100%,0.35);--weui-FG-3:hsla(0,0%,100%,0.1);--weui-FG-4:hsla(0,0%,100%,0.15);--weui-GLYPH-0:hsla(0,0%,100%,0.85);--weui-GLYPH-1:hsla(0,0%,100%,0.55);--weui-GLYPH-2:hsla(0,0%,100%,0.35);--weui-GLYPH-WHITE-0:hsla(0,0%,100%,0.85);--weui-GLYPH-WHITE-1:hsla(0,0%,100%,0.55);--weui-GLYPH-WHITE-2:hsla(0,0%,100%,0.35);--weui-GLYPH-WHITE-3:#fff;--weui-GREEN-100:#74a800;--weui-GREEN-120:#5c8600;--weui-GREEN-170:#233200;--weui-GREEN-80:#8fb933;--weui-GREEN-90:#82b01a;--weui-GREEN-BG-100:#789833;--weui-GREEN-BG-110:#6b882d;--weui-GREEN-BG-130:#65802b;--weui-GREEN-BG-90:#85a247;--weui-INDIGO-100:#1196ff;--weui-INDIGO-120:#0d78cc;--weui-INDIGO-170:#052d4d;--weui-INDIGO-80:#40abff;--weui-INDIGO-90:#28a0ff;--weui-INDIGO-BG-100:#0d78cc;--weui-INDIGO-BG-110:#0b6bb7;--weui-INDIGO-BG-130:#09548f;--weui-INDIGO-BG-90:#2585d1;--weui-LIGHTGREEN-100:#3eb575;--weui-LIGHTGREEN-120:#31905d;--weui-LIGHTGREEN-170:#123522;--weui-LIGHTGREEN-80:#64c390;--weui-LIGHTGREEN-90:#51bc83;--weui-LIGHTGREEN-BG-100:#31905d;--weui-LIGHTGREEN-BG-110:#2c8153;--weui-LIGHTGREEN-BG-130:#226541;--weui-LIGHTGREEN-BG-90:#31905d;--weui-LINK-100:#7d90a9;--weui-LINK-120:#647387;--weui-LINK-170:#252a32;--weui-LINK-80:#97a6ba;--weui-LINK-90:#899ab1;--weui-LINKFINDER-100:#dee9ff;--weui-MATERIAL-ATTACHMENTCOLUMN:rgba(32,32,32,0.93);--weui-MATERIAL-NAVIGATIONBAR:rgba(18,18,18,0.9);--weui-MATERIAL-REGULAR:rgba(37,37,37,0.6);--weui-MATERIAL-THICK:rgba(34,34,34,0.9);--weui-MATERIAL-THIN:hsla(0,0%,96.1%,0.4);--weui-MATERIAL-TOOLBAR:rgba(35,35,35,0.93);--weui-ORANGE-100:#c87d2f;--weui-ORANGE-120:#a06425;--weui-ORANGE-170:#3b250e;--weui-ORANGE-80:#d39758;--weui-ORANGE-90:#cd8943;--weui-ORANGE-BG-100:#bb6000;--weui-ORANGE-BG-110:#a85600;--weui-ORANGE-BG-130:#824300;--weui-ORANGE-BG-90:#c1701a;--weui-ORANGERED-100:#ff6146;--weui-OVERLAY:rgba(0,0,0,0.8);--weui-OVERLAY-WHITE:hsla(0,0%,94.9%,0.8);--weui-PURPLE-100:#8183ff;--weui-PURPLE-120:#6768cc;--weui-PURPLE-170:#26274c;--weui-PURPLE-80:#9a9bff;--weui-PURPLE-90:#8d8fff;--weui-PURPLE-BG-100:#6768cc;--weui-PURPLE-BG-110:#5c5db7;--weui-PURPLE-BG-130:#48498f;--weui-PURPLE-BG-90:#7677d1;--weui-RED-100:#fa5151;--weui-RED-120:#c84040;--weui-RED-170:#4b1818;--weui-RED-80:#fb7373;--weui-RED-90:#fa6262;--weui-RED-BG-100:#cf5148;--weui-RED-BG-110:#ba4940;--weui-RED-BG-130:#913832;--weui-RED-BG-90:#d3625a;--weui-SECONDARY-BG:hsla(0,0%,100%,0.15);--weui-SEPARATOR-0:hsla(0,0%,100%,0.05);--weui-SEPARATOR-1:hsla(0,0%,100%,0.15);--weui-STATELAYER-HOVERED:rgba(0,0,0,0.02);--weui-STATELAYER-PRESSED:hsla(0,0%,100%,0.1);--weui-STATELAYER-PRESSEDSTRENGTHENED:hsla(0,0%,100%,0.2);--weui-YELLOW-100:#cc9c00;--weui-YELLOW-120:#a37c00;--weui-YELLOW-170:#3d2f00;--weui-YELLOW-80:#d6af33;--weui-YELLOW-90:#d1a519;--weui-YELLOW-BG-100:#bf9100;--weui-YELLOW-BG-110:#ab8200;--weui-YELLOW-BG-130:#866500;--weui-YELLOW-BG-90:#c59c1a;--weui-FG-HALF:hsla(0,0%,100%,0.65);--weui-RED:#fa5151;--weui-ORANGERED:#ff6146;--weui-ORANGE:#c87d2f;--weui-YELLOW:#cc9c00;--weui-GREEN:#74a800;--weui-LIGHTGREEN:#3eb575;--weui-TEXTGREEN:#259c5c;--weui-BRAND:#07c160;--weui-BLUE:#10aeff;--weui-INDIGO:#1196ff;--weui-PURPLE:#8183ff;--weui-LINK:#7d90a9;--weui-REDORANGE:#ff6146;--weui-TAG-BACKGROUND-BLACK:hsla(0,0%,100%,0.05);--weui-FG:#fff;--weui-WHITE:hsla(0,0%,100%,0.8);--weui-FG-5:hsla(0,0%,100%,0.1);--weui-TAG-BACKGROUND-ORANGE:rgba(250,157,59,0.1);--weui-TAG-BACKGROUND-GREEN:rgba(6,174,86,0.1);--weui-TAG-TEXT-RED:rgba(250,81,81,0.6);--weui-TAG-BACKGROUND-RED:rgba(250,81,81,0.1);--weui-TAG-BACKGROUND-BLUE:rgba(16,174,255,0.1);--weui-TAG-TEXT-ORANGE:rgba(250,157,59,0.6);--weui-BG:#000;--weui-TAG-TEXT-GREEN:rgba(6,174,86,0.6);--weui-TAG-TEXT-BLUE:rgba(16,174,255,0.6);--weui-TAG-TEXT-BLACK:hsla(0,0%,100%,0.5)}.wx-root{pointer-events:auto;font-family:system-ui,-apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Hiragino Sans GB,Microsoft YaHei UI,Microsoft YaHei,Arial,sans-serif}.wx-root,.wx_card_root{position:relative}.wxw_hide{display:none!important}.wx_uninteractive{pointer-events:none}.wx-root,body{--APPMSGCARD-BG:#fafafa}.wx-root[data-weui-theme=dark],body[data-weui-theme=dark]{--APPMSGCARD-BG:#1e1e1e}@media (prefers-color-scheme:dark){.wx-root:not([data-weui-theme=light]),body:not([data-weui-theme=light]){--APPMSGCARD-BG:#1e1e1e}}.wx-root,body{--APPMSGCARD-LINE-BG:rgba(0,0,0,0.07)}.wx-root[data-weui-theme=dark],body[data-weui-theme=dark]{--APPMSGCARD-LINE-BG:hsla(0,0%,100%,0.07)}@media (prefers-color-scheme:dark){.wx-root:not([data-weui-theme=light]),body:not([data-weui-theme=light]){--APPMSGCARD-LINE-BG:hsla(0,0%,100%,0.07)}}.appmsg_card_context{position:relative;background-color:var(--APPMSGCARD-BG);border-radius:8px;-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}:host(.wx_tap_highlight_active) .wx_tap_link{opacity:.5}:host(.wx_tap_highlight_active) .wx_tap_card{background-color:#f3f3f3}:host(.wx_tap_highlight_active) .wx_tap_cell{background-color:rgba(0,0,0,.05)}@media (prefers-color-scheme:dark){:host(.wx_tap_highlight_active) .wx_tap_card{background-color:#252525}:host(.wx_tap_highlight_active) .wx_tap_cell{background-color:hsla(0,0%,100%,.1)}}.wx_css_active :active{opacity:.5}.weui-flex__item{min-width:0}.weui-flex_align-center{align-items:center}[tabindex]{outline:0}.wx_hover_card:before{border-radius:8px;border:1px solid rgba(7,193,96,.3)}.wx_hover_card:before,.wx_selected_card:before{content:" ";position:absolute;top:0;left:0;right:0;bottom:0;box-sizing:border-box;pointer-events:none;z-index:9}.wx_selected_card:before{border-radius:8px;border:1.5px solid #07c160;background:rgba(7,193,96,.1)}img{pointer-events:none}.wx_profile_card{line-height:1.4;text-align:left;text-decoration:none;clear:both;position:relative}.wx_profile_card_ft{padding:8px 16px;align-items:center;position:relative;color:var(--weui-FG-2);font-size:14px}.wx_profile_card_ft:before{content:"";content:" ";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid var(--APPMSGCARD-LINE-BG);color:var(--APPMSGCARD-LINE-BG);transform-origin:0 0;transform:scaleY(.5);left:16px;right:16px}.wx_profile_msg{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;z-index:1;background:hsla(0,0%,100%,.5);font-size:14px;font-weight:400}.common-web{margin:0 auto;max-width:350px}.wx_card_disabled .wx_profile_card_bd{filter:blur(2px)}.wx_profile{padding:20px 16px}.wx_profile .weui-icon-arrow{width:1em;height:2em}.wx_profile_hd{display:flex;padding-right:10px}.wx_profile_hd .wx_profile_avatar{width:44px;height:44px!important;border-radius:100%}.wx_profile_ft{padding-left:10px}.wx_profile_bd{align-items:center}.wx_profile_bd>.weui-flex__item{padding-right:16px}.wx_profile_nickname{display:inline-block;flex-shrink:1;color:var(--weui-FG-0);font-weight:500}.wx_profile_desc{width:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal}.wx_profile_desc,.wx_profile_tips{color:var(--weui-FG-1);font-size:14px;margin-top:4px}.wx_profile_tips{display:flex;min-height:1.4em}.wx_profile_tips:empty{display:none}.wx_profile_nickname_wrp{position:relative;display:flex;flex-direction:row;align-items:center;width:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal;font-size:17px;line-height:1.2;font-weight:500}.wx_follow_verify{flex-shrink:0;height:14px;width:14px;margin-left:2px;background-size:cover;background-position:50%;background-repeat:no-repeat}.wx_follow_verify.show-verify-personal{display:block;background-image:url(https://res.wx.qq.com/op_res/nLnAiLrrETuU96Aym1ZDNuddJ2beY0iOs-D3h-7MPQeIIoXE5kLrgfPY_Vr_hrKamxAjISc12pBthrd7Ja4S4w)}.wx_follow_verify.show-verify-company{display:block;background-image:url(https://res.wx.qq.com/op_res/nLnAiLrrETuU96Aym1ZDNjhMga6Fe1hiYp332DlZsT_u4THJyu8XegVlG723G5FblhAwxLO31iFVMkzq62jS3w)}.wx_follow_verify.show-verify-media{display:block;background-image:url(https://res.wx.qq.com/op_res/n1-Xym4hWn0AbVImOFGmT9sRdHV1rjoe3lnMHwxRdfbguJjDQH16CE7AIfDZy1KVMHWCPJIoAC4jrMEFqmqR4A)}</style>
      <div role="option" tabindex="0"
           aria-labelledby="js_a11y_wx_profile_nickname js_a11y_comma js_a11y_wx_profile_desc js_a11y_comma0 js_a11y_wx_profile_tips js_a11y_comma1 js_a11y_wx_profile_logo"
           class="appmsg_card_context wx_profile_card wx-root wx_tap_card wx_card_root common-web"
           data-weui-theme="light">
        <div class="wx_profile_card_inner">
          <div class="wx_profile_card_bd" aria-hidden="true">
            <div class="wx_profile weui-flex">
              <div class="wx_profile_hd">
                <img src="${n}" alt="" class="wx_profile_avatar">
              </div>
              <div class="wx_profile_bd weui-flex weui-flex__item">
                <div class="weui-flex__item">
                  <div class="wx_profile_nickname_wrp">
                    <strong id="js_a11y_wx_profile_nickname" class="wx_profile_nickname">${t}</strong>
                    <span class="wx_follow_verify ${i==="1"?"show-verify-personal":i==="2"?"show-verify-company":""}"></span>
                  </div>
                  <div id="js_a11y_wx_profile_desc" class="wx_profile_desc">${o}</div>
                </div>
                <i class="weui-icon-arrow"></i>
              </div>
            </div>
          </div>
          <div id="js_a11y_wx_profile_logo" aria-hidden="true" class="wx_profile_card_ft">
            ${a==="1"?"公众号":"服务号"}
          </div>
        </div>
        <span aria-hidden="true" id="js_a11y_comma" class="weui-a11y_ref" style="display: none;">，</span>
      </div>
    `}}function setupComponents(){customElements.define("mp-common-profile",MpCommonProfile)}initializeMermaid().catch(console.error);setupComponents();const pinia=createPinia(),app=createApp(_sfc_main);app.use(pinia);const isInExtension$1=SyncCasterAdapter.isInExtension();app.provide("isInSyncCasterExtension",isInExtension$1);app.mount("#app");isInExtension$1&&setTimeout(async()=>{try{const e=await SyncCasterAdapter.loadFromExtension();e&&(window.dispatchEvent(new CustomEvent("synccaster-load-content",{detail:e})),console.log("[SyncCaster] Content loaded from extension storage"))}catch(e){console.error("[SyncCaster] Failed to load content from extension:",e)}},100);const isInExtension=typeof chrome<"u"&&chrome.runtime&&chrome.runtime.id;async function getCurrentTab(){const e={active:!0,lastFocusedWindow:!0};if(typeof browser<"u"&&browser.tabs&&browser.tabs.query){const[n]=await browser.tabs.query(e);return n}const[t]=await chrome.tabs.query(e);return t}window.addEventListener("copyToMp",e=>{const t=e;isInExtension&&getCurrentTab().then(n=>{chrome.tabs.sendMessage(n.id,{type:"copyToMp",content:t.detail.content})})});
