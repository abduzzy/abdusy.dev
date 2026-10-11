<template>
  <div class="flex flex-col gap-y-8">
    <section class="card">
      <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <p class="text-neutral-300">
          Counter Ref: <code>{{ counter }}</code>
        </p>
        <p class="text-neutral-300">
          Counter shallowRef: <code>{{ shallowCounter }}</code>
        </p>
        <p class="text-neutral-300">
          Counter 2 Ref: <code>{{ counter2.count }}</code>
        </p>
        <p class="text-neutral-300">
          Counter 2 shallowRef: <code>{{ shallowCounter2.count }}</code>
        </p>
      </div>

      <div class="mt-4 flex flex-wrap gap-3 border-t border-neutral-800 pt-4">
        <button class="btn" type="button" @click="counter++">
          Increase Counter Ref
        </button>
        <button type="button" class="btn" @click="shallowCounter++">
          Increase Counter shallowRef
        </button>
        <button type="button" class="btn" @click="counter2.count++">
          Increase Counter 2 Ref
        </button>
        <button type="button" class="btn" @click="shallowCounter2.count++">
          Increase Counter 2 shallowRef
        </button>
      </div>
    </section>

    <section>
      <h2 class="text-2xl font-medium">Problem</h2>
      <p class="mt-2 text-neutral-300">
        When increasing Counter 2 shallowRef, the value is increased, but the view not updated. It's
        because the button only update the count value, not the whole ref value.
      </p>
      <p class="mt-1 text-neutral-300">To update the view, other button must be pressed.</p>
    </section>

    <section>
      <h2 class="text-2xl font-medium">Solve</h2>
      <div class="mt-4 flex flex-wrap gap-3">
        <button type="button" class="btn" @click="increaseShallowCounter">
          Increase Counter 2 shallowRef
        </button>
        <button type="button" class="btn" @click="increaseShallowCounter2">
          Increase Counter 2 shallowRef v2
        </button>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "examples",
  title: "shallowRef",
  description: "How shallowRef differs from ref and when to trigger updates manually.",
});

const counter = ref(0)
const shallowCounter = shallowRef(0)

const counter2 = ref({ count: 0 })
const shallowCounter2 = shallowRef({ count: 0 })

function increaseShallowCounter() {
  shallowCounter2.value.count++
  triggerRef(shallowCounter2)
}

function increaseShallowCounter2() {
  shallowCounter2.value = {
    count: shallowCounter2.value.count + 1,
  }
}
</script>

<style></style>
