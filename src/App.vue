<template>
  <div id="app">
    <top-nav :title="'Vue Base'">
      <top-nav-item :text="'Home'" :link="'/home'"></top-nav-item>
      <top-nav-item :text="'Posts'" :link="'/posts'"></top-nav-item>
    </top-nav>
    <router-view/>
  </div>
</template>

<script>
import Topnav from '@/components/utils/Topnav'
import TopnavItem from '@/components/utils/TopnavItem'
export default {
  name: 'App',
  components: {
    'top-nav': Topnav,
    'top-nav-item': TopnavItem
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
