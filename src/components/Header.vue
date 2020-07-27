<template>
  <el-menu
    class="el-menu-demo"
    :style="{backgroundColor:bg}"
    mode="horizontal"
    @select="handleSelect"
    :textColor="textColor"
    active-text-color="#ffd04b"
    :collapse="isCollapse"
    ref="menu"
    router
    :default-active="$route.path"
  >
    <el-menu-item :default-active="$route.path" @click="collapse()" class="collapse">
      <i class="fa fa-bars" aria-hidden="true"></i>
    </el-menu-item>
    <el-menu-item index="/manage">导航一</el-menu-item>
    <el-menu-item index="/echarts">导航二</el-menu-item>
    <el-menu-item index="/form">导航三</el-menu-item>
    <el-menu-item index="/form">导航四</el-menu-item>
  </el-menu>
</template>

<script type="text/javascript">
export default {
  name: "app",
  data() {
    return {
      isCollapse: false,
      bg: "",
      textColor: "#303133",
    };
  },
  watch: {
    $route: {
      handler(val, oldval) {
        console.log(val); //新路由信息
        console.log(oldval); //老路由信息
        if (val.path.indexOf("echarts") > -1) {
          this.bg = "#0f375f";
          this.textColor = "#fff";
        } else {
          this.bg = "#F2F2F2";
          this.textColor = "#303133";
        }
      },
    },
  },
  methods: {
    collapse() {
      this.isCollapse = !this.isCollapse;
      this.$bus.$emit("collapse",this.isCollapse);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="less" scoped>
.el-menu {
  background-color: #f2f2f2;
  width: 100%;
  height: 100%;
}
</style>
