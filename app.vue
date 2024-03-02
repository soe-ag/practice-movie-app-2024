<script setup lang="ts"></script>

<template>
  <link
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
    rel="stylesheet"
  />
  <div>
    <nav class="flex gap-4 my-4">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/movies">Movies</NuxtLink>
    </nav>
    <NuxtPage />
  </div>
</template>
