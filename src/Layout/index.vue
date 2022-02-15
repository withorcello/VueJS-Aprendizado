<template>
  <div>
    <v-navigation-drawer
      app
      width='200'
      mini-variant-width='100'
    >
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar
            color='primary'
          >
            <v-img
              src='../assets/logo.png'
            />
          </v-list-item-avatar>
        </v-list-item>
      </v-list>
      <v-divider />
      <v-list>
        <v-list-item
          link
          @click="$router.push('/calculadora')"
        >
          <v-list-item-icon>
            <v-icon
              color="#03A65A"
            >
              mdi-star
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Calculadora</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
          @click="$router.push('/clientes')"
        >
          <v-list-item-icon>
            <v-icon
            color="#03A65A"
            >
              mdi-plus
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Formulario</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </div>
</template>

<script>
export default {
  name: 'Layout'
}
</script>
