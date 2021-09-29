<template>
  <v-app>
    <v-app-bar app dark fixed color="#1BD698">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>RestCode</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text to="/home">Inicio</v-btn>
        <v-btn text to="/restaurants/301">Restaurante</v-btn>
        <v-btn text to="/consultancies">Consultores</v-btn>
        <v-btn text to="/consultants/23">Perfil</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer app>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data: () => ({
    //
  }),
};
</script>