<template>
    <swiper 
    :slides-per-view="1.15" 
    :space-between="20" 
    :followFinger="true" 
    :autoplay="{delay: 5000}" 
    :loop="true" 
    :breakpoints="{
            576: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 2,
            },
            1400: {
              slidesPerView: 3,
            }
}" @swiper="onSwiper" @slideChange="onSlideChange">

    <swiper-slide v-for="tour in tours" :key="tour.slug">
        <article class="product-gallery-item">
            <div class="product-gallery-item-cover">
              <img class="rounded" :src="get_image_path(tour.slug,'mobile',tour.cover_image_url)" :alt="tour.keyword_title">
              <div class="cover-shadow rounded d-flex-end-start">
                <header class="p-2 product-gallery-item-cover-data">
                  <span class="badge bg-primary mb-1">
                    <!-- <svg aria-hidden="true" style="vertical-align: text-bottom;" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 13a7 7 0 1 0 14 0a7 7 0 0 0 -14 0z"></path><path d="M14.5 10.5l-2.5 2.5"></path><path d="M17 8l1 -1"></path><path d="M14 3h-4"></path></svg> -->
                    <time>{{ tour.tour_type }}</time>
                  </span>
                  <router-link :to="{name:'tour',params:{slug:tour.slug}}" class="text-decoration-none" >
                    <h2 class="mb-1 fs-6 ps-1">{{ de_slugify(tour.slug,capitalize_each_word) }}</h2>
                    <data class="ps-1 fw-bold" value="390">${{tour.price}} USD</data>
                  </router-link>
                </header>
              </div>
              
            </div>
            <div class="product-gallery-item-info px-3 py-3 pt-4 rounded border">
              <p class="mb-1 small">{{ tour.story_title }}</p>
              <div class="d-flex-center-start">
                <span class="text-muted small">
                  <svg style="vertical-align: text-bottom;" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M6 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M18 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M4 17h-2v-11a1 1 0 0 1 1 -1h14a5 7 0 0 1 5 7v5h-2m-4 0h-8"></path><path d="M16 5l1.5 7l4.5 0"></path><path d="M2 10l15 0"></path><path d="M7 5l0 5"></path><path d="M12 5l0 5"></path></svg>
                  Pickup service
                </span> 
                <div class="mx-2"></div>
                <span class="text-muted small">
                  <svg style="vertical-align: text-bottom;" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M15 5l0 2"></path><path d="M15 11l0 2"></path><path d="M15 17l0 2"></path><path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2"></path></svg>
                  Tickets included
                </span>
              </div>
            </div>
          </article>
    </swiper-slide>

</swiper>
</template>


<script setup>
import { capitalize_each_word, de_slugify, get_image_path } from '../utils';
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
    props:['tours'],
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
        };
    },
};
</script>
