<template>
  <div class="*:block">
    <label
      class="text-sm text-neutral-300"
      :for="inputId"
    >{{ label }}</label>
    <input
      :id="inputId"
      :value="modelValue"
      type="text"
      class="field-input"
      @input="handleChange"
    >
  </div>
</template>

<script lang="ts" setup>
const inputId = useId()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

defineProps<{
  label: string
  modelValue: string | number
}>()

function handleChange(event: Event) {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>

<style></style>
