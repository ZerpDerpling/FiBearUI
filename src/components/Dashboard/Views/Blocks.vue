<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card>
            <template slot="header">
              <h4 class="card-title">Blocks list</h4>
              <p class="card-category">Danh sách các block</p>
            </template>
            <div class="table-responsive">
              <l-table class="table-hover table-striped"
                       :columns="table1.columns"
                       :data="table1.data">
              </l-table>
            </div>
          </card>

        </div>

      </div>
    </div>
  </div>
</template>
<script>
  import LTable from 'src/components/UIComponents/BlocksTable.vue'
  import Card from 'src/components/UIComponents/Cards/Card.vue'
  import store from 'src/store/store.js'
  import routes from 'src/routes/routes.js'  
  const tableColumns = ['Id', 'Name', 'Description', 'Hour_start', 'Hour_end']
  var tableData = []

  export default {
    components: {
      LTable,
      Card
    },
    mounted() {
        if (!store.state.isLogged) {  
        this.$router.push('/login');
      } else{
        this.$http.get('http://35.229.53.76/v1/admin/blocks',{
          headers:{
            Authorization: localStorage.getItem('token')
          }
        }).then((response) => {
          console.log(response.body);
          this.table1.data = response.body.blocks;
        }, (error) => {
          console.log(error);
        })    
      }
    },
    data () {
      return {
        table1: {
          columns: [...tableColumns],
          data: [...tableData]
        }
      }
    }
  }
</script>
<style>

</style>
