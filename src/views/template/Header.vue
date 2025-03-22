<template>
    <!-- Search modal -->
    <button type="button" class="d-none" data-bs-toggle="modal" data-bs-target="#searchModal"></button>
    <div class="modal fade" id="searchModal" tabindex="-1" aria-labelledby="searchModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body">
                    <h5>What are you looking for?</h5>
                    <form>
                        <input type="text" class="form-control" placeholder="Enter places or tours" id="search_input"
                        @keyup="handleKeyUp">
                    </form>
                    <div id="results-container" class="mt-2">
                        <ul v-if="searchResults.length" class="list-group">
                            <li
                                v-for="tour in searchResults"
                                :key="tour.slug"
                                class="list-group-item d-flex-center-start"
                            >
                                <TourListItem :tourType="tour.tour_type" :tourSlug="tour.slug" :tourPrice="tour.price" :tourImage="tour.gallery_images_url[0]"/>
                            </li>
                        </ul>
                        <div v-else-if="searchQuery" class="text-muted">
                            No results found.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Mobile Offcanvas menu -->
    <div class="offcanvas offcanvas-top rounded-bottom" style="height: fit-content !important;" tabindex="-1"
        id="offcanvasHeaderMenu" aria-labelledby="offcanvasTopLabel">
        <div class="offcanvas-header">
            <div class="d-flex-center-start">
                <img class="me-2" style="height: 42px;" src="../../assets/logo.webp" alt="Logo Machu Picchu Inka Trek">
                <h2 class="fs-5 mb-0 text-primary">Machu Picchu Inka Trek</h2>
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">

            <button class="mb-2 btn fw-bold text-primary w-100 text-start p-0 d-flex-center-between" type="button"
                data-bs-toggle="collapse" data-bs-target="#collapseMachuTours" aria-expanded="false"
                aria-controls="collapseMachuTours">
                <span>Machu Picchu Tours</span>
                <IconChevronDown/>
            </button>

            <div class="collapse mb-3" id="collapseMachuTours">
                <div class="">
                    <ul class="list-group list-group-flush">
                    </ul>
                </div>
            </div>

            <button class="mb-2 btn fw-bold text-primary w-100 text-start p-0 d-flex-center-between" type="button"
                data-bs-toggle="collapse" data-bs-target="#collapseCuscoTours" aria-expanded="false"
                aria-controls="collapseCuscoTours">
                <span>Cusco Tours</span>
                <IconChevronDown/>
            </button>

            <div class="collapse mb-3" id="collapseCuscoTours">
                <div class="">
                    <ul class="list-group list-group-flush">
                    </ul>
                </div>
            </div>

            <div class="mt-2 btn btn-outline btn-outline-primary w-100" data-bs-toggle="modal"
                data-bs-target="#searchModal">Search</div>

            <a class="d-inline-block text-center w-100 mt-4 text-decoration-none text-white px-2 py-2 rounded bg-success"
                href="https://api.whatsapp.com/send?phone=51930212433&text=Hi%20Machupicchu%20Inka%20Trek"
                target="_blank" rel="noopener noreferrer">
                <IconBrandWhatsapp/>
                Let's talk now
            </a>
        </div>
    </div>
    <!-- Top line wpp and time -->
    <div class="bg-primary header-top-bar py-1">
        <div class="container d-flex-center-between small">
            <div class="w-100 d-flex-center-center">
                <a class="text-white text-decoration-none d-flex-center-start small"
                :href="get_whatsapp_url(ENV.PHONE_NUMBER,'Hi%20Machupicchu%20Inka%20Trek')"
                    target="_blank" rel="noopener noreferrer">
                    <IconBrandWhatsapp size="16"/>&nbsp;+51 930 212 433
                </a>
                <div class="mx-2"></div>
                <div class="text-white d-flex-center-start small">
                    <IconClock size="16"/>&nbsp;Mon - Sun 8am-8pm PET
                </div>
            </div>
        </div>
    </div>
    <!-- Main header -->
    <div class="header-nav-container position-absolute w-100">
        <nav class="container my-3">
            <div class="w-100 d-flex-center-between">
                <a href="/">
                    <img class="" style="height: 42px;" src="../../assets/logo.webp" alt="Logo Machu Picchu Inka Trek">
                </a>
                <div class="d-none d-md-flex d-flex-center-start">
                    <div class="dropdown">
                        <button class="btn btn-link text-decoration-none dropdown-toggle" :class="{'text-white':useRoute().meta.noHeader!=true}" type="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Machu Picchu Tours
                        </button>
                        <ul class="dropdown-menu mt-3" id="dropdown-mapi">
                            <template v-if="tours">
                                <li class="d-flex-center-start dropdown-item" v-for="tour in tours.filter((t)=>t.is_mapi)" :key="tour.slug" >
                                    <TourListItem :tourType="tour.tour_type" :tourSlug="tour.slug" :tourPrice="tour.price" :tourImage="tour.gallery_images_url[0]"/>
                                </li>
                            </template>
                            <div v-else>
                                CARGANDO...
                            </div>
                        </ul>
                    </div>
                    <div class="mx-1"></div>

                    <div class="dropdown">
                        <button class="btn btn-link text-decoration-none dropdown-toggle" :class="{'text-white':useRoute().meta.noHeader!=true}" type="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Cusco Tours
                        </button>
                        <ul class="dropdown-menu mt-3" id="dropdown-cusco">
                            <template v-if="tours">
                                <li class="d-flex-center-start dropdown-item" v-for="tour in tours.filter((t)=>!t.is_mapi)" :key="tour.slug" >
                                    <TourListItem :tourType="tour.tour_type" :tourSlug="tour.slug" :tourPrice="tour.price" :tourImage="tour.gallery_images_url[0]"/>
                                </li>
                            </template>
                            <div v-else>
                                CARGANDO...
                            </div>
                        </ul>
                    </div>
                    <div class="mx-1"></div>
                    <button class="btn btn-link" :class="{'text-white':useRoute().meta.noHeader!=true}" data-bs-toggle="modal" data-bs-target="#searchModal">
                        <IconSearch/>
                    </button>

                    <div class="mx-2"></div>
                    <a class="text-decoration-none text-white px-2 py-2 rounded bg-success"
                        :href="get_whatsapp_url(ENV.PHONE_NUMBER)"
                        target="_blank" rel="noopener noreferrer">
                        <IconBrandWhatsapp/>
                        Let's talk now
                    </a>
                </div>
                <div class="d-flex-center-between d-md-none">
                    <a class="text-decoration-none text-white px-2 py-2 rounded bg-success"
                        :href="get_whatsapp_url(ENV.PHONE_NUMBER)"
                        target="_blank" rel="noopener noreferrer">
                        <IconBrandWhatsapp/>
                        Let's talk now
                    </a>
                    <div class="mx-1"></div>
                    <button class="btn btn-sm bg-white text-success rounded py-2" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasHeaderMenu" aria-controls="offcanvasHeaderMenu">
                        <IconMenu2/>
                    </button>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
// import { capitalize_each_word, de_slugify, get_image_path } from '../../utils';
import { debounce } from 'lodash-es'; // Import lodash for debouncing
import { IconChevronDown,IconBrandWhatsapp,IconMenu2,IconSearch,IconClock } from '@tabler/icons-vue';
// import NavDropdownItem from '../../components/NavDropdownItem.vue';
import TourListItem from '../../components/TourListItem.vue';

import { get_whatsapp_url } from '../../utils';
import {ENV} from '../../env';

const props = defineProps({
    'tours': {
        type: Array,
        required: true
    }
})

console.log('rutt',useRoute());


// Reactive variables for search
const searchQuery = ref('');
const searchResults = ref([]);

// Debounced search function
const performSearch = debounce(() => {
    if (!searchQuery.value.trim()) {
        searchResults.value = [];
        return;
    }

    // Filter tours by slug
    searchResults.value = props.tours.filter(tour =>
        tour.slug.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
}, 300); // 300ms debounce delay

// Handle keyup event
function handleKeyUp(event) {
    searchQuery.value = event.target.value;
    performSearch();
}
</script>