// src/constants.ts
var COLOR_SUITE_ID = "@tailwindcss-color-suite";
var COLOR_SUITE_PATH = `/${COLOR_SUITE_ID}`;
var COLOR_CONFIG_ID = `virtual:color-suite/config/colors`;
var PREFIXED_COLOR_CONFIG_ID = "\0" + COLOR_CONFIG_ID;
var RESOLVED_COLORS_ID = `virtual:color-suite/colors`;
var PREFIXED_RESOLVED_COLORS_ID = "\0" + RESOLVED_COLORS_ID;
var SETTINGS_CONFIG_ID = `virtual:color-suite/config/settings`;
var PREFIXED_SETTINGS_CONFIG_ID = "\0" + SETTINGS_CONFIG_ID;
var COLOR_CREATE_PATH = `/${COLOR_SUITE_ID}/color/create`;
var COLOR_UPDATE_PATH = `/${COLOR_SUITE_ID}/color/update`;
var COLOR_UPDATE_ALL_PATH = `/${COLOR_SUITE_ID}/color/updateAll`;
var COLOR_DELETE_PATH = `/${COLOR_SUITE_ID}/color/delete`;
var SETTINGS_UPDATE_PATH = `/${COLOR_SUITE_ID}/settings/update`;
var SETTINGS_UPDATED_EVENT = `${COLOR_SUITE_ID}:config-updated`;
var DEFAULT_COLOR_CONFIG = {
  colors: {},
  settings: {
    open_button: true,
    float_panel: false,
    include_current: true,
    include_transparent: true,
    include_inherit: true
  }
};

// src/editor/lib/color/utils.ts
function isHSVAColor(color) {
  return typeof color == "object" && color.h != void 0 && color.a != void 0;
}
function hsvToRGB({ h, s, v }) {
  h /= 360, s /= 100, v /= 100;
  let r = 0, g = 0, b = 0;
  let i = Math.floor(h * 6);
  let f = h * 6 - i;
  let p = v * (1 - s);
  let q = v * (1 - f * s);
  let t = v * (1 - (1 - f) * s);
  switch (i % 6) {
    case 0:
      r = v, g = t, b = p;
      break;
    case 1:
      r = q, g = v, b = p;
      break;
    case 2:
      r = p, g = v, b = t;
      break;
    case 3:
      r = p, g = q, b = v;
      break;
    case 4:
      r = t, g = p, b = v;
      break;
    case 5:
      r = v, g = p, b = q;
      break;
  }
  r = Math.round(r * 255), g = Math.round(g * 255), b = Math.round(b * 255);
  return { r, g, b };
}
function hsvaToRGBA({ h, s, v, a = 100 }) {
  return { ...hsvToRGB({ h, s, v }), a };
}

// src/editor/lib/point.ts
var Point = class _Point {
  x = 0;
  y = 0;
  constructor(x_or_point_like, y) {
    if (typeof x_or_point_like == "object") {
      const { x, y: y2 } = x_or_point_like;
      if (x) this.x = x;
      if (y2) this.y = y2;
    } else if (typeof x_or_point_like == "number") {
      this.x = x_or_point_like;
      if (y) this.y = y;
    }
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
  static normalize(point) {
    let length = point.length();
    if (length == 0) return new _Point();
    return new _Point(point.x / length, point.y / length);
  }
  static add(p1, p2) {
    return new _Point(p1.x + p2.x, p1.y + p2.y);
  }
  static subtract(p1, p2) {
    return new _Point(p1.x - p2.x, p1.y - p2.y);
  }
  static multiply(p1, p2) {
    return new _Point(p1.x * p2.x, p1.y * p2.y);
  }
  static divide(p1, p2) {
    return new _Point(p1.x / p2.x, p1.y / p2.y);
  }
  static min(min, p) {
    return new _Point(Math.min(min, p.x), Math.min(min, p.y));
  }
  static max(max, p) {
    return new _Point(Math.max(max, p.x), Math.max(max, p.y));
  }
};

// src/editor/lib/bezier-curve.ts
var EPSILON = 1e-6;
var TAU = Math.PI * 2;
function approximately(a, b, precision) {
  return Math.abs(a - b) <= (precision || EPSILON);
}
function cuberoot(v) {
  return v < 0 ? -Math.pow(-v, 1 / 3) : Math.pow(v, 1 / 3);
}
function getRoots(pa, pb, pc, pd) {
  var reduce = function(t2) {
    return 0 <= t2 && t2 <= 1;
  };
  var d = -pa + 3 * pb - 3 * pc + pd, a = 3 * pa - 6 * pb + 3 * pc, b = -3 * pa + 3 * pb, c = pa;
  if (approximately(d, 0)) {
    if (approximately(a, 0)) {
      if (approximately(b, 0)) {
        return [];
      }
      return [-c / b].filter(reduce);
    }
    var q = Math.sqrt(b * b - 4 * a * c), a2 = 2 * a;
    return [(q - b) / a2, (-b - q) / a2].filter(reduce);
  }
  a /= d;
  b /= d;
  c /= d;
  var p = (3 * b - a * a) / 3, p3 = p / 3, q = (2 * a * a * a - 9 * a * b + 27 * c) / 27, q2 = q / 2, discriminant = q2 * q2 + p3 * p3 * p3, u1, v1, x1, x2, x3;
  if (discriminant < 0) {
    var mp3 = -p / 3, mp33 = mp3 * mp3 * mp3, r = Math.sqrt(mp33), t = -q / (2 * r), cosphi = t < -1 ? -1 : t > 1 ? 1 : t, phi = Math.acos(cosphi), crtr = cuberoot(r), t1 = 2 * crtr;
    x1 = t1 * Math.cos(phi / 3) - a / 3;
    x2 = t1 * Math.cos((phi + TAU) / 3) - a / 3;
    x3 = t1 * Math.cos((phi + 2 * TAU) / 3) - a / 3;
    return [x1, x2, x3].filter(reduce);
  } else if (discriminant === 0 && p + q != 0) {
    u1 = q2 < 0 ? cuberoot(-q2) : -cuberoot(q2);
    x1 = 2 * u1 - a / 3;
    x2 = -u1 - a / 3;
    return [x1, x2].filter(reduce);
  } else {
    var sd = Math.sqrt(discriminant);
    u1 = cuberoot(-q2 + sd);
    v1 = cuberoot(q2 + sd);
    return [u1 - v1 - a / 3].filter(reduce);
  }
}
var BezierCurve = class {
  P1 = new Point(0, 0);
  P2 = new Point(0.5, 0.5);
  P3 = new Point(0.5, 0.5);
  P4 = new Point(1, 1);
  constructor(points) {
    this.P1 = points[0];
    this.P2 = points[1];
    this.P3 = points[2];
    this.P4 = points[3];
  }
  sample(t) {
    const inverse_t = 1 - t;
    const a = inverse_t * inverse_t * inverse_t;
    const b = 3 * t * inverse_t * inverse_t;
    const c = 3 * t * t * inverse_t;
    const d = t * t * t;
    return new Point(
      this.P1.x * a + this.P2.x * b + this.P3.x * c + this.P4.x * d,
      this.P1.y * a + this.P2.y * b + this.P3.y * c + this.P4.y * d
    );
  }
  getTForY(y) {
    let roots = getRoots(this.P1.y - y, this.P2.y - y, this.P3.y - y, this.P4.y - y);
    return roots[0];
  }
  getXForY(y) {
    let t;
    if (y == 0 || y == 1) t = y;
    else t = this.getTForY(y);
    return this.sample(t).x;
  }
};

// src/editor/lib/component-curve.ts
function componentCurveToBezierPoints(curve) {
  let start = new Point(curve.start, 0);
  let mid = new Point(curve.mid, 0.5);
  let end = new Point(curve.end, 1);
  let C1 = Point.max(0, Point.min(1, Point.add(start, new Point(curve.controls[0]))));
  let C2 = Point.max(0, Point.min(1, Point.add(mid, new Point(curve.controls[1]))));
  let C3 = Point.max(0, Point.min(1, Point.add(mid, new Point(curve.controls[2]))));
  let C4 = Point.max(0, Point.min(1, Point.add(end, new Point(curve.controls[3]))));
  return {
    start: [start, C1, C2, mid],
    end: [mid, C3, C4, end]
  };
}
function sampleComponentCurve(component, y, max = 100) {
  let { start, end } = componentCurveToBezierPoints(component);
  let start_bezier = new BezierCurve(start);
  let end_bezier = new BezierCurve(end);
  if (y < 0.5) return start_bezier.getXForY(y) * max;
  if (y == 0.5) return start[3].x * max;
  return end_bezier.getXForY(y) * max;
}

// src/editor/lib/color-scale/utils.ts
function samplePanelColorScale(color_scale, y) {
  let hue = (sampleComponentCurve(color_scale.hue_curve, y, 360) + (color_scale.hue_offset ?? 0)) % 360;
  let saturation = sampleComponentCurve(color_scale.saturation_curve, y);
  let value = sampleComponentCurve(color_scale.value_curve, y);
  return { h: hue, s: saturation, v: value };
}
function colorScaleHSVAValues(color_scale) {
  let scale = {};
  for (let i = 0; i < color_scale.steps; i++) {
    let step = i / (color_scale.steps - 1);
    let interval = Math.round(step * color_scale.start + (1 - step) * color_scale.end);
    scale[interval] = { ...samplePanelColorScale(color_scale, 1 - step), a: 100 };
  }
  return scale;
}
function colorScaleRGBAValues(color_scale) {
  let scale = {};
  for (let i = 0; i < color_scale.steps; i++) {
    let step = i / (color_scale.steps - 1);
    let interval = Math.round(step * color_scale.start + (1 - step) * color_scale.end);
    scale[interval] = hsvaToRGBA(samplePanelColorScale(color_scale, 1 - step));
  }
  return scale;
}

// src/editor/lib/color-alias.ts
var tokens_looked_up = [];
function resolveAlias(alias, colors, deep = false) {
  if (!deep) tokens_looked_up.length = 0;
  let alias_keys = alias.split(".");
  let token = alias_keys.shift();
  if (!token) throw new Error("Unable to resolve alias: the alias does not contain a valid token reference");
  if (tokens_looked_up.includes(token)) return { message: "Unable to resolve alias: cyclic token reference encountered" };
  else tokens_looked_up.push(token);
  let resolved_color = colors[token];
  if (!resolved_color) return { message: `Unable to resolve alias: ${token} does not exist in the colors config` };
  if (isColorAlias(resolved_color)) resolved_color = resolveAlias(resolved_color, colors, true);
  if (isColorAliasResolutionError(resolved_color)) return resolved_color;
  while (alias_keys.length) {
    let next_token = alias_keys.shift();
    if (!next_token) throw new Error(`Unable to resolve alias: improperly formatted alias`);
    if (isColorAliasResolutionError(resolved_color)) return resolved_color;
    if (isColorSolid(resolved_color)) return { message: `Unable to resolve alias: ${alias} does not exist in the colors config` };
    if (isColorScale(resolved_color)) {
      let hsva_scale = colorScaleHSVAValues(resolved_color);
      resolved_color = hsva_scale[next_token];
      if (!resolved_color) return { message: `Unable to resolve alias: ${token} does not exist in the color scale` };
    }
  }
  return resolved_color;
}

// src/editor/lib/utils.color-suite.ts
function isColorSolid(color) {
  return isHSVAColor(color);
}
function isColorScale(color) {
  return typeof color == "object" && color.hue_curve != void 0 && color.start != void 0;
}
function isColorAlias(color) {
  return typeof color == "string";
}
function isColorAliasResolutionError(object) {
  return typeof object == "object" && !!object.message;
}

// src/editor/lib/utils.tailwind.ts
function createTailwindColorFunction(name, default_value) {
  return (options) => {
    let css_variable = `var(--${name}${default_value ? `, ${default_value}` : ""})`;
    if (!options) return `rgb(${css_variable})`;
    if (options.opacityValue != void 0) return `rgba(${css_variable}, ${options.opacityValue})`;
    if (options.opacityVariable != void 0) return `rgba(${css_variable}, var(${options.opacityVariable}))`;
    return `rgb(${css_variable})`;
  };
}
function colorToTailwind(token, color, colors, use_rgba) {
  let resolved_color = isColorAlias(color) ? resolveAlias(color, colors) : color;
  if (isColorAliasResolutionError(resolved_color)) {
    console.warn(`[Color Suite] ${token} - ${resolved_color.message}`);
    return "#000";
  }
  if (isColorSolid(resolved_color)) {
    const { r, g, b, a } = hsvaToRGBA(resolved_color);
    if (use_rgba) return a == 100 ? `rgb(${[r, g, b].join(",")})` : `rgba(${[r, g, b, a].join(",")})`;
    return createTailwindColorFunction(`color-${token}`, [r, g, b].join(","));
  }
  if (isColorScale(resolved_color)) {
    let tailwind_color_object = {};
    let rgba_scale = colorScaleRGBAValues(resolved_color);
    for (let [modifier, { r, g, b, a }] of Object.entries(rgba_scale)) {
      if (use_rgba) tailwind_color_object[modifier] = a == 100 ? `rgb(${[r, g, b].join(",")})` : `rgba(${[r, g, b, a].join(",")})`;
      else tailwind_color_object[modifier] = createTailwindColorFunction(`color-${token}-${modifier}`, [r, g, b].join(","));
    }
    return tailwind_color_object;
  }
  return "#000";
}

// src/plugin.tailwindcss.ts
function configToTailwindColors(color_config, use_rgba) {
  const { include_current, include_transparent, include_inherit } = color_config.settings;
  let tailwind_color_config = {};
  for (let [token, value] of Object.entries(color_config.colors)) {
    tailwind_color_config[token] = colorToTailwind(token, value, color_config.colors, use_rgba);
  }
  if (include_transparent) tailwind_color_config["transparent"] = "transparent";
  if (include_current) tailwind_color_config["current"] = "currentColor";
  if (include_inherit) tailwind_color_config["inherit"] = "inherit";
  return tailwind_color_config;
}
function tailwindColors(color_config) {
  color_config = Object.assign({}, DEFAULT_COLOR_CONFIG, color_config);
  return configToTailwindColors(color_config);
}
export {
  configToTailwindColors,
  tailwindColors
};
//# sourceMappingURL=plugin.tailwindcss.mjs.map