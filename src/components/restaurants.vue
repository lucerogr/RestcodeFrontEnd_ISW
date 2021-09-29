<template>
  <v-card>
    <v-card-title class="justify-center">
      <h3>RESTAURANTE {{defaultItem.name.toUpperCase()}}</h3>
    </v-card-title>
    <div class="d-flex flex-column justify-space-between align-center">
      <v-img
          src="https://image.freepik.com/vector-gratis/fachada-restaurante-estilo-plano_23-2147537370.jpg"
          height="25%"
          width="25%"
      ></v-img>
    </div>
    <v-card-text>
      Dirección: {{defaultItem.address}}
    </v-card-text>
    <v-card-text>
      Número telefónico: {{defaultItem.cellPhoneNumber}}
    </v-card-text>
    <v-col class="justify-center">
      <v-btn color="#1bd698" dark class="mb-2" v-bind="attrs" v-on="on" @click="navigateToEditRestaurant(defaultItem.id)">
        <v-icon>
          mdi-pencil
        </v-icon>
        Editar Información
      </v-btn>
    </v-col>
    <v-card-title class="justify-center">
      <h5>GALERÍA DE FOTOS</h5>
    </v-card-title>
    <v-row>
      <v-col
          v-for="item in defaultItem.photo"
          :key="item.id"
          cols="4"
      >
        <v-img
            :src="item.src"
            aspect-ratio="1"
        >
          <template v-slot:placeholder>
            <v-row
                align="center"
                justify="center"
            >
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import RestaurantService from '../services/restaurants-service';
export default {
  name: "restaurants",
  data() {
    return {
      dialog: false,
      defaultItem: {
        id: 0,
        name: '',
        address: '',
        cellPhoneNumber: 0,
        ownerId: 0,
        photo: []
      }
    }
  },
  computed: { },
  watch: {
    dialog(val) {
      val || this.close()
    }
  },
  methods: {
    retrieveRestaurant(id) {
      RestaurantService.get(id)
          .then(response => {
            this.defaultItem = response.data;
            this.defaultItem.photo = [
              {
                id: 1,
                src: 'https://cdn.pixabay.com/photo/2015/06/30/18/36/st-826688_960_720.jpg'
              },
              {
                id: 2,
                src: 'https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952__340.jpg'
              },
              {
                id: 3,
                src: 'https://cdn.pixabay.com/photo/2020/01/31/07/26/chef-4807317_960_720.jpg'
              },
              {
                id: 4,
                src: 'https://cdn.pixabay.com/photo/2016/04/02/17/58/service-1303313_960_720.jpg'
              },
              {
                id: 5,
                src: 'https://cdn.pixabay.com/photo/2016/03/27/21/34/restaurant-1284351_960_720.jpg'
              },
              {
                id: 6,
                src: 'https://cdn.pixabay.com/photo/2015/03/26/10/28/restaurant-691397__340.jpg'
              }
            ]
          })
          .catch((e) => {
            console.log(e);
          });
    },
    save() {
      RestaurantService.update(this.defaultItem.id, this.defaultItem)
          .then(() => {
            this.retrieveRestaurant(this.defaultItem.id);
          })
          .catch(e => {
            console.log(e);
          });
    },
    editItem(item) {
      console.log(item);
      this.dialog = true;
    },
    close() {
      this.dialog = false
    },
    navigateToEditRestaurant(id) {
      this.$router.push({name: 'edit-restaurant', params: { id: id}});
    }
  },
  created() {
    this.retrieveRestaurant(this.$route.params.id);
  }
}
</script>

<style scoped>
</style>
