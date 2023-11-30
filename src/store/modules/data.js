// store/modules/data.js
import api from "api"; // Import the API service

const state = {
  data: [],
};

const mutations = {
  SET_DATA(state, newData) {
    state.data = newData;
  },
};

const actions = {
  async fetchDataFromApi({ commit }) {
    try {
      const response = await api.getData(); // Replace with your actual API call
      commit("SET_DATA", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error if needed
    }
  },
};

const getters = {
  getData: (state) => state.data,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
