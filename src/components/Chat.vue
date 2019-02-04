<template>
  <div class="chat">
    <h1>Chat</h1>
    <div class="container">
      <chat-header :conv-name="'test'"></chat-header>
      <chat-composer></chat-composer>
    </div>
  </div>
</template>

<script>
import ChatHeader from '@/components/chat/chat-header'
import ChatComposer from '@/components/chat/chat-composer'
export default {
  name: 'Posts',
  components: {
    'chat-header': ChatHeader,
    'chat-composer': ChatComposer
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 1.25rem 2.5rem 2.5rem;
}
</style>
