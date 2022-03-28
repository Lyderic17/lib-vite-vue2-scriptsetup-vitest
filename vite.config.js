const path = require("path");
import { defineConfig } from 'vite'
import { createVuePlugin as Vue2 } from 'vite-plugin-vue2'
import ScriptSetup from 'unplugin-vue2-script-setup/vite'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue2(),
    ScriptSetup()
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/lib-export.js"),
      name: "LibraryRandom",
      fileName: (format) => `library-random.${format}.js`
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        },
      },
    },
  },
  server: {
    port: 1717,
    host: '0.0.0.0',
    watch: {
      usePolling: true
    }
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: [
      'vitest.setup.js',
    ],
  }
})
