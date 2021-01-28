<template>
    <div id="info">
        <el-card class="box-card">

  <div class="content">
    <!-- 左侧 -->
    <el-card class="left" >
    <!-- <img :src="url" alt="" class="img"> -->


      <img :src="imgurl|| 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'" class="image">
      <div style="padding: 14px;">
         <el-alert :title="name" type="warning" :closable="false">
{{model}}
         </el-alert>

        <!-- <span>{{$route.params.name}}</span> -->
        <div class="bottom clearfix">
          <el-divider></el-divider>
           <div class="download">
        <el-button size="large" type="primary" @click = 'copyCode'>
          复制代码
          <input type="text" :value="code" class="copy-mini" ref="copyinput" ></el-button>
        <el-button size="large" type="danger" @click = download(codeurl)>下载文件</el-button>

      </div>
        </div>
      </div>
    </el-card>


    <!-- 右侧 -->
    <el-card class="right">
      <div class="code-content">
        <textarea name="code" class="c++" id="code" cols="30" rows="10" ref="textarea" >
         
        </textarea>
      
      </div>
     
      
    </el-card>
    
    </div>

</el-card>
    </div>
</template>

<script>

import '@/assets/codePre/SyntaxHighlighter.css'
import dp from '@/assets/codePre/shCore.js'



export default {
    
    data() {
        return {
            // id:this.$route.params._id,
            // // 拼接服务器地址
            // imgurl:this.$route.params.imgurl?'http://localhost:3300/'+this.$route.params.imgurl:'',
            // codeurl:this.$route.params.codeurl?'http://localhost:3300/'+this.$route.params.codeurl:'',

            // code:this.$route.params.code,
            // name:this.$route.params.name,

            id:this.message._id,
            // 拼接服务器地址
            imgurl:this.message.imgurl?`${this.$store.state.localhost}/`+this.message.imgurl:'',
            codeurl:this.message.codeurl?`${this.$store.state.localhost}/`+this.message.codeurl:'',

            code:this.message.code,
            name:this.message.name,
            model:this.message.model
        };
    },
    mounted(){
       this.codePre()
    },
    props:['message'],
    methods: {
        routes(){
          console.log('params',this.$route.params);
        },
        codePre(){
          this.$refs.textarea.innerHTML = this.code
          dp.SyntaxHighlighter.HighlightAll('code', true,false);
        },
        copyCode(){
        
          this.$refs.copyinput.select()
          document.execCommand('copy')
          
        this.$notify({
          title: '成功',
          message: '复制成功',
          type: 'success'
        })      
        }  ,
        download(url){
          // window.location.replace('url')  不可后退
          window.location.href = url
               this.$notify({
          title: '下载',
          message: '正在下载',
          type: 'success'
        })           
        }
    },
    watch:{
      
    }
};
</script>

<style  scoped>
#info{
    width: 800px;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;

}
/* copy */
.copy-mini{
  width: 1px;
  height: 1px;
  border: 2px solid rgb(247, 247, 247);
  border-radius: 50%;
  outline-color: rgb(247, 56, 22);

}

/* 卡片css */
 .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 800px;
    height: 460px;
    margin: 50px auto;
    /* background-color: rgba(196, 56, 56, 0.034); */
    box-shadow: none;
  }
  .content{
    width: 800px;
    height: 440px;
    /* background: #ccc; */
     display: flex; 
    justify-content:space-around 
  }
  .left,
  .right{
    /* background: #ccc; */
    width: 260px;
    height: 417px;
  }



  .right{
    width: 480px;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
  .img{
    width: 200px;
    height: 200px;
    background-color: #ccc;
  }

  .code-content{
    height: 435px;
    overflow: auto;
    /* display: flex;
    align-items: center; */
    margin-top: -18px;
    /* background:#ccc */
  }
  .download{
    /* background:#ccc; */
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -20px;
  }
  .dp-highlighter{

    margin-bottom: 0px!important;

  }
</style>