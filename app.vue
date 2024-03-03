<script setup lang="ts">
useHead({
  title: "",
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Movie Site` : "Movie Site";
  },
});
</script>

<template>
  <link
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
    rel="stylesheet"
  />
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
