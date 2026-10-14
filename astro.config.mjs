import { defineConfig } from 'astro/config';

// 双部署：默认 site=主域名 base=/（腾讯云根路径）；
// GitHub Pages 构建：SITE_URL=https://non-existent987.github.io SITE_BASE=/codingplanguide
const site = process.env.SITE_URL || 'https://codingplanguide.com';
const base = process.env.SITE_BASE || '/';

export default defineConfig({
  site,
  base,
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
