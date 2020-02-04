<template>
  <div id="num">
    <el-tabs v-model="activeName" size="mini" type="border-card" @tab-click="handleClick">
      <el-tab-pane label="阳光积分" name="first"><sunshineNum></sunshineNum></el-tab-pane>
      <el-tab-pane label="志愿者积分" name="second">志愿者积分</el-tab-pane>
      <el-tab-pane label="积分等级" name="third">积分等级</el-tab-pane>
      <el-tab-pane label="发布奖励积分" name="fourth">发布奖励积分</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  components:{
      sunshineNum:require('../components/sunshineNum').default,
  }
};
</script>
<style lang="less" scoped>
#num {
  padding: 20px;
}
</style>