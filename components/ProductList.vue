<template>
  <div>
    {{products}}
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            products: []
        }
    },
    async created() {
        const response = await axios.get('http://localhost:3000/products')
        console.log(response);
        this.products = response.data
    }
}
</script>

<style>

</style>