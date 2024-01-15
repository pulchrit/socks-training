<script setup>
  // Review list receives an reviews array prop
  // since we just use this prop in the template, but don't need to do anything
  // with it in the <script>, we don't need to define a new variable for the prop, 
  // we can just use it in the <template>
  defineProps({
    reviews: {
      type: Array,
      required: true,
    }
  })
</script>

<template>
  <div class="review-container">
    <h3>Reviews:</h3>
    <ul>
      <!--  reviews prop is made available to the template automatically -->
      <li v-for="(review, index) in reviews" :key="index">
        <span>{{ review.name }} gave this {{  review.rating }} stars</span>
        <br>
        <span>{{ review.content }}</span>
      </li>
    </ul>
  </div>
</template>