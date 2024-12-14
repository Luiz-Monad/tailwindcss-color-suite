var $f = Object.defineProperty;
var Rf = (e, t, n) => t in e ? $f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var bn = (e, t, n) => Rf(e, typeof t != "symbol" ? t + "" : t, n);
import { settings as Pf } from "virtual:color-suite/config/settings";
import { colors as po } from "virtual:color-suite/config/colors";
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ue(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const re = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, xn = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], xe = () => {
}, xa = () => !1, Mn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ar = (e) => e.startsWith("onUpdate:"), fe = Object.assign, Uo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Mf = Object.prototype.hasOwnProperty, le = (e, t) => Mf.call(e, t), B = Array.isArray, pn = (e) => In(e) === "[object Map]", vn = (e) => In(e) === "[object Set]", js = (e) => In(e) === "[object Date]", Sa = (e) => In(e) === "[object RegExp]", Y = (e) => typeof e == "function", de = (e) => typeof e == "string", at = (e) => typeof e == "symbol", ce = (e) => e !== null && typeof e == "object", zr = (e) => (ce(e) || Y(e)) && Y(e.then) && Y(e.catch), Ni = Object.prototype.toString, In = (e) => Ni.call(e), Bo = (e) => In(e).slice(8, -1), Wr = (e) => In(e) === "[object Object]", Ko = (e) => de(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Sn = /* @__PURE__ */ Ue(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ca = /* @__PURE__ */ Ue(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Go = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, If = /-(\w)/g, De = Go(
  (e) => e.replace(If, (t, n) => n ? n.toUpperCase() : "")
), Lf = /\B([A-Z])/g, Pe = Go(
  (e) => e.replace(Lf, "-$1").toLowerCase()
), qt = Go((e) => e.charAt(0).toUpperCase() + e.slice(1)), Dt = Go(
  (e) => e ? `on${qt(e)}` : ""
), Le = (e, t) => !Object.is(e, t), Kt = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, kn = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, kr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, $r = (e) => {
  const t = de(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let sc;
const cr = () => sc || (sc = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {}), jf = /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;
function Ff(e) {
  return jf.test(e) ? `__props.${e}` : `__props[${JSON.stringify(e)}]`;
}
function Hf(e, t) {
  return e + JSON.stringify(
    t,
    (n, r) => typeof r == "function" ? r.toString() : r
  );
}
const Uf = {
  TEXT: 1,
  1: "TEXT",
  CLASS: 2,
  2: "CLASS",
  STYLE: 4,
  4: "STYLE",
  PROPS: 8,
  8: "PROPS",
  FULL_PROPS: 16,
  16: "FULL_PROPS",
  NEED_HYDRATION: 32,
  32: "NEED_HYDRATION",
  STABLE_FRAGMENT: 64,
  64: "STABLE_FRAGMENT",
  KEYED_FRAGMENT: 128,
  128: "KEYED_FRAGMENT",
  UNKEYED_FRAGMENT: 256,
  256: "UNKEYED_FRAGMENT",
  NEED_PATCH: 512,
  512: "NEED_PATCH",
  DYNAMIC_SLOTS: 1024,
  1024: "DYNAMIC_SLOTS",
  DEV_ROOT_FRAGMENT: 2048,
  2048: "DEV_ROOT_FRAGMENT",
  CACHED: -1,
  "-1": "CACHED",
  BAIL: -2,
  "-2": "BAIL"
}, Bf = {
  1: "TEXT",
  2: "CLASS",
  4: "STYLE",
  8: "PROPS",
  16: "FULL_PROPS",
  32: "NEED_HYDRATION",
  64: "STABLE_FRAGMENT",
  128: "KEYED_FRAGMENT",
  256: "UNKEYED_FRAGMENT",
  512: "NEED_PATCH",
  1024: "DYNAMIC_SLOTS",
  2048: "DEV_ROOT_FRAGMENT",
  [-1]: "HOISTED",
  [-2]: "BAIL"
}, Kf = {
  ELEMENT: 1,
  1: "ELEMENT",
  FUNCTIONAL_COMPONENT: 2,
  2: "FUNCTIONAL_COMPONENT",
  STATEFUL_COMPONENT: 4,
  4: "STATEFUL_COMPONENT",
  TEXT_CHILDREN: 8,
  8: "TEXT_CHILDREN",
  ARRAY_CHILDREN: 16,
  16: "ARRAY_CHILDREN",
  SLOTS_CHILDREN: 32,
  32: "SLOTS_CHILDREN",
  TELEPORT: 64,
  64: "TELEPORT",
  SUSPENSE: 128,
  128: "SUSPENSE",
  COMPONENT_SHOULD_KEEP_ALIVE: 256,
  256: "COMPONENT_SHOULD_KEEP_ALIVE",
  COMPONENT_KEPT_ALIVE: 512,
  512: "COMPONENT_KEPT_ALIVE",
  COMPONENT: 6,
  6: "COMPONENT"
}, Gf = {
  STABLE: 1,
  1: "STABLE",
  DYNAMIC: 2,
  2: "DYNAMIC",
  FORWARDED: 3,
  3: "FORWARDED"
}, zf = {
  1: "STABLE",
  2: "DYNAMIC",
  3: "FORWARDED"
}, Wf = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol", Oi = /* @__PURE__ */ Ue(Wf), qf = Oi, ic = 2;
function Yf(e, t = 0, n = e.length) {
  if (t = Math.max(0, Math.min(t, e.length)), n = Math.max(0, Math.min(n, e.length)), t > n) return "";
  let r = e.split(/(\r?\n)/);
  const o = r.filter((c, a) => a % 2 === 1);
  r = r.filter((c, a) => a % 2 === 0);
  let s = 0;
  const i = [];
  for (let c = 0; c < r.length; c++)
    if (s += r[c].length + (o[c] && o[c].length || 0), s >= t) {
      for (let a = c - ic; a <= c + ic || n > s; a++) {
        if (a < 0 || a >= r.length) continue;
        const f = a + 1;
        i.push(
          `${f}${" ".repeat(Math.max(3 - String(f).length, 0))}|  ${r[a]}`
        );
        const u = r[a].length, l = o[a] && o[a].length || 0;
        if (a === c) {
          const d = t - (s - (u + l)), h = Math.max(
            1,
            n > s ? u - d : n - t
          );
          i.push("   |  " + " ".repeat(d) + "^".repeat(h));
        } else if (a > c) {
          if (n > s) {
            const d = Math.max(Math.min(n - s, u), 1);
            i.push("   |  " + "^".repeat(d));
          }
          s += u + l;
        }
      }
      break;
    }
  return i.join(`
`);
}
function Mt(e) {
  if (B(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = de(r) ? Da(r) : Mt(r);
      if (o)
        for (const s in o)
          t[s] = o[s];
    }
    return t;
  } else if (de(e) || ce(e))
    return e;
}
const Xf = /;(?![^(]*\))/g, Jf = /:([^]+)/, Qf = /\/\*[^]*?\*\//g;
function Da(e) {
  const t = {};
  return e.replace(Qf, "").split(Xf).forEach((n) => {
    if (n) {
      const r = n.split(Jf);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function Ta(e) {
  if (!e) return "";
  if (de(e)) return e;
  let t = "";
  for (const n in e) {
    const r = e[n];
    if (de(r) || typeof r == "number") {
      const o = n.startsWith("--") ? n : Pe(n);
      t += `${o}:${r};`;
    }
  }
  return t;
}
function qe(e) {
  let t = "";
  if (de(e))
    t = e;
  else if (B(e))
    for (let n = 0; n < e.length; n++) {
      const r = qe(e[n]);
      r && (t += r + " ");
    }
  else if (ce(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function Va(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !de(t) && (e.class = qe(t)), n && (e.style = Mt(n)), e;
}
const Zf = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", ed = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", td = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", nd = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", Aa = /* @__PURE__ */ Ue(Zf), ka = /* @__PURE__ */ Ue(ed), $a = /* @__PURE__ */ Ue(td), rd = /* @__PURE__ */ Ue(nd), Ra = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Pa = /* @__PURE__ */ Ue(Ra), Fs = /* @__PURE__ */ Ue(
  Ra + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"
);
function zo(e) {
  return !!e || e === "";
}
const od = /[>/="'\u0009\u000a\u000c\u0020]/, gs = {};
function sd(e) {
  if (gs.hasOwnProperty(e))
    return gs[e];
  const t = od.test(e);
  return t && console.error(`unsafe attribute name: ${e}`), gs[e] = !t;
}
const id = {
  acceptCharset: "accept-charset",
  className: "class",
  htmlFor: "for",
  httpEquiv: "http-equiv"
}, Ma = /* @__PURE__ */ Ue(
  "accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap"
), Ia = /* @__PURE__ */ Ue(
  "xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan"
), cd = /* @__PURE__ */ Ue(
  "accent,accentunder,actiontype,align,alignmentscope,altimg,altimg-height,altimg-valign,altimg-width,alttext,bevelled,close,columnsalign,columnlines,columnspan,denomalign,depth,dir,display,displaystyle,encoding,equalcolumns,equalrows,fence,fontstyle,fontweight,form,frame,framespacing,groupalign,height,href,id,indentalign,indentalignfirst,indentalignlast,indentshift,indentshiftfirst,indentshiftlast,indextype,justify,largetop,largeop,lquote,lspace,mathbackground,mathcolor,mathsize,mathvariant,maxsize,minlabelspacing,mode,other,overflow,position,rowalign,rowlines,rowspan,rquote,rspace,scriptlevel,scriptminsize,scriptsizemultiplier,selection,separator,separators,shift,side,src,stackalign,stretchy,subscriptshift,superscriptshift,symmetric,voffset,width,widths,xlink:href,xlink:show,xlink:type,xmlns"
);
function La(e) {
  if (e == null)
    return !1;
  const t = typeof e;
  return t === "string" || t === "number" || t === "boolean";
}
const ad = /["'&<>]/;
function ld(e) {
  const t = "" + e, n = ad.exec(t);
  if (!n)
    return t;
  let r = "", o, s, i = 0;
  for (s = n.index; s < t.length; s++) {
    switch (t.charCodeAt(s)) {
      case 34:
        o = "&quot;";
        break;
      case 38:
        o = "&amp;";
        break;
      case 39:
        o = "&#39;";
        break;
      case 60:
        o = "&lt;";
        break;
      case 62:
        o = "&gt;";
        break;
      default:
        continue;
    }
    i !== s && (r += t.slice(i, s)), i = s + 1, r += o;
  }
  return i !== s ? r + t.slice(i, s) : r;
}
const ud = /^-?>|<!--|-->|--!>|<!-$/g;
function fd(e) {
  return e.replace(ud, "");
}
const ja = /[ !"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g;
function Fa(e, t) {
  return e.replace(
    ja,
    (n) => t ? n === '"' ? '\\\\\\"' : `\\\\${n}` : `\\${n}`
  );
}
function dd(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = Yt(e[r], t[r]);
  return n;
}
function Yt(e, t) {
  if (e === t) return !0;
  let n = js(e), r = js(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = at(e), r = at(t), n || r)
    return e === t;
  if (n = B(e), r = B(t), n || r)
    return n && r ? dd(e, t) : !1;
  if (n = ce(e), r = ce(t), n || r) {
    if (!n || !r)
      return !1;
    const o = Object.keys(e).length, s = Object.keys(t).length;
    if (o !== s)
      return !1;
    for (const i in e) {
      const c = e.hasOwnProperty(i), a = t.hasOwnProperty(i);
      if (c && !a || !c && a || !Yt(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function qr(e, t) {
  return e.findIndex((n) => Yt(n, t));
}
const Ha = (e) => !!(e && e.__v_isRef === !0), Wn = (e) => de(e) ? e : e == null ? "" : B(e) || ce(e) && (e.toString === Ni || !Y(e.toString)) ? Ha(e) ? Wn(e.value) : JSON.stringify(e, Ua, 2) : String(e), Ua = (e, t) => Ha(t) ? Ua(e, t.value) : pn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, o], s) => (n[_s(r, s) + " =>"] = o, n),
    {}
  )
} : vn(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => _s(n))
} : at(t) ? _s(t) : ce(t) && !B(t) && !Wr(t) ? String(t) : t, _s = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    at(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
}, Iy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  EMPTY_ARR: xn,
  EMPTY_OBJ: re,
  NO: xa,
  NOOP: xe,
  PatchFlagNames: Bf,
  PatchFlags: Uf,
  ShapeFlags: Kf,
  SlotFlags: Gf,
  camelize: De,
  capitalize: qt,
  cssVarNameEscapeSymbolsRE: ja,
  def: kn,
  escapeHtml: ld,
  escapeHtmlComment: fd,
  extend: fe,
  genCacheKey: Hf,
  genPropsAccessExp: Ff,
  generateCodeFrame: Yf,
  getEscapedCssVarName: Fa,
  getGlobalThis: cr,
  hasChanged: Le,
  hasOwn: le,
  hyphenate: Pe,
  includeBooleanAttr: zo,
  invokeArrayFns: Kt,
  isArray: B,
  isBooleanAttr: Fs,
  isBuiltInDirective: Ca,
  isDate: js,
  isFunction: Y,
  isGloballyAllowed: Oi,
  isGloballyWhitelisted: qf,
  isHTMLTag: Aa,
  isIntegerKey: Ko,
  isKnownHtmlAttr: Ma,
  isKnownMathMLAttr: cd,
  isKnownSvgAttr: Ia,
  isMap: pn,
  isMathMLTag: $a,
  isModelListener: Ar,
  isObject: ce,
  isOn: Mn,
  isPlainObject: Wr,
  isPromise: zr,
  isRegExp: Sa,
  isRenderableAttrValue: La,
  isReservedProp: Sn,
  isSSRSafeAttrName: sd,
  isSVGTag: ka,
  isSet: vn,
  isSpecialBooleanAttr: Pa,
  isString: de,
  isSymbol: at,
  isVoidTag: rd,
  looseEqual: Yt,
  looseIndexOf: qr,
  looseToNumber: kr,
  makeMap: Ue,
  normalizeClass: qe,
  normalizeProps: Va,
  normalizeStyle: Mt,
  objectToString: Ni,
  parseStringStyle: Da,
  propsToAttrMap: id,
  remove: Uo,
  slotFlagsText: zf,
  stringifyStyle: Ta,
  toDisplayString: Wn,
  toHandlerKey: Dt,
  toNumber: $r,
  toRawType: Bo,
  toTypeString: In
}, Symbol.toStringTag, { value: "Module" }));
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function lt(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Ge;
class xi {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Ge, !t && Ge && (this.index = (Ge.scopes || (Ge.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = Ge;
      try {
        return Ge = this, t();
      } finally {
        Ge = n;
      }
    } else process.env.NODE_ENV !== "production" && lt("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Ge = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Ge = this.parent;
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, r = this.scopes.length; n < r; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Ba(e) {
  return new xi(e);
}
function Ka() {
  return Ge;
}
function pd(e, t = !1) {
  Ge ? Ge.cleanups.push(e) : process.env.NODE_ENV !== "production" && !t && lt(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let he;
const ms = /* @__PURE__ */ new WeakSet();
class Rr {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ge && Ge.active && Ge.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ms.has(this) && (ms.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || za(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, cc(this), Wa(this);
    const t = he, n = yt;
    he = this, yt = !0;
    try {
      return this.fn();
    } finally {
      process.env.NODE_ENV !== "production" && he !== this && lt(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), qa(this), he = t, yt = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Di(t);
      this.deps = this.depsTail = void 0, cc(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ms.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Hs(this) && this.run();
  }
  get dirty() {
    return Hs(this);
  }
}
let Ga = 0, wr, Nr;
function za(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Nr, Nr = e;
    return;
  }
  e.next = wr, wr = e;
}
function Si() {
  Ga++;
}
function Ci() {
  if (--Ga > 0)
    return;
  if (Nr) {
    let t = Nr;
    for (Nr = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; wr; ) {
    let t = wr;
    for (wr = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (r) {
          e || (e = r);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Wa(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function qa(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const o = r.prevDep;
    r.version === -1 ? (r === n && (n = o), Di(r), hd(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
  }
  e.deps = t, e.depsTail = n;
}
function Hs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ya(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ya(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Pr))
    return;
  e.globalVersion = Pr;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !Hs(e)) {
    e.flags &= -3;
    return;
  }
  const n = he, r = yt;
  he = e, yt = !0;
  try {
    Wa(e);
    const o = e.fn(e._value);
    (t.version === 0 || Le(o, e._value)) && (e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    he = n, yt = r, qa(e), e.flags &= -3;
  }
}
function Di(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: o } = e;
  if (r && (r.nextSub = o, e.prevSub = void 0), o && (o.prevSub = r, e.nextSub = void 0), process.env.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = o), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      Di(s, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function hd(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
function gd(e, t) {
  e.effect instanceof Rr && (e = e.effect.fn);
  const n = new Rr(e);
  t && fe(n, t);
  try {
    n.run();
  } catch (o) {
    throw n.stop(), o;
  }
  const r = n.run.bind(n);
  return r.effect = n, r;
}
function _d(e) {
  e.effect.stop();
}
let yt = !0;
const Xa = [];
function Jt() {
  Xa.push(yt), yt = !1;
}
function Qt() {
  const e = Xa.pop();
  yt = e === void 0 ? !0 : e;
}
function cc(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = he;
    he = void 0;
    try {
      t();
    } finally {
      he = n;
    }
  }
}
let Pr = 0;
class md {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Wo {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!he || !yt || he === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== he)
      n = this.activeLink = new md(he, this), he.deps ? (n.prevDep = he.depsTail, he.depsTail.nextDep = n, he.depsTail = n) : he.deps = he.depsTail = n, Ja(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = he.depsTail, n.nextDep = void 0, he.depsTail.nextDep = n, he.depsTail = n, he.deps === n && (he.deps = r);
    }
    return process.env.NODE_ENV !== "production" && he.onTrack && he.onTrack(
      fe(
        {
          effect: he
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, Pr++, this.notify(t);
  }
  notify(t) {
    Si();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            fe(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Ci();
    }
  }
}
function Ja(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        Ja(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), process.env.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const Eo = /* @__PURE__ */ new WeakMap(), Cn = Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
), Us = Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
), Mr = Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function ke(e, t, n) {
  if (yt && he) {
    let r = Eo.get(e);
    r || Eo.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || (r.set(n, o = new Wo()), o.map = r, o.key = n), process.env.NODE_ENV !== "production" ? o.track({
      target: e,
      type: t,
      key: n
    }) : o.track();
  }
}
function Tt(e, t, n, r, o, s) {
  const i = Eo.get(e);
  if (!i) {
    Pr++;
    return;
  }
  const c = (a) => {
    a && (process.env.NODE_ENV !== "production" ? a.trigger({
      target: e,
      type: t,
      key: n,
      newValue: r,
      oldValue: o,
      oldTarget: s
    }) : a.trigger());
  };
  if (Si(), t === "clear")
    i.forEach(c);
  else {
    const a = B(e), f = a && Ko(n);
    if (a && n === "length") {
      const u = Number(r);
      i.forEach((l, d) => {
        (d === "length" || d === Mr || !at(d) && d >= u) && c(l);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && c(i.get(n)), f && c(i.get(Mr)), t) {
        case "add":
          a ? f && c(i.get("length")) : (c(i.get(Cn)), pn(e) && c(i.get(Us)));
          break;
        case "delete":
          a || (c(i.get(Cn)), pn(e) && c(i.get(Us)));
          break;
        case "set":
          pn(e) && c(i.get(Cn));
          break;
      }
  }
  Ci();
}
function vd(e, t) {
  const n = Eo.get(e);
  return n && n.get(t);
}
function Bn(e) {
  const t = ee(e);
  return t === e ? t : (ke(t, "iterate", Mr), He(e) ? t : t.map(je));
}
function qo(e) {
  return ke(e = ee(e), "iterate", Mr), e;
}
const yd = {
  __proto__: null,
  [Symbol.iterator]() {
    return vs(this, Symbol.iterator, je);
  },
  concat(...e) {
    return Bn(this).concat(
      ...e.map((t) => B(t) ? Bn(t) : t)
    );
  },
  entries() {
    return vs(this, "entries", (e) => (e[1] = je(e[1]), e));
  },
  every(e, t) {
    return Lt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Lt(this, "filter", e, t, (n) => n.map(je), arguments);
  },
  find(e, t) {
    return Lt(this, "find", e, t, je, arguments);
  },
  findIndex(e, t) {
    return Lt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Lt(this, "findLast", e, t, je, arguments);
  },
  findLastIndex(e, t) {
    return Lt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Lt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ys(this, "includes", e);
  },
  indexOf(...e) {
    return ys(this, "indexOf", e);
  },
  join(e) {
    return Bn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return ys(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Lt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return fr(this, "pop");
  },
  push(...e) {
    return fr(this, "push", e);
  },
  reduce(e, ...t) {
    return ac(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ac(this, "reduceRight", e, t);
  },
  shift() {
    return fr(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Lt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return fr(this, "splice", e);
  },
  toReversed() {
    return Bn(this).toReversed();
  },
  toSorted(e) {
    return Bn(this).toSorted(e);
  },
  toSpliced(...e) {
    return Bn(this).toSpliced(...e);
  },
  unshift(...e) {
    return fr(this, "unshift", e);
  },
  values() {
    return vs(this, "values", je);
  }
};
function vs(e, t, n) {
  const r = qo(e), o = r[t]();
  return r !== e && !He(e) && (o._next = o.next, o.next = () => {
    const s = o._next();
    return s.value && (s.value = n(s.value)), s;
  }), o;
}
const bd = Array.prototype;
function Lt(e, t, n, r, o, s) {
  const i = qo(e), c = i !== e && !He(e), a = i[t];
  if (a !== bd[t]) {
    const l = a.apply(e, s);
    return c ? je(l) : l;
  }
  let f = n;
  i !== e && (c ? f = function(l, d) {
    return n.call(this, je(l), d, e);
  } : n.length > 2 && (f = function(l, d) {
    return n.call(this, l, d, e);
  }));
  const u = a.call(i, f, r);
  return c && o ? o(u) : u;
}
function ac(e, t, n, r) {
  const o = qo(e);
  let s = n;
  return o !== e && (He(e) ? n.length > 3 && (s = function(i, c, a) {
    return n.call(this, i, c, a, e);
  }) : s = function(i, c, a) {
    return n.call(this, i, je(c), a, e);
  }), o[t](s, ...r);
}
function ys(e, t, n) {
  const r = ee(e);
  ke(r, "iterate", Mr);
  const o = r[t](...n);
  return (o === -1 || o === !1) && Zn(n[0]) ? (n[0] = ee(n[0]), r[t](...n)) : o;
}
function fr(e, t, n = []) {
  Jt(), Si();
  const r = ee(e)[t].apply(e, n);
  return Ci(), Qt(), r;
}
const Ed = /* @__PURE__ */ Ue("__proto__,__v_isRef,__isVue"), Qa = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(at)
);
function wd(e) {
  at(e) || (e = String(e));
  const t = ee(this);
  return ke(t, "has", e), t.hasOwnProperty(e);
}
class Za {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const o = this._isReadonly, s = this._isShallow;
    if (n === "__v_isReactive")
      return !o;
    if (n === "__v_isReadonly")
      return o;
    if (n === "__v_isShallow")
      return s;
    if (n === "__v_raw")
      return r === (o ? s ? sl : ol : s ? rl : nl).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const i = B(t);
    if (!o) {
      let a;
      if (i && (a = yd[n]))
        return a;
      if (n === "hasOwnProperty")
        return wd;
    }
    const c = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Ne(t) ? t : r
    );
    return (at(n) ? Qa.has(n) : Ed(n)) || (o || ke(t, "get", n), s) ? c : Ne(c) ? i && Ko(n) ? c : c.value : ce(c) ? o ? Xo(c) : It(c) : c;
  }
}
class el extends Za {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let s = t[n];
    if (!this._isShallow) {
      const a = $t(s);
      if (!He(r) && !$t(r) && (s = ee(s), r = ee(r)), !B(t) && Ne(s) && !Ne(r))
        return a ? !1 : (s.value = r, !0);
    }
    const i = B(t) && Ko(n) ? Number(n) < t.length : le(t, n), c = Reflect.set(
      t,
      n,
      r,
      Ne(t) ? t : o
    );
    return t === ee(o) && (i ? Le(r, s) && Tt(t, "set", n, r, s) : Tt(t, "add", n, r)), c;
  }
  deleteProperty(t, n) {
    const r = le(t, n), o = t[n], s = Reflect.deleteProperty(t, n);
    return s && r && Tt(t, "delete", n, void 0, o), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!at(n) || !Qa.has(n)) && ke(t, "has", n), r;
  }
  ownKeys(t) {
    return ke(
      t,
      "iterate",
      B(t) ? "length" : Cn
    ), Reflect.ownKeys(t);
  }
}
class tl extends Za {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && lt(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && lt(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Nd = /* @__PURE__ */ new el(), Od = /* @__PURE__ */ new tl(), xd = /* @__PURE__ */ new el(!0), Sd = /* @__PURE__ */ new tl(!0), Bs = (e) => e, to = (e) => Reflect.getPrototypeOf(e);
function Cd(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, s = ee(o), i = pn(s), c = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, f = o[e](...r), u = n ? Bs : t ? Ks : je;
    return !t && ke(
      s,
      "iterate",
      a ? Us : Cn
    ), {
      // iterator protocol
      next() {
        const { value: l, done: d } = f.next();
        return d ? { value: l, done: d } : {
          value: c ? [u(l[0]), u(l[1])] : u(l),
          done: d
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function no(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      lt(
        `${qt(e)} operation ${n}failed: target is readonly.`,
        ee(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Dd(e, t) {
  const n = {
    get(o) {
      const s = this.__v_raw, i = ee(s), c = ee(o);
      e || (Le(o, c) && ke(i, "get", o), ke(i, "get", c));
      const { has: a } = to(i), f = t ? Bs : e ? Ks : je;
      if (a.call(i, o))
        return f(s.get(o));
      if (a.call(i, c))
        return f(s.get(c));
      s !== i && s.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && ke(ee(o), "iterate", Cn), Reflect.get(o, "size", o);
    },
    has(o) {
      const s = this.__v_raw, i = ee(s), c = ee(o);
      return e || (Le(o, c) && ke(i, "has", o), ke(i, "has", c)), o === c ? s.has(o) : s.has(o) || s.has(c);
    },
    forEach(o, s) {
      const i = this, c = i.__v_raw, a = ee(c), f = t ? Bs : e ? Ks : je;
      return !e && ke(a, "iterate", Cn), c.forEach((u, l) => o.call(s, f(u), f(l), i));
    }
  };
  return fe(
    n,
    e ? {
      add: no("add"),
      set: no("set"),
      delete: no("delete"),
      clear: no("clear")
    } : {
      add(o) {
        !t && !He(o) && !$t(o) && (o = ee(o));
        const s = ee(this);
        return to(s).has.call(s, o) || (s.add(o), Tt(s, "add", o, o)), this;
      },
      set(o, s) {
        !t && !He(s) && !$t(s) && (s = ee(s));
        const i = ee(this), { has: c, get: a } = to(i);
        let f = c.call(i, o);
        f ? process.env.NODE_ENV !== "production" && lc(i, c, o) : (o = ee(o), f = c.call(i, o));
        const u = a.call(i, o);
        return i.set(o, s), f ? Le(s, u) && Tt(i, "set", o, s, u) : Tt(i, "add", o, s), this;
      },
      delete(o) {
        const s = ee(this), { has: i, get: c } = to(s);
        let a = i.call(s, o);
        a ? process.env.NODE_ENV !== "production" && lc(s, i, o) : (o = ee(o), a = i.call(s, o));
        const f = c ? c.call(s, o) : void 0, u = s.delete(o);
        return a && Tt(s, "delete", o, void 0, f), u;
      },
      clear() {
        const o = ee(this), s = o.size !== 0, i = process.env.NODE_ENV !== "production" ? pn(o) ? new Map(o) : new Set(o) : void 0, c = o.clear();
        return s && Tt(
          o,
          "clear",
          void 0,
          void 0,
          i
        ), c;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    n[o] = Cd(o, e, t);
  }), n;
}
function Yo(e, t) {
  const n = Dd(e, t);
  return (r, o, s) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    le(n, o) && o in r ? n : r,
    o,
    s
  );
}
const Td = {
  get: /* @__PURE__ */ Yo(!1, !1)
}, Vd = {
  get: /* @__PURE__ */ Yo(!1, !0)
}, Ad = {
  get: /* @__PURE__ */ Yo(!0, !1)
}, kd = {
  get: /* @__PURE__ */ Yo(!0, !0)
};
function lc(e, t, n) {
  const r = ee(n);
  if (r !== n && t.call(e, r)) {
    const o = Bo(e);
    lt(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const nl = /* @__PURE__ */ new WeakMap(), rl = /* @__PURE__ */ new WeakMap(), ol = /* @__PURE__ */ new WeakMap(), sl = /* @__PURE__ */ new WeakMap();
function $d(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Rd(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : $d(Bo(e));
}
function It(e) {
  return $t(e) ? e : Jo(
    e,
    !1,
    Nd,
    Td,
    nl
  );
}
function Ti(e) {
  return Jo(
    e,
    !1,
    xd,
    Vd,
    rl
  );
}
function Xo(e) {
  return Jo(
    e,
    !0,
    Od,
    Ad,
    ol
  );
}
function mt(e) {
  return Jo(
    e,
    !0,
    Sd,
    kd,
    sl
  );
}
function Jo(e, t, n, r, o) {
  if (!ce(e))
    return process.env.NODE_ENV !== "production" && lt(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = o.get(e);
  if (s)
    return s;
  const i = Rd(e);
  if (i === 0)
    return e;
  const c = new Proxy(
    e,
    i === 2 ? r : n
  );
  return o.set(e, c), c;
}
function At(e) {
  return $t(e) ? At(e.__v_raw) : !!(e && e.__v_isReactive);
}
function $t(e) {
  return !!(e && e.__v_isReadonly);
}
function He(e) {
  return !!(e && e.__v_isShallow);
}
function Zn(e) {
  return e ? !!e.__v_raw : !1;
}
function ee(e) {
  const t = e && e.__v_raw;
  return t ? ee(t) : e;
}
function il(e) {
  return !le(e, "__v_skip") && Object.isExtensible(e) && kn(e, "__v_skip", !0), e;
}
const je = (e) => ce(e) ? It(e) : e, Ks = (e) => ce(e) ? Xo(e) : e;
function Ne(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Ce(e) {
  return cl(e, !1);
}
function Vi(e) {
  return cl(e, !0);
}
function cl(e, t) {
  return Ne(e) ? e : new Pd(e, t);
}
class Pd {
  constructor(t, n) {
    this.dep = new Wo(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : ee(t), this._value = n ? t : je(t), this.__v_isShallow = n;
  }
  get value() {
    return process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || He(t) || $t(t);
    t = r ? t : ee(t), Le(t, n) && (this._rawValue = t, this._value = r ? t : je(t), process.env.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function Md(e) {
  e.dep && (process.env.NODE_ENV !== "production" ? e.dep.trigger({
    target: e,
    type: "set",
    key: "value",
    newValue: e._value
  }) : e.dep.trigger());
}
function Vt(e) {
  return Ne(e) ? e.value : e;
}
function Id(e) {
  return Y(e) ? e() : Vt(e);
}
const Ld = {
  get: (e, t, n) => t === "__v_raw" ? e : Vt(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return Ne(o) && !Ne(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Ai(e) {
  return At(e) ? e : new Proxy(e, Ld);
}
class jd {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new Wo(), { get: r, set: o } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = r, this._set = o;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function al(e) {
  return new jd(e);
}
function Fd(e) {
  process.env.NODE_ENV !== "production" && !Zn(e) && lt("toRefs() expects a reactive object but received a plain one.");
  const t = B(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = ll(e, n);
  return t;
}
class Hd {
  constructor(t, n, r) {
    this._object = t, this._key = n, this._defaultValue = r, this.__v_isRef = !0, this._value = void 0;
  }
  get value() {
    const t = this._object[this._key];
    return this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return vd(ee(this._object), this._key);
  }
}
class Ud {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function Bd(e, t, n) {
  return Ne(e) ? e : Y(e) ? new Ud(e) : ce(e) && arguments.length > 1 ? ll(e, t, n) : Ce(e);
}
function ll(e, t, n) {
  const r = e[t];
  return Ne(r) ? r : new Hd(e, t, n);
}
class Kd {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Wo(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Pr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    he !== this)
      return za(this, !0), !0;
    process.env.NODE_ENV;
  }
  get value() {
    const t = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Ya(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : process.env.NODE_ENV !== "production" && lt("Write operation failed: computed value is readonly");
  }
}
function Gd(e, t, n = !1) {
  let r, o;
  Y(e) ? r = e : (r = e.get, o = e.set);
  const s = new Kd(r, o, n);
  return process.env.NODE_ENV !== "production" && t && !n && (s.onTrack = t.onTrack, s.onTrigger = t.onTrigger), s;
}
const zd = {
  GET: "get",
  HAS: "has",
  ITERATE: "iterate"
}, Wd = {
  SET: "set",
  ADD: "add",
  DELETE: "delete",
  CLEAR: "clear"
}, ro = {}, wo = /* @__PURE__ */ new WeakMap();
let cn;
function qd() {
  return cn;
}
function ul(e, t = !1, n = cn) {
  if (n) {
    let r = wo.get(n);
    r || wo.set(n, r = []), r.push(e);
  } else process.env.NODE_ENV !== "production" && !t && lt(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Yd(e, t, n = re) {
  const { immediate: r, deep: o, once: s, scheduler: i, augmentJob: c, call: a } = n, f = (v) => {
    (n.onWarn || lt)(
      "Invalid watch source: ",
      v,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, u = (v) => o ? v : He(v) || o === !1 || o === 0 ? Gt(v, 1) : Gt(v);
  let l, d, h, m, y = !1, M = !1;
  if (Ne(e) ? (d = () => e.value, y = He(e)) : At(e) ? (d = () => u(e), y = !0) : B(e) ? (M = !0, y = e.some((v) => At(v) || He(v)), d = () => e.map((v) => {
    if (Ne(v))
      return v.value;
    if (At(v))
      return u(v);
    if (Y(v))
      return a ? a(v, 2) : v();
    process.env.NODE_ENV !== "production" && f(v);
  })) : Y(e) ? t ? d = a ? () => a(e, 2) : e : d = () => {
    if (h) {
      Jt();
      try {
        h();
      } finally {
        Qt();
      }
    }
    const v = cn;
    cn = l;
    try {
      return a ? a(e, 3, [m]) : e(m);
    } finally {
      cn = v;
    }
  } : (d = xe, process.env.NODE_ENV !== "production" && f(e)), t && o) {
    const v = d, x = o === !0 ? 1 / 0 : o;
    d = () => Gt(v(), x);
  }
  const V = Ka(), E = () => {
    l.stop(), V && V.active && Uo(V.effects, l);
  };
  if (s && t) {
    const v = t;
    t = (...x) => {
      v(...x), E();
    };
  }
  let g = M ? new Array(e.length).fill(ro) : ro;
  const b = (v) => {
    if (!(!(l.flags & 1) || !l.dirty && !v))
      if (t) {
        const x = l.run();
        if (o || y || (M ? x.some((R, U) => Le(R, g[U])) : Le(x, g))) {
          h && h();
          const R = cn;
          cn = l;
          try {
            const U = [
              x,
              // pass undefined as the old value when it's changed for the first time
              g === ro ? void 0 : M && g[0] === ro ? [] : g,
              m
            ];
            a ? a(t, 3, U) : (
              // @ts-expect-error
              t(...U)
            ), g = x;
          } finally {
            cn = R;
          }
        }
      } else
        l.run();
  };
  return c && c(b), l = new Rr(d), l.scheduler = i ? () => i(b, !1) : b, m = (v) => ul(v, !1, l), h = l.onStop = () => {
    const v = wo.get(l);
    if (v) {
      if (a)
        a(v, 4);
      else
        for (const x of v) x();
      wo.delete(l);
    }
  }, process.env.NODE_ENV !== "production" && (l.onTrack = n.onTrack, l.onTrigger = n.onTrigger), t ? r ? b(!0) : g = l.run() : i ? i(b.bind(null, !0), !0) : l.run(), E.pause = l.pause.bind(l), E.resume = l.resume.bind(l), E.stop = E, E;
}
function Gt(e, t = 1 / 0, n) {
  if (t <= 0 || !ce(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, Ne(e))
    Gt(e.value, t, n);
  else if (B(e))
    for (let r = 0; r < e.length; r++)
      Gt(e[r], t, n);
  else if (vn(e) || pn(e))
    e.forEach((r) => {
      Gt(r, t, n);
    });
  else if (Wr(e)) {
    for (const r in e)
      Gt(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && Gt(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Dn = [];
function qn(e) {
  Dn.push(e);
}
function Yn() {
  Dn.pop();
}
let bs = !1;
function O(e, ...t) {
  if (bs) return;
  bs = !0, Jt();
  const n = Dn.length ? Dn[Dn.length - 1].component : null, r = n && n.appContext.config.warnHandler, o = Xd();
  if (r)
    Ln(
      r,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((s) => {
          var i, c;
          return (c = (i = s.toString) == null ? void 0 : i.call(s)) != null ? c : JSON.stringify(s);
        }).join(""),
        n && n.proxy,
        o.map(
          ({ vnode: s }) => `at <${as(n, s.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    o.length && s.push(`
`, ...Jd(o)), console.warn(...s);
  }
  Qt(), bs = !1;
}
function Xd() {
  let e = Dn[Dn.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const r = e.component && e.component.parent;
    e = r && r.vnode;
  }
  return t;
}
function Jd(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push(...r === 0 ? [] : [`
`], ...Qd(n));
  }), t;
}
function Qd({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, o = ` at <${as(
    e.component,
    e.type,
    r
  )}`, s = ">" + n;
  return e.props ? [o, ...Zd(e.props), s] : [o + s];
}
function Zd(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...fl(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function fl(e, t, n) {
  return de(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Ne(t) ? (t = fl(e, ee(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : Y(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = ee(t), n ? t : [`${e}=`, t]);
}
function ki(e, t) {
  process.env.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? O(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && O(`${t} is NaN - the duration expression might be incorrect.`));
}
const ep = {
  SETUP_FUNCTION: 0,
  0: "SETUP_FUNCTION",
  RENDER_FUNCTION: 1,
  1: "RENDER_FUNCTION",
  NATIVE_EVENT_HANDLER: 5,
  5: "NATIVE_EVENT_HANDLER",
  COMPONENT_EVENT_HANDLER: 6,
  6: "COMPONENT_EVENT_HANDLER",
  VNODE_HOOK: 7,
  7: "VNODE_HOOK",
  DIRECTIVE_HOOK: 8,
  8: "DIRECTIVE_HOOK",
  TRANSITION_HOOK: 9,
  9: "TRANSITION_HOOK",
  APP_ERROR_HANDLER: 10,
  10: "APP_ERROR_HANDLER",
  APP_WARN_HANDLER: 11,
  11: "APP_WARN_HANDLER",
  FUNCTION_REF: 12,
  12: "FUNCTION_REF",
  ASYNC_COMPONENT_LOADER: 13,
  13: "ASYNC_COMPONENT_LOADER",
  SCHEDULER: 14,
  14: "SCHEDULER",
  COMPONENT_UPDATE: 15,
  15: "COMPONENT_UPDATE",
  APP_UNMOUNT_CLEANUP: 16,
  16: "APP_UNMOUNT_CLEANUP"
}, Qo = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function Ln(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (o) {
    yn(o, t, n);
  }
}
function ut(e, t, n, r) {
  if (Y(e)) {
    const o = Ln(e, t, n, r);
    return o && zr(o) && o.catch((s) => {
      yn(s, t, n);
    }), o;
  }
  if (B(e)) {
    const o = [];
    for (let s = 0; s < e.length; s++)
      o.push(ut(e[s], t, n, r));
    return o;
  } else process.env.NODE_ENV !== "production" && O(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function yn(e, t, n, r = !0) {
  const o = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: i } = t && t.appContext.config || re;
  if (t) {
    let c = t.parent;
    const a = t.proxy, f = process.env.NODE_ENV !== "production" ? Qo[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; c; ) {
      const u = c.ec;
      if (u) {
        for (let l = 0; l < u.length; l++)
          if (u[l](e, a, f) === !1)
            return;
      }
      c = c.parent;
    }
    if (s) {
      Jt(), Ln(s, null, 10, [
        e,
        a,
        f
      ]), Qt();
      return;
    }
  }
  tp(e, n, o, r, i);
}
function tp(e, t, n, r = !0, o = !1) {
  if (process.env.NODE_ENV !== "production") {
    const s = Qo[t];
    if (n && qn(n), O(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && Yn(), r)
      throw e;
    console.error(e);
  } else {
    if (o)
      throw e;
    console.error(e);
  }
}
const ze = [];
let St = -1;
const Xn = [];
let an = null, zn = 0;
const dl = /* @__PURE__ */ Promise.resolve();
let No = null;
const np = 100;
function jn(e) {
  const t = No || dl;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function rp(e) {
  let t = St + 1, n = ze.length;
  for (; t < n; ) {
    const r = t + n >>> 1, o = ze[r], s = Ir(o);
    s < e || s === e && o.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Zo(e) {
  if (!(e.flags & 1)) {
    const t = Ir(e), n = ze[ze.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Ir(n) ? ze.push(e) : ze.splice(rp(t), 0, e), e.flags |= 1, pl();
  }
}
function pl() {
  No || (No = dl.then(hl));
}
function er(e) {
  B(e) ? Xn.push(...e) : an && e.id === -1 ? an.splice(zn + 1, 0, e) : e.flags & 1 || (Xn.push(e), e.flags |= 1), pl();
}
function uc(e, t, n = St + 1) {
  for (process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < ze.length; n++) {
    const r = ze[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid || process.env.NODE_ENV !== "production" && $i(t, r))
        continue;
      ze.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Oo(e) {
  if (Xn.length) {
    const t = [...new Set(Xn)].sort(
      (n, r) => Ir(n) - Ir(r)
    );
    if (Xn.length = 0, an) {
      an.push(...t);
      return;
    }
    for (an = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), zn = 0; zn < an.length; zn++) {
      const n = an[zn];
      process.env.NODE_ENV !== "production" && $i(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    an = null, zn = 0;
  }
}
const Ir = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function hl(e) {
  process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = process.env.NODE_ENV !== "production" ? (n) => $i(e, n) : xe;
  try {
    for (St = 0; St < ze.length; St++) {
      const n = ze[St];
      if (n && !(n.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), Ln(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; St < ze.length; St++) {
      const n = ze[St];
      n && (n.flags &= -2);
    }
    St = -1, ze.length = 0, Oo(e), No = null, (ze.length || Xn.length) && hl(e);
  }
}
function $i(e, t) {
  const n = e.get(t) || 0;
  if (n > np) {
    const r = t.i, o = r && Br(r.type);
    return yn(
      `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let vt = !1;
const ho = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (cr().__VUE_HMR_RUNTIME__ = {
  createRecord: Es(gl),
  rerender: Es(ip),
  reload: Es(cp)
});
const $n = /* @__PURE__ */ new Map();
function op(e) {
  const t = e.type.__hmrId;
  let n = $n.get(t);
  n || (gl(t, e.type), n = $n.get(t)), n.instances.add(e);
}
function sp(e) {
  $n.get(e.type.__hmrId).instances.delete(e);
}
function gl(e, t) {
  return $n.has(e) ? !1 : ($n.set(e, {
    initialDef: xo(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function xo(e) {
  return wu(e) ? e.__vccOpts : e;
}
function ip(e, t) {
  const n = $n.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((r) => {
    t && (r.render = t, xo(r.type).render = t), r.renderCache = [], vt = !0, r.update(), vt = !1;
  }));
}
function cp(e, t) {
  const n = $n.get(e);
  if (!n) return;
  t = xo(t), fc(n.initialDef, t);
  const r = [...n.instances];
  for (let o = 0; o < r.length; o++) {
    const s = r[o], i = xo(s.type);
    let c = ho.get(i);
    c || (i !== n.initialDef && fc(i, t), ho.set(i, c = /* @__PURE__ */ new Set())), c.add(s), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (c.add(s), s.ceReload(t.styles), c.delete(s)) : s.parent ? Zo(() => {
      vt = !0, s.parent.update(), vt = !1, c.delete(s);
    }) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), s.root.ce && s !== s.root && s.root.ce._removeChildStyle(i);
  }
  er(() => {
    ho.clear();
  });
}
function fc(e, t) {
  fe(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Es(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (r) {
      console.error(r), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let gt, vr = [], Gs = !1;
function Yr(e, ...t) {
  gt ? gt.emit(e, ...t) : Gs || vr.push({ event: e, args: t });
}
function Ri(e, t) {
  var n, r;
  gt = e, gt ? (gt.enabled = !0, vr.forEach(({ event: o, args: s }) => gt.emit(o, ...s)), vr = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((r = (n = window.navigator) == null ? void 0 : n.userAgent) != null && r.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    Ri(s, t);
  }), setTimeout(() => {
    gt || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Gs = !0, vr = []);
  }, 3e3)) : (Gs = !0, vr = []);
}
function ap(e, t) {
  Yr("app:init", e, t, {
    Fragment: Ve,
    Text: kt,
    Comment: be,
    Static: gn
  });
}
function lp(e) {
  Yr("app:unmount", e);
}
const zs = /* @__PURE__ */ Pi(
  "component:added"
  /* COMPONENT_ADDED */
), _l = /* @__PURE__ */ Pi(
  "component:updated"
  /* COMPONENT_UPDATED */
), up = /* @__PURE__ */ Pi(
  "component:removed"
  /* COMPONENT_REMOVED */
), fp = (e) => {
  gt && typeof gt.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !gt.cleanupBuffer(e) && up(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Pi(e) {
  return (t) => {
    Yr(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const dp = /* @__PURE__ */ ml(
  "perf:start"
  /* PERFORMANCE_START */
), pp = /* @__PURE__ */ ml(
  "perf:end"
  /* PERFORMANCE_END */
);
function ml(e) {
  return (t, n, r) => {
    Yr(e, t.appContext.app, t.uid, t, n, r);
  };
}
function hp(e, t, n) {
  Yr(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let Oe = null, es = null;
function Lr(e) {
  const t = Oe;
  return Oe = e, es = e && e.type.__scopeId || null, t;
}
function gp(e) {
  es = e;
}
function _p() {
  es = null;
}
const mp = (e) => ft;
function ft(e, t = Oe, n) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && ni(-1);
    const s = Lr(t);
    let i;
    try {
      i = e(...o);
    } finally {
      Lr(s), r._d && ni(1);
    }
    return process.env.NODE_ENV !== "production" && _l(t), i;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function vl(e) {
  Ca(e) && O("Do not use built-in directive ids as custom directive id: " + e);
}
function Mi(e, t) {
  if (Oe === null)
    return process.env.NODE_ENV !== "production" && O("withDirectives can only be used inside render functions."), e;
  const n = Qr(Oe), r = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [s, i, c, a = re] = t[o];
    s && (Y(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && Gt(i), r.push({
      dir: s,
      instance: n,
      value: i,
      oldValue: void 0,
      arg: c,
      modifiers: a
    }));
  }
  return e;
}
function Ct(e, t, n, r) {
  const o = e.dirs, s = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const c = o[i];
    s && (c.oldValue = s[i].value);
    let a = c.dir[r];
    a && (Jt(), ut(a, n, 8, [
      e.el,
      c,
      e,
      t
    ]), Qt());
  }
}
const yl = Symbol("_vte"), bl = (e) => e.__isTeleport, Tn = (e) => e && (e.disabled || e.disabled === ""), dc = (e) => e && (e.defer || e.defer === ""), pc = (e) => typeof SVGElement < "u" && e instanceof SVGElement, hc = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Ws = (e, t) => {
  const n = e && e.to;
  if (de(n))
    if (t) {
      const r = t(n);
      return process.env.NODE_ENV !== "production" && !r && !Tn(e) && O(
        `Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
      ), r;
    } else
      return process.env.NODE_ENV !== "production" && O(
        "Current renderer does not support string target for Teleports. (missing querySelector renderer option)"
      ), null;
  else
    return process.env.NODE_ENV !== "production" && !n && !Tn(e) && O(`Invalid Teleport target: ${n}`), n;
}, El = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, r, o, s, i, c, a, f) {
    const {
      mc: u,
      pc: l,
      pbc: d,
      o: { insert: h, querySelector: m, createText: y, createComment: M }
    } = f, V = Tn(t.props);
    let { shapeFlag: E, children: g, dynamicChildren: b } = t;
    if (process.env.NODE_ENV !== "production" && vt && (a = !1, b = null), e == null) {
      const v = t.el = process.env.NODE_ENV !== "production" ? M("teleport start") : y(""), x = t.anchor = process.env.NODE_ENV !== "production" ? M("teleport end") : y("");
      h(v, n, r), h(x, n, r);
      const R = (C, A) => {
        E & 16 && (o && o.isCE && (o.ce._teleportTarget = C), u(
          g,
          C,
          A,
          o,
          s,
          i,
          c,
          a
        ));
      }, U = () => {
        const C = t.target = Ws(t.props, m), A = wl(C, t, y, h);
        C ? (i !== "svg" && pc(C) ? i = "svg" : i !== "mathml" && hc(C) && (i = "mathml"), V || (R(C, A), go(t, !1))) : process.env.NODE_ENV !== "production" && !V && O(
          "Invalid Teleport target on mount:",
          C,
          `(${typeof C})`
        );
      };
      V && (R(n, x), go(t, !0)), dc(t.props) ? Ae(() => {
        U(), t.el.__isMounted = !0;
      }, s) : U();
    } else {
      if (dc(t.props) && !e.el.__isMounted) {
        Ae(() => {
          El.process(
            e,
            t,
            n,
            r,
            o,
            s,
            i,
            c,
            a,
            f
          ), delete e.el.__isMounted;
        }, s);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const v = t.anchor = e.anchor, x = t.target = e.target, R = t.targetAnchor = e.targetAnchor, U = Tn(e.props), C = U ? n : x, A = U ? v : R;
      if (i === "svg" || pc(x) ? i = "svg" : (i === "mathml" || hc(x)) && (i = "mathml"), b ? (d(
        e.dynamicChildren,
        b,
        C,
        o,
        s,
        i,
        c
      ), Sr(e, t, !0)) : a || l(
        e,
        t,
        C,
        A,
        o,
        s,
        i,
        c,
        !1
      ), V)
        U ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : oo(
          t,
          n,
          v,
          f,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const K = t.target = Ws(
          t.props,
          m
        );
        K ? oo(
          t,
          K,
          null,
          f,
          0
        ) : process.env.NODE_ENV !== "production" && O(
          "Invalid Teleport target on update:",
          x,
          `(${typeof x})`
        );
      } else U && oo(
        t,
        x,
        R,
        f,
        1
      );
      go(t, V);
    }
  },
  remove(e, t, n, { um: r, o: { remove: o } }, s) {
    const {
      shapeFlag: i,
      children: c,
      anchor: a,
      targetStart: f,
      targetAnchor: u,
      target: l,
      props: d
    } = e;
    if (l && (o(f), o(u)), s && o(a), i & 16) {
      const h = s || !Tn(d);
      for (let m = 0; m < c.length; m++) {
        const y = c[m];
        r(
          y,
          t,
          n,
          h,
          !!y.dynamicChildren
        );
      }
    }
  },
  move: oo,
  hydrate: vp
};
function oo(e, t, n, { o: { insert: r }, m: o }, s = 2) {
  s === 0 && r(e.targetAnchor, t, n);
  const { el: i, anchor: c, shapeFlag: a, children: f, props: u } = e, l = s === 2;
  if (l && r(i, t, n), (!l || Tn(u)) && a & 16)
    for (let d = 0; d < f.length; d++)
      o(
        f[d],
        t,
        n,
        2
      );
  l && r(c, t, n);
}
function vp(e, t, n, r, o, s, {
  o: { nextSibling: i, parentNode: c, querySelector: a, insert: f, createText: u }
}, l) {
  const d = t.target = Ws(
    t.props,
    a
  );
  if (d) {
    const h = Tn(t.props), m = d._lpa || d.firstChild;
    if (t.shapeFlag & 16)
      if (h)
        t.anchor = l(
          i(e),
          t,
          c(e),
          n,
          r,
          o,
          s
        ), t.targetStart = m, t.targetAnchor = m && i(m);
      else {
        t.anchor = i(e);
        let y = m;
        for (; y; ) {
          if (y && y.nodeType === 8) {
            if (y.data === "teleport start anchor")
              t.targetStart = y;
            else if (y.data === "teleport anchor") {
              t.targetAnchor = y, d._lpa = t.targetAnchor && i(t.targetAnchor);
              break;
            }
          }
          y = i(y);
        }
        t.targetAnchor || wl(d, t, u, f), l(
          m && i(m),
          t,
          d,
          n,
          r,
          o,
          s
        );
      }
    go(t, h);
  }
  return t.anchor && i(t.anchor);
}
const yp = El;
function go(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let r, o;
    for (t ? (r = e.el, o = e.anchor) : (r = e.targetStart, o = e.targetAnchor); r && r !== o; )
      r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
    n.ut();
  }
}
function wl(e, t, n, r) {
  const o = t.targetStart = n(""), s = t.targetAnchor = n("");
  return o[yl] = s, e && (r(o, e), r(s, e)), s;
}
const ln = Symbol("_leaveCb"), so = Symbol("_enterCb");
function Ii() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return lr(() => {
    e.isMounted = !0;
  }), os(() => {
    e.isUnmounting = !0;
  }), e;
}
const st = [Function, Array], Li = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: st,
  onEnter: st,
  onAfterEnter: st,
  onEnterCancelled: st,
  // leave
  onBeforeLeave: st,
  onLeave: st,
  onAfterLeave: st,
  onLeaveCancelled: st,
  // appear
  onBeforeAppear: st,
  onAppear: st,
  onAfterAppear: st,
  onAppearCancelled: st
}, Nl = (e) => {
  const t = e.subTree;
  return t.component ? Nl(t.component) : t;
}, bp = {
  name: "BaseTransition",
  props: Li,
  setup(e, { slots: t }) {
    const n = Ye(), r = Ii();
    return () => {
      const o = t.default && ts(t.default(), !0);
      if (!o || !o.length)
        return;
      const s = Ol(o), i = ee(e), { mode: c } = i;
      if (process.env.NODE_ENV !== "production" && c && c !== "in-out" && c !== "out-in" && c !== "default" && O(`invalid <transition> mode: ${c}`), r.isLeaving)
        return ws(s);
      const a = gc(s);
      if (!a)
        return ws(s);
      let f = tr(
        a,
        i,
        r,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (l) => f = l
      );
      a.type !== be && Xt(a, f);
      let u = n.subTree && gc(n.subTree);
      if (u && u.type !== be && !_t(a, u) && Nl(n).type !== be) {
        let l = tr(
          u,
          i,
          r,
          n
        );
        if (Xt(u, l), c === "out-in" && a.type !== be)
          return r.isLeaving = !0, l.afterLeave = () => {
            r.isLeaving = !1, n.job.flags & 8 || n.update(), delete l.afterLeave, u = void 0;
          }, ws(s);
        c === "in-out" && a.type !== be ? l.delayLeave = (d, h, m) => {
          const y = Sl(
            r,
            u
          );
          y[String(u.key)] = u, d[ln] = () => {
            h(), d[ln] = void 0, delete f.delayedLeave, u = void 0;
          }, f.delayedLeave = () => {
            m(), delete f.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return s;
    };
  }
};
function Ol(e) {
  let t = e[0];
  if (e.length > 1) {
    let n = !1;
    for (const r of e)
      if (r.type !== be) {
        if (process.env.NODE_ENV !== "production" && n) {
          O(
            "<transition> can only be used on a single element or component. Use <transition-group> for lists."
          );
          break;
        }
        if (t = r, n = !0, process.env.NODE_ENV === "production") break;
      }
  }
  return t;
}
const xl = bp;
function Sl(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function tr(e, t, n, r, o) {
  const {
    appear: s,
    mode: i,
    persisted: c = !1,
    onBeforeEnter: a,
    onEnter: f,
    onAfterEnter: u,
    onEnterCancelled: l,
    onBeforeLeave: d,
    onLeave: h,
    onAfterLeave: m,
    onLeaveCancelled: y,
    onBeforeAppear: M,
    onAppear: V,
    onAfterAppear: E,
    onAppearCancelled: g
  } = t, b = String(e.key), v = Sl(n, e), x = (C, A) => {
    C && ut(
      C,
      r,
      9,
      A
    );
  }, R = (C, A) => {
    const K = A[1];
    x(C, A), B(C) ? C.every((k) => k.length <= 1) && K() : C.length <= 1 && K();
  }, U = {
    mode: i,
    persisted: c,
    beforeEnter(C) {
      let A = a;
      if (!n.isMounted)
        if (s)
          A = M || a;
        else
          return;
      C[ln] && C[ln](
        !0
        /* cancelled */
      );
      const K = v[b];
      K && _t(e, K) && K.el[ln] && K.el[ln](), x(A, [C]);
    },
    enter(C) {
      let A = f, K = u, k = l;
      if (!n.isMounted)
        if (s)
          A = V || f, K = E || u, k = g || l;
        else
          return;
      let z = !1;
      const oe = C[so] = (ne) => {
        z || (z = !0, ne ? x(k, [C]) : x(K, [C]), U.delayedLeave && U.delayedLeave(), C[so] = void 0);
      };
      A ? R(A, [C, oe]) : oe();
    },
    leave(C, A) {
      const K = String(e.key);
      if (C[so] && C[so](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return A();
      x(d, [C]);
      let k = !1;
      const z = C[ln] = (oe) => {
        k || (k = !0, A(), oe ? x(y, [C]) : x(m, [C]), C[ln] = void 0, v[K] === e && delete v[K]);
      };
      v[K] = e, h ? R(h, [C, z]) : z();
    },
    clone(C) {
      const A = tr(
        C,
        t,
        n,
        r,
        o
      );
      return o && o(A), A;
    }
  };
  return U;
}
function ws(e) {
  if (ar(e))
    return e = dt(e), e.children = null, e;
}
function gc(e) {
  if (!ar(e))
    return bl(e.type) && e.children ? Ol(e.children) : e;
  if (process.env.NODE_ENV !== "production" && e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && Y(n.default))
      return n.default();
  }
}
function Xt(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Xt(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function ts(e, t = !1, n) {
  let r = [], o = 0;
  for (let s = 0; s < e.length; s++) {
    let i = e[s];
    const c = n == null ? i.key : String(n) + String(i.key != null ? i.key : s);
    i.type === Ve ? (i.patchFlag & 128 && o++, r = r.concat(
      ts(i.children, t, c)
    )) : (t || i.type !== be) && r.push(c != null ? dt(i, { key: c }) : i);
  }
  if (o > 1)
    for (let s = 0; s < r.length; s++)
      r[s].patchFlag = -2;
  return r;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Re(e, t) {
  return Y(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    fe({ name: e.name }, t, { setup: e })
  ) : e;
}
function Ep() {
  const e = Ye();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : (process.env.NODE_ENV !== "production" && O(
    "useId() is called when there is no active component instance to be associated with."
  ), "");
}
function ji(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Cl = /* @__PURE__ */ new WeakSet();
function wp(e) {
  const t = Ye(), n = Vi(null);
  if (t) {
    const o = t.refs === re ? t.refs = {} : t.refs;
    let s;
    process.env.NODE_ENV !== "production" && (s = Object.getOwnPropertyDescriptor(o, e)) && !s.configurable ? O(`useTemplateRef('${e}') already exists.`) : Object.defineProperty(o, e, {
      enumerable: !0,
      get: () => n.value,
      set: (i) => n.value = i
    });
  } else process.env.NODE_ENV !== "production" && O(
    "useTemplateRef() is called when there is no active component instance to be associated with."
  );
  const r = process.env.NODE_ENV !== "production" ? Xo(n) : n;
  return process.env.NODE_ENV !== "production" && Cl.add(r), r;
}
function jr(e, t, n, r, o = !1) {
  if (B(e)) {
    e.forEach(
      (m, y) => jr(
        m,
        t && (B(t) ? t[y] : t),
        n,
        r,
        o
      )
    );
    return;
  }
  if (hn(r) && !o) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && jr(e, t, n, r.component.subTree);
    return;
  }
  const s = r.shapeFlag & 4 ? Qr(r.component) : r.el, i = o ? null : s, { i: c, r: a } = e;
  if (process.env.NODE_ENV !== "production" && !c) {
    O(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const f = t && t.r, u = c.refs === re ? c.refs = {} : c.refs, l = c.setupState, d = ee(l), h = l === re ? () => !1 : (m) => process.env.NODE_ENV !== "production" && (le(d, m) && !Ne(d[m]) && O(
    `Template ref "${m}" used on a non-ref value. It will not work in the production build.`
  ), Cl.has(d[m])) ? !1 : le(d, m);
  if (f != null && f !== a && (de(f) ? (u[f] = null, h(f) && (l[f] = null)) : Ne(f) && (f.value = null)), Y(a))
    Ln(a, c, 12, [i, u]);
  else {
    const m = de(a), y = Ne(a);
    if (m || y) {
      const M = () => {
        if (e.f) {
          const V = m ? h(a) ? l[a] : u[a] : a.value;
          o ? B(V) && Uo(V, s) : B(V) ? V.includes(s) || V.push(s) : m ? (u[a] = [s], h(a) && (l[a] = u[a])) : (a.value = [s], e.k && (u[e.k] = a.value));
        } else m ? (u[a] = i, h(a) && (l[a] = i)) : y ? (a.value = i, e.k && (u[e.k] = i)) : process.env.NODE_ENV !== "production" && O("Invalid template ref type:", a, `(${typeof a})`);
      };
      i ? (M.id = -1, Ae(M, n)) : M();
    } else process.env.NODE_ENV !== "production" && O("Invalid template ref type:", a, `(${typeof a})`);
  }
}
let _c = !1;
const En = () => {
  _c || (console.error("Hydration completed but contains mismatches."), _c = !0);
}, Np = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject", Op = (e) => e.namespaceURI.includes("MathML"), io = (e) => {
  if (e.nodeType === 1) {
    if (Np(e)) return "svg";
    if (Op(e)) return "mathml";
  }
}, On = (e) => e.nodeType === 8;
function xp(e) {
  const {
    mt: t,
    p: n,
    o: {
      patchProp: r,
      createText: o,
      nextSibling: s,
      parentNode: i,
      remove: c,
      insert: a,
      createComment: f
    }
  } = e, u = (g, b) => {
    if (!b.hasChildNodes()) {
      process.env.NODE_ENV !== "production" && O(
        "Attempting to hydrate existing markup but container is empty. Performing full mount instead."
      ), n(null, g, b), Oo(), b._vnode = g;
      return;
    }
    l(b.firstChild, g, null, null, null), Oo(), b._vnode = g;
  }, l = (g, b, v, x, R, U = !1) => {
    U = U || !!b.dynamicChildren;
    const C = On(g) && g.data === "[", A = () => y(
      g,
      b,
      v,
      x,
      R,
      C
    ), { type: K, ref: k, shapeFlag: z, patchFlag: oe } = b;
    let ne = g.nodeType;
    b.el = g, process.env.NODE_ENV !== "production" && (kn(g, "__vnode", b, !0), kn(g, "__vueParentComponent", v, !0)), oe === -2 && (U = !1, b.dynamicChildren = null);
    let W = null;
    switch (K) {
      case kt:
        ne !== 3 ? b.children === "" ? (a(b.el = o(""), i(g), g), W = g) : W = A() : (g.data !== b.children && (process.env.NODE_ENV !== "production" && O(
          "Hydration text mismatch in",
          g.parentNode,
          `
  - rendered on server: ${JSON.stringify(
            g.data
          )}
  - expected on client: ${JSON.stringify(b.children)}`
        ), En(), g.data = b.children), W = s(g));
        break;
      case be:
        E(g) ? (W = s(g), V(
          b.el = g.content.firstChild,
          g,
          v
        )) : ne !== 8 || C ? W = A() : W = s(g);
        break;
      case gn:
        if (C && (g = s(g), ne = g.nodeType), ne === 1 || ne === 3) {
          W = g;
          const J = !b.children.length;
          for (let G = 0; G < b.staticCount; G++)
            J && (b.children += W.nodeType === 1 ? W.outerHTML : W.data), G === b.staticCount - 1 && (b.anchor = W), W = s(W);
          return C ? s(W) : W;
        } else
          A();
        break;
      case Ve:
        C ? W = m(
          g,
          b,
          v,
          x,
          R,
          U
        ) : W = A();
        break;
      default:
        if (z & 1)
          (ne !== 1 || b.type.toLowerCase() !== g.tagName.toLowerCase()) && !E(g) ? W = A() : W = d(
            g,
            b,
            v,
            x,
            R,
            U
          );
        else if (z & 6) {
          b.slotScopeIds = R;
          const J = i(g);
          if (C ? W = M(g) : On(g) && g.data === "teleport start" ? W = M(g, g.data, "teleport end") : W = s(g), t(
            b,
            J,
            null,
            v,
            x,
            io(J),
            U
          ), hn(b) && !b.type.__asyncResolved) {
            let G;
            C ? (G = _e(Ve), G.anchor = W ? W.previousSibling : J.lastChild) : G = g.nodeType === 3 ? Ur("") : _e("div"), G.el = g, b.component.subTree = G;
          }
        } else z & 64 ? ne !== 8 ? W = A() : W = b.type.hydrate(
          g,
          b,
          v,
          x,
          R,
          U,
          e,
          h
        ) : z & 128 ? W = b.type.hydrate(
          g,
          b,
          v,
          x,
          io(i(g)),
          R,
          U,
          e,
          l
        ) : process.env.NODE_ENV !== "production" && O("Invalid HostVNode type:", K, `(${typeof K})`);
    }
    return k != null && jr(k, null, x, b), W;
  }, d = (g, b, v, x, R, U) => {
    U = U || !!b.dynamicChildren;
    const { type: C, props: A, patchFlag: K, shapeFlag: k, dirs: z, transition: oe } = b, ne = C === "input" || C === "option";
    if (process.env.NODE_ENV !== "production" || ne || K !== -1) {
      z && Ct(b, null, v, "created");
      let W = !1;
      if (E(g)) {
        W = Zl(
          null,
          // no need check parentSuspense in hydration
          oe
        ) && v && v.vnode.props && v.vnode.props.appear;
        const G = g.content.firstChild;
        W && oe.beforeEnter(G), V(G, g, v), b.el = g = G;
      }
      if (k & 16 && // skip if element has innerHTML / textContent
      !(A && (A.innerHTML || A.textContent))) {
        let G = h(
          g.firstChild,
          b,
          g,
          v,
          x,
          R,
          U
        ), ye = !1;
        for (; G; ) {
          yr(
            g,
            1
            /* CHILDREN */
          ) || (process.env.NODE_ENV !== "production" && !ye && (O(
            "Hydration children mismatch on",
            g,
            `
Server rendered element contains more child nodes than client vdom.`
          ), ye = !0), En());
          const pt = G;
          G = G.nextSibling, c(pt);
        }
      } else if (k & 8) {
        let G = b.children;
        G[0] === `
` && (g.tagName === "PRE" || g.tagName === "TEXTAREA") && (G = G.slice(1)), g.textContent !== G && (yr(
          g,
          0
          /* TEXT */
        ) || (process.env.NODE_ENV !== "production" && O(
          "Hydration text content mismatch on",
          g,
          `
  - rendered on server: ${g.textContent}
  - expected on client: ${b.children}`
        ), En()), g.textContent = b.children);
      }
      if (A) {
        if (process.env.NODE_ENV !== "production" || ne || !U || K & 48) {
          const G = g.tagName.includes("-");
          for (const ye in A)
            process.env.NODE_ENV !== "production" && // #11189 skip if this node has directives that have created hooks
            // as it could have mutated the DOM in any possible way
            !(z && z.some((pt) => pt.dir.created)) && Sp(g, ye, A[ye], b, v) && En(), (ne && (ye.endsWith("value") || ye === "indeterminate") || Mn(ye) && !Sn(ye) || // force hydrate v-bind with .prop modifiers
            ye[0] === "." || G) && r(g, ye, null, A[ye], void 0, v);
        } else if (A.onClick)
          r(
            g,
            "onClick",
            null,
            A.onClick,
            void 0,
            v
          );
        else if (K & 4 && At(A.style))
          for (const G in A.style) A.style[G];
      }
      let J;
      (J = A && A.onVnodeBeforeMount) && Xe(J, v, b), z && Ct(b, null, v, "beforeMount"), ((J = A && A.onVnodeMounted) || z || W) && uu(() => {
        J && Xe(J, v, b), W && oe.enter(g), z && Ct(b, null, v, "mounted");
      }, x);
    }
    return g.nextSibling;
  }, h = (g, b, v, x, R, U, C) => {
    C = C || !!b.dynamicChildren;
    const A = b.children, K = A.length;
    let k = !1;
    for (let z = 0; z < K; z++) {
      const oe = C ? A[z] : A[z] = We(A[z]), ne = oe.type === kt;
      g ? (ne && !C && z + 1 < K && We(A[z + 1]).type === kt && (a(
        o(
          g.data.slice(oe.children.length)
        ),
        v,
        s(g)
      ), g.data = oe.children), g = l(
        g,
        oe,
        x,
        R,
        U,
        C
      )) : ne && !oe.children ? a(oe.el = o(""), v) : (yr(
        v,
        1
        /* CHILDREN */
      ) || (process.env.NODE_ENV !== "production" && !k && (O(
        "Hydration children mismatch on",
        v,
        `
Server rendered element contains fewer child nodes than client vdom.`
      ), k = !0), En()), n(
        null,
        oe,
        v,
        null,
        x,
        R,
        io(v),
        U
      ));
    }
    return g;
  }, m = (g, b, v, x, R, U) => {
    const { slotScopeIds: C } = b;
    C && (R = R ? R.concat(C) : C);
    const A = i(g), K = h(
      s(g),
      b,
      A,
      v,
      x,
      R,
      U
    );
    return K && On(K) && K.data === "]" ? s(b.anchor = K) : (En(), a(b.anchor = f("]"), A, K), K);
  }, y = (g, b, v, x, R, U) => {
    if (yr(
      g.parentElement,
      1
      /* CHILDREN */
    ) || (process.env.NODE_ENV !== "production" && O(
      `Hydration node mismatch:
- rendered on server:`,
      g,
      g.nodeType === 3 ? "(text)" : On(g) && g.data === "[" ? "(start of fragment)" : "",
      `
- expected on client:`,
      b.type
    ), En()), b.el = null, U) {
      const K = M(g);
      for (; ; ) {
        const k = s(g);
        if (k && k !== K)
          c(k);
        else
          break;
      }
    }
    const C = s(g), A = i(g);
    return c(g), n(
      null,
      b,
      A,
      C,
      v,
      x,
      io(A),
      R
    ), v && (v.vnode.el = b.el, cs(v, b.el)), C;
  }, M = (g, b = "[", v = "]") => {
    let x = 0;
    for (; g; )
      if (g = s(g), g && On(g) && (g.data === b && x++, g.data === v)) {
        if (x === 0)
          return s(g);
        x--;
      }
    return g;
  }, V = (g, b, v) => {
    const x = b.parentNode;
    x && x.replaceChild(g, b);
    let R = v;
    for (; R; )
      R.vnode.el === b && (R.vnode.el = R.subTree.el = g), R = R.parent;
  }, E = (g) => g.nodeType === 1 && g.tagName === "TEMPLATE";
  return [u, l];
}
function Sp(e, t, n, r, o) {
  let s, i, c, a;
  if (t === "class")
    c = e.getAttribute("class"), a = qe(n), Cp(mc(c || ""), mc(a)) || (s = 2, i = "class");
  else if (t === "style") {
    c = e.getAttribute("style") || "", a = de(n) ? n : Ta(Mt(n));
    const f = vc(c), u = vc(a);
    if (r.dirs)
      for (const { dir: l, value: d } of r.dirs)
        l.name === "show" && !d && u.set("display", "none");
    o && Dl(o, r, u), Dp(f, u) || (s = 3, i = "style");
  } else (e instanceof SVGElement && Ia(t) || e instanceof HTMLElement && (Fs(t) || Ma(t))) && (Fs(t) ? (c = e.hasAttribute(t), a = zo(n)) : n == null ? (c = e.hasAttribute(t), a = !1) : (e.hasAttribute(t) ? c = e.getAttribute(t) : t === "value" && e.tagName === "TEXTAREA" ? c = e.value : c = !1, a = La(n) ? String(n) : !1), c !== a && (s = 4, i = t));
  if (s != null && !yr(e, s)) {
    const f = (d) => d === !1 ? "(not rendered)" : `${i}="${d}"`, u = `Hydration ${Tl[s]} mismatch on`, l = `
  - rendered on server: ${f(c)}
  - expected on client: ${f(a)}
  Note: this mismatch is check-only. The DOM will not be rectified in production due to performance overhead.
  You should fix the source of the mismatch.`;
    return O(u, e, l), !0;
  }
  return !1;
}
function mc(e) {
  return new Set(e.trim().split(/\s+/));
}
function Cp(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
function vc(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.split(";")) {
    let [r, o] = n.split(":");
    r = r.trim(), o = o && o.trim(), r && o && t.set(r, o);
  }
  return t;
}
function Dp(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const [n, r] of e)
    if (r !== t.get(n))
      return !1;
  return !0;
}
function Dl(e, t, n) {
  const r = e.subTree;
  if (e.getCssVars && (t === r || r && r.type === Ve && r.children.includes(t))) {
    const o = e.getCssVars();
    for (const s in o)
      n.set(
        `--${Fa(s, !1)}`,
        String(o[s])
      );
  }
  t === r && e.parent && Dl(e.parent, e.vnode, n);
}
const yc = "data-allow-mismatch", Tl = {
  0: "text",
  1: "children",
  2: "class",
  3: "style",
  4: "attribute"
};
function yr(e, t) {
  if (t === 0 || t === 1)
    for (; e && !e.hasAttribute(yc); )
      e = e.parentElement;
  const n = e && e.getAttribute(yc);
  if (n == null)
    return !1;
  if (n === "")
    return !0;
  {
    const r = n.split(",");
    return t === 0 && r.includes("children") ? !0 : n.split(",").includes(Tl[t]);
  }
}
const Tp = cr().requestIdleCallback || ((e) => setTimeout(e, 1)), Vp = cr().cancelIdleCallback || ((e) => clearTimeout(e)), Ap = (e = 1e4) => (t) => {
  const n = Tp(t, { timeout: e });
  return () => Vp(n);
};
function kp(e) {
  const { top: t, left: n, bottom: r, right: o } = e.getBoundingClientRect(), { innerHeight: s, innerWidth: i } = window;
  return (t > 0 && t < s || r > 0 && r < s) && (n > 0 && n < i || o > 0 && o < i);
}
const $p = (e) => (t, n) => {
  const r = new IntersectionObserver((o) => {
    for (const s of o)
      if (s.isIntersecting) {
        r.disconnect(), t();
        break;
      }
  }, e);
  return n((o) => {
    if (o instanceof Element) {
      if (kp(o))
        return t(), r.disconnect(), !1;
      r.observe(o);
    }
  }), () => r.disconnect();
}, Rp = (e) => (t) => {
  if (e) {
    const n = matchMedia(e);
    if (n.matches)
      t();
    else
      return n.addEventListener("change", t, { once: !0 }), () => n.removeEventListener("change", t);
  }
}, Pp = (e = []) => (t, n) => {
  de(e) && (e = [e]);
  let r = !1;
  const o = (i) => {
    r || (r = !0, s(), t(), i.target.dispatchEvent(new i.constructor(i.type, i)));
  }, s = () => {
    n((i) => {
      for (const c of e)
        i.removeEventListener(c, o);
    });
  };
  return n((i) => {
    for (const c of e)
      i.addEventListener(c, o, { once: !0 });
  }), s;
};
function Mp(e, t) {
  if (On(e) && e.data === "[") {
    let n = 1, r = e.nextSibling;
    for (; r; ) {
      if (r.nodeType === 1) {
        if (t(r) === !1)
          break;
      } else if (On(r))
        if (r.data === "]") {
          if (--n === 0) break;
        } else r.data === "[" && n++;
      r = r.nextSibling;
    }
  } else
    t(e);
}
const hn = (e) => !!e.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ip(e) {
  Y(e) && (e = { loader: e });
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: r,
    delay: o = 200,
    hydrate: s,
    timeout: i,
    // undefined = never times out
    suspensible: c = !0,
    onError: a
  } = e;
  let f = null, u, l = 0;
  const d = () => (l++, f = null, h()), h = () => {
    let m;
    return f || (m = f = t().catch((y) => {
      if (y = y instanceof Error ? y : new Error(String(y)), a)
        return new Promise((M, V) => {
          a(y, () => M(d()), () => V(y), l + 1);
        });
      throw y;
    }).then((y) => {
      if (m !== f && f)
        return f;
      if (process.env.NODE_ENV !== "production" && !y && O(
        "Async component loader resolved to undefined. If you are using retry(), make sure to return its return value."
      ), y && (y.__esModule || y[Symbol.toStringTag] === "Module") && (y = y.default), process.env.NODE_ENV !== "production" && y && !ce(y) && !Y(y))
        throw new Error(`Invalid async component load result: ${y}`);
      return u = y, y;
    }));
  };
  return /* @__PURE__ */ Re({
    name: "AsyncComponentWrapper",
    __asyncLoader: h,
    __asyncHydrate(m, y, M) {
      const V = s ? () => {
        const E = s(
          M,
          (g) => Mp(m, g)
        );
        E && (y.bum || (y.bum = [])).push(E);
      } : M;
      u ? V() : h().then(() => !y.isUnmounted && V());
    },
    get __asyncResolved() {
      return u;
    },
    setup() {
      const m = Se;
      if (ji(m), u)
        return () => Ns(u, m);
      const y = (g) => {
        f = null, yn(
          g,
          m,
          13,
          !r
        );
      };
      if (c && m.suspense || nr)
        return h().then((g) => () => Ns(g, m)).catch((g) => (y(g), () => r ? _e(r, {
          error: g
        }) : null));
      const M = Ce(!1), V = Ce(), E = Ce(!!o);
      return o && setTimeout(() => {
        E.value = !1;
      }, o), i != null && setTimeout(() => {
        if (!M.value && !V.value) {
          const g = new Error(
            `Async component timed out after ${i}ms.`
          );
          y(g), V.value = g;
        }
      }, i), h().then(() => {
        M.value = !0, m.parent && ar(m.parent.vnode) && m.parent.update();
      }).catch((g) => {
        y(g), V.value = g;
      }), () => {
        if (M.value && u)
          return Ns(u, m);
        if (V.value && r)
          return _e(r, {
            error: V.value
          });
        if (n && !E.value)
          return _e(n);
      };
    }
  });
}
function Ns(e, t) {
  const { ref: n, props: r, children: o, ce: s } = t.vnode, i = _e(e, r, o);
  return i.ref = n, i.ce = s, delete t.vnode.ce, i;
}
const ar = (e) => e.type.__isKeepAlive, Lp = {
  name: "KeepAlive",
  // Marker for special handling inside the renderer. We are not using a ===
  // check directly on KeepAlive in the renderer, because importing it directly
  // would prevent it from being tree-shaken.
  __isKeepAlive: !0,
  props: {
    include: [String, RegExp, Array],
    exclude: [String, RegExp, Array],
    max: [String, Number]
  },
  setup(e, { slots: t }) {
    const n = Ye(), r = n.ctx;
    if (!r.renderer)
      return () => {
        const E = t.default && t.default();
        return E && E.length === 1 ? E[0] : E;
      };
    const o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Set();
    let i = null;
    process.env.NODE_ENV !== "production" && (n.__v_cache = o);
    const c = n.suspense, {
      renderer: {
        p: a,
        m: f,
        um: u,
        o: { createElement: l }
      }
    } = r, d = l("div");
    r.activate = (E, g, b, v, x) => {
      const R = E.component;
      f(E, g, b, 0, c), a(
        R.vnode,
        E,
        g,
        b,
        R,
        c,
        v,
        E.slotScopeIds,
        x
      ), Ae(() => {
        R.isDeactivated = !1, R.a && Kt(R.a);
        const U = E.props && E.props.onVnodeMounted;
        U && Xe(U, R.parent, E);
      }, c), process.env.NODE_ENV !== "production" && zs(R);
    }, r.deactivate = (E) => {
      const g = E.component;
      To(g.m), To(g.a), f(E, d, null, 1, c), Ae(() => {
        g.da && Kt(g.da);
        const b = E.props && E.props.onVnodeUnmounted;
        b && Xe(b, g.parent, E), g.isDeactivated = !0;
      }, c), process.env.NODE_ENV !== "production" && zs(g);
    };
    function h(E) {
      Os(E), u(E, n, c, !0);
    }
    function m(E) {
      o.forEach((g, b) => {
        const v = Br(g.type);
        v && !E(v) && y(b);
      });
    }
    function y(E) {
      const g = o.get(E);
      g && (!i || !_t(g, i)) ? h(g) : i && Os(i), o.delete(E), s.delete(E);
    }
    $e(
      () => [e.include, e.exclude],
      ([E, g]) => {
        E && m((b) => br(E, b)), g && m((b) => !br(g, b));
      },
      // prune post-render after `current` has been updated
      { flush: "post", deep: !0 }
    );
    let M = null;
    const V = () => {
      M != null && (Ao(n.subTree.type) ? Ae(() => {
        o.set(M, co(n.subTree));
      }, n.subTree.suspense) : o.set(M, co(n.subTree)));
    };
    return lr(V), rs(V), os(() => {
      o.forEach((E) => {
        const { subTree: g, suspense: b } = n, v = co(g);
        if (E.type === v.type && E.key === v.key) {
          Os(v);
          const x = v.component.da;
          x && Ae(x, b);
          return;
        }
        h(E);
      });
    }), () => {
      if (M = null, !t.default)
        return i = null;
      const E = t.default(), g = E[0];
      if (E.length > 1)
        return process.env.NODE_ENV !== "production" && O("KeepAlive should contain exactly one component child."), i = null, E;
      if (!Rt(g) || !(g.shapeFlag & 4) && !(g.shapeFlag & 128))
        return i = null, g;
      let b = co(g);
      if (b.type === be)
        return i = null, b;
      const v = b.type, x = Br(
        hn(b) ? b.type.__asyncResolved || {} : v
      ), { include: R, exclude: U, max: C } = e;
      if (R && (!x || !br(R, x)) || U && x && br(U, x))
        return b.shapeFlag &= -257, i = b, g;
      const A = b.key == null ? v : b.key, K = o.get(A);
      return b.el && (b = dt(b), g.shapeFlag & 128 && (g.ssContent = b)), M = A, K ? (b.el = K.el, b.component = K.component, b.transition && Xt(b, b.transition), b.shapeFlag |= 512, s.delete(A), s.add(A)) : (s.add(A), C && s.size > parseInt(C, 10) && y(s.values().next().value)), b.shapeFlag |= 256, i = b, Ao(g.type) ? g : b;
    };
  }
}, jp = Lp;
function br(e, t) {
  return B(e) ? e.some((n) => br(n, t)) : de(e) ? e.split(",").includes(t) : Sa(e) ? (e.lastIndex = 0, e.test(t)) : !1;
}
function Vl(e, t) {
  kl(e, "a", t);
}
function Al(e, t) {
  kl(e, "da", t);
}
function kl(e, t, n = Se) {
  const r = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (ns(t, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      ar(o.parent.vnode) && Fp(r, t, n, o), o = o.parent;
  }
}
function Fp(e, t, n, r) {
  const o = ns(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Xr(() => {
    Uo(r[t], o);
  }, n);
}
function Os(e) {
  e.shapeFlag &= -257, e.shapeFlag &= -513;
}
function co(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function ns(e, t, n = Se, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
      Jt();
      const c = Pn(n), a = ut(t, n, e, i);
      return c(), Qt(), a;
    });
    return r ? o.unshift(s) : o.push(s), s;
  } else if (process.env.NODE_ENV !== "production") {
    const o = Dt(Qo[e].replace(/ hook$/, ""));
    O(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Zt = (e) => (t, n = Se) => {
  (!nr || e === "sp") && ns(e, (...r) => t(...r), n);
}, $l = Zt("bm"), lr = Zt("m"), Fi = Zt(
  "bu"
), rs = Zt("u"), os = Zt(
  "bum"
), Xr = Zt("um"), Rl = Zt(
  "sp"
), Pl = Zt("rtg"), Ml = Zt("rtc");
function Il(e, t = Se) {
  ns("ec", e, t);
}
const So = "components", Hp = "directives";
function Wt(e, t) {
  return Ui(So, e, !0, t) || e;
}
const Hi = Symbol.for("v-ndc");
function qs(e) {
  return de(e) ? Ui(So, e, !1) || e : e || Hi;
}
function Up(e) {
  return Ui(Hp, e);
}
function Ui(e, t, n = !0, r = !1) {
  const o = Oe || Se;
  if (o) {
    const s = o.type;
    if (e === So) {
      const c = Br(
        s,
        !1
      );
      if (c && (c === t || c === De(t) || c === qt(De(t))))
        return s;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      bc(o[e] || s[e], t) || // global registration
      bc(o.appContext[e], t)
    );
    if (!i && r)
      return s;
    if (process.env.NODE_ENV !== "production" && n && !i) {
      const c = e === So ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      O(`Failed to resolve ${e.slice(0, -1)}: ${t}${c}`);
    }
    return i;
  } else process.env.NODE_ENV !== "production" && O(
    `resolve${qt(e.slice(0, -1))} can only be used in render() or setup().`
  );
}
function bc(e, t) {
  return e && (e[t] || e[De(t)] || e[qt(De(t))]);
}
function Bp(e, t, n, r) {
  let o;
  const s = n && n[r], i = B(e);
  if (i || de(e)) {
    const c = i && At(e);
    let a = !1;
    c && (a = !He(e), e = qo(e)), o = new Array(e.length);
    for (let f = 0, u = e.length; f < u; f++)
      o[f] = t(
        a ? je(e[f]) : e[f],
        f,
        void 0,
        s && s[f]
      );
  } else if (typeof e == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(e) && O(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
    for (let c = 0; c < e; c++)
      o[c] = t(c + 1, c, void 0, s && s[c]);
  } else if (ce(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (c, a) => t(c, a, void 0, s && s[a])
      );
    else {
      const c = Object.keys(e);
      o = new Array(c.length);
      for (let a = 0, f = c.length; a < f; a++) {
        const u = c[a];
        o[a] = t(e[u], u, a, s && s[a]);
      }
    }
  else
    o = [];
  return n && (n[r] = o), o;
}
function Kp(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (B(r))
      for (let o = 0; o < r.length; o++)
        e[r[o].name] = r[o].fn;
    else r && (e[r.name] = r.key ? (...o) => {
      const s = r.fn(...o);
      return s && (s.key = r.key), s;
    } : r.fn);
  }
  return e;
}
function Qe(e, t, n = {}, r, o) {
  if (Oe.ce || Oe.parent && hn(Oe.parent) && Oe.parent.ce)
    return t !== "default" && (n.name = t), we(), bt(
      Ve,
      null,
      [_e("slot", n, r && r())],
      64
    );
  let s = e[t];
  process.env.NODE_ENV !== "production" && s && s.length > 1 && (O(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), s = () => []), s && s._c && (s._d = !1), we();
  const i = s && Bi(s(n)), c = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  i && i.key, a = bt(
    Ve,
    {
      key: (c && !at(c) ? c : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!i && r ? "_fb" : "")
    },
    i || (r ? r() : []),
    i && e._ === 1 ? 64 : -2
  );
  return !o && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]), s && s._c && (s._d = !0), a;
}
function Bi(e) {
  return e.some((t) => Rt(t) ? !(t.type === be || t.type === Ve && !Bi(t.children)) : !0) ? e : null;
}
function Gp(e, t) {
  const n = {};
  if (process.env.NODE_ENV !== "production" && !ce(e))
    return O("v-on with no argument expects an object value."), n;
  for (const r in e)
    n[t && /[A-Z]/.test(r) ? `on:${r}` : Dt(r)] = e[r];
  return n;
}
const Ys = (e) => e ? vu(e) ? Qr(e) : Ys(e.parent) : null, Vn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ fe(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? mt(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? mt(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? mt(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? mt(e.refs) : e.refs,
    $parent: (e) => Ys(e.parent),
    $root: (e) => Ys(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Gi(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Zo(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = jn.bind(e.proxy)),
    $watch: (e) => Rh.bind(e)
  })
), Ki = (e) => e === "_" || e === "$", xs = (e, t) => e !== re && !e.__isScriptSetup && le(e, t), Or = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: o, props: s, accessCache: i, type: c, appContext: a } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let f;
    if (t[0] !== "$") {
      const h = i[t];
      if (h !== void 0)
        switch (h) {
          case 1:
            return r[t];
          case 2:
            return o[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
      else {
        if (xs(r, t))
          return i[t] = 1, r[t];
        if (o !== re && le(o, t))
          return i[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (f = e.propsOptions[0]) && le(f, t)
        )
          return i[t] = 3, s[t];
        if (n !== re && le(n, t))
          return i[t] = 4, n[t];
        Xs && (i[t] = 0);
      }
    }
    const u = Vn[t];
    let l, d;
    if (u)
      return t === "$attrs" ? (ke(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && Vo()) : process.env.NODE_ENV !== "production" && t === "$slots" && ke(e, "get", t), u(e);
    if (
      // css module (injected by vue-loader)
      (l = c.__cssModules) && (l = l[t])
    )
      return l;
    if (n !== re && le(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      d = a.config.globalProperties, le(d, t)
    )
      return d[t];
    process.env.NODE_ENV !== "production" && Oe && (!de(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== re && Ki(t[0]) && le(o, t) ? O(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === Oe && O(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: o, ctx: s } = e;
    return xs(o, t) ? (o[t] = n, !0) : process.env.NODE_ENV !== "production" && o.__isScriptSetup && le(o, t) ? (O(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : r !== re && le(r, t) ? (r[t] = n, !0) : le(e.props, t) ? (process.env.NODE_ENV !== "production" && O(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && O(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, propsOptions: s }
  }, i) {
    let c;
    return !!n[i] || e !== re && le(e, i) || xs(t, i) || (c = s[0]) && le(c, i) || le(r, i) || le(Vn, i) || le(o.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : le(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (Or.ownKeys = (e) => (O(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
const zp = /* @__PURE__ */ fe({}, Or, {
  get(e, t) {
    if (t !== Symbol.unscopables)
      return Or.get(e, t, e);
  },
  has(e, t) {
    const n = t[0] !== "_" && !Oi(t);
    return process.env.NODE_ENV !== "production" && !n && Or.has(e, t) && O(
      `Property ${JSON.stringify(
        t
      )} should not start with _ which is a reserved prefix for Vue internals.`
    ), n;
  }
});
function Wp(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Vn).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Vn[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: xe
    });
  }), t;
}
function qp(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((r) => {
    Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[r],
      set: xe
    });
  });
}
function Yp(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(ee(n)).forEach((r) => {
    if (!n.__isScriptSetup) {
      if (Ki(r[0])) {
        O(
          `setup() return property ${JSON.stringify(
            r
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, r, {
        enumerable: !0,
        configurable: !0,
        get: () => n[r],
        set: xe
      });
    }
  });
}
const Fn = (e) => O(
  `${e}() is a compiler-hint helper that is only usable inside <script setup> of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`
);
function Xp() {
  return process.env.NODE_ENV !== "production" && Fn("defineProps"), null;
}
function Jp() {
  return process.env.NODE_ENV !== "production" && Fn("defineEmits"), null;
}
function Qp(e) {
  process.env.NODE_ENV !== "production" && Fn("defineExpose");
}
function Zp(e) {
  process.env.NODE_ENV !== "production" && Fn("defineOptions");
}
function eh() {
  return process.env.NODE_ENV !== "production" && Fn("defineSlots"), null;
}
function th() {
  process.env.NODE_ENV !== "production" && Fn("defineModel");
}
function nh(e, t) {
  return process.env.NODE_ENV !== "production" && Fn("withDefaults"), null;
}
function rh() {
  return Ll().slots;
}
function oh() {
  return Ll().attrs;
}
function Ll() {
  const e = Ye();
  return process.env.NODE_ENV !== "production" && !e && O("useContext() called without active instance."), e.setupContext || (e.setupContext = Eu(e));
}
function Fr(e) {
  return B(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function sh(e, t) {
  const n = Fr(e);
  for (const r in t) {
    if (r.startsWith("__skip")) continue;
    let o = n[r];
    o ? B(o) || Y(o) ? o = n[r] = { type: o, default: t[r] } : o.default = t[r] : o === null ? o = n[r] = { default: t[r] } : process.env.NODE_ENV !== "production" && O(`props default key "${r}" has no corresponding declaration.`), o && t[`__skip_${r}`] && (o.skipFactory = !0);
  }
  return n;
}
function ih(e, t) {
  return !e || !t ? e || t : B(e) && B(t) ? e.concat(t) : fe({}, Fr(e), Fr(t));
}
function ch(e, t) {
  const n = {};
  for (const r in e)
    t.includes(r) || Object.defineProperty(n, r, {
      enumerable: !0,
      get: () => e[r]
    });
  return n;
}
function ah(e) {
  const t = Ye();
  process.env.NODE_ENV !== "production" && !t && O(
    "withAsyncContext called without active current instance. This is likely a bug."
  );
  let n = e();
  return si(), zr(n) && (n = n.catch((r) => {
    throw Pn(t), r;
  })), [n, () => Pn(t)];
}
function lh() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? O(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Xs = !0;
function uh(e) {
  const t = Gi(e), n = e.proxy, r = e.ctx;
  Xs = !1, t.beforeCreate && Ec(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: s,
    methods: i,
    watch: c,
    provide: a,
    inject: f,
    // lifecycle
    created: u,
    beforeMount: l,
    mounted: d,
    beforeUpdate: h,
    updated: m,
    activated: y,
    deactivated: M,
    beforeDestroy: V,
    beforeUnmount: E,
    destroyed: g,
    unmounted: b,
    render: v,
    renderTracked: x,
    renderTriggered: R,
    errorCaptured: U,
    serverPrefetch: C,
    // public API
    expose: A,
    inheritAttrs: K,
    // assets
    components: k,
    directives: z,
    filters: oe
  } = t, ne = process.env.NODE_ENV !== "production" ? lh() : null;
  if (process.env.NODE_ENV !== "production") {
    const [J] = e.propsOptions;
    if (J)
      for (const G in J)
        ne("Props", G);
  }
  if (f && fh(f, r, ne), i)
    for (const J in i) {
      const G = i[J];
      Y(G) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(r, J, {
        value: G.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : r[J] = G.bind(n), process.env.NODE_ENV !== "production" && ne("Methods", J)) : process.env.NODE_ENV !== "production" && O(
        `Method "${J}" has type "${typeof G}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    process.env.NODE_ENV !== "production" && !Y(o) && O(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const J = o.call(n, n);
    if (process.env.NODE_ENV !== "production" && zr(J) && O(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !ce(J))
      process.env.NODE_ENV !== "production" && O("data() should return an object.");
    else if (e.data = It(J), process.env.NODE_ENV !== "production")
      for (const G in J)
        ne("Data", G), Ki(G[0]) || Object.defineProperty(r, G, {
          configurable: !0,
          enumerable: !0,
          get: () => J[G],
          set: xe
        });
  }
  if (Xs = !0, s)
    for (const J in s) {
      const G = s[J], ye = Y(G) ? G.bind(n, n) : Y(G.get) ? G.get.bind(n, n) : xe;
      process.env.NODE_ENV !== "production" && ye === xe && O(`Computed property "${J}" has no getter.`);
      const pt = !Y(G) && Y(G.set) ? G.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        O(
          `Write operation failed: computed property "${J}" is readonly.`
        );
      } : xe, en = Me({
        get: ye,
        set: pt
      });
      Object.defineProperty(r, J, {
        enumerable: !0,
        configurable: !0,
        get: () => en.value,
        set: (Nt) => en.value = Nt
      }), process.env.NODE_ENV !== "production" && ne("Computed", J);
    }
  if (c)
    for (const J in c)
      jl(c[J], r, n, J);
  if (a) {
    const J = Y(a) ? a.call(n) : a;
    Reflect.ownKeys(J).forEach((G) => {
      xr(G, J[G]);
    });
  }
  u && Ec(u, e, "c");
  function W(J, G) {
    B(G) ? G.forEach((ye) => J(ye.bind(n))) : G && J(G.bind(n));
  }
  if (W($l, l), W(lr, d), W(Fi, h), W(rs, m), W(Vl, y), W(Al, M), W(Il, U), W(Ml, x), W(Pl, R), W(os, E), W(Xr, b), W(Rl, C), B(A))
    if (A.length) {
      const J = e.exposed || (e.exposed = {});
      A.forEach((G) => {
        Object.defineProperty(J, G, {
          get: () => n[G],
          set: (ye) => n[G] = ye
        });
      });
    } else e.exposed || (e.exposed = {});
  v && e.render === xe && (e.render = v), K != null && (e.inheritAttrs = K), k && (e.components = k), z && (e.directives = z), C && ji(e);
}
function fh(e, t, n = xe) {
  B(e) && (e = Js(e));
  for (const r in e) {
    const o = e[r];
    let s;
    ce(o) ? "default" in o ? s = Je(
      o.from || r,
      o.default,
      !0
    ) : s = Je(o.from || r) : s = Je(o), Ne(s) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (i) => s.value = i
    }) : t[r] = s, process.env.NODE_ENV !== "production" && n("Inject", r);
  }
}
function Ec(e, t, n) {
  ut(
    B(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function jl(e, t, n, r) {
  let o = r.includes(".") ? su(n, r) : () => n[r];
  if (de(e)) {
    const s = t[e];
    Y(s) ? $e(o, s) : process.env.NODE_ENV !== "production" && O(`Invalid watch handler specified by key "${e}"`, s);
  } else if (Y(e))
    $e(o, e.bind(n));
  else if (ce(e))
    if (B(e))
      e.forEach((s) => jl(s, t, n, r));
    else {
      const s = Y(e.handler) ? e.handler.bind(n) : t[e.handler];
      Y(s) ? $e(o, s, e) : process.env.NODE_ENV !== "production" && O(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else process.env.NODE_ENV !== "production" && O(`Invalid watch option: "${r}"`, e);
}
function Gi(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: o,
    optionsCache: s,
    config: { optionMergeStrategies: i }
  } = e.appContext, c = s.get(t);
  let a;
  return c ? a = c : !o.length && !n && !r ? a = t : (a = {}, o.length && o.forEach(
    (f) => Co(a, f, i, !0)
  ), Co(a, t, i)), ce(t) && s.set(t, a), a;
}
function Co(e, t, n, r = !1) {
  const { mixins: o, extends: s } = t;
  s && Co(e, s, n, !0), o && o.forEach(
    (i) => Co(e, i, n, !0)
  );
  for (const i in t)
    if (r && i === "expose")
      process.env.NODE_ENV !== "production" && O(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const c = dh[i] || n && n[i];
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const dh = {
  data: wc,
  props: Nc,
  emits: Nc,
  // objects
  methods: Er,
  computed: Er,
  // lifecycle
  beforeCreate: Ke,
  created: Ke,
  beforeMount: Ke,
  mounted: Ke,
  beforeUpdate: Ke,
  updated: Ke,
  beforeDestroy: Ke,
  beforeUnmount: Ke,
  destroyed: Ke,
  unmounted: Ke,
  activated: Ke,
  deactivated: Ke,
  errorCaptured: Ke,
  serverPrefetch: Ke,
  // assets
  components: Er,
  directives: Er,
  // watch
  watch: hh,
  // provide / inject
  provide: wc,
  inject: ph
};
function wc(e, t) {
  return t ? e ? function() {
    return fe(
      Y(e) ? e.call(this, this) : e,
      Y(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function ph(e, t) {
  return Er(Js(e), Js(t));
}
function Js(e) {
  if (B(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Ke(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Er(e, t) {
  return e ? fe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Nc(e, t) {
  return e ? B(e) && B(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : fe(
    /* @__PURE__ */ Object.create(null),
    Fr(e),
    Fr(t ?? {})
  ) : t;
}
function hh(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = fe(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Ke(e[r], t[r]);
  return n;
}
function Fl() {
  return {
    app: null,
    config: {
      isNativeTag: xa,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let gh = 0;
function _h(e, t) {
  return function(r, o = null) {
    Y(r) || (r = fe({}, r)), o != null && !ce(o) && (process.env.NODE_ENV !== "production" && O("root props passed to app.mount() must be an object."), o = null);
    const s = Fl(), i = /* @__PURE__ */ new WeakSet(), c = [];
    let a = !1;
    const f = s.app = {
      _uid: gh++,
      _component: r,
      _props: o,
      _container: null,
      _context: s,
      _instance: null,
      version: li,
      get config() {
        return s.config;
      },
      set config(u) {
        process.env.NODE_ENV !== "production" && O(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(u, ...l) {
        return i.has(u) ? process.env.NODE_ENV !== "production" && O("Plugin has already been applied to target app.") : u && Y(u.install) ? (i.add(u), u.install(f, ...l)) : Y(u) ? (i.add(u), u(f, ...l)) : process.env.NODE_ENV !== "production" && O(
          'A plugin must either be a function or an object with an "install" function.'
        ), f;
      },
      mixin(u) {
        return s.mixins.includes(u) ? process.env.NODE_ENV !== "production" && O(
          "Mixin has already been applied to target app" + (u.name ? `: ${u.name}` : "")
        ) : s.mixins.push(u), f;
      },
      component(u, l) {
        return process.env.NODE_ENV !== "production" && ii(u, s.config), l ? (process.env.NODE_ENV !== "production" && s.components[u] && O(`Component "${u}" has already been registered in target app.`), s.components[u] = l, f) : s.components[u];
      },
      directive(u, l) {
        return process.env.NODE_ENV !== "production" && vl(u), l ? (process.env.NODE_ENV !== "production" && s.directives[u] && O(`Directive "${u}" has already been registered in target app.`), s.directives[u] = l, f) : s.directives[u];
      },
      mount(u, l, d) {
        if (a)
          process.env.NODE_ENV !== "production" && O(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          process.env.NODE_ENV !== "production" && u.__vue_app__ && O(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const h = f._ceVNode || _e(r, o);
          return h.appContext = s, d === !0 ? d = "svg" : d === !1 && (d = void 0), process.env.NODE_ENV !== "production" && (s.reload = () => {
            e(
              dt(h),
              u,
              d
            );
          }), l && t ? t(h, u) : e(h, u, d), a = !0, f._container = u, u.__vue_app__ = f, process.env.NODE_ENV !== "production" && (f._instance = h.component, ap(f, li)), Qr(h.component);
        }
      },
      onUnmount(u) {
        process.env.NODE_ENV !== "production" && typeof u != "function" && O(
          `Expected function as first argument to app.onUnmount(), but got ${typeof u}`
        ), c.push(u);
      },
      unmount() {
        a ? (ut(
          c,
          f._instance,
          16
        ), e(null, f._container), process.env.NODE_ENV !== "production" && (f._instance = null, lp(f)), delete f._container.__vue_app__) : process.env.NODE_ENV !== "production" && O("Cannot unmount an app that is not mounted.");
      },
      provide(u, l) {
        return process.env.NODE_ENV !== "production" && u in s.provides && O(
          `App already provides property with key "${String(u)}". It will be overwritten with the new value.`
        ), s.provides[u] = l, f;
      },
      runWithContext(u) {
        const l = An;
        An = f;
        try {
          return u();
        } finally {
          An = l;
        }
      }
    };
    return f;
  };
}
let An = null;
function xr(e, t) {
  if (!Se)
    process.env.NODE_ENV !== "production" && O("provide() can only be used inside setup().");
  else {
    let n = Se.provides;
    const r = Se.parent && Se.parent.provides;
    r === n && (n = Se.provides = Object.create(r)), n[e] = t;
  }
}
function Je(e, t, n = !1) {
  const r = Se || Oe;
  if (r || An) {
    const o = An ? An._context.provides : r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && Y(t) ? t.call(r && r.proxy) : t;
    process.env.NODE_ENV !== "production" && O(`injection "${String(e)}" not found.`);
  } else process.env.NODE_ENV !== "production" && O("inject() can only be used inside setup() or functional components.");
}
function mh() {
  return !!(Se || Oe || An);
}
const Hl = {}, Ul = () => Object.create(Hl), Bl = (e) => Object.getPrototypeOf(e) === Hl;
function vh(e, t, n, r = !1) {
  const o = {}, s = Ul();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Kl(e, t, o, s);
  for (const i in e.propsOptions[0])
    i in o || (o[i] = void 0);
  process.env.NODE_ENV !== "production" && zl(t || {}, o, e), n ? e.props = r ? o : Ti(o) : e.type.props ? e.props = o : e.props = s, e.attrs = s;
}
function yh(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function bh(e, t, n, r) {
  const {
    props: o,
    attrs: s,
    vnode: { patchFlag: i }
  } = e, c = ee(o), [a] = e.propsOptions;
  let f = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && yh(e)) && (r || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const u = e.vnode.dynamicProps;
      for (let l = 0; l < u.length; l++) {
        let d = u[l];
        if (ss(e.emitsOptions, d))
          continue;
        const h = t[d];
        if (a)
          if (le(s, d))
            h !== s[d] && (s[d] = h, f = !0);
          else {
            const m = De(d);
            o[m] = Qs(
              a,
              c,
              m,
              h,
              e,
              !1
            );
          }
        else
          h !== s[d] && (s[d] = h, f = !0);
      }
    }
  } else {
    Kl(e, t, o, s) && (f = !0);
    let u;
    for (const l in c)
      (!t || // for camelCase
      !le(t, l) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Pe(l)) === l || !le(t, u))) && (a ? n && // for camelCase
      (n[l] !== void 0 || // for kebab-case
      n[u] !== void 0) && (o[l] = Qs(
        a,
        c,
        l,
        void 0,
        e,
        !0
      )) : delete o[l]);
    if (s !== c)
      for (const l in s)
        (!t || !le(t, l)) && (delete s[l], f = !0);
  }
  f && Tt(e.attrs, "set", ""), process.env.NODE_ENV !== "production" && zl(t || {}, o, e);
}
function Kl(e, t, n, r) {
  const [o, s] = e.propsOptions;
  let i = !1, c;
  if (t)
    for (let a in t) {
      if (Sn(a))
        continue;
      const f = t[a];
      let u;
      o && le(o, u = De(a)) ? !s || !s.includes(u) ? n[u] = f : (c || (c = {}))[u] = f : ss(e.emitsOptions, a) || (!(a in r) || f !== r[a]) && (r[a] = f, i = !0);
    }
  if (s) {
    const a = ee(n), f = c || re;
    for (let u = 0; u < s.length; u++) {
      const l = s[u];
      n[l] = Qs(
        o,
        a,
        l,
        f[l],
        e,
        !le(f, l)
      );
    }
  }
  return i;
}
function Qs(e, t, n, r, o, s) {
  const i = e[n];
  if (i != null) {
    const c = le(i, "default");
    if (c && r === void 0) {
      const a = i.default;
      if (i.type !== Function && !i.skipFactory && Y(a)) {
        const { propsDefaults: f } = o;
        if (n in f)
          r = f[n];
        else {
          const u = Pn(o);
          r = f[n] = a.call(
            null,
            t
          ), u();
        }
      } else
        r = a;
      o.ce && o.ce._setProp(n, r);
    }
    i[
      0
      /* shouldCast */
    ] && (s && !c ? r = !1 : i[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === Pe(n)) && (r = !0));
  }
  return r;
}
const Eh = /* @__PURE__ */ new WeakMap();
function Gl(e, t, n = !1) {
  const r = n ? Eh : t.propsCache, o = r.get(e);
  if (o)
    return o;
  const s = e.props, i = {}, c = [];
  let a = !1;
  if (!Y(e)) {
    const u = (l) => {
      a = !0;
      const [d, h] = Gl(l, t, !0);
      fe(i, d), h && c.push(...h);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!s && !a)
    return ce(e) && r.set(e, xn), xn;
  if (B(s))
    for (let u = 0; u < s.length; u++) {
      process.env.NODE_ENV !== "production" && !de(s[u]) && O("props must be strings when using array syntax.", s[u]);
      const l = De(s[u]);
      Oc(l) && (i[l] = re);
    }
  else if (s) {
    process.env.NODE_ENV !== "production" && !ce(s) && O("invalid props options", s);
    for (const u in s) {
      const l = De(u);
      if (Oc(l)) {
        const d = s[u], h = i[l] = B(d) || Y(d) ? { type: d } : fe({}, d), m = h.type;
        let y = !1, M = !0;
        if (B(m))
          for (let V = 0; V < m.length; ++V) {
            const E = m[V], g = Y(E) && E.name;
            if (g === "Boolean") {
              y = !0;
              break;
            } else g === "String" && (M = !1);
          }
        else
          y = Y(m) && m.name === "Boolean";
        h[
          0
          /* shouldCast */
        ] = y, h[
          1
          /* shouldCastTrue */
        ] = M, (y || le(h, "default")) && c.push(l);
      }
    }
  }
  const f = [i, c];
  return ce(e) && r.set(e, f), f;
}
function Oc(e) {
  return e[0] !== "$" && !Sn(e) ? !0 : (process.env.NODE_ENV !== "production" && O(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function wh(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function zl(e, t, n) {
  const r = ee(t), o = n.propsOptions[0], s = Object.keys(e).map((i) => De(i));
  for (const i in o) {
    let c = o[i];
    c != null && Nh(
      i,
      r[i],
      c,
      process.env.NODE_ENV !== "production" ? mt(r) : r,
      !s.includes(i)
    );
  }
}
function Nh(e, t, n, r, o) {
  const { type: s, required: i, validator: c, skipCheck: a } = n;
  if (i && o) {
    O('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (s != null && s !== !0 && !a) {
      let f = !1;
      const u = B(s) ? s : [s], l = [];
      for (let d = 0; d < u.length && !f; d++) {
        const { valid: h, expectedType: m } = xh(t, u[d]);
        l.push(m || ""), f = h;
      }
      if (!f) {
        O(Sh(e, t, l));
        return;
      }
    }
    c && !c(t, r) && O('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Oh = /* @__PURE__ */ Ue(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function xh(e, t) {
  let n;
  const r = wh(t);
  if (r === "null")
    n = e === null;
  else if (Oh(r)) {
    const o = typeof e;
    n = o === r.toLowerCase(), !n && o === "object" && (n = e instanceof t);
  } else r === "Object" ? n = ce(e) : r === "Array" ? n = B(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: r
  };
}
function Sh(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let r = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(qt).join(" | ")}`;
  const o = n[0], s = Bo(t), i = xc(t, o), c = xc(t, s);
  return n.length === 1 && Sc(o) && !Ch(o, s) && (r += ` with value ${i}`), r += `, got ${s} `, Sc(s) && (r += `with value ${c}.`), r;
}
function xc(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Sc(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Ch(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Wl = (e) => e[0] === "_" || e === "$stable", zi = (e) => B(e) ? e.map(We) : [We(e)], Dh = (e, t, n) => {
  if (t._n)
    return t;
  const r = ft((...o) => (process.env.NODE_ENV !== "production" && Se && (!n || n.root === Se.root) && O(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), zi(t(...o))), n);
  return r._c = !1, r;
}, ql = (e, t, n) => {
  const r = e._ctx;
  for (const o in e) {
    if (Wl(o)) continue;
    const s = e[o];
    if (Y(s))
      t[o] = Dh(o, s, r);
    else if (s != null) {
      process.env.NODE_ENV !== "production" && O(
        `Non-function value encountered for slot "${o}". Prefer function slots for better performance.`
      );
      const i = zi(s);
      t[o] = () => i;
    }
  }
}, Yl = (e, t) => {
  process.env.NODE_ENV !== "production" && !ar(e.vnode) && O(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = zi(t);
  e.slots.default = () => n;
}, Zs = (e, t, n) => {
  for (const r in t)
    (n || r !== "_") && (e[r] = t[r]);
}, Th = (e, t, n) => {
  const r = e.slots = Ul();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (Zs(r, t, n), n && kn(r, "_", o, !0)) : ql(t, r);
  } else t && Yl(e, t);
}, Vh = (e, t, n) => {
  const { vnode: r, slots: o } = e;
  let s = !0, i = re;
  if (r.shapeFlag & 32) {
    const c = t._;
    c ? process.env.NODE_ENV !== "production" && vt ? (Zs(o, t, n), Tt(e, "set", "$slots")) : n && c === 1 ? s = !1 : Zs(o, t, n) : (s = !t.$stable, ql(t, o)), i = t;
  } else t && (Yl(e, t), i = { default: 1 });
  if (s)
    for (const c in o)
      !Wl(c) && i[c] == null && delete o[c];
};
let dr, dn;
function Ft(e, t) {
  e.appContext.config.performance && Do() && dn.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && dp(e, t, Do() ? dn.now() : Date.now());
}
function Ht(e, t) {
  if (e.appContext.config.performance && Do()) {
    const n = `vue-${t}-${e.uid}`, r = n + ":end";
    dn.mark(r), dn.measure(
      `<${as(e, e.type)}> ${t}`,
      n,
      r
    ), dn.clearMarks(n), dn.clearMarks(r);
  }
  process.env.NODE_ENV !== "production" && pp(e, t, Do() ? dn.now() : Date.now());
}
function Do() {
  return dr !== void 0 || (typeof window < "u" && window.performance ? (dr = !0, dn = window.performance) : dr = !1), dr;
}
function Ah() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Ae = uu;
function Xl(e) {
  return Ql(e);
}
function Jl(e) {
  return Ql(e, xp);
}
function Ql(e, t) {
  Ah();
  const n = cr();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && Ri(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: r,
    remove: o,
    patchProp: s,
    createElement: i,
    createText: c,
    createComment: a,
    setText: f,
    setElementText: u,
    parentNode: l,
    nextSibling: d,
    setScopeId: h = xe,
    insertStaticContent: m
  } = e, y = (p, _, w, S = null, D = null, T = null, L = void 0, I = null, P = process.env.NODE_ENV !== "production" && vt ? !1 : !!_.dynamicChildren) => {
    if (p === _)
      return;
    p && !_t(p, _) && (S = H(p), ot(p, D, T, !0), p = null), _.patchFlag === -2 && (P = !1, _.dynamicChildren = null);
    const { type: $, ref: Q, shapeFlag: j } = _;
    switch ($) {
      case kt:
        M(p, _, w, S);
        break;
      case be:
        V(p, _, w, S);
        break;
      case gn:
        p == null ? E(_, w, S, L) : process.env.NODE_ENV !== "production" && g(p, _, w, L);
        break;
      case Ve:
        z(
          p,
          _,
          w,
          S,
          D,
          T,
          L,
          I,
          P
        );
        break;
      default:
        j & 1 ? x(
          p,
          _,
          w,
          S,
          D,
          T,
          L,
          I,
          P
        ) : j & 6 ? oe(
          p,
          _,
          w,
          S,
          D,
          T,
          L,
          I,
          P
        ) : j & 64 || j & 128 ? $.process(
          p,
          _,
          w,
          S,
          D,
          T,
          L,
          I,
          P,
          se
        ) : process.env.NODE_ENV !== "production" && O("Invalid VNode type:", $, `(${typeof $})`);
    }
    Q != null && D && jr(Q, p && p.ref, T, _ || p, !_);
  }, M = (p, _, w, S) => {
    if (p == null)
      r(
        _.el = c(_.children),
        w,
        S
      );
    else {
      const D = _.el = p.el;
      _.children !== p.children && f(D, _.children);
    }
  }, V = (p, _, w, S) => {
    p == null ? r(
      _.el = a(_.children || ""),
      w,
      S
    ) : _.el = p.el;
  }, E = (p, _, w, S) => {
    [p.el, p.anchor] = m(
      p.children,
      _,
      w,
      S,
      p.el,
      p.anchor
    );
  }, g = (p, _, w, S) => {
    if (_.children !== p.children) {
      const D = d(p.anchor);
      v(p), [_.el, _.anchor] = m(
        _.children,
        w,
        D,
        S
      );
    } else
      _.el = p.el, _.anchor = p.anchor;
  }, b = ({ el: p, anchor: _ }, w, S) => {
    let D;
    for (; p && p !== _; )
      D = d(p), r(p, w, S), p = D;
    r(_, w, S);
  }, v = ({ el: p, anchor: _ }) => {
    let w;
    for (; p && p !== _; )
      w = d(p), o(p), p = w;
    o(_);
  }, x = (p, _, w, S, D, T, L, I, P) => {
    _.type === "svg" ? L = "svg" : _.type === "math" && (L = "mathml"), p == null ? R(
      _,
      w,
      S,
      D,
      T,
      L,
      I,
      P
    ) : A(
      p,
      _,
      D,
      T,
      L,
      I,
      P
    );
  }, R = (p, _, w, S, D, T, L, I) => {
    let P, $;
    const { props: Q, shapeFlag: j, transition: X, dirs: Z } = p;
    if (P = p.el = i(
      p.type,
      T,
      Q && Q.is,
      Q
    ), j & 8 ? u(P, p.children) : j & 16 && C(
      p.children,
      P,
      null,
      S,
      D,
      Ss(p, T),
      L,
      I
    ), Z && Ct(p, null, S, "created"), U(P, p, p.scopeId, L, S), Q) {
      for (const me in Q)
        me !== "value" && !Sn(me) && s(P, me, null, Q[me], T, S);
      "value" in Q && s(P, "value", null, Q.value, T), ($ = Q.onVnodeBeforeMount) && Xe($, S, p);
    }
    process.env.NODE_ENV !== "production" && (kn(P, "__vnode", p, !0), kn(P, "__vueParentComponent", S, !0)), Z && Ct(p, null, S, "beforeMount");
    const ue = Zl(D, X);
    ue && X.beforeEnter(P), r(P, _, w), (($ = Q && Q.onVnodeMounted) || ue || Z) && Ae(() => {
      $ && Xe($, S, p), ue && X.enter(P), Z && Ct(p, null, S, "mounted");
    }, D);
  }, U = (p, _, w, S, D) => {
    if (w && h(p, w), S)
      for (let T = 0; T < S.length; T++)
        h(p, S[T]);
    if (D) {
      let T = D.subTree;
      if (process.env.NODE_ENV !== "production" && T.patchFlag > 0 && T.patchFlag & 2048 && (T = is(T.children) || T), _ === T || Ao(T.type) && (T.ssContent === _ || T.ssFallback === _)) {
        const L = D.vnode;
        U(
          p,
          L,
          L.scopeId,
          L.slotScopeIds,
          D.parent
        );
      }
    }
  }, C = (p, _, w, S, D, T, L, I, P = 0) => {
    for (let $ = P; $ < p.length; $++) {
      const Q = p[$] = I ? un(p[$]) : We(p[$]);
      y(
        null,
        Q,
        _,
        w,
        S,
        D,
        T,
        L,
        I
      );
    }
  }, A = (p, _, w, S, D, T, L) => {
    const I = _.el = p.el;
    process.env.NODE_ENV !== "production" && (I.__vnode = _);
    let { patchFlag: P, dynamicChildren: $, dirs: Q } = _;
    P |= p.patchFlag & 16;
    const j = p.props || re, X = _.props || re;
    let Z;
    if (w && wn(w, !1), (Z = X.onVnodeBeforeUpdate) && Xe(Z, w, _, p), Q && Ct(_, p, w, "beforeUpdate"), w && wn(w, !0), process.env.NODE_ENV !== "production" && vt && (P = 0, L = !1, $ = null), (j.innerHTML && X.innerHTML == null || j.textContent && X.textContent == null) && u(I, ""), $ ? (K(
      p.dynamicChildren,
      $,
      I,
      w,
      S,
      Ss(_, D),
      T
    ), process.env.NODE_ENV !== "production" && Sr(p, _)) : L || ye(
      p,
      _,
      I,
      null,
      w,
      S,
      Ss(_, D),
      T,
      !1
    ), P > 0) {
      if (P & 16)
        k(I, j, X, w, D);
      else if (P & 2 && j.class !== X.class && s(I, "class", null, X.class, D), P & 4 && s(I, "style", j.style, X.style, D), P & 8) {
        const ue = _.dynamicProps;
        for (let me = 0; me < ue.length; me++) {
          const ge = ue[me], et = j[ge], Ie = X[ge];
          (Ie !== et || ge === "value") && s(I, ge, et, Ie, D, w);
        }
      }
      P & 1 && p.children !== _.children && u(I, _.children);
    } else !L && $ == null && k(I, j, X, w, D);
    ((Z = X.onVnodeUpdated) || Q) && Ae(() => {
      Z && Xe(Z, w, _, p), Q && Ct(_, p, w, "updated");
    }, S);
  }, K = (p, _, w, S, D, T, L) => {
    for (let I = 0; I < _.length; I++) {
      const P = p[I], $ = _[I], Q = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        P.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (P.type === Ve || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !_t(P, $) || // - In the case of a component, it could contain anything.
        P.shapeFlag & 70) ? l(P.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          w
        )
      );
      y(
        P,
        $,
        Q,
        null,
        S,
        D,
        T,
        L,
        !0
      );
    }
  }, k = (p, _, w, S, D) => {
    if (_ !== w) {
      if (_ !== re)
        for (const T in _)
          !Sn(T) && !(T in w) && s(
            p,
            T,
            _[T],
            null,
            D,
            S
          );
      for (const T in w) {
        if (Sn(T)) continue;
        const L = w[T], I = _[T];
        L !== I && T !== "value" && s(p, T, I, L, D, S);
      }
      "value" in w && s(p, "value", _.value, w.value, D);
    }
  }, z = (p, _, w, S, D, T, L, I, P) => {
    const $ = _.el = p ? p.el : c(""), Q = _.anchor = p ? p.anchor : c("");
    let { patchFlag: j, dynamicChildren: X, slotScopeIds: Z } = _;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (vt || j & 2048) && (j = 0, P = !1, X = null), Z && (I = I ? I.concat(Z) : Z), p == null ? (r($, w, S), r(Q, w, S), C(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      _.children || [],
      w,
      Q,
      D,
      T,
      L,
      I,
      P
    )) : j > 0 && j & 64 && X && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    p.dynamicChildren ? (K(
      p.dynamicChildren,
      X,
      w,
      D,
      T,
      L,
      I
    ), process.env.NODE_ENV !== "production" ? Sr(p, _) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (_.key != null || D && _ === D.subTree) && Sr(
        p,
        _,
        !0
        /* shallow */
      )
    )) : ye(
      p,
      _,
      w,
      Q,
      D,
      T,
      L,
      I,
      P
    );
  }, oe = (p, _, w, S, D, T, L, I, P) => {
    _.slotScopeIds = I, p == null ? _.shapeFlag & 512 ? D.ctx.activate(
      _,
      w,
      S,
      L,
      P
    ) : ne(
      _,
      w,
      S,
      D,
      T,
      L,
      P
    ) : W(p, _, P);
  }, ne = (p, _, w, S, D, T, L) => {
    const I = p.component = mu(
      p,
      S,
      D
    );
    if (process.env.NODE_ENV !== "production" && I.type.__hmrId && op(I), process.env.NODE_ENV !== "production" && (qn(p), Ft(I, "mount")), ar(p) && (I.ctx.renderer = se), process.env.NODE_ENV !== "production" && Ft(I, "init"), yu(I, !1, L), process.env.NODE_ENV !== "production" && Ht(I, "init"), I.asyncDep) {
      if (process.env.NODE_ENV !== "production" && vt && (p.el = null), D && D.registerDep(I, J, L), !p.el) {
        const P = I.subTree = _e(be);
        V(null, P, _, w);
      }
    } else
      J(
        I,
        p,
        _,
        w,
        D,
        T,
        L
      );
    process.env.NODE_ENV !== "production" && (Yn(), Ht(I, "mount"));
  }, W = (p, _, w) => {
    const S = _.component = p.component;
    if (jh(p, _, w))
      if (S.asyncDep && !S.asyncResolved) {
        process.env.NODE_ENV !== "production" && qn(_), G(S, _, w), process.env.NODE_ENV !== "production" && Yn();
        return;
      } else
        S.next = _, S.update();
    else
      _.el = p.el, S.vnode = _;
  }, J = (p, _, w, S, D, T, L) => {
    const I = () => {
      if (p.isMounted) {
        let { next: j, bu: X, u: Z, parent: ue, vnode: me } = p;
        {
          const tt = eu(p);
          if (tt) {
            j && (j.el = me.el, G(p, j, L)), tt.asyncDep.then(() => {
              p.isUnmounted || I();
            });
            return;
          }
        }
        let ge = j, et;
        process.env.NODE_ENV !== "production" && qn(j || p.vnode), wn(p, !1), j ? (j.el = me.el, G(p, j, L)) : j = me, X && Kt(X), (et = j.props && j.props.onVnodeBeforeUpdate) && Xe(et, ue, j, me), wn(p, !0), process.env.NODE_ENV !== "production" && Ft(p, "render");
        const Ie = _o(p);
        process.env.NODE_ENV !== "production" && Ht(p, "render");
        const ht = p.subTree;
        p.subTree = Ie, process.env.NODE_ENV !== "production" && Ft(p, "patch"), y(
          ht,
          Ie,
          // parent may have changed if it's in a teleport
          l(ht.el),
          // anchor may have changed if it's in a fragment
          H(ht),
          p,
          D,
          T
        ), process.env.NODE_ENV !== "production" && Ht(p, "patch"), j.el = Ie.el, ge === null && cs(p, Ie.el), Z && Ae(Z, D), (et = j.props && j.props.onVnodeUpdated) && Ae(
          () => Xe(et, ue, j, me),
          D
        ), process.env.NODE_ENV !== "production" && _l(p), process.env.NODE_ENV !== "production" && Yn();
      } else {
        let j;
        const { el: X, props: Z } = _, { bm: ue, m: me, parent: ge, root: et, type: Ie } = p, ht = hn(_);
        if (wn(p, !1), ue && Kt(ue), !ht && (j = Z && Z.onVnodeBeforeMount) && Xe(j, ge, _), wn(p, !0), X && te) {
          const tt = () => {
            process.env.NODE_ENV !== "production" && Ft(p, "render"), p.subTree = _o(p), process.env.NODE_ENV !== "production" && Ht(p, "render"), process.env.NODE_ENV !== "production" && Ft(p, "hydrate"), te(
              X,
              p.subTree,
              p,
              D,
              null
            ), process.env.NODE_ENV !== "production" && Ht(p, "hydrate");
          };
          ht && Ie.__asyncHydrate ? Ie.__asyncHydrate(
            X,
            p,
            tt
          ) : tt();
        } else {
          et.ce && et.ce._injectChildStyle(Ie), process.env.NODE_ENV !== "production" && Ft(p, "render");
          const tt = p.subTree = _o(p);
          process.env.NODE_ENV !== "production" && Ht(p, "render"), process.env.NODE_ENV !== "production" && Ft(p, "patch"), y(
            null,
            tt,
            w,
            S,
            p,
            D,
            T
          ), process.env.NODE_ENV !== "production" && Ht(p, "patch"), _.el = tt.el;
        }
        if (me && Ae(me, D), !ht && (j = Z && Z.onVnodeMounted)) {
          const tt = _;
          Ae(
            () => Xe(j, ge, tt),
            D
          );
        }
        (_.shapeFlag & 256 || ge && hn(ge.vnode) && ge.vnode.shapeFlag & 256) && p.a && Ae(p.a, D), p.isMounted = !0, process.env.NODE_ENV !== "production" && zs(p), _ = w = S = null;
      }
    };
    p.scope.on();
    const P = p.effect = new Rr(I);
    p.scope.off();
    const $ = p.update = P.run.bind(P), Q = p.job = P.runIfDirty.bind(P);
    Q.i = p, Q.id = p.uid, P.scheduler = () => Zo(Q), wn(p, !0), process.env.NODE_ENV !== "production" && (P.onTrack = p.rtc ? (j) => Kt(p.rtc, j) : void 0, P.onTrigger = p.rtg ? (j) => Kt(p.rtg, j) : void 0), $();
  }, G = (p, _, w) => {
    _.component = p;
    const S = p.vnode.props;
    p.vnode = _, p.next = null, bh(p, _.props, S, w), Vh(p, _.children, w), Jt(), uc(p), Qt();
  }, ye = (p, _, w, S, D, T, L, I, P = !1) => {
    const $ = p && p.children, Q = p ? p.shapeFlag : 0, j = _.children, { patchFlag: X, shapeFlag: Z } = _;
    if (X > 0) {
      if (X & 128) {
        en(
          $,
          j,
          w,
          S,
          D,
          T,
          L,
          I,
          P
        );
        return;
      } else if (X & 256) {
        pt(
          $,
          j,
          w,
          S,
          D,
          T,
          L,
          I,
          P
        );
        return;
      }
    }
    Z & 8 ? (Q & 16 && N($, D, T), j !== $ && u(w, j)) : Q & 16 ? Z & 16 ? en(
      $,
      j,
      w,
      S,
      D,
      T,
      L,
      I,
      P
    ) : N($, D, T, !0) : (Q & 8 && u(w, ""), Z & 16 && C(
      j,
      w,
      S,
      D,
      T,
      L,
      I,
      P
    ));
  }, pt = (p, _, w, S, D, T, L, I, P) => {
    p = p || xn, _ = _ || xn;
    const $ = p.length, Q = _.length, j = Math.min($, Q);
    let X;
    for (X = 0; X < j; X++) {
      const Z = _[X] = P ? un(_[X]) : We(_[X]);
      y(
        p[X],
        Z,
        w,
        null,
        D,
        T,
        L,
        I,
        P
      );
    }
    $ > Q ? N(
      p,
      D,
      T,
      !0,
      !1,
      j
    ) : C(
      _,
      w,
      S,
      D,
      T,
      L,
      I,
      P,
      j
    );
  }, en = (p, _, w, S, D, T, L, I, P) => {
    let $ = 0;
    const Q = _.length;
    let j = p.length - 1, X = Q - 1;
    for (; $ <= j && $ <= X; ) {
      const Z = p[$], ue = _[$] = P ? un(_[$]) : We(_[$]);
      if (_t(Z, ue))
        y(
          Z,
          ue,
          w,
          null,
          D,
          T,
          L,
          I,
          P
        );
      else
        break;
      $++;
    }
    for (; $ <= j && $ <= X; ) {
      const Z = p[j], ue = _[X] = P ? un(_[X]) : We(_[X]);
      if (_t(Z, ue))
        y(
          Z,
          ue,
          w,
          null,
          D,
          T,
          L,
          I,
          P
        );
      else
        break;
      j--, X--;
    }
    if ($ > j) {
      if ($ <= X) {
        const Z = X + 1, ue = Z < Q ? _[Z].el : S;
        for (; $ <= X; )
          y(
            null,
            _[$] = P ? un(_[$]) : We(_[$]),
            w,
            ue,
            D,
            T,
            L,
            I,
            P
          ), $++;
      }
    } else if ($ > X)
      for (; $ <= j; )
        ot(p[$], D, T, !0), $++;
    else {
      const Z = $, ue = $, me = /* @__PURE__ */ new Map();
      for ($ = ue; $ <= X; $++) {
        const Be = _[$] = P ? un(_[$]) : We(_[$]);
        Be.key != null && (process.env.NODE_ENV !== "production" && me.has(Be.key) && O(
          "Duplicate keys found during update:",
          JSON.stringify(Be.key),
          "Make sure keys are unique."
        ), me.set(Be.key, $));
      }
      let ge, et = 0;
      const Ie = X - ue + 1;
      let ht = !1, tt = 0;
      const ur = new Array(Ie);
      for ($ = 0; $ < Ie; $++) ur[$] = 0;
      for ($ = Z; $ <= j; $++) {
        const Be = p[$];
        if (et >= Ie) {
          ot(Be, D, T, !0);
          continue;
        }
        let Ot;
        if (Be.key != null)
          Ot = me.get(Be.key);
        else
          for (ge = ue; ge <= X; ge++)
            if (ur[ge - ue] === 0 && _t(Be, _[ge])) {
              Ot = ge;
              break;
            }
        Ot === void 0 ? ot(Be, D, T, !0) : (ur[Ot - ue] = $ + 1, Ot >= tt ? tt = Ot : ht = !0, y(
          Be,
          _[Ot],
          w,
          null,
          D,
          T,
          L,
          I,
          P
        ), et++);
      }
      const rc = ht ? kh(ur) : xn;
      for (ge = rc.length - 1, $ = Ie - 1; $ >= 0; $--) {
        const Be = ue + $, Ot = _[Be], oc = Be + 1 < Q ? _[Be + 1].el : S;
        ur[$] === 0 ? y(
          null,
          Ot,
          w,
          oc,
          D,
          T,
          L,
          I,
          P
        ) : ht && (ge < 0 || $ !== rc[ge] ? Nt(Ot, w, oc, 2) : ge--);
      }
    }
  }, Nt = (p, _, w, S, D = null) => {
    const { el: T, type: L, transition: I, children: P, shapeFlag: $ } = p;
    if ($ & 6) {
      Nt(p.component.subTree, _, w, S);
      return;
    }
    if ($ & 128) {
      p.suspense.move(_, w, S);
      return;
    }
    if ($ & 64) {
      L.move(p, _, w, se);
      return;
    }
    if (L === Ve) {
      r(T, _, w);
      for (let j = 0; j < P.length; j++)
        Nt(P[j], _, w, S);
      r(p.anchor, _, w);
      return;
    }
    if (L === gn) {
      b(p, _, w);
      return;
    }
    if (S !== 2 && $ & 1 && I)
      if (S === 0)
        I.beforeEnter(T), r(T, _, w), Ae(() => I.enter(T), D);
      else {
        const { leave: j, delayLeave: X, afterLeave: Z } = I, ue = () => r(T, _, w), me = () => {
          j(T, () => {
            ue(), Z && Z();
          });
        };
        X ? X(T, ue, me) : me();
      }
    else
      r(T, _, w);
  }, ot = (p, _, w, S = !1, D = !1) => {
    const {
      type: T,
      props: L,
      ref: I,
      children: P,
      dynamicChildren: $,
      shapeFlag: Q,
      patchFlag: j,
      dirs: X,
      cacheIndex: Z
    } = p;
    if (j === -2 && (D = !1), I != null && jr(I, null, w, p, !0), Z != null && (_.renderCache[Z] = void 0), Q & 256) {
      _.ctx.deactivate(p);
      return;
    }
    const ue = Q & 1 && X, me = !hn(p);
    let ge;
    if (me && (ge = L && L.onVnodeBeforeUnmount) && Xe(ge, _, p), Q & 6)
      nn(p.component, w, S);
    else {
      if (Q & 128) {
        p.suspense.unmount(w, S);
        return;
      }
      ue && Ct(p, null, _, "beforeUnmount"), Q & 64 ? p.type.remove(
        p,
        _,
        w,
        se,
        S
      ) : $ && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !$.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (T !== Ve || j > 0 && j & 64) ? N(
        $,
        _,
        w,
        !1,
        !0
      ) : (T === Ve && j & 384 || !D && Q & 16) && N(P, _, w), S && tn(p);
    }
    (me && (ge = L && L.onVnodeUnmounted) || ue) && Ae(() => {
      ge && Xe(ge, _, p), ue && Ct(p, null, _, "unmounted");
    }, w);
  }, tn = (p) => {
    const { type: _, el: w, anchor: S, transition: D } = p;
    if (_ === Ve) {
      process.env.NODE_ENV !== "production" && p.patchFlag > 0 && p.patchFlag & 2048 && D && !D.persisted ? p.children.forEach((L) => {
        L.type === be ? o(L.el) : tn(L);
      }) : eo(w, S);
      return;
    }
    if (_ === gn) {
      v(p);
      return;
    }
    const T = () => {
      o(w), D && !D.persisted && D.afterLeave && D.afterLeave();
    };
    if (p.shapeFlag & 1 && D && !D.persisted) {
      const { leave: L, delayLeave: I } = D, P = () => L(w, T);
      I ? I(p.el, T, P) : P();
    } else
      T();
  }, eo = (p, _) => {
    let w;
    for (; p !== _; )
      w = d(p), o(p), p = w;
    o(_);
  }, nn = (p, _, w) => {
    process.env.NODE_ENV !== "production" && p.type.__hmrId && sp(p);
    const { bum: S, scope: D, job: T, subTree: L, um: I, m: P, a: $ } = p;
    To(P), To($), S && Kt(S), D.stop(), T && (T.flags |= 8, ot(L, p, _, w)), I && Ae(I, _), Ae(() => {
      p.isUnmounted = !0;
    }, _), _ && _.pendingBranch && !_.isUnmounted && p.asyncDep && !p.asyncResolved && p.suspenseId === _.pendingId && (_.deps--, _.deps === 0 && _.resolve()), process.env.NODE_ENV !== "production" && fp(p);
  }, N = (p, _, w, S = !1, D = !1, T = 0) => {
    for (let L = T; L < p.length; L++)
      ot(p[L], _, w, S, D);
  }, H = (p) => {
    if (p.shapeFlag & 6)
      return H(p.component.subTree);
    if (p.shapeFlag & 128)
      return p.suspense.next();
    const _ = d(p.anchor || p.el), w = _ && _[yl];
    return w ? d(w) : _;
  };
  let F = !1;
  const q = (p, _, w) => {
    p == null ? _._vnode && ot(_._vnode, null, null, !0) : y(
      _._vnode || null,
      p,
      _,
      null,
      null,
      null,
      w
    ), _._vnode = p, F || (F = !0, uc(), Oo(), F = !1);
  }, se = {
    p: y,
    um: ot,
    m: Nt,
    r: tn,
    mt: ne,
    mc: C,
    pc: ye,
    pbc: K,
    n: H,
    o: e
  };
  let Ee, te;
  return t && ([Ee, te] = t(
    se
  )), {
    render: q,
    hydrate: Ee,
    createApp: _h(q, Ee)
  };
}
function Ss({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function wn({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Zl(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Sr(e, t, n = !1) {
  const r = e.children, o = t.children;
  if (B(r) && B(o))
    for (let s = 0; s < r.length; s++) {
      const i = r[s];
      let c = o[s];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = o[s] = un(o[s]), c.el = i.el), !n && c.patchFlag !== -2 && Sr(i, c)), c.type === kt && (c.el = i.el), process.env.NODE_ENV !== "production" && c.type === be && !c.el && (c.el = i.el);
    }
}
function kh(e) {
  const t = e.slice(), n = [0];
  let r, o, s, i, c;
  const a = e.length;
  for (r = 0; r < a; r++) {
    const f = e[r];
    if (f !== 0) {
      if (o = n[n.length - 1], e[o] < f) {
        t[r] = o, n.push(r);
        continue;
      }
      for (s = 0, i = n.length - 1; s < i; )
        c = s + i >> 1, e[n[c]] < f ? s = c + 1 : i = c;
      f < e[n[s]] && (s > 0 && (t[r] = n[s - 1]), n[s] = r);
    }
  }
  for (s = n.length, i = n[s - 1]; s-- > 0; )
    n[s] = i, i = t[i];
  return n;
}
function eu(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : eu(t);
}
function To(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const tu = Symbol.for("v-scx"), nu = () => {
  {
    const e = Je(tu);
    return e || process.env.NODE_ENV !== "production" && O(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function ru(e, t) {
  return Jr(e, null, t);
}
function $h(e, t) {
  return Jr(
    e,
    null,
    process.env.NODE_ENV !== "production" ? fe({}, t, { flush: "post" }) : { flush: "post" }
  );
}
function ou(e, t) {
  return Jr(
    e,
    null,
    process.env.NODE_ENV !== "production" ? fe({}, t, { flush: "sync" }) : { flush: "sync" }
  );
}
function $e(e, t, n) {
  return process.env.NODE_ENV !== "production" && !Y(t) && O(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Jr(e, t, n);
}
function Jr(e, t, n = re) {
  const { immediate: r, deep: o, flush: s, once: i } = n;
  process.env.NODE_ENV !== "production" && !t && (r !== void 0 && O(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && O(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && O(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const c = fe({}, n);
  process.env.NODE_ENV !== "production" && (c.onWarn = O);
  const a = t && r || !t && s !== "post";
  let f;
  if (nr) {
    if (s === "sync") {
      const h = nu();
      f = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!a) {
      const h = () => {
      };
      return h.stop = xe, h.resume = xe, h.pause = xe, h;
    }
  }
  const u = Se;
  c.call = (h, m, y) => ut(h, u, m, y);
  let l = !1;
  s === "post" ? c.scheduler = (h) => {
    Ae(h, u && u.suspense);
  } : s !== "sync" && (l = !0, c.scheduler = (h, m) => {
    m ? h() : Zo(h);
  }), c.augmentJob = (h) => {
    t && (h.flags |= 4), l && (h.flags |= 2, u && (h.id = u.uid, h.i = u));
  };
  const d = Yd(e, t, c);
  return nr && (f ? f.push(d) : a && d()), d;
}
function Rh(e, t, n) {
  const r = this.proxy, o = de(e) ? e.includes(".") ? su(r, e) : () => r[e] : e.bind(r, r);
  let s;
  Y(t) ? s = t : (s = t.handler, n = t);
  const i = Pn(this), c = Jr(o, s.bind(r), n);
  return i(), c;
}
function su(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
function Ph(e, t, n = re) {
  const r = Ye();
  if (process.env.NODE_ENV !== "production" && !r)
    return O("useModel() called without active instance."), Ce();
  const o = De(t);
  if (process.env.NODE_ENV !== "production" && !r.propsOptions[0][o])
    return O(`useModel() called with prop "${t}" which is not declared.`), Ce();
  const s = Pe(t), i = iu(e, o), c = al((a, f) => {
    let u, l = re, d;
    return ou(() => {
      const h = e[o];
      Le(u, h) && (u = h, f());
    }), {
      get() {
        return a(), n.get ? n.get(u) : u;
      },
      set(h) {
        const m = n.set ? n.set(h) : h;
        if (!Le(m, u) && !(l !== re && Le(h, l)))
          return;
        const y = r.vnode.props;
        y && // check if parent has passed v-model
        (t in y || o in y || s in y) && (`onUpdate:${t}` in y || `onUpdate:${o}` in y || `onUpdate:${s}` in y) || (u = h, f()), r.emit(`update:${t}`, m), Le(h, m) && Le(h, l) && !Le(m, d) && f(), l = h, d = m;
      }
    };
  });
  return c[Symbol.iterator] = () => {
    let a = 0;
    return {
      next() {
        return a < 2 ? { value: a++ ? i || re : c, done: !1 } : { done: !0 };
      }
    };
  }, c;
}
const iu = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${De(t)}Modifiers`] || e[`${Pe(t)}Modifiers`];
function Mh(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || re;
  if (process.env.NODE_ENV !== "production") {
    const {
      emitsOptions: u,
      propsOptions: [l]
    } = e;
    if (u)
      if (!(t in u))
        (!l || !(Dt(De(t)) in l)) && O(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Dt(De(t))}" prop.`
        );
      else {
        const d = u[t];
        Y(d) && (d(...n) || O(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let o = n;
  const s = t.startsWith("update:"), i = s && iu(r, t.slice(7));
  if (i && (i.trim && (o = n.map((u) => de(u) ? u.trim() : u)), i.number && (o = n.map(kr))), process.env.NODE_ENV !== "production" && hp(e, t, o), process.env.NODE_ENV !== "production") {
    const u = t.toLowerCase();
    u !== t && r[Dt(u)] && O(
      `Event "${u}" is emitted in component ${as(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Pe(
        t
      )}" instead of "${t}".`
    );
  }
  let c, a = r[c = Dt(t)] || // also try camelCase event handler (#2249)
  r[c = Dt(De(t))];
  !a && s && (a = r[c = Dt(Pe(t))]), a && ut(
    a,
    e,
    6,
    o
  );
  const f = r[c + "Once"];
  if (f) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, ut(
      f,
      e,
      6,
      o
    );
  }
}
function cu(e, t, n = !1) {
  const r = t.emitsCache, o = r.get(e);
  if (o !== void 0)
    return o;
  const s = e.emits;
  let i = {}, c = !1;
  if (!Y(e)) {
    const a = (f) => {
      const u = cu(f, t, !0);
      u && (c = !0, fe(i, u));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !s && !c ? (ce(e) && r.set(e, null), null) : (B(s) ? s.forEach((a) => i[a] = null) : fe(i, s), ce(e) && r.set(e, i), i);
}
function ss(e, t) {
  return !e || !Mn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), le(e, t[0].toLowerCase() + t.slice(1)) || le(e, Pe(t)) || le(e, t));
}
let ei = !1;
function Vo() {
  ei = !0;
}
function _o(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: o,
    propsOptions: [s],
    slots: i,
    attrs: c,
    emit: a,
    render: f,
    renderCache: u,
    props: l,
    data: d,
    setupState: h,
    ctx: m,
    inheritAttrs: y
  } = e, M = Lr(e);
  let V, E;
  process.env.NODE_ENV !== "production" && (ei = !1);
  try {
    if (n.shapeFlag & 4) {
      const v = o || r, x = process.env.NODE_ENV !== "production" && h.__isScriptSetup ? new Proxy(v, {
        get(R, U, C) {
          return O(
            `Property '${String(
              U
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(R, U, C);
        }
      }) : v;
      V = We(
        f.call(
          x,
          v,
          u,
          process.env.NODE_ENV !== "production" ? mt(l) : l,
          h,
          d,
          m
        )
      ), E = c;
    } else {
      const v = t;
      process.env.NODE_ENV !== "production" && c === l && Vo(), V = We(
        v.length > 1 ? v(
          process.env.NODE_ENV !== "production" ? mt(l) : l,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return Vo(), mt(c);
            },
            slots: i,
            emit: a
          } : { attrs: c, slots: i, emit: a }
        ) : v(
          process.env.NODE_ENV !== "production" ? mt(l) : l,
          null
        )
      ), E = t.props ? c : Ih(c);
    }
  } catch (v) {
    Cr.length = 0, yn(v, e, 1), V = _e(be);
  }
  let g = V, b;
  if (process.env.NODE_ENV !== "production" && V.patchFlag > 0 && V.patchFlag & 2048 && ([g, b] = au(V)), E && y !== !1) {
    const v = Object.keys(E), { shapeFlag: x } = g;
    if (v.length) {
      if (x & 7)
        s && v.some(Ar) && (E = Lh(
          E,
          s
        )), g = dt(g, E, !1, !0);
      else if (process.env.NODE_ENV !== "production" && !ei && g.type !== be) {
        const R = Object.keys(c), U = [], C = [];
        for (let A = 0, K = R.length; A < K; A++) {
          const k = R[A];
          Mn(k) ? Ar(k) || U.push(k[2].toLowerCase() + k.slice(3)) : C.push(k);
        }
        C.length && O(
          `Extraneous non-props attributes (${C.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), U.length && O(
          `Extraneous non-emits event listeners (${U.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !Cc(g) && O(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), g = dt(g, null, !1, !0), g.dirs = g.dirs ? g.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !Cc(g) && O(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), Xt(g, n.transition)), process.env.NODE_ENV !== "production" && b ? b(g) : V = g, Lr(M), V;
}
const au = (e) => {
  const t = e.children, n = e.dynamicChildren, r = is(t, !1);
  if (r) {
    if (process.env.NODE_ENV !== "production" && r.patchFlag > 0 && r.patchFlag & 2048)
      return au(r);
  } else return [e, void 0];
  const o = t.indexOf(r), s = n ? n.indexOf(r) : -1, i = (c) => {
    t[o] = c, n && (s > -1 ? n[s] = c : c.patchFlag > 0 && (e.dynamicChildren = [...n, c]));
  };
  return [We(r), i];
};
function is(e, t = !0) {
  let n;
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    if (Rt(o)) {
      if (o.type !== be || o.children === "v-if") {
        if (n)
          return;
        if (n = o, process.env.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return is(n.children);
      }
    } else
      return;
  }
  return n;
}
const Ih = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Mn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Lh = (e, t) => {
  const n = {};
  for (const r in e)
    (!Ar(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
}, Cc = (e) => e.shapeFlag & 7 || e.type === be;
function jh(e, t, n) {
  const { props: r, children: o, component: s } = e, { props: i, children: c, patchFlag: a } = t, f = s.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (o || c) && vt || t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return r ? Dc(r, i, f) : !!i;
    if (a & 8) {
      const u = t.dynamicProps;
      for (let l = 0; l < u.length; l++) {
        const d = u[l];
        if (i[d] !== r[d] && !ss(f, d))
          return !0;
      }
    }
  } else
    return (o || c) && (!c || !c.$stable) ? !0 : r === i ? !1 : r ? i ? Dc(r, i, f) : !0 : !!i;
  return !1;
}
function Dc(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < r.length; o++) {
    const s = r[o];
    if (t[s] !== e[s] && !ss(n, s))
      return !0;
  }
  return !1;
}
function cs({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Ao = (e) => e.__isSuspense;
let ti = 0;
const Fh = {
  name: "Suspense",
  // In order to make Suspense tree-shakable, we need to avoid importing it
  // directly in the renderer. The renderer checks for the __isSuspense flag
  // on a vnode's type and calls the `process` method, passing in renderer
  // internals.
  __isSuspense: !0,
  process(e, t, n, r, o, s, i, c, a, f) {
    if (e == null)
      Uh(
        t,
        n,
        r,
        o,
        s,
        i,
        c,
        a,
        f
      );
    else {
      if (s && s.deps > 0 && !e.suspense.isInFallback) {
        t.suspense = e.suspense, t.suspense.vnode = t, t.el = e.el;
        return;
      }
      Bh(
        e,
        t,
        n,
        r,
        o,
        i,
        c,
        a,
        f
      );
    }
  },
  hydrate: Kh,
  normalize: Gh
}, Hh = Fh;
function Hr(e, t) {
  const n = e.props && e.props[t];
  Y(n) && n();
}
function Uh(e, t, n, r, o, s, i, c, a) {
  const {
    p: f,
    o: { createElement: u }
  } = a, l = u("div"), d = e.suspense = lu(
    e,
    o,
    r,
    t,
    l,
    n,
    s,
    i,
    c,
    a
  );
  f(
    null,
    d.pendingBranch = e.ssContent,
    l,
    null,
    r,
    d,
    s,
    i
  ), d.deps > 0 ? (Hr(e, "onPending"), Hr(e, "onFallback"), f(
    null,
    e.ssFallback,
    t,
    n,
    r,
    null,
    // fallback tree will not have suspense context
    s,
    i
  ), Jn(d, e.ssFallback)) : d.resolve(!1, !0);
}
function Bh(e, t, n, r, o, s, i, c, { p: a, um: f, o: { createElement: u } }) {
  const l = t.suspense = e.suspense;
  l.vnode = t, t.el = e.el;
  const d = t.ssContent, h = t.ssFallback, { activeBranch: m, pendingBranch: y, isInFallback: M, isHydrating: V } = l;
  if (y)
    l.pendingBranch = d, _t(d, y) ? (a(
      y,
      d,
      l.hiddenContainer,
      null,
      o,
      l,
      s,
      i,
      c
    ), l.deps <= 0 ? l.resolve() : M && (V || (a(
      m,
      h,
      n,
      r,
      o,
      null,
      // fallback tree will not have suspense context
      s,
      i,
      c
    ), Jn(l, h)))) : (l.pendingId = ti++, V ? (l.isHydrating = !1, l.activeBranch = y) : f(y, o, l), l.deps = 0, l.effects.length = 0, l.hiddenContainer = u("div"), M ? (a(
      null,
      d,
      l.hiddenContainer,
      null,
      o,
      l,
      s,
      i,
      c
    ), l.deps <= 0 ? l.resolve() : (a(
      m,
      h,
      n,
      r,
      o,
      null,
      // fallback tree will not have suspense context
      s,
      i,
      c
    ), Jn(l, h))) : m && _t(d, m) ? (a(
      m,
      d,
      n,
      r,
      o,
      l,
      s,
      i,
      c
    ), l.resolve(!0)) : (a(
      null,
      d,
      l.hiddenContainer,
      null,
      o,
      l,
      s,
      i,
      c
    ), l.deps <= 0 && l.resolve()));
  else if (m && _t(d, m))
    a(
      m,
      d,
      n,
      r,
      o,
      l,
      s,
      i,
      c
    ), Jn(l, d);
  else if (Hr(t, "onPending"), l.pendingBranch = d, d.shapeFlag & 512 ? l.pendingId = d.component.suspenseId : l.pendingId = ti++, a(
    null,
    d,
    l.hiddenContainer,
    null,
    o,
    l,
    s,
    i,
    c
  ), l.deps <= 0)
    l.resolve();
  else {
    const { timeout: E, pendingId: g } = l;
    E > 0 ? setTimeout(() => {
      l.pendingId === g && l.fallback(h);
    }, E) : E === 0 && l.fallback(h);
  }
}
let Tc = !1;
function lu(e, t, n, r, o, s, i, c, a, f, u = !1) {
  process.env.NODE_ENV !== "production" && !Tc && (Tc = !0, console[console.info ? "info" : "log"](
    "<Suspense> is an experimental feature and its API will likely change."
  ));
  const {
    p: l,
    m: d,
    um: h,
    n: m,
    o: { parentNode: y, remove: M }
  } = f;
  let V;
  const E = zh(e);
  E && t && t.pendingBranch && (V = t.pendingId, t.deps++);
  const g = e.props ? $r(e.props.timeout) : void 0;
  process.env.NODE_ENV !== "production" && ki(g, "Suspense timeout");
  const b = s, v = {
    vnode: e,
    parent: t,
    parentComponent: n,
    namespace: i,
    container: r,
    hiddenContainer: o,
    deps: 0,
    pendingId: ti++,
    timeout: typeof g == "number" ? g : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: !u,
    isHydrating: u,
    isUnmounted: !1,
    effects: [],
    resolve(x = !1, R = !1) {
      if (process.env.NODE_ENV !== "production") {
        if (!x && !v.pendingBranch)
          throw new Error(
            "suspense.resolve() is called without a pending branch."
          );
        if (v.isUnmounted)
          throw new Error(
            "suspense.resolve() is called on an already unmounted suspense boundary."
          );
      }
      const {
        vnode: U,
        activeBranch: C,
        pendingBranch: A,
        pendingId: K,
        effects: k,
        parentComponent: z,
        container: oe
      } = v;
      let ne = !1;
      v.isHydrating ? v.isHydrating = !1 : x || (ne = C && A.transition && A.transition.mode === "out-in", ne && (C.transition.afterLeave = () => {
        K === v.pendingId && (d(
          A,
          oe,
          s === b ? m(C) : s,
          0
        ), er(k));
      }), C && (y(C.el) === oe && (s = m(C)), h(C, z, v, !0)), ne || d(A, oe, s, 0)), Jn(v, A), v.pendingBranch = null, v.isInFallback = !1;
      let W = v.parent, J = !1;
      for (; W; ) {
        if (W.pendingBranch) {
          W.effects.push(...k), J = !0;
          break;
        }
        W = W.parent;
      }
      !J && !ne && er(k), v.effects = [], E && t && t.pendingBranch && V === t.pendingId && (t.deps--, t.deps === 0 && !R && t.resolve()), Hr(U, "onResolve");
    },
    fallback(x) {
      if (!v.pendingBranch)
        return;
      const { vnode: R, activeBranch: U, parentComponent: C, container: A, namespace: K } = v;
      Hr(R, "onFallback");
      const k = m(U), z = () => {
        v.isInFallback && (l(
          null,
          x,
          A,
          k,
          C,
          null,
          // fallback tree will not have suspense context
          K,
          c,
          a
        ), Jn(v, x));
      }, oe = x.transition && x.transition.mode === "out-in";
      oe && (U.transition.afterLeave = z), v.isInFallback = !0, h(
        U,
        C,
        null,
        // no suspense so unmount hooks fire now
        !0
        // shouldRemove
      ), oe || z();
    },
    move(x, R, U) {
      v.activeBranch && d(v.activeBranch, x, R, U), v.container = x;
    },
    next() {
      return v.activeBranch && m(v.activeBranch);
    },
    registerDep(x, R, U) {
      const C = !!v.pendingBranch;
      C && v.deps++;
      const A = x.vnode.el;
      x.asyncDep.catch((K) => {
        yn(K, x, 0);
      }).then((K) => {
        if (x.isUnmounted || v.isUnmounted || v.pendingId !== x.suspenseId)
          return;
        x.asyncResolved = !0;
        const { vnode: k } = x;
        process.env.NODE_ENV !== "production" && qn(k), ci(x, K, !1), A && (k.el = A);
        const z = !A && x.subTree.el;
        R(
          x,
          k,
          // component may have been moved before resolve.
          // if this is not a hydration, instance.subTree will be the comment
          // placeholder.
          y(A || x.subTree.el),
          // anchor will not be used if this is hydration, so only need to
          // consider the comment placeholder case.
          A ? null : m(x.subTree),
          v,
          i,
          U
        ), z && M(z), cs(x, k.el), process.env.NODE_ENV !== "production" && Yn(), C && --v.deps === 0 && v.resolve();
      });
    },
    unmount(x, R) {
      v.isUnmounted = !0, v.activeBranch && h(
        v.activeBranch,
        n,
        x,
        R
      ), v.pendingBranch && h(
        v.pendingBranch,
        n,
        x,
        R
      );
    }
  };
  return v;
}
function Kh(e, t, n, r, o, s, i, c, a) {
  const f = t.suspense = lu(
    t,
    r,
    n,
    e.parentNode,
    // eslint-disable-next-line no-restricted-globals
    document.createElement("div"),
    null,
    o,
    s,
    i,
    c,
    !0
  ), u = a(
    e,
    f.pendingBranch = t.ssContent,
    n,
    f,
    s,
    i
  );
  return f.deps === 0 && f.resolve(!1, !0), u;
}
function Gh(e) {
  const { shapeFlag: t, children: n } = e, r = t & 32;
  e.ssContent = Vc(
    r ? n.default : n
  ), e.ssFallback = r ? Vc(n.fallback) : _e(be);
}
function Vc(e) {
  let t;
  if (Y(e)) {
    const n = Rn && e._c;
    n && (e._d = !1, we()), e = e(), n && (e._d = !0, t = Fe, fu());
  }
  if (B(e)) {
    const n = is(e);
    process.env.NODE_ENV !== "production" && !n && e.filter((r) => r !== Hi).length > 0 && O("<Suspense> slots expect a single root node."), e = n;
  }
  return e = We(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)), e;
}
function uu(e, t) {
  t && t.pendingBranch ? B(e) ? t.effects.push(...e) : t.effects.push(e) : er(e);
}
function Jn(e, t) {
  e.activeBranch = t;
  const { vnode: n, parentComponent: r } = e;
  let o = t.el;
  for (; !o && t.component; )
    t = t.component.subTree, o = t.el;
  n.el = o, r && r.subTree === n && (r.vnode.el = o, cs(r, o));
}
function zh(e) {
  const t = e.props && e.props.suspensible;
  return t != null && t !== !1;
}
const Ve = Symbol.for("v-fgt"), kt = Symbol.for("v-txt"), be = Symbol.for("v-cmt"), gn = Symbol.for("v-stc"), Cr = [];
let Fe = null;
function we(e = !1) {
  Cr.push(Fe = e ? null : []);
}
function fu() {
  Cr.pop(), Fe = Cr[Cr.length - 1] || null;
}
let Rn = 1;
function ni(e, t = !1) {
  Rn += e, e < 0 && Fe && t && (Fe.hasOnce = !0);
}
function du(e) {
  return e.dynamicChildren = Rn > 0 ? Fe || xn : null, fu(), Rn > 0 && Fe && Fe.push(e), e;
}
function it(e, t, n, r, o, s) {
  return du(
    pe(
      e,
      t,
      n,
      r,
      o,
      s,
      !0
    )
  );
}
function bt(e, t, n, r, o) {
  return du(
    _e(
      e,
      t,
      n,
      r,
      o,
      !0
    )
  );
}
function Rt(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function _t(e, t) {
  if (process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = ho.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
let ri;
function Wh(e) {
  ri = e;
}
const qh = (...e) => hu(
  ...ri ? ri(e, Oe) : e
), pu = ({ key: e }) => e ?? null, mo = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? de(e) || Ne(e) || Y(e) ? { i: Oe, r: e, k: t, f: !!n } : e : null);
function pe(e, t = null, n = null, r = 0, o = null, s = e === Ve ? 0 : 1, i = !1, c = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && pu(t),
    ref: t && mo(t),
    scopeId: es,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: r,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: Oe
  };
  return c ? (Wi(a, n), s & 128 && e.normalize(a)) : n && (a.shapeFlag |= de(n) ? 8 : 16), process.env.NODE_ENV !== "production" && a.key !== a.key && O("VNode created with invalid key (NaN). VNode type:", a.type), Rn > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Fe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Fe.push(a), a;
}
const _e = process.env.NODE_ENV !== "production" ? qh : hu;
function hu(e, t = null, n = null, r = 0, o = null, s = !1) {
  if ((!e || e === Hi) && (process.env.NODE_ENV !== "production" && !e && O(`Invalid vnode type when creating vnode: ${e}.`), e = be), Rt(e)) {
    const c = dt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Wi(c, n), Rn > 0 && !s && Fe && (c.shapeFlag & 6 ? Fe[Fe.indexOf(e)] = c : Fe.push(c)), c.patchFlag = -2, c;
  }
  if (wu(e) && (e = e.__vccOpts), t) {
    t = gu(t);
    let { class: c, style: a } = t;
    c && !de(c) && (t.class = qe(c)), ce(a) && (Zn(a) && !B(a) && (a = fe({}, a)), t.style = Mt(a));
  }
  const i = de(e) ? 1 : Ao(e) ? 128 : bl(e) ? 64 : ce(e) ? 4 : Y(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && Zn(e) && (e = ee(e), O(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), pe(
    e,
    t,
    n,
    r,
    o,
    i,
    s,
    !0
  );
}
function gu(e) {
  return e ? Zn(e) || Bl(e) ? fe({}, e) : e : null;
}
function dt(e, t, n = !1, r = !1) {
  const { props: o, ref: s, patchFlag: i, children: c, transition: a } = e, f = t ? Pt(o || {}, t) : o, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && pu(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? B(s) ? s.concat(mo(t)) : [s, mo(t)] : mo(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && i === -1 && B(c) ? c.map(_u) : c,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Ve ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: a,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && dt(e.ssContent),
    ssFallback: e.ssFallback && dt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && r && Xt(
    u,
    a.clone(u)
  ), u;
}
function _u(e) {
  const t = dt(e);
  return B(e.children) && (t.children = e.children.map(_u)), t;
}
function Ur(e = " ", t = 0) {
  return _e(kt, null, e, t);
}
function Yh(e, t) {
  const n = _e(gn, null, e);
  return n.staticCount = t, n;
}
function ko(e = "", t = !1) {
  return t ? (we(), bt(be, null, e)) : _e(be, null, e);
}
function We(e) {
  return e == null || typeof e == "boolean" ? _e(be) : B(e) ? _e(
    Ve,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Rt(e) ? un(e) : _e(kt, null, String(e));
}
function un(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : dt(e);
}
function Wi(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (B(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Wi(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !Bl(t) ? t._ctx = Oe : o === 3 && Oe && (Oe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else Y(t) ? (t = { default: t, _ctx: Oe }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Ur(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Pt(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = qe([t.class, r.class]));
      else if (o === "style")
        t.style = Mt([t.style, r.style]);
      else if (Mn(o)) {
        const s = t[o], i = r[o];
        i && s !== i && !(B(s) && s.includes(i)) && (t[o] = s ? [].concat(s, i) : i);
      } else o !== "" && (t[o] = r[o]);
  }
  return t;
}
function Xe(e, t, n, r = null) {
  ut(e, t, 7, [
    n,
    r
  ]);
}
const Xh = Fl();
let Jh = 0;
function mu(e, t, n) {
  const r = e.type, o = (t ? t.appContext : e.appContext) || Xh, s = {
    uid: Jh++,
    vnode: e,
    type: r,
    parent: t,
    appContext: o,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new xi(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(o.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Gl(r, o),
    emitsOptions: cu(r, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: re,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: re,
    data: re,
    props: re,
    attrs: re,
    slots: re,
    refs: re,
    setupState: re,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return process.env.NODE_ENV !== "production" ? s.ctx = Wp(s) : s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = Mh.bind(null, s), e.ce && e.ce(s), s;
}
let Se = null;
const Ye = () => Se || Oe;
let $o, oi;
{
  const e = cr(), t = (n, r) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(r), (s) => {
      o.length > 1 ? o.forEach((i) => i(s)) : o[0](s);
    };
  };
  $o = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Se = n
  ), oi = t(
    "__VUE_SSR_SETTERS__",
    (n) => nr = n
  );
}
const Pn = (e) => {
  const t = Se;
  return $o(e), e.scope.on(), () => {
    e.scope.off(), $o(t);
  };
}, si = () => {
  Se && Se.scope.off(), $o(null);
}, Qh = /* @__PURE__ */ Ue("slot,component");
function ii(e, { isNativeTag: t }) {
  (Qh(e) || t(e)) && O(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function vu(e) {
  return e.vnode.shapeFlag & 4;
}
let nr = !1;
function yu(e, t = !1, n = !1) {
  t && oi(t);
  const { props: r, children: o } = e.vnode, s = vu(e);
  vh(e, r, s, t), Th(e, o, n);
  const i = s ? Zh(e, t) : void 0;
  return t && oi(!1), i;
}
function Zh(e, t) {
  var n;
  const r = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (r.name && ii(r.name, e.appContext.config), r.components) {
      const s = Object.keys(r.components);
      for (let i = 0; i < s.length; i++)
        ii(s[i], e.appContext.config);
    }
    if (r.directives) {
      const s = Object.keys(r.directives);
      for (let i = 0; i < s.length; i++)
        vl(s[i]);
    }
    r.compilerOptions && qi() && O(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Or), process.env.NODE_ENV !== "production" && qp(e);
  const { setup: o } = r;
  if (o) {
    Jt();
    const s = e.setupContext = o.length > 1 ? Eu(e) : null, i = Pn(e), c = Ln(
      o,
      e,
      0,
      [
        process.env.NODE_ENV !== "production" ? mt(e.props) : e.props,
        s
      ]
    ), a = zr(c);
    if (Qt(), i(), (a || e.sp) && !hn(e) && ji(e), a) {
      if (c.then(si, si), t)
        return c.then((f) => {
          ci(e, f, t);
        }).catch((f) => {
          yn(f, e, 0);
        });
      if (e.asyncDep = c, process.env.NODE_ENV !== "production" && !e.suspense) {
        const f = (n = r.name) != null ? n : "Anonymous";
        O(
          `Component <${f}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      ci(e, c, t);
  } else
    bu(e, t);
}
function ci(e, t, n) {
  Y(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ce(t) ? (process.env.NODE_ENV !== "production" && Rt(t) && O(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Ai(t), process.env.NODE_ENV !== "production" && Yp(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && O(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), bu(e, n);
}
let Dr, ai;
function eg(e) {
  Dr = e, ai = (t) => {
    t.render._rc && (t.withProxy = new Proxy(t.ctx, zp));
  };
}
const qi = () => !Dr;
function bu(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && Dr && !r.render) {
      const o = r.template || Gi(e).template;
      if (o) {
        process.env.NODE_ENV !== "production" && Ft(e, "compile");
        const { isCustomElement: s, compilerOptions: i } = e.appContext.config, { delimiters: c, compilerOptions: a } = r, f = fe(
          fe(
            {
              isCustomElement: s,
              delimiters: c
            },
            i
          ),
          a
        );
        r.render = Dr(o, f), process.env.NODE_ENV !== "production" && Ht(e, "compile");
      }
    }
    e.render = r.render || xe, ai && ai(e);
  }
  {
    const o = Pn(e);
    Jt();
    try {
      uh(e);
    } finally {
      Qt(), o();
    }
  }
  process.env.NODE_ENV !== "production" && !r.render && e.render === xe && !t && (!Dr && r.template ? O(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : O("Component is missing template or render function: ", r));
}
const Ac = process.env.NODE_ENV !== "production" ? {
  get(e, t) {
    return Vo(), ke(e, "get", ""), e[t];
  },
  set() {
    return O("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return O("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return ke(e, "get", ""), e[t];
  }
};
function tg(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return ke(e, "get", "$slots"), t[n];
    }
  });
}
function Eu(e) {
  const t = (n) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && O("expose() should be called only once per setup()."), n != null)) {
      let r = typeof n;
      r === "object" && (B(n) ? r = "array" : Ne(n) && (r = "ref")), r !== "object" && O(
        `expose() should be passed a plain object, received ${r}.`
      );
    }
    e.exposed = n || {};
  };
  if (process.env.NODE_ENV !== "production") {
    let n, r;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Ac));
      },
      get slots() {
        return r || (r = tg(e));
      },
      get emit() {
        return (o, ...s) => e.emit(o, ...s);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, Ac),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function Qr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ai(il(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Vn)
        return Vn[n](e);
    },
    has(t, n) {
      return n in t || n in Vn;
    }
  })) : e.proxy;
}
const ng = /(?:^|[-_])(\w)/g, rg = (e) => e.replace(ng, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Br(e, t = !0) {
  return Y(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function as(e, t, n = !1) {
  let r = Br(t);
  if (!r && t.__file) {
    const o = t.__file.match(/([^/\\]+)\.\w+$/);
    o && (r = o[1]);
  }
  if (!r && e && e.parent) {
    const o = (s) => {
      for (const i in s)
        if (s[i] === t)
          return i;
    };
    r = o(
      e.components || e.parent.type.components
    ) || o(e.appContext.components);
  }
  return r ? rg(r) : n ? "App" : "Anonymous";
}
function wu(e) {
  return Y(e) && "__vccOpts" in e;
}
const Me = (e, t) => {
  const n = Gd(e, t, nr);
  if (process.env.NODE_ENV !== "production") {
    const r = Ye();
    r && r.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function ls(e, t, n) {
  const r = arguments.length;
  return r === 2 ? ce(t) && !B(t) ? Rt(t) ? _e(e, null, [t]) : _e(e, t) : _e(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Rt(n) && (n = [n]), _e(e, t, n));
}
function Nu() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, r = { style: "color:#eb2f96" }, o = {
    __vue_custom_formatter: !0,
    header(l) {
      return ce(l) ? l.__isVue ? ["div", e, "VueInstance"] : Ne(l) ? [
        "div",
        {},
        ["span", e, u(l)],
        "<",
        // avoid debugger accessing value affecting behavior
        c("_value" in l ? l._value : l),
        ">"
      ] : At(l) ? [
        "div",
        {},
        ["span", e, He(l) ? "ShallowReactive" : "Reactive"],
        "<",
        c(l),
        `>${$t(l) ? " (readonly)" : ""}`
      ] : $t(l) ? [
        "div",
        {},
        ["span", e, He(l) ? "ShallowReadonly" : "Readonly"],
        "<",
        c(l),
        ">"
      ] : null : null;
    },
    hasBody(l) {
      return l && l.__isVue;
    },
    body(l) {
      if (l && l.__isVue)
        return [
          "div",
          {},
          ...s(l.$)
        ];
    }
  };
  function s(l) {
    const d = [];
    l.type.props && l.props && d.push(i("props", ee(l.props))), l.setupState !== re && d.push(i("setup", l.setupState)), l.data !== re && d.push(i("data", ee(l.data)));
    const h = a(l, "computed");
    h && d.push(i("computed", h));
    const m = a(l, "inject");
    return m && d.push(i("injected", m)), d.push([
      "div",
      {},
      [
        "span",
        {
          style: r.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: l }]
    ]), d;
  }
  function i(l, d) {
    return d = fe({}, d), Object.keys(d).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        l
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(d).map((h) => [
          "div",
          {},
          ["span", r, h + ": "],
          c(d[h], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(l, d = !0) {
    return typeof l == "number" ? ["span", t, l] : typeof l == "string" ? ["span", n, JSON.stringify(l)] : typeof l == "boolean" ? ["span", r, l] : ce(l) ? ["object", { object: d ? ee(l) : l }] : ["span", n, String(l)];
  }
  function a(l, d) {
    const h = l.type;
    if (Y(h))
      return;
    const m = {};
    for (const y in l.ctx)
      f(h, y, d) && (m[y] = l.ctx[y]);
    return m;
  }
  function f(l, d, h) {
    const m = l[h];
    if (B(m) && m.includes(d) || ce(m) && d in m || l.extends && f(l.extends, d, h) || l.mixins && l.mixins.some((y) => f(y, d, h)))
      return !0;
  }
  function u(l) {
    return He(l) ? "ShallowRef" : l.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
function og(e, t, n, r) {
  const o = n[r];
  if (o && Ou(o, e))
    return o;
  const s = t();
  return s.memo = e.slice(), s.cacheIndex = r, n[r] = s;
}
function Ou(e, t) {
  const n = e.memo;
  if (n.length != t.length)
    return !1;
  for (let r = 0; r < n.length; r++)
    if (Le(n[r], t[r]))
      return !1;
  return Rn > 0 && Fe && Fe.push(e), !0;
}
const li = "3.5.13", Te = process.env.NODE_ENV !== "production" ? O : xe, sg = Qo, ig = (process.env.NODE_ENV, gt), cg = (process.env.NODE_ENV, Ri), ag = {
  createComponentInstance: mu,
  setupComponent: yu,
  renderComponentRoot: _o,
  setCurrentRenderingInstance: Lr,
  isVNode: Rt,
  normalizeVNode: We,
  getComponentPublicInstance: Qr,
  ensureValidVNode: Bi,
  pushWarningContext: qn,
  popWarningContext: Yn
}, lg = ag, ug = null, fg = null, dg = null;
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ui;
const kc = typeof window < "u" && window.trustedTypes;
if (kc)
  try {
    ui = /* @__PURE__ */ kc.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    process.env.NODE_ENV !== "production" && Te(`Error creating trusted types policy: ${e}`);
  }
const xu = ui ? (e) => ui.createHTML(e) : (e) => e, pg = "http://www.w3.org/2000/svg", hg = "http://www.w3.org/1998/Math/MathML", Ut = typeof document < "u" ? document : null, $c = Ut && /* @__PURE__ */ Ut.createElement("template"), gg = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const o = t === "svg" ? Ut.createElementNS(pg, e) : t === "mathml" ? Ut.createElementNS(hg, e) : n ? Ut.createElement(e, { is: n }) : Ut.createElement(e);
    return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
  },
  createText: (e) => Ut.createTextNode(e),
  createComment: (e) => Ut.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ut.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, o, s) {
    const i = n ? n.previousSibling : t.lastChild;
    if (o && (o === s || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), n), !(o === s || !(o = o.nextSibling)); )
        ;
    else {
      $c.innerHTML = xu(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const c = $c.content;
      if (r === "svg" || r === "mathml") {
        const a = c.firstChild;
        for (; a.firstChild; )
          c.appendChild(a.firstChild);
        c.removeChild(a);
      }
      t.insertBefore(c, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, rn = "transition", pr = "animation", rr = Symbol("_vtc"), Su = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, Cu = /* @__PURE__ */ fe(
  {},
  Li,
  Su
), _g = (e) => (e.displayName = "Transition", e.props = Cu, e), mg = /* @__PURE__ */ _g(
  (e, { slots: t }) => ls(xl, Du(e), t)
), Nn = (e, t = []) => {
  B(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Rc = (e) => e ? B(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Du(e) {
  const t = {};
  for (const k in e)
    k in Su || (t[k] = e[k]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: r,
    duration: o,
    enterFromClass: s = `${n}-enter-from`,
    enterActiveClass: i = `${n}-enter-active`,
    enterToClass: c = `${n}-enter-to`,
    appearFromClass: a = s,
    appearActiveClass: f = i,
    appearToClass: u = c,
    leaveFromClass: l = `${n}-leave-from`,
    leaveActiveClass: d = `${n}-leave-active`,
    leaveToClass: h = `${n}-leave-to`
  } = e, m = vg(o), y = m && m[0], M = m && m[1], {
    onBeforeEnter: V,
    onEnter: E,
    onEnterCancelled: g,
    onLeave: b,
    onLeaveCancelled: v,
    onBeforeAppear: x = V,
    onAppear: R = E,
    onAppearCancelled: U = g
  } = t, C = (k, z, oe, ne) => {
    k._enterCancelled = ne, sn(k, z ? u : c), sn(k, z ? f : i), oe && oe();
  }, A = (k, z) => {
    k._isLeaving = !1, sn(k, l), sn(k, h), sn(k, d), z && z();
  }, K = (k) => (z, oe) => {
    const ne = k ? R : E, W = () => C(z, k, oe);
    Nn(ne, [z, W]), Pc(() => {
      sn(z, k ? a : s), xt(z, k ? u : c), Rc(ne) || Mc(z, r, y, W);
    });
  };
  return fe(t, {
    onBeforeEnter(k) {
      Nn(V, [k]), xt(k, s), xt(k, i);
    },
    onBeforeAppear(k) {
      Nn(x, [k]), xt(k, a), xt(k, f);
    },
    onEnter: K(!1),
    onAppear: K(!0),
    onLeave(k, z) {
      k._isLeaving = !0;
      const oe = () => A(k, z);
      xt(k, l), k._enterCancelled ? (xt(k, d), fi()) : (fi(), xt(k, d)), Pc(() => {
        k._isLeaving && (sn(k, l), xt(k, h), Rc(b) || Mc(k, r, M, oe));
      }), Nn(b, [k, oe]);
    },
    onEnterCancelled(k) {
      C(k, !1, void 0, !0), Nn(g, [k]);
    },
    onAppearCancelled(k) {
      C(k, !0, void 0, !0), Nn(U, [k]);
    },
    onLeaveCancelled(k) {
      A(k), Nn(v, [k]);
    }
  });
}
function vg(e) {
  if (e == null)
    return null;
  if (ce(e))
    return [Cs(e.enter), Cs(e.leave)];
  {
    const t = Cs(e);
    return [t, t];
  }
}
function Cs(e) {
  const t = $r(e);
  return process.env.NODE_ENV !== "production" && ki(t, "<transition> explicit duration"), t;
}
function xt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[rr] || (e[rr] = /* @__PURE__ */ new Set())).add(t);
}
function sn(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[rr];
  n && (n.delete(t), n.size || (e[rr] = void 0));
}
function Pc(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let yg = 0;
function Mc(e, t, n, r) {
  const o = e._endId = ++yg, s = () => {
    o === e._endId && r();
  };
  if (n != null)
    return setTimeout(s, n);
  const { type: i, timeout: c, propCount: a } = Tu(e, t);
  if (!i)
    return r();
  const f = i + "end";
  let u = 0;
  const l = () => {
    e.removeEventListener(f, d), s();
  }, d = (h) => {
    h.target === e && ++u >= a && l();
  };
  setTimeout(() => {
    u < a && l();
  }, c + 1), e.addEventListener(f, d);
}
function Tu(e, t) {
  const n = window.getComputedStyle(e), r = (m) => (n[m] || "").split(", "), o = r(`${rn}Delay`), s = r(`${rn}Duration`), i = Ic(o, s), c = r(`${pr}Delay`), a = r(`${pr}Duration`), f = Ic(c, a);
  let u = null, l = 0, d = 0;
  t === rn ? i > 0 && (u = rn, l = i, d = s.length) : t === pr ? f > 0 && (u = pr, l = f, d = a.length) : (l = Math.max(i, f), u = l > 0 ? i > f ? rn : pr : null, d = u ? u === rn ? s.length : a.length : 0);
  const h = u === rn && /\b(transform|all)(,|$)/.test(
    r(`${rn}Property`).toString()
  );
  return {
    type: u,
    timeout: l,
    propCount: d,
    hasTransform: h
  };
}
function Ic(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, r) => Lc(n) + Lc(e[r])));
}
function Lc(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function fi() {
  return document.body.offsetHeight;
}
function bg(e, t, n) {
  const r = e[rr];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ro = Symbol("_vod"), Vu = Symbol("_vsh"), Yi = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[Ro] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : hr(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), hr(e, !0), r.enter(e)) : r.leave(e, () => {
      hr(e, !1);
    }) : hr(e, t));
  },
  beforeUnmount(e, { value: t }) {
    hr(e, t);
  }
};
process.env.NODE_ENV !== "production" && (Yi.name = "show");
function hr(e, t) {
  e.style.display = t ? e[Ro] : "none", e[Vu] = !t;
}
function Eg() {
  Yi.getSSRProps = ({ value: e }) => {
    if (!e)
      return { style: { display: "none" } };
  };
}
const Au = Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : "");
function wg(e) {
  const t = Ye();
  if (!t) {
    process.env.NODE_ENV !== "production" && Te("useCssVars is called without current active component instance.");
    return;
  }
  const n = t.ut = (o = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((s) => Po(s, o));
  };
  process.env.NODE_ENV !== "production" && (t.getCssVars = () => e(t.proxy));
  const r = () => {
    const o = e(t.proxy);
    t.ce ? Po(t.ce, o) : di(t.subTree, o), n(o);
  };
  Fi(() => {
    er(r);
  }), lr(() => {
    $e(r, xe, { flush: "post" });
    const o = new MutationObserver(r);
    o.observe(t.subTree.el.parentNode, { childList: !0 }), Xr(() => o.disconnect());
  });
}
function di(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      di(n.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    Po(e.el, t);
  else if (e.type === Ve)
    e.children.forEach((n) => di(n, t));
  else if (e.type === gn) {
    let { el: n, anchor: r } = e;
    for (; n && (Po(n, t), n !== r); )
      n = n.nextSibling;
  }
}
function Po(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    let r = "";
    for (const o in t)
      n.setProperty(`--${o}`, t[o]), r += `--${o}: ${t[o]};`;
    n[Au] = r;
  }
}
const Ng = /(^|;)\s*display\s*:/;
function Og(e, t, n) {
  const r = e.style, o = de(n);
  let s = !1;
  if (n && !o) {
    if (t)
      if (de(t))
        for (const i of t.split(";")) {
          const c = i.slice(0, i.indexOf(":")).trim();
          n[c] == null && vo(r, c, "");
        }
      else
        for (const i in t)
          n[i] == null && vo(r, i, "");
    for (const i in n)
      i === "display" && (s = !0), vo(r, i, n[i]);
  } else if (o) {
    if (t !== n) {
      const i = r[Au];
      i && (n += ";" + i), r.cssText = n, s = Ng.test(n);
    }
  } else t && e.removeAttribute("style");
  Ro in e && (e[Ro] = s ? r.display : "", e[Vu] && (r.display = "none"));
}
const xg = /[^\\];\s*$/, jc = /\s*!important$/;
function vo(e, t, n) {
  if (B(n))
    n.forEach((r) => vo(e, t, r));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && xg.test(n) && Te(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = Sg(e, t);
    jc.test(n) ? e.setProperty(
      Pe(r),
      n.replace(jc, ""),
      "important"
    ) : e[r] = n;
  }
}
const Fc = ["Webkit", "Moz", "ms"], Ds = {};
function Sg(e, t) {
  const n = Ds[t];
  if (n)
    return n;
  let r = De(t);
  if (r !== "filter" && r in e)
    return Ds[t] = r;
  r = qt(r);
  for (let o = 0; o < Fc.length; o++) {
    const s = Fc[o] + r;
    if (s in e)
      return Ds[t] = s;
  }
  return t;
}
const Hc = "http://www.w3.org/1999/xlink";
function Uc(e, t, n, r, o, s = Pa(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Hc, t.slice(6, t.length)) : e.setAttributeNS(Hc, t, n) : n == null || s && !zo(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : at(n) ? String(n) : n
  );
}
function Bc(e, t, n, r, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? xu(n) : n);
    return;
  }
  const s = e.tagName;
  if (t === "value" && s !== "PROGRESS" && // custom elements may use _value internally
  !s.includes("-")) {
    const c = s === "OPTION" ? e.getAttribute("value") || "" : e.value, a = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (c !== a || !("_value" in e)) && (e.value = a), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const c = typeof e[t];
    c === "boolean" ? n = zo(n) : n == null && c === "string" ? (n = "", i = !0) : c === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch (c) {
    process.env.NODE_ENV !== "production" && !i && Te(
      `Failed setting prop "${t}" on <${s.toLowerCase()}>: value ${n} is invalid.`,
      c
    );
  }
  i && e.removeAttribute(o || t);
}
function zt(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Cg(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Kc = Symbol("_vei");
function Dg(e, t, n, r, o = null) {
  const s = e[Kc] || (e[Kc] = {}), i = s[t];
  if (r && i)
    i.value = process.env.NODE_ENV !== "production" ? zc(r, t) : r;
  else {
    const [c, a] = Tg(t);
    if (r) {
      const f = s[t] = kg(
        process.env.NODE_ENV !== "production" ? zc(r, t) : r,
        o
      );
      zt(e, c, f, a);
    } else i && (Cg(e, c, i, a), s[t] = void 0);
  }
}
const Gc = /(?:Once|Passive|Capture)$/;
function Tg(e) {
  let t;
  if (Gc.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Gc); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Pe(e.slice(2)), t];
}
let Ts = 0;
const Vg = /* @__PURE__ */ Promise.resolve(), Ag = () => Ts || (Vg.then(() => Ts = 0), Ts = Date.now());
function kg(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    ut(
      $g(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = Ag(), n;
}
function zc(e, t) {
  return Y(e) || B(e) ? e : (Te(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), xe);
}
function $g(e, t) {
  if (B(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (r) => (o) => !o._stopped && r && r(o)
    );
  } else
    return t;
}
const Wc = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Rg = (e, t, n, r, o, s) => {
  const i = o === "svg";
  t === "class" ? bg(e, r, i) : t === "style" ? Og(e, n, r) : Mn(t) ? Ar(t) || Dg(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Pg(e, t, r, i)) ? (Bc(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Uc(e, t, r, i, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !de(r)) ? Bc(e, De(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Uc(e, t, r, i));
};
function Pg(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Wc(t) && Y(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return Wc(t) && de(n) ? !1 : t in e;
}
const qc = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ku(e, t, n) {
  const r = /* @__PURE__ */ Re(e, t);
  Wr(r) && fe(r, t);
  class o extends us {
    constructor(i) {
      super(r, i, n);
    }
  }
  return o.def = r, o;
}
/*! #__NO_SIDE_EFFECTS__ */
const Mg = /* @__NO_SIDE_EFFECTS__ */ (e, t) => /* @__PURE__ */ ku(e, t, Bu), Ig = typeof HTMLElement < "u" ? HTMLElement : class {
};
class us extends Ig {
  constructor(t, n = {}, r = Lo) {
    super(), this._def = t, this._props = n, this._createApp = r, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && r !== Lo ? this._root = this.shadowRoot : (process.env.NODE_ENV !== "production" && this.shadowRoot && Te(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), t.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this), this._def.__asyncLoader || this._resolveProps(this._def);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    this.shadowRoot || this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof us) {
        this._parent = t;
        break;
      }
    this._instance || (this._resolved ? (this._setParent(), this._update()) : t && t._pendingResolve ? this._pendingResolve = t._pendingResolve.then(() => {
      this._pendingResolve = void 0, this._resolveDef();
    }) : this._resolveDef());
  }
  _setParent(t = this._parent) {
    t && (this._instance.parent = t._instance, this._instance.provides = t._instance.provides);
  }
  disconnectedCallback() {
    this._connected = !1, jn(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve)
      return;
    for (let r = 0; r < this.attributes.length; r++)
      this._setAttr(this.attributes[r].name);
    this._ob = new MutationObserver((r) => {
      for (const o of r)
        this._setAttr(o.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const t = (r, o = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: s, styles: i } = r;
      let c;
      if (s && !B(s))
        for (const a in s) {
          const f = s[a];
          (f === Number || f && f.type === Number) && (a in this._props && (this._props[a] = $r(this._props[a])), (c || (c = /* @__PURE__ */ Object.create(null)))[De(a)] = !0);
        }
      this._numberProps = c, o && this._resolveProps(r), this.shadowRoot ? this._applyStyles(i) : process.env.NODE_ENV !== "production" && i && Te(
        "Custom element style injection is not supported when using shadowRoot: false"
      ), this._mount(r);
    }, n = this._def.__asyncLoader;
    n ? this._pendingResolve = n().then(
      (r) => t(this._def = r, !0)
    ) : t(this._def);
  }
  _mount(t) {
    process.env.NODE_ENV !== "production" && !t.name && (t.name = "VueElement"), this._app = this._createApp(t), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const n = this._instance && this._instance.exposed;
    if (n)
      for (const r in n)
        le(this, r) ? process.env.NODE_ENV !== "production" && Te(`Exposed property "${r}" already exists on custom element.`) : Object.defineProperty(this, r, {
          // unwrap ref to be consistent with public instance behavior
          get: () => Vt(n[r])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, r = B(n) ? n : Object.keys(n || {});
    for (const o of Object.keys(this))
      o[0] !== "_" && r.includes(o) && this._setProp(o, this[o]);
    for (const o of r.map(De))
      Object.defineProperty(this, o, {
        get() {
          return this._getProp(o);
        },
        set(s) {
          this._setProp(o, s, !0, !0);
        }
      });
  }
  _setAttr(t) {
    if (t.startsWith("data-v-")) return;
    const n = this.hasAttribute(t);
    let r = n ? this.getAttribute(t) : qc;
    const o = De(t);
    n && this._numberProps && this._numberProps[o] && (r = $r(r)), this._setProp(o, r, !1, !0);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, n, r = !0, o = !1) {
    if (n !== this._props[t] && (n === qc ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), o && this._instance && this._update(), r)) {
      const s = this._ob;
      s && s.disconnect(), n === !0 ? this.setAttribute(Pe(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(Pe(t), n + "") : n || this.removeAttribute(Pe(t)), s && s.observe(this, { attributes: !0 });
    }
  }
  _update() {
    Uu(this._createVNode(), this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = _e(this._def, fe(t, this._props));
    return this._instance || (n.ce = (r) => {
      this._instance = r, r.ce = this, r.isCE = !0, process.env.NODE_ENV !== "production" && (r.ceReload = (s) => {
        this._styles && (this._styles.forEach((i) => this._root.removeChild(i)), this._styles.length = 0), this._applyStyles(s), this._instance = null, this._update();
      });
      const o = (s, i) => {
        this.dispatchEvent(
          new CustomEvent(
            s,
            Wr(i[0]) ? fe({ detail: i }, i[0]) : { detail: i }
          )
        );
      };
      r.emit = (s, ...i) => {
        o(s, i), Pe(s) !== s && o(Pe(s), i);
      }, this._setParent();
    }), n;
  }
  _applyStyles(t, n) {
    if (!t) return;
    if (n) {
      if (n === this._def || this._styleChildren.has(n))
        return;
      this._styleChildren.add(n);
    }
    const r = this._nonce;
    for (let o = t.length - 1; o >= 0; o--) {
      const s = document.createElement("style");
      if (r && s.setAttribute("nonce", r), s.textContent = t[o], this.shadowRoot.prepend(s), process.env.NODE_ENV !== "production")
        if (n) {
          if (n.__hmrId) {
            this._childStyles || (this._childStyles = /* @__PURE__ */ new Map());
            let i = this._childStyles.get(n.__hmrId);
            i || this._childStyles.set(n.__hmrId, i = []), i.push(s);
          }
        } else
          (this._styles || (this._styles = [])).push(s);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const t = this._slots = {};
    let n;
    for (; n = this.firstChild; ) {
      const r = n.nodeType === 1 && n.getAttribute("slot") || "default";
      (t[r] || (t[r] = [])).push(n), this.removeChild(n);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const t = (this._teleportTarget || this).querySelectorAll("slot"), n = this._instance.type.__scopeId;
    for (let r = 0; r < t.length; r++) {
      const o = t[r], s = o.getAttribute("name") || "default", i = this._slots[s], c = o.parentNode;
      if (i)
        for (const a of i) {
          if (n && a.nodeType === 1) {
            const f = n + "-s", u = document.createTreeWalker(a, 1);
            a.setAttribute(f, "");
            let l;
            for (; l = u.nextNode(); )
              l.setAttribute(f, "");
          }
          c.insertBefore(a, o);
        }
      else
        for (; o.firstChild; ) c.insertBefore(o.firstChild, o);
      c.removeChild(o);
    }
  }
  /**
   * @internal
   */
  _injectChildStyle(t) {
    this._applyStyles(t.styles, t);
  }
  /**
   * @internal
   */
  _removeChildStyle(t) {
    if (process.env.NODE_ENV !== "production" && (this._styleChildren.delete(t), this._childStyles && t.__hmrId)) {
      const n = this._childStyles.get(t.__hmrId);
      n && (n.forEach((r) => this._root.removeChild(r)), n.length = 0);
    }
  }
}
function pi(e) {
  const t = Ye(), n = t && t.ce;
  return n || (process.env.NODE_ENV !== "production" && Te(
    t ? `${e || "useHost"} can only be used in components defined via defineCustomElement.` : `${e || "useHost"} called without an active component instance.`
  ), null);
}
function Lg() {
  const e = process.env.NODE_ENV !== "production" ? pi("useShadowRoot") : pi();
  return e && e.shadowRoot;
}
function jg(e = "$style") {
  {
    const t = Ye();
    if (!t)
      return process.env.NODE_ENV !== "production" && Te("useCssModule must be called inside setup()"), re;
    const n = t.type.__cssModules;
    if (!n)
      return process.env.NODE_ENV !== "production" && Te("Current instance does not have CSS modules injected."), re;
    const r = n[e];
    return r || (process.env.NODE_ENV !== "production" && Te(`Current instance does not have CSS module named "${e}".`), re);
  }
}
const $u = /* @__PURE__ */ new WeakMap(), Ru = /* @__PURE__ */ new WeakMap(), Mo = Symbol("_moveCb"), Yc = Symbol("_enterCb"), Fg = (e) => (delete e.props.mode, e), Hg = /* @__PURE__ */ Fg({
  name: "TransitionGroup",
  props: /* @__PURE__ */ fe({}, Cu, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = Ye(), r = Ii();
    let o, s;
    return rs(() => {
      if (!o.length)
        return;
      const i = e.moveClass || `${e.name || "v"}-move`;
      if (!zg(
        o[0].el,
        n.vnode.el,
        i
      ))
        return;
      o.forEach(Bg), o.forEach(Kg);
      const c = o.filter(Gg);
      fi(), c.forEach((a) => {
        const f = a.el, u = f.style;
        xt(f, i), u.transform = u.webkitTransform = u.transitionDuration = "";
        const l = f[Mo] = (d) => {
          d && d.target !== f || (!d || /transform$/.test(d.propertyName)) && (f.removeEventListener("transitionend", l), f[Mo] = null, sn(f, i));
        };
        f.addEventListener("transitionend", l);
      });
    }), () => {
      const i = ee(e), c = Du(i);
      let a = i.tag || Ve;
      if (o = [], s)
        for (let f = 0; f < s.length; f++) {
          const u = s[f];
          u.el && u.el instanceof Element && (o.push(u), Xt(
            u,
            tr(
              u,
              c,
              r,
              n
            )
          ), $u.set(
            u,
            u.el.getBoundingClientRect()
          ));
        }
      s = t.default ? ts(t.default()) : [];
      for (let f = 0; f < s.length; f++) {
        const u = s[f];
        u.key != null ? Xt(
          u,
          tr(u, c, r, n)
        ) : process.env.NODE_ENV !== "production" && u.type !== kt && Te("<TransitionGroup> children must be keyed.");
      }
      return _e(a, null, s);
    };
  }
}), Ug = Hg;
function Bg(e) {
  const t = e.el;
  t[Mo] && t[Mo](), t[Yc] && t[Yc]();
}
function Kg(e) {
  Ru.set(e, e.el.getBoundingClientRect());
}
function Gg(e) {
  const t = $u.get(e), n = Ru.get(e), r = t.left - n.left, o = t.top - n.top;
  if (r || o) {
    const s = e.el.style;
    return s.transform = s.webkitTransform = `translate(${r}px,${o}px)`, s.transitionDuration = "0s", e;
  }
}
function zg(e, t, n) {
  const r = e.cloneNode(), o = e[rr];
  o && o.forEach((c) => {
    c.split(/\s+/).forEach((a) => a && r.classList.remove(a));
  }), n.split(/\s+/).forEach((c) => c && r.classList.add(c)), r.style.display = "none";
  const s = t.nodeType === 1 ? t : t.parentNode;
  s.appendChild(r);
  const { hasTransform: i } = Tu(r);
  return s.removeChild(r), i;
}
const _n = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return B(t) ? (n) => Kt(t, n) : t;
};
function Wg(e) {
  e.target.composing = !0;
}
function Xc(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const ct = Symbol("_assign"), Kr = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, o) {
    e[ct] = _n(o);
    const s = r || o.props && o.props.type === "number";
    zt(e, t ? "change" : "input", (i) => {
      if (i.target.composing) return;
      let c = e.value;
      n && (c = c.trim()), s && (c = kr(c)), e[ct](c);
    }), n && zt(e, "change", () => {
      e.value = e.value.trim();
    }), t || (zt(e, "compositionstart", Wg), zt(e, "compositionend", Xc), zt(e, "change", Xc));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: o, number: s } }, i) {
    if (e[ct] = _n(i), e.composing) return;
    const c = (s || e.type === "number") && !/^0\d/.test(e.value) ? kr(e.value) : e.value, a = t ?? "";
    c !== a && (document.activeElement === e && e.type !== "range" && (r && t === n || o && e.value.trim() === a) || (e.value = a));
  }
}, fs = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[ct] = _n(n), zt(e, "change", () => {
      const r = e._modelValue, o = or(e), s = e.checked, i = e[ct];
      if (B(r)) {
        const c = qr(r, o), a = c !== -1;
        if (s && !a)
          i(r.concat(o));
        else if (!s && a) {
          const f = [...r];
          f.splice(c, 1), i(f);
        }
      } else if (vn(r)) {
        const c = new Set(r);
        s ? c.add(o) : c.delete(o), i(c);
      } else
        i(Mu(e, s));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Jc,
  beforeUpdate(e, t, n) {
    e[ct] = _n(n), Jc(e, t, n);
  }
};
function Jc(e, { value: t, oldValue: n }, r) {
  e._modelValue = t;
  let o;
  if (B(t))
    o = qr(t, r.props.value) > -1;
  else if (vn(t))
    o = t.has(r.props.value);
  else {
    if (t === n) return;
    o = Yt(t, Mu(e, !0));
  }
  e.checked !== o && (e.checked = o);
}
const Xi = {
  created(e, { value: t }, n) {
    e.checked = Yt(t, n.props.value), e[ct] = _n(n), zt(e, "change", () => {
      e[ct](or(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, r) {
    e[ct] = _n(r), t !== n && (e.checked = Yt(t, r.props.value));
  }
}, Pu = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, r) {
    const o = vn(t);
    zt(e, "change", () => {
      const s = Array.prototype.filter.call(e.options, (i) => i.selected).map(
        (i) => n ? kr(or(i)) : or(i)
      );
      e[ct](
        e.multiple ? o ? new Set(s) : s : s[0]
      ), e._assigning = !0, jn(() => {
        e._assigning = !1;
      });
    }), e[ct] = _n(r);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Qc(e, t);
  },
  beforeUpdate(e, t, n) {
    e[ct] = _n(n);
  },
  updated(e, { value: t }) {
    e._assigning || Qc(e, t);
  }
};
function Qc(e, t) {
  const n = e.multiple, r = B(t);
  if (n && !r && !vn(t)) {
    process.env.NODE_ENV !== "production" && Te(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let o = 0, s = e.options.length; o < s; o++) {
    const i = e.options[o], c = or(i);
    if (n)
      if (r) {
        const a = typeof c;
        a === "string" || a === "number" ? i.selected = t.some((f) => String(f) === String(c)) : i.selected = qr(t, c) > -1;
      } else
        i.selected = t.has(c);
    else if (Yt(or(i), t)) {
      e.selectedIndex !== o && (e.selectedIndex = o);
      return;
    }
  }
  !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function or(e) {
  return "_value" in e ? e._value : e.value;
}
function Mu(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const Iu = {
  created(e, t, n) {
    ao(e, t, n, null, "created");
  },
  mounted(e, t, n) {
    ao(e, t, n, null, "mounted");
  },
  beforeUpdate(e, t, n, r) {
    ao(e, t, n, r, "beforeUpdate");
  },
  updated(e, t, n, r) {
    ao(e, t, n, r, "updated");
  }
};
function Lu(e, t) {
  switch (e) {
    case "SELECT":
      return Pu;
    case "TEXTAREA":
      return Kr;
    default:
      switch (t) {
        case "checkbox":
          return fs;
        case "radio":
          return Xi;
        default:
          return Kr;
      }
  }
}
function ao(e, t, n, r, o) {
  const i = Lu(
    e.tagName,
    n.props && n.props.type
  )[o];
  i && i(e, t, n, r);
}
function qg() {
  Kr.getSSRProps = ({ value: e }) => ({ value: e }), Xi.getSSRProps = ({ value: e }, t) => {
    if (t.props && Yt(t.props.value, e))
      return { checked: !0 };
  }, fs.getSSRProps = ({ value: e }, t) => {
    if (B(e)) {
      if (t.props && qr(e, t.props.value) > -1)
        return { checked: !0 };
    } else if (vn(e)) {
      if (t.props && e.has(t.props.value))
        return { checked: !0 };
    } else if (e)
      return { checked: !0 };
  }, Iu.getSSRProps = (e, t) => {
    if (typeof t.type != "string")
      return;
    const n = Lu(
      // resolveDynamicModel expects an uppercase tag name, but vnode.type is lowercase
      t.type.toUpperCase(),
      t.props && t.props.type
    );
    if (n.getSSRProps)
      return n.getSSRProps(e, t);
  };
}
const Yg = ["ctrl", "shift", "alt", "meta"], Xg = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => Yg.some((n) => e[`${n}Key`] && !t.includes(n))
}, Io = (e, t) => {
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = (o, ...s) => {
    for (let i = 0; i < t.length; i++) {
      const c = Xg[t[i]];
      if (c && c(o, t)) return;
    }
    return e(o, ...s);
  });
}, Jg = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Qg = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), r = t.join(".");
  return n[r] || (n[r] = (o) => {
    if (!("key" in o))
      return;
    const s = Pe(o.key);
    if (t.some(
      (i) => i === s || Jg[i] === s
    ))
      return e(o);
  });
}, ju = /* @__PURE__ */ fe({ patchProp: Rg }, gg);
let Tr, Zc = !1;
function Fu() {
  return Tr || (Tr = Xl(ju));
}
function Hu() {
  return Tr = Zc ? Tr : Jl(ju), Zc = !0, Tr;
}
const Uu = (...e) => {
  Fu().render(...e);
}, Zg = (...e) => {
  Hu().hydrate(...e);
}, Lo = (...e) => {
  const t = Fu().createApp(...e);
  process.env.NODE_ENV !== "production" && (Gu(t), zu(t));
  const { mount: n } = t;
  return t.mount = (r) => {
    const o = Wu(r);
    if (!o) return;
    const s = t._component;
    !Y(s) && !s.render && !s.template && (s.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const i = n(o, !1, Ku(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i;
  }, t;
}, Bu = (...e) => {
  const t = Hu().createApp(...e);
  process.env.NODE_ENV !== "production" && (Gu(t), zu(t));
  const { mount: n } = t;
  return t.mount = (r) => {
    const o = Wu(r);
    if (o)
      return n(o, !0, Ku(o));
  }, t;
};
function Ku(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Gu(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Aa(t) || ka(t) || $a(t),
    writable: !1
  });
}
function zu(e) {
  if (qi()) {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        Te(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, r = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return Te(r), n;
      },
      set() {
        Te(r);
      }
    });
  }
}
function Wu(e) {
  if (de(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && Te(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && Te(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
let ea = !1;
const e_ = () => {
  ea || (ea = !0, qg(), Eg());
}, Ly = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BaseTransition: xl,
  BaseTransitionPropsValidators: Li,
  Comment: be,
  DeprecationTypes: dg,
  EffectScope: xi,
  ErrorCodes: ep,
  ErrorTypeStrings: sg,
  Fragment: Ve,
  KeepAlive: jp,
  ReactiveEffect: Rr,
  Static: gn,
  Suspense: Hh,
  Teleport: yp,
  Text: kt,
  TrackOpTypes: zd,
  Transition: mg,
  TransitionGroup: Ug,
  TriggerOpTypes: Wd,
  VueElement: us,
  assertNumber: ki,
  callWithAsyncErrorHandling: ut,
  callWithErrorHandling: Ln,
  camelize: De,
  capitalize: qt,
  cloneVNode: dt,
  compatUtils: fg,
  computed: Me,
  createApp: Lo,
  createBlock: bt,
  createCommentVNode: ko,
  createElementBlock: it,
  createElementVNode: pe,
  createHydrationRenderer: Jl,
  createPropsRestProxy: ch,
  createRenderer: Xl,
  createSSRApp: Bu,
  createSlots: Kp,
  createStaticVNode: Yh,
  createTextVNode: Ur,
  createVNode: _e,
  customRef: al,
  defineAsyncComponent: Ip,
  defineComponent: Re,
  defineCustomElement: ku,
  defineEmits: Jp,
  defineExpose: Qp,
  defineModel: th,
  defineOptions: Zp,
  defineProps: Xp,
  defineSSRCustomElement: Mg,
  defineSlots: eh,
  devtools: ig,
  effect: gd,
  effectScope: Ba,
  getCurrentInstance: Ye,
  getCurrentScope: Ka,
  getCurrentWatcher: qd,
  getTransitionRawChildren: ts,
  guardReactiveProps: gu,
  h: ls,
  handleError: yn,
  hasInjectionContext: mh,
  hydrate: Zg,
  hydrateOnIdle: Ap,
  hydrateOnInteraction: Pp,
  hydrateOnMediaQuery: Rp,
  hydrateOnVisible: $p,
  initCustomFormatter: Nu,
  initDirectivesForSSR: e_,
  inject: Je,
  isMemoSame: Ou,
  isProxy: Zn,
  isReactive: At,
  isReadonly: $t,
  isRef: Ne,
  isRuntimeOnly: qi,
  isShallow: He,
  isVNode: Rt,
  markRaw: il,
  mergeDefaults: sh,
  mergeModels: ih,
  mergeProps: Pt,
  nextTick: jn,
  normalizeClass: qe,
  normalizeProps: Va,
  normalizeStyle: Mt,
  onActivated: Vl,
  onBeforeMount: $l,
  onBeforeUnmount: os,
  onBeforeUpdate: Fi,
  onDeactivated: Al,
  onErrorCaptured: Il,
  onMounted: lr,
  onRenderTracked: Ml,
  onRenderTriggered: Pl,
  onScopeDispose: pd,
  onServerPrefetch: Rl,
  onUnmounted: Xr,
  onUpdated: rs,
  onWatcherCleanup: ul,
  openBlock: we,
  popScopeId: _p,
  provide: xr,
  proxyRefs: Ai,
  pushScopeId: gp,
  queuePostFlushCb: er,
  reactive: It,
  readonly: Xo,
  ref: Ce,
  registerRuntimeCompiler: eg,
  render: Uu,
  renderList: Bp,
  renderSlot: Qe,
  resolveComponent: Wt,
  resolveDirective: Up,
  resolveDynamicComponent: qs,
  resolveFilter: ug,
  resolveTransitionHooks: tr,
  setBlockTracking: ni,
  setDevtoolsHook: cg,
  setTransitionHooks: Xt,
  shallowReactive: Ti,
  shallowReadonly: mt,
  shallowRef: Vi,
  ssrContextKey: tu,
  ssrUtils: lg,
  stop: _d,
  toDisplayString: Wn,
  toHandlerKey: Dt,
  toHandlers: Gp,
  toRaw: ee,
  toRef: Bd,
  toRefs: Fd,
  toValue: Id,
  transformVNodeArgs: Wh,
  triggerRef: Md,
  unref: Vt,
  useAttrs: oh,
  useCssModule: jg,
  useCssVars: wg,
  useHost: pi,
  useId: Ep,
  useModel: Ph,
  useSSRContext: nu,
  useShadowRoot: Lg,
  useSlots: rh,
  useTemplateRef: wp,
  useTransitionState: Ii,
  vModelCheckbox: fs,
  vModelDynamic: Iu,
  vModelRadio: Xi,
  vModelSelect: Pu,
  vModelText: Kr,
  vShow: Yi,
  version: li,
  warn: Te,
  watch: $e,
  watchEffect: ru,
  watchPostEffect: $h,
  watchSyncEffect: ou,
  withAsyncContext: ah,
  withCtx: ft,
  withDefaults: nh,
  withDirectives: Mi,
  withKeys: Qg,
  withMemo: og,
  withModifiers: Io,
  withScopeId: mp
}, Symbol.toStringTag, { value: "Module" }));
/**
* vue v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function t_() {
  Nu();
}
process.env.NODE_ENV !== "production" && t_();
function n_(e, t) {
  let n;
  return () => {
    clearTimeout(n), n = setTimeout(e, t);
  };
}
function r_(e) {
  return e == " " ? "[space]" : e == "+" ? "[plus]" : e;
}
function o_(e) {
  return e.split(" ").map((t) => t.split("+").reduce((n, r) => ({ ...n, [r]: !0 }), {}));
}
function s_(e, t) {
  const n = Object.keys(e);
  return n.length != Object.keys(t).length ? !1 : n.every((r) => t.hasOwnProperty(r) && e[r] == t[r]);
}
function i_(e, t) {
  if (e.length < t.length) return !1;
  const n = e.length - t.length;
  for (let r = t.length - 1; r >= 0; r--)
    if (!s_(e[n + r], t[r])) return !1;
  return !0;
}
const qu = Symbol("__KEYBOARD_SERVICE__"), c_ = ["ctrl", "shift", "alt", "meta"];
function a_() {
  const e = Je(qu);
  if (!e) throw new Error("Unable to inject Keyboard Service.");
  return e;
}
function l_() {
  const e = [];
  let n = [];
  const r = n_(() => n = [], 500);
  function o(u) {
    if (u.repeat || u.getModifierState(u.key)) return;
    r();
    const l = { [r_(u.key)]: !0 };
    c_.forEach((d) => u[`${d}Key`] ? l[d] = !0 : null), n.push(l);
    for (let d of e)
      i_(n, d.shortcut_keys) && d.callback(u);
  }
  function s() {
    document.addEventListener("keydown", o);
  }
  function i() {
    document.removeEventListener("keydown", o);
  }
  function c(u, l) {
    e.push({ shortcut_keys: o_(u), callback: l });
  }
  function a(u, l) {
  }
  let f = {
    registerShortcut: c,
    unregisterShortcut: a,
    enable: s,
    disable: i,
    install(u) {
      u.provide(qu, f), s();
    }
  };
  return f;
}
const u_ = "__cs-app", Zr = "@tailwindcss-color-suite", f_ = `/${Zr}/color/create`, d_ = `/${Zr}/color/update`, p_ = `/${Zr}/color/updateAll`, h_ = `/${Zr}/color/delete`, g_ = `/${Zr}/settings/update`, __ = {
  namespaced: !0,
  state() {
    return Pf;
  },
  mutations: {
    update(e, t) {
      Object.assign(e, t);
    }
  },
  actions: {
    async update(e, t) {
      const n = Object.keys(t).reduce((r, o) => ({ ...r, [o]: e.state[o] }), {});
      e.commit("update", t);
      try {
        if (!(await fetch(g_, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(t)
        })).ok) throw new Error("Failed to updated settings");
      } catch {
        e.commit("update", n);
      }
    }
  }
}, Yu = Symbol("__SETTINGS_SERVICE__");
function m_() {
  const e = Je(Yu);
  if (!e) throw new Error("Unable to inject Settings Service.");
  return e;
}
function v_(e) {
  const n = {
    settings: new Proxy(It({}), {
      get(r, o) {
        return e.state.settings[o];
      },
      set(r, o, s) {
        return e.dispatch("settings/update", { [o]: s }), !0;
      }
    }),
    install(r) {
      e.registerModule("settings", __), r.provide(Yu, n);
    }
  };
  return n;
}
const y_ = /* @__PURE__ */ Re({
  name: "__cs-panel",
  setup() {
    const n = Ce(), r = Ce(540), o = Ce(!1), { settings: s } = m_();
    function i() {
      document.body.classList.remove("__cs-transition-all", "__cs-ease-out-brisk", "__cs-duration-300"), document.body.removeEventListener("transitionend", i);
    }
    let c = "initial", a = 0;
    $e(r, () => {
      !s.float_panel && o.value && (document.body.style.paddingLeft = `${a + r.value}px`);
    }), $e(() => s.float_panel, () => {
      s.float_panel ? document.body.style.paddingLeft = c : r.value < window.innerWidth && (document.body.style.paddingLeft = `${a + r.value}px`);
    });
    function f() {
      o.value = !0, !s.float_panel && r.value < window.innerWidth && (c = document.body.style.paddingLeft, a = parseFloat(window.getComputedStyle(document.body).getPropertyValue("padding-left")), document.body.classList.add("__cs-transition-all", "__cs-ease-out-brisk", "__cs-duration-300"), document.body.style.paddingLeft = `${a + r.value}px`, document.body.addEventListener("transitionend", i));
    }
    function u() {
      o.value = !1, !s.float_panel && r.value < window.innerWidth && (document.body.classList.add("__cs-transition-all", "__cs-ease-out-brisk", "__cs-duration-300"), document.body.style.paddingLeft = c, document.body.addEventListener("transitionend", i));
    }
    const { registerShortcut: l } = a_();
    l("ctrl+shift+F", (E) => {
      E.preventDefault(), o.value ? u() : f();
    });
    const d = Ce(!1);
    let h, m;
    function y(E) {
      d.value = !0, h = document.body.style.cursor, document.body.style.cursor = "ew-resize";
      let { x: g, y: b } = n.value.getBoundingClientRect();
      m = [E.clientX - g, E.clientY - b], document.addEventListener("pointermove", M), document.addEventListener("pointerup", V), E.preventDefault();
    }
    function M({ clientX: E }) {
      let [g, b] = m;
      r.value = Math.min(Math.max(E + g, 360), 540);
    }
    function V(E) {
      d.value = !1, document.body.style.cursor = h, document.removeEventListener("pointermove", M), document.removeEventListener("pointerup", V);
    }
    return lr(() => {
      n.value && n.value.addEventListener("pointerdown", y);
    }), Xr(() => {
      n.value && (n.value.removeEventListener("pointerdown", y), document.removeEventListener("pointermove", M), document.removeEventListener("pointerup", V), h && (document.body.style.cursor = h));
    }), {
      settings: s,
      resize_handle: n,
      resizing: d,
      openPanel: f,
      closePanel: u,
      max_width: r,
      open: o
    };
  }
}), rt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, b_ = {
  class: "__cs-group __cs-absolute __cs-inset-y-0 __cs-right-0 __cs-w-2",
  style: { cursor: "ew-resize" },
  ref: "resize_handle"
}, E_ = { class: "__cs-flex __cs-p-2 __cs-items-center __cs-bg-gradient-to-br __cs-from-gray-700 __cs-to-gray-800 __cs-text-gray-50 __cs-space-x-2" }, w_ = { class: "__cs-flex __cs-px-2 __cs-pt-2 __cs-space-x-2 __cs-bg-gray-900 __cs-text-white" }, N_ = { class: "__cs-flex-1 __cs-overflow-auto __cs-overscroll-contain __cs-bg-gray-900 __cs-text-white" };
function O_(e, t, n, r, o, s) {
  const i = Wt("svg-icon"), c = Wt("button-tab"), a = Wt("router-view");
  return we(), it("div", {
    class: qe(["__cs-font-sans __cs-z-panel __cs-fixed __cs-inset-y-0 __cs-left-0 __cs-w-full __cs-max-w-20 __cs-pr-1 __cs-flex __cs-flex-col __cs-pointer-events-auto __cs-transform __cs-transition-transform __cs-ease-out-brisk __cs-duration-300 __cs-text-gray-50", { "__cs--translate-x-full": !e.open }]),
    style: Mt(e.max_width != null ? `max-width: ${e.max_width}px !important;` : "")
  }, [
    pe("div", b_, [
      pe("div", {
        class: qe(["__cs-ml-1 __cs-w-1 __cs-h-full __cs-transition-colors __cs-duration-150 __cs-ease-out-brisk group-hover:__cs-bg-blue-500", { "__cs-bg-black": !e.resizing, "__cs-bg-blue-500": e.resizing }])
      }, null, 2)
    ], 512),
    e.settings.open_button ? (we(), it("div", {
      key: 0,
      onClick: t[0] || (t[0] = (f) => e.open ? e.closePanel() : e.openPanel()),
      class: qe(["__cs-cursor-pointer __cs-z-bg __cs-w-10 __cs-h-16 __cs-rounded-r-md __cs-bg-black hover:__cs-bg-gray-800 __cs-absolute __cs-right-1 __cs-top-1/2 __cs-transform __cs-translate-x-full __cs-transition-transform __cs-ease-out-brisk __cs-duration-300 __cs-flex __cs-items-center __cs-justify-center", { "__cs-translate-x-0": e.open }])
    }, t[2] || (t[2] = [
      pe("div", { class: "__cs-transform __cs--rotate-90 __cs-font-bold __cs-text-gray-300 __cs-leading-4" }, "Color", -1)
    ]), 2)) : ko("", !0),
    pe("div", E_, [
      t[3] || (t[3] = pe("div", { class: "__cs-flex-grow" }, [
        pe("h2", { class: "__cs-font-bold" }, "Color Suite")
      ], -1)),
      pe("button", {
        class: "__cs-h-8 __cs-w-8 __cs-p-1 __cs-rounded-full __cs-text-gray-400 hover:__cs-text-white hover:__cs-bg-gray-700 __cs-font-semibold focus:__cs-outline-none focus:__cs-ring-2",
        onClick: t[1] || (t[1] = (...f) => e.closePanel && e.closePanel(...f))
      }, [
        _e(i, {
          name: "close",
          class: "__cs-fill-current"
        })
      ])
    ]),
    pe("div", w_, [
      _e(c, { to: "/colors" }, {
        default: ft(() => t[4] || (t[4] = [
          Ur("Color Palette")
        ])),
        _: 1
      }),
      _e(c, { to: "/settings" }, {
        default: ft(() => t[5] || (t[5] = [
          Ur("Settings")
        ])),
        _: 1
      })
    ]),
    pe("div", N_, [
      _e(a)
    ])
  ], 6);
}
const x_ = /* @__PURE__ */ rt(y_, [["render", O_]]);
function S_() {
  return Xu().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Xu() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const C_ = typeof Proxy == "function", D_ = "devtools-plugin:setup", T_ = "plugin:settings:set";
let Kn, hi;
function V_() {
  var e;
  return Kn !== void 0 || (typeof window < "u" && window.performance ? (Kn = !0, hi = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? (Kn = !0, hi = globalThis.perf_hooks.performance) : Kn = !1), Kn;
}
function A_() {
  return V_() ? hi.now() : Date.now();
}
class k_ {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const r = {};
    if (t.settings)
      for (const i in t.settings) {
        const c = t.settings[i];
        r[i] = c.defaultValue;
      }
    const o = `__vue-devtools-plugin-settings__${t.id}`;
    let s = Object.assign({}, r);
    try {
      const i = localStorage.getItem(o), c = JSON.parse(i);
      Object.assign(s, c);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return s;
      },
      setSettings(i) {
        try {
          localStorage.setItem(o, JSON.stringify(i));
        } catch {
        }
        s = i;
      },
      now() {
        return A_();
      }
    }, n && n.on(T_, (i, c) => {
      i === this.plugin.id && this.fallbacks.setSettings(c);
    }), this.proxiedOn = new Proxy({}, {
      get: (i, c) => this.target ? this.target.on[c] : (...a) => {
        this.onQueue.push({
          method: c,
          args: a
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (i, c) => this.target ? this.target[c] : c === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(c) ? (...a) => (this.targetQueue.push({
        method: c,
        args: a,
        resolve: () => {
        }
      }), this.fallbacks[c](...a)) : (...a) => new Promise((f) => {
        this.targetQueue.push({
          method: c,
          args: a,
          resolve: f
        });
      })
    });
  }
  async setRealTarget(t) {
    this.target = t;
    for (const n of this.onQueue)
      this.target.on[n.method](...n.args);
    for (const n of this.targetQueue)
      n.resolve(await this.target[n.method](...n.args));
  }
}
function Ju(e, t) {
  const n = e, r = Xu(), o = S_(), s = C_ && n.enableEarlyProxy;
  if (o && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !s))
    o.emit(D_, e, t);
  else {
    const i = s ? new k_(n, o) : null;
    (r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: i
    }), i && t(i.proxiedTarget);
  }
}
/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */
var $_ = "store";
function Hn(e, t) {
  Object.keys(e).forEach(function(n) {
    return t(e[n], n);
  });
}
function R_(e) {
  return e !== null && typeof e == "object";
}
function P_(e) {
  return e && typeof e.then == "function";
}
function Et(e, t) {
  if (!e)
    throw new Error("[vuex] " + t);
}
function M_(e, t) {
  return function() {
    return e(t);
  };
}
function Qu(e, t, n) {
  return t.indexOf(e) < 0 && (n && n.prepend ? t.unshift(e) : t.push(e)), function() {
    var r = t.indexOf(e);
    r > -1 && t.splice(r, 1);
  };
}
function Zu(e, t) {
  e._actions = /* @__PURE__ */ Object.create(null), e._mutations = /* @__PURE__ */ Object.create(null), e._wrappedGetters = /* @__PURE__ */ Object.create(null), e._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
  var n = e.state;
  ds(e, n, [], e._modules.root, !0), Ji(e, n, t);
}
function Ji(e, t, n) {
  var r = e._state, o = e._scope;
  e.getters = {}, e._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
  var s = e._wrappedGetters, i = {}, c = {}, a = Ba(!0);
  a.run(function() {
    Hn(s, function(f, u) {
      i[u] = M_(f, e), c[u] = Me(function() {
        return i[u]();
      }), Object.defineProperty(e.getters, u, {
        get: function() {
          return c[u].value;
        },
        enumerable: !0
        // for local getters
      });
    });
  }), e._state = It({
    data: t
  }), e._scope = a, e.strict && H_(e), r && n && e._withCommit(function() {
    r.data = null;
  }), o && o.stop();
}
function ds(e, t, n, r, o) {
  var s = !n.length, i = e._modules.getNamespace(n);
  if (r.namespaced && (e._modulesNamespaceMap[i] && process.env.NODE_ENV !== "production" && console.error("[vuex] duplicate namespace " + i + " for the namespaced module " + n.join("/")), e._modulesNamespaceMap[i] = r), !s && !o) {
    var c = Qi(t, n.slice(0, -1)), a = n[n.length - 1];
    e._withCommit(function() {
      process.env.NODE_ENV !== "production" && a in c && console.warn(
        '[vuex] state field "' + a + '" was overridden by a module with the same name at "' + n.join(".") + '"'
      ), c[a] = r.state;
    });
  }
  var f = r.context = I_(e, i, n);
  r.forEachMutation(function(u, l) {
    var d = i + l;
    L_(e, d, u, f);
  }), r.forEachAction(function(u, l) {
    var d = u.root ? l : i + l, h = u.handler || u;
    j_(e, d, h, f);
  }), r.forEachGetter(function(u, l) {
    var d = i + l;
    F_(e, d, u, f);
  }), r.forEachChild(function(u, l) {
    ds(e, t, n.concat(l), u, o);
  });
}
function I_(e, t, n) {
  var r = t === "", o = {
    dispatch: r ? e.dispatch : function(s, i, c) {
      var a = jo(s, i, c), f = a.payload, u = a.options, l = a.type;
      if ((!u || !u.root) && (l = t + l, process.env.NODE_ENV !== "production" && !e._actions[l])) {
        console.error("[vuex] unknown local action type: " + a.type + ", global type: " + l);
        return;
      }
      return e.dispatch(l, f);
    },
    commit: r ? e.commit : function(s, i, c) {
      var a = jo(s, i, c), f = a.payload, u = a.options, l = a.type;
      if ((!u || !u.root) && (l = t + l, process.env.NODE_ENV !== "production" && !e._mutations[l])) {
        console.error("[vuex] unknown local mutation type: " + a.type + ", global type: " + l);
        return;
      }
      e.commit(l, f, u);
    }
  };
  return Object.defineProperties(o, {
    getters: {
      get: r ? function() {
        return e.getters;
      } : function() {
        return ef(e, t);
      }
    },
    state: {
      get: function() {
        return Qi(e.state, n);
      }
    }
  }), o;
}
function ef(e, t) {
  if (!e._makeLocalGettersCache[t]) {
    var n = {}, r = t.length;
    Object.keys(e.getters).forEach(function(o) {
      if (o.slice(0, r) === t) {
        var s = o.slice(r);
        Object.defineProperty(n, s, {
          get: function() {
            return e.getters[o];
          },
          enumerable: !0
        });
      }
    }), e._makeLocalGettersCache[t] = n;
  }
  return e._makeLocalGettersCache[t];
}
function L_(e, t, n, r) {
  var o = e._mutations[t] || (e._mutations[t] = []);
  o.push(function(i) {
    n.call(e, r.state, i);
  });
}
function j_(e, t, n, r) {
  var o = e._actions[t] || (e._actions[t] = []);
  o.push(function(i) {
    var c = n.call(e, {
      dispatch: r.dispatch,
      commit: r.commit,
      getters: r.getters,
      state: r.state,
      rootGetters: e.getters,
      rootState: e.state
    }, i);
    return P_(c) || (c = Promise.resolve(c)), e._devtoolHook ? c.catch(function(a) {
      throw e._devtoolHook.emit("vuex:error", a), a;
    }) : c;
  });
}
function F_(e, t, n, r) {
  if (e._wrappedGetters[t]) {
    process.env.NODE_ENV !== "production" && console.error("[vuex] duplicate getter key: " + t);
    return;
  }
  e._wrappedGetters[t] = function(s) {
    return n(
      r.state,
      // local state
      r.getters,
      // local getters
      s.state,
      // root state
      s.getters
      // root getters
    );
  };
}
function H_(e) {
  $e(function() {
    return e._state.data;
  }, function() {
    process.env.NODE_ENV !== "production" && Et(e._committing, "do not mutate vuex store state outside mutation handlers.");
  }, { deep: !0, flush: "sync" });
}
function Qi(e, t) {
  return t.reduce(function(n, r) {
    return n[r];
  }, e);
}
function jo(e, t, n) {
  return R_(e) && e.type && (n = t, t = e, e = e.type), process.env.NODE_ENV !== "production" && Et(typeof e == "string", "expects string as the type, but found " + typeof e + "."), { type: e, payload: t, options: n };
}
var U_ = "vuex bindings", ta = "vuex:mutations", Vs = "vuex:actions", Gn = "vuex", B_ = 0;
function K_(e, t) {
  Ju(
    {
      id: "org.vuejs.vuex",
      app: e,
      label: "Vuex",
      homepage: "https://next.vuex.vuejs.org/",
      logo: "https://vuejs.org/images/icons/favicon-96x96.png",
      packageName: "vuex",
      componentStateTypes: [U_]
    },
    function(n) {
      n.addTimelineLayer({
        id: ta,
        label: "Vuex Mutations",
        color: na
      }), n.addTimelineLayer({
        id: Vs,
        label: "Vuex Actions",
        color: na
      }), n.addInspector({
        id: Gn,
        label: "Vuex",
        icon: "storage",
        treeFilterPlaceholder: "Filter stores..."
      }), n.on.getInspectorTree(function(r) {
        if (r.app === e && r.inspectorId === Gn)
          if (r.filter) {
            var o = [];
            of(o, t._modules.root, r.filter, ""), r.rootNodes = o;
          } else
            r.rootNodes = [
              rf(t._modules.root, "")
            ];
      }), n.on.getInspectorState(function(r) {
        if (r.app === e && r.inspectorId === Gn) {
          var o = r.nodeId;
          ef(t, o), r.state = W_(
            Y_(t._modules, o),
            o === "root" ? t.getters : t._makeLocalGettersCache,
            o
          );
        }
      }), n.on.editInspectorState(function(r) {
        if (r.app === e && r.inspectorId === Gn) {
          var o = r.nodeId, s = r.path;
          o !== "root" && (s = o.split("/").filter(Boolean).concat(s)), t._withCommit(function() {
            r.set(t._state.data, s, r.state.value);
          });
        }
      }), t.subscribe(function(r, o) {
        var s = {};
        r.payload && (s.payload = r.payload), s.state = o, n.notifyComponentUpdate(), n.sendInspectorTree(Gn), n.sendInspectorState(Gn), n.addTimelineEvent({
          layerId: ta,
          event: {
            time: Date.now(),
            title: r.type,
            data: s
          }
        });
      }), t.subscribeAction({
        before: function(r, o) {
          var s = {};
          r.payload && (s.payload = r.payload), r._id = B_++, r._time = Date.now(), s.state = o, n.addTimelineEvent({
            layerId: Vs,
            event: {
              time: r._time,
              title: r.type,
              groupId: r._id,
              subtitle: "start",
              data: s
            }
          });
        },
        after: function(r, o) {
          var s = {}, i = Date.now() - r._time;
          s.duration = {
            _custom: {
              type: "duration",
              display: i + "ms",
              tooltip: "Action duration",
              value: i
            }
          }, r.payload && (s.payload = r.payload), s.state = o, n.addTimelineEvent({
            layerId: Vs,
            event: {
              time: Date.now(),
              title: r.type,
              groupId: r._id,
              subtitle: "end",
              data: s
            }
          });
        }
      });
    }
  );
}
var na = 8702998, G_ = 6710886, z_ = 16777215, tf = {
  label: "namespaced",
  textColor: z_,
  backgroundColor: G_
};
function nf(e) {
  return e && e !== "root" ? e.split("/").slice(-2, -1)[0] : "Root";
}
function rf(e, t) {
  return {
    id: t || "root",
    // all modules end with a `/`, we want the last segment only
    // cart/ -> cart
    // nested/cart/ -> cart
    label: nf(t),
    tags: e.namespaced ? [tf] : [],
    children: Object.keys(e._children).map(
      function(n) {
        return rf(
          e._children[n],
          t + n + "/"
        );
      }
    )
  };
}
function of(e, t, n, r) {
  r.includes(n) && e.push({
    id: r || "root",
    label: r.endsWith("/") ? r.slice(0, r.length - 1) : r || "Root",
    tags: t.namespaced ? [tf] : []
  }), Object.keys(t._children).forEach(function(o) {
    of(e, t._children[o], n, r + o + "/");
  });
}
function W_(e, t, n) {
  t = n === "root" ? t : t[n];
  var r = Object.keys(t), o = {
    state: Object.keys(e.state).map(function(i) {
      return {
        key: i,
        editable: !0,
        value: e.state[i]
      };
    })
  };
  if (r.length) {
    var s = q_(t);
    o.getters = Object.keys(s).map(function(i) {
      return {
        key: i.endsWith("/") ? nf(i) : i,
        editable: !1,
        value: gi(function() {
          return s[i];
        })
      };
    });
  }
  return o;
}
function q_(e) {
  var t = {};
  return Object.keys(e).forEach(function(n) {
    var r = n.split("/");
    if (r.length > 1) {
      var o = t, s = r.pop();
      r.forEach(function(i) {
        o[i] || (o[i] = {
          _custom: {
            value: {},
            display: i,
            tooltip: "Module",
            abstract: !0
          }
        }), o = o[i]._custom.value;
      }), o[s] = gi(function() {
        return e[n];
      });
    } else
      t[n] = gi(function() {
        return e[n];
      });
  }), t;
}
function Y_(e, t) {
  var n = t.split("/").filter(function(r) {
    return r;
  });
  return n.reduce(
    function(r, o, s) {
      var i = r[o];
      if (!i)
        throw new Error('Missing module "' + o + '" for path "' + t + '".');
      return s === n.length - 1 ? i : i._children;
    },
    t === "root" ? e : e.root._children
  );
}
function gi(e) {
  try {
    return e();
  } catch (t) {
    return t;
  }
}
var wt = function(t, n) {
  this.runtime = n, this._children = /* @__PURE__ */ Object.create(null), this._rawModule = t;
  var r = t.state;
  this.state = (typeof r == "function" ? r() : r) || {};
}, sf = { namespaced: { configurable: !0 } };
sf.namespaced.get = function() {
  return !!this._rawModule.namespaced;
};
wt.prototype.addChild = function(t, n) {
  this._children[t] = n;
};
wt.prototype.removeChild = function(t) {
  delete this._children[t];
};
wt.prototype.getChild = function(t) {
  return this._children[t];
};
wt.prototype.hasChild = function(t) {
  return t in this._children;
};
wt.prototype.update = function(t) {
  this._rawModule.namespaced = t.namespaced, t.actions && (this._rawModule.actions = t.actions), t.mutations && (this._rawModule.mutations = t.mutations), t.getters && (this._rawModule.getters = t.getters);
};
wt.prototype.forEachChild = function(t) {
  Hn(this._children, t);
};
wt.prototype.forEachGetter = function(t) {
  this._rawModule.getters && Hn(this._rawModule.getters, t);
};
wt.prototype.forEachAction = function(t) {
  this._rawModule.actions && Hn(this._rawModule.actions, t);
};
wt.prototype.forEachMutation = function(t) {
  this._rawModule.mutations && Hn(this._rawModule.mutations, t);
};
Object.defineProperties(wt.prototype, sf);
var Un = function(t) {
  this.register([], t, !1);
};
Un.prototype.get = function(t) {
  return t.reduce(function(n, r) {
    return n.getChild(r);
  }, this.root);
};
Un.prototype.getNamespace = function(t) {
  var n = this.root;
  return t.reduce(function(r, o) {
    return n = n.getChild(o), r + (n.namespaced ? o + "/" : "");
  }, "");
};
Un.prototype.update = function(t) {
  cf([], this.root, t);
};
Un.prototype.register = function(t, n, r) {
  var o = this;
  r === void 0 && (r = !0), process.env.NODE_ENV !== "production" && af(t, n);
  var s = new wt(n, r);
  if (t.length === 0)
    this.root = s;
  else {
    var i = this.get(t.slice(0, -1));
    i.addChild(t[t.length - 1], s);
  }
  n.modules && Hn(n.modules, function(c, a) {
    o.register(t.concat(a), c, r);
  });
};
Un.prototype.unregister = function(t) {
  var n = this.get(t.slice(0, -1)), r = t[t.length - 1], o = n.getChild(r);
  if (!o) {
    process.env.NODE_ENV !== "production" && console.warn(
      "[vuex] trying to unregister module '" + r + "', which is not registered"
    );
    return;
  }
  o.runtime && n.removeChild(r);
};
Un.prototype.isRegistered = function(t) {
  var n = this.get(t.slice(0, -1)), r = t[t.length - 1];
  return n ? n.hasChild(r) : !1;
};
function cf(e, t, n) {
  if (process.env.NODE_ENV !== "production" && af(e, n), t.update(n), n.modules)
    for (var r in n.modules) {
      if (!t.getChild(r)) {
        process.env.NODE_ENV !== "production" && console.warn(
          "[vuex] trying to add a new module '" + r + "' on hot reloading, manual reload is needed"
        );
        return;
      }
      cf(
        e.concat(r),
        t.getChild(r),
        n.modules[r]
      );
    }
}
var ra = {
  assert: function(e) {
    return typeof e == "function";
  },
  expected: "function"
}, X_ = {
  assert: function(e) {
    return typeof e == "function" || typeof e == "object" && typeof e.handler == "function";
  },
  expected: 'function or object with "handler" function'
}, oa = {
  getters: ra,
  mutations: ra,
  actions: X_
};
function af(e, t) {
  Object.keys(oa).forEach(function(n) {
    if (t[n]) {
      var r = oa[n];
      Hn(t[n], function(o, s) {
        Et(
          r.assert(o),
          J_(e, n, s, o, r.expected)
        );
      });
    }
  });
}
function J_(e, t, n, r, o) {
  var s = t + " should be " + o + ' but "' + t + "." + n + '"';
  return e.length > 0 && (s += ' in module "' + e.join(".") + '"'), s += " is " + JSON.stringify(r) + ".", s;
}
function Q_(e) {
  return new Ze(e);
}
var Ze = function e(t) {
  var n = this;
  t === void 0 && (t = {}), process.env.NODE_ENV !== "production" && (Et(typeof Promise < "u", "vuex requires a Promise polyfill in this browser."), Et(this instanceof e, "store must be called with the new operator."));
  var r = t.plugins;
  r === void 0 && (r = []);
  var o = t.strict;
  o === void 0 && (o = !1);
  var s = t.devtools;
  this._committing = !1, this._actions = /* @__PURE__ */ Object.create(null), this._actionSubscribers = [], this._mutations = /* @__PURE__ */ Object.create(null), this._wrappedGetters = /* @__PURE__ */ Object.create(null), this._modules = new Un(t), this._modulesNamespaceMap = /* @__PURE__ */ Object.create(null), this._subscribers = [], this._makeLocalGettersCache = /* @__PURE__ */ Object.create(null), this._scope = null, this._devtools = s;
  var i = this, c = this, a = c.dispatch, f = c.commit;
  this.dispatch = function(d, h) {
    return a.call(i, d, h);
  }, this.commit = function(d, h, m) {
    return f.call(i, d, h, m);
  }, this.strict = o;
  var u = this._modules.root.state;
  ds(this, u, [], this._modules.root), Ji(this, u), r.forEach(function(l) {
    return l(n);
  });
}, Zi = { state: { configurable: !0 } };
Ze.prototype.install = function(t, n) {
  t.provide(n || $_, this), t.config.globalProperties.$store = this;
  var r = this._devtools !== void 0 ? this._devtools : process.env.NODE_ENV !== "production" || !1;
  r && K_(t, this);
};
Zi.state.get = function() {
  return this._state.data;
};
Zi.state.set = function(e) {
  process.env.NODE_ENV !== "production" && Et(!1, "use store.replaceState() to explicit replace store state.");
};
Ze.prototype.commit = function(t, n, r) {
  var o = this, s = jo(t, n, r), i = s.type, c = s.payload, a = s.options, f = { type: i, payload: c }, u = this._mutations[i];
  if (!u) {
    process.env.NODE_ENV !== "production" && console.error("[vuex] unknown mutation type: " + i);
    return;
  }
  this._withCommit(function() {
    u.forEach(function(d) {
      d(c);
    });
  }), this._subscribers.slice().forEach(function(l) {
    return l(f, o.state);
  }), process.env.NODE_ENV !== "production" && a && a.silent && console.warn(
    "[vuex] mutation type: " + i + ". Silent option has been removed. Use the filter functionality in the vue-devtools"
  );
};
Ze.prototype.dispatch = function(t, n) {
  var r = this, o = jo(t, n), s = o.type, i = o.payload, c = { type: s, payload: i }, a = this._actions[s];
  if (!a) {
    process.env.NODE_ENV !== "production" && console.error("[vuex] unknown action type: " + s);
    return;
  }
  try {
    this._actionSubscribers.slice().filter(function(u) {
      return u.before;
    }).forEach(function(u) {
      return u.before(c, r.state);
    });
  } catch (u) {
    process.env.NODE_ENV !== "production" && (console.warn("[vuex] error in before action subscribers: "), console.error(u));
  }
  var f = a.length > 1 ? Promise.all(a.map(function(u) {
    return u(i);
  })) : a[0](i);
  return new Promise(function(u, l) {
    f.then(function(d) {
      try {
        r._actionSubscribers.filter(function(h) {
          return h.after;
        }).forEach(function(h) {
          return h.after(c, r.state);
        });
      } catch (h) {
        process.env.NODE_ENV !== "production" && (console.warn("[vuex] error in after action subscribers: "), console.error(h));
      }
      u(d);
    }, function(d) {
      try {
        r._actionSubscribers.filter(function(h) {
          return h.error;
        }).forEach(function(h) {
          return h.error(c, r.state, d);
        });
      } catch (h) {
        process.env.NODE_ENV !== "production" && (console.warn("[vuex] error in error action subscribers: "), console.error(h));
      }
      l(d);
    });
  });
};
Ze.prototype.subscribe = function(t, n) {
  return Qu(t, this._subscribers, n);
};
Ze.prototype.subscribeAction = function(t, n) {
  var r = typeof t == "function" ? { before: t } : t;
  return Qu(r, this._actionSubscribers, n);
};
Ze.prototype.watch = function(t, n, r) {
  var o = this;
  return process.env.NODE_ENV !== "production" && Et(typeof t == "function", "store.watch only accepts a function."), $e(function() {
    return t(o.state, o.getters);
  }, n, Object.assign({}, r));
};
Ze.prototype.replaceState = function(t) {
  var n = this;
  this._withCommit(function() {
    n._state.data = t;
  });
};
Ze.prototype.registerModule = function(t, n, r) {
  r === void 0 && (r = {}), typeof t == "string" && (t = [t]), process.env.NODE_ENV !== "production" && (Et(Array.isArray(t), "module path must be a string or an Array."), Et(t.length > 0, "cannot register the root module by using registerModule.")), this._modules.register(t, n), ds(this, this.state, t, this._modules.get(t), r.preserveState), Ji(this, this.state);
};
Ze.prototype.unregisterModule = function(t) {
  var n = this;
  typeof t == "string" && (t = [t]), process.env.NODE_ENV !== "production" && Et(Array.isArray(t), "module path must be a string or an Array."), this._modules.unregister(t), this._withCommit(function() {
    var r = Qi(n.state, t.slice(0, -1));
    delete r[t[t.length - 1]];
  }), Zu(this);
};
Ze.prototype.hasModule = function(t) {
  return typeof t == "string" && (t = [t]), process.env.NODE_ENV !== "production" && Et(Array.isArray(t), "module path must be a string or an Array."), this._modules.isRegistered(t);
};
Ze.prototype.hotUpdate = function(t) {
  this._modules.update(t), Zu(this, !0);
};
Ze.prototype._withCommit = function(t) {
  var n = this._committing;
  this._committing = !0, t(), this._committing = n;
};
Object.defineProperties(Ze.prototype, Zi);
function Z_() {
  return Q_({});
}
/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const Bt = typeof document < "u";
function lf(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function em(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || // support CF with dynamic imports that do not
  // add the Module string tag
  e.default && lf(e.default);
}
const ve = Object.assign;
function As(e, t) {
  const n = {};
  for (const r in t) {
    const o = t[r];
    n[r] = nt(o) ? o.map(e) : e(o);
  }
  return n;
}
const Vr = () => {
}, nt = Array.isArray;
function ie(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const uf = /#/g, tm = /&/g, nm = /\//g, rm = /=/g, om = /\?/g, ff = /\+/g, sm = /%5B/g, im = /%5D/g, df = /%5E/g, cm = /%60/g, pf = /%7B/g, am = /%7C/g, hf = /%7D/g, lm = /%20/g;
function ec(e) {
  return encodeURI("" + e).replace(am, "|").replace(sm, "[").replace(im, "]");
}
function um(e) {
  return ec(e).replace(pf, "{").replace(hf, "}").replace(df, "^");
}
function _i(e) {
  return ec(e).replace(ff, "%2B").replace(lm, "+").replace(uf, "%23").replace(tm, "%26").replace(cm, "`").replace(pf, "{").replace(hf, "}").replace(df, "^");
}
function fm(e) {
  return _i(e).replace(rm, "%3D");
}
function dm(e) {
  return ec(e).replace(uf, "%23").replace(om, "%3F");
}
function pm(e) {
  return e == null ? "" : dm(e).replace(nm, "%2F");
}
function sr(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {
    process.env.NODE_ENV !== "production" && ie(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
const hm = /\/$/, gm = (e) => e.replace(hm, "");
function ks(e, t, n = "/") {
  let r, o = {}, s = "", i = "";
  const c = t.indexOf("#");
  let a = t.indexOf("?");
  return c < a && c >= 0 && (a = -1), a > -1 && (r = t.slice(0, a), s = t.slice(a + 1, c > -1 ? c : t.length), o = e(s)), c > -1 && (r = r || t.slice(0, c), i = t.slice(c, t.length)), r = vm(r ?? t, n), {
    fullPath: r + (s && "?") + s + i,
    path: r,
    query: o,
    hash: sr(i)
  };
}
function _m(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function sa(e, t, n) {
  const r = t.matched.length - 1, o = n.matched.length - 1;
  return r > -1 && r === o && mn(t.matched[r], n.matched[o]) && gf(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function mn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function gf(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!mm(e[n], t[n]))
      return !1;
  return !0;
}
function mm(e, t) {
  return nt(e) ? ia(e, t) : nt(t) ? ia(t, e) : e === t;
}
function ia(e, t) {
  return nt(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t;
}
function vm(e, t) {
  if (e.startsWith("/"))
    return e;
  if (process.env.NODE_ENV !== "production" && !t.startsWith("/"))
    return ie(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
  if (!e)
    return t;
  const n = t.split("/"), r = e.split("/"), o = r[r.length - 1];
  (o === ".." || o === ".") && r.push("");
  let s = n.length - 1, i, c;
  for (i = 0; i < r.length; i++)
    if (c = r[i], c !== ".")
      if (c === "..")
        s > 1 && s--;
      else
        break;
  return n.slice(0, s).join("/") + "/" + r.slice(i).join("/");
}
const on = {
  path: "/",
  // TODO: could we use a symbol in the future?
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
};
var Gr;
(function(e) {
  e.pop = "pop", e.push = "push";
})(Gr || (Gr = {}));
var Fo;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(Fo || (Fo = {}));
const $s = "";
function ym(e) {
  if (!e)
    if (Bt) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), gm(e);
}
const bm = /^[^#]+#/;
function Em(e, t) {
  return e.replace(bm, "#") + t;
}
function wm(e, t) {
  const n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0)
  };
}
const Nm = () => ({
  left: window.scrollX,
  top: window.scrollY
});
function Om(e) {
  let t;
  if ("el" in e) {
    const n = e.el, r = typeof n == "string" && n.startsWith("#");
    if (process.env.NODE_ENV !== "production" && typeof e.el == "string" && (!r || !document.getElementById(e.el.slice(1))))
      try {
        const s = document.querySelector(e.el);
        if (r && s) {
          ie(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch {
        ie(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const o = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!o) {
      process.env.NODE_ENV !== "production" && ie(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    t = wm(o, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
}
function ca(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const mi = /* @__PURE__ */ new Map();
function xm(e, t) {
  mi.set(e, t);
}
function Sm(e) {
  const t = mi.get(e);
  return mi.delete(e), t;
}
function Cm(e = "") {
  let t = [], n = [$s], r = 0;
  e = ym(e);
  function o(c) {
    r++, r !== n.length && n.splice(r), n.push(c);
  }
  function s(c, a, { direction: f, delta: u }) {
    const l = {
      direction: f,
      delta: u,
      type: Gr.pop
    };
    for (const d of t)
      d(c, a, l);
  }
  const i = {
    // rewritten by Object.defineProperty
    location: $s,
    // TODO: should be kept in queue
    state: {},
    base: e,
    createHref: Em.bind(null, e),
    replace(c) {
      n.splice(r--, 1), o(c);
    },
    push(c, a) {
      o(c);
    },
    listen(c) {
      return t.push(c), () => {
        const a = t.indexOf(c);
        a > -1 && t.splice(a, 1);
      };
    },
    destroy() {
      t = [], n = [$s], r = 0;
    },
    go(c, a = !0) {
      const f = this.location, u = (
        // we are considering delta === 0 going forward, but in abstract mode
        // using 0 for the delta doesn't make sense like it does in html5 where
        // it reloads the page
        c < 0 ? Fo.back : Fo.forward
      );
      r = Math.max(0, Math.min(r + c, n.length - 1)), a && s(this.location, f, {
        direction: u,
        delta: c
      });
    }
  };
  return Object.defineProperty(i, "location", {
    enumerable: !0,
    get: () => n[r]
  }), i;
}
function Ho(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function _f(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const vi = Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var aa;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(aa || (aa = {}));
const Dm = {
  1({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  2({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${Vm(t)}" via a navigation guard.`;
  },
  4({ from: e, to: t }) {
    return `Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`;
  },
  8({ from: e, to: t }) {
    return `Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`;
  },
  16({ from: e, to: t }) {
    return `Avoided redundant navigation to current location: "${e.fullPath}".`;
  }
};
function ir(e, t) {
  return process.env.NODE_ENV !== "production" ? ve(new Error(Dm[e](t)), {
    type: e,
    [vi]: !0
  }, t) : ve(new Error(), {
    type: e,
    [vi]: !0
  }, t);
}
function jt(e, t) {
  return e instanceof Error && vi in e && (t == null || !!(e.type & t));
}
const Tm = ["params", "query", "hash"];
function Vm(e) {
  if (typeof e == "string")
    return e;
  if (e.path != null)
    return e.path;
  const t = {};
  for (const n of Tm)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const la = "[^/]+?", Am = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, km = /[.+*?^${}()[\]/\\]/g;
function $m(e, t) {
  const n = ve({}, Am, t), r = [];
  let o = n.start ? "^" : "";
  const s = [];
  for (const f of e) {
    const u = f.length ? [] : [
      90
      /* PathScore.Root */
    ];
    n.strict && !f.length && (o += "/");
    for (let l = 0; l < f.length; l++) {
      const d = f[l];
      let h = 40 + (n.sensitive ? 0.25 : 0);
      if (d.type === 0)
        l || (o += "/"), o += d.value.replace(km, "\\$&"), h += 40;
      else if (d.type === 1) {
        const { value: m, repeatable: y, optional: M, regexp: V } = d;
        s.push({
          name: m,
          repeatable: y,
          optional: M
        });
        const E = V || la;
        if (E !== la) {
          h += 10;
          try {
            new RegExp(`(${E})`);
          } catch (b) {
            throw new Error(`Invalid custom RegExp for param "${m}" (${E}): ` + b.message);
          }
        }
        let g = y ? `((?:${E})(?:/(?:${E}))*)` : `(${E})`;
        l || (g = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        M && f.length < 2 ? `(?:/${g})` : "/" + g), M && (g += "?"), o += g, h += 20, M && (h += -8), y && (h += -20), E === ".*" && (h += -50);
      }
      u.push(h);
    }
    r.push(u);
  }
  if (n.strict && n.end) {
    const f = r.length - 1;
    r[f][r[f].length - 1] += 0.7000000000000001;
  }
  n.strict || (o += "/?"), n.end ? o += "$" : n.strict && !o.endsWith("/") && (o += "(?:/|$)");
  const i = new RegExp(o, n.sensitive ? "" : "i");
  function c(f) {
    const u = f.match(i), l = {};
    if (!u)
      return null;
    for (let d = 1; d < u.length; d++) {
      const h = u[d] || "", m = s[d - 1];
      l[m.name] = h && m.repeatable ? h.split("/") : h;
    }
    return l;
  }
  function a(f) {
    let u = "", l = !1;
    for (const d of e) {
      (!l || !u.endsWith("/")) && (u += "/"), l = !1;
      for (const h of d)
        if (h.type === 0)
          u += h.value;
        else if (h.type === 1) {
          const { value: m, repeatable: y, optional: M } = h, V = m in f ? f[m] : "";
          if (nt(V) && !y)
            throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);
          const E = nt(V) ? V.join("/") : V;
          if (!E)
            if (M)
              d.length < 2 && (u.endsWith("/") ? u = u.slice(0, -1) : l = !0);
            else
              throw new Error(`Missing required param "${m}"`);
          u += E;
        }
    }
    return u || "/";
  }
  return {
    re: i,
    score: r,
    keys: s,
    parse: c,
    stringify: a
  };
}
function Rm(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n];
    if (r)
      return r;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
}
function mf(e, t) {
  let n = 0;
  const r = e.score, o = t.score;
  for (; n < r.length && n < o.length; ) {
    const s = Rm(r[n], o[n]);
    if (s)
      return s;
    n++;
  }
  if (Math.abs(o.length - r.length) === 1) {
    if (ua(r))
      return 1;
    if (ua(o))
      return -1;
  }
  return o.length - r.length;
}
function ua(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Pm = {
  type: 0,
  value: ""
}, Mm = /[a-zA-Z0-9_]/;
function Im(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[Pm]];
  if (!e.startsWith("/"))
    throw new Error(process.env.NODE_ENV !== "production" ? `Route paths should start with a "/": "${e}" should be "/${e}".` : `Invalid path "${e}"`);
  function t(h) {
    throw new Error(`ERR (${n})/"${f}": ${h}`);
  }
  let n = 0, r = n;
  const o = [];
  let s;
  function i() {
    s && o.push(s), s = [];
  }
  let c = 0, a, f = "", u = "";
  function l() {
    f && (n === 0 ? s.push({
      type: 0,
      value: f
    }) : n === 1 || n === 2 || n === 3 ? (s.length > 1 && (a === "*" || a === "+") && t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`), s.push({
      type: 1,
      value: f,
      regexp: u,
      repeatable: a === "*" || a === "+",
      optional: a === "*" || a === "?"
    })) : t("Invalid state to consume buffer"), f = "");
  }
  function d() {
    f += a;
  }
  for (; c < e.length; ) {
    if (a = e[c++], a === "\\" && n !== 2) {
      r = n, n = 4;
      continue;
    }
    switch (n) {
      case 0:
        a === "/" ? (f && l(), i()) : a === ":" ? (l(), n = 1) : d();
        break;
      case 4:
        d(), n = r;
        break;
      case 1:
        a === "(" ? n = 2 : Mm.test(a) ? d() : (l(), n = 0, a !== "*" && a !== "?" && a !== "+" && c--);
        break;
      case 2:
        a === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + a : n = 3 : u += a;
        break;
      case 3:
        l(), n = 0, a !== "*" && a !== "?" && a !== "+" && c--, u = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${f}"`), l(), i(), o;
}
function Lm(e, t, n) {
  const r = $m(Im(e.path), n);
  if (process.env.NODE_ENV !== "production") {
    const s = /* @__PURE__ */ new Set();
    for (const i of r.keys)
      s.has(i.name) && ie(`Found duplicated params with name "${i.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), s.add(i.name);
  }
  const o = ve(r, {
    record: e,
    parent: t,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o;
}
function jm(e, t) {
  const n = [], r = /* @__PURE__ */ new Map();
  t = ha({ strict: !1, end: !0, sensitive: !1 }, t);
  function o(l) {
    return r.get(l);
  }
  function s(l, d, h) {
    const m = !h, y = da(l);
    process.env.NODE_ENV !== "production" && Bm(y, d), y.aliasOf = h && h.record;
    const M = ha(t, l), V = [y];
    if ("alias" in l) {
      const b = typeof l.alias == "string" ? [l.alias] : l.alias;
      for (const v of b)
        V.push(
          // we need to normalize again to ensure the `mods` property
          // being non enumerable
          da(ve({}, y, {
            // this allows us to hold a copy of the `components` option
            // so that async components cache is hold on the original record
            components: h ? h.record.components : y.components,
            path: v,
            // we might be the child of an alias
            aliasOf: h ? h.record : y
            // the aliases are always of the same kind as the original since they
            // are defined on the same record
          }))
        );
    }
    let E, g;
    for (const b of V) {
      const { path: v } = b;
      if (d && v[0] !== "/") {
        const x = d.record.path, R = x[x.length - 1] === "/" ? "" : "/";
        b.path = d.record.path + (v && R + v);
      }
      if (process.env.NODE_ENV !== "production" && b.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://router.vuejs.org/guide/migration/#Removed-star-or-catch-all-routes.`);
      if (E = Lm(b, d, M), process.env.NODE_ENV !== "production" && d && v[0] === "/" && Gm(E, d), h ? (h.alias.push(E), process.env.NODE_ENV !== "production" && Um(h, E)) : (g = g || E, g !== E && g.alias.push(E), m && l.name && !pa(E) && (process.env.NODE_ENV !== "production" && Km(l, d), i(l.name))), vf(E) && a(E), y.children) {
        const x = y.children;
        for (let R = 0; R < x.length; R++)
          s(x[R], E, h && h.children[R]);
      }
      h = h || E;
    }
    return g ? () => {
      i(g);
    } : Vr;
  }
  function i(l) {
    if (_f(l)) {
      const d = r.get(l);
      d && (r.delete(l), n.splice(n.indexOf(d), 1), d.children.forEach(i), d.alias.forEach(i));
    } else {
      const d = n.indexOf(l);
      d > -1 && (n.splice(d, 1), l.record.name && r.delete(l.record.name), l.children.forEach(i), l.alias.forEach(i));
    }
  }
  function c() {
    return n;
  }
  function a(l) {
    const d = zm(l, n);
    n.splice(d, 0, l), l.record.name && !pa(l) && r.set(l.record.name, l);
  }
  function f(l, d) {
    let h, m = {}, y, M;
    if ("name" in l && l.name) {
      if (h = r.get(l.name), !h)
        throw ir(1, {
          location: l
        });
      if (process.env.NODE_ENV !== "production") {
        const g = Object.keys(l.params || {}).filter((b) => !h.keys.find((v) => v.name === b));
        g.length && ie(`Discarded invalid param(s) "${g.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      M = h.record.name, m = ve(
        // paramsFromLocation is a new object
        fa(
          d.params,
          // only keep params that exist in the resolved location
          // only keep optional params coming from a parent record
          h.keys.filter((g) => !g.optional).concat(h.parent ? h.parent.keys.filter((g) => g.optional) : []).map((g) => g.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        l.params && fa(l.params, h.keys.map((g) => g.name))
      ), y = h.stringify(m);
    } else if (l.path != null)
      y = l.path, process.env.NODE_ENV !== "production" && !y.startsWith("/") && ie(`The Matcher cannot resolve relative paths but received "${y}". Unless you directly called \`matcher.resolve("${y}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), h = n.find((g) => g.re.test(y)), h && (m = h.parse(y), M = h.record.name);
    else {
      if (h = d.name ? r.get(d.name) : n.find((g) => g.re.test(d.path)), !h)
        throw ir(1, {
          location: l,
          currentLocation: d
        });
      M = h.record.name, m = ve({}, d.params, l.params), y = h.stringify(m);
    }
    const V = [];
    let E = h;
    for (; E; )
      V.unshift(E.record), E = E.parent;
    return {
      name: M,
      path: y,
      params: m,
      matched: V,
      meta: Hm(V)
    };
  }
  e.forEach((l) => s(l));
  function u() {
    n.length = 0, r.clear();
  }
  return {
    addRoute: s,
    resolve: f,
    removeRoute: i,
    clearRoutes: u,
    getRoutes: c,
    getRecordMatcher: o
  };
}
function fa(e, t) {
  const n = {};
  for (const r of t)
    r in e && (n[r] = e[r]);
  return n;
}
function da(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: Fm(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    // must be declared afterwards
    // mods: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
  return Object.defineProperty(t, "mods", {
    value: {}
  }), t;
}
function Fm(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const r in e.components)
      t[r] = typeof n == "object" ? n[r] : n;
  return t;
}
function pa(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function Hm(e) {
  return e.reduce((t, n) => ve(t, n.meta), {});
}
function ha(e, t) {
  const n = {};
  for (const r in e)
    n[r] = r in t ? t[r] : e[r];
  return n;
}
function yi(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function Um(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(yi.bind(null, n)))
      return ie(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(yi.bind(null, n)))
      return ie(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function Bm(e, t) {
  t && t.record.name && !e.name && !e.path && ie(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function Km(e, t) {
  for (let n = t; n; n = n.parent)
    if (n.record.name === e.name)
      throw new Error(`A route named "${String(e.name)}" has been added as a ${t === n ? "child" : "descendant"} of a route with the same name. Route names must be unique and a nested route cannot use the same name as an ancestor.`);
}
function Gm(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(yi.bind(null, n)))
      return ie(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function zm(e, t) {
  let n = 0, r = t.length;
  for (; n !== r; ) {
    const s = n + r >> 1;
    mf(e, t[s]) < 0 ? r = s : n = s + 1;
  }
  const o = Wm(e);
  return o && (r = t.lastIndexOf(o, r - 1), process.env.NODE_ENV !== "production" && r < 0 && ie(`Finding ancestor route "${o.record.path}" failed for "${e.record.path}"`)), r;
}
function Wm(e) {
  let t = e;
  for (; t = t.parent; )
    if (vf(t) && mf(e, t) === 0)
      return t;
}
function vf({ record: e }) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function qm(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const r = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let o = 0; o < r.length; ++o) {
    const s = r[o].replace(ff, " "), i = s.indexOf("="), c = sr(i < 0 ? s : s.slice(0, i)), a = i < 0 ? null : sr(s.slice(i + 1));
    if (c in t) {
      let f = t[c];
      nt(f) || (f = t[c] = [f]), f.push(a);
    } else
      t[c] = a;
  }
  return t;
}
function ga(e) {
  let t = "";
  for (let n in e) {
    const r = e[n];
    if (n = fm(n), r == null) {
      r !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (nt(r) ? r.map((s) => s && _i(s)) : [r && _i(r)]).forEach((s) => {
      s !== void 0 && (t += (t.length ? "&" : "") + n, s != null && (t += "=" + s));
    });
  }
  return t;
}
function Ym(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 && (t[n] = nt(r) ? r.map((o) => o == null ? null : "" + o) : r == null ? r : "" + r);
  }
  return t;
}
const Xm = Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : ""), _a = Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : ""), ps = Symbol(process.env.NODE_ENV !== "production" ? "router" : ""), yf = Symbol(process.env.NODE_ENV !== "production" ? "route location" : ""), bi = Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function gr() {
  let e = [];
  function t(r) {
    return e.push(r), () => {
      const o = e.indexOf(r);
      o > -1 && e.splice(o, 1);
    };
  }
  function n() {
    e = [];
  }
  return {
    add: t,
    list: () => e.slice(),
    reset: n
  };
}
function fn(e, t, n, r, o, s = (i) => i()) {
  const i = r && // name is defined if record is because of the function overload
  (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
  return () => new Promise((c, a) => {
    const f = (d) => {
      d === !1 ? a(ir(4, {
        from: n,
        to: t
      })) : d instanceof Error ? a(d) : Ho(d) ? a(ir(2, {
        from: t,
        to: d
      })) : (i && // since enterCallbackArray is truthy, both record and name also are
      r.enterCallbacks[o] === i && typeof d == "function" && i.push(d), c());
    }, u = s(() => e.call(r && r.instances[o], t, n, process.env.NODE_ENV !== "production" ? Jm(f, t, n) : f));
    let l = Promise.resolve(u);
    if (e.length < 3 && (l = l.then(f)), process.env.NODE_ENV !== "production" && e.length > 2) {
      const d = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof u == "object" && "then" in u)
        l = l.then((h) => f._called ? h : (ie(d), Promise.reject(new Error("Invalid navigation guard"))));
      else if (u !== void 0 && !f._called) {
        ie(d), a(new Error("Invalid navigation guard"));
        return;
      }
    }
    l.catch((d) => a(d));
  });
}
function Jm(e, t, n) {
  let r = 0;
  return function() {
    r++ === 1 && ie(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, r === 1 && e.apply(null, arguments);
  };
}
function Rs(e, t, n, r, o = (s) => s()) {
  const s = [];
  for (const i of e) {
    process.env.NODE_ENV !== "production" && !i.components && !i.children.length && ie(`Record with path "${i.path}" is either missing a "component(s)" or "children" property.`);
    for (const c in i.components) {
      let a = i.components[c];
      if (process.env.NODE_ENV !== "production") {
        if (!a || typeof a != "object" && typeof a != "function")
          throw ie(`Component "${c}" in record with path "${i.path}" is not a valid component. Received "${String(a)}".`), new Error("Invalid route component");
        if ("then" in a) {
          ie(`Component "${c}" in record with path "${i.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const f = a;
          a = () => f;
        } else a.__asyncLoader && // warn only once per component
        !a.__warnedDefineAsync && (a.__warnedDefineAsync = !0, ie(`Component "${c}" in record with path "${i.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !i.instances[c]))
        if (lf(a)) {
          const u = (a.__vccOpts || a)[t];
          u && s.push(fn(u, n, r, i, c, o));
        } else {
          let f = a();
          process.env.NODE_ENV !== "production" && !("catch" in f) && (ie(`Component "${c}" in record with path "${i.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), f = Promise.resolve(f)), s.push(() => f.then((u) => {
            if (!u)
              throw new Error(`Couldn't resolve component "${c}" at "${i.path}"`);
            const l = em(u) ? u.default : u;
            i.mods[c] = u, i.components[c] = l;
            const h = (l.__vccOpts || l)[t];
            return h && fn(h, n, r, i, c, o)();
          }));
        }
    }
  }
  return s;
}
function ma(e) {
  const t = Je(ps), n = Je(yf);
  let r = !1, o = null;
  const s = Me(() => {
    const u = Vt(e.to);
    return process.env.NODE_ENV !== "production" && (!r || u !== o) && (Ho(u) || (r ? ie(`Invalid value for prop "to" in useLink()
- to:`, u, `
- previous to:`, o, `
- props:`, e) : ie(`Invalid value for prop "to" in useLink()
- to:`, u, `
- props:`, e)), o = u, r = !0), t.resolve(u);
  }), i = Me(() => {
    const { matched: u } = s.value, { length: l } = u, d = u[l - 1], h = n.matched;
    if (!d || !h.length)
      return -1;
    const m = h.findIndex(mn.bind(null, d));
    if (m > -1)
      return m;
    const y = va(u[l - 2]);
    return (
      // we are dealing with nested routes
      l > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      va(d) === y && // avoid comparing the child with its parent
      h[h.length - 1].path !== y ? h.findIndex(mn.bind(null, u[l - 2])) : m
    );
  }), c = Me(() => i.value > -1 && nv(n.params, s.value.params)), a = Me(() => i.value > -1 && i.value === n.matched.length - 1 && gf(n.params, s.value.params));
  function f(u = {}) {
    if (tv(u)) {
      const l = t[Vt(e.replace) ? "replace" : "push"](
        Vt(e.to)
        // avoid uncaught errors are they are logged anyway
      ).catch(Vr);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => l), l;
    }
    return Promise.resolve();
  }
  if (process.env.NODE_ENV !== "production" && Bt) {
    const u = Ye();
    if (u) {
      const l = {
        route: s.value,
        isActive: c.value,
        isExactActive: a.value,
        error: null
      };
      u.__vrl_devtools = u.__vrl_devtools || [], u.__vrl_devtools.push(l), ru(() => {
        l.route = s.value, l.isActive = c.value, l.isExactActive = a.value, l.error = Ho(Vt(e.to)) ? null : 'Invalid "to" value';
      }, { flush: "post" });
    }
  }
  return {
    route: s,
    href: Me(() => s.value.href),
    isActive: c,
    isExactActive: a,
    navigate: f
  };
}
function Qm(e) {
  return e.length === 1 ? e[0] : e;
}
const Zm = /* @__PURE__ */ Re({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: !0
    },
    replace: Boolean,
    activeClass: String,
    // inactiveClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    }
  },
  useLink: ma,
  setup(e, { slots: t }) {
    const n = It(ma(e)), { options: r } = Je(ps), o = Me(() => ({
      [ya(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [ya(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const s = t.default && Qm(t.default(n));
      return e.custom ? s : ls("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: o.value
      }, s);
    };
  }
}), ev = Zm;
function tv(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function nv(e, t) {
  for (const n in t) {
    const r = t[n], o = e[n];
    if (typeof r == "string") {
      if (r !== o)
        return !1;
    } else if (!nt(o) || o.length !== r.length || r.some((s, i) => s !== o[i]))
      return !1;
  }
  return !0;
}
function va(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const ya = (e, t, n) => e ?? t ?? n, rv = /* @__PURE__ */ Re({
  name: "RouterView",
  // #674 we manually inherit them
  inheritAttrs: !1,
  props: {
    name: {
      type: String,
      default: "default"
    },
    route: Object
  },
  // Better compat for @vue/compat users
  // https://github.com/vuejs/router/issues/1315
  compatConfig: { MODE: 3 },
  setup(e, { attrs: t, slots: n }) {
    process.env.NODE_ENV !== "production" && sv();
    const r = Je(bi), o = Me(() => e.route || r.value), s = Je(_a, 0), i = Me(() => {
      let f = Vt(s);
      const { matched: u } = o.value;
      let l;
      for (; (l = u[f]) && !l.components; )
        f++;
      return f;
    }), c = Me(() => o.value.matched[i.value]);
    xr(_a, Me(() => i.value + 1)), xr(Xm, c), xr(bi, o);
    const a = Ce();
    return $e(() => [a.value, c.value, e.name], ([f, u, l], [d, h, m]) => {
      u && (u.instances[l] = f, h && h !== u && f && f === d && (u.leaveGuards.size || (u.leaveGuards = h.leaveGuards), u.updateGuards.size || (u.updateGuards = h.updateGuards))), f && u && // if there is no instance but to and from are the same this might be
      // the first visit
      (!h || !mn(u, h) || !d) && (u.enterCallbacks[l] || []).forEach((y) => y(f));
    }, { flush: "post" }), () => {
      const f = o.value, u = e.name, l = c.value, d = l && l.components[u];
      if (!d)
        return ba(n.default, { Component: d, route: f });
      const h = l.props[u], m = h ? h === !0 ? f.params : typeof h == "function" ? h(f) : h : null, M = ls(d, ve({}, m, t, {
        onVnodeUnmounted: (V) => {
          V.component.isUnmounted && (l.instances[u] = null);
        },
        ref: a
      }));
      if (process.env.NODE_ENV !== "production" && Bt && M.ref) {
        const V = {
          depth: i.value,
          name: l.name,
          path: l.path,
          meta: l.meta
        };
        (nt(M.ref) ? M.ref.map((g) => g.i) : [M.ref.i]).forEach((g) => {
          g.__vrv_devtools = V;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        ba(n.default, { Component: M, route: f }) || M
      );
    };
  }
});
function ba(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const ov = rv;
function sv() {
  const e = Ye(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
    const r = t === "KeepAlive" ? "keep-alive" : "transition";
    ie(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${r}>
    <component :is="Component" />
  </${r}>
</router-view>`);
  }
}
function _r(e, t) {
  const n = ve({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((r) => _v(r, ["instances", "children", "aliasOf"]))
  });
  return {
    _custom: {
      type: null,
      readOnly: !0,
      display: e.fullPath,
      tooltip: t,
      value: n
    }
  };
}
function lo(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let iv = 0;
function cv(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const r = iv++;
  Ju({
    id: "org.vuejs.router" + (r ? "." + r : ""),
    label: "Vue Router",
    packageName: "vue-router",
    homepage: "https://router.vuejs.org",
    logo: "https://router.vuejs.org/logo.png",
    componentStateTypes: ["Routing"],
    app: e
  }, (o) => {
    typeof o.now != "function" && console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), o.on.inspectComponent((u, l) => {
      u.instanceData && u.instanceData.state.push({
        type: "Routing",
        key: "$route",
        editable: !1,
        value: _r(t.currentRoute.value, "Current Route")
      });
    }), o.on.visitComponentTree(({ treeNode: u, componentInstance: l }) => {
      if (l.__vrv_devtools) {
        const d = l.__vrv_devtools;
        u.tags.push({
          label: (d.name ? `${d.name.toString()}: ` : "") + d.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: bf
        });
      }
      nt(l.__vrl_devtools) && (l.__devtoolsApi = o, l.__vrl_devtools.forEach((d) => {
        let h = d.route.path, m = Nf, y = "", M = 0;
        d.error ? (h = d.error, m = dv, M = pv) : d.isExactActive ? (m = wf, y = "This is exactly active") : d.isActive && (m = Ef, y = "This link is active"), u.tags.push({
          label: h,
          textColor: M,
          tooltip: y,
          backgroundColor: m
        });
      }));
    }), $e(t.currentRoute, () => {
      a(), o.notifyComponentUpdate(), o.sendInspectorTree(c), o.sendInspectorState(c);
    });
    const s = "router:navigations:" + r;
    o.addTimelineLayer({
      id: s,
      label: `Router${r ? " " + r : ""} Navigations`,
      color: 4237508
    }), t.onError((u, l) => {
      o.addTimelineEvent({
        layerId: s,
        event: {
          title: "Error during Navigation",
          subtitle: l.fullPath,
          logType: "error",
          time: o.now(),
          data: { error: u },
          groupId: l.meta.__navigationId
        }
      });
    });
    let i = 0;
    t.beforeEach((u, l) => {
      const d = {
        guard: lo("beforeEach"),
        from: _r(l, "Current Location during this navigation"),
        to: _r(u, "Target location")
      };
      Object.defineProperty(u.meta, "__navigationId", {
        value: i++
      }), o.addTimelineEvent({
        layerId: s,
        event: {
          time: o.now(),
          title: "Start of navigation",
          subtitle: u.fullPath,
          data: d,
          groupId: u.meta.__navigationId
        }
      });
    }), t.afterEach((u, l, d) => {
      const h = {
        guard: lo("afterEach")
      };
      d ? (h.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: d ? d.message : "",
          tooltip: "Navigation Failure",
          value: d
        }
      }, h.status = lo("❌")) : h.status = lo("✅"), h.from = _r(l, "Current Location during this navigation"), h.to = _r(u, "Target location"), o.addTimelineEvent({
        layerId: s,
        event: {
          title: "End of navigation",
          subtitle: u.fullPath,
          time: o.now(),
          data: h,
          logType: d ? "warning" : "default",
          groupId: u.meta.__navigationId
        }
      });
    });
    const c = "router-inspector:" + r;
    o.addInspector({
      id: c,
      label: "Routes" + (r ? " " + r : ""),
      icon: "book",
      treeFilterPlaceholder: "Search routes"
    });
    function a() {
      if (!f)
        return;
      const u = f;
      let l = n.getRoutes().filter((d) => !d.parent || // these routes have a parent with no component which will not appear in the view
      // therefore we still need to include them
      !d.parent.record.components);
      l.forEach(Sf), u.filter && (l = l.filter((d) => (
        // save matches state based on the payload
        Ei(d, u.filter.toLowerCase())
      ))), l.forEach((d) => xf(d, t.currentRoute.value)), u.rootNodes = l.map(Of);
    }
    let f;
    o.on.getInspectorTree((u) => {
      f = u, u.app === e && u.inspectorId === c && a();
    }), o.on.getInspectorState((u) => {
      if (u.app === e && u.inspectorId === c) {
        const d = n.getRoutes().find((h) => h.record.__vd_id === u.nodeId);
        d && (u.state = {
          options: lv(d)
        });
      }
    }), o.sendInspectorTree(c), o.sendInspectorState(c);
  });
}
function av(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function lv(e) {
  const { record: t } = e, n = [
    { editable: !1, key: "path", value: t.path }
  ];
  return t.name != null && n.push({
    editable: !1,
    key: "name",
    value: t.name
  }), n.push({ editable: !1, key: "regexp", value: e.re }), e.keys.length && n.push({
    editable: !1,
    key: "keys",
    value: {
      _custom: {
        type: null,
        readOnly: !0,
        display: e.keys.map((r) => `${r.name}${av(r)}`).join(" "),
        tooltip: "Param keys",
        value: e.keys
      }
    }
  }), t.redirect != null && n.push({
    editable: !1,
    key: "redirect",
    value: t.redirect
  }), e.alias.length && n.push({
    editable: !1,
    key: "aliases",
    value: e.alias.map((r) => r.record.path)
  }), Object.keys(e.record.meta).length && n.push({
    editable: !1,
    key: "meta",
    value: e.record.meta
  }), n.push({
    key: "score",
    editable: !1,
    value: {
      _custom: {
        type: null,
        readOnly: !0,
        display: e.score.map((r) => r.join(", ")).join(" | "),
        tooltip: "Score used to sort routes",
        value: e.score
      }
    }
  }), n;
}
const bf = 15485081, Ef = 2450411, wf = 8702998, uv = 2282478, Nf = 16486972, fv = 6710886, dv = 16704226, pv = 12131356;
function Of(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: uv
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: Nf
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: bf
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: wf
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: Ef
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: fv
  });
  let r = n.__vd_id;
  return r == null && (r = String(hv++), n.__vd_id = r), {
    id: r,
    label: n.path,
    tags: t,
    children: e.children.map(Of)
  };
}
let hv = 0;
const gv = /^\/(.*)\/([a-z]*)$/;
function xf(e, t) {
  const n = t.matched.length && mn(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((r) => mn(r, e.record))), e.children.forEach((r) => xf(r, t));
}
function Sf(e) {
  e.__vd_match = !1, e.children.forEach(Sf);
}
function Ei(e, t) {
  const n = String(e.re).match(gv);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((i) => Ei(i, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const o = e.record.path.toLowerCase(), s = sr(o);
  return !t.startsWith("/") && (s.includes(t) || o.includes(t)) || s.startsWith(t) || o.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((i) => Ei(i, t));
}
function _v(e, t) {
  const n = {};
  for (const r in e)
    t.includes(r) || (n[r] = e[r]);
  return n;
}
function mv(e) {
  const t = jm(e.routes, e), n = e.parseQuery || qm, r = e.stringifyQuery || ga, o = e.history;
  if (process.env.NODE_ENV !== "production" && !o)
    throw new Error('Provide the "history" option when calling "createRouter()": https://router.vuejs.org/api/interfaces/RouterOptions.html#history');
  const s = gr(), i = gr(), c = gr(), a = Vi(on);
  let f = on;
  Bt && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const u = As.bind(null, (N) => "" + N), l = As.bind(null, pm), d = (
    // @ts-expect-error: intentionally avoid the type check
    As.bind(null, sr)
  );
  function h(N, H) {
    let F, q;
    return _f(N) ? (F = t.getRecordMatcher(N), process.env.NODE_ENV !== "production" && !F && ie(`Parent route "${String(N)}" not found when adding child route`, H), q = H) : q = N, t.addRoute(q, F);
  }
  function m(N) {
    const H = t.getRecordMatcher(N);
    H ? t.removeRoute(H) : process.env.NODE_ENV !== "production" && ie(`Cannot remove non-existent route "${String(N)}"`);
  }
  function y() {
    return t.getRoutes().map((N) => N.record);
  }
  function M(N) {
    return !!t.getRecordMatcher(N);
  }
  function V(N, H) {
    if (H = ve({}, H || a.value), typeof N == "string") {
      const p = ks(n, N, H.path), _ = t.resolve({ path: p.path }, H), w = o.createHref(p.fullPath);
      return process.env.NODE_ENV !== "production" && (w.startsWith("//") ? ie(`Location "${N}" resolved to "${w}". A resolved location cannot start with multiple slashes.`) : _.matched.length || ie(`No match found for location with path "${N}"`)), ve(p, _, {
        params: d(_.params),
        hash: sr(p.hash),
        redirectedFrom: void 0,
        href: w
      });
    }
    if (process.env.NODE_ENV !== "production" && !Ho(N))
      return ie(`router.resolve() was passed an invalid location. This will fail in production.
- Location:`, N), V({});
    let F;
    if (N.path != null)
      process.env.NODE_ENV !== "production" && "params" in N && !("name" in N) && // @ts-expect-error: the type is never
      Object.keys(N.params).length && ie(`Path "${N.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), F = ve({}, N, {
        path: ks(n, N.path, H.path).path
      });
    else {
      const p = ve({}, N.params);
      for (const _ in p)
        p[_] == null && delete p[_];
      F = ve({}, N, {
        params: l(p)
      }), H.params = l(H.params);
    }
    const q = t.resolve(F, H), se = N.hash || "";
    process.env.NODE_ENV !== "production" && se && !se.startsWith("#") && ie(`A \`hash\` should always start with the character "#". Replace "${se}" with "#${se}".`), q.params = u(d(q.params));
    const Ee = _m(r, ve({}, N, {
      hash: um(se),
      path: q.path
    })), te = o.createHref(Ee);
    return process.env.NODE_ENV !== "production" && (te.startsWith("//") ? ie(`Location "${N}" resolved to "${te}". A resolved location cannot start with multiple slashes.`) : q.matched.length || ie(`No match found for location with path "${N.path != null ? N.path : N}"`)), ve({
      fullPath: Ee,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: se,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        r === ga ? Ym(N.query) : N.query || {}
      )
    }, q, {
      redirectedFrom: void 0,
      href: te
    });
  }
  function E(N) {
    return typeof N == "string" ? ks(n, N, a.value.path) : ve({}, N);
  }
  function g(N, H) {
    if (f !== N)
      return ir(8, {
        from: H,
        to: N
      });
  }
  function b(N) {
    return R(N);
  }
  function v(N) {
    return b(ve(E(N), { replace: !0 }));
  }
  function x(N) {
    const H = N.matched[N.matched.length - 1];
    if (H && H.redirect) {
      const { redirect: F } = H;
      let q = typeof F == "function" ? F(N) : F;
      if (typeof q == "string" && (q = q.includes("?") || q.includes("#") ? q = E(q) : (
        // force empty params
        { path: q }
      ), q.params = {}), process.env.NODE_ENV !== "production" && q.path == null && !("name" in q))
        throw ie(`Invalid redirect found:
${JSON.stringify(q, null, 2)}
 when navigating to "${N.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return ve({
        query: N.query,
        hash: N.hash,
        // avoid transferring params if the redirect has a path
        params: q.path != null ? {} : N.params
      }, q);
    }
  }
  function R(N, H) {
    const F = f = V(N), q = a.value, se = N.state, Ee = N.force, te = N.replace === !0, p = x(F);
    if (p)
      return R(
        ve(E(p), {
          state: typeof p == "object" ? ve({}, se, p.state) : se,
          force: Ee,
          replace: te
        }),
        // keep original redirectedFrom if it exists
        H || F
      );
    const _ = F;
    _.redirectedFrom = H;
    let w;
    return !Ee && sa(r, q, F) && (w = ir(16, { to: _, from: q }), en(
      q,
      q,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (w ? Promise.resolve(w) : A(_, q)).catch((S) => jt(S) ? (
      // navigation redirects still mark the router as ready
      jt(
        S,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? S : pt(S)
    ) : (
      // reject any unknown error
      G(S, _, q)
    )).then((S) => {
      if (S) {
        if (jt(
          S,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return process.env.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          sa(r, V(S.to), _) && // and we have done it a couple of times
          H && // @ts-expect-error: added only in dev
          (H._count = H._count ? (
            // @ts-expect-error
            H._count + 1
          ) : 1) > 30 ? (ie(`Detected a possibly infinite redirection in a navigation guard when going from "${q.fullPath}" to "${_.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : R(
            // keep options
            ve({
              // preserve an existing replacement but allow the redirect to override it
              replace: te
            }, E(S.to), {
              state: typeof S.to == "object" ? ve({}, se, S.to.state) : se,
              force: Ee
            }),
            // preserve the original redirectedFrom if any
            H || _
          );
      } else
        S = k(_, q, !0, te, se);
      return K(_, q, S), S;
    });
  }
  function U(N, H) {
    const F = g(N, H);
    return F ? Promise.reject(F) : Promise.resolve();
  }
  function C(N) {
    const H = tn.values().next().value;
    return H && typeof H.runWithContext == "function" ? H.runWithContext(N) : N();
  }
  function A(N, H) {
    let F;
    const [q, se, Ee] = vv(N, H);
    F = Rs(q.reverse(), "beforeRouteLeave", N, H);
    for (const p of q)
      p.leaveGuards.forEach((_) => {
        F.push(fn(_, N, H));
      });
    const te = U.bind(null, N, H);
    return F.push(te), nn(F).then(() => {
      F = [];
      for (const p of s.list())
        F.push(fn(p, N, H));
      return F.push(te), nn(F);
    }).then(() => {
      F = Rs(se, "beforeRouteUpdate", N, H);
      for (const p of se)
        p.updateGuards.forEach((_) => {
          F.push(fn(_, N, H));
        });
      return F.push(te), nn(F);
    }).then(() => {
      F = [];
      for (const p of Ee)
        if (p.beforeEnter)
          if (nt(p.beforeEnter))
            for (const _ of p.beforeEnter)
              F.push(fn(_, N, H));
          else
            F.push(fn(p.beforeEnter, N, H));
      return F.push(te), nn(F);
    }).then(() => (N.matched.forEach((p) => p.enterCallbacks = {}), F = Rs(Ee, "beforeRouteEnter", N, H, C), F.push(te), nn(F))).then(() => {
      F = [];
      for (const p of i.list())
        F.push(fn(p, N, H));
      return F.push(te), nn(F);
    }).catch((p) => jt(
      p,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? p : Promise.reject(p));
  }
  function K(N, H, F) {
    c.list().forEach((q) => C(() => q(N, H, F)));
  }
  function k(N, H, F, q, se) {
    const Ee = g(N, H);
    if (Ee)
      return Ee;
    const te = H === on, p = Bt ? history.state : {};
    F && (q || te ? o.replace(N.fullPath, ve({
      scroll: te && p && p.scroll
    }, se)) : o.push(N.fullPath, se)), a.value = N, en(N, H, F, te), pt();
  }
  let z;
  function oe() {
    z || (z = o.listen((N, H, F) => {
      if (!eo.listening)
        return;
      const q = V(N), se = x(q);
      if (se) {
        R(ve(se, { replace: !0, force: !0 }), q).catch(Vr);
        return;
      }
      f = q;
      const Ee = a.value;
      Bt && xm(ca(Ee.fullPath, F.delta), Nm()), A(q, Ee).catch((te) => jt(
        te,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? te : jt(
        te,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (R(
        ve(E(te.to), {
          force: !0
        }),
        q
        // avoid an uncaught rejection, let push call triggerError
      ).then((p) => {
        jt(
          p,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !F.delta && F.type === Gr.pop && o.go(-1, !1);
      }).catch(Vr), Promise.reject()) : (F.delta && o.go(-F.delta, !1), G(te, q, Ee))).then((te) => {
        te = te || k(
          // after navigation, all matched components are resolved
          q,
          Ee,
          !1
        ), te && (F.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !jt(
          te,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? o.go(-F.delta, !1) : F.type === Gr.pop && jt(
          te,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && o.go(-1, !1)), K(q, Ee, te);
      }).catch(Vr);
    }));
  }
  let ne = gr(), W = gr(), J;
  function G(N, H, F) {
    pt(N);
    const q = W.list();
    return q.length ? q.forEach((se) => se(N, H, F)) : (process.env.NODE_ENV !== "production" && ie("uncaught error during route navigation:"), console.error(N)), Promise.reject(N);
  }
  function ye() {
    return J && a.value !== on ? Promise.resolve() : new Promise((N, H) => {
      ne.add([N, H]);
    });
  }
  function pt(N) {
    return J || (J = !N, oe(), ne.list().forEach(([H, F]) => N ? F(N) : H()), ne.reset()), N;
  }
  function en(N, H, F, q) {
    const { scrollBehavior: se } = e;
    if (!Bt || !se)
      return Promise.resolve();
    const Ee = !F && Sm(ca(N.fullPath, 0)) || (q || !F) && history.state && history.state.scroll || null;
    return jn().then(() => se(N, H, Ee)).then((te) => te && Om(te)).catch((te) => G(te, N, H));
  }
  const Nt = (N) => o.go(N);
  let ot;
  const tn = /* @__PURE__ */ new Set(), eo = {
    currentRoute: a,
    listening: !0,
    addRoute: h,
    removeRoute: m,
    clearRoutes: t.clearRoutes,
    hasRoute: M,
    getRoutes: y,
    resolve: V,
    options: e,
    push: b,
    replace: v,
    go: Nt,
    back: () => Nt(-1),
    forward: () => Nt(1),
    beforeEach: s.add,
    beforeResolve: i.add,
    afterEach: c.add,
    onError: W.add,
    isReady: ye,
    install(N) {
      const H = this;
      N.component("RouterLink", ev), N.component("RouterView", ov), N.config.globalProperties.$router = H, Object.defineProperty(N.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => Vt(a)
      }), Bt && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !ot && a.value === on && (ot = !0, b(o.location).catch((se) => {
        process.env.NODE_ENV !== "production" && ie("Unexpected error when starting the router:", se);
      }));
      const F = {};
      for (const se in on)
        Object.defineProperty(F, se, {
          get: () => a.value[se],
          enumerable: !0
        });
      N.provide(ps, H), N.provide(yf, Ti(F)), N.provide(bi, a);
      const q = N.unmount;
      tn.add(N), N.unmount = function() {
        tn.delete(N), tn.size < 1 && (f = on, z && z(), z = null, a.value = on, ot = !1, J = !1), q();
      }, process.env.NODE_ENV !== "production" && Bt && cv(N, H, t);
    }
  };
  function nn(N) {
    return N.reduce((H, F) => H.then(() => C(F)), Promise.resolve());
  }
  return eo;
}
function vv(e, t) {
  const n = [], r = [], o = [], s = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < s; i++) {
    const c = t.matched[i];
    c && (e.matched.find((f) => mn(f, c)) ? r.push(c) : n.push(c));
    const a = e.matched[i];
    a && (t.matched.find((f) => mn(f, a)) || o.push(a));
  }
  return [n, r, o];
}
function jy() {
  return Je(ps);
}
function yv() {
  const e = [
    { path: "/", redirect: "/colors" },
    { path: "/colors", component: () => import("./colors-CzPDEu_C.mjs"), name: "colors" },
    { path: "/colors/create", component: () => import("./create-CPg0vCId.mjs"), name: "color-create" },
    { path: "/colors/:token", component: () => import("./edit-hiE03MIT.mjs"), name: "color-edit" },
    { path: "/settings", component: () => import("./settings-Bunz9Et6.mjs"), name: "settings" }
  ], t = Cm();
  return mv({
    history: t,
    routes: e
  });
}
function Fy(e) {
  return typeof e == "object" && e.r != null && e.a == null;
}
function Hy(e) {
  return typeof e == "object" && e.r != null && e.a != null;
}
function Uy(e) {
  return typeof e == "object" && e.h != null && e.a == null;
}
function bv(e) {
  return typeof e == "object" && e.h != null && e.a != null;
}
function By(e) {
  return typeof e == "string" && e[0] == "#" && (e.length == 7 || e.length == 9);
}
function Ev({ r: e, g: t, b: n }) {
  e /= 255, t /= 255, n /= 255;
  let r = Math.max(e, t, n), o = Math.min(e, t, n), s = 0, i = 0, c = r, a = r - o;
  if (i = r == 0 ? 0 : a / r, r == o)
    s = 0;
  else {
    switch (r) {
      case e:
        s = (t - n) / a + (t < n ? 6 : 0);
        break;
      case t:
        s = (n - e) / a + 2;
        break;
      case n:
        s = (e - t) / a + 4;
        break;
    }
    s /= 6;
  }
  return s *= 360, i *= 100, c *= 100, { h: s, s: i, v: c };
}
function wv({ r: e, g: t, b: n, a: r = 100 }) {
  return { ...Ev({ r: e, g: t, b: n }), a: r };
}
function Nv({ h: e, s: t, v: n }) {
  e /= 360, t /= 100, n /= 100;
  let r = 0, o = 0, s = 0, i = Math.floor(e * 6), c = e * 6 - i, a = n * (1 - t), f = n * (1 - c * t), u = n * (1 - (1 - c) * t);
  switch (i % 6) {
    case 0:
      r = n, o = u, s = a;
      break;
    case 1:
      r = f, o = n, s = a;
      break;
    case 2:
      r = a, o = n, s = u;
      break;
    case 3:
      r = a, o = f, s = n;
      break;
    case 4:
      r = u, o = a, s = n;
      break;
    case 5:
      r = n, o = a, s = f;
      break;
  }
  return r = Math.round(r * 255), o = Math.round(o * 255), s = Math.round(s * 255), { r, g: o, b: s };
}
function tc({ h: e, s: t, v: n, a: r = 100 }) {
  return { ...Nv({ h: e, s: t, v: n }), a: r };
}
function yo(e) {
  return Math.round(e).toString(16).padStart(2, "0");
}
function Cf(e) {
  return parseInt(e, 16);
}
function Ov({ r: e, g: t, b: n }) {
  return `#${yo(e)}${yo(t)}${yo(n)}`;
}
function xv({ r: e, g: t, b: n, a: r = 100 }) {
  return Ov({ r: e, g: t, b: n }) + (r == 100 ? "" : yo(r * 2.55));
}
function Ky(e) {
  const [t, n, r] = (e.slice(1).match(/.{1,2}/g) || []).map(Cf);
  return {
    r: t,
    g: n,
    b: r
  };
}
function Df(e) {
  const [t, n, r, o] = (e.slice(1).match(/.{1,2}/g) || []).map(Cf);
  return {
    a: 100,
    // Make sure we always have alpha
    r: t,
    g: n,
    b: r,
    a: o
  };
}
function Sv(e) {
  return xv(tc(e));
}
function Gy(e) {
  return wv(Df(e));
}
function zy(e) {
  const { r: t, g: n, b: r } = Df(e);
  return !((t * 299 + n * 587 + r * 114) / 1e3 >= 128);
}
class ae {
  constructor(t, n) {
    bn(this, "x", 0);
    bn(this, "y", 0);
    if (typeof t == "object") {
      const { x: r, y: o } = t;
      r && (this.x = r), o && (this.y = o);
    } else typeof t == "number" && (this.x = t, n && (this.y = n));
  }
  toString() {
    return `${this.x * 100},${this.y * 100}`;
  }
  toArray() {
    return [this.x, this.y];
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  static normalize(t) {
    let n = t.length();
    return n == 0 ? new ae() : new ae(t.x / n, t.y / n);
  }
  static add(t, n) {
    return new ae(t.x + n.x, t.y + n.y);
  }
  static subtract(t, n) {
    return new ae(t.x - n.x, t.y - n.y);
  }
  static multiply(t, n) {
    return new ae(t.x * n.x, t.y * n.y);
  }
  static divide(t, n) {
    return new ae(t.x / n.x, t.y / n.y);
  }
  static min(t, n) {
    return new ae(Math.min(t, n.x), Math.min(t, n.y));
  }
  static max(t, n) {
    return new ae(Math.max(t, n.x), Math.max(t, n.y));
  }
}
const Cv = 1e-6, Ea = Math.PI * 2;
function Ps(e, t, n) {
  return Math.abs(e - t) <= Cv;
}
function mr(e) {
  return e < 0 ? -Math.pow(-e, 1 / 3) : Math.pow(e, 1 / 3);
}
function Dv(e, t, n, r) {
  var o = function(z) {
    return 0 <= z && z <= 1;
  }, s = -e + 3 * t - 3 * n + r, i = 3 * e - 6 * t + 3 * n, c = -3 * e + 3 * t, a = e;
  if (Ps(s, 0)) {
    if (Ps(i, 0))
      return Ps(c, 0) ? [] : [-a / c].filter(o);
    var d = Math.sqrt(c * c - 4 * i * a), f = 2 * i;
    return [(d - c) / f, (-c - d) / f].filter(o);
  }
  i /= s, c /= s, a /= s;
  var u = (3 * c - i * i) / 3, l = u / 3, d = (2 * i * i * i - 9 * i * c + 27 * a) / 27, h = d / 2, m = h * h + l * l * l, y, M, V, E, g;
  if (m < 0) {
    var b = -u / 3, v = b * b * b, x = Math.sqrt(v), R = -d / (2 * x), U = R < -1 ? -1 : R > 1 ? 1 : R, C = Math.acos(U), A = mr(x), K = 2 * A;
    return V = K * Math.cos(C / 3) - i / 3, E = K * Math.cos((C + Ea) / 3) - i / 3, g = K * Math.cos((C + 2 * Ea) / 3) - i / 3, [V, E, g].filter(o);
  } else {
    if (m === 0 && u + d != 0)
      return y = h < 0 ? mr(-h) : -mr(h), V = 2 * y - i / 3, E = -y - i / 3, [V, E].filter(o);
    var k = Math.sqrt(m);
    return y = mr(-h + k), M = mr(h + k), [y - M - i / 3].filter(o);
  }
}
class wa {
  constructor(t) {
    bn(this, "P1", new ae(0, 0));
    bn(this, "P2", new ae(0.5, 0.5));
    bn(this, "P3", new ae(0.5, 0.5));
    bn(this, "P4", new ae(1, 1));
    this.P1 = t[0], this.P2 = t[1], this.P3 = t[2], this.P4 = t[3];
  }
  sample(t) {
    const n = 1 - t, r = n * n * n, o = 3 * t * n * n, s = 3 * t * t * n, i = t * t * t;
    return new ae(
      this.P1.x * r + this.P2.x * o + this.P3.x * s + this.P4.x * i,
      this.P1.y * r + this.P2.y * o + this.P3.y * s + this.P4.y * i
    );
  }
  getTForY(t) {
    return Dv(this.P1.y - t, this.P2.y - t, this.P3.y - t, this.P4.y - t)[0];
  }
  getXForY(t) {
    let n;
    return t == 0 || t == 1 ? n = t : n = this.getTForY(t), this.sample(n).x;
  }
}
function Tv(e) {
  let t = new ae(e.start, 0), n = new ae(e.mid, 0.5), r = new ae(e.end, 1), o = ae.max(0, ae.min(1, ae.add(t, new ae(e.controls[0])))), s = ae.max(0, ae.min(1, ae.add(n, new ae(e.controls[1])))), i = ae.max(0, ae.min(1, ae.add(n, new ae(e.controls[2])))), c = ae.max(0, ae.min(1, ae.add(r, new ae(e.controls[3]))));
  return {
    start: [t, o, s, n],
    end: [n, i, c, r]
  };
}
function Ms(e, t, n = 100) {
  let { start: r, end: o } = Tv(e), s = new wa(r), i = new wa(o);
  return t < 0.5 ? s.getXForY(t) * n : t == 0.5 ? r[3].x * n : i.getXForY(t) * n;
}
function nc(e, t) {
  let n = (Ms(e.hue_curve, t, 360) + (e.hue_offset ?? 0)) % 360, r = Ms(e.saturation_curve, t), o = Ms(e.value_curve, t);
  return { h: n, s: r, v: o };
}
function Vv(e) {
  let t = {};
  for (let n = 0; n < e.steps; n++) {
    let r = n / (e.steps - 1), o = Math.round(r * e.start + (1 - r) * e.end);
    t[o] = { ...nc(e, 1 - r), a: 100 };
  }
  return t;
}
function Av(e) {
  let t = {};
  for (let n = 0; n < e.steps; n++) {
    let r = n / (e.steps - 1), o = Math.round(r * e.start + (1 - r) * e.end);
    t[o] = tc(nc(e, 1 - r));
  }
  return t;
}
function Wy(e) {
  let t = {};
  for (let n = 0; n < e.steps; n++) {
    let r = n / (e.steps - 1), o = Math.round(r * e.start + (1 - r) * e.end);
    t[o] = Sv(nc(e, 1 - r));
  }
  return t;
}
function qy(e, t) {
  let n = [];
  for (let r = 0; r < e.steps; r++) {
    let o = r / (e.steps - 1), s = Math.round(o * e.start + (1 - o) * e.end);
    n.push({ step: o, color: t[s] });
  }
  return n;
}
const Is = [];
function Tf(e, t, n = !1) {
  n || (Is.length = 0);
  let r = e.split("."), o = r.shift();
  if (!o) throw new Error("Unable to resolve alias: the alias does not contain a valid token reference");
  if (Is.includes(o)) return { message: "Unable to resolve alias: cyclic token reference encountered" };
  Is.push(o);
  let s = t[o];
  if (!s) return { message: `Unable to resolve alias: ${o} does not exist in the colors config` };
  if (bo(s) && (s = Tf(s, t, !0)), wi(s)) return s;
  for (; r.length; ) {
    let i = r.shift();
    if (!i) throw new Error("Unable to resolve alias: improperly formatted alias");
    if (wi(s)) return s;
    if (Vf(s)) return { message: `Unable to resolve alias: ${e} does not exist in the colors config` };
    if (hs(s) && (s = Vv(s)[i], !s))
      return { message: `Unable to resolve alias: ${o} does not exist in the color scale` };
  }
  return s;
}
function Vf(e) {
  return bv(e);
}
function hs(e) {
  return typeof e == "object" && e.hue_curve != null && e.start != null;
}
function bo(e) {
  return typeof e == "string";
}
function wi(e) {
  return typeof e == "object" && !!e.message;
}
function Qn(e) {
  for (let t in e.controls)
    e.controls[t] instanceof ae || (e.controls[t] = new ae(e.controls[t]));
}
function kv(e) {
  for (let [t, n] of Object.entries(e))
    hs(n) && (Qn(n.hue_curve), Qn(n.saturation_curve), Qn(n.value_curve));
  return e;
}
let Ls;
function $v() {
  if (!Ls) {
    const e = document.createElement("style");
    e.id = "color_suite_variables", document.head.appendChild(e);
    let t = e.sheet;
    if (!t) throw new Error("Color Suite stylesheet could not be created.");
    Ls = t;
  }
  return Ls;
}
const uo = /* @__PURE__ */ new Map();
function Na(e, t) {
  const n = $v();
  let r;
  if (uo.has(e))
    r = uo.get(e), r && (n.deleteRule(r), uo.set(e, n.insertRule(`:root{ --${e}: ${t} }`, r)));
  else {
    let o = n.insertRule(`:root{ --${e}: ${t} }`, n.rules.length);
    uo.set(e, o);
  }
}
function Rv(e, t, n) {
  let r = bo(t) ? Tf(t, n) : t;
  if (!wi(r)) {
    if (Vf(r)) {
      let { r: o, g: s, b: i } = tc(r), c = bo(t) ? `var(--color-${t.replace(".", "-")}, ${[o, s, i].join(",")})` : [o, s, i].join(",");
      Na(`color-${e}`, c);
    }
    if (hs(r)) {
      let o = Av(r);
      for (let [s, { r: i, g: c, b: a }] of Object.entries(o)) {
        let f = bo(t) ? `var(--color-${t.replace(".", "-")}-${s}, ${[i, c, a].join(",")})` : [i, c, a].join(",");
        Na(`color-${e}-${s}`, f);
      }
    }
  }
}
function Yy(e) {
  let t;
  return function(...n) {
    return cancelAnimationFrame(t), new Promise((r) => {
      t = requestAnimationFrame(() => r(e(...n)));
    });
  };
}
function Af(e) {
  const t = It(Object.create(Object.getPrototypeOf(e)));
  if (At(e))
    for (let [n, r] of Object.entries(e))
      typeof r == "object" || Array.isArray(r) ? t[n] = Af(r) : t[n] = r;
  return t;
}
const Pv = {
  namespaced: !0,
  state() {
    return kv(po);
  },
  mutations: {
    create(e, t) {
      e[t.token] = t.value;
    },
    update(e, { token: t, form: n }) {
      n.token != t && delete e[t], e[n.token] = n.value;
    },
    updateAll(e, t) {
      let n = Object.keys(e);
      for (let [r, o] of Object.entries(t)) {
        hs(o) && (Qn(o.hue_curve), Qn(o.saturation_curve), Qn(o.value_curve));
        let s = n.shift();
        if (s && r != s) {
          let i = n.indexOf(r);
          i >= 0 && (n.splice(i, 1), n.unshift(s));
        }
        delete e[r], e[r] = o;
      }
      for (let r of n) delete e[r];
    },
    delete(e, { token: t }) {
      delete e[t];
    }
  },
  actions: {
    async create(e, t) {
      return (await fetch(f_, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(t)
      })).ok ? (e.commit("create", t), { success: !0 }) : { success: !1 };
    },
    async update(e, { token: t, form: n }) {
      return (await fetch(`${d_}?token=${t}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(n)
      })).ok ? (e.commit("update", { token: t, form: n }), { success: !0 }) : { success: !1 };
    },
    async updateAll(e, t) {
      const n = Af(e.state);
      return e.commit("updateAll", t), (await fetch(p_, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(t)
      })).ok ? { success: !0 } : (e.commit("updateAll", n), { success: !1 });
    },
    async delete(e, { token: t }) {
      return (await fetch(`${h_}?token=${t}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      })).ok ? (e.commit("delete", { token: t }), { success: !0 }) : { success: !1 };
    }
  }
}, kf = Symbol("__COLOR_SERVICE__");
function Xy() {
  const e = Je(kf);
  if (!e) throw new Error("Unable to inject Color Service.");
  return e;
}
function Mv(e) {
  const t = new Proxy(It(po), {
    get(c, a) {
      return e.state.colors[a];
    },
    set(c, a, f) {
      return !0;
    }
  });
  for (let [c, a] of Object.entries(po))
    Rv(c, a, po);
  function n(c) {
    return e.dispatch("colors/create", c);
  }
  function r(c, a) {
    return e.dispatch("colors/update", { token: c, form: a });
  }
  function o(c) {
    return e.dispatch("colors/updateAll", c);
  }
  function s(c) {
    return e.dispatch("colors/delete", { token: c });
  }
  const i = {
    colors: t,
    createColor: n,
    updateColor: r,
    updateAll: o,
    deleteColor: s,
    install(c) {
      e.registerModule("colors", Pv), c.provide(kf, i);
    }
  };
  return i;
}
const Iv = /* @__PURE__ */ Re({
  props: {
    prefix: {
      type: String,
      default: "icon"
    },
    name: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    return { symbolId: Me(() => `#${e.prefix}-${e.name}`) };
  }
}), Lv = {
  viewBox: "0 0 1 1",
  "aria-hidden": "true"
}, jv = ["xlink:href"];
function Fv(e, t, n, r, o, s) {
  return we(), it("svg", Lv, [
    pe("use", { "xlink:href": e.symbolId }, null, 8, jv)
  ]);
}
const Hv = /* @__PURE__ */ rt(Iv, [["render", Fv]]), Uv = /* @__PURE__ */ Re({
  props: ["to", "is", "custom"],
  setup(e, { attrs: t }) {
    const n = Me(() => e.to ? "router-link" : e.is ? e.is : "button"), r = Me(() => {
      if (e.to && (e.custom || e.is))
        return !0;
    });
    return {
      resolved_is: n,
      custom: r
    };
  }
});
function Bv(e, t, n, r, o, s) {
  return we(), bt(qs(e.resolved_is), Pt(e.$attrs, {
    to: e.to,
    custom: e.custom
  }), {
    default: ft((i) => [
      e.is && !e.to || !e.is ? Qe(e.$slots, "default", {
        key: 0,
        isActive: i ? i.isActive : null,
        href: i ? i.href : null,
        navigate: i ? i.navigate : () => {
        }
      }) : (we(), bt(qs(e.is), Pt({ key: 1 }, e.$attrs, {
        onClick: i.navigate
      }), {
        default: ft(() => [
          Qe(e.$slots, "default", {
            isActive: i ? i.isActive : null,
            href: i ? i.href : null,
            navigate: i ? i.navigate : () => {
            }
          })
        ]),
        _: 2
      }, 1040, ["onClick"]))
    ]),
    _: 3
  }, 16, ["to", "custom"]);
}
const Kv = /* @__PURE__ */ rt(Uv, [["render", Bv]]), Gv = /* @__PURE__ */ Re({
  props: ["to"],
  setup() {
  }
}), zv = ["href", "onClick"];
function Wv(e, t, n, r, o, s) {
  const i = Wt("abstract-button");
  return we(), bt(i, {
    to: e.to,
    custom: "true"
  }, {
    default: ft(({ isActive: c, href: a, navigate: f }) => [
      pe("a", Pt({
        href: a,
        onClick: f
      }, e.$attrs, {
        class: ["__cs-px-2 __cs-py-1 __cs-rounded-t-sm __cs-cursor-pointer __cs-bg-gradient-to-t", {
          "__cs-bg-gray-700 __cs-from-gray-700 hover:__cs-to-gray-600 __cs-text-white": c,
          "__cs-bg-gray-800 __cs-from-gray-800 hover:__cs-to-gray-700 hover:__cs-text-white __cs-text-gray-300": !c
        }]
      }), [
        Qe(e.$slots, "default")
      ], 16, zv)
    ]),
    _: 3
  }, 8, ["to"]);
}
const qv = /* @__PURE__ */ rt(Gv, [["render", Wv]]), Yv = /* @__PURE__ */ Re({
  props: ["to"],
  setup() {
    return {};
  }
}), Xv = ["href", "onClick"];
function Jv(e, t, n, r, o, s) {
  const i = Wt("abstract-button");
  return we(), bt(i, {
    to: e.to,
    custom: "true"
  }, {
    default: ft(({ href: c, navigate: a }) => [
      pe("a", Pt({
        href: c,
        onClick: a
      }, e.$attrs, { class: "__cs-inline-block __cs-px-2 __cs-py-1 __cs-border __cs-border-gray-900 hover:__cs-bg-gray-900 __cs-rounded-sm" }), [
        Qe(e.$slots, "default")
      ], 16, Xv)
    ]),
    _: 3
  }, 8, ["to"]);
}
const Qv = /* @__PURE__ */ rt(Yv, [["render", Jv]]), Zv = /* @__PURE__ */ Re({
  props: ["to"],
  setup() {
    return {};
  }
});
function ey(e, t, n, r, o, s) {
  const i = Wt("abstract-button");
  return we(), bt(i, Pt({
    is: "button",
    to: e.to
  }, e.$attrs, { class: "__cs-inline-block __cs-px-2 __cs-py-1 __cs-bg-gray-500 hover:__cs-bg-gray-400 __cs-text-white __cs-rounded-sm" }), {
    default: ft(() => [
      Qe(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["to"]);
}
const ty = /* @__PURE__ */ rt(Zv, [["render", ey]]), ny = /* @__PURE__ */ Re({
  props: ["to"],
  setup() {
    return {};
  }
});
function ry(e, t, n, r, o, s) {
  const i = Wt("abstract-button");
  return we(), bt(i, Pt({
    is: "button",
    to: e.to
  }, e.$attrs, { class: "__cs-inline-block __cs-px-2 __cs-py-1 __cs-bg-blue-500 hover:__cs-bg-blue-400 __cs-text-white __cs-rounded-sm" }), {
    default: ft(() => [
      Qe(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["to"]);
}
const oy = /* @__PURE__ */ rt(ny, [["render", ry]]), sy = /* @__PURE__ */ Re({
  props: ["to"],
  setup() {
    return {};
  }
});
function iy(e, t, n, r, o, s) {
  const i = Wt("abstract-button");
  return we(), bt(i, Pt({
    is: "button",
    to: e.to
  }, e.$attrs, { class: "__cs-inline-block __cs-px-2 __cs-py-1 __cs-bg-red-500 hover:__cs-bg-red-400 __cs-text-white __cs-rounded-sm" }), {
    default: ft(() => [
      Qe(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["to"]);
}
const cy = /* @__PURE__ */ rt(sy, [["render", iy]]), ay = /* @__PURE__ */ Re({
  props: {
    formKey: String,
    label: String,
    // Text label to display
    help: String,
    optional: [Boolean, String],
    noErrors: [Boolean, String],
    maxErrors: [Number, String]
  },
  setup(e) {
    const t = Ce(""), n = Ce([]);
    return {
      validation: t,
      errors: n
    };
  }
}), ly = { key: 0 }, uy = { class: "__cs-text-sm __cs-font-bold __cs-mb-2" }, fy = {
  key: 2,
  class: "__cs-text-sm __cs-text-gray-400"
}, dy = {
  key: 3,
  class: "text-sm text-red-500"
};
function py(e, t, n, r, o, s) {
  return we(), it("div", null, [
    e.label ? (we(), it("div", ly, [
      pe("div", uy, Wn(e.label), 1),
      Qe(e.$slots, "default", {
        validation: e.validation,
        errors: e.errors
      })
    ])) : Qe(e.$slots, "default", { key: 1 }),
    e.help ? (we(), it("div", fy, Wn(e.help), 1)) : ko("", !0),
    e.errors && (e.noErrors == !1 || e.noErrors == null) && e.errors.length ? (we(), it("div", dy, Wn(e.errors[0]), 1)) : ko("", !0)
  ]);
}
const hy = /* @__PURE__ */ rt(ay, [["render", py]]), gy = /* @__PURE__ */ Re({
  props: ["modelValue"],
  setup(e, { emit: t }) {
    const n = Ce(""), r = "sync";
    let o = !1;
    return $e(() => e.modelValue, (s) => {
      o = !0, n.value = s, jn(() => o = !1);
    }, { flush: r, immediate: !0 }), $e(n, (s) => {
      o ? o = !1 : t("update:modelValue", s);
    }, { flush: r, immediate: !1 }), {
      value: n
    };
  }
}), _y = { class: "__cs-cursor-pointer __cs-relative __cs-overflow-hidden __cs-rounded-full __cs-w-8 __cs-h-4 __cs-bg-gray-500 focus-within:__cs-ring-2 __cs-text-black" };
function my(e, t, n, r, o, s) {
  return we(), it("div", _y, [
    pe("div", {
      class: qe(["__cs-h-full __cs-flex __cs-items-stretch __cs-transition-transform __cs-duration-100 __cs-ease-in-out __cs-transform", { "__cs--translate-x-1/2": !e.value }]),
      style: { width: "200%" }
    }, t[1] || (t[1] = [
      pe("div", { class: "__cs-w-1/2 __cs-bg-green-500" }, null, -1),
      pe("div", { class: "__cs-w-1/2 __cs-bg-red-500" }, null, -1)
    ]), 2),
    pe("div", {
      class: qe(["__cs-absolute __cs-inset-0 __cs-transition-transform __cs-duration-100 __cs-ease-in-out __cs-transform", { "__cs-translate-x-full": e.value }])
    }, [
      pe("div", {
        class: qe(["__cs-w-4 __cs-h-4 __cs-bg-white __cs-rounded-full __cs-transition-transform __cs-duration-100 __cs-ease-in-out __cs-transform", { "__cs--translate-x-full": e.value }])
      }, null, 2)
    ], 2),
    Mi(pe("input", {
      class: "__cs-opacity-0 __cs-absolute __cs-inset-0 __cs-cursor-pointer __cs-outline-none",
      type: "checkbox",
      "onUpdate:modelValue": t[0] || (t[0] = (i) => e.value = i)
    }, null, 512), [
      [fs, e.value]
    ])
  ]);
}
const vy = /* @__PURE__ */ rt(gy, [["render", my]]), yy = /* @__PURE__ */ Re({
  props: {
    modelValue: [String, Number],
    validation: String
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = Ce(""), r = "sync";
    let o = !1;
    return $e(() => e.modelValue, (s) => {
      o = !0, n.value = s, jn(() => o = !1);
    }, { flush: r, immediate: !0 }), $e(n, (s) => {
      o ? o = !1 : t("update:modelValue", s);
    }, { flush: r, immediate: !1 }), {
      text: n
    };
  }
}), by = { class: "__cs-flex-1 __cs-px-2 __cs-py-1 __cs-cursor-text" };
function Ey(e, t, n, r, o, s) {
  return we(), it("div", {
    class: qe(["__cs-flex __cs-rounded-t-sm __cs-bg-white __cs-text-black __cs-border-b-2 focus-within:__cs-border-blue-500 focus-within:__cs-ring-2 focus-within:__cs-ring-blue-500 focus-within:__cs-ring-opacity-30 __cs-ring-opacity-30", {
      "__cs-border-gray-500": !e.validation,
      "__cs-border-red-500 __cs-ring-1 __cs-ring-red-500": e.validation == "invalid",
      "__cs-border-green-500 __cs-ring-1 __cs-ring-green-500": e.validation == "valid"
    }])
  }, [
    pe("div", by, [
      Mi(pe("input", Pt({ type: "text" }, e.$attrs, {
        "onUpdate:modelValue": t[0] || (t[0] = (i) => e.text = i),
        size: "1",
        class: "__cs-w-full __cs-bg-transparent __cs-outline-none"
      }), null, 16), [
        [Kr, e.text]
      ])
    ])
  ], 2);
}
const wy = /* @__PURE__ */ rt(yy, [["render", Ey]]), Ny = /* @__PURE__ */ Re({
  props: {
    modelValue: {
      type: Number,
      default: 0
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 1
    },
    vertical: Boolean
  },
  setup(e, { emit: t }) {
    function n(l) {
      return l * (e.max - e.min) + e.min;
    }
    function r(l) {
      return (l - e.min) / (e.max - e.min);
    }
    const o = Ce(e.vertical ? 1 - r(e.modelValue) : r(e.modelValue)), s = Ce(), i = Ce(!1);
    $e(() => e.modelValue, (l) => {
      o.value = e.vertical ? 1 - r(l) : r(l);
    });
    function c(l, d) {
      if (s.value) {
        let { x: h, width: m, y, height: M } = s.value.getBoundingClientRect();
        o.value = e.vertical ? Math.max(0, Math.min(1, (d - y) / M)) : Math.max(0, Math.min(1, (l - h) / m)), t("update:modelValue", n(e.vertical ? 1 - o.value : o.value));
      }
    }
    function a(l) {
      document.addEventListener("pointermove", f), document.addEventListener("pointerup", u), i.value = !0, c(l.clientX, l.clientY), l.preventDefault();
    }
    function f({ clientX: l, clientY: d }) {
      c(l, d);
    }
    function u({}) {
      document.removeEventListener("pointermove", f), document.removeEventListener("pointerup", u), i.value = !1;
    }
    return {
      pointerDown: a,
      plane: s,
      value: o
    };
  }
}), Oy = {
  ref: "plane",
  class: "__cs-relative __cs-w-full __cs-h-full __cs-z-50"
};
function xy(e, t, n, r, o, s) {
  return we(), it("div", {
    onPointerdown: t[0] || (t[0] = (...i) => e.pointerDown && e.pointerDown(...i)),
    onTouchstart: t[1] || (t[1] = Io(() => {
    }, ["prevent"])),
    class: qe(["__cs-grid __cs-grid-stack", { "__cs-w-full __cs-h-6": !e.vertical, "__cs-w-6": e.vertical }])
  }, [
    pe("div", Oy, [
      pe("div", {
        class: "__cs-absolute __cs-transform __cs--translate-x-1/2 __cs--translate-y-1/2 __cs-top-0 __cs-left-0",
        style: Mt(`left: ${e.vertical ? 50 : e.value * 100}% !important; top: ${e.vertical ? e.value * 100 : 50}% !important;`)
      }, [
        Qe(e.$slots, "handle", {}, () => [
          t[2] || (t[2] = pe("div", { class: "__cs-w-5 __cs-h-5 __cs-bg-blue-500 __cs-rounded-md" }, null, -1))
        ])
      ], 4)
    ], 512),
    Qe(e.$slots, "default")
  ], 34);
}
const Sy = /* @__PURE__ */ rt(Ny, [["render", xy]]), Cy = /* @__PURE__ */ Re({
  props: {
    x: {
      type: Number,
      default: 0
    },
    y: {
      type: Number,
      default: 0
    },
    xMin: {
      type: Number,
      default: 0
    },
    xMax: {
      type: Number,
      default: 1
    },
    yMin: {
      type: Number,
      default: 0
    },
    yMax: {
      type: Number,
      default: 1
    },
    origin: {
      type: String,
      default: "bottom-left",
      validator: (e) => ["top-left", "top-right", "bottom-left", "bottom-right"].includes(e)
    }
  },
  setup(e, { emit: t }) {
    const n = Me(() => e.origin == "top-left" ? { x: 0, y: 0 } : e.origin == "top-right" ? { x: 1, y: 0 } : e.origin == "bottom-right" ? { x: 1, y: 1 } : { x: 0, y: 1 });
    function r(m) {
      return m * (e.xMax - e.xMin) + e.xMin;
    }
    function o(m) {
      return m * (e.yMax - e.yMin) + e.yMin;
    }
    function s(m) {
      return (m - e.xMin) / (e.xMax - e.xMin);
    }
    function i(m) {
      return (m - e.yMin) / (e.yMax - e.yMin);
    }
    const c = It({
      x: n.value.x ? 1 - s(e.x) : s(e.x),
      y: n.value.y ? 1 - i(e.y) : i(e.y)
    }), a = Ce(), f = Ce(!1);
    $e(() => [e.x, e.y], () => {
      c.x = n.value.x ? 1 - s(e.x) : s(e.x), c.y = n.value.y ? 1 - i(e.y) : i(e.y);
    });
    function u(m, y) {
      if (a.value) {
        let { x: M, width: V, y: E, height: g } = a.value.getBoundingClientRect();
        c.x = Math.max(0, Math.min(1, (m - M) / V)), c.y = Math.max(0, Math.min(1, (y - E) / g)), t("update:x", r(n.value.x ? 1 - c.x : c.x)), t("update:y", o(n.value.y ? 1 - c.y : c.y));
      }
    }
    function l(m) {
      document.addEventListener("pointermove", d), document.addEventListener("pointerup", h), f.value = !0, u(m.clientX, m.clientY);
    }
    function d(m) {
      u(m.clientX, m.clientY);
    }
    function h({}) {
      document.removeEventListener("pointermove", d), document.removeEventListener("pointerup", h), f.value = !1;
    }
    return {
      pointerDown: l,
      plane: a,
      point: c
    };
  }
}), Dy = {
  ref: "plane",
  class: "__cs-relative __cs-w-full __cs-h-full __cs-z-50"
};
function Ty(e, t, n, r, o, s) {
  return we(), it("div", {
    onPointerdown: t[0] || (t[0] = Io((...i) => e.pointerDown && e.pointerDown(...i), ["prevent"])),
    onTouchstart: t[1] || (t[1] = Io(() => {
    }, ["prevent"])),
    class: "__cs-grid __cs-grid-stack"
  }, [
    pe("div", Dy, [
      pe("div", {
        class: "__cs-absolute __cs-transform __cs--translate-x-1/2 __cs--translate-y-1/2 __cs-top-0 __cs-left-0",
        style: Mt(`left: ${e.point.x * 100}% !important; top: ${e.point.y * 100}% !important;`)
      }, [
        Qe(e.$slots, "handle", {}, () => [
          t[2] || (t[2] = pe("svg", {
            viewBox: "0 0 1 1",
            class: "__cs-w-5 __cs-h-5"
          }, [
            pe("circle", {
              cx: "0.5",
              cy: "0.5",
              r: "0.4",
              "stroke-width": "0.1",
              class: "__cs-stroke-black __cs-fill-transparent"
            }),
            pe("circle", {
              cx: "0.5",
              cy: "0.5",
              r: "0.325",
              "stroke-width": "0.075",
              class: "__cs-stroke-white __cs-fill-transparent"
            })
          ], -1))
        ])
      ], 4)
    ], 512),
    Qe(e.$slots, "default")
  ], 32);
}
const Vy = /* @__PURE__ */ rt(Cy, [["render", Ty]]);
function Ay() {
  const e = Lo(x_), t = Z_();
  e.use(t);
  const n = yv();
  e.use(n);
  const r = l_();
  e.use(r);
  const o = v_(t);
  e.use(o);
  const s = Mv(t);
  return e.use(s), e.component("svg-icon", Hv), e.component("abstract-button", Kv), e.component("button-tab", qv), e.component("button-ghost", Qv), e.component("button-neutral", ty), e.component("button-blue", oy), e.component("button-red", cy), e.component("form-field", hy), e.component("text-input", wy), e.component("toggle", vy), e.component("slider", Sy), e.component("slider-xy", Vy), { app: e, store: t, router: n };
}
if (typeof window < "u") {
  let e = function() {
    var t = document.body, n = document.getElementById("__cs_icons__");
    n || (n = document.createElementNS("http://www.w3.org/2000/svg", "svg"), n.style.position = "absolute", n.style.width = "0", n.style.height = "0", n.id = "__cs_icons__", n.setAttribute("xmlns", "http://www.w3.org/2000/svg"), n.setAttribute("xmlns:link", "http://www.w3.org/1999/xlink")), n.innerHTML = '<symbol  viewBox="0 0 512 512" id="icon-caret-back"><path d="M368 64 144 256l224 192V64z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-caret-down"><path d="m64 144 192 224 192-224H64z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-caret-forward"><path d="m144 448 224-192L144 64v384z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-close"><path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-copy"><path d="M408 480H184a72 72 0 0 1-72-72V184a72 72 0 0 1 72-72h224a72 72 0 0 1 72 72v224a72 72 0 0 1-72 72Z" /><path d="M160 80h235.88A72.12 72.12 0 0 0 328 32H104a72 72 0 0 0-72 72v224a72.12 72.12 0 0 0 48 67.88V160a80 80 0 0 1 80-80Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-delete"><path style="fill:none" d="M337.46 240 312 214.54l-56 56-56-56L174.54 240l56 56-56 56L200 377.46l56-56 56 56L337.46 352l-56-56 56-56z" /><path style="fill:none" d="M337.46 240 312 214.54l-56 56-56-56L174.54 240l56 56-56 56L200 377.46l56-56 56 56L337.46 352l-56-56 56-56z" /><path d="m64 160 29.74 282.51A24 24 0 0 0 117.61 464h276.78a24 24 0 0 0 23.87-21.49L448 160Zm248 217.46-56-56-56 56L174.54 352l56-56-56-56L200 214.54l56 56 56-56L337.46 240l-56 56 56 56Z" /><rect x="32" y="48" width="448" height="80" rx="12" ry="12" /></symbol><symbol  viewBox="0 0 512 512" id="icon-dot"><circle cx="256" cy="256" r="128" /></symbol>', t.insertBefore(n, t.lastChild);
  };
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", e) : e();
}
const ky = '*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e7e5e4}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#a8a29e}input::placeholder,textarea::placeholder{opacity:1;color:#a8a29e}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.__cs-pointer-events-auto{pointer-events:auto}.__cs-invisible{visibility:hidden}.__cs-fixed{position:fixed}.__cs-absolute{position:absolute}.__cs-relative{position:relative}.__cs-inset-0{top:0;right:0;bottom:0;left:0}.__cs-inset-y-0{top:0;bottom:0}.__cs-bottom-0{bottom:0}.__cs-left-0{left:0}.__cs-right-0{right:0}.__cs-right-1{right:.25rem}.__cs-top-0{top:0}.__cs-top-1\\/2{top:50%}.__cs-z-40{z-index:40}.__cs-z-50{z-index:50}.__cs-z-bg{z-index:-1}.__cs-z-panel{z-index:99050}.__cs-m-px{margin:1px}.__cs-mb-2{margin-bottom:.5rem}.__cs-ml-1{margin-left:.25rem}.__cs-block{display:block}.__cs-inline-block{display:inline-block}.__cs-flex{display:flex}.__cs-grid{display:grid}.__cs-hidden{display:none}.__cs-h-10{height:2.5rem}.__cs-h-16{height:4rem}.__cs-h-3{height:.75rem}.__cs-h-4{height:1rem}.__cs-h-5{height:1.25rem}.__cs-h-6{height:1.5rem}.__cs-h-7{height:1.75rem}.__cs-h-8{height:2rem}.__cs-h-full{height:100%}.__cs-w-1{width:.25rem}.__cs-w-1\\/2{width:50%}.__cs-w-10{width:2.5rem}.__cs-w-12{width:3rem}.__cs-w-2{width:.5rem}.__cs-w-3{width:.75rem}.__cs-w-4{width:1rem}.__cs-w-5{width:1.25rem}.__cs-w-6{width:1.5rem}.__cs-w-8{width:2rem}.__cs-w-full{width:100%}.__cs-min-w-0{min-width:0px}.__cs-max-w-20{max-width:5rem}.__cs-flex-1{flex:1 1 0%}.__cs-flex-grow{flex-grow:1}.__cs-origin-center{transform-origin:center}.__cs--translate-x-1\\/2{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.__cs--translate-x-full{--tw-translate-x: -100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.__cs--translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.__cs-translate-x-0{--tw-translate-x: 0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.__cs-translate-x-full{--tw-translate-x: 100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.__cs--rotate-90{--tw-rotate: -90deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.__cs-transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.__cs-cursor-move{cursor:move}.__cs-cursor-pointer{cursor:pointer}.__cs-cursor-text{cursor:text}.__cs-flex-col{flex-direction:column}.__cs-flex-col-reverse{flex-direction:column-reverse}.__cs-items-center{align-items:center}.__cs-items-stretch{align-items:stretch}.__cs-justify-center{justify-content:center}.__cs-space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))}.__cs-space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(1rem * var(--tw-space-x-reverse));margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)))}.__cs-space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}.__cs-space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.__cs-divide-x>:not([hidden])~:not([hidden]){--tw-divide-x-reverse: 0;border-right-width:calc(1px * var(--tw-divide-x-reverse));border-left-width:calc(1px * calc(1 - var(--tw-divide-x-reverse)))}.__cs-divide-neutral-600>:not([hidden])~:not([hidden]){--tw-divide-opacity: 1;border-color:rgb(82 82 82 / var(--tw-divide-opacity, 1))}.__cs-self-end{align-self:flex-end}.__cs-overflow-auto{overflow:auto}.__cs-overflow-hidden{overflow:hidden}.__cs-overflow-y-auto{overflow-y:auto}.__cs-overflow-x-hidden{overflow-x:hidden}.__cs-overscroll-contain{overscroll-behavior:contain}.__cs-overflow-ellipsis{text-overflow:ellipsis}.__cs-whitespace-nowrap{white-space:nowrap}.__cs-rounded{border-radius:.25rem}.__cs-rounded-full{border-radius:9999px}.__cs-rounded-md{border-radius:.375rem}.__cs-rounded-sm{border-radius:.125rem}.__cs-rounded-l-md{border-top-left-radius:.375rem;border-bottom-left-radius:.375rem}.__cs-rounded-l-none{border-top-left-radius:0;border-bottom-left-radius:0}.__cs-rounded-r-md{border-top-right-radius:.375rem;border-bottom-right-radius:.375rem}.__cs-rounded-r-none{border-top-right-radius:0;border-bottom-right-radius:0}.__cs-rounded-t-sm{border-top-left-radius:.125rem;border-top-right-radius:.125rem}.__cs-rounded-bl-lg{border-bottom-left-radius:.5rem}.__cs-rounded-tr-lg{border-top-right-radius:.5rem}.__cs-border{border-width:1px}.__cs-border-2{border-width:2px}.__cs-border-b{border-bottom-width:1px}.__cs-border-b-2{border-bottom-width:2px}.__cs-border-l-0{border-left-width:0px}.__cs-border-r-0{border-right-width:0px}.__cs-border-black{--tw-border-opacity: 1;border-color:rgb(0 0 0 / var(--tw-border-opacity, 1))}.__cs-border-blue-600{--tw-border-opacity: 1;border-color:rgb(37 99 235 / var(--tw-border-opacity, 1))}.__cs-border-gray-300{--tw-border-opacity: 1;border-color:rgb(214 211 209 / var(--tw-border-opacity, 1))}.__cs-border-gray-500{--tw-border-opacity: 1;border-color:rgb(120 113 108 / var(--tw-border-opacity, 1))}.__cs-border-gray-800{--tw-border-opacity: 1;border-color:rgb(41 37 36 / var(--tw-border-opacity, 1))}.__cs-border-gray-900{--tw-border-opacity: 1;border-color:rgb(28 25 23 / var(--tw-border-opacity, 1))}.__cs-border-green-500{--tw-border-opacity: 1;border-color:rgb(34 197 94 / var(--tw-border-opacity, 1))}.__cs-border-red-500{--tw-border-opacity: 1;border-color:rgb(239 68 68 / var(--tw-border-opacity, 1))}.__cs-bg-black{--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity, 1))}.__cs-bg-blue-500{--tw-bg-opacity: 1;background-color:rgb(59 130 246 / var(--tw-bg-opacity, 1))}.__cs-bg-gray-300{--tw-bg-opacity: 1;background-color:rgb(214 211 209 / var(--tw-bg-opacity, 1))}.__cs-bg-gray-500{--tw-bg-opacity: 1;background-color:rgb(120 113 108 / var(--tw-bg-opacity, 1))}.__cs-bg-gray-600{--tw-bg-opacity: 1;background-color:rgb(87 83 78 / var(--tw-bg-opacity, 1))}.__cs-bg-gray-700{--tw-bg-opacity: 1;background-color:rgb(68 64 60 / var(--tw-bg-opacity, 1))}.__cs-bg-gray-800{--tw-bg-opacity: 1;background-color:rgb(41 37 36 / var(--tw-bg-opacity, 1))}.__cs-bg-gray-900{--tw-bg-opacity: 1;background-color:rgb(28 25 23 / var(--tw-bg-opacity, 1))}.__cs-bg-green-500{--tw-bg-opacity: 1;background-color:rgb(34 197 94 / var(--tw-bg-opacity, 1))}.__cs-bg-red-500{--tw-bg-opacity: 1;background-color:rgb(239 68 68 / var(--tw-bg-opacity, 1))}.__cs-bg-red-800{--tw-bg-opacity: 1;background-color:rgb(153 27 27 / var(--tw-bg-opacity, 1))}.__cs-bg-red-900{--tw-bg-opacity: 1;background-color:rgb(127 29 29 / var(--tw-bg-opacity, 1))}.__cs-bg-transparent{background-color:transparent}.__cs-bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.__cs-bg-gradient-to-br{background-image:linear-gradient(to bottom right,var(--tw-gradient-stops))}.__cs-bg-gradient-to-t{background-image:linear-gradient(to top,var(--tw-gradient-stops))}.__cs-from-gray-700{--tw-gradient-from: #44403c var(--tw-gradient-from-position);--tw-gradient-to: rgb(68 64 60 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.__cs-from-gray-800{--tw-gradient-from: #292524 var(--tw-gradient-from-position);--tw-gradient-to: rgb(41 37 36 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.__cs-to-gray-800{--tw-gradient-to: #292524 var(--tw-gradient-to-position)}.__cs-fill-black{fill:#000}.__cs-fill-current{fill:currentColor}.__cs-fill-gray-500{fill:#78716c}.__cs-fill-transparent{fill:transparent}.__cs-fill-white{fill:#fff}.__cs-stroke-black{stroke:#000}.__cs-stroke-blue-300{stroke:#93c5fd}.__cs-stroke-white{stroke:#fff}.__cs-p-1{padding:.25rem}.__cs-p-2{padding:.5rem}.__cs-p-4{padding:1rem}.__cs-p-6{padding:1.5rem}.__cs-px-2{padding-left:.5rem;padding-right:.5rem}.__cs-px-3{padding-left:.75rem;padding-right:.75rem}.__cs-px-4{padding-left:1rem;padding-right:1rem}.__cs-py-1{padding-top:.25rem;padding-bottom:.25rem}.__cs-py-2{padding-top:.5rem;padding-bottom:.5rem}.__cs-pl-8{padding-left:2rem}.__cs-pr-0{padding-right:0}.__cs-pr-1{padding-right:.25rem}.__cs-pr-2{padding-right:.5rem}.__cs-pt-1{padding-top:.25rem}.__cs-pt-2{padding-top:.5rem}.__cs-font-sans{font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}.__cs-text-lg{font-size:1.125rem;line-height:1.75rem}.__cs-text-sm{font-size:.875rem;line-height:1.25rem}.__cs-text-xs{font-size:.75rem;line-height:1rem}.__cs-font-bold{font-weight:700}.__cs-font-medium{font-weight:500}.__cs-font-semibold{font-weight:600}.__cs-leading-4{line-height:1rem}.__cs-text-black{--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity, 1))}.__cs-text-gray-200{--tw-text-opacity: 1;color:rgb(231 229 228 / var(--tw-text-opacity, 1))}.__cs-text-gray-300{--tw-text-opacity: 1;color:rgb(214 211 209 / var(--tw-text-opacity, 1))}.__cs-text-gray-400{--tw-text-opacity: 1;color:rgb(168 162 158 / var(--tw-text-opacity, 1))}.__cs-text-gray-50{--tw-text-opacity: 1;color:rgb(250 250 249 / var(--tw-text-opacity, 1))}.__cs-text-gray-500{--tw-text-opacity: 1;color:rgb(120 113 108 / var(--tw-text-opacity, 1))}.__cs-text-gray-600{--tw-text-opacity: 1;color:rgb(87 83 78 / var(--tw-text-opacity, 1))}.__cs-text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.__cs-opacity-0{opacity:0}.__cs-outline-none{outline:2px solid transparent;outline-offset:2px}.__cs-ring-1{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.__cs-ring-green-500{--tw-ring-opacity: 1;--tw-ring-color: rgb(34 197 94 / var(--tw-ring-opacity, 1))}.__cs-ring-red-500{--tw-ring-opacity: 1;--tw-ring-color: rgb(239 68 68 / var(--tw-ring-opacity, 1))}.__cs-ring-opacity-30{--tw-ring-opacity: .3}.__cs-transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.__cs-transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.__cs-transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.__cs-duration-100{transition-duration:.1s}.__cs-duration-150{transition-duration:.15s}.__cs-duration-300{transition-duration:.3s}.__cs-ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.__cs-ease-out-brisk{transition-timing-function:cubic-bezier(.15,0,0,1)}.__cs-grid-stack{grid-template-columns:1fr;grid-template-rows:1fr}.__cs-grid-stack>*,.__cs-grid-stack:before,.__cs-grid-stack:after{grid-area:1 / 1 / 2 / 2}.__cs-bg-transparency-grid{background-image:linear-gradient(45deg,#808080 25%,transparent 25%),linear-gradient(-45deg,#808080 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#808080 75%),linear-gradient(-45deg,transparent 75%,#808080 75%);background-size:8px 8px;background-position:0 0,0 4px,4px -4px,-4px 0px}.__cs-rounded-group>:first-child{border-top-right-radius:0!important;border-bottom-right-radius:0!important}.__cs-rounded-group>:last-child{border-top-left-radius:0!important;border-bottom-left-radius:0!important}.__cs-rounded-group>*:not(:first-child):not(:last-child){border-radius:0!important}.__cs-border-group>*:not(:last-child){border-right:0!important}.__cs-square-only-child>:only-child{border-radius:0!important}.before\\:__cs-m-px:before{content:var(--tw-content);margin:1px}.before\\:__cs-rounded:before{content:var(--tw-content);border-radius:.25rem}.before\\:__cs-rounded-md:before{content:var(--tw-content);border-radius:.375rem}.before\\:__cs-bg-transparency-grid:before{content:var(--tw-content);background-image:linear-gradient(45deg,#808080 25%,transparent 25%),linear-gradient(-45deg,#808080 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#808080 75%),linear-gradient(-45deg,transparent 75%,#808080 75%);background-size:8px 8px;background-position:0 0,0 4px,4px -4px,-4px 0px}.after\\:__cs-rounded-md:after{content:var(--tw-content);border-radius:.375rem}.after\\:__cs-border-3:after{content:var(--tw-content);border-width:3px}.after\\:__cs-border-black:after{content:var(--tw-content);--tw-border-opacity: 1;border-color:rgb(0 0 0 / var(--tw-border-opacity, 1))}.focus-within\\:__cs-border-blue-500:focus-within{--tw-border-opacity: 1;border-color:rgb(59 130 246 / var(--tw-border-opacity, 1))}.focus-within\\:__cs-ring-2:focus-within{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus-within\\:__cs-ring-blue-500:focus-within{--tw-ring-opacity: 1;--tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity, 1))}.focus-within\\:__cs-ring-opacity-30:focus-within{--tw-ring-opacity: .3}.hover\\:__cs-rounded-t-md:hover{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.hover\\:__cs-bg-blue-400:hover{--tw-bg-opacity: 1;background-color:rgb(96 165 250 / var(--tw-bg-opacity, 1))}.hover\\:__cs-bg-gray-400:hover{--tw-bg-opacity: 1;background-color:rgb(168 162 158 / var(--tw-bg-opacity, 1))}.hover\\:__cs-bg-gray-600:hover{--tw-bg-opacity: 1;background-color:rgb(87 83 78 / var(--tw-bg-opacity, 1))}.hover\\:__cs-bg-gray-700:hover{--tw-bg-opacity: 1;background-color:rgb(68 64 60 / var(--tw-bg-opacity, 1))}.hover\\:__cs-bg-gray-800:hover{--tw-bg-opacity: 1;background-color:rgb(41 37 36 / var(--tw-bg-opacity, 1))}.hover\\:__cs-bg-gray-900:hover{--tw-bg-opacity: 1;background-color:rgb(28 25 23 / var(--tw-bg-opacity, 1))}.hover\\:__cs-bg-red-400:hover{--tw-bg-opacity: 1;background-color:rgb(248 113 113 / var(--tw-bg-opacity, 1))}.hover\\:__cs-bg-red-800:hover{--tw-bg-opacity: 1;background-color:rgb(153 27 27 / var(--tw-bg-opacity, 1))}.hover\\:__cs-to-gray-600:hover{--tw-gradient-to: #57534e var(--tw-gradient-to-position)}.hover\\:__cs-to-gray-700:hover{--tw-gradient-to: #44403c var(--tw-gradient-to-position)}.hover\\:__cs-text-white:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.focus\\:__cs-border-2:focus{border-width:2px}.focus\\:__cs-outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:__cs-ring-2:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.__cs-group:hover .group-hover\\:__cs-bg-blue-500{--tw-bg-opacity: 1;background-color:rgb(59 130 246 / var(--tw-bg-opacity, 1))}.__cs-group:hover .group-hover\\:__cs-bg-gray-600{--tw-bg-opacity: 1;background-color:rgb(87 83 78 / var(--tw-bg-opacity, 1))}.__cs-group:hover .group-hover\\:__cs-bg-red-800{--tw-bg-opacity: 1;background-color:rgb(153 27 27 / var(--tw-bg-opacity, 1))}.__cs-peer:checked~.peer-checked\\:__cs-flex{display:flex}.__cs-peer:checked~.peer-checked\\:__cs-hidden{display:none}.__cs-peer:checked~.peer-checked\\:__cs-border-blue-600{--tw-border-opacity: 1;border-color:rgb(37 99 235 / var(--tw-border-opacity, 1))}', { app: $y } = Ay();
var Oa;
const fo = (Oa = document.getElementById(u_)) == null ? void 0 : Oa.attachShadow({ mode: "open" });
if (fo) {
  const e = document.createElement("style");
  e.textContent = ky, fo.appendChild(e);
  const t = document.getElementById("__cs_icons__");
  t && fo.appendChild(t);
  const n = document.createElement("div");
  n.style.display = "none", fo.appendChild(n), $y.mount(n).$nextTick(() => n.style.display = "");
} else
  console.error("[Color Suite] Unable to create shadow root.");
export {
  It as $,
  fe as A,
  at as B,
  qt as C,
  De as D,
  re as E,
  Ve as F,
  B as G,
  zf as H,
  Mn as I,
  Ca as J,
  Dt as K,
  Sn as L,
  rd as M,
  xe as N,
  Aa as O,
  Bf as P,
  ka as Q,
  $a as R,
  Da as S,
  Ue as T,
  Yf as U,
  Ly as V,
  Iy as W,
  m_ as X,
  _e as Y,
  Io as Z,
  rt as _,
  wi as a,
  jy as a0,
  Ce as a1,
  Af as a2,
  $e as a3,
  Rv as a4,
  Yy as a5,
  By as a6,
  Gy as a7,
  Ky as a8,
  Hy as a9,
  xv as aa,
  Fy as ab,
  Ov as ac,
  Uy as ad,
  Fd as ae,
  jn as af,
  wv as ag,
  Ev as ah,
  tc as ai,
  Tv as aj,
  Xr as ak,
  lr as al,
  ae as am,
  Ms as an,
  Bd as ao,
  qy as ap,
  zy as aq,
  Mi as ar,
  Xi as as,
  Wy as b,
  Me as c,
  Re as d,
  hs as e,
  Vf as f,
  Wt as g,
  Sv as h,
  bo as i,
  bt as j,
  pe as k,
  it as l,
  Mt as m,
  qe as n,
  we as o,
  Bp as p,
  ko as q,
  Tf as r,
  Ur as s,
  Wn as t,
  Xy as u,
  Qe as v,
  ft as w,
  de as x,
  ce as y,
  xa as z
};
