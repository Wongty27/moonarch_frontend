import { ref, onMounted, onBeforeUnmount, computed } from 'vue'

export function useCarousel() {
  const windowWidth = ref(window.innerWidth)
  const images = ref([
    'https://ik.imagekit.io/yz1n0vis7/14.png?updatedAt=1730642531693',
    'https://ik.imagekit.io/yz1n0vis7/16.png?updatedAt=1730642531356',
    'https://ik.imagekit.io/yz1n0vis7/15.png?updatedAt=1730642531262',
    'https://ik.imagekit.io/yz1n0vis7/12.png?updatedAt=1730642531168',
    'https://ik.imagekit.io/yz1n0vis7/11.png?updatedAt=1730642531079',
    'https://ik.imagekit.io/yz1n0vis7/2.png?updatedAt=1730642528098'
  ])

  const carouselHeight = computed(() => {
    if (windowWidth.value <= 600) return 300
    if (windowWidth.value <= 960) return 400
    return 607
  })

  const onResize = () => {
    windowWidth.value = window.innerWidth
  }

  onMounted(() => {
    window.addEventListener('resize', onResize)
    onResize()
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', onResize)
  })

  return {
    images,
    carouselHeight
  }
}