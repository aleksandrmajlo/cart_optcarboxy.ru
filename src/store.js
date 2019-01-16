import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    disabled: false,
    product: PRODUCT,
    cart: [],

    showForm: false
  },
  getters: {
    doneCart: state => {
      return state.cart;
    },
    countTotal: state => {
      let i = 0;
      state.cart.forEach(el => {
        i += parseInt(el.count);
      });
      return i;
    },
    Total: state => {
      let total = 0;
      state.cart.forEach(el => {
        total += parseInt(el.count) * el.price;
      });
      return total;
    },

    orderDetails: state => {
      let str = "";
      state.cart.forEach(el => {
           str+=el.name+ " -"+el.count+" шт.; "
      });
      return str;
    },

    orderDetails2: state => {
      //{"customerContact": "+79001231212","taxSystem": 1, "items":[
        // { "quantity": 1.154,
        //   "price": {"amount": 300.23},
        //   "tax": 3,
        //    "text": "Зеленый чай \"Юн Ву\", кг",
        //    "paymentMethodType": "full_prepayment ",
        //     "paymentSubjectType": "commodity"
        // },{
        // "quantity": 2,
        // "price": {"amount": 200.00},
        // "tax": 3,
        // "text": "Кружка для чая, шт., скидка 10%",
        // "paymentMethodType": "full_prepayment ","paymentSubjectType": "commodity"}]}

       let data = {
           "customerContact":"guerisson@yandex.ru",
           // "taxSystem": 1,
           "items":[]

       };
      state.cart.forEach(el => {
          data.items.push(
              {
                  "quantity":el.count,
                  "price":{"amount": el.price},
                  "text": el.name,
                  "tax": 1,
              }

          )
      });
      return JSON.stringify(data);
    },



  },
  mutations: {
    addCart(state, id) {
      let inCart = false;

      if (state.cart.length > 0) {
        state.cart.forEach(el => {
          if (el.id === id) {
            inCart = true;
            this.commit("setCount", { id: el.id });
            return true;
          }
        });
      }

      if (!inCart) {
        for (let index = 0; index < state.product.length; index++) {
          const el = state.product[index];
          if (el.id == id) {
            el.count = 1;
            state.cart.push(el);
            break;
          }
        }
      }
    },
    show_hideCart(state) {
      state.disabled = !state.disabled;
    },
    setCount(state, data) {
      let id = data.id;
      const item = state.cart.find(item => item.id === id);
      for (let index = 0; index < state.cart.length; index++) {
        const el = state.cart[index];
        if (el.id === id) {
          let count = 0;
          if (typeof data.count == "undefined") {
            count = item.count + 1;
          } else {
            count = parseInt(data.count);
          }
          state.cart.splice(index, 1, {
            count: count,
            name: item.name,
            id: item.id,
            price: item.price,
            photo: item.photo
          });
          break;
        }
      }
    },

    // удаление с корзины
    remove(state, index) {
      state.cart.splice(index, 1);
    },
    // скрыть показать форму
    show_hideForm(state) {
      state.showForm = !state.showForm;
    }
  },
  actions: {}
});
