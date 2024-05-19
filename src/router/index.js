import {createRouter, createWebHistory} from 'vue-router';

import ResourceList from '@/components/ResourceList.vue';
import Recommendations from '@/components/Recommendations.vue';
import Administration from '@/components/Administration.vue';
import ResourceInfo from '@/components/ResourceInfo.vue';
import Profile from '@/components/Profile.vue';
import UserProfile from '@/components/UserProfile.vue';
import Login from '@/components/Login.vue';

const routes = [
    { path: '/', name: 'ResourceList', component: ResourceList },
    { path: '/recommendations', name: 'Recommendations', component: Recommendations },
    { path: '/administration', name: 'Administration', component: Administration },
    { path: '/:id', name: 'ResourceInfo', component: ResourceInfo },
    { path: '/profile', name: 'Profile', component: Profile },
    { path: '/user-profile/:id', name: 'UserProfile', component: UserProfile },
    { path: '/login', name: 'Login', component: Login },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

router.beforeEach(authenticationCheck);

function authenticationCheck(to, from, next) {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/login'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');

    if (authRequired && !loggedIn) {
        return next({
            path: '/login',
            query: {returnUrl: to.path}
        });
    }

    next();
}

export default router;
