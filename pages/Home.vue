<template>
  <div class="container">
    <img alt="Weather logo" width="200" height="200" src="../assets/logo.png">
    <div class="search">
      <label for="search-input">Search and get the current weather anywhere: </label>
      <input id="search-input" @keypress.enter="getSearchInput" type="search" name="search-input" autocomplete="off">
      <span v-if="weatherResult.name !== ''">
        <p>City / Country: <b>{{ weatherResult.name }}</b></p>
        <p>Current weather: <b>{{ weatherResult.main.temp }}°C</b></p>
        <p>What it feels like: <b>{{ weatherResult.main.feels_like }}°C</b></p>
      </span>
      <span v-if="weatherResult.name == ''">
        <p>Unfortunetly, the is no city located in the random position (dessert or sea probably)... please try again :(</p>
      </span>
    </div>
    <div class="random">
      <p><em>Don't know what to search for?</em></p>
      <a v-on:click="getRandomCity" class="lucky-button">I'm feeling lucky</a>
      <span>
        <!-- <p>City / Country: <b>{{random.data[0]}}</b></p> -->
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapGetters(['weatherResult']),
    ...mapGetters(['randomInfo'])
  },
  methods: {
    ...mapActions(['getWeatherResult']),
    ...mapActions(['getRandomInfo']),

    getSearchInput () {
      const userInput = this.$el.querySelector('input[name="search-input"]')
        .value
      this.getWeatherResult(userInput)
    },
    getRandomCity () {
      const randomLon = Math.floor(Math.random() * (180 - (-180)) + (-180))
      const randomLat = Math.floor(Math.random() * (90 - (-90)) + (-90))
      this.getRandomInfo({ randomLon, randomLat })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
}

.random{
  margin-top: 20px;
}

img{
  margin-left:600px;
}

p{
  margin: 10px;
}
.search{
  margin-top: 20px;
  margin-bottom: 10px;
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
