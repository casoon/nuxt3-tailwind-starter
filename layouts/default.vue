<template>
  <div class="font-sans max-w-[50rem] flex flex-col mx-auto w-full h-full">
    <SiteHeader />
    <slot />
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
const theme = useTheme()

if (theme.value === 'dark' || ((theme.value === '') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  theme.value = 'dark'
} else {
  theme.value = 'light'
}

useHead({
  htmlAttrs: {
    class: theme.value
  }
})

</script>

