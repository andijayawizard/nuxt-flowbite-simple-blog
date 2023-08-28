<script lang="ts" setup>
const config = useRuntimeConfig();
const { data: list, pending } = await useFetch(
  `${config.public.apiUrlAfl}/api/api.php/records/services`,
  {
    headers: {
      "x-api-key": config.public.apiKeyAfl,
    },
  }
);
</script>

<template>
  <aside
    aria-label="Related articles"
    class="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800"
  >
    <div class="px-4 mx-auto max-w-screen-xl">
      <h2 class="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
        Related articles
      </h2>
      <div v-if="pending">please wait, loading...</div>
      <div v-else class="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <article
          v-for="(item, index) in list.records"
          :key="index"
          class="max-w-xs"
        >
          <NuxtLink :to="`/services/${item.id}`">
            <img
              :src="`${config.public.apiUrlAfl}/assets/uploads/images/services/${item.acak}-1.jpg`"
              class="mb-5 rounded-lg"
              :alt="`${item.nama}`"
            />
          </NuxtLink>
          <h2
            class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white"
          >
            <a href="#">{{ item.nama }}</a>
          </h2>
          <p class="mb-4 font-light text-gray-500 dark:text-gray-400">
            {{ item.rgks }}
          </p>
          <a
            href="#"
            class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
          >
            Read in 2 minutes
          </a>
        </article>
        <!-- <article class="max-w-xs">
          <a href="#">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png"
              class="mb-5 rounded-lg"
              alt="Image 2"
            />
          </a>
          <h2
            class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white"
          >
            <a href="#">Enterprise design tips</a>
          </h2>
          <p class="mb-4 font-light text-gray-500 dark:text-gray-400">
            Over the past year, Volosoft has undergone many changes! After
            months of preparation.
          </p>
          <a
            href="#"
            class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
          >
            Read in 12 minutes
          </a>
        </article>
        <article class="max-w-xs">
          <a href="#">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-3.png"
              class="mb-5 rounded-lg"
              alt="Image 3"
            />
          </a>
          <h2
            class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white"
          >
            <a href="#">We partnered with Google</a>
          </h2>
          <p class="mb-4 font-light text-gray-500 dark:text-gray-400">
            Over the past year, Volosoft has undergone many changes! After
            months of preparation.
          </p>
          <a
            href="#"
            class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
          >
            Read in 8 minutes
          </a>
        </article>
        <article class="max-w-xs">
          <a href="#">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png"
              class="mb-5 rounded-lg"
              alt="Image 4"
            />
          </a>
          <h2
            class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white"
          >
            <a href="#">Our first project with React</a>
          </h2>
          <p class="mb-4 font-light text-gray-500 dark:text-gray-400">
            Over the past year, Volosoft has undergone many changes! After
            months of preparation.
          </p>
          <a
            href="#"
            class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
          >
            Read in 4 minutes
          </a>
        </article> -->
      </div>
    </div>
  </aside>
</template>

<style scoped></style>
