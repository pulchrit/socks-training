<script setup>
  // setup executes once!
  // state within it is tracked and updated
  import { ref } from 'vue'
  import ProductDisplay from '@/components/ProductDisplay.vue'
  
  const cart = ref([])
  const premium = ref(true)

  // event handlers
  // updateCart listens for the add-to-cart event from its child component
  // the parameters are passed as args from the emit function in the child
  const updateCart = (id) => cart.value.push(id)

</script>

<template>
 <div class="nav-bar"></div>
 <div class="cart">Cart({{ cart.length }})</div>
 <!-- pass premium state as a prop. bound with :premium -->
 <!-- listen to @add-to-cart custom event just as we would a @click event -->
 <!-- subscribing to the custom event viz @add-to-cart is actually NOT required -->
 <ProductDisplay :premium="premium" @add-to-cart="updateCart"></ProductDisplay>
</template>

<style>
/* 
  Style tag is optional.
  To use it, just add css and it will be applied to the template as assigned.
  To scope the styles to just this component, add the scoped attr, <style scoped>
*/
</style>