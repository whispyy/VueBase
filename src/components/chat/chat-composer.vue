<template>
  <div class="write-container">
    <textarea class="write"
      maxlength="500"
      name="write"
      placeholder="Aa"
      v-on:keyup.enter="send($event)"
      v-model="message.text"></textarea>
  </div>
</template>

<script>
export default {
  name: 'ChatComposer',
  props: {
    mode: String,
    type: String
  },
  methods: {
    send () {
      this.$emit('send')
    }
  },
  data () {
    return {
      message: {
        text: '',
        type: ''
      }
    }
  }
}
</script>

<style scoped>
template {
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 1.25rem;
  margin: 0;
  border-top: solid 2px rgba(#3a6cc9, 0.2);
}

.button-base {
  padding: 0.75em 2em;
  border-radius: 2em;
  display: inline-block;
  transition: all 0.15s ease;
  box-sizing: border-box;
  border: 1px solid #4fc08d;
}

.write-container {
  display: flex;
  width: 90%;
  margin: 0.625rem 0;
  position: relative;
}

.write {
  height: 6.75rem;
  padding: 0.4rem 2.875rem 0.45rem;
  background-color: transparent;
  border-radius: 1.125rem;
  border: solid 1px rgba(#3a6cc9, 0.2);
  overflow: auto;
  position: relative;
  z-index: 1;
}
</style>
