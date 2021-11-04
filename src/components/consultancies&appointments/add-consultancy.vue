<template>
  <v-card>
    <v-card-title v-if="!update">Agregar Review</v-card-title>
    <v-card-title v-else>Editar Review</v-card-title>
    <v-card-text>
      <v-form v-model="isValid">
        <v-text-field
            label="Diagnostico"
            v-model="item.diagnosis"
            :rules="diagnosisRules"
            error-count="2"
            required>
        </v-text-field>
        <v-text-field
            label="Recomendacion"
            v-model="item.recommendation"
            :rules="recommendationRules"
            error-count="2"
            required>
        </v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" :disabled="!isValid" @click="saveConsultancy()" v-if="!update">Añadir Review </v-btn>
      <v-btn color="primary" :disabled="!isValid" @click="updateConsultancy()" v-else>Agregar Cambios</v-btn>
    </v-card-actions>
    <v-card-actions>
      <v-btn color="primary"  @click="navigateToAppointments()">Cancelar</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import ConsultanctyService from "../../services/consultancy-service";

export default {
  name: "add-consultancy",
  data() {
    return {
      update: true,
      id: 0,
      isValid: true,
      appointmentId: 0,
      item: {
        id: 0,
        diagnosis: '',
        recommendation: '',
      },
      diagnosisRules: [
        v => !!v || 'Se requiere Diagnostico',
        v => (v && v.length >= 2 && v.length <= 100) || 'El diagnostico debe tener entre 2 y 100 caracteres'
      ],
      recommendationRules: [
        v => !!v || 'Se requiere Recomendacion',
        v => (v && v.length >= 2 && v.length <= 100) || 'La recomendacion debe tener entre 2 y 100 caracteres'
      ],

    }
  },
  methods: {
    saveConsultancy(){
      ConsultanctyService.createConsultancy(this.appointmentId,this.item)
          .then(() => {
            this.navigateToAppointments();
          })
          .catch(e => {
            console.log(e);
          })
    },
    updateConsultancy(){
      ConsultanctyService.updateConsultancy(this.item.id,this.item)
          .then(() => {
            this.navigateToAppointments();
          })
          .catch(e => {
            console.log(e);
          })
    },
    navigateToAppointments(){
      this.$router.push({name: 'appointments'})
    },
    getById(){
      ConsultanctyService.getConsultancyByAppointmentId(this.appointmentId)
          .then((response) => {
              this.item = response.data;
          })
          .catch(() => {
            this.update = false;
          })
    }
  },
  created() {
    this.appointmentId = this.$route.query.appointmentId;
    this.getById();
  }
}
</script>

<style scoped>

</style>