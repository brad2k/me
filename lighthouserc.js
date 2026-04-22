export default {
  ci: {
    collect: {
      staticDistDir: "./dist",
    },
    assert: {
      preset: "lighthouse:recommended",
      assertionLevel: "warn",
      assertions: {
        "categories:accessibility": ["warn", { minScore: 0.9 }],
        "categories:performance": ["warn", { minScore: 0.9 }],
        // 3. Turn off the PWA/XSS stuff        'installable-manifest': 'off',
        "uses-rel-preconnect": "off",
        "csp-xss": "off",
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
