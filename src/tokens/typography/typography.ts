import type { DesignTokens } from "style-dictionary/types";

export default {
  text: {
    // fonts: {
    //   $type: "fontFamily",
    //   serif: {
    //     $value: "Times New Roman, serif",
    //   },
    //   sans: {
    //     $value: "Open Sans, sans-serif",
    //   },
    // },
    // sizes: {
    //   $type: "fontSize",
    //   heading: {
    //     $value: "{dimensions.7}",
    //   },
    //   body: {
    //     $value: "{dimensions.4}",
    //   },
    // },
    weights: {
      $type: "fontWeight",
      regular: {
        $value: 400,
      },
      medium: {
        $value: 500,
      },
      semibold: {
        $value: 600,
      },
      bold: {
        $value: 700,
      },
    },
    lineHeight: {
      $type: "number",
      flat: {
        $value: 1,
      },
      fine: {
        $value: 1.2,
      },
      standard: {
        $value: 1.4,
      },
      loose: {
        $value: 1.7,
      },
    },
    size: {
      "step-000": { $value: "clamp(0.740625rem, 0.73rem + 0.07vw, 0.78125rem)" },
      "step-00":  { $value: "clamp(0.833125rem, 0.79rem + 0.19vw, 0.9375rem)" },
      "step-0":   { $value: "clamp(0.9375rem, 0.87rem + 0.33vw, 1.125rem)" },
      "step-1":   { $value: "clamp(1.055rem, 0.95rem + 0.52vw, 1.35rem)" },
      "step-2":   { $value: "clamp(1.18625rem, 1.03rem + 0.77vw, 1.62rem)" },
      "step-3":   { $value: "clamp(1.335rem, 1.11rem + 1.08vw, 1.94375rem)" },
      "step-4":   { $value: "clamp(1.501875rem, 1.2rem + 1.48vw, 2.3325rem)" },
      "step-5":   { $value: "clamp(1.689375rem, 1.28rem + 1.97vw, 2.799375rem)" },
      "step-6":   { $value: "clamp(1.900625rem, 1.37rem + 2.59vw, 3.359375rem)" },
      "step-7":   { $value: "clamp(2.138125rem, 1.44rem + 3.37vw, 4.03125rem)" },
      "step-8":   { $value: "clamp(2.405625rem, 1.51rem + 4.32vw, 4.8375rem)" },
      "step-9":   { $value: "clamp(2.70625rem, 1.57rem + 5.51vw, 5.805rem)" },
      "step-10":  { $value: "clamp(3.044375rem, 1.61rem + 6.97vw, 6.965625rem)" },
    },

    // typography: {
    //   $type: "typography",
    //   heading: {
    //     $value: {
    //       fontFamily: "{text.fonts.sans}",
    //       fontWeight: "{text.weights.bold}",
    //       fontSize: "{text.sizes.heading}",
    //       lineHeight: "{text.lineHeights.large}",
    //     },
    //   },
    //   body: {
    //     $value: {
    //       fontFamily: "{text.fonts.serif}",
    //       fontWeight: "{text.weights.regular}",
    //       fontSize: "{text.sizes.body}",
    //       lineHeight: "{text.lineHeights.normal}",
    //     },
    //   },
    // },
  },
} satisfies DesignTokens;
