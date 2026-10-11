<template>
  <section class="card">
    <h2 class="text-xl font-medium">SubChild</h2>
    <p class="mt-2 text-neutral-300">
      User: <code>{{ prop.user?.name ?? "Guest" }}</code>
    </p>
    <div class="mt-4 flex flex-row items-center gap-x-3">
      <button class="btn" @click="login">Login</button>
      <button class="btn" @click="logout">Logout</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { User } from "../types";

const prop = defineProps<{
  user?: User;
}>();

const emit = defineEmits<{
  login: [];
  logout: [];
}>();

function login() {
  emit("login");
}

function logout() {
  emit("logout");
}
</script>

<style></style>
