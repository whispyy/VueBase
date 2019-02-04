<template>
  <div class="header-container">
    <h1 class="title">{{ convName }}</h1>
  </div>
</template>

<script>
export default {
  name: 'ChatHeader',
  props: {
    convName: String,
    type: String
  }
}
</script>

<style scoped>
.header-container {
  display: flex;
  width: 100%;
  padding: 0.25rem;
  border-bottom: solid 2px rgba(#3a6cc9, 0.2);
}

.title {
  font-size: 1rem;
}
</style>
