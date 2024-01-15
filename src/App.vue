<script setup>
  import { ref } from 'vue'
  import socksGreenImage from './assets/images/socks_green.jpeg'

  // create state
  const product = ref("Socks")
  const image = ref(socksGreenImage)
  const inStock = ref(true)
  // inventory was just to demonstrate v-else-if
  // const inventory = ref(8)

</script>

<template>
 <div class="nav-bar"></div>
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

      </div>
    </div>
  </div>
</template>