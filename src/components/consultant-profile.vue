<template>
  <v-card>
    <v-container class="grey lighten-5">
      <v-row>
        <v-col cols="4">
          <v-card class="pa-2" outlined tile>
            <v-img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png"
                height="100%"
                width="100%"
            ></v-img>
            <v-card-title class="justify-center">
              {{item.firstName}} {{item.lastName}}
            </v-card-title>
            <v-card-actions>
              <v-btn
                  color="blue lighten-1"
                  text
                  @click="show = !show"
              >
                {{show ? "Ocultar información" : "Mostrar información" }}
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn
                  icon
                  @click="show = !show"
              >
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-col>
                  Número de teléfono: {{item.cellphone}}
                </v-col>
                <v-col>
                  Correo electrónico: {{item.email}}
                </v-col>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>

        <v-spacer></v-spacer>

        <v-col cols="8">
          <v-row>
          <v-col cols="12">
            <v-card-title class="justify-center">
              EXPERIENCIA ACADÉMICA
            </v-card-title>
          </v-col>
          <v-col cols="4">
            <v-card class="pa-2" outlined tile>
              <v-img
                  src="https://1000marcas.net/wp-content/uploads/2020/02/Harvard-Logo.png"
                  height="100%"
                  width="100%"
              ></v-img>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card class="pa-2" outlined tile>
              <v-img
                  src="https://assets.change.org/photos/3/ed/ji/vKedJIUMCQexmgA-1600x900-noPad.jpg?1522027432"
                  height="100%"
                  width="100%"
              ></v-img>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card class="pa-2" outlined tile>
              <v-img
                  src="https://www.uap.edu.pe/wp-content/uploads/2019/08/Fotos-Pagina-Web.png"
                  width="100%"
              ></v-img>
            </v-card>
          </v-col>

          <v-col cols="12">
            <v-card-title class="justify-center">
              EXPERIENCIA LABORAL
            </v-card-title>
          </v-col>
          <v-col cols="4">
            <v-card class="pa-2" outlined tile>
              <v-img
                  src="https://blog.adecco.com.mx/wp-content/uploads/2019/11/que-es-consultoria-empresarial.png"
                  height="100%"
                  width="100%"
              ></v-img>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card class="pa-2" outlined tile>
              <v-img
                  src="https://smexterna.es/wp-content/uploads/2019/04/permisos-retributivos.jpg"
                  height="100%"
                  width="100%"
              ></v-img>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card class="pa-2" outlined tile>
              <v-img
                  src="https://www.esan.edu.pe/conexion/actualidad/2019/04/23/1500x844_consultoria_ahorro.jpg"
                  height="100%"
                  width="100%"
              ></v-img>
            </v-card>
          </v-col>
          </v-row>
        </v-col>


      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import ConsultantService from '../services/consultants-service';

export default {
  name: "consultant-profile",
  data() {
    return {
      show: false,
      hate: null,
      item: {
        id: 0,
        userName: '',
        firstName: '',
        lastName: '',
        cellphone: '',
        email: '',
        password: '',
        linkedinLink: ''
      }

    }
  },
  computed: { },
  watch: { },
  methods: {
    retrieveConsultant(id) {
      ConsultantService.getConsultantById(id)
          .then((response) => {
            this.item = response.data;
          })
          .catch(e => {
            console.log((e));
          })

    },
  },
  created() {
    this.retrieveConsultant(this.$route.params.id);
  }
}
</script>

<style scoped>

</style>