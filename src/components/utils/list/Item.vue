<template>
  <li class="item">
    <div class="item-block">
      <h2 v-if="title">{{ title }}</h2>
      <p v-if="desc">{{ desc }}</p>
      <slot></slot>
    </div>
    <div class="side-action"></div>
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
  display: flex;
  margin: 0;
  padding: 0.5em;
  border: solid 1px lightgrey;
}

.item-block * {
  margin: 0;
}
</style>
