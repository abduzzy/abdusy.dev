import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  css: ["~/assets/css/main.css"],
  modules: ["@vueuse/nuxt", "@nuxt/content", "@nuxt/icon", "@vercel/analytics"],
  content: {
    build: {
      markdown: {
        highlight: {
          theme: "github-dark",
        },
        toc: {
          depth: 3,
        },
      },
    },
    database: {
      type: "libsql",
      url: process.env.NUXT_TURSO_URL ?? "",
      authToken: process.env.NUXT_TURSO_AUTH_TOKEN ?? "",
    },
    experimental: {
      sqliteConnector: "native",
    },
  },
  runtimeConfig: {
    tursoUrl: "",
    tursoAuthToken: "",
    isLoggingEnabled: false,
    public: {
      availableForWork: true,
    },
  },
  routeRules: {
    "/": { prerender: true },
    "/articles/**": { prerender: true },
    "/api/**": { cors: true },
  },
  future: {
    compatibilityVersion: 5,
  },
  compatibilityDate: "2026-10-04",
  vite: {
    plugins: [tailwindcss()],
    // experimental: {
    //   enableNativePlugin: true,
    // },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  experimental: {
    routeTypedFetch: true,
  },
});
