/*
 * @Description: 
 * @Author: Chengbotao
 * @Date: 2020-11-04 11:00:44
 * @LastEditors: Chengbotao
 * @LastEditTime: 2020-11-05 15:41:35
 * @FilePath: \bee-design-react\rollup.config.js
 */

import path from 'path';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import babel from 'rollup-plugin-babel';
import tslint from "rollup-plugin-tslint";

const options = {
  input: 'src/index.tsx',
  output: [{
    file: path.resolve(__dirname, 'dist', 'bee.common.js'),
    exports: "auto",
    format: 'cjs'
  }, {
    file: path.resolve(__dirname, 'dist', 'bee.esm.js'),
    format: 'es'
  }, {
    file: path.resolve(__dirname, 'dist', 'bee.js'),
    format: 'umd',
    name: "bee",
    plugins: [terser()]
  }],
  external: ['react', 'react-dom'],
  plugins: [resolve(), commonjs(), babel(), tslint(), typescript()]
};

export default options;