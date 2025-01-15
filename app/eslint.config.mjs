import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'], // Исправлено: добавлены **/ для рекурсивного поиска
    languageOptions: {
      globals: {
        ...globals.browser, // Глобальные переменные браузера
        ...globals.node, // Глобальные переменные Node.js
      },
    },
  },
  pluginJs.configs.recommended, // Базовые правила ESLint
  pluginReact.configs.flat.recommended, // Рекомендации для React
];
