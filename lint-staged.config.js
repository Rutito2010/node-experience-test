module.exports = {
  '*.{ts,tsx}': [() => 'pnpm ts-check', 'pnpm lint-fix'],
  rules: {
    'linebreack-style': 0,
  },
};
