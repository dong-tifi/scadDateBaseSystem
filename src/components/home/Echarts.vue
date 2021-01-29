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
                data: this.$store.state.proportion
            }]
        }
        };
    },
    mounted() {
        this.initChart()
    },
    created(){

    },
    methods: {
        initChart(){
           this.$echarts.init(this.$refs.chart,'wonderland').setOption(this.option);

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