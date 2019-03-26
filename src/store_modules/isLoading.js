export default {
  state:{
    isLoading:false
  },
  getters:{
    isLoadingStatus:state=>{
      return state.isLoading
    }
  },
  //同步操作数据
  mutations:{
    updateLoadingStatus:(state, payload)=>{
      state.isLoading = payload.isLoading
    }
  },
  //异步炒作数据
  actions:{
    updateLoadingStatusByServer(store,payload){
      store.commit('updateLoadingStatus',{isLoading:payload.isLoading})
    }
  }
}
