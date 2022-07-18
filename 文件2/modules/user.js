export default{
  namespaced: true,
    state: {
        token: '12345'
      },
    //   修改state属性必须在mutations 里面
      // mutations:{
      //   updateToken(state){
      //       state.token='你好'
      //   }
      // }
      mutations:{
          updateToken(state,payload){
            console.log(payload);
              state.token='你好'
          }
        }
}