const textInput = document.getElementById("text-input");
const textForm = document.getElementById("text-form");
const shoppingCart = document.getElementById("shopping-cart");
const crossedCart = document.getElementById("crossed-cart");

textForm.addEventListener("submit", (event) => {
    if (textInput.value.length !== 0) {
        const listItem = document.createElement("li");
        listItem.innerHTML =
            textInput.value[0].toUpperCase() +
            textInput.value.slice(1).toLowerCase();
        shoppingCart.append(listItem);

        const removeButton = document.createElement("button");
        removeButton.innerHTML = `<i class="fa-regular fa-trash-can"></i>`;
        listItem.appendChild(removeButton);

        setTimeout(() => {
            listItem.style.opacity = 1;
        }, 10);

        textInput.value = "";
    }
});

shoppingCart.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        event.target.classList.add("checked");

        setTimeout(() => {
            event.target.style.opacity = 0;
        }, 500);

        setTimeout(() => {
            crossedCart.append(event.target);
        }, 1500);

        setTimeout(() => {
            event.target.style.opacity = 1;
        }, 2000);
    }

    if (event.target.tagName === "I") {
        const listItem = event.target.parentElement.parentElement;

        setTimeout(() => {
            listItem.style.opacity = 0;
        }, 10);

        setTimeout(() => {
            listItem.remove();
        }, 1000);
    }
});

document.getElementById("delete-crossed").addEventListener("click", () => {
    const crossedItems = document.querySelectorAll(".checked");

    crossedItems.forEach((item) => {
        setTimeout(() => {
            item.style.opacity = 0;
        }, 10);
        setTimeout(() => {
            item.remove();
        }, 1000);
    });
});

document.getElementById("delete-all").addEventListener("click", () => {
    const crossedItems = document.querySelectorAll("main li");

    crossedItems.forEach((item) => {
        setTimeout(() => {
            item.style.opacity = 0;
        }, 10);
        setTimeout(() => {
            item.remove();
        }, 1000);
    });
});
