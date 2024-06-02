/* eslint-disable */

import { createStore } from 'vuex';
import axios from 'axios'; // Import axios

const store = createStore({
  state() {
    return {
      profile: {
        name: 'Adam Iskandar',
        courseYear: '3 SECJH',
        matrixNumber: 'A21MJ5041',
        address: 'Subang Jaya'
      },
      photos: [],
      filteredPhotos: [],
    };
  },
  mutations: {
    SET_PHOTOS(state, photos) {
      state.photos = photos;
      state.filteredPhotos = photos.slice(0, 10);
    },
    FILTER_PHOTOS(state, searchTerm) {
      if (searchTerm === '') {
        state.filteredPhotos = state.photos.slice(0, 10);
      } else {
        state.filteredPhotos = state.photos.filter(photo =>
          photo.title.toLowerCase().includes(searchTerm.toLowerCase())
        ).slice(0, 10);
      }
    },
    updateProfile(state, profile) {
      state.profile = profile;
    }
  },
  actions: {
    fetchPhotos({ commit }) {
      axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(response => {
          commit('SET_PHOTOS', response.data);
        })
        .catch(error => {
          console.error('Error fetching photos:', error);
        });
    },
    filterPhotos({ commit }, searchTerm) {
      commit('FILTER_PHOTOS', searchTerm);
    },
    saveProfile({ commit }, profile) {
      commit('updateProfile', profile);
    }
  },
  getters: {
    photos(state) {
      return state.filteredPhotos;
    },
  },
});

export default store;
