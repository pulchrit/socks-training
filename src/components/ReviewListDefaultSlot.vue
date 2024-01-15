<script setup>
  // Don't need define Props when we pass the review list as a default slot
  // Review list receives an reviews array prop
  // since we just use this prop in the template, but don't need to do anything
  // with it in the <script>, we don't need to define a new variable for the prop, 
  // we can just use it in the <template>
  // defineProps({
  //   reviews: {
  //     type: Array,
  //     required: true,
  //   }
  // })
</script>

<template>
  <div class="review-container">
    <h3>Reviews:</h3>
    <!-- default slot is equivalent to React's children prop -->
    <slot></slot>
  </div>
</template>