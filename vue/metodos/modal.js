import {store} from './../store.js';
///////////////////////////////////////////////////////////////////////////////
function abreModal(){
	var modal = document.getElementById('mi-modal');
	if (store.state.encendido && !store.state.procesando) {
		modal.style.display = 'block';
	}
}


function cierraModal(){
	var modal = document.getElementById('mi-modal');
	modal.style.display = 'none';
}



export{abreModal,cierraModal}
