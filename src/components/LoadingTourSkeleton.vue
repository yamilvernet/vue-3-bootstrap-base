<template>
  <div class="header-full-cover position-relative d-flex align-items-end" style="transition:all 0.5s;">
    <!-- <img class="w-100 h-100 object-fit-cover"
    src="/src/assets/cover_blur.png" alt=""> -->
    <div class="skeleton-line w-100 h-100" style=""></div>
    <div class="position-absolute w-100 py-4">
      <div class="container">
        <div class="skeleton-line w-50 mb-3" style="height: 28px;"></div>
        <div class="skeleton-line w-100 mb-2" style="height: 38px;"></div>
        <div class="skeleton-line w-75" style="height: 38px;"></div>
        <div class="skeleton-line mt-3" style="width:180px;height: 38px;"></div>
      </div>
    </div>
  </div>

  <div class="container pt-4 mb-3">
    <div class="skeleton-line mb-2" style="width: 180px; height: 32px;"></div>
    <div class="skeleton-line mb-3" style="width: 220px; height: 26px;"></div>
    <div class="skeleton-line mb-2" style="width: 100%; height: 18px;"></div>
    <div class="skeleton-line mb-2" style="width: 75%; height: 18px;"></div>
  </div>

  <div class="container">

    <div class="row g-2 mb-3">
      <div class="col-8 col-md-6">
        <div class="skeleton-line" style="height: 240px;"></div>
      </div>

      <div class="col">
        <div class="row g-2 h-100">
          <div class="col-12 col-md-6">
            <div class="w-100 h-100 skeleton-line"></div>
            <!-- <img class="w-100 object-fit-cover rounded h-64-120-180"
              src="images/tours/sacred-valley-vip-tour-cusco/mobile/gallery_1_how_much_does_it_cost_to_go_to_the_sacred_valley_with_inca_agricultural_terraces_tour.webp"
              alt="sacred valley vip tour cusco gallery 1 how much does it cost to go to the sacred valley with inca agricultural terraces tour"> -->
          </div>
          <div class="col-12 col-md-6">
            <!-- <img class="w-100 object-fit-cover rounded h-64-120-180"
              src="images/tours/sacred-valley-vip-tour-cusco/mobile/gallery_2_ollantaytambo_fortress_ancient_ruins_cusco_peru_tour.webp"
              alt="sacred valley vip tour cusco gallery 2 ollantaytambo fortress ancient ruins cusco peru tour"> -->
            <div class="w-100 h-100 skeleton-line"></div>
            </div>
          <div class="col-12 col-md-6">
            <!-- <img class="w-100 object-fit-cover rounded h-64-120-180"
              src="images/tours/sacred-valley-vip-tour-cusco/mobile/gallery_3_pisaq_cusco_market_and_ruins_guided_tour_in_sacred_valley.webp"
              alt="sacred valley vip tour cusco gallery 3 pisaq cusco market and ruins guided tour in sacred valley"> -->
            <div class="w-100 h-100 skeleton-line"></div>
            </div>
          <div class="col-12 col-md-6">
            <!-- <img class="w-100 object-fit-cover rounded h-64-120-180"
              src="images/tours/sacred-valley-vip-tour-cusco/mobile/gallery_4_1_day_sacred_valley_tour_vip_5_places_intipunku.webp"
              alt="sacred valley vip tour cusco gallery 4 1 day sacred valley tour vip 5 places intipunku"> -->
            <div class="w-100 h-100 skeleton-line"></div>
            </div>
        </div>
      </div>

    </div>

    <div class="skeleton-line" style="height: 80px;"></div>
  </div>
</template>

<style scoped>
.cover-full {
  width: 100%;
  height: 640px;
  object-fit: cover;
  /* filter: blur(20px); */
}

.skeleton-line {
  width: 100%;
  height: 20px;
  background: linear-gradient(90deg, #b9b9b90a, #8585852e, #b9b9b900);
  border-radius: 12px;
  animation: shimmer 3s infinite cubic-bezier(.79, .14, .15, .86);
  filter: blur(1.2);
}

.skeleton-line.short {
  width: 60%;
}

@keyframes shimmer {
  0% {
    background-position: 0 0;
    filter: blur(1.2) brightness(1.5);

  }

  50% {
    background-position: 500px 0;
    filter: blur(1.5) brightness(1.8);

  }

  100% {
    background-position: 0 0;
    filter: blur(1.2) brightness(1.5);

  }
}
</style>