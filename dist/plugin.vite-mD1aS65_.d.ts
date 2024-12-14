import { Plugin } from 'vite';

declare function colorSuitePlugin(options?: {
    config?: string;
}): Plugin;

export { colorSuitePlugin as c };
