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
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img
              class="opa1"
              src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/129069/22/13128/127600/5f684ec0Ed2c79db3/90d9b73b47232538.jpg!q70.jpg.dpg"
            />
          </div>
          <div class="swiper-slide">
            <img
              class="opa1"
              src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/124761/18/8378/72718/5f23f9e9E8bc3807f/a464df1c3a25ed8a.jpg!cr_1125x445_0_171!q70.jpg.dpg"
            />
          </div>
          <div class="swiper-slide">
            <img
              class="opa1"
              src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/138444/8/7488/70564/5f506275Eecdb8a3c/1810defe5060fd9b.jpg!q70.jpg.dpg"
            />
          </div>
          <div class="swiper-slide">
            <img
              class="opa1"
              src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/118776/2/18247/68416/5f66e701E94291ff9/3f4be293eb1c1dfa.jpg!q70.jpg.dpg"
            />
          </div>
          <div class="swiper-slide">
            <img
              onerror="__reloadResource(this)"
              class="opa1"
              observing="1"
              src="//imgcps.jd.com/ling4/72070930252/6Z2i6YOo5oqk6IKk5LyY5ZOB6LSt/5aSp5aSp5pyJ54m55Lu3/p-5c13515d82acdd181dcbdc39/2f82b513/cr_1125x445_0_171/s1125x690/q70.jpg"
            />
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>

          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>

          <!-- 如果需要滚动条 -->
          <div class="swiper-scrollbar"></div>
        </div>
      </div>
      <div class="nav">
        <img
          src="//m.360buyimg.com/mobilecms/s250x200_jfs/t1/154348/12/140/133813/5f633e72Ef83a03be/cf47bceb5c0534cc.jpg!q70.jpg.dpg"
          class="opa1"
        />
        <img
          src="//m.360buyimg.com/mobilecms/s250x200_jfs/t1/111142/10/17541/142062/5f633e9eEe3124d15/cea009fb57b79847.jpg!q70.jpg.dpg"
          class="opa1"
        />
        <img
          src="//m.360buyimg.com/mobilecms/s250x200_jfs/t1/125250/3/12828/136367/5f633ec6E84127a5b/bfd0e1cede6d7a60.jpg!q70.jpg.dpg"
          class="opa1"
        />
      </div>
      <div class="partition">
        <div class="shop">
          <img
            onerror="__reloadResource(this)"
            onload="firstImgLoaded()"
            src="//m.360buyimg.com/mobilecms/s120x120_jfs/t1/125678/35/5947/4868/5efbf28cEbf04a25a/e2bcc411170524f0.png.webp"
          />
          <span>京东超市</span>
        </div>
        <div class="electric">
          <img
            onerror="__reloadResource(this)"
            onload="firstImgLoaded()"
            src="//m.360buyimg.com/mobilecms/s120x120_jfs/t1/135931/4/3281/5598/5efbf2c0Edbdc82c7/ed9861b4ddfb9f30.png.webp"
          />
          <span>数码电器</span>
        </div>
        <div class="costume">
          <img
            onerror="__reloadResource(this)"
            onload="firstImgLoaded()"
            src="//m.360buyimg.com/mobilecms/s120x120_jfs/t1/140012/8/1804/3641/5efbf318E38bd5dad/0db99d859ab16ce9.png.webp"
          />
          <span>京东服饰</span>
        </div>
        <div class="fresh">
          <img
            onerror="__reloadResource(this)"
            onload="firstImgLoaded()"
            src="//m.360buyimg.com/mobilecms/s120x120_jfs/t1/129215/21/5978/3618/5efbf344Ebec23ae8/59712d986b10bb0a.png.webp"
          />
          <span>京东生鲜</span>
        </div>
        <div class="delivery">
          <img
            onerror="__reloadResource(this)"
            onload="firstImgLoaded()"
            src="//m.360buyimg.com/mobilecms/s120x120_jfs/t1/116602/7/11200/3796/5efbf375Ebba41029/f07cc166f368fa05.png.webp"
          />
          <span>京东到家</span>
        </div>
        <div class="payment">
          <img
            onerror="__reloadResource(this)"
            onload="firstImgLoaded()"
            src="//m.360buyimg.com/mobilecms/s120x120_jfs/t1/146390/3/1846/4909/5efbf39aEe5f5f797/300071558a9ab078.png.webp"
          />
          <span>充值缴费</span>
        </div>
        <div class="join">
          <img
            onerror="__reloadResource(this)"
            onload="firstImgLoaded()"
            src="//m.360buyimg.com/mobilecms/s120x120_jfs/t1/143365/25/1824/3716/5efbf3c0E5175e1fb/88f6227257a29f1d.png.webp"
          />
          <span>9.9拼</span>
        </div>
        <div class="ticket">
          <img
            onerror="__reloadResource(this)"
            onload="firstImgLoaded()"
            src="//m.360buyimg.com/mobilecms/s120x120_jfs/t1/113589/24/11332/4897/5efbf3feE705d87db/e5c12d5e943266b9.png.webp"
          />
          <span>领券</span>
        </div>
        <div class="money">
          <img
            onerror="__reloadResource(this)"
            onload="firstImgLoaded()"
            src="//m.360buyimg.com/mobilecms/s120x120_jfs/t1/129184/28/5977/3711/5efbf53aE2c2e6a07/7db529ce0e00838f.png.webp"
          />
          <span>借钱</span>
        </div>
        <div class="member">
          <img
            onerror="__reloadResource(this)"
            onload="firstImgLoaded()"
            src="//m.360buyimg.com/mobilecms/s120x120_jfs/t1/123730/37/5924/4189/5efbf567E0a226121/d04df7c74c87cf68.png.webp"
          />
          <span>会员</span>
        </div>
      </div>
    </div>
    <div class="seckill">
      <div class="head">
        <span class="title">京东秒杀</span>
        <div class="time">
          <span class="time1">20点场</span>
          <span class="down">01:42:56</span>
        </div>
        <div class="more">
          <span class="more1">更多秒杀</span>
          <span class="more2">></span>
        </div>
      </div>
      <div class="content">
        <div class="detail">
          <img
            onerror="__reloadResource(this)"
            src="//img10.360buyimg.com/n7/s150x150_jfs/t1/138021/26/8700/125896/5f61c970Eaf071742/bee6d32ce0279fe4.jpg.dpg"
            class="seckill-photo"
          />
          <span class="new">
            ￥
            <span>199</span>
          </span>
          <span class="old">
            ￥
            <span>399</span>
          </span>
        </div>
        <div class="detail">
          <img
            onerror="__reloadResource(this)"
            src="//img10.360buyimg.com/n7/s150x150_jfs/t1/128946/38/12742/177590/5f61d85dEff20a5d1/d319b5713d8c434c.jpg.dpg"
            class="seckill-photo"
          />
          <span class="new">
            ￥
            <span>99</span>
          </span>
          <span class="old">
            ￥
            <span>139</span>
          </span>
        </div>
        <div class="detail">
          <img
            onerror="__reloadResource(this)"
            src="//img10.360buyimg.com/n7/s150x150_jfs/t1/153789/14/85/105976/5f62cda9E40fc8c0b/5c5f595503626101.jpg.dpg"
            class="seckill-photo"
          />
          <span class="new">
            ￥
            <span>109</span>
          </span>
          <span class="old">
            ￥
            <span>126</span>
          </span>
        </div>
        <div class="detail">
          <img
            onerror="__reloadResource(this)"
            src="//img10.360buyimg.com/n7/s150x150_jfs/t1/131832/32/10222/138292/5f644d22E37068b46/f2d59616e576bd54.jpg.dpg"
            class="seckill-photo"
          />
          <span class="new">
            ￥
            <span>309</span>
          </span>
          <span class="old">
            ￥
            <span>399</span>
          </span>
        </div>
        <div class="detail">
          <img
            onerror="__reloadResource(this)"
            src="//img10.360buyimg.com/n7/s150x150_jfs/t1/117760/7/18024/192653/5f61ef72Ee47bd223/90b86ca654be291a.jpg.dpg"
            class="seckill-photo"
          />
          <span class="new">
            ￥
            <span>584</span>
          </span>
          <span class="old">
            ￥
            <span>655</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  methods: {
    //初始化swiper插件
    _initSwiper() {
      var mySwiper = new Swiper(".swiper-container", {
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        autoplay: true, //可选选项，自动滑动
        speed: 300,
        autoplay: {
          delay: 200,
          disableOnInteraction: false,
        },
        direction: "horizontal", //水平切换
        loop: true, // 循环模式选项
        // 如果需要分页器
        // pagination: {
        //   el: ".swiper-pagination",
        // },

        // 如果需要前进后退按钮
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
  },
  // mounted(){
  //   this._initSwiper();
  // }
  created() {
    this.$nextTick(() => {
      this._initSwiper();
    });
  },
};
</script>
<style  lang="scss" scoped>
@import "././././node_modules/swiper/swiper.scss";
.body {
  background: #cccccc;
  .header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 40px;
    background: #000033;
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
    .swiper-container {
      width: 90%;
      height: 140px;
      .swiper-wrapper {
        width: 90%;
        height: 140px;
        .swiper-slide {
          width: 100%;
          height: 140px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .nav {
      display: flex;
      width: 100%;
      height: 100px;
      img {
        flex: 1;
        height: 100px;
        width: 33%;
      }
    }
    .partition {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
      width: 90%;
      margin-left: 5%;
      margin-top: 5px;
      border-radius: 5px;
      height: 120px;
      background: white;
      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 17%;
        height: 60px;
        font-size: 14px;
        // border:1px solid blue;
        img {
          width: 30px;
          height: 30px;
        }
        span {
          font-size: 12px;
        }
      }
    }
  }
  .seckill {
    width: 90%;
    height: 120px;
    margin-left: 5%;
    margin-top: 5px;
    padding: 5px 0;
    background: white;
    border-radius: 5px;
    .head {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 90%;
      height: 18px;
      font-size: 13px;
      .time {
        display: flex;
        align-items: center;
        height: 100%;
        border: 1px solid red;
        border-radius: 7px;
        margin-left: -15px;
        .time1 {
          height: 100%;
          box-sizing: border-box;
          border-radius: 5px;
          margin-right: 5px;
          border: none;
          background: red;
          font-size: 12px;
          color: white;
          padding: 3px 2px;
        }
        .down {
          font-size: 12px;
          font-weight: 800;
          color: red;
        }
      }
      .more {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: -30px;
        color: red;
        font-size: 12px;
        .more2 {
          display: block;
          width: 12px;
          height: 12px;
          text-align: center;
          border-radius: 50%;
          background: red;
          color: white;
        }
      }
    }
    .content {
      display: flex;
      width: 100%;
      margin-top: 8px;
      overflow: hidden;
      .detail {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          width: 60px;
          height: 60px;
        }
        .new {
          font-size: 12px;
          color: red;
          font-weight: 800;
          margin-top: 5px;
        }
        .old {
          font-size: 13px;
          color: gray;
          margin-top: 2px;
          text-decoration: line-through;
        }
      }
    }
  }
}
</style>
