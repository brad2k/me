export default {
  ci: {
    collect: {
      staticDistDir: "./dist",
    },
    assert: {
      preset: "lighthouse:recommended",
      assertionLevel: "warn",
      assertions: {
        // Turn off the PWA requirements
        "installable-manifest": "off",
        "uses-apple-touch-icon": "off",
        "splash-screen": "off",
        "themed-omnibox": "off",
        "maskable-icon": "off",
        "content-width": "off",
        "csp-xss": "off",
        "color-contrast": "warn",
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
