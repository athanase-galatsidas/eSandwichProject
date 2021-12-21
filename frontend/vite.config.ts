import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
		},
	},
	plugins: [
		vue(),
		VitePWA({
			srcDir: 'src',
			filename: 'sw.ts',
			strategies: 'injectManifest',
			workbox: {
				cleanupOutdatedCaches: true,
			},
			includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
			manifest: {
				name: 'eSandWitches',
				short_name: 'eSandWitches',
				description: 'A service for sandwiches.',
				theme_color: '#ffffff',
				background_color: '#ffffff',
				start_url: '/',
				display: 'standalone',
				icons: [
					{
						src: './public/android-chrome-192x192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: './public/android-chrome-512x512.png',
						sizes: '512x512',
						type: 'image/png',
					},
					{
						src: './public/android-chrome-512x512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any maskable',
					},
				],
			},
		}),
	],
	server: {
		port: 3000,
		https: false,
	},
});
