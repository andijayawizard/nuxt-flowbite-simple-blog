<script lang="ts" setup>
const config = useRuntimeConfig();
const { data: list, pending } = await useFetch(
  `${config.public.apiUrlFilament}/api/articles`,
  {
    headers: {
      "x-api-key": config.public.apiKeyFilament,
    },
  }
);
</script>

<template>
  <NuxtLayout>
    <div v-if="pending">please wait, loading...</div>
    <div v-else>
      <div class="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <article
          v-for="(item, index) in list.data"
          :key="index"
          class="max-w-xs"
        >
          <NuxtLink :to="`/articles/${item.slug}`">
            <img
              :src="`${config.public.apiUrlFilament}/storage/${item.image}`"
              class="mb-5 rounded-lg"
              :alt="`${item.title}`"
            />
          </NuxtLink>
          <h2
            class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white"
          >
            <NuxtLink
              :to="`/articles/${item.slug}`"
              v-text="item.title"
            ></NuxtLink>
          </h2>
          <p
            v-html="item.content"
            class="mb-4 font-light text-gray-500 dark:text-gray-400"
          ></p>
          <NuxtLink
            :to="`/articles/${item.slug}`"
            class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
          >
            Read in 2 minutes
          </NuxtLink>
        </article>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped></style>
