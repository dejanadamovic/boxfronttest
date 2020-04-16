import Vue from 'vue';
import Router from 'vue-router';

import { Forbidden } from '@servicestack/vue';
import Home from '../components/Home.vue';
import TestApi from '../components/TestApi.vue';

export enum Routes {
  Home = '/',
  TestApi = '/testApi',
  Forbidden = '/forbidden',
}

Vue.use(Router);

const routes = [
  { path: Routes.Home, component: Home },
  { path: Routes.TestApi, component: TestApi, props: { name: 'Vue' } },
  { path: Routes.Forbidden, component: Forbidden },
  { path: '*', redirect: '/' },
];

export const router = new Router ({
    mode: 'history',
    linkActiveClass: 'active',
    routes,
});

export const redirect = (path: string) => {
  const externalUrl = path.indexOf('://') >= 0;
  if (!externalUrl) {
      router.push({ path });
  } else {
      location.href =  path;
  }
};
