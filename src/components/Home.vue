<template>
  <div class="container">
    <div class="search">
      <label for="search-input">Search and get the current weather anywhere: </label>
      <input type="search" name="search-input" id="search-input" autocomplete="off" @keypress.enter="getSearchInput" />
      <span v-if="weatherResult">
        <p>City / Country: <b>{{weatherResult.data.name}}</b></p>
        <p>Current weather: <b>{{weatherResult.data.main.temp}}°C</b></p>
        <p>What it feels like: <b>{{weatherResult.data.main.feels_like}}°C</b></p>
      </span>
    </div>
     <div class="random">
      <p><em>Don't know what to search for? Here's a suggestion...</em></p>
      <a class="lucky-button" v-on:click="getRandomCity">I'm feeling lucky</a>
      <span v-if="random">
        <!-- <p>City / Country: <b>{{random.data[0]}}</b></p> -->
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "home",
  computed: {
    ...mapGetters(["weatherResult"]),
    ...mapGetters(["random"])
  },
  methods: {
    ...mapActions(["getWeatherResult"]),
    ...mapActions(["getRandom"]),
    getSearchInput() {
      const userInput = this.$el.querySelector('input[name="search-input"]')
        .value;
      this.getWeatherResult(userInput);
    },
    getRandomCity() {
      this.getRandom();
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
}

.random{
  margin-top: 20px;
}

a.lucky-button{
  display:inline-block;
  padding:0.5em 3em;
  border:0.16em solid #2faadc;
  margin:0 0.3em 0.3em 0;
  box-sizing: border-box;
  text-decoration:none;
  text-transform:uppercase;
  font-family:'Roboto',sans-serif;
  font-weight:400;
  color:#2faadc;
  text-align:center;
  transition: all 0.15s;
}

a.lucky-button:hover{
  color:#70c5e7;
  border-color:#70c5e7;
}

a.lucky-button:active{
  color:#BBBBBB;
  border-color:#BBBBBB;
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
