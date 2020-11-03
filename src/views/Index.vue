<template>
  <div class="h-100 w-100">
    <header class="border-red h-7 w-100">
      <nav-bar></nav-bar>
    </header>
    <section class="border-blue h-53 w-100 d-flex">
      <div class="border-green h-100 w-60 d-flex">
        <div
          class="border-green h-100 w-20 d-flex flex-column justify-content-between"
        >
          <div class="border-blue h-30">
            <gauge-a></gauge-a>
          </div>
          <div class="border-blue h-30">
            <gauge-b></gauge-b>
          </div>
          <div class="border-blue h-30">
            <gauge-c></gauge-c>
          </div>
        </div>
        <div class="border-yellow h-100 w-80">
          <china-map></china-map>
        </div>
      </div>
      <div class="border-red h-100 w-40">
        <province-map></province-map>
      </div>
    </section>
    <section class="border-blue h-40 w-100 d-flex">
      <div class="border-blue w-30">
        <line-chart></line-chart>
      </div>
      <div class="border-blue w-30">
        <bar-chart></bar-chart>
      </div>
      <div class="border-blue w-40">
        <carousel></carousel>
      </div>
    </section>
  </div>
</template>

<script>
import NavBar from "@/components/navBar";
import GaugeA from "@/components/gaugeA";
import GaugeB from "@/components/gaugeB";
import GaugeC from "@/components/gaugeC";
import ChinaMap from "@/components/chinaMap";
import ProvinceMap from "@/components/provinceMap";
import LineChart from "@/components/lineChart";
import BarChart from "@/components/barChart";
import Carousel from "@/components/Carousel";
export default {
  components: {
    NavBar,
    GaugeA,
    GaugeB,
    GaugeC,
    ChinaMap,
    ProvinceMap,
    LineChart,
    BarChart,
    Carousel,
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped></style>
