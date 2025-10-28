import { createRouter, createWebHistory } from 'vue-router';
import Landing from '../pages/LandingPage.vue';
import Login from '../pages/Login.vue';
import Signup from '../pages/Signup.vue';
import Dashboard from '../pages/Dashboard.vue';
import TicketManagement from '../pages/TicketManagement.vue';

const routes = [
  { path: '/', name: 'Landing', component: Landing },
  { path: '/login', name: 'Login', component: Login },
  { path: '/signup', name: 'Signup', component: Signup },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard, meta: { requiresAuth: true } },
  { path: '/tickets', name: 'Tickets', component: TicketManagement, meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Auth guard
router.beforeEach((to, from, next) => {
  const session = localStorage.getItem('ticketapp_session');
  if (to.meta.requiresAuth && !session) next('/auth/login');
  else next();
});

export default router;
