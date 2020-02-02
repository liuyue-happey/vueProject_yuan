<template>
  <!-- 系统页面 -->
  <div id="index">
    <el-container>
      <el-header id="header" height="50px">
        <el-row>
          <el-col :span="20">
            <img src="../imgs/psb.jpg" class="log" alt />
            阳光好帮手
          </el-col>
          <el-col :span="4">
            <span>admin</span>
            <el-button size="mini">退出</el-button>
            <el-button size="mini">修改密码</el-button>
          </el-col>
        </el-row>
      </el-header>
      <el-container id="container">
        <el-aside width="200px">
          <el-row class="tac">
            <el-col :span="24">
              <el-menu
                :router="true"
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
              >
                <el-menu-item index="/user">
                  <i class="el-icon-location"></i>
                  用户管理
                </el-menu-item>
                <el-menu-item index="/organization">
                  <i class="el-icon-location"></i>组织管理
                </el-menu-item>
                <el-menu-item index="/active">
                  <i class="el-icon-location"></i>活动管理
                </el-menu-item>
                <el-menu-item index="/shop">
                  <i class="el-icon-location"></i>商品管理
                </el-menu-item>
                <el-menu-item index="/change">
                  <i class="el-icon-location"></i>兑换管理
                </el-menu-item>
                <el-menu-item index="/check">
                  <i class="el-icon-location"></i>审核管理
                </el-menu-item>
                <el-menu-item index="/num">
                  <i class="el-icon-location"></i>积分管理
                </el-menu-item>
                <el-menu-item index="/message">
                  <i class="el-icon-location"></i>留言反馈
                </el-menu-item>
                <el-menu-item index="/system">
                  <i class="el-icon-location"></i>系统设置
                </el-menu-item>
                <el-menu-item index="/order">
                  <i class="el-icon-location"></i>老人信息管理
                </el-menu-item>
                <el-menu-item index="/volunteer">
                  <i class="el-icon-location"></i>志愿者信息
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    };
  },
  mounted() {
    // container.hieght = 窗口的高度(innerHeight) -  header的高度;
    let header = document.getElementById("header");
    let container = document.getElementById("container");
    container.style.height = innerHeight - header.offsetHeight + "px";
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang="less" scoped>
/deep/.el-menu-item {
  height: 45px;
  line-height: 45px;
}
.el-header {
  background-color: rgb(255, 131, 20);
  line-height: 50px;
  color: #fff;
  .log {
    width: 35px;
    height: 35px;
    border-radius: 2px;
    margin-top: 7.5px;
    vertical-align: -12px;
    margin-right: 5px;
  }
}
</style>