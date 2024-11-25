import type { Option } from '@/types/select'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCityStore = defineStore('city', () => {
  const cities = ref<Option[]>([
    {
      id: 1,
      name: 'Москва',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat soluta veritatis deleniti blanditiis, ipsa quos nisi ipsam ad recusandae numquam in placeat nemo distinctio unde praesentium alias, magnam rem optio.',
    },
    {
      id: 2,
      name: 'Санкт-Петербург',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat soluta veritatis deleniti blanditiis, ipsa quos nisi ipsam ad recusandae numquam in placeat nemo distinctio unde praesentium alias, magnam rem optio.',
    },
    {
      id: 3,
      name: 'Новосибирск',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat soluta veritatis deleniti blanditiis, ipsa quos nisi ipsam ad recusandae numquam in placeat nemo distinctio unde praesentium alias, magnam rem optio.',
    },
    {
      id: 4,
      name: 'Екатеринбург',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat soluta veritatis deleniti blanditiis, ipsa quos nisi ipsam ad recusandae numquam in placeat nemo distinctio unde praesentium alias, magnam rem optio.',
    },
    {
      id: 5,
      name: 'Казань',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat soluta veritatis deleniti blanditiis, ipsa quos nisi ipsam ad recusandae numquam in placeat nemo distinctio unde praesentium alias, magnam rem optio.',
    },
    {
      id: 6,
      name: 'Нижний Новгород',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat soluta veritatis deleniti blanditiis, ipsa quos nisi ipsam ad recusandae numquam in placeat nemo distinctio unde praesentium alias, magnam rem optio.',
    },
    {
      id: 7,
      name: 'Самара',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat soluta veritatis deleniti blanditiis, ipsa quos nisi ipsam ad recusandae numquam in placeat nemo distinctio unde praesentium alias, magnam rem optio.',
    },
    {
      id: 8,
      name: 'Уфа',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat soluta veritatis deleniti blanditiis, ipsa quos nisi ipsam ad recusandae numquam in placeat nemo distinctio unde praesentium alias, magnam rem optio.',
    },
    {
      id: 9,
      name: 'Челябинск',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat soluta veritatis deleniti blanditiis, ipsa quos nisi ipsam ad recusandae numquam in placeat nemo distinctio unde praesentium alias, magnam rem optio.',
    },
    {
      id: 10,
      name: 'Красноярск',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat soluta veritatis deleniti blanditiis, ipsa quos nisi ipsam ad recusandae numquam in placeat nemo distinctio unde praesentium alias, magnam rem optio.',
    },
  ])

  return { cities }
})
