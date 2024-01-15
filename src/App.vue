<script setup>
  import { ref } from 'vue'
  import socksGreenImage from './assets/images/socks_green.jpeg'
  import socksBlueImage from './assets/images/socks_blue.jpeg'

  // create state
  const product = ref("Socks")
  const image = ref(socksGreenImage)
  const inStock = ref(true)
  // inventory was just to demonstrate v-else-if
  // const inventory = ref(8)
  const details = ref(['50% cotton', '30% wool', '20% polyester'])
  const variants = ref([
    { id: 2234, color: 'green', image: socksGreenImage },
    { id: 2235, color: 'blue', image: socksBlueImage },
  ])

  const cart = ref(0)

  //  event wrapper is still optional
  const addToCart = () => cart += 1

  const updateImage = (variantImage) => {
    image.value = variantImage
  }
</script>

<template>
 <div class="nav-bar"></div>
 <div class="cart">Cart({{ cart }})</div>
  <div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <!-- everything in the "" is a JS expression that will be evaluated -->
        <!--  or use shorthand without the v-bind, :src="image" -->
        <img v-bind:src="image">
      </div>
      <div class="product-info">
        <h1>{{ product }}</h1>
        <!-- conditional rendering -->
        <!--  instead of v-if/v-else-if/v-else which will render or remove the element,
          you can also use v-show which will display or not display the element. 
          so use v-show if you have something that will need to display/not-display
          frequently 
        -->
        <!-- v-if and v-else have to be used on elements that are next to each other -->
        <!-- <p v-if="inventory > 10">In Stock</p> -->
        <p v-if="inStock">In stock</p>
        <p v-else>Out of stock</p>
        <ul>
          <!-- loop the details state array or any iterable and render a list -->
          <li v-for="detail in details">{{ detail }}</li>
        </ul>
        <!-- need to set a key on each element just like in react -->
        <!-- v-if will always be processed first, if you want a v-for to 
          process before a v-if you have to put them on nested and separate
          elements
         -->
        <div 
          v-for="variant in variants" 
          :key="variant.id"
          @mouseover="updateImage(variant.image)"
        >
          {{ variant.color }}
        </div>
        <!-- verbose syntax is v-on:click, shorthand is @click -->
        <!-- <button class="button" type="button" v-on:click="cart += 1">Add to cart</button> -->
        <!--  you can wrap the function in an event wrapper, butit's optional in vue
          because it will be added automatically by the compiler
         -->
        <!-- <button class="button" type="button" v-on:click="(event) => { cart += 1 }">Add to cart</button> -->
        <!-- <button class="button" type="button" @click="cart += 1">Add to cart</button> -->
        <!--  or extract event handler to a function -->
        <button class="button" type="button" @click="addToCart">Add to cart</button>
        </div>
    </div>
  </div>
</template>