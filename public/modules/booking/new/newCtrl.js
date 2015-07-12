/**
*	Controller for booking.cancel module
*
*	@author Lakha Singh
*/
define([
	'./module',
	'booking.bookings',
	'booking.flights',
	'services'
], function( module ){
	module.controller('new.newCtrl', [
		'$scope',
		'$routeParams',
		'booking.Bookings',
		'booking.Flights',
		'core.Interface',
		'core.Common',
		'core.Utils',
		function( $scope, $routeParams, Bookings, Flights, Interface, Common, Utils ){
			Utils.log( "booking.new.newCtrl" );

			// Template for this controller
			//$scope.view = 'modules/booking/new/new.html';

			// Common methods
			$scope.common = Common;

			// for comm b/w book.new and book.cancel module
			$scope.bookings = Interface.bookings = Interface.bookings || Bookings.query();

			// populate with flights data
			$scope.flights = Flights.query({
				origin: $routeParams.origin,
				destination: $routeParams.destination
			});

			// Books new Flight
			$scope.reserveFlight = function( flight ){
				Bookings.save( flight, function(){
					Interface.bookings.push( flight );
				});
			};
		}
	]);
});