<template>
  <q-page>
    <q-table
      :rows="rezervacije"
      :columns="columns"
      row-key="id"
    />
  </q-page>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  name: 'RezervacijePage',
  setup() {
    const rezervacije = ref([]);
    const columns = [
      { name: 'naslov', label: 'Naslov', align: 'left', field: 'naslov' },
      { name: 'autor', label: 'Autor', align: 'left', field: 'autor' },
      { name: 'korisnik', label: 'Korisnik', align: 'left', field: 'korisnik' },
      { name: 'datum', label: 'Datum Rezervacije', align: 'left', field: 'datum' }
    ];

    // Fetch data from the backend API when the component is mounted
    onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/rezervirane_knjige');
    console.log(response.data);  // Log the whole response to check the structure
    rezervacije.value = response.data.data;  // Make sure response.data.data exists
    console.log(rezervacije.value); // Check the data in the console
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});


    return { rezervacije, columns };
  }
};
</script>
