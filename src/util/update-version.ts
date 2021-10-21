import fs from "fs";
import { green } from "chalk";
import path from "path";
import { getNewVersion } from "../version";
export const updatePackageJsonVersion = (options) => {
  const packageFile = path.resolve(process.cwd(), "package.json");
  let packageFileData;
  let version;
  try {
    packageFileData = fs.readFileSync(packageFile, "utf8");
    version = JSON.parse(packageFileData).version;
  } catch (err) {
    throw new Error("Can not find package.json in current work directory!");
  }
  const metadata = getNewVersion(options, version);
  return new Promise((resolve, reject) => {
    fs.writeFile(
      packageFile,
      packageFileData.replace(version, metadata.version),
      "utf8",
      (err) => {
        if (err) reject(err);
        resolve(metadata);
      }
    );
  });
};
