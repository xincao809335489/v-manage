<template>
  <el-dialog title="编辑信息" :visible.sync="dialogFormVisible" :style="dialogWeith">
    <el-form :model="editForm" label-width="50px">
      <el-form-item label="姓名">
        <el-input v-model="editForm.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="日期">
        <el-col :span="24">
          <el-date-picker type="date" placeholder="选择日期" v-model="editForm.date" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="地址" prop="region">
        <el-select v-model="editForm.address" placeholder="请选择居住地址" :style="selectWidth">
          <el-option label="河北省石家庄" value="河北省石家庄"></el-option>
          <el-option label="陕西西安" value="陕西西安"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click.native="handleDialog(0)">取 消</el-button>
      <el-button type="primary" @click.native="handleDialog(1)">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script type="text/javascript">
import util from '../common/js/util'
export default {
  props: ["dialogFormVisible","editForm","updateForm"],
  data() {
    return {
      dialogWeith:'',
      selectWidth:'',
      addLoading:true
    };
  },
  mounted(){
      this.dialogWeith = {
          left:'15%',
          right:'15%'
      },
      this.selectWidth = {
          width:'100%'
      }
  },
  methods: {
    handleDialog(num) {
      this.editForm.num = num;
      this.editForm.date = (!this.editForm.date || this.editForm.date == '') ? '' : util.formatDate.format(new Date(this.editForm.date), 'yyyy-MM-dd');
      this.$emit("isClose", this.editForm);
    },
  },
};
</script>

<style lang="less" scoped></style>
