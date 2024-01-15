<script setup>
// setup executes once!
// state within it is tracked and updated
  import { ref, computed } from 'vue'
  import socksGreenImage from './assets/images/socks_green.jpeg'
  import socksBlueImage from './assets/images/socks_blue.jpeg'

  // create state
  const product = ref("Socks")
  const brand = ref('Vue mastery')
  const selectedVariant = ref(0)
  const details = ref(['50% cotton', '30% wool', '20% polyester'])
  const variants = ref([
    { id: 2234, color: 'green', image: socksGreenImage, quantity: 50 },
    { id: 2235, color: 'blue', image: socksBlueImage, quantity: 0 },
  ])
  const cart = ref(0)

  // create computed state
  // computed proprty is like derived state, it is automatically updated when 
  // its sub-state changes
  const title = computed(() => `${brand.value} ${product.value}`)

  const image = computed(() => variants.value[selectedVariant.value].image)

  const inStock = computed(() => variants.value[selectedVariant.value].quantity > 0)

  // define event handlers
  //  event arg is optional, (event) => cart += 1
  const addToCart = () => cart += 1

  const updateVariant = (index) => {
    selectedVariant.value = index
  }
  // inventory was just to demonstrate v-else-if
  // const inventory = ref(8)
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
        <h1>{{ title }}</h1>
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
          v-for="(variant, index) in variants" 
          :key="variant.id"
          @mouseover="updateVariant(index)"
          class="color-circle"
          :style="{ backgroundColor: variant.color }"
        >
        </div>
        <!-- verbose syntax is v-on:click, shorthand is @click -->
        <!-- <button class="button" type="button" v-on:click="cart += 1">Add to cart</button> -->
        <!--  you can wrap the function in an event wrapper, butit's optional in vue
          because it will be added automatically by the compiler
         -->
        <!-- <button class="button" type="button" v-on:click="(event) => { cart += 1 }">Add to cart</button> -->
        <!-- <button class="button" type="button" @click="cart += 1">Add to cart</button> -->
        <!--  or extract event handler to a function -->
        <!-- button :class, the disabledButton is the class we want to assign when inStock is false
          therefore we use !inStock -->
        <!-- The regular class and :class binding will be merged automatically by vue -->
        <!--  You can use :class with an array of class names to apply and compute those
          values in state -->
        <button 
          class="button" 
          :class="{ disabledButton: !inStock }"
          type="button"
          @click="addToCart"
          :disabled="!inStock"
        >
          Add to cart
        </button>
        </div>
    </div>
  </div>
</template>

<style>
/* 
  Style tag is optional.
  To use it, just add css and it will be applied to the template as assigned.
  To scope the styles to just this component, add the scoped attr, <style scoped>

*/
</style>