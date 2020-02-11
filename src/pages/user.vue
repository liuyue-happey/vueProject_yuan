
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
      max-height="400px"
      border
    >
      <el-table-column prop="date" label="头像" align="center">
        <template slot-scope="scope">
          <img :src="scope.row.headimg" style="width:20px;height:20px" alt />
        </template>
      </el-table-column>
      <el-table-column prop="nickname" label="昵称" align="center"></el-table-column>
      <el-table-column prop="created" label="注册时间" align="center" width="130" sortable></el-table-column>
      <el-table-column prop="qrcode" label="所有组织" align="center"></el-table-column>
      <el-table-column prop="phone" label="电话" align="center"></el-table-column>
      <el-table-column prop="level" label="等级" align="center"></el-table-column>
      <el-table-column prop="mileage" label="积分值" sortable></el-table-column>
      <el-table-column prop="hours" label="里程" align="center" sortable></el-table-column>
      <el-table-column prop="sex" label="卡路里" align="center" sortable></el-table-column>
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
          :page-size="requestParams.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          :pager-count="5"
        ></el-pagination>
      </el-col>
    </el-col>
  </div>
</template>
<script>
import { user } from "../http/index";
export default {
  data() {
    return {
      requestParams: {
        organization: "",
        level: "",
        search: "",
        page: 1,
        pageSize: 10
      },
      page: 0,
      options: [
        {
          value: "选项1",
          label: "公羊会"
        }
      ],
      value: "",
      search: "",
      tableData: [],
      total: 0
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
      this.requestParams.pageSize = val;
      this.requestParams.page = 1;
      this.getPage();
      console.log(this.requestParams);
      return;
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.requestParams.page = val;
      this.getPage();
      console.log(this.requestParams);
      return;
    },
    getPage() {
      user(this.requestParams).then(res => {
        console.log(res);
        this.tableData = res.data.data;
        this.total = res.data.count;
      });
    }
  },
  mounted() {
    // search:搜索条件   组织  等级
    // page:'第几页'
    // pageSize:'每页数量'
    this.getPage();
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