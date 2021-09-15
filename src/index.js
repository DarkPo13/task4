import Vue from 'vue';
import VeeValidate from 'vee-validate';

import { store } from './_store';
import { router } from './_helpers';
import App from './app/App';


import { BCard } from 'bootstrap-vue';
import { BCardText } from 'bootstrap-vue';
  
Vue.component('b-card', BCard);
Vue.component('b-card-text', BCardText);

Vue.use(VeeValidate);

// setup fake backend
import { configureFakeBackend } from './_helpers';
configureFakeBackend();

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});