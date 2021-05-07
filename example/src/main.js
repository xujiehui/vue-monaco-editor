import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import HeroIcons from 'vue-heroicons'
import { cheveronDown, cheveronUp } from 'vue-heroicons/src/icons'
import './assets/scss/style.scss'

// import VueMonacoEditor from '../../src'
import VueMonacoEditor from '../../'
Vue.use(VueMonacoEditor)

HeroIcons.add([cheveronDown, cheveronUp])
Vue.use(HeroIcons)

Vue.config.productionTip = false

new Vue({
  // router,
  render: h => h(App)
}).$mount('#app')
