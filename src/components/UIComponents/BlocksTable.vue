<template>
  <table class="table">
    <thead>
      <tr>
        <slot name="columns">
          <th v-for="column in columns">{{column}}</th>
          <th>Update</th>
          <th>Delete</th>
        </slot>
      </tr>
    </thead>
    <tbody>
    <tr v-for="item in data">
      <slot :row="item">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.description}}</td>
        <td>{{item.hourStart}}</td>
        <td>{{item.hourEnd}}</td>
        <td><button class="btn btn-info btn-fill" v-on:click="user_update(item.id)">Update</button></td>
        <td><button class="btn btn-danger btn-fill" v-on:click="user_delete(item.id)">Delete</button></td>
      </slot>
    </tr>
    </tbody>
  </table>
</template>
<script>

  export default {
    name: 'l-table',
    props: {
      avatar: String,
      columns: Array,
      data: Array
    },
    methods: {
      hasValue (item, column) {
        console.log(item[column.toLowerCase()] !== 'undefined')
        return item[column.toLowerCase()] !== 'undefined'
      },
      itemValue (item, column) {
        return item[column.toLowerCase()]
      },
      user_update(id){
        alert("Update ID: " +id);
      },
      user_delete(id){
        alert("Delete: "+id);
      },
      // is_image(column,avatar){
      //   /*console.log((column=='Avatar' && avatar!=null && avatar!=undefined && avatar != ''))*/
      //   return (column=='Avatar' && avatar!=null && avatar!=undefined && avatar!='')
      // },
      // is_default(column){
      //   if(column==='Avatar'){
      //       return true;
      //   }else return false;
      // }
    }
  }
</script>
<style scoped>
img{
  width: 70px;
  height: 70px;
  border-radius: 100%;
}
input{
  width:100%;
  user-select: none;
}
td:first-child input:first-child{
  text-align: center;
}
td:nth-child(6){
  width:4%;
}
td:nth-child(7){
  width:4%;
}
</style>
