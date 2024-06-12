
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css'; // виправлений шлях до CSS файлу
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Ініціалізація Swiper
const swiper = new Swiper('.reviews-swiper', {
  direction: 'horizontal',
  loop: false,
  navigation: {
    nextEl: '.review-icon-next',
    prevEl: '.review-icon-back',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});

// Функція для відображення повідомлення про помилку
function showError(message) {
  iziToast.error({
    title: 'Error',
    message: message,
  });
}

// Функція для створення однієї карточки відгуку
function createReviewCard(review) {
  const reviewItem = document.createElement('li');
  reviewItem.classList.add('swiper-slide', 'review-list-item');
  reviewItem.innerHTML = `
    <p class="review-section-text">${review.text}</p>
    <div class="review-avatar-text">
      <img
        srcset="${review.imgSrcSet}"
        class="review-section-img"
        src="${review.imgSrc}"
        alt="Avatar"
      />
      <h3 class="review-section-title">${review.name}</h3>
    </div>
  `;
  return reviewItem;
}

// Функція для рендерингу масиву відгуків
function renderReviews(reviews) {
  const reviewList = document.getElementById('reviews-list');
  reviewList.innerHTML = ''; // Очищення попередніх відгуків

  reviews.forEach(review => {
    const reviewCard = createReviewCard(review);
    reviewList.appendChild(reviewCard);
  });

  // Оновлення Swiper після додавання нових слайдів
  swiper.update();
}

// Функція для отримання відгуків з бекенду
async function fetchReviews() {
  try {
    const response = await fetch('https://your-backend-api.com/reviews');
    if (!response.ok) {
      throw new Error('Failed to fetch reviews');
    }
    const data = await response.json();
    if (data.reviews && data.reviews.length > 0) {
      renderReviews(data.reviews);
    } else {
      showError('No reviews found');
      document.getElementById('reviews-list').innerHTML = '<p>Not found</p>';
    }
  } catch (error) {
    showError('An error occurred while fetching reviews');
    document.getElementById('reviews-list').innerHTML = '<p>Not found</p>';
  }
}

// Завантаження відгуків при завантаженні сторінки
document.addEventListener('DOMContentLoaded', fetchReviews);