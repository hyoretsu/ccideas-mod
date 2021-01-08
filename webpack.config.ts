import { TransformOptions as BabelOptions } from '@babel/core';
import path from 'path';
import webpack from 'webpack';

interface CustomRules extends webpack.RuleSetRule {
 use: {
  loader?: string;
  options?: string | BabelOptions;
 };
}
interface CustomConfig extends webpack.Configuration {
 module: {
  rules?: (CustomRules | '...')[];
 };
}

const config: CustomConfig = {
 cache: true,
 devtool: 'source-map',
 entry: {
  CCIdeas: path.resolve(__dirname, 'src', 'main.ts'),
 },
 mode: 'production',
 module: {
  rules: [
   {
    test: /\.ts$/i,
    exclude: /node_modules/,
    use: {
     loader: 'babel-loader',
     options: {
      presets: [['@babel/preset-env', { targets: '> 1.5%, not dead' }], '@babel/preset-typescript'],
     },
    },
   },
  ],
 },
 output: {
  path: path.resolve(__dirname, 'dist'),
 },
 resolve: {
  extensions: ['.ts'],
  modules: [path.resolve(__dirname, 'src')],
 },
};

export default config;
