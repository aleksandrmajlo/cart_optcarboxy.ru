import Vue from 'vue'
// import App from './App.vue'
import cart from './Cart.vue'
import store from './store'


import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner, faTimesCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faSpinner,faTimesCircle,faTrashAlt) 
Vue.component('font-awesome-icon', FontAwesomeIcon)

// import { dom } from '@fortawesome/fontawesome-svg-core'
// dom.watch()

Vue.config.productionTip = false

/*
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
*/
new Vue({
  el: "#cart",
  store,
  components: {cart},

  mounted() {
  
    },
  methods: {
    addCart(id){
      this.$store.commit('addCart',id)
    },
      hiddenForm(){
        this.$store.commit('show_hideForm');
      }
  },

})