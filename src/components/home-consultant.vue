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
          <v-card @click="navigateToPublications">
            <v-row>
              <v-col cols="2"></v-col>
              <v-col cols="8">
                <v-img
                    src="https://neilpatel.com/wp-content/uploads/2016/05/writingposts.jpg"
                    width="100%"
                    class="rounded-img"
                ></v-img>
              </v-col>
              <v-col cols="2"></v-col>
            </v-row>
            <v-card-title class="justify-center">
              Publicaciones
            </v-card-title>
          </v-card>
        </v-col>
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
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "home-consultant",
  methods: {
    select() { },
    navigateToPublications() {
      this.$router.push ({name: 'publications'});
    },
    navigateToAppointments() {
      this.$router.push ({name: 'appointments'});
    }
  }
}
</script>

<style scoped>
.rounded-img {
  border-radius: 100%;
}
</style>