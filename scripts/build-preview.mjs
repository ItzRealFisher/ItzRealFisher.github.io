import { spawnSync } from "node:child_process";
const environment={...process.env,PREVIEW_BUILD:"true",BUILD_OUT_DIR:"dist-preview"};
for(const command of [["vite","build","--mode","preview"],["node","scripts/generate-static-routes.mjs"]]){
  const result=spawnSync(command[0],command.slice(1),{shell:process.platform==="win32",stdio:"inherit",env:environment});
  if(result.status!==0)process.exit(result.status??1);
}
