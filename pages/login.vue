<template>
  <form class="flex flex-col">
    <h1>Login</h1>
    <label class="my-2"
      >Username
      <input type="text" />
    </label>
    <label
      >Password
      <input type="password" />
    </label>
  </form>
</template>

<script setup>
definePageMeta({
  layout: "plain",
});
</script>
