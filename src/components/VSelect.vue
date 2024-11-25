<script lang="ts" setup>
import { ref, computed } from 'vue'
import VArrowIcon from './icons/VArrowIcon.vue'
import type { Option } from '@/types/select'

type Props = {
  options: Option[]
  placeholder: string
  notFoundLabel?: string
}

const props = defineProps<Props>()

const searchQuery = ref('')
const isOpen = ref(false)
const selectedOption = defineModel<Option | null>()

const filteredOptions = computed(() => {
  return searchQuery.value
    ? props.options.filter((option) =>
        option.name.toLowerCase().includes(searchQuery.value.toLowerCase()),
      )
    : props.options
})

const selectOption = (option: Option) => {
  selectedOption.value = option
  searchQuery.value = option.name
  isOpen.value = false
}

const openSelect = () => {
  isOpen.value = true
}

const clickOutsideHandler = () => {
  isOpen.value = false
}
</script>

<template>
  <div class="custom-select" v-click-outside="clickOutsideHandler">
    <div class="select-input" @click="openSelect">
      <input type="text" v-model="searchQuery" :placeholder="placeholder" @focus="isOpen = true" />
      <VArrowIcon class="dropdown-icon" :class="{ open: isOpen }" />
    </div>

    <ul v-if="isOpen" class="select-options">
      <li
        v-for="option in filteredOptions"
        :key="option.id"
        @click="selectOption(option)"
        :class="{ selected: option.id === selectedOption?.id }"
      >
        {{ option.name }}
      </li>
      <li v-if="filteredOptions.length === 0" class="no-options">
        {{ notFoundLabel ? notFoundLabel : 'Ничего не найдено' }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.custom-select {
  position: relative;
  width: 100%;

  .select-input {
    display: flex;
    align-items: center;
    border: 1px solid #000;
    height: 40px;
    border-radius: 8pt;
    padding: 12.5px 16px;
    background: #fff;
    cursor: pointer;

    input {
      border: none;
      outline: none;
      flex: 1;
      font-size: 12px;

      &::placeholder {
        color: #000000;
        font-size: 12px;
      }
    }

    .dropdown-icon {
      margin-left: 0.5rem;
      transition: transform 0.3s ease;

      &.open {
        transform: rotate(180deg);
      }
    }
  }

  .select-options {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    max-height: 200px;
    overflow-y: auto;
    z-index: 10;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      padding: 0.5rem;
      cursor: pointer;
      font-size: 12px;

      &:hover,
      &.selected {
        background: #f0f0f0;
      }

      &.no-options {
        color: #888;
        text-align: center;
      }
    }
  }
}
</style>
