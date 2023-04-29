module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['*.ts'],
      parserOptions: {
        project: ['./tsconfig.json']
      }
    }
  ],
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    "@typescript-eslint/no-floating-promises": ["error"]
  },
};