<template>
  <div class="body">
    <div class="header">
      <span class="iconfont icon-fenlei" id="fenlei"></span>
      <div class="search">
        <span class="iconfont icon-jingdong"></span>
        <span class="line">|</span>
        <span class="iconfont icon-sousuo" id="search"></span>
        <input type="text" placeholder="儿童运动鞋" />
      </div>
      <span class="iconfont icon-user" id="user"></span>
    </div>
    <div class="background">
      <div class="swiper-container swiper1">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in index.swiper1">
            <img :src="item" />
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination page1"></div>

        <!-- 如果需要导航按钮 -->
        <!-- <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>-->

        <!-- 如果需要滚动条 -->
        <!-- <div class="swiper-scrollbar"></div> -->
      </div>
      <div class="nav">
        <img v-for="item in index.nav" :src="item" />
      </div>

      <div class="swiper-container swiper2">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in index.swiper2">
            <div class="shop" v-for="(item2, index) in item">
              <img :src="item2.pic" />
              <span>{{ item2.text }}</span>
            </div>
          </div>
        </div>
        <div class="swiper-pagination page2"></div>
      </div>
    </div>
    <div class="seckill">
      <div class="head">
        <span class="title">京东秒杀</span>
        <div class="time">
          <span class="time1" id="target">20点场</span>
          <span class="down" id="count-down">01:42:56</span>
        </div>
        <div class="more">
          <span class="more1">更多秒杀</span>
          <span class="more2">></span>
        </div>
      </div>

      <div class="content" ref="ContentWrapper">
        <ul class="content-list" ref="ContentList">
          <li class="detail" v-for="item in index.seckill">
            <img :src="item.pic" />
            <span class="new">
              ￥
              <span>{{ item.newPrice }}</span>
            </span>
            <span class="old">
              ￥
              <span>{{ item.oldPrice }}</span>
            </span>
          </li>

          <li class="detail-all">
            <span class="all1">></span>
            <span class="all2">查 看 全 部</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="swiper-container swiper3 nav1">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in index.swiper3">
          <img :src="item" />
        </div>
      </div>
    </div>
    <div class="swiper-container swiper4 nav2">
      <div class="swiper-wrapper">
        <div class="detail1 swiper-slide" v-for="item in index.swiper4">
          <img
            :src="item.floor - item + '?' + new Date().getTime()"
            class="floor-item-bg1 floor-item"
            crossOrigin="anonymous"
          />
          <img
            :src="item.bg + '?' + new Date().getTime()"
            class="bg1 bg"
            crossOrigin="anonymous"
          />
          <span class="desc">{{ item.desc }}</span>
          <span class="promotion" v-if="item.promotion">{{
            item.promotion
          }}</span>
        </div>
      </div>
    </div>
    <div class="peasant">
      <img
        class="ll_fadeIn"
        src="//m.360buyimg.com/mobilecms/s750x80_jfs/t1/120788/8/5449/24646/5ef008ccEa30f561d/b59f6d8807cfb020.png!q70.jpg.dpg"
      />
    </div>
    <div class="peasant-details">
      <div class="in" v-for="item in index.peasantDetails">
        <span class="title" v-if="item.title">{{ item.title }}</span>
        <span class="des" v-if="item.des">{{ item.des }}</span>
        <img :src="item.pic" />
      </div>
    </div>
    <div class="day">
      <img
        src="//m.360buyimg.com/mobilecms/s750x80_jfs/t1/118793/9/10620/23804/5ef008fbE5d9a21ec/55f3eb03ac9e05a4.png!q70.jpg.dpg"
      />
    </div>
    <div class="day-details">
      <div class="items" v-for="item in index.dayDetails">
        <span v-if="item.span1">{{ item.span1 }}</span>
        <span v-if="item.span2">{{ item.span2 }}</span>
        <img :src="item.pic" />
      </div>
    </div>
    <div class="recommend">
      <img
        src="//img11.360buyimg.com/jdphoto/jfs/t1/31601/22/15554/14040/5cc2a86fEbdb1098b/88174b36f85283b6.png"
      />
    </div>
    <div class="recommend-details">
      <div class="recommend-items" v-for="item in index.recommenDetails">
        <img :src="item.pic" />
        <span class="purchase" v-if="item.purchase">{{ item.purchase }}</span>
        <span class="desc">
          <img :src="item.desc.pic" />
          {{ item.desc.text }}
        </span>
        <span class="new">
          ￥
          <span class="newPrice">{{ item.newPrice }}</span>
        </span>
        <span class="reduce" v-if="item.reduce">{{ item.reduce }}</span>
        <span class="similarity">{{ item.similarity }}</span>
        <span class="old">
          ￥
          <span class="oldPrice">{{ item.oldPrice }}</span>
        </span>
      </div>
    </div>
    <FooterLoading></FooterLoading>

    <Footer></Footer>
  </div>
</template>

<script>
import Swiper from "swiper";
import Footer from "../../components/footer/footer.vue";
import FooterLoading from "../../components/footerLoading/footerLoading.vue";
import BScroll from "better-scroll";

export default {
  data() {
    return {
      index: {},
    };
  },
  methods: {
    //初始化swiper插件
    _initSwiper() {
      var mySwiper = new Swiper(".swiper1", {
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        autoplay: true, //可选选项，自动滑动
        speed: 500,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false, //解决手动滑动，自动轮播失效问题
        },
        direction: "horizontal", //水平切换
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          paginationClickable: true,

          clickable: true,
        },

        //  如果需要前进后退按钮
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },

        // 如果需要滚动条
        // scrollbar: {
        //   el: ".swiper-scrollbar",
        // },
      });
    },

    _initSwiper1() {
      var mySwiper = new Swiper(".swiper2", {
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        speed: 500,

        direction: "horizontal", //水平切换
        // 如果需要分页器
        pagination: {
          el: ".page2",
          type: "bullets",
          paginationClickable: true,

          clickable: true,
        },
      });
    },
    _initPics() {
      //this.$refs驼峰访问，手动设置ul的宽度,需要添加px单位，否则只是一个数字，无法和外层wrapper的容器宽度进行比较
      this.$refs.ContentList.style.width = 5.4 + "rem";
      this.$nextTick(() => {
        //if (!this.scroll) { //判断是否应用了scroll,应用了就不再初始化了
        this.scroll = new BScroll(this.$refs.ContentWrapper, {
          scrollX: true,
          click: true, //滚动过程中会有点击收藏的事件
          eventPassthrough: "vertical", //外层区块竖向滚动
        });
        // } else {
        //   this.scroll.refresh();
        // }
      });
    },
    _initSwiper3() {
      var swiper = new Swiper(".swiper3", {
        slidesPerView: 3,
        spaceBetween: 10,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        speed: 500,
        direction: "horizontal", //水平切换
      });
    },
    _initSwiper4() {
      var swiper = new Swiper(".swiper4", {
        slidesPerView: 4,
        spaceBetween: 10,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        autoplay: true, //可选选项，自动滑动
        speed: 500,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false, //解决手动滑动，自动轮播失效问题
        },
        loop: false,
      });
    },
    time(hour, min, sec) {
      var timer = setInterval(function () {
        var latter = "20:00:00";
        var now = new Date();
        var hour = now.getHours();
        var min = now.getMinutes();
        var sec = now.getSeconds();
        var nowTime = hour + ":" + min + ":" + sec;
        console.log(latter);
        var cha = Math.floor((latter - now) / 1000);
      }, 1000);
    },
  },
  // mounted(){
  //   this._initSwiper();
  // }
  created() {
    this.$nextTick(() => {
      this._initSwiper();
      this._initSwiper1();
      this._initPics();
      this._initSwiper3();
      this._initSwiper4();
      // this.time();
    });
    this.axios({ method: "get", url: "http://localhost:3000/index" }).then(
      (response) => {
        this.index = response.data;
      }
    );
  },
  components: {
    Footer,
    FooterLoading,
  },
};
</script>
<style  lang="scss" scoped>
@import "../../common/sass/common.scss";

.body {
  background: #f6f6f6;
  width: 100%;
  height: 100%;
  .header {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 40px;
    background: #708de6;
    #fenlei {
      font-size: 24px;
    }
    #user {
      font-size: 20px;
    }

    .search {
      display: flex;
      align-items: center;
      padding: 0 2px;
      height: 30px;
      font-size: 0;
      border-radius: 15px;
      background: white;
      span {
        font-size: 20px;
      }
      .line {
        padding: 0 5px;
        color: #cccccc;
      }
      #search {
        font-size: 16px;
      }
      input {
        margin-left: 10px;
        border: none;
      }
    }
  }
  .background {
    padding-bottom: 5px;
    background: #0066cc;
    margin-top: 40px;
    position: relative;
    .swiper1 {
      --swiper-theme-color: rgb(218, 214, 214);
      /* --swiper-pagination-color: #00ff33; 两种都可以 */

      width: 90%;
      height: p2r(280);
      .swiper-wrapper {
        width: 90%;
        height: p2r(280);
        //  position: relative;
        .swiper-slide {
          width: 100%;
          height: p2r(280);

          img {
            box-sizing: border-box;
            border-radius: p2r(10);
            padding: p2r(4) 0;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .nav {
      display: flex;
      width: 100%;
      height: p2r(200);
      img {
        flex: 1;
        height: p2r(200);
        width: 33%;
      }
    }

    .swiper2 {
      width: 90%;
      margin-left: 5%;
      // margin-top: p2r(20);

      .swiper-wrapper {
        width: 90%;
        margin-top: p2r(20);

        .swiper-slide {
          width: 100%;
          height: p2r(220);
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          align-items: center;
          border-radius: p2r(10);
          height: p2r(240);
          background: white;

          div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 17%;
            height: p2r(120);
            font-size: p2r(28);
            img {
              width: p2r(60);
              height: p2r(60);
            }
            span {
              font-size: p2r(24);
            }
          }
        }
      }
    }
  }

  .seckill {
    width: 90%;
    height: p2r(240);
    margin-left: 5%;
    margin-top: p2r(10);
    padding: p2r(10) 0;
    background: white;
    border-radius: p2r(10);
    margin-bottom: p2r(10);

    .head {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 90%;
      height: p2r(36);
      font-size: p2r(26);
      .time {
        display: flex;
        align-items: center;
        height: 100%;
        border: 1px solid red;
        border-radius: p2r(14);
        margin-left: p2r(-30);
        .time1 {
          height: 100%;
          box-sizing: border-box;
          border-radius: p2r(10);
          margin-right: p2r(10);
          border: none;
          background: red;
          font-size: p2r(24);
          color: white;
          padding: p2r(6) p2r(4);
        }
        .down {
          font-size: p2r(24);
          font-weight: 800;
          color: red;
        }
      }
      .more {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: p2r(-60);
        color: red;
        font-size: p2r(24);
        .more2 {
          display: block;
          width: p2r(24);
          height: p2r(24);
          text-align: center;
          border-radius: 50%;
          background: red;
          color: white;
        }
      }
    }
    .content {
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      margin-top: p2r(20);
      .content-list {
        font-size: 0;
        height: p2r(200);
        float: left;

        .detail {
          display: inline-block;
          width: p2r(120);
          height: p2r(200);

          img {
            width: p2r(100);
            height: p2r(100);
          }
          .new {
            display: block;
            font-size: p2r(24);
            color: red;
            font-weight: 800;
            margin-top: p2r(10);
          }
          .old {
            display: block;

            font-size: p2r(26);
            color: gray;
            margin-top: p2r(4);
            text-decoration: line-through;
          }
        }
        .detail-all {
          vertical-align: text-bottom;
          display: inline-block;

          font-size: 0;
          background: #cccccc;
          .all1 {
            display: block;

            width: p2r(24);
            height: p2r(24);
            font-size: p2r(24);
            text-align: center;
            border-radius: 50%;
            background: red;
            color: white;
            transform: rotate(-180deg);
          }
          .all2 {
            display: block;
            width: p2r(22);
            writing-mode: tb-rl;
            font-size: p2r(20);
            color: #a09d9d;
          }
        }
      }
    }
  }
  .nav1 {
    width: 90%;
    margin-left: 5%;
    .swiper-wrapper {
      width: 100%;
      // height: p2r(140);
      display: flex;
      align-items: center;

      .swiper-slide {
        width: 33%;
        height: p2r(140);
        position: relative;

        img {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .nav2 {
    width: 90%;
    margin-left: 5%;
    margin-top: p2r(20);
    .swiper-wrapper {
      white-space: nowrap;
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 100%;
      height: p2r(160);
      font-size: p2r(24);
      .detail1 {
        position: relative;
        text-align: center;
        img:first-of-type {
          position: absolute;
          left: 0;
          top: 0;
        }
        img:nth-of-type(2) {
          position: absolute;
          top: p2r(4);
          left: p2r(4);
          border-radius: p2r(18);
        }
        .desc {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 93%;

          font-size: p2r(26);
          color: red;
        }
        .promotion {
          font-size: p2r(24);
          color: white;
          position: absolute;
          bottom: 25%;
          left: p2r(4);
          width: 93%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          height: p2r(28);
          background: rgba(0, 0, 0, 0.6);
          border-radius: p2r(10);
        }
      }
      .detail1:nth-child(2n + 1) {
        width: 22%;
        height: p2r(160);
        margin-right: p2r(10);
        img:nth-of-type(2) {
          width: 94%;
          height: p2r(120);
        }
        img:first-of-type {
          width: 100%;
          height: p2r(160);
        }
      }
      .detail1:nth-child(2n) {
        width: 20%;
        height: p2r(120);
        margin-right: p2r(10);
        margin-top: 4%;
        img:nth-of-type(2) {
          width: 94%;
          height: p2r(90);
        }
        img:first-of-type {
          width: 100%;
          height: p2r(120);
        }
      }
      .detail1:first-of-type {
        margin-left: p2r(616);
      }
    }
  }
  .peasant {
    width: 100%;
    height: 0.3rem;
    font-size: 0;
    background: #f6f6f6;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .peasant-details {
    display: flex;
    width: 90%;
    margin-left: 5%;
    justify-content: space-around;
    flex-wrap: wrap;
    font-size: p2r(28);
    background: white;

    .in {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      padding-bottom: p2r(20);
      width: 25%;
      padding-top: p2r(20);
      position: relative;
      box-sizing: border-box;

      span {
        display: block;
      }
      .title {
        font-size: 0.13rem;
        color: #00ccff;
        font-weight: 800;
        display: inline-block;
        margin-bottom: p2r(8);
      }
      .des {
        font-size: 0.1rem;
        color: #999999;
      }
      img {
        margin-top: p2r(14);
        width: 0.5rem;
        height: 0.5rem;
      }
    }
  }
  .day {
    width: 100%;
    height: 0.3rem;
    margin-top: p2r(20);
    font-size: 0;
    background: #f6f6f6;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .day-details {
    font-size: p2r(28);
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    margin-left: 5%;
    background: white;
    .items {
      width: 25%;
      @include borderRight-1px(#dbd8d879);
      @include borderBottom-1px(#dbd8d879);
      padding-top: p2r(10);
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        width: 0.5rem;
        height: 0.5rem;
      }
      span:first-of-type {
        font-size: 0.13rem;
        font-weight: 800;
        color: #ff66cc;
        display: inline-block;
        margin-bottom: p2r(8);
      }
      span:nth-of-type(2) {
        text-align: center;
        display: inline-block;
        font-size: 0.1rem;
        color: #999999;
        width: 95%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .items:nth-of-type(4n)::after {
      height: 0;
    }
  }
  .recommend {
    width: 100%;
    height: 0.3rem;
    margin-top: p2r(20);
    text-align: center;
    background: white;
    font-size: 0;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .recommend-details {
    width: 90%;
    margin-left: 5%;
    margin-top: p2r(6);
    margin-bottom: p2r(4);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background: white;
    .recommend-items {
      width: 48%;
      font-size: p2r(28);
      position: relative;
      margin-bottom: p2r(60);

      img {
        width: 100%;
        height: 70%;
      }
      .purchase {
        display: block;
        position: absolute;
        top: 60%;
        left: 0;
        width: 100%;
        height: 0.2rem;
        background: rgba(255, 64, 64, 0.6);
        text-align: center;
        color: white;
        font-size: 0.12rem;
        line-height: 0.2rem;
      }

      .desc {
        box-sizing: border-box;
        font-size: p2r(26);
        height: p2r(62);
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        // 设置数字的省略号
        word-break: break-all;

        color: #232326;
        margin-top: p2r(10);
        line-height: p2r(32);
        margin-bottom: p2r(12);
        padding: 0 p2r(8);

        img {
          width: p2r(72);
          height: p2r(28);
        }
      }
      .new {
        font-size: p2r(24);
        color: red;
        padding: 0 p2r(8);
        font-weight: 800;

        .newPrice {
          font-size: p2r(28);
          color: red;
          font-weight: 800;
        }
      }
      .reduce {
        display: inline-block;
        text-align: center;
        font-size: p2r(24);
        width: p2r(56);
        border: 1px solid red;
        color: red;
      }
      .similarity {
        display: inline-block;
        width: p2r(96);
        height: p2r(36);
        text-align: center;
        line-height: p2r(36);
        font-size: p2r(26);
        color: #999999;
        border: 1px solid #cccccc;
      }
      .old {
        display: block;
        font-size: p2r(24);
        text-decoration: line-through;
        font-weight: 800;
        color: #999999;
        padding-left: p2r(8);
        margin-top: p2r(10);
      }
    }
  }
}
</style>
 