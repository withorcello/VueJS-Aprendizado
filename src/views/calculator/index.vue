<template>
  <v-card
    height="500"
    width="350"
    class="mx-auto"
    padding="3"
  >
    <v-card-title
      class="mx-auto text-xl-h4"
    >
      Calculadora
    </v-card-title>
    <v-textarea
      :label="displayValues"
      disabled
      auto-grow
      outlined
      rows="2"
      row-height="15"
      height="70"
    >
    </v-textarea>
    <Btns @setCont="setCont($event)" />
  </v-card>
</template>

<script>
import Btns from './components/buttons'

export default {
  name: 'Calculadora',

  data () {
    return {
      operation: null,
      displayValues: ''
    }
  },

  components: {
    Btns
  },

  methods: {
    setCont (keys) {
      console.log(keys)
    }
  }
}
</script>

<style>

</style>
