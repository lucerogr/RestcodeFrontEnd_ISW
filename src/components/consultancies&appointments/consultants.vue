<template>
  <v-card>
    <v-card-title>
      Agenda una cita con tu consultor favorito
      <v-spacer></v-spacer>
    </v-card-title>
    <v-card-text>
      <v-data-table
          :headers="headers"
          :items="displayFilters"
          :items-per-page="20"
          :search="search"
          class="elevation-1"
          ref="filterTable">
        <template v-slot:[`item.profile`]="{ item }">
          <v-icon @click="navigateToConsultantProfile(item.id)">mdi-account</v-icon>
        </template>

        <template v-slot:[`item.appointment`]="{ item }">
          <v-icon @click="navigateToNewAppointment(item.id)" style="color: blue">mdi-book-open</v-icon>
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>

<script>
import ConsultantsService from '../../services/consultants-service';
export default {
  name: "filters",
  data() {
    return {
      search:'',
      dialog: false,
      dialogDelete: false,
      headers:[
        {text: 'Id', value: 'id'},
        {text: 'Nombre', value: 'firstName'},
        {text: 'Apellido', value: 'lastName'},
        {text: 'Teléfono', value: 'cellphone'},
        {text: 'Linkedin', value: 'linkedinLink'},
        {text: 'Perfil', value: 'profile', sortable: false},
        {text: 'Pedir una Consultoría', value: 'appointment', sortable: false}
      ],
      filters: [],
      displayFilters:[],
      editedIndex:-1,
      editedItem:{
        id:0,
        firstName: '',
        lastName:'',
        cellphone: '',
        linkedinLink: ''
      },
      defaultItem:{
        id: 0,
        firstName: '',
        lastName: '',
        cellphone: '',
        linkedinLink: ''
      },
    }
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Tutorial' : 'Edit Tutorial';
    },
    currentUser(){
      return this.$store.state.auth.user;
    }
  },
  methods: {
    getDisplayFilter(filter) {
      return {
        id: filter.id,
        firstName: filter.firstName,
        lastName: filter.lastName,
        cellphone: filter.cellphone,
        linkedinLink: filter.linkedinLink
      };
    },
    retrieveFilters() {
      ConsultantsService.getAllConsultants()
          .then(response => {
            this.filters = response.data.content;
            this.displayFilters = response.data.content.map(this.getDisplayFilter);
          })
    },
    refreshList(){
      this.retrieveFilters();
    },
    navigateToConsultantProfile(id) {
      this.$router.push ({path: `consultants/${id}`});
    },
    navigateToNewAppointment(id){
      this.$router.push({name: 'add-appointment', query: {consultantId: id, ownerId: this.currentUser.id}});
    }
  },
  mounted() {
    this.retrieveFilters();
  }
}

</script>

<style scoped>

</style>