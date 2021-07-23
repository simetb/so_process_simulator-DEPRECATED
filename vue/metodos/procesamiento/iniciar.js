import {store} from './../../store.js';
////////////////////////////////////////////
function botonPlay(){
	if (store.state.encendido) {
		//Funcion a activar
		if (store.state.procesando) {
			store.state.procesando = false
			var modal = document.getElementById('mi-modal');
			var mp = document.getElementById('MetodoProcesamiento');
			modal.style.display = 'none';
			mp.style.display = 'block';
			store.state.procesos = [];
			store.state.ejecucion = [];
			store.state.bloqueados =[];
			store.state.finalizados = [];
			stote.state.ram = 0;
			store.state.tv = 0;
			store.state.cpu = 0;
			store.state.id = 0;
		}else{
			store.state.procesando = true
			var modal = document.getElementById('mi-modal');
			var procesamiento = document.getElementById('MetodoProcesamiento').value;
			var mp = document.getElementById('MetodoProcesamiento');
			modal.style.display = 'none';
			mp.style.display = 'none';

			//Convertimos el metodo de procesamiento a un numero
			procesamiento = parseInt(procesamiento)
			document.getElementById('senial').style = "color: #28B463;;"
			//Metodo round Robin
			if (procesamiento == 0) {
				roundRobin()
			}
			if (procesamiento == 1) {
				FCFS()
			}
		}
	}
}


////////////////////METODO ROUND ROBIN
function roundRobin(){
	var dimension = store.state.procesos.length;
	if (dimension != 0) {
		//Saber cuantos procesos estan listos
		var bloqueo = 0;
		//Dimensiones
		var listos = store.state.finalizados.length;
		//El quantum para este procesamiento va a ser MAX 10 MIN 1
		store.state.quantum = Math.floor(Math.random() * (2 + 1)) + 1;
		store.state.bateria = 100;
		let a = document.getElementById('bateria').style ="color: #28B463;" 
		var rb = function(){
			listos = store.state.finalizados.length;
			var hecho = true;
			//Recursos
			var cpu = Math.floor(Math.random() * (99 + 1)) + 1;
			var tv = Math.floor(Math.random() * (99 + 1)) + 1;
			var ram = Math.floor(Math.random() * (99 + 1)) + 1;
			store.state.cpu = cpu;
			store.state.tv = tv;
			store.state.ram = ram;
			store.state.bateria -=1;
			let b = document.getElementById('bateria');
			let wifi = document.getElementById('wifi');
			//////////////////////PROCESO

			//Bloqueos
			if ((store.state.ejecucion.length) && (hecho)) {
				bloqueo = Math.floor(Math.random() * (9 + 1)) + 1;
				hecho = false;
				if (bloqueo < 5) {
					store.state.ejecucion[0].estado = 2;
					store.state.bloqueados.push(store.state.ejecucion[0]);
					store.state.ejecucion.splice(0,1);
					wifi.style = "color:red;"
				}else{
					if (store.state.ejecucion[0].Tcpu > store.state.quantum) {
						store.state.ejecucion[0].Tcpu -= store.state.quantum;
						store.state.ejecucion[0].estado = 0;
						store.state.procesos.push(store.state.ejecucion[0]);
						store.state.ejecucion.splice(0,1);
						wifi.style = "color:#F1C40F;" 
					}else{
						store.state.ejecucion[0].estado = 3;
						store.state.finalizados.push(store.state.ejecucion[0]);
						store.state.ejecucion.splice(0,1);
					}
				}
			}

			//Retorno a listo
			if ((store.state.bloqueados.length) && (hecho)) {
				store.state.bloqueados[0].estado = 0;
				store.state.procesos.push(store.state.bloqueados[0]);
				store.state.bloqueados.splice(0,1);
				hecho = false;
			}

			//Ejecucion
			if ((store.state.procesos.length) && (hecho)) {
				store.state.procesos[0].estado = 1;
				store.state.ejecucion.push(store.state.procesos[0]);
				store.state.procesos.splice(0,1);
				hecho = false;
				wifi.style = "color:#28B463;"
			}

			//Finalizado
			if (listos == dimension) {
				store.state.quantum = 0;
				clearInterval(intervalo)
			}

			//Finalizado por no tener bateria
			if(store.state.bateria == -1){
				store.state.cbateria = "fas fa-battery-empty"
				alert("No batery...")
				clearInterval(intervalo)
			}else if(store.state.bateria == 25){
				store.state.cbateria = "fas fa-battery-quarter"
				b.style = "color:red;"
			}else if(store.state.bateria == 50){
				b.style = "color:#F1C40F;"
				store.state.cbateria = "fas fa-battery-half"
			}else if(store.state.bateria == 75){
				store.state.cbateria = "fas fa-battery-three-quarters"
			}
			
			//Finalizado forzoso
			if (!store.state.encendido) {
				clearInterval(intervalo)
			}
		

		}
		console.log("valor del quantum: ", store.state.quantum)
		var intervalo = setInterval(rb,store.state.quantum * 1000);
		
	}
}

//FIRST COME FIRST GET SERVED
function FCFS(){
	var dimension = store.state.procesos.length;
	if (dimension != 0) {
		//Saber cuantos procesos estan listos
		var bloqueo = 0;
		//Dimensiones
		var listos = store.state.finalizados.length;
		//El quantum para este procesamiento va a ser MAX 10 MIN 1
		store.state.quantum = Math.floor(Math.random() * (2 + 1)) + 1;
		store.state.bateria = 100;
		let a = document.getElementById('bateria').style ="color: #28B463;"
		var fcfs = function(){
			listos = store.state.finalizados.length;
			var hecho = true;
			//Recursos
			var cpu = Math.floor(Math.random() * (99 + 1)) + 1;
			var tv = Math.floor(Math.random() * (99 + 1)) + 1;
			var ram = Math.floor(Math.random() * (99 + 1)) + 1;
			store.state.cpu = cpu;
			store.state.tv = tv;
			store.state.ram = ram;
			store.state.bateria -=1;
			let b = document.getElementById('bateria');
			let wifi = document.getElementById('wifi');
			//////////////////////PROCESO

			//Bloqueos
			if ((store.state.ejecucion.length) && (hecho)) {
				bloqueo = Math.floor(Math.random() * (9 + 1)) + 1;
				hecho = false;
				if (bloqueo < 5) {
					store.state.ejecucion[0].estado = 2;
					store.state.bloqueados.unshift(store.state.ejecucion[0]);
					store.state.ejecucion.splice(0,1);
					wifi.style = "color:red;"
				}else{
					if (store.state.ejecucion[0].Tcpu > store.state.quantum) {
						store.state.ejecucion[0].Tcpu -= store.state.quantum;
						store.state.ejecucion[0].estado = 0;
						store.state.procesos.unshift(store.state.ejecucion[0]);
						store.state.ejecucion.splice(0,1); 
						wifi.style = "color:#F1C40F;" 
					}else{
						store.state.ejecucion[0].estado = 3;
						store.state.finalizados.unshift(store.state.ejecucion[0]);
						store.state.ejecucion.splice(0,1);
					}
				}
			}

			//Retorno a listo
			if ((store.state.bloqueados.length) && (hecho)) {
				store.state.bloqueados[0].estado = 0;
				store.state.procesos.unshift(store.state.bloqueados[0]);
				store.state.bloqueados.splice(0,1);
				hecho = false;
			}

			//Ejecucion
			if ((store.state.procesos.length) && (hecho)) {
				store.state.procesos[0].estado = 1;
				store.state.ejecucion.unshift(store.state.procesos[0]);
				store.state.procesos.splice(0,1);
				hecho = false;
				wifi.style = "color:#28B463;"
			}
			//Finalizado por no tener bateria
			if(store.state.bateria == -1){
				store.state.cbateria = "fas fa-battery-empty"
				alert("No batery...")
				clearInterval(intervalo)
			}else if(store.state.bateria == 25){
				store.state.cbateria = "fas fa-battery-quarter"
				b.style = "color:red;"
			}else if(store.state.bateria == 50){
				b.style = "color:#F1C40F;"
				store.state.cbateria = "fas fa-battery-half"
			}else if(store.state.bateria == 75){
				store.state.cbateria = "fas fa-battery-three-quarters"
			}

			//Finalizado
			if (listos == dimension) {
				store.state.quantum = 0;
				clearInterval(intervalo)
			}

			//Finalizado forzoso
			if (!store.state.encendido) {
				clearInterval(intervalo)
			}
		

		}
		console.log("valor del quantum: ", store.state.quantum)
		var intervalo = setInterval(fcfs,store.state.quantum * 1000);
		
	}

}

/*
var aumento = function(){
				console.log(state.prueba);
				state.prueba++;
			}
				setInterval(aumento,5000);

				estado: 0,
				Tcpu: tiempo,
				proceso:proceso,
				id: store.state.id

				store.state.procesos.push(informacion);
				store.state.procesos.splice(index,1);
*/


export{botonPlay}