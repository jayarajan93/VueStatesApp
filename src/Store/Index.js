import Vuex from 'vuex'
import Vue from 'vue'
import todos from './Modules/todos'


//Load Vuex
Vue.use(Vuex)

//Create store
export default new Vuex.Store({
    modules:{
        todos
    }
});
