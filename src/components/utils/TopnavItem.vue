<template>
  <router-link class="nav__item" active-class="active" :to="link">
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
.nav__item {
  text-decoration: none;
  color: #34495e;
  padding-bottom: 3px;
  white-space: nowrap;
}

.nav__item:hover,
.active {
  border-bottom: 3px solid #42b983;
}

</style>
