<template>
  <v-card>
    <v-card-title>Regístrate</v-card-title>
    <v-card-text>
      <v-form v-model="isValid">
        <v-text-field
            label="E-mail"
            v-model="item.email"
            :rules="emailRules"
            error-count="2"
            required>
        </v-text-field>
        <v-text-field
            label="Contraseña"
            v-model="item.password"
            type="password"
            :rules="passwordRules"
            error-count="5"
            required>
        </v-text-field>
        <v-text-field
            label="Nombre de Usuario"
            v-model="item.userName"
            :rules="userNameRules"
            error-count="2"
            required>
        </v-text-field>
        <v-text-field
            label="Nombre"
            v-model="item.firstName"
            :rules="firstNameRules"
            error-count="2"
            required>
        </v-text-field>
        <v-text-field
            label="Apellido"
            v-model="item.lastName"
            :rules="lastNameRules"
            error-count="2"
            required>
        </v-text-field>
        <v-text-field
            label="Número de Teléfono"
            v-model="item.cellphone"
            :rules="cellphoneRules"
            error-count="2"
            required>
        </v-text-field>
        <v-radio-group
            v-model="row"
            row>
          <v-radio
              label="Soy Dueño de restaurante"
              value="radio-1"
              @click="selectOwner"
          ></v-radio>
          <v-radio
              label="Soy Consultor de negocios"
              value="radio-2"
              @click="selectConsultant"
          ></v-radio>
        </v-radio-group>
        <v-text-field
            label="RUC"
            v-model.number="item.ruc"
            :rules="rucRules"
            error-count="2"
            v-if="isOwner"
            required>
        </v-text-field>
        <v-text-field
            label="Enlace de perfil de Linkedin"
            v-model="item.linkedinLink"
            :rules="linkedinLinkRules"
            error-count="2"
            v-if="!isOwner"
            required>
        </v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" :disabled="!isValid" @click="register">Registrarse</v-btn>
    </v-card-actions>
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-col cols="4"></v-col>
          <v-col cols="4">
            <v-text class="link" @click="navigateToSignIn">¿Ya tienes una cuenta? ¡Inicia sesión!</v-text>
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
  name: "sign-up",
  data() {
    return {
      isValid: true,
      isOwner: true,
      item: {
        userName: '',
        firstName: '',
        lastName: '',
        cellphone: '',
        email: '',
        password: '',
        ruc: 0,
        linkedinLink: ''
      },
      emailRules: [
        v => !!v || 'Se requiere su e-mail',
        v => /.+@.+/.test(v) || 'Su e-mail debe ser válido'
      ],
      passwordRules: [
        v => !!v || 'Se requiere su contraseña',
        v => (v && v.length >= 5) || 'Su contraseña debe tener por lo menos 5 caracteres',
        v => /(?=.*[A-Z])/.test(v) || 'Su contraseña debe tener por lo menos una mayúscula',
        v => /(?=.*\d)/.test(v) || 'Su contraseña debe tener por lo menos un número',
        v => /([!@#$%])/.test(v) || 'Su contraseña debe tener por lo menos un caracter de tipo [!@#$%]'
      ],
      userNameRules: [
        v => !!v || 'Se requiere su nombre de usuario',
        v => (v && v.length >= 4 && v.length <= 10) || 'Su nombre de usuario debe tener entre 4 y 10 caracteres'
      ],
      firstNameRules: [
        v => !!v || 'Se requiere su nombre',
        v => (v && v.length >= 2 && v.length <= 15) || 'Su nombre debe tener entre 2 y 15 caracteres'
      ],
      lastNameRules: [
        v => !!v || 'Se requiere su apellido',
        v => (v && v.length >= 3 && v.length <= 15) || 'Su apellido debe tener entre 3 y 15 caracteres'
      ],
      cellphoneRules: [
        v => !!v || 'Se requiere su número de teléfono',
        v => (v && v.length == 9) || 'Su número de teléfono debe ser uno válido'
      ],
      rucRules: [
        v => !!v || 'Se requiere su RUC'
      ],
      linkedinLinkRules: [
        v => !!v || 'Se requiere el Enlace de su perfil de Linkedin',
        v => /.+linkedin.com.+/.test(v) || 'El enlace debe ser uno válido'
      ],
    }
  },
  methods: {
    selectOwner() {
      this.isOwner = true;
    },
    selectConsultant() {
      this.isOwner = false;
    },
    register() {
      if (this.isOwner) {
        OwnersService.createOwner(this.item)
            .then(() => {
              this.navigateToSignIn();
            })
            .catch(e => {
              console.log(e);
            })
      }
      else {
        ConsultantsService.createConsultant(this.item)
            .then(() => {
              this.navigateToSignIn();
            })
            .catch(e => {
              console.log(e);
            })
      }
    },
    navigateToSignIn() {
      this.$router.push ({name: 'sign-in'});
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