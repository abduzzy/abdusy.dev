<template>
  <div class="flex flex-col gap-y-4">
    <section class="card">
      <h2 class="text-xl font-medium">defineModel</h2>
      <CustomInput v-model="value" label="Title" class="mt-4" />
      <p class="mt-3 text-neutral-300">
        Value: <code>{{ value }}</code>
      </p>
    </section>

    <section class="card">
      <h2 class="text-xl font-medium">Legacy update:modelValue event</h2>
      <CustomInputOld v-model="value" label="First Name (Legacy)" class="mt-4" />
      <p class="mt-3 text-neutral-300">
        Value: <code>{{ value }}</code>
      </p>
    </section>

    <section class="card">
      <h2 class="text-xl font-medium">Multiple v-model bindings</h2>
      <MultipleForm
        v-model:last-name="value"
        v-model:first-name="firstName"
        class="mt-4"
      />
      <p class="mt-3 text-neutral-300">
        First Name: <code>{{ firstName }}</code>
      </p>
      <p class="mt-1 text-neutral-300">
        Last Name: <code>{{ value }}</code>
      </p>
    </section>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "examples",
  title: "v-model",
  description:
    "Two-way binding with defineModel, legacy update events, and multiple v-model bindings.",
});

const value = ref('Example value')
const firstName = ref('--first name--')
</script>

<style></style>
