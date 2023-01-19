import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';

const path = require('path');
const entryConfig = require('../packages/entry_config.js');

// const fs = require('fs');

let entry = {};
let outDir = {};
entryConfig.map(item => {
  let componentName = item.toLowerCase();
  entry[componentName] = path.resolve(__dirname, '../packages/components/' + componentName + '/index.ts');
  outDir;
});
// console.log(entry);
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
  //   entry,
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
    outDir: path.resolve(__dirname, '../lib/packages'),
    assetsDir: path.resolve(__dirname, '../lib/packages/assets'),
    // fileName: '[name]-[hash:6].js',
    lib: {
      entry,
      name: 'bubbleUI',
      fileName: '[name]/index',
      formats: ['es', 'cjs']
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
  output: {
    exports: 'named'
  },
  //   output: {
  //     // 打包过后的文件的输出的路径
  //     path: path.resolve(__dirname, '../lib/packages'),
  //     // 打包后生成的js文件
  //     // 解释下这个[name]是怎么来的，它是根据你的entry命名来的，入口叫啥，出口的[name]就叫啥
  //     filename: '[name]/index.js',
  //     // 我这儿目前还没有资源引用
  //     publicPath: '/',
  //     library: '[name]',
  //     libraryTarget: 'umd',
  //     libraryExport: 'default',
  //     umdNamedDefine: true
  //   },
  //   resolve: {
  //     alias: {
  //       vue$: 'vue/dist/vue.runtime.esm.js',
  //       '@': path.resolve(__dirname, '../examples'),
  //       UI: path.resolve(__dirname, '../packages/components')
  //     },
  //     extensions: ['*', '.js', '.vue']
  //   },
  plugins: [vue(), VueSetupExtend()]
});
