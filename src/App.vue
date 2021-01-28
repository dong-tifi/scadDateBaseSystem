<template>
  <div id="app">
    <!-- 顶部栏 -->
    <navmenu></navmenu>
    <!-- 内容区域 -->
    <div class="content">
      
      <div class="content-view">
        <router-view></router-view>
        
      </div>
      <!-- 侧边栏 -->
      <div class="side-bar">
       
       <recommend></recommend>

      </div>
    </div>

    
  </div>
</template>

<script>
import navmenu from './components/home/NavMenu'

import recommend from './components/home/Recommend'


export default {
  name: "App",
  components:{navmenu,recommend}
};
</script>
<style>
body{
  background: url(./assets/bg.jpg);
}
  #app{
    width: 1400px;
    height: 800px;
    margin: 0 auto;
  }
  .content{
    width: 1400px;
    height: 710px;
    margin: 0 auto;
    
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .content-view{
    height: 700px;
    width: 1090px;
    background: #fff;
    border-radius: 5px;
  }
  .side-bar{
    height: 700px;
    width: 300px;
    /* background: #fff; */

  }

/* 控制 tabs 中的内容 */

    /* 控制tabs 中标题字体大小 */
     .el-tabs__item{
       font-size: 18px;
       
   }
   /* tabs 选中 */
   .el-tabs__nav .is-active{
 color:rgb(84,92,100);

}

/* 控制 card 中的 */
.el-card__body{
    padding: 0;
}


/* 顶部菜单栏底部border */
.el-menu.el-menu--horizontal{
  border:0px
}

/* 控制dialog 中心弹出框的大小 */
  .el-dialog{
    width: 840px;
    height: 560px;
  }
  .el-dialog__body{
    padding-top: 0px;
  }
</style>

