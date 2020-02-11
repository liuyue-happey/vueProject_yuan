
import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        username: '',
        admin_token:'',
    },
    mutations: {  
        setName(state,data){
            state.username = data;
        },
        setToken(state,data){
            state.admin_token = data
        }
    },
    actions: {
        setName(context,data){
            context.commit('setName',data)
        },
        setToken(context,data){
            context.commit('setToken',data)
        }
    }
})


export { store }
