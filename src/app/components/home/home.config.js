(function() {
	'use strict';

	angular
		.module('sas.home')
		.config(HomeConfig);

	function HomeConfig($routeProvider) {
		$routeProvider
			.when('/home', {
				templateUrl: './components/home/home.template.html',
				controller: 'homeController'
			});
	}
	
})();
