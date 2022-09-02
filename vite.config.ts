/*
 * @Description: tyll
 * @Autor: czp
 * @Date: 2022-09-02 16:06:39
 * @LastEditors: czp
 * @LastEditTime: 2022-09-02 17:20:10
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'


export default defineConfig({
    envDir: resolve(process.cwd(), './env'),
    envPrefix: 'ENV_',
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
