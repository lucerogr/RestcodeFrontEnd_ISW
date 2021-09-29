<template>
  <v-card>
    <v-card-title>
      <span class="headline">Pedir una cita</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-text-field
            v-model="item.currentDateTime"
            label= "Fecha y hora actual"
            type="datetime-local"
            :rules="[v => !!v || 'Fecha y hora actual es requerida']"
            required
        ></v-text-field>
        <v-text-field
            v-model="item.scheduleDateTime"
            label= "Fecha y hora para la cita"
            type="datetime-local"
            :rules="[v => !!v || 'Fecha y hora para la cita es requerida']"
            required
        ></v-text-field>
        <v-text-field
            v-model="item.topic"
            label="Tema"
            :rules="[v => !!v || 'Tema es requerido']"
            required>
        </v-text-field>
        <v-text-field
            v-model="item.meetLink"
            label="Link de la reunión"
            :rules="[v => !!v || 'Link de la reunión es requerido']"
            required>
        </v-text-field>
        <v-text-field
            v-model.number="item.ownerId"
            label="ID Dueño de Restaurante"
            :rules="[v => !!v || 'Id de Dueño de Restaurante es requerido']"
            required>
        </v-text-field>
        <v-text-field
            v-model.number="item.consultantId"
            label="ID Consultor"
            :rules="[v => !!v || 'Id de Consultor es requerido']"
            required>
        </v-text-field>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" text @click="close">Cancelar</v-btn>
      <v-btn color="blue darken-1" text @click="save">Agendar</v-btn>
      <v-btn color="primary" @click="clear">Limpiar</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import AppointmentService from "@/services/appointments-service";
export default {
  name: "add-appointment",
  data() {
    return {
      item: {
        currentDateTime: '',
        scheduleDateTime: '',
        topic: '',
        meetLink: '',
        ownerId: 0,
        consultantId: 0
      }
    }
  },
  methods: {
    clear () {
      this.item.currentDateTime = null
      this.item.scheduleDateTime = null
      this.item.topic = ''
      this.item.meetLink =''
      this.item.ownerId = 0
      this.item.consultantId = 0
    },
    save() {
      AppointmentService.add(this.item)
          .then(() => {
            this.navigateToAppointments();
          })
          .catch(e => {
            console.log(e);
          })
    },
    close() {
      this.navigateToAppointments();
    },
    navigateToAppointments() {
      this.$router.push ({name: 'appointments'});
    }
  }
}
</script>

<style scoped>
</style>