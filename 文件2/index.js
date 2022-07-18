
import Vue from 'vue'
// // 1.引入vuex
import Vuex from 'vuex'
// // 2.注册Vuex仓库
Vue.use(Vuex)
import setting from './modules/setting'
import user from './modules/user'
const store  = new Vuex.Store({
    state:{
        name:'234',
        count:0
    },
    // 这里相当于计算属性
    getters:{
        token(state){
            return state.user.token
        },
        stttingName(state){
            return state.setting.name
        }
    },
    // user和setting的分模块
    modules: {
      user,
        setting
      
    }
})
export default store
    
