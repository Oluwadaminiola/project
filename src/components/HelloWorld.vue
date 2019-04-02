<template>
<div class=" " >
 
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


</style>
