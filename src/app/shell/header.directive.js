(function() {
	'use strict';

	angular
		.module('sas')
		.directive('sasHeader', sasHeader);

	function sasHeader() {

		var directive = {
			restrict: 'EA',
			templateUrl: './shell/header.directive.html',
			scope: {

			},
			link: link,
			controller: SasHeaderController,
			controllerAs: 'vm',
			bindToController: true // because the scope is isolated
		};

		return directive;

		////////////

		function link(scope, element, attrs) {

		}

		function SasHeaderController() {
			var vm = this;

		}

	}

})();
