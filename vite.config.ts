import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      dts: 'src/auto-imports.d.ts',
      dirs: ['src/common'],
      vueTemplate: true,
      eslintrc: {
        enabled: true,
      },
    }),
  ],
});
