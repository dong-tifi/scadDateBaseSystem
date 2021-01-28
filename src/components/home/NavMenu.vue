<template>
    <div id="navmenu">
        
<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#555"
  text-color="#fff"
  active-text-color="#ffd04b"
  >
  <el-menu-item index="1" class="title">SCAD - DBS</el-menu-item>
    




</el-menu>

    </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        // console.log(key, keyPath);
      }
    }
  }
</script>
<style lang="" scoped>

    .title{
      font-size: 30px;
    }
</style>