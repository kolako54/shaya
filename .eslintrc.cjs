const { init } = require("@fullstacksjs/eslint-config/init");

module.exports = init({
  root: true,
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  plugins: ["react-refresh"],
  modules: {
    auto: true,
  },
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],

    "@typescript-eslint/no-var-requires": 0,
    "import/no-unresolved": "off",
    "@typescript-eslint/no-var-requires": 0,
    "import/no-unresolved": "off",
    // "react/jsx-no-duplicate-props": "off",
    "react/jsx-no-constructed-context-values": "off",
    "@typescript-eslint/no-shadow": "off",
    "react/no-array-index-key": "off",
    "import/extensions": "off"
  },
});
