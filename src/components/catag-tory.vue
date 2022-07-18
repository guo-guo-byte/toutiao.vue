<template>    
   <ul class="catagtory">
        <li @click="chanaghr(item.id)"  v-for="item in catList" :key="item.id" :class='{select:item.id===current}'>{{item.name}}</li>
        
      </ul>
</template>  
<script>
   import { mapGetters } from "vuex";
export default {
   computed:{
      ...mapGetters(['catList','current'])
   },
   created(){
    this.$store.dispatch('catagtory/getCatagtory')
   },
   methods:{
      chanaghr(id){
         this.$store.commit('catagtory/updateCurrentCatagtory',id)
      }
   }
}
</script>  