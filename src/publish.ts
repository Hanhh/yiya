import { CommandModule } from "yargs";
import { publishHanduler } from "./publishHandler";
export const publishCommand: CommandModule = {
  command: ["publish"],
  describe:
    "Automatically modify the version number in package.json, automatically generate changelog files, submit commit and tag, and automatically publish",
  builder: (yargs) => {
    yargs
      .option("patch", {
        alias: "patch",
        demand: false,
        describe: "version when you make backwards-compatible bug fixes.",
        type: "string",
      })
      .option("minor", {
        alias: "minor",
        demand: false,
        describe:
          "version when you add functionality in a backwards-compatible manner",
        type: "string",
      })
      .option("major", {
        alias: "major",
        demand: false,
        describe: "version when you make incompatible API changes",
        type: "string",
      })
      .option("prepatch", {
        alias: "prepatch",
        demand: false,
        // default: "beta",
        describe:
          "increments the patch version, then makes a prerelease (default: beta)",
        type: "string",
      })
      .option("preminor", {
        alias: "preminor",
        demand: false,
        // default: "beta",
        describe:
          "increments the minor version, then makes a prerelease (default: beta)",
        type: "string",
      })
      .option("premajor", {
        alias: "premajor",
        demand: false,
        // default: "beta",
        describe:
          "increments the major version, then makes a prerelease (default: beta)",
        type: "string",
      })
      .option("prerelease", {
        alias: "prerelease",
        demand: false,
        // default: "beta",
        describe: "increments version, then makes a prerelease (default: beta)",
        type: "string",
      });
    return yargs;
  },
  handler: publishHanduler,
};
