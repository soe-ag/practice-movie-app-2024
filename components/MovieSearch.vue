<script setup>
const query = ref("batman");
const movies = ref([]);

async function handleSearch() {
  const { Search } = await $fetch(
    `http://www.omdbapi.com/?i=tt3896198&apikey=fbd9f84b&s=${query.value}`
  );
  movies.value = Search;
  query.value = "";
}

handleSearch();
</script>

<template>
  <div>
    <form @submit.prevent="handleSearch">
      <!-- <input type="text" v-model="query" /> -->

      <div class="flex gap-5 my-8 items-center">
        <FloatLabel>
          <InputText id="searchBox" v-model="query" />
          <label for="searchBox">Movie or Series Name</label>
        </FloatLabel>

        <Button type="submit" class="text-sm h-8 py-2 pl-3 pr-4" rounded>
          <span class="material-symbols-outlined">search</span
          ><span>Search</span>
        </Button>
      </div>
    </form>
    <!-- <pre v-if="movies.length === 0">pre is {{ movies[0] }}</pre> -->
    <!-- <pre>{{ movies[0] }}</pre> -->
    <p v-if="movies.length === 0">No movies found...</p>

    <ul v-if="movies.length" class="list-none flex flex-wrap gap-5">
      <li v-for="movie in movies" :key="movie.imdbID" class="w-50 b-1 b-red">
        <NuxtLink :to="{ name: 'movies-id', params: { id: movie.imdbID } }">
          <NuxtImg :src="movie.Poster" :alt="movie.title" width="100" />
        </NuxtLink>
        <p>{{ movie.Title }}</p>
      </li>
    </ul>
  </div>
</template>
