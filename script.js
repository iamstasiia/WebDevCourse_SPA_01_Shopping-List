const textInput = document.getElementById("text-input");
const textForm = document.getElementById("text-form");
const shoppingCart = document.getElementById("shopping-cart");
const crossedCart = document.getElementById("crossed-cart");
const main = document.querySelector("main");

textForm.addEventListener("submit", (event) => {
    event.preventDefault();

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
});

main.addEventListener("click", (e) => {
    if (e.target.tagName === "I") {
        const listItem = e.target.parentElement.parentElement;
        return Delete(listItem);
    }
});

document.getElementById("delete-crossed").addEventListener("click", () => {
    const crossedItems = document.querySelectorAll(".checked");
    crossedItems.forEach((item) => {
        return Delete(item);
    });
});

document.getElementById("delete-all").addEventListener("click", () => {
    const allItems = document.querySelectorAll("main li");
    allItems.forEach((item) => {
        return Delete(item);
    });
});

function Delete(element) {
    setTimeout(() => {
        element.style.opacity = 0;
    }, 10);
    setTimeout(() => {
        element.remove();
    }, 710);
}
