<template>
  <q-page class="pb-safe">
    <div class="text-4xl my-4 text-center font-serif">Профессии</div>

    <div class="grid grid-cols-2 grid-rows-4 gap-4 p-4">

      <div class="card column p-4 gap-2
    rounded justify-center
     shadow-2  w-full h-full relative row" :class="profession.className" v-for="(profession, index) in professions"
        :key="index" @click="$router.push(`/profession/${index}`)">
        <div class="absolute left-0 top-0 bottom-0 w-4 border-0" :class="profession.className"></div>
        <div class="pl-2 row h-inherit items-center justify-center">
          <q-icon :name="profession.icon" size="5rem" />
          <div class="text-lg font-weight-bold text-center w-full">{{ profession.name }}</div>
        </div>
      </div>
    </div>
    <div class="px-8 flex flex-center">
      <img src="/images/rosatom-2.png" class="w-40" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { professions } from 'src/stores/professions'

defineOptions({
  name: 'IndexPage'
})

</script>
