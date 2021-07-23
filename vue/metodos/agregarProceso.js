import {store} from './../store.js'
//////////////////////////////////////////////////////////
function aggProceso(){
	if (store.state.encendido) {
		//cajas
		var cproceso = document.getElementById('TipoProceso');
		var ctiempo = document.getElementById('TiempoEjecucion');
		//valores
		var proceso = document.getElementById('TipoProceso').value;
		var tiempo = document.getElementById('TiempoEjecucion').value;
		//Verificamos si es un numero
		tiempo = parseInt(tiempo)
		if (proceso && tiempo) {
			if (Number.isInteger(tiempo)) {
				var informacion = {
				estado: 0,
				Tcpu: tiempo,
				proceso:proceso,
				id: store.state.id
				}
				store.state.id++;
				store.state.procesos.push(informacion);
				//Reiniciamos los formularios
				cproceso.value = ""
				ctiempo.value = ""
				cproceso.style = 'border: 2px solid transparent';
				ctiempo.style = 'border: 2px solid transparent';
			}else{
				ctiempo.style = 'border: 2px solid #CD6155';
			}
		}else{
			if (!proceso) {
				cproceso.style = 'border: 2px solid #CD6155';
			}
			if (!tiempo) {
				ctiempo.style = 'border: 2px solid #CD6155';
			}
		}

	
	}
}




export{
	aggProceso
}