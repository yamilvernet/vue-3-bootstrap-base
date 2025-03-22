<script setup>
import { ENV } from '../env'
// import { computed } from 'vue'

// const currentUrl = computed(() => window.location.href)
</script>
<template>
	<div class="text-center h-100 d-flex flex-column justify-content-center align-items-center">
		<img src="../assets/404_empty_state.png" alt="404 Image">
		<h1>
			Something wrong here..
		</h1>
		<p class="small text-muted">Sorry. We are having some technical problems (as you can see) try to refresh the page, sometimes it works :)</p>
		<p>Contact us by whatsapp right now <a :href="'https://api.whatsapp.com/send?phone='+ENV.PHONE_NUMBER.replaceAll(' ','')" target="_blank" rel="noopener noreferrer">+{{ ENV.PHONE_NUMBER }}</a></p>
	</div>
</template>
