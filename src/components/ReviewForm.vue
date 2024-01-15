<script setup>
  import { reactive } from 'vue'

  // use reactive when you want to track an object because all of the object's
  // properties will change together. 
  // Here name, content, and rating will be used together in the review form
  const review = reactive({
    name: '',
    content: '',
    rating: null,
  })

</script>

<template>
  <form class="review-form">
      <h3>Leave a review</h3>
      <label for="name">Name:</label>
      <!-- 
        use v-model for two-way event binding, will bind both the value 
        and event handler based on the name of the state variable
      -->
      <input id="name" v-model="review.name">

      <label for="review">Review:</label>      
      <textarea id="review" v-model="review.content"></textarea>

      <label for="rating">Rating:</label>
      <!--  add .number modifier because the input will be pulled from the
       form as a string, but .number will convert it to a number -->
      <select id="rating" v-model.number="review.rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>

      <input class="button" type="submit" value="Submit">
    </form>
</template>