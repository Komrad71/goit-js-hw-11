// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
// npm install izitoast --save

// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// npm install simplelightbox

const galleryEl = document.querySelector(".gallery");

export function renderGallery(images) {
  // Замінюємо вміст галереї на нові зображення
  galleryEl.innerHTML = images.map(createImageCardMarkup).join("");
  
new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250  // Затримка перед показом підпису
}).refresh();
}

function createImageCardMarkup(image) {
  return `
    <a href="${image.largeImageURL}" class="gallery_item">
      <img src="${image.webformatURL}" alt="${image.tags}" class="gallery_image" width="380"/>
      <div class="info">
        <p class="info-item"><b>Likes:</b> ${image.likes}</p>
        <p class="info-item"><b>Views:</b> ${image.views}</p>
        <p class="info-item"><b>Comments:</b> ${image.comments}</p>
        <p class="info-item"><b>Downloads:</b> ${image.downloads}</p>
      </div>
    </a>
  `;
}

// {/* <div class="gallery">
//     <a href="images/image1.jpg"><img src="images/thumbs/thumb1.jpg" alt="" title=""/></a>
//     <a href="images/image2.jpg"><img src="images/thumbs/thumb2.jpg" alt="" title="Beautiful Image"/></a>
// </div> */}

// // Допоміжна функція, яка створює HTML-розмітку для кожного зображення
// function createImageCardMarkup({ largeImageURL, webformatURL, tags, likes, views, comments, downloads }) {
//   return `
//     <a href="${largeImageURL}" class="gallery__item">
//       <img src="${webformatURL}" alt="${tags}" loading="lazy" />
//       <div class="info">
//         <p class="info-item"><b>Likes</b>${likes}</p>
//         <p class="info-item"><b>Views</b>${views}</p>
//         <p class="info-item"><b>Comments</b>${comments}</p>
//         <p class="info-item"><b>Downloads</b>${downloads}</p>
//       </div>
//     </a>
//   `;
// }

// виводимо повідомлення - пошук не дав результатів
export function showNoResultsMessage() {
  // виводимо повідомлення про помилку
  iziToast.error({ 
    title: "Error", 
    message: "Sorry, there are no images matching your search query. Please try again!",
    position: 'topRight' 
  });
}
// Функція очищення галереї
export function clearGallery() {
  galleryEl.innerHTML = "";
}