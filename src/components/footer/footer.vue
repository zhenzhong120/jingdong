<template>
  <div class="footer">
    <router-link class="div" to="/">
      <span class="iconfont icon-hudiejie"></span>
      <span class="shouye wenzi">首页</span>
    </router-link>
    <router-link class="div" to="/sort">
      <span class="iconfont icon-fenlei1"></span>
      <span class="fenlei wenzi">分类</span>
    </router-link>
    <router-link class="div" to="/shopcart">
      <span class="iconfont icon-gouwuche-01"></span>
      <span class="gouwuche wenzi">购物车</span>
    </router-link>
    <router-link class="div" to="/my">
      <span class="iconfont icon-user"></span>
      <span class="user wenzi">我的</span>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  methods: {},
};
</script>
<style lang='scss' scoped>
.footer {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 99999;
  background: #426ae0;
  .div {
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    span:nth-of-type(2) {
      font-size: 12px;
      font-weight:800;
      color: white;
      // margin-top:3px;
    }
  }
}
.router-link-exact-active {
  span {
    color:orangered !important;
  }
}
</style>