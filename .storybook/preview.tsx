/*
 * @Author: Chengbotao
 * @Description: 
 * @Date: 2020-11-07 22:30:17
 * @LastEditTime: 2020-11-22 09:46:27
 * @LastEditors: Chengbotao
 * @FilePath: \bee-design-react\.storybook\preview.tsx
 */

import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
const wrapperStyle: React.CSSProperties = {
  padding: '20px 40px'
}

const storyWrapper = (stroyFn: any) => (
  <div style={wrapperStyle}>
    <h3>组件演示</h3>
    {stroyFn()}
  </div>
)
addDecorator(storyWrapper)
addDecorator(withInfo)
addParameters({ info: { inline: true, header: false } })


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
