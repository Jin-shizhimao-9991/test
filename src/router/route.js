import Login from '@/views/login.vue';
import Logon from '@/views/logon.vue';
import Main from '@/views/main.vue';
import addStu from '@/views/main/addStu.vue';
import searchStu from '@/views/main/searchStu.vue';
import stuList from '@/views/main/stuList.vue';
import notFound from '@/views/notFound.vue';

// 子路由不能加 / 不然会被当成根路由 children:[{},{},{}]  
export default [
    // beforeEnter 路由进入之前进行处理
    // beforeeach  组件加载之前进行处理 
    {
        path:'/',
        beforeEnter(to,from,next){
            // 本地存贮
            const value = localStorage.getItem('account');
            if(value){
                next('/main');
            }else{
                next('/login');
            }
        }
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/logon',
        component: Logon
    },
    {
        path: '/main',
        component: Main,
        redirect: '/main/stuList',
        beforeEnter(to,from,next){
            const value = localStorage.getItem('account');
            if(value){
                next();
            }else{
                next('/login');
            }
        },
        children: [{
                path: 'addStu',
                component: addStu
            },
            {
                path: 'searchStu',
                component: searchStu
            },
            {
                path: 'stuList',
                component: stuList,
            }
        ]
    },
    {
        path: '/notFound',
        component: notFound
    },
    {
        path: '*',
        redirect: '/notFound',
    }
];