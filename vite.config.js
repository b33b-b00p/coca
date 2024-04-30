import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
    root: './src',
    base: '/coca/',
    server: {
        port: 3000,
        open: true,
    },
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: './src/index.html',
                about: './src/about.html',
                blog: './src/blog.html',
                pricing: './src/pricing.html',
                contact: './src/contact.html',
                howWePerformLongRunningTasksUsingAWSservices:
                    './src/posts/how-we-perform-long-running-tasks-using-aws-services.html',
                HowToAskWhenDoingUserResearch:
                    './src/posts/how-to-ask-when-doing-user-research.html',
            },
        },
    },
    plugins: [
        injectHTML(),
        ViteMinifyPlugin(),
        ViteImageOptimizer({
            png: {
                quality: 80,
            },
            jpg: {
                quality: 80,
            },
        }),
    ],
});
