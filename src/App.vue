<template>
  <div id="app">
    <h1>Data from Backend</h1>
    <ul>
      <li v-for="item in data" :key="item.ID">
        {{ item.Name }} - Age: {{ item.Age }}
      </li>
    </ul>
  </div>
</template>

<script>
// Import Axios
import axios from 'axios';

export default {
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        // Use Axios instead of this.$http
        const response = await axios.get('http://localhost:7071/api/getTitleFromApi');
        this.data = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  font-size: 2em;
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 5px;
  padding: 10px;
  background-color: #ecf0f1;
  border-radius: 5px;
  display: inline-block;
}
</style>
