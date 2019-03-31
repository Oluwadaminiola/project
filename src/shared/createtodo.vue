<template>
<div class="container row">
<div class="col-xs-12" >
    <button class="btn btn-default" v-on:click="showForm" >Create Task</button>
</div>
<div class="col-lg-12" >
    <v-dialog max-width="350px" v-model="dialogform" >
      <v-card>
        <v-card-title>
            Create New Task
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex md12>
                <v-text-field label="Title" v-model="titleText" ref="title" ></v-text-field>
              </v-flex>
              <v-flex md12>
                <v-text-field label="Description" v-model="descriptionText" ref="description" ></v-text-field>
              </v-flex>
              <v-flex md12>
                <v-text-field label="Deadline" v-model="deadlineText" ref="deadline" ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
            <v-btn v-on:click="sendForm()" >
                Create
            </v-btn>
            <v-btn v-on:click="closeForm" >
                Close
            </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</div>
</div>
</template>
<script>
export default {
    data () {
        return {
            dialogform: false,
            titleText: '',
            descriptionText: '',
            deadlineText: '',

        }
    },
    methods: {
        showForm() {
            this.dialogform = true;
        },
        closeForm() {
            this.dialogform = false;
        },
        sendForm() {
            if (this.titleText.length > 0 && this.descriptionText > 0 && this.deadlineText > 0) {
                const title = this.titleText;
                const description = this.descriptionText;
                const deadline = this.deadlineText;
                this.$emit('create-todo', {
                    title,
                    description,
                    deadline,
                    done: false,
                });
                this.newTodoText = '';
            }
            this.dialogform = false;            
        },
    }
}
</script>
<style>

</style>