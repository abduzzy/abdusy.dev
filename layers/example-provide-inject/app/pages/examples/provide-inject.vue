<template>
  <div class="flex flex-col gap-y-4">
    <section class="card">
      <h2 class="text-xl font-medium">Parent</h2>
      <p class="mt-2 text-neutral-300">
        User: <code>{{ user?.name ?? "Guest" }}</code>
      </p>
      <div class="mt-4 flex flex-row items-center gap-x-3">
        <button class="btn" @click="login">Login</button>
        <button class="btn" @click="logout">Logout</button>
      </div>
    </section>
    <ProvideInjectChild />
  </div>
</template>

<script lang="ts" setup>
import type { User } from "../../types";
import { ProvideInjectKey } from "../../types";

definePageMeta({
  layout: "examples",
  title: "Provide & Inject",
  description: "Sharing state with nested components without prop drilling.",
});

const user = ref<User>();

function login() {
  user.value = {
    id: "user-id",
    name: "Muhammad Abdusy Syukur",
  };
}

function logout() {
  user.value = undefined;
}

provide(ProvideInjectKey, {
  user: readonly(user),
  login: login,
  logout: logout,
});
</script>

<style></style>
