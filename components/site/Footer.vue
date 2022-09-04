<template>
  <div class="text-center p-4 op-50">
    Current route: <code>{{ route.path }}</code>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
</script>
