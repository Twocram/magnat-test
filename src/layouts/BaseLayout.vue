<template>
  <div class="base-layout">
    <VHeader />
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import VHeader from '@/components/VHeader.vue'
</script>

<style scoped></style>
