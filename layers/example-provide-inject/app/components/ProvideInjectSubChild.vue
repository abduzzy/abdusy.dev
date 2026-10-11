<template>
  <section class="card">
    <h2 class="text-xl font-medium">SubChild</h2>
    <p class="mt-2 text-neutral-300">
      User: <code>{{ user?.name ?? "Guest" }}</code>
    </p>
    <div class="mt-4 flex flex-row items-center gap-x-3">
      <button class="btn" @click="login">Login</button>
      <button class="btn" @click="logout">Logout</button>
      <button class="btn" @click="change">Change</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ProvideInjectKey } from "../types";

const { user, login, logout } = inject(ProvideInjectKey, {
  user: undefined,
  login: () => {},
  logout: () => {},
});

function change() {
  if (user && user.value) {
    user.value.name = user?.value?.name + "change";
  }
}
</script>

<style></style>
