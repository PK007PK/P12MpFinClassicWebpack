const purgecss = require('@fullhuman/postcss-purgecss');
const cssnano = require('cssnano');

module.exports = ctx => {
  return {
    plugins: [
      require('autoprefixer'),
      ...(ctx.options.env === 'production'
        ? [
            // cssnano({
            //   preset: 'default',
            // }),

            // https://github.com/FullHuman/purgecss-docs/blob/master/configuration.md
            purgecss({
              content: ['./**/*.html'],
              keyframes: true,
              fontFace: true,
              css: ['style.[contentHash].css'],
              defaultExtractor: content => content.match(/[A-z0-9-:/]+/g),
              ignore: ['src/styles/carousel/'],
              whitelist: [
                'hamburger--active',
                'navigation--active',
                'prev',
                'next',
                'temp-04-doswiadczenie__button',
                'temp-04-doswiadczenie__button--left',
                'temp-04-doswiadczenie__button--right',
                'icon-left-open-big',
                'icon-right-open-big',
              ],
            }),
          ]
        : []),
    ],
  };
};
