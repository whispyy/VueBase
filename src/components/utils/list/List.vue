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
  border: solid 1px grey;
}
</style>
