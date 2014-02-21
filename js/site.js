// JavaScript Document
$(document).ready(function(){
	drawCategoryOverview(DATA.tree);
	for (categoryId in DATA.tree.category) {
		drawProducts(getProducts(categoryId));	
	}
});

function drawCategoryOverview(data){
	
}

function drawProducts(products){
	
}