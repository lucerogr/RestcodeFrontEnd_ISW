<template>
  <v-app>
    <v-app-bar app dark fixed color="#1BD698">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>RestCode</v-toolbar-title>
      <v-spacer></v-spacer>

      <div v-if="loggedIn">
        <v-toolbar-items>
          <v-btn text to="/home">Inicio</v-btn>
          <v-btn text to="/restaurants/301">Restaurante</v-btn>
          <v-btn text to="/consultancies">Consultores</v-btn>
          <v-btn text @click="profile">Perfil</v-btn>
          <v-btn text @click="logout">Log out</v-btn>
        </v-toolbar-items>
      </div>
      <div v-else>
        <v-toolbar-items>
          <v-btn text to="/sign-in">Sign in</v-btn>
          <v-btn text to="/sign-up">Sign up</v-btn>
        </v-toolbar-items>
      </div>

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
  components: {},
  data: () => ({
    //
  }),
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  methods: {
    logout(){
      this.$store.dispatch('auth/logout');
      this.$router.push({name: 'sign-in'});
    },
    profile(){
      this.$router.push('/consultants/'+ this.currentUser.id);
    }
  }
};
</script>