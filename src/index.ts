import * as yargs from "yargs";
import { publishCommand } from "./publish";
import { setCommand } from "./setup";
import { green, red } from "chalk";
import { showVersionDialog } from './default';

var argv = yargs

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
      `     ${green("$")} yiya --patch \n     ${green(
        "$"
      )} yiya --prepatch \n     ${green(
        "$"
      )} yiya --prepatch alpha \n     ${green(
        "$"
      )} yiya --major --accessPublic \n     ${green(
        "$"
      )} yiya --patch --remote upstream/branch \n`
  )
  .fail((err) => {
    console.error(`${red(err)}`);
  })
  .help().argv;

const command = process.argv[2] as string;
if(command) {
  if (!["publish", "set"].includes(command)) {
    yargs.showHelp();
  }
}else {
  showVersionDialog()
}


