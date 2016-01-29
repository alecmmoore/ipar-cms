(function() {
	'use strict';

	angular
		.module('sas.portfolio')
		.config(portfolioConfig);

	function portfolioConfig($routeProvider) {
		$routeProvider
			.when('/portfolio', {
				templateUrl: './components/portfolio/portfolio.template.html',
				controller: 'portfolioController'
			});
	}
	
})();