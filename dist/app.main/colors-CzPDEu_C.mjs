import { d as ts, u as ns, c as No, i as vi, r as Aa, a as mi, h as Da, b as xa, e as Pa, f as Ra, _ as rs, g as Dn, o as He, j as xn, w as sn, k as Je, n as tr, l as pt, m as lo, F as Ma, p as La, q as Gt, s as pr, t as co, v as wa, x as Ce, N as wn, y as os, z as nr, A as St, B as Fo, C as is, D as Mt, E as Va, G as Et, P as hr, H as Fa, I as Io, J as ja, K as Ua, L as gi, M as $a, O as Ba, Q as Xa, R as Ha, S as Ga, T as $r, U as Ka, V as Wa, W as _a, X as Ya, Y as qt, Z as Ei } from "./app.main-CurCMLXX.mjs";
import "./value-curve.fragment-Lw9fXvnN.mjs";
const ka = ts({
  props: {
    token: String,
    color: {
      type: [String, Object],
      required: !0
    },
    help: String,
    locked: Boolean,
    css: Boolean
  },
  setup(e) {
    const { colors: t } = ns(), n = No(() => vi(e.color) ? Aa(e.color, t) : e.color);
    return {
      has_error: No(() => mi(n.value) && !e.css),
      resolved_color: n,
      hsvaToHex: Da,
      colorScaleHexValues: xa,
      isColorAliasResolutionError: mi,
      isColorAlias: vi,
      isColorScale: Pa,
      isColorSolid: Ra
    };
  }
}), Ja = { class: "__cs-p-2 __cs-flex" }, za = { class: "__cs-flex-1 __cs-min-w-0 __cs-flex __cs-flex-col" }, Qa = { class: "__cs-flex __cs-p-2 __cs-bg-gray-900 __cs-rounded-bl-lg" }, Za = { class: "__cs-flex-1 __cs-grid __cs-grid-stack __cs-h-7 __cs-rounded-md __cs-overflow-hidden after:__cs-border-3 after:__cs-border-black after:__cs-rounded-md before:__cs-rounded-md before:__cs-bg-transparency-grid before:__cs-m-px" }, qa = {
  key: 2,
  class: "__cs-m-px __cs-rounded-md __cs-flex __cs-overflow-hidden"
}, el = { class: "__cs-flex __cs-space-x-2 __cs-bg-gray-900 __cs-square-only-child __cs-h-8" }, tl = {
  key: 1,
  class: "__cs-text-xs __cs-text-gray-400"
};
function nl(e, t, n, o, i, l) {
  const r = Dn("abstract-button");
  return He(), xn(r, {
    is: e.locked ? "div" : null,
    to: e.locked ? null : `/colors/${e.token}`,
    class: tr(["__cs-group __cs-flex __cs-border-b __cs-border-black", { "__cs-bg-red-900 hover:__cs-bg-red-800": e.has_error, "__cs-bg-gray-700 hover:__cs-bg-gray-600": !e.has_error }])
  }, {
    default: sn(() => [
      Je("div", Ja, [
        Je("div", {
          class: tr(["handle __cs-rounded-sm __cs-bg-gray-800 hover:__cs-bg-gray-900 __cs-w-3 __cs-cursor-move", { "__cs-invisible": e.locked }])
        }, null, 2)
      ]),
      Je("div", za, [
        Je("div", Qa, [
          Je("div", Za, [
            e.css ? (He(), pt("div", {
              key: 0,
              class: "__cs-m-px __cs-rounded-md",
              style: lo(`background-color: ${e.color};`)
            }, null, 4)) : e.isColorSolid(e.resolved_color) ? (He(), pt("div", {
              key: 1,
              class: "__cs-m-px __cs-rounded-md",
              style: lo(`background-color: ${e.hsvaToHex(e.resolved_color)};`)
            }, null, 4)) : e.isColorScale(e.resolved_color) ? (He(), pt("div", qa, [
              (He(!0), pt(Ma, null, La(e.colorScaleHexValues(e.resolved_color), (a, s) => (He(), pt("div", {
                key: `swatch-${e.token}-${s}`,
                class: "__cs-flex-grow",
                style: lo(`background-color: ${a};`)
              }, null, 4))), 128))
            ])) : Gt("", !0)
          ])
        ]),
        Je("div", el, [
          Je("div", {
            class: tr(["__cs-flex-1 __cs-min-w-0 __cs-overflow-ellipsis __cs-overflow-hidden __cs-whitespace-nowrap __cs-font-semibold __cs-rounded-tr-lg __cs-pt-1 __cs-px-3", { "__cs-bg-red-900 group-hover:__cs-bg-red-800": e.has_error, "__cs-bg-gray-700 group-hover:__cs-bg-gray-600": !e.has_error }])
          }, [
            pr(co(e.token) + " ", 1),
            e.isColorAlias(e.color) && !e.css ? (He(), pt("span", {
              key: 0,
              class: tr(["__cs-text-xs", { "__cs-text-gray-200": e.has_error, "__cs-text-gray-400": !e.has_error }])
            }, co(e.has_error ? e.resolved_color.message : e.color), 3)) : Gt("", !0),
            e.help ? (He(), pt("span", tl, co(e.help), 1)) : Gt("", !0)
          ], 2),
          wa(e.$slots, "default")
        ])
      ])
    ]),
    _: 3
  }, 8, ["is", "to", "class"]);
}
const rl = /* @__PURE__ */ rs(ka, [["render", nl]]);
function ol(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Br(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function o() {
      return this instanceof o ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(o) {
    var i = Object.getOwnPropertyDescriptor(e, o);
    Object.defineProperty(n, o, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[o];
      }
    });
  }), n;
}
var vr = { exports: {} }, rr = { exports: {} }, fo = {};
/**
* @vue/compiler-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const fn = Symbol(process.env.NODE_ENV !== "production" ? "Fragment" : ""), cn = Symbol(process.env.NODE_ENV !== "production" ? "Teleport" : ""), Xr = Symbol(process.env.NODE_ENV !== "production" ? "Suspense" : ""), Bn = Symbol(process.env.NODE_ENV !== "production" ? "KeepAlive" : ""), jo = Symbol(
  process.env.NODE_ENV !== "production" ? "BaseTransition" : ""
), Vt = Symbol(process.env.NODE_ENV !== "production" ? "openBlock" : ""), Uo = Symbol(process.env.NODE_ENV !== "production" ? "createBlock" : ""), $o = Symbol(
  process.env.NODE_ENV !== "production" ? "createElementBlock" : ""
), Hr = Symbol(process.env.NODE_ENV !== "production" ? "createVNode" : ""), Gr = Symbol(
  process.env.NODE_ENV !== "production" ? "createElementVNode" : ""
), gn = Symbol(
  process.env.NODE_ENV !== "production" ? "createCommentVNode" : ""
), Kr = Symbol(
  process.env.NODE_ENV !== "production" ? "createTextVNode" : ""
), Bo = Symbol(
  process.env.NODE_ENV !== "production" ? "createStaticVNode" : ""
), Wr = Symbol(
  process.env.NODE_ENV !== "production" ? "resolveComponent" : ""
), _r = Symbol(
  process.env.NODE_ENV !== "production" ? "resolveDynamicComponent" : ""
), Yr = Symbol(
  process.env.NODE_ENV !== "production" ? "resolveDirective" : ""
), kr = Symbol(
  process.env.NODE_ENV !== "production" ? "resolveFilter" : ""
), Jr = Symbol(
  process.env.NODE_ENV !== "production" ? "withDirectives" : ""
), zr = Symbol(process.env.NODE_ENV !== "production" ? "renderList" : ""), Xo = Symbol(process.env.NODE_ENV !== "production" ? "renderSlot" : ""), Ho = Symbol(process.env.NODE_ENV !== "production" ? "createSlots" : ""), Yn = Symbol(
  process.env.NODE_ENV !== "production" ? "toDisplayString" : ""
), Xn = Symbol(process.env.NODE_ENV !== "production" ? "mergeProps" : ""), Qr = Symbol(
  process.env.NODE_ENV !== "production" ? "normalizeClass" : ""
), Zr = Symbol(
  process.env.NODE_ENV !== "production" ? "normalizeStyle" : ""
), un = Symbol(
  process.env.NODE_ENV !== "production" ? "normalizeProps" : ""
), En = Symbol(
  process.env.NODE_ENV !== "production" ? "guardReactiveProps" : ""
), qr = Symbol(process.env.NODE_ENV !== "production" ? "toHandlers" : ""), Ar = Symbol(process.env.NODE_ENV !== "production" ? "camelize" : ""), ss = Symbol(process.env.NODE_ENV !== "production" ? "capitalize" : ""), Dr = Symbol(
  process.env.NODE_ENV !== "production" ? "toHandlerKey" : ""
), Hn = Symbol(
  process.env.NODE_ENV !== "production" ? "setBlockTracking" : ""
), as = Symbol(process.env.NODE_ENV !== "production" ? "pushScopeId" : ""), ls = Symbol(process.env.NODE_ENV !== "production" ? "popScopeId" : ""), eo = Symbol(process.env.NODE_ENV !== "production" ? "withCtx" : ""), cs = Symbol(process.env.NODE_ENV !== "production" ? "unref" : ""), fs = Symbol(process.env.NODE_ENV !== "production" ? "isRef" : ""), to = Symbol(process.env.NODE_ENV !== "production" ? "withMemo" : ""), Go = Symbol(process.env.NODE_ENV !== "production" ? "isMemoSame" : ""), Yt = {
  [fn]: "Fragment",
  [cn]: "Teleport",
  [Xr]: "Suspense",
  [Bn]: "KeepAlive",
  [jo]: "BaseTransition",
  [Vt]: "openBlock",
  [Uo]: "createBlock",
  [$o]: "createElementBlock",
  [Hr]: "createVNode",
  [Gr]: "createElementVNode",
  [gn]: "createCommentVNode",
  [Kr]: "createTextVNode",
  [Bo]: "createStaticVNode",
  [Wr]: "resolveComponent",
  [_r]: "resolveDynamicComponent",
  [Yr]: "resolveDirective",
  [kr]: "resolveFilter",
  [Jr]: "withDirectives",
  [zr]: "renderList",
  [Xo]: "renderSlot",
  [Ho]: "createSlots",
  [Yn]: "toDisplayString",
  [Xn]: "mergeProps",
  [Qr]: "normalizeClass",
  [Zr]: "normalizeStyle",
  [un]: "normalizeProps",
  [En]: "guardReactiveProps",
  [qr]: "toHandlers",
  [Ar]: "camelize",
  [ss]: "capitalize",
  [Dr]: "toHandlerKey",
  [Hn]: "setBlockTracking",
  [as]: "pushScopeId",
  [ls]: "popScopeId",
  [eo]: "withCtx",
  [cs]: "unref",
  [fs]: "isRef",
  [to]: "withMemo",
  [Go]: "isMemoSame"
};
function us(e) {
  Object.getOwnPropertySymbols(e).forEach((t) => {
    Yt[t] = e[t];
  });
}
const il = {
  HTML: 0,
  0: "HTML",
  SVG: 1,
  1: "SVG",
  MATH_ML: 2,
  2: "MATH_ML"
}, sl = {
  ROOT: 0,
  0: "ROOT",
  ELEMENT: 1,
  1: "ELEMENT",
  TEXT: 2,
  2: "TEXT",
  COMMENT: 3,
  3: "COMMENT",
  SIMPLE_EXPRESSION: 4,
  4: "SIMPLE_EXPRESSION",
  INTERPOLATION: 5,
  5: "INTERPOLATION",
  ATTRIBUTE: 6,
  6: "ATTRIBUTE",
  DIRECTIVE: 7,
  7: "DIRECTIVE",
  COMPOUND_EXPRESSION: 8,
  8: "COMPOUND_EXPRESSION",
  IF: 9,
  9: "IF",
  IF_BRANCH: 10,
  10: "IF_BRANCH",
  FOR: 11,
  11: "FOR",
  TEXT_CALL: 12,
  12: "TEXT_CALL",
  VNODE_CALL: 13,
  13: "VNODE_CALL",
  JS_CALL_EXPRESSION: 14,
  14: "JS_CALL_EXPRESSION",
  JS_OBJECT_EXPRESSION: 15,
  15: "JS_OBJECT_EXPRESSION",
  JS_PROPERTY: 16,
  16: "JS_PROPERTY",
  JS_ARRAY_EXPRESSION: 17,
  17: "JS_ARRAY_EXPRESSION",
  JS_FUNCTION_EXPRESSION: 18,
  18: "JS_FUNCTION_EXPRESSION",
  JS_CONDITIONAL_EXPRESSION: 19,
  19: "JS_CONDITIONAL_EXPRESSION",
  JS_CACHE_EXPRESSION: 20,
  20: "JS_CACHE_EXPRESSION",
  JS_BLOCK_STATEMENT: 21,
  21: "JS_BLOCK_STATEMENT",
  JS_TEMPLATE_LITERAL: 22,
  22: "JS_TEMPLATE_LITERAL",
  JS_IF_STATEMENT: 23,
  23: "JS_IF_STATEMENT",
  JS_ASSIGNMENT_EXPRESSION: 24,
  24: "JS_ASSIGNMENT_EXPRESSION",
  JS_SEQUENCE_EXPRESSION: 25,
  25: "JS_SEQUENCE_EXPRESSION",
  JS_RETURN_STATEMENT: 26,
  26: "JS_RETURN_STATEMENT"
}, al = {
  ELEMENT: 0,
  0: "ELEMENT",
  COMPONENT: 1,
  1: "COMPONENT",
  SLOT: 2,
  2: "SLOT",
  TEMPLATE: 3,
  3: "TEMPLATE"
}, ll = {
  NOT_CONSTANT: 0,
  0: "NOT_CONSTANT",
  CAN_SKIP_PATCH: 1,
  1: "CAN_SKIP_PATCH",
  CAN_CACHE: 2,
  2: "CAN_CACHE",
  CAN_STRINGIFY: 3,
  3: "CAN_STRINGIFY"
}, De = {
  start: { line: 1, column: 1, offset: 0 },
  end: { line: 1, column: 1, offset: 0 },
  source: ""
};
function ds(e, t = "") {
  return {
    type: 0,
    source: t,
    children: e,
    helpers: /* @__PURE__ */ new Set(),
    components: [],
    directives: [],
    hoists: [],
    imports: [],
    cached: [],
    temps: 0,
    codegenNode: void 0,
    loc: De
  };
}
function dn(e, t, n, o, i, l, r, a = !1, s = !1, c = !1, u = De) {
  return e && (a ? (e.helper(Vt), e.helper(zt(e.inSSR, c))) : e.helper(Jt(e.inSSR, c)), r && e.helper(Jr)), {
    type: 13,
    tag: t,
    props: n,
    children: o,
    patchFlag: i,
    dynamicProps: l,
    directives: r,
    isBlock: a,
    disableTracking: s,
    isComponent: c,
    loc: u
  };
}
function Lt(e, t = De) {
  return {
    type: 17,
    loc: t,
    elements: e
  };
}
function tt(e, t = De) {
  return {
    type: 15,
    loc: t,
    properties: e
  };
}
function Se(e, t) {
  return {
    type: 16,
    loc: De,
    key: Ce(e) ? Y(e, !0) : e,
    value: t
  };
}
function Y(e, t = !1, n = De, o = 0) {
  return {
    type: 4,
    loc: n,
    content: e,
    isStatic: t,
    constType: t ? 3 : o
  };
}
function cl(e, t) {
  return {
    type: 5,
    loc: t,
    content: Ce(e) ? Y(e, !1, t) : e
  };
}
function ot(e, t = De) {
  return {
    type: 8,
    loc: t,
    children: e
  };
}
function Ie(e, t = [], n = De) {
  return {
    type: 14,
    loc: n,
    callee: e,
    arguments: t
  };
}
function kt(e, t = void 0, n = !1, o = !1, i = De) {
  return {
    type: 18,
    params: e,
    returns: t,
    newline: n,
    isSlot: o,
    loc: i
  };
}
function xr(e, t, n, o = !0) {
  return {
    type: 19,
    test: e,
    consequent: t,
    alternate: n,
    newline: o,
    loc: De
  };
}
function ps(e, t, n = !1, o = !1) {
  return {
    type: 20,
    index: e,
    value: t,
    needPauseTracking: n,
    inVOnce: o,
    needArraySpread: !1,
    loc: De
  };
}
function hs(e) {
  return {
    type: 21,
    body: e,
    loc: De
  };
}
function fl(e) {
  return {
    type: 22,
    elements: e,
    loc: De
  };
}
function ul(e, t, n) {
  return {
    type: 23,
    test: e,
    consequent: t,
    alternate: n,
    loc: De
  };
}
function dl(e, t) {
  return {
    type: 24,
    left: e,
    right: t,
    loc: De
  };
}
function pl(e) {
  return {
    type: 25,
    expressions: e,
    loc: De
  };
}
function hl(e) {
  return {
    type: 26,
    returns: e,
    loc: De
  };
}
function Jt(e, t) {
  return e || t ? Hr : Gr;
}
function zt(e, t) {
  return e || t ? Uo : $o;
}
function no(e, { helper: t, removeHelper: n, inSSR: o }) {
  e.isBlock || (e.isBlock = !0, n(Jt(o, e.isComponent)), t(Vt), t(zt(o, e.isComponent)));
}
const yi = new Uint8Array([123, 123]), Si = new Uint8Array([125, 125]);
function bi(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function et(e) {
  return e === 32 || e === 10 || e === 9 || e === 12 || e === 13;
}
function At(e) {
  return e === 47 || e === 62 || et(e);
}
function Pr(e) {
  const t = new Uint8Array(e.length);
  for (let n = 0; n < e.length; n++)
    t[n] = e.charCodeAt(n);
  return t;
}
const Me = {
  Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]),
  // CDATA[
  CdataEnd: new Uint8Array([93, 93, 62]),
  // ]]>
  CommentEnd: new Uint8Array([45, 45, 62]),
  // `-->`
  ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]),
  // `<\/script`
  StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]),
  // `</style`
  TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]),
  // `</title`
  TextareaEnd: new Uint8Array([
    60,
    47,
    116,
    101,
    120,
    116,
    97,
    114,
    101,
    97
  ])
  // `</textarea
};
class vl {
  constructor(t, n) {
    this.stack = t, this.cbs = n, this.state = 1, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = 1, this.inRCDATA = !1, this.inXML = !1, this.inVPre = !1, this.newlines = [], this.mode = 0, this.delimiterOpen = yi, this.delimiterClose = Si, this.delimiterIndex = -1, this.currentSequence = void 0, this.sequenceIndex = 0;
  }
  get inSFCRoot() {
    return this.mode === 2 && this.stack.length === 0;
  }
  reset() {
    this.state = 1, this.mode = 0, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = 1, this.inRCDATA = !1, this.currentSequence = void 0, this.newlines.length = 0, this.delimiterOpen = yi, this.delimiterClose = Si;
  }
  /**
   * Generate Position object with line / column information using recorded
   * newline positions. We know the index is always going to be an already
   * processed index, so all the newlines up to this index should have been
   * recorded.
   */
  getPos(t) {
    let n = 1, o = t + 1;
    for (let i = this.newlines.length - 1; i >= 0; i--) {
      const l = this.newlines[i];
      if (t > l) {
        n = i + 2, o = t - l;
        break;
      }
    }
    return {
      column: o,
      line: n,
      offset: t
    };
  }
  peek() {
    return this.buffer.charCodeAt(this.index + 1);
  }
  stateText(t) {
    t === 60 ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = 5, this.sectionStart = this.index) : !this.inVPre && t === this.delimiterOpen[0] && (this.state = 2, this.delimiterIndex = 0, this.stateInterpolationOpen(t));
  }
  stateInterpolationOpen(t) {
    if (t === this.delimiterOpen[this.delimiterIndex])
      if (this.delimiterIndex === this.delimiterOpen.length - 1) {
        const n = this.index + 1 - this.delimiterOpen.length;
        n > this.sectionStart && this.cbs.ontext(this.sectionStart, n), this.state = 3, this.sectionStart = n;
      } else
        this.delimiterIndex++;
    else this.inRCDATA ? (this.state = 32, this.stateInRCDATA(t)) : (this.state = 1, this.stateText(t));
  }
  stateInterpolation(t) {
    t === this.delimiterClose[0] && (this.state = 4, this.delimiterIndex = 0, this.stateInterpolationClose(t));
  }
  stateInterpolationClose(t) {
    t === this.delimiterClose[this.delimiterIndex] ? this.delimiterIndex === this.delimiterClose.length - 1 ? (this.cbs.oninterpolation(this.sectionStart, this.index + 1), this.inRCDATA ? this.state = 32 : this.state = 1, this.sectionStart = this.index + 1) : this.delimiterIndex++ : (this.state = 3, this.stateInterpolation(t));
  }
  stateSpecialStartSequence(t) {
    const n = this.sequenceIndex === this.currentSequence.length;
    if (!(n ? (
      // If we are at the end of the sequence, make sure the tag name has ended
      At(t)
    ) : (
      // Otherwise, do a case-insensitive comparison
      (t | 32) === this.currentSequence[this.sequenceIndex]
    )))
      this.inRCDATA = !1;
    else if (!n) {
      this.sequenceIndex++;
      return;
    }
    this.sequenceIndex = 0, this.state = 6, this.stateInTagName(t);
  }
  /** Look for an end tag. For <title> and <textarea>, also decode entities. */
  stateInRCDATA(t) {
    if (this.sequenceIndex === this.currentSequence.length) {
      if (t === 62 || et(t)) {
        const n = this.index - this.currentSequence.length;
        if (this.sectionStart < n) {
          const o = this.index;
          this.index = n, this.cbs.ontext(this.sectionStart, n), this.index = o;
        }
        this.sectionStart = n + 2, this.stateInClosingTagName(t), this.inRCDATA = !1;
        return;
      }
      this.sequenceIndex = 0;
    }
    (t | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === Me.TitleEnd || this.currentSequence === Me.TextareaEnd && !this.inSFCRoot ? !this.inVPre && t === this.delimiterOpen[0] && (this.state = 2, this.delimiterIndex = 0, this.stateInterpolationOpen(t)) : this.fastForwardTo(60) && (this.sequenceIndex = 1) : this.sequenceIndex = +(t === 60);
  }
  stateCDATASequence(t) {
    t === Me.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === Me.Cdata.length && (this.state = 28, this.currentSequence = Me.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = 23, this.stateInDeclaration(t));
  }
  /**
   * When we wait for one specific character, we can speed things up
   * by skipping through the buffer until we find it.
   *
   * @returns Whether the character was found.
   */
  fastForwardTo(t) {
    for (; ++this.index < this.buffer.length; ) {
      const n = this.buffer.charCodeAt(this.index);
      if (n === 10 && this.newlines.push(this.index), n === t)
        return !0;
    }
    return this.index = this.buffer.length - 1, !1;
  }
  /**
   * Comments and CDATA end with `-->` and `]]>`.
   *
   * Their common qualities are:
   * - Their end sequences have a distinct character they start with.
   * - That character is then repeated, so we have to check multiple repeats.
   * - All characters but the start character of the sequence can be skipped.
   */
  stateInCommentLike(t) {
    t === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === Me.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index - 2) : this.cbs.oncomment(this.sectionStart, this.index - 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = 1) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : t !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0);
  }
  startSpecial(t, n) {
    this.enterRCDATA(t, n), this.state = 31;
  }
  enterRCDATA(t, n) {
    this.inRCDATA = !0, this.currentSequence = t, this.sequenceIndex = n;
  }
  stateBeforeTagName(t) {
    t === 33 ? (this.state = 22, this.sectionStart = this.index + 1) : t === 63 ? (this.state = 24, this.sectionStart = this.index + 1) : bi(t) ? (this.sectionStart = this.index, this.mode === 0 ? this.state = 6 : this.inSFCRoot ? this.state = 34 : this.inXML ? this.state = 6 : t === 116 ? this.state = 30 : this.state = t === 115 ? 29 : 6) : t === 47 ? this.state = 8 : (this.state = 1, this.stateText(t));
  }
  stateInTagName(t) {
    At(t) && this.handleTagName(t);
  }
  stateInSFCRootTagName(t) {
    if (At(t)) {
      const n = this.buffer.slice(this.sectionStart, this.index);
      n !== "template" && this.enterRCDATA(Pr("</" + n), 0), this.handleTagName(t);
    }
  }
  handleTagName(t) {
    this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(t);
  }
  stateBeforeClosingTagName(t) {
    et(t) || (t === 62 ? (process.env.NODE_ENV !== "production" && this.cbs.onerr(14, this.index), this.state = 1, this.sectionStart = this.index + 1) : (this.state = bi(t) ? 9 : 27, this.sectionStart = this.index));
  }
  stateInClosingTagName(t) {
    (t === 62 || et(t)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = 10, this.stateAfterClosingTagName(t));
  }
  stateAfterClosingTagName(t) {
    t === 62 && (this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeAttrName(t) {
    t === 62 ? (this.cbs.onopentagend(this.index), this.inRCDATA ? this.state = 32 : this.state = 1, this.sectionStart = this.index + 1) : t === 47 ? (this.state = 7, process.env.NODE_ENV !== "production" && this.peek() !== 62 && this.cbs.onerr(22, this.index)) : t === 60 && this.peek() === 47 ? (this.cbs.onopentagend(this.index), this.state = 5, this.sectionStart = this.index) : et(t) || (process.env.NODE_ENV !== "production" && t === 61 && this.cbs.onerr(
      19,
      this.index
    ), this.handleAttrStart(t));
  }
  handleAttrStart(t) {
    t === 118 && this.peek() === 45 ? (this.state = 13, this.sectionStart = this.index) : t === 46 || t === 58 || t === 64 || t === 35 ? (this.cbs.ondirname(this.index, this.index + 1), this.state = 14, this.sectionStart = this.index + 1) : (this.state = 12, this.sectionStart = this.index);
  }
  stateInSelfClosingTag(t) {
    t === 62 ? (this.cbs.onselfclosingtag(this.index), this.state = 1, this.sectionStart = this.index + 1, this.inRCDATA = !1) : et(t) || (this.state = 11, this.stateBeforeAttrName(t));
  }
  stateInAttrName(t) {
    t === 61 || At(t) ? (this.cbs.onattribname(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : process.env.NODE_ENV !== "production" && (t === 34 || t === 39 || t === 60) && this.cbs.onerr(
      17,
      this.index
    );
  }
  stateInDirName(t) {
    t === 61 || At(t) ? (this.cbs.ondirname(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : t === 58 ? (this.cbs.ondirname(this.sectionStart, this.index), this.state = 14, this.sectionStart = this.index + 1) : t === 46 && (this.cbs.ondirname(this.sectionStart, this.index), this.state = 16, this.sectionStart = this.index + 1);
  }
  stateInDirArg(t) {
    t === 61 || At(t) ? (this.cbs.ondirarg(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : t === 91 ? this.state = 15 : t === 46 && (this.cbs.ondirarg(this.sectionStart, this.index), this.state = 16, this.sectionStart = this.index + 1);
  }
  stateInDynamicDirArg(t) {
    t === 93 ? this.state = 14 : (t === 61 || At(t)) && (this.cbs.ondirarg(this.sectionStart, this.index + 1), this.handleAttrNameEnd(t), process.env.NODE_ENV !== "production" && this.cbs.onerr(
      27,
      this.index
    ));
  }
  stateInDirModifier(t) {
    t === 61 || At(t) ? (this.cbs.ondirmodifier(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : t === 46 && (this.cbs.ondirmodifier(this.sectionStart, this.index), this.sectionStart = this.index + 1);
  }
  handleAttrNameEnd(t) {
    this.sectionStart = this.index, this.state = 17, this.cbs.onattribnameend(this.index), this.stateAfterAttrName(t);
  }
  stateAfterAttrName(t) {
    t === 61 ? this.state = 18 : t === 47 || t === 62 ? (this.cbs.onattribend(0, this.sectionStart), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(t)) : et(t) || (this.cbs.onattribend(0, this.sectionStart), this.handleAttrStart(t));
  }
  stateBeforeAttrValue(t) {
    t === 34 ? (this.state = 19, this.sectionStart = this.index + 1) : t === 39 ? (this.state = 20, this.sectionStart = this.index + 1) : et(t) || (this.sectionStart = this.index, this.state = 21, this.stateInAttrValueNoQuotes(t));
  }
  handleInAttrValue(t, n) {
    (t === n || this.fastForwardTo(n)) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(
      n === 34 ? 3 : 2,
      this.index + 1
    ), this.state = 11);
  }
  stateInAttrValueDoubleQuotes(t) {
    this.handleInAttrValue(t, 34);
  }
  stateInAttrValueSingleQuotes(t) {
    this.handleInAttrValue(t, 39);
  }
  stateInAttrValueNoQuotes(t) {
    et(t) || t === 62 ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(1, this.index), this.state = 11, this.stateBeforeAttrName(t)) : (process.env.NODE_ENV !== "production" && t === 34 || t === 39 || t === 60 || t === 61 || t === 96) && this.cbs.onerr(
      18,
      this.index
    );
  }
  stateBeforeDeclaration(t) {
    t === 91 ? (this.state = 26, this.sequenceIndex = 0) : this.state = t === 45 ? 25 : 23;
  }
  stateInDeclaration(t) {
    (t === 62 || this.fastForwardTo(62)) && (this.state = 1, this.sectionStart = this.index + 1);
  }
  stateInProcessingInstruction(t) {
    (t === 62 || this.fastForwardTo(62)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeComment(t) {
    t === 45 ? (this.state = 28, this.currentSequence = Me.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = 23;
  }
  stateInSpecialComment(t) {
    (t === 62 || this.fastForwardTo(62)) && (this.cbs.oncomment(this.sectionStart, this.index), this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeSpecialS(t) {
    t === Me.ScriptEnd[3] ? this.startSpecial(Me.ScriptEnd, 4) : t === Me.StyleEnd[3] ? this.startSpecial(Me.StyleEnd, 4) : (this.state = 6, this.stateInTagName(t));
  }
  stateBeforeSpecialT(t) {
    t === Me.TitleEnd[3] ? this.startSpecial(Me.TitleEnd, 4) : t === Me.TextareaEnd[3] ? this.startSpecial(Me.TextareaEnd, 4) : (this.state = 6, this.stateInTagName(t));
  }
  startEntity() {
  }
  stateInEntity() {
  }
  /**
   * Iterates through the buffer, calling the function corresponding to the current state.
   *
   * States that are more likely to be hit are higher up, as a performance improvement.
   */
  parse(t) {
    for (this.buffer = t; this.index < this.buffer.length; ) {
      const n = this.buffer.charCodeAt(this.index);
      switch (n === 10 && this.newlines.push(this.index), this.state) {
        case 1: {
          this.stateText(n);
          break;
        }
        case 2: {
          this.stateInterpolationOpen(n);
          break;
        }
        case 3: {
          this.stateInterpolation(n);
          break;
        }
        case 4: {
          this.stateInterpolationClose(n);
          break;
        }
        case 31: {
          this.stateSpecialStartSequence(n);
          break;
        }
        case 32: {
          this.stateInRCDATA(n);
          break;
        }
        case 26: {
          this.stateCDATASequence(n);
          break;
        }
        case 19: {
          this.stateInAttrValueDoubleQuotes(n);
          break;
        }
        case 12: {
          this.stateInAttrName(n);
          break;
        }
        case 13: {
          this.stateInDirName(n);
          break;
        }
        case 14: {
          this.stateInDirArg(n);
          break;
        }
        case 15: {
          this.stateInDynamicDirArg(n);
          break;
        }
        case 16: {
          this.stateInDirModifier(n);
          break;
        }
        case 28: {
          this.stateInCommentLike(n);
          break;
        }
        case 27: {
          this.stateInSpecialComment(n);
          break;
        }
        case 11: {
          this.stateBeforeAttrName(n);
          break;
        }
        case 6: {
          this.stateInTagName(n);
          break;
        }
        case 34: {
          this.stateInSFCRootTagName(n);
          break;
        }
        case 9: {
          this.stateInClosingTagName(n);
          break;
        }
        case 5: {
          this.stateBeforeTagName(n);
          break;
        }
        case 17: {
          this.stateAfterAttrName(n);
          break;
        }
        case 20: {
          this.stateInAttrValueSingleQuotes(n);
          break;
        }
        case 18: {
          this.stateBeforeAttrValue(n);
          break;
        }
        case 8: {
          this.stateBeforeClosingTagName(n);
          break;
        }
        case 10: {
          this.stateAfterClosingTagName(n);
          break;
        }
        case 29: {
          this.stateBeforeSpecialS(n);
          break;
        }
        case 30: {
          this.stateBeforeSpecialT(n);
          break;
        }
        case 21: {
          this.stateInAttrValueNoQuotes(n);
          break;
        }
        case 7: {
          this.stateInSelfClosingTag(n);
          break;
        }
        case 23: {
          this.stateInDeclaration(n);
          break;
        }
        case 22: {
          this.stateBeforeDeclaration(n);
          break;
        }
        case 25: {
          this.stateBeforeComment(n);
          break;
        }
        case 24: {
          this.stateInProcessingInstruction(n);
          break;
        }
        case 33: {
          this.stateInEntity();
          break;
        }
      }
      this.index++;
    }
    this.cleanup(), this.finish();
  }
  /**
   * Remove data that has already been consumed from the buffer.
   */
  cleanup() {
    this.sectionStart !== this.index && (this.state === 1 || this.state === 32 && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === 19 || this.state === 20 || this.state === 21) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index));
  }
  finish() {
    this.handleTrailingData(), this.cbs.onend();
  }
  /** Handle any trailing data. */
  handleTrailingData() {
    const t = this.buffer.length;
    this.sectionStart >= t || (this.state === 28 ? this.currentSequence === Me.CdataEnd ? this.cbs.oncdata(this.sectionStart, t) : this.cbs.oncomment(this.sectionStart, t) : this.state === 6 || this.state === 11 || this.state === 18 || this.state === 17 || this.state === 12 || this.state === 13 || this.state === 14 || this.state === 15 || this.state === 16 || this.state === 20 || this.state === 19 || this.state === 21 || this.state === 9 || this.cbs.ontext(this.sectionStart, t));
  }
  emitCodePoint(t, n) {
  }
}
const ml = {
  COMPILER_IS_ON_ELEMENT: "COMPILER_IS_ON_ELEMENT",
  COMPILER_V_BIND_SYNC: "COMPILER_V_BIND_SYNC",
  COMPILER_V_BIND_OBJECT_ORDER: "COMPILER_V_BIND_OBJECT_ORDER",
  COMPILER_V_ON_NATIVE: "COMPILER_V_ON_NATIVE",
  COMPILER_V_IF_V_FOR_PRECEDENCE: "COMPILER_V_IF_V_FOR_PRECEDENCE",
  COMPILER_NATIVE_TEMPLATE: "COMPILER_NATIVE_TEMPLATE",
  COMPILER_INLINE_TEMPLATE: "COMPILER_INLINE_TEMPLATE",
  COMPILER_FILTERS: "COMPILER_FILTERS"
}, gl = {
  COMPILER_IS_ON_ELEMENT: {
    message: 'Platform-native elements with "is" prop will no longer be treated as components in Vue 3 unless the "is" value is explicitly prefixed with "vue:".',
    link: "https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html"
  },
  COMPILER_V_BIND_SYNC: {
    message: (e) => `.sync modifier for v-bind has been removed. Use v-model with argument instead. \`v-bind:${e}.sync\` should be changed to \`v-model:${e}\`.`,
    link: "https://v3-migration.vuejs.org/breaking-changes/v-model.html"
  },
  COMPILER_V_BIND_OBJECT_ORDER: {
    message: 'v-bind="obj" usage is now order sensitive and behaves like JavaScript object spread: it will now overwrite an existing non-mergeable attribute that appears before v-bind in the case of conflict. To retain 2.x behavior, move v-bind to make it the first attribute. You can also suppress this warning if the usage is intended.',
    link: "https://v3-migration.vuejs.org/breaking-changes/v-bind.html"
  },
  COMPILER_V_ON_NATIVE: {
    message: ".native modifier for v-on has been removed as is no longer necessary.",
    link: "https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html"
  },
  COMPILER_V_IF_V_FOR_PRECEDENCE: {
    message: "v-if / v-for precedence when used on the same element has changed in Vue 3: v-if now takes higher precedence and will no longer have access to v-for scope variables. It is best to avoid the ambiguity with <template> tags or use a computed property that filters v-for data source.",
    link: "https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html"
  },
  COMPILER_NATIVE_TEMPLATE: {
    message: "<template> with no special directives will render as a native template element instead of its inner content in Vue 3."
  },
  COMPILER_INLINE_TEMPLATE: {
    message: '"inline-template" has been removed in Vue 3.',
    link: "https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html"
  },
  COMPILER_FILTERS: {
    message: 'filters have been removed in Vue 3. The "|" symbol will be treated as native JavaScript bitwise OR operator. Use method calls or computed properties instead.',
    link: "https://v3-migration.vuejs.org/breaking-changes/filters.html"
  }
};
function Co(e, { compatConfig: t }) {
  const n = t && t[e];
  return e === "MODE" ? n || 3 : n;
}
function wt(e, t) {
  const n = Co("MODE", t), o = Co(e, t);
  return n === 3 ? o === !0 : o !== !1;
}
function Qt(e, t, n, ...o) {
  const i = wt(e, t);
  return process.env.NODE_ENV !== "production" && i && Gn(e, t, n, ...o), i;
}
function Gn(e, t, n, ...o) {
  if (Co(e, t) === "suppress-warning")
    return;
  const { message: l, link: r } = gl[e], a = `(deprecation ${e}) ${typeof l == "function" ? l(...o) : l}${r ? `
  Details: ${r}` : ""}`, s = new SyntaxError(a);
  s.code = e, n && (s.loc = n), t.onWarn(s);
}
function Ko(e) {
  throw e;
}
function vs(e) {
  process.env.NODE_ENV !== "production" && console.warn(`[Vue warn] ${e.message}`);
}
function oe(e, t, n, o) {
  const i = process.env.NODE_ENV !== "production" ? (n || ms)[e] + (o || "") : `https://vuejs.org/error-reference/#compiler-${e}`, l = new SyntaxError(String(i));
  return l.code = e, l.loc = t, l;
}
const El = {
  ABRUPT_CLOSING_OF_EMPTY_COMMENT: 0,
  0: "ABRUPT_CLOSING_OF_EMPTY_COMMENT",
  CDATA_IN_HTML_CONTENT: 1,
  1: "CDATA_IN_HTML_CONTENT",
  DUPLICATE_ATTRIBUTE: 2,
  2: "DUPLICATE_ATTRIBUTE",
  END_TAG_WITH_ATTRIBUTES: 3,
  3: "END_TAG_WITH_ATTRIBUTES",
  END_TAG_WITH_TRAILING_SOLIDUS: 4,
  4: "END_TAG_WITH_TRAILING_SOLIDUS",
  EOF_BEFORE_TAG_NAME: 5,
  5: "EOF_BEFORE_TAG_NAME",
  EOF_IN_CDATA: 6,
  6: "EOF_IN_CDATA",
  EOF_IN_COMMENT: 7,
  7: "EOF_IN_COMMENT",
  EOF_IN_SCRIPT_HTML_COMMENT_LIKE_TEXT: 8,
  8: "EOF_IN_SCRIPT_HTML_COMMENT_LIKE_TEXT",
  EOF_IN_TAG: 9,
  9: "EOF_IN_TAG",
  INCORRECTLY_CLOSED_COMMENT: 10,
  10: "INCORRECTLY_CLOSED_COMMENT",
  INCORRECTLY_OPENED_COMMENT: 11,
  11: "INCORRECTLY_OPENED_COMMENT",
  INVALID_FIRST_CHARACTER_OF_TAG_NAME: 12,
  12: "INVALID_FIRST_CHARACTER_OF_TAG_NAME",
  MISSING_ATTRIBUTE_VALUE: 13,
  13: "MISSING_ATTRIBUTE_VALUE",
  MISSING_END_TAG_NAME: 14,
  14: "MISSING_END_TAG_NAME",
  MISSING_WHITESPACE_BETWEEN_ATTRIBUTES: 15,
  15: "MISSING_WHITESPACE_BETWEEN_ATTRIBUTES",
  NESTED_COMMENT: 16,
  16: "NESTED_COMMENT",
  UNEXPECTED_CHARACTER_IN_ATTRIBUTE_NAME: 17,
  17: "UNEXPECTED_CHARACTER_IN_ATTRIBUTE_NAME",
  UNEXPECTED_CHARACTER_IN_UNQUOTED_ATTRIBUTE_VALUE: 18,
  18: "UNEXPECTED_CHARACTER_IN_UNQUOTED_ATTRIBUTE_VALUE",
  UNEXPECTED_EQUALS_SIGN_BEFORE_ATTRIBUTE_NAME: 19,
  19: "UNEXPECTED_EQUALS_SIGN_BEFORE_ATTRIBUTE_NAME",
  UNEXPECTED_NULL_CHARACTER: 20,
  20: "UNEXPECTED_NULL_CHARACTER",
  UNEXPECTED_QUESTION_MARK_INSTEAD_OF_TAG_NAME: 21,
  21: "UNEXPECTED_QUESTION_MARK_INSTEAD_OF_TAG_NAME",
  UNEXPECTED_SOLIDUS_IN_TAG: 22,
  22: "UNEXPECTED_SOLIDUS_IN_TAG",
  X_INVALID_END_TAG: 23,
  23: "X_INVALID_END_TAG",
  X_MISSING_END_TAG: 24,
  24: "X_MISSING_END_TAG",
  X_MISSING_INTERPOLATION_END: 25,
  25: "X_MISSING_INTERPOLATION_END",
  X_MISSING_DIRECTIVE_NAME: 26,
  26: "X_MISSING_DIRECTIVE_NAME",
  X_MISSING_DYNAMIC_DIRECTIVE_ARGUMENT_END: 27,
  27: "X_MISSING_DYNAMIC_DIRECTIVE_ARGUMENT_END",
  X_V_IF_NO_EXPRESSION: 28,
  28: "X_V_IF_NO_EXPRESSION",
  X_V_IF_SAME_KEY: 29,
  29: "X_V_IF_SAME_KEY",
  X_V_ELSE_NO_ADJACENT_IF: 30,
  30: "X_V_ELSE_NO_ADJACENT_IF",
  X_V_FOR_NO_EXPRESSION: 31,
  31: "X_V_FOR_NO_EXPRESSION",
  X_V_FOR_MALFORMED_EXPRESSION: 32,
  32: "X_V_FOR_MALFORMED_EXPRESSION",
  X_V_FOR_TEMPLATE_KEY_PLACEMENT: 33,
  33: "X_V_FOR_TEMPLATE_KEY_PLACEMENT",
  X_V_BIND_NO_EXPRESSION: 34,
  34: "X_V_BIND_NO_EXPRESSION",
  X_V_ON_NO_EXPRESSION: 35,
  35: "X_V_ON_NO_EXPRESSION",
  X_V_SLOT_UNEXPECTED_DIRECTIVE_ON_SLOT_OUTLET: 36,
  36: "X_V_SLOT_UNEXPECTED_DIRECTIVE_ON_SLOT_OUTLET",
  X_V_SLOT_MIXED_SLOT_USAGE: 37,
  37: "X_V_SLOT_MIXED_SLOT_USAGE",
  X_V_SLOT_DUPLICATE_SLOT_NAMES: 38,
  38: "X_V_SLOT_DUPLICATE_SLOT_NAMES",
  X_V_SLOT_EXTRANEOUS_DEFAULT_SLOT_CHILDREN: 39,
  39: "X_V_SLOT_EXTRANEOUS_DEFAULT_SLOT_CHILDREN",
  X_V_SLOT_MISPLACED: 40,
  40: "X_V_SLOT_MISPLACED",
  X_V_MODEL_NO_EXPRESSION: 41,
  41: "X_V_MODEL_NO_EXPRESSION",
  X_V_MODEL_MALFORMED_EXPRESSION: 42,
  42: "X_V_MODEL_MALFORMED_EXPRESSION",
  X_V_MODEL_ON_SCOPE_VARIABLE: 43,
  43: "X_V_MODEL_ON_SCOPE_VARIABLE",
  X_V_MODEL_ON_PROPS: 44,
  44: "X_V_MODEL_ON_PROPS",
  X_INVALID_EXPRESSION: 45,
  45: "X_INVALID_EXPRESSION",
  X_KEEP_ALIVE_INVALID_CHILDREN: 46,
  46: "X_KEEP_ALIVE_INVALID_CHILDREN",
  X_PREFIX_ID_NOT_SUPPORTED: 47,
  47: "X_PREFIX_ID_NOT_SUPPORTED",
  X_MODULE_MODE_NOT_SUPPORTED: 48,
  48: "X_MODULE_MODE_NOT_SUPPORTED",
  X_CACHE_HANDLER_NOT_SUPPORTED: 49,
  49: "X_CACHE_HANDLER_NOT_SUPPORTED",
  X_SCOPE_ID_NOT_SUPPORTED: 50,
  50: "X_SCOPE_ID_NOT_SUPPORTED",
  X_VNODE_HOOKS: 51,
  51: "X_VNODE_HOOKS",
  X_V_BIND_INVALID_SAME_NAME_ARGUMENT: 52,
  52: "X_V_BIND_INVALID_SAME_NAME_ARGUMENT",
  __EXTEND_POINT__: 53,
  53: "__EXTEND_POINT__"
}, ms = {
  // parse errors
  0: "Illegal comment.",
  1: "CDATA section is allowed only in XML context.",
  2: "Duplicate attribute.",
  3: "End tag cannot have attributes.",
  4: "Illegal '/' in tags.",
  5: "Unexpected EOF in tag.",
  6: "Unexpected EOF in CDATA section.",
  7: "Unexpected EOF in comment.",
  8: "Unexpected EOF in script.",
  9: "Unexpected EOF in tag.",
  10: "Incorrectly closed comment.",
  11: "Incorrectly opened comment.",
  12: "Illegal tag name. Use '&lt;' to print '<'.",
  13: "Attribute value was expected.",
  14: "End tag name was expected.",
  15: "Whitespace was expected.",
  16: "Unexpected '<!--' in comment.",
  17: `Attribute name cannot contain U+0022 ("), U+0027 ('), and U+003C (<).`,
  18: "Unquoted attribute value cannot contain U+0022 (\"), U+0027 ('), U+003C (<), U+003D (=), and U+0060 (`).",
  19: "Attribute name cannot start with '='.",
  21: "'<?' is allowed only in XML context.",
  20: "Unexpected null character.",
  22: "Illegal '/' in tags.",
  // Vue-specific parse errors
  23: "Invalid end tag.",
  24: "Element is missing end tag.",
  25: "Interpolation end sign was not found.",
  27: "End bracket for dynamic directive argument was not found. Note that dynamic directive argument cannot contain spaces.",
  26: "Legal directive name was expected.",
  // transform errors
  28: "v-if/v-else-if is missing expression.",
  29: "v-if/else branches must use unique keys.",
  30: "v-else/v-else-if has no adjacent v-if or v-else-if.",
  31: "v-for is missing expression.",
  32: "v-for has invalid expression.",
  33: "<template v-for> key should be placed on the <template> tag.",
  34: "v-bind is missing expression.",
  52: "v-bind with same-name shorthand only allows static argument.",
  35: "v-on is missing expression.",
  36: "Unexpected custom directive on <slot> outlet.",
  37: "Mixed v-slot usage on both the component and nested <template>. When there are multiple named slots, all slots should use <template> syntax to avoid scope ambiguity.",
  38: "Duplicate slot names found. ",
  39: "Extraneous children found when component already has explicitly named default slot. These children will be ignored.",
  40: "v-slot can only be used on components or <template> tags.",
  41: "v-model is missing expression.",
  42: "v-model value must be a valid JavaScript member expression.",
  43: "v-model cannot be used on v-for or v-slot scope variables because they are not writable.",
  44: `v-model cannot be used on a prop, because local prop bindings are not writable.
Use a v-bind binding combined with a v-on listener that emits update:x event instead.`,
  45: "Error parsing JavaScript expression: ",
  46: "<KeepAlive> expects exactly one child component.",
  51: "@vnode-* hooks in templates are no longer supported. Use the vue: prefix instead. For example, @vnode-mounted should be changed to @vue:mounted. @vnode-* hooks support has been removed in 3.4.",
  // generic errors
  47: '"prefixIdentifiers" option is not supported in this build of compiler.',
  48: "ES module mode is not supported in this build of compiler.",
  49: '"cacheHandlers" option is only supported when the "prefixIdentifiers" option is enabled.',
  50: '"scopeId" option is only supported in module mode.',
  // just to fulfill types
  53: ""
};
function yl(e, t, n = !1, o = [], i = /* @__PURE__ */ Object.create(null)) {
}
function Sl(e, t, n) {
  return !1;
}
function bl(e, t) {
  if (e && (e.type === "ObjectProperty" || e.type === "ArrayPattern")) {
    let n = t.length;
    for (; n--; ) {
      const o = t[n];
      if (o.type === "AssignmentExpression")
        return !0;
      if (o.type !== "ObjectProperty" && !o.type.endsWith("Pattern"))
        break;
    }
  }
  return !1;
}
function Tl(e) {
  let t = e.length;
  for (; t--; ) {
    const n = e[t];
    if (n.type === "NewExpression")
      return !0;
    if (n.type !== "MemberExpression")
      break;
  }
  return !1;
}
function Ol(e, t) {
  for (const n of e.params)
    for (const o of gt(n))
      t(o);
}
function Nl(e, t) {
  for (const n of e.body)
    if (n.type === "VariableDeclaration") {
      if (n.declare) continue;
      for (const o of n.declarations)
        for (const i of gt(o.id))
          t(i);
    } else if (n.type === "FunctionDeclaration" || n.type === "ClassDeclaration") {
      if (n.declare || !n.id) continue;
      t(n.id);
    } else Il(n) && Cl(n, !0, t);
}
function Il(e) {
  return e.type === "ForOfStatement" || e.type === "ForInStatement" || e.type === "ForStatement";
}
function Cl(e, t, n) {
  const o = e.type === "ForStatement" ? e.init : e.left;
  if (o && o.type === "VariableDeclaration" && (o.kind === "var" ? t : !t))
    for (const i of o.declarations)
      for (const l of gt(i.id))
        n(l);
}
function gt(e, t = []) {
  switch (e.type) {
    case "Identifier":
      t.push(e);
      break;
    case "MemberExpression":
      let n = e;
      for (; n.type === "MemberExpression"; )
        n = n.object;
      t.push(n);
      break;
    case "ObjectPattern":
      for (const o of e.properties)
        o.type === "RestElement" ? gt(o.argument, t) : gt(o.value, t);
      break;
    case "ArrayPattern":
      e.elements.forEach((o) => {
        o && gt(o, t);
      });
      break;
    case "RestElement":
      gt(e.argument, t);
      break;
    case "AssignmentPattern":
      gt(e.left, t);
      break;
  }
  return t;
}
const Al = (e) => /Function(?:Expression|Declaration)$|Method$/.test(e.type), gs = (e) => e && (e.type === "ObjectProperty" || e.type === "ObjectMethod") && !e.computed, Dl = (e, t) => gs(t) && t.key === e, Es = [
  "TSAsExpression",
  // foo as number
  "TSTypeAssertion",
  // (<number>foo)
  "TSNonNullExpression",
  // foo!
  "TSInstantiationExpression",
  // foo<string>
  "TSSatisfiesExpression"
  // foo satisfies T
];
function ys(e) {
  return Es.includes(e.type) ? ys(e.expression) : e;
}
const Ge = (e) => e.type === 4 && e.isStatic;
function Wo(e) {
  switch (e) {
    case "Teleport":
    case "teleport":
      return cn;
    case "Suspense":
    case "suspense":
      return Xr;
    case "KeepAlive":
    case "keep-alive":
      return Bn;
    case "BaseTransition":
    case "base-transition":
      return jo;
  }
}
const xl = /^\d|[^\$\w\xA0-\uFFFF]/, kn = (e) => !xl.test(e), Pl = /[A-Za-z_$\xA0-\uFFFF]/, Rl = /[\.\?\w$\xA0-\uFFFF]/, Ml = /\s+[.[]\s*|\s*[.[]\s+/g, Ss = (e) => e.type === 4 ? e.content : e.loc.source, bs = (e) => {
  const t = Ss(e).trim().replace(Ml, (a) => a.trim());
  let n = 0, o = [], i = 0, l = 0, r = null;
  for (let a = 0; a < t.length; a++) {
    const s = t.charAt(a);
    switch (n) {
      case 0:
        if (s === "[")
          o.push(n), n = 1, i++;
        else if (s === "(")
          o.push(n), n = 2, l++;
        else if (!(a === 0 ? Pl : Rl).test(s))
          return !1;
        break;
      case 1:
        s === "'" || s === '"' || s === "`" ? (o.push(n), n = 3, r = s) : s === "[" ? i++ : s === "]" && (--i || (n = o.pop()));
        break;
      case 2:
        if (s === "'" || s === '"' || s === "`")
          o.push(n), n = 3, r = s;
        else if (s === "(")
          l++;
        else if (s === ")") {
          if (a === t.length - 1)
            return !1;
          --l || (n = o.pop());
        }
        break;
      case 3:
        s === r && (n = o.pop(), r = null);
        break;
    }
  }
  return !i && !l;
}, Ll = wn, _o = bs, wl = /^\s*(async\s*)?(\([^)]*?\)|[\w$_]+)\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/, Ts = (e) => wl.test(Ss(e)), Vl = wn, Os = Ts;
function Fl(e, t, n = t.length) {
  return Ns(
    {
      offset: e.offset,
      line: e.line,
      column: e.column
    },
    t,
    n
  );
}
function Ns(e, t, n = t.length) {
  let o = 0, i = -1;
  for (let l = 0; l < n; l++)
    t.charCodeAt(l) === 10 && (o++, i = l);
  return e.offset += n, e.line += o, e.column = i === -1 ? e.column + n : n - i, e;
}
function Ao(e, t) {
  if (!e)
    throw new Error(t || "unexpected compiler condition");
}
function je(e, t, n = !1) {
  for (let o = 0; o < e.props.length; o++) {
    const i = e.props[o];
    if (i.type === 7 && (n || i.exp) && (Ce(t) ? i.name === t : t.test(i.name)))
      return i;
  }
}
function pn(e, t, n = !1, o = !1) {
  for (let i = 0; i < e.props.length; i++) {
    const l = e.props[i];
    if (l.type === 6) {
      if (n) continue;
      if (l.name === t && (l.value || o))
        return l;
    } else if (l.name === "bind" && (l.exp || o) && yt(l.arg, t))
      return l;
  }
}
function yt(e, t) {
  return !!(e && Ge(e) && e.content === t);
}
function Is(e) {
  return e.props.some(
    (t) => t.type === 7 && t.name === "bind" && (!t.arg || // v-bind="obj"
    t.arg.type !== 4 || // v-bind:[_ctx.foo]
    !t.arg.isStatic)
    // v-bind:[foo]
  );
}
function mr(e) {
  return e.type === 5 || e.type === 2;
}
function Yo(e) {
  return e.type === 7 && e.name === "slot";
}
function hn(e) {
  return e.type === 1 && e.tagType === 3;
}
function Kn(e) {
  return e.type === 1 && e.tagType === 2;
}
const jl = /* @__PURE__ */ new Set([un, En]);
function Cs(e, t = []) {
  if (e && !Ce(e) && e.type === 14) {
    const n = e.callee;
    if (!Ce(n) && jl.has(n))
      return Cs(
        e.arguments[0],
        t.concat(e)
      );
  }
  return [e, t];
}
function Wn(e, t, n) {
  let o, i = e.type === 13 ? e.props : e.arguments[2], l = [], r;
  if (i && !Ce(i) && i.type === 14) {
    const a = Cs(i);
    i = a[0], l = a[1], r = l[l.length - 1];
  }
  if (i == null || Ce(i))
    o = tt([t]);
  else if (i.type === 14) {
    const a = i.arguments[0];
    !Ce(a) && a.type === 15 ? Ti(t, a) || a.properties.unshift(t) : i.callee === qr ? o = Ie(n.helper(Xn), [
      tt([t]),
      i
    ]) : i.arguments.unshift(tt([t])), !o && (o = i);
  } else i.type === 15 ? (Ti(t, i) || i.properties.unshift(t), o = i) : (o = Ie(n.helper(Xn), [
    tt([t]),
    i
  ]), r && r.callee === En && (r = l[l.length - 2]));
  e.type === 13 ? r ? r.arguments[0] = o : e.props = o : r ? r.arguments[0] = o : e.arguments[2] = o;
}
function Ti(e, t) {
  let n = !1;
  if (e.key.type === 4) {
    const o = e.key.content;
    n = t.properties.some(
      (i) => i.key.type === 4 && i.key.content === o
    );
  }
  return n;
}
function vn(e, t) {
  return `_${t}_${e.replace(/[^\w]/g, (n, o) => n === "-" ? "_" : e.charCodeAt(o).toString())}`;
}
function ct(e, t) {
  if (!e || Object.keys(t).length === 0)
    return !1;
  switch (e.type) {
    case 1:
      for (let n = 0; n < e.props.length; n++) {
        const o = e.props[n];
        if (o.type === 7 && (ct(o.arg, t) || ct(o.exp, t)))
          return !0;
      }
      return e.children.some((n) => ct(n, t));
    case 11:
      return ct(e.source, t) ? !0 : e.children.some((n) => ct(n, t));
    case 9:
      return e.branches.some((n) => ct(n, t));
    case 10:
      return ct(e.condition, t) ? !0 : e.children.some((n) => ct(n, t));
    case 4:
      return !e.isStatic && kn(e.content) && !!t[e.content];
    case 8:
      return e.children.some((n) => os(n) && ct(n, t));
    case 5:
    case 12:
      return ct(e.content, t);
    case 2:
    case 3:
    case 20:
      return !1;
    default:
      return process.env.NODE_ENV, !1;
  }
}
function As(e) {
  return e.type === 14 && e.callee === to ? e.arguments[1].returns : e;
}
const Ds = /([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/, xs = {
  parseMode: "base",
  ns: 0,
  delimiters: ["{{", "}}"],
  getNamespace: () => 0,
  isVoidTag: nr,
  isPreTag: nr,
  isIgnoreNewlineTag: nr,
  isCustomElement: nr,
  onError: Ko,
  onWarn: vs,
  comments: process.env.NODE_ENV !== "production",
  prefixIdentifiers: !1
};
let ee = xs, _n = null, bt = "", Fe = null, te = null, ke = "", mt = -1, Bt = -1, ko = 0, Dt = !1, Do = null;
const pe = [], ce = new vl(pe, {
  onerr: We,
  ontext(e, t) {
    or(we(e, t), e, t);
  },
  ontextentity(e, t, n) {
    or(e, t, n);
  },
  oninterpolation(e, t) {
    if (Dt)
      return or(we(e, t), e, t);
    let n = e + ce.delimiterOpen.length, o = t - ce.delimiterClose.length;
    for (; et(bt.charCodeAt(n)); )
      n++;
    for (; et(bt.charCodeAt(o - 1)); )
      o--;
    let i = we(n, o);
    i.includes("&") && (i = ee.decodeEntities(i, !1)), xo({
      type: 5,
      content: Er(i, !1, Te(n, o)),
      loc: Te(e, t)
    });
  },
  onopentagname(e, t) {
    const n = we(e, t);
    Fe = {
      type: 1,
      tag: n,
      ns: ee.getNamespace(n, pe[0], ee.ns),
      tagType: 0,
      // will be refined on tag close
      props: [],
      children: [],
      loc: Te(e - 1, t),
      codegenNode: void 0
    };
  },
  onopentagend(e) {
    Ni(e);
  },
  onclosetag(e, t) {
    const n = we(e, t);
    if (!ee.isVoidTag(n)) {
      let o = !1;
      for (let i = 0; i < pe.length; i++)
        if (pe[i].tag.toLowerCase() === n.toLowerCase()) {
          o = !0, i > 0 && We(24, pe[0].loc.start.offset);
          for (let r = 0; r <= i; r++) {
            const a = pe.shift();
            gr(a, t, r < i);
          }
          break;
        }
      o || We(23, Ps(e, 60));
    }
  },
  onselfclosingtag(e) {
    const t = Fe.tag;
    Fe.isSelfClosing = !0, Ni(e), pe[0] && pe[0].tag === t && gr(pe.shift(), e);
  },
  onattribname(e, t) {
    te = {
      type: 6,
      name: we(e, t),
      nameLoc: Te(e, t),
      value: void 0,
      loc: Te(e)
    };
  },
  ondirname(e, t) {
    const n = we(e, t), o = n === "." || n === ":" ? "bind" : n === "@" ? "on" : n === "#" ? "slot" : n.slice(2);
    if (!Dt && o === "" && We(26, e), Dt || o === "")
      te = {
        type: 6,
        name: n,
        nameLoc: Te(e, t),
        value: void 0,
        loc: Te(e)
      };
    else if (te = {
      type: 7,
      name: o,
      rawName: n,
      exp: void 0,
      arg: void 0,
      modifiers: n === "." ? [Y("prop")] : [],
      loc: Te(e)
    }, o === "pre") {
      Dt = ce.inVPre = !0, Do = Fe;
      const i = Fe.props;
      for (let l = 0; l < i.length; l++)
        i[l].type === 7 && (i[l] = kl(i[l]));
    }
  },
  ondirarg(e, t) {
    if (e === t) return;
    const n = we(e, t);
    if (Dt)
      te.name += n, Kt(te.nameLoc, t);
    else {
      const o = n[0] !== "[";
      te.arg = Er(
        o ? n : n.slice(1, -1),
        o,
        Te(e, t),
        o ? 3 : 0
      );
    }
  },
  ondirmodifier(e, t) {
    const n = we(e, t);
    if (Dt)
      te.name += "." + n, Kt(te.nameLoc, t);
    else if (te.name === "slot") {
      const o = te.arg;
      o && (o.content += "." + n, Kt(o.loc, t));
    } else {
      const o = Y(n, !0, Te(e, t));
      te.modifiers.push(o);
    }
  },
  onattribdata(e, t) {
    ke += we(e, t), mt < 0 && (mt = e), Bt = t;
  },
  onattribentity(e, t, n) {
    ke += e, mt < 0 && (mt = t), Bt = n;
  },
  onattribnameend(e) {
    const t = te.loc.start.offset, n = we(t, e);
    te.type === 7 && (te.rawName = n), Fe.props.some(
      (o) => (o.type === 7 ? o.rawName : o.name) === n
    ) && We(2, t);
  },
  onattribend(e, t) {
    if (Fe && te) {
      if (Kt(te.loc, t), e !== 0)
        if (ke.includes("&") && (ke = ee.decodeEntities(
          ke,
          !0
        )), te.type === 6)
          te.name === "class" && (ke = Ms(ke).trim()), e === 1 && !ke && We(13, t), te.value = {
            type: 2,
            content: ke,
            loc: e === 1 ? Te(mt, Bt) : Te(mt - 1, Bt + 1)
          }, ce.inSFCRoot && Fe.tag === "template" && te.name === "lang" && ke && ke !== "html" && ce.enterRCDATA(Pr("</template"), 0);
        else {
          let n = 0;
          te.exp = Er(
            ke,
            !1,
            Te(mt, Bt),
            0,
            n
          ), te.name === "for" && (te.forParseResult = $l(te.exp));
          let o = -1;
          te.name === "bind" && (o = te.modifiers.findIndex(
            (i) => i.content === "sync"
          )) > -1 && Qt(
            "COMPILER_V_BIND_SYNC",
            ee,
            te.loc,
            te.rawName
          ) && (te.name = "model", te.modifiers.splice(o, 1));
        }
      (te.type !== 7 || te.name !== "pre") && Fe.props.push(te);
    }
    ke = "", mt = Bt = -1;
  },
  oncomment(e, t) {
    ee.comments && xo({
      type: 3,
      content: we(e, t),
      loc: Te(e - 4, t + 3)
    });
  },
  onend() {
    const e = bt.length;
    if (process.env.NODE_ENV !== "production" && ce.state !== 1)
      switch (ce.state) {
        case 5:
        case 8:
          We(5, e);
          break;
        case 3:
        case 4:
          We(
            25,
            ce.sectionStart
          );
          break;
        case 28:
          ce.currentSequence === Me.CdataEnd ? We(6, e) : We(7, e);
          break;
        case 6:
        case 7:
        case 9:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        // "
        case 20:
        // '
        case 21:
          We(9, e);
          break;
      }
    for (let t = 0; t < pe.length; t++)
      gr(pe[t], e - 1), We(24, pe[t].loc.start.offset);
  },
  oncdata(e, t) {
    pe[0].ns !== 0 ? or(we(e, t), e, t) : We(1, e - 9);
  },
  onprocessinginstruction(e) {
    (pe[0] ? pe[0].ns : ee.ns) === 0 && We(
      21,
      e - 1
    );
  }
}), Oi = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, Ul = /^\(|\)$/g;
function $l(e) {
  const t = e.loc, n = e.content, o = n.match(Ds);
  if (!o) return;
  const [, i, l] = o, r = (f, d, p = !1) => {
    const h = t.start.offset + d, v = h + f.length;
    return Er(
      f,
      !1,
      Te(h, v),
      0,
      p ? 1 : 0
      /* Normal */
    );
  }, a = {
    source: r(l.trim(), n.indexOf(l, i.length)),
    value: void 0,
    key: void 0,
    index: void 0,
    finalized: !1
  };
  let s = i.trim().replace(Ul, "").trim();
  const c = i.indexOf(s), u = s.match(Oi);
  if (u) {
    s = s.replace(Oi, "").trim();
    const f = u[1].trim();
    let d;
    if (f && (d = n.indexOf(f, c + s.length), a.key = r(f, d, !0)), u[2]) {
      const p = u[2].trim();
      p && (a.index = r(
        p,
        n.indexOf(
          p,
          a.key ? d + f.length : c + s.length
        ),
        !0
      ));
    }
  }
  return s && (a.value = r(s, c, !0)), a;
}
function we(e, t) {
  return bt.slice(e, t);
}
function Ni(e) {
  ce.inSFCRoot && (Fe.innerLoc = Te(e + 1, e + 1)), xo(Fe);
  const { tag: t, ns: n } = Fe;
  n === 0 && ee.isPreTag(t) && ko++, ee.isVoidTag(t) ? gr(Fe, e) : (pe.unshift(Fe), (n === 1 || n === 2) && (ce.inXML = !0)), Fe = null;
}
function or(e, t, n) {
  {
    const l = pe[0] && pe[0].tag;
    l !== "script" && l !== "style" && e.includes("&") && (e = ee.decodeEntities(e, !1));
  }
  const o = pe[0] || _n, i = o.children[o.children.length - 1];
  i && i.type === 2 ? (i.content += e, Kt(i.loc, n)) : o.children.push({
    type: 2,
    content: e,
    loc: Te(t, n)
  });
}
function gr(e, t, n = !1) {
  n ? Kt(e.loc, Ps(t, 60)) : Kt(e.loc, Bl(t, 62) + 1), ce.inSFCRoot && (e.children.length ? e.innerLoc.end = St({}, e.children[e.children.length - 1].loc.end) : e.innerLoc.end = St({}, e.innerLoc.start), e.innerLoc.source = we(
    e.innerLoc.start.offset,
    e.innerLoc.end.offset
  ));
  const { tag: o, ns: i, children: l } = e;
  if (Dt || (o === "slot" ? e.tagType = 2 : Ii(e) ? e.tagType = 3 : Hl(e) && (e.tagType = 1)), ce.inRCDATA || (e.children = Rs(l)), i === 0 && ee.isIgnoreNewlineTag(o)) {
    const r = l[0];
    r && r.type === 2 && (r.content = r.content.replace(/^\r?\n/, ""));
  }
  i === 0 && ee.isPreTag(o) && ko--, Do === e && (Dt = ce.inVPre = !1, Do = null), ce.inXML && (pe[0] ? pe[0].ns : ee.ns) === 0 && (ce.inXML = !1);
  {
    const r = e.props;
    if (process.env.NODE_ENV !== "production" && wt(
      "COMPILER_V_IF_V_FOR_PRECEDENCE",
      ee
    )) {
      let s = !1, c = !1;
      for (let u = 0; u < r.length; u++) {
        const f = r[u];
        if (f.type === 7 && (f.name === "if" ? s = !0 : f.name === "for" && (c = !0)), s && c) {
          Gn(
            "COMPILER_V_IF_V_FOR_PRECEDENCE",
            ee,
            e.loc
          );
          break;
        }
      }
    }
    if (!ce.inSFCRoot && wt(
      "COMPILER_NATIVE_TEMPLATE",
      ee
    ) && e.tag === "template" && !Ii(e)) {
      process.env.NODE_ENV !== "production" && Gn(
        "COMPILER_NATIVE_TEMPLATE",
        ee,
        e.loc
      );
      const s = pe[0] || _n, c = s.children.indexOf(e);
      s.children.splice(c, 1, ...e.children);
    }
    const a = r.find(
      (s) => s.type === 6 && s.name === "inline-template"
    );
    a && Qt(
      "COMPILER_INLINE_TEMPLATE",
      ee,
      a.loc
    ) && e.children.length && (a.value = {
      type: 2,
      content: we(
        e.children[0].loc.start.offset,
        e.children[e.children.length - 1].loc.end.offset
      ),
      loc: a.loc
    });
  }
}
function Bl(e, t) {
  let n = e;
  for (; bt.charCodeAt(n) !== t && n < bt.length - 1; ) n++;
  return n;
}
function Ps(e, t) {
  let n = e;
  for (; bt.charCodeAt(n) !== t && n >= 0; ) n--;
  return n;
}
const Xl = /* @__PURE__ */ new Set(["if", "else", "else-if", "for", "slot"]);
function Ii({ tag: e, props: t }) {
  if (e === "template") {
    for (let n = 0; n < t.length; n++)
      if (t[n].type === 7 && Xl.has(t[n].name))
        return !0;
  }
  return !1;
}
function Hl({ tag: e, props: t }) {
  if (ee.isCustomElement(e))
    return !1;
  if (e === "component" || Gl(e.charCodeAt(0)) || Wo(e) || ee.isBuiltInComponent && ee.isBuiltInComponent(e) || ee.isNativeTag && !ee.isNativeTag(e))
    return !0;
  for (let n = 0; n < t.length; n++) {
    const o = t[n];
    if (o.type === 6) {
      if (o.name === "is" && o.value) {
        if (o.value.content.startsWith("vue:"))
          return !0;
        if (Qt(
          "COMPILER_IS_ON_ELEMENT",
          ee,
          o.loc
        ))
          return !0;
      }
    } else if (
      // :is on plain element - only treat as component in compat mode
      o.name === "bind" && yt(o.arg, "is") && Qt(
        "COMPILER_IS_ON_ELEMENT",
        ee,
        o.loc
      )
    )
      return !0;
  }
  return !1;
}
function Gl(e) {
  return e > 64 && e < 91;
}
const Kl = /\r\n/g;
function Rs(e, t) {
  const n = ee.whitespace !== "preserve";
  let o = !1;
  for (let i = 0; i < e.length; i++) {
    const l = e[i];
    if (l.type === 2)
      if (ko)
        l.content = l.content.replace(Kl, `
`);
      else if (Wl(l.content)) {
        const r = e[i - 1] && e[i - 1].type, a = e[i + 1] && e[i + 1].type;
        !r || !a || n && (r === 3 && (a === 3 || a === 1) || r === 1 && (a === 3 || a === 1 && _l(l.content))) ? (o = !0, e[i] = null) : l.content = " ";
      } else n && (l.content = Ms(l.content));
  }
  return o ? e.filter(Boolean) : e;
}
function Wl(e) {
  for (let t = 0; t < e.length; t++)
    if (!et(e.charCodeAt(t)))
      return !1;
  return !0;
}
function _l(e) {
  for (let t = 0; t < e.length; t++) {
    const n = e.charCodeAt(t);
    if (n === 10 || n === 13)
      return !0;
  }
  return !1;
}
function Ms(e) {
  let t = "", n = !1;
  for (let o = 0; o < e.length; o++)
    et(e.charCodeAt(o)) ? n || (t += " ", n = !0) : (t += e[o], n = !1);
  return t;
}
function xo(e) {
  (pe[0] || _n).children.push(e);
}
function Te(e, t) {
  return {
    start: ce.getPos(e),
    // @ts-expect-error allow late attachment
    end: t == null ? t : ce.getPos(t),
    // @ts-expect-error allow late attachment
    source: t == null ? t : we(e, t)
  };
}
function Yl(e) {
  return Te(e.start.offset, e.end.offset);
}
function Kt(e, t) {
  e.end = ce.getPos(t), e.source = we(e.start.offset, t);
}
function kl(e) {
  const t = {
    type: 6,
    name: e.rawName,
    nameLoc: Te(
      e.loc.start.offset,
      e.loc.start.offset + e.rawName.length
    ),
    value: void 0,
    loc: e.loc
  };
  if (e.exp) {
    const n = e.exp.loc;
    n.end.offset < e.loc.end.offset && (n.start.offset--, n.start.column--, n.end.offset++, n.end.column++), t.value = {
      type: 2,
      content: e.exp.content,
      loc: n
    };
  }
  return t;
}
function Er(e, t = !1, n, o = 0, i = 0) {
  return Y(e, t, n, o);
}
function We(e, t, n) {
  ee.onError(
    oe(e, Te(t, t), void 0, n)
  );
}
function Jl() {
  ce.reset(), Fe = null, te = null, ke = "", mt = -1, Bt = -1, pe.length = 0;
}
function Jo(e, t) {
  if (Jl(), bt = e, ee = St({}, xs), t) {
    let i;
    for (i in t)
      t[i] != null && (ee[i] = t[i]);
  }
  if (process.env.NODE_ENV !== "production" && !ee.decodeEntities)
    throw new Error(
      "[@vue/compiler-core] decodeEntities option is required in browser builds."
    );
  ce.mode = ee.parseMode === "html" ? 1 : ee.parseMode === "sfc" ? 2 : 0, ce.inXML = ee.ns === 1 || ee.ns === 2;
  const n = t && t.delimiters;
  n && (ce.delimiterOpen = Pr(n[0]), ce.delimiterClose = Pr(n[1]));
  const o = _n = ds([], e);
  return ce.parse(bt), o.loc = Te(0, e.length), o.children = Rs(o.children), _n = null, o;
}
function zl(e, t) {
  yr(
    e,
    void 0,
    t,
    // Root node is unfortunately non-hoistable due to potential parent
    // fallthrough attributes.
    Ls(e, e.children[0])
  );
}
function Ls(e, t) {
  const { children: n } = e;
  return n.length === 1 && t.type === 1 && !Kn(t);
}
function yr(e, t, n, o = !1, i = !1) {
  const { children: l } = e, r = [];
  for (let u = 0; u < l.length; u++) {
    const f = l[u];
    if (f.type === 1 && f.tagType === 0) {
      const d = o ? 0 : ze(f, n);
      if (d > 0) {
        if (d >= 2) {
          f.codegenNode.patchFlag = -1, r.push(f);
          continue;
        }
      } else {
        const p = f.codegenNode;
        if (p.type === 13) {
          const h = p.patchFlag;
          if ((h === void 0 || h === 512 || h === 1) && Vs(f, n) >= 2) {
            const v = Fs(f);
            v && (p.props = n.hoist(v));
          }
          p.dynamicProps && (p.dynamicProps = n.hoist(p.dynamicProps));
        }
      }
    } else if (f.type === 12 && (o ? 0 : ze(f, n)) >= 2) {
      r.push(f);
      continue;
    }
    if (f.type === 1) {
      const d = f.tagType === 1;
      d && n.scopes.vSlot++, yr(f, e, n, !1, i), d && n.scopes.vSlot--;
    } else if (f.type === 11)
      yr(f, e, n, f.children.length === 1, !0);
    else if (f.type === 9)
      for (let d = 0; d < f.branches.length; d++)
        yr(
          f.branches[d],
          e,
          n,
          f.branches[d].children.length === 1,
          i
        );
  }
  let a = !1;
  if (r.length === l.length && e.type === 1) {
    if (e.tagType === 0 && e.codegenNode && e.codegenNode.type === 13 && Et(e.codegenNode.children))
      e.codegenNode.children = s(
        Lt(e.codegenNode.children)
      ), a = !0;
    else if (e.tagType === 1 && e.codegenNode && e.codegenNode.type === 13 && e.codegenNode.children && !Et(e.codegenNode.children) && e.codegenNode.children.type === 15) {
      const u = c(e.codegenNode, "default");
      u && (u.returns = s(
        Lt(u.returns)
      ), a = !0);
    } else if (e.tagType === 3 && t && t.type === 1 && t.tagType === 1 && t.codegenNode && t.codegenNode.type === 13 && t.codegenNode.children && !Et(t.codegenNode.children) && t.codegenNode.children.type === 15) {
      const u = je(e, "slot", !0), f = u && u.arg && c(t.codegenNode, u.arg);
      f && (f.returns = s(
        Lt(f.returns)
      ), a = !0);
    }
  }
  if (!a)
    for (const u of r)
      u.codegenNode = n.cache(u.codegenNode);
  function s(u) {
    const f = n.cache(u);
    return i && n.hmr && (f.needArraySpread = !0), f;
  }
  function c(u, f) {
    if (u.children && !Et(u.children) && u.children.type === 15) {
      const d = u.children.properties.find(
        (p) => p.key === f || p.key.content === f
      );
      return d && d.value;
    }
  }
  r.length && n.transformHoist && n.transformHoist(l, n, e);
}
function ze(e, t) {
  const { constantCache: n } = t;
  switch (e.type) {
    case 1:
      if (e.tagType !== 0)
        return 0;
      const o = n.get(e);
      if (o !== void 0)
        return o;
      const i = e.codegenNode;
      if (i.type !== 13 || i.isBlock && e.tag !== "svg" && e.tag !== "foreignObject" && e.tag !== "math")
        return 0;
      if (i.patchFlag === void 0) {
        let r = 3;
        const a = Vs(e, t);
        if (a === 0)
          return n.set(e, 0), 0;
        a < r && (r = a);
        for (let s = 0; s < e.children.length; s++) {
          const c = ze(e.children[s], t);
          if (c === 0)
            return n.set(e, 0), 0;
          c < r && (r = c);
        }
        if (r > 1)
          for (let s = 0; s < e.props.length; s++) {
            const c = e.props[s];
            if (c.type === 7 && c.name === "bind" && c.exp) {
              const u = ze(c.exp, t);
              if (u === 0)
                return n.set(e, 0), 0;
              u < r && (r = u);
            }
          }
        if (i.isBlock) {
          for (let s = 0; s < e.props.length; s++)
            if (e.props[s].type === 7)
              return n.set(e, 0), 0;
          t.removeHelper(Vt), t.removeHelper(
            zt(t.inSSR, i.isComponent)
          ), i.isBlock = !1, t.helper(Jt(t.inSSR, i.isComponent));
        }
        return n.set(e, r), r;
      } else
        return n.set(e, 0), 0;
    case 2:
    case 3:
      return 3;
    case 9:
    case 11:
    case 10:
      return 0;
    case 5:
    case 12:
      return ze(e.content, t);
    case 4:
      return e.constType;
    case 8:
      let l = 3;
      for (let r = 0; r < e.children.length; r++) {
        const a = e.children[r];
        if (Ce(a) || Fo(a))
          continue;
        const s = ze(a, t);
        if (s === 0)
          return 0;
        s < l && (l = s);
      }
      return l;
    case 20:
      return 2;
    default:
      return process.env.NODE_ENV, 0;
  }
}
const Ql = /* @__PURE__ */ new Set([
  Qr,
  Zr,
  un,
  En
]);
function ws(e, t) {
  if (e.type === 14 && !Ce(e.callee) && Ql.has(e.callee)) {
    const n = e.arguments[0];
    if (n.type === 4)
      return ze(n, t);
    if (n.type === 14)
      return ws(n, t);
  }
  return 0;
}
function Vs(e, t) {
  let n = 3;
  const o = Fs(e);
  if (o && o.type === 15) {
    const { properties: i } = o;
    for (let l = 0; l < i.length; l++) {
      const { key: r, value: a } = i[l], s = ze(r, t);
      if (s === 0)
        return s;
      s < n && (n = s);
      let c;
      if (a.type === 4 ? c = ze(a, t) : a.type === 14 ? c = ws(a, t) : c = 0, c === 0)
        return c;
      c < n && (n = c);
    }
  }
  return n;
}
function Fs(e) {
  const t = e.codegenNode;
  if (t.type === 13)
    return t.props;
}
function js(e, {
  filename: t = "",
  prefixIdentifiers: n = !1,
  hoistStatic: o = !1,
  hmr: i = !1,
  cacheHandlers: l = !1,
  nodeTransforms: r = [],
  directiveTransforms: a = {},
  transformHoist: s = null,
  isBuiltInComponent: c = wn,
  isCustomElement: u = wn,
  expressionPlugins: f = [],
  scopeId: d = null,
  slotted: p = !0,
  ssr: h = !1,
  inSSR: v = !1,
  ssrCssVars: m = "",
  bindingMetadata: g = Va,
  inline: E = !1,
  isTS: N = !1,
  onError: T = Ko,
  onWarn: I = vs,
  compatConfig: C
}) {
  const F = t.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/), P = {
    // options
    filename: t,
    selfName: F && is(Mt(F[1])),
    prefixIdentifiers: n,
    hoistStatic: o,
    hmr: i,
    cacheHandlers: l,
    nodeTransforms: r,
    directiveTransforms: a,
    transformHoist: s,
    isBuiltInComponent: c,
    isCustomElement: u,
    expressionPlugins: f,
    scopeId: d,
    slotted: p,
    ssr: h,
    inSSR: v,
    ssrCssVars: m,
    bindingMetadata: g,
    inline: E,
    isTS: N,
    onError: T,
    onWarn: I,
    compatConfig: C,
    // state
    root: e,
    helpers: /* @__PURE__ */ new Map(),
    components: /* @__PURE__ */ new Set(),
    directives: /* @__PURE__ */ new Set(),
    hoists: [],
    imports: [],
    cached: [],
    constantCache: /* @__PURE__ */ new WeakMap(),
    temps: 0,
    identifiers: /* @__PURE__ */ Object.create(null),
    scopes: {
      vFor: 0,
      vSlot: 0,
      vPre: 0,
      vOnce: 0
    },
    parent: null,
    grandParent: null,
    currentNode: e,
    childIndex: 0,
    inVOnce: !1,
    // methods
    helper(y) {
      const D = P.helpers.get(y) || 0;
      return P.helpers.set(y, D + 1), y;
    },
    removeHelper(y) {
      const D = P.helpers.get(y);
      if (D) {
        const R = D - 1;
        R ? P.helpers.set(y, R) : P.helpers.delete(y);
      }
    },
    helperString(y) {
      return `_${Yt[P.helper(y)]}`;
    },
    replaceNode(y) {
      if (process.env.NODE_ENV !== "production") {
        if (!P.currentNode)
          throw new Error("Node being replaced is already removed.");
        if (!P.parent)
          throw new Error("Cannot replace root node.");
      }
      P.parent.children[P.childIndex] = P.currentNode = y;
    },
    removeNode(y) {
      if (process.env.NODE_ENV !== "production" && !P.parent)
        throw new Error("Cannot remove root node.");
      const D = P.parent.children, R = y ? D.indexOf(y) : P.currentNode ? P.childIndex : -1;
      if (process.env.NODE_ENV !== "production" && R < 0)
        throw new Error("node being removed is not a child of current parent");
      !y || y === P.currentNode ? (P.currentNode = null, P.onNodeRemoved()) : P.childIndex > R && (P.childIndex--, P.onNodeRemoved()), P.parent.children.splice(R, 1);
    },
    onNodeRemoved: wn,
    addIdentifiers(y) {
    },
    removeIdentifiers(y) {
    },
    hoist(y) {
      Ce(y) && (y = Y(y)), P.hoists.push(y);
      const D = Y(
        `_hoisted_${P.hoists.length}`,
        !1,
        y.loc,
        2
      );
      return D.hoisted = y, D;
    },
    cache(y, D = !1, R = !1) {
      const L = ps(
        P.cached.length,
        y,
        D,
        R
      );
      return P.cached.push(L), L;
    }
  };
  return P.filters = /* @__PURE__ */ new Set(), P;
}
function Us(e, t) {
  const n = js(e, t);
  Jn(e, n), t.hoistStatic && zl(e, n), t.ssr || Zl(e, n), e.helpers = /* @__PURE__ */ new Set([...n.helpers.keys()]), e.components = [...n.components], e.directives = [...n.directives], e.imports = n.imports, e.hoists = n.hoists, e.temps = n.temps, e.cached = n.cached, e.transformed = !0, e.filters = [...n.filters];
}
function Zl(e, t) {
  const { helper: n } = t, { children: o } = e;
  if (o.length === 1) {
    const i = o[0];
    if (Ls(e, i) && i.codegenNode) {
      const l = i.codegenNode;
      l.type === 13 && no(l, t), e.codegenNode = l;
    } else
      e.codegenNode = i;
  } else if (o.length > 1) {
    let i = 64;
    process.env.NODE_ENV !== "production" && o.filter((l) => l.type !== 3).length === 1 && (i |= 2048), e.codegenNode = dn(
      t,
      n(fn),
      void 0,
      e.children,
      i,
      void 0,
      void 0,
      !0,
      void 0,
      !1
    );
  }
}
function ql(e, t) {
  let n = 0;
  const o = () => {
    n--;
  };
  for (; n < e.children.length; n++) {
    const i = e.children[n];
    Ce(i) || (t.grandParent = t.parent, t.parent = e, t.childIndex = n, t.onNodeRemoved = o, Jn(i, t));
  }
}
function Jn(e, t) {
  t.currentNode = e;
  const { nodeTransforms: n } = t, o = [];
  for (let l = 0; l < n.length; l++) {
    const r = n[l](e, t);
    if (r && (Et(r) ? o.push(...r) : o.push(r)), t.currentNode)
      e = t.currentNode;
    else
      return;
  }
  switch (e.type) {
    case 3:
      t.ssr || t.helper(gn);
      break;
    case 5:
      t.ssr || t.helper(Yn);
      break;
    // for container types, further traverse downwards
    case 9:
      for (let l = 0; l < e.branches.length; l++)
        Jn(e.branches[l], t);
      break;
    case 10:
    case 11:
    case 1:
    case 0:
      ql(e, t);
      break;
  }
  t.currentNode = e;
  let i = o.length;
  for (; i--; )
    o[i]();
}
function zo(e, t) {
  const n = Ce(e) ? (o) => o === e : (o) => e.test(o);
  return (o, i) => {
    if (o.type === 1) {
      const { props: l } = o;
      if (o.tagType === 3 && l.some(Yo))
        return;
      const r = [];
      for (let a = 0; a < l.length; a++) {
        const s = l[a];
        if (s.type === 7 && n(s.name)) {
          l.splice(a, 1), a--;
          const c = t(o, s, i);
          c && r.push(c);
        }
      }
      return r;
    }
  };
}
const ro = "/*@__PURE__*/", $s = (e) => `${Yt[e]}: _${Yt[e]}`;
function ec(e, {
  mode: t = "function",
  prefixIdentifiers: n = t === "module",
  sourceMap: o = !1,
  filename: i = "template.vue.html",
  scopeId: l = null,
  optimizeImports: r = !1,
  runtimeGlobalName: a = "Vue",
  runtimeModuleName: s = "vue",
  ssrRuntimeModuleName: c = "vue/server-renderer",
  ssr: u = !1,
  isTS: f = !1,
  inSSR: d = !1
}) {
  const p = {
    mode: t,
    prefixIdentifiers: n,
    sourceMap: o,
    filename: i,
    scopeId: l,
    optimizeImports: r,
    runtimeGlobalName: a,
    runtimeModuleName: s,
    ssrRuntimeModuleName: c,
    ssr: u,
    isTS: f,
    inSSR: d,
    source: e.source,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    indentLevel: 0,
    pure: !1,
    map: void 0,
    helper(v) {
      return `_${Yt[v]}`;
    },
    push(v, m = -2, g) {
      p.code += v;
    },
    indent() {
      h(++p.indentLevel);
    },
    deindent(v = !1) {
      v ? --p.indentLevel : h(--p.indentLevel);
    },
    newline() {
      h(p.indentLevel);
    }
  };
  function h(v) {
    p.push(
      `
` + "  ".repeat(v),
      0
      /* Start */
    );
  }
  return p;
}
function Bs(e, t = {}) {
  const n = ec(e, t);
  t.onContextCreated && t.onContextCreated(n);
  const {
    mode: o,
    push: i,
    prefixIdentifiers: l,
    indent: r,
    deindent: a,
    newline: s,
    scopeId: c,
    ssr: u
  } = n, f = Array.from(e.helpers), d = f.length > 0, p = !l && o !== "module";
  tc(e, n);
  const v = u ? "ssrRender" : "render", g = (u ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", "_cache"]).join(", ");
  if (i(`function ${v}(${g}) {`), r(), p && (i("with (_ctx) {"), r(), d && (i(
    `const { ${f.map($s).join(", ")} } = _Vue
`,
    -1
    /* End */
  ), s())), e.components.length && (uo(e.components, "component", n), (e.directives.length || e.temps > 0) && s()), e.directives.length && (uo(e.directives, "directive", n), e.temps > 0 && s()), e.filters && e.filters.length && (s(), uo(e.filters, "filter", n), s()), e.temps > 0) {
    i("let ");
    for (let E = 0; E < e.temps; E++)
      i(`${E > 0 ? ", " : ""}_temp${E}`);
  }
  return (e.components.length || e.directives.length || e.temps) && (i(
    `
`,
    0
    /* Start */
  ), s()), u || i("return "), e.codegenNode ? $e(e.codegenNode, n) : i("null"), p && (a(), i("}")), a(), i("}"), {
    ast: e,
    code: n.code,
    preamble: "",
    map: n.map ? n.map.toJSON() : void 0
  };
}
function tc(e, t) {
  const {
    ssr: n,
    prefixIdentifiers: o,
    push: i,
    newline: l,
    runtimeModuleName: r,
    runtimeGlobalName: a,
    ssrRuntimeModuleName: s
  } = t, c = a, u = Array.from(e.helpers);
  if (u.length > 0 && (i(
    `const _Vue = ${c}
`,
    -1
    /* End */
  ), e.hoists.length)) {
    const f = [
      Hr,
      Gr,
      gn,
      Kr,
      Bo
    ].filter((d) => u.includes(d)).map($s).join(", ");
    i(
      `const { ${f} } = _Vue
`,
      -1
      /* End */
    );
  }
  nc(e.hoists, t), l(), i("return ");
}
function uo(e, t, { helper: n, push: o, newline: i, isTS: l }) {
  const r = n(
    t === "filter" ? kr : t === "component" ? Wr : Yr
  );
  for (let a = 0; a < e.length; a++) {
    let s = e[a];
    const c = s.endsWith("__self");
    c && (s = s.slice(0, -6)), o(
      `const ${vn(s, t)} = ${r}(${JSON.stringify(s)}${c ? ", true" : ""})${l ? "!" : ""}`
    ), a < e.length - 1 && i();
  }
}
function nc(e, t) {
  if (!e.length)
    return;
  t.pure = !0;
  const { push: n, newline: o } = t;
  o();
  for (let i = 0; i < e.length; i++) {
    const l = e[i];
    l && (n(`const _hoisted_${i + 1} = `), $e(l, t), o());
  }
  t.pure = !1;
}
function rc(e) {
  return Ce(e) || e.type === 4 || e.type === 2 || e.type === 5 || e.type === 8;
}
function Qo(e, t) {
  const n = e.length > 3 || process.env.NODE_ENV !== "production" && e.some((o) => Et(o) || !rc(o));
  t.push("["), n && t.indent(), zn(e, t, n), n && t.deindent(), t.push("]");
}
function zn(e, t, n = !1, o = !0) {
  const { push: i, newline: l } = t;
  for (let r = 0; r < e.length; r++) {
    const a = e[r];
    Ce(a) ? i(
      a,
      -3
      /* Unknown */
    ) : Et(a) ? Qo(a, t) : $e(a, t), r < e.length - 1 && (n ? (o && i(","), l()) : o && i(", "));
  }
}
function $e(e, t) {
  if (Ce(e)) {
    t.push(
      e,
      -3
      /* Unknown */
    );
    return;
  }
  if (Fo(e)) {
    t.push(t.helper(e));
    return;
  }
  switch (e.type) {
    case 1:
    case 9:
    case 11:
      process.env.NODE_ENV !== "production" && Ao(
        e.codegenNode != null,
        "Codegen node is missing for element/if/for node. Apply appropriate transforms first."
      ), $e(e.codegenNode, t);
      break;
    case 2:
      oc(e, t);
      break;
    case 4:
      Xs(e, t);
      break;
    case 5:
      ic(e, t);
      break;
    case 12:
      $e(e.codegenNode, t);
      break;
    case 8:
      Hs(e, t);
      break;
    case 3:
      ac(e, t);
      break;
    case 13:
      lc(e, t);
      break;
    case 14:
      fc(e, t);
      break;
    case 15:
      uc(e, t);
      break;
    case 17:
      dc(e, t);
      break;
    case 18:
      pc(e, t);
      break;
    case 19:
      hc(e, t);
      break;
    case 20:
      vc(e, t);
      break;
    case 21:
      zn(e.body, t, !0, !1);
      break;
    // SSR only types
    case 22:
      break;
    case 23:
      break;
    case 24:
      break;
    case 25:
      break;
    case 26:
      break;
    /* v8 ignore start */
    case 10:
      break;
    default:
      if (process.env.NODE_ENV !== "production")
        return Ao(!1, `unhandled codegen node type: ${e.type}`), e;
  }
}
function oc(e, t) {
  t.push(JSON.stringify(e.content), -3, e);
}
function Xs(e, t) {
  const { content: n, isStatic: o } = e;
  t.push(
    o ? JSON.stringify(n) : n,
    -3,
    e
  );
}
function ic(e, t) {
  const { push: n, helper: o, pure: i } = t;
  i && n(ro), n(`${o(Yn)}(`), $e(e.content, t), n(")");
}
function Hs(e, t) {
  for (let n = 0; n < e.children.length; n++) {
    const o = e.children[n];
    Ce(o) ? t.push(
      o,
      -3
      /* Unknown */
    ) : $e(o, t);
  }
}
function sc(e, t) {
  const { push: n } = t;
  if (e.type === 8)
    n("["), Hs(e, t), n("]");
  else if (e.isStatic) {
    const o = kn(e.content) ? e.content : JSON.stringify(e.content);
    n(o, -2, e);
  } else
    n(`[${e.content}]`, -3, e);
}
function ac(e, t) {
  const { push: n, helper: o, pure: i } = t;
  i && n(ro), n(
    `${o(gn)}(${JSON.stringify(e.content)})`,
    -3,
    e
  );
}
function lc(e, t) {
  const { push: n, helper: o, pure: i } = t, {
    tag: l,
    props: r,
    children: a,
    patchFlag: s,
    dynamicProps: c,
    directives: u,
    isBlock: f,
    disableTracking: d,
    isComponent: p
  } = e;
  let h;
  if (s)
    if (process.env.NODE_ENV !== "production")
      if (s < 0)
        h = s + ` /* ${hr[s]} */`;
      else {
        const m = Object.keys(hr).map(Number).filter((g) => g > 0 && s & g).map((g) => hr[g]).join(", ");
        h = s + ` /* ${m} */`;
      }
    else
      h = String(s);
  u && n(o(Jr) + "("), f && n(`(${o(Vt)}(${d ? "true" : ""}), `), i && n(ro);
  const v = f ? zt(t.inSSR, p) : Jt(t.inSSR, p);
  n(o(v) + "(", -2, e), zn(
    cc([l, r, a, h, c]),
    t
  ), n(")"), f && n(")"), u && (n(", "), $e(u, t), n(")"));
}
function cc(e) {
  let t = e.length;
  for (; t-- && e[t] == null; )
    ;
  return e.slice(0, t + 1).map((n) => n || "null");
}
function fc(e, t) {
  const { push: n, helper: o, pure: i } = t, l = Ce(e.callee) ? e.callee : o(e.callee);
  i && n(ro), n(l + "(", -2, e), zn(e.arguments, t), n(")");
}
function uc(e, t) {
  const { push: n, indent: o, deindent: i, newline: l } = t, { properties: r } = e;
  if (!r.length) {
    n("{}", -2, e);
    return;
  }
  const a = r.length > 1 || process.env.NODE_ENV !== "production" && r.some((s) => s.value.type !== 4);
  n(a ? "{" : "{ "), a && o();
  for (let s = 0; s < r.length; s++) {
    const { key: c, value: u } = r[s];
    sc(c, t), n(": "), $e(u, t), s < r.length - 1 && (n(","), l());
  }
  a && i(), n(a ? "}" : " }");
}
function dc(e, t) {
  Qo(e.elements, t);
}
function pc(e, t) {
  const { push: n, indent: o, deindent: i } = t, { params: l, returns: r, body: a, newline: s, isSlot: c } = e;
  c && n(`_${Yt[eo]}(`), n("(", -2, e), Et(l) ? zn(l, t) : l && $e(l, t), n(") => "), (s || a) && (n("{"), o()), r ? (s && n("return "), Et(r) ? Qo(r, t) : $e(r, t)) : a && $e(a, t), (s || a) && (i(), n("}")), c && (e.isNonScopedSlot && n(", undefined, true"), n(")"));
}
function hc(e, t) {
  const { test: n, consequent: o, alternate: i, newline: l } = e, { push: r, indent: a, deindent: s, newline: c } = t;
  if (n.type === 4) {
    const f = !kn(n.content);
    f && r("("), Xs(n, t), f && r(")");
  } else
    r("("), $e(n, t), r(")");
  l && a(), t.indentLevel++, l || r(" "), r("? "), $e(o, t), t.indentLevel--, l && c(), l || r(" "), r(": ");
  const u = i.type === 19;
  u || t.indentLevel++, $e(i, t), u || t.indentLevel--, l && s(
    !0
    /* without newline */
  );
}
function vc(e, t) {
  const { push: n, helper: o, indent: i, deindent: l, newline: r } = t, { needPauseTracking: a, needArraySpread: s } = e;
  s && n("[...("), n(`_cache[${e.index}] || (`), a && (i(), n(`${o(Hn)}(-1`), e.inVOnce && n(", true"), n("),"), r(), n("(")), n(`_cache[${e.index}] = `), $e(e.value, t), a && (n(`).cacheIndex = ${e.index},`), r(), n(`${o(Hn)}(1),`), r(), n(`_cache[${e.index}]`), l()), n(")"), s && n(")]");
}
const mc = new RegExp(
  "\\b" + "arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b") + "\\b"
), gc = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
function Wt(e, t, n = !1, o = !1) {
  const i = e.content;
  if (i.trim())
    try {
      new Function(
        o ? ` ${i} ` : `return ${n ? `(${i}) => {}` : `(${i})`}`
      );
    } catch (l) {
      let r = l.message;
      const a = i.replace(gc, "").match(mc);
      a && (r = `avoid using JavaScript keyword as property name: "${a[0]}"`), t.onError(
        oe(
          45,
          e.loc,
          void 0,
          r
        )
      );
    }
}
const Gs = (e, t) => {
  if (e.type === 5)
    e.content = Sr(
      e.content,
      t
    );
  else if (e.type === 1) {
    const n = je(e, "memo");
    for (let o = 0; o < e.props.length; o++) {
      const i = e.props[o];
      if (i.type === 7 && i.name !== "for") {
        const l = i.exp, r = i.arg;
        l && l.type === 4 && !(i.name === "on" && r) && // key has been processed in transformFor(vMemo + vFor)
        !(n && r && r.type === 4 && r.content === "key") && (i.exp = Sr(
          l,
          t,
          // slot args must be processed as function params
          i.name === "slot"
        )), r && r.type === 4 && !r.isStatic && (i.arg = Sr(r, t));
      }
    }
  }
};
function Sr(e, t, n = !1, o = !1, i = Object.create(t.identifiers)) {
  return process.env.NODE_ENV !== "production" && Wt(e, t, n, o), e;
}
function Ks(e) {
  return Ce(e) ? e : e.type === 4 ? e.content : e.children.map(Ks).join("");
}
const Ec = zo(
  /^(if|else|else-if)$/,
  (e, t, n) => Ws(e, t, n, (o, i, l) => {
    const r = n.parent.children;
    let a = r.indexOf(o), s = 0;
    for (; a-- >= 0; ) {
      const c = r[a];
      c && c.type === 9 && (s += c.branches.length);
    }
    return () => {
      if (l)
        o.codegenNode = Ai(
          i,
          s,
          n
        );
      else {
        const c = Sc(o.codegenNode);
        c.alternate = Ai(
          i,
          s + o.branches.length - 1,
          n
        );
      }
    };
  })
);
function Ws(e, t, n, o) {
  if (t.name !== "else" && (!t.exp || !t.exp.content.trim())) {
    const i = t.exp ? t.exp.loc : e.loc;
    n.onError(
      oe(28, t.loc)
    ), t.exp = Y("true", !1, i);
  }
  if (process.env.NODE_ENV !== "production" && t.exp && Wt(t.exp, n), t.name === "if") {
    const i = Ci(e, t), l = {
      type: 9,
      loc: Yl(e.loc),
      branches: [i]
    };
    if (n.replaceNode(l), o)
      return o(l, i, !0);
  } else {
    const i = n.parent.children, l = [];
    let r = i.indexOf(e);
    for (; r-- >= -1; ) {
      const a = i[r];
      if (a && a.type === 3) {
        n.removeNode(a), process.env.NODE_ENV !== "production" && l.unshift(a);
        continue;
      }
      if (a && a.type === 2 && !a.content.trim().length) {
        n.removeNode(a);
        continue;
      }
      if (a && a.type === 9) {
        t.name === "else-if" && a.branches[a.branches.length - 1].condition === void 0 && n.onError(
          oe(30, e.loc)
        ), n.removeNode();
        const s = Ci(e, t);
        if (process.env.NODE_ENV !== "production" && l.length && // #3619 ignore comments if the v-if is direct child of <transition>
        !(n.parent && n.parent.type === 1 && (n.parent.tag === "transition" || n.parent.tag === "Transition")) && (s.children = [...l, ...s.children]), process.env.NODE_ENV !== "production") {
          const u = s.userKey;
          u && a.branches.forEach(({ userKey: f }) => {
            yc(f, u) && n.onError(
              oe(
                29,
                s.userKey.loc
              )
            );
          });
        }
        a.branches.push(s);
        const c = o && o(a, s, !1);
        Jn(s, n), c && c(), n.currentNode = null;
      } else
        n.onError(
          oe(30, e.loc)
        );
      break;
    }
  }
}
function Ci(e, t) {
  const n = e.tagType === 3;
  return {
    type: 10,
    loc: e.loc,
    condition: t.name === "else" ? void 0 : t.exp,
    children: n && !je(e, "for") ? e.children : [e],
    userKey: pn(e, "key"),
    isTemplateIf: n
  };
}
function Ai(e, t, n) {
  return e.condition ? xr(
    e.condition,
    Di(e, t, n),
    // make sure to pass in asBlock: true so that the comment node call
    // closes the current block.
    Ie(n.helper(gn), [
      process.env.NODE_ENV !== "production" ? '"v-if"' : '""',
      "true"
    ])
  ) : Di(e, t, n);
}
function Di(e, t, n) {
  const { helper: o } = n, i = Se(
    "key",
    Y(
      `${t}`,
      !1,
      De,
      2
    )
  ), { children: l } = e, r = l[0];
  if (l.length !== 1 || r.type !== 1)
    if (l.length === 1 && r.type === 11) {
      const s = r.codegenNode;
      return Wn(s, i, n), s;
    } else {
      let s = 64;
      return process.env.NODE_ENV !== "production" && !e.isTemplateIf && l.filter((c) => c.type !== 3).length === 1 && (s |= 2048), dn(
        n,
        o(fn),
        tt([i]),
        l,
        s,
        void 0,
        void 0,
        !0,
        !1,
        !1,
        e.loc
      );
    }
  else {
    const s = r.codegenNode, c = As(s);
    return c.type === 13 && no(c, n), Wn(c, i, n), s;
  }
}
function yc(e, t) {
  if (!e || e.type !== t.type)
    return !1;
  if (e.type === 6) {
    if (e.value.content !== t.value.content)
      return !1;
  } else {
    const n = e.exp, o = t.exp;
    if (n.type !== o.type || n.type !== 4 || n.isStatic !== o.isStatic || n.content !== o.content)
      return !1;
  }
  return !0;
}
function Sc(e) {
  for (; ; )
    if (e.type === 19)
      if (e.alternate.type === 19)
        e = e.alternate;
      else
        return e;
    else e.type === 20 && (e = e.value);
}
const _s = (e, t, n) => {
  const { modifiers: o, loc: i } = e, l = e.arg;
  let { exp: r } = e;
  if (r && r.type === 4 && !r.content.trim() && (r = void 0), !r) {
    if (l.type !== 4 || !l.isStatic)
      return n.onError(
        oe(
          52,
          l.loc
        )
      ), {
        props: [
          Se(l, Y("", !0, i))
        ]
      };
    Ys(e), r = e.exp;
  }
  return l.type !== 4 ? (l.children.unshift("("), l.children.push(') || ""')) : l.isStatic || (l.content = `${l.content} || ""`), o.some((a) => a.content === "camel") && (l.type === 4 ? l.isStatic ? l.content = Mt(l.content) : l.content = `${n.helperString(Ar)}(${l.content})` : (l.children.unshift(`${n.helperString(Ar)}(`), l.children.push(")"))), n.inSSR || (o.some((a) => a.content === "prop") && xi(l, "."), o.some((a) => a.content === "attr") && xi(l, "^")), {
    props: [Se(l, r)]
  };
}, Ys = (e, t) => {
  const n = e.arg, o = Mt(n.content);
  e.exp = Y(o, !1, n.loc);
}, xi = (e, t) => {
  e.type === 4 ? e.isStatic ? e.content = t + e.content : e.content = `\`${t}\${${e.content}}\`` : (e.children.unshift(`'${t}' + (`), e.children.push(")"));
}, bc = zo(
  "for",
  (e, t, n) => {
    const { helper: o, removeHelper: i } = n;
    return ks(e, t, n, (l) => {
      const r = Ie(o(zr), [
        l.source
      ]), a = hn(e), s = je(e, "memo"), c = pn(e, "key", !1, !0);
      c && c.type === 7 && !c.exp && Ys(c);
      let f = c && (c.type === 6 ? c.value ? Y(c.value.content, !0) : void 0 : c.exp);
      const d = c && f ? Se("key", f) : null, p = l.source.type === 4 && l.source.constType > 0, h = p ? 64 : c ? 128 : 256;
      return l.codegenNode = dn(
        n,
        o(fn),
        void 0,
        r,
        h,
        void 0,
        void 0,
        !0,
        !p,
        !1,
        e.loc
      ), () => {
        let v;
        const { children: m } = l;
        process.env.NODE_ENV !== "production" && a && e.children.some((N) => {
          if (N.type === 1) {
            const T = pn(N, "key");
            if (T)
              return n.onError(
                oe(
                  33,
                  T.loc
                )
              ), !0;
          }
        });
        const g = m.length !== 1 || m[0].type !== 1, E = Kn(e) ? e : a && e.children.length === 1 && Kn(e.children[0]) ? e.children[0] : null;
        if (E ? (v = E.codegenNode, a && d && Wn(v, d, n)) : g ? v = dn(
          n,
          o(fn),
          d ? tt([d]) : void 0,
          e.children,
          64,
          void 0,
          void 0,
          !0,
          void 0,
          !1
        ) : (v = m[0].codegenNode, a && d && Wn(v, d, n), v.isBlock !== !p && (v.isBlock ? (i(Vt), i(
          zt(n.inSSR, v.isComponent)
        )) : i(
          Jt(n.inSSR, v.isComponent)
        )), v.isBlock = !p, v.isBlock ? (o(Vt), o(zt(n.inSSR, v.isComponent))) : o(Jt(n.inSSR, v.isComponent))), s) {
          const N = kt(
            Rr(l.parseResult, [
              Y("_cached")
            ])
          );
          N.body = hs([
            ot(["const _memo = (", s.exp, ")"]),
            ot([
              "if (_cached",
              ...f ? [" && _cached.key === ", f] : [],
              ` && ${n.helperString(
                Go
              )}(_cached, _memo)) return _cached`
            ]),
            ot(["const _item = ", v]),
            Y("_item.memo = _memo"),
            Y("return _item")
          ]), r.arguments.push(
            N,
            Y("_cache"),
            Y(String(n.cached.length))
          ), n.cached.push(null);
        } else
          r.arguments.push(
            kt(
              Rr(l.parseResult),
              v,
              !0
            )
          );
      };
    });
  }
);
function ks(e, t, n, o) {
  if (!t.exp) {
    n.onError(
      oe(31, t.loc)
    );
    return;
  }
  const i = t.forParseResult;
  if (!i) {
    n.onError(
      oe(32, t.loc)
    );
    return;
  }
  Zo(i, n);
  const { addIdentifiers: l, removeIdentifiers: r, scopes: a } = n, { source: s, value: c, key: u, index: f } = i, d = {
    type: 11,
    loc: t.loc,
    source: s,
    valueAlias: c,
    keyAlias: u,
    objectIndexAlias: f,
    parseResult: i,
    children: hn(e) ? e.children : [e]
  };
  n.replaceNode(d), a.vFor++;
  const p = o && o(d);
  return () => {
    a.vFor--, p && p();
  };
}
function Zo(e, t) {
  e.finalized || (process.env.NODE_ENV !== "production" && (Wt(e.source, t), e.key && Wt(
    e.key,
    t,
    !0
  ), e.index && Wt(
    e.index,
    t,
    !0
  ), e.value && Wt(
    e.value,
    t,
    !0
  )), e.finalized = !0);
}
function Rr({ value: e, key: t, index: n }, o = []) {
  return Tc([e, t, n, ...o]);
}
function Tc(e) {
  let t = e.length;
  for (; t-- && !e[t]; )
    ;
  return e.slice(0, t + 1).map((n, o) => n || Y("_".repeat(o + 1), !1));
}
const Pi = Y("undefined", !1), Js = (e, t) => {
  if (e.type === 1 && (e.tagType === 1 || e.tagType === 3)) {
    const n = je(e, "slot");
    if (n)
      return n.exp, t.scopes.vSlot++, () => {
        t.scopes.vSlot--;
      };
  }
}, Oc = (e, t) => {
  let n;
  if (hn(e) && e.props.some(Yo) && (n = je(e, "for"))) {
    const o = n.forParseResult;
    if (o) {
      Zo(o, t);
      const { value: i, key: l, index: r } = o, { addIdentifiers: a, removeIdentifiers: s } = t;
      return i && a(i), l && a(l), r && a(r), () => {
        i && s(i), l && s(l), r && s(r);
      };
    }
  }
}, Nc = (e, t, n, o) => kt(
  e,
  n,
  !1,
  !0,
  n.length ? n[0].loc : o
);
function zs(e, t, n = Nc) {
  t.helper(eo);
  const { children: o, loc: i } = e, l = [], r = [];
  let a = t.scopes.vSlot > 0 || t.scopes.vFor > 0;
  const s = je(e, "slot", !0);
  if (s) {
    const { arg: m, exp: g } = s;
    m && !Ge(m) && (a = !0), l.push(
      Se(
        m || Y("default", !0),
        n(g, void 0, o, i)
      )
    );
  }
  let c = !1, u = !1;
  const f = [], d = /* @__PURE__ */ new Set();
  let p = 0;
  for (let m = 0; m < o.length; m++) {
    const g = o[m];
    let E;
    if (!hn(g) || !(E = je(g, "slot", !0))) {
      g.type !== 3 && f.push(g);
      continue;
    }
    if (s) {
      t.onError(
        oe(37, E.loc)
      );
      break;
    }
    c = !0;
    const { children: N, loc: T } = g, {
      arg: I = Y("default", !0),
      exp: C,
      loc: F
    } = E;
    let P;
    Ge(I) ? P = I ? I.content : "default" : a = !0;
    const y = je(g, "for"), D = n(C, y, N, T);
    let R, L;
    if (R = je(g, "if"))
      a = !0, r.push(
        xr(
          R.exp,
          ir(I, D, p++),
          Pi
        )
      );
    else if (L = je(
      g,
      /^else(-if)?$/,
      !0
      /* allowEmpty */
    )) {
      let A = m, x;
      for (; A-- && (x = o[A], x.type === 3); )
        ;
      if (x && hn(x) && je(x, /^(else-)?if$/)) {
        let j = r[r.length - 1];
        for (; j.alternate.type === 19; )
          j = j.alternate;
        j.alternate = L.exp ? xr(
          L.exp,
          ir(
            I,
            D,
            p++
          ),
          Pi
        ) : ir(I, D, p++);
      } else
        t.onError(
          oe(30, L.loc)
        );
    } else if (y) {
      a = !0;
      const A = y.forParseResult;
      A ? (Zo(A, t), r.push(
        Ie(t.helper(zr), [
          A.source,
          kt(
            Rr(A),
            ir(I, D),
            !0
          )
        ])
      )) : t.onError(
        oe(
          32,
          y.loc
        )
      );
    } else {
      if (P) {
        if (d.has(P)) {
          t.onError(
            oe(
              38,
              F
            )
          );
          continue;
        }
        d.add(P), P === "default" && (u = !0);
      }
      l.push(Se(I, D));
    }
  }
  if (!s) {
    const m = (g, E) => {
      const N = n(g, void 0, E, i);
      return t.compatConfig && (N.isNonScopedSlot = !0), Se("default", N);
    };
    c ? f.length && // #3766
    // with whitespace: 'preserve', whitespaces between slots will end up in
    // implicitDefaultChildren. Ignore if all implicit children are whitespaces.
    f.some((g) => Qs(g)) && (u ? t.onError(
      oe(
        39,
        f[0].loc
      )
    ) : l.push(
      m(void 0, f)
    )) : l.push(m(void 0, o));
  }
  const h = a ? 2 : br(e.children) ? 3 : 1;
  let v = tt(
    l.concat(
      Se(
        "_",
        // 2 = compiled but dynamic = can skip normalization, but must run diff
        // 1 = compiled and static = can skip normalization AND diff as optimized
        Y(
          h + (process.env.NODE_ENV !== "production" ? ` /* ${Fa[h]} */` : ""),
          !1
        )
      )
    ),
    i
  );
  return r.length && (v = Ie(t.helper(Ho), [
    v,
    Lt(r)
  ])), {
    slots: v,
    hasDynamicSlots: a
  };
}
function ir(e, t, n) {
  const o = [
    Se("name", e),
    Se("fn", t)
  ];
  return n != null && o.push(
    Se("key", Y(String(n), !0))
  ), tt(o);
}
function br(e) {
  for (let t = 0; t < e.length; t++) {
    const n = e[t];
    switch (n.type) {
      case 1:
        if (n.tagType === 2 || br(n.children))
          return !0;
        break;
      case 9:
        if (br(n.branches)) return !0;
        break;
      case 10:
      case 11:
        if (br(n.children)) return !0;
        break;
    }
  }
  return !1;
}
function Qs(e) {
  return e.type !== 2 && e.type !== 12 ? !0 : e.type === 2 ? !!e.content.trim() : Qs(e.content);
}
const Zs = /* @__PURE__ */ new WeakMap(), qs = (e, t) => function() {
  if (e = t.currentNode, !(e.type === 1 && (e.tagType === 0 || e.tagType === 1)))
    return;
  const { tag: o, props: i } = e, l = e.tagType === 1;
  let r = l ? ea(e, t) : `"${o}"`;
  const a = os(r) && r.callee === _r;
  let s, c, u = 0, f, d, p, h = (
    // dynamic component may resolve to plain elements
    a || r === cn || r === Xr || !l && // <svg> and <foreignObject> must be forced into blocks so that block
    // updates inside get proper isSVG flag at runtime. (#639, #643)
    // This is technically web-specific, but splitting the logic out of core
    // leads to too much unnecessary complexity.
    (o === "svg" || o === "foreignObject" || o === "math")
  );
  if (i.length > 0) {
    const v = qo(
      e,
      t,
      void 0,
      l,
      a
    );
    s = v.props, u = v.patchFlag, d = v.dynamicPropNames;
    const m = v.directives;
    p = m && m.length ? Lt(
      m.map((g) => ta(g, t))
    ) : void 0, v.shouldUseBlock && (h = !0);
  }
  if (e.children.length > 0)
    if (r === Bn && (h = !0, u |= 1024, process.env.NODE_ENV !== "production" && e.children.length > 1 && t.onError(
      oe(46, {
        start: e.children[0].loc.start,
        end: e.children[e.children.length - 1].loc.end,
        source: ""
      })
    )), l && // Teleport is not a real component and has dedicated runtime handling
    r !== cn && // explained above.
    r !== Bn) {
      const { slots: m, hasDynamicSlots: g } = zs(e, t);
      c = m, g && (u |= 1024);
    } else if (e.children.length === 1 && r !== cn) {
      const m = e.children[0], g = m.type, E = g === 5 || g === 8;
      E && ze(m, t) === 0 && (u |= 1), E || g === 2 ? c = m : c = e.children;
    } else
      c = e.children;
  d && d.length && (f = Cc(d)), e.codegenNode = dn(
    t,
    r,
    s,
    c,
    u === 0 ? void 0 : u,
    f,
    p,
    !!h,
    !1,
    l,
    e.loc
  );
};
function ea(e, t, n = !1) {
  let { tag: o } = e;
  const i = Po(o), l = pn(
    e,
    "is",
    !1,
    !0
    /* allow empty */
  );
  if (l)
    if (i || wt(
      "COMPILER_IS_ON_ELEMENT",
      t
    )) {
      let a;
      if (l.type === 6 ? a = l.value && Y(l.value.content, !0) : (a = l.exp, a || (a = Y("is", !1, l.arg.loc))), a)
        return Ie(t.helper(_r), [
          a
        ]);
    } else l.type === 6 && l.value.content.startsWith("vue:") && (o = l.value.content.slice(4));
  const r = Wo(o) || t.isBuiltInComponent(o);
  return r ? (n || t.helper(r), r) : (t.helper(Wr), t.components.add(o), vn(o, "component"));
}
function qo(e, t, n = e.props, o, i, l = !1) {
  const { tag: r, loc: a, children: s } = e;
  let c = [];
  const u = [], f = [], d = s.length > 0;
  let p = !1, h = 0, v = !1, m = !1, g = !1, E = !1, N = !1, T = !1;
  const I = [], C = (D) => {
    c.length && (u.push(
      tt(Ri(c), a)
    ), c = []), D && u.push(D);
  }, F = () => {
    t.scopes.vFor > 0 && c.push(
      Se(
        Y("ref_for", !0),
        Y("true")
      )
    );
  }, P = ({ key: D, value: R }) => {
    if (Ge(D)) {
      const L = D.content, A = Io(L);
      if (A && (!o || i) && // omit the flag for click handlers because hydration gives click
      // dedicated fast path.
      L.toLowerCase() !== "onclick" && // omit v-model handlers
      L !== "onUpdate:modelValue" && // omit onVnodeXXX hooks
      !gi(L) && (E = !0), A && gi(L) && (T = !0), A && R.type === 14 && (R = R.arguments[0]), R.type === 20 || (R.type === 4 || R.type === 8) && ze(R, t) > 0)
        return;
      L === "ref" ? v = !0 : L === "class" ? m = !0 : L === "style" ? g = !0 : L !== "key" && !I.includes(L) && I.push(L), o && (L === "class" || L === "style") && !I.includes(L) && I.push(L);
    } else
      N = !0;
  };
  for (let D = 0; D < n.length; D++) {
    const R = n[D];
    if (R.type === 6) {
      const { loc: L, name: A, nameLoc: x, value: j } = R;
      let V = !0;
      if (A === "ref" && (v = !0, F()), A === "is" && (Po(r) || j && j.content.startsWith("vue:") || wt(
        "COMPILER_IS_ON_ELEMENT",
        t
      )))
        continue;
      c.push(
        Se(
          Y(A, !0, x),
          Y(
            j ? j.content : "",
            V,
            j ? j.loc : L
          )
        )
      );
    } else {
      const { name: L, arg: A, exp: x, loc: j, modifiers: V } = R, B = L === "bind", Q = L === "on";
      if (L === "slot") {
        o || t.onError(
          oe(40, j)
        );
        continue;
      }
      if (L === "once" || L === "memo" || L === "is" || B && yt(A, "is") && (Po(r) || wt(
        "COMPILER_IS_ON_ELEMENT",
        t
      )) || Q && l)
        continue;
      if (
        // #938: elements with dynamic keys should be forced into blocks
        (B && yt(A, "key") || // inline before-update hooks need to force block so that it is invoked
        // before children
        Q && d && yt(A, "vue:before-update")) && (p = !0), B && yt(A, "ref") && F(), !A && (B || Q)
      ) {
        if (N = !0, x)
          if (B) {
            if (F(), C(), process.env.NODE_ENV !== "production" && u.some((ie) => ie.type === 15 ? ie.properties.some(({ key: se }) => se.type !== 4 || !se.isStatic ? !0 : se.content !== "class" && se.content !== "style" && !Io(se.content)) : !0) && Qt(
              "COMPILER_V_BIND_OBJECT_ORDER",
              t,
              j
            ), wt(
              "COMPILER_V_BIND_OBJECT_ORDER",
              t
            )) {
              u.unshift(x);
              continue;
            }
            u.push(x);
          } else
            C({
              type: 14,
              loc: j,
              callee: t.helper(qr),
              arguments: o ? [x] : [x, "true"]
            });
        else
          t.onError(
            oe(
              B ? 34 : 35,
              j
            )
          );
        continue;
      }
      B && V.some((fe) => fe.content === "prop") && (h |= 32);
      const ae = t.directiveTransforms[L];
      if (ae) {
        const { props: fe, needRuntime: ie } = ae(R, e, t);
        !l && fe.forEach(P), Q && A && !Ge(A) ? C(tt(fe, a)) : c.push(...fe), ie && (f.push(R), Fo(ie) && Zs.set(R, ie));
      } else ja(L) || (f.push(R), d && (p = !0));
    }
  }
  let y;
  if (u.length ? (C(), u.length > 1 ? y = Ie(
    t.helper(Xn),
    u,
    a
  ) : y = u[0]) : c.length && (y = tt(
    Ri(c),
    a
  )), N ? h |= 16 : (m && !o && (h |= 2), g && !o && (h |= 4), I.length && (h |= 8), E && (h |= 32)), !p && (h === 0 || h === 32) && (v || T || f.length > 0) && (h |= 512), !t.inSSR && y)
    switch (y.type) {
      case 15:
        let D = -1, R = -1, L = !1;
        for (let j = 0; j < y.properties.length; j++) {
          const V = y.properties[j].key;
          Ge(V) ? V.content === "class" ? D = j : V.content === "style" && (R = j) : V.isHandlerKey || (L = !0);
        }
        const A = y.properties[D], x = y.properties[R];
        L ? y = Ie(
          t.helper(un),
          [y]
        ) : (A && !Ge(A.value) && (A.value = Ie(
          t.helper(Qr),
          [A.value]
        )), x && // the static style is compiled into an object,
        // so use `hasStyleBinding` to ensure that it is a dynamic style binding
        (g || x.value.type === 4 && x.value.content.trim()[0] === "[" || // v-bind:style and style both exist,
        // v-bind:style with static literal object
        x.value.type === 17) && (x.value = Ie(
          t.helper(Zr),
          [x.value]
        )));
        break;
      case 14:
        break;
      default:
        y = Ie(
          t.helper(un),
          [
            Ie(t.helper(En), [
              y
            ])
          ]
        );
        break;
    }
  return {
    props: y,
    directives: f,
    patchFlag: h,
    dynamicPropNames: I,
    shouldUseBlock: p
  };
}
function Ri(e) {
  const t = /* @__PURE__ */ new Map(), n = [];
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    if (i.key.type === 8 || !i.key.isStatic) {
      n.push(i);
      continue;
    }
    const l = i.key.content, r = t.get(l);
    r ? (l === "style" || l === "class" || Io(l)) && Ic(r, i) : (t.set(l, i), n.push(i));
  }
  return n;
}
function Ic(e, t) {
  e.value.type === 17 ? e.value.elements.push(t.value) : e.value = Lt(
    [e.value, t.value],
    e.loc
  );
}
function ta(e, t) {
  const n = [], o = Zs.get(e);
  o ? n.push(t.helperString(o)) : (t.helper(Yr), t.directives.add(e.name), n.push(vn(e.name, "directive")));
  const { loc: i } = e;
  if (e.exp && n.push(e.exp), e.arg && (e.exp || n.push("void 0"), n.push(e.arg)), Object.keys(e.modifiers).length) {
    e.arg || (e.exp || n.push("void 0"), n.push("void 0"));
    const l = Y("true", !1, i);
    n.push(
      tt(
        e.modifiers.map(
          (r) => Se(r, l)
        ),
        i
      )
    );
  }
  return Lt(n, e.loc);
}
function Cc(e) {
  let t = "[";
  for (let n = 0, o = e.length; n < o; n++)
    t += JSON.stringify(e[n]), n < o - 1 && (t += ", ");
  return t + "]";
}
function Po(e) {
  return e === "component" || e === "Component";
}
const Ac = (e, t) => {
  if (Kn(e)) {
    const { children: n, loc: o } = e, { slotName: i, slotProps: l } = na(e, t), r = [
      t.prefixIdentifiers ? "_ctx.$slots" : "$slots",
      i,
      "{}",
      "undefined",
      "true"
    ];
    let a = 2;
    l && (r[2] = l, a = 3), n.length && (r[3] = kt([], n, !1, !1, o), a = 4), t.scopeId && !t.slotted && (a = 5), r.splice(a), e.codegenNode = Ie(
      t.helper(Xo),
      r,
      o
    );
  }
};
function na(e, t) {
  let n = '"default"', o;
  const i = [];
  for (let l = 0; l < e.props.length; l++) {
    const r = e.props[l];
    if (r.type === 6)
      r.value && (r.name === "name" ? n = JSON.stringify(r.value.content) : (r.name = Mt(r.name), i.push(r)));
    else if (r.name === "bind" && yt(r.arg, "name")) {
      if (r.exp)
        n = r.exp;
      else if (r.arg && r.arg.type === 4) {
        const a = Mt(r.arg.content);
        n = r.exp = Y(a, !1, r.arg.loc);
      }
    } else
      r.name === "bind" && r.arg && Ge(r.arg) && (r.arg.content = Mt(r.arg.content)), i.push(r);
  }
  if (i.length > 0) {
    const { props: l, directives: r } = qo(
      e,
      t,
      i,
      !1,
      !1
    );
    o = l, r.length && t.onError(
      oe(
        36,
        r[0].loc
      )
    );
  }
  return {
    slotName: n,
    slotProps: o
  };
}
const ei = (e, t, n, o) => {
  const { loc: i, modifiers: l, arg: r } = e;
  !e.exp && !l.length && n.onError(oe(35, i));
  let a;
  if (r.type === 4)
    if (r.isStatic) {
      let f = r.content;
      process.env.NODE_ENV !== "production" && f.startsWith("vnode") && n.onError(oe(51, r.loc)), f.startsWith("vue:") && (f = `vnode-${f.slice(4)}`);
      const d = t.tagType !== 0 || f.startsWith("vnode") || !/[A-Z]/.test(f) ? (
        // for non-element and vnode lifecycle event listeners, auto convert
        // it to camelCase. See issue #2249
        Ua(Mt(f))
      ) : (
        // preserve case for plain element listeners that have uppercase
        // letters, as these may be custom elements' custom events
        `on:${f}`
      );
      a = Y(d, !0, r.loc);
    } else
      a = ot([
        `${n.helperString(Dr)}(`,
        r,
        ")"
      ]);
  else
    a = r, a.children.unshift(`${n.helperString(Dr)}(`), a.children.push(")");
  let s = e.exp;
  s && !s.content.trim() && (s = void 0);
  let c = n.cacheHandlers && !s && !n.inVOnce;
  if (s) {
    const f = _o(s), d = !(f || Os(s)), p = s.content.includes(";");
    process.env.NODE_ENV !== "production" && Wt(
      s,
      n,
      !1,
      p
    ), (d || c && f) && (s = ot([
      `${d ? "$event" : "(...args)"} => ${p ? "{" : "("}`,
      s,
      p ? "}" : ")"
    ]));
  }
  let u = {
    props: [
      Se(
        a,
        s || Y("() => {}", !1, i)
      )
    ]
  };
  return o && (u = o(u)), c && (u.props[0].value = n.cache(u.props[0].value)), u.props.forEach((f) => f.key.isHandlerKey = !0), u;
}, Dc = (e, t) => {
  if (e.type === 0 || e.type === 1 || e.type === 11 || e.type === 10)
    return () => {
      const n = e.children;
      let o, i = !1;
      for (let l = 0; l < n.length; l++) {
        const r = n[l];
        if (mr(r)) {
          i = !0;
          for (let a = l + 1; a < n.length; a++) {
            const s = n[a];
            if (mr(s))
              o || (o = n[l] = ot(
                [r],
                r.loc
              )), o.children.push(" + ", s), n.splice(a, 1), a--;
            else {
              o = void 0;
              break;
            }
          }
        }
      }
      if (!(!i || // if this is a plain element with a single text child, leave it
      // as-is since the runtime has dedicated fast path for this by directly
      // setting textContent of the element.
      // for component root it's always normalized anyway.
      n.length === 1 && (e.type === 0 || e.type === 1 && e.tagType === 0 && // #3756
      // custom directives can potentially add DOM elements arbitrarily,
      // we need to avoid setting textContent of the element at runtime
      // to avoid accidentally overwriting the DOM elements added
      // by the user through custom directives.
      !e.props.find(
        (l) => l.type === 7 && !t.directiveTransforms[l.name]
      ) && e.tag !== "template")))
        for (let l = 0; l < n.length; l++) {
          const r = n[l];
          if (mr(r) || r.type === 8) {
            const a = [];
            (r.type !== 2 || r.content !== " ") && a.push(r), !t.ssr && ze(r, t) === 0 && a.push(
              1 + (process.env.NODE_ENV !== "production" ? ` /* ${hr[1]} */` : "")
            ), n[l] = {
              type: 12,
              content: r,
              loc: r.loc,
              codegenNode: Ie(
                t.helper(Kr),
                a
              )
            };
          }
        }
    };
}, Mi = /* @__PURE__ */ new WeakSet(), xc = (e, t) => {
  if (e.type === 1 && je(e, "once", !0))
    return Mi.has(e) || t.inVOnce || t.inSSR ? void 0 : (Mi.add(e), t.inVOnce = !0, t.helper(Hn), () => {
      t.inVOnce = !1;
      const n = t.currentNode;
      n.codegenNode && (n.codegenNode = t.cache(
        n.codegenNode,
        !0,
        !0
      ));
    });
}, ti = (e, t, n) => {
  const { exp: o, arg: i } = e;
  if (!o)
    return n.onError(
      oe(41, e.loc)
    ), sr();
  const l = o.loc.source.trim(), r = o.type === 4 ? o.content : l, a = n.bindingMetadata[l];
  if (a === "props" || a === "props-aliased")
    return n.onError(oe(44, o.loc)), sr();
  if (!r.trim() || !_o(o) && !!1)
    return n.onError(
      oe(42, o.loc)
    ), sr();
  const c = i || Y("modelValue", !0), u = i ? Ge(i) ? `onUpdate:${Mt(i.content)}` : ot(['"onUpdate:" + ', i]) : "onUpdate:modelValue";
  let f;
  const d = n.isTS ? "($event: any)" : "$event";
  f = ot([
    `${d} => ((`,
    o,
    ") = $event)"
  ]);
  const p = [
    // modelValue: foo
    Se(c, e.exp),
    // "onUpdate:modelValue": $event => (foo = $event)
    Se(u, f)
  ];
  if (e.modifiers.length && t.tagType === 1) {
    const h = e.modifiers.map((m) => m.content).map((m) => (kn(m) ? m : JSON.stringify(m)) + ": true").join(", "), v = i ? Ge(i) ? `${i.content}Modifiers` : ot([i, ' + "Modifiers"']) : "modelModifiers";
    p.push(
      Se(
        v,
        Y(
          `{ ${h} }`,
          !1,
          e.loc,
          2
        )
      )
    );
  }
  return sr(p);
};
function sr(e = []) {
  return { props: e };
}
const Pc = /[\w).+\-_$\]]/, Rc = (e, t) => {
  wt("COMPILER_FILTERS", t) && (e.type === 5 ? Mr(e.content, t) : e.type === 1 && e.props.forEach((n) => {
    n.type === 7 && n.name !== "for" && n.exp && Mr(n.exp, t);
  }));
};
function Mr(e, t) {
  if (e.type === 4)
    Li(e, t);
  else
    for (let n = 0; n < e.children.length; n++) {
      const o = e.children[n];
      typeof o == "object" && (o.type === 4 ? Li(o, t) : o.type === 8 ? Mr(e, t) : o.type === 5 && Mr(o.content, t));
    }
}
function Li(e, t) {
  const n = e.content;
  let o = !1, i = !1, l = !1, r = !1, a = 0, s = 0, c = 0, u = 0, f, d, p, h, v = [];
  for (p = 0; p < n.length; p++)
    if (d = f, f = n.charCodeAt(p), o)
      f === 39 && d !== 92 && (o = !1);
    else if (i)
      f === 34 && d !== 92 && (i = !1);
    else if (l)
      f === 96 && d !== 92 && (l = !1);
    else if (r)
      f === 47 && d !== 92 && (r = !1);
    else if (f === 124 && // pipe
    n.charCodeAt(p + 1) !== 124 && n.charCodeAt(p - 1) !== 124 && !a && !s && !c)
      h === void 0 ? (u = p + 1, h = n.slice(0, p).trim()) : m();
    else {
      switch (f) {
        case 34:
          i = !0;
          break;
        // "
        case 39:
          o = !0;
          break;
        // '
        case 96:
          l = !0;
          break;
        // `
        case 40:
          c++;
          break;
        // (
        case 41:
          c--;
          break;
        // )
        case 91:
          s++;
          break;
        // [
        case 93:
          s--;
          break;
        // ]
        case 123:
          a++;
          break;
        // {
        case 125:
          a--;
          break;
      }
      if (f === 47) {
        let g = p - 1, E;
        for (; g >= 0 && (E = n.charAt(g), E === " "); g--)
          ;
        (!E || !Pc.test(E)) && (r = !0);
      }
    }
  h === void 0 ? h = n.slice(0, p).trim() : u !== 0 && m();
  function m() {
    v.push(n.slice(u, p).trim()), u = p + 1;
  }
  if (v.length) {
    for (process.env.NODE_ENV !== "production" && Gn(
      "COMPILER_FILTERS",
      t,
      e.loc
    ), p = 0; p < v.length; p++)
      h = Mc(h, v[p], t);
    e.content = h, e.ast = void 0;
  }
}
function Mc(e, t, n) {
  n.helper(kr);
  const o = t.indexOf("(");
  if (o < 0)
    return n.filters.add(t), `${vn(t, "filter")}(${e})`;
  {
    const i = t.slice(0, o), l = t.slice(o + 1);
    return n.filters.add(i), `${vn(i, "filter")}(${e}${l !== ")" ? "," + l : l}`;
  }
}
const wi = /* @__PURE__ */ new WeakSet(), Lc = (e, t) => {
  if (e.type === 1) {
    const n = je(e, "memo");
    return !n || wi.has(e) ? void 0 : (wi.add(e), () => {
      const o = e.codegenNode || t.currentNode.codegenNode;
      o && o.type === 13 && (e.tagType !== 1 && no(o, t), e.codegenNode = Ie(t.helper(to), [
        n.exp,
        kt(void 0, o),
        "_cache",
        String(t.cached.length)
      ]), t.cached.push(null));
    });
  }
};
function ra(e) {
  return [
    [
      xc,
      Ec,
      Lc,
      bc,
      Rc,
      ...process.env.NODE_ENV !== "production" ? [Gs] : [],
      Ac,
      qs,
      Js,
      Dc
    ],
    {
      on: ei,
      bind: _s,
      model: ti
    }
  ];
}
function oa(e, t = {}) {
  const n = t.onError || Ko, o = t.mode === "module";
  t.prefixIdentifiers === !0 ? n(oe(47)) : o && n(oe(48));
  const i = !1;
  t.cacheHandlers && n(oe(49)), t.scopeId && !o && n(oe(50));
  const l = St({}, t, {
    prefixIdentifiers: i
  }), r = Ce(e) ? Jo(e, l) : e, [a, s] = ra();
  return Us(
    r,
    St({}, l, {
      nodeTransforms: [
        ...a,
        ...t.nodeTransforms || []
        // user transforms
      ],
      directiveTransforms: St(
        {},
        s,
        t.directiveTransforms || {}
        // user transforms
      )
    })
  ), Bs(r, l);
}
const wc = {
  DATA: "data",
  PROPS: "props",
  PROPS_ALIASED: "props-aliased",
  SETUP_LET: "setup-let",
  SETUP_CONST: "setup-const",
  SETUP_REACTIVE_CONST: "setup-reactive-const",
  SETUP_MAYBE_REF: "setup-maybe-ref",
  SETUP_REF: "setup-ref",
  OPTIONS: "options",
  LITERAL_CONST: "literal-const"
}, ia = () => ({ props: [] });
/**
* @vue/compiler-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const ni = Symbol(process.env.NODE_ENV !== "production" ? "vModelRadio" : ""), ri = Symbol(
  process.env.NODE_ENV !== "production" ? "vModelCheckbox" : ""
), oi = Symbol(process.env.NODE_ENV !== "production" ? "vModelText" : ""), ii = Symbol(
  process.env.NODE_ENV !== "production" ? "vModelSelect" : ""
), Lr = Symbol(
  process.env.NODE_ENV !== "production" ? "vModelDynamic" : ""
), si = Symbol(
  process.env.NODE_ENV !== "production" ? "vOnModifiersGuard" : ""
), ai = Symbol(
  process.env.NODE_ENV !== "production" ? "vOnKeysGuard" : ""
), li = Symbol(process.env.NODE_ENV !== "production" ? "vShow" : ""), oo = Symbol(process.env.NODE_ENV !== "production" ? "Transition" : ""), ci = Symbol(
  process.env.NODE_ENV !== "production" ? "TransitionGroup" : ""
);
us({
  [ni]: "vModelRadio",
  [ri]: "vModelCheckbox",
  [oi]: "vModelText",
  [ii]: "vModelSelect",
  [Lr]: "vModelDynamic",
  [si]: "withModifiers",
  [ai]: "withKeys",
  [li]: "vShow",
  [oo]: "Transition",
  [ci]: "TransitionGroup"
});
let en;
function Vc(e, t = !1) {
  return en || (en = document.createElement("div")), t ? (en.innerHTML = `<div foo="${e.replace(/"/g, "&quot;")}">`, en.children[0].getAttribute("foo")) : (en.innerHTML = e, en.textContent);
}
const fi = {
  parseMode: "html",
  isVoidTag: $a,
  isNativeTag: (e) => Ba(e) || Xa(e) || Ha(e),
  isPreTag: (e) => e === "pre",
  isIgnoreNewlineTag: (e) => e === "pre" || e === "textarea",
  decodeEntities: Vc,
  isBuiltInComponent: (e) => {
    if (e === "Transition" || e === "transition")
      return oo;
    if (e === "TransitionGroup" || e === "transition-group")
      return ci;
  },
  // https://html.spec.whatwg.org/multipage/parsing.html#tree-construction-dispatcher
  getNamespace(e, t, n) {
    let o = t ? t.ns : n;
    if (t && o === 2)
      if (t.tag === "annotation-xml") {
        if (e === "svg")
          return 1;
        t.props.some(
          (i) => i.type === 6 && i.name === "encoding" && i.value != null && (i.value.content === "text/html" || i.value.content === "application/xhtml+xml")
        ) && (o = 0);
      } else /^m(?:[ions]|text)$/.test(t.tag) && e !== "mglyph" && e !== "malignmark" && (o = 0);
    else t && o === 1 && (t.tag === "foreignObject" || t.tag === "desc" || t.tag === "title") && (o = 0);
    if (o === 0) {
      if (e === "svg")
        return 1;
      if (e === "math")
        return 2;
    }
    return o;
  }
}, sa = (e) => {
  e.type === 1 && e.props.forEach((t, n) => {
    t.type === 6 && t.name === "style" && t.value && (e.props[n] = {
      type: 7,
      name: "bind",
      arg: Y("style", !0, t.loc),
      exp: Fc(t.value.content, t.loc),
      modifiers: [],
      loc: t.loc
    });
  });
}, Fc = (e, t) => {
  const n = Ga(e);
  return Y(
    JSON.stringify(n),
    !1,
    t,
    3
  );
};
function rt(e, t) {
  return oe(
    e,
    t,
    process.env.NODE_ENV !== "production" ? aa : void 0
  );
}
const jc = {
  X_V_HTML_NO_EXPRESSION: 53,
  53: "X_V_HTML_NO_EXPRESSION",
  X_V_HTML_WITH_CHILDREN: 54,
  54: "X_V_HTML_WITH_CHILDREN",
  X_V_TEXT_NO_EXPRESSION: 55,
  55: "X_V_TEXT_NO_EXPRESSION",
  X_V_TEXT_WITH_CHILDREN: 56,
  56: "X_V_TEXT_WITH_CHILDREN",
  X_V_MODEL_ON_INVALID_ELEMENT: 57,
  57: "X_V_MODEL_ON_INVALID_ELEMENT",
  X_V_MODEL_ARG_ON_ELEMENT: 58,
  58: "X_V_MODEL_ARG_ON_ELEMENT",
  X_V_MODEL_ON_FILE_INPUT_ELEMENT: 59,
  59: "X_V_MODEL_ON_FILE_INPUT_ELEMENT",
  X_V_MODEL_UNNECESSARY_VALUE: 60,
  60: "X_V_MODEL_UNNECESSARY_VALUE",
  X_V_SHOW_NO_EXPRESSION: 61,
  61: "X_V_SHOW_NO_EXPRESSION",
  X_TRANSITION_INVALID_CHILDREN: 62,
  62: "X_TRANSITION_INVALID_CHILDREN",
  X_IGNORED_SIDE_EFFECT_TAG: 63,
  63: "X_IGNORED_SIDE_EFFECT_TAG",
  __EXTEND_POINT__: 64,
  64: "__EXTEND_POINT__"
}, aa = {
  53: "v-html is missing expression.",
  54: "v-html will override element children.",
  55: "v-text is missing expression.",
  56: "v-text will override element children.",
  57: "v-model can only be used on <input>, <textarea> and <select> elements.",
  58: "v-model argument is not supported on plain elements.",
  59: "v-model cannot be used on file inputs since they are read-only. Use a v-on:change listener instead.",
  60: "Unnecessary value binding used alongside v-model. It will interfere with v-model's behavior.",
  61: "v-show is missing expression.",
  62: "<Transition> expects exactly one child element or component.",
  63: "Tags with side effect (<script> and <style>) are ignored in client component templates."
}, Uc = (e, t, n) => {
  const { exp: o, loc: i } = e;
  return o || n.onError(
    rt(53, i)
  ), t.children.length && (n.onError(
    rt(54, i)
  ), t.children.length = 0), {
    props: [
      Se(
        Y("innerHTML", !0, i),
        o || Y("", !0)
      )
    ]
  };
}, $c = (e, t, n) => {
  const { exp: o, loc: i } = e;
  return o || n.onError(
    rt(55, i)
  ), t.children.length && (n.onError(
    rt(56, i)
  ), t.children.length = 0), {
    props: [
      Se(
        Y("textContent", !0),
        o ? ze(o, n) > 0 ? o : Ie(
          n.helperString(Yn),
          [o],
          i
        ) : Y("", !0)
      )
    ]
  };
}, Bc = (e, t, n) => {
  const o = ti(e, t, n);
  if (!o.props.length || t.tagType === 1)
    return o;
  e.arg && n.onError(
    rt(
      58,
      e.arg.loc
    )
  );
  function i() {
    const a = je(t, "bind");
    a && yt(a.arg, "value") && n.onError(
      rt(
        60,
        a.loc
      )
    );
  }
  const { tag: l } = t, r = n.isCustomElement(l);
  if (l === "input" || l === "textarea" || l === "select" || r) {
    let a = oi, s = !1;
    if (l === "input" || r) {
      const c = pn(t, "type");
      if (c) {
        if (c.type === 7)
          a = Lr;
        else if (c.value)
          switch (c.value.content) {
            case "radio":
              a = ni;
              break;
            case "checkbox":
              a = ri;
              break;
            case "file":
              s = !0, n.onError(
                rt(
                  59,
                  e.loc
                )
              );
              break;
            default:
              process.env.NODE_ENV !== "production" && i();
              break;
          }
      } else Is(t) ? a = Lr : process.env.NODE_ENV !== "production" && i();
    } else l === "select" ? a = ii : process.env.NODE_ENV !== "production" && i();
    s || (o.needRuntime = n.helper(a));
  } else
    n.onError(
      rt(
        57,
        e.loc
      )
    );
  return o.props = o.props.filter(
    (a) => !(a.key.type === 4 && a.key.content === "modelValue")
  ), o;
}, Xc = /* @__PURE__ */ $r("passive,once,capture"), Hc = /* @__PURE__ */ $r(
  // event propagation management
  "stop,prevent,self,ctrl,shift,alt,meta,exact,middle"
), Gc = /* @__PURE__ */ $r("left,right"), la = /* @__PURE__ */ $r("onkeyup,onkeydown,onkeypress"), Kc = (e, t, n, o) => {
  const i = [], l = [], r = [];
  for (let a = 0; a < t.length; a++) {
    const s = t[a].content;
    s === "native" && Qt(
      "COMPILER_V_ON_NATIVE",
      n,
      o
    ) || Xc(s) ? r.push(s) : Gc(s) ? Ge(e) ? la(e.content.toLowerCase()) ? i.push(s) : l.push(s) : (i.push(s), l.push(s)) : Hc(s) ? l.push(s) : i.push(s);
  }
  return {
    keyModifiers: i,
    nonKeyModifiers: l,
    eventOptionModifiers: r
  };
}, Vi = (e, t) => Ge(e) && e.content.toLowerCase() === "onclick" ? Y(t, !0) : e.type !== 4 ? ot([
  "(",
  e,
  `) === "onClick" ? "${t}" : (`,
  e,
  ")"
]) : e, Wc = (e, t, n) => ei(e, t, n, (o) => {
  const { modifiers: i } = e;
  if (!i.length) return o;
  let { key: l, value: r } = o.props[0];
  const { keyModifiers: a, nonKeyModifiers: s, eventOptionModifiers: c } = Kc(l, i, n, e.loc);
  if (s.includes("right") && (l = Vi(l, "onContextmenu")), s.includes("middle") && (l = Vi(l, "onMouseup")), s.length && (r = Ie(n.helper(si), [
    r,
    JSON.stringify(s)
  ])), a.length && // if event name is dynamic, always wrap with keys guard
  (!Ge(l) || la(l.content.toLowerCase())) && (r = Ie(n.helper(ai), [
    r,
    JSON.stringify(a)
  ])), c.length) {
    const u = c.map(is).join("");
    l = Ge(l) ? Y(`${l.content}${u}`, !0) : ot(["(", l, `) + "${u}"`]);
  }
  return {
    props: [Se(l, r)]
  };
}), _c = (e, t, n) => {
  const { exp: o, loc: i } = e;
  return o || n.onError(
    rt(61, i)
  ), {
    props: [],
    needRuntime: n.helper(li)
  };
}, Yc = (e, t) => {
  if (e.type === 1 && e.tagType === 1 && t.isBuiltInComponent(e.tag) === oo)
    return () => {
      if (!e.children.length)
        return;
      ca(e) && t.onError(
        rt(
          62,
          {
            start: e.children[0].loc.start,
            end: e.children[e.children.length - 1].loc.end,
            source: ""
          }
        )
      );
      const o = e.children[0];
      if (o.type === 1)
        for (const i of o.props)
          i.type === 7 && i.name === "show" && e.props.push({
            type: 6,
            name: "persisted",
            nameLoc: e.loc,
            value: void 0,
            loc: e.loc
          });
    };
};
function ca(e) {
  const t = e.children = e.children.filter(
    (o) => o.type !== 3 && !(o.type === 2 && !o.content.trim())
  ), n = t[0];
  return t.length !== 1 || n.type === 11 || n.type === 9 && n.branches.some(ca);
}
const kc = (e, t) => {
  e.type === 1 && e.tagType === 0 && (e.tag === "script" || e.tag === "style") && (process.env.NODE_ENV !== "production" && t.onError(
    rt(
      63,
      e.loc
    )
  ), t.removeNode());
};
function Jc(e, t) {
  return e in Fi ? Fi[e].has(t) : t in ji ? ji[t].has(e) : !(e in Ui && Ui[e].has(t) || t in $i && $i[t].has(e));
}
const tn = /* @__PURE__ */ new Set(["h1", "h2", "h3", "h4", "h5", "h6"]), Xt = /* @__PURE__ */ new Set([]), Fi = {
  head: /* @__PURE__ */ new Set([
    "base",
    "basefront",
    "bgsound",
    "link",
    "meta",
    "title",
    "noscript",
    "noframes",
    "style",
    "script",
    "template"
  ]),
  optgroup: /* @__PURE__ */ new Set(["option"]),
  select: /* @__PURE__ */ new Set(["optgroup", "option", "hr"]),
  // table
  table: /* @__PURE__ */ new Set(["caption", "colgroup", "tbody", "tfoot", "thead"]),
  tr: /* @__PURE__ */ new Set(["td", "th"]),
  colgroup: /* @__PURE__ */ new Set(["col"]),
  tbody: /* @__PURE__ */ new Set(["tr"]),
  thead: /* @__PURE__ */ new Set(["tr"]),
  tfoot: /* @__PURE__ */ new Set(["tr"]),
  // these elements can not have any children elements
  script: Xt,
  iframe: Xt,
  option: Xt,
  textarea: Xt,
  style: Xt,
  title: Xt
}, ji = {
  // sections
  html: Xt,
  body: /* @__PURE__ */ new Set(["html"]),
  head: /* @__PURE__ */ new Set(["html"]),
  // table
  td: /* @__PURE__ */ new Set(["tr"]),
  colgroup: /* @__PURE__ */ new Set(["table"]),
  caption: /* @__PURE__ */ new Set(["table"]),
  tbody: /* @__PURE__ */ new Set(["table"]),
  tfoot: /* @__PURE__ */ new Set(["table"]),
  col: /* @__PURE__ */ new Set(["colgroup"]),
  th: /* @__PURE__ */ new Set(["tr"]),
  thead: /* @__PURE__ */ new Set(["table"]),
  tr: /* @__PURE__ */ new Set(["tbody", "thead", "tfoot"]),
  // data list
  dd: /* @__PURE__ */ new Set(["dl", "div"]),
  dt: /* @__PURE__ */ new Set(["dl", "div"]),
  // other
  figcaption: /* @__PURE__ */ new Set(["figure"]),
  // li: new Set(["ul", "ol"]),
  summary: /* @__PURE__ */ new Set(["details"]),
  area: /* @__PURE__ */ new Set(["map"])
}, Ui = {
  p: /* @__PURE__ */ new Set([
    "address",
    "article",
    "aside",
    "blockquote",
    "center",
    "details",
    "dialog",
    "dir",
    "div",
    "dl",
    "fieldset",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "li",
    "main",
    "nav",
    "menu",
    "ol",
    "p",
    "pre",
    "section",
    "table",
    "ul"
  ]),
  svg: /* @__PURE__ */ new Set([
    "b",
    "blockquote",
    "br",
    "code",
    "dd",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "hr",
    "i",
    "img",
    "li",
    "menu",
    "meta",
    "ol",
    "p",
    "pre",
    "ruby",
    "s",
    "small",
    "span",
    "strong",
    "sub",
    "sup",
    "table",
    "u",
    "ul",
    "var"
  ])
}, $i = {
  a: /* @__PURE__ */ new Set(["a"]),
  button: /* @__PURE__ */ new Set(["button"]),
  dd: /* @__PURE__ */ new Set(["dd", "dt"]),
  dt: /* @__PURE__ */ new Set(["dd", "dt"]),
  form: /* @__PURE__ */ new Set(["form"]),
  li: /* @__PURE__ */ new Set(["li"]),
  h1: tn,
  h2: tn,
  h3: tn,
  h4: tn,
  h5: tn,
  h6: tn
}, zc = (e, t) => {
  if (e.type === 1 && e.tagType === 0 && t.parent && t.parent.type === 1 && t.parent.tagType === 0 && !Jc(t.parent.tag, e.tag)) {
    const n = new SyntaxError(
      `<${e.tag}> cannot be child of <${t.parent.tag}>, according to HTML specifications. This can cause hydration errors or potentially disrupt future functionality.`
    );
    n.loc = e.loc, t.onWarn(n);
  }
}, fa = [
  sa,
  ...process.env.NODE_ENV !== "production" ? [Yc, zc] : []
], ua = {
  cloak: ia,
  html: Uc,
  text: $c,
  model: Bc,
  // override compiler-core
  on: Wc,
  // override compiler-core
  show: _c
};
function Qc(e, t = {}) {
  return oa(
    e,
    St({}, fi, t, {
      nodeTransforms: [
        // ignore <script> and <tag>
        // this is not put inside DOMNodeTransforms because that list is used
        // by compiler-ssr to generate vnode fallback branches
        kc,
        ...fa,
        ...t.nodeTransforms || []
      ],
      directiveTransforms: St(
        {},
        ua,
        t.directiveTransforms || {}
      ),
      transformHoist: null
    })
  );
}
function Zc(e, t = {}) {
  return Jo(e, St({}, fi, t));
}
const qc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BASE_TRANSITION: jo,
  BindingTypes: wc,
  CAMELIZE: Ar,
  CAPITALIZE: ss,
  CREATE_BLOCK: Uo,
  CREATE_COMMENT: gn,
  CREATE_ELEMENT_BLOCK: $o,
  CREATE_ELEMENT_VNODE: Gr,
  CREATE_SLOTS: Ho,
  CREATE_STATIC: Bo,
  CREATE_TEXT: Kr,
  CREATE_VNODE: Hr,
  CompilerDeprecationTypes: ml,
  ConstantTypes: ll,
  DOMDirectiveTransforms: ua,
  DOMErrorCodes: jc,
  DOMErrorMessages: aa,
  DOMNodeTransforms: fa,
  ElementTypes: al,
  ErrorCodes: El,
  FRAGMENT: fn,
  GUARD_REACTIVE_PROPS: En,
  IS_MEMO_SAME: Go,
  IS_REF: fs,
  KEEP_ALIVE: Bn,
  MERGE_PROPS: Xn,
  NORMALIZE_CLASS: Qr,
  NORMALIZE_PROPS: un,
  NORMALIZE_STYLE: Zr,
  Namespaces: il,
  NodeTypes: sl,
  OPEN_BLOCK: Vt,
  POP_SCOPE_ID: ls,
  PUSH_SCOPE_ID: as,
  RENDER_LIST: zr,
  RENDER_SLOT: Xo,
  RESOLVE_COMPONENT: Wr,
  RESOLVE_DIRECTIVE: Yr,
  RESOLVE_DYNAMIC_COMPONENT: _r,
  RESOLVE_FILTER: kr,
  SET_BLOCK_TRACKING: Hn,
  SUSPENSE: Xr,
  TELEPORT: cn,
  TO_DISPLAY_STRING: Yn,
  TO_HANDLERS: qr,
  TO_HANDLER_KEY: Dr,
  TRANSITION: oo,
  TRANSITION_GROUP: ci,
  TS_NODE_TYPES: Es,
  UNREF: cs,
  V_MODEL_CHECKBOX: ri,
  V_MODEL_DYNAMIC: Lr,
  V_MODEL_RADIO: ni,
  V_MODEL_SELECT: ii,
  V_MODEL_TEXT: oi,
  V_ON_WITH_KEYS: ai,
  V_ON_WITH_MODIFIERS: si,
  V_SHOW: li,
  WITH_CTX: eo,
  WITH_DIRECTIVES: Jr,
  WITH_MEMO: to,
  advancePositionWithClone: Fl,
  advancePositionWithMutation: Ns,
  assert: Ao,
  baseCompile: oa,
  baseParse: Jo,
  buildDirectiveArgs: ta,
  buildProps: qo,
  buildSlots: zs,
  checkCompatEnabled: Qt,
  compile: Qc,
  convertToBlock: no,
  createArrayExpression: Lt,
  createAssignmentExpression: dl,
  createBlockStatement: hs,
  createCacheExpression: ps,
  createCallExpression: Ie,
  createCompilerError: oe,
  createCompoundExpression: ot,
  createConditionalExpression: xr,
  createDOMCompilerError: rt,
  createForLoopParams: Rr,
  createFunctionExpression: kt,
  createIfStatement: ul,
  createInterpolation: cl,
  createObjectExpression: tt,
  createObjectProperty: Se,
  createReturnStatement: hl,
  createRoot: ds,
  createSequenceExpression: pl,
  createSimpleExpression: Y,
  createStructuralDirectiveTransform: zo,
  createTemplateLiteral: fl,
  createTransformContext: js,
  createVNodeCall: dn,
  errorMessages: ms,
  extractIdentifiers: gt,
  findDir: je,
  findProp: pn,
  forAliasRE: Ds,
  generate: Bs,
  generateCodeFrame: Ka,
  getBaseTransformPreset: ra,
  getConstantType: ze,
  getMemoedVNodeCall: As,
  getVNodeBlockHelper: zt,
  getVNodeHelper: Jt,
  hasDynamicKeyVBind: Is,
  hasScopeRef: ct,
  helperNameMap: Yt,
  injectProp: Wn,
  isCoreComponent: Wo,
  isFnExpression: Os,
  isFnExpressionBrowser: Ts,
  isFnExpressionNode: Vl,
  isFunctionType: Al,
  isInDestructureAssignment: bl,
  isInNewExpression: Tl,
  isMemberExpression: _o,
  isMemberExpressionBrowser: bs,
  isMemberExpressionNode: Ll,
  isReferencedIdentifier: Sl,
  isSimpleIdentifier: kn,
  isSlotOutlet: Kn,
  isStaticArgOf: yt,
  isStaticExp: Ge,
  isStaticProperty: gs,
  isStaticPropertyKey: Dl,
  isTemplateNode: hn,
  isText: mr,
  isVSlot: Yo,
  locStub: De,
  noopDirectiveTransform: ia,
  parse: Zc,
  parserOptions: fi,
  processExpression: Sr,
  processFor: ks,
  processIf: Ws,
  processSlotOutlet: na,
  registerRuntimeHelpers: us,
  resolveComponentType: ea,
  stringifyExpression: Ks,
  toValidAssetId: vn,
  trackSlotScopes: Js,
  trackVForSlotScopes: Oc,
  transform: Us,
  transformBind: _s,
  transformElement: qs,
  transformExpression: Gs,
  transformModel: ti,
  transformOn: ei,
  transformStyle: sa,
  traverseNode: Jn,
  unwrapTSNode: ys,
  walkBlockDeclarations: Nl,
  walkFunctionParams: Ol,
  walkIdentifiers: yl,
  warnDeprecation: Gn
}, Symbol.toStringTag, { value: "Module" })), da = /* @__PURE__ */ Br(qc), pa = /* @__PURE__ */ Br(Wa), ha = /* @__PURE__ */ Br(_a);
/**
* vue v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
var Bi;
function ef() {
  return Bi || (Bi = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
    var t = da, n = pa, o = ha;
    function i(s) {
      var c = /* @__PURE__ */ Object.create(null);
      if (s)
        for (var u in s)
          c[u] = s[u];
      return c.default = s, Object.freeze(c);
    }
    var l = /* @__PURE__ */ i(n);
    const r = /* @__PURE__ */ Object.create(null);
    function a(s, c) {
      if (!o.isString(s))
        if (s.nodeType)
          s = s.innerHTML;
        else
          return o.NOOP;
      const u = o.genCacheKey(s, c), f = r[u];
      if (f)
        return f;
      if (s[0] === "#") {
        const v = document.querySelector(s);
        s = v ? v.innerHTML : "";
      }
      const d = o.extend(
        {
          hoistStatic: !0,
          onError: void 0,
          onWarn: o.NOOP
        },
        c
      );
      !d.isCustomElement && typeof customElements < "u" && (d.isCustomElement = (v) => !!customElements.get(v));
      const { code: p } = t.compile(s, d), h = new Function("Vue", p)(l);
      return h._rc = !0, r[u] = h;
    }
    n.registerRuntimeCompiler(a), e.compile = a, Object.keys(n).forEach(function(s) {
      s !== "default" && !Object.prototype.hasOwnProperty.call(e, s) && (e[s] = n[s]);
    });
  }(fo)), fo;
}
var po = {};
/**
* vue v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
var Xi;
function tf() {
  return Xi || (Xi = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
    var t = da, n = pa, o = ha;
    function i(s) {
      var c = /* @__PURE__ */ Object.create(null);
      if (s)
        for (var u in s)
          c[u] = s[u];
      return c.default = s, Object.freeze(c);
    }
    var l = /* @__PURE__ */ i(n);
    const r = /* @__PURE__ */ Object.create(null);
    function a(s, c) {
      if (!o.isString(s))
        if (s.nodeType)
          s = s.innerHTML;
        else
          return n.warn("invalid template option: ", s), o.NOOP;
      const u = o.genCacheKey(s, c), f = r[u];
      if (f)
        return f;
      if (s[0] === "#") {
        const m = document.querySelector(s);
        m || n.warn(`Template element not found or is empty: ${s}`), s = m ? m.innerHTML : "";
      }
      const d = o.extend(
        {
          hoistStatic: !0,
          onError: h,
          onWarn: (m) => h(m, !0)
        },
        c
      );
      !d.isCustomElement && typeof customElements < "u" && (d.isCustomElement = (m) => !!customElements.get(m));
      const { code: p } = t.compile(s, d);
      function h(m, g = !1) {
        const E = g ? m.message : `Template compilation error: ${m.message}`, N = m.loc && o.generateCodeFrame(
          s,
          m.loc.start.offset,
          m.loc.end.offset
        );
        n.warn(N ? `${E}
${N}` : E);
      }
      const v = new Function("Vue", p)(l);
      return v._rc = !0, r[u] = v;
    }
    n.registerRuntimeCompiler(a), e.compile = a, Object.keys(n).forEach(function(s) {
      s !== "default" && !Object.prototype.hasOwnProperty.call(e, s) && (e[s] = n[s]);
    });
  }(po)), po;
}
var Hi;
function nf() {
  return Hi || (Hi = 1, process.env.NODE_ENV === "production" ? rr.exports = ef() : rr.exports = tf()), rr.exports;
}
/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Gi(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function vt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Gi(Object(n), !0).forEach(function(o) {
      rf(e, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Gi(Object(n)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return e;
}
function Tr(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Tr = function(t) {
    return typeof t;
  } : Tr = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Tr(e);
}
function rf(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function it() {
  return it = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, it.apply(this, arguments);
}
function of(e, t) {
  if (e == null) return {};
  var n = {}, o = Object.keys(e), i, l;
  for (l = 0; l < o.length; l++)
    i = o[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function sf(e, t) {
  if (e == null) return {};
  var n = of(e, t), o, i;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (i = 0; i < l.length; i++)
      o = l[i], !(t.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(e, o) && (n[o] = e[o]);
  }
  return n;
}
function af(e) {
  return lf(e) || cf(e) || ff(e) || uf();
}
function lf(e) {
  if (Array.isArray(e)) return Ro(e);
}
function cf(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function ff(e, t) {
  if (e) {
    if (typeof e == "string") return Ro(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ro(e, t);
  }
}
function Ro(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
  return o;
}
function uf() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var df = "1.14.0";
function Tt(e) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(e);
}
var Ot = Tt(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Qn = Tt(/Edge/i), Ki = Tt(/firefox/i), Vn = Tt(/safari/i) && !Tt(/chrome/i) && !Tt(/android/i), va = Tt(/iP(ad|od|hone)/i), pf = Tt(/chrome/i) && Tt(/android/i), ma = {
  capture: !1,
  passive: !1
};
function Z(e, t, n) {
  e.addEventListener(t, n, !Ot && ma);
}
function z(e, t, n) {
  e.removeEventListener(t, n, !Ot && ma);
}
function wr(e, t) {
  if (t) {
    if (t[0] === ">" && (t = t.substring(1)), e)
      try {
        if (e.matches)
          return e.matches(t);
        if (e.msMatchesSelector)
          return e.msMatchesSelector(t);
        if (e.webkitMatchesSelector)
          return e.webkitMatchesSelector(t);
      } catch {
        return !1;
      }
    return !1;
  }
}
function hf(e) {
  return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
}
function ft(e, t, n, o) {
  if (e) {
    n = n || document;
    do {
      if (t != null && (t[0] === ">" ? e.parentNode === n && wr(e, t) : wr(e, t)) || o && e === n)
        return e;
      if (e === n) break;
    } while (e = hf(e));
  }
  return null;
}
var Wi = /\s+/g;
function me(e, t, n) {
  if (e && t)
    if (e.classList)
      e.classList[n ? "add" : "remove"](t);
    else {
      var o = (" " + e.className + " ").replace(Wi, " ").replace(" " + t + " ", " ");
      e.className = (o + (n ? " " + t : "")).replace(Wi, " ");
    }
}
function $(e, t, n) {
  var o = e && e.style;
  if (o) {
    if (n === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(e, "") : e.currentStyle && (n = e.currentStyle), t === void 0 ? n : n[t];
    !(t in o) && t.indexOf("webkit") === -1 && (t = "-webkit-" + t), o[t] = n + (typeof n == "string" ? "" : "px");
  }
}
function _t(e, t) {
  var n = "";
  if (typeof e == "string")
    n = e;
  else
    do {
      var o = $(e, "transform");
      o && o !== "none" && (n = o + " " + n);
    } while (!t && (e = e.parentNode));
  var i = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return i && new i(n);
}
function ga(e, t, n) {
  if (e) {
    var o = e.getElementsByTagName(t), i = 0, l = o.length;
    if (n)
      for (; i < l; i++)
        n(o[i], i);
    return o;
  }
  return [];
}
function ht() {
  var e = document.scrollingElement;
  return e || document.documentElement;
}
function he(e, t, n, o, i) {
  if (!(!e.getBoundingClientRect && e !== window)) {
    var l, r, a, s, c, u, f;
    if (e !== window && e.parentNode && e !== ht() ? (l = e.getBoundingClientRect(), r = l.top, a = l.left, s = l.bottom, c = l.right, u = l.height, f = l.width) : (r = 0, a = 0, s = window.innerHeight, c = window.innerWidth, u = window.innerHeight, f = window.innerWidth), (t || n) && e !== window && (i = i || e.parentNode, !Ot))
      do
        if (i && i.getBoundingClientRect && ($(i, "transform") !== "none" || n && $(i, "position") !== "static")) {
          var d = i.getBoundingClientRect();
          r -= d.top + parseInt($(i, "border-top-width")), a -= d.left + parseInt($(i, "border-left-width")), s = r + l.height, c = a + l.width;
          break;
        }
      while (i = i.parentNode);
    if (o && e !== window) {
      var p = _t(i || e), h = p && p.a, v = p && p.d;
      p && (r /= v, a /= h, f /= h, u /= v, s = r + u, c = a + f);
    }
    return {
      top: r,
      left: a,
      bottom: s,
      right: c,
      width: f,
      height: u
    };
  }
}
function _i(e, t, n) {
  for (var o = Rt(e, !0), i = he(e)[t]; o; ) {
    var l = he(o)[n], r = void 0;
    if (r = i >= l, !r) return o;
    if (o === ht()) break;
    o = Rt(o, !1);
  }
  return !1;
}
function mn(e, t, n, o) {
  for (var i = 0, l = 0, r = e.children; l < r.length; ) {
    if (r[l].style.display !== "none" && r[l] !== G.ghost && (o || r[l] !== G.dragged) && ft(r[l], n.draggable, e, !1)) {
      if (i === t)
        return r[l];
      i++;
    }
    l++;
  }
  return null;
}
function ui(e, t) {
  for (var n = e.lastElementChild; n && (n === G.ghost || $(n, "display") === "none" || t && !wr(n, t)); )
    n = n.previousElementSibling;
  return n || null;
}
function ye(e, t) {
  var n = 0;
  if (!e || !e.parentNode)
    return -1;
  for (; e = e.previousElementSibling; )
    e.nodeName.toUpperCase() !== "TEMPLATE" && e !== G.clone && (!t || wr(e, t)) && n++;
  return n;
}
function Yi(e) {
  var t = 0, n = 0, o = ht();
  if (e)
    do {
      var i = _t(e), l = i.a, r = i.d;
      t += e.scrollLeft * l, n += e.scrollTop * r;
    } while (e !== o && (e = e.parentNode));
  return [t, n];
}
function vf(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      for (var o in t)
        if (t.hasOwnProperty(o) && t[o] === e[n][o]) return Number(n);
    }
  return -1;
}
function Rt(e, t) {
  if (!e || !e.getBoundingClientRect) return ht();
  var n = e, o = !1;
  do
    if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
      var i = $(n);
      if (n.clientWidth < n.scrollWidth && (i.overflowX == "auto" || i.overflowX == "scroll") || n.clientHeight < n.scrollHeight && (i.overflowY == "auto" || i.overflowY == "scroll")) {
        if (!n.getBoundingClientRect || n === document.body) return ht();
        if (o || t) return n;
        o = !0;
      }
    }
  while (n = n.parentNode);
  return ht();
}
function mf(e, t) {
  if (e && t)
    for (var n in t)
      t.hasOwnProperty(n) && (e[n] = t[n]);
  return e;
}
function ho(e, t) {
  return Math.round(e.top) === Math.round(t.top) && Math.round(e.left) === Math.round(t.left) && Math.round(e.height) === Math.round(t.height) && Math.round(e.width) === Math.round(t.width);
}
var Fn;
function Ea(e, t) {
  return function() {
    if (!Fn) {
      var n = arguments, o = this;
      n.length === 1 ? e.call(o, n[0]) : e.apply(o, n), Fn = setTimeout(function() {
        Fn = void 0;
      }, t);
    }
  };
}
function gf() {
  clearTimeout(Fn), Fn = void 0;
}
function ya(e, t, n) {
  e.scrollLeft += t, e.scrollTop += n;
}
function di(e) {
  var t = window.Polymer, n = window.jQuery || window.Zepto;
  return t && t.dom ? t.dom(e).cloneNode(!0) : n ? n(e).clone(!0)[0] : e.cloneNode(!0);
}
function ki(e, t) {
  $(e, "position", "absolute"), $(e, "top", t.top), $(e, "left", t.left), $(e, "width", t.width), $(e, "height", t.height);
}
function vo(e) {
  $(e, "position", ""), $(e, "top", ""), $(e, "left", ""), $(e, "width", ""), $(e, "height", "");
}
var Ue = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function Ef() {
  var e = [], t;
  return {
    captureAnimationState: function() {
      if (e = [], !!this.options.animation) {
        var o = [].slice.call(this.el.children);
        o.forEach(function(i) {
          if (!($(i, "display") === "none" || i === G.ghost)) {
            e.push({
              target: i,
              rect: he(i)
            });
            var l = vt({}, e[e.length - 1].rect);
            if (i.thisAnimationDuration) {
              var r = _t(i, !0);
              r && (l.top -= r.f, l.left -= r.e);
            }
            i.fromRect = l;
          }
        });
      }
    },
    addAnimationState: function(o) {
      e.push(o);
    },
    removeAnimationState: function(o) {
      e.splice(vf(e, {
        target: o
      }), 1);
    },
    animateAll: function(o) {
      var i = this;
      if (!this.options.animation) {
        clearTimeout(t), typeof o == "function" && o();
        return;
      }
      var l = !1, r = 0;
      e.forEach(function(a) {
        var s = 0, c = a.target, u = c.fromRect, f = he(c), d = c.prevFromRect, p = c.prevToRect, h = a.rect, v = _t(c, !0);
        v && (f.top -= v.f, f.left -= v.e), c.toRect = f, c.thisAnimationDuration && ho(d, f) && !ho(u, f) && // Make sure animatingRect is on line between toRect & fromRect
        (h.top - f.top) / (h.left - f.left) === (u.top - f.top) / (u.left - f.left) && (s = Sf(h, d, p, i.options)), ho(f, u) || (c.prevFromRect = u, c.prevToRect = f, s || (s = i.options.animation), i.animate(c, h, f, s)), s && (l = !0, r = Math.max(r, s), clearTimeout(c.animationResetTimer), c.animationResetTimer = setTimeout(function() {
          c.animationTime = 0, c.prevFromRect = null, c.fromRect = null, c.prevToRect = null, c.thisAnimationDuration = null;
        }, s), c.thisAnimationDuration = s);
      }), clearTimeout(t), l ? t = setTimeout(function() {
        typeof o == "function" && o();
      }, r) : typeof o == "function" && o(), e = [];
    },
    animate: function(o, i, l, r) {
      if (r) {
        $(o, "transition", ""), $(o, "transform", "");
        var a = _t(this.el), s = a && a.a, c = a && a.d, u = (i.left - l.left) / (s || 1), f = (i.top - l.top) / (c || 1);
        o.animatingX = !!u, o.animatingY = !!f, $(o, "transform", "translate3d(" + u + "px," + f + "px,0)"), this.forRepaintDummy = yf(o), $(o, "transition", "transform " + r + "ms" + (this.options.easing ? " " + this.options.easing : "")), $(o, "transform", "translate3d(0,0,0)"), typeof o.animated == "number" && clearTimeout(o.animated), o.animated = setTimeout(function() {
          $(o, "transition", ""), $(o, "transform", ""), o.animated = !1, o.animatingX = !1, o.animatingY = !1;
        }, r);
      }
    }
  };
}
function yf(e) {
  return e.offsetWidth;
}
function Sf(e, t, n, o) {
  return Math.sqrt(Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2)) / Math.sqrt(Math.pow(t.top - n.top, 2) + Math.pow(t.left - n.left, 2)) * o.animation;
}
var nn = [], mo = {
  initializeByDefault: !0
}, Zn = {
  mount: function(t) {
    for (var n in mo)
      mo.hasOwnProperty(n) && !(n in t) && (t[n] = mo[n]);
    nn.forEach(function(o) {
      if (o.pluginName === t.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(t.pluginName, " more than once");
    }), nn.push(t);
  },
  pluginEvent: function(t, n, o) {
    var i = this;
    this.eventCanceled = !1, o.cancel = function() {
      i.eventCanceled = !0;
    };
    var l = t + "Global";
    nn.forEach(function(r) {
      n[r.pluginName] && (n[r.pluginName][l] && n[r.pluginName][l](vt({
        sortable: n
      }, o)), n.options[r.pluginName] && n[r.pluginName][t] && n[r.pluginName][t](vt({
        sortable: n
      }, o)));
    });
  },
  initializePlugins: function(t, n, o, i) {
    nn.forEach(function(a) {
      var s = a.pluginName;
      if (!(!t.options[s] && !a.initializeByDefault)) {
        var c = new a(t, n, t.options);
        c.sortable = t, c.options = t.options, t[s] = c, it(o, c.defaults);
      }
    });
    for (var l in t.options)
      if (t.options.hasOwnProperty(l)) {
        var r = this.modifyOption(t, l, t.options[l]);
        typeof r < "u" && (t.options[l] = r);
      }
  },
  getEventProperties: function(t, n) {
    var o = {};
    return nn.forEach(function(i) {
      typeof i.eventProperties == "function" && it(o, i.eventProperties.call(n[i.pluginName], t));
    }), o;
  },
  modifyOption: function(t, n, o) {
    var i;
    return nn.forEach(function(l) {
      t[l.pluginName] && l.optionListeners && typeof l.optionListeners[n] == "function" && (i = l.optionListeners[n].call(t[l.pluginName], o));
    }), i;
  }
};
function Pn(e) {
  var t = e.sortable, n = e.rootEl, o = e.name, i = e.targetEl, l = e.cloneEl, r = e.toEl, a = e.fromEl, s = e.oldIndex, c = e.newIndex, u = e.oldDraggableIndex, f = e.newDraggableIndex, d = e.originalEvent, p = e.putSortable, h = e.extraEventProperties;
  if (t = t || n && n[Ue], !!t) {
    var v, m = t.options, g = "on" + o.charAt(0).toUpperCase() + o.substr(1);
    window.CustomEvent && !Ot && !Qn ? v = new CustomEvent(o, {
      bubbles: !0,
      cancelable: !0
    }) : (v = document.createEvent("Event"), v.initEvent(o, !0, !0)), v.to = r || n, v.from = a || n, v.item = i || n, v.clone = l, v.oldIndex = s, v.newIndex = c, v.oldDraggableIndex = u, v.newDraggableIndex = f, v.originalEvent = d, v.pullMode = p ? p.lastPutMode : void 0;
    var E = vt(vt({}, h), Zn.getEventProperties(o, t));
    for (var N in E)
      v[N] = E[N];
    n && n.dispatchEvent(v), m[g] && m[g].call(t, v);
  }
}
var bf = ["evt"], _e = function(t, n) {
  var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = o.evt, l = sf(o, bf);
  Zn.pluginEvent.bind(G)(t, n, vt({
    dragEl: w,
    parentEl: ge,
    ghostEl: k,
    rootEl: de,
    nextEl: Ht,
    lastDownEl: Or,
    cloneEl: Ee,
    cloneHidden: Pt,
    dragStarted: Rn,
    putSortable: Le,
    activeSortable: G.active,
    originalEvent: i,
    oldIndex: ln,
    oldDraggableIndex: jn,
    newIndex: qe,
    newDraggableIndex: xt,
    hideGhostForTarget: Oa,
    unhideGhostForTarget: Na,
    cloneNowHidden: function() {
      Pt = !0;
    },
    cloneNowShown: function() {
      Pt = !1;
    },
    dispatchSortableEvent: function(a) {
      Xe({
        sortable: n,
        name: a,
        originalEvent: i
      });
    }
  }, l));
};
function Xe(e) {
  Pn(vt({
    putSortable: Le,
    cloneEl: Ee,
    targetEl: w,
    rootEl: de,
    oldIndex: ln,
    oldDraggableIndex: jn,
    newIndex: qe,
    newDraggableIndex: xt
  }, e));
}
var w, ge, k, de, Ht, Or, Ee, Pt, ln, qe, jn, xt, ar, Le, an = !1, Vr = !1, Fr = [], Ut, at, go, Eo, Ji, zi, Rn, rn, Un, $n = !1, lr = !1, Nr, Ve, yo = [], Mo = !1, jr = [], io = typeof document < "u", cr = va, Qi = Qn || Ot ? "cssFloat" : "float", Tf = io && !pf && !va && "draggable" in document.createElement("div"), Sa = function() {
  if (io) {
    if (Ot)
      return !1;
    var e = document.createElement("x");
    return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
  }
}(), ba = function(t, n) {
  var o = $(t), i = parseInt(o.width) - parseInt(o.paddingLeft) - parseInt(o.paddingRight) - parseInt(o.borderLeftWidth) - parseInt(o.borderRightWidth), l = mn(t, 0, n), r = mn(t, 1, n), a = l && $(l), s = r && $(r), c = a && parseInt(a.marginLeft) + parseInt(a.marginRight) + he(l).width, u = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + he(r).width;
  if (o.display === "flex")
    return o.flexDirection === "column" || o.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (o.display === "grid")
    return o.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (l && a.float && a.float !== "none") {
    var f = a.float === "left" ? "left" : "right";
    return r && (s.clear === "both" || s.clear === f) ? "vertical" : "horizontal";
  }
  return l && (a.display === "block" || a.display === "flex" || a.display === "table" || a.display === "grid" || c >= i && o[Qi] === "none" || r && o[Qi] === "none" && c + u > i) ? "vertical" : "horizontal";
}, Of = function(t, n, o) {
  var i = o ? t.left : t.top, l = o ? t.right : t.bottom, r = o ? t.width : t.height, a = o ? n.left : n.top, s = o ? n.right : n.bottom, c = o ? n.width : n.height;
  return i === a || l === s || i + r / 2 === a + c / 2;
}, Nf = function(t, n) {
  var o;
  return Fr.some(function(i) {
    var l = i[Ue].options.emptyInsertThreshold;
    if (!(!l || ui(i))) {
      var r = he(i), a = t >= r.left - l && t <= r.right + l, s = n >= r.top - l && n <= r.bottom + l;
      if (a && s)
        return o = i;
    }
  }), o;
}, Ta = function(t) {
  function n(l, r) {
    return function(a, s, c, u) {
      var f = a.options.group.name && s.options.group.name && a.options.group.name === s.options.group.name;
      if (l == null && (r || f))
        return !0;
      if (l == null || l === !1)
        return !1;
      if (r && l === "clone")
        return l;
      if (typeof l == "function")
        return n(l(a, s, c, u), r)(a, s, c, u);
      var d = (r ? a : s).options.group.name;
      return l === !0 || typeof l == "string" && l === d || l.join && l.indexOf(d) > -1;
    };
  }
  var o = {}, i = t.group;
  (!i || Tr(i) != "object") && (i = {
    name: i
  }), o.name = i.name, o.checkPull = n(i.pull, !0), o.checkPut = n(i.put), o.revertClone = i.revertClone, t.group = o;
}, Oa = function() {
  !Sa && k && $(k, "display", "none");
}, Na = function() {
  !Sa && k && $(k, "display", "");
};
io && document.addEventListener("click", function(e) {
  if (Vr)
    return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), Vr = !1, !1;
}, !0);
var $t = function(t) {
  if (w) {
    t = t.touches ? t.touches[0] : t;
    var n = Nf(t.clientX, t.clientY);
    if (n) {
      var o = {};
      for (var i in t)
        t.hasOwnProperty(i) && (o[i] = t[i]);
      o.target = o.rootEl = n, o.preventDefault = void 0, o.stopPropagation = void 0, n[Ue]._onDragOver(o);
    }
  }
}, If = function(t) {
  w && w.parentNode[Ue]._isOutsideThisEl(t.target);
};
function G(e, t) {
  if (!(e && e.nodeType && e.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));
  this.el = e, this.options = t = it({}, t), e[Ue] = this;
  var n = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(e.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return ba(e, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(r, a) {
      r.setData("Text", a.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: G.supportPointer !== !1 && "PointerEvent" in window && !Vn,
    emptyInsertThreshold: 5
  };
  Zn.initializePlugins(this, e, n);
  for (var o in n)
    !(o in t) && (t[o] = n[o]);
  Ta(t);
  for (var i in this)
    i.charAt(0) === "_" && typeof this[i] == "function" && (this[i] = this[i].bind(this));
  this.nativeDraggable = t.forceFallback ? !1 : Tf, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? Z(e, "pointerdown", this._onTapStart) : (Z(e, "mousedown", this._onTapStart), Z(e, "touchstart", this._onTapStart)), this.nativeDraggable && (Z(e, "dragover", this), Z(e, "dragenter", this)), Fr.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), it(this, Ef());
}
G.prototype = /** @lends Sortable.prototype */
{
  constructor: G,
  _isOutsideThisEl: function(t) {
    !this.el.contains(t) && t !== this.el && (rn = null);
  },
  _getDirection: function(t, n) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, t, n, w) : this.options.direction;
  },
  _onTapStart: function(t) {
    if (t.cancelable) {
      var n = this, o = this.el, i = this.options, l = i.preventOnFilter, r = t.type, a = t.touches && t.touches[0] || t.pointerType && t.pointerType === "touch" && t, s = (a || t).target, c = t.target.shadowRoot && (t.path && t.path[0] || t.composedPath && t.composedPath()[0]) || s, u = i.filter;
      if (Lf(o), !w && !(/mousedown|pointerdown/.test(r) && t.button !== 0 || i.disabled) && !c.isContentEditable && !(!this.nativeDraggable && Vn && s && s.tagName.toUpperCase() === "SELECT") && (s = ft(s, i.draggable, o, !1), !(s && s.animated) && Or !== s)) {
        if (ln = ye(s), jn = ye(s, i.draggable), typeof u == "function") {
          if (u.call(this, t, s, this)) {
            Xe({
              sortable: n,
              rootEl: c,
              name: "filter",
              targetEl: s,
              toEl: o,
              fromEl: o
            }), _e("filter", n, {
              evt: t
            }), l && t.cancelable && t.preventDefault();
            return;
          }
        } else if (u && (u = u.split(",").some(function(f) {
          if (f = ft(c, f.trim(), o, !1), f)
            return Xe({
              sortable: n,
              rootEl: f,
              name: "filter",
              targetEl: s,
              fromEl: o,
              toEl: o
            }), _e("filter", n, {
              evt: t
            }), !0;
        }), u)) {
          l && t.cancelable && t.preventDefault();
          return;
        }
        i.handle && !ft(c, i.handle, o, !1) || this._prepareDragStart(t, a, s);
      }
    }
  },
  _prepareDragStart: function(t, n, o) {
    var i = this, l = i.el, r = i.options, a = l.ownerDocument, s;
    if (o && !w && o.parentNode === l) {
      var c = he(o);
      if (de = l, w = o, ge = w.parentNode, Ht = w.nextSibling, Or = o, ar = r.group, G.dragged = w, Ut = {
        target: w,
        clientX: (n || t).clientX,
        clientY: (n || t).clientY
      }, Ji = Ut.clientX - c.left, zi = Ut.clientY - c.top, this._lastX = (n || t).clientX, this._lastY = (n || t).clientY, w.style["will-change"] = "all", s = function() {
        if (_e("delayEnded", i, {
          evt: t
        }), G.eventCanceled) {
          i._onDrop();
          return;
        }
        i._disableDelayedDragEvents(), !Ki && i.nativeDraggable && (w.draggable = !0), i._triggerDragStart(t, n), Xe({
          sortable: i,
          name: "choose",
          originalEvent: t
        }), me(w, r.chosenClass, !0);
      }, r.ignore.split(",").forEach(function(u) {
        ga(w, u.trim(), So);
      }), Z(a, "dragover", $t), Z(a, "mousemove", $t), Z(a, "touchmove", $t), Z(a, "mouseup", i._onDrop), Z(a, "touchend", i._onDrop), Z(a, "touchcancel", i._onDrop), Ki && this.nativeDraggable && (this.options.touchStartThreshold = 4, w.draggable = !0), _e("delayStart", this, {
        evt: t
      }), r.delay && (!r.delayOnTouchOnly || n) && (!this.nativeDraggable || !(Qn || Ot))) {
        if (G.eventCanceled) {
          this._onDrop();
          return;
        }
        Z(a, "mouseup", i._disableDelayedDrag), Z(a, "touchend", i._disableDelayedDrag), Z(a, "touchcancel", i._disableDelayedDrag), Z(a, "mousemove", i._delayedDragTouchMoveHandler), Z(a, "touchmove", i._delayedDragTouchMoveHandler), r.supportPointer && Z(a, "pointermove", i._delayedDragTouchMoveHandler), i._dragStartTimer = setTimeout(s, r.delay);
      } else
        s();
    }
  },
  _delayedDragTouchMoveHandler: function(t) {
    var n = t.touches ? t.touches[0] : t;
    Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    w && So(w), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var t = this.el.ownerDocument;
    z(t, "mouseup", this._disableDelayedDrag), z(t, "touchend", this._disableDelayedDrag), z(t, "touchcancel", this._disableDelayedDrag), z(t, "mousemove", this._delayedDragTouchMoveHandler), z(t, "touchmove", this._delayedDragTouchMoveHandler), z(t, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(t, n) {
    n = n || t.pointerType == "touch" && t, !this.nativeDraggable || n ? this.options.supportPointer ? Z(document, "pointermove", this._onTouchMove) : n ? Z(document, "touchmove", this._onTouchMove) : Z(document, "mousemove", this._onTouchMove) : (Z(w, "dragend", this), Z(de, "dragstart", this._onDragStart));
    try {
      document.selection ? Ir(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(t, n) {
    if (an = !1, de && w) {
      _e("dragStarted", this, {
        evt: n
      }), this.nativeDraggable && Z(document, "dragover", If);
      var o = this.options;
      !t && me(w, o.dragClass, !1), me(w, o.ghostClass, !0), G.active = this, t && this._appendGhost(), Xe({
        sortable: this,
        name: "start",
        originalEvent: n
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (at) {
      this._lastX = at.clientX, this._lastY = at.clientY, Oa();
      for (var t = document.elementFromPoint(at.clientX, at.clientY), n = t; t && t.shadowRoot && (t = t.shadowRoot.elementFromPoint(at.clientX, at.clientY), t !== n); )
        n = t;
      if (w.parentNode[Ue]._isOutsideThisEl(t), n)
        do {
          if (n[Ue]) {
            var o = void 0;
            if (o = n[Ue]._onDragOver({
              clientX: at.clientX,
              clientY: at.clientY,
              target: t,
              rootEl: n
            }), o && !this.options.dragoverBubble)
              break;
          }
          t = n;
        } while (n = n.parentNode);
      Na();
    }
  },
  _onTouchMove: function(t) {
    if (Ut) {
      var n = this.options, o = n.fallbackTolerance, i = n.fallbackOffset, l = t.touches ? t.touches[0] : t, r = k && _t(k, !0), a = k && r && r.a, s = k && r && r.d, c = cr && Ve && Yi(Ve), u = (l.clientX - Ut.clientX + i.x) / (a || 1) + (c ? c[0] - yo[0] : 0) / (a || 1), f = (l.clientY - Ut.clientY + i.y) / (s || 1) + (c ? c[1] - yo[1] : 0) / (s || 1);
      if (!G.active && !an) {
        if (o && Math.max(Math.abs(l.clientX - this._lastX), Math.abs(l.clientY - this._lastY)) < o)
          return;
        this._onDragStart(t, !0);
      }
      if (k) {
        r ? (r.e += u - (go || 0), r.f += f - (Eo || 0)) : r = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: u,
          f
        };
        var d = "matrix(".concat(r.a, ",").concat(r.b, ",").concat(r.c, ",").concat(r.d, ",").concat(r.e, ",").concat(r.f, ")");
        $(k, "webkitTransform", d), $(k, "mozTransform", d), $(k, "msTransform", d), $(k, "transform", d), go = u, Eo = f, at = l;
      }
      t.cancelable && t.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!k) {
      var t = this.options.fallbackOnBody ? document.body : de, n = he(w, !0, cr, !0, t), o = this.options;
      if (cr) {
        for (Ve = t; $(Ve, "position") === "static" && $(Ve, "transform") === "none" && Ve !== document; )
          Ve = Ve.parentNode;
        Ve !== document.body && Ve !== document.documentElement ? (Ve === document && (Ve = ht()), n.top += Ve.scrollTop, n.left += Ve.scrollLeft) : Ve = ht(), yo = Yi(Ve);
      }
      k = w.cloneNode(!0), me(k, o.ghostClass, !1), me(k, o.fallbackClass, !0), me(k, o.dragClass, !0), $(k, "transition", ""), $(k, "transform", ""), $(k, "box-sizing", "border-box"), $(k, "margin", 0), $(k, "top", n.top), $(k, "left", n.left), $(k, "width", n.width), $(k, "height", n.height), $(k, "opacity", "0.8"), $(k, "position", cr ? "absolute" : "fixed"), $(k, "zIndex", "100000"), $(k, "pointerEvents", "none"), G.ghost = k, t.appendChild(k), $(k, "transform-origin", Ji / parseInt(k.style.width) * 100 + "% " + zi / parseInt(k.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(t, n) {
    var o = this, i = t.dataTransfer, l = o.options;
    if (_e("dragStart", this, {
      evt: t
    }), G.eventCanceled) {
      this._onDrop();
      return;
    }
    _e("setupClone", this), G.eventCanceled || (Ee = di(w), Ee.draggable = !1, Ee.style["will-change"] = "", this._hideClone(), me(Ee, this.options.chosenClass, !1), G.clone = Ee), o.cloneId = Ir(function() {
      _e("clone", o), !G.eventCanceled && (o.options.removeCloneOnHide || de.insertBefore(Ee, w), o._hideClone(), Xe({
        sortable: o,
        name: "clone"
      }));
    }), !n && me(w, l.dragClass, !0), n ? (Vr = !0, o._loopId = setInterval(o._emulateDragOver, 50)) : (z(document, "mouseup", o._onDrop), z(document, "touchend", o._onDrop), z(document, "touchcancel", o._onDrop), i && (i.effectAllowed = "move", l.setData && l.setData.call(o, i, w)), Z(document, "drop", o), $(w, "transform", "translateZ(0)")), an = !0, o._dragStartId = Ir(o._dragStarted.bind(o, n, t)), Z(document, "selectstart", o), Rn = !0, Vn && $(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(t) {
    var n = this.el, o = t.target, i, l, r, a = this.options, s = a.group, c = G.active, u = ar === s, f = a.sort, d = Le || c, p, h = this, v = !1;
    if (Mo) return;
    function m(Q, ae) {
      _e(Q, h, vt({
        evt: t,
        isOwner: u,
        axis: p ? "vertical" : "horizontal",
        revert: r,
        dragRect: i,
        targetRect: l,
        canSort: f,
        fromSortable: d,
        target: o,
        completed: E,
        onMove: function(ie, se) {
          return fr(de, n, w, i, ie, he(ie), t, se);
        },
        changed: N
      }, ae));
    }
    function g() {
      m("dragOverAnimationCapture"), h.captureAnimationState(), h !== d && d.captureAnimationState();
    }
    function E(Q) {
      return m("dragOverCompleted", {
        insertion: Q
      }), Q && (u ? c._hideClone() : c._showClone(h), h !== d && (me(w, Le ? Le.options.ghostClass : c.options.ghostClass, !1), me(w, a.ghostClass, !0)), Le !== h && h !== G.active ? Le = h : h === G.active && Le && (Le = null), d === h && (h._ignoreWhileAnimating = o), h.animateAll(function() {
        m("dragOverAnimationComplete"), h._ignoreWhileAnimating = null;
      }), h !== d && (d.animateAll(), d._ignoreWhileAnimating = null)), (o === w && !w.animated || o === n && !o.animated) && (rn = null), !a.dragoverBubble && !t.rootEl && o !== document && (w.parentNode[Ue]._isOutsideThisEl(t.target), !Q && $t(t)), !a.dragoverBubble && t.stopPropagation && t.stopPropagation(), v = !0;
    }
    function N() {
      qe = ye(w), xt = ye(w, a.draggable), Xe({
        sortable: h,
        name: "change",
        toEl: n,
        newIndex: qe,
        newDraggableIndex: xt,
        originalEvent: t
      });
    }
    if (t.preventDefault !== void 0 && t.cancelable && t.preventDefault(), o = ft(o, a.draggable, n, !0), m("dragOver"), G.eventCanceled) return v;
    if (w.contains(t.target) || o.animated && o.animatingX && o.animatingY || h._ignoreWhileAnimating === o)
      return E(!1);
    if (Vr = !1, c && !a.disabled && (u ? f || (r = ge !== de) : Le === this || (this.lastPutMode = ar.checkPull(this, c, w, t)) && s.checkPut(this, c, w, t))) {
      if (p = this._getDirection(t, o) === "vertical", i = he(w), m("dragOverValid"), G.eventCanceled) return v;
      if (r)
        return ge = de, g(), this._hideClone(), m("revert"), G.eventCanceled || (Ht ? de.insertBefore(w, Ht) : de.appendChild(w)), E(!0);
      var T = ui(n, a.draggable);
      if (!T || xf(t, p, this) && !T.animated) {
        if (T === w)
          return E(!1);
        if (T && n === t.target && (o = T), o && (l = he(o)), fr(de, n, w, i, o, l, t, !!o) !== !1)
          return g(), n.appendChild(w), ge = n, N(), E(!0);
      } else if (T && Df(t, p, this)) {
        var I = mn(n, 0, a, !0);
        if (I === w)
          return E(!1);
        if (o = I, l = he(o), fr(de, n, w, i, o, l, t, !1) !== !1)
          return g(), n.insertBefore(w, I), ge = n, N(), E(!0);
      } else if (o.parentNode === n) {
        l = he(o);
        var C = 0, F, P = w.parentNode !== n, y = !Of(w.animated && w.toRect || i, o.animated && o.toRect || l, p), D = p ? "top" : "left", R = _i(o, "top", "top") || _i(w, "top", "top"), L = R ? R.scrollTop : void 0;
        rn !== o && (F = l[D], $n = !1, lr = !y && a.invertSwap || P), C = Pf(t, o, l, p, y ? 1 : a.swapThreshold, a.invertedSwapThreshold == null ? a.swapThreshold : a.invertedSwapThreshold, lr, rn === o);
        var A;
        if (C !== 0) {
          var x = ye(w);
          do
            x -= C, A = ge.children[x];
          while (A && ($(A, "display") === "none" || A === k));
        }
        if (C === 0 || A === o)
          return E(!1);
        rn = o, Un = C;
        var j = o.nextElementSibling, V = !1;
        V = C === 1;
        var B = fr(de, n, w, i, o, l, t, V);
        if (B !== !1)
          return (B === 1 || B === -1) && (V = B === 1), Mo = !0, setTimeout(Af, 30), g(), V && !j ? n.appendChild(w) : o.parentNode.insertBefore(w, V ? j : o), R && ya(R, 0, L - R.scrollTop), ge = w.parentNode, F !== void 0 && !lr && (Nr = Math.abs(F - he(o)[D])), N(), E(!0);
      }
      if (n.contains(w))
        return E(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    z(document, "mousemove", this._onTouchMove), z(document, "touchmove", this._onTouchMove), z(document, "pointermove", this._onTouchMove), z(document, "dragover", $t), z(document, "mousemove", $t), z(document, "touchmove", $t);
  },
  _offUpEvents: function() {
    var t = this.el.ownerDocument;
    z(t, "mouseup", this._onDrop), z(t, "touchend", this._onDrop), z(t, "pointerup", this._onDrop), z(t, "touchcancel", this._onDrop), z(document, "selectstart", this);
  },
  _onDrop: function(t) {
    var n = this.el, o = this.options;
    if (qe = ye(w), xt = ye(w, o.draggable), _e("drop", this, {
      evt: t
    }), ge = w && w.parentNode, qe = ye(w), xt = ye(w, o.draggable), G.eventCanceled) {
      this._nulling();
      return;
    }
    an = !1, lr = !1, $n = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Lo(this.cloneId), Lo(this._dragStartId), this.nativeDraggable && (z(document, "drop", this), z(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Vn && $(document.body, "user-select", ""), $(w, "transform", ""), t && (Rn && (t.cancelable && t.preventDefault(), !o.dropBubble && t.stopPropagation()), k && k.parentNode && k.parentNode.removeChild(k), (de === ge || Le && Le.lastPutMode !== "clone") && Ee && Ee.parentNode && Ee.parentNode.removeChild(Ee), w && (this.nativeDraggable && z(w, "dragend", this), So(w), w.style["will-change"] = "", Rn && !an && me(w, Le ? Le.options.ghostClass : this.options.ghostClass, !1), me(w, this.options.chosenClass, !1), Xe({
      sortable: this,
      name: "unchoose",
      toEl: ge,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: t
    }), de !== ge ? (qe >= 0 && (Xe({
      rootEl: ge,
      name: "add",
      toEl: ge,
      fromEl: de,
      originalEvent: t
    }), Xe({
      sortable: this,
      name: "remove",
      toEl: ge,
      originalEvent: t
    }), Xe({
      rootEl: ge,
      name: "sort",
      toEl: ge,
      fromEl: de,
      originalEvent: t
    }), Xe({
      sortable: this,
      name: "sort",
      toEl: ge,
      originalEvent: t
    })), Le && Le.save()) : qe !== ln && qe >= 0 && (Xe({
      sortable: this,
      name: "update",
      toEl: ge,
      originalEvent: t
    }), Xe({
      sortable: this,
      name: "sort",
      toEl: ge,
      originalEvent: t
    })), G.active && ((qe == null || qe === -1) && (qe = ln, xt = jn), Xe({
      sortable: this,
      name: "end",
      toEl: ge,
      originalEvent: t
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    _e("nulling", this), de = w = ge = k = Ht = Ee = Or = Pt = Ut = at = Rn = qe = xt = ln = jn = rn = Un = Le = ar = G.dragged = G.ghost = G.clone = G.active = null, jr.forEach(function(t) {
      t.checked = !0;
    }), jr.length = go = Eo = 0;
  },
  handleEvent: function(t) {
    switch (t.type) {
      case "drop":
      case "dragend":
        this._onDrop(t);
        break;
      case "dragenter":
      case "dragover":
        w && (this._onDragOver(t), Cf(t));
        break;
      case "selectstart":
        t.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function() {
    for (var t = [], n, o = this.el.children, i = 0, l = o.length, r = this.options; i < l; i++)
      n = o[i], ft(n, r.draggable, this.el, !1) && t.push(n.getAttribute(r.dataIdAttr) || Mf(n));
    return t;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(t, n) {
    var o = {}, i = this.el;
    this.toArray().forEach(function(l, r) {
      var a = i.children[r];
      ft(a, this.options.draggable, i, !1) && (o[l] = a);
    }, this), n && this.captureAnimationState(), t.forEach(function(l) {
      o[l] && (i.removeChild(o[l]), i.appendChild(o[l]));
    }), n && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function() {
    var t = this.options.store;
    t && t.set && t.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function(t, n) {
    return ft(t, n || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(t, n) {
    var o = this.options;
    if (n === void 0)
      return o[t];
    var i = Zn.modifyOption(this, t, n);
    typeof i < "u" ? o[t] = i : o[t] = n, t === "group" && Ta(o);
  },
  /**
   * Destroy
   */
  destroy: function() {
    _e("destroy", this);
    var t = this.el;
    t[Ue] = null, z(t, "mousedown", this._onTapStart), z(t, "touchstart", this._onTapStart), z(t, "pointerdown", this._onTapStart), this.nativeDraggable && (z(t, "dragover", this), z(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function(n) {
      n.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), Fr.splice(Fr.indexOf(this.el), 1), this.el = t = null;
  },
  _hideClone: function() {
    if (!Pt) {
      if (_e("hideClone", this), G.eventCanceled) return;
      $(Ee, "display", "none"), this.options.removeCloneOnHide && Ee.parentNode && Ee.parentNode.removeChild(Ee), Pt = !0;
    }
  },
  _showClone: function(t) {
    if (t.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (Pt) {
      if (_e("showClone", this), G.eventCanceled) return;
      w.parentNode == de && !this.options.group.revertClone ? de.insertBefore(Ee, w) : Ht ? de.insertBefore(Ee, Ht) : de.appendChild(Ee), this.options.group.revertClone && this.animate(w, Ee), $(Ee, "display", ""), Pt = !1;
    }
  }
};
function Cf(e) {
  e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault();
}
function fr(e, t, n, o, i, l, r, a) {
  var s, c = e[Ue], u = c.options.onMove, f;
  return window.CustomEvent && !Ot && !Qn ? s = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (s = document.createEvent("Event"), s.initEvent("move", !0, !0)), s.to = t, s.from = e, s.dragged = n, s.draggedRect = o, s.related = i || t, s.relatedRect = l || he(t), s.willInsertAfter = a, s.originalEvent = r, e.dispatchEvent(s), u && (f = u.call(c, s, r)), f;
}
function So(e) {
  e.draggable = !1;
}
function Af() {
  Mo = !1;
}
function Df(e, t, n) {
  var o = he(mn(n.el, 0, n.options, !0)), i = 10;
  return t ? e.clientX < o.left - i || e.clientY < o.top && e.clientX < o.right : e.clientY < o.top - i || e.clientY < o.bottom && e.clientX < o.left;
}
function xf(e, t, n) {
  var o = he(ui(n.el, n.options.draggable)), i = 10;
  return t ? e.clientX > o.right + i || e.clientX <= o.right && e.clientY > o.bottom && e.clientX >= o.left : e.clientX > o.right && e.clientY > o.top || e.clientX <= o.right && e.clientY > o.bottom + i;
}
function Pf(e, t, n, o, i, l, r, a) {
  var s = o ? e.clientY : e.clientX, c = o ? n.height : n.width, u = o ? n.top : n.left, f = o ? n.bottom : n.right, d = !1;
  if (!r) {
    if (a && Nr < c * i) {
      if (!$n && (Un === 1 ? s > u + c * l / 2 : s < f - c * l / 2) && ($n = !0), $n)
        d = !0;
      else if (Un === 1 ? s < u + Nr : s > f - Nr)
        return -Un;
    } else if (s > u + c * (1 - i) / 2 && s < f - c * (1 - i) / 2)
      return Rf(t);
  }
  return d = d || r, d && (s < u + c * l / 2 || s > f - c * l / 2) ? s > u + c / 2 ? 1 : -1 : 0;
}
function Rf(e) {
  return ye(w) < ye(e) ? 1 : -1;
}
function Mf(e) {
  for (var t = e.tagName + e.className + e.src + e.href + e.textContent, n = t.length, o = 0; n--; )
    o += t.charCodeAt(n);
  return o.toString(36);
}
function Lf(e) {
  jr.length = 0;
  for (var t = e.getElementsByTagName("input"), n = t.length; n--; ) {
    var o = t[n];
    o.checked && jr.push(o);
  }
}
function Ir(e) {
  return setTimeout(e, 0);
}
function Lo(e) {
  return clearTimeout(e);
}
io && Z(document, "touchmove", function(e) {
  (G.active || an) && e.cancelable && e.preventDefault();
});
G.utils = {
  on: Z,
  off: z,
  css: $,
  find: ga,
  is: function(t, n) {
    return !!ft(t, n, t, !1);
  },
  extend: mf,
  throttle: Ea,
  closest: ft,
  toggleClass: me,
  clone: di,
  index: ye,
  nextTick: Ir,
  cancelNextTick: Lo,
  detectDirection: ba,
  getChild: mn
};
G.get = function(e) {
  return e[Ue];
};
G.mount = function() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  t[0].constructor === Array && (t = t[0]), t.forEach(function(o) {
    if (!o.prototype || !o.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(o));
    o.utils && (G.utils = vt(vt({}, G.utils), o.utils)), Zn.mount(o);
  });
};
G.create = function(e, t) {
  return new G(e, t);
};
G.version = df;
var Ne = [], Mn, wo, Vo = !1, bo, To, Ur, Ln;
function wf() {
  function e() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var t in this)
      t.charAt(0) === "_" && typeof this[t] == "function" && (this[t] = this[t].bind(this));
  }
  return e.prototype = {
    dragStarted: function(n) {
      var o = n.originalEvent;
      this.sortable.nativeDraggable ? Z(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? Z(document, "pointermove", this._handleFallbackAutoScroll) : o.touches ? Z(document, "touchmove", this._handleFallbackAutoScroll) : Z(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(n) {
      var o = n.originalEvent;
      !this.options.dragOverBubble && !o.rootEl && this._handleAutoScroll(o);
    },
    drop: function() {
      this.sortable.nativeDraggable ? z(document, "dragover", this._handleAutoScroll) : (z(document, "pointermove", this._handleFallbackAutoScroll), z(document, "touchmove", this._handleFallbackAutoScroll), z(document, "mousemove", this._handleFallbackAutoScroll)), Zi(), Cr(), gf();
    },
    nulling: function() {
      Ur = wo = Mn = Vo = Ln = bo = To = null, Ne.length = 0;
    },
    _handleFallbackAutoScroll: function(n) {
      this._handleAutoScroll(n, !0);
    },
    _handleAutoScroll: function(n, o) {
      var i = this, l = (n.touches ? n.touches[0] : n).clientX, r = (n.touches ? n.touches[0] : n).clientY, a = document.elementFromPoint(l, r);
      if (Ur = n, o || this.options.forceAutoScrollFallback || Qn || Ot || Vn) {
        Oo(n, this.options, a, o);
        var s = Rt(a, !0);
        Vo && (!Ln || l !== bo || r !== To) && (Ln && Zi(), Ln = setInterval(function() {
          var c = Rt(document.elementFromPoint(l, r), !0);
          c !== s && (s = c, Cr()), Oo(n, i.options, c, o);
        }, 10), bo = l, To = r);
      } else {
        if (!this.options.bubbleScroll || Rt(a, !0) === ht()) {
          Cr();
          return;
        }
        Oo(n, this.options, Rt(a, !1), !1);
      }
    }
  }, it(e, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function Cr() {
  Ne.forEach(function(e) {
    clearInterval(e.pid);
  }), Ne = [];
}
function Zi() {
  clearInterval(Ln);
}
var Oo = Ea(function(e, t, n, o) {
  if (t.scroll) {
    var i = (e.touches ? e.touches[0] : e).clientX, l = (e.touches ? e.touches[0] : e).clientY, r = t.scrollSensitivity, a = t.scrollSpeed, s = ht(), c = !1, u;
    wo !== n && (wo = n, Cr(), Mn = t.scroll, u = t.scrollFn, Mn === !0 && (Mn = Rt(n, !0)));
    var f = 0, d = Mn;
    do {
      var p = d, h = he(p), v = h.top, m = h.bottom, g = h.left, E = h.right, N = h.width, T = h.height, I = void 0, C = void 0, F = p.scrollWidth, P = p.scrollHeight, y = $(p), D = p.scrollLeft, R = p.scrollTop;
      p === s ? (I = N < F && (y.overflowX === "auto" || y.overflowX === "scroll" || y.overflowX === "visible"), C = T < P && (y.overflowY === "auto" || y.overflowY === "scroll" || y.overflowY === "visible")) : (I = N < F && (y.overflowX === "auto" || y.overflowX === "scroll"), C = T < P && (y.overflowY === "auto" || y.overflowY === "scroll"));
      var L = I && (Math.abs(E - i) <= r && D + N < F) - (Math.abs(g - i) <= r && !!D), A = C && (Math.abs(m - l) <= r && R + T < P) - (Math.abs(v - l) <= r && !!R);
      if (!Ne[f])
        for (var x = 0; x <= f; x++)
          Ne[x] || (Ne[x] = {});
      (Ne[f].vx != L || Ne[f].vy != A || Ne[f].el !== p) && (Ne[f].el = p, Ne[f].vx = L, Ne[f].vy = A, clearInterval(Ne[f].pid), (L != 0 || A != 0) && (c = !0, Ne[f].pid = setInterval((function() {
        o && this.layer === 0 && G.active._onTouchMove(Ur);
        var j = Ne[this.layer].vy ? Ne[this.layer].vy * a : 0, V = Ne[this.layer].vx ? Ne[this.layer].vx * a : 0;
        typeof u == "function" && u.call(G.dragged.parentNode[Ue], V, j, e, Ur, Ne[this.layer].el) !== "continue" || ya(Ne[this.layer].el, V, j);
      }).bind({
        layer: f
      }), 24))), f++;
    } while (t.bubbleScroll && d !== s && (d = Rt(d, !1)));
    Vo = c;
  }
}, 30), Ia = function(t) {
  var n = t.originalEvent, o = t.putSortable, i = t.dragEl, l = t.activeSortable, r = t.dispatchSortableEvent, a = t.hideGhostForTarget, s = t.unhideGhostForTarget;
  if (n) {
    var c = o || l;
    a();
    var u = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n, f = document.elementFromPoint(u.clientX, u.clientY);
    s(), c && !c.el.contains(f) && (r("spill"), this.onSpill({
      dragEl: i,
      putSortable: o
    }));
  }
};
function pi() {
}
pi.prototype = {
  startIndex: null,
  dragStart: function(t) {
    var n = t.oldDraggableIndex;
    this.startIndex = n;
  },
  onSpill: function(t) {
    var n = t.dragEl, o = t.putSortable;
    this.sortable.captureAnimationState(), o && o.captureAnimationState();
    var i = mn(this.sortable.el, this.startIndex, this.options);
    i ? this.sortable.el.insertBefore(n, i) : this.sortable.el.appendChild(n), this.sortable.animateAll(), o && o.animateAll();
  },
  drop: Ia
};
it(pi, {
  pluginName: "revertOnSpill"
});
function hi() {
}
hi.prototype = {
  onSpill: function(t) {
    var n = t.dragEl, o = t.putSortable, i = o || this.sortable;
    i.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), i.animateAll();
  },
  drop: Ia
};
it(hi, {
  pluginName: "removeOnSpill"
});
var nt;
function Vf() {
  function e() {
    this.defaults = {
      swapClass: "sortable-swap-highlight"
    };
  }
  return e.prototype = {
    dragStart: function(n) {
      var o = n.dragEl;
      nt = o;
    },
    dragOverValid: function(n) {
      var o = n.completed, i = n.target, l = n.onMove, r = n.activeSortable, a = n.changed, s = n.cancel;
      if (r.options.swap) {
        var c = this.sortable.el, u = this.options;
        if (i && i !== c) {
          var f = nt;
          l(i) !== !1 ? (me(i, u.swapClass, !0), nt = i) : nt = null, f && f !== nt && me(f, u.swapClass, !1);
        }
        a(), o(!0), s();
      }
    },
    drop: function(n) {
      var o = n.activeSortable, i = n.putSortable, l = n.dragEl, r = i || this.sortable, a = this.options;
      nt && me(nt, a.swapClass, !1), nt && (a.swap || i && i.options.swap) && l !== nt && (r.captureAnimationState(), r !== o && o.captureAnimationState(), Ff(l, nt), r.animateAll(), r !== o && o.animateAll());
    },
    nulling: function() {
      nt = null;
    }
  }, it(e, {
    pluginName: "swap",
    eventProperties: function() {
      return {
        swapItem: nt
      };
    }
  });
}
function Ff(e, t) {
  var n = e.parentNode, o = t.parentNode, i, l;
  !n || !o || n.isEqualNode(t) || o.isEqualNode(e) || (i = ye(e), l = ye(t), n.isEqualNode(o) && i < l && l++, n.insertBefore(t, n.children[i]), o.insertBefore(e, o.children[l]));
}
var _ = [], Ze = [], In, lt, Cn = !1, Ye = !1, on = !1, le, An, ur;
function jf() {
  function e(t) {
    for (var n in this)
      n.charAt(0) === "_" && typeof this[n] == "function" && (this[n] = this[n].bind(this));
    t.options.supportPointer ? Z(document, "pointerup", this._deselectMultiDrag) : (Z(document, "mouseup", this._deselectMultiDrag), Z(document, "touchend", this._deselectMultiDrag)), Z(document, "keydown", this._checkKeyDown), Z(document, "keyup", this._checkKeyUp), this.defaults = {
      selectedClass: "sortable-selected",
      multiDragKey: null,
      setData: function(i, l) {
        var r = "";
        _.length && lt === t ? _.forEach(function(a, s) {
          r += (s ? ", " : "") + a.textContent;
        }) : r = l.textContent, i.setData("Text", r);
      }
    };
  }
  return e.prototype = {
    multiDragKeyDown: !1,
    isMultiDrag: !1,
    delayStartGlobal: function(n) {
      var o = n.dragEl;
      le = o;
    },
    delayEnded: function() {
      this.isMultiDrag = ~_.indexOf(le);
    },
    setupClone: function(n) {
      var o = n.sortable, i = n.cancel;
      if (this.isMultiDrag) {
        for (var l = 0; l < _.length; l++)
          Ze.push(di(_[l])), Ze[l].sortableIndex = _[l].sortableIndex, Ze[l].draggable = !1, Ze[l].style["will-change"] = "", me(Ze[l], this.options.selectedClass, !1), _[l] === le && me(Ze[l], this.options.chosenClass, !1);
        o._hideClone(), i();
      }
    },
    clone: function(n) {
      var o = n.sortable, i = n.rootEl, l = n.dispatchSortableEvent, r = n.cancel;
      this.isMultiDrag && (this.options.removeCloneOnHide || _.length && lt === o && (qi(!0, i), l("clone"), r()));
    },
    showClone: function(n) {
      var o = n.cloneNowShown, i = n.rootEl, l = n.cancel;
      this.isMultiDrag && (qi(!1, i), Ze.forEach(function(r) {
        $(r, "display", "");
      }), o(), ur = !1, l());
    },
    hideClone: function(n) {
      var o = this;
      n.sortable;
      var i = n.cloneNowHidden, l = n.cancel;
      this.isMultiDrag && (Ze.forEach(function(r) {
        $(r, "display", "none"), o.options.removeCloneOnHide && r.parentNode && r.parentNode.removeChild(r);
      }), i(), ur = !0, l());
    },
    dragStartGlobal: function(n) {
      n.sortable, !this.isMultiDrag && lt && lt.multiDrag._deselectMultiDrag(), _.forEach(function(o) {
        o.sortableIndex = ye(o);
      }), _ = _.sort(function(o, i) {
        return o.sortableIndex - i.sortableIndex;
      }), on = !0;
    },
    dragStarted: function(n) {
      var o = this, i = n.sortable;
      if (this.isMultiDrag) {
        if (this.options.sort && (i.captureAnimationState(), this.options.animation)) {
          _.forEach(function(r) {
            r !== le && $(r, "position", "absolute");
          });
          var l = he(le, !1, !0, !0);
          _.forEach(function(r) {
            r !== le && ki(r, l);
          }), Ye = !0, Cn = !0;
        }
        i.animateAll(function() {
          Ye = !1, Cn = !1, o.options.animation && _.forEach(function(r) {
            vo(r);
          }), o.options.sort && dr();
        });
      }
    },
    dragOver: function(n) {
      var o = n.target, i = n.completed, l = n.cancel;
      Ye && ~_.indexOf(o) && (i(!1), l());
    },
    revert: function(n) {
      var o = n.fromSortable, i = n.rootEl, l = n.sortable, r = n.dragRect;
      _.length > 1 && (_.forEach(function(a) {
        l.addAnimationState({
          target: a,
          rect: Ye ? he(a) : r
        }), vo(a), a.fromRect = r, o.removeAnimationState(a);
      }), Ye = !1, Uf(!this.options.removeCloneOnHide, i));
    },
    dragOverCompleted: function(n) {
      var o = n.sortable, i = n.isOwner, l = n.insertion, r = n.activeSortable, a = n.parentEl, s = n.putSortable, c = this.options;
      if (l) {
        if (i && r._hideClone(), Cn = !1, c.animation && _.length > 1 && (Ye || !i && !r.options.sort && !s)) {
          var u = he(le, !1, !0, !0);
          _.forEach(function(d) {
            d !== le && (ki(d, u), a.appendChild(d));
          }), Ye = !0;
        }
        if (!i)
          if (Ye || dr(), _.length > 1) {
            var f = ur;
            r._showClone(o), r.options.animation && !ur && f && Ze.forEach(function(d) {
              r.addAnimationState({
                target: d,
                rect: An
              }), d.fromRect = An, d.thisAnimationDuration = null;
            });
          } else
            r._showClone(o);
      }
    },
    dragOverAnimationCapture: function(n) {
      var o = n.dragRect, i = n.isOwner, l = n.activeSortable;
      if (_.forEach(function(a) {
        a.thisAnimationDuration = null;
      }), l.options.animation && !i && l.multiDrag.isMultiDrag) {
        An = it({}, o);
        var r = _t(le, !0);
        An.top -= r.f, An.left -= r.e;
      }
    },
    dragOverAnimationComplete: function() {
      Ye && (Ye = !1, dr());
    },
    drop: function(n) {
      var o = n.originalEvent, i = n.rootEl, l = n.parentEl, r = n.sortable, a = n.dispatchSortableEvent, s = n.oldIndex, c = n.putSortable, u = c || this.sortable;
      if (o) {
        var f = this.options, d = l.children;
        if (!on)
          if (f.multiDragKey && !this.multiDragKeyDown && this._deselectMultiDrag(), me(le, f.selectedClass, !~_.indexOf(le)), ~_.indexOf(le))
            _.splice(_.indexOf(le), 1), In = null, Pn({
              sortable: r,
              rootEl: i,
              name: "deselect",
              targetEl: le,
              originalEvt: o
            });
          else {
            if (_.push(le), Pn({
              sortable: r,
              rootEl: i,
              name: "select",
              targetEl: le,
              originalEvt: o
            }), o.shiftKey && In && r.el.contains(In)) {
              var p = ye(In), h = ye(le);
              if (~p && ~h && p !== h) {
                var v, m;
                for (h > p ? (m = p, v = h) : (m = h, v = p + 1); m < v; m++)
                  ~_.indexOf(d[m]) || (me(d[m], f.selectedClass, !0), _.push(d[m]), Pn({
                    sortable: r,
                    rootEl: i,
                    name: "select",
                    targetEl: d[m],
                    originalEvt: o
                  }));
              }
            } else
              In = le;
            lt = u;
          }
        if (on && this.isMultiDrag) {
          if (Ye = !1, (l[Ue].options.sort || l !== i) && _.length > 1) {
            var g = he(le), E = ye(le, ":not(." + this.options.selectedClass + ")");
            if (!Cn && f.animation && (le.thisAnimationDuration = null), u.captureAnimationState(), !Cn && (f.animation && (le.fromRect = g, _.forEach(function(T) {
              if (T.thisAnimationDuration = null, T !== le) {
                var I = Ye ? he(T) : g;
                T.fromRect = I, u.addAnimationState({
                  target: T,
                  rect: I
                });
              }
            })), dr(), _.forEach(function(T) {
              d[E] ? l.insertBefore(T, d[E]) : l.appendChild(T), E++;
            }), s === ye(le))) {
              var N = !1;
              _.forEach(function(T) {
                if (T.sortableIndex !== ye(T)) {
                  N = !0;
                  return;
                }
              }), N && a("update");
            }
            _.forEach(function(T) {
              vo(T);
            }), u.animateAll();
          }
          lt = u;
        }
        (i === l || c && c.lastPutMode !== "clone") && Ze.forEach(function(T) {
          T.parentNode && T.parentNode.removeChild(T);
        });
      }
    },
    nullingGlobal: function() {
      this.isMultiDrag = on = !1, Ze.length = 0;
    },
    destroyGlobal: function() {
      this._deselectMultiDrag(), z(document, "pointerup", this._deselectMultiDrag), z(document, "mouseup", this._deselectMultiDrag), z(document, "touchend", this._deselectMultiDrag), z(document, "keydown", this._checkKeyDown), z(document, "keyup", this._checkKeyUp);
    },
    _deselectMultiDrag: function(n) {
      if (!(typeof on < "u" && on) && lt === this.sortable && !(n && ft(n.target, this.options.draggable, this.sortable.el, !1)) && !(n && n.button !== 0))
        for (; _.length; ) {
          var o = _[0];
          me(o, this.options.selectedClass, !1), _.shift(), Pn({
            sortable: this.sortable,
            rootEl: this.sortable.el,
            name: "deselect",
            targetEl: o,
            originalEvt: n
          });
        }
    },
    _checkKeyDown: function(n) {
      n.key === this.options.multiDragKey && (this.multiDragKeyDown = !0);
    },
    _checkKeyUp: function(n) {
      n.key === this.options.multiDragKey && (this.multiDragKeyDown = !1);
    }
  }, it(e, {
    // Static methods & properties
    pluginName: "multiDrag",
    utils: {
      /**
       * Selects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be selected
       */
      select: function(n) {
        var o = n.parentNode[Ue];
        !o || !o.options.multiDrag || ~_.indexOf(n) || (lt && lt !== o && (lt.multiDrag._deselectMultiDrag(), lt = o), me(n, o.options.selectedClass, !0), _.push(n));
      },
      /**
       * Deselects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be deselected
       */
      deselect: function(n) {
        var o = n.parentNode[Ue], i = _.indexOf(n);
        !o || !o.options.multiDrag || !~i || (me(n, o.options.selectedClass, !1), _.splice(i, 1));
      }
    },
    eventProperties: function() {
      var n = this, o = [], i = [];
      return _.forEach(function(l) {
        o.push({
          multiDragElement: l,
          index: l.sortableIndex
        });
        var r;
        Ye && l !== le ? r = -1 : Ye ? r = ye(l, ":not(." + n.options.selectedClass + ")") : r = ye(l), i.push({
          multiDragElement: l,
          index: r
        });
      }), {
        items: af(_),
        clones: [].concat(Ze),
        oldIndicies: o,
        newIndicies: i
      };
    },
    optionListeners: {
      multiDragKey: function(n) {
        return n = n.toLowerCase(), n === "ctrl" ? n = "Control" : n.length > 1 && (n = n.charAt(0).toUpperCase() + n.substr(1)), n;
      }
    }
  });
}
function Uf(e, t) {
  _.forEach(function(n, o) {
    var i = t.children[n.sortableIndex + (e ? Number(o) : 0)];
    i ? t.insertBefore(n, i) : t.appendChild(n);
  });
}
function qi(e, t) {
  Ze.forEach(function(n, o) {
    var i = t.children[n.sortableIndex + (e ? Number(o) : 0)];
    i ? t.insertBefore(n, i) : t.appendChild(n);
  });
}
function dr() {
  _.forEach(function(e) {
    e !== le && e.parentNode && e.parentNode.removeChild(e);
  });
}
G.mount(new wf());
G.mount(hi, pi);
const $f = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MultiDrag: jf,
  Sortable: G,
  Swap: Vf,
  default: G
}, Symbol.toStringTag, { value: "Module" })), Bf = /* @__PURE__ */ Br($f);
var Xf = vr.exports, es;
function Hf() {
  return es || (es = 1, function(e, t) {
    (function(o, i) {
      e.exports = i(nf(), Bf);
    })(typeof self < "u" ? self : Xf, function(n, o) {
      return (
        /******/
        function(i) {
          var l = {};
          function r(a) {
            if (l[a])
              return l[a].exports;
            var s = l[a] = {
              /******/
              i: a,
              /******/
              l: !1,
              /******/
              exports: {}
              /******/
            };
            return i[a].call(s.exports, s, s.exports, r), s.l = !0, s.exports;
          }
          return r.m = i, r.c = l, r.d = function(a, s, c) {
            r.o(a, s) || Object.defineProperty(a, s, { enumerable: !0, get: c });
          }, r.r = function(a) {
            typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(a, "__esModule", { value: !0 });
          }, r.t = function(a, s) {
            if (s & 1 && (a = r(a)), s & 8 || s & 4 && typeof a == "object" && a && a.__esModule) return a;
            var c = /* @__PURE__ */ Object.create(null);
            if (r.r(c), Object.defineProperty(c, "default", { enumerable: !0, value: a }), s & 2 && typeof a != "string") for (var u in a) r.d(c, u, (function(f) {
              return a[f];
            }).bind(null, u));
            return c;
          }, r.n = function(a) {
            var s = a && a.__esModule ? (
              /******/
              function() {
                return a.default;
              }
            ) : (
              /******/
              function() {
                return a;
              }
            );
            return r.d(s, "a", s), s;
          }, r.o = function(a, s) {
            return Object.prototype.hasOwnProperty.call(a, s);
          }, r.p = "", r(r.s = "fb15");
        }({
          /***/
          "00ee": (
            /***/
            function(i, l, r) {
              var a = r("b622"), s = a("toStringTag"), c = {};
              c[s] = "z", i.exports = String(c) === "[object z]";
            }
          ),
          /***/
          "0366": (
            /***/
            function(i, l, r) {
              var a = r("1c0b");
              i.exports = function(s, c, u) {
                if (a(s), c === void 0) return s;
                switch (u) {
                  case 0:
                    return function() {
                      return s.call(c);
                    };
                  case 1:
                    return function(f) {
                      return s.call(c, f);
                    };
                  case 2:
                    return function(f, d) {
                      return s.call(c, f, d);
                    };
                  case 3:
                    return function(f, d, p) {
                      return s.call(c, f, d, p);
                    };
                }
                return function() {
                  return s.apply(c, arguments);
                };
              };
            }
          ),
          /***/
          "057f": (
            /***/
            function(i, l, r) {
              var a = r("fc6a"), s = r("241c").f, c = {}.toString, u = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], f = function(d) {
                try {
                  return s(d);
                } catch {
                  return u.slice();
                }
              };
              i.exports.f = function(p) {
                return u && c.call(p) == "[object Window]" ? f(p) : s(a(p));
              };
            }
          ),
          /***/
          "06cf": (
            /***/
            function(i, l, r) {
              var a = r("83ab"), s = r("d1e7"), c = r("5c6c"), u = r("fc6a"), f = r("c04e"), d = r("5135"), p = r("0cfb"), h = Object.getOwnPropertyDescriptor;
              l.f = a ? h : function(m, g) {
                if (m = u(m), g = f(g, !0), p) try {
                  return h(m, g);
                } catch {
                }
                if (d(m, g)) return c(!s.f.call(m, g), m[g]);
              };
            }
          ),
          /***/
          "0cfb": (
            /***/
            function(i, l, r) {
              var a = r("83ab"), s = r("d039"), c = r("cc12");
              i.exports = !a && !s(function() {
                return Object.defineProperty(c("div"), "a", {
                  get: function() {
                    return 7;
                  }
                }).a != 7;
              });
            }
          ),
          /***/
          "13d5": (
            /***/
            function(i, l, r) {
              var a = r("23e7"), s = r("d58f").left, c = r("a640"), u = r("ae40"), f = c("reduce"), d = u("reduce", { 1: 0 });
              a({ target: "Array", proto: !0, forced: !f || !d }, {
                reduce: function(h) {
                  return s(this, h, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
                }
              });
            }
          ),
          /***/
          "14c3": (
            /***/
            function(i, l, r) {
              var a = r("c6b6"), s = r("9263");
              i.exports = function(c, u) {
                var f = c.exec;
                if (typeof f == "function") {
                  var d = f.call(c, u);
                  if (typeof d != "object")
                    throw TypeError("RegExp exec method returned something other than an Object or null");
                  return d;
                }
                if (a(c) !== "RegExp")
                  throw TypeError("RegExp#exec called on incompatible receiver");
                return s.call(c, u);
              };
            }
          ),
          /***/
          "159b": (
            /***/
            function(i, l, r) {
              var a = r("da84"), s = r("fdbc"), c = r("17c2"), u = r("9112");
              for (var f in s) {
                var d = a[f], p = d && d.prototype;
                if (p && p.forEach !== c) try {
                  u(p, "forEach", c);
                } catch {
                  p.forEach = c;
                }
              }
            }
          ),
          /***/
          "17c2": (
            /***/
            function(i, l, r) {
              var a = r("b727").forEach, s = r("a640"), c = r("ae40"), u = s("forEach"), f = c("forEach");
              i.exports = !u || !f ? function(p) {
                return a(this, p, arguments.length > 1 ? arguments[1] : void 0);
              } : [].forEach;
            }
          ),
          /***/
          "1be4": (
            /***/
            function(i, l, r) {
              var a = r("d066");
              i.exports = a("document", "documentElement");
            }
          ),
          /***/
          "1c0b": (
            /***/
            function(i, l) {
              i.exports = function(r) {
                if (typeof r != "function")
                  throw TypeError(String(r) + " is not a function");
                return r;
              };
            }
          ),
          /***/
          "1c7e": (
            /***/
            function(i, l, r) {
              var a = r("b622"), s = a("iterator"), c = !1;
              try {
                var u = 0, f = {
                  next: function() {
                    return { done: !!u++ };
                  },
                  return: function() {
                    c = !0;
                  }
                };
                f[s] = function() {
                  return this;
                }, Array.from(f, function() {
                  throw 2;
                });
              } catch {
              }
              i.exports = function(d, p) {
                if (!p && !c) return !1;
                var h = !1;
                try {
                  var v = {};
                  v[s] = function() {
                    return {
                      next: function() {
                        return { done: h = !0 };
                      }
                    };
                  }, d(v);
                } catch {
                }
                return h;
              };
            }
          ),
          /***/
          "1d80": (
            /***/
            function(i, l) {
              i.exports = function(r) {
                if (r == null) throw TypeError("Can't call method on " + r);
                return r;
              };
            }
          ),
          /***/
          "1dde": (
            /***/
            function(i, l, r) {
              var a = r("d039"), s = r("b622"), c = r("2d00"), u = s("species");
              i.exports = function(f) {
                return c >= 51 || !a(function() {
                  var d = [], p = d.constructor = {};
                  return p[u] = function() {
                    return { foo: 1 };
                  }, d[f](Boolean).foo !== 1;
                });
              };
            }
          ),
          /***/
          "23cb": (
            /***/
            function(i, l, r) {
              var a = r("a691"), s = Math.max, c = Math.min;
              i.exports = function(u, f) {
                var d = a(u);
                return d < 0 ? s(d + f, 0) : c(d, f);
              };
            }
          ),
          /***/
          "23e7": (
            /***/
            function(i, l, r) {
              var a = r("da84"), s = r("06cf").f, c = r("9112"), u = r("6eeb"), f = r("ce4e"), d = r("e893"), p = r("94ca");
              i.exports = function(h, v) {
                var m = h.target, g = h.global, E = h.stat, N, T, I, C, F, P;
                if (g ? T = a : E ? T = a[m] || f(m, {}) : T = (a[m] || {}).prototype, T) for (I in v) {
                  if (F = v[I], h.noTargetGet ? (P = s(T, I), C = P && P.value) : C = T[I], N = p(g ? I : m + (E ? "." : "#") + I, h.forced), !N && C !== void 0) {
                    if (typeof F == typeof C) continue;
                    d(F, C);
                  }
                  (h.sham || C && C.sham) && c(F, "sham", !0), u(T, I, F, h);
                }
              };
            }
          ),
          /***/
          "241c": (
            /***/
            function(i, l, r) {
              var a = r("ca84"), s = r("7839"), c = s.concat("length", "prototype");
              l.f = Object.getOwnPropertyNames || function(f) {
                return a(f, c);
              };
            }
          ),
          /***/
          "25f0": (
            /***/
            function(i, l, r) {
              var a = r("6eeb"), s = r("825a"), c = r("d039"), u = r("ad6d"), f = "toString", d = RegExp.prototype, p = d[f], h = c(function() {
                return p.call({ source: "a", flags: "b" }) != "/a/b";
              }), v = p.name != f;
              (h || v) && a(RegExp.prototype, f, function() {
                var g = s(this), E = String(g.source), N = g.flags, T = String(N === void 0 && g instanceof RegExp && !("flags" in d) ? u.call(g) : N);
                return "/" + E + "/" + T;
              }, { unsafe: !0 });
            }
          ),
          /***/
          "2ca0": (
            /***/
            function(i, l, r) {
              var a = r("23e7"), s = r("06cf").f, c = r("50c4"), u = r("5a34"), f = r("1d80"), d = r("ab13"), p = r("c430"), h = "".startsWith, v = Math.min, m = d("startsWith"), g = !p && !m && !!function() {
                var E = s(String.prototype, "startsWith");
                return E && !E.writable;
              }();
              a({ target: "String", proto: !0, forced: !g && !m }, {
                startsWith: function(N) {
                  var T = String(f(this));
                  u(N);
                  var I = c(v(arguments.length > 1 ? arguments[1] : void 0, T.length)), C = String(N);
                  return h ? h.call(T, C, I) : T.slice(I, I + C.length) === C;
                }
              });
            }
          ),
          /***/
          "2d00": (
            /***/
            function(i, l, r) {
              var a = r("da84"), s = r("342f"), c = a.process, u = c && c.versions, f = u && u.v8, d, p;
              f ? (d = f.split("."), p = d[0] + d[1]) : s && (d = s.match(/Edge\/(\d+)/), (!d || d[1] >= 74) && (d = s.match(/Chrome\/(\d+)/), d && (p = d[1]))), i.exports = p && +p;
            }
          ),
          /***/
          "342f": (
            /***/
            function(i, l, r) {
              var a = r("d066");
              i.exports = a("navigator", "userAgent") || "";
            }
          ),
          /***/
          "35a1": (
            /***/
            function(i, l, r) {
              var a = r("f5df"), s = r("3f8c"), c = r("b622"), u = c("iterator");
              i.exports = function(f) {
                if (f != null) return f[u] || f["@@iterator"] || s[a(f)];
              };
            }
          ),
          /***/
          "37e8": (
            /***/
            function(i, l, r) {
              var a = r("83ab"), s = r("9bf2"), c = r("825a"), u = r("df75");
              i.exports = a ? Object.defineProperties : function(d, p) {
                c(d);
                for (var h = u(p), v = h.length, m = 0, g; v > m; ) s.f(d, g = h[m++], p[g]);
                return d;
              };
            }
          ),
          /***/
          "3bbe": (
            /***/
            function(i, l, r) {
              var a = r("861d");
              i.exports = function(s) {
                if (!a(s) && s !== null)
                  throw TypeError("Can't set " + String(s) + " as a prototype");
                return s;
              };
            }
          ),
          /***/
          "3ca3": (
            /***/
            function(i, l, r) {
              var a = r("6547").charAt, s = r("69f3"), c = r("7dd0"), u = "String Iterator", f = s.set, d = s.getterFor(u);
              c(String, "String", function(p) {
                f(this, {
                  type: u,
                  string: String(p),
                  index: 0
                });
              }, function() {
                var h = d(this), v = h.string, m = h.index, g;
                return m >= v.length ? { value: void 0, done: !0 } : (g = a(v, m), h.index += g.length, { value: g, done: !1 });
              });
            }
          ),
          /***/
          "3f8c": (
            /***/
            function(i, l) {
              i.exports = {};
            }
          ),
          /***/
          4160: (
            /***/
            function(i, l, r) {
              var a = r("23e7"), s = r("17c2");
              a({ target: "Array", proto: !0, forced: [].forEach != s }, {
                forEach: s
              });
            }
          ),
          /***/
          "428f": (
            /***/
            function(i, l, r) {
              var a = r("da84");
              i.exports = a;
            }
          ),
          /***/
          "44ad": (
            /***/
            function(i, l, r) {
              var a = r("d039"), s = r("c6b6"), c = "".split;
              i.exports = a(function() {
                return !Object("z").propertyIsEnumerable(0);
              }) ? function(u) {
                return s(u) == "String" ? c.call(u, "") : Object(u);
              } : Object;
            }
          ),
          /***/
          "44d2": (
            /***/
            function(i, l, r) {
              var a = r("b622"), s = r("7c73"), c = r("9bf2"), u = a("unscopables"), f = Array.prototype;
              f[u] == null && c.f(f, u, {
                configurable: !0,
                value: s(null)
              }), i.exports = function(d) {
                f[u][d] = !0;
              };
            }
          ),
          /***/
          "44e7": (
            /***/
            function(i, l, r) {
              var a = r("861d"), s = r("c6b6"), c = r("b622"), u = c("match");
              i.exports = function(f) {
                var d;
                return a(f) && ((d = f[u]) !== void 0 ? !!d : s(f) == "RegExp");
              };
            }
          ),
          /***/
          4930: (
            /***/
            function(i, l, r) {
              var a = r("d039");
              i.exports = !!Object.getOwnPropertySymbols && !a(function() {
                return !String(Symbol());
              });
            }
          ),
          /***/
          "4d64": (
            /***/
            function(i, l, r) {
              var a = r("fc6a"), s = r("50c4"), c = r("23cb"), u = function(f) {
                return function(d, p, h) {
                  var v = a(d), m = s(v.length), g = c(h, m), E;
                  if (f && p != p) {
                    for (; m > g; )
                      if (E = v[g++], E != E) return !0;
                  } else for (; m > g; g++)
                    if ((f || g in v) && v[g] === p) return f || g || 0;
                  return !f && -1;
                };
              };
              i.exports = {
                // `Array.prototype.includes` method
                // https://tc39.github.io/ecma262/#sec-array.prototype.includes
                includes: u(!0),
                // `Array.prototype.indexOf` method
                // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
                indexOf: u(!1)
              };
            }
          ),
          /***/
          "4de4": (
            /***/
            function(i, l, r) {
              var a = r("23e7"), s = r("b727").filter, c = r("1dde"), u = r("ae40"), f = c("filter"), d = u("filter");
              a({ target: "Array", proto: !0, forced: !f || !d }, {
                filter: function(h) {
                  return s(this, h, arguments.length > 1 ? arguments[1] : void 0);
                }
              });
            }
          ),
          /***/
          "4df4": (
            /***/
            function(i, l, r) {
              var a = r("0366"), s = r("7b0b"), c = r("9bdd"), u = r("e95a"), f = r("50c4"), d = r("8418"), p = r("35a1");
              i.exports = function(v) {
                var m = s(v), g = typeof this == "function" ? this : Array, E = arguments.length, N = E > 1 ? arguments[1] : void 0, T = N !== void 0, I = p(m), C = 0, F, P, y, D, R, L;
                if (T && (N = a(N, E > 2 ? arguments[2] : void 0, 2)), I != null && !(g == Array && u(I)))
                  for (D = I.call(m), R = D.next, P = new g(); !(y = R.call(D)).done; C++)
                    L = T ? c(D, N, [y.value, C], !0) : y.value, d(P, C, L);
                else
                  for (F = f(m.length), P = new g(F); F > C; C++)
                    L = T ? N(m[C], C) : m[C], d(P, C, L);
                return P.length = C, P;
              };
            }
          ),
          /***/
          "4fad": (
            /***/
            function(i, l, r) {
              var a = r("23e7"), s = r("6f53").entries;
              a({ target: "Object", stat: !0 }, {
                entries: function(u) {
                  return s(u);
                }
              });
            }
          ),
          /***/
          "50c4": (
            /***/
            function(i, l, r) {
              var a = r("a691"), s = Math.min;
              i.exports = function(c) {
                return c > 0 ? s(a(c), 9007199254740991) : 0;
              };
            }
          ),
          /***/
          5135: (
            /***/
            function(i, l) {
              var r = {}.hasOwnProperty;
              i.exports = function(a, s) {
                return r.call(a, s);
              };
            }
          ),
          /***/
          5319: (
            /***/
            function(i, l, r) {
              var a = r("d784"), s = r("825a"), c = r("7b0b"), u = r("50c4"), f = r("a691"), d = r("1d80"), p = r("8aa5"), h = r("14c3"), v = Math.max, m = Math.min, g = Math.floor, E = /\$([$&'`]|\d\d?|<[^>]*>)/g, N = /\$([$&'`]|\d\d?)/g, T = function(I) {
                return I === void 0 ? I : String(I);
              };
              a("replace", 2, function(I, C, F, P) {
                var y = P.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE, D = P.REPLACE_KEEPS_$0, R = y ? "$" : "$0";
                return [
                  // `String.prototype.replace` method
                  // https://tc39.github.io/ecma262/#sec-string.prototype.replace
                  function(x, j) {
                    var V = d(this), B = x == null ? void 0 : x[I];
                    return B !== void 0 ? B.call(x, V, j) : C.call(String(V), x, j);
                  },
                  // `RegExp.prototype[@@replace]` method
                  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
                  function(A, x) {
                    if (!y && D || typeof x == "string" && x.indexOf(R) === -1) {
                      var j = F(C, A, this, x);
                      if (j.done) return j.value;
                    }
                    var V = s(A), B = String(this), Q = typeof x == "function";
                    Q || (x = String(x));
                    var ae = V.global;
                    if (ae) {
                      var fe = V.unicode;
                      V.lastIndex = 0;
                    }
                    for (var ie = []; ; ) {
                      var se = h(V, B);
                      if (se === null || (ie.push(se), !ae)) break;
                      var Ae = String(se[0]);
                      Ae === "" && (V.lastIndex = p(B, u(V.lastIndex), fe));
                    }
                    for (var xe = "", Oe = 0, ue = 0; ue < ie.length; ue++) {
                      se = ie[ue];
                      for (var ve = String(se[0]), Qe = v(m(f(se.index), B.length), 0), Be = [], Nt = 1; Nt < se.length; Nt++) Be.push(T(se[Nt]));
                      var Ft = se.groups;
                      if (Q) {
                        var It = [ve].concat(Be, Qe, B);
                        Ft !== void 0 && It.push(Ft);
                        var Pe = String(x.apply(void 0, It));
                      } else
                        Pe = L(ve, B, Qe, Be, Ft, x);
                      Qe >= Oe && (xe += B.slice(Oe, Qe) + Pe, Oe = Qe + ve.length);
                    }
                    return xe + B.slice(Oe);
                  }
                ];
                function L(A, x, j, V, B, Q) {
                  var ae = j + A.length, fe = V.length, ie = N;
                  return B !== void 0 && (B = c(B), ie = E), C.call(Q, ie, function(se, Ae) {
                    var xe;
                    switch (Ae.charAt(0)) {
                      case "$":
                        return "$";
                      case "&":
                        return A;
                      case "`":
                        return x.slice(0, j);
                      case "'":
                        return x.slice(ae);
                      case "<":
                        xe = B[Ae.slice(1, -1)];
                        break;
                      default:
                        var Oe = +Ae;
                        if (Oe === 0) return se;
                        if (Oe > fe) {
                          var ue = g(Oe / 10);
                          return ue === 0 ? se : ue <= fe ? V[ue - 1] === void 0 ? Ae.charAt(1) : V[ue - 1] + Ae.charAt(1) : se;
                        }
                        xe = V[Oe - 1];
                    }
                    return xe === void 0 ? "" : xe;
                  });
                }
              });
            }
          ),
          /***/
          5692: (
            /***/
            function(i, l, r) {
              var a = r("c430"), s = r("c6cd");
              (i.exports = function(c, u) {
                return s[c] || (s[c] = u !== void 0 ? u : {});
              })("versions", []).push({
                version: "3.6.5",
                mode: a ? "pure" : "global",
                copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
              });
            }
          ),
          /***/
          "56ef": (
            /***/
            function(i, l, r) {
              var a = r("d066"), s = r("241c"), c = r("7418"), u = r("825a");
              i.exports = a("Reflect", "ownKeys") || function(d) {
                var p = s.f(u(d)), h = c.f;
                return h ? p.concat(h(d)) : p;
              };
            }
          ),
          /***/
          "5a34": (
            /***/
            function(i, l, r) {
              var a = r("44e7");
              i.exports = function(s) {
                if (a(s))
                  throw TypeError("The method doesn't accept regular expressions");
                return s;
              };
            }
          ),
          /***/
          "5c6c": (
            /***/
            function(i, l) {
              i.exports = function(r, a) {
                return {
                  enumerable: !(r & 1),
                  configurable: !(r & 2),
                  writable: !(r & 4),
                  value: a
                };
              };
            }
          ),
          /***/
          "5db7": (
            /***/
            function(i, l, r) {
              var a = r("23e7"), s = r("a2bf"), c = r("7b0b"), u = r("50c4"), f = r("1c0b"), d = r("65f0");
              a({ target: "Array", proto: !0 }, {
                flatMap: function(h) {
                  var v = c(this), m = u(v.length), g;
                  return f(h), g = d(v, 0), g.length = s(g, v, v, m, 0, 1, h, arguments.length > 1 ? arguments[1] : void 0), g;
                }
              });
            }
          ),
          /***/
          6547: (
            /***/
            function(i, l, r) {
              var a = r("a691"), s = r("1d80"), c = function(u) {
                return function(f, d) {
                  var p = String(s(f)), h = a(d), v = p.length, m, g;
                  return h < 0 || h >= v ? u ? "" : void 0 : (m = p.charCodeAt(h), m < 55296 || m > 56319 || h + 1 === v || (g = p.charCodeAt(h + 1)) < 56320 || g > 57343 ? u ? p.charAt(h) : m : u ? p.slice(h, h + 2) : (m - 55296 << 10) + (g - 56320) + 65536);
                };
              };
              i.exports = {
                // `String.prototype.codePointAt` method
                // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
                codeAt: c(!1),
                // `String.prototype.at` method
                // https://github.com/mathiasbynens/String.prototype.at
                charAt: c(!0)
              };
            }
          ),
          /***/
          "65f0": (
            /***/
            function(i, l, r) {
              var a = r("861d"), s = r("e8b5"), c = r("b622"), u = c("species");
              i.exports = function(f, d) {
                var p;
                return s(f) && (p = f.constructor, typeof p == "function" && (p === Array || s(p.prototype)) ? p = void 0 : a(p) && (p = p[u], p === null && (p = void 0))), new (p === void 0 ? Array : p)(d === 0 ? 0 : d);
              };
            }
          ),
          /***/
          "69f3": (
            /***/
            function(i, l, r) {
              var a = r("7f9a"), s = r("da84"), c = r("861d"), u = r("9112"), f = r("5135"), d = r("f772"), p = r("d012"), h = s.WeakMap, v, m, g, E = function(y) {
                return g(y) ? m(y) : v(y, {});
              }, N = function(y) {
                return function(D) {
                  var R;
                  if (!c(D) || (R = m(D)).type !== y)
                    throw TypeError("Incompatible receiver, " + y + " required");
                  return R;
                };
              };
              if (a) {
                var T = new h(), I = T.get, C = T.has, F = T.set;
                v = function(y, D) {
                  return F.call(T, y, D), D;
                }, m = function(y) {
                  return I.call(T, y) || {};
                }, g = function(y) {
                  return C.call(T, y);
                };
              } else {
                var P = d("state");
                p[P] = !0, v = function(y, D) {
                  return u(y, P, D), D;
                }, m = function(y) {
                  return f(y, P) ? y[P] : {};
                }, g = function(y) {
                  return f(y, P);
                };
              }
              i.exports = {
                set: v,
                get: m,
                has: g,
                enforce: E,
                getterFor: N
              };
            }
          ),
          /***/
          "6eeb": (
            /***/
            function(i, l, r) {
              var a = r("da84"), s = r("9112"), c = r("5135"), u = r("ce4e"), f = r("8925"), d = r("69f3"), p = d.get, h = d.enforce, v = String(String).split("String");
              (i.exports = function(m, g, E, N) {
                var T = N ? !!N.unsafe : !1, I = N ? !!N.enumerable : !1, C = N ? !!N.noTargetGet : !1;
                if (typeof E == "function" && (typeof g == "string" && !c(E, "name") && s(E, "name", g), h(E).source = v.join(typeof g == "string" ? g : "")), m === a) {
                  I ? m[g] = E : u(g, E);
                  return;
                } else T ? !C && m[g] && (I = !0) : delete m[g];
                I ? m[g] = E : s(m, g, E);
              })(Function.prototype, "toString", function() {
                return typeof this == "function" && p(this).source || f(this);
              });
            }
          ),
          /***/
          "6f53": (
            /***/
            function(i, l, r) {
              var a = r("83ab"), s = r("df75"), c = r("fc6a"), u = r("d1e7").f, f = function(d) {
                return function(p) {
                  for (var h = c(p), v = s(h), m = v.length, g = 0, E = [], N; m > g; )
                    N = v[g++], (!a || u.call(h, N)) && E.push(d ? [N, h[N]] : h[N]);
                  return E;
                };
              };
              i.exports = {
                // `Object.entries` method
                // https://tc39.github.io/ecma262/#sec-object.entries
                entries: f(!0),
                // `Object.values` method
                // https://tc39.github.io/ecma262/#sec-object.values
                values: f(!1)
              };
            }
          ),
          /***/
          "73d9": (
            /***/
            function(i, l, r) {
              var a = r("44d2");
              a("flatMap");
            }
          ),
          /***/
          7418: (
            /***/
            function(i, l) {
              l.f = Object.getOwnPropertySymbols;
            }
          ),
          /***/
          "746f": (
            /***/
            function(i, l, r) {
              var a = r("428f"), s = r("5135"), c = r("e538"), u = r("9bf2").f;
              i.exports = function(f) {
                var d = a.Symbol || (a.Symbol = {});
                s(d, f) || u(d, f, {
                  value: c.f(f)
                });
              };
            }
          ),
          /***/
          7839: (
            /***/
            function(i, l) {
              i.exports = [
                "constructor",
                "hasOwnProperty",
                "isPrototypeOf",
                "propertyIsEnumerable",
                "toLocaleString",
                "toString",
                "valueOf"
              ];
            }
          ),
          /***/
          "7b0b": (
            /***/
            function(i, l, r) {
              var a = r("1d80");
              i.exports = function(s) {
                return Object(a(s));
              };
            }
          ),
          /***/
          "7c73": (
            /***/
            function(i, l, r) {
              var a = r("825a"), s = r("37e8"), c = r("7839"), u = r("d012"), f = r("1be4"), d = r("cc12"), p = r("f772"), h = ">", v = "<", m = "prototype", g = "script", E = p("IE_PROTO"), N = function() {
              }, T = function(y) {
                return v + g + h + y + v + "/" + g + h;
              }, I = function(y) {
                y.write(T("")), y.close();
                var D = y.parentWindow.Object;
                return y = null, D;
              }, C = function() {
                var y = d("iframe"), D = "java" + g + ":", R;
                return y.style.display = "none", f.appendChild(y), y.src = String(D), R = y.contentWindow.document, R.open(), R.write(T("document.F=Object")), R.close(), R.F;
              }, F, P = function() {
                try {
                  F = document.domain && new ActiveXObject("htmlfile");
                } catch {
                }
                P = F ? I(F) : C();
                for (var y = c.length; y--; ) delete P[m][c[y]];
                return P();
              };
              u[E] = !0, i.exports = Object.create || function(D, R) {
                var L;
                return D !== null ? (N[m] = a(D), L = new N(), N[m] = null, L[E] = D) : L = P(), R === void 0 ? L : s(L, R);
              };
            }
          ),
          /***/
          "7dd0": (
            /***/
            function(i, l, r) {
              var a = r("23e7"), s = r("9ed3"), c = r("e163"), u = r("d2bb"), f = r("d44e"), d = r("9112"), p = r("6eeb"), h = r("b622"), v = r("c430"), m = r("3f8c"), g = r("ae93"), E = g.IteratorPrototype, N = g.BUGGY_SAFARI_ITERATORS, T = h("iterator"), I = "keys", C = "values", F = "entries", P = function() {
                return this;
              };
              i.exports = function(y, D, R, L, A, x, j) {
                s(R, D, L);
                var V = function(ue) {
                  if (ue === A && ie) return ie;
                  if (!N && ue in ae) return ae[ue];
                  switch (ue) {
                    case I:
                      return function() {
                        return new R(this, ue);
                      };
                    case C:
                      return function() {
                        return new R(this, ue);
                      };
                    case F:
                      return function() {
                        return new R(this, ue);
                      };
                  }
                  return function() {
                    return new R(this);
                  };
                }, B = D + " Iterator", Q = !1, ae = y.prototype, fe = ae[T] || ae["@@iterator"] || A && ae[A], ie = !N && fe || V(A), se = D == "Array" && ae.entries || fe, Ae, xe, Oe;
                if (se && (Ae = c(se.call(new y())), E !== Object.prototype && Ae.next && (!v && c(Ae) !== E && (u ? u(Ae, E) : typeof Ae[T] != "function" && d(Ae, T, P)), f(Ae, B, !0, !0), v && (m[B] = P))), A == C && fe && fe.name !== C && (Q = !0, ie = function() {
                  return fe.call(this);
                }), (!v || j) && ae[T] !== ie && d(ae, T, ie), m[D] = ie, A)
                  if (xe = {
                    values: V(C),
                    keys: x ? ie : V(I),
                    entries: V(F)
                  }, j) for (Oe in xe)
                    (N || Q || !(Oe in ae)) && p(ae, Oe, xe[Oe]);
                  else a({ target: D, proto: !0, forced: N || Q }, xe);
                return xe;
              };
            }
          ),
          /***/
          "7f9a": (
            /***/
            function(i, l, r) {
              var a = r("da84"), s = r("8925"), c = a.WeakMap;
              i.exports = typeof c == "function" && /native code/.test(s(c));
            }
          ),
          /***/
          "825a": (
            /***/
            function(i, l, r) {
              var a = r("861d");
              i.exports = function(s) {
                if (!a(s))
                  throw TypeError(String(s) + " is not an object");
                return s;
              };
            }
          ),
          /***/
          "83ab": (
            /***/
            function(i, l, r) {
              var a = r("d039");
              i.exports = !a(function() {
                return Object.defineProperty({}, 1, { get: function() {
                  return 7;
                } })[1] != 7;
              });
            }
          ),
          /***/
          8418: (
            /***/
            function(i, l, r) {
              var a = r("c04e"), s = r("9bf2"), c = r("5c6c");
              i.exports = function(u, f, d) {
                var p = a(f);
                p in u ? s.f(u, p, c(0, d)) : u[p] = d;
              };
            }
          ),
          /***/
          "861d": (
            /***/
            function(i, l) {
              i.exports = function(r) {
                return typeof r == "object" ? r !== null : typeof r == "function";
              };
            }
          ),
          /***/
          8875: (
            /***/
            function(i, l, r) {
              var a, s, c;
              (function(u, f) {
                s = [], a = f, c = typeof a == "function" ? a.apply(l, s) : a, c !== void 0 && (i.exports = c);
              })(typeof self < "u" ? self : this, function() {
                function u() {
                  var f = Object.getOwnPropertyDescriptor(document, "currentScript");
                  if (!f && "currentScript" in document && document.currentScript || f && f.get !== u && document.currentScript)
                    return document.currentScript;
                  try {
                    throw new Error();
                  } catch (F) {
                    var d = /.*at [^(]*\((.*):(.+):(.+)\)$/ig, p = /@([^@]*):(\d+):(\d+)\s*$/ig, h = d.exec(F.stack) || p.exec(F.stack), v = h && h[1] || !1, m = h && h[2] || !1, g = document.location.href.replace(document.location.hash, ""), E, N, T, I = document.getElementsByTagName("script");
                    v === g && (E = document.documentElement.outerHTML, N = new RegExp("(?:[^\\n]+?\\n){0," + (m - 2) + "}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*", "i"), T = E.replace(N, "$1").trim());
                    for (var C = 0; C < I.length; C++)
                      if (I[C].readyState === "interactive" || I[C].src === v || v === g && I[C].innerHTML && I[C].innerHTML.trim() === T)
                        return I[C];
                    return null;
                  }
                }
                return u;
              });
            }
          ),
          /***/
          8925: (
            /***/
            function(i, l, r) {
              var a = r("c6cd"), s = Function.toString;
              typeof a.inspectSource != "function" && (a.inspectSource = function(c) {
                return s.call(c);
              }), i.exports = a.inspectSource;
            }
          ),
          /***/
          "8aa5": (
            /***/
            function(i, l, r) {
              var a = r("6547").charAt;
              i.exports = function(s, c, u) {
                return c + (u ? a(s, c).length : 1);
              };
            }
          ),
          /***/
          "8bbf": (
            /***/
            function(i, l) {
              i.exports = n;
            }
          ),
          /***/
          "90e3": (
            /***/
            function(i, l) {
              var r = 0, a = Math.random();
              i.exports = function(s) {
                return "Symbol(" + String(s === void 0 ? "" : s) + ")_" + (++r + a).toString(36);
              };
            }
          ),
          /***/
          9112: (
            /***/
            function(i, l, r) {
              var a = r("83ab"), s = r("9bf2"), c = r("5c6c");
              i.exports = a ? function(u, f, d) {
                return s.f(u, f, c(1, d));
              } : function(u, f, d) {
                return u[f] = d, u;
              };
            }
          ),
          /***/
          9263: (
            /***/
            function(i, l, r) {
              var a = r("ad6d"), s = r("9f7f"), c = RegExp.prototype.exec, u = String.prototype.replace, f = c, d = function() {
                var m = /a/, g = /b*/g;
                return c.call(m, "a"), c.call(g, "a"), m.lastIndex !== 0 || g.lastIndex !== 0;
              }(), p = s.UNSUPPORTED_Y || s.BROKEN_CARET, h = /()??/.exec("")[1] !== void 0, v = d || h || p;
              v && (f = function(g) {
                var E = this, N, T, I, C, F = p && E.sticky, P = a.call(E), y = E.source, D = 0, R = g;
                return F && (P = P.replace("y", ""), P.indexOf("g") === -1 && (P += "g"), R = String(g).slice(E.lastIndex), E.lastIndex > 0 && (!E.multiline || E.multiline && g[E.lastIndex - 1] !== `
`) && (y = "(?: " + y + ")", R = " " + R, D++), T = new RegExp("^(?:" + y + ")", P)), h && (T = new RegExp("^" + y + "$(?!\\s)", P)), d && (N = E.lastIndex), I = c.call(F ? T : E, R), F ? I ? (I.input = I.input.slice(D), I[0] = I[0].slice(D), I.index = E.lastIndex, E.lastIndex += I[0].length) : E.lastIndex = 0 : d && I && (E.lastIndex = E.global ? I.index + I[0].length : N), h && I && I.length > 1 && u.call(I[0], T, function() {
                  for (C = 1; C < arguments.length - 2; C++)
                    arguments[C] === void 0 && (I[C] = void 0);
                }), I;
              }), i.exports = f;
            }
          ),
          /***/
          "94ca": (
            /***/
            function(i, l, r) {
              var a = r("d039"), s = /#|\.prototype\./, c = function(h, v) {
                var m = f[u(h)];
                return m == p ? !0 : m == d ? !1 : typeof v == "function" ? a(v) : !!v;
              }, u = c.normalize = function(h) {
                return String(h).replace(s, ".").toLowerCase();
              }, f = c.data = {}, d = c.NATIVE = "N", p = c.POLYFILL = "P";
              i.exports = c;
            }
          ),
          /***/
          "99af": (
            /***/
            function(i, l, r) {
              var a = r("23e7"), s = r("d039"), c = r("e8b5"), u = r("861d"), f = r("7b0b"), d = r("50c4"), p = r("8418"), h = r("65f0"), v = r("1dde"), m = r("b622"), g = r("2d00"), E = m("isConcatSpreadable"), N = 9007199254740991, T = "Maximum allowed index exceeded", I = g >= 51 || !s(function() {
                var y = [];
                return y[E] = !1, y.concat()[0] !== y;
              }), C = v("concat"), F = function(y) {
                if (!u(y)) return !1;
                var D = y[E];
                return D !== void 0 ? !!D : c(y);
              }, P = !I || !C;
              a({ target: "Array", proto: !0, forced: P }, {
                concat: function(D) {
                  var R = f(this), L = h(R, 0), A = 0, x, j, V, B, Q;
                  for (x = -1, V = arguments.length; x < V; x++)
                    if (Q = x === -1 ? R : arguments[x], F(Q)) {
                      if (B = d(Q.length), A + B > N) throw TypeError(T);
                      for (j = 0; j < B; j++, A++) j in Q && p(L, A, Q[j]);
                    } else {
                      if (A >= N) throw TypeError(T);
                      p(L, A++, Q);
                    }
                  return L.length = A, L;
                }
              });
            }
          ),
          /***/
          "9bdd": (
            /***/
            function(i, l, r) {
              var a = r("825a");
              i.exports = function(s, c, u, f) {
                try {
                  return f ? c(a(u)[0], u[1]) : c(u);
                } catch (p) {
                  var d = s.return;
                  throw d !== void 0 && a(d.call(s)), p;
                }
              };
            }
          ),
          /***/
          "9bf2": (
            /***/
            function(i, l, r) {
              var a = r("83ab"), s = r("0cfb"), c = r("825a"), u = r("c04e"), f = Object.defineProperty;
              l.f = a ? f : function(p, h, v) {
                if (c(p), h = u(h, !0), c(v), s) try {
                  return f(p, h, v);
                } catch {
                }
                if ("get" in v || "set" in v) throw TypeError("Accessors not supported");
                return "value" in v && (p[h] = v.value), p;
              };
            }
          ),
          /***/
          "9ed3": (
            /***/
            function(i, l, r) {
              var a = r("ae93").IteratorPrototype, s = r("7c73"), c = r("5c6c"), u = r("d44e"), f = r("3f8c"), d = function() {
                return this;
              };
              i.exports = function(p, h, v) {
                var m = h + " Iterator";
                return p.prototype = s(a, { next: c(1, v) }), u(p, m, !1, !0), f[m] = d, p;
              };
            }
          ),
          /***/
          "9f7f": (
            /***/
            function(i, l, r) {
              var a = r("d039");
              function s(c, u) {
                return RegExp(c, u);
              }
              l.UNSUPPORTED_Y = a(function() {
                var c = s("a", "y");
                return c.lastIndex = 2, c.exec("abcd") != null;
              }), l.BROKEN_CARET = a(function() {
                var c = s("^r", "gy");
                return c.lastIndex = 2, c.exec("str") != null;
              });
            }
          ),
          /***/
          a2bf: (
            /***/
            function(i, l, r) {
              var a = r("e8b5"), s = r("50c4"), c = r("0366"), u = function(f, d, p, h, v, m, g, E) {
                for (var N = v, T = 0, I = g ? c(g, E, 3) : !1, C; T < h; ) {
                  if (T in p) {
                    if (C = I ? I(p[T], T, d) : p[T], m > 0 && a(C))
                      N = u(f, d, C, s(C.length), N, m - 1) - 1;
                    else {
                      if (N >= 9007199254740991) throw TypeError("Exceed the acceptable array length");
                      f[N] = C;
                    }
                    N++;
                  }
                  T++;
                }
                return N;
              };
              i.exports = u;
            }
          ),
          /***/
          a352: (
            /***/
            function(i, l) {
              i.exports = o;
            }
          ),
          /***/
          a434: (
            /***/
            function(i, l, r) {
              var a = r("23e7"), s = r("23cb"), c = r("a691"), u = r("50c4"), f = r("7b0b"), d = r("65f0"), p = r("8418"), h = r("1dde"), v = r("ae40"), m = h("splice"), g = v("splice", { ACCESSORS: !0, 0: 0, 1: 2 }), E = Math.max, N = Math.min, T = 9007199254740991, I = "Maximum allowed length exceeded";
              a({ target: "Array", proto: !0, forced: !m || !g }, {
                splice: function(F, P) {
                  var y = f(this), D = u(y.length), R = s(F, D), L = arguments.length, A, x, j, V, B, Q;
                  if (L === 0 ? A = x = 0 : L === 1 ? (A = 0, x = D - R) : (A = L - 2, x = N(E(c(P), 0), D - R)), D + A - x > T)
                    throw TypeError(I);
                  for (j = d(y, x), V = 0; V < x; V++)
                    B = R + V, B in y && p(j, V, y[B]);
                  if (j.length = x, A < x) {
                    for (V = R; V < D - x; V++)
                      B = V + x, Q = V + A, B in y ? y[Q] = y[B] : delete y[Q];
                    for (V = D; V > D - x + A; V--) delete y[V - 1];
                  } else if (A > x)
                    for (V = D - x; V > R; V--)
                      B = V + x - 1, Q = V + A - 1, B in y ? y[Q] = y[B] : delete y[Q];
                  for (V = 0; V < A; V++)
                    y[V + R] = arguments[V + 2];
                  return y.length = D - x + A, j;
                }
              });
            }
          ),
          /***/
          a4d3: (
            /***/
            function(i, l, r) {
              var a = r("23e7"), s = r("da84"), c = r("d066"), u = r("c430"), f = r("83ab"), d = r("4930"), p = r("fdbf"), h = r("d039"), v = r("5135"), m = r("e8b5"), g = r("861d"), E = r("825a"), N = r("7b0b"), T = r("fc6a"), I = r("c04e"), C = r("5c6c"), F = r("7c73"), P = r("df75"), y = r("241c"), D = r("057f"), R = r("7418"), L = r("06cf"), A = r("9bf2"), x = r("d1e7"), j = r("9112"), V = r("6eeb"), B = r("5692"), Q = r("f772"), ae = r("d012"), fe = r("90e3"), ie = r("b622"), se = r("e538"), Ae = r("746f"), xe = r("d44e"), Oe = r("69f3"), ue = r("b727").forEach, ve = Q("hidden"), Qe = "Symbol", Be = "prototype", Nt = ie("toPrimitive"), Ft = Oe.set, It = Oe.getterFor(Qe), Pe = Object[Be], Re = s.Symbol, jt = c("JSON", "stringify"), ut = L.f, dt = A.f, qn = D.f, so = x.f, st = B("symbols"), Ct = B("op-symbols"), Zt = B("string-to-symbol-registry"), yn = B("symbol-to-string-registry"), Sn = B("wks"), bn = s.QObject, Tn = !bn || !bn[Be] || !bn[Be].findChild, On = f && h(function() {
                return F(dt({}, "a", {
                  get: function() {
                    return dt(this, "a", { value: 7 }).a;
                  }
                })).a != 7;
              }) ? function(W, X, H) {
                var q = ut(Pe, X);
                q && delete Pe[X], dt(W, X, H), q && W !== Pe && dt(Pe, X, q);
              } : dt, Nn = function(W, X) {
                var H = st[W] = F(Re[Be]);
                return Ft(H, {
                  type: Qe,
                  tag: W,
                  description: X
                }), f || (H.description = X), H;
              }, b = p ? function(W) {
                return typeof W == "symbol";
              } : function(W) {
                return Object(W) instanceof Re;
              }, S = function(X, H, q) {
                X === Pe && S(Ct, H, q), E(X);
                var ne = I(H, !0);
                return E(q), v(st, ne) ? (q.enumerable ? (v(X, ve) && X[ve][ne] && (X[ve][ne] = !1), q = F(q, { enumerable: C(0, !1) })) : (v(X, ve) || dt(X, ve, C(1, {})), X[ve][ne] = !0), On(X, ne, q)) : dt(X, ne, q);
              }, O = function(X, H) {
                E(X);
                var q = T(H), ne = P(q).concat(re(q));
                return ue(ne, function(Ke) {
                  (!f || U.call(q, Ke)) && S(X, Ke, q[Ke]);
                }), X;
              }, M = function(X, H) {
                return H === void 0 ? F(X) : O(F(X), H);
              }, U = function(X) {
                var H = I(X, !0), q = so.call(this, H);
                return this === Pe && v(st, H) && !v(Ct, H) ? !1 : q || !v(this, H) || !v(st, H) || v(this, ve) && this[ve][H] ? q : !0;
              }, K = function(X, H) {
                var q = T(X), ne = I(H, !0);
                if (!(q === Pe && v(st, ne) && !v(Ct, ne))) {
                  var Ke = ut(q, ne);
                  return Ke && v(st, ne) && !(v(q, ve) && q[ve][ne]) && (Ke.enumerable = !0), Ke;
                }
              }, J = function(X) {
                var H = qn(T(X)), q = [];
                return ue(H, function(ne) {
                  !v(st, ne) && !v(ae, ne) && q.push(ne);
                }), q;
              }, re = function(X) {
                var H = X === Pe, q = qn(H ? Ct : T(X)), ne = [];
                return ue(q, function(Ke) {
                  v(st, Ke) && (!H || v(Pe, Ke)) && ne.push(st[Ke]);
                }), ne;
              };
              if (d || (Re = function() {
                if (this instanceof Re) throw TypeError("Symbol is not a constructor");
                var X = !arguments.length || arguments[0] === void 0 ? void 0 : String(arguments[0]), H = fe(X), q = function(ne) {
                  this === Pe && q.call(Ct, ne), v(this, ve) && v(this[ve], H) && (this[ve][H] = !1), On(this, H, C(1, ne));
                };
                return f && Tn && On(Pe, H, { configurable: !0, set: q }), Nn(H, X);
              }, V(Re[Be], "toString", function() {
                return It(this).tag;
              }), V(Re, "withoutSetter", function(W) {
                return Nn(fe(W), W);
              }), x.f = U, A.f = S, L.f = K, y.f = D.f = J, R.f = re, se.f = function(W) {
                return Nn(ie(W), W);
              }, f && (dt(Re[Be], "description", {
                configurable: !0,
                get: function() {
                  return It(this).description;
                }
              }), u || V(Pe, "propertyIsEnumerable", U, { unsafe: !0 }))), a({ global: !0, wrap: !0, forced: !d, sham: !d }, {
                Symbol: Re
              }), ue(P(Sn), function(W) {
                Ae(W);
              }), a({ target: Qe, stat: !0, forced: !d }, {
                // `Symbol.for` method
                // https://tc39.github.io/ecma262/#sec-symbol.for
                for: function(W) {
                  var X = String(W);
                  if (v(Zt, X)) return Zt[X];
                  var H = Re(X);
                  return Zt[X] = H, yn[H] = X, H;
                },
                // `Symbol.keyFor` method
                // https://tc39.github.io/ecma262/#sec-symbol.keyfor
                keyFor: function(X) {
                  if (!b(X)) throw TypeError(X + " is not a symbol");
                  if (v(yn, X)) return yn[X];
                },
                useSetter: function() {
                  Tn = !0;
                },
                useSimple: function() {
                  Tn = !1;
                }
              }), a({ target: "Object", stat: !0, forced: !d, sham: !f }, {
                // `Object.create` method
                // https://tc39.github.io/ecma262/#sec-object.create
                create: M,
                // `Object.defineProperty` method
                // https://tc39.github.io/ecma262/#sec-object.defineproperty
                defineProperty: S,
                // `Object.defineProperties` method
                // https://tc39.github.io/ecma262/#sec-object.defineproperties
                defineProperties: O,
                // `Object.getOwnPropertyDescriptor` method
                // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
                getOwnPropertyDescriptor: K
              }), a({ target: "Object", stat: !0, forced: !d }, {
                // `Object.getOwnPropertyNames` method
                // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
                getOwnPropertyNames: J,
                // `Object.getOwnPropertySymbols` method
                // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
                getOwnPropertySymbols: re
              }), a({ target: "Object", stat: !0, forced: h(function() {
                R.f(1);
              }) }, {
                getOwnPropertySymbols: function(X) {
                  return R.f(N(X));
                }
              }), jt) {
                var be = !d || h(function() {
                  var W = Re();
                  return jt([W]) != "[null]" || jt({ a: W }) != "{}" || jt(Object(W)) != "{}";
                });
                a({ target: "JSON", stat: !0, forced: be }, {
                  // eslint-disable-next-line no-unused-vars
                  stringify: function(X, H, q) {
                    for (var ne = [X], Ke = 1, ao; arguments.length > Ke; ) ne.push(arguments[Ke++]);
                    if (ao = H, !(!g(H) && X === void 0 || b(X)))
                      return m(H) || (H = function(Ca, er) {
                        if (typeof ao == "function" && (er = ao.call(this, Ca, er)), !b(er)) return er;
                      }), ne[1] = H, jt.apply(null, ne);
                  }
                });
              }
              Re[Be][Nt] || j(Re[Be], Nt, Re[Be].valueOf), xe(Re, Qe), ae[ve] = !0;
            }
          ),
          /***/
          a630: (
            /***/
            function(i, l, r) {
              var a = r("23e7"), s = r("4df4"), c = r("1c7e"), u = !c(function(f) {
                Array.from(f);
              });
              a({ target: "Array", stat: !0, forced: u }, {
                from: s
              });
            }
          ),
          /***/
          a640: (
            /***/
            function(i, l, r) {
              var a = r("d039");
              i.exports = function(s, c) {
                var u = [][s];
                return !!u && a(function() {
                  u.call(null, c || function() {
                    throw 1;
                  }, 1);
                });
              };
            }
          ),
          /***/
          a691: (
            /***/
            function(i, l) {
              var r = Math.ceil, a = Math.floor;
              i.exports = function(s) {
                return isNaN(s = +s) ? 0 : (s > 0 ? a : r)(s);
              };
            }
          ),
          /***/
          ab13: (
            /***/
            function(i, l, r) {
              var a = r("b622"), s = a("match");
              i.exports = function(c) {
                var u = /./;
                try {
                  "/./"[c](u);
                } catch {
                  try {
                    return u[s] = !1, "/./"[c](u);
                  } catch {
                  }
                }
                return !1;
              };
            }
          ),
          /***/
          ac1f: (
            /***/
            function(i, l, r) {
              var a = r("23e7"), s = r("9263");
              a({ target: "RegExp", proto: !0, forced: /./.exec !== s }, {
                exec: s
              });
            }
          ),
          /***/
          ad6d: (
            /***/
            function(i, l, r) {
              var a = r("825a");
              i.exports = function() {
                var s = a(this), c = "";
                return s.global && (c += "g"), s.ignoreCase && (c += "i"), s.multiline && (c += "m"), s.dotAll && (c += "s"), s.unicode && (c += "u"), s.sticky && (c += "y"), c;
              };
            }
          ),
          /***/
          ae40: (
            /***/
            function(i, l, r) {
              var a = r("83ab"), s = r("d039"), c = r("5135"), u = Object.defineProperty, f = {}, d = function(p) {
                throw p;
              };
              i.exports = function(p, h) {
                if (c(f, p)) return f[p];
                h || (h = {});
                var v = [][p], m = c(h, "ACCESSORS") ? h.ACCESSORS : !1, g = c(h, 0) ? h[0] : d, E = c(h, 1) ? h[1] : void 0;
                return f[p] = !!v && !s(function() {
                  if (m && !a) return !0;
                  var N = { length: -1 };
                  m ? u(N, 1, { enumerable: !0, get: d }) : N[1] = 1, v.call(N, g, E);
                });
              };
            }
          ),
          /***/
          ae93: (
            /***/
            function(i, l, r) {
              var a = r("e163"), s = r("9112"), c = r("5135"), u = r("b622"), f = r("c430"), d = u("iterator"), p = !1, h = function() {
                return this;
              }, v, m, g;
              [].keys && (g = [].keys(), "next" in g ? (m = a(a(g)), m !== Object.prototype && (v = m)) : p = !0), v == null && (v = {}), !f && !c(v, d) && s(v, d, h), i.exports = {
                IteratorPrototype: v,
                BUGGY_SAFARI_ITERATORS: p
              };
            }
          ),
          /***/
          b041: (
            /***/
            function(i, l, r) {
              var a = r("00ee"), s = r("f5df");
              i.exports = a ? {}.toString : function() {
                return "[object " + s(this) + "]";
              };
            }
          ),
          /***/
          b0c0: (
            /***/
            function(i, l, r) {
              var a = r("83ab"), s = r("9bf2").f, c = Function.prototype, u = c.toString, f = /^\s*function ([^ (]*)/, d = "name";
              a && !(d in c) && s(c, d, {
                configurable: !0,
                get: function() {
                  try {
                    return u.call(this).match(f)[1];
                  } catch {
                    return "";
                  }
                }
              });
            }
          ),
          /***/
          b622: (
            /***/
            function(i, l, r) {
              var a = r("da84"), s = r("5692"), c = r("5135"), u = r("90e3"), f = r("4930"), d = r("fdbf"), p = s("wks"), h = a.Symbol, v = d ? h : h && h.withoutSetter || u;
              i.exports = function(m) {
                return c(p, m) || (f && c(h, m) ? p[m] = h[m] : p[m] = v("Symbol." + m)), p[m];
              };
            }
          ),
          /***/
          b64b: (
            /***/
            function(i, l, r) {
              var a = r("23e7"), s = r("7b0b"), c = r("df75"), u = r("d039"), f = u(function() {
                c(1);
              });
              a({ target: "Object", stat: !0, forced: f }, {
                keys: function(p) {
                  return c(s(p));
                }
              });
            }
          ),
          /***/
          b727: (
            /***/
            function(i, l, r) {
              var a = r("0366"), s = r("44ad"), c = r("7b0b"), u = r("50c4"), f = r("65f0"), d = [].push, p = function(h) {
                var v = h == 1, m = h == 2, g = h == 3, E = h == 4, N = h == 6, T = h == 5 || N;
                return function(I, C, F, P) {
                  for (var y = c(I), D = s(y), R = a(C, F, 3), L = u(D.length), A = 0, x = P || f, j = v ? x(I, L) : m ? x(I, 0) : void 0, V, B; L > A; A++) if ((T || A in D) && (V = D[A], B = R(V, A, y), h)) {
                    if (v) j[A] = B;
                    else if (B) switch (h) {
                      case 3:
                        return !0;
                      // some
                      case 5:
                        return V;
                      // find
                      case 6:
                        return A;
                      // findIndex
                      case 2:
                        d.call(j, V);
                    }
                    else if (E) return !1;
                  }
                  return N ? -1 : g || E ? E : j;
                };
              };
              i.exports = {
                // `Array.prototype.forEach` method
                // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
                forEach: p(0),
                // `Array.prototype.map` method
                // https://tc39.github.io/ecma262/#sec-array.prototype.map
                map: p(1),
                // `Array.prototype.filter` method
                // https://tc39.github.io/ecma262/#sec-array.prototype.filter
                filter: p(2),
                // `Array.prototype.some` method
                // https://tc39.github.io/ecma262/#sec-array.prototype.some
                some: p(3),
                // `Array.prototype.every` method
                // https://tc39.github.io/ecma262/#sec-array.prototype.every
                every: p(4),
                // `Array.prototype.find` method
                // https://tc39.github.io/ecma262/#sec-array.prototype.find
                find: p(5),
                // `Array.prototype.findIndex` method
                // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
                findIndex: p(6)
              };
            }
          ),
          /***/
          c04e: (
            /***/
            function(i, l, r) {
              var a = r("861d");
              i.exports = function(s, c) {
                if (!a(s)) return s;
                var u, f;
                if (c && typeof (u = s.toString) == "function" && !a(f = u.call(s)) || typeof (u = s.valueOf) == "function" && !a(f = u.call(s)) || !c && typeof (u = s.toString) == "function" && !a(f = u.call(s))) return f;
                throw TypeError("Can't convert object to primitive value");
              };
            }
          ),
          /***/
          c430: (
            /***/
            function(i, l) {
              i.exports = !1;
            }
          ),
          /***/
          c6b6: (
            /***/
            function(i, l) {
              var r = {}.toString;
              i.exports = function(a) {
                return r.call(a).slice(8, -1);
              };
            }
          ),
          /***/
          c6cd: (
            /***/
            function(i, l, r) {
              var a = r("da84"), s = r("ce4e"), c = "__core-js_shared__", u = a[c] || s(c, {});
              i.exports = u;
            }
          ),
          /***/
          c740: (
            /***/
            function(i, l, r) {
              var a = r("23e7"), s = r("b727").findIndex, c = r("44d2"), u = r("ae40"), f = "findIndex", d = !0, p = u(f);
              f in [] && Array(1)[f](function() {
                d = !1;
              }), a({ target: "Array", proto: !0, forced: d || !p }, {
                findIndex: function(v) {
                  return s(this, v, arguments.length > 1 ? arguments[1] : void 0);
                }
              }), c(f);
            }
          ),
          /***/
          c8ba: (
            /***/
            function(i, l) {
              var r;
              r = /* @__PURE__ */ function() {
                return this;
              }();
              try {
                r = r || new Function("return this")();
              } catch {
                typeof window == "object" && (r = window);
              }
              i.exports = r;
            }
          ),
          /***/
          c975: (
            /***/
            function(i, l, r) {
              var a = r("23e7"), s = r("4d64").indexOf, c = r("a640"), u = r("ae40"), f = [].indexOf, d = !!f && 1 / [1].indexOf(1, -0) < 0, p = c("indexOf"), h = u("indexOf", { ACCESSORS: !0, 1: 0 });
              a({ target: "Array", proto: !0, forced: d || !p || !h }, {
                indexOf: function(m) {
                  return d ? f.apply(this, arguments) || 0 : s(this, m, arguments.length > 1 ? arguments[1] : void 0);
                }
              });
            }
          ),
          /***/
          ca84: (
            /***/
            function(i, l, r) {
              var a = r("5135"), s = r("fc6a"), c = r("4d64").indexOf, u = r("d012");
              i.exports = function(f, d) {
                var p = s(f), h = 0, v = [], m;
                for (m in p) !a(u, m) && a(p, m) && v.push(m);
                for (; d.length > h; ) a(p, m = d[h++]) && (~c(v, m) || v.push(m));
                return v;
              };
            }
          ),
          /***/
          caad: (
            /***/
            function(i, l, r) {
              var a = r("23e7"), s = r("4d64").includes, c = r("44d2"), u = r("ae40"), f = u("indexOf", { ACCESSORS: !0, 1: 0 });
              a({ target: "Array", proto: !0, forced: !f }, {
                includes: function(p) {
                  return s(this, p, arguments.length > 1 ? arguments[1] : void 0);
                }
              }), c("includes");
            }
          ),
          /***/
          cc12: (
            /***/
            function(i, l, r) {
              var a = r("da84"), s = r("861d"), c = a.document, u = s(c) && s(c.createElement);
              i.exports = function(f) {
                return u ? c.createElement(f) : {};
              };
            }
          ),
          /***/
          ce4e: (
            /***/
            function(i, l, r) {
              var a = r("da84"), s = r("9112");
              i.exports = function(c, u) {
                try {
                  s(a, c, u);
                } catch {
                  a[c] = u;
                }
                return u;
              };
            }
          ),
          /***/
          d012: (
            /***/
            function(i, l) {
              i.exports = {};
            }
          ),
          /***/
          d039: (
            /***/
            function(i, l) {
              i.exports = function(r) {
                try {
                  return !!r();
                } catch {
                  return !0;
                }
              };
            }
          ),
          /***/
          d066: (
            /***/
            function(i, l, r) {
              var a = r("428f"), s = r("da84"), c = function(u) {
                return typeof u == "function" ? u : void 0;
              };
              i.exports = function(u, f) {
                return arguments.length < 2 ? c(a[u]) || c(s[u]) : a[u] && a[u][f] || s[u] && s[u][f];
              };
            }
          ),
          /***/
          d1e7: (
            /***/
            function(i, l, r) {
              var a = {}.propertyIsEnumerable, s = Object.getOwnPropertyDescriptor, c = s && !a.call({ 1: 2 }, 1);
              l.f = c ? function(f) {
                var d = s(this, f);
                return !!d && d.enumerable;
              } : a;
            }
          ),
          /***/
          d28b: (
            /***/
            function(i, l, r) {
              var a = r("746f");
              a("iterator");
            }
          ),
          /***/
          d2bb: (
            /***/
            function(i, l, r) {
              var a = r("825a"), s = r("3bbe");
              i.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
                var c = !1, u = {}, f;
                try {
                  f = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set, f.call(u, []), c = u instanceof Array;
                } catch {
                }
                return function(p, h) {
                  return a(p), s(h), c ? f.call(p, h) : p.__proto__ = h, p;
                };
              }() : void 0);
            }
          ),
          /***/
          d3b7: (
            /***/
            function(i, l, r) {
              var a = r("00ee"), s = r("6eeb"), c = r("b041");
              a || s(Object.prototype, "toString", c, { unsafe: !0 });
            }
          ),
          /***/
          d44e: (
            /***/
            function(i, l, r) {
              var a = r("9bf2").f, s = r("5135"), c = r("b622"), u = c("toStringTag");
              i.exports = function(f, d, p) {
                f && !s(f = p ? f : f.prototype, u) && a(f, u, { configurable: !0, value: d });
              };
            }
          ),
          /***/
          d58f: (
            /***/
            function(i, l, r) {
              var a = r("1c0b"), s = r("7b0b"), c = r("44ad"), u = r("50c4"), f = function(d) {
                return function(p, h, v, m) {
                  a(h);
                  var g = s(p), E = c(g), N = u(g.length), T = d ? N - 1 : 0, I = d ? -1 : 1;
                  if (v < 2) for (; ; ) {
                    if (T in E) {
                      m = E[T], T += I;
                      break;
                    }
                    if (T += I, d ? T < 0 : N <= T)
                      throw TypeError("Reduce of empty array with no initial value");
                  }
                  for (; d ? T >= 0 : N > T; T += I) T in E && (m = h(m, E[T], T, g));
                  return m;
                };
              };
              i.exports = {
                // `Array.prototype.reduce` method
                // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
                left: f(!1),
                // `Array.prototype.reduceRight` method
                // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
                right: f(!0)
              };
            }
          ),
          /***/
          d784: (
            /***/
            function(i, l, r) {
              r("ac1f");
              var a = r("6eeb"), s = r("d039"), c = r("b622"), u = r("9263"), f = r("9112"), d = c("species"), p = !s(function() {
                var E = /./;
                return E.exec = function() {
                  var N = [];
                  return N.groups = { a: "7" }, N;
                }, "".replace(E, "$<a>") !== "7";
              }), h = function() {
                return "a".replace(/./, "$0") === "$0";
              }(), v = c("replace"), m = function() {
                return /./[v] ? /./[v]("a", "$0") === "" : !1;
              }(), g = !s(function() {
                var E = /(?:)/, N = E.exec;
                E.exec = function() {
                  return N.apply(this, arguments);
                };
                var T = "ab".split(E);
                return T.length !== 2 || T[0] !== "a" || T[1] !== "b";
              });
              i.exports = function(E, N, T, I) {
                var C = c(E), F = !s(function() {
                  var A = {};
                  return A[C] = function() {
                    return 7;
                  }, ""[E](A) != 7;
                }), P = F && !s(function() {
                  var A = !1, x = /a/;
                  return E === "split" && (x = {}, x.constructor = {}, x.constructor[d] = function() {
                    return x;
                  }, x.flags = "", x[C] = /./[C]), x.exec = function() {
                    return A = !0, null;
                  }, x[C](""), !A;
                });
                if (!F || !P || E === "replace" && !(p && h && !m) || E === "split" && !g) {
                  var y = /./[C], D = T(C, ""[E], function(A, x, j, V, B) {
                    return x.exec === u ? F && !B ? { done: !0, value: y.call(x, j, V) } : { done: !0, value: A.call(j, x, V) } : { done: !1 };
                  }, {
                    REPLACE_KEEPS_$0: h,
                    REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: m
                  }), R = D[0], L = D[1];
                  a(String.prototype, E, R), a(
                    RegExp.prototype,
                    C,
                    N == 2 ? function(A, x) {
                      return L.call(A, this, x);
                    } : function(A) {
                      return L.call(A, this);
                    }
                  );
                }
                I && f(RegExp.prototype[C], "sham", !0);
              };
            }
          ),
          /***/
          d81d: (
            /***/
            function(i, l, r) {
              var a = r("23e7"), s = r("b727").map, c = r("1dde"), u = r("ae40"), f = c("map"), d = u("map");
              a({ target: "Array", proto: !0, forced: !f || !d }, {
                map: function(h) {
                  return s(this, h, arguments.length > 1 ? arguments[1] : void 0);
                }
              });
            }
          ),
          /***/
          da84: (
            /***/
            function(i, l, r) {
              (function(a) {
                var s = function(c) {
                  return c && c.Math == Math && c;
                };
                i.exports = // eslint-disable-next-line no-undef
                s(typeof globalThis == "object" && globalThis) || s(typeof window == "object" && window) || s(typeof self == "object" && self) || s(typeof a == "object" && a) || // eslint-disable-next-line no-new-func
                Function("return this")();
              }).call(this, r("c8ba"));
            }
          ),
          /***/
          dbb4: (
            /***/
            function(i, l, r) {
              var a = r("23e7"), s = r("83ab"), c = r("56ef"), u = r("fc6a"), f = r("06cf"), d = r("8418");
              a({ target: "Object", stat: !0, sham: !s }, {
                getOwnPropertyDescriptors: function(h) {
                  for (var v = u(h), m = f.f, g = c(v), E = {}, N = 0, T, I; g.length > N; )
                    I = m(v, T = g[N++]), I !== void 0 && d(E, T, I);
                  return E;
                }
              });
            }
          ),
          /***/
          dbf1: (
            /***/
            function(i, l, r) {
              (function(a) {
                r.d(l, "a", function() {
                  return c;
                });
                function s() {
                  return typeof window < "u" ? window.console : a.console;
                }
                var c = s();
              }).call(this, r("c8ba"));
            }
          ),
          /***/
          ddb0: (
            /***/
            function(i, l, r) {
              var a = r("da84"), s = r("fdbc"), c = r("e260"), u = r("9112"), f = r("b622"), d = f("iterator"), p = f("toStringTag"), h = c.values;
              for (var v in s) {
                var m = a[v], g = m && m.prototype;
                if (g) {
                  if (g[d] !== h) try {
                    u(g, d, h);
                  } catch {
                    g[d] = h;
                  }
                  if (g[p] || u(g, p, v), s[v]) {
                    for (var E in c)
                      if (g[E] !== c[E]) try {
                        u(g, E, c[E]);
                      } catch {
                        g[E] = c[E];
                      }
                  }
                }
              }
            }
          ),
          /***/
          df75: (
            /***/
            function(i, l, r) {
              var a = r("ca84"), s = r("7839");
              i.exports = Object.keys || function(u) {
                return a(u, s);
              };
            }
          ),
          /***/
          e01a: (
            /***/
            function(i, l, r) {
              var a = r("23e7"), s = r("83ab"), c = r("da84"), u = r("5135"), f = r("861d"), d = r("9bf2").f, p = r("e893"), h = c.Symbol;
              if (s && typeof h == "function" && (!("description" in h.prototype) || // Safari 12 bug
              h().description !== void 0)) {
                var v = {}, m = function() {
                  var C = arguments.length < 1 || arguments[0] === void 0 ? void 0 : String(arguments[0]), F = this instanceof m ? new h(C) : C === void 0 ? h() : h(C);
                  return C === "" && (v[F] = !0), F;
                };
                p(m, h);
                var g = m.prototype = h.prototype;
                g.constructor = m;
                var E = g.toString, N = String(h("test")) == "Symbol(test)", T = /^Symbol\((.*)\)[^)]+$/;
                d(g, "description", {
                  configurable: !0,
                  get: function() {
                    var C = f(this) ? this.valueOf() : this, F = E.call(C);
                    if (u(v, C)) return "";
                    var P = N ? F.slice(7, -1) : F.replace(T, "$1");
                    return P === "" ? void 0 : P;
                  }
                }), a({ global: !0, forced: !0 }, {
                  Symbol: m
                });
              }
            }
          ),
          /***/
          e163: (
            /***/
            function(i, l, r) {
              var a = r("5135"), s = r("7b0b"), c = r("f772"), u = r("e177"), f = c("IE_PROTO"), d = Object.prototype;
              i.exports = u ? Object.getPrototypeOf : function(p) {
                return p = s(p), a(p, f) ? p[f] : typeof p.constructor == "function" && p instanceof p.constructor ? p.constructor.prototype : p instanceof Object ? d : null;
              };
            }
          ),
          /***/
          e177: (
            /***/
            function(i, l, r) {
              var a = r("d039");
              i.exports = !a(function() {
                function s() {
                }
                return s.prototype.constructor = null, Object.getPrototypeOf(new s()) !== s.prototype;
              });
            }
          ),
          /***/
          e260: (
            /***/
            function(i, l, r) {
              var a = r("fc6a"), s = r("44d2"), c = r("3f8c"), u = r("69f3"), f = r("7dd0"), d = "Array Iterator", p = u.set, h = u.getterFor(d);
              i.exports = f(Array, "Array", function(v, m) {
                p(this, {
                  type: d,
                  target: a(v),
                  // target
                  index: 0,
                  // next index
                  kind: m
                  // kind
                });
              }, function() {
                var v = h(this), m = v.target, g = v.kind, E = v.index++;
                return !m || E >= m.length ? (v.target = void 0, { value: void 0, done: !0 }) : g == "keys" ? { value: E, done: !1 } : g == "values" ? { value: m[E], done: !1 } : { value: [E, m[E]], done: !1 };
              }, "values"), c.Arguments = c.Array, s("keys"), s("values"), s("entries");
            }
          ),
          /***/
          e439: (
            /***/
            function(i, l, r) {
              var a = r("23e7"), s = r("d039"), c = r("fc6a"), u = r("06cf").f, f = r("83ab"), d = s(function() {
                u(1);
              }), p = !f || d;
              a({ target: "Object", stat: !0, forced: p, sham: !f }, {
                getOwnPropertyDescriptor: function(v, m) {
                  return u(c(v), m);
                }
              });
            }
          ),
          /***/
          e538: (
            /***/
            function(i, l, r) {
              var a = r("b622");
              l.f = a;
            }
          ),
          /***/
          e893: (
            /***/
            function(i, l, r) {
              var a = r("5135"), s = r("56ef"), c = r("06cf"), u = r("9bf2");
              i.exports = function(f, d) {
                for (var p = s(d), h = u.f, v = c.f, m = 0; m < p.length; m++) {
                  var g = p[m];
                  a(f, g) || h(f, g, v(d, g));
                }
              };
            }
          ),
          /***/
          e8b5: (
            /***/
            function(i, l, r) {
              var a = r("c6b6");
              i.exports = Array.isArray || function(c) {
                return a(c) == "Array";
              };
            }
          ),
          /***/
          e95a: (
            /***/
            function(i, l, r) {
              var a = r("b622"), s = r("3f8c"), c = a("iterator"), u = Array.prototype;
              i.exports = function(f) {
                return f !== void 0 && (s.Array === f || u[c] === f);
              };
            }
          ),
          /***/
          f5df: (
            /***/
            function(i, l, r) {
              var a = r("00ee"), s = r("c6b6"), c = r("b622"), u = c("toStringTag"), f = s(/* @__PURE__ */ function() {
                return arguments;
              }()) == "Arguments", d = function(p, h) {
                try {
                  return p[h];
                } catch {
                }
              };
              i.exports = a ? s : function(p) {
                var h, v, m;
                return p === void 0 ? "Undefined" : p === null ? "Null" : typeof (v = d(h = Object(p), u)) == "string" ? v : f ? s(h) : (m = s(h)) == "Object" && typeof h.callee == "function" ? "Arguments" : m;
              };
            }
          ),
          /***/
          f772: (
            /***/
            function(i, l, r) {
              var a = r("5692"), s = r("90e3"), c = a("keys");
              i.exports = function(u) {
                return c[u] || (c[u] = s(u));
              };
            }
          ),
          /***/
          fb15: (
            /***/
            function(i, l, r) {
              if (r.r(l), typeof window < "u") {
                var a = window.document.currentScript;
                {
                  var s = r("8875");
                  a = s(), "currentScript" in document || Object.defineProperty(document, "currentScript", { get: s });
                }
                var c = a && a.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
                c && (r.p = c[1]);
              }
              r("99af"), r("4de4"), r("4160"), r("c975"), r("d81d"), r("a434"), r("159b"), r("a4d3"), r("e439"), r("dbb4"), r("b64b");
              function u(b, S, O) {
                return S in b ? Object.defineProperty(b, S, {
                  value: O,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                }) : b[S] = O, b;
              }
              function f(b, S) {
                var O = Object.keys(b);
                if (Object.getOwnPropertySymbols) {
                  var M = Object.getOwnPropertySymbols(b);
                  S && (M = M.filter(function(U) {
                    return Object.getOwnPropertyDescriptor(b, U).enumerable;
                  })), O.push.apply(O, M);
                }
                return O;
              }
              function d(b) {
                for (var S = 1; S < arguments.length; S++) {
                  var O = arguments[S] != null ? arguments[S] : {};
                  S % 2 ? f(Object(O), !0).forEach(function(M) {
                    u(b, M, O[M]);
                  }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(b, Object.getOwnPropertyDescriptors(O)) : f(Object(O)).forEach(function(M) {
                    Object.defineProperty(b, M, Object.getOwnPropertyDescriptor(O, M));
                  });
                }
                return b;
              }
              function p(b) {
                if (Array.isArray(b)) return b;
              }
              r("e01a"), r("d28b"), r("e260"), r("d3b7"), r("3ca3"), r("ddb0");
              function h(b, S) {
                if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(b)))) {
                  var O = [], M = !0, U = !1, K = void 0;
                  try {
                    for (var J = b[Symbol.iterator](), re; !(M = (re = J.next()).done) && (O.push(re.value), !(S && O.length === S)); M = !0)
                      ;
                  } catch (be) {
                    U = !0, K = be;
                  } finally {
                    try {
                      !M && J.return != null && J.return();
                    } finally {
                      if (U) throw K;
                    }
                  }
                  return O;
                }
              }
              r("a630"), r("fb6a"), r("b0c0"), r("25f0");
              function v(b, S) {
                (S == null || S > b.length) && (S = b.length);
                for (var O = 0, M = new Array(S); O < S; O++)
                  M[O] = b[O];
                return M;
              }
              function m(b, S) {
                if (b) {
                  if (typeof b == "string") return v(b, S);
                  var O = Object.prototype.toString.call(b).slice(8, -1);
                  if (O === "Object" && b.constructor && (O = b.constructor.name), O === "Map" || O === "Set") return Array.from(b);
                  if (O === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O)) return v(b, S);
                }
              }
              function g() {
                throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
              }
              function E(b, S) {
                return p(b) || h(b, S) || m(b, S) || g();
              }
              function N(b) {
                if (Array.isArray(b)) return v(b);
              }
              function T(b) {
                if (typeof Symbol < "u" && Symbol.iterator in Object(b)) return Array.from(b);
              }
              function I() {
                throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
              }
              function C(b) {
                return N(b) || T(b) || m(b) || I();
              }
              var F = r("a352"), P = /* @__PURE__ */ r.n(F);
              function y(b) {
                b.parentElement !== null && b.parentElement.removeChild(b);
              }
              function D(b, S, O) {
                var M = O === 0 ? b.children[0] : b.children[O - 1].nextSibling;
                b.insertBefore(S, M);
              }
              var R = r("dbf1");
              r("13d5"), r("4fad"), r("ac1f"), r("5319");
              function L(b) {
                var S = /* @__PURE__ */ Object.create(null);
                return function(M) {
                  var U = S[M];
                  return U || (S[M] = b(M));
                };
              }
              var A = /-(\w)/g, x = L(function(b) {
                return b.replace(A, function(S, O) {
                  return O.toUpperCase();
                });
              });
              r("5db7"), r("73d9");
              var j = ["Start", "Add", "Remove", "Update", "End"], V = ["Choose", "Unchoose", "Sort", "Filter", "Clone"], B = ["Move"], Q = [B, j, V].flatMap(function(b) {
                return b;
              }).map(function(b) {
                return "on".concat(b);
              }), ae = {
                manage: B,
                manageAndEmit: j,
                emit: V
              };
              function fe(b) {
                return Q.indexOf(b) !== -1;
              }
              r("caad"), r("2ca0");
              var ie = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "link", "main", "map", "mark", "math", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rb", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "section", "select", "slot", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr"];
              function se(b) {
                return ie.includes(b);
              }
              function Ae(b) {
                return ["transition-group", "TransitionGroup"].includes(b);
              }
              function xe(b) {
                return ["id", "class", "role", "style"].includes(b) || b.startsWith("data-") || b.startsWith("aria-") || b.startsWith("on");
              }
              function Oe(b) {
                return b.reduce(function(S, O) {
                  var M = E(O, 2), U = M[0], K = M[1];
                  return S[U] = K, S;
                }, {});
              }
              function ue(b) {
                var S = b.$attrs, O = b.componentData, M = O === void 0 ? {} : O, U = Oe(Object.entries(S).filter(function(K) {
                  var J = E(K, 2), re = J[0];
                  return J[1], xe(re);
                }));
                return d(d({}, U), M);
              }
              function ve(b) {
                var S = b.$attrs, O = b.callBackBuilder, M = Oe(Qe(S));
                Object.entries(O).forEach(function(K) {
                  var J = E(K, 2), re = J[0], be = J[1];
                  ae[re].forEach(function(W) {
                    M["on".concat(W)] = be(W);
                  });
                });
                var U = "[data-draggable]".concat(M.draggable || "");
                return d(d({}, M), {}, {
                  draggable: U
                });
              }
              function Qe(b) {
                return Object.entries(b).filter(function(S) {
                  var O = E(S, 2), M = O[0];
                  return O[1], !xe(M);
                }).map(function(S) {
                  var O = E(S, 2), M = O[0], U = O[1];
                  return [x(M), U];
                }).filter(function(S) {
                  var O = E(S, 2), M = O[0];
                  return O[1], !fe(M);
                });
              }
              r("c740");
              function Be(b, S) {
                if (!(b instanceof S))
                  throw new TypeError("Cannot call a class as a function");
              }
              function Nt(b, S) {
                for (var O = 0; O < S.length; O++) {
                  var M = S[O];
                  M.enumerable = M.enumerable || !1, M.configurable = !0, "value" in M && (M.writable = !0), Object.defineProperty(b, M.key, M);
                }
              }
              function Ft(b, S, O) {
                return S && Nt(b.prototype, S), b;
              }
              var It = function(S) {
                var O = S.el;
                return O;
              }, Pe = function(S, O) {
                return S.__draggable_context = O;
              }, Re = function(S) {
                return S.__draggable_context;
              }, jt = /* @__PURE__ */ function() {
                function b(S) {
                  var O = S.nodes, M = O.header, U = O.default, K = O.footer, J = S.root, re = S.realList;
                  Be(this, b), this.defaultNodes = U, this.children = [].concat(C(M), C(U), C(K)), this.externalComponent = J.externalComponent, this.rootTransition = J.transition, this.tag = J.tag, this.realList = re;
                }
                return Ft(b, [{
                  key: "render",
                  value: function(O, M) {
                    var U = this.tag, K = this.children, J = this._isRootComponent, re = J ? {
                      default: function() {
                        return K;
                      }
                    } : K;
                    return O(U, M, re);
                  }
                }, {
                  key: "updated",
                  value: function() {
                    var O = this.defaultNodes, M = this.realList;
                    O.forEach(function(U, K) {
                      Pe(It(U), {
                        element: M[K],
                        index: K
                      });
                    });
                  }
                }, {
                  key: "getUnderlyingVm",
                  value: function(O) {
                    return Re(O);
                  }
                }, {
                  key: "getVmIndexFromDomIndex",
                  value: function(O, M) {
                    var U = this.defaultNodes, K = U.length, J = M.children, re = J.item(O);
                    if (re === null)
                      return K;
                    var be = Re(re);
                    if (be)
                      return be.index;
                    if (K === 0)
                      return 0;
                    var W = It(U[0]), X = C(J).findIndex(function(H) {
                      return H === W;
                    });
                    return O < X ? 0 : K;
                  }
                }, {
                  key: "_isRootComponent",
                  get: function() {
                    return this.externalComponent || this.rootTransition;
                  }
                }]), b;
              }(), ut = r("8bbf");
              function dt(b, S) {
                var O = b[S];
                return O ? O() : [];
              }
              function qn(b) {
                var S = b.$slots, O = b.realList, M = b.getKey, U = O || [], K = ["header", "footer"].map(function(H) {
                  return dt(S, H);
                }), J = E(K, 2), re = J[0], be = J[1], W = S.item;
                if (!W)
                  throw new Error("draggable element must have an item slot");
                var X = U.flatMap(function(H, q) {
                  return W({
                    element: H,
                    index: q
                  }).map(function(ne) {
                    return ne.key = M(H), ne.props = d(d({}, ne.props || {}), {}, {
                      "data-draggable": !0
                    }), ne;
                  });
                });
                if (X.length !== U.length)
                  throw new Error("Item slot must have only one child");
                return {
                  header: re,
                  footer: be,
                  default: X
                };
              }
              function so(b) {
                var S = Ae(b), O = !se(b) && !S;
                return {
                  transition: S,
                  externalComponent: O,
                  tag: O ? Object(ut.resolveComponent)(b) : S ? ut.TransitionGroup : b
                };
              }
              function st(b) {
                var S = b.$slots, O = b.tag, M = b.realList, U = b.getKey, K = qn({
                  $slots: S,
                  realList: M,
                  getKey: U
                }), J = so(O);
                return new jt({
                  nodes: K,
                  root: J,
                  realList: M
                });
              }
              function Ct(b, S) {
                var O = this;
                Object(ut.nextTick)(function() {
                  return O.$emit(b.toLowerCase(), S);
                });
              }
              function Zt(b) {
                var S = this;
                return function(O, M) {
                  if (S.realList !== null)
                    return S["onDrag".concat(b)](O, M);
                };
              }
              function yn(b) {
                var S = this, O = Zt.call(this, b);
                return function(M, U) {
                  O.call(S, M, U), Ct.call(S, b, M);
                };
              }
              var Sn = null, bn = {
                list: {
                  type: Array,
                  required: !1,
                  default: null
                },
                modelValue: {
                  type: Array,
                  required: !1,
                  default: null
                },
                itemKey: {
                  type: [String, Function],
                  required: !0
                },
                clone: {
                  type: Function,
                  default: function(S) {
                    return S;
                  }
                },
                tag: {
                  type: String,
                  default: "div"
                },
                move: {
                  type: Function,
                  default: null
                },
                componentData: {
                  type: Object,
                  required: !1,
                  default: null
                }
              }, Tn = ["update:modelValue", "change"].concat(C([].concat(C(ae.manageAndEmit), C(ae.emit)).map(function(b) {
                return b.toLowerCase();
              }))), On = Object(ut.defineComponent)({
                name: "draggable",
                inheritAttrs: !1,
                props: bn,
                emits: Tn,
                data: function() {
                  return {
                    error: !1
                  };
                },
                render: function() {
                  try {
                    this.error = !1;
                    var S = this.$slots, O = this.$attrs, M = this.tag, U = this.componentData, K = this.realList, J = this.getKey, re = st({
                      $slots: S,
                      tag: M,
                      realList: K,
                      getKey: J
                    });
                    this.componentStructure = re;
                    var be = ue({
                      $attrs: O,
                      componentData: U
                    });
                    return re.render(ut.h, be);
                  } catch (W) {
                    return this.error = !0, Object(ut.h)("pre", {
                      style: {
                        color: "red"
                      }
                    }, W.stack);
                  }
                },
                created: function() {
                  this.list !== null && this.modelValue !== null && R.a.error("modelValue and list props are mutually exclusive! Please set one or another.");
                },
                mounted: function() {
                  var S = this;
                  if (!this.error) {
                    var O = this.$attrs, M = this.$el, U = this.componentStructure;
                    U.updated();
                    var K = ve({
                      $attrs: O,
                      callBackBuilder: {
                        manageAndEmit: function(be) {
                          return yn.call(S, be);
                        },
                        emit: function(be) {
                          return Ct.bind(S, be);
                        },
                        manage: function(be) {
                          return Zt.call(S, be);
                        }
                      }
                    }), J = M.nodeType === 1 ? M : M.parentElement;
                    this._sortable = new P.a(J, K), this.targetDomElement = J, J.__draggable_component__ = this;
                  }
                },
                updated: function() {
                  this.componentStructure.updated();
                },
                beforeUnmount: function() {
                  this._sortable !== void 0 && this._sortable.destroy();
                },
                computed: {
                  realList: function() {
                    var S = this.list;
                    return S || this.modelValue;
                  },
                  getKey: function() {
                    var S = this.itemKey;
                    return typeof S == "function" ? S : function(O) {
                      return O[S];
                    };
                  }
                },
                watch: {
                  $attrs: {
                    handler: function(S) {
                      var O = this._sortable;
                      O && Qe(S).forEach(function(M) {
                        var U = E(M, 2), K = U[0], J = U[1];
                        O.option(K, J);
                      });
                    },
                    deep: !0
                  }
                },
                methods: {
                  getUnderlyingVm: function(S) {
                    return this.componentStructure.getUnderlyingVm(S) || null;
                  },
                  getUnderlyingPotencialDraggableComponent: function(S) {
                    return S.__draggable_component__;
                  },
                  emitChanges: function(S) {
                    var O = this;
                    Object(ut.nextTick)(function() {
                      return O.$emit("change", S);
                    });
                  },
                  alterList: function(S) {
                    if (this.list) {
                      S(this.list);
                      return;
                    }
                    var O = C(this.modelValue);
                    S(O), this.$emit("update:modelValue", O);
                  },
                  spliceList: function() {
                    var S = arguments, O = function(U) {
                      return U.splice.apply(U, C(S));
                    };
                    this.alterList(O);
                  },
                  updatePosition: function(S, O) {
                    var M = function(K) {
                      return K.splice(O, 0, K.splice(S, 1)[0]);
                    };
                    this.alterList(M);
                  },
                  getRelatedContextFromMoveEvent: function(S) {
                    var O = S.to, M = S.related, U = this.getUnderlyingPotencialDraggableComponent(O);
                    if (!U)
                      return {
                        component: U
                      };
                    var K = U.realList, J = {
                      list: K,
                      component: U
                    };
                    if (O !== M && K) {
                      var re = U.getUnderlyingVm(M) || {};
                      return d(d({}, re), J);
                    }
                    return J;
                  },
                  getVmIndexFromDomIndex: function(S) {
                    return this.componentStructure.getVmIndexFromDomIndex(S, this.targetDomElement);
                  },
                  onDragStart: function(S) {
                    this.context = this.getUnderlyingVm(S.item), S.item._underlying_vm_ = this.clone(this.context.element), Sn = S.item;
                  },
                  onDragAdd: function(S) {
                    var O = S.item._underlying_vm_;
                    if (O !== void 0) {
                      y(S.item);
                      var M = this.getVmIndexFromDomIndex(S.newIndex);
                      this.spliceList(M, 0, O);
                      var U = {
                        element: O,
                        newIndex: M
                      };
                      this.emitChanges({
                        added: U
                      });
                    }
                  },
                  onDragRemove: function(S) {
                    if (D(this.$el, S.item, S.oldIndex), S.pullMode === "clone") {
                      y(S.clone);
                      return;
                    }
                    var O = this.context, M = O.index, U = O.element;
                    this.spliceList(M, 1);
                    var K = {
                      element: U,
                      oldIndex: M
                    };
                    this.emitChanges({
                      removed: K
                    });
                  },
                  onDragUpdate: function(S) {
                    y(S.item), D(S.from, S.item, S.oldIndex);
                    var O = this.context.index, M = this.getVmIndexFromDomIndex(S.newIndex);
                    this.updatePosition(O, M);
                    var U = {
                      element: this.context.element,
                      oldIndex: O,
                      newIndex: M
                    };
                    this.emitChanges({
                      moved: U
                    });
                  },
                  computeFutureIndex: function(S, O) {
                    if (!S.element)
                      return 0;
                    var M = C(O.to.children).filter(function(re) {
                      return re.style.display !== "none";
                    }), U = M.indexOf(O.related), K = S.component.getVmIndexFromDomIndex(U), J = M.indexOf(Sn) !== -1;
                    return J || !O.willInsertAfter ? K : K + 1;
                  },
                  onDragMove: function(S, O) {
                    var M = this.move, U = this.realList;
                    if (!M || !U)
                      return !0;
                    var K = this.getRelatedContextFromMoveEvent(S), J = this.computeFutureIndex(K, S), re = d(d({}, this.context), {}, {
                      futureIndex: J
                    }), be = d(d({}, S), {}, {
                      relatedContext: K,
                      draggedContext: re
                    });
                    return M(be, O);
                  },
                  onDragEnd: function() {
                    Sn = null;
                  }
                }
              }), Nn = On;
              l.default = Nn;
            }
          ),
          /***/
          fb6a: (
            /***/
            function(i, l, r) {
              var a = r("23e7"), s = r("861d"), c = r("e8b5"), u = r("23cb"), f = r("50c4"), d = r("fc6a"), p = r("8418"), h = r("b622"), v = r("1dde"), m = r("ae40"), g = v("slice"), E = m("slice", { ACCESSORS: !0, 0: 0, 1: 2 }), N = h("species"), T = [].slice, I = Math.max;
              a({ target: "Array", proto: !0, forced: !g || !E }, {
                slice: function(F, P) {
                  var y = d(this), D = f(y.length), R = u(F, D), L = u(P === void 0 ? D : P, D), A, x, j;
                  if (c(y) && (A = y.constructor, typeof A == "function" && (A === Array || c(A.prototype)) ? A = void 0 : s(A) && (A = A[N], A === null && (A = void 0)), A === Array || A === void 0))
                    return T.call(y, R, L);
                  for (x = new (A === void 0 ? Array : A)(I(L - R, 0)), j = 0; R < L; R++, j++) R in y && p(x, j, y[R]);
                  return x.length = j, x;
                }
              });
            }
          ),
          /***/
          fc6a: (
            /***/
            function(i, l, r) {
              var a = r("44ad"), s = r("1d80");
              i.exports = function(c) {
                return a(s(c));
              };
            }
          ),
          /***/
          fdbc: (
            /***/
            function(i, l) {
              i.exports = {
                CSSRuleList: 0,
                CSSStyleDeclaration: 0,
                CSSValueList: 0,
                ClientRectList: 0,
                DOMRectList: 0,
                DOMStringList: 0,
                DOMTokenList: 1,
                DataTransferItemList: 0,
                FileList: 0,
                HTMLAllCollection: 0,
                HTMLCollection: 0,
                HTMLFormElement: 0,
                HTMLSelectElement: 0,
                MediaList: 0,
                MimeTypeArray: 0,
                NamedNodeMap: 0,
                NodeList: 1,
                PaintRequestList: 0,
                Plugin: 0,
                PluginArray: 0,
                SVGLengthList: 0,
                SVGNumberList: 0,
                SVGPathSegList: 0,
                SVGPointList: 0,
                SVGStringList: 0,
                SVGTransformList: 0,
                SourceBufferList: 0,
                StyleSheetList: 0,
                TextTrackCueList: 0,
                TextTrackList: 0,
                TouchList: 0
              };
            }
          ),
          /***/
          fdbf: (
            /***/
            function(i, l, r) {
              var a = r("4930");
              i.exports = a && !Symbol.sham && typeof Symbol.iterator == "symbol";
            }
          )
          /******/
        }).default
      );
    });
  }(vr)), vr.exports;
}
var Gf = Hf();
const Kf = /* @__PURE__ */ ol(Gf), Wf = ts({
  components: { ColorPaletteItem: rl, Draggable: Kf },
  setup() {
    const { settings: e } = Ya(), { colors: t, createColor: n, updateAll: o, deleteColor: i } = ns();
    async function l(s) {
      let c = s.match(/(.*)-([0-9]*)$/), u = c ? c[1] : s, f = c ? parseInt(c[2]) + 1 : 2, d = `${u}-${f}`;
      for (; t[d] != null; ) d = `${u}-${f++}`;
      await n({
        token: d,
        value: t[s]
      });
    }
    function r(s) {
      confirm(`Are you sure you want to delete the color ${s}?`) && i(s);
    }
    const a = No({
      get() {
        return Object.entries(t);
      },
      set(s) {
        o(Object.fromEntries(s));
      }
    });
    return {
      duplicateColor: l,
      confirmDeleteColor: r,
      colors: t,
      color_list: a,
      settings: e
    };
  }
}), _f = { class: "__cs-h-full __cs-flex __cs-flex-col" }, Yf = { class: "__cs-p-2 __cs-bg-gray-700 __cs-text-white __cs-flex __cs-items-center __cs-space-x-2" }, kf = { class: "__cs-rounded-group __cs-border-group" }, Jf = {
  key: 0,
  class: "__cs-flex-1 __cs-flex __cs-flex-col __cs-overflow-auto __cs-overscroll-contain"
}, zf = { class: "__cs-flex __cs-items-center __cs-justify-center __cs-pr-2" }, Qf = ["onClick"], Zf = ["onClick"], qf = {
  key: 1,
  class: "__cs-flex-1 __cs-flex __cs-items-center __cs-justify-center __cs-text-gray-600"
};
function eu(e, t, n, o, i, l) {
  const r = Dn("button-ghost"), a = Dn("svg-icon"), s = Dn("color-palette-item"), c = Dn("draggable");
  return He(), pt("div", _f, [
    Je("div", Yf, [
      t[4] || (t[4] = Je("div", { class: "__cs-flex-grow" }, null, -1)),
      t[5] || (t[5] = Je("div", { class: "__cs-text-gray-400" }, "Create", -1)),
      Je("div", kf, [
        qt(r, { to: "/colors/create" }, {
          default: sn(() => t[1] || (t[1] = [
            pr("Solid")
          ])),
          _: 1
        }),
        qt(r, { to: "/colors/create?type=scale" }, {
          default: sn(() => t[2] || (t[2] = [
            pr("Scale")
          ])),
          _: 1
        }),
        qt(r, { to: "/colors/create?type=alias" }, {
          default: sn(() => t[3] || (t[3] = [
            pr("Alias")
          ])),
          _: 1
        })
      ])
    ]),
    e.color_list.length || e.settings.include_transparent || e.settings.include_current || e.settings.include_inherit ? (He(), pt("div", Jf, [
      e.color_list.length ? (He(), xn(c, {
        key: 0,
        modelValue: e.color_list,
        "onUpdate:modelValue": t[0] || (t[0] = (u) => e.color_list = u),
        "item-key": "0",
        handle: ".handle"
      }, {
        item: sn(({ element: [u, f] }) => [
          qt(s, {
            color: f,
            token: u.toString()
          }, {
            default: sn(() => [
              Je("div", zf, [
                Je("button", {
                  onClick: Ei((d) => e.confirmDeleteColor(u.toString()), ["prevent"]),
                  class: "__cs-p-2 hover:__cs-bg-gray-700 hover:__cs-rounded-t-md __cs-text-gray-300 hover:__cs-text-white"
                }, [
                  qt(a, {
                    name: "delete",
                    class: "__cs-fill-current __cs-h-4"
                  })
                ], 8, Qf),
                Je("button", {
                  onClick: Ei((d) => e.duplicateColor(u.toString()), ["prevent"]),
                  class: "__cs-p-2 hover:__cs-bg-gray-700 hover:__cs-rounded-t-md __cs-text-gray-300 hover:__cs-text-white"
                }, [
                  qt(a, {
                    name: "copy",
                    class: "__cs-fill-current __cs-h-4"
                  })
                ], 8, Zf)
              ])
            ]),
            _: 2
          }, 1032, ["color", "token"])
        ]),
        _: 1
      }, 8, ["modelValue"])) : Gt("", !0),
      e.settings.include_transparent ? (He(), xn(s, {
        key: 1,
        color: "transparent",
        token: "transparent",
        css: "",
        locked: "",
        help: "CSS `transparent` value. Configure in settings."
      })) : Gt("", !0),
      e.settings.include_current ? (He(), xn(s, {
        key: 2,
        color: "currentColor",
        token: "current",
        css: "",
        locked: "",
        help: "CSS `currentColor` value. Configure in settings."
      })) : Gt("", !0),
      e.settings.include_inherit ? (He(), xn(s, {
        key: 3,
        color: "inherit",
        token: "inherit",
        css: "",
        locked: "",
        help: "CSS `inherit` value. Configure in settings."
      })) : Gt("", !0)
    ])) : (He(), pt("div", qf, " Your palette is empty. "))
  ]);
}
const ru = /* @__PURE__ */ rs(Wf, [["render", eu]]);
export {
  ru as default
};
