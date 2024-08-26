import { createRouter, createWebHistory } from 'vue-router';
import Categories from '../views/Categories.vue';
import Profile from '../views/profile/Page.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Categories,
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
