<template>
  <div class="flex flex-col gap-y-4">
    <section class="card">
      <h2 class="text-xl font-medium">Child</h2>
      <p class="mt-2 text-neutral-300">
        User: <code>{{ prop.user?.name ?? "Guest" }}</code>
      </p>
    </section>

    <PropEventSubChild :user="prop.user" @login="login" @logout="logout" />
  </div>
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
