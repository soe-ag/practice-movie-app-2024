// import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@unocss/nuxt", "@nuxt/image", "nuxt-primevue", "@pinia/nuxt"],

  primevue: {
    options: {
      ripple: true,
    },
    components: {
      include: "*",
    },
  },
  pinia: {
    storesDirs: ["./stores/**"],
  },

  css: ["primevue/resources/themes/aura-dark-purple/theme.css"],

  routeRules: {
    "/spa": { ssr: false },
    "/static": { static: true },
    "/swr": { swr: true },
  },
});
