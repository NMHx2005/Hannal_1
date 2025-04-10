import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Thêm module path của Node.js để tạo đường dẫn tuyệt đối
// Tạm thời comment các plugin không cần thiết
// import compression from 'vite-plugin-compression';
// import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // compression(), // Enable gzip compression
    // VitePWA({
    //   registerType: 'autoUpdate',
    //   includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
    //   manifest: {
    //     name: 'Your App Name',
    //     short_name: 'App',
    //     description: 'Your app description',
    //     theme_color: '#ffffff',
    //     icons: [
    //       {
    //         src: 'pwa-192x192.png',
    //         sizes: '192x192',
    //         type: 'image/png'
    //       },
    //       {
    //         src: 'pwa-512x512.png',
    //         sizes: '512x512',
    //         type: 'image/png'
    //       }
    //     ]
    //   }
    // })
  ],
  server: { 
    port: 3000,
    cors: true,
    headers: {
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
    }
  },
  build: { 
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['antd']
        }
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler', // or "modern"
        silenceDeprecations: ['mixed-decls', 'color-functions', 'global-builtin', 'import']
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Alias chính cho thư mục src
      'assets': path.resolve(__dirname, './src/assets'),
      'components': path.resolve(__dirname, './src/components'),
      'pages': path.resolve(__dirname, './src/pages'),
      'styles': path.resolve(__dirname, './src/styles'),
      'services': path.resolve(__dirname, './src/services'),
      'utils': path.resolve(__dirname, './src/utils'),
      'store': path.resolve(__dirname, './src/store'),
      'hooks': path.resolve(__dirname, './src/hooks'),
      'types': path.resolve(__dirname, './src/types')
    }
  }
});