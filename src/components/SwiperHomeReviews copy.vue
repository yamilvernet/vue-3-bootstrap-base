<template>
    <swiper 
      :loop="true"
      :pagination="{
        el: '.swiper-pagination',
        dynamicBullets: true,
      }"
      :navigation="{
        nextEl: '.swiper-reviews-button-next'
      }"
      @swiper="onSwiper" @slideChange="onSlideChange">

    <swiper-slide v-for="(review,r) in reviews" :key="r">
      <div class="card card-body border-primary">
        <div class="d-flex-center-between">
          <img class="sqr-32 object-fit rounded-circle" :src="review.thumb" loading="lazy">
          <div class="w-100 mx-2">
            <div class="small fw-bold">
              {{ review.name }}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="blue" class="icon icon-tabler icons-tabler-filled icon-tabler-rosette-discount-check">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"></path>
              </svg>
            </div>
            <div class="small text-muted">{{review.date}}</div>
          </div>
          <img src="/images/trip_advisor_ico.webp" alt="">
        </div>
        <p>
          {{review.review.substring(0,160)+"..."}}
        </p>
      </div>
    </swiper-slide>
    <button @click.prevent="swiper_right" class="swiper-reviews-button-next text-primary bg-white rounded-circle border border-primary sqr-32 d-flex-center-center">
      <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg>
    </button>
</swiper>
</template>


<script setup>
import { capitalize_each_word, de_slugify, get_image_path } from '../utils';
import { onMounted, ref } from 'vue';
const reviews = ref(null);
onMounted(() => {
  fetch('/trip_advisor_reviews.json').then((response) => {
    return response.json();
  }).then((data) => {
    console.log('data en review',data);
    reviews.value = data;
    return data;
  });
});

function swipe_right() {
  console.log('swipeRight');
};
</script>
<script>
// Import Swiper Vue.js components
import {
    Swiper,
    SwiperSlide
} from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log('swiper', swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
            reviews:null,
        };
    },
};
</script>
