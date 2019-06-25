<template>
  <div>
    <x-header style="position: fixed;width: 100%"></x-header>

    <!--无限滚动 子组件自动处理数据-->
    <infinite  url="//hn.algolia.com/api/v1/search_by_date?tags=story" style="padding: .45rem 0 .1rem;" infType="1">
      <template slot-scope="props">
        <div v-for="(item, index) in props.list" :key="index" >
          <p @click="handle(item.points)">{{item.created_at }} <span style="float: right">{{ item.relevancy_score}}</span></p>
        </div>
      </template>
    </infinite>
    <!--无限滚动父组件自己处理数据-->
    <!--<infinite style="padding: .45rem 0 .1rem;">-->
      <!--<template v-slot:content>-->
        <!--<div v-for="(item, index) in list" :key="index" >-->
          <!--<p @click="handle(item.points)">{{item.created_at }} <span style="float: right">{{ item.relevancy_score}}</span></p>-->
        <!--</div>-->
      <!--</template>-->
    <!--</infinite>-->

    <router-link :to="{name:'Login'}">登录</router-link>
    <tabbar style="position: fixed">
      <tabbar-item selected>
        <img slot="icon" src="../assets/images/home/bar／tab_home_pre@2x1.png" srcset="../assets/images/home/bar／tab_home_pre@2x1.png 2x,../assets/images/home/bar／tab_home_pre@2x1.png 3x">
        <img slot="icon-active" src="../assets/images/home/bar／tab_home_pre@2x.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="../assets/images/home/bar／tab_mine@2x.png">
        <img slot="icon-active" src="../assets/images/home/bar／tab_mine@2x1.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>

  </div>
</template>

<script type="text/ecmascript-6">
  import { baseURL } from '@/assets/js/api.js'
  import Infinite from '@/components/commonComponents/Infinite.vue'
  import { XHeader ,Tabbar, TabbarItem,Selector ,Popover} from 'vux'
  export default {
  name: 'Home',
  components: {
    XHeader,
    Tabbar,
    TabbarItem,
    Selector,
    Popover,
    Infinite
  },
  data () {
    return {
      page:1,
      list:[]
    }
  },
  mounted(){

  },
  methods: {
    handle(points){
      console.log(points)
    },
    //自己返回数据自行处理
    infiniteGetData($state){
      this.$axios.get('//hn.algolia.com/api/v1/search_by_date?tags=story', {
        params: {
          page: this.page,
        },
      }).then(({data}) => {
        if (data.hits.length) {
//        if (this.page<5) {
          this.page += 1;

          /***数据处理****/
          this.list.push(...data.hits);
          /***数据处理****/

          $state.loaded();
        } else {
          $state.complete();
        }
      }).catch((err)=>{
        $state.error();
      });
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
