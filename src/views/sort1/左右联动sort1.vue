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
      <div class="menu-wrapper">
        <ul>
          <li class="menu-item" v-for="item in category">
            <span id="text">{{item.name}}</span>
          </li>
        
        </ul>
      </div>
      <div class="content-wrapper">
        <ul v-for="item in category">
          <!-- food-list-hook表明被js选中的样式，并无实际效果 -->
          <li class="content-list content-list-hook" v-for="item1 in item.goods" >
            <div class="caption">
              <h1 class="title">{{item1.caption.title}}</h1>
              <div class="symbol">
                <span :class="item1.caption.icon"></span>
                <span class="clear">{{item1.caption.clear}}</span>
                <span class="detail">{{item1.caption.detail}}</span>
              </div>
            </div>
            <ul>
              <li class="content-item" v-for="item2 in item1.contentItem">
                <img
                  :src="item2.pic"
                  id="Imglazyload718"
                />
                <span class="name">{{item2.contentName}}</span>
              </li>
             
            </ul>
          </li>
       
        </ul>
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
      category:[]
    };
  },

  components: {
    Footer,
  },

  computed: {},
  created(){
this.axios({method:"get",url:"http://localhost:3000/category"}).then((response) => {
  this.category = response.data;
})
  },

  methods: {},
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
  font-size: p2r(28);
  margin-top: 41px;
  .menu-wrapper {
    width: p2r(160);
    background: rgb(245, 245, 245);

    ul {
      width: p2r(160);
      li {
        width: p2r(160);
        height: p2r(90);
        text-align: center;
        line-height: p2r(90);
        span {
          font-size: p2r(28);
        }
      }
    }
  }
  .content-wrapper {
    flex: 1;
    ul {
      width: 100%;
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
            font-size:p2r(28);
            font-weight: 800;
          }
          div{
              
              span:not(:nth-of-type(1)){
                  font-size:p2r(24);
              }
          }
        }
        ul {
          width: 100%;
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
  }
}
</style>