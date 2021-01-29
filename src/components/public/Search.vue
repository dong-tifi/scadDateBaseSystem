<template>
    <div id="content">
        <el-card class="search">
        <el-input placeholder="请输入内容" v-model ='searchValue' class="input" clearable ref="input"   >
  </el-input>
    </el-card>
    <div class="related" v-show="visibility">
        <ul>
            <li v-for='(item, index) in answer' :key="item.id" class="related-item" @click="getInfo(index)">
                <span>{{item.name}}</span>
                <el-tag size="medium" class="tag" >{{item.model}}</el-tag>
            </li>
         
        </ul>
    </div>

    <!-- 隐藏内容 预览 -->
<el-dialog title="详情" :visible.sync="dialogTableVisible" class="dialog">
  <info :message="details"></info>
</el-dialog>

    </div>
</template>


<script>

import info from '@/components/public/Info'

export default {
    data() {
        return {
            searchValue:'',
            visibility:false,
            answer:'',
            dialogTableVisible: false,
            details:''
        };
    },
    created(){
    },
    mounted() {
        // this.getFocus()
        
    },
    components:{
        info
    },
     watch:{
      searchValue(news,old){
          
          if(!news){
              this.answer = ''
              this.visibility = false
          }else{
              this.visibility = true
          this.search(news)

          }
      }},
    methods: {
        getInfo(index){
            // this.$refs.input.focus()获取焦点
            this.dialogTableVisible =  true,
            this.details = this.answer[index]

        },
        async search(text){
            let {data} = await this.$http.get(`${this.$store.state.localhost}/get?get=`+text)
            this.answer = data
        }
    },
};
</script>

<style  scoped>
.content{
    position: relative;
    
}
.search{
    height: 50px;
    line-height: 50px;
  padding: 8px;
    margin-bottom: 10px;
    /* background: rgb(0,180,223); */
    /* background: rgb(65,184,131); */
    background:#fff;

    border: 0px;
    
}
.input{
    padding:0;
    width: 284px;
    font-size: 16px;
}
.related{
    position: absolute;
    top: 132 px;
    width: 300px;
    background-color: #fff;
    border-radius: 5px;
    box-sizing: border-box;
    z-index: 100;
    border-radius: 5px;
    overflow: hidden;
    font-size: 16px;
    box-shadow: 0px 0px 5px black;
}
.related li{
    padding: 8px 24px ;
    background:#fff;
    height:43px;
    line-height:43px;
    -webkit-user-select: none;
    
}
.related li:hover{
    background:#ccc

}
.related-item{
    color: rgb(255, 115, 0);
    font-weight: bolder;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.related-item .tag{
    height: 38px;
    padding:0 15px;
    line-height: 38px;
    

}

</style>