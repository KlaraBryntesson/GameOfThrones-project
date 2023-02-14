import { createRouter, createWebHashHistory } from 'vue-router';

import CharacterPage from './views/CharacterPage.vue';
import FamilyPage from './views/FamilyPage.vue';
import HomePage from './views/HomePage.vue';
import HousePage from './views/HousePage.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: HomePage,
      path: '/'
    },
    {
      component: CharacterPage,
      path: '/character/:characterId'
    },
    {
      component: FamilyPage,
      path: '/families'
    },
    {
      component: HousePage,
      path: '/house/:houseId'
    }
  ]
});
