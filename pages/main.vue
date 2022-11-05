<template>
  <div>
    <h1>Main Page12345</h1>
    <p>{{products}}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    async asyncData() {
        const response = await axios.get('http://localhost:3000/products')
        console.log(response);
        this.products = response.data
    },
    data() {
        return {
            products: [],
        }
    },
}
</script>

<style>

</style>