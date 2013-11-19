$( document ).ready(function() {
	var content  = $("#content");

	$("a.navlink").on("click", function(e){
		e.preventDefault();
		var linkurl     = $(this).attr("href");
		var linkhtmlurl = linkurl.substring(1, linkurl.length);
		
		content.load(linkhtmlurl);

		//setTimeout(function() { content.load(linkhtmlurl, function() { /* no callback */ }) }, 500);
	});
});