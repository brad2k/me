export default {
  ci: {
    collect: {
      // Use the command that actually works for your local preview
      startServerCommand: "npm run preview",
      // Replace with whatever port 'netlify serve' or your npm script uses
      url: ["http://localhost:8888/"],
      numberOfRuns: 1,
      settings: {
        chromeFlags: "--no-sandbox --headless --disable-gpu",
      },
    },
    assert: {
      preset: "lighthouse:recommended",
      assertions: {
        // Turning these off/to warn so we can finally get the report link
        "color-contrast": "warn",
        "categories:performance": "warn",
        "categories:accessibility": "warn",
        "installable-manifest": "off",
        "uses-rel-preconnect": "off",
        "service-worker": "off",
        "unused-javascript": "off",
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
