<template>
  <div class="detail">
    <loader v-if="loading"></loader>

    <div v-else-if="info" class="box">
      <p v-if="info.title">Title : <strong>{{ info.title }}</strong></p>
      <p v-if="info.artists">Artist : <strong>{{ info.artists | artists }}</strong></p>
      <p v-if="info.year">Year : <strong>{{ info.year }}</strong></p>
      <p v-if="info.formats">Available formats :
        <strong v-for="format in info.formats" :key="format.name">
        <tooltip :text="format.name" :description="format.descriptions"></tooltip>
        <span v-if="format.text">[{{ format.text }}]</span>
      </strong>
      </p>
    </div>
  </div>
</template>

<script>
import Loader from '@/components/utils/Loader'
import Tooltip from '@/components/utils/Tooltip'

export default {
  name: 'Detail',
  components: {
    'loader': Loader,
    'tooltip': Tooltip
  },
  props: {
    loading: Boolean,
    info: Object
  },
  data () {
    return { }
  },
  filters: {
    artists (array) {
      let name = ''
      if (array && array.length === 1 && array[0].name) {
        name += array[0].name
      }
      if (array && array.length > 1) {
        for (let i = array.length - 1; i >= 0; i--) {
          name += array[i].join + ' ' + array[i].name
        }
      }
      return name
    }
  }
}
</script>

<style scoped>
.box::before {
  content: "—";
  color: #42b983;
}

.box {
  display: block;
}
</style>
