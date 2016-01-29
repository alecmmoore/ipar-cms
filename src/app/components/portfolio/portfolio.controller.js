(function() {
	'use strict';

	angular
		.module('sas.portfolio')
		.controller('portfolioController', portfolioController);

	function portfolioController() {
		var vm = this;
		vm.portfolioItem = { managerAllocations: [] };
		vm.managerAllItem = {};
		vm.portfolioItems = [];
		vm.addPortfolioItem = addPortfolioItem;
		vm.removePortfolioItem = removePortfolioItem;
		vm.editPortfolioItem = editPortfolioItem;
		vm.addManagerItem = addManagerItem;
		vm.removeManagerItem = removeManagerItem;
		vm.editManagerItem = editManagerItem;
		vm.clearManagerItem = clearManagerItem;
		vm.clearAll = clearAll;

		function addPortfolioItem(item) {
			vm.portfolioItems.push(item);
			vm.clearAll();
		}

		function removePortfolioItem(item) {
			var index = vm.portfolioItems.indexOf(item);
			if (index > -1) {
				vm.portfolioItems.splice(index, 1);
			}
		}

		function editPortfolioItem(item) {
			vm.portfolioItem = item;
		}

		function addManagerItem(item) {
			vm.portfolioItem.managerAllocations.push(item);
			vm.clearManagerItem();
		}

		function removeManagerItem(item) {
			var index = vm.portfolioItem.managerAllocations.indexOf(item);
			if (index > -1) {
				vm.portfolioItem.managerAllocations.splice(index, 1);
			}
		}

		function editManagerItem(item) {
			vm.managerAllItem = item;
		}

		function clearManagerItem() {
			vm.managerAllItem = {};
		}

		function clearAll() {
			vm.portfolioItem = { managerAllocations: [] };
			vm.managerAllItem = {};
		}
	}

})();