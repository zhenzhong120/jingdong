<template>
  <div>
    <div class="header">
      <span class="back"></span>
      <div class="search">
        <span class="iconfont icon-sousuo"></span>
        <input type="text" placeholder="苏泊尔电磁炉" />
      </div>
    </div>

    <div class="goods">
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <li
            class="menu-item"
            :class="index === active ? 'active' : ''"
            v-if="category"
            v-for="(item, index) in category"
            @click="secondeCate(index)"
          >
            <span id="text">{{ item.name }}</span>
          </li>
        </ul>
      </div>
      <div class="content-wrapper" ref="contentWrapper">
        <div>
          <ul
            v-for="(item, index) in category"
            class="content-list-hook"
            v-show="index === active"
          >
            <li class="content-list" v-for="item1 in item.goods">
              <div class="caption">
                <h1 class="title">{{ item1.caption.title }}</h1>
                <div class="symbol">
                  <span :class="item1.caption.icon"></span>
                  <span class="clear">{{ item1.caption.clear }}</span>
                  <span class="detail">{{ item1.caption.detail }}</span>
                </div>
              </div>
              <ul>
                <li class="content-item" v-for="item2 in item1.contentItem">
                  <img :src="item2.pic" @load="imgLoad" />
                  <span class="name">{{ item2.contentName }}</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../../components/footer/footer.vue";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      category: [],
      active: 0,
    };
  },

  components: {
    Footer,
  },
  mounted() {
    if (!this.scroll) {
        this.menuScroll = new BScroll(this.$refs.menuWrapper, {
          click: true,
        });
        this.foodsScroll = new BScroll(this.$refs.contentWrapper, {
          probeType: 3,
          click: true,
          // bounce:false
        });
      } else {
        this.scroll.refresh();
      }
  },
  computed: {},
  created() {
    this.axios({ method: "get", url: "http://localhost:3000/category" }).then(
      (response) => {
        this.category = response.data;
        this.$nextTick(() => {
          //在promise的then函数中结合异步渲染函数$nextTick，获取商品详情列表，才能获取到htmlCollection的长度length
          // let foodList = this.$refs.contentWrapper.getElementsByClassName(
          //   "content-list-hook"
          // );
          // //htmlCollection转化为array的函数
          // function toArray(foodList) {
          //   for (var i = 0, a = []; i < foodList.length; i++)
          //     a.push(foodList[i]);

          //   return a;
          // }
          // toArray(foodList); //转为数组，设置默认展示的第一个商品详情列表的样式
          // let menuList = this.$refs.menuWrapper.getElementsByClassName(
          //   "menu-item"
          // );
          // foodList[0].style.display = "block";
          // menuList[0].style.background = "white";
          // menuList[0].style.color = "red";
          this.initScroll();
        });
      }
    );
  },

  methods: {
    secondeCate(index) {
      this.active = index;

      //点击左侧菜单列表，设置相应的菜单列表的样式及商品详情列表的展示与隐藏
      // let foodList = this.$refs.contentWrapper.getElementsByClassName(
      //   "content-list-hook"
      // );
      let menuList = this.$refs.menuWrapper.getElementsByClassName("menu-item");

      // for (var i = 0; i < foodList.length; i++) {
      //   foodList[index].style.display = "block";
      //   foodList[i].style.display = "none";
      //   menuList[index].style.background = "white";
      //   menuList[index].style.color = "red";
      //   menuList[i].style.color = "black";
      //   menuList[i].style.background = "none";
      // }

      let el = menuList[index]; //根据index，获取到右边具体滚动到的li

      this.menuScroll.scrollToElement(el, 300); //要滑动到右边的对象，300完成动作的时间

      //点击左侧菜单之后，内容区的滚动
      // foodList[index].style.pointerEvents = "none";
      // this.initScroll();
    },
    initScroll() {
      if (!this.scroll) {
        this.menuScroll = new BScroll(this.$refs.menuWrapper, {
          click: true,
        });
        this.foodsScroll = new BScroll(this.$refs.contentWrapper, {
          probeType: 3,
          click: true,
          // bounce:false
        });
      } else {
        this.scroll.refresh();
      }
    },
    imgLoad() {
      this.foodsScroll && this.foodsScroll.refresh();
      // this.$refs.contentWrapper.refresh();
        // this.scroll && this.scroll.refresh();
    },
  },
 
};
</script>
<style lang='scss' scoped>
@import "../../common/sass/common.scss";
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  z-index: 9999;
  display: flex;
  align-items: center;
  background: white;
  border-bottom: 1px solid hsl(0, 6%, 79%);
  .back {
    width: 10px;
    height: 10px;
    display: block;
    font-weight: 800;
    border-top: 2px solid #272626;
    border-left: 2px solid #272626;
    transform: rotate(-45deg);
    margin: 15px 15px;
  }
  .search {
    width: 70%;
    height: 30px;
    border-radius: 15px;
    background: rgb(245, 245, 245);
    font-size: 0;
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
    input {
      margin-left: 15px;
      border: none;
      background: rgb(245, 245, 245);
      font-size: 12px;
    }
  }
}
.goods {
  display: flex;
  width: 100%;
  position: absolute;
  top: 41px;
  bottom: 41px;
  overflow: hidden;
  font-size: p2r(28);
  .menu-wrapper {
    width: p2r(160);
    background: rgb(245, 245, 245);

    ul {
      width: p2r(160);
      .active {
        color: red;
        background: white;
      }
      li {
        width: p2r(160);
        height: p2r(90);
        text-align: center;
        line-height: p2r(90);
        span {
          font-size: p2r(28);
          display: block;
        }
      }
    }
  }
  .content-wrapper {
    flex: 1;

    ul {
      width: 100%;
      // display: none;
      pointer-events: none;
      li {
        width: 100%;
        .caption {
          width: 100%;
          height: p2r(90);
          line-height: p2r(90);
          display: flex;
          justify-content: space-between;
          padding: 0 p2r(30);
          box-sizing: border-box;
          h1 {
            font-size: p2r(28);
            font-weight: 800;
          }
          div {
            span:not(:nth-of-type(1)) {
              font-size: p2r(24);
            }
          }
        }
        ul {
          width: 100% !important;
          display: flex;
          flex-wrap: wrap;

          li {
            width: 33%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-bottom: p2r(35);
            img {
              width: p2r(120);
              height: p2r(120);
            }
            span {
              font-size: p2r(24);
            }
          }
        }
      }
    }

    // ul:first-of-type {
    //   width: 100%;
    //   display: block;

    //   li {
    //     width: 100%;
    //     .caption {
    //       width: 100%;
    //       height: p2r(90);
    //       line-height: p2r(90);
    //       display: flex;
    //       justify-content: space-between;
    //       padding: 0 p2r(30);
    //       box-sizing: border-box;
    //       h1 {
    //         font-size: p2r(28);
    //         font-weight: 800;
    //       }
    //       div {
    //         span:not(:nth-of-type(1)) {
    //           font-size: p2r(24);
    //         }
    //       }
    //     }
    //     ul {
    //       width: 100%;
    //       display: flex;
    //       flex-wrap: wrap;

    //       li {
    //         width: 33%;
    //         display: flex;
    //         flex-direction: column;
    //         justify-content: center;
    //         align-items: center;
    //         margin-bottom: p2r(35);
    //         img {
    //           width: p2r(120);
    //           height: p2r(120);
    //         }
    //         span {
    //           font-size: p2r(24);
    //         }
    //       }
    //     }
    //   }
    // }
  }
}
</style>