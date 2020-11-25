<template>
    <div>
        <ul>
            <li v-for="item in dataList" :key="item.filmId" @click="changePage(item.filmId)">
                <img :src="item.poster">
                <p class="name">{{item.name}}</p>
                <p>观众评分{{item.grade}}</p>
                <p>主演：{{item.actors | actorFilter}}</p>

            </li>
            
        </ul>
        
    </div>
</template>
<script>
import axios from 'axios'
import Vue from 'vue'
Vue.filter("actorFilter",function(data){
    var newList = data.map(item=>item.name)
    return newList.join(' ')
})
export default {
    data () {
        return{
            dataList:[]
        }
    },
    mounted(){
        axios({
            url:'https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=927591',
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1605591823507686609223681"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(res=>{
            console.log(res.data.data)
            this.dataList = res.data.data.films
        })
    },
    methods:{
        changePage(id){
        this.$router.push(`/detail/${id}`)
        }
    }
    
}
</script>
<style lang="scss" scoped>
    ul{
        margin-bottom:50px;
        li{
            overflow: hidden;
            margin-bottom: 13px;
            padding: 12px;
            box-sizing: border-box;
            img{
                float: left;
                width: 66px;
                height: 86px;
                margin-right: 10px;
            }
            p{
                font-size: 13px;
                color: #797d82;
                margin-top: 5px;
            }
            .name{
                font-size: 16px;
                color: #000;
            }
        }
    }
</style>