<template>
  <q-page class="flex flex-center">
    <q-card dark bordered class="bg-grey-9 my-card">
      <q-card-section>
        <q-img src="https://www.rab.hr/wp-content/uploads/2022/03/gkr.jpg">
          <div class="text-h3 text-weight-bolder absolute-bottom text-center">O nama</div>
        </q-img>
      </q-card-section>
      <q-card-section class="text-h4 text-justify">
        {{ o_nama }}
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

// Definiranje reaktivne varijable
const o_nama = ref('Gradska knjižnica otoka Raba glavna je knjižnica u gradu .')
</script>

<style scoped>
.my-card {
  width: 100%;
}
</style>