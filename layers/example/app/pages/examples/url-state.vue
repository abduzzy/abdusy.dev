<template>
  <div class="flex flex-col gap-y-4">
    <section class="card">
      <h2 class="text-xl font-medium">Visible</h2>
      <p class="mt-2 text-neutral-300">
        State: <code>{{ visibleState || "-" }}</code>
      </p>
      <button class="btn mt-4" @click="changeVisible">
        Change
      </button>
    </section>
    <section class="card">
      <h2 class="text-xl font-medium">Filter</h2>
      <p class="mt-2 text-neutral-300">
        State: <code>{{ filterState || "-" }}</code>
      </p>
      <button class="btn mt-4" @click="changeFilter">
        Change
      </button>
    </section>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "examples",
  title: "URL Query as State",
  description: "Syncing component state with URL query params. Try the buttons, then refresh.",
});

const visibleState = useUrlstate('visible', '')
const filterState = useUrlstate('filter', 'name')

function changeVisible() {
  visibleState.value = visibleState.value == 'true' ? 'false' : 'true'
}

function changeFilter() {
  filterState.value = filterState.value == 'name' ? 'email' : 'name'
}
</script>

<style></style>
