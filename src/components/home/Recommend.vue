<template>
    <div>
   <!-- 搜索框 ajax 实时 -->
      <search></search>

        <el-card class="title">
            推荐零件
        </el-card>
        <el-card class="box-card">
  <!-- <router-link tag="div" v-for="item in recommends" :key="item.id" class="text item" @click = "go" to="/" >

    {{item.name }}
    <span>型号：{{item.model}}</span>
  </router-link> -->
  <div v-for="(item,index) in recommends" :key="item.id" class="text item" @click = "showDetails(index)"  >
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

export default {
    name: 'Recommend',

    data() {
        return {

         dialogTableVisible: false,
            recommends:[],
            details:''
            
        };
    },
    created(){
      this.getRecommends()
    },
     components:{
      info  ,
      search
    },
    methods: {
      
        async getRecommends(){
            let {data} = await this.$http.get(`${this.$store.state.localhost}/get?get=recommend`)
            this.recommends = data
        },
          showDetails(index){
        this.dialogTableVisible = true,
        this.details = this.recommends[index]
      },
    },

        // 路由跳转， 取消
        // go(data){
        //   this.$router.push({
        //     name:'info',
        //     params:data
        //   })
       
        // }
        // http(){
        //   console.log(this.$http.get);
        // }
    
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
    font-size: 22px;
    height: 25px;
    line-height: 25px;
    -webkit-user-select: none;
    text-indent: 14px;
    
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