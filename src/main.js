import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faVuejs } from '@fortawesome/free-brands-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { dom } from '@fortawesome/fontawesome-svg-core'


library.add(fab)
library.add(faSpinner)
library.add(faVuejs)
library.add(fas)
dom.watch()
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
	routes: [
		{
			path: '/home',
			name: 'Home',
			component: () => 
			import(/* webpackChunkName: "home" */ './views/Home.vue'),
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
