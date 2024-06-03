import { createRouter, createWebHistory } from 'vue-router';
import Projects from '../components/Projects.vue';
import Skills from '../components/Skills.vue';
import Contacts from '../components/Contact.vue';

const routes = [
  { path: '/', component: Projects },
  { path: '/skills', component: Skills },
  { path: '/contacts', component: Contacts },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
