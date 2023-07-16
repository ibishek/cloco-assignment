
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
            middleware: 'guest'
        }
    },
    {
        path: '/register',
        name: 'register',
        component: importPage('Register'),
        meta: {
            title: 'Register',
            middleware: 'guest'
        }
    }
];