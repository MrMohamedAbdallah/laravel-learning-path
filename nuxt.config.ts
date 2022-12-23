// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  target: 'static',
  app: {
    head: {
      title: 'Laravel Learning Path',
      meta: [
        { name: 'description', content: 'Track your Laravel learning progress. The roadmap learning path is made by Povilas Korop.' }
      ],
    }
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  tailwindcss: {
    config: {
      mode: 'jit',
    }
  }
})
