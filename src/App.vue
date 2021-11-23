<template>
  <v-app>
    <v-app-bar app dark fixed color="#1BD698">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>
        <v-btn text to="/">RestCode</v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <div v-if="loggedIn">
        <v-toolbar-items>
          <v-btn text to="/">Inicio</v-btn>
          <v-btn id="restaurant-page" text @click="restaurant" v-if="owner">Restaurante</v-btn>
          <v-btn id="consultancypg" text to="/consultancies" v-if="owner">Consultorías</v-btn>
          <v-btn id="appointment-page" text to="/appointments" v-if="!owner">Appointments</v-btn>
          <v-btn id="profile-page" text @click="profile">Perfil</v-btn>
          <v-btn id="logout" text @click="logout">Log out</v-btn>
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
    owner(){
      return this.$store.state.auth.user.discriminator === "owner";
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
    restaurant(){
      this.$router.push({name: 'restaurant', query: { owner: this.currentUser.id}})
    },
    profile(){
      if(this.currentUser.discriminator === "consultant"){
        this.$router.push('/consultants/'+ this.currentUser.id);
      }else{
        this.$router.push('/owners/'+ this.currentUser.id);
      }

    }
  }
};
</script>