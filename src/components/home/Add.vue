<template>
    <div id="add">

 <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="零件类型" prop="model">
    <el-select v-model="ruleForm.model" placeholder="请选择零件类型">
      <el-option label="基础零件" value="basic"></el-option>
      <el-option label="合成零件" value="merge"></el-option>
    </el-select>
  </el-form-item>
 
  <el-form-item label="零件名称" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>

  <el-form-item label="详细代码" prop="code">
    <el-input type="textarea" v-model="ruleForm.code" rows="6"></el-input>
  </el-form-item>
    <el-form-item label="图片" prop="file">
    <u-photo @upload = 'getFile' :imgUrl="imgUrl"></u-photo>
    </el-form-item>
    <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
    <el-button @click="resetForm">重置</el-button>
  </el-form-item>
</el-form>


       
    </div>
</template>

<script>

import uPhoto from '@/components/home/UPhoto'
import QS from 'qs'
 export default {
    data() {
      return {
        imgUrl:true,
        ruleForm: {
          name: '',
          model: '',
          code: '',
          file:'',
          
        },
        rules: {
          name: [
            { required: true, message: '请输入零件名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          model: [
            { required: true, message: '请选择零件类型', trigger: 'change' }
          ],

          code: [
            { required: true, message: '请填写代码', trigger: 'blur' }
          ],
          file: [
            { required: true, message: '请传入图片', trigger: 'blur' },
         
           
          ]
        }
      };
    },
    components:{
      uPhoto
    },
    methods: {
      submitForm(formName) {
             

        this.$refs[formName].validate((valid) => {
          if (valid) {
            // 允许发送
    
              let formdatas = new FormData()  
                for (let key in this.ruleForm){
                  formdatas.append(String(key),this.ruleForm[key])
                }
              // 上传并清空
              this.$http.post(`${this.$store.state.localhost}/add`,formdatas).then(res=>{
         this.$notify({
          title: '成功',
          message: '上传成功',
          type: 'success'
        })      
              this.resetForm()
            })


          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        // this.$refs[formName].resetFields();
        this.imgUrl = !this.imgUrl
        for(let key in this.ruleForm){
          
          this.ruleForm[key] = ''
        }
        this.ruleForm['model'] = 'basic'
      },
      getFile(file){
        this.ruleForm.file = file
      }
    }
  }
</script>

<style  scoped>
    #add{
        width: 600px;
        height: 500px;
    padding-left: 15px;
    padding-top: 20px;
        /* background: red; */
    }
</style>