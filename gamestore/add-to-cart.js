document.addEventListener("DOMContentLoaded", function () {
    const products = document.querySelectorAll('.product, .product-info');

    products.forEach(product => {
        if (product.querySelector('.add-to-cart-btn')) return;

        let name = product.querySelector('h4,h2');
        let price = product.querySelector('p');
        let productName = name ? name.textContent : "Product";
        let productPrice = price ? price.textContent.replace(/[^\d.]/g, '') : "0";

        const btn = document.createElement('button');
        btn.textContent = "Add to Cart";
        btn.className = "add-to-cart-btn";
        btn.style.background = "#111";
        btn.style.color = "#fff";
        btn.style.padding = "10px 20px";
        btn.style.border = "none";
        btn.style.borderRadius = "5px";
        btn.style.cursor = "pointer";
        btn.style.fontSize = "16px";
        btn.style.marginTop = "10px";
        btn.addEventListener('mouseover', function () {
            btn.style.background = "#333";
        });
        btn.addEventListener('mouseout', function () {
            btn.style.background = "#111";
        });

        btn.onclick = function () {
            let cart = JSON.parse(localStorage.getItem('cart') || '[]');
            cart.push({ name: productName, price: parseFloat(productPrice) });
            localStorage.setItem('cart', JSON.stringify(cart));
            alert(productName + " has been added to your cart!");
        };

        product.appendChild(btn);
    });
});