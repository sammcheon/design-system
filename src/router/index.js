// Vue
import Vue from 'vue';

// 3rd Party Libraries
import Router from 'vue-router';

// Project Sources
import routes from './routes';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes,
    saveScrollPosition: true,
    scrollBehavior (to, from, savedPosition) {
        return savedPosition || { x: 0, y: 0 };
    }
});

router.onError((error) => {
    /* eslint-disable-next-line no-console */
    console.log('Router Error', error);
    router.replace({ name: 'NotFound' });
});

export default router;
