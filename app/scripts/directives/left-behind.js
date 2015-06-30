'use strict';
/**
 * @ngdoc function
 * @name blogApp.controller:TypectrlCtrl
 * @description
 * # TypectrlCtrl
 * Controller of the blogApp
 */
angular.module('leftBehind')
  .directive('leftBehind', function () {
    return {
    	restrict: 'AC',
    	scope: false,
    	link: function (scope, element, attrs){

    		var leaveBefore, 
    			leaveAfter, 
    			leftBehindClass, 
    			leftBehindBodyClass, 
    			$window,
    			body, 
    			rect,
    			isSticky,
    			isDefinedLeaveAfter = false;

    		$window  = angular.element(window);
    		body = angular.element(document.body);
    		isSticky = angular.isDefined(attrs.lbSticky) || false;


    		/**
    		 * Just sets rect values when the document has fully loaded
    		 * @return {void}
    		 */
    		scope.$watch(function (){
    			updateRect();
    			hasBeenLeft();
    		});


    		/**
    		 * Calculates the leaving point as before or after
    		 * and sets isDefinedLeaveAfter variable
    		 * @param  {string} pointName Contains the leaving point name
    		 * @return {integer}          Returns the pixels the leaving point contains
    		 */
    		var calculateLeavingPoint = function (pointName){
    			var value = 0;
    			
    			if(angular.isDefined(attrs[pointName])) {
    				
    				var setPoint = function (pointName){
    					return typeof attrs[pointName] === 'string' ? parseInt(attrs[pointName].replace(/px;?/, '')) || 0 : 0;
    				};

    				switch (pointName){
    					case 'lbLeaveAfter':
    						isDefinedLeaveAfter = true;
    						value = setPoint(pointName);
    						break;
    					default: 
    						value = setPoint(pointName);
    				}

    			}

    			return value;
    		};

    		leaveAfter = calculateLeavingPoint('lbLeaveAfter');
			leaveBefore = calculateLeavingPoint('lbLeaveBefore');

			leftBehindClass = attrs.leftBehind || '';
			leftBehindBodyClass = attrs.lbBodyClass || '';

			/**
			 * [calculatePoint description]
			 * @return {[type]} [description]
			 */
    		var calculatePoint = function (){
    			var t;
    			t = $window[0].scrollY;

    			t += isDefinedLeaveAfter ? rect.bottom + leaveAfter : rect.top - leaveBefore;

    			if(isSticky) 
    			{
					t = isDefinedLeaveAfter ? rect.lastBottom + leaveAfter : rect.lastTop - leaveBefore;
    			}
    				

    			return t;
    		};

    		/**
    		 * Checks whether the leaving point has been overpassed
    		 * @return {boolean}
    		 */
			var checkIfHasBeenLeft = function (){
				return $window[0].scrollY >= calculatePoint();
			};

			/**
			 * Updates the rect object
			 * @return {void}
			 */
			var updateRect = function (){
				rect = element[0].getBoundingClientRect();
				rect.lastTop = $window[0].scrollY + rect.top;
				rect.lastBottom = $window[0].scrollY + rect.bottom;
			};

			/**
			 * Adds classes accordingly
			 * @return {void}
			 */
			var addClasses = function (){
				body.addClass(leftBehindBodyClass);
				element.addClass(leftBehindClass);
			};

			/**
			 * Removes classes accordingly
			 * @return {void}
			 */
			var removeClasses = function (){
				body.removeClass(leftBehindBodyClass);
				element.removeClass(leftBehindClass);
				console.log('removing');
			};

			/**
			 * Uses checkIfHasBeenLeft to manage classes
			 * with respective functions
			 * @return {void}
			 */
			var hasBeenLeft = function (){
				console.log('has been left is', checkIfHasBeenLeft());
				if(checkIfHasBeenLeft())
				{
					addClasses();
					console.log('_add');
				} 
				else
				{
					removeClasses();
					console.log('_rem');
				}


					
				// outputData();
			};

			/**
			 * Everything that will happen when the user
			 * scrolls down the page
			 * @return {void}
			 */
			var onWindowScrollDo = function (){
				if(!isSticky) 
				{
					updateRect();
				}
					
				hasBeenLeft();
				// outputData();
				console.log('scroll');
			};

			/**
			 * Everything that will happen when the user
			 * resizes the window
			 * @return {void}
			 */
			var onWindowResizeDo = function (){
				removeClasses();
				updateRect();
				hasBeenLeft();
				console.log('resize');
				// outputData();
			};

			/**
			 * Everything that will happen the scope is destroyed
			 * @return {void}
			 */
			var onDestroyDo = function (){
				removeClasses();
				$window.off('scroll', onWindowScrollDo);
				$window.off('resize', onWindowResizeDo);
			};

			/**
			 * This just outputs data to ease development process
			 * @return {void}
			 */
			/*var outputData = function (){
				console.log(
					$window[0].scrollY, 
					rect.top,
					calculatePoint(),
					rect.lastTop,
					rect.lastBottom);
			};*/

			/**
			 * Unbinding events
			 */
    		$window.bind('scroll', onWindowScrollDo);
    		$window.bind('resize', onWindowResizeDo);
    		scope.$on('$destroy', onDestroyDo);

    	}
    };
  });






