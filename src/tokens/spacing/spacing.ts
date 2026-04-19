import type { DesignTokens } from "style-dictionary/types";

export default {
  space: {
    xs: {
      $value: "clamp(0.4375rem, 0.41rem + 0.11vw, 0.5rem)",
    },
    s: {
      $value: "clamp(0.875rem, 0.83rem + 0.22vw, 1rem)",
    },
    m: {
      $value: "clamp(1.3125rem, 1.24rem + 0.33vw, 1.5rem)",
    },
    l: {
      $value: "clamp(2.1875rem, 2.07rem + 0.56vw, 2.5rem)",
    },
    xl: {
      $value: "clamp(3.0625rem, 2.9rem + 0.78vw, 3.5rem)",
    },
    "2xl": {
      $value: "clamp(3.5rem, 3.32rem + 0.89vw, 4rem)",
    },
    "3xl": {
      $value: "clamp(4.375rem, 4.15rem + 1.11vw, 5rem)",
    },
    "4xl": {
      $value: "clamp(6.5625rem, 6.22rem + 1.67vw, 7.5rem)",
    },
    "5xl": {
      $value: "clamp(8.75rem, 8.29rem + 2.22vw, 10rem)",
    },
  },
} satisfies DesignTokens;
