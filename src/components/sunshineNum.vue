<template>
  <div id="sunshineNum">
    <el-form size="mini" ref="form" :model="form" label-width="80px">
      <el-form-item label="用户姓名">
        <el-input v-model="form.name" style="width:160px"></el-input>
      </el-form-item>
    </el-form>
    <el-table
      :data="tableData"
      style="width: 100%;margin-top:10px"
      :default-sort="{prop: 'date', order: 'descending'}"
      height="300px"
      max-height="300px"
      border
      size="mini"
    >
      <el-table-column prop="date" label="用户姓名" align="center"></el-table-column>
      <el-table-column prop="name" label="联系电话" align="center"></el-table-column>
      <el-table-column prop="address" label="所属街道" align="center" width="130"></el-table-column>
      <el-table-column prop="address" label="身份证号码" align="center"></el-table-column>
      <el-table-column prop="address" label="眼光积分" align="center"></el-table-column>
      <el-table-column label="操作" width="80" align="center">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="removeItem(scope.row)">操作按钮</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-col class="mt20">
      <el-col :span="13" :push="3">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="page"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          :pager-count="5"
        ></el-pagination>
      </el-col>
    </el-col>
  </div>
</template>
<script>
export default {
  data() {
    return {
        form:{
            name:''
        }
    };
  }
};
</script>
<style lang="less" scoped>
@import url('../css/common.less');
</style>