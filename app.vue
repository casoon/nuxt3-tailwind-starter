<template>
  <div class="m-7">
    <p class="font-medium">Nuxt 3 Starter </p>
  </div>
</template>

<script lang="ts" setup>
  import { useCounterStore } from '@/stores/counter'
  const counter = useCounterStore()
  counter.count++
  console.log(counter.count)

</script>
