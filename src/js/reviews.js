import review1 from '../img/reviews/1.jpg';
import review2 from '../img/reviews/2.jpg';
import review3 from '../img/reviews/3.jpg';
import review4 from '../img/reviews/4.jpg';
import review5 from '../img/reviews/5.jpg';
import review6 from '../img/reviews/6.jpg';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { Navigation, Keyboard, Scrollbar } from 'swiper/modules';

// Збереження імпортованих зображень в об'єкт
const reviewImages = [review1, review2, review3, review4, review5, review6];

// Ініціалізація Swiper
const swiper = new Swiper('.reviews-swiper', {
  direction: 'horizontal',
  loop: false,
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  modules: [Navigation, Keyboard, Scrollbar],
  slidesPerView: 2,
  spaceBetween: 32,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 32,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 32,
    },
    1280: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
  },
  effect: 'creative',
  creativeEffect: {
    prev: {
      translate: [0, 0, -400],
    },
    next: {
      translate: ['100%', 0, 0],
    },
  },
});

// Функція для відображення повідомлення про помилку
function showError(message) {
  iziToast.error({
    title: 'Error',
    message,
  });
}

function cardTemplate({ review, avatar_url, author }, index) {
  // Використовуємо імпортовані зображення за індексом
  const image = reviewImages[index % reviewImages.length];
  return `
    <li class="swiper-slide review-list-item" id="list-item-id">
      <p class="review-section-text">${review}</p>
      <div class="review-avatar-text">
        <img
          srcset="${image}"
          class="review-section-img"
          src="${image}"
          alt="Avatar"
          width="40"
          height="40"
        />
        <h3 class="review-section-title">${author}</h3>
      </div>
    </li>`;
}

function cardsTemplate(reviews) {
  return reviews.map((review, index) => cardTemplate(review, index)).join('');
}

function renderReviews(reviews) {
  const reviewList = document.getElementById('reviews-list-id');
  reviewList.innerHTML = cardsTemplate(reviews);
  swiper.update();
}

// Функція для отримання відгуків з бекенду
async function fetchReviews() {
  try {
    const response = await fetch('https://portfolio-js.b.goit.study/api/reviews');
    if (!response.ok) throw new Error('Failed to fetch reviews');

    const data = await response.json();
    if (data && data.length > 0) {
      renderReviews(data);
    } else {
      showError('No reviews found');
      document.getElementById('reviews-list-id').innerHTML = '<p>Not found</p>';
    }
  } catch (error) {
    showError('An error occurred while fetching reviews');
    document.getElementById('reviews-list-id').innerHTML = '<p>Not found</p>';
  }
}

// Функція для оновлення стану кнопок
function updateNavigationButtons() {
  const prevButton = document.querySelector('.button-prev');
  const nextButton = document.querySelector('.button-next');
  
  prevButton.classList.toggle('disabled', swiper.isBeginning);
  nextButton.classList.toggle('disabled', swiper.isEnd);
}

// Додаємо обробники подій для оновлення стану кнопок при зміні слайду та ініціалізації
swiper.on('slideChange', updateNavigationButtons);
swiper.on('init', updateNavigationButtons);

// Ініціалізація Swiper (якщо ви не використовуєте автозапуск)
swiper.init();

// Завантаження відгуків при завантаженні сторінки
document.addEventListener('DOMContentLoaded', fetchReviews);