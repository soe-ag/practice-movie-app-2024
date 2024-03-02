<script setup>
const query = ref("");
const movies = ref([]);

async function handleSearch() {
  const { Search } = await $fetch(
    `http://www.omdbapi.com/?i=tt3896198&apikey=fbd9f84b&s=${query.value}`
  );
  movies.value = Search;
}
</script>

<template>
  <div>
    <form @submit.prevent="handleSearch">
      <input type="text" v-model="query" />
      <button>Search</button>
    </form>
    <!-- <pre v-if="movies.length === 0">pre is {{ movies[0] }}</pre> -->

    <p v-if="movies.length === 0">No movies found...</p>

    <ul v-if="movies.length" class="list-none flex flex-wrap gap-5">
      <li v-for="movie in movies" :key="movie.imdbID">
        <NuxtLink :to="{ name: 'movies-id', params: { id: movie.imdbID } }">
          <NuxtImg
            :src="movie.Poster || '/images/default-movie-poster.jpg'"
            :alt="movie.title"
            width="100"
          />
        </NuxtLink>
        <p>{{ movie.Title }}</p>
      </li>
    </ul>
  </div>
</template>
