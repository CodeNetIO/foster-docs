interface Date {
    toShortDate () : string;
}
(function() {
	Date.prototype.toShortDate = function () {
		var date = new Date(this.valueOf());
		var day = date.getDate();
		var monthIndex = date.getMonth();
		var year = date.getFullYear();
		return monthIndex + '/' + day + '/' + year;
	};
})();