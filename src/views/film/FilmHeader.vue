<template>
    <nav>
        <ul>
            <router-link to="/film/nowplaying" tag="li" activeClass="myClass"><span class="myClass">正在热映</span></router-link>
            <router-link to="/film/comingsoon" tag="li" activeClass="myClass"><span class="myClass">即将上映</span></router-link>
            
        </ul>
    </nav>
</template>
<style lang="scss" scoped>
    .fixed{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        
        background-color: #fff;
    }
    .myClass{
        
        span{
            color: orange;
            border-bottom:1px solid orange;
        }
        
    }
    
    ul{
        height: 40px;
        display: flex;
        border-bottom: 1px solid #e0e0ee;
        li{
            flex: 1;
            display: flex;
            justify-content: center;
            
            
            
        }
        span{
            
            // width: 56px;
            height: 40px;
            text-align: center;
            line-height: 40px;

            
        }
        
        
        
       
    }
    
</style>