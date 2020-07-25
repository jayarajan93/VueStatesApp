<template>
  <div id="app">
      <h1>Todos</h1>
      <div class="Todos">
          <div v-for="todo in alltodos" :key="todo.id" class="Todo">{{todo.title}}
              
          </div>
      </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name:"Todos",
    computed: mapGetters(['alltodos'])
  
};
</script>

<style>

</style>