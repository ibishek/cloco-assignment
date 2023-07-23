import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import { useAuthStore } from "../stores/useAuthStore";
import axios from "axios";

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    const useAuth = useAuthStore();
    document.title = to.meta.title;

    if (!useAuth.isFetched) {
        useAuth.fetchUser();
    }
    if (to.matched.some(route => route.meta.authRequired === true)) {
        if (useAuth.isAuthenticated) {
            next();
        } else {
            next({
                name: 'login'
            })
        }
    } else {
        next();
    }
});

export default router;