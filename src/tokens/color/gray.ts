import type { DesignTokens } from "style-dictionary/types";

export default {
  color: {
    gray: {
      50: {
        $value: "oklch(0.977 0.004 76)",
        $type: "color",
        $description: "Background - light mode",
      },
      100: {
        $value: "oklch(0.958 0.006 73)",
        $type: "color",
        $description: "Selection text — light mode",
      },
      200: {
        $value: "oklch(0.940 0.008 70)",
        $type: "color",
        $description: "Surface — light mode",
      },
      300: {
        $value: "oklch(0.915 0.010 66)",
        $type: "color",
        $description: "Selection bg — dark mode",
      },
      400: {
        $value: "oklch(0.869 0.014 62)",
        $type: "color",
        $description: "Border - light mode / Text — dark mode",
      },
      700: {
        $value: "oklch(0.384 0.022 52)",
        $type: "color",
        $description: "Border - dark mode",
      },
      800: {
        $value: "oklch(0.328 0.018 50)",
        $type: "color",
        $description: "Surface - dark mode",
      },
      900: {
        $value: "oklch(0.162 0.018 46)",
        $type: "color",
        $description: "Primary text - light mode / Selection bg - light mode",
      },
      950: {
        $value: "oklch(0.096 0.014 44)",
        $type: "color",
        $description: "Background - dark mode",
      },
    },
  },
} satisfies DesignTokens;
