export default {
  head: {
    title: 'La Haus más que una inmobiliaria ¡Compra finca raíz a tu ritmo!',
    htmlAttrs: {
      lang: 'es-CO',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Buscas una inmobiliaria? Tenemos una buena noticia, somos mucho más. La tecnología y oferta de finca raíz harán más fácil la compra de tu vivienda nueva.',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
  ],
  modules: [
    '@nuxtjs/axios',
    [
      '@nuxtjs/i18n',
      {
        locales: [
          {
            code: 'es',
            file: 'es-CO.js',
          },
        ],
        lazy: true,
        langDir: 'lang/',
        defaultLocale: 'es',
      },
    ],
  ],
}
