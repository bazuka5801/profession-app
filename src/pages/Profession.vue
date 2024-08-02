<template>
  <div class="absolute-top left-0 top-0 right-0 pt-safe" :class="profession.className"></div>

  <q-page class="flex-row row gap-4 p-4 pb-safe ">

    <q-btn icon="arrow_back" size="" class=" text-blue-400 bg-slate-200" round to="/" unelevated />

    <div class="card column  relative p-4 gap-2 rounded items-start justify-center shadow-2 h-fit w-full"
      :class="profession.className">

      <q-icon :name="profession.icon" size="5rem" />
      <div class="text-3xl font-weight-bold text-left">{{ profession.name }}</div>
    </div>
    <div v-if="'audioPath' in profession" id="waveform" class="w-full pt-4"></div>
    <q-markdown :src="profession.description" />

  </q-page>
</template>

<script setup lang="ts">
import { professions } from 'src/stores/professions'
import { computed, onBeforeUnmount, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import WaveSurfer from 'wavesurfer.js'

const route = useRoute()
const profession = computed(() => {
  const index = Number(route.params.id)
  return professions[index]
})

defineOptions({
  name: 'IndexPage'
})

let wavesurfer: WaveSurfer
onMounted(() => createWavesurfer())
function createWavesurfer() {
  if (!('audioPath' in profession.value)) {
    return
  }
  const path = profession.value.audioPath
  if (!profession.value.audioPath) return
  wavesurfer = WaveSurfer.create({
    container: '#waveform',
    url: profession.value.audioPath,
    autoplay: false,
    height: 80,
    barWidth: 3,
    barGap: 4,
    barRadius: 16,
    mediaControls: true,
    /** The color of the waveform */
    waveColor: '#ff4e00',
    /** The color of the progress mask */
    progressColor: '#dd5e98',
    /** The color of the playpack cursor */
    cursorColor: '#3f3f3f',
    cursorWidth: 4,
    normalize: false
  })
}

onBeforeUnmount(() => {
  // if (!profession.value.audioPath) return
  wavesurfer?.destroy()
})
</script>
