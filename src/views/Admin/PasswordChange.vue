<template>
    <el-container>
        <el-row>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>管理员管理</el-breadcrumb-item>
                <el-breadcrumb-item>密码修改</el-breadcrumb-item>
            </el-breadcrumb>
            <el-divider></el-divider>

            <el-col :span="12">
                <el-form label-width="90px" :model="from" :rules="rules" ref="updateForm">
                    <el-form-item label="原始密码" prop="password">
                        <el-input type="password" v-model="from.password"></el-input>
                    </el-form-item>
                    <el-form-item label="新密码" prop="password1">
                        <el-input type="password" v-model="from.password1"></el-input>
                    </el-form-item>
                    <el-form-item label="再次输入" prop="password2">
                        <el-input type="password" v-model="from.password2"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button @click="submit">确认修改</el-button>
                    </el-form-item>
                </el-form>
            </el-col>

        </el-row>
    </el-container>
</template>

<script>
    export default {
        name: "PasswordChange",
        data(){
            let passwordValidator1=(rule,value,callback)=>{
               let rag=/^[a-z0-9]{6,}$/;
               if (rag.test(value)){
                   callback();
               }else {
                   callback(new Error("密码必须是6位以上的字母和数字组成"))
               }
            };
            let passwordValidator2=(rule,value,callback)=>{

                if (value!=this.from.password1){
                    callback(new Error("两次输入的必须一致"));
                }else {
                    callback();
                }
            };

           return {
               from:{
                   password:"",
                   password1:"",
                   password2:"",
                   username:sessionStorage.getItem("login")
               },
               rules:{
                   password:{required:true,message:"请填写",trigger:"blur"},
                   password1:[
                       {required:true,message:"请填写",trigger:"blur"},
                       {validator:passwordValidator1,trigger:"blur"}

                   ],
                   password2:[
                       {required:true,message:"请填写",trigger:"blur"},
                       {validator:passwordValidator2,trigger:"blur"}

                   ],
               }
           }
        },
        methods: {
            submit(){
                this.$refs.updateForm.validate(valid=>{
                    if (valid){
                       this.$axios.put(this.$api.PASSWORD,this.from).then(res=>{
                           if (res.data.code===200){
                               this.$message.success("修改成功");
                               this.$refs.updateForm.resetFields();
                           }
                       })
                    } else {
                        return false
                    }
                })
            }
        },
        mounted() {
        }
    }
</script>

<style scoped lang="scss">
 .el-container{
     width: 100%;
     height: 100%;
 }
    .el-row{
        width: 100%;
    }
</style>