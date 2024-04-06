import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import { VitePluginGhPages } from 'vite-plugin-gh-pages';

export default defineConfig({
  plugins: [
    VitePWA(),
    VitePluginGhPages({
      branch: 'master', // Specify the branch to deploy to
      dir: 'kartik4u2002/postfolio_website', // Specify the directory to deploy
    }),
  ],
});
