<template>
<div>
 <el-tabs v-model="activeName" type="card" @tab-click="click">
       <el-tab-pane label="数据视图" name="second" >
        <!-- echarts图表 -->
        <echarts v-if="refresh"></echarts>
    </el-tab-pane>
    <el-tab-pane router=true label="数据操作" name="first" >
        
<!-- 代码存写，数据库预览， -->
    <workview></workview>
    </el-tab-pane>


  </el-tabs>

</div>
 
  


</template>
<script>
    import workview from './WorkView'
    import echarts from './Echarts'



  export default {
    data() {
      return {
        refresh:true,
        activeName: 'second'
      };
    },
    components:{echarts,workview},
    methods: {
      // 重绘echarts
      click(tab,event) {
        if(tab.index==1){
          this.refresh = false
        }else{
          this.refresh = true
        }

        // console.log('click');
      }
    }
  };
</script>

<style lang="" scoped>
  
</style>