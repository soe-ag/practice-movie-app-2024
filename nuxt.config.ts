// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules:['@unocss/nuxt', "@nuxt/image", 'nuxt-primevue'],
  primevue: {
    options:{
      ripple:true,
    },
    components: {
        include: '*',
        
    },

  },
  css: ['primevue/resources/themes/aura-dark-purple/theme.css'],
})