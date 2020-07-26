<template>
  <div>
    Filter Todos:
    <select @change="filtertodo($event)" v-model="key">
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="20">20</option>
      <option value="10">10</option>
      <option value="5">5</option>
    </select>
  </div>
</template>

<script>
import {mapGetters,mapActions} from "vuex"
export default {
  name: "filtertodos",
  data(){
      return{
        key:""
      }
  },
  methods: {
    ...mapActions(['filtertodos']),
    filtertodo(event){
      console.log(event.target.value)
     this.filtertodos(event)
      
    }
  },
  computed:mapGetters['filtertodos']
};
</script>

<style scoped>
select {
  margin-top: 20px;
  padding: 6px;
  border: #41b883 1px solid;
}
</style>