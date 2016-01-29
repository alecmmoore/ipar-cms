(function() {

	'use strict';

	angular
		.module('sas.home')
		.controller('homeController', homeController);

	function homeController() {
		var vm = this;
		vm.username = 'Sixth Ave Studios';

	}

})();