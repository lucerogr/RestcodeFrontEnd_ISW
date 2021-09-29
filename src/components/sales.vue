<template>
  <v-container>
    <v-row no-gutters class="justify-center">
      <v-col  cols="6" md="2">
        <v-card class="mx-auto" height="300px">
          <v-card-title >Monto total</v-card-title>
          <v-card-subtitle class="text-center " >
            {{totalSum}}
          </v-card-subtitle>
          <v-spacer></v-spacer>
          <v-card-actions>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <v-card-title >
          Ventas
          <v-spacer></v-spacer>
          <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details>
          </v-text-field>
        </v-card-title>
        <v-card-text>
          <v-data-table
              :headers="headers"
              :items="displaySales"
              :items-per-page="5"
              :search="search"
              class="elevation-1"
              ref="tutorialsTable">

            <template v-slot:body.append>
              <tr>
                <td></td>
                <td>
                  <v-text-field
                      v-model="more"
                      type="number"
                      label="More than"
                  ></v-text-field>
                </td>
                <td>
                  <v-text-field
                      v-model="less"
                      type="number"
                      label="Less than"
                  ></v-text-field>
                </td>
                <td colspan="4"></td>
              </tr>
            </template>
          </v-data-table>
        </v-card-text>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SalesService from '../services/sales-service';
export default {
  name: "sales",
  data() {
    return {
      search: '',
      more:'',
      less:'',
      dialog: false,
      dialogDelete: false,
      headers: [
        {text: 'Id', value: 'id'},
        {text: 'Datetime', value: 'dateAndTime'},
        {text: 'Client Fullname', value: 'clientFullName'},
        {
          text: 'Total',
          value: 'total',
          filter: value => {
            if (this.more && this.less){
              return value > parseInt(this.more) && value < parseInt(this.less)
            }
            else if ( this.more ){
              return value > parseInt(this.more)
            }
            else if ( this.less ){
              return value < parseInt(this.less)
            }
            else{
              return  true
            }
          }
        }
      ],
      sales: [],
      displaySales: [],
      productId:[],
    }
  },
  methods: {
    getDisplaySale(sale) {
      return {
        id: sale.id,
        dateAndTime:  (sale.dateAndTime).split("T"),
        clientFullName: sale.clientFullName,
        total: (Math.floor(Math.random() * (750 - 50 + 10)) + 50)/10
      };
    },
    retrieveSales() {
      SalesService.getAll()
          .then(response => {
            this.sales = response.data;
            this.displaySales = response.data.map(this.getDisplaySale);
          })
    },
    refreshList() {
      this.retrieveSales();
    }
  },
  computed: {
    totalSum(){
      const totalSum =this.displaySales.map(e =>e.total);
      var sum =0;
      totalSum.forEach (function(value){
        sum += value;
      });
      return sum;
    }
  },
  mounted() {
    this.retrieveSales();
  }
}
</script>

<style scoped>
</style>