import { createStore } from 'vuex';
import axios from 'axios';

const mutations = {
  AddCharacters(state, allCharacters) {
    state.allCharacters = allCharacters;
  },
  AddHouses(state, allHouses) {
    state.allHouses = allHouses;
  },
  AddReview(state, value) {
    state[value.id].unshift(value.data);
    // localStorage.setItem('vuexStore', JSON.stringify(state[value.id]));
  }
};

const state = {
  allCharacters: [],
  allHouses: [],
  allReviews0: [],
  allReviews1: [],
  allReviews2: []
};

const actions = {
  axiosGOT({ commit }) {
    axios.get('https://thronesapi.com/api/v2/Characters').then((response) => {
      commit('AddCharacters', response.data);
    });
  },
  getHouses({ commit }) {
    axios
      .get(`https://api.gameofthronesquotes.xyz/v1/houses`)
      .then((response) => {
        commit('AddHouses', response.data);
      });
  }
  // getState({ commit }) {
  //   const savedStore = localStorage.getItem('vuexStore');
  //   if (savedStore) {
  //     commit('AddReview', JSON.parse(savedStore));
  //   }
  // }
};

const store = createStore({
  mutations,
  state,
  actions,
  strict: true
});

// store.dispatch('getState');

export default store;
