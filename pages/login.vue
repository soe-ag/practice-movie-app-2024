<script setup>
// const isLoggedIn = useState("isLoggedIn", () => false);
const isLoggedIn = useIsLoggedIn();
definePageMeta({
  layout: "plain",
});

function login() {
  isLoggedIn.value = true;
  useRouter().push("/");
}
</script>

<template>
  <form class="flex flex-col" @submit.prevent="login">
    <h1>Login</h1>
    <label class="my-2"
      >Username
      <input type="text" />
    </label>
    <label
      >Password
      <input type="password" />
    </label>
    <button class="w-20 m-4">Login</button>
  </form>
</template>
