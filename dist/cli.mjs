#!/usr/bin/env node

// bin/cli.ts
import { existsSync } from "fs";
import chalk from "chalk";
import { createConfigStore, configToTailwindColors } from "../dist/index.mjs";
var PREFIX = "[Color Suite]";
function logInfo(...args) {
  console.log(...args.map((arg) => chalk.blue(arg)));
}
function logSuccess(...args) {
  console.log(...args.map((arg) => chalk.green(arg)));
}
function logError(...args) {
  console.error(...args.map((arg) => chalk.red(arg)));
}
function logErrorAndExit(...args) {
  logError(...args);
  process.exit(1);
}
async function main() {
  const color_config_store = await createConfigStore();
  const tailwind_config_store = await createConfigStore("tailwindcss.colors.config");
  logInfo(`${PREFIX} Attempting to export the color config file at '${color_config_store.path}'.`);
  let color_config = null;
  try {
    color_config = await color_config_store.read();
  } catch (e) {
    if (existsSync(color_config_store.path)) {
      logError(`${PREFIX} ${e.message}`);
      logErrorAndExit(`${PREFIX} \u274C A color config file exists at '${color_config_store.path}' but it could not be required.`);
    } else {
      logErrorAndExit(`${PREFIX} \u274C The config file '${color_config_store.path}' does not exist.`);
    }
  }
  if (!color_config || typeof color_config != "object") logErrorAndExit(`${PREFIX} \u274C The color config does not export an object.`);
  try {
    let color_object = configToTailwindColors(color_config, true);
    tailwind_config_store.store(color_object);
    await tailwind_config_store.write();
  } catch (e) {
    logError(`${PREFIX} ${e.message}`);
    logErrorAndExit(`${PREFIX} \u274C Unable to write to output file ${tailwind_config_store.path}.`);
  }
  logSuccess(`${PREFIX} \u2714 Exported ${color_config_store.path} to ${tailwind_config_store.path} successfully.`);
}
main();
