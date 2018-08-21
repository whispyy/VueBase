<template>
  <div class="tooltip">
    <slot>{{ text }}</slot>
    <span class="tooltiptext" v-if="description">{{ transformedDescription }}</span>
  </div>
</template>

<script>
export default {
  name: 'Tooltip',
  props: {
    text: String,
    description: [String, Array]
  },
  computed: {
    transformedDescription: function () {
      if (this.description) {
        if (Array.isArray(this.description)) {
          let list = ''
          this.description.forEach(el => { list += (el + String.fromCharCode(160)) })
          return list
        } else {
          return this.description
        }
      }
    }
  },
  data () {
    return { }
  }
}
</script>

<style scoped>
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 150%;
  left: 50%;
  margin-left: -60px;
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: black transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
    visibility: visible;
}
</style>
