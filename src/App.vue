<template>
<div id="app">
  <div class="welcome" >
    <!-- <div class="row" >
      <div class="col-lg-1 col-xs-1">
        <v-navigation-drawer
        permanent fixed width="100%"
        class="navdraw"
        >
        
        <v-list class="p-0 m-0">
          <v-list-tile-avatar class="black py-4 flex flex-row justify-content-center">
            <img src="@/assets/img/parking-sign.svg">
          </v-list-tile-avatar>
          <v-list-tile class="" style="margin-top: +80% !important;">
            <router-link to="/todolist" ><small>todo-list</small></router-link>        
          </v-list-tile>
          <v-list-tile>
            <router-link to="/e-commerce"><small>E-commerce</small></router-link>
          </v-list-tile>
        </v-list>

        </v-navigation-drawer>
        
      </div>
      <div class="col-lg-11 col-xs-11">
        <main>
          <v-container fluid class="py-0">
            <v-fade-transition mode="out-in">
              <router-view></router-view>
            </v-fade-transition>
          </v-container>
        </main>
      </div>
    </div> -->
     
    <div class="wrapper" >
      <nav id="sidebar" >
        <button class="btn btn-default mr-0" v-on:click="closeSide" ><i class="icon ion-md-redo"></i></button>
        <div class="sidebar-header" >
          Project
        </div>
        <ul class="list-unstyled components" >
          <li class="">
            <router-link to="/todolist" >
              <i class="icon ion-md-list-box"></i> 
            </router-link>
          </li>
          <li class="">
            <router-link to="/e-commerce" >
              <i class="icon ion-md-appstore"></i> 
            </router-link>
          </li>
        </ul>
      </nav>
      <div id="content" class="" >
        <nav class="navbar navbar-expand-lg nann" >
          <button class="btn btn-menu" id="sidebarCollapse" v-on:click="openSide" >
            <i class="icon ion-md-menu"></i>        
          </button>

        </nav>
        
              <router-view></router-view>
      </div>
    </div>
  </div>
  
</div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    openSide(){
      document.getElementById('sidebar').style.width = '100px';
      document.getElementById('content').style.marginLeft = '100px';
    },
    closeSide(){
      document.getElementById('sidebar').style.width = '0';
      document.getElementById('content').style.marginLeft = '0';
    }
  }
}
</script>

<style>
.welcome{
  background: url('assets/img/22.jpg');
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  height: 100%;
}

</style>
