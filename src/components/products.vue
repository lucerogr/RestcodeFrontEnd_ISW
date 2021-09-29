<template>
  <v-card>
    <v-card-title class="justify-center">
      ADMINISTRAR MIS PRODUCTOS
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
      <v-data-table :headers="headers" :items="displayProducts" :items-per-page="15" :search="search"
                    class="elevation-1" ref="productsTable">
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
          <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
        </template>
        <template v-slot:top>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="#1bd698" class="mb-2" v-bind="attrs" v-on="on">Agregar Producto</v-btn>
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
                    <v-col cols="9" sm="6" md="20">
                      <v-text-field v-model.number="editedItem.price" label="Precio"></v-text-field>
                    </v-col>
                    <v-col cols="9" sm="6" md="20">
                      <v-text-field v-model.number="editedItem.categoryId" label="Id de Categoria"></v-text-field>
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
              <v-card-title class="headline">Eliminar producto</v-card-title>
              <v-card-text>
                <p>¿Está seguro de querer eliminar el producto <b>{{ editedItem.name }}?</b></p>
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
import ProductService from '../services/products-service';
export default {
  name: "products",
  data() {
    return {
      search: '',
      dialog: false,
      dialogDelete: false,
      headers: [
        {text: 'Id', value: 'id'},
        {text: 'Nombre', value: 'name'},
        {text: 'Precio', value: 'price'},
        {text: 'Id de Categoria', value: 'categoryId'},
        {text: 'Acciones', value: 'actions', sortable: false}
      ],
      products: [],
      displayProducts: [],
      editedIndex: -1,
      editedItem: {
        id: 0,
        name: '',
        price: 0.0,
        categoryId: 0
      },
      defaultItem: {
        id: 0,
        name: '',
        price: 0.0,
        categoryId: 0
      },
    }
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Nuevo Producto' : 'Editar Producto'
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
    retrieveProducts() {
      ProductService.getAll()
          .then(response => {
            this.products = response.data;
            this.displayProducts = response.data.map(this.getDisplayProduct);
          })
          .catch((e) => {
            console.log(e);
          });
    },
    getDisplayProduct(product) {
      return {
        id: product.id,
        name: product.name,
        price: product.price,
        categoryId: product.categoryId
      };
    },
    refreshList() {
      this.retrieveProducts();
    },
    removeAllProducts() {
      ProductService.deleteAll()
          .then(() => {
            this.refreshList();
          })
          .catch((e) => {
            alert("The Backend does not support this operation.");
            console.log(e);
          });
    },
    editItem(item) {
      this.editedIndex = this.displayProducts.indexOf(item);
      console.log(item);
      this.editedItem = this.products[this.editedIndex];
      this.dialog = true;
    },
    deleteItem(item) {
      this.editedIndex = this.displayProducts.indexOf(item);
      this.editedItem = Object.assign({}, this.products[this.editedIndex]);
      this.dialogDelete = true;
    },
    deleteItemConfirm() {
      this.deleteProduct(this.editedItem.id);
      this.products.splice(this.editedIndex, 1);
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
        this.products[this.editedIndex] = this.editedItem;
        this.displayProducts[this.editedIndex] = this.getDisplayProduct(this.products[this.editedIndex]);
        ProductService.update(this.editedItem.id, this.editedItem)
            .then(() => {
              this.refreshList();
            })
            .catch(e => {
              console.log(e);
            });
      } else {
        ProductService.create(this.editedItem)
            .then(response => {
              let item = response.data;
              this.products.push(item);
              this.displayProducts.push(this.getDisplayProduct(item));
            })
            .catch(e => {
              console.log(e);
            })
      }
      this.close()
    },
    deleteProduct(id) {
      ProductService.delete(id)
          .then(() => {
            this.refreshList();
          })
          .catch((e) => {
            console.log(e);
          });
    }
  },
  mounted() {
    this.retrieveProducts();
  }
}
</script>

<style scoped>
</style>