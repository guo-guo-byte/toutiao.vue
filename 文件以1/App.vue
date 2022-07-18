<template>
 <div id="app">
{{ count }}
<hr>
{{$store.state.name}}
<br>
<button @click="$store.commit('count1')">点击count+1</button>
<button @click="changeC">点击修改郭</button>
<!--  actions的用法-->
<button @click="$store.dispatch('asyncCount')">actions点击count+1</button>
<button @click="asyncCount">简化mapActions写法</button>
<!-- 这里时直接拿到getters的内容 -->
<h5>{{$store.getters.token}}</h5>
<ul>
  <li v-for="item in newList" :key="item.id">{{item.id}}</li>
</ul>
 </div>
</template>

<script>
import { mapState,mapMutations,mapActions,mapGetters } from 'vuex'
export default {
 name: 'App',
 components: {
 },
 computed:{
  ...mapState(['count']),
  ...mapGetters(['token','newList'])
 },
//  辅助函数  把位于mutations中的方法提取了出来
 methods:{
  ...mapMutations(['changeC']),
  // actions
  ...mapActions(['asyncCount'])
 }
}
</script>

<style>
#app {
 font-family: Avenir, Helvetica, Arial, sans-serif;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
 text-align: center;
 color: #2c3e50;
 margin-top: 60px;
}
</style>
