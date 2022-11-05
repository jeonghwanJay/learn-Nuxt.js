<template>
  <div>
    <p>name : {{product.name}}</p>
    <img :src="product.imageUrl" :alt="product.name">
    <p>price : {{product.price}}</p>
  </div>
</template>

<script>
import { fetchProductById} from '../../api/index'
export default {
  async asyncData({params}) {
    const response = await fetchProductById(params.id)
    // console.log(response);
    const product = response.data
    return {product}
  }
}
</script>

<style>

</style>