import Component from '@ember/component';

export default Component.extend({

	numStocks: 0,

	actions: {
		buyStock() {

			if( this.get('availableMoney') >= this.get('stockPrice') ){
				let newMoney = this.get('availableMoney') - this.get('stockPrice');
				this.set('availableMoney', newMoney);

				this.set('numStocks', this.get('numStocks')+1);
			}
			else{
				this.get('errCase')();
			}
		}
	}
});
