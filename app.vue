<script setup >
import { NuxtLink } from '#build/components';
</script>

<template>
<div>
  <nav>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/movies">Movies</NuxtLink>
  </nav>
  <NuxtPage />
  </div>
</template>

