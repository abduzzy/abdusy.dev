<template>
  <div class="flex flex-col gap-y-4">
    <p class="text-neutral-300">Try refreshing this page — no hydration mismatch warning will appear.</p>
    <ul class="flex flex-col gap-y-2">
      <li
        v-for="link in linkList"
        :key="link.url"
        class="rounded-xl border border-neutral-800 px-4 py-2"
      >
        <NuxtLink
          :to="link.url"
          :external="true"
          target="_blank"
          class="inline-flex items-center gap-x-1 text-sm text-neutral-300 hover:text-white hover:underline"
        >
          {{ link.name }}
          <Icon name="tabler:external-link" size="1rem" />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import type { Link } from '~/types'

definePageMeta({
  layout: "examples",
  title: "Hydration Fixed",
  description: "useState keeps the random values consistent between server and client.",
});

const linkList = useState<Link[]>('random-links', () => generateRandomLinks())

function generateRandomLinks() {
  const links: Link[] = []
  for (let i = 0; i < 20; i++) {
    const link = generateRandomLink()
    links.push({
      name: 'data' + i,
      url: link,
    })
  }
  return links
}

function generateRandomLink() {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  const length = 10
  let link = ''
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    link += characters[randomIndex]
  }
  return `/hydrations/${link}`
}
</script>

<style></style>
