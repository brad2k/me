import type { DesignTokens } from "style-dictionary/types";

export default {
  border: {
    radius: {
      $type: "dimension",
      s: {
        $value: "0.2rem",
      },
      m: {
        $value: "0.75rem",
      },
      l: {
        $value: "2.5rem",
      },
    },
  },
} satisfies DesignTokens;
