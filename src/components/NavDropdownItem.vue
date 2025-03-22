<template>
  <li class="d-flex-center-start dropdown-item">
    <TourListItem/>
  </li>
</template>

<script setup>
import { get_image_path,de_slugify,capitalize_each_word } from '../utils';
const props = defineProps(['tourSlug','tourImage','tourType'])
</script>

<style scoped>

</style>