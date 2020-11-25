<template>
    <div class="swiper-container filmswiper">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
    </div>
</template>
<script>
import {Swiper,swiperSlide} from 'vue-awesome-swiper'
import 'vue-awesome-swiper/node_modules/swiper/dist/css/swiper.min.css'
export default {
    mounted(){
        new Swiper('.filmswiper',{
            loop:true,
             autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false
             },
           
        })
    }
}
</script>
<style lang="scss" scoped>
    .swiper-wrapper{
        img{
            width: 100%;
            
        }
    }
</style>