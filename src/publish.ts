import { CommandModule } from 'yargs';
export const publishCommand: CommandModule = {
    command: ['publish'],
    describe: 'Automatically modify the version number in package.json, automatically generate changelog files, submit commit and tag, and automatically publish',
    builder: yargs => {
        yargs.option("patch", {
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
          .option("prepatch [identifier]", {
            alias: "prepatch",
            demand: true,
            default: "beta",
            describe:
              "increments the patch version, then makes a prerelease (default: beta)",
            type: "string",
          })
          .option("preminor [identifier]", {
            alias: "preminor",
            demand: true,
            default: "beta",
            describe:
              "increments the minor version, then makes a prerelease (default: beta)",
            type: "string",
          })
          .option("premajor [identifier]", {
            alias: "premajor",
            demand: true,
            default: "beta",
            describe:
              "increments the major version, then makes a prerelease (default: beta)",
            type: "string",
          })
          .option("prerelease [identifier]", {
            alias: "prerelease",
            demand: true,
            default: "beta",
            describe: "increments version, then makes a prerelease (default: beta)",
            type: "string",
          })
        return yargs;
    },
    handler: async argv => {
        const params: string[] = [];
        console.log(params)
        console.log(argv)
    }
};