<template>
<div class="container-fluid bod m-0" >
    <div class="row" >
      <div class="col-lg-12" >
          <p>{{ cart.items.length}} <template v-if="cart.items.length == 1">item</template> <template v-else>items</template> in cart</p>
          <p>Payment: N{{ cartTotal }}</p>
          <button class="btn btn-info" v-on:click="showCart = true" >Checkout</button>
      </div>
      <div v-if="!showCart" class="col-lg-4 col-md-6 col-xs-12 mt-3" v-for="product in products" >
        <div class="card">
          <img class="card-img-top"
          :src="product.src" 
          
          >
          <div class="card-body">
            <div class="card-title" ><b>{{ product.name}}</b></div>
            <div class="card-text" ><small>{{ product.description}}</small></div>
            <a class="card-link" ><small>{{ product.price }} | </small></a>
            <a class="card-link ml-auto" :class="{lil: product.inStore < 10, none: product.inStore == 0}" ><small>{{ product.inStore }} <template v-if="product.inStore == 1">piece</template> <template v-else>pieces</template> left </small></a>
            <div class="card-text" >
              <a class="btn btn-info my-2" v-on:click="addProductsToCart(product)" :disable="product.inStore == 0" ><small>ADD TO CART</small></a>
            </div>
          </div>
        
        </div>
      </div>
      
      <div class="col-lg-12" v-else>
          <div class="container" >
              <div class="row" >
                <div class="col-lg-12" >
                  <button class="btn btn-info" v-on:click="showCart = false" ><small>GO BACK </small></button>
                </div>
                <div class="col-lg-12" ></div>
              </div>
          </div>
      </div>
    </div>
</div>
</template>
<script>
export default {
    data (){
        return{
            showCart: false,
            cart: {
                items: []
            },
            products: [
                {
                    name: 'Iphone 6s',
                    description: '2gb ram, 64gb memory, 2000maH battery',
                    price: 110000,
                    src:[require('@/assets/img/3 (1).jpg')],
                    inStore: 10
                },
                {
                    name: 'Iphone 6s+',
                    description: '3gb ram, 128gb memory, 3000maH battery',
                    price: 155000,
                    src: [require('@/assets/img/3 (2).jpg')],
                    inStore: 5
                },
                {
                    name: 'Iphone 7s+',
                    description: '3gb ram, 128gb memory, 3000maH battery',
                    price: 255000,
                    src:[require('@/assets/img/3 (3).jpg')],
                    inStore: 2
                },
                {
                    name: 'Iphone 8s',
                    description: '3gb ram, 128gb memory, 3000maH battery',
                    price: 155000,
                    src:[require('@/assets/img/3 (4).jpg')],
                    inStore: 2
                },
                {
                    name: 'Iphone 8s+',
                    description: '4gb ram, 128gb memory, 3000maH battery',
                    price: 300000,
                    src: [require('@/assets/img/3 (5).jpg')],
                    inStore: 1
                },
            ]
        }
    },
    methods: {
        addProductsToCart(product){
            this.cart.items.push({
                product: product,
                quantity: 1
            });
            product.inStore--;
        }
    },
    computed: {
        cartTotal: function(){
            var Total = 0;
            this.cart.items.forEach(function(item){
                Total += item.quantity * item.product.price;
            });
            return Total;
        }
    },
}
</script>
<style>
a.ml-auto.lil{
    color: yellow;
}
a.ml-auto.none{
    color: red;
}
</style>