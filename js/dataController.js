// JavaScript Document
$(document).ready(function(){
	getData();
});
function getData(){
	$.ajax({
		url : "http://schill-websolution.de/services/orderapp/data.php",
		jsonp:"callback",
		dataType: "jsonp",
		data: "",
		success: function( DATA ) {
			drawPages(DATA)	;
		},
		jsonpCallback: "callback"
	});	
}

function drawPages(DATA){
	drawCategoryOverview(DATA);
	/*for (categoryId in DATA) {
		drawProducts(getProducts(categoryId));	
	}*/
}

function drawCategoryOverview(data){
	var li = "";
	jQuery.each(data, function(i, c) {
		li += "<li><a href='#category" + c.name + "'>" + c.name + "</a></li>";
	});
	var htmlString = 
		"<ul data-role='listview' data-inset='true'>" + li + "</ul>";
		$('#catArea').html(htmlString);
}

function getProducts(category){
	return Array();	
}



function drawProducts(products){
	
}

