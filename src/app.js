// Vue
import Vue from 'vue';

// Project Sources
import router from './router/index';
import App from './app.vue';

// Event Bus 생성
Vue.prototype.$eventBus = new Vue();

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});