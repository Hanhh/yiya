import conventionalChangelog from "conventional-changelog";
import fs from "fs";
import path from "path";

export const changelogGenerate = () => {
  const filePath = path.resolve(process.cwd(), "CHANGELOG.md");
  const changelog = conventionalChangelog({
    preset: "angular",
  });
  const writerStream = fs.createWriteStream(filePath);
  changelog.pipe(writerStream);
};