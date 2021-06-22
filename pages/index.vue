<template>
  <div>
    <h1>Montanhas Nuxt</h1>
    <ul v-for="(mountain, index) of mountains" :key="index">
      <li>{{ mountain }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      mountains: []
    }
  },
  async fetch ({ $axios }) {
    const ip = await $axios.$get('https://api.json-generator.com/templates/RJ2IEMY493l2/data?delay=10000')
    console.log(this.fetch, this.data)
    return ip
  },
  created () {
    console.log('montanhas Created', this.mountains)
  }
}
</script>
