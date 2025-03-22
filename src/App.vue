<script setup>
import { RouterLink, RouterView,useRoute } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import Header from './views/template/Header.vue'
import Footer from './views/template/Footer.vue'
import { get_or_load_data_from } from './utils'
import { ref,onMounted } from 'vue'


const tours = ref(null)
// tours.value = await get_or_load_data_from('tours')
// tours.value = 'hola'


// console.log('tenemos tours en app',tours.value);
onMounted(async () => {
  console.log('mounted app');
  tours.value = Object.values(await get_or_load_data_from('tours'))
  console.log('tenemos tours en app',tours.value);
})


</script>

<template>
  <!-- Header -->
  <Header :tours="tours"></Header>
  <div v-if="useRoute().meta.noHeader==true" style="height: 90px;"></div>
  <!-- Main -->
  <RouterView />
  <!-- Footer -->
   <Footer :tours="tours"></Footer>
</template>

<style scoped>
</style>
