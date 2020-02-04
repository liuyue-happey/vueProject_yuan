
<template>
  <div id="user">
    <el-row>
      <el-col :span="10">
        <el-select v-model="value" size="mini" class="setWidth" placeholder="请选择组织">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-select v-model="value" size="mini" class="setWidth" placeholder="请选择等级">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="6" :push="8">
        <el-input placeholder="请输入内容" class="search" v-model="search" size="mini">
          <el-button slot="append" size="mini" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
    </el-row>
    <el-table
      :data="tableData"
      style="width: 100%;margin-top:10px"
      :default-sort="{prop: 'date', order: 'descending'}"
      max-height="300px"
      border
    >
      <el-table-column prop="date" label="头像" align="center"></el-table-column>
      <el-table-column prop="name" label="昵称" align="center"></el-table-column>
      <el-table-column prop="address" label="注册时间" align="center" width="130" sortable></el-table-column>
      <el-table-column prop="address" label="所有组织" align="center"></el-table-column>
      <el-table-column prop="address" label="电话" align="center"></el-table-column>
      <el-table-column prop="address" label="等级" align="center"></el-table-column>
      <el-table-column prop="address" label="积分值" sortable></el-table-column>
      <el-table-column prop="address" label="里程" align="center" sortable></el-table-column>
      <el-table-column prop="address" label="卡路里" align="center" sortable></el-table-column>
      <el-table-column prop="address" label="权限(老人活动)" align="center" width="150"></el-table-column>
      <el-table-column label="操作" width="80" align="center">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="removeItem(scope.row)">操作按钮</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-col class="mt20">
      <el-col :span="2">
        <el-button type="warning" size="mini">导出</el-button>
      </el-col>
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
      page: 0,
      options: [
        {
          value: "选项1",
          label: "公羊会"
        }
      ],
      value: "",
      search: "",
      tableData: [
        {
          date: "数据1",
          name: "数据1",
          address: "河南省郑州市"
        },
        {
          date: "数据2",
          name: "数据2",
          address: "浙江省杭州市"
        }
      ]
    };
  },
  methods: {
    formatter(row, column) {
      return row.address;
    },
    removeItem(data) {
      console.log(data);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script> 
<style lang="less" scoped>
@import url("../css/common.less");
#user {
  padding: 12px;
  background-color: rgb(240, 240, 240);
  height: 100%;
  box-sizing: border-box;
  .setWidth {
    .sw(150px);
  }
  .search {
    .sw(220px);
  }
}
</style>