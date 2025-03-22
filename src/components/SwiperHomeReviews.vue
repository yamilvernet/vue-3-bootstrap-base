<template>
  <swiper :loop="true" :pagination="{
    dynamicBullets: true,
  }" :modules="modules" :navigation="{
      nextEl: '.nextSlide',
    }" class="mySwiper">
    <swiper-slide v-for="s in reviews">
      <div class="card card-body border-primary">
        <div class="d-flex-center-between">
          <img class="sqr-32 object-fit rounded-circle" :src="s.thumb" loading="lazy">
          <div class="w-100 mx-2">
            <div class="small fw-bold">
              {{s.name}}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="blue" class="icon icon-tabler icons-tabler-filled icon-tabler-rosette-discount-check">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"></path>
              </svg>
            </div>
            <div class="small text-muted">{{s.date}}</div>
          </div>
          <img src="/images/trip_advisor_ico.webp" alt="">
        </div>
        <p>
          {{s.review.substring(0,160)+"..."}}
        </p>
      </div>
    </swiper-slide>
  </swiper>
  <button class="nextSlide text-primary bg-white rounded-circle border border-primary sqr-32 d-flex-center-center">
    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg>
  </button>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './style.css';

// import required modules
import { Navigation } from 'swiper/modules';
// import required modules
import { Pagination } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      reviews: [],
    };
  },
  mounted(){
    fetch('trip_advisor_reviews.json')
      .then(response => response.json())
      .then(data => {
        this.reviews = data;
      });
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
};
</script>

<style scoped>
.nextSlide {
  position: absolute;
  top: 40%;
  z-index: 2;
  right: -3px;
}
</style>
