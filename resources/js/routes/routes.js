import { importPage, importAdmin } from "../modules/router-import";
import Dashboard from "../pages/admin/Dashboard.vue";

export default [
    {
        path: "/",
        name: "home",
        redirect: "/login",
    },
    {
        path: "/login",
        name: "login",
        component: importPage("Login"),
        meta: {
            title: "Login",
            authRequired: false,
        },
    },
    {
        path: "/register",
        name: "register",
        component: importPage("Register"),
        meta: {
            title: "Register",
            authRequired: false,
        },
    },
    {
        path: "/dashboard",
        name: "admin",
        component: importPage("Admin"),
        children: [
            {
                path: "",
                name: "dashboard",
                component: importAdmin("Dashboard"),
                meta: {
                    title: "Dashboard",
                    authRequired: true,
                },
            },
            {
                path: "users",
                name: "user-index",
                component: importAdmin("User"),
                meta: {
                    title: "All users",
                    authRequired: true,
                },
            },
            {
                path: "users/create",
                name: "user-create",
                component: importAdmin("UserCreate"),
                meta: {
                    title: "Create user",
                    authRequired: true,
                },
            },
            {
                path: "artists",
                name: "artist-index",
                component: importAdmin("Artist"),
                meta: {
                    title: "All Artist",
                    authRequired: true,
                },
            },
        ],
    },
    {
        path: "/:catchAll(.*)*",
        name: "404",
        component: importPage("404"),
        meta: {
            title: "404 Error Not Found!!!",
            authRequired: false,
        },
    },
];
