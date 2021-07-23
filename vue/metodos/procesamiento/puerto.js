import { store } from "./../../store.js";
/////////////////////////////////////////////
function mboton(){
    if(store.state.mencendido){
        store.state.mencendido = false
    }else{
        store.state.mencendido = true
    }
}

function aboton(){
    if(store.state.aencendido){
        store.state.aencendido = false
    }else{
        store.state.aencendido = true
    }
}


export{mboton,aboton}