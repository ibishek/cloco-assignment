import axios from "axios";
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/useAuthStore";

const interceptor = () => axios.interceptors.response.use(
    (response) => response,
    (error) => {
        if ([401, 419].includes(error.response.status) && !error.response.request.responseURL.endsWith('api/user')) {
            const useAuth = useAuthStore();
            const router = useRouter();
            useAuth.deAuthenticate();
            router.replace({
                name: 'login'
            });
        }
    }
)

export { interceptor };