<template>
  <div>
    <h1>장바구니 페이지</h1>
    <div>
        <ul>
            <li v-for="cartItem in $store.state.cartItems" :key="cartItem.id">
                <img :src="cartItem.imageUrl" :alt="cartItem.name">
                <p>{{cartItem.name}}</p>
            </li>
        </ul>
        <button>구매하기</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>