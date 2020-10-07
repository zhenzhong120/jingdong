<template>
   <div>
          <div class="footerLoading">
      <div class="logo">
        <span class="iconfont" id="logo">&#xe63e;</span
        ><span class="txt">JD.COM</span>
      </div>
      <div class="user-messageDe">
        <span class="user-name">原来是小葡萄呀</span>
        <span class="exit">退出</span>
        <span class="service">客户服务</span>
        <span class="back">返回顶部</span>
      </div>
      <div class="version">
        <img
          src="//m.360buyimg.com/mobilecms/jfs/t16423/186/2517573622/5186/75a541f7/5ab1c0deN947bdcba.png"
          class="conmmon-icon-item"
        />
        <img
          src="//m.360buyimg.com/mobilecms/jfs/t18550/294/898388074/6574/3a8c5413/5ab0b8e9Ne9c48331.png"
          class="conmmon-icon-item"
        />
        <img
          src="//m.360buyimg.com/mobilecms/jfs/t14581/218/2689195961/4696/203b872a/5ab1c0f2N51c3f1bb.png"
          class="conmmon-icon-item"
        />
      </div>
      <div class="copyright">Copyright © 2004-2019 京东JD.com 版权所有</div>
    </div>
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
@import "../../common/sass/common.scss";

  .footerLoading {
    .logo {
      width: 100%;
      height: p2r(200);
      line-height: p2r(200);
      margin-top: p2r(2);

      font-size: 0;
      text-align: center;
      background: white;

      #logo {
        font-size: p2r(50);
        color: Red;
      }
      .txt {
        font-size: p2r(44);
        color: red;
        font-weight: 800;
      }
    }
    .user-messageDe {
      margin-top: p2r(4);
      width: 100%;
      height: p2r(80);
      background: white;
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 0 p2r(10);
      box-sizing: border-box;
      span {
        width: 25%;
        font-size: p2r(24);
        color: #a7a1a1;
      }
      .user-name {
        width: 25%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      @include borderRight-1px(#a7a1a1);

        box-sizing: border-box;
      }
      .exit {
           @include borderRight-1px(#a7a1a1);

        box-sizing: border-box;
        padding-left: p2r(70);
      }
      .service {
      @include borderRight-1px(#a7a1a1);

        box-sizing: border-box;
        padding-left:  p2r(50);
      }
      .back {
        box-sizing: border-box;
        padding-left:  p2r(20);
      }
    }
    .version {
      margin-top: p2r(4);
      width: 100%;
      height:  p2r(120);
      display: flex;
      justify-content: space-around;
      align-items: center;
      background: white;

      img {
        width:  p2r(100);
        height: p2r(100);
      }
    }
    div.copyright {
      margin-bottom: 45px;
      margin-top: p2r(4);
      font-size: p2r(24);
      color: #a7a1a1;
      width: 100%;
      height: p2r(80);
      background: white;
      text-align: center;
      line-height: p2r(80);
    }
  }
</style>