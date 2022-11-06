import Vue from 'vue';
import VueRouter from 'vue-router';
import vueRouter from 'vue-router';
import routes from './route.js';

Vue.use(vueRouter);

const router = new VueRouter({
    mode:'history',
    routes,
    // 模糊匹配导航路径的类名
    // linkActiveClass:'active',
    // 精确匹配导航路径的类名
    // linkExactActiveClass:'active',
});

export default router;

