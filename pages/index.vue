<template>
  <div class="">
    <h2>TESTEEEE</h2>
    <ul v-for="(mountain, i) of mountains" :key="i">
      <li>{{ mountain.title }}</li>
    </ul>
    <!-- <p v-if="$fetchState.pending">
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
    </div> -->
  </div>
</template>

<script>
import { getters } from "../store/vuex.js"
export default {
  data () {
    return {
      mountains: []
    }
  },
  // watch () {
  //   this.render
  // },
  created () {
    // console.log('❤', this.$store.getters.vuex)
    // const pipoca = this.$store.getters

    // console.log('🍿', pipoca, this.$store.state.vuex)
    console.log('🎈', getters.myList())
  }
}
</script>
