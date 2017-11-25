import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({

	myMoney: 0,

	isNoMoney: computed('myMoney', function(){

		if (this.get('myMoney') <= 0){
			return true;
		}

		return false;
	}),

	actions: {
		addMoreMoney(){ 

			let currMoney = this.get('myMoney');
			let newMoney = currMoney + 1000; 
			
			this.set('myMoney', newMoney);

		},

		handleInErr() {

			alert("Embarassment failure! No Money! oops!");

		}
	}
});
