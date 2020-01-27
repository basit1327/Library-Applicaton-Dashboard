function getDateForRangePicker(previousDay){
	previousDay = previousDay || 0;
	let dt = new Date();
	dt.setDate(dt.getDate()-previousDay);
	return ((dt.getMonth() + 1)>9?(dt.getMonth() + 1):'0'+(dt.getMonth() + 1)) + '/' +
		dt.getDate() + '/' +
		dt.getFullYear();
}

function incrementDate(date,numberOfDays){
	numberOfDays = numberOfDays || 0;
	let dt = new Date(date);
	dt.setDate(dt.getDate()+numberOfDays);
	return ((dt.getMonth() + 1)>9?(dt.getMonth() + 1):'0'+(dt.getMonth() + 1)) + '/' +
		dt.getDate() + '/' +
		dt.getFullYear();
}

function formatDateForRequest(date){
	let dt = new Date(date);
	return dt.getFullYear() + '-' + (dt.getMonth() + 1) + '-' + dt.getDate();
}
