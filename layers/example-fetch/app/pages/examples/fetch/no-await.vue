<script setup lang="ts">
definePageMeta({
  layout: "examples",
  title: "Fetch without await",
  description: "Non-blocking fetch, resolves after navigation with pending status.",
});

const { data, status } = useFetch('/api/post')

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
