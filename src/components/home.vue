<template>
<div class="container">
  <mt-swipe :auto="4000" class="swipe">
    <mt-swipe-item v-for="(item,index) in swiper":key="index">
      <img :src="item.img"/>
    </mt-swipe-item>
  </mt-swipe>


  <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                  
                <router-link to="/home/newlist">
                        <img src="../images/menu1.png" alt="">  
		                    <div class="mui-media-body">新闻资讯</div>
                </router-link></li>

		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <img src="../images/menu2.png" alt="">  
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <img src="../images/menu3.png" alt="">  
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <img src="../images/menu4.png" alt="">  
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <img src="../images/menu5.png" alt="">  
		                    <div class="mui-media-body">视屏专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../images/menu6.png" alt="">  
		                    <div class="mui-media-body">联系我们</div></a></li>
		     
	</ul>

        
</div>
</template>
<script>
import axios from "axios"
  export default {
    data(){
      return{
        swiper: []
      }
    },
    created(){
      axios({
        url:"http://vue.studyit.io/api/getlunbo"
      }).then(res =>{
        if(res.data.status == 0){
          this.swiper =  res.data.message;
        }
      
      })
       
    }

  }
</script>

<style>
.swipe{
  height:280px;
}
.swipe img{
  width:100%;
  height:100%;
  }
 .mui-table-view img{
   width:50%;
   height:50%;
    }

</style>
