<template>
<div class=" m-0" >
<nav class="navbar navbar-expand-lg">

    <ul class="navbar-nav ml-auto">
      <li class="nav-item " >
        <a class="nav-link" ><i class="icon ion-md-cart"></i> Cart ({{ cart.items.length}}) </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" ><i class="icon ion-md-cash"></i> Payment: N {{ cartTotal }}</a>
      </li>
      
      <li class="nav-item">
        <a class="nav-link chk"  v-on:click="showCart = true" ><i class="icon ion-md-wallet"></i> Checkout</a>
      </li>
    </ul>
    
</nav>
 
  <div class="container-fluid" >
      <div class="row" >
        <!-- <div class="col-lg-12" >
            <p>{{ cart.items.length}} <template v-if="cart.items.length == 1">item</template> <template v-else>items</template> in cart</p>
            <p>Payment: N{{ cartTotal }}</p>
            <button class="btn btn-info" v-on:click="showCart = true" >Checkout</button>
        </div> -->
        <div v-if="!showCart" class="col-lg-3 col-md-6 col-xs-12 p-3" v-for="product in products" :key="products.indexOf(product)"  >
            <div class="card ecard">
            <img class="card-img-top"
            :src="product.src" 
            
            >
            <div class="card-body">
                <div class="card-title" ><b>{{ product.name}}</b></div>
                <div class="card-text" ><small>{{ product.description}}</small></div>
                <a class="card-link" ><small>{{ product.price }} | </small></a>
                <a class="card-link ml-auto" :class="{lil: product.inStore < 10, none: product.inStore == 0}" ><small>{{ product.inStore }} <template v-if="product.inStore == 1">piece</template> <template v-else>pieces</template> left </small></a>
                <div class="card-text" >
                <a class="btn btn-add my-2" v-on:click="addProductsToCart(product)" :disable="product.inStore == 0" ><i class="icon ion-md-basket"></i> <small> ADD TO CART</small></a>
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
                    <div class="col-lg-12 table-responsive" >
                        <table class="table table-striped " v-if="cart.items.length >= 1">
                        <thead class="">
                            <tr>
                            <th scope="col">Product</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in cart.items">
                            <td class="my-2">{{ item.product.name }}</td>
                            <td class="my-2">{{ item.quantity }}</td>
                            <td class="my-2">{{ item.quantity * item.product.price }}</td>
                            </tr>
                            <tr>
                            <td colspan="2" >
                                <b>Sub Total</b>
                            </td>
                            <td>{{ cartTotal }}</td>
                            </tr>
                            <tr>
                            <td colspan="2" >
                                <b>Tax</b>
                            </td>
                            <td>{{ taxes }}</td>
                            </tr>
                            <tr>
                            <td colspan="2" >
                                <b>Grand Total</b>
                            </td>
                            <td>{{ grandTotal }}</td>
                            </tr>
                        </tbody>
                        </table>
                        <p class="text-center" v-else>
                            You currently have no items in your cart.
                        </p>
                    </div>
                </div>
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
                {
                    name: 'Samsung S8',
                    description: '3gb ram, 128gb memory, 3000maH battery',
                    price: 155000,
                    src:[require('@/assets/img/3 (6).jpg')],
                    inStore: 22
                },
                {
                    name: 'Huawei A2',
                    description: '4gb ram, 128gb memory, 3000maH battery',
                    price: 300000,
                    src: [require('@/assets/img/3 (8).jpg')],
                    inStore: 15
                },
                {
                    name: 'Iphone Xs',
                    description: '3gb ram, 128gb memory, 3000maH battery',
                    price: 155000,
                    src:[require('@/assets/img/3 (9).jpg')],
                    inStore: 24
                },
                {
                    name: 'Iphone Xs+',
                    description: '4gb ram, 128gb memory, 3000maH battery',
                    price: 300000,
                    src: [require('@/assets/img/3 (10).jpg')],
                    inStore: 12
                },
                // {
                //     name: 'Iphone 9s',
                //     description: '3gb ram, 128gb memory, 3000maH battery',
                //     price: 155000,
                //     src:[require('@/assets/img/3 (7).jpg')],
                //     inStore: 22
                // },
                // {
                //     name: 'Iphone 8s+',
                //     description: '4gb ram, 128gb memory, 3000maH battery',
                //     price: 300000,
                //     src: [require('@/assets/img/3 (5).jpg')],
                //     inStore: 1
                // },
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
        },
        
    },
    computed: {
        cartTotal: function(){
            var Total = 0;
            this.cart.items.forEach(function(item){
                Total += item.quantity * item.product.price;
            });
            return Total;
        },
        taxes: function(){
            return this.cartTotal * 0.2;
        },
        grandTotal: function(){
            return this.taxes + this.cartTotal;
        }
    },
}
</script>
<style >
a.ml-auto.lil{
    color: yellow;
}
a.ml-auto.none{
    color: red;
}

</style>