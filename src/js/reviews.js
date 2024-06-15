import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { Navigation, Keyboard, Scrollbar } from 'swiper/modules';
// import project10Retina from `./img/my-projeckts/10-2x.jpg`;
// import spriteSvg from `./img/sprite.svg`;

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
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 1,
    },
    // when window width is >= 1280px
    1280: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
  },
});

// Функція для відображення повідомлення про помилку
function showError(message) {
  iziToast.error({
    title: 'Error',
    message: message,
  });
}

function cardTemplate(review) {
  return `<li class="swiper-slide review-list-item" id="list-item-id">
          <p class="review-section-text">${review.review}</p>
          <div class="review-avatar-text">
        <img
        srcset="${review.avatar_url}"
        class="review-section-img"
        src="${review.avatar_url}"
        alt="Avatar"
        width="40"
        height="40"/>
            <h3 class="review-section-title">${review.author}</h3>
          </div>
        </li>`;
}

function cardsTemplate(reviews) {
  return reviews.map(cardTemplate).join('');
}

function renderReviews(reviews) {
  const reviewList = document.getElementById('reviews-list-id');
  const markup = cardsTemplate(reviews);
  reviewList.innerHTML = markup;
  swiper.update();
}

// Функція для отримання відгуків з бекенду
async function fetchReviews() {
  try {
    const response = await fetch(
      'https://portfolio-js.b.goit.study/api/reviews'
    );
    if (!response.ok) {
      throw new Error('Failed to fetch reviews');
    }
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

  // Перевірка чи це перший слайд
  if (swiper.isBeginning) {
    prevButton.classList.add('disabled');
  } else {
    prevButton.classList.remove('disabled');
  }

  // Перевірка чи це останній слайд
  if (swiper.isEnd) {
    nextButton.classList.add('disabled');
  } else {
    nextButton.classList.remove('disabled');
  }
}

// Додаємо обробники подій для оновлення стану кнопок при зміні слайду
swiper.on('slideChange', updateNavigationButtons);

// Додаємо обробники подій для оновлення стану кнопок при ініціалізації
swiper.on('init', updateNavigationButtons);

// Ініціалізація Swiper (якщо ви не використовуєте автозапуск)
swiper.init();

// Завантаження відгуків при завантаженні сторінки
document.addEventListener('DOMContentLoaded', fetchReviews);
