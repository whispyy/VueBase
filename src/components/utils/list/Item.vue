<template>
  <li class="item">
    <div class="item-block">
      <h2 v-if="title">{{ title }}</h2>
      <p v-if="desc">{{ desc }}</p>
      <slot></slot>
    </div>
    <div class="side-action" v-if="dropdown">
      <div class="side-action-icon" v-on:click="toggle = !toggle"></div>
    </div>
    <div class="dropdown-container" v-if="toggle">
      sdfsdf: {{ toggle }}
    </div>
  </li>
</template>

<script>
export default {
  name: 'Item',
  props: {
    title: String,
    desc: String,
    dropdown: Boolean
  },
  data () {
    return {
      toggle: false
    }
  }
}
</script>

<style scoped>
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0.5em;
  border: solid 1px lightgrey;
}

.item-block * {
  margin: 0;
}

.side-action {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2em;
  height: 2em;
  border-radius: 5em;
  border: solid 1px #42b983;
}

.side-action-icon {
  width: .5em;
  height: 1.5em;
  background-image: radial-gradient(circle at center, #42b983 0.2em, transparent 0);
  background-size: .5em .5em;
}

.side-action:hover {
  background-color: #42b983;
}

.side-action:hover .side-action-icon {
  background-image: radial-gradient(circle at center, white 0.2em, transparent 0);
}

</style>
