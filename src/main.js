import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入请求插件
import axios from "./api/methods"
//引入API支持
import api from "./api/api"
Vue.prototype.$axios=axios;
Vue.prototype.$api=api;
Vue.use(ElementUI);
Vue.config.productionTip = false;
//添加守卫
router.beforeEach((to, from, next)=>{
  if (to.name!=="login"&&!sessionStorage.getItem("login")){
    next({name:"login"});
  }
  next();
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
