<template>
  <v-card>
    <v-card-title>
      Iniciar Sesión
    </v-card-title>
    <v-card-list></v-card-list>
    <v-card-text>
      <v-form v-model="isValid">
        <v-text-field
            label="E-mail"
            v-model="email"
            :rules="[v => !!v || 'Se requiere su E-mail']"
            required>
        </v-text-field>
        <v-text-field
            label="Password"
            v-model="password"
            type="password"
            :rules="[v => !!v || 'Se requiere su contraseña']"
            required>
        </v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn
          color="primary"
          :disabled="!isValid"
          @click="login"
      >Login</v-btn>
    </v-card-actions>
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-col cols="4"></v-col>
          <v-col cols="4">
            <v-text class="link" @click="navigateToSignUp">¿Aún no tienes una cuenta? ¡Regístrate! {{ test }}</v-text>
          </v-col>
          <v-col cols="4"></v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import OwnersService from "@/services/owners-service";
import ConsultantsService from "@/services/consultants-service";
export default {
  name: "sign-in",
  data() {
    return {
      email: null,
      password: null,
      isValid: true,
      found: false,
      owners: [],
      test: '',
      consultants: []
    }
  },
  methods: {
    navigateToSignUp() {
      this.$router.push ({name: 'sign-up'});
    },
    retrieveOwners() {
      OwnersService.getAllOwners()
          .then(response => {
            this.owners = response.data;
            if (this.owners.some(item => item.email === this.email && item.password === this.password)) {
              this.navigateToHomeOwner();
            }
          })
          .catch((e) => {
            console.log(e);
          });
    },
    getDisplayOwner(owner) {
      return {
        email: owner.email,
        password: owner.password
      };
    },
    retrieveConsultants() {
      ConsultantsService.getAllConsultants()
          .then(response => {
            this.consultants = response.data;
            if (this.consultants.some(item => item.email === this.email && item.password === this.password)) {
              this.found = true;
              this.navigateToHomeConsultant();
            }
          })
          .catch((e) => {
            console.log(e);
          });
    },
    login() {
      this.retrieveConsultants();
      if (!this.found) {
        this.retrieveOwners();
      }
    },
    navigateToHomeOwner() {
      this.$router.push ({name: 'home-owner'});
    },
    navigateToHomeConsultant() {
      this.$router.push ({name: 'home-consultant'});
    },
  }
}
</script>

<style scoped>
.link {
  text-decoration: underline;
  cursor: pointer;
}
</style>