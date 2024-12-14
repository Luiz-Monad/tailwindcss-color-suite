export { c as colorSuitePlugin } from './plugin.vite-mD1aS65_.js';
import { Config } from 'tailwindcss';
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
type UnionToParm<U> = U extends any ? (k: U) => void : never;
type UnionToSect<U> = UnionToParm<U> extends ((k: infer I) => void) ? I : never;
type ExtractParm<F> = F extends {
    (a: infer A): void;
} ? A : never;
type SpliceOne<Union> = Exclude<Union, ExtractOne<Union>>;
type ExtractOne<Union> = ExtractParm<UnionToSect<UnionToParm<Union>>>;
type TailwindColors = SpliceOne<Required<Required<Config>['theme']>['colors']>;

interface ConfigStore<T> {
    path: string;
    read(nocache?: boolean): Promise<T>;
    write(): Promise<void>;
    store(config: T): Promise<void>;
    match(path: string): boolean;
}

declare function createConfigStore(userDefinedPath?: string): Promise<ConfigStore<ColorSuiteConfig>>;
declare function createColorStore(userDefinedPath?: string): Promise<ConfigStore<TailwindColors>>;

export { type ColorSuiteConfig, type ConfigStore, createColorStore, createConfigStore };
