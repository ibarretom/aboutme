import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/home',
			name: 'Home',
			component: () => 
			import(/* webpackChunkName: "home" */ './views/Home.vue')
		},
		{
			path: '/',
			redirect: '/home'
		}
	]
})
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
