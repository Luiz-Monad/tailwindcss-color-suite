import { d as S, c as x, a1 as A, $ as E, u as $, a0 as j, e as w, a2 as B, a3 as y, a4 as _, a5 as N, i as U, f as D, _ as O, g as r, o as u, l as R, k as a, t as h, Y as f, j as C, q, w as b, s as g } from "./app.main-CurCMLXX.mjs";
import { C as F, a as P, b as T } from "./ColorAliasEditor-Bw6zUC3x.mjs";
const Y = S({
  components: { ColorSingleEditor: F, ColorScaleEditor: P, ColorAliasEditor: T },
  setup() {
    const e = x(() => {
      switch (d.value.query.type) {
        case "scale":
          return "Color Scale";
        case "alias":
          return "Color Alias";
        default:
          return "Solid Color";
      }
    }), o = A(!0), t = E({}), { colors: c, updateColor: V, deleteColor: k } = $(), { push: i, currentRoute: d } = j(), s = d.value.params.token, n = c[s];
    (!s || !n) && i("/"), t.token = s, w(n) ? t.value = B(n) : t.value = n;
    async function p() {
      (await V(s, t)).success && i("/");
    }
    function m() {
      _(s, n, c), i("/");
    }
    async function v() {
      (await k(s)).success && i("/");
    }
    return y(o, (l) => {
      if (l) return _(s, t.value, c);
      _(s, n, c);
    }), y(t, N(() => {
      o.value && _(s, t.value, c);
    })), {
      preview: o,
      type_name: e,
      deleteSelf: v,
      cancel: m,
      submit: p,
      data: t,
      isColorAlias: U,
      isColorScale: w,
      isColorSolid: D
    };
  }
}), z = { class: "__cs-h-full __cs-flex __cs-flex-col" }, G = { class: "__cs-p-2 __cs-bg-gray-700 __cs-text-white __cs-flex" }, H = { class: "__cs-flex-grow" }, I = { class: "__cs-text-lg __cs-font-semibold" }, J = { class: "__cs-flex __cs-items-center __cs-space-x-2" }, K = { class: "__cs-flex-1 __cs-flex __cs-flex-col __cs-overflow-auto __cs-overscroll-contain" }, L = { class: "__cs-p-2 __cs-flex __cs-space-x-2 __cs-bg-gray-700" }, M = { class: "__cs-flex-grow" }, Q = { class: "__cs-flex __cs-space-x-2" };
function W(e, o, t, c, V, k) {
  const i = r("toggle"), d = r("color-single-editor"), s = r("color-scale-editor"), n = r("color-alias-editor"), p = r("button-red"), m = r("button-neutral"), v = r("button-blue");
  return u(), R("div", z, [
    a("div", G, [
      a("div", H, [
        a("h2", I, "Edit " + h(e.type_name), 1)
      ]),
      a("label", J, [
        o[4] || (o[4] = a("div", { class: "__cs-text-gray-400" }, "Preview", -1)),
        f(i, {
          modelValue: e.preview,
          "onUpdate:modelValue": o[0] || (o[0] = (l) => e.preview = l)
        }, null, 8, ["modelValue"])
      ])
    ]),
    a("div", K, [
      e.isColorSolid(e.data.value) ? (u(), C(d, {
        key: 0,
        modelValue: e.data,
        "onUpdate:modelValue": o[1] || (o[1] = (l) => Object.assign(e.data, l))
      }, null, 8, ["modelValue"])) : e.isColorScale(e.data.value) ? (u(), C(s, {
        key: 1,
        modelValue: e.data,
        "onUpdate:modelValue": o[2] || (o[2] = (l) => Object.assign(e.data, l)),
        class: "__cs-flex-1 __cs-overflow-hidden"
      }, null, 8, ["modelValue"])) : e.isColorAlias(e.data.value) ? (u(), C(n, {
        key: 2,
        modelValue: e.data,
        "onUpdate:modelValue": o[3] || (o[3] = (l) => Object.assign(e.data, l)),
        class: "__cs-flex-1"
      }, null, 8, ["modelValue"])) : q("", !0)
    ]),
    a("div", L, [
      a("div", M, [
        f(p, { onClick: e.deleteSelf }, {
          default: b(() => o[5] || (o[5] = [
            g("Delete")
          ])),
          _: 1
        }, 8, ["onClick"])
      ]),
      a("div", Q, [
        f(m, { onClick: e.cancel }, {
          default: b(() => o[6] || (o[6] = [
            g("Cancel")
          ])),
          _: 1
        }, 8, ["onClick"]),
        f(v, { onClick: e.submit }, {
          default: b(() => o[7] || (o[7] = [
            g("Save")
          ])),
          _: 1
        }, 8, ["onClick"])
      ])
    ])
  ]);
}
const ee = /* @__PURE__ */ O(Y, [["render", W]]);
export {
  ee as default
};
