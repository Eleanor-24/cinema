<template>
    <nav>
        <ul>
            <router-link to="/film" tag="li" activeClass="myClass">film</router-link>
            <router-link to="/cinema" tag="li" activeClass="myClass">cinema</router-link>
            <router-link to="/center" tag="li" activeClass="myClass">center</router-link>
        </ul>
    </nav>
</template>
<style lang="scss" scoped>
    .myClass{
        color: orange;
    }
  
    nav{
        position: fixed;
        bottom: 0;
        height: 50px;
        width: 100%;
        background-color: #fff;
        border-top: 1px solid #e0e0e0;
      
        ul{
            display: flex;
            li{
                flex:1;
                line-height: 50px;
                text-align: center;
            }
        }
     }
</style>