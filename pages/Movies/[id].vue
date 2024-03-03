<script setup>
const route = useRoute();

// using useFetch is same as using useAsyncData + $fetch
const { data } = await useFetch(
  `http://www.omdbapi.com/?apikey=fbd9f84b&i=${route.params.id}`,
  {
    pick: [
      "Title",
      "Type",
      "Year",
      "Genre",
      "Plot",
      "Awards",
      "Poster",
      "Ratings",
      "Error",
    ],
    key: `/movies/${route.params.id}`,
  }
);

// {"Response":"False","Error":"Incorrect IMDb ID."}
if (data.value.Error === "Incorrect IMDb ID.") {
  showError({ statusCode: 404, statusMessage: "Page Not Found" });
}

// const { data } = await useAsyncData(
//   `/movies/${route.params.id}`,
//   () => {
//     return $fetch(
//       `http://www.omdbapi.com/?apikey=fbd9f84b&i=${route.params.id}`
//     );
//   },
//   // { transform(data) {} }
//   {
//     pick: [
//       "Title",
//       "Type",
//       "Year",
//       "Genre",
//       "Plot",
//       "Awards",
//       "Poster",
//       "Ratings",
//     ],
//   }
// );
</script>

<template>
  <div class="m-10 flex gap-4">
    <!-- <p>id is {{ route.params.id }}</p> -->
    <!-- <p>here in id page</p> -->

    <div class="flex flex-col justify-center w-100">
      <!-- <pre>{{ data }}</pre> -->
      <div class="text-center">
        <NuxtImg :src="data.Poster" class="w-65" />
        <p class="text-lg font-semibold">{{ data.Title }} / {{ data.Year }}</p>
        <Badge :value="data.Ratings[0].Value" severity="info"></Badge>
        <Badge class="ml-2" :value="data.Type" severity="success"></Badge>
        <Badge class="ml-2" :value="data.Genre" severity="contrast"></Badge>
      </div>
      <Fieldset :legend="data.Title" class="w-100 mt-5 ml-4">
        <p class="m-1 text-sm">
          {{ data.Plot }}
        </p>
      </Fieldset>
    </div>

    <div>
      <pre>{{ data }}</pre>
    </div>
  </div>
</template>
