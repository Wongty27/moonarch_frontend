import { ref } from 'vue'

export function useLocations() {
  const locations = ref([
    {
      address: 'Menara Gamuda,Pj Trade Centre, No. 8, Jalan PJU 8/8A, Damansara Perdana, 47820 Petaling Jaya, Selangor',
      headline: 'Damansara Perdana HQ',
      address1: 'Pj Trade Centre, No. 8',
      address2: 'Jalan PJU 8/8A, Damansara Perdana',
      address3: '47820 Petaling Jaya, Selangor',
      phone: '3-4565 4321',
      email: 'gamudahq@gmail.com'
    },
    {
      address: 'Gamuda Learning Centre (GLC), 53-61, Jalan SS 22/23, Damansara Jaya, 47400 Petaling Jaya, Selangor',
      headline: 'Petaling Jaya Branch',
      address1: '53-61',
      address2: 'Jalan SS 22/23, Damansara Jaya',
      address3: '47400 Petaling Jaya, Selangor',
      phone: '3-1415 9265',
      email: 'gamudalearningcentre@gmail.com'
    },
    {
      address: 'Universiti Tenaga Nasional (UNITEN), Jalan Wawasan, 43009 Kajang, Selangor',
      headline: 'Kajang Branch',
      address1: '1, Jalan Wawasan',
      address2: '43009 Kajang',
      address3: 'Selangor',
      phone: '3-2132 2324',
      email: 'gamudafarfaraway@gmail.com'
    }
  ])

  return {
    locations
  }
}