function Counter() {
	return {
		template: [
			'<div>',
				'<h3>Counter</h3>',
				'<div>Click anywhere to increment the counter!</div>',
				'<div>Current count: {{ cntr.count }}</div>',
			'</div>'
		].join(''),
		controller: function ($scope) {
			this.count = 0;
		},
		controllerAs: 'cntr',
		link: function(scope, element, attr, cntr) {
			element.on('click', function() {
				cntr.count++;
				scope.$apply();
			});
			scope.$on('$destroy', function() {
				element.off();
			});
		}
	}
}

angular
	.module('app')
	.directive('counter', Counter);