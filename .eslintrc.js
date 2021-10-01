// eslint-disable-next-line no-undef
module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:prettier/recommended",
    ],
    rules: {
        "@typescript-eslint/no-explicit-any": ["off", "always"],
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
    },
};
