<template>
  <div class="*:block">
    <label
      class="text-sm text-neutral-300"
      :for="inputId"
    >{{ label }}</label>
    <input
      :id="inputId"
      v-model="modelValue"
      type="text"
      class="field-input"
    >
  </div>
</template>

<script lang="ts" setup>
const inputId = useId()

const modelValue = defineModel<string>()

defineProps<{
  label: string
}>()
</script>

<style></style>
