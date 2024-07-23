document.querySelectorAll(".vegetables-item").forEach((item) => {
  const decreaseBtn = item.querySelector(".decrease");
  const increaseBtn = item.querySelector(".increase");
  const quantityDisplay = item.querySelector(".quantity");
  const basket = item.querySelector(".basket");

  let quantity = 0;

  decreaseBtn.addEventListener("click", () => {
    if (quantity > 0) {
      quantity--;
      quantityDisplay.textContent = quantity;
    }
  });

  increaseBtn.addEventListener("click", () => {
    quantity++;
    quantityDisplay.textContent = quantity;
  });

  basket.addEventListener("click", () => {
    iziToast.success({
      title: "Success",
      message: "The product has been added to your cart",
      position: "topRight",
    });
  });
});
