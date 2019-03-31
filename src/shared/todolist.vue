<template>
<v-container>
  <v-layout row>
    <v-flex md12>
      <p>Completed: {{todos.filter(todo => {return todo.done === true}).length}} </p>
      <p>Pending: {{todos.filter(todo => {return todo.done === false}).length}} </p>
    </v-flex>

  </v-layout>
  <div class="row" >
    <Todo v-on:delete-todo="deleteTodo" v-for="todo in todos" v-bind:todo="todo" class="col-lg-4 col-md-6 col-xs-12" ></Todo>
  </div>
</v-container>
</template>
<script>
import Todo from '@/shared/todo'

export default {
   props: ['todos'],
   components: {
       Todo,
   },
   data () {
       return {

       }
   }, 
   methods: {
       deleteTodo(todo){
           const todoIndex = this.todos.indexOf(todo);
           this.todos.splice(todoIndex, 1);
       }
   }
}
</script>
<style>

</style>