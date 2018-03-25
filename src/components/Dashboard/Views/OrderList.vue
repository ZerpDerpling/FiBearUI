<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card>
            <template slot="header">
              <h4 class="card-title">Review list</h4>
              <p class="card-category">Đánh giá của khách về gấu</p>
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
  import LTable from 'src/components/UIComponents/ReviewTable.vue'
  import Card from 'src/components/UIComponents/Cards/Card.vue'
  import store from 'src/store/store.js'
  import routes from 'src/routes/routes.js'
  const tableColumns = ['Id', 'Customer', 'Bear', 'Description', 'Rate']

  const tableData = [{
    id: 1,
    name: 'Morning Block',
    description: '8h - 12h',
    hour_start: '08:00:00',
    hour_end: '12:00:00'
  },{
    id: 2,
    name: 'Afternoon Block',
    description: '12h - 16h',
    hour_start: '12:00:00',
    hour_end: '16:00:00'
  }
  ]
  export default {
    components: {
      LTable,
      Card
    },
    mounted() {
        if (!store.state.isLogged) {  
        this.$router.push('/login');
      } else{
        this.$http.get('http://35.229.53.76/v1/admin/reviews',{
          headers:{
            Authorization: localStorage.getItem('token')
          }
        }).then((response) => {
          console.log(response.body);
          this.table1.data = response.body.reviews;

          
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
