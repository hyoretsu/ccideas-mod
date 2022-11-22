const browserslistToEsbuild = require('browserslist-to-esbuild');
const { build } = require('esbuild');

const start = Date.now();

try {
    build({
        bundle: true,
        charset: 'utf8',
        define: { 'process.env.NODE_ENV': 'production' },
        entryPoints: ['./src/main.ts'],
        external: ['./node_modules/*'],
        keepNames: true,
        minify: true,
        outdir: 'ccideas',
        platform: 'browser',
        sourcemap: true,
        target: browserslistToEsbuild(['> 1.5%', 'not dead']),
    }).then(() => console.log('⚡ ' + '\x1b[32m' + `Done in ${Date.now() - start}ms`));
} catch (e) {
    console.log(e);
    process.exit(1);
}
