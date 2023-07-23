// @ts-check

function importPage(pageName) {
    return () => import(`./../pages/${pageName}.vue`).then((m) => m.default || m);
}

function importAdmin(pageName) {
    return () => import(`./../pages/admin/${pageName}.vue`).then((m) => m.default || m);
}

export {
    importPage,
    importAdmin
}