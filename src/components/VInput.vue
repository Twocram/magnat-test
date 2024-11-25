<template>
  <input class="input" v-model="modelValue" :type="type" :placeholder="placeholder" />
</template>

<script setup lang="ts">
type Props = {
  type: string
  placeholder: string
}

defineProps<Props>()

const modelValue = defineModel<string>()
</script>

<style scoped lang="scss">
.input {
  border: 1px solid #d7d7d7;
  border-radius: 8px;
  width: 100%;
  height: 31px;
  padding: 8px 16px;
  font-size: 12px;
  line-height: 14.52px;

  &::placeholder {
    color: #d7d7d7;
    font-size: 12px;
    line-height: 14.52px;
  }
}
</style>
