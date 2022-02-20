import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../src/store';

const routes = [
    {
        name: "HomePage",
        path: "/",
        component: () => import("../src/views/Home.vue")
    },
    {
        name: "LoginPage",
        path: "/login",
        component: () => import("../src/views/Login")
    },
    {
        name: "RegisterPage",
        path: "/register",
        component: () => import("../src/views/Register")
    },
    {
        name: "NewBookmarkPage",
        path: "/new",
        component: () => import("../src/views/NewBookmark.vue")
    },
    {
        name: "FavoritesPage",
        path: "/favorites",
        component: () => import("../src/views/Account.vue")
    },
    {
        name: "LikesPage",
        path: "/likes",
        component: () => import("../src/views/Account.vue")
    },
    {
        name: "SettingsPage",
        path: "/settings",
        component: () => import("../src/views/Account.vue")
    },
];

const router = createRouter({
    routes: routes,
    history: createWebHashHistory()
})

router.beforeEach((to, from, next) => {
    const authRequiredRoutes = ["HomePage"]
    const authNotRequiredRoutes = ["LoginPage", "RegisterPage"]
    const _isAuthenticated = store.getters._isAuthenticated

    if (authNotRequiredRoutes.indexOf(to.name) > -1 && _isAuthenticated) next(false)

    if (authRequiredRoutes.indexOf(to.name) > -1) {
        if (_isAuthenticated) next();
        else next({ name: "LoginPage"})
    } else {
        next()
    }
})

export default router;