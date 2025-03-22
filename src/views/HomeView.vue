<script setup>
import SwiperHomeTours from '../components/SwiperHomeTours.vue';
import TourHeader from './template/TourHeader.vue';
import {
  IconStarFilled
} from '@tabler/icons-vue';
// import TheWelcome from '../components/TheWelcome.vue'

import { ref, onMounted } from 'vue';
import { get_or_load_data_from } from '../utils';
import SwiperHomeReviews from '../components/SwiperHomeReviews.vue';
const tours = ref(null);
onMounted(() => {
  get_or_load_data_from('tours').then((data) => {
    tours.value = Object.values(data);
  })
})
</script>

<template>
  <div class="header-full-cover">
    <TourHeader imageSrc="/images/machu_picchu_inka_trek_best_tour_travel_from_cusco_cover_scale-lg.webp"
      imageAlt="best tours to machu picchu"
      keywordTitle="Machu Picchu Tours & Reservations | Sacred Valley Treks & Cusco Adventures "
      storyTitle="From Turquoise Lakes to Ancient Citadels: Your Peruvian Adventure Awaits" ctaLink="URL"
      ctaText="Start Your Journey" />
  </div>

  <div class="container my-4">
    <h3 class="mb-1 fs-4">Experience the Magic of the Andes: Machu Picchu and Beyond</h3>
    <p class="mb-4">Trusted by Adventurers Everywhere</p>

    <div class="row">
      <div class="col-12 col-lg-12">
        <div class="row mb-3">
          <div class="col-3 col-sm-4 col-md-5 col-lg-4">
            <img class="rounded w-100 mb-2 position-relative feature-image" src="/images/home_comments/tren_1.png"
              alt="Vista del Río Azul cerca del camping en Lago Puelo, ideal para disfrutar de la naturaleza">
          </div>
          <div class="col col-md-7 col-lg-8 align-self-center pt-2">
            <p class="fw-bold mb-1 text-primary position-relative feature-quote">
              The journey from Sacred Valley to Machu Picchu exceeded all my expectations. Truly
              life-changing!
              <svg class="position-absolute" viewBox="0 0 24 24" fill="currentColor"
                style="top: -42px;left: -32px;opacity: 0.1;transform: rotate(180deg);" width="120" height="120">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M9 5a2 2 0 0 1 2 2v6c0 3.13 -1.65 5.193 -4.757 5.97a1 1 0 1 1 -.486 -1.94c2.227 -.557 3.243 -1.827 3.243 -4.03v-1h-3a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-3a2 2 0 0 1 2 -2z">
                </path>
                <path
                  d="M18 5a2 2 0 0 1 2 2v6c0 3.13 -1.65 5.193 -4.757 5.97a1 1 0 1 1 -.486 -1.94c2.227 -.557 3.243 -1.827 3.243 -4.03v-1h-3a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-3a2 2 0 0 1 2 -2z">
                </path>
              </svg>
            </p>
            <div class="d-flex-center-start text-primary">
              Expert bilingual guides and all-inclusive experiences at affordable prices.
            </div>
          </div>
        </div>

      </div>
      <div class="col-12 col-lg-12">
        <div class="row mb-3">
          <div class="col col-md-7 col-lg-8 align-self-center pt-2">
            <p class="fw-bold mb-1 text-primary position-relative feature-quote">
              Our family of three generations explored Machu Picchu together. The guides made it
              accessible for everyone!
              <svg class="position-absolute" viewBox="0 0 24 24" fill="currentColor"
                style="top: -42px;left: -32px;opacity: 0.1;transform: rotate(180deg);" width="120" height="120">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M9 5a2 2 0 0 1 2 2v6c0 3.13 -1.65 5.193 -4.757 5.97a1 1 0 1 1 -.486 -1.94c2.227 -.557 3.243 -1.827 3.243 -4.03v-1h-3a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-3a2 2 0 0 1 2 -2z">
                </path>
                <path
                  d="M18 5a2 2 0 0 1 2 2v6c0 3.13 -1.65 5.193 -4.757 5.97a1 1 0 1 1 -.486 -1.94c2.227 -.557 3.243 -1.827 3.243 -4.03v-1h-3a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-3a2 2 0 0 1 2 -2z">
                </path>
              </svg>
            </p>
            <div class="d-flex-center-start text-primary">
              Perfect for families, with flexible itineraries and special attention to all ages.
            </div>
          </div>
          <div class="col-3 col-sm-4 col-md-5 col-lg-4">
            <img class="rounded w-100 mb-2 position-relative feature-image feature-image-end"
              src="/images/home_comments/family_2.png"
              alt="Vista del Río Azul cerca del camping en Lago Puelo, ideal para disfrutar de la naturaleza">
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-12">
        <div class="row mb-4">
          <div class="col-3 col-sm-4 col-md-5 col-lg-4">
            <img class="rounded w-100 mb-2 position-relative feature-image" src="/images/home_comments/maras_3.png"
              alt="Vista del Río Azul cerca del camping en Lago Puelo, ideal para disfrutar de la naturaleza">
          </div>
          <div class="col col-md-7 col-lg-8 align-self-center pt-2">
            <p class="fw-bold mb-1 text-primary position-relative feature-quote">
              The Sacred Valley VIP tour revealed hidden Inca treasures and stunning views I never knew
              existed.
              <svg class="position-absolute" viewBox="0 0 24 24" fill="currentColor"
                style="top: -42px;left: -32px;opacity: 0.1;transform: rotate(180deg);" width="120" height="120">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M9 5a2 2 0 0 1 2 2v6c0 3.13 -1.65 5.193 -4.757 5.97a1 1 0 1 1 -.486 -1.94c2.227 -.557 3.243 -1.827 3.243 -4.03v-1h-3a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-3a2 2 0 0 1 2 -2z">
                </path>
                <path
                  d="M18 5a2 2 0 0 1 2 2v6c0 3.13 -1.65 5.193 -4.757 5.97a1 1 0 1 1 -.486 -1.94c2.227 -.557 3.243 -1.827 3.243 -4.03v-1h-3a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-3a2 2 0 0 1 2 -2z">
                </path>
              </svg>
            </p>
            <div class="d-flex-center-start text-primary">
              Small groups and knowledgeable local guides bring ancient Andean culture to life.
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="col-12 col-lg-12">
            <div class="row mb-4">
                <div class="col-5 col-md-5 col-lg-4">
                    <img class="rounded w-100 mb-2 position-relative"  src="/images/home_comments/machu_4.webp" alt="Vista del Río Azul cerca del camping en Lago Puelo, ideal para disfrutar de la naturaleza">
                </div>
                <div class="col col-md-7 col-lg-8 align-self-center pt-2">
                    <p class="fw-bold mb-1 text-primary position-relative feature-quote">
                        The Machu Picchu by car option was incredible! The most affordable way to experience the
                        wonder.
                        <svg class="position-absolute" viewBox="0 0 24 24" fill="currentColor" style="top: -42px;left: -32px;opacity: 0.1;transform: rotate(180deg);" width="120" height="120">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M9 5a2 2 0 0 1 2 2v6c0 3.13 -1.65 5.193 -4.757 5.97a1 1 0 1 1 -.486 -1.94c2.227 -.557 3.243 -1.827 3.243 -4.03v-1h-3a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-3a2 2 0 0 1 2 -2z">
                            </path>
                            <path d="M18 5a2 2 0 0 1 2 2v6c0 3.13 -1.65 5.193 -4.757 5.97a1 1 0 1 1 -.486 -1.94c2.227 -.557 3.243 -1.827 3.243 -4.03v-1h-3a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-3a2 2 0 0 1 2 -2z">
                            </path>
                        </svg>
                    </p>
                    <div class="d-flex-center-start text-primary">
                        <small class="d-block">
                            <small>Quality transportation and 24/7 support for peace of mind.</small>
                        </small>
                    </div>
                </div>
            </div>

        </div> -->
    </div>
  </div>

  <div class="container mb-5">
    <h2 class="mb-2 fs-4">Travelers Love Our Machu Picchu Tours</h2>
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
    </div>
    <p>Our excellent Trip Advisor reviews back up every aspect of our service, ensuring an authentic, safe, and
      memorable Machu Picchu tour experience. Each itinerary is carefully designed to provide flexible options,
      including a comprehensive Machu Picchu by car itinerary, guided tours from Cusco, and packages with hotel
      accommodations that cover all your needs. If you're looking for an affordable Machu Picchu tour all year, our
      Machu Picchu by car 2 days 1 night adventure invites you to uncover history and nature on a truly exciting
      journey.</p>
    <a href="#trip-advisor-reviews">
      <small>Show reviews</small>
    </a>
  </div>


  <!-- <div class="container">
</div> -->

  <div class="container my-4 container-tours-swiper">
    <h2 class="mb-1 fs-4">Unforgettable Machu Picchu Tours: Handcrafted Experiences</h2>
    <p class="mb-2">Award-Winning Tours Trusted by Thousands of Adventurers</p>
    <div class="w-100 position-absolute">
      <SwiperHomeTours v-if="tours" :tours="[...tours.filter((t) => t.is_mapi), ...tours.filter((t) => t.is_mapi)]" />
    </div>
  </div>

  <div class="my-4"></div>

  <div class="container my-4 container-tours-swiper">
    <h2 class="mb-1 fs-4">Best Day Tours in Cusco: Rainbow Mountain, Humantay Lake & Sacred Valley</h2>
    <p class="mb-2">Uncover Peru's Wonders with These Experiences</p>
    <div class="w-100 position-absolute">
      <SwiperHomeTours v-if="tours" :tours="[...tours.filter((t) => !t.is_mapi), ...tours.filter((t) => !t.is_mapi)]" />
    </div>
  </div>




  <div class="bg-success-subtle text-success-emphasis py-5" id="sintesis-contacto">
    <div class="container">
      <h4 class="mb-4">Your Best Travel Companion to Machu Picchu</h4>

      <div class="row">
        <div class="col">
          <ul class="ps-1">
            <li class="mb-3 d-flex-center-start">
              <div class="bg-success text-white rounded-circle d-flex-center-center p-2 me-3 opacity-75">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-sparkles">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z">
                  </path>
                </svg>
              </div>
              <div>
                <b>An Unforgettable Journey</b>: Over 5,000 happy travelers and verified reviews speak for our
                exceptional
                service.
              </div>
            </li>
            <li class="mb-3 d-flex-center-start">
              <div class="bg-success text-white rounded-circle d-flex-center-center p-2 me-3 opacity-75">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-map-check">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v9"></path>
                  <path d="M9 4v13"></path>
                  <path d="M15 7v8"></path>
                  <path d="M15 19l2 2l4 -4"></path>
                </svg>
              </div>
              <div>
                <b>Led by Experts</b>: Our local guides are passionate, knowledgeable, and committed to making your
                experience one of a kind.
              </div>
            </li>
            <li class="mb-3 d-flex-center-start">
              <div class="bg-success text-white rounded-circle d-flex-center-center p-2 me-3 opacity-75">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-heart-handshake">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
                  <path
                    d="M12 6l-3.293 3.293a1 1 0 0 0 0 1.414l.543 .543c.69 .69 1.81 .69 2.5 0l1 -1a3.182 3.182 0 0 1 4.5 0l2.25 2.25">
                  </path>
                  <path d="M12.5 15.5l2 2"></path>
                  <path d="M15 13l2 2"></path>
                </svg>
              </div>
              <div><b>Personalized Attention</b>: Small groups, flexible itineraries, and a service tailored to your
                pace.
              </div>
            </li>
            <li class="mb-3 d-flex-center-start">
              <div class="bg-success text-white rounded-circle d-flex-center-center p-2 me-3 opacity-75">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-credit-card">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z"></path>
                  <path d="M3 10l18 0"></path>
                  <path d="M7 15l.01 0"></path>
                  <path d="M11 15l2 0"></path>
                </svg>
              </div>
              <div>
                <b>Secure and Easy Payments</b>: Book confidently with safe payment methods and no hidden fees.
              </div>
            </li>
            <li class="mb-3 d-flex-center-start">
              <div class="bg-success text-white rounded-circle d-flex-center-center p-2 me-3 opacity-75">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-star">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z">
                  </path>
                </svg>
              </div>
              <div>
                <b>Real Stories, Real Travelers</b>: Check what others say about us on <a href="http://" target="_blank"
                  rel="noopener noreferrer">TripAdvisor</a>.
              </div>
            </li>
          </ul>
        </div>

        <div class="d-none d-lg-flex col-12 col-lg-5 col-xl-6">
          <div class="card border-success">
            <div class="card-title p-3 bg-success rounded-top">
              <div class="d-flex-center-start">
                <img class="me-2" style="height: 42px;" src="../assets/logo.webp" alt="Logo Machu Picchu Inka Trek">
                <div class="w-100 text-white">
                  <h2 class="fs-6 mb-0">Machu Picchu Inka Trek</h2>
                  <small>Online</small>
                </div>
              </div>
            </div>
            <div class="card-body d-flex flex-column justify-content-between">
              <!-- <h4 class="mt-4 mb-3">Plain your trip to cusco with confidence TODO</h4> -->
              <div>
                <h6 class="mb-1 p-3 pe-5 bg-success text-white fw-normal fs-6"
                  style="border-radius: 0 18px 18px 18px; width: fit-content;">Have Questions or Need Help Planning?
                </h6>
                <h6 class=" p-3 pe-5 bg-success text-white fw-normal fs-6"
                  style="border-radius: 18px 18px 18px 18px; width: fit-content;">Direct message us—let’s plan your trip
                  to Cusco!</h6>
              </div>
              <form onsubmit="handle_whatsapp_form(event)" class="d-flex-center-between">
                <input style="border-radius: 2rem;" name="question" type="text"
                  class="form-control form-control-lg rounded-lg me-2" placeholder="I would like to know if.."
                  data-ddg-inputtype="unknown">
                <button class="btn btn-success rounded-circle sqr-48 d-flex-center-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M4.698 4.034l16.302 7.966l-16.302 7.966a.503 .503 0 0 1 -.546 -.124a.555 .555 0 0 1 -.12 -.568l2.468 -7.274l-2.468 -7.274a.555 .555 0 0 1 .12 -.568a.503 .503 0 0 1 .546 -.124z">
                    </path>
                    <path d="M6.5 12h14.5"></path>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>





    </div>
  </div>

  <div class="container mb-0 d-block d-lg-none" style="margin-top: -40px;">
    <div class="card border-success">
      <div class="card-title p-3 bg-success rounded-top">
        <div class="d-flex-center-start">
          <img class="me-2" style="height: 42px;" src="../assets/logo.webp" alt="Logo Machu Picchu Inka Trek">
          <div class="w-100 text-white">
            <h2 class="fs-6 mb-0">Machu Picchu Inka Trek</h2>
            <small>Online</small>
          </div>
        </div>
      </div>
      <div class="card-body">
        <!-- <h4 class="mt-4 mb-3">Plain your trip to cusco with confidence TODO</h4> -->
        <h6 class="mb-1 p-3 pe-5 bg-success text-white fw-normal fs-6"
          style="border-radius: 0 18px 18px 18px; width: fit-content;">Have Questions or Need Help Planning?</h6>
        <h6 class=" p-3 pe-5 bg-success text-white fw-normal fs-6"
          style="border-radius: 18px 18px 18px 18px; width: fit-content;">Direct message us—let’s plan your trip to
          Cusco!</h6>
        <div style="height: 60px;"></div>
        <form onsubmit="handle_whatsapp_form(event)" class="d-flex-center-between">
          <input style="border-radius: 2rem;" name="question" type="text"
            class="form-control form-control-lg rounded-lg me-2" placeholder="I would like to know if.."
            data-ddg-inputtype="unknown">
          <button class="btn btn-success rounded-circle sqr-48 d-flex-center-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M4.698 4.034l16.302 7.966l-16.302 7.966a.503 .503 0 0 1 -.546 -.124a.555 .555 0 0 1 -.12 -.568l2.468 -7.274l-2.468 -7.274a.555 .555 0 0 1 .12 -.568a.503 .503 0 0 1 .546 -.124z">
              </path>
              <path d="M6.5 12h14.5"></path>
            </svg>
          </button>
        </form>
      </div>
    </div>
  </div>


  <div class="container mt-4">
    <h3 id="tripadvisor-reviews fs-6">Loved by Travelers – See Our TripAdvisor Reviews</h3>
    <div class="row align-items-center">
      <div class="col-4 col-md-4 mb-2 text-center">
        <div class="fs-5 fw-bold mb-1">EXCELLENT</div>
        <div class="mb-1">
          <img width="21" src="../assets/trip_advisor_star.webp">
          <img width="21" src="../assets/trip_advisor_star.webp">
          <img width="21" src="../assets/trip_advisor_star.webp">
          <img width="21" src="../assets/trip_advisor_star.webp">
          <img width="21" src="../assets/trip_advisor_star.webp">
        </div>
        <div class="small text-muted">Based on 447 reviews</div>
        <img src="../assets/trip_advisor_logo.webp" alt="">
      </div>

      <div class="col-8 position-relative">
        <SwiperHomeReviews/>
      </div>
    </div>
  </div>
</template>
