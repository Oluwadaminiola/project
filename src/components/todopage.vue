<template>
<div class="green">
  <v-container>
    <v-layout row >
        <!-- <v-flex md12>
          <v-btn v-on:click="openDialog">Create Task</v-btn>
        </v-flex>
        <v-dialog v-model="dialog" max-width="200px;" >
            <v-card>
                <v-card-title>
                    Create A New Task
                </v-card-title>
                <v-card-text>
                    <v-container>
                      <v-flex>
                        <v-text-field v-model="input" label="Title"></v-text-field>                        
                      </v-flex>
                      <v-flex>
                        <v-text-field label="Title"></v-text-field>                        
                      </v-flex>
                      <v-flex>
                        <v-text-field label="Title"></v-text-field>                        
                      </v-flex>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
                    <v-btn color="blue darken-1" flat v-on:click="addTodo()">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-flex md12>
          <v-card v-for="(todo, index) in todos" :key="index" >
            <v-card-title>{{index}}: {{ todo }}</v-card-title>
        </v-card>
        </v-flex> -->
        <v-flex>
            <CreateTodo v-on:create-todo="addTodo" ></CreateTodo>
        </v-flex>
        <v-flex>
            <Todolist v-bind:todos="todos" ></Todolist>
        </v-flex>
    </v-layout>
  </v-container>
</div>
</template>
<script>
import Todolist from '@/shared/todolist'
import CreateTodo from '@/shared/createtodo'

export default {
    components: {
        Todolist,
        CreateTodo,
    },
    data () {
        return {
            todos: [{
                title: 'task a',
                description: 'a meeting',
                deadline: '23/04/2019',
                done: false
            },
            {
                title: 'task b',
                description: 'a meeting with me',
                deadline: '23/04/2019',
                done: false
            },
            {
                title: 'task c',
                description: 'a meeting with you',
                deadline: '23/04/2019',
                done: true
            }
            ],
            // input: "",
            // dialog: false,
        }
    },
    methods: {
        addTodo(){
            this.todos.push({
                title,
                description,
                deadline,
                done: false
            });
            // this.input = "",
            // this.description = "",
            // this.deadline = ""
        },
        // openDialog(){
        //     this.dialog = true;
        // }
    }
}
</script>
<style>
.green{
    background: transparent !important;
}
</style>