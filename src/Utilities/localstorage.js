const getStoredCart = () => {
    const storedCartString = localStorage.getItem('cart');
    if (storedCartString) {
        return JSON.parse(storedCartString)
    }
    return [];
}

const saveCartToLS = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const addToLS = id => {
    const cart = getStoredCart();
    cart.push(id);
    saveCartToLS(cart);
}

const rmvFromLS = id => {
    const cart = getStoredCart();
    //rmv evry element of same id
    const remaining = cart.filter(idx => idx !== id);
    saveCartToLS(remaining);
}




export { addToLS, getStoredCart, rmvFromLS }