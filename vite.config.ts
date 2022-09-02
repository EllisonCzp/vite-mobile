import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'


export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(process.cwd(), './src'),
            '~C': resolve(process.cwd(), './src/components'),
            '~V': resolve(process.cwd(), './src/views')
        }
    },
    plugins: [vue(),
    Components({
        resolvers: [VantResolver()],
    })]
})
