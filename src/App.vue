<template>
  <Header />
    <router-view></router-view>
  <Footer />
</template>

<script>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
