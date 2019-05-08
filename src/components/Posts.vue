<template>
  <div class="posts">
    <h1>List of posts</h1>
    <list :name="'post'">
      <item
        :title="'post 1'"
        :desc="'post 1 description'"
        :dropdown="true"></item>
      <item :title="'post 2'" :desc="'post 2 description'"></item>
      <item :title="'post 3'"></item>
      <item :dropdown="true">
        <h2>post custom</h2>
        <p>Custom desc</p>
      </item>
    </list>
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
