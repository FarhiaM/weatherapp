<template>
  <div>
    todo
  </div>
</template>

<script>
export default {
  name: 'SearchWidget',
  props: {
    cityname: {
      type: String,
      default: ''
    },
    temp: {
      type: Number
    },
    feelslike: {
      type: Number
    }
  }
}
</script>

<style>

</style>
