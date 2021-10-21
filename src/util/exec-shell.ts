import { green, cyan } from "chalk";
import { exec } from "child_process";
export const execShell = (metadata) => {
  const shellList = [
    `echo "\n${green("[ 1 / 3 ]")} ${cyan("Commit and push to remote")}\n"`,
    "git add .",
    `git commit -m "${metadata.prefix}${metadata.version}"`,
    "git push",
    `echo "\n${green("[ 2 / 3 ]")} ${cyan(`Tag and push tag to remote`)}\n"`,
    `git tag ${metadata.version}`,
    `git push`,
    `echo "\n${green("[ 3 / 3 ]")} ${cyan("Publish to NPM")}\n"`,
  ].join(' && ');
  return new Promise((resolve) => {
    const childExec = exec(
      shellList,
      { maxBuffer: 10000 * 10240 },
      (err, stdout) => {
        if (err) {
          throw err;
        } else {
          resolve(stdout);
        }
      }
    );
    childExec.stdout.pipe(process.stdout);
    childExec.stderr.pipe(process.stderr);
  });
};
