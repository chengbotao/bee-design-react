/*
 * @Author: Chengbotao
 * @Description: 
 * @Date: 2020-11-07 22:30:17
 * @LastEditTime: 2020-11-19 00:26:14
 * @LastEditors: Chengbotao
 * @FilePath: \bee-design-react\.storybook\main.js
 */

module.exports = {
  "stories": [
    "../src/styles/index.scss",
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    '@storybook/preset-scss',
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop, component) => {
        if (prop.parent) {
          return !prop.parent.fileName.includes("node_modules");
        }

        return true;
      }
    }
  }
}