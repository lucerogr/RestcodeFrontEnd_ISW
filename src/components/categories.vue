<template>
  <v-card>
    <v-card-title class="justify-center">
      ADMINISTRAR MIS CATEGORIAS
    </v-card-title>
    <v-col cols="12" md="6">
      <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="búsqueda"
          single-line
          hide-details
      ></v-text-field>
    </v-col>
    <v-card-text>
      <v-data-table :headers="headers" :items="displayCategories" :items-per-page="15" :search="search"
                    class="elevation-1" ref="categoriesTable">
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
          <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
        </template>
        <template v-slot:top>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="#1bd698" class="mb-2" v-bind="attrs" v-on="on">Agregar Categoria</v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="9" sm="6" md="20">
                      <v-text-field v-model="editedItem.name" label="Nombre"></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="#1bd698" text @click="close">Cancelar</v-btn>
                <v-btn color="#1bd698" text @click="save">Guardar</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="headline">Eliminar categoria</v-card-title>
              <v-card-text>
                <p>¿Está seguro de querer eliminar la categoria <b>{{ editedItem.name }}?</b></p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="#1bd698" text @click="closeDelete">Cancelar</v-btn>
                <v-btn color="#1bd698" text @click="deleteItemConfirm">Aceptar</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>

<script>
import CategoryService from '../services/categories-service';
export default {
  name: "categories",
  data() {
    return {
      search: '',
      dialog: false,
      dialogDelete: false,
      headers: [
        {text: 'Id', value: 'id'},
        {text: 'Nombre', value: 'name'},
        {text: 'Acciones', value: 'actions', sortable: false}
      ],
      categories: [],
      displayCategories: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        restaurantId: 301
      },
      defaultItem: {
        name: '',
        restaurantId: 301
      },
    }
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Nueva Categoria' : 'Editar Categoria'
    },
  },
  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    },
  },
  methods: {
    retrieveCategories() {
      CategoryService.getByRestaurantId(this.editedItem.restaurantId)
          .then(response => {
            this.categories = response.data;
            this.displayCategories = response.data.map(this.getDisplayCategory);
          })
          .catch((e) => {
            console.log(e);
          });
    },
    getDisplayCategory(category) {
      return {
        id: category.id,
        name: category.name
      };
    },
    refreshList() {
      this.retrieveCategories();
    },
    removeAllCategories() {
      CategoryService.deleteAll()
          .then(() => {
            this.refreshList();
          })
          .catch((e) => {
            alert("The Backend does not support this operation.");
            console.log(e);
          });
    },
    editItem(item) {
      this.editedIndex = this.displayCategories.indexOf(item);
      console.log(item);
      this.editedItem = this.categories[this.editedIndex];
      this.dialog = true;
    },
    deleteItem(item) {
      this.editedIndex = this.displayCategories.indexOf(item);
      this.editedItem = Object.assign({}, this.categories[this.editedIndex]);
      this.dialogDelete = true;
    },
    deleteItemConfirm() {
      this.deleteCategory(this.editedItem.id);
      this.categories.splice(this.editedIndex, 1);
      this.closeDelete();
    },
    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    save() {
      if (this.editedIndex > -1) {
        this.categories[this.editedIndex] = this.editedItem;
        this.displayCategories[this.editedIndex] = this.getDisplayCategory(this.categories[this.editedIndex]);
        CategoryService.update(this.editedItem.id, this.editedItem)
            .then(() => {
              this.refreshList();
            })
            .catch(e => {
              console.log(e);
            });
      } else {
        CategoryService.create(this.editedItem)
            .then(response => {
              let item = response.data;
              this.categories.push(item);
              this.displayCategories.push(this.getDisplayCategory(item));
            })
            .catch(e => {
              console.log(e);
            })
      }
      this.close()
    },
    deleteCategory(id) {
      CategoryService.delete(id)
          .then(() => {
            this.refreshList();
          })
          .catch((e) => {
            console.log(e);
          });
    }
  },
  mounted() {
    this.retrieveCategories();
  }
}
</script>

<style scoped>
</style>