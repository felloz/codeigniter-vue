const mix = require('laravel-mix');
/*
|----------------------------------------------
| Mix Asset Management
|----------------------------------------------
*/
mix.sass('src/scss/app.scss', 'assets/css')
   .js('src/js/app.js', 'assets/scripts').vue()
   .setPublicPath('public');
// Fonts path
//mix.config.fileLoaderDirs.fonts = 'assets/fonts';
