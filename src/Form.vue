<template>
    <div>



        <!-- Платежная форма
             Эти поля обязательные, их нельзя удалять. -->
        <form action="https://money.yandex.ru/eshop.xml" method="post">
            <input name="shopId" value="172021" type="hidden" required/>
            <input name="scid" value="705575" type="hidden" required/>

            К оплате<br>
            <input name="sum" readonly  required value="" type="number" min="1" placeholder="0.0" ><br><br>


            Имя покупателя<br>
            <input required placeholder="Имя покупателя" name="customerNumber" value="" size="64"/><br><br>


            Телефон покупателя<br>
            <input required name="custName" type="tel" value="" /><br><br>
            Эл. почта покупателя<br>
            <input name="custEmail"  type="email" value="" /><br><br>

            <input type="hidden" name="orderDetails" />

            <input type="submit" value="Заплатить">
        </form>

    </div>
</template>

<script>
    export default {
        name: "Form"
    }
</script>

<style scoped>

</style>