import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import print from './print/index.js'
import global from './global/index'
// import myInfo from './myInfo/index.js'
// import user from './userInfo/index.js'



export default new Vuex.Store({
	modules: {
		global,
		print
	}
})
