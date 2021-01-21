<template>
   <div id="newArray">
      
   </div>
</template>
<script>

import arr from './App.vue'

export default {
   name: 'newArray',
   data(){
      return {
         arr: ''
      }
   },
   methods: {
      asd(){
         console.log(this.arr.data().arr)
      }
   },
   computed: {
      updateArray(){
         arr: arr.data().typeOfArray
      }
   }
}
</script>
<style lang="scss">

</style>