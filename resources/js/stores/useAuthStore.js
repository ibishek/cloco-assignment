import { defineStore } from "pinia";
import { ref, computed } from "@vue/reactivity";
import axios from "axios";

export const useAuthStore = defineStore('authStore', () => {
    const user = ref({
        firstName: '',
        lastName: '',
        email: '',
    });

    function fetchUser() {
        return new Promise((resolve, reject) => {
            axios.get('/api/user')
            .then(response => {
                isFetched.value = true;
                user.value.firstName = response.data.data.firstName;
                user.value.lastName = response.data.data.lastName;
                user.value.email = response.data.data.email;
                resolve(true);
            })
            .catch(error => {
                reject(error.response);
            })
        });
    }

    function deAuthenticate() {
        axios.post('/logout')
        .then(response => {
            user.value = {
                firstName: '',
                lastName: '',
                email: ''
            }

            isFetched.value = false;
        })
        .catch(error => {
            console.log(error);
        })

    }

    const isAuthenticated = computed(() => {
        return user.value.email ? true : false;
    });

    const isFetched = ref(false);

    return {
        user,
        fetchUser,
        isAuthenticated,
        isFetched,
        deAuthenticate
    }
});