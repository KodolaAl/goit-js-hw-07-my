const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  },
];

// const listGallery = document.querySelector(".gallery");
// const arrayImg = [];
// for (let i = 0; i < images.length; i++) {
//   const listImg = document.createElement("li");
//   listImg.classList.add("gallery-item");
//   const image = document.createElement("img");
//   image.classList.add("gallery-img");
//   image.src = images[i].url;
//   image.alt = images[i].alt;
//   listImg.appendChild(image);
//   arrayImg.push(listImg);
// }
// listGallery.append(...arrayImg);
// console.log(listGallery);

const listGallery = document.querySelector(".gallery");
function imageTemplate(img) {
  return `<li class="gallery-item"><img class="gallery-img" src="${img.url}" alt="${img.alt}" /></li>`;
}
function imagesTemplate(images) {
  const markup = images.map(imageTemplate).join("");
  return markup;
}
listGallery.insertAdjacentHTML("afterbegin", imagesTemplate(images));
