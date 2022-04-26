import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
import { MessageBox } from 'element-ui'
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination)
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
import router from '@/router'
import * as API from '@/api'
import "@/plugins/validate";
import store from '@/store'
import '@/mock/mockServe'
import 'swiper/css/swiper.css'
new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  render: h => h(App),
  router,
  store
}).$mount('#app')
