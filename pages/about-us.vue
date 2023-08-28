<script lang="ts" setup>
const config = useRuntimeConfig();
const { data: item, pending } = await useFetch(
  `${config.public.apiUrlAfl}/api/api.php/records/menuweb/2`,
  {
    headers: {
      "x-api-key": config.public.apiKeyAfl,
    },
  }
);
</script>

<template>
  <NuxtLayout>
    <div v-if="pending">please wait, loading...</div>
    <div v-else v-html="item.ktrg"></div>
  </NuxtLayout>
</template>

<style scoped></style>
