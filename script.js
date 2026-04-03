function myFunction() {
  const menuBtn = document.querySelector(".mobile-menu");
  const mobileMenu = document.querySelector(".mobile-nav");
  const navBar = document.querySelector(".topnav");
  menuBtn.classList.toggle("is-active");
  mobileMenu.classList.toggle("is-active");
  navBar.classList.toggle("is-active");
}

// ─── GALLERY
// To swap images: edit this list only — add, remove, or rename filenames.

const galleryImages = [
  "429857080_10225815935206906_7507094253980350770_n.jpg",
  "429898171_10225815933766870_3324925333662239892_n.jpg",
  "430023519_10225824206293678_1682576699052334100_n.jpg",
  "430140149_10225824206853692_5892372674248940475_n.jpg",
  "445488653_10226244446439419_7282085078570979241_n.jpg",
  "448357791_10226322293265541_587783287595115038_n.jpg",
  "IMG_8321.PNG",
  "IMG_8322.PNG",
  "IMG_8323.JPG",
  "IMG_8324.PNG",
  "IMG_8325.PNG",
  "IMG_8329.PNG",
  "IMG_8330.PNG",
  "IMG_8331.PNG",
  "IMG_8334.PNG",
  "IMG_8335.PNG",
  "IMG_8337.PNG",
  "IMG_8340.PNG",
  "IMG_8341.PNG",
  "IMG_8343.PNG",
  "IMG_8345.PNG",
  "IMG_8346.PNG",
  "IMG_8347.PNG",
  "IMG_8350.PNG",
  "IMG_8354.PNG",
  "IMG_8355.PNG",
  "IMG_8356.PNG",
  "IMG_8357.PNG",
  "IMG_8358.PNG",
  "IMG_8359.PNG",
  "IMG_8361.PNG",
  "IMG_8363.PNG",
  "IMG_8365.PNG",
  "IMG_8366.PNG",
  "IMG_8367.PNG",
];

function renderGallery() {
  const container = document.querySelector(".gallery-container");
  if (!container) return;
  container.innerHTML = "";

  galleryImages.forEach((filename) => {
    const div = document.createElement("div");
    const img = document.createElement("img");
    img.src = `images/gallery/${filename}`;
    img.alt = "Hair by Glinda - hair styling work";
    div.appendChild(img);
    container.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", renderGallery);
