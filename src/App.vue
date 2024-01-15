<script setup>
  // setup executes once!
  // state within it is tracked and updated
  import { ref } from 'vue'
  import ProductDisplay from '@/components/ProductDisplay.vue'
  
  const cart = ref(0)
  const premium = ref(true)

</script>

<template>
 <div class="nav-bar"></div>
 <div class="cart">Cart({{ cart }})</div>
 <!-- pass premium state as a prop. bound with :premium -->
 <ProductDisplay :premium="premium" ></ProductDisplay>
</template>

<style>
/* 
  Style tag is optional.
  To use it, just add css and it will be applied to the template as assigned.
  To scope the styles to just this component, add the scoped attr, <style scoped>
*/
</style>