<script lang="ts" setup>
const route = useRoute();

const pageTitle = computed(() => route.meta.title as string | undefined);
const pageDescription = computed(
  () => route.meta.description as string | undefined,
);
const isIndex = computed(() => route.path === "/examples");

useHead({
  title: computed(() =>
    pageTitle.value ? `${pageTitle.value} · Examples` : "Examples",
  ),
  bodyAttrs: {
    class: "bg-neutral-900 text-white",
  },
});
</script>

<template>
  <main
    class="mx-auto flex min-h-[100dvh] w-full max-w-[80ch] flex-col gap-y-8 border-x border-neutral-800 px-6 py-16 lg:px-12"
  >
    <NuxtLink
      v-if="!isIndex"
      to="/examples"
      class="inline-flex items-center gap-x-1 self-start text-sm text-neutral-400 hover:text-white"
    >
      <Icon name="tabler:arrow-left" size="1rem" />
      All examples
    </NuxtLink>

    <header v-if="pageTitle" class="flex flex-col gap-y-3">
      <h1 class="text-4xl font-light">{{ pageTitle }}</h1>
      <p v-if="pageDescription" class="text-lg text-neutral-300">
        {{ pageDescription }}
      </p>
    </header>

    <slot />
  </main>
</template>
