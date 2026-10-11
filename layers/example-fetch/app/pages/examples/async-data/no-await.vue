<script setup lang="ts">
definePageMeta({
  layout: "examples",
  title: "AsyncData without await",
  description: "$fetch inside useAsyncData, not awaited in setup.",
});

const { data, status } = useAsyncData('no-await', () => {
  return $fetch('/api/post')
})

const statusColor = computed(() =>
  status.value === 'success'
    ? 'success'
    : status.value === 'error'
      ? 'error'
      : status.value === 'pending'
        ? 'warning'
        : 'neutral',
)
</script>

<template>
  <div class="flex flex-col items-start gap-y-4">
    <Badge :color="statusColor">status: {{ status }}</Badge>
    <pre class="w-full overflow-x-auto rounded-xl border border-neutral-800 bg-neutral-950 p-4 text-sm text-neutral-200">{{ JSON.stringify(data, null, 2) }}</pre>
  </div>
</template>
