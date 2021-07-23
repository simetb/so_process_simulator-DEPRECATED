//STORE
import {store} from './store.js';



////////////////////////////////////////////////////////////////
const app = new Vue({

	el:'#app',
	store:store,
	methods:{
		//Botones
		...Vuex.mapMutations(['botonEncendido']),
		...Vuex.mapMutations(['botonPlay']),
		...Vuex.mapMutations(['mboton','aboton']),
		//Procesos
		...Vuex.mapMutations(['aggProceso']),
		//Modal
		...Vuex.mapMutations(['abreModal','cierraModal']),
		///////////////////////////////////////////////////////////////////////
		eliminarProceso(index){
			store.state.procesos.splice(index,1);
		}
	},
	computed:{
		...Vuex.mapState(['encendido']),
		//Recursos
		...Vuex.mapState(['cpu','tv','ram']),
		//Procesos
		...Vuex.mapState(['procesos','ejecucion','bloqueados','finalizados']),
		//Inicio del procesamiento
		...Vuex.mapState(['procesando']),
		//QUANTUM
		...Vuex.mapState(['quantum']),
		//Bateria
		...Vuex.mapState(['cbateria']),
		//Microfono
		...Vuex.mapState(['mencendido','aencendido'])

	}


});