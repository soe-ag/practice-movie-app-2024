<script setup>
// const isLoggedIn = useState("isLoggedIn", () => false);
const isLoggedIn = useIsLoggedIn();

const items = ref([
  {
    label: "Home",
    icon: "i-material-symbols-home",
    route: "/",
  },
  {
    label: "MovieSearch",
    icon: "i-material-symbols-search-rounded",
    route: "/movies",
  },
  { label: "Extra", icon: "i-material-symbols-add", route: "/extra" },
]);
</script>

<template>
  <!-- <nav class="flex gap-4 my-4">
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/movies">Movies</NuxtLink>
  </nav> -->

  <NuxtLink v-if="!isLoggedIn" to="/login">Login</NuxtLink>
  <a href="#" v-else @click.prevent="isLoggedIn = false">Logout</a>

  <TabMenu :model="items">
    <template #item="{ item }">
      <NuxtLink :to="item.route" class="px-4 py-3"
        ><span :class="item.icon" class="mr-1"></span>
        {{ item.label }}</NuxtLink
      >
    </template>
  </TabMenu>

  <div class="m-3">
    <slot></slot>
  </div>
</template>
