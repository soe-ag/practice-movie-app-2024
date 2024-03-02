<script setup>
const route = useRoute();

const { data } = await useAsyncData(() => {
  return $fetch(`http://www.omdbapi.com/?apikey=fbd9f84b&i=${route.params.id}`);
});
</script>

<template>
  <div>
    <p>id is {{ route.params.id }}</p>
    <p>here in id page</p>

    <div>
      <!-- <pre>{{ data }}</pre> -->
      <NuxtImg :src="data.Poster" />
      <p>{{ data.Title }} / {{ data.Year }}</p>
    </div>
  </div>
</template>
