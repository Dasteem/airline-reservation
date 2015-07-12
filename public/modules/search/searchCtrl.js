/**
*	Controller for search module
*
*	@author Lakha Singh
*/
define([
	'./module',
	'services'
], function( module ){
	module.controller('search.searchCtrl', [
		'$scope',
		'core.Airports', 
		'core.Utils',
		'core.Interface',
		function ( $scope, Airports, Utils, Interface ){
			Utils.log( "search.searchCtrl");
			
			// Template for this controller
			$scope.view = 'modules/search/search.html';

			// Airport data
			$scope.airports = Airports.query();

			// Toggle suggestion list
			$scope.show = {
				origin: true,
				destination: true
			};

			// Sets serach-query through interface
			$scope.search = Interface.search = Interface.search || {};

			// Updates input box with selected value from popup
			$scope.selectPlace = function( field, airportCode ){
				$scope.search[ field ] = airportCode;

				// Hide the suggestion List
				$scope.show[ field ] = false;
			};
		}
	]);
});