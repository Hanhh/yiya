import { publishCommand } from './publish';
import { setCommand } from './setup';
const { green, red } = require("chalk");

var argv = require("yargs")

  .usage(
    "[options]\n\n  Version format: MAJOR.MINOR.PATCH (see: https://semver.org/)"
  )
  .command(publishCommand)
  .command(setCommand)
  .option("accessPublic", {
    alias: "accessPublic",
    demand: false,
    describe: "npm publish access=public",
    type: "string",
  })
  .option("-m, remote [remote]", {
    alias: "remote",
    demand: false,
    describe: "remote and branch. format: `upstream/branch`",
    type: "string",
  })
  .help("h")
  .alias("h", "help")
  .epilog(
    "\n  Tip:\n     You should run this script in the root directory of you project or run by npm scripts.\n  Examples:\n" +
      `     ${green("$")} relix --patch \n     ${green("$")} relix --prepatch \n     ${green("$")} relix --prepatch alpha \n     ${green("$")} relix --major --accessPublic \n     ${green("$")} relix --patch --remote upstream/branch \n`
  ).fail((err) => {
    console.error(`${red(err)}`);
  })
  .help().argv;

console.log("hello ", argv.n);
