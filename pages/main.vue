<template>
  <div>
    <h1>Main Page12345</h1>
    <ul>
        <li v-for="product in products" :key="product.id">
            <p>{{product.name}}</p>
            <img :src="product.imageUrl" :alt="product.name">
            <p>{{product.price}}</p>
        </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    async asyncData() {
        const response = await axios.get('http://localhost:3000/products');
        console.log(response.data);
        const products = response.data.map((item) => ({
            ...item,
            imageUrl:`${item.imageUrl}?random=${Math.random()}`
        }))
        return {products}
    },
}
</script>

<style>

</style>