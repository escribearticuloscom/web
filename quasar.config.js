/* eslint-env node */

/*
 * This file runs in a Node context (it's NOT transpiled by Babel), so use only
 * the ES6 features that are supported by your Node version. https://node.green/
 */

// Configuration for your app
// https://v2.quasar.dev/quasar-cli-webpack/quasar-config-js

// this is at the top of the file
const SitemapPlugin = require("sitemap-webpack-plugin").default;
const paths = [
  { path: "/" },
  { path: "/home" },
  { path: "/blog" },
  { path: "/aboutUs" },
  { path: "/prices" },
  { path: "/contact" },
  { path: "/privacy_policy" },
  { path: "/terms_and_conditions" },
  { path: "/blog/aprovechar_tendencias.json" },
  { path: "/blog/articulos_de_arte.json" },
  { path: "/blog/articulos_de_ciencia.json" },
  { path: "/blog/articulos_de_historia.json" },
  { path: "/blog/articulos_de_literatura.json" },
  { path: "/blog/articulos_de_musica.json" },
  { path: "/blog/articulos_de_politica.json" },
  { path: "/blog/articulos_de_religion.json" },
  { path: "/blog/articulos_diferentes.json" },
  { path: "/blog/articulos_para_automotriz.json" },
  { path: "/blog/articulos_para_bienes.json" },
  { path: "/blog/articulos_para_educación.json" },
  { path: "/blog/articulos_para_entrenamiento.json" },
  { path: "/blog/articulos_para_jardineria.json" },
  { path: "/blog/articulos_para_moda.json" },
  { path: "/blog/articulos_para_salud.json" },
  { path: "/blog/articulos_para_seo.json" },
  { path: "/blog/articulos_para_tecnologia.json" },
  { path: "/blog/articulos_para_web_de_juegos.json" },
  { path: "/blog/como_escribir_articulos_de_calidad.json" },
  { path: "/blog/consejos_para_articulos.json" },
  { path: "/blog/crear_contenido_valioso.json" },
  { path: "/blog/enlaces_internos_y_externos.json" },
  { path: "/blog/errores_comunes.json" },
  { path: "/blog/escribir_articulos_para_aumentar_trafico.json" },
  { path: "/blog/estrategias_avanzadas_para_seo.json" },
  { path: "/blog/estrategias_para_optimizar.json" },
  { path: "/blog/etiquetas_y_metadatos.json" },
  { path: "/blog/formato_y_longitud_articulos.json" },
  { path: "/blog/mejorar_posicionamiento_a_traves_de_articulos.json" },
  { path: "/blog/palabras_clave.json" },
  { path: "/blog/palabras_clave_para_seo.json" },
  { path: "/blog/secretos_para_escribir_articulos.json" },
  { path: "/blog/titulos_llamativos.json" },
  { path: "/blog/uso_imagenes_y_videos.json" },
  { path: "/blog/utilizar_titulos_y_subtitulos.json" },
  // add all pages here
];

const ESLintPlugin = require("eslint-webpack-plugin");

const { configure } = require("quasar/wrappers");

module.exports = configure(function (ctx) {
  return {
    // https://v2.quasar.dev/quasar-cli-webpack/supporting-ts
    supportTS: false,

    // https://v2.quasar.dev/quasar-cli-webpack/prefetch-feature
    // preFetch: true,

    // app boot file (/src/boot)
    // --> boot files are part of "main.js"
    // https://v2.quasar.dev/quasar-cli-webpack/boot-files
    boot: [],

    // https://v2.quasar.dev/quasar-cli-webpack/quasar-config-js#Property%3A-css
    css: ["app.scss"],

    // https://github.com/quasarframework/quasar/tree/dev/extras
    extras: [
      // 'ionicons-v4',
      // 'mdi-v5',
      // 'fontawesome-v6',
      // 'eva-icons',
      // 'themify',
      // 'line-awesome',
      // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!

      "roboto-font", // optional, you are not bound to it
      "material-icons", // optional, you are not bound to it
    ],

    // Full list of options: https://v2.quasar.dev/quasar-cli-webpack/quasar-config-js#Property%3A-build
    build: {
      vueRouterMode: "history", // available values: 'hash', 'history'

      // transpile: false,
      // publicPath: '/',

      // Add dependencies for transpiling with Babel (Array of string/regex)
      // (from node_modules, which are by default not transpiled).
      // Applies only if "transpile" is set to true.
      // transpileDependencies: [],

      // rtl: true, // https://quasar.dev/options/rtl-support
      // preloadChunks: true,
      // showProgress: false,
      // gzip: true,
      // analyze: true,

      // Options below are automatically set depending on the env, set them if you want to override
      // extractCSS: false,

      // https://v2.quasar.dev/quasar-cli-webpack/handling-webpack
      // "chain" is a webpack-chain object https://github.com/neutrinojs/webpack-chain

      chainWebpack(chain) {
        chain
          .plugin("eslint-webpack-plugin")
          .use(ESLintPlugin, [{ extensions: ["js", "vue"] }]);
      },
      extendWebpack(cfg) {
        cfg.plugins.push(
          new SitemapPlugin({
            base: "https://mejoratuseo.escribearticulos.com",
            paths: paths,
            options: {
              filename: "sitemap.xml",
              // the following are the defaults for all paths. You can set them separately per path in the paths array
              lastmod: true,
              changefreq: "weekly",
              priority: 0.8,
            },
          })
        );
      },
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-webpack/quasar-config-js#Property%3A-devServer
    devServer: {
      server: {
        type: "http",
      },
      port: 8080,
      open: true, // opens browser window automatically
    },

    // https://v2.quasar.dev/quasar-cli-webpack/quasar-config-js#Property%3A-framework
    framework: {
      config: {},

      // iconSet: 'material-icons', // Quasar icon set
      // lang: 'en-US', // Quasar language pack

      // For special cases outside of where the auto-import strategy can have an impact
      // (like functional components as one of the examples),
      // you can manually specify Quasar components/directives to be available everywhere:
      //
      // components: [],
      // directives: [],

      // Quasar plugins
      plugins: [],
    },

    // animations: 'all', // --- includes all animations
    // https://quasar.dev/options/animations
    animations: [],

    // https://v2.quasar.dev/quasar-cli-webpack/developing-ssr/configuring-ssr
    ssr: {
      pwa: false,

      // manualStoreHydration: true,
      // manualPostHydrationTrigger: true,

      prodPort: 3000, // The default port that the production server should use
      // (gets superseded if process.env.PORT is specified at runtime)

      maxAge: 1000 * 60 * 60 * 24 * 30,
      // Tell browser when a file from the server should expire from cache (in ms)

      chainWebpackWebserver(chain) {
        chain
          .plugin("eslint-webpack-plugin")
          .use(ESLintPlugin, [{ extensions: ["js"] }]);
      },

      middlewares: [
        ctx.prod ? "compression" : "",
        "render", // keep this as last one
      ],
    },

    // https://v2.quasar.dev/quasar-cli-webpack/developing-pwa/configuring-pwa
    pwa: {
      workboxPluginMode: "GenerateSW", // 'GenerateSW' or 'InjectManifest'
      workboxOptions: {}, // only for GenerateSW

      // for the custom service worker ONLY (/src-pwa/custom-service-worker.[js|ts])
      // if using workbox in InjectManifest mode

      chainWebpackCustomSW(chain) {
        chain
          .plugin("eslint-webpack-plugin")
          .use(ESLintPlugin, [{ extensions: ["js"] }]);
      },

      manifest: {
        name: `Quasar App`,
        short_name: `Quasar App`,
        description: `A Quasar Project`,
        display: "standalone",
        orientation: "portrait",
        background_color: "#ffffff",
        theme_color: "#027be3",
        icons: [
          {
            src: "icons/icon-128x128.png",
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: "icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icons/icon-256x256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "icons/icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-webpack/developing-cordova-apps/configuring-cordova
    cordova: {
      // noIosLegacyBuildFlag: true, // uncomment only if you know what you are doing
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-webpack/developing-capacitor-apps/configuring-capacitor
    capacitor: {
      hideSplashscreen: true,
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-webpack/developing-electron-apps/configuring-electron
    electron: {
      bundler: "packager", // 'packager' or 'builder'

      packager: {
        // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options
        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',
        // Windows only
        // win32metadata: { ... }
      },

      builder: {
        // https://www.electron.build/configuration/configuration

        appId: "web",
      },

      // "chain" is a webpack-chain object https://github.com/neutrinojs/webpack-chain

      chainWebpackMain(chain) {
        chain
          .plugin("eslint-webpack-plugin")
          .use(ESLintPlugin, [{ extensions: ["js"] }]);
      },

      chainWebpackPreload(chain) {
        chain
          .plugin("eslint-webpack-plugin")
          .use(ESLintPlugin, [{ extensions: ["js"] }]);
      },
    },
  };
});
