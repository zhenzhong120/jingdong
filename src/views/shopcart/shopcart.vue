<template>
  <div class="body">
    <Top>
      <span>购物车</span>
    </Top>
    <div class="option">
      <div class="address">
        <span class="iconfont icon-shezhi"></span>
        <span class="detail">朝阳区三环到四环之间</span>
      </div>
      <div class="edit">
        <span class="line">|</span>
        <span class="btn">编辑商品</span>
      </div>
    </div>
    <div class="cart-details">
      <ul class="wrapper">
        <li class="list" v-for="item in shopCart.cartDetails">
          <div class="partition">
            <div class="left">
              <input type="checkbox" />
              <span :class="item.partition.icon"></span>
              <span class="sell">{{ item.partition.sell }}</span>
            </div>
            <div class="right">
              <span :class="item.partition.rightIcon"></span>
              <span class="fee">{{ item.partition.fee }}</span>
              <span class="line">{{ item.partition.line }}</span>
              <span class="discount">{{ item.partition.discount }}</span>
            </div>
          </div>
          <ul class="goods">
            <li class="goods-list" v-for="item1 in item.goods">
              <div class="check">
                <input type="checkbox" />
              </div>
              <div class="detail">
                <div class="activity">
                  <span class="tag">{{ item1.activity.tag }}</span>
                  <span class="title">{{ item1.activity.title }}</span>
                  <span class="text">{{ item1.activity.text }}</span>
                  <span class="look">{{ item1.activity.look }}</span>
                </div>
                <div class="good-detail">
                  <div class="pic">
                    <img :src="item1.gooDetail.pic" />
                  </div>
                  <div class="good-text">
                    <div class="good-text-title">
                      <span class="title">
                        <img :src="item1.gooDetail.goodTextitle.pic" />
                        {{ item1.gooDetail.goodTextitle.text }}
                      </span>
                    </div>
                    <div class="spec">
                      <span
                        ><span class="spec-detail">{{
                          item1.gooDetail.spec.specDetail
                        }}</span
                        ><span class="service">{{
                          item1.gooDetail.spec.service
                        }}</span
                        ><span class="sym">{{
                          item1.gooDetail.spec.sym
                        }}</span></span
                      >
                    </div>
                    <div class="trade">
                      <span class="disc">{{ item1.gooDetail.trade.disc }}</span
                      ><span class="sy">{{ item1.gooDetail.trade.sy }}</span>
                    </div>
                    <p class="kill">{{ item1.gooDetail.kill }}</p>
                    <p class="price">
                      <span class="new"
                        ><span class="new1">￥</span
                        ><span class="new2">{{
                          item1.gooDetail.price.new
                        }}</span></span
                      >
                      <span class="old"
                        ><span class="old1">￥</span
                        ><span class="old2">{{
                          item1.gooDetail.price.old
                        }}</span></span
                      >
                    </p>
                    <p class="estimate">
                      <span class="text">{{
                        item1.gooDetail.estimate.text
                      }}</span
                      ><span class="price"
                        >￥{{ item1.gooDetail.estimate.price }}</span
                      >
                    </p>
                    <p class="lower">
                      <span class="lower-text">{{
                        item1.gooDetail.lower.lowerText
                      }}</span
                      ><span class="lower-price"
                        >￥{{ item1.gooDetail.lower.lowerPrice }}</span
                      >
                    </p>
                    <div class="addMinus">
                      <span class="minus">-</span>
                      <input type="text" value="1" />
                      <span class="add">+</span>
                    </div>
                    <div class="option1">
                      <span class="attention">移入关注</span>
                      <span class="line">|</span>
                      <span class="delete">删除</span>
                    </div>
                    <div class="free">
                      <span class="free-goods"
                        ><span class="free1">{{
                          item1.gooDetail.free.freeGoods
                        }}</span
                        ><span class="num">{{ item1.gooDetail.free.num }}</span
                        ><span class="sym">{{
                          item1.gooDetail.free.sym
                        }}</span></span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <Cutting>
      <span class="text">可能你还想要</span>
    </Cutting>
    <div class="favorite">
      <div class="favorite-detail" v-for="item in shopCart.favorite">
        <div class="pic">
          <img
            :src="item.pic"
          />
        </div>
        <div class="title">
          <span class="desc"
            ><img
              :src="item.title.descImg"
            />
         {{ item.title.descText}}
          </span>
        </div>
        <div class="buy">
          <span class="left">
            <span class="price">
              <span class="new"
                ><span class="new1">￥</span
                ><span class="new2">{{item.buy.newPrice}}</span></span
              >
              <span class="old"
                ><span class="old1">￥</span><span class="old2">{{item.buy.oldPrice}}</span></span
              >
            </span>
            <span class="member">{{item.buy.member}}</span>
            <span class="activity">{{item.buy.activity}}</span>
          </span>

          <span class="iconfont icon-gouwuche-01"></span>
        </div>
      </div>

    </div>
    <div class="payment">
      <div class="allSelect">
        <!-- <span class="iconfont icon-fuxuankuang_weixuanzhong"></span> -->
        <span class="iconfont icon-fuxuankuang_xuanzhong"></span>
        <span class="all">全选</span>
      </div>
      <div class="total">
        <div class="left">
          <div class="money-detail">
            <div class="calculate">
              <span class="totalMoney"
                ><span class="text">总计:￥</span
                ><span class="num">3458.30</span></span
              >
            </div>
            <div class="discount">
              <span class="disMoney"
                ><span class="disTxt">已优惠￥</span
                ><span class="num">105.00</span></span
              >
            </div>
          </div>
          <div class="sym"></div>
        </div>
        <div class="right">
          <span class="buyNum"
            ><span class="buyTxt">去结算</span
            ><span class="buyCount">(16件)</span></span
          >
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Top from "../../components/top/top.vue";
import Footer from "../../components/footer/footer.vue";
import Cutting from "../../components/cutting/cutting.vue";

export default {
  data() {
    return {
      shopCart: {},
    };
  },

  components: {
    Top,
    Footer,
    Cutting,
  },

  computed: {},
  created() {
    this.axios({ method: "get", url: "http://localhost:3000/shopCart" }).then(
      (response) => {
        this.shopCart = response.data;
      }
    );
  },
  methods: {},
};
</script>
<style lang='scss' scoped>
@import "../../common/sass/common.scss";
.body {
  background: rgb(247, 245, 245);
  width: 100;
  height: 100%;

  .option {
    width: 100%;
    height: p2r(90);
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: p2r(20) p2r(20);
    margin-bottom: 10px;
    font-size: p2r(24);
    background: white;
    border-radius: 0 0 p2r(20) p2r(20);
    .edit {
      .btn {
        margin-left: p2r(30);
      }
    }
    .address {
      span:first-of-type {
        font-size: p2r(32);
      }
    }
  }
  .cart-details {
    width: 100%;
    background: rgb(247, 245, 245);
    font-size: p2r(28);
    margin-bottom: p2r(34);
    ul {
      background: rgb(247, 245, 245);
      width: 100%;
      li {
        background: white;
        padding-bottom: p2r(20);
        border-radius: p2r(20);
        margin-bottom: p2r(20);
        .partition {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: p2r(20) p2r(20);
          .left {
            font-size: p2r(24);
            display: flex;
            align-items: center;
            .sell {
              margin-left: p2r(10);
            }
            input {
              width: p2r(34);
              height: p2r(34);
            }
          }
          .right {
            font-size: p2r(24);
            display: flex;
            align-items: center;
            .line {
              margin: 0 p2r(10);
            }
            .fee {
              margin-left: p2r(10);
            }
            .discount {
              display: inline-block;
              width: p2r(86);
              height: p2r(32);
              line-height: p2r(32);
              text-align: center;
              border-radius: p2r(10);
              color: red;
              background: rgb(248, 213, 219);
            }
          }
        }
        .goods {
          width: 100%;
          li {
            box-sizing: border-box;
            border-radius: 0;
            width: 100%;
            display: flex;
            box-sizing: border-box;
            align-items: center;
            padding-left: p2r(20);
            padding-top: p2r(20);
            margin-bottom: 0;
            @include borderBottom-1px(rgb(247, 245, 245));

            .check {
              width: p2r(60);

              input {
                width: p2r(30);
                height: p2r(30);
                border-radius: 50%;
                color: white;
              }
            }
            .detail {
              flex: 1;
              .activity {
                position: relative;
                .tag {
                  display: inline-block;
                  width: p2r(56);
                  height: p2r(28);
                  text-align: center;
                  line-height: p2r(28);
                  border-radius: p2r(8);
                  background: red;
                  color: white;
                  font-size: p2r(24);
                }
                .title {
                  font-size: p2r(22);
                  font-weight: 800;
                }
                .text {
                  font-size: p2r(24);
                  position: absolute;
                  right: p2r(60);
                  top: 0;
                }
                .look {
                  display: inline-block;
                  font-size: p2r(20);
                  font-weight: 800;
                  position: absolute;
                  right: p2r(40);
                  top: 0;
                }
              }
              .good-detail {
                display: flex;
                margin-top: p2r(20);
                // justify-content: space-around;
                .pic {
                  width: p2r(172);
                  height: p2r(172);
                  margin-right: p2r(20);
                  img {
                    width: 100%;
                    height: 100%;
                  }
                }
                .good-text {
                  flex: 1;
                  padding-right: p2r(40);
                  position: relative;
                  .good-text-title {
                    .title {
                      font-size: p2r(24);
                      height: p2r(64);
                      line-height: p2r(30);
                      overflow: hidden;
                      text-overflow: ellipsis;
                      display: -webkit-box;
                      -webkit-line-clamp: 2;
                      -webkit-box-orient: vertical;
                      word-break: break-all;
                      img {
                        width: p2r(100);
                        height: p2r(30);
                        vertical-align: middle;
                      }
                    }
                  }
                  .spec {
                    display: inline-block;
                    font-size: p2r(24);
                    height: p2r(26);
                    background: rgb(247, 245, 245);
                    border-radius: p2r(10);
                    .sym {
                      font-size: p2r(20);
                      display: inline-block;
                      transform: rotate(90deg);
                    }
                  }
                  .trade {
                    font-size: p2r(20);
                    width: p2r(140);
                    height: p2r(24);
                    line-height: p2r(24);
                    text-align: center;
                    border-radius: p2r(12);
                    margin-top: p2r(6);
                    background: rgb(247, 245, 245);
                    .sy {
                      font-size: p2r(16);
                      margin-left: p2r(6);
                      display: inline-block;
                      transform: rotate(90deg);
                    }
                  }
                  .kill {
                    margin-top: p2r(20);
                    font-size: p2r(20);
                    color: red;
                  }
                  .price {
                    margin-top: p2r(20);

                    .new {
                      .new1 {
                        font-size: p2r(20);
                        color: red;
                      }
                      .new2 {
                        font-size: p2r(28);
                        color: red;
                      }
                    }
                    .old {
                      font-size: p2r(20);
                      text-decoration: line-through;
                      color: rgb(167, 161, 161);
                    }
                  }
                  .estimate {
                    margin-top: p2r(20);
                    .text {
                      font-size: p2r(24);
                      color: red;
                    }
                    .price {
                      font-size: p2r(20);
                      color: red;
                    }
                  }
                  .lower {
                    position: absolute;
                    bottom: p2r(204);
                    right: p2r(72);
                    border-left: 1px solid #a7a1a1;
                    padding-left: p2r(10);
                    .lower-text {
                      font-size: p2r(20);
                      color: red;
                    }
                    .lower-price {
                      font-size: p2r(20);
                      color: red;
                    }
                  }
                  .addMinus {
                    position: absolute;
                    right: p2r(52);
                    top: p2r(188);
                    input {
                      width: p2r(52);
                      height: p2r(20);
                      background: rgb(233, 231, 231);
                      border: none;
                      text-align: center;
                      font-size: p2r(20);
                    }
                  }
                  .option1 {
                    position: absolute;
                    right: p2r(52);
                    top: p2r(280);
                    span {
                      font-size: p2r(20);
                    }
                  }
                  .free {
                    margin-top: p2r(40);
                    .free-goods {
                      .free1 {
                        font-size: p2r(24);
                      }
                      .num {
                        font-size: p2r(20);
                      }
                      .sym {
                        font-size: p2r(20);
                        display: inline-block;
                        transform: rotate(90deg);
                      }
                    }
                  }
                }
              }
            }
          }
          li:last-of-type {
            border-bottom: 0;
          }
        }
      }
    }
  }

  .favorite {
    margin-bottom: p2r(200);
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
  .payment {
    font-size: 0;
    position: fixed;
    left: 0;
    bottom: 40px;
    height: 40px;
    width: 100%;
    background: white;

    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 10px;
    .allSelect {
      display: flex;
      align-items: center;
      span:first-of-type {
        font-size: 20px;
        display: inline-block;
        margin-right: 5px;
        color: red;
      }
      .all {
        font-size: 13px;
      }
    }
    .total {
      display: flex;
      align-items: center;
      .left {
        display: flex;
        align-items: center;
        justify-content: space-around;
        .money-detail {
          margin-right: 5px;
          text-align: right;
          .calculate {
            color: #504f4f;

            .totalMoney {
              font-size: 13px;

              .num {
                font-weight: 800;
              }
            }
          }
          .discount {
            .disMoney {
              color: #504f4f;
              .disTxt {
                font-size: 13px;
              }
              .num {
                font-size: 12px;
              }
            }
          }
        }
        .sym {
          width: 7px;
          height: 7px;
          border-bottom: 2px solid #7a7878;
          border-left: 2px solid #7a7878;
          transform: rotate(-45deg);
        }
      }
      .right {
        width: 110px;
        height: 32px;
        margin-left: 10px;
        background: red;
        color: white;
        border-radius: 16px;
        line-height: 32px;
        text-align: center;
        .buyNum {
          font-size: 13px;
        }
      }
    }
  }
}
</style>