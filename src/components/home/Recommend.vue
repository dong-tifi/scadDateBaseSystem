<template>
    <div>
   <!-- 搜索框 ajax 实时 -->
      <search></search>

        <el-card class="title">
            推荐零件
        </el-card>
        <el-card class="box-card">
  <div v-for="(item,index) in this.$store.state.recommendData" :key="item.id" class="text item" @click = "showDetails(index)"  >
    {{item.name }}
    <el-tag type="danger" size="medium" class="btn">{{item.model}}</el-tag>
  </div>

</el-card>
        
<!-- 隐藏内容 预览 -->
<el-dialog title="详情" :visible.sync="dialogTableVisible" class="dialog">
  <info :message="details" v-if="dialogTableVisible"></info>
</el-dialog>
    </div>
</template>

<script>
import info from '@/components/public/Info'
import search from '@/components/public/Search'

import{mapActions} from 'vuex'

export default {

    name: 'Recommend',

    data() {
        return {

            dialogTableVisible: false,
            details:''
            
        };
    },
    created(){
      this.asyRecommend()
    },

     components:{
      info  ,
      search
    },
    methods: {
      // 由vuex控制
          showDetails(index){
        this.dialogTableVisible = true,
        this.details = this.$store.state.recommendData[index]
      },
      ...mapActions(['asyRecommend']),
    },
    
};
</script>

<style lang="" scoped>
.title{
    margin-bottom: 10px;
    height: 40px;
    line-height: 40px;
    background: #F56C6C;
    border:0;
    color: #fff;
    text-indent: 15px;
    letter-spacing: 1px;
    font-size: 22px;
    /* font-weight: 500; */
    padding: 10px;
    -webkit-user-select: none;
}

.title:hover{
        background: #f15656;
}

.text {
    font-size: 18px;
    height: 25px;
    line-height: 25px;
    -webkit-user-select: none;
    text-indent: 14px;
    position: relative;
  }

.text:hover{
        background:#ccc
    }
  .item {
    color: rgb(27, 167, 231);
    font-weight: bolder;
    padding: 18px 10px;
    position: relative;
  }

.btn{
  padding:5px 15px 5px 3px;
  height: 40px;
  position: absolute;
  top: 10px;
  right: 22px;

}

</style>