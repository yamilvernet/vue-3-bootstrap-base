<template>
  <LoadingTourSkeleton v-if="loading" />
  <ErrorMessage v-if="error"/>

  <template v-if="tour && !loading">

    <div class="header-full-cover">
      <TourHeader :imageSrc="get_image_path(tour.slug, 'desktop', tour.cover_image_url)"
        :imageAlt="`Image of ${de_slugify(tour.slug, format_each_word)}`" :keywordTitle="tour.keyword_title"
        :storyTitle="tour.story_title" :ctaLink="`/book/${tour.slug}`" :ctaText="tour.cta" />
    </div>


    <div class="container my-4">
      <div class="mb-2">
        <div class="d-flex-center-start">
          <div class="text-success d-flex-center-start">
            <IconStarFilled size="18" />
            <IconStarFilled size="18" />
            <IconStarFilled size="18" />
            <IconStarFilled size="18" />
            <IconStarFilled size="18" />
          </div>
          &nbsp;
          <b class="text-success">Excellent </b>
        </div>
        <small>
          Based on 447 <b>Tripadvisor</b> reviews.
        </small>
        &nbsp;
      </div>

      <p class="text-justify">{{ tour.story_desc }}</p>

      <div class="row g-2 mb-3">
        <div class="col-8 col-md-6">
          <img class="w-100 h-100 object-fit-cover rounded"
            :src="get_image_path(tour.slug, 'desktop', tour.gallery_images_url[0])" alt="">
        </div>

        <div class="col">
          <div class="row g-2">
            <div class="col-12 col-md-6" v-for="(image_url, g) in tour.gallery_images_url.slice(1, 5)" :key="g">
              <img class="w-100 object-fit-cover rounded h-64-120-180"
                :src="get_image_path(tour.slug, 'desktop', image_url)"
                alt="sacred valley vip tour cusco gallery 1 how much does it cost to go to the sacred valley with inca agricultural terraces tour">
            </div>
          </div>
        </div>

        <div class="d-flex-center-start mb-2 mt-3">
          <div class="bg-success-subtle text-success-emphasis p-2 rounded me-2">
            <IconSparkles />
          </div>
          <span>
            <b class="small">{{ tour.micro_title }}</b>
            <br>
            <span>{{ tour.micro_content }}</span>
          </span>
        </div>
      </div>
    </div>


    <div class="container mb-5">
      <div class="border-warning border-top border-bottom">
        <div class="row align-items-center">
          <div class="col-3 fw-bold fs-1 text-center py-3">
            <div class="mb-0">20%</div>
            <div class="mb-0">OFF</div>
          </div>
          <div class="col border-secondary py-3"
            style="border-style:dashed;border-width: 2px;border-right: 0;border-top: 0;border-bottom: 0;">
            <h4 class="mb-1">Hurry Up!</h4>
            <p class="fs-5 fw-normal mb-1">Buying before Sunday you will get an incredible 20% discount.</p>
            <div class="d-flex-center-start"><span class="fs-4 text-muted mb-0"
                style="text-decoration: line-through;">${{ tour.price }}</span>&nbsp;<span
                class="fs-4 mb-0 text-success fw-bold" id="tourDiscount">${{ discount_and_format(tour.price, 20)
                }}</span>
              <div class="mx-2"></div><button class="btn btn-warning">Take advantage now!</button>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center pt-3">
        <div class="fw-bold">Time is running out</div>
        <div class="fs-2 d-flex-center-center" id="promo-time">
          <div class="d-flex flex-column align-items-center justify-content-center">
            <div>
              <span id="promo-time-day">{{ promo_days }}</span>&nbsp;:&nbsp;
            </div>
            <span class="fs-6">day &nbsp;&nbsp;&nbsp;</span>
          </div>
          <div class="d-flex flex-column align-items-center justify-content-center">
            <div>
              <span id="promo-time-hour">{{ promo_hours }}</span>&nbsp;:&nbsp;
            </div>
            <span class="fs-6">hour &nbsp;&nbsp;&nbsp;</span>
          </div>
          <div class="d-flex flex-column align-items-center justify-content-center">
            <div>
              <span id="promo-time-min">{{ promo_minutes }}</span>&nbsp;:&nbsp;
            </div>
            <span class="fs-6">min &nbsp;&nbsp;&nbsp;</span>
          </div>
          <div class="d-flex flex-column align-items-center justify-content-center">
            <span id="promo-time-sec">{{ promo_seconds }}</span>
            <span class="fs-6">sec</span>
          </div>
        </div>
      </div>

      <div class="mb-3 mt-4">
        <h2 class="">Why did They Choose Our {{ de_slugify(tour.slug, format_each_word) }}?</h2>
        <div id="reviews-container">
          <div class="bg-light p-2 rounded mb-2" id="review-item" v-for="(review, r) in tour.reviews" :key="r">
            <div class="d-flex-center-start mb-1">
              <img class="rounded sqr-32 object-fit-cover me-2" review-data="image_url"
                :src="get_image_path(tour.slug, 'reviews', review.image_url)"
                :alt="capitalize_each_word(review.image_url.replace('.webp', ''))">
              <div>
                <div class="small d-flex-center-start" style="line-height: 0.5; padding-top: 8px;">
                  <span>{{ review.name }}</span>,&nbsp;<span>{{ review.loc }}</span>
                  &nbsp;
                  <IconRosetteDiscountCheckFilled size="16" color="blue" />
                </div>
                <small class=""><i>{{ review.time }}</i></small>
              </div>
            </div>
            <p class="mb-0 fs-5">{{ review.comment }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="container my-4">
      <h2 class="fs-3">{{ de_slugify(tour.slug, format_each_word) }} Itinerary</h2>

      <div v-html="simple_markdown_format(tour.itinerary_short)"></div>

      <button class="btn text-primary border-0 p-0 m-0 my-2" id="collapseButtonExample" type="button"
        data-bs-toggle="collapse" data-bs-target="#itinerary_full" aria-expanded="false" aria-controls="itinerary_full">
        See all itinerary
      </button>
      <div class="collapse" id="itinerary_full">
        <div class="text-justify" v-html="simple_markdown_format(tour.itinerary_full)"></div>
      </div>
    </div>

    <div class="container my-4">
      <h3>What's Included</h3>
      <ul class="ps-1">
        <li style="list-style: none;" v-for="(inclusion, e) in tour.includes_list" :key="e">
          <IconChecks color="green" />&nbsp;<span v-html="simple_markdown_format(inclusion)"></span>
        </li>
      </ul>
    </div>

    <div class="container my-4">
      <div class="row g-0">
        <div class="col-12 col-md-5 col-lg-7">
          <img class="rounded-top-md-start w-100 object-fit-cover h-100"
            :src="get_image_path(tour.slug, 'mobile', tour.gallery_images_url[1])" id="cta-image" alt="">
        </div>
        <div class="col bg-secondary p-3 rounded-bottom-md-end">
          <div class="badge bg-primary-subtle text-primary-emphasis mb-1">{{ tour.tour_type }}</div>
          <h2 class="fs-4 mb-1">{{ de_slugify(tour.slug, format_each_word) }}</h2>
          <div class="text-muted mb-0 d-flex-center-start">
            $<span class="fs-5" style="text-decoration: line-through;">
              {{ tour.price }}
            </span>
            <span class="ms-1 badge bg-danger small mb-0">-20%</span>
          </div>
          <div class="fs-4 fw-bold text-primary mb-1">${{ discount_and_format(tour.price, 20) }}</div>
          <p>{{ tour.head_desc }}</p>
          <div class="">
            <span class="small d-block">
              <IconTruck />
              Pickup service
            </span>
            <div class="mx-2"></div>
            <span class="small d-block">
              <IconTicket />
              Tickets included
            </span>
          </div>
          <button class="btn btn-primary mt-3">{{ tour.cta }}</button>
        </div>
      </div>
    </div>

    <div class="container my-4">
      <h3 class="">Practical Essentials</h3>
      <ul class="ps-1">
        <li style="list-style: none;" v-for="(essential, e) in tour.practical_essentials_list" :key="e">
          <IconChecks color="green" />&nbsp;<span v-html="simple_markdown_format(essential)"></span>
        </li>
      </ul>
    </div>


    <div class="container my-4">
      <h2 class="fs-3">Frequently Asked Questions</h2>
      <div class="accordion" ref="faqsContainer" id="faqs-container">

      </div>
    </div>

    <div class="bg-success-subtle text-success-emphasis mb-5 py-5" id="sintesis-contacto">
      <div class="container">
        <h4>Your Best Travel Companion to Machu Picchu</h4>
        <ul class="ps-1">
          <li class="mb-3 d-flex-center-start">
            <div class="bg-success text-white rounded-circle d-flex-center-center p-2 me-3 opacity-75">
              <IconSparkles />
            </div>
            <div>
              <b>An Unforgettable Journey</b>: Over 5,000 happy travelers and verified reviews speak for our exceptional
              service.
            </div>
          </li>
          <li class="mb-3 d-flex-center-start">
            <div class="bg-success text-white rounded-circle d-flex-center-center p-2 me-3 opacity-75">
              <IconMapCheck />
            </div>
            <div>
              <b>Led by Experts</b>: Our local guides are passionate, knowledgeable, and committed to making your
              experience one of a kind.
            </div>
          </li>
          <li class="mb-3 d-flex-center-start">
            <div class="bg-success text-white rounded-circle d-flex-center-center p-2 me-3 opacity-75">
              <IconHeartHandshake />
            </div>
            <div><b>Personalized Attention</b>: Small groups, flexible itineraries, and a service tailored to your pace.
            </div>
          </li>
          <li class="mb-3 d-flex-center-start">
            <div class="bg-success text-white rounded-circle d-flex-center-center p-2 me-3 opacity-75">
              <IconCreditCard />
            </div>
            <div>
              <b>Secure and Easy Payments</b>: Book confidently with safe payment methods and no hidden fees.
            </div>
          </li>
          <li class="mb-3 d-flex-center-start">
            <div class="bg-success text-white rounded-circle d-flex-center-center p-2 me-3 opacity-75">
              <IconMoodCheck />
            </div>
            <div>
              <b>Real Stories, Real Travelers</b>: Check what others say about us on <a href="http://" target="_blank"
                rel="noopener noreferrer">TripAdvisor</a>.
            </div>
          </li>

        </ul>

        <h6 class="mt-4 mb-2 ps-2">Have Questions or Need Help Planning?</h6>
        <form onsubmit="handle_whatsapp_form(event)" class="d-flex-center-between">
          <input style="border-radius: 2rem;" name="question" type="text"
            class="form-control form-control-lg rounded-lg me-2"
            placeholder="Direct message us—let’s plan your trip to Cusco!">
          <button class="btn btn-success rounded-circle sqr-48 d-flex-center-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M4.698 4.034l16.302 7.966l-16.302 7.966a.503 .503 0 0 1 -.546 -.124a.555 .555 0 0 1 -.12 -.568l2.468 -7.274l-2.468 -7.274a.555 .555 0 0 1 .12 -.568a.503 .503 0 0 1 .546 -.124z" />
              <path d="M6.5 12h14.5" />
            </svg>
          </button>
        </form>
      </div>
    </div>


    <div class="container mb-5">
      <h3 class="mb-1">Your Next Adventure Awaits!</h3>
      <p class="mb-4">Discover the Best Tours in Peru: Machu Picchu, Sacred Valley, and More Top Attractions.</p>

      <div class="row" v-if="tours && tours.length">

        <div class="col-12 col-md-6 col-xl-6 mb-4" v-for="related_tour in tours">
          <article class="border rounded d-flex-center-start">
            <img :src="get_image_path(related_tour.slug, 'mobile', related_tour.cover_image_url)"
              :alt="related_tour.keyword_title" class="card-img-top rounded-start">
            <div class="ms-2">
              <div class="badge bg-primary small mb-1">{{ related_tour.tour_type }}</div>
              <h2 class="fs-6 mb-1 ps-1">
                <router-link :to="{ name: 'tour', params: { 'slug': related_tour.slug } }"
                  class="text-decoration-none">{{ de_slugify(related_tour.slug, capitalize_each_word) }}</router-link>
              </h2>
              <data class="fw-bold d-block text-success" :value="related_tour.price">${{ related_tour.price }}
                USD</data>
            </div>
          </article>
        </div>
      </div>
    </div>


    <!-- <div class="content">
      <h2>{{ tour.head_title }}</h2>
      <p>{{ tour.head_desc }}</p>
    </div> -->
  </template>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { get_or_load_data_from, de_slugify, capitalize, capitalize_each_word, get_image_path, simple_markdown_format } from '../utils'
import ErrorMessage from './ErrorMessage.vue'
import LoadingTourSkeleton from '../components/LoadingTourSkeleton.vue'
import TourHeader from './template/TourHeader.vue'

import {
  IconSparkles,
  IconChecks,
  IconMapCheck,
  IconHeartHandshake,
  IconRosetteDiscountCheckFilled,
  IconMoodCheck,
  IconCreditCard,
  IconTruck,
  IconTicket,
  IconStarFilled
} from '@tabler/icons-vue';


// const collapseElementList = document.querySelectorAll('.collapse')
// const collapseList = [...collapseElementList].map(collapseEl => new bootstrap.Collapse(collapseEl))


const route = useRoute()

const loading = ref(false)
const tour = ref(null)
const tours = ref(null)
const error = ref(null)

const promo_days = ref(0)
const promo_hours = ref(0)
const promo_minutes = ref(0)
const promo_seconds = ref(0)

let interval = null;

onMounted(startCountdown);
onUnmounted(() => clearInterval(interval));

function getNextSunday() {
  const now = new Date();
  const nextSunday = new Date(now);
  nextSunday.setDate(now.getDate() + (7 - now.getDay())); // Próximo domingo
  nextSunday.setHours(23, 59, 59, 999); // Fijar a 23:59:59
  return nextSunday;
}

function updateCountdown() {
  const now = new Date();
  const targetDate = getNextSunday();
  const diff = targetDate - now;

  if (diff <= 0) {
    clearInterval(interval);
    setTimeout(startCountdown, 1000);
    return;
  }

  promo_days.value = Math.floor(diff / (1000 * 60 * 60 * 24));
  promo_hours.value = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  promo_minutes.value = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  promo_seconds.value = Math.floor((diff % (1000 * 60)) / 1000);
}

function startCountdown() {
  // console.log('anda');

  updateCountdown();
  interval = setInterval(updateCountdown, 1000);
}

const format_each_word = (str) => str.split(" ").map(w => capitalize(w)).join(" ");
const discount_and_format = (price, discount) => parseInt(price - (price * (discount / 100)))

function preloadImage(url, callback)
{
  console.log('preloding');
  
    var img=new Image();
    img.src=url;
    img.onload = callback;
}

function render_faqs(faqs) {
  // console.log('holaa');

  // let faqs_container = ref.faqsContainer;

  let faqs_container = document.getElementById('faqs-container');
  // console.log(faqs_container);

  // let faq_item = document.getElementById('faq-item');
  // faq_item.removeAttribute('id');

  faqs.forEach((faq, f) => {
    console.log(faq);

    let faq_item_clone = document.createElement('div')
    faq_item_clone.classList.add('accordion-item')
    faq_item_clone.innerHTML = `
        <h2 class="accordion-header">
          <button class="accordion-button" type="button" data-bs-toggle="collapse"
            data-bs-target="#faq-collapse-${f}" aria-expanded="true" aria-controls="faq-collapse-${f}">
              ${faq.q}
          </button>
        </h2>
        <div id="faq-collapse-${f}" class="accordion-collapse collapse" data-bs-parent="#faqs-container">
          <div class="accordion-body">
            ${faq.a}
          </div>
        </div>
      `

    faqs_container.append(faq_item_clone);
  })

  // faq_item.remove()
  faqs_container.childNodes[0].querySelector('button').click()

}

// watch the params of the route to fetch the data again
watch(() => route.params.slug, fetchData, { immediate: true })

async function fetchData(slug) {
  error.value = tour.value = null
  loading.value = true

//  console.log('scrolling', window.scrollTo(0, 0));
 

  try {
    // replace `get_or_load_data_from` with your data fetching util / API wrapper
    tour.value = await get_or_load_data_from(`https://machuinka-f6ef7-default-rtdb.firebaseio.com/tours.json?orderBy=%22slug%22&equalTo=%22${slug}%22`)
    tour.value = tour.value[Object.keys(tour.value)[0]]
    // console.log(tour.value.faqs);

    preloadImage(get_image_path(tour.value.slug, 'desktop', tour.value.cover_image_url), () => {
      console.log('Image',tour.value.slug,'loaded');
      
      setTimeout(() => {
        loading.value = false
        // window.scrollTo(0, 0)
  
        nextTick(() => {
          render_faqs(tour.value.faqs)
          setTimeout(() => {
            tours.value = get_or_load_data_from('tours').then((data) => {
              tours.value = Object.values(data)
            });
          }, 1500);
      }, 2000);
    });



    })
  } catch (err) {
    error.value = err.toString()
  } finally {
    loading.value = false
  }

}
</script>