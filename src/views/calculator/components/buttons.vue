<template>
  <v-container>
    <v-row>
      <v-col
        v-for='kay in keys'
        cols='3'
        :key='kay.key'
      >
        <v-btn
          width='40'
          height='40'
          block
          cols='5'
          @click="$emit('setCont', kay)"
          color='primary'
        >
          {{ kay.key }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Buttons',

  data () {
    return {
      keys: [
        {
          key: 'AC',
          type: 'clear',
          space: '3'
        },
        {
          key: '/',
          type: 'number'
        },
        {
          key: '7',
          type: 'number'
        },
        {
          key: '8',
          type: 'number'
        },
        {
          key: '9',
          type: 'number'
        },
        {
          key: '*',
          type: 'number'
        },
        {
          key: '4',
          type: 'number'
        },
        {
          key: '5',
          type: 'number'
        },
        {
          key: '6',
          type: 'number'
        },
        {
          key: '-',
          type: 'number'
        },
        {
          key: '1',
          type: 'number'
        },
        {
          key: '2',
          type: 'number'
        },
        {
          key: '3',
          type: 'number'
        },
        {
          key: '+',
          type: 'number'
        },
        {
          key: '0',
          type: 'number',
          space: '2'
        },
        {
          key: '.',
          type: 'number'
        },
        {
          key: '=',
          type: 'number'
        }
      ]
    }
  }
}
</script>

<style>

</style>
