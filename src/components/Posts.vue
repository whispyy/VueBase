<template>
  <div class="posts">
    <h1>List of posts</h1>
  </div>
</template>

<script>
import List from '@/components/utils/list/List'
import Item from '@/components/utils/list/Item'
export default {
  name: 'Posts',
  components: {
    'list': List,
    'item': Item
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
