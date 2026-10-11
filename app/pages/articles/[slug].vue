<script setup lang="ts">
const route = useRoute();

const { data, error } = await useAsyncData(`articles:${route.path}`, () =>
  queryCollection("articles")
    .path(route.path)
    .where("is_published", "=", true)
    .first(),
);
if (!data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Article not found",
    fatal: true,
  });
}

if (error.value) {
  throw createError({
    statusCode: 500,
    statusMessage: error.value?.message,
    fatal: true,
  });
}

useSeoMeta({
  title: data.value?.title,
  description: data.value?.description,
  ogDescription: data.value?.description,
  ogTitle: data.value?.title,
});
</script>

<template>
  <main class="article-wrapper py-20">
    <template v-if="data">
      <div class="article-wrapper-content flex flex-col mb-14">
        <NuxtLink
          to="/articles"
          class="mb-8 inline-flex items-center gap-x-1 self-start text-sm text-neutral-400 hover:text-white"
        >
          <Icon name="tabler:arrow-left" size="1rem" />
          All articles
        </NuxtLink>
        <h1 class="text-5xl font-light">
          {{ data.title }}
        </h1>
        <p class="text-xl text-neutral-300 mt-4">
          {{ data.description }}
        </p>
        <p class="text-neutral-400 text-sm mt-4">
          {{ data.author }} · Published
          <NuxtTime
            :datetime="data.created_at"
            locale="en-US"
            day="numeric"
            month="long"
            year="numeric"
          />
        </p>
        <div
          v-if="data.tags && data.tags.length > 0"
          class="leading-normal flex flex-row items-center flex-wrap gap-2 text-sm mt-4"
        >
          <span
            v-for="tag in data.tags"
            :key="tag"
            class="rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-300 transition hover:border-neutral-400 hover:text-white"
          >
            <NuxtLink :to="`/articles/?tags=${tag}`"># {{ tag }}</NuxtLink>
          </span>
        </div>
      </div>

      <div class="article-wrapper-content">
        <ContentRenderer
          :value="data as any"
          tag="article"
          class="prose prose-invert max-w-none w-full prose-headings:scroll-mt-16 prose-headings:has-[a]:*:no-underline prose-headings:has-[a]:*:hover:underline"
        />
      </div>

      <div class="article-wrapper-toc hidden xl:block xl:row-[2/3]">
        <section
          id="toc"
          class="sticky top-16 max-h-[80vh] overflow-y-auto overscroll-none"
        >
          <label for="toc-list" class="font-medium text-sm">Table of Contents</label>

          <ContentToc :links="data.body.toc?.links ?? []" class="mt-2" />
        </section>
      </div>
    </template>
    <template v-else>
      <div
        class="article-wrapper-content flex flex-col items-center justify-center gap-y-3 h-[50dvh] text-neutral-300"
      >
        <p class="text-2xl italic font-medium">
          Error: {{ error?.message ?? "-" }} .
        </p>
      </div>
    </template>
  </main>
</template>
