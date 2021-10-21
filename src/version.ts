import semver from "semver";
import { red } from "chalk";

interface MetaData {
  version?: string;
  prefix?: string;
}
export const getNewVersion = (options, version) => {
  const semverList = [
    ["patch", "Bump version "],
    ["minor", "Release version "],
    ["major", "Release major version "],
  ];
  const preSemverList = ["prepatch", "preminor", "premajor", "prerelease"];

  const metadata: MetaData = {};

  const increase = (v, release, identifier) => {
    return semver.inc(v, release, identifier);
  };

  semverList.forEach((sem) => {
    if (options[sem[0]] !== undefined) {
      if (metadata.version) {
        console.error(
          `${red(
            "You specified more than one semver type, please specify only one!"
          )}`
        );
        process.exit(1);
      }
      const identifier =
        typeof options[sem[0]] === "boolean" ? "beta" : options[sem[0]];
      metadata.version = increase(version, sem[0], identifier);
      metadata.prefix = sem[1];
    }
  });

  preSemverList.forEach((sem) => {
    if (options[sem] !== undefined) {
      if (metadata.version) {
        console.error(
          `${red(
            "You specified more than one semver type, please specify only one!"
          )}`
        );
        process.exit(1);
      }
      const identifier =
        typeof options[sem] === "boolean" ? "beta" : options[sem];
      metadata.version = increase(version, sem, identifier);
      metadata.prefix = `Prerelease ${identifier} version `;
    }
  });
  return metadata;
};
