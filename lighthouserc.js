export default {
  ci: {
    collect: {
      staticDistDir: "./dist",
    },
    upload: {
      target: "temporary-public-storage", // Saves the report to a public URL for 7 days
    },
    assert: {
      assertions: {
        "categories:accessibility": ["warn", { minScore: 0.95 }],
        "categories:performance": ["warn", { minScore: 0.9 }],
      },
    },
  },
};
