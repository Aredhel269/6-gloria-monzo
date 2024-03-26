module.exports = {
  // Indica a Jest on buscar els tests
  testMatch: ["**/__tests__/**/*.test.ts"],

  // Indica a Jest quines extensions considerar com a fitxers de tests
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

  // Indica a Jest quins transformadors utilitzar per interpretar els fitxers TypeScript
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },

  // Indica a Jest quins directoris s'han d'excloure dels tests
  testPathIgnorePatterns: ["/node_modules/"],
};
