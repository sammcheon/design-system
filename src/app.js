// Vue
import Vue from 'vue';

// 3rd Party Libraries
import iView from 'iview';

// Project Sources
import router from './router/index';
import App from './app.vue';

Vue.use(iView);

// Event Bus 생성
Vue.prototype.$eventBus = new Vue();

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});