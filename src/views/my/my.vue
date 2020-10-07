<template>
  <div class="body">
    <Top>
      <span>我的京东</span>
    </Top>
    <div class="header">
      <div class="avtar">
        <div class="user">
          <span class="iconfont icon-morentouxiang" id="headPic"></span>
          <div class="user-message">
            <span class="title">
              <span class="user-name">原来是小葡萄呀</span>
              <span class="iconfont icon-xunzhang"></span>
            </span>
            <span class="vip"
              ><span class="text">京享值</span
              ><span class="num">556</span></span
            >
          </div>
        </div>
        <span class="iconfont icon-shezhi" id="set"></span>
      </div>
      <div class="collect">
        <div class="goods items">
          <span class="goods-num num">0</span>
          <span class="goods-text text">商品收藏</span>
        </div>
        <div class="merchant items">
          <span class="merchant-num num">2</span>
          <span class="merchant-text text">店铺收藏</span>
        </div>
        <div class="footmark items">
          <span class="footmark-num num">12</span>
          <span class="footmark-text text">我的足迹</span>
        </div>
      </div>
      <div class="plus">
        <div class="free">
          <span class="iconfont icon-hudiejie"></span><span>PLUS</span
          ><span>|</span>
          <span class="fee">免费试用 立领一张运费券</span>
        </div>
        <div class="try">
          <span class="try-text">0元试用</span><span class="try-sym"></span>
        </div>
      </div>
    </div>
    <div class="sale">
      <div class="payment item">
        <span class="iconfont icon-daifukuan" id="pay"></span>
        <span class="pay-text">代付款</span>
      </div>
      <div class="payment item">
        <span class="iconfont icon-daishouhuo" id="receipt"></span>
        <span class="pay-text">待收货</span>
      </div>
      <div class="payment item">
        <span class="iconfont icon-tuikuan" id="refund"></span>
        <span class="pay-text">退款/售后</span>
      </div>
      <div class="payment item">
        <span class="iconfont icon-order" id="order"></span>
        <span class="pay-text">全部订单</span>
      </div>
    </div>
    <div class="assets">
      <div class="assets item">
        <span class="num">0</span>
        <span class="pay-text">优惠券</span>
      </div>
      <div class="assets item">
        <span class="open">开通有礼</span>
        <span class="money">立减40元</span>
        <span class="pay-text">白条</span>
      </div>
      <div class="assets item">
        <span class="num">4</span>

        <span class="pay-text">京豆</span>
      </div>
      <div class="assets item">
        <span class="num">4</span>

        <span class="pay-text">红包</span>
      </div>
      <div class="assets item">
        <span class="iconfont icon-zichan" id="asset"></span>
        <span class="pay-text" id="mySet">我的资产</span>
      </div>
    </div>
    <div class="tools">
      <div class="tool-title">
        <p>工具与服务</p>
      </div>
      <div class="tool-details">
        <div class="items">
          <span class="iconfont icon-kefu" id="kefu"></span>
          <span class="txt">客户服务</span>
        </div>
        <div class="items">
          <span class="iconfont icon-yuyuejianying" id="yuyue"></span>
          <span class="txt">我的预约</span>
        </div>
        <div class="items">
          <span class="iconfont icon-gouwuche-01" id="huishou"></span>
          <span class="txt">高价回收</span>
        </div>
        <div class="items">
          <span class="iconfont icon-huochepiao" id="huoche"></span>
          <span class="txt">京东火车票</span>
        </div>
        <div class="items">
          <span class="iconfont icon-yingyong" id="yingyong"></span>
          <span class="txt">应用推荐</span>
        </div>
        <div class="items">
          <span class="iconfont icon-jipiao" id="jipiao"></span>
          <span class="txt">京东机票</span>
        </div>
        <div class="items">
          <span class="iconfont icon-qian" id="huanxian"></span>
          <span class="txt">闲置换钱</span>
        </div>
        <div class="items">
          <span class="iconfont icon-jiudian" id="jingdong"></span>
          <span class="txt">京东酒店</span>
        </div>
      </div>
    </div>
    <Cutting>
      <span class="text">为您推荐</span>
    </Cutting>
    <div class="favorite">
      <div class="favorite-detail" v-for="item in my.recommond">
        <div class="pic">
          <img :src="item.pic" />
        </div>
        <div class="title">
          <span class="desc"
            ><img :src="item.title.descImg" />
            {{ item.title.descText }}
          </span>
        </div>
        <div class="buy">
          <span class="left">
            <span class="price">
              <span class="new"
                ><span class="new1">￥</span
                ><span class="new2">{{ item.buy.newPrice }}</span></span
              >
              <span class="old"
                ><span class="old1">￥</span
                ><span class="old2">{{ item.buy.oldPrice }}</span></span
              >
            </span>
            <span class="member">{{ item.buy.member }}</span>
            <span class="activity">{{ item.buy.activity }}</span>
          </span>

          <span class="iconfont icon-gouwuche-01"></span>
        </div>
      </div>
    </div>
    <FooterLoading></FooterLoading>

    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../../components/footer/footer.vue";
import Top from "../../components/top/top.vue";
import Cutting from "../../components/cutting/cutting.vue";
import FooterLoading from "../../components/footerLoading/footerLoading.vue";

export default {
  data() {
    return {
      my: {},
    };
  },

  components: {
    Footer,
    Top,
    Cutting,
    FooterLoading,
  },

  computed: {},
  created() {
    this.axios({ method: "get", url: "http://localhost:3000/my" }).then(
      (response) => {
        this.my = response.data;
      }
    );
  },
  methods: {},
};
</script>
<style lang='scss' scoped>
@import "../../common/sass/common.scss";
.body {
  width: 100%;
  height: 100%;
  background: rgb(238, 234, 234);

  .header {
    font-size: p2r(28);
    background: rgb(238, 89, 89);
    .avtar {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding: p2r(20) p2r(20);
      .user {
        display: flex;
        justify-content: space-around;
        align-items: center;
        #headPic {
          font-size: p2r(120);
          color: white;
        }
        .user-message {
          .title {
            .user-name {
              font-size: p2r(32);
              color: white;
              font-weight: 800;
            }
            span:nth-of-type(2) {
              font-size: p2r(36);
              color: white;
            }
          }
          .vip {
            font-size: p2r(26);
            display: block;
            width: p2r(160);
            height: p2r(32);
            line-height: p2r(32);
            text-align: center;
            color: white;
            background: rgba(0, 0, 0, 0.4);
            border-radius: p2r(22);
            margin-top: p2r(16);
          }
        }
      }
      #set {
        font-size: p2r(44);
        color: white;
        margin-top: p2r(20);
      }
    }
    .collect {
      display: flex;
      justify-content: space-around;
      height: p2r(100);
      width: 100%;
      .items {
        width: 33%;
        height: p2r(100);

        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        color: white;
        .num {
          font-size: p2r(28);

          font-weight: 800;
        }
        .text {
          font-size: p2r(26);
        }
      }
    }
    .plus {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: p2r(90);
      width: 90%;
      margin-left: 5%;
      padding: 0 p2r(20);
      box-sizing: border-box;
      background: rgb(10, 10, 56);
      border-radius: p2r(20);
      color: rgb(238, 238, 32);
      font-size: p2r(26);

      .free {
        display: flex;
        align-items: center;
        span:nth-of-type(3) {
          margin: 0 p2r(6);
        }
        span:first-of-type {
          color: rgb(201, 201, 30);
          margin-right: p2r(6);
        }
        .fee {
          display: inline-block;
          width: p2r(270);
          // height:16px;
          line-height: p2r(32);
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
      .try {
        color: black;
        background: rgb(235, 235, 23);
        width: p2r(130);
        height: p2r(30);
        text-align: center;
        line-height: p2r(30);
        border-radius: p2r(16);
        font-size: p2r(24);
        .try-sym {
          display: inline-block;
          margin-left: p2r(10);
          width: 0;
          border-bottom: 4px solid transparent;

          border-left: 4px solid rgba(0, 0, 0, 0);
          border-right: 4px solid rgba(0, 0, 0, 0);
          border-top: 4px solid black;
          transform: rotate(-90deg);
        }
      }
    }
  }
  .sale {
    width: 100%;
    height: p2r(170);
    font-size: p2r(26);
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: p2r(20);
    border-radius: p2r(24);

    .item {
      width: 25%;
      height: p2r(170);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      #pay {
        font-size: p2r(42);
        padding: p2r(10);
      }
      #receipt {
        font-size: p2r(58);
      }
      #refund {
        font-size: p2r(54);
      }
      #order {
        font-size: p2r(48);
        color: rgb(238, 89, 89);
      }
      .pay-text {
        font-size: p2r(24);
      }
    }
  }
  .assets {
    width: 100%;
    height: p2r(170);
    font-size: p2r(26);
    background: white;
    display: flex;
    margin-bottom: p2r(20);
    border-radius: p2r(24);

    .item {
      width: 20%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      .pay-text {
        margin-top: p2r(30);
        font-size: p2r(26);
      }
      .num {
        font-size: p2r(34);
        font-weight: 800;
      }
      .open {
        font-size: p2r(24);
        padding: p2r(4);
        font-weight: 800;
      }
      #asset {
        font-size: p2r(50);
        color: rgb(238, 89, 89);
      }
      .money {
        position: absolute;
        top: p2r(4);
        left: p2r(6);
        width: p2r(120);
        height: p2r(24);
        line-height: p2r(24);
        text-align: center;
        border-radius: p2r(10);
        color: white;
        background: rgb(238, 89, 89);
        font-size: p2r(20);
      }
      #mySet {
        margin-top: p2r(18);
      }
    }
  }
  .tools {
    font-size: p2r(24);
    width: 100%;
    height: p2r(400);
    background: white;
    border-radius: p2r(20);
    margin-bottom: p2r(40);

    .tool-title {
      p {
        font-size: p2r(28);
        font-weight: 800;
        width: 100%;
        @include borderBottom-1px(gainsboro);
        padding: p2r(20) 0;
        padding-left: p2r(26);
        box-sizing: border-box;
      }
    }
    .tool-details {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      width: 100%;
      height: p2r(300);
      .items {
        width: 25%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        span:first-of-type {
          font-size: p2r(60);
        }
        #kefu {
          font-size: p2r(74);
          color: rgb(97, 97, 233);
        }
        #yuyue {
          color: rgb(224, 89, 163);
        }
        #huishou {
          color: rgb(40, 161, 40);
          font-weight: 900;
        }
        #huoche {
          font-size: p2r(64);
          color: rgb(97, 97, 233);
        }
        #yingyong {
          color: rgb(162, 115, 206);
        }
        #jipiao {
          font-size: p2r(70);
          color: rgb(40, 161, 40);
        }
        #huanxian {
          color: rgb(216, 64, 64);
        }
        #jingdong {
          color: rgb(196, 196, 13);
          font-size: p2r(76);
          font-weight: 900;
        }
      }
    }
  }
  .favorite {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    background: rgb(247, 245, 245);

    .favorite-detail {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: p2r(20);
      background: white;

      width: 50%;
      box-sizing: border-box;
      font-size: p2r(24);
      border-radius: p2r(20);
      border: 1px solid rgb(247, 245, 245);
      // padding:5px 5px;
      .pic {
        width: p2r(260);
        height: p2r(260);
        margin-bottom: p2r(20);
        img {
          width: 100%;
          height: 100%;
        }
      }
      .title {
        margin-bottom: p2r(20);
        width: 100%;
        .desc {
          font-size: p2r(24);
          line-height: p2r(26);
          height: p2r(54);
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          word-break: break-all;
          // margin-top:5px;
          img {
            vertical-align: middle;
            width: p2r(90);
            height: p2r(30);
          }
        }
      }
      .buy {
        display: flex;
        width: 100%;
        margin-bottom: p2r(10);
        justify-content: space-between;

        // justify-content: space-around;
        .left {
          .price {
            .new {
              margin-right: p2r(6);
              .new1 {
                color: red;

                font-size: p2r(20);
              }
              .new2 {
                color: red;

                font-size: p2r(26);
              }
            }
            .old {
              .old1 {
                color: #a7a1a1;

                font-size: p2r(20);
              }
              .old2 {
                color: #a7a1a1;

                font-size: p2r(20);
              }
            }
          }
          .member {
            display: inline-block;

            width: p2r(54);
            height: p2r(24);
            font-size: p2r(20);
            color: yellow;
            background: black;
          }
          .activity {
            display: inline-block;
            font-size: p2r(20);
            color: red;
            border: 1px solid red;
          }
        }
        span:last-of-type {
          color: red;
          font-weight: 800;
          font-size: p2r(26);
        }
      }
    }
  }
}
</style>