const nextVitals = require("eslint-config-next/core-web-vitals");

module.exports = [
  ...nextVitals,
  {
    ignores: [".next/**", "dist/**", "node_modules/**", "next-env.d.ts"],
  },
];
