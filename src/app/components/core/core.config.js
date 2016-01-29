(function() {
	'use strict';

	angular
		.module('sas.core')
		.config(coreConfig);

	function coreConfig($routeProvider) {
		$routeProvider
			.otherwise({redirectTo: '/home'});

	}

})();