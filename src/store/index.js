import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        car:[]
    },
    mutations:{
        addcar(state,payload){
            let oldgoods = null;
            for(let item of state.car){
                if(item.id == payload.id){
                    oldgoods = item
                }
            }
            if(oldgoods){
                oldgoods.count +=1
            }else{
                payload.count=1;
                state.car.push(payload)
            }
            
        },
    },
    getters:{
        
        carlist(state){
            return state.car
        }
    }

})
export default store