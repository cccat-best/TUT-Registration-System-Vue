import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
import ElementUI from 'element-ui';
import 'ant-design-vue/dist/antd.css';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';


Vue.prototype.$axios = axios;


Vue.config.productionTip = false

Vue.use(Antd);

Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
