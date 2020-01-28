module.exports = {
  bracketSpacing: true,
  jsxBracketSameLine: false,
  parser: flow,
  printWidth: 120,
  semi: true,
  singleQuote: true,
  optionalChaining: true,
  tabWidth: 2,
  trailingComma: "all",
  useTabs: false,
  arrowParens: "avoid",
  overrides: [
    {
      files: "package*.json",
      options: {
        printWidth: 1000,
      },
    },
  ],
}
