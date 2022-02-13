import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        name: 'HomePage',
        path: '/', 
        component: () => import("@/views/Home") 
    },
    { 
        name: 'AboutPage',
        path: '/About', 
        component: () => import("@/views/About") 
    },
    { 
        name: 'DetailPage',
        path: '/Detail/:userId', 
        component: () => import("@/views/Detail") 
    },
];

const router = createRouter({
    routes: routes,
    // history: createWebHistory()
    history: createWebHashHistory()
})

export default router;