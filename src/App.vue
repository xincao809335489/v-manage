<template>
  <div id="app">
    <el-container>
      <el-header :style="{backgroundColor:bg}" :class="collapsed?'collapsed':'expanded'">
        <mana-header />
      </el-header>
      <el-container>
        <el-aside :class="collapsed?'menu-collapsed':'menu-expanded'">
          <mana-aside />
        </el-aside>
        <router-view />
      </el-container>
      <el-footer :style="{backgroundColor:bg,color:textColor}">管理系统，echarts多个图表封装</el-footer>
    </el-container>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import * as types from "./store/mutation-types";
import Header from "./components/Header";
import Aside from "./components/Aside";
export default {
  name: "App",
  data() {
    return {
      bg: "",
      textColor: "",
      collapsed: false,
    };
  },
  mounted() {
    this.$bus.$on("collapse", (isCollapse) => {
      console.log(isCollapse);
      this.collapsed = isCollapse;
    });
  },
  components: {
    "mana-header": Header,
    "mana-aside": Aside,
  },
  computed: {
  },
  methods: {},
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
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
}
/* 系统部分 */
.el-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.el-header,
.el-footer {
  background-color: #f2f2f2;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-header {
  padding: 0;
  padding-left: 200px;
}
.menu-collapsed {
  flex: 0 0 64px;
  overflow: hidden;
}
.menu-expanded {
  flex: 0 0 200px;
  overflow: hidden;
  /* width: 200px; */
}
.collapsed {
  padding-left: 64px;
}
.expanded {
  padding-left: 200px;
}
</style>
