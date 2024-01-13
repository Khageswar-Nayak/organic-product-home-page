function showButton() {
  let button = document.querySelector(".product_image_button");

  button.style.display = "block";
}

function hideButton() {
  let button = document.querySelector(".product_image_button");
  button.style.display = "none";
}

const showAboutOptions = () => {
  let aboutOptions = document.querySelector(".about_options");
  aboutOptions.style.display = "block";
};

const hideAboutOptions = () => {
  let aboutOptions = document.querySelector(".about_options");
  aboutOptions.style.display = "none";
};

const showShopOptions = () => {
  let shopOptions = document.querySelector(".shop_options");
  shopOptions.style.display = "block";
};

const hideShopOptions = () => {
  let shopOptions = document.querySelector(".shop_options");
  shopOptions.style.display = "none";
};
