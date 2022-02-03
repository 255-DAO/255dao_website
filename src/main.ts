import Vue from 'vue'
import App from './App.vue'
import VueMeta from 'vue-meta'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(VueMeta)
Vue.use(ElementUI);

new Vue({
  router,
  el: '#app',
  render: h => h(App)
}).$mount('#app')
