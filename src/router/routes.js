// Main
const Main = () => import('src/pages/MainContainer/MainContainer.vue');
const HelloWorld = () => import('src/pages/HelloWorld/HelloWorld.vue');

// Error
const NotFound = () => import('src/pages/Error/NotFound/NotFound.vue');

export default [
    {
        path: '/',
        redirect: { name: 'HelloWorld' }
    },
    {
        path: '*',
        redirect: { name: 'NotFound' }
    },
    {
        path: '/main',
        name: 'Main',
        component: Main,
        redirect: { name: 'HelloWorld' },
        children: [
            {
                path: 'hello-world',
                name: 'HelloWorld',
                component: HelloWorld
            },
            {
                path: 'not-found',
                name: 'NotFound',
                component: NotFound
            }
        ]
    }
];
