(function() {
	'use strict';

	angular
		.module('sas.core')
		.factory('dataService', dataService);

	function dataService() {

		var dataService = {
			sampleFunction: sampleFunction
		};

		return dataService;

		////////////

		function sampleFunction() {
			return 'sample';
		}

	}

})();