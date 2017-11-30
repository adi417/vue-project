<template>
<div class="container">
        <ul class="mui-table-view mui-table-view-chevron">
            <li class="mui-table-view-cell mui-media" v-for="(item,index) in newlist" :key="index">
                <!-- <router-link :to="'./home/newinfo' + item.id" class="mui-navigate-right"> -->
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body mui-ellipsis">
                           {{item.title}}
                        <p class="mui-ellipsis news-time">
                            <span>发布时间:{{item.add_time}}</span>
                            <span class="mui-pull-right">点击:{{item.click}}次</span>
                        </p>
                    </div>
                <!-- </router-link> -->
            </li>
            
        </ul>
  </div>


</template>
<script>
import axios from "axios"

   export default {
    data(){
              return {
                  newlist: []
              }
          },
    created(){
        axios({
           url: "http://vue.studyit.io/api/getnewslist"

       }).then(res=>{
           if(res.data.status == 0){
               this.newlist = res.data.message
               }
       })
   }
   }

</script>
<style>
  
</style>