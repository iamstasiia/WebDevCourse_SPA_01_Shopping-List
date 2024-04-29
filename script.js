import { addProduct, deleteProduct } from "./functions.js";

// Variables
const textInput = document.getElementById("text-input");
const textForm = document.getElementById("text-form");
const shoppingCart = document.getElementById("shopping-cart");
const crossedCart = document.getElementById("crossed-cart");
const main = document.querySelector("main");

// Form
textForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (textInput.value.length !== 0) {
        return addProduct();
    }
});

// Shopping Cart
shoppingCart.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        if (
            document.querySelectorAll(".checked").length === 0 &&
            shoppingCart.querySelectorAll("li")[
                shoppingCart.querySelectorAll("li").length - 1
            ] === event.target
        ) {
            event.target.classList.add("checked");
            crossedCart.append(event.target);
        } else {
            event.target.classList.add("checked");

            setTimeout(() => {
                event.target.style.opacity = 0;
            }, 700);

            setTimeout(() => {
                crossedCart.append(event.target);
            }, 1400);

            setTimeout(() => {
                event.target.style.opacity = 1;
            }, 1410);
        }
    }
});

// Crossed Cart
crossedCart.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        if (crossedCart.querySelectorAll("li")[0] === event.target) {
            event.target.classList.toggle("checked");
            shoppingCart.append(event.target);
        } else {
            event.target.classList.toggle("checked");

            setTimeout(() => {
                event.target.style.opacity = 0;
            }, 700);

            setTimeout(() => {
                shoppingCart.append(event.target);
            }, 1400);

            setTimeout(() => {
                event.target.style.opacity = 1;
            }, 1410);
        }
    }
});

// Main
main.addEventListener("click", (e) => {
    if (e.target.tagName === "I") {
        const listItem = e.target.parentElement.parentElement;
        return deleteProduct(listItem);
    }
});

// Delete Crossed
document.getElementById("delete-crossed").addEventListener("click", () => {
    const crossedItems = document.querySelectorAll(".checked");
    crossedItems.forEach((item) => {
        return deleteProduct(item);
    });
});

// Delete All
document.getElementById("delete-all").addEventListener("click", () => {
    const allItems = document.querySelectorAll("main li");
    allItems.forEach((item) => {
        return deleteProduct(item);
    });
});
