import { computed, onMounted, ref, watch } from 'vue'

export function useCart() {
  const cart = ref(null);// change initial value to null for checking against in watch()
  const cartCount = computed(() => {
    // when cart value is null we need to return 0 as the length
    return cart.value === null ? 0 : cart.value.length;
  })

  // onMounted runs in the component in which it's called
  onMounted(() => {
    fetch('http://localhost:3000/cart')
    .then(resp => resp.json())
    .then(data => cart.value = data.content)
  })

  // Update the server when the cart updates!
  // add watch event that watches the cart ref and updates the server
  // when the ref changes, but watch only watches reassignment updates, so it 
  // won't detect the change with cart.value.push, we have to reassign to the cart
  // variable instead using concat (see udpateCart below).
   watch(cart, (value, oldValue) => {
    // But we don't need to update the server on the very first cart update because
    // that initial data comes from our server anyway!!!!!!!!!!!!!!!!!!
    // so we skip that first server update by checking if the value is the same 
    // as the initial value in the server. Get the current value of cart and the 
    // oldValue of cart as params then use a conditional to check if the oldValue
    // was null (or equal to initial state value of cart)
      if (oldValue === null) return // if oldValue is same as initial value, return without running the fetch/post
      fetch('http://localhost:3000/cart', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // content: cart.value,
          // use the value from the callback param instead of cart.value from state because they are the same
          content: value,
        }),
      });
    });

  // event handlers
  // updateCart listens for the add-to-cart event from its child component
  // the parameters are passed as args from the emit function in the child
  const updateCart = (id) => {
    // cart.value.push(id); // this won't work with watch because it mutates instead of reassigns.
    cart.value = cart.validAttributeName.concat(id) // this does reassign cart and will be picked up by watch
  }

  return { cartCount, updateCart }
}