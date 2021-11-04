<template>
  <v-card>
    <v-card-title>Review</v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
            label="Diagnostico"
            v-model="item.diagnosis"
            disabled
            required>
        </v-text-field>
        <v-text-field
            label="Recomendacion"
            v-model="item.recommendation"
            disabled
            required>
        </v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="goToAppointments()">Go back</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import ConsultanctyService from "../../services/consultancy-service";

export default {
  name: "view-consultancy",
  data() {
    return {
      appointmentId: 0,
      item: {
        id: 0,
        diagnosis: '',
        recommendation: '',
      }

    }
  },
  computed: {
    discriminator(){
      return this.$store.state.auth.user.discriminator;
    },
    currentUser(){
      return this.$store.state.auth.user;
    }
  },
  methods: {
    getById(id){
      ConsultanctyService.getConsultancyByAppointmentId(this.appointmentId)
          .then((response) => {
            this.item = response.data;
          })
          .catch(() => {
            if(this.discriminator === 'consultant'){
              this.$router.push({name:'add-consultancy', query:{ appointmentId: id}});
            }else {
              this.$router.push({name:'appointments', query: {owner: this.currentUser.id, error: '1'}});
            }
          })
    },
    goToAppointments() {
      this.$router.push({name:'appointments', query: {owner: this.currentUser.id}});
    }
  },
  created() {
    this.appointmentId = this.$route.query.appointmentId;
    this.getById(this.appointmentId);
  }
}
</script>

<style scoped>

</style>