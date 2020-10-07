<template>
   <div class="top">
       <span class="back"></span>
       <slot ></slot>
       <span class="iconfont icon-fenlei"></span>  
   </div>
</template>

<script>
export default {
   data () {
      return {

      };
   },

   components: {},

   computed: {},

   methods: {}
}
</script>
<style lang='scss' scoped>
.top{
    width:100%;
    height:45px;
    display:flex;
    justify-content: space-around;
    align-items:center;
    background:#587ff3;
    .back{
        width:10px;
        height:10px;
        border-top:2px solid white;
        border-left:2px solid white;
        transform:rotate(-45deg);
    }
    span:nth-of-type(3){
        font-size:18px;
    }
    span:nth-of-type(2){
        font-size:16px;
        color:white;
    }
}
</style>