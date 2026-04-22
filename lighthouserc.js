export default {
  ci: {
    collect: {
      staticDistDir: "./dist",
      numberOfRuns: 1,
      url: ["http://localhost:34891/index.html"], // Start with just home to verify it works
    },
    assert: {
      assertions: {
        "categories:performance": "off",
        "categories:accessibility": "off",
        "categories:best-practices": "off",
        "categories:seo": "off",
        "categories:pwa": "off",
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
