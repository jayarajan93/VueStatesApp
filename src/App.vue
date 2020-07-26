<template>
  <div id="app">
    <Addtodo/>
    <Filtertodos/>
    <Todos/>
  </div>
</template>

<script>

import Todos from "./components/Todos"
import Addtodo from "./components/Addtodo"
import Filtertodos from "./components/Filtertodos"

export default {
  name: 'app',
  components: {
    Todos,
    Addtodo,
    Filtertodos
  }
};
</script>

<style>

</style>
