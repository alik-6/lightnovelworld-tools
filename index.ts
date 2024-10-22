import { build, plugin, write } from "bun";
import manifest from "./src/manifest";

await build({
  entrypoints: ["./src/content-script.ts", "./src/background.ts"],
  outdir: "ext/",
  target: "browser",
  plugins: [
    {
      name: "ManifestToJSON",
      target: "browser",
      setup: async (build) => {
        await write(
          `${build.config.outdir}/manifest.json`,
          JSON.stringify(manifest, undefined, 2)
        );
      },
    },
  ],
});
