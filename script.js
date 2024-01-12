function showButton() {
  let button = document.querySelector(".product_image_button");
  let aboutOptions = document.querySelector(".about_options");

  button.style.display = "block";
  aboutOptions.style.display = "block";
}

function hideButton() {
  let button = document.querySelector(".product_image_button");
  let aboutOptions = document.querySelector(".about_options");
  button.style.display = "none";
  aboutOptions.style.display = "none";
}
