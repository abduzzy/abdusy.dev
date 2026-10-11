<script setup lang="ts">
const { color = "neutral" } = defineProps<{
  color?: "neutral" | "warning" | "success" | "error";
}>();

const colorClass = computed(() => {
  if (color === "warning") {
    return "bg-yellow-400/20 text-yellow-400";
  }

  if (color === "success") {
    return "bg-green-400/15 text-green-300";
  }

  if (color === "error") {
    return "bg-red-400/15 text-red-300";
  }

  return "bg-neutral-400/10 text-neutral-400";
});
</script>

<template>
  <span
    :class="[
      'text-xs py-1 px-1 rounded-md font-semibold tracking-wider self-start inline-flex',
      colorClass,
    ]"
  >
    <slot />
  </span>
</template>
