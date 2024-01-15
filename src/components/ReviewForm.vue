<script setup>
  import { reactive } from 'vue'

  // define custom submit event to send to parent
  const emit = defineEmits(['review-submitted'])

  // use reactive when you want to track an object because all of the object's
  // properties will change together. 
  // Here name, content, and rating will be used together in the review form
  const review = reactive({
    name: '',
    content: '',
    rating: null,
  })

  // define submit event handler
  const onSubmit = () => {
    // We don't want the data we send to the parent to be reactive! So, we need to 
    // stringify and parse it!
    const reviewData = JSON.parse(JSON.stringify(review))
    // then you emit your custom event, so the parent can subscribe and receive it
    emit('review-submitted', reviewData)
    // then clear the form fields
    review.name = ''
    review.content = ''
    review.rating = null
    // or you can use Object.assign
    // Object.assign(review, {
    //   name: '',
    //   content: '',
    //   rating: null,
    // })
  }

</script>

<template>
  <!-- listen for @submit event, add .prevent to prevent default form
    submission and instead call our onSubmit callback -->
  <form class="review-form" @submit.prevent="onSubmit">
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