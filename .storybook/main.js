/*
 * @Author: Chengbotao
 * @Description: 
 * @Date: 2020-11-07 22:30:17
 * @LastEditTime: 2020-11-08 00:07:55
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
    }
  }
}