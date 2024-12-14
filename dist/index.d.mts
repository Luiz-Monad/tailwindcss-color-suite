import { Plugin } from 'vite';
import * as tailwindcss_types_config from 'tailwindcss/types/config';
import { Config } from 'tailwindcss';

declare function colorSuitePlugin(options?: {
    config?: string;
}): Plugin;

/**
 * @param {import('@sveltejs/kit').Config} [svelteKitConfig]
 * @returns {import('@sveltejs/kit').Config}
 */
declare function colorSuiteSvelteKitConfig(svelteKitConfig: any): Record<string, any>;
declare function colorSuiteSveltePlugin(options?: Parameters<typeof colorSuitePlugin>[0]): Plugin[];

declare class Point {
    x: number;
    y: number;
    constructor();
    constructor(x: number, y: number);
    constructor(x_or_point_like: Partial<{
        x: number;
        y: number;
    }>);
    toString(): string;
    toArray(): number[];
    length(): number;
    static normalize(point: Point): Point;
    static add(p1: Point, p2: Point): Point;
    static subtract(p1: Point, p2: Point): Point;
    static multiply(p1: Point, p2: Point): Point;
    static divide(p1: Point, p2: Point): Point;
    static min(min: number, p: Point): Point;
    static max(max: number, p: Point): Point;
}

type ColorHSV = {
    h: number;
    s: number;
    v: number;
};
type ColorHSVA = ColorHSV & {
    a: number;
};

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

declare function configToTailwindColors(color_config: ColorSuiteConfig, use_rgba?: boolean): TailwindColors;
declare function tailwindColors(color_config?: ColorSuiteConfig): tailwindcss_types_config.RecursiveKeyValuePair<string, string>;

interface ColorConfigStore {
    path: string;
    read(nocache?: boolean): Promise<ColorSuiteConfig>;
    write(config: ColorSuiteConfig): Promise<void>;
    store(config: ColorSuiteConfig): Promise<void>;
    match(path: string): boolean;
}
declare function createConfigStore(userDefinedPath?: string): Promise<ColorConfigStore>;

export { type ColorConfigStore, colorSuitePlugin, colorSuiteSvelteKitConfig, colorSuiteSveltePlugin, configToTailwindColors, createConfigStore, tailwindColors };
