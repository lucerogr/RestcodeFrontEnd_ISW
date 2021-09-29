<template>
  <v-card>
    <v-card-title>
      Citas
      <v-spacer></v-spacer>
    </v-card-title>
    <v-card-text>
      <v-data-table :headers="headers" :items="displayAppointments" :items-per-page="5"
                    class="elevation-1" ref="appointmentsTable">
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
        </template>
        <template v-slot:top>
          <v-dialog  max-width="500px">
            <v-card>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.id" label="Id"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.currentDateTime" label="Fecha y hora actual"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.scheduleDateTime" label="Fecha y hora para la cita"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.topic" label="Tema"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.meetLink" label="Link de la reunión"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.ownerId" label="ID Dueño de Restaurante"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.consultantId" label="ID Consultor"></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="headline">Eliminar cita</v-card-title>
              <v-card-text>
                <p>¿Estas seguro que quieres eliminar la cita?<b>{{ editedItem.title }}</b></p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete">Cancelar</v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </template>
      </v-data-table>
    </v-card-text>
    <v-card-actions>
      <v-btn small color="primary" @click="navigateToAddAppointment">Pedir una cita</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import AppointmentService from '../services/appointments-service';
export default {
  name: "appointments",
  data() {
    return {
      dialogDelete: false,
      headers: [
        {text: 'Id', value: 'id'},
        {text: 'Fecha y hora actual', value: 'currentDateTime'},
        {text: 'Fecha y hora para la cita', value: 'scheduleDateTime'},
        {text: 'Tema', value: 'topic'},
        {text: 'Link de la reunión', value: 'meetLink'},
        {text: 'ID Dueño de Restaurante', value: 'ownerId'},
        {text: 'ID Consultor', value: 'consultantId'},
        {text: 'Acciones', value: 'actions', sortable: false}
      ],
      appointments: [],
      displayAppointments: [],
      editedIndex: -1,
      editedItem: {
        id: 0,
        currentDateTime: null,
        scheduleDateTime: null,
        topic: '',
        meetLink: '',
        ownerId: 0,
        consultantId: 0
      },
      defaultItem: {
        id: 0,
        currentDateTime: null,
        scheduleDateTime: null,
        topic: '',
        meetLink: '',
        ownerId: 0,
        consultantId: 0
      },
    }
  },
  watch: {
    dialogDelete(val) {
      val || this.closeDelete()
    },
  },
  methods: {
    retrieveAppointments() {
      AppointmentService.getAll()
          .then(response => {
            this.appointments = response.data;
            this.displayAppointments = response.data.map(this.getDisplayAppointment);
          })
          .catch((e) => {
            console.log(e);
          });
    },
    getDisplayAppointment(appointment) {
      return {
        id: appointment.id,
        currentDateTime: appointment.currentDateTime,
        scheduleDateTime: appointment.scheduleDateTime,
        topic: appointment.topic,
        meetLink: appointment.meetLink,
        ownerId: appointment.ownerId,
        consultantId: appointment.consultantId
      };
    },
    refreshList() {
      this.retrieveAppointments();
    },
    removeAllAppointments() {
      AppointmentService.deleteAll()
          .then(() => {
            this.refreshList();
          })
          .catch((e) => {
            alert("El Backend no soporta esta operación.");
            console.log(e);
          });
    },
    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    deleteItem(item) {
      this.editedIndex = this.displayAppointments.indexOf(item);
      this.editedItem = Object.assign({}, this.appointments[this.editedIndex]);
      this.dialogDelete = true;
    },
    deleteItemConfirm() {
      this.deleteAppointment(this.editedItem.id);
      this.appointments.splice(this.editedIndex, 1);
      this.closeDelete();
    },
    deleteAppointment(id) {
      AppointmentService.delete(id)
          .then(() => {
            this.refreshList();
          })
          .catch((e) => {
            console.log(e);
          });
    },
    navigateToAddAppointment() {
      this.$router.push({name: 'add-appointment'});
    }
  },
  mounted() {
    this.retrieveAppointments();
  }
}
</script>

<style scoped>
</style>