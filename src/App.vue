<template>
 <!-- app.vue是根组件 -->
  <div id="app">
    <catagtory />
    <new-list />
  </div>
</template>
<script>
import Catagtory from './components/catag-tory'
import NewList from './components/new-list'

export default {
  components: {
    Catagtory, NewList
  },
  mounted(){
    console.log(this.$store.state.catagtory.catagtory);
  }
}
</script>