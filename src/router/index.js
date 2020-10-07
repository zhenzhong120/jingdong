import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index/index.vue'
import my from "@/views/my/my.vue"
import shopcart from "@/views/shopcart/shopcart.vue"
import sort from "@/views/sort/sort.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{
      path:"/my",
      name:"my",
      component:my
    },{
      path:"/shopcart",
      name:"shopcart",
      component:shopcart
    },{
      path:"/sort",
      name:"sort",
      component:sort
    }
  ]
})
