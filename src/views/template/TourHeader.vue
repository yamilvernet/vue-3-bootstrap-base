<template>
        <picture>
            <img id="full-img" :src="imageSrc" :alt="imageAlt">
        </picture>

        <div class="header-full-cover-shadow"></div>
        <div class="header-full-cover-content">
            <div class="container">
                <h1 class="fs-6 mb-1">{{ keywordTitle }}</h1>
                <h2 class="fw-bold mb-2">{{ storyTitle }}</h2>
                <a class="btn btn-primary" :href="ctaLink">{{ ctaText }}</a>
            </div>
        </div>
</template>

<script>
export default {
    name: "TourHeader",
    props: {
        imageSrc: {
            type: String,
            required: true,
        },
        imageAlt: {
            type: String,
            default: "Tour Image",
        },
        keywordTitle: {
            type: String,
            required: true,
        },
        storyTitle: {
            type: String,
            required: true,
        },
        ctaText: {
            type: String,
            default: "CTA",
        },
        ctaLink: {
            type: String,
            default: "#sintesis-contacto",
        },
    },
};
</script>
<!-- 
<style scoped>
.tour-header {
    position: relative;
}

.header-full-cover-shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
}

.header-full-cover-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    text-align: center;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
}
</style> -->