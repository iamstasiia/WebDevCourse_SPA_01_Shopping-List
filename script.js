const shoppingCart = document.getElementById("shopping-cart");

document.getElementById("add-button").addEventListener("click", () => {
    const newProduct = document.getElementById("text-input").value;

    if (newProduct.length > 0) {
        const newArticle = document.createElement("div");
        newArticle.classList.add("new-article");
        newArticle.innerHTML = `<p>${newProduct}</p><button id="remove-button">[x]</button>`;
        shoppingCart.append(newArticle);
    }
    document.getElementById("text-input").value = "";
});
