<template>
  <el-main ref="main">
    <el-form ref="form" :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="姓名">
        <el-input v-model="formInline.name" placeholder="姓名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click.stop="onSubmit">查询</el-button>
        <el-button type="primary" @click.stop="onEdit">新增</el-button>
      </el-form-item>
    </el-form>
    <mana-table :style="{height:tableHeight}" :listObjs="listObjs" :loading="loading" />
    <mane-dialog
      v-if="dialogFormVisible"
      :editForm="editForm"
      :dialogFormVisible="dialogFormVisible"
      @isClose="isClose"
    ></mane-dialog>
  </el-main>
</template>

<script type="text/javascript">
import Table from "./Table";
import Dialog from "./dialog";
import { mapState } from "vuex";
import { getLists, searchLists, addLists } from "../api/api";
export default {
  name: "Manage",
  data() {
    return {
      activeIndex2: "1",
      tableHeight: "",
      pageIndex: 0,
      pageSize: 9,
      loading: false,
      editForm: {
        id: "",
        name: "",
        date: "",
        address: "",
      },
      dialogFormVisible: false,
      formInline: {
        name: "",
      },
    };
  },
  computed: {
    ...mapState(["listObjs"]),
  },
  mounted() {
    // 动态设置高度
    this.setHeight();
    this.getListsTable(this.pageIndex, this.pageSize);
  },
  components: {
    "mana-table": Table,
    "mane-dialog": Dialog,
  },
  methods: {
    onEdit() {
      this.dialogFormVisible = !this.dialogFormVisible;
    },
    isClose(ev) {
      const data = ev;
      if (data.num === 0) {
        this.dialogFormVisible = false;
        return;
      } else {
        this.$confirm("确认提交吗？", "提示", {}).then(() => {
          let para = Object.assign({}, data);
          addLists(para).then((res) => {
            this.$message({
              message: res.message,
              type: "success",
            });
            this.dialogFormVisible = false;
            this.getListsTable(this.listObjs.pageIndex, this.listObjs.pageSize);
          });
        });
      }
    },
    setHeight() {
      const mainHeight = this.$refs.main.$el.clientHeight;
      const formHeight = this.$refs.form.$el.clientHeight;
      console.log(mainHeight, formHeight);
      this.tableHeight = mainHeight - formHeight - 100 + "px";
    },
    onSubmit() {
      const name = this.formInline.name.replace(/ *[\r|\n] */gm, "");
      if (!name) {
        this.$message({
          message: "请输入人员名称",
          type: "success",
        });
        return;
      }
      const params = {
        name: this.formInline.name,
      };
      searchLists(params).then((res) => {
        if (res.code === "2") {
          // 删除成功
          this.getListsTable(this.listObjs.pageIndex, this.listObjs.pageSize);
        }
      });
    },
    getListsTable(pageIndex, pageSize) {
      this.$store.dispatch("getLists", {
        pageIndex: pageIndex,
        pageSize: pageSize,
      });
    },
  },
};
</script>

<style lang="less" scoped>
.demo-form-inline {
  text-align: left;
}
</style>

