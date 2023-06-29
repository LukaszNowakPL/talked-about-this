module.exports = {
  reporters: ["default"],

  collectCoverage: false,
  collectCoverageFrom: ["./src/**/*.{js,jsx,ts,tsx}"],

  projects: [
    {
      displayName: "unit",
      preset: "ts-jest",
      testEnvironment: "node",
      roots: ["test/unit"],
      restoreMocks: true,
      clearMocks: true,
    },
    {
      displayName: "integration",
      testEnvironment: "jsdom",
      roots: ["test/integration"],
      restoreMocks: true,
      clearMocks: true,
      setupFilesAfterEnv: ["./test/integration/setupJestDom.ts"],
      moduleNameMapper: {
        "\\css$": "identity-obj-proxy",
      },
    },
  ],
};
