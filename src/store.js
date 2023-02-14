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
  }
};

const state = {
  allCharacters: [],
  allHouses: [],
  allReviews0: [],
  allReviews1: [],
  allReviews2: [],
  allReviews3: [],
  allReviews4: [],
  allReviews5: [],
  allReviews6: [],
  allReviews7: [],
  allReviews8: [],
  allReviews9: [],
  allReviews10: [],
  allReviews11: []
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
};

const store = createStore({
  mutations,
  state,
  actions,
  strict: true
});

export default store;
