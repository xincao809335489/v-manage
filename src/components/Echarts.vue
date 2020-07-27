<template>
  <div class="echarts">
    <el-row style="width: 100%">
      <el-col :span="24">
        <linegraph class="lineGraph" :id="'lineGraph'" :data="option1" style="width:100%;height:350px;"></linegraph>
      </el-col>
      <el-col :span="24">
        <linegraph  class="lineGraph" :id="'barGraph'" :data="option2" style="width:100%;height:350px;"></linegraph>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/javascript">
import linegraph from "./echarts/linegraph.vue";
export default {
  name: "Manage",
  data() {
    return {
      option1: {},
      option2: {},
    };
  },
  computed: {},
  mounted() {
    this.getLineEcharts();
    this.getBarEcharts();
  },
  components: {
    linegraph,
  },
  methods: {
    getLineEcharts() {
      this.option1 = {
        title: {
          text: "分所销售水量占比",
          top: "5%",
          left: "center",
          textStyle: {
            color: "#FFF",
            align: "center",
          },
        },
        backgroundColor: "#0f375f",
        grid: {
          left: "9%",
          right: "10%",
          top: "20%",
          bottom: "15%",
          containLabel: true,
        },
        tooltip: {
          show: true,
          trigger: "item",
        },
        legend: {
          show: true,
          x: "center",
          top: "12%",
          y: "35",
          icon: "stack",
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            color: "#1bb4f6",
          },
          data: ["大户", "市中", "历下", "天桥", "槐荫", "历城"],
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisLabel: {
              color: "#30eee9",
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#397cbc",
              },
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: "#195384",
              },
            },
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月",
            ],
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "立方米",
            min: 0,
            max: 1000,
            axisLabel: {
              formatter: "{value}",
              textStyle: {
                color: "#2ad1d2",
              },
            },
            axisLine: {
              lineStyle: {
                color: "#27b4c2",
              },
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "#11366e",
              },
            },
          },
          {
            type: "value",
            name: "占比",
            min: 0,
            max: 1000,
            axisLabel: {
              formatter: "{value} %",
              textStyle: {
                color: "#186afe",
              },
            },
            axisLine: {
              lineStyle: {
                color: "#186afe",
              },
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "#11366e",
              },
            },
          },
        ],
        series: [
          {
            name: "大户",
            type: "line",
            stack: "总量",
            symbol: "circle",
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: "#0092f6",
                lineStyle: {
                  color: "#0092f6",
                  width: 1,
                },
                areaStyle: {
                  //color: '#94C9EC'
                  color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: "rgba(7,44,90,0.3)",
                    },
                    {
                      offset: 1,
                      color: "rgba(0,146,246,0.9)",
                    },
                  ]),
                },
              },
            },
            markPoint: {
              itemStyle: {
                normal: {
                  color: "red",
                },
              },
            },
            data: [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 260, 280],
          },
          {
            name: "市中",
            type: "line",
            stack: "总量",
            symbol: "circle",
            symbolSize: 8,

            itemStyle: {
              normal: {
                color: "#00d4c7",
                lineStyle: {
                  color: "#00d4c7",
                  width: 1,
                },
                areaStyle: {
                  //color: '#94C9EC'
                  color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: "rgba(7,44,90,0.3)",
                    },
                    {
                      offset: 1,
                      color: "rgba(0,212,199,0.9)",
                    },
                  ]),
                },
              },
            },
            data: [220, 182, 191, 210, 230, 270, 270, 201, 154, 140, 240, 250],
          },
          {
            name: "历下",
            type: "line",
            stack: "总量",
            symbol: "circle",
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: "#aecb56",
                lineStyle: {
                  color: "#aecb56",
                  width: 1,
                },
                areaStyle: {
                  //color: '#94C9EC'
                  color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: "rgba(7,44,90,0.3)",
                    },
                    {
                      offset: 1,
                      color: "rgba(114,144,89,0.9)",
                    },
                  ]),
                },
              },
            },
            data: [150, 232, 201, 154, 190, 180, 210, 150, 182, 201, 154, 190],
          },
          {
            name: "天桥",
            type: "line",
            stack: "总量",
            symbol: "circle",
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: "#3A44FB",
                lineStyle: {
                  color: "#3A44FB",
                  width: 1,
                },
                areaStyle: {
                  //color: '#94C9EC'
                  color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: "rgba(7,46,101,0.3)",
                    },
                    {
                      offset: 1,
                      color: "rgba(0,166,246,0.9)",
                    },
                  ]),
                },
              },
            },
            data: [150, 232, 201, 154, 190, 180, 210, 150, 182, 201, 154, 190],
          },
          {
            name: "槐荫",
            type: "line",
            stack: "总量",
            symbol: "circle",
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: "#6FE81A",
                lineStyle: {
                  color: "#6FE81A",
                  width: 1,
                },
                areaStyle: {
                  //color: '#94C9EC'
                  color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: "rgba(7,44,90,0.3)",
                    },
                    {
                      offset: 1,
                      color: "rgba(0,212,199,0.9)",
                    },
                  ]),
                },
              },
            },
            data: [150, 232, 201, 154, 190, 180, 210, 150, 182, 201, 154, 190],
          },
          {
            name: "历城",
            type: "line",
            stack: "总量",
            symbol: "circle",
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: "#aecb56",
                lineStyle: {
                  color: "#aecb56",
                  width: 1,
                },
                areaStyle: {
                  //color: '#94C9EC'
                  color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: "rgba(7,44,90,0.3)",
                    },
                    {
                      offset: 1,
                      color: "rgba(0,212,199,0.9)",
                    },
                  ]),
                },
              },
            },
            data: [200, 232, 201, 200, 190, 190, 210, 190, 182, 201, 154, 190],
          },
        ],
      };
    },
    getBarEcharts() {
      this.option2 = {
        title: {
          text: "2019年销售水量和主营业务收入对比",
          textStyle: {
            align: "center",
            color: "#fff",
            fontSize: 20,
          },
          top: "3%",
          left: "10%",
        },
        backgroundColor: "#0f375f",
        grid: {
          top: "25%",
          bottom: "10%", //也可设置left和right设置距离来控制图表的大小
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            label: {
              show: true,
            },
          },
        },
        legend: {
          data: ["销售水量", "主营业务"],
          top: "15%",
          textStyle: {
            color: "#ffffff",
          },
        },
        xAxis: {
          data: [
            "当年完成水量",
            "去年同期水量",
            "滚动目标值水量",
            "全年目标值水量",
            "当年完成金额",
            "去年同期金额",
            "滚动目标金额",
            "全年目标值",
          ],
          axisLine: {
            show: true, //隐藏X轴轴线
            lineStyle: {
              color: "#01FCE3",
            },
          },
          axisTick: {
            show: true, //隐藏X轴刻度
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#ebf8ac", //X轴文字颜色
            },
          },
        },
        yAxis: [
          {
            type: "value",
            name: "亿元",
            nameTextStyle: {
              color: "#ebf8ac",
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: true,
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#FFFFFF",
              },
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: "#ebf8ac",
              },
            },
          },
          {
            type: "value",
            name: "同比",
            nameTextStyle: {
              color: "#ebf8ac",
            },
            position: "right",
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisLabel: {
              show: true,
              formatter: "{value} %", //右侧Y轴文字显示
              textStyle: {
                color: "#ebf8ac",
              },
            },
          },
          {
            type: "value",
            gridIndex: 0,
            min: 50,
            max: 100,
            splitNumber: 8,
            splitLine: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            splitArea: {
              show: true,
              areaStyle: {
                color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.05)"],
              },
            },
          },
        ],
        series: [
          {
            name: "销售水量",
            type: "line",
            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            smooth: true, //平滑曲线显示
            showAllSymbol: true, //显示所有图形。
            symbol: "circle", //标记的图形为实心圆
            symbolSize: 10, //标记的大小
            itemStyle: {
              //折线拐点标志的样式
              color: "#058cff",
            },
            lineStyle: {
              color: "#058cff",
            },
            areaStyle: {
              color: "rgba(5,140,255, 0.2)",
            },
            data: [4.2, 3.8, 4.8, 3.5, 2.9, 2.8, 3, 5],
          },
          {
            name: "主营业务",
            type: "bar",
            barWidth: 15,
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#00FFE3",
                  },
                  {
                    offset: 1,
                    color: "#4693EC",
                  },
                ]),
              },
            },
            data: [4.2, 3.8, 4.8, 3.5, 2.9, 2.8, 3, 5],
          },
        ],
      };
    },
  },
};
</script>

<style lang="less" scoped>
.echarts {
  width: 100%;
  height: 100%;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.lineGraph div{
  width:100%;
}
</style>

