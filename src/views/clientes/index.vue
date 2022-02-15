<template>
  <v-form class="ma-16 elevation-1">
      <v-container
        mx-10
      >
        <v-row>
          <v-col
            cols='1'
          >
            <v-btn
              block
              depressed
              @click="searchUser(id)"
            >
              <v-icon>
                mdi-magnify
              </v-icon>
            </v-btn>
          </v-col>
          <v-col
            cols="1"
          >
            <v-text-field
              outlined
              v-model="id"
              label="Código"
              required
              hide-details
            />
          </v-col>
          <v-col
            cols="4"
          >
            <v-text-field
              outlined
              label="Nome completo"
              required
              type="data"
              hide-details
            />
          </v-col>
          <v-col
            cols="2"
          >
          </v-col>
        </v-row>
      </v-container>
      <v-divider />
      <v-data-table
        :headers="colunas"
        :items="registros"
        class="elevation-1"
        dense
        item-key="id"
      >
        <template v-slot:top>
            <span class="pa-3">
              Listagem dos registros
            </span>
          </template>
      </v-data-table>
  </v-form>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Clientes',

  created () {
    this.listarUsuarios()
  },

  data: () => ({

    id: null,

    colunas: [
      {
        text: 'Nome',
        align: 'center',
        sortable: false,
        value: 'nome',
        width: 50
      },
      {
        text: 'E-mail',
        align: 'center',
        sortable: false,
        value: 'email',
        width: 60
      },
      {
        text: 'Senha',
        align: 'left',
        sortable: false,
        value: 'senha',
        width: 10
      }
    ]
  }),

  computed: {

    ...mapState('paginaDeClientes', [
      'registros'
    ])
  },

  methods: {
    searchUser (id) {
      console.log(id)
      this.exibir(id)
    },

    ...mapActions('paginaDeClientes', [
      'listar',
      'exibir'
    ]),

    async listarUsuarios () {
      this.loading = true
      const res = await this.listar({ 
        
       })
      if (res && res.message) {
        this.notificacao = {
          value: true,
          text: JSON.stringify(res.message),
          color: 'error'
        }
      }
      this.loading = false
    }
  }
}
</script>
