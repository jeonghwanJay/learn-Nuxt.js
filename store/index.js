export const state = () => ({
    cartItems: [],
})

export const mutations = {
    addCartItem(state, cartItem) {
        const cartItems = {
            ...cartItem,
            imageUrl: `${cartItem.imageUrl}?random=${Math.random()}`
        }
        state.cartItems.push(cartItems)
    }
}