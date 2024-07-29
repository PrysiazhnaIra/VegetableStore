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

const openMenuBtn = document.querySelector(".menu");
const mobMenu = document.querySelector(".mob-menu");
const closeMenuBtn = document.querySelector(".mob-close-btn");

openMenuBtn.addEventListener("click", (event) => {
  event.preventDefault();
  mobMenu.classList.add("is-open");
});

closeMenuBtn.addEventListener("click", (event) => {
  event.preventDefault();
  mobMenu.classList.remove("is-open");
});

const menuLinks = document.querySelectorAll(".mob-btn-anc");
const menuLinkArray = [...menuLinks];

menuLinkArray.forEach((element) => {
  element.addEventListener("click", (event) => {
    if (element) {
      mobMenu.classList.remove("is-open");
    }
  });
});

const inputs = document.querySelectorAll(".input-your-order");
const sendBtn = document.querySelector(".form-send-btn-your-order");
const form = document.querySelector(".form-your-order");

sendBtn.addEventListener("click", (event) => {
  event.preventDefault();

  if (form.checkValidity()) {
    iziToast.success({
      title: "Success",
      message: "All fields are filled correctly!",
      position: "topRight",
    });
  } else {
    iziToast.error({
      title: "Error",
      message: "Please fill in all fields correctly.",
      position: "topRight",
    });
  }
});
