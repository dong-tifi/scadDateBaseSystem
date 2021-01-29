<template>
<div id="table">
<el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="名称"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.name }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="型号"
      width="180">
      <template slot-scope="scope">

          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.model }}</el-tag>
          </div>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="showDetails(scope.$index)">查看</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

  <!-- 隐藏内容 预览 -->
<el-dialog title="详情" :visible.sync="dialogTableVisible" class="dialog">
  <info :message="details"></info>
</el-dialog>
</div>
  
</template>

<script>
import info from '@/components/public/Info'
import QS from 'qs'

import{mapActions} from 'vuex'

  export default {
    data() {
      return {
        tableData: [],
        dialogTableVisible: false,
        details:''
      }
    },
    created(){
      this.getTableData()
    },
    components:{
      info  
    },
    props:['num'],
    methods: {
      showDetails(index){
        this.dialogTableVisible = true,
        this.details = this.tableData[index]
      },

      handleDelete(index, row) {
        // index 位置，row 此行的数据
        let message = {
          _id:row._id,
          model:row.model
        }     
        this.delete(message)

      },
      async getTableData(){
       let {data}=  await this.$http.get(`${this.$store.state.localhost}/get?get=`+this.num)
        this.tableData = data
       },

      async delete(message) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // 删除内容
          this.deleteData(message)
           
        }).catch((e) => {
          this.$message({
            type: 'info',
            message: e
          });          
        });
      },
      async deleteData(message){
          let{data} = await this.$http.post(`${this.$store.state.localhost}/delete`,QS.stringify(message))
           this.tableData = data
          // 更新数据
          this.asyRecommend()
           this.$message({
            type: 'success',
            message: '删除成功!'
          });
      },
      ...mapActions(['asyRecommend']),

    },
    watch:{
      num(val,old){
        this.getTableData()
      }
    }
  }
</script>

<style lang="" scoped>
  #table{
  
    overflow: auto;
    height: 545px;
  }

</style>