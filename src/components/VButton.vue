<template>
  <button class="button" :class="[`button-${type}`]">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
type Props = {
  type: 'block' | 'inline'
}

defineProps<Props>()
</script>

<style scoped lang="scss">
.button {
  &-block {
    width: 100%;
    height: 31px;
    padding: 8px 16px;
    border-radius: 8px;
    background-color: #000000;
    color: #d7d7d7;
    font-size: 12px;
    line-height: 14.52px;
  }

  &-inline {
    font-size: 12px;
    line-height: 14.52px;
    color: #000000;
  }
}
</style>
