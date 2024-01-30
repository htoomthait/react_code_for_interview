module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ["src/**/*.{js,jsx}"],
    coverageDirectory: "coverage",
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    transform: {
        // Use babel-jest to transpile tests
        "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    },
};
