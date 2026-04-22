export default {
  ci: {
    collect: {
      // Force LHCI to use your specific script
      startServerCommand: "npm run preview",
      // Explicitly point to the port defined in your package.json
      url: [
        "http://localhost:8888/",
        "http://localhost:8888/about/",
        "http://localhost:8888/now/",
      ],
      numberOfRuns: 1,
      // Give Netlify a bit more time to boot up the dev server
      startServerReadyTimeout: 90000,
    },
    assert: {
      preset: "lighthouse:recommended",
      assertions: {
        // Keep these as warnings so we can see the data without breaking the build
        "color-contrast": "warn",
        "total-byte-weight": "warn",
        "installable-manifest": "off",
        "uses-rel-preconnect": "off",
        "service-worker": "off",
        "csp-xss": "off",
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
