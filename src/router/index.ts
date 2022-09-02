/*
 * @Description: tyll
 * @Autor: czp
 * @Date: 2022-09-02 16:11:47
 * @LastEditors: czp
 * @LastEditTime: 2022-09-02 16:59:41
 */
import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

/**
 * @description: 全局前置守卫
 * @param {*} to 即将要进入的目标
 * @param {*} from 当前导航正要离开的路由
 * @param {*} next
 * @return {*}
 * @Date: 2022-09-02 16:50:18
 */
router.beforeEach((to, from, next) => {
    next()
})

/**
 * @description: 全局解析守卫
 * @return {*}
 * @Date: 2022-09-02 16:54:04
 */
router.beforeResolve(to => {
    //TODO  访问自定义meta属性 执行相关操作
    // @example
    // router.beforeResolve(to => {
    //     if (to.meta.requiresAuth && !isAuthenticated) return false
    // })
})

/**
 * @description: 全局后置钩子  它们对于分析、更改页面标题、声明页面等辅助功能以及许多其他事情都很有用。
 * @param {*} to
 * @param {*} from
 * @param {*} failure
 * @return {*}
 * @Date: 2022-09-02 16:58:01
 */
router.afterEach((to, from, failure) => {

})

export default router