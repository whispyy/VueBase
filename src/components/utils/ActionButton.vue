<template>
  <button
    v-on:click="onClick"
    v-bind:class="['button-base', mode]"
    :type="type">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ActionButton',
  props: {
    mode: String,
    type: String
  },
  methods: {
    onClick () {
      this.$emit('onClick')
    }
  }
}
</script>

<style>

.button-base {
  padding: 0.75em 2em;
  border-radius: 2em;
  display: inline-block;
  transition: all 0.15s ease;
  box-sizing: border-box;
  border: 1px solid #4fc08d;
}

.-huge {
  font-size: 1.05em;
  font-weight: 600;
  letter-spacing: 0.1em;
  min-width: 8em;
}

.primary {
  background-color: #4fc08d;
  color: #fff;
}
.secondary {
  background-color: #fff;
  color: #42b983;
}
.link {
  background-color: #f6f6f6;
  color: #7f8c8d;
  border-color: #f6f6f6;
}

</style>
