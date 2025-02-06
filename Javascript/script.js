let cookies = 0;
let cookiesPerClick = 1;
let autoClickerCost = 50;
let doubleClickCost = 100;
let autoClickers = 0;

const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const autoClickerBtn = document.getElementById("autoClickerBtn");
const doubleClickBtn = document.getElementById("doubleClickBtn");

function updateCounter() {
    counter.textContent = `Cookies: ${cookies}`;
    autoClickerBtn.disabled = cookies < autoClickerCost;
    doubleClickBtn.disabled = cookies < doubleClickCost;
}

cookie.addEventListener("click", () => {
    cookies += cookiesPerClick;
    updateCounter();
});

autoClickerBtn.addEventListener("click", () => {
    if (cookies >= autoClickerCost) {
        cookies -= autoClickerCost;
        autoClickers++;
        autoClickerCost = Math.floor(autoClickerCost * 1.5);
        autoClickerBtn.textContent = `Buy Auto-Clicker (Cost: ${autoClickerCost} Cookies)`;
        updateCounter();

        if (autoClickers === 1) {
            setInterval(() => {
                cookies += autoClickers;
                updateCounter();
            }, 1000);
        }
    }
});

doubleClickBtn.addEventListener("click", () => {
    if (cookies >= doubleClickCost) {
        cookies -= doubleClickCost;
        cookiesPerClick *= 2;
        doubleClickCost = Math.floor(doubleClickCost * 2); // 
        doubleClickBtn.textContent = `Double Cookies Per Click (Cost: ${doubleClickCost} Cookies)`;
        updateCounter();
    }
});

updateCounter();

var autoclicker = setInterval(function () {
    try {
        Game.lastClick -= 1000;
        document.getElementById('bigCookie').click();
    } catch (err) {
        console.error('Stopping auto clicker');
        clearInterval(autoclicker);
    }
}, 1);


