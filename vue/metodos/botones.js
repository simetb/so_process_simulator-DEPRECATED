import {store} from './../store.js';
///////////////////////////////////////////////////////////////////
function botonEncendido(){
	if(store.state.encendido){
		store.state.encendido = false
		store.state.procesando = false
		store.state.procesos = []
		store.state.id = 0
		store.state.cpu = 0
		store.state.tv = 0
		store.state.ram = 0
		var modal = document.getElementById('mi-modal');
		modal.style.display = 'none';
		var mp = document.getElementById('MetodoProcesamiento');
		mp.style.display = 'block';
		store.state.quantum = 0;
		store.state.ejecucion = [];
		store.state.bloqueados =[];
		store.state.finalizados = [];
		store.state.bateria = 0
		store.state.cbateria = "fas fa-battery-full"
		document.getElementById('bateria').style = "color: #1687a7;"
		document.getElementById('senial').style = "color: #1687a7;"
		document.getElementById('wifi').style = "color: #1687a7;"
		store.state.mencendido = false
		store.state.aencendido = false

	}else{
		store.state.encendido = true				
	}	
}

export{
	botonEncendido,
}