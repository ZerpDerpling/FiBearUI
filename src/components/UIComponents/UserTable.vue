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
        <!-- <td v-for="column in columns" v-if="hasValue(item, column)">
          <img :src="item.avatar" v-if="is_image(column,item.avatar)"/>
          <img v-else-if="is_default(column)" src="static/img/default-avatar.png"/> 
          <span v-else>{{itemValue(item, column)}}</span>
        </td> -->
        <td>
          <img :src="item.profile.avatar" v-if="item.profile.avatar!==null"/>
          <img v-else src="static/img/default-avatar.png"/>
        </td>
        <td>{{item.id}}</td>
        <td>{{item.email}}</td>
        <td>{{item.username}}</td>
        <td>{{item.phone}}</td>
        <td>{{item.profile.firstname}}</td>
        <td>{{item.profile.lastname}}</td>
        <td>{{item.profile.birthdate}}</td>
        <td>
          <span v-if="item.roleId===2">Female</span>
          <span v-else-if="item.roleId===1">Male</span>
          <span v-else>Admin</span>
          </td>
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
td:nth-child(2){
  width:6%;
}
td:nth-child(8){
  width:10%;
}
td:nth-child(9){
  width:7%;
}
td:nth-child(10){
  width:4%;
}
td:nth-child(11){
  width:4%;
}
</style>
