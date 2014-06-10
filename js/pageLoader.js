$(function ($) {
	// Load dialog on page load
	//$('#basic-modal-content').modal();
	

		   
	    var hash = window.location.hash.substr(1);	
		var href = $('.clickme').each(function(){
		var href = $(this).attr('href');
		var toLoad;
		
		
			if(hash == "one"){
				toLoad = hash+'.php #loadContentWrapper'			
	      	}
			if(hash == "two"  ){
				toLoad = hash+'.php #loadContentWrapper'				
	      	}
			if(hash == "explore" || hash == "index"){
				toLoad = hash+'.php #loadContentWrapper'			
	      	}
			
			$('#loadContentWrapper').load(toLoad)
				
										
	});
      
								  
	$("#one").click(function(){

	    //if statement check which link is currently active and locate the corresponding page 
		// if a page is found it is returned via load, a jquery ajax function and displayed 
		//harsh tag is attached to a url returned from the server to allow bookmarking 
		 var toLoad = "";
		 if($(this).attr("href") == "#one"){
			
				  toLoad = $(this).attr('href')+'#loadContentWrapper';	
						
	   	}
		 if($(this).attr("href") == "featured.php" || $(this).attr("href") == "trending.php"
		 || $(this).attr("href") == "newtracks.php" || $(this).attr("href") == "charts.php" ){
		       
			     toLoad = "homeSubPages/"+$(this).attr('href')+'#loadContentWrapper';
			
		}
		if($(this).attr("href") == "explore.php" || $(this).attr("href") == "home.php"){
		       
			     toLoad = $(this).attr('href')+ '#loadContentWrapper';
				
		}
	
	    
		$('#loadContentWrapper').fadeOut('fast',loadContent);
		$('#load').remove();
		$('#wrapperLoad').append('<span id="load">LOADING...</span>');
		$('#load').fadeIn('normal');
		window.location.hash = $(this).attr('href').substr(0,$(this).attr('href').length-4);
		function loadContent() {
			$('#loadContentWrapper').load(toLoad,'',showNewContent())
		}
		function showNewContent() {
			$('#loadContentWrapper').fadeIn('normal',hideLoader());
		}
		function hideLoader() {
			$('#load').fadeOut('normal');
		}
		
		
	
		    return false;
		
});


});

