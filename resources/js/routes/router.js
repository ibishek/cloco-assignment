import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import { useAuthStore } from "../stores/useAuthStore";
import axios from "axios";

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach(async (to, from, next) => {
    const useAuth = useAuthStore();
    document.title = to.meta.title;

    if (!useAuth.isFetched) {
        await useAuth.fetchUser();
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

axios.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        if ([401, 419].includes(error.response.status) && !error.response.request.responseURL.endsWith('api/user')) {
            const useAuth = useAuthStore();
            useAuth.deAuthenticate();
            router.push({
                name: 'login'
            });
        }
    }
);

export default router;