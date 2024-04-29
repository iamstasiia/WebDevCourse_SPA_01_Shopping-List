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
        listItem.append(removeButton);

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
        }, 700);

        setTimeout(() => {
            crossedCart.append(event.target);
        }, 1400);

        setTimeout(() => {
            event.target.style.opacity = 1;
        }, 1410);
    }

    if (event.target.tagName === "I") {
        const listItem = event.target.parentElement.parentElement;

        setTimeout(() => {
            listItem.style.opacity = 0;
        }, 10);

        setTimeout(() => {
            listItem.remove();
        }, 710);
    }
});

crossedCart.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
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

    if (event.target.tagName === "I") {
        const listItem = event.target.parentElement.parentElement;

        setTimeout(() => {
            listItem.style.opacity = 0;
        }, 10);

        setTimeout(() => {
            listItem.remove();
        }, 710);
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
        }, 710);
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
        }, 710);
    });
});
