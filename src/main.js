/*
 * @Author: eug yyh3531@163.com
 * @Date: 2022-09-06 10:14:52
 * @LastEditors: eug yyh3531@163.com
 * @LastEditTime: 2022-09-06 18:05:34
 * @FilePath: /vue-flow/src/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

const a = '12';
console.log(a + '123');
new Vue({
  render: (h) => h(App),
}).$mount('#app');
