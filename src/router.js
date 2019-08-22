import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/AdminLogin'
import Main from './views/AdminMain'
import Admin from './views/Admin/Admin'
import Password from './views/Admin/PasswordChange'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/login",
      name:"login",
      component:Login
    },
    {
      path:"/",
      redirect:"/login"
    },
    {
      path:"/main",
      name:"main",
      component:Main,
      children:[
        {
          path:"admin",
          name:"admin",
          meta: {
            title: "管理员管理",
            icon: "el-icon-setting",
          },
          component:Admin,
          children: [
                {
                  path:"password",
                  name:"password",
                  meta: {
                    title: "密码修改",
                    icon: "el-icon-setting",
                  },
                  component:Password,
            }

            ]

        }


      ]
    },
  ]
})
