import { ref } from 'vue'

export function useGlitchSections() {
  const sections = ref([
    {
      id: 'welcome',
      dynamicText: 'WELCOME',
      opacity: 100,
      showButton: true,
      wrapperHeight: '100vh',
      staticText: ''
    },
    {
      id: 'about',
      dynamicText: 'ABOUT US',
      opacity: 100,
      showButton: false,
      wrapperHeight: '30vh',
      staticText: ''
    },
    {
      id: 'contact',
      dynamicText: 'CONTACT US',
      opacity: 100,
      showButton: false,
      wrapperHeight: '30vh',
      staticText: ''
    }
  ])

  return {
    sections
  }
}