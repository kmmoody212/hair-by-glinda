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
  "448357791_10226322293265541_587783287595115038_n.jpg",
  "429857080_10225815935206906_7507094253980350770_n.jpg",
  "429898171_10225815933766870_3324925333662239892_n.jpg",
  "IMG_8366.PNG",
  "IMG_8343.PNG",
  "unnamed (8).jpg",
  "unnamed (12).jpg",
  "IMG_8367.PNG",
  "unnamed (16).jpg",
  "unnamed (18).jpg",
  "unnamed (20).jpg",
  "unnamed (23).jpg",
  "unnamed (26).jpg",
  "unnamed (31).jpg",
  "unnamed (33).jpg",
  "unnamed (35).jpg",
  "unnamed (1).jpg",
  "unnamed (37).jpg",
  "unnamed (38).jpg",
  "IMG_8321.PNG",
  "IMG_8322.PNG",
  "IMG_8323.JPG",
  "IMG_8324.PNG",
  "IMG_8325.PNG",
  "IMG_8329.PNG",
  "IMG_8330.PNG",
  "IMG_8331.PNG",
  "IMG_8337.PNG",
  "IMG_8340.PNG",
  "IMG_8341.PNG",
  "unnamed (2).jpg",
  "IMG_8345.PNG",
  "IMG_8346.PNG",
  "unnamed (36).jpg",
  "IMG_8347.PNG",
  "IMG_8350.PNG",
  "IMG_8354.PNG",
  "IMG_8355.PNG",
  "IMG_8357.PNG",
  "IMG_8358.PNG",
  "IMG_8359.PNG",
  "430140149_10225824206853692_5892372674248940475_n.jpg",
  "430023519_10225824206293678_1682576699052334100_n.jpg",
];

function renderGallery() {
  const container = document.querySelector(".gallery-container");
  if (!container) return;
  container.innerHTML = "";

  galleryImages.forEach((filename) => {
    const div = document.createElement("div");
    const img = document.createElement("img");
    img.src = `images/gallery/${filename}`;
    img.alt = "Hair style work by Glinda";
    div.appendChild(img);
    container.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", renderGallery);
