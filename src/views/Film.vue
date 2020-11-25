<template>
    <div>
        <!-- 轮播 -->
        <swiper :key="loopList.length" ref="mySwiper">
            <div  class="swiper-slide" v-for="item in loopList" :key="item.bannerId" >
                <img :src="item.imgUrl">
            </div>
        </swiper>
        <filmHeader :class="isFixed?'fixed':''"></filmHeader>
        <router-view></router-view>
    </div>
</template>
<script>
import swiper from '@/views/film/Swiper'
import axios from 'axios'
import filmHeader from '@/views/film/FilmHeader'
export default {
    data(){
        return{
            loopList:[],
            isFixed:false
        }
    },
    mounted(){
        axios({
            url:'https://m.maizuo.com/gateway?type=2&cityId=310100&k=3459238',
            headers:{
               'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1605591823507686609223681","bc":"440100"}',
               'X-Host': 'mall.cfg.common-banner'
            }
        }).then(res=>{
            console.log(res.data)
            this.loopList=res.data.data
            
        })
    window.onscroll=this.handleScroll;

    },
    beforeDestroy(){
        window.onscroll=null;
        
    },
    methods:{
       handleScroll(){
            /* 如果滚动距离>轮播 ，则让filmHeader固定*/
            // console.log(this.$refs.mySwiper.$el.offsetHeight)
            if(document.documentElement.scrollTop>=this.$refs.mySwiper.$el.offsetHeight){
                // console.log("fixed")
                this.isFixed=true
            }else{
                this.isFixed=false
            }
       }
    
    },
    
    components:{
        swiper,
        filmHeader
    }
}
</script>
<style lang="scss" scoped>
   
</style>