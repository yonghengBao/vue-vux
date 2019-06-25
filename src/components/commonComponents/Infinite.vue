<template>
    <div v-if="infType==1">
      <slot name="header"></slot>
      <slot :list="list"></slot>
      <infinite-loading @infinite="infiniteHandler1" infinite-scroll-distance="100">
        <div slot="spinner">
          <load-more tip="加载中..."></load-more>
        </div>
        <div slot="no-more">
          <load-more tip="全部加载完毕" :show-loading="false" background-color="#fbf9fe"></load-more>
        </div>
        <div slot="no-results">
          <load-more tip="暂无数据" :show-loading="false" background-color="#fbf9fe"></load-more>
        </div>
        <div slot="error" slot-scope="{ trigger }">
          <a href="javascript:;" @click="trigger">出错了,点击重试</a>
        </div>
      </infinite-loading>
    </div>
    <div v-else >
      <slot name="header"></slot>
      <slot name="content"></slot>
      <infinite-loading @infinite="infiniteHandler2" infinite-scroll-distance="100">
        <div slot="spinner">
          <load-more tip="加载中..."></load-more>
        </div>
        <div slot="no-more">
          <load-more tip="全部加载完毕" :show-loading="false" background-color="#fbf9fe"></load-more>
        </div>
        <div slot="no-results">
          <load-more tip="暂无数据" :show-loading="false" background-color="#fbf9fe"></load-more>
        </div>
        <div slot="error" slot-scope="{ trigger }">
          <a href="javascript:;" @click="trigger">出错了,点击重试</a>
        </div>
      </infinite-loading>
    </div>
</template>

<script type="text/ecmascript-6">
    import { baseURL } from '@/assets/js/api.js'
    import { LoadMore } from 'vux'
    export default {
    name: 'Infinite',
    components: {LoadMore},
    data () {
      return {
        page: 1,
        list:[]
      }
    },
    props:['url','infType'],
    created(){
    },
    mounted(){
    },
    methods: {
      infiniteHandler1($state) { //无限滚动数据由子组件处理
          this.$axios.get(this.url, {
            params: {
              page: this.page,
            },
          }).then(({data}) => {
            if (data.hits.length) {
//            if (this.page<5) {
            this.page += 1;
            this.list.push(...data.hits);
            $state.loaded();
          } else {
            $state.complete();
          }
        }).catch((err)=>{
            $state.error();
          });
      },
      infiniteHandler2($state) {//无限滚动数据由父组件处理
        this.$parent.infiniteGetData($state);
      }
    }

}
</script>

<style lang="less" scoped>

</style>
