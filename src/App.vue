<template>
  <div>
    <ul>
      <li v-for="item in data" :key="item.ID">
        {{ item.Name }} - Age: {{ item.Age }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      data: [],
    };
  },
  created() {
    // Fetch data when the component is created
    this.fetchDataFromApi();
  },
  methods: {
    ...mapActions(["fetchDataFromApi"]), // Assuming you have an action for fetching data
  },
  computed: {
    // You can also use a getter to get the data from the Vuex store if needed
    // For example, if you have a getter named `getData`
    // data() {
    //   return this.$store.getters.getData;
    // }
  },
};
</script>

<style>
/* Add your styles here if needed */
</style>
