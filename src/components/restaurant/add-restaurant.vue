<template>
  <v-card>
    <v-card-title>Regístrate</v-card-title>
    <v-card-text>
      <v-form v-model="isValid">
        <v-text-field
            label="Nombre"
            v-model="item.name"
            :rules="nameRules"
            error-count="2"
            required>
        </v-text-field>
        <v-text-field
            label="Dirección"
            v-model="item.address"
            :rules="addressRules"
            error-count="2"
            required>
        </v-text-field>
        <v-text-field
            label="Número telefónico"
            v-model="item.cellPhoneNumber"
            :rules="cellphoneRules"
            error-count="2"
            required>
        </v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" :disabled="!isValid" @click="register">Agregar Restaurante</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import RestaurantService from "../../services/restaurants-service"

export default {
  name: "add-restaurant",
  data() {
    return {
      id: 0,
      isValid: true,
      item: {
        name: '',
        address: '',
        cellPhoneNumber: '',
      },
      nameRules: [
        v => !!v || 'Se requiere nombre del restaurante',
        v => (v && v.length >= 2 && v.length <= 60) || 'El nombre debe tener entre 2 y 60 caracteres'
      ],
      addressRules: [
        v => !!v || 'Se requiere la dirección del restaurante',
        v => (v && v.length >= 2 && v.length <= 100) || 'La dirección debe tener entre 2 y 100 caracteres'
      ],
      cellphoneRules: [
        v => !!v || 'Se requiere el número de teléfono',
        v => (v && v.length === 9) || 'El número de teléfono debe ser uno válido'
      ]
    }
  },
  methods: {
    register() {
        RestaurantService.create(this.item, this.id)
            .then(() => {
              this.navigateToSignIn();
            })
            .catch(e => {
              console.log(e);
            })
    },
    navigateToSignIn() {
      this.$router.push ({name: 'sign-in'});
    },
  },
  created() {
    this.id  = this.$route.params.id;
  }
}
</script>

<style scoped>
.link {
  text-decoration: underline;
  cursor: pointer;
}
</style>