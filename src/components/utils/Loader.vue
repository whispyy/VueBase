<template>
  <div class="loader-container">
    <div class="loader" v-bind:class="'loader_'+size"></div>
  </div>
</template>

<script>
export default {
  name: 'Loader',
  props: {
    size: {
      default: 's', // values: s, m, l
      type: String
    }
  },
  data () {
    return { }
  }
}
</script>

<style scoped>
.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader {
    border: 8px solid #f3f3f3; /* Light grey */
    border-top: 8px solid #3498db; /* Blue */
    border-radius: 50%;
    animation: spin 2s linear infinite;
}

.loader_s {
  width: 2em;
  height: 2em;
}

.loader_m {
  width: 4em;
  height: 4em;
}

.loader_l {
  width: 6em;
  height: 6em;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
</style>
