import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';
import viteEslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [vue(), viteEslint(), VueSetupExtend()]
});
