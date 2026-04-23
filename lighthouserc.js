export default {
  ci: {
    collect: {
      // Force LHCI to use the Netlify preview script
      staticDistDir: null,
      startServerCommand: "npm run preview",
      url: [
        "http://localhost:8888/",
        "http://localhost:8888/about/",
        "http://localhost:8888/now/",
      ],
      // Give Netlify a bit more time to boot up the dev server
      startServerReadyTimeout: 90000,
    },
    assert: {
      preset: "lighthouse:recommended",
      assertionLevel: "warn",
      continueOnAssertionFailure: true,
      assertions: {
        // Keep these as warnings so we can see the data without breaking the build
        "color-contrast": "warn",
        "total-byte-weight": "warn",
        // Turn off the PWA requirements
        "installable-manifest": "off",
        "uses-apple-touch-icon": "off",
        "splash-screen": "off",
        "themed-omnibox": "off",
        "maskable-icon": "off",
        "content-width": "off",
        "csp-xss": "off",
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
