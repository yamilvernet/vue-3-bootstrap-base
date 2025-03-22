<template>
    <footer class="bg-primary mt-5 py-3">
      <div class="container">
        <div class="row mb-4">
          <div class="col mb-2">
            <div class="d-flex-center-start">
              <img class="me-2" style="height: 42px;" src="../../assets/logo.webp" alt="Logo Machu Picchu Inka Trek">
              <div class="w-100 text-white">
                <h2 class="fs-5 mb-0">Machu Picchu Inka Trek</h2>
                <small>Experiences that stay with you!</small>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-7 mb-2">
            <div class="d-flex-start-d-flex-lg-end">
              <a class="text-white text-decoration-none d-flex-center-start" 
              
              :href="get_whatsapp_url(ENV.PHONE_NUMBER,'Hi%20Machupicchu%20Inka%20Trek')" target="_blank" rel="noopener noreferrer">
                <IconBrandWhatsapp size="18"/>&nbsp;+{{ ENV.PHONE_NUMBER }}</a>
              <div class="mx-2"></div>
              <div class="text-white d-flex-center-start">
                <IconClock size="18"/>&nbsp;Mon - Sun 8am-8pm PET
              </div>
            </div>
          </div>
        </div>
        
        <div class="row text-white">
          
          <div class="col-12 col-md-6 col-lg-3" v-if="tours">
            <h2 class="fs-6 mb-1">Machu Picchu Tours</h2>
            <ul class="ps-0 small">
                <li style='list-style: none' v-for="tour in tours.filter((t)=>t.is_mapi)" :key="tour.slug">
                    <router-link class="text-decoration-none text-white" :to="{name:'tour',params:{slug:tour.slug}}">{{ de_slugify(tour.slug,capitalize_each_word) }}</router-link>`
                </li>
            </ul>
          </div>
          <div class="col-12 col-md-6 col-lg-3" v-if="tours">
            <h2 class="fs-6 mb-1">Cusco Tours</h2>
            <ul class="ps-0 small">
                <li style='list-style: none' v-for="tour in tours.filter((t)=>!t.is_mapi)" :key="tour.slug">
                    <router-link class="text-decoration-none text-white" :to="{name:'tour',params:{slug:tour.slug}}">{{ de_slugify(tour.slug,capitalize_each_word) }}</router-link>`
                </li>
            </ul>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <h5 class="fs-6 mb-1">Information</h5>
            <ul class="ps-0 small">
              <li style="list-style: none;"><router-link class="text-white text-decoration-none" to="/terms-and-conditions">Terms and Condition</router-link></li>
              <li style="list-style: none;"><router-link class="text-white text-decoration-none" to="/privacy-policy">Privacy Policy</router-link></li>
              <li style="list-style: none;"><router-link class="text-white text-decoration-none" to="/booking-policy">Cancellation Policy</router-link></li>
              <li style="list-style: none;"><router-link class="text-white text-decoration-none" to="/esnna-code">ESNNA Code</router-link></li>
            </ul>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <h5 class="fs-6 mb-1">Our Blog</h5>
            <ul class="ps-0 small">
              <li style="list-style: none;">How to get to Machu Picchu all ways 2025</li>
              <li style="list-style: none;">Best markets in Cusco</li>
              <li style="list-style: none;">See more blog</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

    <div class="container d-flex-center-between flex-wrap my-2">
      <div class="small text-muted">© Machu Picchu Inka trek, 2025 All rights reserved.</div>
      <div class="small text-muted">Made with <IconHeartFilled size="14" color="red"/> by <a href="http://quantica.digital" target="_blank" rel="noopener noreferrer"><img src="../../assets/quantica.svg" style="vertical-align: sub;" height="14" alt=""></a> </div>
    </div>
</template>

<script setup>
import { IconBrandWhatsapp,IconClock, IconHeartFilled } from '@tabler/icons-vue';
import { capitalize_each_word, de_slugify , get_whatsapp_url} from '../../utils';
import { ENV } from '../../env';

const props = defineProps({
    'tours': {
        type: Array,
        required: true
    }
})

</script>