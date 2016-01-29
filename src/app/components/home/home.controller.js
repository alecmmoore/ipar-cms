(function() {
	'use strict';

	angular
		.module('sas.home')
		.controller('homeController', HomeController);

	function HomeController() {
		var vm = this;
		vm.username = 'Sixth Ave Studios';
	}

})();
