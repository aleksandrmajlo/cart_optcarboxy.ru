<template>
    <div class="cart_conteer">

    <span v-show="!$store.state.disabled" @click="show" class="button_show_hidden">
      <span class="count">{{$store.getters.countTotal}}</span>
      <img alt="cart" src="./assets/cart.svg">
    </span>

        <div v-show="$store.state.disabled" class="cart">
      <span class="close">
        <font-awesome-icon @click="show" icon="times-circle"></font-awesome-icon>
      </span>

            <div v-if="$store.state.cart.length>0" class="item_block">
                <products></products>
                <div class="wrap_show">
                    <a class="showform"
                       @click.prevent="$store.commit('show_hideForm')"
                       href="#">Оформить</a>
                </div>
            </div>
            <div v-else class="not_product">Корзина пуста</div>
        </div>

    </div>
</template>
<script>
    import products from "./components/Products.vue";

    export default {
        components: {
            products
        },
        methods: {
            show() {
                this.$store.commit("show_hideCart");
            }
        }
    };
</script>


<style lang="scss">
    .cart_conteer {
        position: fixed;
        right: 0;
        top: 20px;
        height: 100%;
        overflow-y: auto;
        z-index: 99999;
        img {
            max-width: 100%;
            height: auto;
        }
        .button_show_hidden {
            background-color: #2d9cdb;
            display: block;
            padding: 10px;
            cursor: pointer;
            position: relative;
            display: flex;
            justify-content: space-around;
            align-items: center;
            border-bottom-left-radius: 5px;
            border-top-left-radius: 5px;
            min-width: 60px;
            img {
                max-width: 20px;
                height: auto;
                display: block;
            }
            .count {
                width: 25px;
                height: 25px;
                border-radius: 50%;
                background-color: #fff;
                color: #000;
                display: -ms-flexbox;
                display: flex;
                -ms-flex-align: center;
                align-items: center;
                -ms-flex-pack: center;
                justify-content: center;
            }
        }
        .cart {
            position: relative;
            max-width: 360px;
            width: 360px;
            box-sizing: border-box;
            padding: 20px;
            padding-top: 40px;

            height: auto;
            background-color: #fafafa;
            box-shadow: 0 0 10px rgba(73, 74, 78, 0.1);
            border-radius: 5px;
            box-sizing: border-box;
            z-index: 1;
            .close {
                position: absolute;
                top: 5px;
                right: 5px;
                cursor: pointer;
                text-align: center;
                font-size: 20px;
            }
            .not_product {
                width: 100%;
                text-align: center;
            }
        }
        .wrap_show{
            margin-top: 10px;
            text-align: center;
            .showform{
                background-color: #F57EA3;
                border: 0px #F57EA3 solid;
                border-radius: 10px;
                color:#FFFFFF;
                padding: 6px 12px;
                display: inline-block;
                text-decoration: none;
            }
        }

    }

    .form_block {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        z-index: 10000;
        background: #FFFFFF;

        .wrap_form_block {
            position: relative;
            min-width: 300px;
            -webkit-box-sizing: content-box;
            -moz-box-sizing: content-box;
            box-sizing: content-box;

            padding: 20px;
            overflow: hidden;
            border: none;

            -webkit-box-shadow: 0 0 9px 4px rgba(0, 0, 0, 0.5);
            box-shadow: 0 0 9px 4px rgba(0, 0, 0, 0.5);
            text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);

            .close {
                position: absolute;
                top: 10px;
                right: 10px;
                cursor: pointer;

            }
            .form_title{
                 text-align: center;
                 margin-bottom: 10px;
                font-weight: bold;
                font-size: 18px;
            }
            form {
                .form_wrap {
                    margin-bottom: 20px;
                    label {
                        display: block;
                        font-weight: bold;
                        margin-bottom: 10px;
                        text-align: left;
                        font-size: 16px;
                    }

                    input {
                        box-sizing: border-box;
                        min-height: 30px;
                        width: 100%;
                        border: 1px #EDE0CA solid;
                        border-radius: 20px;
                        background-color: transparent;
                        background-image: none;
                        color: #000000;
                        font-family: "Roboto";
                        font-weight: 300;
                        font-size: 16px;
                        padding: 0px 0px 0px 12px;
                        text-align: left;
                        vertical-align: middle;
                    }
                }

            }
        }
    }

    [v-cloak] {
        display: none;
    }
</style>


