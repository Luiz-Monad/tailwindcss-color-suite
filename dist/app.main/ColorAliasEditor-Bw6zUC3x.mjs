var Ve = Object.defineProperty;
var xe = (e, s, o) => s in e ? Ve(e, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[s] = o;
var G = (e, s, o) => xe(e, typeof s != "symbol" ? s + "" : s, o);
import { a6 as we, a7 as J, a8 as re, a9 as ke, aa as Ce, ab as Se, ac as le, ad as Ue, h as N, $ as R, ae as K, a1 as M, a3 as b, af as T, ag as Me, ah as ae, ai as X, a5 as ne, aj as U, ak as j, al as W, d as F, _ as z, g as C, o as g, l as y, k as _, m as L, Y as i, w as $, c as k, n as Z, Z as _e, F as B, am as V, an as Ae, p as q, q as H, v as Ee, ao as ue, b as pe, ap as He, aq as Be, t as A, j as Y, u as Te, i as ce, r as Re, a as Le, f as Fe, e as ze, ar as de, as as ie, s as ve } from "./app.main-CurCMLXX.mjs";
import "virtual:color-suite/config/colors";
import { P as Pe, H as je, S as De, V as Oe, g as Q, C as ee, a as se } from "./value-curve.fragment-Lw9fXvnN.mjs";
class oe {
  constructor() {
    G(this, "token");
    G(this, "value");
  }
}
class te {
  constructor() {
    G(this, "token");
    G(this, "value");
  }
}
function he(e = { h: 0, s: 100, v: 100, a: 100 }) {
  const s = { flush: "sync", immediate: !0 };
  let o, t, l;
  if (we(e))
    l = e, o = J(e), t = re(e);
  else if (ke(e)) {
    let { r: w, g: S, b: O } = e;
    l = Ce(e), o = Me(e), t = { r: w, g: S, b: O };
  } else if (Se(e))
    l = le(e), o = { ...ae(e), a: 100 }, t = e;
  else if (Ue(e)) {
    let { h: w, s: S, v: O } = e, I = { h: w, s: S, v: O, a: 100 }, { r: ge, g: ye, b: $e } = X(I);
    l = N(I), o = I, t = { r: ge, g: ye, b: $e };
  } else {
    let { r: w, g: S, b: O } = X(e);
    l = N(e), o = e, t = { r: w, g: S, b: O };
  }
  const u = R(o), { h: n, s: r, v: a, a: m } = K(u), d = R(t), { r: c, g: h, b: p } = K(d), f = M(l);
  let v = !1;
  b(m, () => {
    v || (v = !0, f.value = N(u), T(() => v = !1));
  }, s);
  function P() {
    if (!v) {
      v = !0;
      let w = X(u);
      c.value = w.r, h.value = w.g, p.value = w.b, f.value = N(u), T(() => v = !1);
    }
  }
  b(n, P, s), b(r, P, s), b(a, P, s);
  function x() {
    if (!v) {
      v = !0;
      let w = ae(d);
      n.value = w.h, r.value = w.s, a.value = w.v, f.value = le(d), T(() => v = !1);
    }
  }
  b(c, x, s), b(h, x, s), b(p, x, s);
  function E() {
    if (!v) {
      v = !0;
      let w = re(f.value);
      c.value = w.r, h.value = w.g, p.value = w.b;
      let S = J(f.value);
      n.value = S.h, r.value = S.s, a.value = S.v, m.value = S.a, T(() => v = !1);
    }
  }
  return b(f, E, s), R({
    h: n,
    s: r,
    v: a,
    a: m,
    r: c,
    g: h,
    b: p,
    hex: f
  });
}
function D(e, s) {
  const o = e.getContext("webgl2", { premultipliedAlpha: !1 });
  if (!o) throw new Error("Unable to get WebGL context.");
  const t = window.devicePixelRatio || 1;
  let l = o.createBuffer();
  o.bindBuffer(o.ARRAY_BUFFER, l), o.bufferData(o.ARRAY_BUFFER, new Float32Array([-1, 3, 3, -1, -1, -1]), o.STATIC_DRAW);
  const u = me(o, o.VERTEX_SHADER, Pe), n = me(o, o.FRAGMENT_SHADER, s), r = Ge(o, u, n), a = fe(o, r, "2fv", "resolution");
  o.useProgram(r), new ResizeObserver((h) => ne(d)).observe(e);
  function d() {
    if (!o) return;
    const h = e.getBoundingClientRect(), p = e.width = h.width * t, f = e.height = h.height * t;
    o.viewport(0, 0, p, f), a([p, f]), o.drawArrays(o.TRIANGLE_FAN, 0, 3);
  }
  function c() {
    if (!o) return;
    let h = o.getExtension("WEBGL_lose_context");
    h && h.loseContext();
  }
  return {
    createUniform: (h, p) => fe(o, r, h, p),
    render: ne(d),
    destroy: c
  };
}
function me(e, s, o) {
  let t = e.createShader(s);
  if (!t) throw new Error("Unable to create shader1");
  if (e.shaderSource(t, o), e.compileShader(t), !e.getShaderParameter(t, e.COMPILE_STATUS)) throw new Error("Unable to create shader2");
  return t;
}
function Ge(e, s, o) {
  let t = e.createProgram();
  if (!t) throw new Error("Unable to create program");
  if (e.attachShader(t, s), e.attachShader(t, o), e.linkProgram(t), !e.getProgramParameter(t, e.LINK_STATUS)) throw new Error("Unable to create program");
  return t;
}
function fe(e, s, o, t) {
  let l = e.getUniformLocation(s, t);
  return function(...n) {
    return e[`uniform${o}`](l, ...n);
  };
}
function Ne(e) {
  const { createUniform: s, render: o, destroy: t } = D(e, je), l = s("1f", "hue_offset"), u = s("2fv", "start_saturation_curve_points"), n = s("2fv", "end_saturation_curve_points"), r = s("2fv", "start_value_curve_points"), a = s("2fv", "end_value_curve_points");
  return {
    render(m, d, c, h, p = 0) {
      l(p), u(m.reduce((f, v) => [...f, ...v.toArray()], [])), n(d.reduce((f, v) => [...f, ...v.toArray()], [])), r(c.reduce((f, v) => [...f, ...v.toArray()], [])), a(h.reduce((f, v) => [...f, ...v.toArray()], [])), o();
    },
    destroy: t
  };
}
function qe(e) {
  const { createUniform: s, render: o, destroy: t } = D(e, De), l = s("1f", "hue_offset"), u = s("2fv", "start_hue_curve_points"), n = s("2fv", "end_hue_curve_points"), r = s("2fv", "start_value_curve_points"), a = s("2fv", "end_value_curve_points");
  return {
    render(m, d, c, h, p = 0) {
      l(p), u(m.reduce((f, v) => [...f, ...v.toArray()], [])), n(d.reduce((f, v) => [...f, ...v.toArray()], [])), r(c.reduce((f, v) => [...f, ...v.toArray()], [])), a(h.reduce((f, v) => [...f, ...v.toArray()], [])), o();
    },
    destroy: t
  };
}
function We(e) {
  const { createUniform: s, render: o, destroy: t } = D(e, Oe), l = s("1f", "hue_offset"), u = s("2fv", "start_hue_curve_points"), n = s("2fv", "end_hue_curve_points"), r = s("2fv", "start_saturation_curve_points"), a = s("2fv", "end_saturation_curve_points");
  return {
    render(m, d, c, h, p = 0) {
      l(p), u(m.reduce((f, v) => [...f, ...v.toArray()], [])), n(d.reduce((f, v) => [...f, ...v.toArray()], [])), r(c.reduce((f, v) => [...f, ...v.toArray()], [])), a(h.reduce((f, v) => [...f, ...v.toArray()], [])), o();
    },
    destroy: t
  };
}
function Ye(e, s) {
  let o;
  b(s, () => {
    const { start: t, end: l } = U(s.saturation_curve), { start: u, end: n } = U(s.value_curve);
    o && o.render(t, l, u, n, s.hue_offset / 360);
  }, { immediate: !0 }), b(e, (t) => {
    if (o && o.destroy(), t) {
      o = Ne(t);
      const { start: l, end: u } = U(s.saturation_curve), { start: n, end: r } = U(s.value_curve);
      o.render(l, u, n, r, s.hue_offset / 360);
    }
  }, {
    flush: "post",
    immediate: !0
  }), j(() => {
    o && o.destroy();
  });
}
function Ie(e, s) {
  let o;
  b(s, () => {
    const { start: t, end: l } = U(s.hue_curve), { start: u, end: n } = U(s.value_curve);
    o && o.render(t, l, u, n, s.hue_offset / 360);
  }, { immediate: !0 }), W(() => {
    b(e, (t) => {
      if (o && o.destroy(), t) {
        o = qe(t);
        const { start: l, end: u } = U(s.hue_curve), { start: n, end: r } = U(s.value_curve);
        o.render(l, u, n, r, s.hue_offset / 360);
      }
    }, { immediate: !0 });
  }), j(() => {
    o && o.destroy();
  });
}
function Xe(e, s) {
  let o;
  b(s, () => {
    const { start: t, end: l } = U(s.hue_curve), { start: u, end: n } = U(s.saturation_curve);
    o && o.render(t, l, u, n, s.hue_offset / 360);
  }, { immediate: !0 }), W(() => {
    b(e, (t) => {
      if (o && o.destroy(), t) {
        o = We(t);
        const { start: l, end: u } = U(s.hue_curve), { start: n, end: r } = U(s.saturation_curve);
        o.render(l, u, n, r, s.hue_offset / 360);
      }
    }, { immediate: !0 });
  }), j(() => {
    o && o.destroy();
  });
}
const Je = Q`#version 300 es

precision highp float;

${ee}
${se}
out vec4 color;

uniform float hue;

void main() {
	vec2 uv = gl_FragCoord.xy/resolution;

	color = vec4(
		hsv2rgb(
			vec3(
				hue,
				uv.x,
				uv.y
			)
		),
		1.0
	);
}
`, Ke = Q`#version 300 es

precision highp float;

${ee}
${se}
out vec4 color;

uniform float saturation;
uniform float value;

void main() {
	vec2 uv = gl_FragCoord.xy/resolution;

	color = vec4(
		hsv2rgb(
			vec3(
				uv.y,
				saturation,
				value
			)
		),
		1.0
	);
}
`, Ze = Q`#version 300 es

precision highp float;

${ee}
${se}
out vec4 color;

uniform float hue;
uniform float saturation;
uniform float value;

void main() {
	vec2 uv = gl_FragCoord.xy/resolution;

	color = vec4(
		hsv2rgb(
			vec3(
				hue,
				saturation,
				value
			)
		),
		uv.y
	);
}
`;
function Qe(e) {
  const { createUniform: s, render: o, destroy: t } = D(e, Je), l = s("1f", "hue");
  return {
    render(u) {
      l(u), o();
    },
    destroy: t
  };
}
function es(e) {
  const { createUniform: s, render: o, destroy: t } = D(e, Ke), l = s("1f", "saturation"), u = s("1f", "value");
  return {
    render(n, r) {
      l(n), u(r), o();
    },
    destroy: t
  };
}
function ss(e) {
  const { createUniform: s, render: o, destroy: t } = D(e, Ze), l = s("1f", "hue"), u = s("1f", "saturation"), n = s("1f", "value");
  return {
    render(r, a, m) {
      l(r), u(a), n(m), o();
    },
    destroy: t
  };
}
function os(e, s) {
  let o;
  b(s, (t) => {
    o && o.render(t / 360);
  }, { immediate: !0 }), W(() => {
    b(e, (t) => {
      o && o.destroy(), t && (o = Qe(t), o.render(s.value / 360));
    }, { immediate: !0 });
  }), j(() => {
    o && o.destroy();
  });
}
function ts(e, s, o) {
  let t;
  b(s, (l) => {
    t && t.render(l / 100, o.value / 100);
  }, { immediate: !0 }), b(o, (l) => {
    t && t.render(s.value / 100, l / 100);
  }, { immediate: !0 }), W(() => {
    b(e, (l) => {
      t && t.destroy(), l && (t = es(l), t.render(s.value / 100, o.value / 100));
    }, { immediate: !0 });
  }), j(() => {
    t && t.destroy();
  });
}
function rs(e, s, o, t) {
  let l;
  b(s, (u) => {
    l && l.render(u / 360, o.value / 100, t.value / 100);
  }, { immediate: !0 }), b(o, (u) => {
    l && l.render(s.value / 360, u / 100, t.value / 100);
  }, { immediate: !0 }), b(t, (u) => {
    l && l.render(s.value / 360, o.value / 100, u / 100);
  }, { immediate: !0 }), W(() => {
    b(e, (u) => {
      l && l.destroy(), u && (l = ss(u), l.render(s.value / 360, o.value / 100, t.value / 100));
    }, { immediate: !0 });
  }), j(() => {
    l && l.destroy();
  });
}
const ls = F({
  props: {
    modelValue: {
      type: [String, Object],
      default: "#ff0000"
    }
  },
  setup(e, { emit: s }) {
    const o = M(), t = M(), l = M(), u = he(e.modelValue), { h: n, s: r, v: a, a: m } = K(u);
    return b(u, () => s("update:modelValue", { h: n.value, s: r.value, v: a.value, a: m.value }), { immediate: !0 }), os(o, n), ts(t, r, a), rs(l, n, r, a), {
      color_space_background: o,
      hue_background: t,
      alpha_background: l,
      color: u
    };
  }
}), as = { class: "__cs-space-y-4" }, ns = { class: "__cs-p-1 __cs-h-10 __cs-bg-black __cs-rounded-md __cs-grid __cs-grid-stack" }, _s = { class: "__cs-flex __cs-space-x-4" }, us = {
  class: "__cs-w-full __cs-rounded-sm __cs-relative __cs-bg-transparency-grid",
  style: { "padding-bottom": "100%" }
}, cs = {
  ref: "color_space_background",
  class: "__cs-absolute __cs-inset-0 __cs-w-full __cs-h-full __cs-rounded-sm"
}, ds = { class: "__cs-w-full __cs-h-full __cs-rounded-sm __cs-relative __cs-bg-transparency-grid" }, is = {
  ref: "hue_background",
  class: "__cs-absolute __cs-inset-0 __cs-w-full __cs-h-full __cs-rounded-sm"
}, vs = { class: "__cs-w-full __cs-h-full __cs-rounded-sm __cs-relative __cs-bg-transparency-grid" }, ms = {
  ref: "alpha_background",
  class: "__cs-absolute __cs-inset-0 __cs-w-full __cs-h-full __cs-rounded-sm"
}, fs = { class: "__cs-flex __cs-space-x-4" }, ps = { class: "__cs-flex-grow __cs-flex __cs-flex-col __cs-space-y-4" }, hs = { class: "__cs-space-y-4" }, bs = { class: "__cs-flex __cs-space-x-4" }, gs = { class: "__cs-flex __cs-space-x-4" };
function ys(e, s, o, t, l, u) {
  const n = C("slider-xy"), r = C("slider"), a = C("text-input"), m = C("form-field");
  return g(), y("div", as, [
    _("div", ns, [
      s[12] || (s[12] = _("div", { class: "__cs-w-full __cs-h-full __cs-rounded-sm __cs-bg-transparency-grid" }, null, -1)),
      _("div", {
        class: "__cs-w-full __cs-h-full __cs-rounded-sm",
        style: L({ background: e.color.hex })
      }, null, 4)
    ]),
    _("div", _s, [
      i(n, {
        x: e.color.s,
        "onUpdate:x": s[0] || (s[0] = (d) => e.color.s = d),
        xModifiers: { number: !0 },
        "x-max": 100,
        y: e.color.v,
        "onUpdate:y": s[1] || (s[1] = (d) => e.color.v = d),
        yModifiers: { number: !0 },
        "y-max": 100,
        class: "__cs-p-1 __cs-flex-grow __cs-bg-black __cs-rounded-md __cs-overflow-hidden __cs-relative"
      }, {
        default: $(() => [
          _("div", us, [
            _("canvas", cs, null, 512)
          ])
        ]),
        _: 1
      }, 8, ["x", "y"]),
      i(r, {
        modelValue: e.color.h,
        "onUpdate:modelValue": s[2] || (s[2] = (d) => e.color.h = d),
        modelModifiers: { number: !0 },
        max: 360,
        vertical: "",
        class: "__cs-p-1 __cs-w-6 __cs-bg-black __cs-rounded-md __cs-relative"
      }, {
        handle: $(() => s[13] || (s[13] = [
          _("div", { class: "__cs-w-6" }, [
            _("svg", {
              viewBox: "0 0 1 1",
              class: "__cs-w-3"
            }, [
              _("path", {
                d: "M0,0 L1,0.5 L0,1",
                class: "__cs-fill-black"
              }),
              _("path", {
                d: "M0,0.25 L0.75,0.5 L0,0.75",
                class: "__cs-fill-white"
              })
            ])
          ], -1)
        ])),
        default: $(() => [
          _("div", ds, [
            _("canvas", is, null, 512)
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]),
      i(r, {
        modelValue: e.color.a,
        "onUpdate:modelValue": s[3] || (s[3] = (d) => e.color.a = d),
        modelModifiers: { number: !0 },
        max: 100,
        vertical: "",
        class: "__cs-p-1 __cs-w-6 __cs-bg-black __cs-rounded-md __cs-relative"
      }, {
        handle: $(() => s[14] || (s[14] = [
          _("div", { class: "__cs-w-6" }, [
            _("svg", {
              viewBox: "0 0 1 1",
              class: "__cs-w-3"
            }, [
              _("path", {
                d: "M0,0 L1,0.5 L0,1",
                class: "__cs-fill-black"
              }),
              _("path", {
                d: "M0,0.25 L0.75,0.5 L0,0.75",
                class: "__cs-fill-white"
              })
            ])
          ], -1)
        ])),
        default: $(() => [
          _("div", vs, [
            _("canvas", ms, null, 512)
          ])
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]),
    _("div", fs, [
      _("div", ps, [
        i(m, { label: "HEX" }, {
          default: $(() => [
            i(a, {
              modelValue: e.color.hex,
              "onUpdate:modelValue": s[4] || (s[4] = (d) => e.color.hex = d)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        i(m, {
          class: "__cs-w-12 __cs-self-end",
          label: "A"
        }, {
          default: $(() => [
            i(a, {
              modelValue: e.color.a,
              "onUpdate:modelValue": s[5] || (s[5] = (d) => e.color.a = d),
              modelModifiers: { number: !0 }
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })
      ]),
      _("div", hs, [
        _("div", bs, [
          i(m, {
            class: "__cs-w-12",
            label: "H"
          }, {
            default: $(() => [
              i(a, {
                modelValue: e.color.h,
                "onUpdate:modelValue": s[6] || (s[6] = (d) => e.color.h = d),
                modelModifiers: { number: !0 }
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          i(m, {
            class: "__cs-w-12",
            label: "S"
          }, {
            default: $(() => [
              i(a, {
                modelValue: e.color.s,
                "onUpdate:modelValue": s[7] || (s[7] = (d) => e.color.s = d),
                modelModifiers: { number: !0 }
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          i(m, {
            class: "__cs-w-12",
            label: "V"
          }, {
            default: $(() => [
              i(a, {
                modelValue: e.color.v,
                "onUpdate:modelValue": s[8] || (s[8] = (d) => e.color.v = d),
                modelModifiers: { number: !0 }
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          })
        ]),
        _("div", gs, [
          i(m, {
            class: "__cs-w-12",
            label: "R"
          }, {
            default: $(() => [
              i(a, {
                modelValue: e.color.r,
                "onUpdate:modelValue": s[9] || (s[9] = (d) => e.color.r = d),
                modelModifiers: { number: !0 }
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          i(m, {
            class: "__cs-w-12",
            label: "G"
          }, {
            default: $(() => [
              i(a, {
                modelValue: e.color.g,
                "onUpdate:modelValue": s[10] || (s[10] = (d) => e.color.g = d),
                modelModifiers: { number: !0 }
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          i(m, {
            class: "__cs-w-12",
            label: "B"
          }, {
            default: $(() => [
              i(a, {
                modelValue: e.color.b,
                "onUpdate:modelValue": s[11] || (s[11] = (d) => e.color.b = d),
                modelModifiers: { number: !0 }
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          })
        ])
      ])
    ])
  ]);
}
const be = /* @__PURE__ */ z(ls, [["render", ys]]), $s = F({
  components: { ColorPicker: be },
  props: {
    modelValue: {
      type: [Object, oe, te],
      default: () => ({}),
      required: !0
    }
  },
  setup(e, { emit: s }) {
    const o = {
      token: "",
      value: { h: 0, s: 100, v: 100, a: 100 }
    }, t = R(o), l = "sync";
    let u = !1;
    return b(() => e.modelValue, (n) => {
      u || (u = !0, n.token || (n.token = o.token), n.value || (n.value = o.value), Object.assign(t, n), T(() => u = !1));
    }, { flush: l, immediate: !0 }), b(t, (n) => {
      u || s("update:modelValue", n);
    }, { flush: l, immediate: !1 }), {
      data: t
    };
  }
}), Vs = { class: "__cs-p-4 __cs-space-y-4" };
function xs(e, s, o, t, l, u) {
  const n = C("text-input"), r = C("form-field"), a = C("color-picker");
  return g(), y("form", Vs, [
    i(r, {
      label: "Color Token",
      help: "Must be a valid JavaScript object key string."
    }, {
      default: $(() => [
        i(n, {
          modelValue: e.data.token,
          "onUpdate:modelValue": s[0] || (s[0] = (m) => e.data.token = m)
        }, null, 8, ["modelValue"])
      ]),
      _: 1
    }),
    i(r, { label: "Color Value" }, {
      default: $(() => [
        i(a, {
          modelValue: e.data.value,
          "onUpdate:modelValue": s[1] || (s[1] = (m) => e.data.value = m)
        }, null, 8, ["modelValue"])
      ]),
      _: 1
    })
  ]);
}
const jo = /* @__PURE__ */ z($s, [["render", xs]]), ws = F({
  props: {
    x: {
      type: Number,
      default: 0
    },
    y: {
      type: Number,
      default: 0
    },
    color: String,
    horizontal: Boolean,
    vertical: Boolean
  },
  setup(e, { emit: s }) {
    const o = M(), t = R({ x: Math.max(0, Math.min(1, e.x)), y: Math.max(0, Math.min(1, e.y)) });
    b(() => e.x, () => t.x = Math.max(0, Math.min(1, e.x))), b(() => e.y, () => t.y = Math.max(0, Math.min(1, e.y)));
    const l = M(!1), u = k(() => l.value == !0 ? "grabbing" : "grab");
    function n(c, h) {
      s(`update:${c}`, Math.max(0, Math.min(1, h)));
    }
    let r;
    function a(c) {
      document.addEventListener("pointermove", m), document.addEventListener("pointerup", d);
      let { x: h, y: p } = o.value.getBoundingClientRect();
      r = [c.clientX - h, c.clientY - p], l.value = !0, c.preventDefault();
    }
    function m({ clientX: c, clientY: h }) {
      let { x: p, width: f, y: v, height: P } = o.value.parentElement.getBoundingClientRect(), [x, E] = r;
      e.vertical || n("x", (c - x - p) / f), e.horizontal || n("y", (h - E - v) / P);
    }
    function d({}) {
      document.removeEventListener("pointermove", m), document.removeEventListener("pointerup", d), l.value = !1;
    }
    return {
      pointerDown: a,
      point_handle: o,
      point: t,
      cursor: u
    };
  }
});
function ks(e, s, o, t, l, u) {
  return g(), y("div", {
    ref: "point_handle",
    onPointerdown: s[0] || (s[0] = _e((...n) => e.pointerDown && e.pointerDown(...n), ["prevent"])),
    onTouchstart: s[1] || (s[1] = _e(() => {
    }, ["prevent"])),
    class: "__cs-z-50 __cs-absolute __cs-top-0 __cs-left-0 __cs-origin-center",
    style: L(`left: ${e.point.x * 100}% !important; top: ${e.point.y * 100}% !important;`)
  }, [
    (g(), y("svg", {
      viewBox: "0 0 1 1",
      class: Z(["__cs-absolute __cs-w-4 __cs-h-4 __cs-transform __cs--translate-x-1/2 __cs--translate-y-1/2", {
        "__cs-rounded-full": !e.horizontal && !e.vertical,
        "__cs-px-2 __cs-rounded-md": e.horizontal && !e.vertical,
        "__cs-py-2 __cs-rounded-md": !e.horizontal && e.vertical
      }]),
      style: L([{ "box-shadow": "0 0 0px 1px rgba(0,0,0,0.8), inset 0 0 0px 1px rgba(255,255,255,0.4)" }, `${e.color ? `background-color: ${e.color};` : ""}`])
    }, null, 6))
  ], 36);
}
const Cs = /* @__PURE__ */ z(ws, [["render", ks]]), Ss = F({
  props: {
    from: { type: Object, required: !0 },
    to: { type: Object, required: !0 }
  },
  setup() {
    return {};
  }
}), Us = ["x1", "y1", "x2", "y2"], Ms = ["x1", "y1", "x2", "y2"];
function As(e, s, o, t, l, u) {
  return g(), y(B, null, [
    _("line", {
      x1: e.from.x * 100,
      y1: e.from.y * 100,
      x2: e.to.x * 100,
      y2: e.to.y * 100,
      class: "__cs-stroke-black",
      "stroke-width": "0.1875rem",
      "vector-effect": "non-scaling-stroke"
    }, null, 8, Us),
    _("line", {
      x1: e.from.x * 100,
      y1: e.from.y * 100,
      x2: e.to.x * 100,
      y2: e.to.y * 100,
      class: "__cs-stroke-blue-300",
      "stroke-width": "0.0625rem",
      "vector-effect": "non-scaling-stroke"
    }, null, 8, Ms)
  ], 64);
}
const Es = /* @__PURE__ */ z(Ss, [["render", As]]), Hs = F({
  components: { PointHandle: Cs, PointConnection: Es },
  props: {
    modelValue: {
      type: Object,
      default: () => ({ start: 0, mid: 0, end: 0, controls: [new V(0, 0.15), new V(0, -0.15), new V(0, 0.15), new V(0, -0.15)] })
    },
    scaleSteps: {
      type: Array
    }
  },
  setup(e, { emit: s }) {
    const o = k({
      get() {
        return e.modelValue;
      },
      set(p) {
        s("update:modelValue", p);
      }
    }), t = k({
      get: () => Math.max(0, Math.min(1, o.value.start + o.value.controls[0].x)),
      set(p) {
        o.value.controls[0].x = p - o.value.start;
      }
    }), l = k({
      get: () => o.value.controls[0].y,
      set(p) {
        o.value.controls[0].y = Math.min(0.5, p);
      }
    }), u = k({
      get: () => Math.max(0, Math.min(1, o.value.mid + o.value.controls[1].x)),
      set(p) {
        o.value.controls[1].x = p - o.value.mid;
        let f = o.value.controls[2].length(), v = V.normalize(o.value.controls[1]);
        o.value.controls[2].x = -v.x * f, o.value.controls[2].y = -v.y * f;
      }
    }), n = k({
      get: () => Math.max(0, Math.min(1, 0.5 + o.value.controls[1].y)),
      set(p) {
        o.value.controls[1].y = Math.min(0, p - 0.5);
        let f = o.value.controls[2].length(), v = V.normalize(o.value.controls[1]);
        o.value.controls[2].x = -v.x * f, o.value.controls[2].y = -v.y * f;
      }
    }), r = k({
      get: () => Math.max(0, Math.min(1, o.value.mid + o.value.controls[2].x)),
      set(p) {
        o.value.controls[2].x = p - o.value.mid;
        let f = o.value.controls[1].length(), v = V.normalize(o.value.controls[2]);
        o.value.controls[1].x = -v.x * f, o.value.controls[1].y = -v.y * f;
      }
    }), a = k({
      get: () => Math.max(0, Math.min(1, 0.5 + o.value.controls[2].y)),
      set(p) {
        o.value.controls[2].y = Math.max(0, p - 0.5);
        let f = o.value.controls[1].length(), v = V.normalize(o.value.controls[2]);
        o.value.controls[1].x = -v.x * f, o.value.controls[1].y = -v.y * f;
      }
    }), m = k({
      get: () => Math.max(0, Math.min(1, o.value.end + o.value.controls[3].x)),
      set(p) {
        o.value.controls[3].x = p - o.value.end;
      }
    }), d = k({
      get: () => Math.max(0, Math.min(1, 1 + o.value.controls[3].y)),
      set(p) {
        o.value.controls[3].y = Math.max(-0.5, p - 1);
      }
    }), c = k(() => `M${o.value.start * 100},0 C${t.value * 100},${l.value * 100} ${u.value * 100},${n.value * 100} ${o.value.mid * 100},50 C${r.value * 100},${a.value * 100} ${m.value * 100},${d.value * 100} ${o.value.end * 100},100 `), h = k(() => {
      if (e.scaleSteps)
        return e.scaleSteps.map(({ step: p, color: f }) => ({
          x: Ae(o.value, 1 - p),
          y: (1 - p) * 100,
          color: f
        }));
    });
    return {
      curve: o,
      start_control_x: t,
      start_control_y: l,
      mid_start_control_x: u,
      mid_start_control_y: n,
      mid_end_control_x: r,
      mid_end_control_y: a,
      end_control_x: m,
      end_control_y: d,
      curve_path: c,
      scale_points: h
    };
  }
}), Bs = { class: "__cs-grid __cs-grid-stack" }, Ts = {
  class: "__cs-relative __cs-w-full __cs-h-full __cs-z-40",
  viewBox: "-0.5 0 100.5 100",
  preserveAspectRatio: "none"
}, Rs = ["d"], Ls = ["d"], Fs = {
  key: 0,
  class: "__cs-relative __cs-w-full __cs-h-full __cs-z-50"
}, zs = { class: "__cs-relative __cs-w-full __cs-h-full __cs-z-50" };
function Ps(e, s, o, t, l, u) {
  const n = C("point-connection"), r = C("point-handle");
  return g(), y("div", Bs, [
    (g(), y("svg", Ts, [
      _("path", {
        d: e.curve_path,
        stroke: "rgba(0,0,0,0.8)",
        "stroke-width": "0.1875rem",
        "vector-effect": "non-scaling-stroke",
        fill: "none"
      }, null, 8, Rs),
      _("path", {
        d: e.curve_path,
        stroke: "rgba(255,255,255,0.8)",
        "stroke-width": "0.0625rem",
        "vector-effect": "non-scaling-stroke",
        fill: "none"
      }, null, 8, Ls),
      i(n, {
        from: { x: e.curve.start, y: 0 },
        to: { x: e.start_control_x, y: e.start_control_y }
      }, null, 8, ["from", "to"]),
      i(n, {
        from: { x: e.curve.mid, y: 0.5 },
        to: { x: e.mid_start_control_x, y: e.mid_start_control_y }
      }, null, 8, ["from", "to"]),
      i(n, {
        from: { x: e.curve.mid, y: 0.5 },
        to: { x: e.mid_end_control_x, y: e.mid_end_control_y }
      }, null, 8, ["from", "to"]),
      i(n, {
        from: { x: e.curve.end, y: 1 },
        to: { x: e.end_control_x, y: e.end_control_y }
      }, null, 8, ["from", "to"])
    ])),
    e.scale_points ? (g(), y("div", Fs, [
      (g(!0), y(B, null, q(e.scale_points, (a, m) => (g(), y("div", {
        key: `step${m}`,
        class: "__cs-absolute __cs-w-3 __cs-h-3 __cs-rounded-full __cs-transform __cs--translate-x-1/2 __cs--translate-y-1/2",
        style: L([{ "box-shadow": "0 0 0px 1px rgba(0,0,0,0.8), inset 0 0 0px 1px rgba(255,255,255,0.4)" }, `left: ${a.x}%; top: ${a.y}%; background: ${a.color};`])
      }, null, 4))), 128))
    ])) : H("", !0),
    _("div", zs, [
      i(r, {
        x: e.curve.start,
        "onUpdate:x": s[0] || (s[0] = (a) => e.curve.start = a),
        y: 0,
        horizontal: "",
        color: "white"
      }, null, 8, ["x"]),
      i(r, {
        x: e.start_control_x,
        "onUpdate:x": s[1] || (s[1] = (a) => e.start_control_x = a),
        y: e.start_control_y,
        "onUpdate:y": s[2] || (s[2] = (a) => e.start_control_y = a),
        color: "white"
      }, null, 8, ["x", "y"]),
      i(r, {
        x: e.mid_start_control_x,
        "onUpdate:x": s[3] || (s[3] = (a) => e.mid_start_control_x = a),
        y: e.mid_start_control_y,
        "onUpdate:y": s[4] || (s[4] = (a) => e.mid_start_control_y = a),
        color: "white"
      }, null, 8, ["x", "y"]),
      i(r, {
        x: e.curve.mid,
        "onUpdate:x": s[5] || (s[5] = (a) => e.curve.mid = a),
        y: 0.5,
        horizontal: "",
        color: "white"
      }, null, 8, ["x"]),
      i(r, {
        x: e.mid_end_control_x,
        "onUpdate:x": s[6] || (s[6] = (a) => e.mid_end_control_x = a),
        y: e.mid_end_control_y,
        "onUpdate:y": s[7] || (s[7] = (a) => e.mid_end_control_y = a),
        color: "white"
      }, null, 8, ["x", "y"]),
      i(r, {
        x: e.end_control_x,
        "onUpdate:x": s[8] || (s[8] = (a) => e.end_control_x = a),
        y: e.end_control_y,
        "onUpdate:y": s[9] || (s[9] = (a) => e.end_control_y = a),
        color: "white"
      }, null, 8, ["x", "y"]),
      i(r, {
        x: e.curve.end,
        "onUpdate:x": s[10] || (s[10] = (a) => e.curve.end = a),
        y: 1,
        horizontal: "",
        color: "white"
      }, null, 8, ["x"])
    ]),
    Ee(e.$slots, "default")
  ]);
}
const js = /* @__PURE__ */ z(Hs, [["render", Ps]]), Ds = F({
  components: { ColorPicker: be, ComponentCurve: js },
  props: {
    modelValue: {
      type: [Object, oe, te],
      required: !0
    }
  },
  setup(e, { emit: s }) {
    const o = {
      token: "",
      value: {
        hue_offset: 0,
        use_hue_curve: !1,
        hue_curve: { start: 0, mid: 0, end: 0, controls: [new V(0, 0.15), new V(0, -0.15), new V(0, 0.15), new V(0, -0.15)] },
        saturation_curve: {
          start: 0.0712608397302399,
          mid: 0.8939969161958811,
          end: 0.9710982667456752,
          controls: [
            new V(0.3005780148198412, 0.17693278356613767),
            new V(-0.23085268257000924, -0.1309309904379728),
            new V(0.08255608502161456, 0.04682271766663773),
            new V(0, -0.15)
          ]
        },
        value_curve: {
          start: 0.9884393360986335,
          mid: 0.8920399545058777,
          end: 0,
          controls: [
            new V(0, 0.15),
            new V(0.07047001579825886, -0.13241592379088396),
            new V(-0.0828818295022945, 0.1557382085799962),
            new V(0.15603926830139547, -0.10184859195044504)
          ]
        },
        start: 50,
        end: 900,
        steps: 18
      }
    }, t = R(o), l = "sync";
    let u = !1;
    b(() => e.modelValue, (x) => {
      u || (u = !0, x.token || (x.token = o.token), x.value || (x.value = o.value), t.token = x.token, Object.assign(t.value, x.value), T(() => u = !1));
    }, { flush: l, immediate: !0 }), b(t, (x) => {
      u || s("update:modelValue", x);
    }, { flush: l, immediate: !1 });
    const n = ue(t.value, "hue_offset", 0), r = ue(t.value, "use_hue_curve"), a = M(), m = M(), d = M(), c = M(), h = k({
      get: () => t.value.hue_curve.mid,
      set(x) {
        t.value.hue_curve.start = x, t.value.hue_curve.mid = x, t.value.hue_curve.end = x;
      }
    });
    b(r, (x) => {
      x || (t.value.hue_curve.start = t.value.hue_curve.mid, t.value.hue_curve.end = t.value.hue_curve.mid, t.value.hue_curve.controls = [new V(0, 0.15), new V(0, -0.15), new V(0, 0.15), new V(0, -0.15)]);
    }, { immediate: !0 });
    const p = he({ h: (t.value.hue_curve.mid * 360 + t.value.hue_offset) % 360, s: t.value.saturation_curve.mid * 100, v: t.value.value_curve.mid * 100 }), f = k({
      get: () => p.hex,
      set(x) {
        let { h: E, s: w, v: S } = J(x);
        E = (E + t.value.hue_offset) % 360 / 360, w /= 100, S /= 100, t.value.hue_curve.mid = E, t.value.saturation_curve.mid = w, t.value.value_curve.mid = S, t.value.use_hue_curve || (t.value.hue_curve.start = E, t.value.hue_curve.end = E);
      }
    });
    b(() => t.value.hue_curve.mid, () => p.h = (t.value.hue_curve.mid * 360 + t.value.hue_offset) % 360), b(() => t.value.saturation_curve.mid, () => p.s = t.value.saturation_curve.mid * 100), b(() => t.value.value_curve.mid, () => p.v = t.value.value_curve.mid * 100);
    const v = k(() => pe(t.value)), P = k(() => He(t.value, v.value));
    return Ye(m, t.value), Ie(d, t.value), Xe(c, t.value), {
      isDarkColor: Be,
      base_hex: f,
      base_color: p,
      hue_slider_background: a,
      hue_curve_background: m,
      saturation_curve_background: d,
      value_curve_background: c,
      data: t,
      scale: t.value,
      scale_colors: v,
      scale_steps: P,
      hue_offset: n,
      use_hue_curve: r,
      hue_slider_value: h
    };
  }
}), Os = { class: "__cs-flex" }, Gs = { class: "__cs-flex __cs-p-4 __cs-pr-0" }, Ns = { class: "__cs-flex-1 __cs-p-4 __cs-space-y-4 __cs-overflow-y-auto __cs-overflow-x-hidden" }, qs = { class: "__cs-flex" }, Ws = { class: "__cs-block __cs-space-y-2" }, Ys = { class: "__cs-flex __cs-space-x-2" }, Is = { class: "__cs-font-medium __cs-flex-grow" }, Xs = { class: "__cs-flex __cs-gap-1/2 __cs-divide-x __cs-divide-neutral-600" }, Js = { class: "__cs-flex __cs-items-center __cs-space-x-2 __cs-px-2" }, Ks = { class: "__cs-flex __cs-items-center __cs-space-x-2 __cs-px-2" }, Zs = {
  class: "__cs-w-full __cs-rounded-sm __cs-relative __cs-bg-transparency-grid",
  style: { "padding-bottom": "100%" }
}, Qs = {
  ref: "hue_curve_background",
  class: "__cs-absolute __cs-inset-0 __cs-w-full __cs-h-full __cs-rounded-sm"
}, eo = { class: "__cs-w-full __cs-h-full __cs-rounded-sm __cs-relative __cs-bg-transparency-grid" }, so = {
  ref: "hue_curve_background",
  class: "__cs-absolute __cs-inset-0 __cs-w-full __cs-h-full __cs-rounded-sm"
}, oo = {
  class: "__cs-w-full __cs-rounded-sm __cs-relative __cs-bg-transparency-grid",
  style: { "padding-bottom": "100%" }
}, to = {
  ref: "saturation_curve_background",
  class: "__cs-absolute __cs-inset-0 __cs-w-full __cs-h-full __cs-rounded-sm"
}, ro = {
  class: "__cs-w-full __cs-rounded-sm __cs-relative __cs-bg-transparency-grid",
  style: { "padding-bottom": "100%" }
}, lo = {
  ref: "value_curve_background",
  class: "__cs-absolute __cs-inset-0 __cs-w-full __cs-h-full __cs-rounded-sm"
}, ao = { class: "__cs-flex __cs-space-x-2" };
function no(e, s, o, t, l, u) {
  const n = C("text-input"), r = C("form-field"), a = C("toggle"), m = C("component-curve"), d = C("slider");
  return g(), y("div", Os, [
    _("div", Gs, [
      _("div", {
        class: Z(["__cs-flex __cs-rounded-md __cs-overflow-hidden", { "__cs-flex-col": e.scale.start < e.scale.end, "__cs-flex-col-reverse": e.scale.start > e.scale.end }])
      }, [
        (g(!0), y(B, null, q(e.scale_colors, (c, h) => (g(), y("div", {
          key: `scale-${h}`,
          class: "__cs-relative __cs-flex-grow __cs-w-12",
          style: L(`background-color: ${c}; `)
        }, [
          _("div", {
            class: Z(["__cs-absolute __cs-right-0 __cs-bottom-0 __cs-p-2 __cs-text-xs", { "__cs-text-black": !e.isDarkColor(c) }])
          }, A(h), 3)
        ], 4))), 128))
      ], 2)
    ]),
    _("div", Ns, [
      i(r, {
        label: "Color Token",
        help: "Must be a valid JavaScript object key string."
      }, {
        default: $(() => [
          i(n, {
            modelValue: e.data.token,
            "onUpdate:modelValue": s[0] || (s[0] = (c) => e.data.token = c)
          }, null, 8, ["modelValue"])
        ]),
        _: 1
      }),
      i(r, { label: "Base Color" }, {
        default: $(() => [
          _("div", qs, [
            i(n, {
              class: "__cs-flex-1",
              modelValue: e.base_hex,
              "onUpdate:modelValue": s[1] || (s[1] = (c) => e.base_hex = c)
            }, null, 8, ["modelValue"])
          ])
        ]),
        _: 1
      }),
      i(r, null, {
        default: $(() => [
          _("div", Ws, [
            _("div", Ys, [
              _("div", Is, A(e.use_hue_curve ? "Hue Curve" : "Hue"), 1),
              _("div", Xs, [
                _("label", Js, [
                  i(n, {
                    modelValue: e.hue_offset,
                    "onUpdate:modelValue": s[2] || (s[2] = (c) => e.hue_offset = c),
                    modelModifiers: { number: !0 },
                    class: "__cs-w-10"
                  }, null, 8, ["modelValue"]),
                  s[11] || (s[11] = _("div", null, "Offset", -1))
                ]),
                _("label", Ks, [
                  i(a, {
                    modelValue: e.use_hue_curve,
                    "onUpdate:modelValue": s[3] || (s[3] = (c) => e.use_hue_curve = c)
                  }, null, 8, ["modelValue"]),
                  s[12] || (s[12] = _("div", null, "Use curve", -1))
                ])
              ])
            ]),
            e.use_hue_curve ? (g(), Y(m, {
              key: 0,
              modelValue: e.scale.hue_curve,
              "onUpdate:modelValue": s[4] || (s[4] = (c) => e.scale.hue_curve = c),
              "scale-steps": e.scale_steps,
              class: "__cs-p-1 __cs-rounded-md __cs-bg-black"
            }, {
              default: $(() => [
                _("div", Zs, [
                  _("canvas", Qs, null, 512)
                ])
              ]),
              _: 1
            }, 8, ["modelValue", "scale-steps"])) : (g(), Y(d, {
              key: 1,
              modelValue: e.hue_slider_value,
              "onUpdate:modelValue": s[5] || (s[5] = (c) => e.hue_slider_value = c),
              modelModifiers: { number: !0 },
              class: "__cs-p-1 __cs-h-8 __cs-bg-black __cs-rounded-md __cs-relative"
            }, {
              handle: $(() => s[13] || (s[13] = [
                _("div", { class: "__cs-h-6" }, [
                  _("svg", {
                    viewBox: "0 0 1 1",
                    class: "__cs-h-3"
                  }, [
                    _("path", {
                      d: "M0,0 L0.5,1 L1,0",
                      class: "__cs-fill-black"
                    }),
                    _("path", {
                      d: "M0.25,0 L0.5,0.75 L0.75,0",
                      class: "__cs-fill-white"
                    })
                  ])
                ], -1)
              ])),
              default: $(() => [
                _("div", eo, [
                  _("canvas", so, null, 512)
                ])
              ]),
              _: 1
            }, 8, ["modelValue"]))
          ])
        ]),
        _: 1
      }),
      i(r, { label: "Saturation Curve" }, {
        default: $(() => [
          i(m, {
            modelValue: e.scale.saturation_curve,
            "onUpdate:modelValue": s[6] || (s[6] = (c) => e.scale.saturation_curve = c),
            "scale-steps": e.scale_steps,
            class: "__cs-p-1 __cs-rounded-md __cs-bg-black"
          }, {
            default: $(() => [
              _("div", oo, [
                _("canvas", to, null, 512)
              ])
            ]),
            _: 1
          }, 8, ["modelValue", "scale-steps"])
        ]),
        _: 1
      }),
      i(r, { label: "Value Curve" }, {
        default: $(() => [
          i(m, {
            modelValue: e.scale.value_curve,
            "onUpdate:modelValue": s[7] || (s[7] = (c) => e.scale.value_curve = c),
            "scale-steps": e.scale_steps,
            class: "__cs-p-1 __cs-rounded-md __cs-bg-black"
          }, {
            default: $(() => [
              _("div", ro, [
                _("canvas", lo, null, 512)
              ])
            ]),
            _: 1
          }, 8, ["modelValue", "scale-steps"])
        ]),
        _: 1
      }),
      _("div", ao, [
        i(r, { label: "Steps" }, {
          default: $(() => [
            i(n, {
              modelValue: e.scale.steps,
              "onUpdate:modelValue": s[8] || (s[8] = (c) => e.scale.steps = c),
              modelModifiers: { number: !0 }
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        i(r, { label: "Start" }, {
          default: $(() => [
            i(n, {
              modelValue: e.scale.start,
              "onUpdate:modelValue": s[9] || (s[9] = (c) => e.scale.start = c),
              modelModifiers: { number: !0 }
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        i(r, { label: "End" }, {
          default: $(() => [
            i(n, {
              modelValue: e.scale.end,
              "onUpdate:modelValue": s[10] || (s[10] = (c) => e.scale.end = c),
              modelModifiers: { number: !0 }
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })
      ])
    ])
  ]);
}
const Do = /* @__PURE__ */ z(Ds, [["render", no]]), _o = F({
  props: {
    modelValue: String,
    omit: Array
  },
  setup(e, { emit: s }) {
    const { colors: o } = Te(), t = k(() => {
      var c;
      return (c = e.modelValue) == null ? void 0 : c.split(".");
    }), l = k(() => t.value ? t.value[0] : void 0), u = R({ ...l.value && t.value.length > 1 ? { [l.value]: !0 } : {} }), n = M(""), r = "sync";
    let a = !1;
    b(() => e.modelValue, (c) => {
      a = !0, n.value = c, T(() => a = !1);
    }, { flush: r, immediate: !0 }), b(n, (c) => {
      a ? a = !1 : s("update:modelValue", c);
    }, { flush: r, immediate: !1 });
    const m = k(() => Object.entries(o).map(([c, h]) => ce(h) ? [c, Re(h, o)] : [c, h]));
    return {
      value: n,
      order: 0,
      open: u,
      colors: o,
      resolved_colors: m,
      hsvaToHex: N,
      colorScaleHexValues: pe,
      isColorAliasResolutionError: Le,
      isColorAlias: ce,
      isColorSolid: Fe,
      isColorScale: ze
    };
  }
}), uo = {
  key: 0,
  class: "__cs-flex-1 __cs-flex __cs-flex-col __cs-space-y-2"
}, co = {
  key: 0,
  class: "__cs-space-y-2"
}, io = { class: "__cs-flex" }, vo = ["onClick", "tabindex"], mo = { class: "__cs-cursor-pointer __cs-relative __cs-flex __cs-group focus-within:__cs-ring-2 __cs-flex-1 __cs-rounded-r-md" }, fo = ["tabindex", "value"], po = { class: "__cs-flex-1 __cs-border-2 __cs-border-r-0 __cs-border-gray-800 __cs-bg-gray-700 group-hover:__cs-bg-gray-600 peer-checked:__cs-border-blue-600 __cs-p-2 __cs-flex __cs-items-center __cs-space-x-2" }, ho = { class: "__cs-grid __cs-grid-stack __cs-overflow-hidden after:__cs-border-3 __cs-rounded after:__cs-border-black after:__cs-rounded-md before:__cs-rounded before:__cs-bg-transparency-grid before:__cs-m-px" }, bo = {
  key: 1,
  class: "__cs-m-px __cs-rounded __cs-flex __cs-overflow-hidden"
}, go = { class: "__cs-flex-1" }, yo = {
  key: 0,
  class: "__cs-text-sm __cs-text-gray-500"
}, $o = {
  key: 1,
  class: "__cs-text-sm __cs-text-gray-500"
}, Vo = {
  key: 0,
  class: "__cs-pl-8 __cs-flex __cs-flex-col __cs-space-y-2"
}, xo = {
  key: 0,
  class: "__cs-cursor-pointer __cs-relative __cs-flex __cs-group focus-within:__cs-ring-2 __cs-rounded-md"
}, wo = ["tabindex", "value"], ko = { class: "__cs-flex-1 __cs-border-2 __cs-border-r-0 __cs-rounded-r-none __cs-border-gray-800 __cs-bg-gray-700 group-hover:__cs-bg-gray-600 peer-checked:__cs-border-blue-600 __cs-p-2 __cs-rounded-md __cs-flex __cs-items-center __cs-space-x-2" }, Co = { class: "__cs-grid __cs-grid-stack __cs-overflow-hidden after:__cs-border-3 __cs-rounded after:__cs-border-black after:__cs-rounded-md before:__cs-rounded before:__cs-bg-transparency-grid before:__cs-m-px" }, So = { class: "__cs-flex-1" }, Uo = {
  key: 0,
  class: "__cs-text-sm __cs-text-gray-500"
}, Mo = {
  key: 1,
  class: "__cs-text-sm __cs-text-gray-500"
}, Ao = {
  key: 1,
  class: "__cs-flex-1 __cs-flex __cs-items-center __cs-justify-center __cs-text-gray-600"
};
function Eo(e, s, o, t, l, u) {
  const n = C("svg-icon");
  return g(), y("div", null, [
    e.resolved_colors.length ? (g(), y("div", uo, [
      (g(!0), y(B, null, q(e.resolved_colors, ([r, a], m) => (g(), y(B, { key: r }, [
        !e.isColorAliasResolutionError(a) && (!e.omit || !e.omit.includes(r.toString())) ? (g(), y("div", co, [
          _("div", io, [
            _("button", {
              onClick: (d) => e.open[r] = !e.open[r],
              type: "button",
              tabindex: m * 1e5,
              class: "__cs-outline-none focus:__cs-border-2 __cs-border-blue-600 __cs-rounded-l-md __cs-flex __cs-justify-center __cs-items-center __cs-w-8 __cs-bg-gray-800 __cs-cursor-pointer"
            }, [
              e.isColorSolid(a) ? (g(), Y(n, {
                key: 0,
                name: "dot",
                class: "__cs-inline-block __cs-h-3 __cs-fill-gray-500"
              })) : H("", !0),
              e.isColorScale(a) ? (g(), Y(n, {
                key: 1,
                name: e.open[r] ? "caret-down" : "caret-forward",
                class: "__cs-inline-block __cs-h-3 __cs-fill-gray-500"
              }, null, 8, ["name"])) : H("", !0)
            ], 8, vo),
            _("label", mo, [
              de(_("input", {
                type: "radio",
                tabindex: m * 1e5 + 1,
                name: "selected_token",
                value: r,
                "onUpdate:modelValue": s[0] || (s[0] = (d) => e.value = d),
                class: "__cs-absolute __cs-inset-0 __cs-peer __cs-opacity-0"
              }, null, 8, fo), [
                [ie, e.value]
              ]),
              _("div", po, [
                _("div", ho, [
                  s[2] || (s[2] = _("svg", {
                    viewBox: "0 0 1 1",
                    class: "__cs-h-6"
                  }, null, -1)),
                  e.isColorSolid(a) ? (g(), y("div", {
                    key: 0,
                    class: "__cs-m-px __cs-rounded",
                    style: L(`background-color: ${e.hsvaToHex(a)};`)
                  }, null, 4)) : H("", !0),
                  e.isColorScale(a) ? (g(), y("div", bo, [
                    (g(!0), y(B, null, q(e.colorScaleHexValues(a), (d, c) => (g(), y("div", {
                      key: `swatch-${r}-${c}`,
                      class: "__cs-flex-grow",
                      style: L(`background-color: ${d};`)
                    }, null, 4))), 128))
                  ])) : H("", !0)
                ]),
                _("div", go, [
                  ve(A(r) + " ", 1),
                  e.isColorAlias(e.colors[r]) ? (g(), y("span", yo, A(e.colors[r]), 1)) : e.isColorSolid(a) ? (g(), y("span", $o, A(e.hsvaToHex(a)), 1)) : H("", !0)
                ])
              ]),
              s[3] || (s[3] = _("div", { class: "__cs-flex peer-checked:__cs-hidden __cs-px-4 __cs-items-center __cs-border-2 __cs-border-l-0 __cs-rounded-l-none __cs-border-gray-800 __cs-bg-gray-700 group-hover:__cs-bg-gray-600 peer-checked:__cs-border-blue-600 __cs-p-2 __cs-rounded-md" }, [
                _("svg", {
                  viewBox: "0 0 1 1",
                  class: "__cs-h-3 __cs-rounded-full __cs-bg-gray-300"
                })
              ], -1)),
              s[4] || (s[4] = _("div", { class: "__cs-hidden peer-checked:__cs-flex __cs-px-4 __cs-items-center __cs-border-2 __cs-border-l-0 __cs-rounded-l-none __cs-border-gray-800 __cs-bg-gray-700 group-hover:__cs-bg-gray-600 peer-checked:__cs-border-blue-600 __cs-p-2 __cs-rounded-md" }, [
                _("svg", {
                  viewBox: "0 0 1 1",
                  class: "__cs-h-3 __cs-rounded-full __cs-bg-blue-500 __cs-border-2 __cs-border-gray-300"
                })
              ], -1))
            ])
          ]),
          e.isColorScale(a) && e.open[r] ? (g(), y("div", Vo, [
            (g(!0), y(B, null, q(e.colorScaleHexValues(a), (d, c, h) => (g(), y(B, {
              key: `token-${r}-${c}`
            }, [
              !e.omit || !e.omit.includes(`${r}.${c}`) ? (g(), y("label", xo, [
                de(_("input", {
                  type: "radio",
                  tabindex: m * 1e5 + h + 2,
                  name: "selected_token",
                  value: `${r}.${c}`,
                  "onUpdate:modelValue": s[1] || (s[1] = (p) => e.value = p),
                  class: "__cs-absolute __cs-inset-0 __cs-peer __cs-opacity-0"
                }, null, 8, wo), [
                  [ie, e.value]
                ]),
                _("div", ko, [
                  _("div", Co, [
                    s[5] || (s[5] = _("svg", {
                      viewBox: "0 0 1 1",
                      class: "__cs-h-6"
                    }, null, -1)),
                    _("div", {
                      class: "__cs-m-px __cs-rounded",
                      style: L(`background-color: ${d};`)
                    }, null, 4)
                  ]),
                  _("div", So, [
                    ve(A(r) + "-" + A(c) + " ", 1),
                    e.isColorAlias(e.colors[r]) ? (g(), y("span", Uo, A(e.colors[r]) + "." + A(c), 1)) : (g(), y("span", Mo, A(d), 1))
                  ])
                ]),
                s[6] || (s[6] = _("div", { class: "__cs-flex peer-checked:__cs-hidden __cs-px-4 __cs-items-center __cs-border-2 __cs-border-l-0 __cs-rounded-l-none __cs-border-gray-800 __cs-bg-gray-700 group-hover:__cs-bg-gray-600 peer-checked:__cs-border-blue-600 __cs-p-2 __cs-rounded-md" }, [
                  _("svg", {
                    viewBox: "0 0 1 1",
                    class: "__cs-h-3 __cs-rounded-full __cs-bg-gray-300"
                  })
                ], -1)),
                s[7] || (s[7] = _("div", { class: "__cs-hidden peer-checked:__cs-flex __cs-px-4 __cs-items-center __cs-border-2 __cs-border-l-0 __cs-rounded-l-none __cs-border-gray-800 __cs-bg-gray-700 group-hover:__cs-bg-gray-600 peer-checked:__cs-border-blue-600 __cs-p-2 __cs-rounded-md" }, [
                  _("svg", {
                    viewBox: "0 0 1 1",
                    class: "__cs-h-3 __cs-rounded-full __cs-bg-blue-500 __cs-border-2 __cs-border-gray-300"
                  })
                ], -1))
              ])) : H("", !0)
            ], 64))), 128))
          ])) : H("", !0)
        ])) : H("", !0)
      ], 64))), 128))
    ])) : (g(), y("div", Ao, " Your palette is empty. "))
  ]);
}
const Ho = /* @__PURE__ */ z(_o, [["render", Eo]]), Bo = F({
  props: {
    modelValue: {
      type: [Object, oe, te],
      required: !0
    }
  },
  components: { ColorSelect: Ho },
  setup(e, { emit: s }) {
    const o = {
      token: "",
      value: ""
    }, t = R(o), l = "sync";
    let u = !1;
    b(() => e.modelValue, (r) => {
      u || (u = !0, r.token || (r.token = o.token), r.value || (r.value = o.value), Object.assign(t, r), T(() => u = !1));
    }, { flush: l, immediate: !0 }), b(t, (r) => {
      u || s("update:modelValue", r);
    }, { flush: l, immediate: !1 });
    const n = k(() => {
      if (e.modelValue) return [e.modelValue.token];
    });
    return {
      data: t,
      omit: n
    };
  }
}), To = { class: "__cs-p-4 __cs-space-y-4" };
function Ro(e, s, o, t, l, u) {
  const n = C("text-input"), r = C("form-field"), a = C("color-select");
  return g(), y("form", To, [
    i(r, {
      label: "Color Token",
      help: "Must be a valid JavaScript object key string."
    }, {
      default: $(() => [
        i(n, {
          modelValue: e.data.token,
          "onUpdate:modelValue": s[0] || (s[0] = (m) => e.data.token = m)
        }, null, 8, ["modelValue"])
      ]),
      _: 1
    }),
    i(r, { label: "References Existing Color" }, {
      default: $(() => [
        i(a, {
          modelValue: e.data.value,
          "onUpdate:modelValue": s[1] || (s[1] = (m) => e.data.value = m),
          omit: e.omit
        }, null, 8, ["modelValue", "omit"])
      ]),
      _: 1
    })
  ]);
}
const Oo = /* @__PURE__ */ z(Bo, [["render", Ro]]);
export {
  jo as C,
  Do as a,
  Oo as b,
  oe as c
};
