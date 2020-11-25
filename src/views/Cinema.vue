<template>
    <div class="cinema" :style="mystyle">
        <ul>
            <li v-for="item in dataList" :key="item.id">{{item.name}}</li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios'
import BetterScroll from 'better-scroll'
export default {
    data(){
        return{
            dataList:[],
            mystyle:{
                height:'0px'
            }
        }
    },
    mounted(){
        // console.log(document.documentElement.clientHeight)
            this.mystyle.height=document.documentElement.clientHeight-50+"px";
            axios({
                url:"https://m.maizuo.com/gateway?cityId=310100&ticketFlag=1&k=3165776",
                headers:{
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1605591823507686609223681","bc":"310100"}',
                    'X-Host': 'mall.film-ticket.cinema.list'
                }
            }).then(res=>{
                console.log(res.data)
                this.dataList=res.data.data.cinemas
                this.$nextTick(()=>{
                    new BetterScroll(".cinema",{
                        scrollbar:{
                            fade:true,
                            interactive:false
                        }
                    })
                })

            })
            
        },
    methods:{
        
    }
}
</script>
<style lang="scss" scoped>
    .cinema{
        // height: 500px;
        overflow: hidden;
        position: relative;
    }
    li{
        height: 50px;
        padding: 5px 10px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #e0e0e0;
    }
</style>