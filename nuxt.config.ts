// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/google-fonts', 
    '@nuxtjs/color-mode', 
    '@nuxtjs/mdc', 
    "@nuxt/image"
  ],
  devtools: { enabled: true },
  
  googleFonts: {
    prefetch: true,
    preconnect: true,
    families: {
      RobotoMono: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      Dosis: [200, 300, 400, 500, 600, 700, 800],
      Mogra: [400]
    },
  },
  
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Richard Coric | Software Developer',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        {
          name: 'description',
          content: 'Richard Coric is a software engineer based in England, UK.',
        }
      ],
    }
  },
  
  build: {
    transpile: ['gsap']
  },
  
  runtimeConfig: {
    contentfulSpace: '',
    contentfulKey: '',
    devtoApiKey: '',
    public: {
      contentfulUrl: '',
    }
  },
  mdc: {  
    highlight: {
      highlighter: 'shiki',
      theme: 'catppuccin-mocha',
      langs: ['html', 'css', 'javascript', 'typescript', 'json', 'py', 'bash', 'cs'],
    },
  }
})