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
		},

		sellStock() {
			if(this.get('numStocks') > 0) {
				this.set('numStocks', this.get('numStocks') - 1);
				this.set('availableMoney', this.get('availableMoney') + this.get('stockPrice'));
			} else {
				this.get('errCase')();
			}
		}
	}
});
