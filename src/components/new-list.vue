<template> 
  <div class="list">
        <div class="article_item" v-for="item in currentList" :key="item.art_id">
          <h3 class="van-ellipsis">{{item.title}}</h3>
          <div class="img_box">
             <img :key="img" v-for="img in item.cover.images" :src="img"
            class="w100" />
          </div>
          <!---->
          <div class="info_box">
            <span>{{item.aut_name}}</span>
            <span>{{item.comm_count}}</span>
            <span>{{item.pubdate}}</span>
          </div>
        </div>
      </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name:'NewList',
  computed:{
    ...mapGetters(['current','currentList'])
  },
  watch:{
    current(val){
      console.log(val);
      // 只要发生了变化--诚信获取列表数据
      this.$store.dispatch('newlist/getNewList',val) //切换之后频道的id
    }
  }
}
</script>