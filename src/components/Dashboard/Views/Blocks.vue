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
  import LTable from 'src/components/UIComponents/UserTable.vue'
  import Card from 'src/components/UIComponents/Cards/Card.vue'

  const tableColumns = ['Id', 'Name', 'Description', 'Hour_start', 'Hour_end']

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
    data () {
      return {
        table1: {
          columns: [...tableColumns],
          data: [...tableData]
        },
        table2: {
          columns: [...tableColumns],
          data: [...tableData]
        }
      }
    }
  }
</script>
<style>

</style>
