<template>
  <img class="sqr-48 rounded" :src="get_image_path(tourSlug,'mobile',tourImage)" alt="">
  <div class="d-flex flex-column ms-2">
      <router-link class="text-decoration-none" :to="{name:'tour',params:{slug:tourSlug}}">{{ de_slugify(tourSlug,capitalize_each_word) }}</router-link>
      <div class="text-muted small" style="width: fit-content;"><span class="fw-bold">${{tourPrice}}</span> {{ tourType }}</div>
  </div>
</template>

<script setup>
import { get_image_path,de_slugify,capitalize_each_word } from '../utils';
const props = defineProps(['tourSlug','tourImage','tourType','tourPrice'])

// function nav_push(slug){
//   router.push({name:'tour',params:{slug:slug}})
//   document.querySelector('#searchModal').click
// }

</script>

<style scoped>

</style>