<script lang="ts" setup>
definePageMeta({
  layout: "examples",
  title: "Counter",
  description:
    "Local composable state stays per component, Pinia stores are shared, and the storage store persists in localStorage.",
});
</script>

<template>
  <ClientOnly>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div class="rounded-xl border border-neutral-800">
        <ComposableCounter />
      </div>
      <div class="rounded-xl border border-neutral-800">
        <ComposableCounter />
      </div>

      <div class="rounded-xl border border-neutral-800">
        <PiniaCounter />
      </div>
      <div class="rounded-xl border border-neutral-800">
        <PiniaCounter />
      </div>

      <div class="rounded-xl border border-neutral-800">
        <LazyPiniaStorageCounter />
      </div>
      <div class="rounded-xl border border-neutral-800">
        <LazyPiniaStorageCounter />
      </div>
    </div>
  </ClientOnly>
</template>
