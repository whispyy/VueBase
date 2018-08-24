<template>
  <div id="header">
    <router-link to="/" id="title">
      <img src="@/assets/logo.png">
      <span v-if="title">{{ title }}</span>
    </router-link>

    <div id="nav">
      <slot>{{ nav }}</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Topnav',
  props: {
    title: String
  },
  data () {
    return { }
  }
}

</script>

<style scoped>
#header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  box-shadow: 0 0 1px rgba(0,0,0,0.25);
  background-color: #fff;
  height: 40px;
  padding: 10px 0;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#title {
  display: inline-block;
  font-size: 1.5em;
  line-height: 40px;
  font-weight: 500;
  padding-left: 10px;
  text-decoration: none;
  color: #2c3e50;
}

#title img {
  vertical-align: middle;
  margin-right: 6px;
  width: 40px;
  height: 40px
}

#nav {
  padding-right: 10px;
}
</style>
