<template>
  <div class="container">
    <div class="randomCity">
      <p>Random city</p>
    </div>
    <div class="search">
      <label for="search-input">Search and get the current weather anywhere! </label>
      <input type="search" name="search-input" id="search-input" @keypress.enter="getSearchInput" />
      <span v-if="weatherResult">
        <p>City / Country: <b>{{weatherResult.data.name}}</b></p>
        <p>Current weather: <b>{{weatherResult.data.main.temp}}°C</b></p>
        <p>What it feels like: <b>{{weatherResult.data.main.feels_like}}°C</b></p>
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "home",
  computed: {
    ...mapGetters(["weatherResult"])
  },
  methods: {
    ...mapActions(["getWeatherResult"]),
    getSearchInput() {
      const userInput = this.$el.querySelector('input[name="search-input"]')
        .value;
      this.getWeatherResult(userInput);
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
}
input {
  width: "70";
  height: "48";
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
