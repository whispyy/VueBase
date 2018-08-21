<template>
  <div id="app">
    <top-nav :title="'Vue Blog'"></top-nav>
    <router-view/>
  </div>
</template>

<script>
import Topnav from '@/components/utils/Topnav'
export default {
  name: 'App',
  components: {
    'top-nav': Topnav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}
</style>
