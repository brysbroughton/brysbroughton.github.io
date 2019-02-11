(function () {
	(document.addEventListener || document.attachEvent)
	.call(document, 'DOMContentLoaded', function () {
		Array.prototype.forEach
		.call(document.getElementsByClassName('sidenav'), function (e) {
			M.Sidenav.init(e);
		});
	});
})()
