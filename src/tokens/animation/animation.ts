import type { DesignTokens } from "style-dictionary/types";

export default {
  animation: {
    duration: {
      $type: "duration",
      snappy: { $value: "150ms" },
      base: { $value: "200ms" },
      fade: { $value: "500ms" },
    },
    easing: {
      standard: { $value: "ease-in-out" },
      linear: { $value: "linear" },
    },
    transition: {
      base: {
        $type: "transition",
        $value: {
          duration: "{animation.duration.base}",
          delay: "0ms",
          timingFunction: "{animation.easing.standard}",
        },
      },
      fade: {
        $type: "transition",
        $value: {
          duration: "{animation.duration.fade}",
          delay: "0ms",
          timingFunction: "{animation.easing.standard}",
        },
      },
      snappy: {
        $type: "transition",
        $value: {
          duration: "{animation.duration.snappy}",
          delay: "0ms",
          timingFunction: "{animation.easing.linear}",
        },
      },
    },
  },
} satisfies DesignTokens;
