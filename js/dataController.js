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
}

function drawCategoryOverview(data){
	var li = "";
	$.each(data, function(i, c) {
		$.each(c, function(j, category){
			li += "<li><a href='#category" + category["@attributes"].id + "'>" + category.name + "</a></li>";
			drawProducts(category["@attributes"].id, category.products);
		});
	});
	var htmlString = 
		"<ul data-role='listview' data-inset='true'>" + li + "</ul>";
		$('#categories > div[data-role="content"]').html(htmlString);
		$('#categories > div[data-role="content"] > ul').listview();
}

function drawProducts(cId, products){
	var htmlString = "<div data-role='page' id='category" + cId + "'><div data-role='content'></div><div data-role='footer'><h4>Fußzeile</h4></div></div>";
	$('body').html($('body').html() + htmlString);
	var productHtml = "";
	$.each(products, function(i, p){
		$.each(p, function(j, product){
			productHtml += "<div data-role='collapsible' data-inset='false'><h4> " + product.name + "</h4><p> " + product.shortDesc + " </p></div>"
		})
	});
	
	$('#category' + cId + ' > div[data-role="content"]').html(productHtml);	
}

