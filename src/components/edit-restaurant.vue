<template>
  <v-card>
    <v-card-title>
      <span class="headline">Edit Restaurant</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-text-field v-model="item.name" label="Nombre del restaurante"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field v-model="item.address" label="Dirección"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field v-model.number="item.cellPhoneNumber" label="Número Telefónico"></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="#1bd698" text @click="close">Cancelar</v-btn>
      <v-btn color="#1bd698" text @click="save">Guardar</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import RestaurantService from "@/services/restaurants-service";
export default {
  name: "edit-restaurant",
  data() {
    return {
      item: {
        id: 0,
        name: '',
        address: '',
        cellPhoneNumber: 0,
        ownerId: 0
      }
    }
  },
  methods: {
    retrieveRestaurant(id) {
      RestaurantService.get(id)
          .then((response) => {
            this.item = response.data;
          })
          .catch(e => {
            console.log((e));
          })
    },
    save() {
      RestaurantService.update(this.item.id, this.item)
          .then(() => {
            this.navigateToRestaurants();
          })
          .catch(e => {
            console.log(e);
          })
    },
    close() {
      this.navigateToRestaurants();
    },
    navigateToRestaurants() {
      this.$router.push({name: 'restaurants'});
    }
  },
  created() {
    this.retrieveRestaurant(this.$route.params.id);
  }
}
</script>

<style scoped>
</style>