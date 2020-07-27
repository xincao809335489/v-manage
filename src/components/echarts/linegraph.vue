<template>
  <div :id="id" :data="data"></div>
</template>

<script type="text/javascript">
export default {
  name: "app",
  props:['id','data'],
  data() {
    return {
        ChartLineGraph:null
    }
  },
  watch:{
      data:{
          handler(newVal,oldVal){
              this.drawLineGraph(this.id,newVal);
          },
          deep:true
      }
  },
  mounted(){
     this.drawLineGraph(this.id,this.data)
  },
  methods:{
     drawLineGraph(id,data){
         let _this = this;
         let chart = document.getElementById(id); // 获取dom元素
         this.ChartLineGraph = this.$echarts.init(chart); // 初始化echarts实例
         this.ChartLineGraph.setOption(data);
         window.addEventListener('resize',function(){
             _this.ChartLineGraph.resize();
         })
     } 
  },
  beforeDestroy(){
      if(this.ChartLineGraph){
          this.ChartLineGraph.clear();
      }
  }
}
</script>

<style lang="less" scoped>
</style>
