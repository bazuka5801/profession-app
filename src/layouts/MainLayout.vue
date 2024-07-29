<template>
  <q-layout view="lHh Lpr lFf">
    <div class="pt-safe"></div>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">

defineOptions({
  name: 'MainLayout'
})

</script>
