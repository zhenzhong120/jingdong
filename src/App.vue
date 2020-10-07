<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* #app { */
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
/* } */


/* iphone6 dpr=2
html{font-size:26.666667vw;}  
iphone5 dpr=2
html{font-size:31.25vw;}  */


/* 不同dpr像素比的移动端设置兼容 ----iPhone5和iPhone6 */

@media only screen and (min-width:375px){
html{font-size:26.666667vw;}  

}
/* iphone5 */
html{font-size:31.25vw;}
html,body{
  width:100%;
} 
</style>
