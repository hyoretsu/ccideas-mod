import { TransformOptions as BabelOptions } from '@babel/core';
import dotenv from 'dotenv';
import path from 'path';
import webpack, { DefinePlugin } from 'webpack';

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
 devtool: 'source-map',
 entry: path.resolve(__dirname, 'src', 'main.ts'),
 mode: 'production',
 module: {
  rules: [
   {
    test: /\.ts?$/,
    exclude: /node_modules/,
    use: {
     loader: 'babel-loader',
     options: {
      presets: ['@babel/preset-env', '@babel/preset-typescript'],
     },
    },
   },
  ],
 },
 plugins: [
  new DefinePlugin({
   'process.env': JSON.stringify(dotenv.config().parsed),
  }),
 ],
 resolve: {
  extensions: ['.ts'],
  modules: [path.resolve(__dirname, 'src')],
 },
 output: {
  path: path.resolve(__dirname, 'dist'),
  filename: 'CCRedditMod.js',
 },
};

export default config;
