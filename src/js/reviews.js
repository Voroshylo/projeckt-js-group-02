import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { Navigation, Keyboard, Scrollbar} from 'swiper/modules';

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
  modules: [Navigation, Keyboard, Scrollbar ],
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      // spaceBetween: 
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 1,
      // spaceBetween: 
    },
    // when window width is >= 1280px
    1280: {
      slidesPerView: 2,
      spaceBetween: 32
    }
  }
  });

// Функція для відображення повідомлення про помилку
function showError(message) {
  iziToast.error({
    title: 'Error',
    message: message,
  });
}

function cardTemplate(review) {
  console.log(review);
  return `<li class="swiper-slide review-list-item">
          <p class="review-section-text">${review.author}</p>
          <div class="review-avatar-text">
        <img
        srcset="${review.avatar_url}"
        class="review-section-img"
        src="${review.avatar_url}"
        alt="Avatar"/>
            <h3 class="review-section-title">${review.review}</h3>
          </div>
        </li>`;
}

function cardsTemplate(reviews) {
  return reviews.map(cardTemplate).join('');
}

function renderReviews(reviews) {
  const reviewList = document.getElementById('reviews-list');
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
    console.log(data);
    if (data && data.length > 0) {
      renderReviews(data);
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
