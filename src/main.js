import Vue from'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueMoment from 'vue-moment'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as uiv from 'uiv'
import infiniteScroll from 'vue-infinite-scroll'

var VueTruncate = require('vue-truncate-filter')

Vue.use(VueTruncate)
Vue.use(infiniteScroll)
Vue.use(uiv)
Vue.use(VueResource);
Vue.use(require('vue-moment'));

new Vue({
	el:'#app',
	render: h => h(App)
})
