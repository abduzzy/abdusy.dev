<template>
  <div class="flex flex-col gap-y-10">
    <section v-for="group in groups" :key="group.title">
      <h2 class="text-2xl font-medium">{{ group.title }}</h2>

      <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <NuxtLink
          v-for="link in group.links"
          :key="link.url"
          :to="link.url"
          class="group rounded-xl border border-neutral-800 p-5 transition hover:border-neutral-600 hover:bg-neutral-800/50"
        >
          <div class="flex items-center justify-between gap-x-3">
            <p class="font-medium group-hover:underline">
              {{ link.name }}
            </p>
            <Icon
              name="tabler:chevron-right"
              size="1.25rem"
              class="flex-none text-neutral-500 transition group-hover:translate-x-0.5 group-hover:text-white"
            />
          </div>
          <p v-if="link.description" class="mt-1 text-sm text-neutral-400">
            {{ link.description }}
          </p>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import type { Link } from "~/types";

definePageMeta({
  layout: "examples",
  title: "Examples",
  description: "Small interactive demos of Vue, Nuxt, and Pinia concepts.",
});

type ExampleGroup = {
  title: string;
  links: Link[];
};

const groups: ExampleGroup[] = [
  {
    title: "State Management",
    links: [
      {
        name: "Counter",
        url: "/examples/counter",
        description: "Composable state vs shared Pinia stores",
      },
      {
        name: "Model",
        url: "/examples/model",
        description: "v-model with defineModel and multiple bindings",
      },
      {
        name: "Shallow Ref",
        url: "/examples/shallow-ref",
        description: "ref vs shallowRef and manual update triggers",
      },
      {
        name: "URL as State",
        url: "/examples/url-state",
        description: "Syncing component state with URL query params",
      },
    ],
  },
  {
    title: "Data Fetching with useFetch",
    links: [
      {
        name: "With Await",
        url: "/examples/fetch/await",
        description: "Blocking fetch rendered on server and client",
      },
      {
        name: "Without Await",
        url: "/examples/fetch/no-await",
        description: "Non-blocking fetch with pending status",
      },
      {
        name: "With Await and With Lazy",
        url: "/examples/fetch/lazy",
        description: "Awaited fetch that doesn't block navigation",
      },
      {
        name: "With Await and Without Lazy",
        url: "/examples/fetch/no-lazy",
        description: "Awaited fetch that blocks navigation",
      },
      {
        name: "With Await and With Server",
        url: "/examples/fetch/await-server",
        description: "Server-rendered awaited fetch",
      },
      {
        name: "Without Await and With Server",
        url: "/examples/fetch/no-await-server",
        description: "Server fetch without awaiting in setup",
      },
      {
        name: "With Await and Without Server",
        url: "/examples/fetch/await-no-server",
        description: "Client-only awaited fetch",
      },
      {
        name: "Without Await and Without Server",
        url: "/examples/fetch/no-await-no-server",
        description: "Client-only fetch without await",
      },
    ],
  },
  {
    title: "Data Fetching with useAsyncData",
    links: [
      {
        name: "With Await",
        url: "/examples/async-data/await",
        description: "$fetch inside useAsyncData, awaited in setup",
      },
      {
        name: "Without Await",
        url: "/examples/async-data/no-await",
        description: "$fetch inside useAsyncData, not awaited",
      },
    ],
  },
  {
    title: "Component Communication",
    links: [
      {
        name: "Prop Event",
        url: "/examples/prop-event",
        description: "Parent-child communication with props and events",
      },
      {
        name: "Provide Inject",
        url: "/examples/provide-inject",
        description: "Sharing state across nested components",
      },
    ],
  },
  {
    title: "Hydration",
    links: [
      {
        name: "Mismatch with ref",
        url: "/examples/hydration/ref",
        description: "Random values in ref warn on refresh",
      },
      {
        name: "Fixed with useState",
        url: "/examples/hydration/use-state",
        description: "useState keeps server and client in sync",
      },
    ],
  },
  {
    title: "Layout",
    links: [
      {
        name: "Grid Container",
        url: "/examples/grid-container",
        description: "Full-width and breakout sections with CSS grid",
      },
    ],
  },
];
</script>

<style></style>
