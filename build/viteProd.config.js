import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';

const path = require('path');
// const fs = require('fs');

export default defineConfig({
  base: './',
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.join(__dirname, '/src')
      }
    ]
  },
  entry: {
    bubbleui: path.resolve(__dirname, '../packages/components/index.ts')
  },
  mode: 'production',

  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       // 注意，键名是scss不是sass！
  //       // 这里写你想导入全局scss变量的路径，注意只能写相对路径，alias貌似在css中不会生效
  //       additionalData: `
  //               @import './packages/theme-chalk/src/common/color.scss';
  //           `
  //       // @import './packages/theme-chalk/src/common/var.scss';
  //     }
  //   }
  // },
  build: {
    sourcemap: false,
    outDir: path.resolve(__dirname, '../lib'),
    assetsDir: path.resolve(__dirname, '../lib/assets'),
    cssCodeSplit: false,
    output: {
      extend: true
    },
    lib: {
      entry: path.resolve(__dirname, '../packages/components/index.ts'),
      name: 'bubbleUI',
      fileName: 'bubble-ui',
      formats: ['es', 'cjs', 'umd', 'iife']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'vue'
        }
      }
    }
  },
  extend: true,
  plugins: [vue(), VueSetupExtend()]
});
