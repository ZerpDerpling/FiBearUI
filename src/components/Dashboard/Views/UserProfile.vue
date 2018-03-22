<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card>
            <template slot="header">
              <h4 class="card-title">Bear</h4>
              <p class="card-category">Danh sách gấu</p>
            </template>
            <div class="table-responsive">
              <l-table class="table-hover table-striped"
                       :columns="table1.columns"
                       :data="table1.data">
              </l-table>
            </div>
          </card>

          <card>
            <template slot="header">
              <h4 class="card-title">Customer</h4>
              <p class="card-category">Danh sách người muốn gấu</p>
            </template>
            <div class="table-responsive">
              <l-table class="table-hover table-striped"
                       :columns="table2.columns"
                       :data="table2.data">
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

  const tableColumns1 = ['Id', 'Email', 'Username', 'Password', 'Firstname', 'Lastname', 'Birthdate', 'Sex']

  const tableData1 = [{
    id: 1,
    email: 'abc@tynk.com',
    username: 'abc123',
    password: '1234',
    firstname: 'Tynk',
    lastname: 'Shit',
    birthdate: '2016-06-15',
    sex: 'Female'
  },{
    id: 2,
    email: 'abc@tynk.com',
    username: 'abc123',
    password: '1234',
    firstname: 'Tynk',
    lastname: 'Shit',
    birthdate: '2016-06-15',
    sex: 'Female'
  }]

  const tableColumns2 = ['Id', 'Email', 'Username', 'Password', 'Firstname', 'Lastname', 'Birthdate', 'Sex']
  const tableData2 = [{
    id: 12,
    email: 'abc@tynk.com',
    username: 'abc123',
    password: '1234',
    firstname: 'Tynk',
    lastname: 'Shit',
    birthdate: '2016-06-15',
    sex: 'Female'
  }]



  export default {
    components: {
      LTable,
      Card
    },
    data () {
      return {
        table1: {
          columns: [...tableColumns1],
          data: [...tableData1]
        },
        table2: {
          columns: [...tableColumns2],
          data: [...tableData2]
        }
      }
    }
  }
</script>
<style>

</style>
