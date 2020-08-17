import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../views/Home'
import About from '../views/About'
const routes=[
    {
        path:'/',
        name:'Home',
        component: Home,
        pathToRegexOptions: { strict: true }
    },
    {
        path:'/about',
        name:'About',
        component: About,
        pathToRegexOptions: { strict: true }
    }
];

const router = new VueRouter({
    mode:'history',
    routes
});

export default router;
