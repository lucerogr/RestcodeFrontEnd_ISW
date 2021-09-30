<template>
  <v-card>
    <v-card-title>
      Iniciar Sesión
    </v-card-title>
    <v-card-text>
      <v-form v-model="isValid">
        <v-text-field
            label="E-mail"
            v-model="user.email"
            required>
        </v-text-field>
        <v-text-field
            label="Password"
            v-model="user.password"
            type="password"
            required>
        </v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn
          color="primary"
          :disabled="!isValid"
          @click="handleLogin"
      >Login</v-btn>
    </v-card-actions>
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-col cols="4"></v-col>
          <v-col cols="4">
            <p class="link" @click="navigateToSignUp">¿Aún no tienes una cuenta? ¡Regístrate!</p>
          </v-col>
          <v-col cols="4"></v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>

import User from "../models/user";
export default {
  name: "sign-in",
  data() {
    return {
      user: new User('', '', '', '','',''),
      loading: false,
      message: '',
      isValid: true
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
    currentUser(){
      return this.$store.state.auth.user;
    }
  },
  created() {
    if(this.loggedIn){
      this.$router.push({name: 'home'});
    }
  },
  methods: {
    navigateToSignUp() {
      this.$router.push ({name: 'sign-up'});
    },
    handleLogin() {
      this.loading = true;
      console.log('Starting Login handling');
      if (!this.isValid) {
        console.log('Invalid');
        this.loading = false;
        return;
      }
      if (this.user.email !== '' && this.user.password !== '') {
        this.$store.dispatch('auth/login', this.user).then(
            () => {
              console.log('Logged In');
              if(this.$store.state.auth.user.discriminator === 'consultant'){
                this.$router.push('consultants/'+ this.currentUser.id);
              }else{
                this.$router.push({name: 'lessors', params: {id: '2' }});
              }
            },
            error => {
              console.log('Error');
              this.loading = false;
              this.message = (error.response && error.response.data)
                  || error.message || error.toString();
              console.log(this.message)
            }
        )
      }
    }
  }
}
</script>

<style scoped>
.link {
  text-decoration: underline;
  cursor: pointer;
}
</style>