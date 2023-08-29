<script lang="ts" setup>
useHead({ title: "Article Detail" });
const route = useRoute();
const config = useRuntimeConfig();
const { data: list } = await useFetch(
  `${config.public.apiUrlFilament}/api/articles/${route.params.slug}`,
  {
    headers: {
      "x-api-key": config.public.apiKeyFilament,
    },
  }
);
</script>

<template>
  <NuxtLayout>
    <div v-for="item in list.data">
      <h1 v-html="item.title"></h1>
      <div v-html="item.content"></div>
    </div>
  </NuxtLayout>
</template>

<style scoped></style>
