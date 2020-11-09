import { createWebHistory, createRouter } from 'vue-router'
const history = createWebHistory()
const router = createRouter({
  history, // 路由模式
  routes: [  
      { path:'/', name: 'login', component:() => import('../pages/login'),meta:{  title: '登录' }  },
      { path:'/home', name: 'home', component:() => import('../pages/home'), meta:{  title: '智慧灯杆' }  }, 
    ]  
})
router.afterEach((to) => {
  document.title = to?.meta?.title || '智慧灯杆'; 
});
export default router