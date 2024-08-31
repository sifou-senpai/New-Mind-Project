//import { createRouter, createWebHistory } from 'vue-router';
//import HomePage from './components/HomePage.vue';
//import FormationsPage from './components/FormationsPage.vue';
//import SignIn from './components/SignIn&Up/SignIn&Up.vue';
//import ForgotPassword from './components/forgotPass/ForgotPass.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/formations', component: FormationsPage },
  { path: '/sign-in', component: SignIn },
  { path: '/forgot-password', component: ForgotPassword },
  { path: '/:pathMatch(.*)*', redirect: '/' }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
