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

    <PropEventChild :user="user" @login="login" @logout="logout" />
  </div>
</template>

<script lang="ts" setup>
import type { User } from "./../../types";

definePageMeta({
  layout: "examples",
  title: "Props & Events",
  description: "Parent-child communication with props down and emitted events up.",
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
</script>

<style></style>
