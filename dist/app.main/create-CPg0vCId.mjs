import { d as g, $ as v, u as V, a0 as w, c as k, _ as $, g as l, o as a, l as q, k as s, t as x, j as n, q as S, Y as d, w as i, s as p } from "./app.main-CurCMLXX.mjs";
import { C as N, a as j, b as B, c as E } from "./ColorAliasEditor-Bw6zUC3x.mjs";
const O = g({
  components: { ColorSingleEditor: N, ColorScaleEditor: j, ColorAliasEditor: B },
  setup() {
    const e = v(new E()), { createColor: o } = V(), { push: r, currentRoute: c } = w();
    async function _() {
      (await o(e)).success && r("/");
    }
    return {
      type_name: k(() => {
        switch (c.value.query.type) {
          case "scale":
            return "Color Scale";
          case "alias":
            return "Color Alias";
          default:
            return "Solid Color";
        }
      }),
      submit: _,
      data: e
    };
  }
}), U = { class: "__cs-h-full __cs-flex __cs-flex-col" }, h = { class: "__cs-p-2 __cs-bg-gray-700 __cs-text-white" }, A = { class: "__cs-text-lg __cs-font-semibold" }, R = { class: "__cs-flex-1 __cs-flex __cs-flex-col __cs-overflow-auto __cs-overscroll-contain" }, D = { class: "__cs-p-2 __cs-flex __cs-space-x-2 __cs-bg-gray-700" }, F = { class: "__cs-flex __cs-space-x-2" };
function T(e, o, r, c, _, m) {
  const u = l("color-single-editor"), f = l("color-scale-editor"), y = l("color-alias-editor"), C = l("button-neutral"), b = l("button-blue");
  return a(), q("div", U, [
    s("div", h, [
      s("h2", A, "New " + x(e.type_name), 1)
    ]),
    s("div", R, [
      !e.$route.query.type || e.$route.query.type == "single" ? (a(), n(u, {
        key: 0,
        modelValue: e.data,
        "onUpdate:modelValue": o[0] || (o[0] = (t) => Object.assign(e.data, t))
      }, null, 8, ["modelValue"])) : e.$route.query.type == "scale" ? (a(), n(f, {
        key: 1,
        modelValue: e.data,
        "onUpdate:modelValue": o[1] || (o[1] = (t) => Object.assign(e.data, t)),
        class: "__cs-flex-1 __cs-overflow-hidden"
      }, null, 8, ["modelValue"])) : e.$route.query.type == "alias" ? (a(), n(y, {
        key: 2,
        modelValue: e.data,
        "onUpdate:modelValue": o[2] || (o[2] = (t) => Object.assign(e.data, t))
      }, null, 8, ["modelValue"])) : S("", !0)
    ]),
    s("div", D, [
      o[5] || (o[5] = s("div", { class: "__cs-flex-grow" }, null, -1)),
      s("div", F, [
        d(C, { to: "/" }, {
          default: i(() => o[3] || (o[3] = [
            p("Cancel")
          ])),
          _: 1
        }),
        d(b, { onClick: e.submit }, {
          default: i(() => o[4] || (o[4] = [
            p("Create")
          ])),
          _: 1
        }, 8, ["onClick"])
      ])
    ])
  ]);
}
const G = /* @__PURE__ */ $(O, [["render", T]]);
export {
  G as default
};
