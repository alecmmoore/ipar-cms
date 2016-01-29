(function() {
	'use strict';

	angular
		.module('sas.portfolio')
		.config(PortfolioConfig);

	function PortfolioConfig($routeProvider) {
		$routeProvider
			.when('/portfolio', {
				templateUrl: './components/portfolio/portfolio.template.html',
				controller: 'portfolioController'
			});
	}
	
})();
