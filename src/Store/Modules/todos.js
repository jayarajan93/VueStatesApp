import axios from 'axios'
const state = {
    todos: []
};

const getters={
    allTodos: state => state.todos
};

const actions={
    async fetchtodos( {commit} ){
        const response= await axios.get("https://jsonplaceholder.typicode.com/todos");
        commit('settodos', response.data)
    },
    async addtodo({commit},title){
        const response=await axios.post("https://jsonplaceholder.typicode.com/todos",{title,completed:false})
        commit('addtodo',response.data)
    },
    async deletetodo({commit},id){
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        commit('deletetodo',id)
    },
    async filtertodos({commit},e){
        const limit=parseInt(e.target.options[e.target.options.selectedIndex].innerText)
        console.log(limit)
        const response=await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
        console.log(response.data)
        commit('settodos',response.data)
    },
    async updatetodos({commit},UpdTodo){
        const response = await axios.put(
            `https://jsonplaceholder.typicode.com/todos/${UpdTodo.id}`,
            UpdTodo
          );
          console.log(response.data)
          commit ('updatetodos',response.data)
    }
};

const mutations={
    settodos:(state, todos)=>( state.todos=todos),
    addtodo:(state,todo)=>state.todos.unshift(todo),
    deletetodo:(state,id)=>state.todos= state.todos.filter(todo=> todo.id!==id),
    updatetodos:(state,UpdTodo)=>{
        const index = state.todos.findIndex(todo=>todo.id==UpdTodo.id)
        if(index!==-1){
            state.todos.splice(index,1,UpdTodo)
        }
    }
};

export default{
    state,
    getters, 
    actions,
    mutations
}