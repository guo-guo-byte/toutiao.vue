import Vue from 'vue'
import Vuex from 'vuex'
import catagtory from './modules/catagtory'
import newlist from './modules/newlist'
Vue.use(Vuex)
 export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    catagtory,
    newlist
  },
  // 快捷访问
  getters:{
    catList:(state)=>state.catagtory.catagtory, //p频道列表
    current:(state)=>state.catagtory.currentCatagtory, //当前项
    currentList:(state)=>{
      // 获取当前频道对应的数据
      return state.newlist.allData[state.catagtory.currentCatagtory]
    }
  }
})
