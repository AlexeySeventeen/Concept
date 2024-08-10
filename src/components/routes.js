import CompHome from './Component/CompHome.vue';
import CompSearch from './Component/CompSearch.vue';
import CompFavorite from './Component/CompFavorite.vue';
import CompArchive from './Component/CompArchive.vue';
import CompSettings from './Component/CompSettings.vue';
import Project from './UI/Project.vue';
import {createRouter, createWebHistory} from 'vue-router';

const routes = [
  {
    path: '/Home',
    component: CompHome,
  },
  {
    path: '/Search',
    component: CompSearch,
  },
  {
    path: '/Favorite',
    component: CompFavorite,
  },
  {
    path: '/Archive',
    component: CompArchive,
  },
  {
    path: '/Settings',
    component: CompSettings,
  },
  {
    path: '/Home/prj:lastChangeSort',
    component: Project,
  },
];

const router = createRouter({
  routes, //массив сверху
  history: createWebHistory(process.env.BASE_URL), //создание истории перемещений
});

export default router; //для подключения в main.js
