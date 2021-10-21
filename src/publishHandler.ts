import { updatePackageJsonVersion } from "./util/update-version";
import { changelogGenerate } from "./util/changelog-generate";
import { execShell } from "./util/exec-shell";
import { runMain } from "module";

export const publishHanduler = (options) => {
  try {
    updatePackageJsonVersion(options).then((metadata) => {
        runMain(metadata)
    });
  } catch (err) {
    throw err;
  }
  async function runMain(metadata) {
    await changelogGenerate();
    execShell(metadata);
  }
};
