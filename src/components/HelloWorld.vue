<template>
<div class=" " >
  <div class="welcome" >
    <v-navigation-drawer
    permanent fixed width="70px"
    class="navdraw"
    >
    
    <v-list class="pt-0 ">
      <v-list-tile-avatar class="black py-3 px-3">
        <img src="@/assets/img/parking-sign.svg">
      </v-list-tile-avatar>
      <!-- <v-divider></v-divider> -->
      <v-list-tile class="px-1" style="margin-top: +80% !important;">
        <router-link to="/todolist" ><img src="@/assets/img/loupe.png" ></router-link>        
      </v-list-tile>
      <v-list-tile>
        <img src="@/assets/img/list.png" >
      </v-list-tile>
    </v-list>

    </v-navigation-drawer>
    <main>
      <v-container fluid>
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      </v-container>
    </main>
  </div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      pageO: true,
      pageT: false,
    }
  },
  methods: {
    openPage(){
      this.pageO = false,
      this.pageT = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.welcome {
  height: 100vh !important;
  width: 100%;
  background: url('../assets/img/2.jpg');
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
.welc{
  position: fixed;
  right: 0; 
  min-width: 100%; 
  min-height: 100%;
}
.navdraw{
background: #556B2F !important;
}
.black{
  background: #6B8E23 !important;
}

</style>
