/** @type {import("prettier").Config} */
export default {
  arrowParens: 'always',
  bracketSpacing: false,
  printWidth: 140,
  proseWrap: 'always',
  semi: true,
  singleQuote: true,
  svelteSortOrder: 'options-markup-scripts-styles',
  trailingComma: 'es5',
  plugins: ['prettier-plugin-astro', 'prettier-plugin-svelte', 'prettier-plugin-tailwindcss'],
  overrides: [
    {files: '*.astro', options: {parser: 'astro'}},
    {files: '*.svelte', options: {parser: 'svelte'}},
  ],
  pluginSearchDirs: false,
};
