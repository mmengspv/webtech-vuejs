<template>
  <div>
    <counter :initNumber="50"></counter>
    <counter></counter>
    <counter></counter>
    <counter></counter>
  </div>
</template>

<script>
import Counter from "../components/Counter.vue";
export default {
  components: {
    Counter,
  },
};
</script>

<style>
</style>