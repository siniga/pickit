// JavaScript Document

 $(document).ready( function() {
    
	
	     // When site loaded, load the Popupbox First
    // loadPopupBox();
        $('.cust-like-txt .btn-success').on("click", function() {            
             loadPopupBox();
        });
        $('#popupBoxClose').click( function() {            
            unloadPopupBox();
        });
      

        function unloadPopupBox() {    // TO Unload the Popupbox
            $('#popup_box,#popupBgbox').fadeOut("slow");
            $("#container").css({ // this is just for style        
                "opacity": "1"  
            }); 
        }    
        
        function loadPopupBox() {    // To Load the Popupbox
            $('#popup_box,#popupBgbox').fadeIn("slow");
            $("#container").css({ // this is just for style
                "opacity": "0.3"  
            });         
        }        
    });