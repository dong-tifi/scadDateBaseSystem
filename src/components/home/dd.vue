<template>
    <div>
        <h1>num:{{num}}</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // num:''
        };
    },
    mounted() {
        // this.num = this.$route.params.num
    },
    props:['num'],
    methods: {
        
    },
};
</script>

<style  scoped>

</style>