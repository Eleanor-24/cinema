<template>
    <div v-if="filmInfo">
        <div class="film-poster">
            <img :src="filmInfo.poster" class="target-poster"/>
        </div>
        
        <div class="film-detail">
            <p class="name">{{filmInfo.name}}</p>
            <p>{{filmInfo.category}}</p>
            <p>{{filmInfo.nation}}</p>
            <p>{{filmInfo.synopsis}}</p>
        </div>
        <div class="film-actors">
            <h5>演职人员</h5>
            <detailSwiper :key="filmInfo.actors.length">
                <div class="siwper-slide" v-for="item in filmInfo.actors" :key="item.name">
                    <img :src="item.avatarAddress">
                    <p>{{item.name}}</p>
                    <p style="font-size:14px;color:#333;">{{item.role}}</p>
                </div>
            </detailSwiper>
        </div>
    </div>
</template>
<script>
import detailSwiper from './detail/DetailSwiper'
import axios from 'axios'

export default {
    
    data(){
        return {
            id:'',
            filmInfo:null
        }
    },
   beforeMount(){
       this.$store.state.isTabbarShow=false
   },
    mounted(){
        axios({
            url:'https://m.maizuo.com/gateway?filmId='+this.$route.params.myid+'&k=8842181',
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1605591823507686609223681","bc":"310100"}',
                'X-Host': 'mall.film-ticket.film.info'
            },
            
            
        }).then(res=>{
            console.log(res.data)
            this.filmInfo = res.data.data.film
            console.log(this.filmInfo)
        })
        // this.id=this.$route.params.myid
    },
   beforeDestroy(){
       console.log("hhh")
       this.$store.state.isTabbarShow=true
   },
    components:{
        detailSwiper
    }
}
</script>
<style lang="scss" scoped>

.film-poster{
    // width: 100%;
    width: 100%;
    position: relative;
    top: 0;
    height: 240px;
    overflow: hidden;
    .target-poster{
        width: 100%;
        position: absolute;
        top:-70%;
    }
}
.film-detail{
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    background-color: #fff;
    p{
        font-size: 14px;
        color: #333;
        margin-top: 10px;

    }
    .name{
        color: #000;
        font-size: 16px;
    }
 
}
.siwper-slide{
    margin-bottom: 50px;
    overflow: hidden;
}

   
    
</style>