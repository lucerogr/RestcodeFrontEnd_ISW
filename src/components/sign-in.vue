<template>
  <v-card>
    <v-card-title>
      Iniciar Sesión
    </v-card-title>
    <v-card-text>
      <v-form v-model="isValid">
        <v-text-field
            id="login-email"
            label="E-mail"
            v-model="user.email"
            :rules="emailRules"
            error-count="2"
            required>
        </v-text-field>
        <v-text-field
            id="login-password"
            label="Password"
            v-model="user.password"
            type="password"
            :rules="passwordRules"
            error-count="2"
            required>
        </v-text-field>
      </v-form>
      <span v-if="!this.loading">{{this.message}}</span>
    </v-card-text>
    <v-card-actions>
      <v-btn
          id="button-login"
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
      isValid: true,
      emailRules: [
        v => !!v || 'Se requiere su e-mail',
        v => /.+@.+/.test(v) || 'Su e-mail debe ser válido'
      ],
      passwordRules: [
        v => !!v || 'Se requiere su contraseña',
      ],
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
                if(this.$store.state.auth.user.discriminator === 'owner'){
                  this.$router.push('owners/'+ this.currentUser.id);
                }

              }
            },
            error => {
              console.log('Error');
              this.loading = false;
              this.message = error.response.data.message;
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