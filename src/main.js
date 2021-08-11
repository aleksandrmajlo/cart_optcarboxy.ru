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

// ***************************************************************************
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2);
// ***************************************************************************


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
      this.$store.commit('addCart', id);
      this.$swal.fire({
        title: '<strong>Товар добавлен в корзину</strong>',
        type: 'info',
        timer: 2500
      })
      yaCounter51660950.reachGoal('zakaz');
      gtag('event', 'zayavka1', {
        'event_category': 'form',
        'event_action': 'zakaz'
      });
      console.log(22222)

    },
    hiddenForm() {
      this.$store.commit('show_hideForm');
    },
    ShowHiddenFormLead() {
      this.$store.commit('show_hideFormLead');
    }
  },

})