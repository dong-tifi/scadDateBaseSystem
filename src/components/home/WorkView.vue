<template>
    <div id="workview" >
    

  <el-col :span="5" class="nav" >
    <el-menu 
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      
      active-text-color="#ffd04b" >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>零件库</span>
        </template>

        <el-menu-item-group>
          
          <el-menu-item index="1-1">
              <router-link tag="div" to="/home/table/basic" slot="title">基础零件</router-link >
          </el-menu-item>
          <el-menu-item index="1-2">
              <router-link tag="div" to="/home/table/merge" slot="title">合成零件</router-link >
          </el-menu-item>
        </el-menu-item-group>
       
       
      </el-submenu>
      <el-menu-item index="2">
        
        <router-link tag="div" to="/home/add" slot="title">
        <i class="el-icon-menu icon-add"></i>
        添加零件</router-link >
      </el-menu-item>
     
    </el-menu>
  </el-col>

<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>详细数据</span>
    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
    
  </div>
<!-- 二级路由子路由 -->
  <router-view></router-view>
</el-card>

    </div>
</template>

<script>
export default {

    data() {
        return {
            
        };
    },
    mounted() {
        
    },
  
    methods: {
         handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      }
    },
};
</script>

<style lang="" scoped>
#workview{
    display: flex;
    justify-content: space-between;
}
.nav{
    height: 600px;
    
    box-sizing:border-box;
    padding-right: 1px;
    background: rgb(84, 92, 100);
}
.nav .el-menu{
    border-right:0px
}
.box-card{
    width: 840px;
    height: 600px;
    margin-right: 10px;
}
.icon-add{
  vertical-align: -2px;
}
</style>