<template>
  <div id="app">
    <Button />
  </div>
</template>

<script>
import Button from './library/button/Button'

export default {
  name: 'App',
  components: {
    Button
  }
}
</script>

<style lang="scss">
@import './assets/scss/_color.scss';
@import './assets/scss/_variables.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $-primary-color;
  margin-top: 60px;
}
</style>
