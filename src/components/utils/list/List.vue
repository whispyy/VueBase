<template>
  <ul class="list">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'List',
  props: {
    name: String
  }
}
</script>

<style scoped>
.list {
  padding: 0;
  border: solid 1px grey;
  list-style: none;
}
</style>
