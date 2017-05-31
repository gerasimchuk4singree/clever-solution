jQuery(document).ready(function($){

	$(".js-blog-packery").infiniteLoad({
			'navSelector':"nav.navigation",
			'contentSelector':".js-blog-packery",
			'nextSelector':"nav.navigation .nav-previous a",
			'itemSelector':"a.item",
			'paginationType':"infinite",
			'loadingImage':"/wp-content/themes/cleversolution/images/loader.gif",
			'loadingButtonLabel':"Load More",
			'loadingButtonClass':"",
			'loadingFinishedText':""
		}								  
	);
								
});