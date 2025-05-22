document.addEventListener("DOMContentLoaded", function() {
    function renderCart() {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const cartList = document.getElementById('cart-list');
        const cartTotal = document.getElementById('cart-total');
        if (cart.length === 0) {
            cartList.innerHTML = '<p>Your cart is empty.</p>';
            cartTotal.textContent = '';
            return;
        }
        let html = '';
        let total = 0;
        cart.forEach(item => {
            html += `<div class="cart-item"><span>${item.name}</span><span>$${item.price.toFixed(2)}</span></div>`;
            total += item.price;
        });
        cartList.innerHTML = html;
        cartTotal.textContent = 'Total: $' + total.toFixed(2);
    }
    window.clearCart = function() {
        localStorage.removeItem('cart');
        renderCart();
    }
    window.checkout = function() {
        if (JSON.parse(localStorage.getItem('cart') || '[]').length === 0) {
            alert('Your cart is empty!');
            return;
        }
        alert('Thank you for your purchase!');
        window.clearCart();
    }
    renderCart();
});
