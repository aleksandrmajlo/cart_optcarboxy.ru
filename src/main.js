import Vue from 'vue'
// import App from './App.vue'
import cart from './Cart.vue'
import FormLead from './components/FormLead.vue'
import store from './store'

import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  faSpinner,
  faTimesCircle,
  faTrashAlt
} from '@fortawesome/free-solid-svg-icons'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'
library.add(faSpinner, faTimesCircle, faTrashAlt)
Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false

new Vue({
  el: "#cart",
  store,
  components: {
    cart,
    FormLead
  },

  mounted() {

  },
  methods: {
    addCart(id) {
      this.$store.commit('addCart', id)
    },
    hiddenForm() {
      this.$store.commit('show_hideForm');
    },
    ShowHiddenFormLead() {
      this.$store.commit('show_hideFormLead');
    }
  },

})