<template>
  <div>
    <div class="no-data bg3" v-if="usedType==1">
      <p>暂无网络</p>
    </div>
    <div class="no-data bg2" v-else-if="usedType==3">
      <p>暂无订单</p>
    </div>
    <div class="no-data bg1" v-else >
      <p>暂无数据</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name:"NoData",
    props:["usedType"],
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .bg1{
    background: url("../assets/images/error/no-data.png") no-repeat center 4rem;
  }
  .bg2{
    background: url("../assets/images/error/no-order.png") no-repeat center 4rem;
  }
  .bg3{
    background: url("../assets/images/error/no-network.png") no-repeat center 4rem;
  }
  .no-data{
    background-size: 7.5rem 7.5rem;
    text-align: center;
    padding-top: 12.75rem;
  }
  .no-data p{
    font-size: .9rem;
    color: #333333;
  }
</style>
