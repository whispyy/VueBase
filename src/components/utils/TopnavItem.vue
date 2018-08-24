<template>
  <router-link id="nav__item" :to="link">
    <span v-if="text">{{ text }}</span>
  </router-link>
</template>

<script>
export default {
  name: 'TopnavItem',
  props: {
    text: String,
    link: String
  },
  data () {
    return { }
  }
}
</script>

<style scoped>
#nav__item {
  text-decoration: none;
}
</style>
