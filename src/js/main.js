import Swiper, { Navigation, Pagination, Mousewheel } from 'swiper';
import { gsap } from './plugins/gsap/all.js';
import { ScrollTrigger } from './plugins/gsap/all.js';
import { SplitText } from './plugins/gsap/all.js';
import { ScrollSmoother } from './plugins/gsap/ScrollSmoother.js';
gsap.registerPlugin(ScrollTrigger, SplitText, ScrollSmoother);
Swiper.use([Navigation, Pagination, Mousewheel]);

const smoother = new ScrollSmoother({
  effects: true,
});
// const parentItem = document.querySelector('.pll-parent-menu-item');
// const parentLink = document.querySelector('.pll-parent-menu-item a');
// const langList = document.querySelector('.sub-menu');

// parentLink.addEventListener('click', e => {
//   e.preventDefault();
//   parentItem.classList.toggle('active');
//   langList.classList.toggle('active');
// });

// document.body.addEventListener('click', e => {
//   const clickedElement = e.target;

//   // Check if the clicked element is not a child of parentItem or langList
//   if (
//     !parentItem.contains(clickedElement) &&
//     !langList.contains(clickedElement)
//   ) {
//     // Remove 'active' class from both elements
//     parentItem.classList.remove('active');
//     langList.classList.remove('active');
//   }
// });

// const menuButton = document.querySelector('.header__menu-button');
// const menu = document.querySelector('.menu');
// const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

// menuButton.addEventListener('click', () => {
//   menuButton.classList.toggle('active');
//   menu.classList.toggle('active');
// });

// menuLinks.forEach(link => {
//   link.addEventListener('click', () => {
//     menu.classList.remove('active');
//   });
// });

// // smooth scroll
// const anchorLinks = document.querySelectorAll('a[href^="#"]');
// const headerHeight = document.querySelector('header').offsetHeight;

// anchorLinks.forEach(function (link) {
//   link.addEventListener('click', function (e) {
//     e.preventDefault();
//     const targetId = link.getAttribute('href');
//     const targetSection = document.querySelector(targetId);

//     // Calculate the target scroll position, subtracting the header height
//     const scrollPosition =
//       targetSection.getBoundingClientRect().top +
//       window.pageYOffset -
//       headerHeight;

//     // Scroll to the target section smoothly
//     window.scrollTo({
//       top: scrollPosition,
//       behavior: 'smooth',
//     });
//   });
// });

// // swiper
const swiper = new Swiper('.program-section__swiper', {
  spaceBetween: 20,
  slidesPerView: 1,
  freeMode: true,
  pagination: {
    el: '.program-section__pagination',
  },
  navigation: {
    nextEl: '.program-section__swiper-button-next',
    prevEl: '.program-section__swiper-button-prev',
  },
  breakpoints: {
    320: {
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});

const swiperTeachers = new Swiper('.teachers-section__swiper', {
  spaceBetween: 20,
  slidesPerView: 1,
  freeMode: true,
  pagination: {
    el: '.teachers-section__pagination',
  },
  navigation: {
    nextEl: '.teachers-section__swiper-button-next',
    prevEl: '.teachers-section__swiper-button-prev',
  },
  breakpoints: {
    320: {
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

const swiperResults = new Swiper('.results-section__swiper', {
  spaceBetween: 20,
  slidesPerView: 1,
  freeMode: true,
  autoHeight: true,
  pagination: {
    el: '.results-section__pagination',
  },
  navigation: {
    nextEl: '.results-section__swiper-button-next',
    prevEl: '.results-section__swiper-button-prev',
  },
});

const swiperReviews = new Swiper('.reviews-section__swiper', {
  spaceBetween: 20,
  slidesPerView: 1,
  freeMode: true,
  autoHeight: true,
  pagination: {
    el: '.reviews-section__pagination',
  },
  navigation: {
    nextEl: '.reviews-section__swiper-button-next',
    prevEl: '.reviews-section__swiper-button-prev',
  },
  breakpoints: {
    320: {
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1.5,
      centeredSlides: true,
      autoHeight: false,
    },
    1200: {
      slidesPerView: 4,
      centeredSlides: true,
      autoHeight: false,
    },
  },
});
// // accardions
const accordionHeaders = document.querySelectorAll('.accordion__header');

accordionHeaders.forEach(title => {
  title.addEventListener('click', () => {
    const listItem = title.parentElement;
    const allItems = document.querySelectorAll('.accordion');

    allItems.forEach(item => {
      if (item !== listItem) {
        item.classList.remove('active');
      }
    });

    listItem.classList.toggle('active');
  });
});

// questions
const questionHeaders = document.querySelectorAll(
  '.tarif-card__question-header'
);

questionHeaders.forEach(title => {
  title.addEventListener('click', () => {
    const listItem = title.parentElement;
    const allItems = document.querySelectorAll('.tarif-card__question');

    allItems.forEach(item => {
      if (item !== listItem) {
        item.classList.remove('active');
      }
    });

    listItem.classList.toggle('active');
  });
});

// teacher card
const teacherCards = document.querySelectorAll('.teacher-card');

teacherCards.forEach(card => {
  const openButton = card.querySelector('.teacher-card__open-button');
  const closeButton = card.querySelector('.teacher-card__close-button');

  openButton.addEventListener('click', () => {
    card.classList.add('active');
  });

  closeButton.addEventListener('click', () => {
    card.classList.remove('active');
  });
});

// Hero block
{
  const sectionRef = document.querySelector('.hero-section');
  const q = gsap.utils.selector(sectionRef);
  gsap.context(() => {
    const titleSplit = new SplitText(q('.hero-section__title'), {
      type: 'lines,words',
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero-section__title',
        start: 'top 80%',
        end: 'bottom 20%',
      },
    });
    tl.fromTo(
      titleSplit.words,
      { yPercent: 100, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: 'back.out(1.7)',
      }
    )
      .fromTo('li', { y: 100, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1 })
      .fromTo(
        '.hero-section__img',
        { opacity: 0 },
        { opacity: 1, duration: 1 },
        '-=1'
      );
  }, sectionRef);
}

// Buttons Animation
{
  const targets = document.querySelectorAll('[data-anim="button"]');
  targets.forEach(target => {
    gsap.fromTo(
      target,
      {
        yPercent: -50,
        opacity: 0,
      },
      {
        yPercent: 0,
        opacity: 1,
        // duration: 1,
        scrollTrigger: {
          trigger: target,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          // markers: true,
        },
      }
    );
  });
}

// Title Animation
{
  const targets = document.querySelectorAll('[data-anim="title"]');
  targets.forEach(target => {
    const titleSplit = new SplitText(target, {
      type: 'lines,words',
    });
    gsap.fromTo(
      titleSplit.words,
      {
        yPercent: 100,
        opacity: 0,
      },
      {
        yPercent: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: target,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          // markers: true,
        },

        ease: 'back.out(1.7)',
      }
    );
  });
}
