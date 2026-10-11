<script lang="ts" setup>
useSeoMeta({
  title: "Articles",
  description: "What was I writes...",
  ogTitle: "Articles",
  ogDescription: "What was I writes...",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
});

const route = useRoute();

const { data: articles, error } = await useAsyncData("articles", () => {
  if (route.query.tags) {
    return queryCollection("articles")
      .where("is_published", "=", true)
      .where("tags", "LIKE", `%${route.query.tags}%`)
      .select("path", "title", "description", "author", "created_at")
      .order("created_at", "DESC")
      .all();
  }

  return queryCollection("articles")
    .where("is_published", "=", true)
    .select("path", "title", "description", "author", "created_at")
    .order("created_at", "DESC")
    .all();
});

prerenderRoutes(articles.value?.map((post) => `${post.path}`) ?? []);
</script>

<template>
  <div class="article-wrapper py-20">
    <main class="article-wrapper-content flex flex-col">
      <h1 class="mb-10 text-5xl font-light">Articles</h1>

      <div
        v-if="route.query.tags"
        class="mb-8 inline-flex items-center gap-x-2 self-start rounded-full border border-neutral-700 px-4 py-1.5 text-sm text-neutral-300"
      >
        <Icon name="tabler:tags" size="1rem" />
        <span>
          tags <strong class="text-white">"{{ route.query.tags }}"</strong>
        </span>
        <NuxtLink
          to="/articles"
          aria-label="Clear tag filter"
          class="text-neutral-500 hover:text-white"
        >
          <Icon name="tabler:x" size="1rem" />
        </NuxtLink>
      </div>

      <template v-if="articles && articles.length > 0">
        <div class="flex flex-col gap-y-4">
          <div
            v-for="article in articles"
            :key="article.path"
            class="group relative rounded-xl border border-neutral-800 p-6 transition hover:border-neutral-600 hover:bg-neutral-800/40"
          >
            <NuxtLink
              :to="article.path"
              class="stretched-link group-hover:underline text-2xl"
            >
              {{ article.title }}
            </NuxtLink>

            <p class="mt-2 text-neutral-300">{{ article.description }}</p>
            <p class="mt-3 text-sm text-neutral-400">
              {{ article.author }} ·
              <NuxtTime
                :datetime="article.created_at"
                locale="en-US"
                day="numeric"
                month="long"
                year="numeric"
              />
            </p>
          </div>
        </div>
      </template>

      <template v-if="articles && articles.length === 0">
        <div
          class="flex flex-col items-center justify-center gap-y-3 h-[50dvh] text-neutral-300"
        >
          <p class="text-2xl italic font-medium">There are no articles.</p>

          <p v-if="route.query.tags" class="text-sm">
            Search: tags <strong>"{{ route.query.tags }}"</strong>
          </p>
        </div>
      </template>

      <template v-if="error">
        <div
          class="flex flex-col items-center justify-center gap-y-3 h-[50dvh] text-neutral-300"
        >
          <p class="text-2xl italic font-medium">
            Error: {{ error?.message ?? "-" }} .
          </p>
        </div>
      </template>
    </main>
  </div>
</template>
