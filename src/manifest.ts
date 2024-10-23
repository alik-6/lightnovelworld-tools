import type { Manifest } from "./manifest.type";
const version = 0.2;
export default {
  manifest_version: 3,
  name: "LightNovelWorld-Tools",
  version: String(version),
  description: "A set of tools to brush up LNW",
  // background: {
  //   service_worker: "./background.js",
  //   type: "module",
  // },
  content_scripts: [
    {
      matches: ["https://www.lightnovelworld.com/novel/*/chapter-*"],
      run_at: "document_end",
      js: ["content-script.js"],
    },
  ],
  permissions: [],
  host_permissions: ["https://www.lightnovelworld.com/novel/*/chapter-*"],
} as Manifest;
