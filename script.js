const textInput = document.getElementById("text-input");
const textForm = document.getElementById("text-form");
const shoppingCart = document.getElementById("shopping-cart");
const crossedOut = document.getElementById("crossed-out");

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
        event.target.classList.toggle("checked");

        setTimeout(() => {
            shoppingCart.append(event.target);
        }, 2000);
    }

    if (event.target.tagName === "I") {
        const listItem = event.target.parentElement.parentElement;
        listItem.remove();
    }
});
