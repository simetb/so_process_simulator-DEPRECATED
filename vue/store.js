import {botonEncendido} from "./metodos/botones.js";
import {aggProceso} from './metodos/agregarProceso.js';
import {botonPlay} from './metodos/procesamiento/iniciar.js';
import {abreModal,cierraModal} from './metodos/modal.js';
import { mboton,aboton } from "./metodos/procesamiento/puerto.js";
/////////////////////////////////////////////////////////
const store = new Vuex.Store({
	state:{
		//Encendido del sistema
		encendido:false,
		//Inicio del procesamiento
		procesando:false,
		//Recursos utilizados en cada proceso
		cpu: 0,
		tv: 0,//TARJETA DE VIDEO
		ram: 0,
		//Procesos 
		//Procesos Listos
		procesos:[],
		//Procesos en ejecucion
		ejecucion:[],
		//Procesos Bloqueados
		bloqueados:[],
		//Procesos Finalizados
		finalizados:[],
		//////////////////////
		id: 0,
		quantum: 0,
		//////////////////////
		bateria:0,
		cbateria:"fas fa-battery-full",
		/////////////////////
		mencendido:false,
		aencendido:false

	},
	mutations:{
		//METODO PARA ENCENDER EL BOTON//
		botonEncendido,
		botonPlay,
		//Procesos
		aggProceso,
		//Modal
		abreModal,
		cierraModal,
		//Puerto
		mboton,
		aboton
	},

	actions:{
	}

});


export{store}




