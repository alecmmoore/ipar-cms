(function() {
	'use strict';

	angular
		.module('sas.home')
		.config(homeConfig);

	function homeConfig($routeProvider) {
		$routeProvider
			.when('/home', {
				templateUrl: './components/home/home.template.html',
				controller: 'homeController'
			});
	}
	
})();