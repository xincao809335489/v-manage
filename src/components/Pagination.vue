<template>
  <el-pagination
    background
    @current-change="handleCurrentChange"
    layout="prev, pager, next"
    :page-size.sync="pageSize"
    :total="total"
  ></el-pagination>
</template>

<script type="text/javascript">
import { getLists } from "../api/api";
export default {
  props: ["total"],
  data() {
    return {
      pageSize: 9,
    };
  },
  methods: {
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      const params = {
        pageIndex: val - 1,
        pageSize: this.pageSize,
      };
      getLists(params).then((res) => {
        console.log(res);
        if (res.code === "0") {
          this.$store.dispatch("changeList", {
            data:res.data
          });
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
</style>
