<template>
    <div>
        center
    </div>
</template>
<script>

export default {
    beforeRouteEnter(to,from,next){
        let isLogin=true
        console.log("盘查")
        if(isLogin==true){
            next()
        }else{
            console.log("拦截")
            next('/film')
        }

    }
}
</script>