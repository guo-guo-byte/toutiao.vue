import Vue from 'vue'
import App from './App.vue'
// 1.引入vuex
import Vuex from 'vuex'
// 2.注册Vuex仓库
Vue.use(Vuex)
// 3.创建Vuex仓库
const store1= new Vuex.Store({
  state: {
    name:'黑马',
    count:0,
    userInfo:{
      token:12343
    },
    list:[
      {
      id:0
    },
    {
      id:0
    },{
      id:1
    },
    {
      id:1
    }
  ]
  },
  // 在里面修改状态
  mutations:{
    count1(state){
      state.count++
    },
    // 这里用在mapMutations
    changeC(state){
      state.name='大郭小郭'
    },

  },
  // 异步操作 执行异步代码，要通过actions，然后将数据提交给mutations才可以完成
  actions:{
    asyncCount({commit}){
      console.log(commit);
      setTimeout(()=>{
        commit("count1")
      },1000)
    }
  },
  // 相当于计算属性
  getters:{
    token(state){
      return state.userInfo.token
    },
    newList(state){
      console.log(state);
      // let map = new Map();
      // for(let item of state.list){
      // if(!map.has(item.id)){
      // map.set(item.id, item)
      // }
      // }
      // const arr = [...map.values()]
      // console.log(arr);
      // return 出去的值,就是当前的getters对应的值
      // indexOf >>获取索引号 >>数组里面基本值 {} {}
      return state.list.filter((item,index) =>{
      // const arr = [3,4,5,6,7]
      // const index = arr.indexOf(6)
      // console.log(index);
      // 过滤数组
      // true >> 满足条件 >>放到新数组
      // false >> 不满足条件 >>过滤掉
      
      // indexOf>>索引号
      // findIndex >>找索引号 >>满足条件的数组成员的索引号 >> 返货的是第一个找到的
      return state.list.findIndex((child) => child.id === item.id) ===index
      })
      // console.log(state.list);
      }
      
    
  }
})
Vue.config.productionTip = false

new Vue({
  // 4.挂载Vuex
  store:store1,
  render: h => h(App),
}).$mount('#app')
