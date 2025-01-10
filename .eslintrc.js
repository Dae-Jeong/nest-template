module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'import',
    'unicorn'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:unicorn/recommended'
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js', 'dist', 'node_modules'],
  rules: {
    // TypeScript 규칙
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }],
    '@typescript-eslint/explicit-member-accessibility': ['error', { 'overrides': { 'constructors': 'no-public' } }],
    '@typescript-eslint/no-unnecessary-condition': 'error',
    
    // 코드 복잡도 규칙
    'complexity': ['error', 10],
    'max-depth': ['error', 4],
    'max-lines-per-function': ['error', { 'max': 50, 'skipBlankLines': true, 'skipComments': true }],
    'max-params': ['error', 3],
    
    // Import 규칙
    'import/order': ['error', {
      'groups': ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index', 'object', 'type'],
      'newlines-between': 'always',
      'alphabetize': { 'order': 'asc', 'caseInsensitive': true }
    }],
    'import/no-cycle': 'error',
    'import/no-unused-modules': 'error',
    'import/no-duplicates': 'error',
    
    // Unicorn 규칙
    'unicorn/filename-case': ['error', { 'case': 'kebabCase' }],
    'unicorn/prevent-abbreviations': 'off', // NestJS 컨벤션과 충돌할 수 있어 비활성화
    'unicorn/no-null': 'off', // TypeORM에서 null을 사용하므로 비활성화
    
    // 일반 규칙
    'no-console': ['warn', { 'allow': ['warn', 'error'] }],
    'no-debugger': 'warn',
    'no-duplicate-imports': 'error',
    'prefer-const': 'error',
    'no-multiple-empty-lines': ['error', { 'max': 1 }],
    'no-trailing-spaces': 'error',
    'eqeqeq': ['error', 'always'],
    'curly': ['error', 'all'],
    'brace-style': ['error', '1tbs'],
    'no-var': 'error',
    'prefer-template': 'error',
    'prefer-arrow-callback': 'error'
  },
  settings: {
    'import/resolver': {
      'typescript': {
        'alwaysTryTypes': true,
        'project': './tsconfig.json'
      }
    }
  }
}; 