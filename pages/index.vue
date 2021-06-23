<template>
  <div class="">
    <h2>TESTEEEE</h2>
    <p v-if="$fetchState.pending">
      Buscando montanhas...
    </p>
    <p v-else-if="$fetchState.error">
      Ocorreu um erro:(
    </p>
    <div v-else>
      <h1>Montanhas Nuxt</h1>
      <ul v-for="(mountain, i) of mountains" :key="i">
        <li>{{ mountain.title }}</li>
      </ul>
      <button @click="$fetch">Recarregar</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mountains: []
    }
  },
  async fetch () {
    this.mountains = await fetch(
      // 'https://api.nuxtjs.dev/mountains'
      'https://api.json-generator.com/templates/RJ2IEMY493l2/data?delay=10000', {
        headers: {
          Authorization: 'Bearer xu9qp8s43xiy72hlac4m1i5mtoshkpagkmhfhngx',
          'Content-Type': 'application/json'
        }
      }
    ).then(res => res.json())
  }
}
</script>
