import StyleDictionary from "style-dictionary";
import { logVerbosityLevels } from "style-dictionary/enums";

const sd = new StyleDictionary({
  usesDtcg: true,
  source: ["src/tokens/**/*.ts"],
  platforms: {
    css: {
      transformGroup: "css",
      files: [
        {
          destination: "src/styles/primitives.css",
          format: "css/variables",
        },
      ],
    },
  },
  log: {
    verbosity: logVerbosityLevels.verbose,
  },
});

await sd.buildAllPlatforms();
