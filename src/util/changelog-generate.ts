import conventionalChangelog from "conventional-changelog";
import fs from "fs";
import path from "path";

export const changelogGenerate = async () => {
  const filePath = path.resolve(process.cwd(), "CHANGELOG.md");
  const changelog = conventionalChangelog({
    preset: "angular",
  });
  const currentFileStr = fs.readFileSync(filePath, "utf8");
  const res = await streamToBuffer(changelog);
  fs.writeFileSync(filePath, `${res.toString()}\n\n${currentFileStr}`);
};

const streamToBuffer = (stream): Promise<Buffer> => {
  return new Promise((resolve, reject) => {
    let buffers = [];
    stream.on("error", reject);
    stream.on("data", (data) => buffers.push(data));
    stream.on("end", () => resolve(Buffer.concat(buffers)));
  });
};
