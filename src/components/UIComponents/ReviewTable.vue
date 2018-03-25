
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
          {{itemValue(item, column)}}
          </td> -->
          <td>{{item.id}}</td>
          <td>{{item.userReviewed.username}}</td>
          <td>{{item.user.username}}</td>
          <td>{{item.description}}</td>
          <td>{{item.rate}}</td>
          <td><button class="btn btn-info btn-fill" v-on:click="user_update(item.id)">Update</button></td>
          <td><button class="btn btn-danger btn-fill" v-on:click="user_delete(item.id)">Delete</button></td>
      </slot>
    </tr>
    </tbody>
  </table>
</template>
<script>
  import Vue from "vue"
  export default {
    name: 'l-table',
    props: {
      columns: Array,
      data: Array
    },
    methods: {
      hasValue (item, column) {
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
      }

    }
  }
</script>
<style scoped>
input{
  width:100%;
  user-select: none;
}
td:first-child input:first-child{
  text-align: center;
}
td:nth-child(1){
  width:6%;
}
td:nth-child(6){
  width:7%;
}
td:nth-child(7){
  width:4%;
}
td:nth-child(10){
  width:4%;
}
</style>
