<template>
    <div class="product_block">
        <div class="product" v-for="(product,index) in products" :key="product.id">
            <div class="block1">
                <span class="title">{{product.name}}</span>
                <span class="photo">
                   <img :src="product.photo" alt>
                </span>
                <span class="price">Цена:<strong>{{product.price}}</strong></span>
            </div>
            <div class="block2">
                <span class="count">
                    <input min="1" @input="count($event,product.id)" :value="product.count" type="number">
                </span>
                <span class="total">Итог:<strong>{{product.count*product.price }}</strong></span>
                <span class="remove">
                    <font-awesome-icon @click="trash(index)" icon="trash-alt"></font-awesome-icon>
                </span>
            </div>
        </div>
        <div class="alltotal">К оплате: <strong>{{$store.getters.Total}}</strong></div>
    </div>
</template>
<script>
    export default {
        data() {
            return {};
        },
        computed: {
            products() {
                 return this.$store.getters.doneCart;
            },
           
        },
        methods: {
            count(event,id){
                let count=event.target.value;
                this.$store.commit('setCount',{id:id,count:count})
            },
            trash(index) {
                this.$store.commit('remove',index)
            }
        }
    };
</script>
<style lang="scss" scoped>
    .product {
        background-color: #fff;
        box-shadow: 0 0 10px rgba(73, 74, 78, 0.1);
        border-radius: 5px;
        margin-bottom: 10px;
        box-sizing: border-box;
        padding: 10px;
        padding-bottom: 30px;
        font-size: 14px;
        .block1, .block2 {
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin-bottom: 10px;
            span {
                display: block;
                padding-left: 5px;
                padding-right: 5px;
            }
        }
        span.title {
            font-weight: bold;
        }
        span.photo {
            img {
                max-width: 50px;
                height: auto;
            }
        }
        span.count {
            max-width: 100px;
            input {
                width: 100%;
                text-align: center;
            }
        }
        span.remove{
             cursor:pointer;
        }
    }
</style>


