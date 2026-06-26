// ==========================
// Search Functionality
// ==========================

const search = document.getElementById("search");
const cards = document.querySelectorAll(".card");

search.addEventListener("keyup", () => {

    const value = search.value.toLowerCase();

    cards.forEach((card) => {

        const title = card.querySelector("h3").textContent.toLowerCase();

        if (title.includes(value)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});

// ==========================
// Category Filter
// ==========================

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        filterButtons.forEach((btn) => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        const category = button.dataset.category;

        cards.forEach((card) => {

            if (
                category === "all" ||
                card.classList.contains(category)
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});

// ==========================
// Cart Variables
// ==========================

const addButtons = document.querySelectorAll(".add-cart");

const cartCount = document.getElementById("cart-count");

const cartItems = document.getElementById("cart-items");

const totalPrice = document.getElementById("total-price");

let count = 0;

let total = 0;

// ==========================
// Add To Cart
// ==========================

addButtons.forEach((button) => {

    button.addEventListener("click", () => {

        count++;

        cartCount.textContent = count;

        const card = button.parentElement;

        const name = card.dataset.name;

        const price = Number(card.dataset.price);

        total += price;

        totalPrice.textContent = total.toFixed(2);

        const item = document.createElement("li");

        item.innerHTML = `

            <span>${name}</span>

            <span>$${price.toFixed(2)}</span>

            <button class="remove-btn">

                Remove

            </button>

        `;

        cartItems.appendChild(item);

        const removeBtn = item.querySelector(".remove-btn");

        removeBtn.addEventListener("click", () => {

            item.remove();

            count--;

            cartCount.textContent = count;

            total -= price;

            totalPrice.textContent = total.toFixed(2);

        });

    });

});


// ==========================
// Order Popup
// ==========================

const popup = document.getElementById("popup");

const orderBtn = document.getElementById("order-btn");

const closePopup = document.getElementById("close-popup");

orderBtn.addEventListener("click", () => {

    popup.style.display = "flex";

});

closePopup.addEventListener("click", () => {

    popup.style.display = "none";

    document.getElementById("menu").scrollIntoView({

        behavior: "smooth"

    });

});


// ==========================
// Close Popup When Click Outside
// ==========================

window.addEventListener("click", (event) => {

    if (event.target === popup) {

        popup.style.display = "none";

    }

});


// ==========================
// Welcome Message
// ==========================

console.log("🍕 Welcome to Foodie!");