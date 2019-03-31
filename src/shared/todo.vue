<template>
<v-container>
    <!-- <div class="row" > -->
      <div   >
        <v-card>
          <v-card-title >
            {{ todo.title }}
          </v-card-title>
          <v-card-text >
            <p>{{ todo.description }}</p>
            <p>Deadline: {{ todo.deadline }}</p>
          </v-card-text>
          <v-card-actions>
            <button class="btn btn-info mx-2" v-show="!todo.done"  >Complete</button>
            <button class="btn btn-info mx-2" v-show="todo.done" disabled  >Completed</button>
            <button class="btn btn-info mx-2" v-on:click="editTask" >Edit</button>
            <button class="btn btn-info mx-2" v-on:click="deleteTodo(todo)" >Delete</button>
          </v-card-actions>
        </v-card>
        <v-dialog v-model="dialog" max-width="300px" >
          <v-card>
            <v-card-text>
              <v-container>
                <v-layout wrap>
                    <v-flex md12 >
                        <v-text-field label="Title" v-model="todo.title" ></v-text-field>
                    </v-flex>
                    <v-flex md12 >
                        <v-text-field label="Description" v-model="todo.description" ></v-text-field>
                    </v-flex>
                    <v-flex md12 >
                        <v-text-field label="Deadline" v-model="todo.deadline" ></v-text-field>
                    </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
            <v-card-actions>
                <v-btn class="btn btn-default" v-on:click="finTask" >Done</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    <!-- </div> -->
</v-container>
</template>
<script>
export default {
    props: ['todo'],
    data () {
        return {
            dialog: false,
        }
    },
    methods: {
        editTask(){
            this.dialog = true;
        },
        finTask(){
            this.dialog = false;
        },
        deleteTodo(todo){
            this.$emit('delete-todo', todo);
        }
    }
}
</script>
<style>

</style>