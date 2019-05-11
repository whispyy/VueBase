<template>
  <ul class="dropdown-container">
    <li class="dropdown-item" v-for="item in list" :key="item.text">
      {{ item.text }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Dropdown',
  props: {
    list: Array
  }
}
</script>

<style scoped>
.dropdown-container {
  background-color: #f8f8f8;
}

.dropdown-item {
  list-style: none;
  color: royalblue;
}
</style>
