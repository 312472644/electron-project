import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import router from './router';

Vue.config.productionTip = false;
Vue.use(ElementUI);

Vue.prototype.electron = window.electron;
Vue.prototype.ipcRenderer = window.ipcRenderer;
Vue.prototype.remote = window.remote;
Vue.prototype.axios = axios;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
