import type { DesignTokens } from "style-dictionary/types";

export default {
  color: {
    clay: {
      400: {
        $value: "oklch(0.685 0.13 31)",
        $type: "color",
        $description: "Accent — dark mode",
      },
      500: {
        $value: "oklch(0.608 0.135 31)",
        $type: "color",
        $description: "Accent — light mode",
      },
    },
  },
} satisfies DesignTokens;
