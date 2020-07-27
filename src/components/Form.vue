<template>
  <div class="container">
    <el-form ref="form" :model="form" label-width="80px" class="form">
      <el-form-item label="活动名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="form.region" placeholder="请选择活动区域" class="fl">
          <el-option label="上海" value="上海"></el-option>
          <el-option label="北京" value="北京"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="即时配送">
        <el-switch v-model="form.delivery" class="fl"></el-switch>
      </el-form-item>
      <el-form-item label="活动性质">
        <el-checkbox-group v-model="form.type">
          <div class="checkbox">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
          </div>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源">
        <el-radio-group v-model="form.resource" class="fl">
          <div class="radio">
            <el-radio label="线上品牌商赞助"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
          </div>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button @click="onCancle">取消</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" style="width: 100%" v-if="tableData.length">
      <el-table-column label="活动名称" width="100">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="结束区域" width="100">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.region }}</span>
        </template>
      </el-table-column>
      <el-table-column label="起始日期" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.date1 }}</span>
        </template>
      </el-table-column>
      <el-table-column label="即时配送" width="100">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.delivery?'是':'否' }}</span>
        </template>
      </el-table-column>
       <el-table-column label="活动性质" width="480">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.type[0] }}</span>
          <span style="margin-left: 10px">{{ scope.row.type[1] }}</span>
        </template>
      </el-table-column>
      <el-table-column label="特殊资源" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.resource }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script type="text/javascript">
import util from '../common/js/util'
export default {
  name: "Manage",
  data() {
    return {
      tableData:[],
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  computed: {},
  mounted() {
    sessionStorage.setItem('form',JSON.stringify(this.form));
  },
  components: {},
  methods: {
    onCancle(){
      const data = JSON.parse(sessionStorage.getItem('form'));
      this.form = data;
      return;
    },
    onSubmit() {
      console.log(this.form.date1);
      this.form.date1 = (!this.form.date1 || this.form.date1 == '') ? '' : util.formatDate.format(new Date(this.form.date1), 'yyyy-MM-dd');
      this.tableData.push(this.form)
      const data = JSON.parse(sessionStorage.getItem('form'));
      this.form = data;
      // Object.assign(this.form,data);
    }
  },
};
</script>

<style lang="less" scoped>
.container{
  overflow:auto;
}
.form {
  padding: 20px;
  width: 60%;
  min-width: 1100px;
}
.fl {
  width: 100%;
}
.checkbox,
.radio {
  display: flex;
  justify-content: start;
  label {
    margin-right: 20px;
  }
}
.el-table .cell span{
  margin-left:0 !important;
}
</style>