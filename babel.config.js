module.exports = {
 comments: false,
 ignore: ['**/*.spec.ts', 'src/@types/*', 'src/dtos/*'],
 presets: [
  [
   '@babel/preset-env',
   {
    targets: '> 0.25%, not dead',
   },
  ],
  '@babel/preset-typescript',
  'minify',
 ],
 sourceMaps: true,
};
