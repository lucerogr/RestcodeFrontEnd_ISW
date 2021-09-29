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
        <v-col cols="3"></v-col>
        <v-col cols="6">
          <div v-for="post in publications" :key="post">
            <v-spacer></v-spacer>
            <v-card>
              <v-row>
                <v-col cols="2"></v-col>
                <v-col cols="8">
                  <v-img
                      src="https://previews.123rf.com/images/creativepriyanka/creativepriyanka1909/creativepriyanka190900606/130480594-icon-for-work-book-publication.jpg"
                      width="100%"
                      class="rounded-img"
                  ></v-img>
                </v-col>
                <v-col cols="2"></v-col>
              </v-row>
              <v-card-title class="justify-center">
                Publicacion {{post.id}}
              </v-card-title>
              <v-card-text class="text-center">
                {{post.description}}
              </v-card-text>
            </v-card>
          </div>
        </v-col>
        <v-col cols="3"></v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import PublicationsService from '../services/publications-service';
export default {
  name: "publications",
  data() {
    return {
      publications: []
    }
  },
  methods: {
    retrievePublications() {
      PublicationsService.getAllPublications()
          .then(response => {
            this.publications = response.data;
          })
          .catch((e) => {
            console.log(e);
          });
    }
  },
  created() {
    this.retrievePublications();
  }
}
</script>

<style scoped>
</style>