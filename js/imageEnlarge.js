document.addEventListener("DOMContentLoaded", function () {
    const profileImageLink = document.getElementById("profile-image-link");
    const enlargedImage = document.createElement("img");
    enlargedImage.src = "photo.JPG";
    enlargedImage.alt = "Enlarged Image";
    enlargedImage.classList.add("enlarged-image");
  
    profileImageLink.addEventListener("click", function (e) {
      e.preventDefault();
      document.body.appendChild(enlargedImage);
      document.body.style.overflow = "hidden"; // Hide scrollbar when image is enlarged
    });
  
    enlargedImage.addEventListener("click", function () {
      document.body.removeChild(enlargedImage);
      document.body.style.overflow = "auto"; // Restore scrollbar
    });
  });
  