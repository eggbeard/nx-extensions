import {
  eslintPluginImportVersion,
  eslintPluginStencilCommunityVersion,
} from './versions';
import { offsetFromRoot } from '@nx/devkit';

export const extraEslintDependencies = {
  dependencies: {},
  devDependencies: {
    'eslint-plugin-import': eslintPluginImportVersion,
    '@stencil-community/eslint-plugin': eslintPluginStencilCommunityVersion,
  },
};

export const createStencilEslintJson = (projectRoot: string) => ({
  extends: [
    'plugin:@stencil/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    `${offsetFromRoot(projectRoot)}.eslintrc.json`,
  ],
  ignorePatterns: ['!**/*'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      /**
       * Having an empty rules object present makes it more obvious to the user where they would
       * extend things from if they needed to
       */
      rules: {},
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {},
    },
    {
      files: ['*.js', '*.jsx'],
      rules: {},
    },
  ],
});
