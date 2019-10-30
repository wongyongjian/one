import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import cart from 'views/cart/cart.vue'
import category from 'views/category/category.vue'
import home from 'views/home/home.vue'
import profile from 'views/profile/profile.vue'


const router = new VueRouter({
    routes:[   
        {path:'',redirect:'/home'},
        {path:'/home',component:home},
        {path:'/cart',component:cart},
        {path:'/category',component:category},
        {path:'/profile',component:profile}

    ],
    mode:'history'
})
export default router