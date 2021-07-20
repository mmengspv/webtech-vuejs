import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

let api_endpoint =
  "https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json";

Vue.use(Vuex);

export default new Vuex.Store({
  //state is a field in oop
  state: {
    data: [],
  },

  getters: {
    pokemons: (state) => state.data,
  },

  // like private setter in oop
  // to change data in state
  mutations: {
    fetch(state, { res }) {
      state.data = res.data;
    },
    add(state, { payload }) {
      state.data.push(payload);
    },
    edit(state, { payload }) {
      state.data[payload.index].name = payload.name;
      state.data[payload.index].type = payload.type;
    },
  },

  //actions like public method
  // ให้ภายนอกเรียกใช้หรือดึงข้อมูลจากภายนอก
  actions: {
    // commit is a keyword to call mutation
    async fetchPokemon({ commit }) {
      // assume call data from api
      // let res = {
      //   data: [
      //     {
      //       name: {
      //         english: "Bulbasaur",
      //         japanese: "Fushikidane",
      //       },
      //       type: ["Grass", "Poison"],
      //     },
      //     {
      //       name: {
      //         english: "Bulbasaur2",
      //         japanese: "Fushikidane2",
      //       },
      //       type: ["Grass", "Poison"],
      //     },
      //   ],
      // };

      let res = await axios.get(api_endpoint);
      commit("fetch", { res });
    },
    addPokemon({ commit }, payload) {
      //cal api to add data
      commit("add", { payload });
    },
    editPokemon({ commit }, payload) {
      //call api to edit data
      commit("edit", { payload });
    },
  },

  modules: {},
});
