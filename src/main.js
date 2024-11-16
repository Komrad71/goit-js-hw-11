// Імпортуємо функції
import { fetchImages } from "./js/pixabay-api";
import { renderGallery } from "./js/render-functions";
import { showNoResultsMessage } from "./js/render-functions";
import { clearGallery } from "./js/render-functions";

const loader = document.querySelector('.loader');
const form = document.querySelector(".form");

form.addEventListener("submit", async (event) => {
   // Скасовуємо перезавантаження сторінки
  event.preventDefault();

  const searchQuery = event.target.elements.query.value.trim();
  if (!searchQuery) {
    return showError("Please enter your request");
  }

  clearGallery();
  toggleLoader(true);

  try {
    const data = await fetchImages(searchQuery);
    if (data.hits && data.hits.length) {
      renderGallery(data.hits);
    } else {
      showNoResultsMessage();
    }
  } catch (error) {
    console.error(error); // Виведення помилки в консоль
    showError("Something went wrong. Please try again!");
  } finally {
    toggleLoader(false);
  }
});

function showError(message) {
  iziToast.error({ title: "Error", message });
}

// Функція для відображення/приховування індикатора завантаження
function toggleLoader(isVisible) {
  loader.style.display = isVisible ? "block" : "none";
}
