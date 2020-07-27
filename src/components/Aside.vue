<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu
        class="el-menu-vertical-demo"
        :style="{backgroundColor:bg}"
        :textColor="textColor"
        router
        :collapse="isCollapse"
        :default-active="$route.path"
      >
        <el-menu-item index="/manage">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </el-menu-item>
        <el-menu-item index="/echarts">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="/form">
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="/form">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script type="text/javascript">
export default {
  name: "app",
  data() {
    return {
      isCollapse: false,
      bg:'',
      textColor:'#303133'
    };
  },
  mounted() {
    this.$bus.$on("collapse", (isCollapse) => {
      this.isCollapse = isCollapse;
    });
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
  methods: {},
};
</script>

<style lang="less" scoped>
.tac,
.tac > .el-col {
  width: 100%;
  height: 100%;
}
.el-menu {
  height: 100%;
}
</style>
