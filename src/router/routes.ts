/*
 * @Description: tyll
 * @Autor: czp
 * @Date: 2022-09-02 16:11:57
 * @LastEditors: czp
 * @LastEditTime: 2022-09-02 16:46:40
 */
import { RouteRecordRaw } from "vue-router"

const Home = () => import('~V/home/home.vue')
const User = () => import('~V/user/user.vue')

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'index',
        component: Home
    },
    {
        path: '/',
        name: 'index',
        component: User
    }]
export default routes