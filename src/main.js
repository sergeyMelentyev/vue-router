import Vue from 'vue';
import App from './App.vue';

import Home from './components/Home.vue';
import Login from './components/Login.vue';
import StoriesPage from './components/StoriesPage.vue';
import StoriesAll from './components/StoriesAll.vue';
import StoriesFamous from './components/StoriesFamous.vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/stories',
    component: StoriesPage,
    children: [
      {
        path: '/',
        name: 'stories.all',
        component: StoriesAll
      },
      {
        path: 'famous',
        name: 'stories.famous',
        component: StoriesFamous
      }
    ]
  }
];
const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes: routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<app></app>',
  components: {
    App
  }
});
