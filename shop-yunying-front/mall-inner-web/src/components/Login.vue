<template>
<div class="login1">
  <div class="span-col-2">

  </div>
  <div class="login-logo">
    <img src="@/assets/logo.png">
  </div>
  <div> 
    <el-form :rules="rules" ref="loginform" :model="loginform"  class="loginContainer">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="loginform.name"></el-input>
       </el-form-item>
      <el-form-item label="密码" prop="password">
         <el-input type="password" auto-complete="false" v-model="loginform.password"></el-input>
      </el-form-item>
      <el-form-item>
         <el-button type="primary" @click="onSubmit" style="width:100%" >登录</el-button>
      </el-form-item>
      <el-form-item>
        <el-button style="width:100%">注册</el-button>
      </el-form-item>
    </el-form>
    </div>
</div>

</template>

<script>
export default {
  name: 'Login',
   data() {
      return {
        loginform: {
          name: 'admin',
          password: '123',
        },
        rules:{
          name:[{required:true , massage:'请输入用户名', trigger:'blur'}],
          password:[{required:true , massage:'请输入密码', trigger:'blur'}]
        }
      }
    },
    methods: {
      onSubmit() {
        this.$refs.loginform.validate((valid) => {
          if (valid) {
            alert('submit!');
            this.$router.replace('/home');
          } else {
            this.$message.error('请输入用户名和密码');
            return false;
          }
        });
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/scss">
  .loginContainer{
      border-radius:15px;
      background-clip:padding-box;
      margin:175px 100px 100px 0px;
      width:350px;
      padding:15px 35px 15px 35px;
      background: #fff;
      border:1px solid #ffffff;
      box-shadow:0 0 25px #cac6c6;
  }
  .login1{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }
  .login-logo{
    margin:auto;
  }
  .span-col-2{
    grid-column: span 2 / auto;
  }
 
</style>