<template>
    <div id="main">
         <div  style="width: 400px;height:600px;" ref="chart"></div>
    </div>
</template>

<script>
export default {

    data() {
        return {
           option : {
            title: {
                text: 'SCAD 数据概览'
            },
            toolbox:{
            show:true,
            feature:{
                saveAsImage:{
                    show:true
                }
            }
        },
            tooltip: {},
            legend: {
                data:['数量']
            },
            xAxis: {
                data: ["基础件","复合件"]
            },
            yAxis: {},
            series: [{
                name: '数量',
                type: 'bar',
                data: []
            }]
        }
        };
    },
    mounted() {
        // this.initChart()
    },
    created(){
        this.getNum()

    //    console.log(this.myChart);
    },
    methods: {
        initChart(){
           this.$echarts.init(this.$refs.chart,'wonderland').setOption(this.option);

            } ,
          async getNum(){
            let {data} = await this.$http.get(`${this.$store.state.localhost}/num`)
            this.option.series[0].data = Object.values(data)
            this.initChart()
            // console.log(this.data);
        }
    },
};
</script>

<style lang="" scoped>
    #main{
        display: flex;
        justify-content: center;
    }
</style>