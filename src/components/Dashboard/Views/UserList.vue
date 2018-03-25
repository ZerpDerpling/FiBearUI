<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <tabs>
            <tab name="BearList">
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
            </tab>
            <tab name="CustomerList">
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
            </tab>
          </tabs>
        </div>
      </div>
    </div>    
  </div>
</template>
<script>
  import LTable from 'src/components/UIComponents/UserTable.vue'
  import Card from 'src/components/UIComponents/Cards/Card.vue'
  import store from 'src/store/store.js'
  import routes from 'src/routes/routes.js'
  const tableColumns1= ['Avatar','ID','Email','Username', 'Phone', 'Firstname', 'Lastname', 'Birthdate', 'Gender']

  var tableData1 = []
  

  const tableColumns2 = ['Avatar','Id', 'Email', 'Username', 'Phone', 'Firstname', 'Lastname', 'Birthdate', 'Gender']
  var tableData2 = []



  export default {
    components: {
      LTable,
      Card,
    },
    mounted() {
        if (!store.state.isLogged) {  
        this.$router.push('/login');
      } else{
        this.$http.get('http://35.229.53.76/v1/admin/users',{
          headers:{
            Authorization: localStorage.getItem('token')
          }
        }).then((response) => {
          console.log(response.body.bears);
          // console.log(response.body.users[1].email)
          // //Store into Array to read
          // this.tableData1  = response.body.bears;
          this.table1.data = response.body.bears;
          this.table2.data = response.body.users;
          
         
          // for(var user in response.body.users){
            
          //           this.tableData1.push(user);
          // }
          
          //tableData1 = response.body.users; 

        }, (error) => {
          console.log(error);
        })    
      }
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
.tabs-component {
  margin: 0 0;
}

.tabs-component-tabs {
  border: solid 1px #ddd;
  border-radius: 6px;
  margin-bottom: 5px;
}

@media (min-width: 700px) {
  .tabs-component-tabs {
    border: 0;
    align-items: stretch;
    display: flex;
    justify-content: flex-start;
    margin-bottom: -1px;
  }
}

.tabs-component-tab {
  color: #999;
  font-size: 14px;
  font-weight: 600;
  margin-right: 0;
  list-style: none;
}

.tabs-component-tab:not(:last-child) {
  border-bottom: dotted 1px #ddd;
}

.tabs-component-tab:hover {
  color: #666;
}

.tabs-component-tab.is-active {
  color: #000;
}

.tabs-component-tab.is-disabled * {
  color: #cdcdcd;
  cursor: not-allowed !important;
}

@media (min-width: 700px) {
  .tabs-component-tab {
    background-color: #fff;
    border: solid 1px #ddd;
    border-radius: 3px 3px 0 0;
    margin-right: .5em;
    transform: translateY(2px);
    transition: transform .3s ease;
  }

  .tabs-component-tab.is-active {
    border-bottom: solid 1px #fff;
    z-index: 2;
    transform: translateY(0);
  }
}

.tabs-component-tab-a {
  align-items: center;
  color: inherit;
  display: flex;
  padding: .75em 1em;
  text-decoration: none;
}

.tabs-component-panels {
  padding: 4em 0;
}

@media (min-width: 700px) {
  .tabs-component-panels {
    border-top-left-radius: 0;
    background-color: #fff;
    border: solid 1px #ddd;
    border-radius: 0 6px 6px 6px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .05);
    padding: 1em 2em 1em 1em;
  }
}
</style>
