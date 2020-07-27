<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="lists"
      tooltip-effect="dark"
      style="width: 100%"
      v-loading="loadingTable"
      class="table"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column sortable label="日期" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click.stop="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click.stop="handleDelete(scope.$index, scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--工具条-->
    <el-col :span="24" class="toolbar">
      <el-button
        type="danger"
        style="float:left;"
        @click="batchRemove"
        :disabled="this.multipleSelection.length===0"
      >批量删除</el-button>
      <mana-pagination ref="pagination" :total="total" style="float:right;" />
    </el-col>
    <mane-dialog
      v-if="dialogFormVisible"
      :editForm="editForm"
      :dialogFormVisible="dialogFormVisible"
      @isClose="isClose"
    ></mane-dialog>
  </div>
</template>

<script type="text/javascript">
import Pagination from "./Pagination";
import Dialog from "./dialog";
import { removeLists, editLists, batchRemoveLists } from "../api/api";
export default {
  props: ["listObjs", "loading"],
  data() {
    return {
      multipleSelection: [],
      lists: [],
      editForm: {},
      total: 0,
      id: 0,
      loadingTable: false,
      dialogFormVisible: false,
    };
  },
  components: {
    "mana-pagination": Pagination,
    "mane-dialog": Dialog,
  },
  mounted() {},
  watch: {
    listObjs(newVal) {
      this.loadingTable = false;
      console.log(newVal);
      const { rows, total } = newVal;
      this.lists = rows;
      this.total = total;
    },
  },
  methods: {
    getLists() {
      this.$store.dispatch("getLists", {
        pageIndex: this.listObjs.pageIndex,
        pageSize: this.listObjs.pageSize,
      });
    },
    batchRemove() {
      const ids = this.multipleSelection.map((item) => item.id).toString();
      this.$confirm("确认删除选中记录吗？", "提示", {
        type: "warning",
      })
        .then(() => {
          this.loadingTable = true;
          //NProgress.start();
          let para = { ids: ids };
          batchRemoveLists(para).then((res) => {
            this.loadingTable = false;
            //NProgress.done();
            this.$message({
              message: res.message,
              type: "success",
            });
            this.getLists();
          });
        })
        .catch(() => {});
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(this.multipleSelection);
    },
    handleEdit(index, row) {
      this.dialogFormVisible = true;
      this.editForm = Object.assign({}, row);
      console.log(index, row);
    },
    isClose(ev) {
      const data = ev;
      if (data.num === 0) {
        this.dialogFormVisible = false;
        return;
      } else {
        this.$confirm("确认提交吗？", "提示", {}).then(() => {
          this.loadingTable = true;
          editLists(data).then((res) => {
            this.loadingTable = false;
            //NProgress.done();
            this.$message({
              message: res.message,
              type: "success",
            });
            this.dialogFormVisible = false;
            this.getLists();
          });
        });
      }
    },
    handleDelete(index, row) {
      this.$confirm("确认删除该记录吗?", "提示", {
        type: "warning",
      })
        .then(() => {
          this.loadingTable = true;
          //NProgress.start();
          let para = { id: row.id };
          removeLists(para).then((res) => {
            this.loadingTable = false;
            //NProgress.done();
            this.$message({
              message: res.message,
              type: "success",
            });
            // 删除成功
            this.getLists();
          });
        })
        .catch(() => {});
    },
  },
};
</script>

<style lang="less" scoped>
.table {
  margin-bottom: 10px;
  box-sizing: border-box;
}
</style>