import { createRouter, createWebHistory } from 'vue-router';

// Импортируйте компоненты для разных страниц
import CivicInitiatives from '@/views/CivicInitiatives.vue';
import GovernmentProjects from '@/views/GovernmentProjects.vue';
import UserProfile from '@/views/UserProfile.vue';
import MainPage from "@/views/MainPage.vue";

const routes = [
    {
        path: '/',
        name: 'MainPage', // Имя маршрута
        component: MainPage // Ваш компонент для главной страницы
    },
    {
        path: '/initiatives',
        name: 'CivicInitiatives',
        component: CivicInitiatives
    },
    {
        path: '/projects',
        name: 'GovernmentProjects',
        component: GovernmentProjects
    },
    {
        path: '/profile',
        name: 'UserProfile',
        component: UserProfile
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
