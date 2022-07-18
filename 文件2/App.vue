<template>
  <div>
    <h4>展示token</h4>
    <div>{{$store.state.user.token}}
      {{$store.state.setting.name}}
 {{name}} {{count}}
 {{token}}
      <!-- 点击事件修改 uer.js里面的内容-->
      <button @click="$store.commit('updateToken')">修改tiken</button>
      <button @click="changebanzhang"> 修改setting</button>
      <button @click="changdsjh">利用mapMutations</button>
    </div>
  </div>
</template>

<script>
// ...mapMutations({
  // updateToken:'user/updataToken',
  // newMethods:'user/updataToken'
// })
import {defineComponent} from 'vue'
import {mapState,mapGetters,mapMutations} from 'vuex'
export default defineComponent({
   mounted() {
    console.log(this);
  },
computed:{
  // 这里是接受index.js的数据
  ...mapState(['name','count']),
  // 这里是接受index.js的数据
  ...mapGetters(['token'])
},
methods: {
  ...mapMutations(['user/updateToken']),
  changebanzhang(){
    this.$store.commit('setting/changu')
  },
  // mapMutations 并且时秘密空间的形式   修改参数 并且传递一个参数
changdsjh(){
  this['user/updateToken']('黑马')
}
},

})
 

</script>

<style>

</style>