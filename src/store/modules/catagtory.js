import axios from 'axios'
export default {
  namespaced: true,
  state: {
    name:'你好',
    catagtory:[],//频道列表
    currentCatagtory:'' //当前选中的频道项的id
  },
  
  mutations: {
      updateCatagtory (state, payload) {
          state.catagtory = payload // 更新分类数据
       },
       updateCurrentCatagtory (state, payload) {
          state.currentCatagtory = payload
       }
    },
  
  actions: {
    // 这里直接请求之后  直接利用传递值 修改
    async  getCatagtory (context) {
      console.log(context);
      const res =await axios.get('http://toutiao.itheima.net/v1_0/channels')
                   
      context.commit('updateCatagtory',res.data.data.channels)
      context.commit('updateCurrentCatagtory', res.data.data.channels[0].id)
  }
  }
}