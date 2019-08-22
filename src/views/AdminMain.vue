<template>
    <el-container>
        <el-aside>
            <el-menu>
                <el-submenu :index="item.name" v-for="item in routeData" :key="item.name">
                   <template #title>
                      <i :class="item.meta.icon"></i><span>{{item.meta.title}}</span>
                   </template>
                    <el-menu-item :index="navitem.name" v-for="navitem in item.children" :key="navitem.name">
                      <router-link :to="{name:navitem.name}">
                         {{navitem.meta.title}}
                      </router-link>
                    </el-menu-item>
                </el-submenu>
            </el-menu>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: "AdminMain",
        data: () => ({
            routeData:[]
        }),
        methods: {},
        mounted(){
          this.routeData=this.$router.options.routes.pop().children;
        }
    }
</script>

<style scoped lang="scss">
   .el-container{
       height: 100%;
   }
</style>