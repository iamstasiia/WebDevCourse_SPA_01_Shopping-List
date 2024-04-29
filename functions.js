const textInput = document.getElementById("text-input");
const shoppingCart = document.getElementById("shopping-cart");

export function addProduct() {
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
    console.log(listItem);
}

export function deleteProduct(element) {
    setTimeout(() => {
        element.style.opacity = 0;
    }, 10);
    setTimeout(() => {
        element.remove();
    }, 710);
}
