<template>
<div id="app">
  <div class="welcome" >
    <div class="row" >
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
    </div>
     
    <!-- <div class="wrapper" >
      <nav id="sidebar" >
        <div class="sidebar-header" >
          Project
        </div>
        <ul class="list-unstyled components" >
          <li>
            <router-link to="/todolist" >
              todo
            </router-link>
          </li>
          <li>
            <router-link to="/todolist" >
              todo
            </router-link>
          </li>
        </ul>
      </nav>
      <div id="content" style="margin-left: +100px;" >
        <button class="btn btn-default" id="sidebarCollapse" >
                <span></span>
                <span></span>
                <span></span>
              </button>
              <router-view></router-view>
      </div>
    </div> -->
  </div>
  
</div>
</template>

<script>
export default {
  name: 'App',
  mounted: {
   function () {
     $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
   }
  }
}
</script>

<style>
.welcome {
  height: 100vh !important;
  width: 100%;
  /* background: url('assets/img/2.jpg');
  background-attachment: fixed !important;
  background-position: center;
  background-size: cover; */
}
.welc{
  position: fixed;
  right: 0; 
  min-width: 100%; 
  min-height: 100%;
}
.navdraw{
background: #000 !important;
}
.black{
  background: #272727 !important;
}
</style>
