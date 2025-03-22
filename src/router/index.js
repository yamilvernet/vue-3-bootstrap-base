import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TourView from '../views/TourView.vue'
import TermsConditionsView from '../views/TermsConditionsView.vue'
import PrivacyPolicyView from '../views/PrivacyPolicyView.vue'
import BookingPolicyView from '../views/BookingPolicyView.vue'
import EsnnaCodeView from '../views/EsnnaCodeView.vue'

const router = createRouter({
  scrollBehavior() {
    return { top: 0, left: 0 }
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/tour/:slug',
      name: 'tour',
      component: TourView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/terms-and-conditions',
      name: 'terms_and_conditions',
      meta: {noHeader: true},
      component: () => import('../views/TermsConditionsView.vue')
    },
    {
      path: '/privacy-policy',
      name: 'privacy_policy',
      meta: {noHeader: true},
      component: () => import('../views/PrivacyPolicyView.vue')
    },
    {
      path: '/booking-policy',
      name: 'booking_policy',
      meta: {noHeader: true},
      component: () => import('../views/BookingPolicyView.vue')
    },
    {
      path: '/esnna-code',
      name: 'esnna_code',
      meta: {noHeader: true},
      component: () => import('../views/EsnnaCodeView.vue')
    }
  ]
})

router.afterEach((to, from) => {
  window.scrollTo(0, 0)
})

router.beforeEach((to, from) => {
  window.scrollTo(0, 0)
  // console.log('acasito',to,from);
  if(to.name=='tour'){
    let button_modal = document.querySelector('.modal.show')
    if(button_modal) {
      button_modal = document.querySelector(`[data-bs-target="#${button_modal.id}"]`)
      button_modal.click()
      // console.log('buttonmodal',button_modal);
    }
    
  }
  
  return true
})

export default router
