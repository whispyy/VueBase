<template>
  <li class="item">
    <h2 v-if="title">{{ title }}</h2>
    <span v-if="desc">{{ desc }}</span>
  </li>
</template>

<script>
export default {
  name: 'Item',
  props: {
    title: String,
    desc: String
  }
}
</script>

<style scoped>
.item {
  border: solid 1px lightgrey;
}
</style>
