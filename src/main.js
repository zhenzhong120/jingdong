// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios"
import "./common/font1/iconfont.css"
import "./common/font/iconfont.css"
import "./common/css/reset.css"
import "./././assets/swiper/swiper.min.js"
import "./././assets/swiper/swiper.css";

Vue.prototype.axios = axios;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
 1231231231 template: '<App/>'
})
