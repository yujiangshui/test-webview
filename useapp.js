window.useapp = {
	ua: '',
	lowUA: function() {
		return this.ua.toLowerCase();
	},
	isOrigin: function() {
		// return ( this.ua.indexOf('MicroMessenger') > 0 );
	},
	isSafari: function() {
		return ( this.lowUA().indexOf('safari') > 0 );
	},
	isWechat: function() {
		return ( this.lowUA().indexOf('micromessenger') > 0 );
	},
	isQQ: function() {
		return ( this.lowUA().indexOf('qq') > 0 );
	},
	isQQbrowser: function() {
		return ( this.lowUA().indexOf('mqqbrowser') > 0 );
	},
	isUC: function() {
		return ( this.lowUA().indexOf('ucbrowser') > 0 );
	},
	isBaidu: function() {
		// return ( this.lowUA().indexOf('MicroMessenger') > 0 );
	},
	isChrome: function() {
		// return ( this.lowUA().indexOf('MicroMessenger') > 0 );
	}
};