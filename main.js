import App from './App'


import Vue from 'vue'
import store from 'store/index.js'
import uView from "uview-ui";
import interceptor from 'common/interceptor.js'
import vueRegionSlider from 'vue-region-slider'
import 'vue-region-slider/vue-region-slider/vue-region-slider.css'
import { aes_encrypt, aes_decrypt } from '@/common/aes_endecrypt.js';

Vue.use(vueRegionSlider)

Vue.use(uView);
Vue.use(interceptor)
uni.$u.config.unit = 'rpx'
uni.$u.setConfig({
	// 修改$u.config对象的属性
	config: {
		// 修改默认单位为rpx，相当于执行 uni.$u.config.unit = 'rpx'
		unit: 'rpx'
	},
	// 修改$u.props对象的属性
	props: {
		// 修改radio组件的size参数的默认值，相当于执行 uni.$u.props.radio.size = 30
		radio: {
			size: 15
		}
		// 其他组件属性配置
		// ......
	}
})
Vue.config.productionTip = false

Vue.prototype.aes_encrypt = aes_encrypt;
Vue.prototype.aes_decrypt = aes_decrypt;

App.mpType = 'app'
const app = new Vue({
    ...App,
	store
})
app.$mount()



import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
