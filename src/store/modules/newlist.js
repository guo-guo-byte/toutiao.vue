import axios from "axios";

export default {
    namespaced: true,
    state: {
      name:'分类',
      allData:{} //存储所有文章列表数据
    },
    mutations: {
      updataAllData(state,{id,list}){
        console.log(id);
        state.allData={
          ...state.allData,
          [id]:list
        }
      }
    },
    actions: {
      async getNewList(context,payload){
        const res=await axios({
          url: `http://toutiao.itheima.net/v1_0/articles?channel_id=${payload}&timestamp=${new Date()}&with_top=1`
        })
        context.commit('updataAllData',{
          id:payload,
          list:res.data.data.results
        })
      }
    }
  }