import Vue from 'vue'
import Router from 'vue-router'
import Film from '@/views/Film'
import Cinema from '@/views/Cinema'
import Center from '@/views/Center'
import NowPlaying from '@/views/film/NowPlaying'
import ComingSoon from '@/views/film/ComingSoon'
import Detail from '@/views/Detail'
Vue.use(Router)
const router=new Router({
  mode:'history',
  routes:[
    {
      path:'/film',
      
      component:Film,
      children:[
        {
          path:'/film/nowplaying',
          component:NowPlaying
        },
        {
          path:'/film/comingsoon',
          component:ComingSoon
        },
        {
          path:"",
          redirect:'/film/nowplaying'
        }
      ]
    },
    {
      path:'/cinema',
      
      component:Cinema
    },
    {
      path:'/center',
      component:Center
    },
    {
      path:'/detail/:myid',
      component:Detail
    },
    {
      path:"",
      redirect:'/film/nowplaying'
    }
    
  ]
})
// router.beforeEach((to,from,next)=>{
//   let isLogin = false
//   if(to.path==='/center'){
//     console.log("盘查")
//     if(isLogin==true){
//       next()
//     }else{
//       console.log("拦截")
//       next('/film')
//     }
//   }else{
//     next()
//   }
// })

export default router
