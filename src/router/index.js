
import { createRouter, createWebHistory } from 'vue-router';
import Accueil from '../components/Accueil.vue';
import Associations from '../components/Associations.vue';
import Evenements from '../components/Evenements.vue';
import Map from '../components/Map.vue';

const routes = [
  { path: '/', component: Accueil },
  { path: '/associations', component: Associations },
  { path: '/evenements', component: Evenements },
  { path: '/carte', component: Map }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;