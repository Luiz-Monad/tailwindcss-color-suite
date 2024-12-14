import { d as i, X as m, _, g as d, o as r, l as a, k as e, Y as o, F as f } from "./app.main-CurCMLXX.mjs";
const V = i({
  setup() {
    const { settings: t } = m();
    return {
      settings: t
    };
  }
}), b = { class: "__cs-p-4 __cs-space-y-4" }, v = { class: "__cs-flex __cs-items-center __cs-space-x-2" }, $ = { class: "__cs-flex __cs-items-center __cs-space-x-2" }, S = { class: "__cs-p-4 __cs-space-y-4" }, x = { class: "__cs-flex __cs-items-center __cs-space-x-2" }, y = { class: "__cs-flex __cs-items-center __cs-space-x-2" }, U = { class: "__cs-flex __cs-items-center __cs-space-x-2" };
function k(t, s, u, c, p, g) {
  const l = d("toggle");
  return r(), a("section", null, [
    s[10] || (s[10] = e("div", { class: "__cs-p-2 __cs-bg-gray-800" }, [
      e("h3", { class: "__cs-font-bold" }, "Panel Settings")
    ], -1)),
    e("div", b, [
      e("label", v, [
        o(l, {
          modelValue: t.settings.open_button,
          "onUpdate:modelValue": s[0] || (s[0] = (n) => t.settings.open_button = n)
        }, null, 8, ["modelValue"]),
        s[5] || (s[5] = e("div", null, "Show color suite button", -1))
      ]),
      e("label", $, [
        o(l, {
          modelValue: t.settings.float_panel,
          "onUpdate:modelValue": s[1] || (s[1] = (n) => t.settings.float_panel = n)
        }, null, 8, ["modelValue"]),
        s[6] || (s[6] = e("div", null, "Float over content", -1))
      ])
    ]),
    s[11] || (s[11] = e("div", { class: "__cs-p-2 __cs-bg-gray-800" }, [
      e("h3", { class: "__cs-font-bold" }, "Palette Settings")
    ], -1)),
    e("div", S, [
      e("label", x, [
        o(l, {
          modelValue: t.settings.include_transparent,
          "onUpdate:modelValue": s[2] || (s[2] = (n) => t.settings.include_transparent = n)
        }, null, 8, ["modelValue"]),
        s[7] || (s[7] = e("div", null, "Include transparent color", -1))
      ]),
      e("label", y, [
        o(l, {
          modelValue: t.settings.include_current,
          "onUpdate:modelValue": s[3] || (s[3] = (n) => t.settings.include_current = n)
        }, null, 8, ["modelValue"]),
        s[8] || (s[8] = e("div", null, "Include currentColor color", -1))
      ]),
      e("label", U, [
        o(l, {
          modelValue: t.settings.include_inherit,
          "onUpdate:modelValue": s[4] || (s[4] = (n) => t.settings.include_inherit = n)
        }, null, 8, ["modelValue"]),
        s[9] || (s[9] = e("div", null, "Include inherit color", -1))
      ])
    ])
  ]);
}
const B = /* @__PURE__ */ _(V, [["render", k]]), C = i({
  components: { SettingsEditor: B },
  setup() {
    return {};
  }
});
function F(t, s, u, c, p, g) {
  const l = d("settings-editor");
  return r(), a(f, null, [
    s[0] || (s[0] = e("div", { class: "__cs-p-2 __cs-bg-gray-700 __cs-text-white" }, [
      e("h2", { class: "__cs-text-lg __cs-font-semibold" }, "Settings")
    ], -1)),
    o(l)
  ], 64);
}
const w = /* @__PURE__ */ _(C, [["render", F]]);
export {
  w as default
};
