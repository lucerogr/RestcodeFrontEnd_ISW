<template>
  <v-card>
    <v-container class="grey lighten-5">
      <v-row>
        <v-col cols="12">
          <v-row>
            <v-col cols="4"></v-col>
            <v-col cols="4">
              <v-img
                  src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                  width="100%"
              >
              </v-img>
            </v-col>
            <v-col cols="4"></v-col>
          </v-row>
        </v-col>
        <v-col cols="6">
          <v-card @click="navigateToManageProducts">
            <v-row>
              <v-col cols="2"></v-col>
              <v-col cols="8">
                <v-img
                    src="https://peru21.pe/resizer/R3O07pGUXuqpOIYYV0_Z3hufi1k=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/4FMVWEJARFCT5B47PPKCAI5ROU.jpg"
                    width="100%"
                    class="rounded-img"
                ></v-img>
              </v-col>
              <v-col cols="2"></v-col>
            </v-row>
            <v-card-title class="justify-center">
              Gestionar productos
            </v-card-title>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card @click="navigateToRestaurant(301)">
            <v-row>
              <v-col cols="2"></v-col>
              <v-col cols="8">
                <v-img
                    src="https://www.hosteleria.site/wp-content/uploads/2019/07/restaurantes-1.jpg"
                    width="100%"
                    class="rounded-img"
                ></v-img>
              </v-col>
              <v-col cols="2"></v-col>
            </v-row>
            <v-card-title class="justify-center">
              Mi restaurante
            </v-card-title>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card @click="navigateToManageCategories">
            <v-row>
              <v-col cols="2"></v-col>
              <v-col cols="8">
                <v-img
                    src="https://x6i2p6h3.rocketcdn.me/wp-content/uploads/2018/01/Cocina-de-restaurante.jpg"
                    width="100%"
                    class="rounded-img"
                ></v-img>
              </v-col>
              <v-col cols="2"></v-col>
            </v-row>
            <v-card-title class="justify-center">
              Gestionar categorías
            </v-card-title>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card @click="navigateToSales">
            <v-row>
              <v-col cols="2"></v-col>
              <v-col cols="8">
                <v-img
                    src="https://previews.123rf.com/images/blankstock/blankstock1707/blankstock170701715/82828881-icono-de-l%C3%ADnea-de-tablero-de-presentaci%C3%B3n-informe-gr%C3%A1fico-o-signo-de-crecimiento-de-ventas-s%C3%ADmbolo-de-datos-d.jpg"
                    width="100%"
                    class="rounded-img"
                ></v-img>
              </v-col>
              <v-col cols="2"></v-col>
            </v-row>
            <v-card-title class="justify-center">
              Mis ventas
            </v-card-title>
          </v-card>
        </v-col>
        <v-row>
          <v-col cols="3"></v-col>
          <v-col cols="6">
            <v-card @click="navigateToAppointments">
              <v-row>
                <v-col cols="2"></v-col>
                <v-col cols="8">
                  <v-img
                      src="https://www.benchillmedicalpractice.co.uk/website/P84029/files/appt.jpeg"
                      width="100%"
                      class="rounded-img"
                  ></v-img>
                </v-col>
                <v-col cols="2"></v-col>
              </v-row>
              <v-card-title class="justify-center">
                Citas
              </v-card-title>
            </v-card>
          </v-col>
          <v-col cols="3"></v-col>
        </v-row>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "home-owner",
  methods: {
    select() { },
    navigateToAppointments() {
      this.$router.push ({name: 'appointments'});
    },
    navigateToRestaurant(id) {
      this.$router.push ({name: 'restaurants', params: { id: id}});
    },
    navigateToSales() {
      this.$router.push ({name: 'sales'});
    },
    navigateToManageProducts() {
      this.$router.push ({name: 'products'});
    },
    navigateToManageCategories() {
      this.$router.push ({name: 'categories'});
    }
  }
}
</script>

<style scoped>
.rounded-img {
  border-radius: 100%;
}
</style>