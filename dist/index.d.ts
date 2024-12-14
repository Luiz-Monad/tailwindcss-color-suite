export { c as colorSuitePlugin } from './plugin.vite-mD1aS65_.js';
import 'vite';

type ColorHSV = {
    h: number;
    s: number;
    v: number;
};
type ColorHSVA = ColorHSV & {
    a: number;
};

interface Point {
    x: number;
    y: number;
}
interface CSComponentCurve {
    start: number;
    mid: number;
    end: number;
    controls: [Point, Point, Point, Point];
}
type CSColorSolid = ColorHSVA;
interface CSColorScale {
    hue_offset: number;
    use_hue_curve: boolean;
    hue_curve: CSComponentCurve;
    saturation_curve: CSComponentCurve;
    value_curve: CSComponentCurve;
    start: number;
    end: number;
    steps: number;
}
type CSColorAlias = string;
type CSColor = CSColorAlias | CSColorScale | CSColorSolid;
interface ColorSuiteSettings {
    open_button: boolean;
    float_panel: boolean;
    include_transparent: boolean;
    include_current: boolean;
    include_inherit: boolean;
}
type ColorSuiteColors = {
    [key: string]: CSColor;
};
interface ColorSuiteConfig {
    colors: ColorSuiteColors;
    settings: ColorSuiteSettings;
}

interface ColorConfigStore {
    path: string;
    read(nocache?: boolean): Promise<ColorSuiteConfig>;
    write(): Promise<void>;
    store(config: ColorSuiteConfig): Promise<void>;
    match(path: string): boolean;
}

declare function createConfigStore(userDefinedPath?: string): Promise<ColorConfigStore>;

export { type ColorConfigStore, type ColorSuiteConfig, createConfigStore };
