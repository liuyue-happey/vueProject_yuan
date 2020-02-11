// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';

import { store } from './store/index';

// axios 
/**
 * npm i axios 先下载
 * 在文件中引入axios组件  import axios from 'axios'
 * axios.get('url',params:{}).then(res=>{}).catch(err=>{})
 * axios({
 *  url:'url',
 * method:'get'    请求的类型   get POST PUT ....
 * data:{}   请求的参数
 * })
 * 第一个参数是路径  第二个参数 是请求的参数  .then 请求成功的回调  .catch 请求失败的回调
 * 
 * vuex
 * npm i vuex 
 * 在main.js文件中引入vuex  import vuex from "vuex";
 * vue.use(vuex)
 * 创建一个store对象
 * let store = new Vuex.Store({
 * state 里面存放的是 需要保存的数据
 * state:{}
 * mutations  里面存放的是更改state数据的方法 它的第一个参数 默认是state 对象 可以直接通过state(第一个形参<自定义>).方法来进行获取  
 * mutations:{}
 * actions  里面存放的是触发mutations事件的方法  它的第一个参数是context  可以直接通过context.commit('事件名称') 进行触发mutations里面的方法
 * 触发actions里面的方法通过dispatch方法
 * })
 */



import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
});
//  路由全局守卫
// router.beforeEach((to, from, next) => {
//   console.log(to);  //去哪 保存的是将要去的页面的路由信息
//   console.log(from);  //来自哪   保存的是当前页面
//   // next()  下一步
//   let admin_token = localStorage['admin_token'];  

//   if (admin_token) {
//     next()
//   } else {
//     // 如果没有token  种情况是是在当前登录页  那就让他进行next()操作   如果不是登陆页面  那就让他跳转到登陆页面 
//     if (from.fullPath == '/') {
//       next()
//     } else {
//       console.log(router)
//       // this.$router.push({ path: '/' })
//     }

//   }



// });
