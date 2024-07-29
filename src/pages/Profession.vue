<template>
  <q-page class="flex-row row gap-4 p-4 pb-safe">

    <q-btn icon="home" round to="/" push />
    <div class="card column p-4 gap-2 rounded items-start justify-center shadow-2 h-fit w-full"
      :class="profession.className">
      <q-icon :name="profession.icon" size="5rem" />
      <div class="text-3xl font-weight-bold text-left">{{ profession.name }}</div>
    </div>
    <q-markdown :src="profession.description" />

  </q-page>
</template>

<script setup lang="ts">
import { professions } from 'src/stores/professions'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const profession = computed(() => {
  const index = Number(route.params.id)
  return professions[index]
})

defineOptions({
  name: 'IndexPage'
})

</script>
