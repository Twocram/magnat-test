<template>
  <BaseLayout>
    <div class="container">
      <VSelect
        class="select-home"
        v-model="value"
        :options="cities"
        placeholder="Введите город"
        not-found-label="Город не найден"
      />

      <div class="select-content">
        <div v-if="value" class="select-content__item">
          <div class="select-content__item-name">
            {{ value.name }}
          </div>

          <div class="select-content__item-description">
            {{ value.description }}
          </div>
        </div>

        <div v-else>Город не выбран</div>
      </div>
    </div>
  </BaseLayout>
</template>

<script setup lang="ts">
import VSelect from '@/components/VSelect.vue'
import BaseLayout from '@/layouts/BaseLayout.vue'
import { computed, ref } from 'vue'
import type { Option } from '@/types/select'
import { useCityStore } from '@/stores/city'

const value = ref<Option | null>(null)
const cityStore = useCityStore()

const cities = computed<Option[]>(() => {
  return cityStore.cities
})
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
}

.select {
  &-home {
    max-width: 230px;
    margin-bottom: 248px;
  }

  &-content {
    display: flex;
    flex-direction: column;

    &__item {
      &-name {
        font-weight: 700;
        font-size: 24px;
        line-height: 29.05px;
        text-align: center;
        margin-bottom: 32px;
      }

      &-description {
        font-size: 16px;
        max-width: 660px;
        width: 100%;
        line-height: 19.36px;
      }
    }
  }
}
</style>
