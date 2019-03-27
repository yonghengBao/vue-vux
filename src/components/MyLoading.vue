<template>
  <div class="loading">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    }
  }
</script>


<style scoped>

  .loading{
    position: fixed;
    top:50%;
    left: 50%;
    margin-left: -.4rem;
    margin-top: -.2rem;
    width: .8rem;
    height: .4rem;
    z-index: 5000;
    /*margin: 0 auto;*/
    /*margin-top:100px;*/
  }
  .loading span{
    display: inline-block;
    width: 8px;
    height: 100%;
    border-radius: 4px;
    background: lightgreen;
    -webkit-animation: load 1s ease infinite;
  }
  @-webkit-keyframes load{
    0%,100%{
      height: .4rem;
      background: lightgreen;
    }
    50%{
      height: .7rem;
      margin: -.15rem 0;
      background: lightblue;
    }
  }
  .loading span:nth-child(2){
    -webkit-animation-delay:0.2s;
  }
  .loading span:nth-child(3){
    -webkit-animation-delay:0.4s;
  }
  .loading span:nth-child(4){
    -webkit-animation-delay:0.6s;
  }
  .loading span:nth-child(5){
    -webkit-animation-delay:0.8s;
  }
</style>
