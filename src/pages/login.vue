<template>
  <!-- 登陆页面 -->
  <div id="login">
    <p class="loginTitle">欢迎使用</p>
    <div class="formBox">
      <el-input v-model="userName" class="mt20 mb20" placeholder="请输入账号"></el-input>
      <el-input v-model="password" placeholder="请输入密码"></el-input>
      <el-button type="primary" style="margin-top:10px;width:100%;" @click="loginBtn">登陆</el-button>
    </div>
  </div>
</template>
<script>
import { login } from "../http/index.js";
export default {
  data() {
    return {
      userName: "",
      password: ""
    };
  },
  methods: {
    loginBtn() {
      //   trim()  去掉两边的 空格
      if (this.userName.trim() == "") {
        this.$message({
          showClose: true,
          message: "请输入账号",
          type: "warning"
        });
        return;
      } else if (this.password.trim() == "") {
        this.$message({
          showClose: true,
          message: "请输入密码",
          type: "warning"
        });
        return;
      } else {
        //   如果登陆成功的话 我们就需要跳转到系统页面
        // this.$router.push()   路由跳转
        let data = {
          username: this.userName,
          password: this.password
        };
        login(data).then(res => {
          if (res.status == 200) {
            this.$store.dispatch("setName", res.data.nickname);
            this.$store.dispatch("setToken", res.data.admin_token);
            localStorage["nickname"] = res.data.nickname;
            localStorage["admin_token"] = res.data.admin_token;
            this.$router.push({ path: "/index/user" });
          }else{
            this.$message({
            showClose: true,
            message: "登陆失败",
            type: "warning"
        });

          }
        });
      }
    }
  }
};
</script>
<style scoped>
@import url("../css/common.css");
#login {
  width: 50vw;
  height: 50vh;
  min-width: 350px;
  margin: 0 auto;
  background-color: rgb(251, 251, 251);
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
  margin-top: 15vh;
  border-radius: 10px;
  padding-top: 50px;
}
.loginTitle {
  font-size: 30px;
  color: #fe8314;
  font-weight: 600;
  text-align: center;
}
.formBox {
  width: 30%;
  height: 200px;
  margin: 0 auto;
}
</style>
