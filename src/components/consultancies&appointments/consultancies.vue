<template>
  <v-container>
    <v-card class="mb-5">
      <v-card-title>
        Revisa tus citas ya registradas
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="goToAppointments()">Ver Citas</v-btn>
      </v-card-title>
    </v-card>
    <Consultants></Consultants>
  </v-container>

</template>

<script>
import Consultants from "./consultants";
export default {
  name: "consultancies",
  components: {Consultants},
  computed: {
    currentUser(){
      return this.$store.state.auth.user;
    }
  },
  methods: {
    goToAppointments(){
      this.$router.push({name:'appointments', query: {owner: this.currentUser.id}});
    }
  }
}
</script>

<style scoped>

</style>