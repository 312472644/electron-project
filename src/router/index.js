import Vue from 'vue';
import Router from 'vue-router';

import configRouterList from './config-router';

Vue.use(Router);

export default new Router({
  routes: configRouterList
})