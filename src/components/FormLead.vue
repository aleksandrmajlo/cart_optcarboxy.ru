<template>
  <div class="form_lead_container">
    <form @submit.prevent="checkForm">
      <div class="form_wrap">
        <label>Имя покупателя</label>
        <input required name="custName" v-model="form.name" value>
      </div>
      <div class="form_wrap">
        <label>Телефон покупателя</label>
        <input required name="customerNumber" id="phoneLead" type="tel" value>
      </div>
      <div class="form_wrap">
        <label>Эл. почта покупателя</label>
        <input name="custEmail" type="email" v-model="form.email" value>
      </div>

      <div class="form_wrap">
        <label>Адрес доставки</label>
        <input name="custAddr" v-model="form.address" value size="64">
      </div>
      <input type="submit" :disabled="disabled" value="Рассчитать">
    </form>

    <div class="suc" v-if="suc">
      <h2>
        Спасибо!!!
        <br>Ваша заявка получена.
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      suc: false,
      disabled: false,
      form: {
        phone: "",
        name: "",
        email: "",
        address: ""
      }
    };
  },
  mounted() {
    $("#phoneLead").mask("+7?(999)999-99-99");
  },
  methods: {
    checkForm(e) {
      e.preventDefault;
      let self = this;
      this.disabled = true;
      let phone = $("#phoneLead").val(),
        data = {
          phone: phone,
          name: this.form.name,
          email: this.form.email,
          address: this.form.address
        };
      $.ajax({
        url: "/mail.php",
        type: "POST",
        data: data
      })
        .done(function() {
          console.log("success");
        })
        .fail(function() {
          console.log("error");
        })
        .always(function() {
          self.disabled = false;
          self.suc = true;
          setTimeout(() => {
            self.suc = false;
          }, 4000);
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.form_lead_container {
  .suc {
    h2 {
      text-align: center;
      color: rgb(111, 168, 178);
      font-family: "Roboto";
    }
  }
}
</style>


