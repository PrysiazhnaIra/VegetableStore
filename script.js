document.querySelectorAll(".vegetables-item").forEach((item) => {
  const decreaseBtn = item.querySelector(".decrease");
  const increaseBtn = item.querySelector(".increase");
  const quantityDisplay = item.querySelector(".quantity");
  const basket = item.querySelector(".basket");

  let quantity = 0;

  decreaseBtn.onclick = () => {
    if (quantity > 0) {
      quantity--;
      quantityDisplay.textContent = quantity;
    }
  };

  increaseBtn.onclick = () => {
    quantity++;
    quantityDisplay.textContent = quantity;
  };

  basket.onclick = () => {
    if (quantity == 0) {
      iziToast.info({
        title: "Info",
        message: "You should add a product!",
        position: "topRight",
      });
    } else {
      iziToast.success({
        title: "Success",
        message: "The product has been added to your cart",
        position: "topRight",
      });
    }
  };
});
