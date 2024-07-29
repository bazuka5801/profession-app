<template>
  <q-page class="grid grid-cols-2 grid-rows-4 gap-4 p-4 pb-safe">

    <div class="card column p-4 gap-2
    rounded items-center justify-center
     shadow-2 h-fit w-full" :class="profession.className" v-for="(profession, index) in professions" :key="index"
      @click="$router.push(`/profession/${index}`)">
      <q-icon :name="profession.icon" size="5rem" />
      <div class="text-2xl font-weight-bold text-center">{{ profession.name }}</div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { professions } from 'src/stores/professions'

defineOptions({
  name: 'IndexPage'
})

</script>
