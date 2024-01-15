<script setup>
  // We do need define Props when we used NAMED slots to pass two separate 
  // component/tempaltes to this component (similar to React's render props)
  
  defineProps({
    reviews: {
      type: Array,
      required: true,
    }
  })
</script>

<template>
  <div class="review-container">
    <h3>
      <!-- named slot for heading -->
      <slot name="heading"></slot>
    </h3>
    <ul>
      <li v-for="(review, index) in reviews" :key="index">
        <!-- name slot for item -->
        <!-- pass review to parent by binding the :review value for this particular review -->
        <slot name="item" :review="review"></slot>
      </li>
    </ul>
  </div>
</template>