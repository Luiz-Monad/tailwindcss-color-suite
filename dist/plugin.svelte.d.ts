import { Plugin } from 'vite';
import { c as colorSuitePlugin$1 } from './plugin.vite-mD1aS65_.js';

declare function colorSuiteSvelteConfig<Config extends Record<string, any>>(svelteKitConfig?: Config): Config;
declare function colorSuiteHandler({ event, resolve }: {
    event: any;
    resolve: any;
}): Promise<any>;
declare function colorSuitePlugin(options?: Parameters<typeof colorSuitePlugin$1>[0]): Plugin[];

export { colorSuiteHandler, colorSuitePlugin, colorSuiteSvelteConfig };
