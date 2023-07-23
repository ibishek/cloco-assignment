
function importPage(pageName) {
    return () => import(`../pages/${pageName}.vue`).then((m) => m.default || m);
}

export default [
    {
        path: '/',
        name: 'home',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: importPage('Login'),
        meta: {
            title: 'Login',
            authRequired: false
        }
    },
    {
        path: '/register',
        name: 'register',
        component: importPage('Register'),
        meta: {
            title: 'Register',
            authRequired: false
        }
    },
    {
        path: '/admin/dashboard',
        name: 'admin-dashboard',
        component: importPage('Dashboard'),
        meta: {
            title: 'Dashboard',
            authRequired: true
        }
    },
    {
        path: '/:catchAll(.*)*',
        name: '404',
        component: importPage('404'),
        meta: {
            title: "404 Error Not Found!!!",
            authRequired: false
        }
    }
];