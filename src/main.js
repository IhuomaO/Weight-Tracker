import Vue from 'vue'
import {router} from "@/routes"
import App from './app.vue'

Vue.config.productionTip = false

new Vue ({
  el: "#app",
  router,
  render: h => h(App)
})




