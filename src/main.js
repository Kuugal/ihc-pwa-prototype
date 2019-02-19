import Vue from "vue";
import './plugins/vuetify'
import App from "./App.vue";
import Home from "./Home.vue";
import "./registerServiceWorker";
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'
import router from './router'

Vue.config.productionTip = false;

new Vue({
  router,

  render: function(h) {
    return h(Home);
  }
}).$mount("#app");
