<script setup>
  // setup executes once!
  // state within it is tracked and updated
  import { ref } from 'vue'
  import ProductDisplay from '@/components/ProductDisplay.vue'
  import useCart from '@/composables/useCart'
  
  // Moved cart functionality to useCart composable
  // pull data from pretend db to initialize the cart via onMounted lifecycle hook
  // const cart = ref([])
  // to get the pretend db working, you need to run from the terminal: npx json-server db.json
  // this will prompt you to install json-server package if you do not already have it
  // onMounted(() => {
  //   fetch('http://localhost:3000/cart')
  //   .then(resp => resp.json())
  //   .then(data => cart.value = data.content)
  // })
  // event handlers
  // updateCart listens for the add-to-cart event from its child component
  // the parameters are passed as args from the emit function in the child
  // const updateCart = (id) => cart.value.push(id)

  // create state
  const premium = ref(true)

  // use composable state
  const { cartCount, updateCart } = useCart()

</script>

<template>
 <div class="nav-bar"></div>
 <div class="cart">Cart({{ cartCount }})</div>
 <!-- pass premium state as a prop. bound with :premium -->
 <!-- listen to @add-to-cart custom event just as we would a @click event -->
 <!-- subscribing to the custom event viz @add-to-cart is actually NOT required 
  but perhaps better for clarity to include? -->
 <ProductDisplay :premium="premium" @add-to-cart="updateCart"></ProductDisplay>
</template>

<style>
/* 
  Style tag is optional.
  To use it, just add css and it will be applied to the template as assigned.
  To scope the styles to just this component, add the scoped attr, <style scoped>
*/
</style>