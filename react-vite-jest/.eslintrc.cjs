module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        "jest/globals": true,
    },
    extends: [
        "plugin:react/recommended",
        "plugin:jest/recommended",
        "airbnb",
        "prettier",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    settings: { react: { version: "18.2" } },
    plugins: ["react", "jest"],
    rules: {
        "no-underscore-dangle": 0,
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                js: "always",
                jsx: "always",
            },
        ],
    },
};
