<template>
  <div>
    Add New Component
    <form>
      <div>
        <label>Name (En)</label>
        <input type="text" v-model="form.name.english" />
      </div>

      <div>
        <label for="name_jp">Name (Jp)</label>
        <input type="text" v-model="form.name.japanese" />
      </div>

      <div>
        <label for="type">Type</label>
        <input type="text" v-model="form.type" />
      </div>

      <div>
        <button @click="addPokemon">Add</button>
      </div>
    </form>
  </div>
</template>

<script>
import PokemonStore from "../store/Pokemon";
export default {
  data() {
    return {
      form: {
        name: {
          english: "",
          japanese: "",
        },
        type: [],
      },
    };
  },
  methods: {
    clearForm() {
      this.form = {
        name: {
          english: "",
          japanese: "",
        },
        type: [],
      };
    },
    addPokemon() {
      let payload = {
        name: this.form.name,
        type: this.form.type.split(",").map((item) => item.trim()),
      };
      //   todo: call action in pokemonStore to add data
      console.log("do");
      console.log(payload);
      PokemonStore.dispatch("addPokemon", payload);

      this.clearForm();
    },
  },
};
</script>

<style>
</style>