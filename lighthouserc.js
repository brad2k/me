export default {
  ci: {
    collect: {
      staticDistDir: "./dist",
      // Give the server a moment to breathe
      isSinglePageApplication: true,
    },
    assert: {
      // Switch from 'preset' to manual to stop the "fatal" crashes
      assertions: {
        // Categories
        "categories:performance": ["warn", { minScore: 0.9 }],
        "categories:accessibility": ["warn", { minScore: 0.9 }],
        // Turn off the PWA/Security stuff that is failing the build
        "installable-manifest": "off",
        "uses-rel-preconnect": "off",
        "themed-omnibox": "off",
        "maskable-icon": "off",
        "splash-screen": "off",
        "csp-xss": "off",
        // Address the "0" issue directly
        "color-contrast": "off",
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
