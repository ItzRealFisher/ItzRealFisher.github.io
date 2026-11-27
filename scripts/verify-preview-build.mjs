import { access, readFile } from "node:fs/promises";
import { constants } from "node:fs";
const required=["index.html","about/index.html","projects/index.html","projects/blockboss/index.html","discord/index.html","404.html","assets"];
for(const file of required)await access(`dist-preview/${file}`,constants.F_OK);
const nested=await readFile("dist-preview/projects/blockboss/index.html","utf8");
for(const text of ["https://www.itzfisher.org/preview/projects/blockboss","noindex, nofollow, noarchive","/preview/assets/"])if(!nested.includes(text))throw new Error(`Preview output is missing: ${text}`);
console.log("Preview static routes, canonical metadata, noindex, and base-prefixed assets verified.");
